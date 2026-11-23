import {
  CvrEngineRow,
  DashboardSummary,
  GlobalParameters,
  SheetId,
} from '../../types/cvr';
import {
  formatCompactCurrency,
  formatCurrency,
  formatPercent,
} from '../../utils/format';
import { InlineDataBar } from '../InlineDataBar';
import { ControlStatusBadge } from '../StatusBadge';

interface DashboardViewProps {
  summary: DashboardSummary;
  engineRows: CvrEngineRow[];
  parameters: GlobalParameters;
  onNavigate: (sheet: SheetId) => void;
}

export function DashboardView({
  summary,
  engineRows,
  parameters,
  onNavigate,
}: DashboardViewProps) {
  const sym = parameters.currencySymbol;
  const maxBarProfit = Math.max(
    1,
    ...engineRows.map((r) =>
      Math.max(Math.abs(r.bookPaperProfit), Math.abs(r.cvrRealForecastProfit))
    )
  );
  const maxExceptionEac = Math.max(
    1,
    ...summary.driftExceptionRows.map((r) => r.forecastEac)
  );

  return (
    <section className="view-animate space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="page-title">05 Paper vs. Real Profit &amp; Margin Drift Dashboard</h1>
          <p className="text-[13px] text-[var(--muted)] mt-1.5 max-w-3xl">
            Executive CVR reconciliation as of <strong>{parameters.cutoffDate}</strong>. Strips out unapproved variation inflation, unposted site accruals, and remaining Cost to Complete (CTC) to surface true completion margin before handover losses materialize.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('cvr-engine')}
            className="btn-secondary"
          >
            Inspect Full Engine (04)
          </button>
          <button
            type="button"
            onClick={() => onNavigate('directives')}
            className="btn-primary"
          >
            Open Action Directives (06)
          </button>
        </div>
      </div>

      {/* 4 Hero KPI Cards (C5, C6, C7, C8) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <article className="kpi-card">
          <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
            Total Book Paper Profit
          </div>
          <div
            data-testid="kpi-book-profit"
            className="kpi-number mt-2.5 text-[var(--brand)]"
          >
            {formatCompactCurrency(summary.totalBookPaperProfit, sym)}
          </div>
          <div className="text-[12px] text-[var(--muted)] mt-2 num-tabular">
            Exact: {formatCurrency(summary.totalBookPaperProfit, sym)}
          </div>
          <div className="text-[11.5px] text-[var(--muted)] mt-1">
            Ledger invoices only · VOs at {formatPercent(parameters.bookInflatedVoRate)}
          </div>
        </article>

        <article className="kpi-card">
          <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
            Total CVR Real Forecast Profit
          </div>
          <div
            data-testid="kpi-real-profit"
            className={`kpi-number mt-2.5 ${
              summary.isMarginBelowTarget ? 'text-[var(--danger)]' : 'text-[var(--accent)]'
            }`}
          >
            {formatCompactCurrency(summary.totalCvrRealForecastProfit, sym)}
          </div>
          <div className="text-[12px] text-[var(--muted)] mt-2 num-tabular">
            Exact: {formatCurrency(summary.totalCvrRealForecastProfit, sym)}
          </div>
          <div
            className={`text-[11.5px] mt-1 num-tabular ${
              summary.isMarginBelowTarget
                ? 'text-[var(--danger)] font-medium'
                : 'text-[var(--muted)]'
            }`}
          >
            Real Gross Margin: {formatPercent(summary.overallRealGrossMargin)} vs{' '}
            {formatPercent(parameters.targetGrossMargin)} target
          </div>
        </article>

        <article className="kpi-card">
          <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
            Profit Overstatement Removed
          </div>
          <div
            data-testid="kpi-overstatement"
            className="kpi-number mt-2.5 text-[var(--accent)]"
          >
            {formatCompactCurrency(summary.profitOverstatementRemoved, sym)}
          </div>
          <div className="text-[12px] text-[var(--muted)] mt-2 num-tabular">
            Exact: {formatCurrency(summary.profitOverstatementRemoved, sym)}
          </div>
          <div className="text-[11.5px] text-[var(--muted)] mt-1">
            Accruals + CTC + unapproved VO haircut
          </div>
        </article>

        <article className="kpi-card">
          <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
            Unposted Accrual Omission Rate
          </div>
          <div
            data-testid="kpi-accrual-rate"
            className={`kpi-number mt-2.5 ${
              summary.isAccrualLagging ? 'text-[var(--danger)]' : 'text-[var(--brand)]'
            }`}
          >
            {formatPercent(summary.accrualOmissionRate)}
          </div>
          <div className="text-[12px] text-[var(--muted)] mt-2 num-tabular">
            {formatCompactCurrency(summary.totalSiteAccruals, sym)} /{' '}
            {formatCompactCurrency(summary.totalActualIncurredCost, sym)} incurred
          </div>
          <div
            className={`text-[11.5px] mt-1 ${
              summary.isAccrualLagging
                ? 'text-[var(--danger)] font-medium'
                : 'text-[var(--muted)]'
            }`}
          >
            {summary.isAccrualLagging
              ? `Action required: exceeds ${formatPercent(parameters.accrualWarnThreshold)} limit`
              : `Within ${formatPercent(parameters.accrualWarnThreshold)} threshold`}
          </div>
        </article>
      </div>

      {/* Executive Insight & Dual-Dimension Diagnostic Callout (D7 & C8) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="insight-block">
          <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--accent)] mb-1">
            Executive Overstatement Finding (Cell D7)
          </div>
          <p className="text-[13px] text-[var(--brand)] leading-relaxed">
            {summary.overstatementWarningText}
          </p>
        </div>

        <div
          className={
            summary.isAccrualLagging || summary.isMarginBelowTarget
              ? 'insight-block-anomaly'
              : 'insight-block'
          }
        >
          <div
            className={`text-[11px] font-semibold uppercase tracking-[0.06em] mb-1 ${
              summary.isAccrualLagging || summary.isMarginBelowTarget
                ? 'text-[var(--danger)]'
                : 'text-[var(--accent)]'
            }`}
          >
            Project Financial &amp; Commercial Health Diagnosis (Cell C8)
          </div>
          <p className="text-[13px] text-[var(--brand)] leading-relaxed">
            {summary.combinedHealthDiagnosis}
          </p>
        </div>
      </div>

      {/* Primary Table + Secondary Supporting Visual Comparison */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Primary: Auto-Sorted Margin Drift Exception Pivot Table (A12#) */}
        <div className="xl:col-span-8 space-y-3 min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h2 className="section-title">
                Package-Level Margin Drift Exception Matrix
              </h2>
              <p className="text-[12px] text-[var(--muted)] mt-0.5">
                Auto-filtered for non-controlled packages and sorted from worst margin erosion to lightest.
              </p>
            </div>
            <span className="text-[12px] text-[var(--muted)] num-tabular">
              {summary.driftExceptionRows.length} of {engineRows.length} packages flagged
            </span>
          </div>

          {summary.driftExceptionRows.length === 0 ? (
            <div className="surface-card p-8 text-center">
              <div className="section-title text-[18px] text-[var(--brand)]">
                All Work Packages Are Controlled
              </div>
              <p className="text-[13px] text-[var(--muted)] mt-1">
                All work packages are currently within control thresholds. No margin drift warnings triggered.
              </p>
            </div>
          ) : (
            <div className="surface-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th className="text-left">Pkg</th>
                      <th className="text-left">Work Package</th>
                      <th className="text-right">Target</th>
                      <th className="text-right">CVR %</th>
                      <th className="text-right">Drift</th>
                      <th className="text-right">EAC</th>
                      <th className="text-right">CVR Profit</th>
                      <th className="text-left">Control Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summary.driftExceptionRows.map((row) => {
                      const isRed =
                        row.controlStatus === 'Red Alert — Freeze Procurement';
                      return (
                        <tr
                          key={row.packageCode}
                          className={isRed ? 'anomaly-row' : ''}
                        >
                          <td className="font-mono text-[12px] font-semibold text-[var(--brand)] whitespace-nowrap">
                            {row.packageCode}
                          </td>
                          <td className="font-medium text-[var(--brand)] leading-snug max-w-[165px]">
                            {row.packageName}
                          </td>
                          <td className="text-right num-tabular text-[var(--muted)] whitespace-nowrap">
                            {formatPercent(row.targetMarginPct)}
                          </td>
                          <td
                            className={`text-right num-tabular font-medium whitespace-nowrap ${
                              isRed ? 'text-[var(--danger)]' : 'text-[var(--brand)]'
                            }`}
                          >
                            {formatPercent(row.cvrRealMarginPct)}
                          </td>
                          <td
                            className={`text-right num-tabular font-semibold whitespace-nowrap ${
                              isRed ? 'text-[var(--danger)]' : 'text-[var(--accent)]'
                            }`}
                          >
                            {formatPercent(row.marginDrift, true)}
                          </td>
                          <td className="text-right w-[104px]">
                            <InlineDataBar
                              value={row.forecastEac}
                              max={maxExceptionEac}
                              formattedLabel={formatCompactCurrency(
                                row.forecastEac,
                                sym
                              )}
                              isAnomaly={isRed}
                            />
                          </td>
                          <td
                            className={`text-right num-tabular font-semibold whitespace-nowrap ${
                              isRed ? 'text-[var(--danger)]' : 'text-[var(--brand)]'
                            }`}
                          >
                            {formatCompactCurrency(row.cvrRealForecastProfit, sym)}
                          </td>
                          <td className="whitespace-nowrap">
                            <ControlStatusBadge
                              status={row.controlStatus}
                              onClick={() => onNavigate('directives')}
                              title="Open procurement & claim directives"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Secondary Supporting Visual: Book Paper Profit vs CVR Real Profit by Package */}
        <div className="xl:col-span-4 space-y-3">
          <div>
            <h2 className="section-title">Paper vs. Real Profit by Package</h2>
            <p className="text-[12px] text-[var(--muted)] mt-0.5">
              Compares inflated ledger profit against full-scope CVR forecast profit.
            </p>
          </div>

          <div className="surface-card p-5 space-y-4">
            <div className="flex items-center gap-5 text-[11.5px] text-[var(--muted)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block w-3 h-2 rounded-[2px] bg-[var(--brand-12)]" />
                Book Paper Profit
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block w-3 h-2 rounded-[2px] bg-[var(--accent)]" />
                CVR Real Profit
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block w-3 h-2 rounded-[2px] bg-[var(--danger)]" />
                Forecast Loss
              </span>
            </div>

            <div className="space-y-3.5">
              {engineRows.map((row) => {
                const bookPct = Math.min(
                  100,
                  (Math.abs(row.bookPaperProfit) / maxBarProfit) * 100
                );
                const realPct = Math.min(
                  100,
                  (Math.abs(row.cvrRealForecastProfit) / maxBarProfit) * 100
                );
                const isLoss = row.cvrRealForecastProfit < 0;
                return (
                  <div key={row.packageCode} className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2 text-[12px]">
                      <span className="font-mono font-semibold text-[var(--brand)]">
                        {row.packageCode}
                      </span>
                      <span className="num-tabular text-[11.5px] text-[var(--muted)]">
                        Paper {formatCompactCurrency(row.bookPaperProfit, sym)} →{' '}
                        <strong
                          className={
                            isLoss
                              ? 'text-[var(--danger)]'
                              : 'text-[var(--brand)]'
                          }
                        >
                          Real {formatCompactCurrency(row.cvrRealForecastProfit, sym)}
                        </strong>
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="w-full h-[6px] rounded-[var(--radius-pill)] bg-[var(--brand-4)] overflow-hidden">
                        <div
                          className="h-full rounded-[var(--radius-pill)] bg-[var(--brand-12)] transition-[width] duration-250"
                          style={{ width: `${bookPct.toFixed(1)}%` }}
                        />
                      </div>
                      <div className="w-full h-[6px] rounded-[var(--radius-pill)] bg-[var(--brand-4)] overflow-hidden">
                        <div
                          className={`h-full rounded-[var(--radius-pill)] transition-[width] duration-250 ${
                            isLoss ? 'bg-[var(--danger)]' : 'bg-[var(--accent)]'
                          }`}
                          style={{ width: `${realPct.toFixed(1)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
