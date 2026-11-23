export function formatCurrency(value: number, symbol: string): string {
  const safeVal = Number.isFinite(value) ? value : 0;
  const absFormatted = Math.abs(safeVal).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const prefix = symbol || '$';
  return safeVal < 0 ? `-${prefix}${absFormatted}` : `${prefix}${absFormatted}`;
}

export function formatCompactCurrency(value: number, symbol: string): string {
  const safeVal = Number.isFinite(value) ? value : 0;
  const abs = Math.abs(safeVal);
  const prefix = symbol || '$';
  const sign = safeVal < 0 ? '-' : '';
  if (abs >= 1_000_000) {
    return `${sign}${prefix}${(abs / 1_000_000).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}M`;
  }
  if (abs >= 1_000) {
    return `${sign}${prefix}${(abs / 1_000).toLocaleString('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}K`;
  }
  return formatCurrency(safeVal, symbol);
}

export function formatPercent(value: number, showPlus = false): string {
  const safeVal = Number.isFinite(value) ? value : 0;
  const pct = (safeVal * 100).toLocaleString('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  if (showPlus && safeVal > 0) {
    return `+${pct}%`;
  }
  return `${pct}%`;
}

export function formatSavedTimestamp(isoString: string | null): string {
  if (!isoString) return 'Not saved yet';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return 'Not saved yet';
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });
}

export function formatDateForFilename(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
