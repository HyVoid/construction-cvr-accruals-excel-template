import { useState, type ChangeEvent } from 'react';
import { Download, Upload, X } from 'lucide-react';
import { AccrualCtcRow, PostedCostRow, ValueVoRow } from '../../types/cvr';
import { CSV_TEMPLATES, CsvTargetSheet, parseCsvForSheet } from '../../utils/csvAndBackup';

interface CsvImportModalProps {
  isOpen: boolean;
  defaultTarget: CsvTargetSheet;
  onClose: () => void;
  onCommit: (
    target: CsvTargetSheet,
    mode: 'append' | 'replace',
    rows: Array<ValueVoRow | PostedCostRow | AccrualCtcRow>
  ) => void;
}

const SHEET_OPTIONS: Array<{ value: CsvTargetSheet; label: string }> = [
  { value: 'value-vo', label: '01 Value & Variations (Value & VOs)' },
  { value: 'posted-costs', label: '02 Financial Posted Costs' },
  { value: 'accruals-ctc', label: '03 Site Accruals & CTC Assessment' },
];

export function CsvImportModal({
  isOpen,
  defaultTarget,
  onClose,
  onCommit,
}: CsvImportModalProps) {
  const [target, setTarget] = useState<CsvTargetSheet>(defaultTarget);
  const [mode, setMode] = useState<'append' | 'replace'>('append');
  const [csvText, setCsvText] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [previewCount, setPreviewCount] = useState<number | null>(null);
  const [parsedRows, setParsedRows] = useState<Array<ValueVoRow | PostedCostRow | AccrualCtcRow>>([]);

  if (!isOpen) return null;

  const template = CSV_TEMPLATES[target];

  const handleTargetChange = (nextTarget: CsvTargetSheet) => {
    setTarget(nextTarget);
    setErrors([]);
    setPreviewCount(null);
    setParsedRows([]);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const content = typeof reader.result === 'string' ? reader.result : '';
      setCsvText(content);
      const result = parseCsvForSheet(target, content);
      setErrors(result.errors);
      setParsedRows(result.rows);
      setPreviewCount(result.errors.length === 0 ? result.rows.length : null);
    };
    reader.readAsText(file);
  };

  const handleValidate = () => {
    const result = parseCsvForSheet(target, csvText);
    setErrors(result.errors);
    setParsedRows(result.rows);
    setPreviewCount(result.errors.length === 0 ? result.rows.length : null);
  };

  const handleLoadSample = () => {
    setCsvText(template.sample);
    const result = parseCsvForSheet(target, template.sample);
    setErrors(result.errors);
    setParsedRows(result.rows);
    setPreviewCount(result.errors.length === 0 ? result.rows.length : null);
  };

  const handleDownloadTemplate = () => {
    const blob = new Blob([template.sample], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `theseus-cvr-template-${target}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const result = parseCsvForSheet(target, csvText);
    if (result.errors.length > 0 || result.rows.length === 0) {
      setErrors(result.errors);
      setPreviewCount(null);
      setParsedRows([]);
      return;
    }
    onCommit(target, mode, result.rows);
    setCsvText('');
    setErrors([]);
    setPreviewCount(null);
    setParsedRows([]);
    onClose();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="csv-modal-title">
      <div className="modal-panel p-6">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <h2 id="csv-modal-title" className="section-title text-[22px]">
              Bulk CSV Import
            </h2>
            <p className="text-[12.5px] text-[var(--muted)] mt-1">
              Import structured CSV records directly into any source worksheet. All downstream CVR formulas recalculate immediately.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close CSV import dialog"
            className="btn-secondary p-1.5"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="csv-target-select" className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--brand)] mb-1.5">
              Target Worksheet
            </label>
            <select
              id="csv-target-select"
              value={target}
              onChange={(e) => handleTargetChange(e.target.value as CsvTargetSheet)}
              className="cell-input"
            >
              {SHEET_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="csv-mode-select" className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--brand)] mb-1.5">
              Import Mode
            </label>
            <select
              id="csv-mode-select"
              value={mode}
              onChange={(e) => setMode(e.target.value as 'append' | 'replace')}
              className="cell-input"
            >
              <option value="append">Append to existing rows</option>
              <option value="replace">Replace all existing rows in sheet</option>
            </select>
          </div>
        </div>

        <div className="insight-block mb-4 text-[12px]">
          <div className="font-semibold text-[var(--brand)] mb-1">Expected Columns ({template.headers.length})</div>
          <div className="text-[var(--muted)] break-words">{template.headers.join(', ')}</div>
          <div className="flex flex-wrap items-center gap-2 mt-2.5">
            <button type="button" onClick={handleLoadSample} className="btn-secondary text-[12px]">
              Load Sample CSV
            </button>
            <button type="button" onClick={handleDownloadTemplate} className="btn-secondary text-[12px]">
              <Download size={13} aria-hidden="true" />
              <span>Download CSV Template</span>
            </button>
            <label className="btn-secondary text-[12px] cursor-pointer">
              <Upload size={13} aria-hidden="true" />
              <span>Upload .csv File</span>
              <input
                type="file"
                accept=".csv,text/csv"
                onChange={handleFileUpload}
                className="hidden"
                aria-label="Upload CSV file"
              />
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="csv-textarea" className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--brand)] mb-1.5">
            CSV Content (Paste or Upload)
          </label>
          <textarea
            id="csv-textarea"
            rows={7}
            value={csvText}
            onChange={(e) => {
              setCsvText(e.target.value);
              setErrors([]);
              setPreviewCount(null);
            }}
            placeholder="Paste CSV rows here (header row optional)..."
            className="cell-input font-mono text-[12px] leading-relaxed"
          />
        </div>

        {errors.length > 0 && (
          <div className="insight-block-anomaly mb-4" role="alert">
            <div className="font-semibold text-[var(--danger)] text-[12.5px] mb-1">
              CSV Validation Failed ({errors.length} {errors.length === 1 ? 'issue' : 'issues'})
            </div>
            <ul className="list-disc pl-5 text-[12px] text-[var(--danger)] space-y-0.5 max-h-36 overflow-y-auto">
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {previewCount !== null && errors.length === 0 && (
          <div className="insight-block mb-4 text-[12.5px] text-[var(--brand)]">
            Validation passed: <strong>{previewCount}</strong> {previewCount === 1 ? 'row is' : 'rows are'} ready to {mode} into{' '}
            <strong>{SHEET_OPTIONS.find((s) => s.value === target)?.label}</strong>.
          </div>
        )}

        <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[var(--border)]">
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button type="button" onClick={handleValidate} className="btn-secondary">
            Validate CSV
          </button>
          <button
            type="button"
            onClick={handleImport}
            disabled={csvText.trim() === ''}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Import {parsedRows.length > 0 ? `${parsedRows.length} Rows` : 'CSV'}
          </button>
        </div>
      </div>
    </div>
  );
}
