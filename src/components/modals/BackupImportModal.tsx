import { useState, type ChangeEvent } from 'react';
import { Upload, X } from 'lucide-react';
import { WorkbookState } from '../../types/cvr';
import { validateAndParseBackup } from '../../utils/csvAndBackup';

interface BackupImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestore: (state: WorkbookState) => void;
}

export function BackupImportModal({ isOpen, onClose, onRestore }: BackupImportModalProps) {
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const content = typeof reader.result === 'string' ? reader.result : '';
      setJsonText(content);
      const check = validateAndParseBackup(content);
      setError(check.valid ? null : check.error);
    };
    reader.readAsText(file);
  };

  const handleRestore = () => {
    const result = validateAndParseBackup(jsonText);
    if (!result.valid) {
      setError(result.error);
      return;
    }
    onRestore(result.state);
    setJsonText('');
    setError(null);
    setFileName(null);
    onClose();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="backup-modal-title">
      <div className="modal-panel p-6">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <h2 id="backup-modal-title" className="section-title text-[22px]">
              Import JSON Backup
            </h2>
            <p className="text-[12.5px] text-[var(--muted)] mt-1">
              Restore a previously exported workbook snapshot. All parameters and source sheets are validated before replacing local data.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close backup import dialog"
            className="btn-secondary p-1.5"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="mb-4 flex items-center gap-3">
          <label className="btn-secondary cursor-pointer">
            <Upload size={14} aria-hidden="true" />
            <span>Select Backup .json File</span>
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleFileChange}
              className="hidden"
              aria-label="Select JSON backup file"
            />
          </label>
          {fileName && (
            <span className="text-[12px] text-[var(--muted)] truncate">
              Selected: <strong className="text-[var(--brand)]">{fileName}</strong>
            </span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="backup-json-textarea" className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--brand)] mb-1.5">
            Backup JSON Payload
          </label>
          <textarea
            id="backup-json-textarea"
            rows={8}
            value={jsonText}
            onChange={(e) => {
              setJsonText(e.target.value);
              setError(null);
            }}
            placeholder='{"schemaVersion": 1, "data": { ... }}'
            className="cell-input font-mono text-[12px]"
          />
        </div>

        {error && (
          <div className="insight-block-anomaly mb-4 text-[12.5px] text-[var(--danger)]" role="alert">
            <strong>Validation Error:</strong> {error}
          </div>
        )}

        <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[var(--border)]">
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button
            type="button"
            onClick={handleRestore}
            disabled={jsonText.trim() === ''}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Validate &amp; Restore Backup
          </button>
        </div>
      </div>
    </div>
  );
}
