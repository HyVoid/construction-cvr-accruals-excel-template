import { AlertTriangle, X } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ResetConfirmModal({ isOpen, onCancel, onConfirm }: ResetConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="reset-modal-title">
      <div className="modal-panel max-w-[460px] p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <AlertTriangle size={20} className="text-[var(--danger)] shrink-0" aria-hidden="true" />
            <h2 id="reset-modal-title" className="section-title text-[21px]">
              Reset Workbook Data?
            </h2>
          </div>
          <button
            type="button"
            onClick={onCancel}
            aria-label="Close reset confirmation dialog"
            className="btn-secondary p-1.5"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        <p className="text-[13px] text-[var(--body-text)] leading-relaxed mb-5">
          This action restores all global parameters, work package valuations, posted ledger costs, and site accruals to the initial baseline dataset. Any unsaved changes not exported as a JSON backup will be permanently overwritten in your browser&apos;s localStorage.
        </p>

        <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[var(--border)]">
          <button type="button" onClick={onCancel} className="btn-secondary">
            Cancel
          </button>
          <button type="button" onClick={onConfirm} className="btn-danger">
            Confirm Reset Data
          </button>
        </div>
      </div>
    </div>
  );
}
