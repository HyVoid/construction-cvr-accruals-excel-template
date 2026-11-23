interface InlineDataBarProps {
  value: number;
  max: number;
  formattedLabel: string;
  isAnomaly?: boolean;
  highlightAccent?: boolean;
}

export function InlineDataBar({
  value,
  max,
  formattedLabel,
  isAnomaly = false,
  highlightAccent = false,
}: InlineDataBarProps) {
  const safeMax = max > 0 ? max : 1;
  const pct = Math.max(0, Math.min(100, (Math.abs(value) / safeMax) * 100));

  return (
    <div className="min-w-[92px] text-right">
      <div
        className={`num-tabular font-medium ${
          isAnomaly
            ? 'text-[var(--danger)]'
            : highlightAccent
              ? 'text-[var(--accent)]'
              : 'text-[var(--brand)]'
        }`}
      >
        {formattedLabel}
      </div>
      <div className="databar-track" aria-hidden="true">
        <div
          className={isAnomaly ? 'databar-fill-anomaly' : 'databar-fill'}
          style={{ width: `${pct.toFixed(1)}%` }}
        />
      </div>
    </div>
  );
}
