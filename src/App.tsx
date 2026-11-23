import { useEffect, useMemo, useState } from 'react';
import { DataToolbar } from './components/DataToolbar';
import { SHEET_TABS, TopNav } from './components/TopNav';
import { BackupImportModal } from './components/modals/BackupImportModal';
import { CsvImportModal } from './components/modals/CsvImportModal';
import { ResetConfirmModal } from './components/modals/ResetConfirmModal';
import { AccrualsCtcView } from './components/views/AccrualsCtcView';
import { CvrEngineView } from './components/views/CvrEngineView';
import { DashboardView } from './components/views/DashboardView';
import { DirectivesView } from './components/views/DirectivesView';
import { ParametersView } from './components/views/ParametersView';
import { PostedCostsView } from './components/views/PostedCostsView';
import { ValueVoView } from './components/views/ValueVoView';
import { cloneInitialState } from './data/seedData';
import { evaluateWorkbook } from './engine/cvrEngine';
import {
  AccrualCtcRow,
  GlobalParameters,
  PostedCostRow,
  SheetId,
  ValueVoRow,
  WorkbookState,
} from './types/cvr';
import {
  CsvTargetSheet,
  serializeBackup,
  validateAndParseBackup,
} from './utils/csvAndBackup';
import { formatDateForFilename } from './utils/format';

const STORAGE_KEY = 'theseus_cvr_workbook_v1';
const SAVED_AT_KEY = 'theseus_cvr_saved_at_v1';

const VALID_SHEET_IDS = new Set<SheetId>(SHEET_TABS.map((t) => t.id));

function readSheetFromHash(): SheetId {
  if (typeof window === 'undefined') return 'dashboard';
  const raw = window.location.hash.replace(/^#\/?/, '') as SheetId;
  return VALID_SHEET_IDS.has(raw) ? raw : 'dashboard';
}

function loadInitialWorkbook(): { state: WorkbookState; savedAt: string } {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = validateAndParseBackup(raw);
      if (parsed.valid) {
        const storedTime =
          window.localStorage.getItem(SAVED_AT_KEY) || new Date().toISOString();
        return { state: parsed.state, savedAt: storedTime };
      }
    }
  } catch {
    // Fallback to initial deterministic baseline if storage is unavailable or corrupted
  }
  const initial = cloneInitialState();
  const now = new Date().toISOString();
  try {
    window.localStorage.setItem(STORAGE_KEY, serializeBackup(initial));
    window.localStorage.setItem(SAVED_AT_KEY, now);
  } catch {
    // Ignore storage quota errors in restricted browsers
  }
  return { state: initial, savedAt: now };
}

export default function App() {
  const initialLoaded = useMemo(() => loadInitialWorkbook(), []);
  const [workbook, setWorkbook] = useState<WorkbookState>(initialLoaded.state);
  const [lastSavedAt, setLastSavedAt] = useState<string>(initialLoaded.savedAt);
  const [activeSheet, setActiveSheet] = useState<SheetId>(() => readSheetFromHash());

  const [csvModalOpen, setCsvModalOpen] = useState(false);
  const [backupModalOpen, setBackupModalOpen] = useState(false);
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  // Sync hash navigation without BrowserRouter (safe for subpath deployment)
  useEffect(() => {
    const onHashChange = () => {
      setActiveSheet(readSheetFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleSelectSheet = (sheet: SheetId) => {
    setActiveSheet(sheet);
    if (window.location.hash !== `#${sheet}`) {
      window.location.hash = `#${sheet}`;
    }
  };

  // Persist every workbook state change automatically to localStorage
  const commitWorkbookChange = (
    updater: (prev: WorkbookState) => WorkbookState,
    feedback?: string
  ) => {
    setWorkbook((prev) => {
      const next = updater(prev);
      const now = new Date().toISOString();
      try {
        window.localStorage.setItem(STORAGE_KEY, serializeBackup(next));
        window.localStorage.setItem(SAVED_AT_KEY, now);
      } catch {
        // Ignore storage write errors
      }
      setLastSavedAt(now);
      return next;
    });
    if (feedback) {
      setNotice(feedback);
    }
  };

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 4000);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const evaluated = useMemo(() => evaluateWorkbook(workbook), [workbook]);

  const knownPackageCodes = useMemo(() => {
    const set = new Set<string>();
    workbook.valueVos.forEach((r) => {
      if (r.packageCode.trim()) set.add(r.packageCode.trim());
    });
    return Array.from(set);
  }, [workbook.valueVos]);

  const handleUpdateParameters = (updated: GlobalParameters) => {
    commitWorkbookChange((prev) => ({ ...prev, parameters: updated }));
  };

  // Sheet 01 handlers
  const handleUpdateValueVo = (id: string, patch: Partial<ValueVoRow>) => {
    commitWorkbookChange((prev) => ({
      ...prev,
      valueVos: prev.valueVos.map((row) =>
        row.id === id ? { ...row, ...patch } : row
      ),
    }));
  };

  const handleAddValueVo = () => {
    const nextIdx = workbook.valueVos.length + 1;
    const code = `PKG-${String(nextIdx).padStart(2, '0')}`;
    const newRow: ValueVoRow = {
      id: `vo-${Date.now()}`,
      packageCode: code,
      packageName: 'New Subcontract Work Package',
      subcontractor: 'TBD Subcontractor',
      budgetRevenue: 500000,
      targetCost: 430000,
      certifiedValue: 0,
      valuationDate: workbook.parameters.cutoffDate,
      pendingVoClaimed: 0,
      voConfidence: 'Grade B',
    };
    commitWorkbookChange(
      (prev) => ({ ...prev, valueVos: [...prev.valueVos, newRow] }),
      `Added work package ${code} to 01 Value & Variations.`
    );
  };

  const handleDeleteValueVo = (id: string) => {
    commitWorkbookChange((prev) => ({
      ...prev,
      valueVos: prev.valueVos.filter((r) => r.id !== id),
    }));
  };

  // Sheet 02 handlers
  const handleUpdatePostedCost = (id: string, patch: Partial<PostedCostRow>) => {
    commitWorkbookChange((prev) => ({
      ...prev,
      postedCosts: prev.postedCosts.map((row) =>
        row.id === id ? { ...row, ...patch } : row
      ),
    }));
  };

  const handleAddPostedCost = () => {
    const nextNum = 1100 + workbook.postedCosts.length + 1;
    const newRow: PostedCostRow = {
      id: `pc-${Date.now()}`,
      voucherNo: `GL-2026-${nextNum}`,
      invoicePostingDate: workbook.parameters.cutoffDate,
      actualIncurredDate: workbook.parameters.cutoffDate,
      packageCode: knownPackageCodes[0] || 'PKG-01',
      costCategory: 'Subcontract Progress',
      postedAmount: 0,
    };
    commitWorkbookChange(
      (prev) => ({ ...prev, postedCosts: [...prev.postedCosts, newRow] }),
      `Added voucher ${newRow.voucherNo} to 02 Financial Posted Costs.`
    );
  };

  const handleDeletePostedCost = (id: string) => {
    commitWorkbookChange((prev) => ({
      ...prev,
      postedCosts: prev.postedCosts.filter((r) => r.id !== id),
    }));
  };

  // Sheet 03 handlers
  const handleUpdateAccrual = (id: string, patch: Partial<AccrualCtcRow>) => {
    commitWorkbookChange((prev) => ({
      ...prev,
      accrualsCtc: prev.accrualsCtc.map((row) =>
        row.id === id ? { ...row, ...patch } : row
      ),
    }));
  };

  const handleAddAccrual = () => {
    const nextIdx = workbook.accrualsCtc.length + 1;
    const newRow: AccrualCtcRow = {
      id: `ac-${Date.now()}`,
      accrualDocNo: `ACR-2026-${String(nextIdx).padStart(2, '0')}`,
      packageCode: knownPackageCodes[0] || 'PKG-01',
      incurredDate: workbook.parameters.cutoffDate,
      unbilledPlantHire: 0,
      unsettledSiteLabor: 0,
      qsSubcontractVariance: 0,
      latestCtc: 0,
    };
    commitWorkbookChange(
      (prev) => ({ ...prev, accrualsCtc: [...prev.accrualsCtc, newRow] }),
      `Added accrual sheet ${newRow.accrualDocNo} to 03 Site Accruals & CTC.`
    );
  };

  const handleDeleteAccrual = (id: string) => {
    commitWorkbookChange((prev) => ({
      ...prev,
      accrualsCtc: prev.accrualsCtc.filter((r) => r.id !== id),
    }));
  };

  // Backup / CSV / Reset handlers
  const handleExportBackup = () => {
    const content = serializeBackup(workbook);
    const blob = new Blob([content], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `construction-cvr-accruals-backup-${formatDateForFilename()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setNotice('Exported complete JSON workbook backup.');
  };

  const handleRestoreBackup = (restored: WorkbookState) => {
    commitWorkbookChange(
      () => restored,
      'Backup validated and restored across all workbook sheets.'
    );
  };

  const handleCommitCsv = (
    target: CsvTargetSheet,
    mode: 'append' | 'replace',
    rows: Array<ValueVoRow | PostedCostRow | AccrualCtcRow>
  ) => {
    commitWorkbookChange((prev) => {
      if (target === 'value-vo') {
        const typed = rows as ValueVoRow[];
        return {
          ...prev,
          valueVos: mode === 'replace' ? typed : [...prev.valueVos, ...typed],
        };
      }
      if (target === 'posted-costs') {
        const typed = rows as PostedCostRow[];
        return {
          ...prev,
          postedCosts: mode === 'replace' ? typed : [...prev.postedCosts, ...typed],
        };
      }
      const typed = rows as AccrualCtcRow[];
      return {
        ...prev,
        accrualsCtc: mode === 'replace' ? typed : [...prev.accrualsCtc, ...typed],
      };
    }, `Imported ${rows.length} CSV rows (${mode}) and recalculated all CVR sheets.`);
    handleSelectSheet(target);
  };

  const handleConfirmReset = () => {
    const baseline = cloneInitialState();
    commitWorkbookChange(
      () => baseline,
      'Workbook reset to initial baseline dataset.'
    );
    setResetModalOpen(false);
  };

  const defaultCsvTarget: CsvTargetSheet =
    activeSheet === 'value-vo' ||
    activeSheet === 'posted-costs' ||
    activeSheet === 'accruals-ctc'
      ? activeSheet
      : 'value-vo';

  const activeDirectiveCount =
    evaluated.directives.claimOrders.length +
    evaluated.directives.freezeOrders.length;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--body-text)]">
      <TopNav
        activeSheet={activeSheet}
        onSelectSheet={handleSelectSheet}
        alertCount={activeDirectiveCount}
      />

      <DataToolbar
        lastSavedAt={lastSavedAt}
        cutoffDate={workbook.parameters.cutoffDate}
        currencySymbol={workbook.parameters.currencySymbol}
        onExportBackup={handleExportBackup}
        onOpenImportBackup={() => setBackupModalOpen(true)}
        onOpenCsvImport={() => setCsvModalOpen(true)}
        onOpenReset={() => setResetModalOpen(true)}
      />

      <main className="flex-1 app-container py-9">
        {notice && (
          <div
            role="status"
            aria-live="polite"
            className="insight-block mb-6 flex items-center justify-between gap-3"
          >
            <span className="text-[12.5px] font-medium text-[var(--brand)]">
              {notice}
            </span>
            <button
              type="button"
              onClick={() => setNotice(null)}
              className="btn-secondary text-[11.5px] py-0.5 px-2"
            >
              Dismiss
            </button>
          </div>
        )}

        {activeSheet === 'parameters' && (
          <ParametersView
            parameters={workbook.parameters}
            onChange={handleUpdateParameters}
          />
        )}

        {activeSheet === 'value-vo' && (
          <ValueVoView
            rows={workbook.valueVos}
            computedRows={evaluated.computedValueVos}
            parameters={workbook.parameters}
            onUpdateRow={handleUpdateValueVo}
            onAddRow={handleAddValueVo}
            onDeleteRow={handleDeleteValueVo}
            onOpenCsvImport={() => setCsvModalOpen(true)}
          />
        )}

        {activeSheet === 'posted-costs' && (
          <PostedCostsView
            computedRows={evaluated.computedPostedCosts}
            parameters={workbook.parameters}
            knownPackageCodes={knownPackageCodes}
            onUpdateRow={handleUpdatePostedCost}
            onAddRow={handleAddPostedCost}
            onDeleteRow={handleDeletePostedCost}
            onOpenCsvImport={() => setCsvModalOpen(true)}
          />
        )}

        {activeSheet === 'accruals-ctc' && (
          <AccrualsCtcView
            computedRows={evaluated.computedAccrualsCtc}
            parameters={workbook.parameters}
            knownPackageCodes={knownPackageCodes}
            onUpdateRow={handleUpdateAccrual}
            onAddRow={handleAddAccrual}
            onDeleteRow={handleDeleteAccrual}
            onOpenCsvImport={() => setCsvModalOpen(true)}
          />
        )}

        {activeSheet === 'cvr-engine' && (
          <CvrEngineView
            rows={evaluated.engineRows}
            parameters={workbook.parameters}
            onNavigate={handleSelectSheet}
          />
        )}

        {activeSheet === 'dashboard' && (
          <DashboardView
            summary={evaluated.dashboard}
            engineRows={evaluated.engineRows}
            parameters={workbook.parameters}
            onNavigate={handleSelectSheet}
          />
        )}

        {activeSheet === 'directives' && (
          <DirectivesView
            claimOrders={evaluated.directives.claimOrders}
            freezeOrders={evaluated.directives.freezeOrders}
            parameters={workbook.parameters}
          />
        )}
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-5 mt-8">
        <div className="app-container flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] text-[var(--muted)]">
          <span>
            All data in this tool is stored in your browser&apos;s localStorage. The page itself does not retain any user data.
          </span>
          <span className="font-editorial text-[13px] text-[var(--brand)]">
            Theseus Workshop
          </span>
        </div>
      </footer>

      <CsvImportModal
        isOpen={csvModalOpen}
        defaultTarget={defaultCsvTarget}
        onClose={() => setCsvModalOpen(false)}
        onCommit={handleCommitCsv}
      />

      <BackupImportModal
        isOpen={backupModalOpen}
        onClose={() => setBackupModalOpen(false)}
        onRestore={handleRestoreBackup}
      />

      <ResetConfirmModal
        isOpen={resetModalOpen}
        onCancel={() => setResetModalOpen(false)}
        onConfirm={handleConfirmReset}
      />
    </div>
  );
}
