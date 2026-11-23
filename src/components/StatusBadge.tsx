import { ControlStatus, CutoffStatus, VoConfidenceGrade } from '../types/cvr';

interface ControlStatusBadgeProps {
  status: ControlStatus;
  onClick?: () => void;
  title?: string;
}

export function ControlStatusBadge({ status, onClick, title }: ControlStatusBadgeProps) {
  let toneClass = 'status-neutral';
  if (status === 'Red Alert — Freeze Procurement') {
    toneClass = 'status-red';
  } else if (status === 'Yellow Warning — Margin Erosion') {
    toneClass = 'status-warning';
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        title={title || 'Inspect work package details'}
        className={`status-pill status-pill-interactive ${toneClass}`}
      >
        {status}
      </button>
    );
  }

  return <span className={`status-pill ${toneClass}`}>{status}</span>;
}

export function CutoffStatusBadge({ status }: { status: CutoffStatus }) {
  const isExcluded = status === 'Excluded (Post Cut-off)';
  return (
    <span className={`status-pill ${isExcluded ? 'status-red' : 'status-neutral'}`}>
      {status}
    </span>
  );
}

export function VoGradeBadge({ grade }: { grade: VoConfidenceGrade }) {
  const tone =
    grade === 'Grade C'
      ? 'status-red'
      : grade === 'Grade B'
        ? 'status-warning'
        : 'status-neutral';
  return <span className={`status-pill ${tone}`}>{grade}</span>;
}
