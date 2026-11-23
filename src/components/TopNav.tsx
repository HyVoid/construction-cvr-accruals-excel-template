import { SheetId } from '../types/cvr';

export interface SheetTabItem {
  id: SheetId;
  shortLabel: string;
  fullTitle: string;
}

export const SHEET_TABS: SheetTabItem[] = [
  { id: 'parameters', shortLabel: '00 Parameters', fullTitle: '00 Global Parameters' },
  { id: 'value-vo', shortLabel: '01 Value & VOs', fullTitle: '01 Value & Variations' },
  { id: 'posted-costs', shortLabel: '02 Posted Costs', fullTitle: '02 Financial Posted Costs' },
  { id: 'accruals-ctc', shortLabel: '03 Accruals & CTC', fullTitle: '03 Site Accruals & CTC' },
  { id: 'cvr-engine', shortLabel: '04 CVR Engine', fullTitle: '04 Package CVR Engine' },
  { id: 'dashboard', shortLabel: '05 Dashboard', fullTitle: '05 Profit & Drift Dashboard' },
  { id: 'directives', shortLabel: '06 Directives', fullTitle: '06 Claims & Freeze Orders' },
];

interface TopNavProps {
  activeSheet: SheetId;
  onSelectSheet: (sheet: SheetId) => void;
  alertCount: number;
}

export function TopNav({ activeSheet, onSelectSheet, alertCount }: TopNavProps) {
  return (
    <header className="top-nav">
      <div className="app-container h-full flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-3 min-w-0 shrink-0">
          <button
            type="button"
            onClick={() => onSelectSheet('dashboard')}
            className="font-editorial text-[20px] font-semibold tracking-[-0.02em] text-[var(--brand)] bg-transparent border-0 p-0 cursor-pointer whitespace-nowrap"
          >
            Theseus Workshop
          </button>
          <span
            className="hidden xl:inline-block text-[12px] text-[var(--muted)] whitespace-nowrap truncate max-w-[290px]"
            title="Monthly Construction CVR, Site Accruals & Margin Drift Reconciliation"
          >
            Construction CVR &amp; Accruals Reconciliation
          </span>
        </div>

        <nav
          aria-label="Workbook sheets"
          role="tablist"
          className="flex items-center overflow-x-auto no-scrollbar h-full"
        >
          {SHEET_TABS.map((tab) => {
            const isActive = activeSheet === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={tab.fullTitle}
                onClick={() => onSelectSheet(tab.id)}
                className={`nav-tab shrink-0 ${isActive ? 'nav-tab-active' : ''}`}
              >
                <span>{tab.shortLabel}</span>
                {tab.id === 'directives' && alertCount > 0 && (
                  <span
                    className="inline-flex items-center justify-center text-[10px] font-semibold px-1.5 py-0.5 rounded-[var(--radius-pill)] bg-[var(--danger-10)] text-[var(--danger)] num-tabular"
                    aria-label={`${alertCount} active directives`}
                  >
                    {alertCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
