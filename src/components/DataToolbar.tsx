import { Download, FileSpreadsheet, RotateCcw, Upload } from 'lucide-react';
import { formatSavedTimestamp } from '../utils/format';

interface DataToolbarProps {
  lastSavedAt: string | null;
  cutoffDate: string;
  currencySymbol: string;
  onExportBackup: () => void;
  onOpenImportBackup: () => void;
  onOpenCsvImport: () => void;
  onOpenReset: () => void;
}

export function DataToolbar({
  lastSavedAt,
  cutoffDate,
  currencySymbol,
  onExportBackup,
  onOpenImportBackup,
  onOpenCsvImport,
  onOpenReset,
}: DataToolbarProps) {
  return (
    <div className="no-print border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="app-container py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-[var(--muted)]">
          <span data-testid="last-saved-label" className="num-tabular">
            Last saved: <strong className="font-medium text-[var(--brand)]">{formatSavedTimestamp(lastSavedAt)}</strong>
          </span>
          <span aria-hidden="true">·</span>
          <span className="num-tabular">
            Cut-off Date: <strong className="font-medium text-[var(--brand)]">{cutoffDate}</strong>
          </span>
          <span aria-hidden="true">·</span>
          <span>
            Base Currency: <strong className="font-medium text-[var(--brand)]">{currencySymbol}</strong>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onOpenCsvImport}
            className="btn-secondary"
            aria-label="Bulk CSV Import"
          >
            <FileSpreadsheet size={14} aria-hidden="true" />
            <span>Bulk CSV Import</span>
          </button>
          <button
            type="button"
            onClick={onExportBackup}
            className="btn-secondary"
            aria-label="Export Backup"
          >
            <Download size={14} aria-hidden="true" />
            <span>Export Backup</span>
          </button>
          <button
            type="button"
            onClick={onOpenImportBackup}
            className="btn-secondary"
            aria-label="Import Backup"
          >
            <Upload size={14} aria-hidden="true" />
            <span>Import Backup</span>
          </button>
          <button
            type="button"
            onClick={onOpenReset}
            className="btn-secondary text-[var(--danger)]"
            aria-label="Reset Data"
          >
            <RotateCcw size={14} aria-hidden="true" />
            <span>Reset Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}
