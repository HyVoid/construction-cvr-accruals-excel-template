import { useState } from 'react';
import {
  ControlStatus,
  CvrEngineRow,
  GlobalParameters,
  SheetId,
} from '../../types/cvr';
import { formatCurrency, formatPercent } from '../../utils/format';
import { InlineDataBar } from '../InlineDataBar';
import { ControlStatusBadge } from '../StatusBadge';

interface CvrEngineViewProps {
  rows: CvrEngineRow[];
  parameters: GlobalParameters;
  onNavigate: (sheet: SheetId) => void;
}

export function CvrEngineView({ rows, parameters, onNavigate }: CvrEngineViewProps) {
  const [statusFilter, setStatusFilter] = useState<'ALL' | ControlStatus>('ALL');
  const [viewMode, setViewMode] = useState<'summary' | 'full'>('summary');
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);

  const filtered = rows.filter(
    (r) => statusFilter === 'ALL' || r.controlStatus === statusFilter
  );

  const maxMagnitude = Math.max(
    1,
    ...rows.map((r) => Math.max(r.cvrRiskAdjustedValue, r.forecastEac))
  );

  const sym = parameters.currencySymbol;

  const totals = filtered.reduce(
    (acc, r) => ({
      bookInflatedValue: acc.bookInflatedValue + r.bookInflatedValue,
      cvrRiskAdjustedValue: acc.cvrRiskAdjustedValue + r.cvrRiskAdjustedValue,
      postedLedgerCost: acc.postedLedgerCost + r.postedLedgerCost,
      siteAccruals: acc.siteAccruals + r.siteAccruals,
      actualIncurredCost: acc.actualIncurredCost + r.actualIncurredCost,
      latestCtc: acc.latestCtc + r.latestCtc,
      forecastEac: acc.forecastEac + r.forecastEac,
      bookPaperProfit: acc.bookPaperProfit + r.bookPaperProfit,
      cvrRealForecastProfit: acc.cvrRealForecastProfit + r.cvrRealForecastProfit,
    }),
    {
      bookInflatedValue: 0,
      cvrRiskAdjustedValue: 0,
      postedLedgerCost: 0,
      siteAccruals: 0,
      actualIncurredCost: 0,
      latestCtc: 0,
      forecastEac: 0,
      bookPaperProfit: 0,
      cvrRealForecastProfit: 0,
    }
  );

  const totalRealMargin =
    totals.cvrRiskAdjustedValue === 0
      ? 0
      : totals.cvrRealForecastProfit / totals.cvrRiskAdjustedValue;

  const inspectedRow = rows.find((r) => r.packageCode === selectedPkg) || null;

  return (
    <section className="view-animate space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="page-title">04 Package-Level CVR Reconciliation Engine</h1>
          <p className="text-[13px] text-[var(--muted)] mt-1.5 max-w-3xl">
            Fully automated dynamic array calculation hub. Extracts unique work packages from Sheet 01, builds full-scope Forecast EAC (Posted Cost + Site Accruals + CTC), reconciles against risk-adjusted dynamic value, and flags margin drift.
          </p>
        </div>

        <div className="text-[12px] text-[var(--muted)] num-tabular">
          Yellow threshold: {formatPercent(parameters.driftYellowThreshold)} · Red freeze:{' '}
          {formatPercent(parameters.driftRedThreshold)}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1 p-1 rounded-[var(--radius-sm)] bg-[var(--brand-4)]">
          {(
            [
              ['ALL', `All Packages (${rows.length})`],
              [
                'Red Alert — Freeze Procurement',
                `Red Alert (${rows.filter((r) => r.controlStatus === 'Red Alert — Freeze Procurement').length})`,
              ],
              [
                'Yellow Warning — Margin Erosion',
                `Yellow Warning (${rows.filter((r) => r.controlStatus === 'Yellow Warning — Margin Erosion').length})`,
              ],
              [
                'Controlled',
                `Controlled (${rows.filter((r) => r.controlStatus === 'Controlled').length})`,
              ],
            ] as const
          ).map(([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setStatusFilter(val)}
              className={`px-3 py-1.5 text-[12px] font-medium rounded-[4px] border-0 cursor-pointer transition-colors ${
                statusFilter === val
                  ? 'bg-[var(--surface)] text-[var(--brand)] shadow-[var(--shadow-sm)]'
                  : 'bg-transparent text-[var(--muted)] hover:text-[var(--brand)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 p-1 rounded-[var(--radius-sm)] bg-[var(--brand-4)]">
            <button
              type="button"
              onClick={() => setViewMode('summary')}
              className={`px-2.5 py-1 text-[12px] font-medium rounded-[4px] border-0 cursor-pointer transition-colors ${
                viewMode === 'summary'
                  ? 'bg-[var(--surface)] text-[var(--brand)] shadow-[var(--shadow-sm)]'
                  : 'bg-transparent text-[var(--muted)] hover:text-[var(--brand)]'
              }`}
            >
              Executive Fit (10 Cols)
            </button>
            <button
              type="button"
              onClick={() => setViewMode('full')}
              className={`px-2.5 py-1 text-[12px] font-medium rounded-[4px] border-0 cursor-pointer transition-colors ${
                viewMode === 'full'
                  ? 'bg-[var(--surface)] text-[var(--brand)] shadow-[var(--shadow-sm)]'
                  : 'bg-transparent text-[var(--muted)] hover:text-[var(--brand)]'
              }`}
            >
              Full Audit (15 Cols)
            </button>
          </div>
          <span className="hidden lg:inline text-[12px] text-[var(--muted)]">
            Click status pill for bridge
          </span>
        </div>
      </div>

      {inspectedRow && (
        <div
          className={
            inspectedRow.controlStatus === 'Red Alert — Freeze Procurement'
              ? 'insight-block-anomaly'
              : 'insight-block'
          }
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <div className="font-semibold text-[13px] text-[var(--brand)]">
              Package Bridge Inspection: {inspectedRow.packageCode} — {inspectedRow.packageName} ({inspectedRow.subcontractor})
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigate('directives')}
                className="btn-secondary text-[11.5px] py-1 px-2.5"
              >
                View Directives (Sheet 06)
              </button>
              <button
                type="button"
                onClick={() => setSelectedPkg(null)}
                className="btn-secondary text-[11.5px] py-1 px-2.5"
              >
                Dismiss
              </button>
            </div>
          </div>
          <p className="text-[12.5px] text-[var(--body-text)] num-tabular">
            Book Paper Profit of <strong>{formatCurrency(inspectedRow.bookPaperProfit, sym)}</strong> drops to CVR Real Forecast Profit of{' '}
            <strong>{formatCurrency(inspectedRow.cvrRealForecastProfit, sym)}</strong> (overstatement of{' '}
            <strong>
              {formatCurrency(
                inspectedRow.bookPaperProfit - inspectedRow.cvrRealForecastProfit,
                sym
              )}
            </strong>
            ), comprising <strong>{formatCurrency(inspectedRow.siteAccruals, sym)}</strong> in unposted accruals,{' '}
            <strong>{formatCurrency(inspectedRow.latestCtc, sym)}</strong> in remaining CTC, and{' '}
            <strong>
              {formatCurrency(
                inspectedRow.bookInflatedValue - inspectedRow.cvrRiskAdjustedValue,
                sym
              )}
            </strong>{' '}
            in unapproved VO discount. Real margin ({formatPercent(inspectedRow.cvrRealMarginPct)}) drifted{' '}
            <strong>{formatPercent(inspectedRow.marginDrift, true)}</strong> from the{' '}
            {formatPercent(inspectedRow.targetMarginPct)} baseline.
          </p>
        </div>
      )}

      {rows.length === 0 ? (
        <div className="surface-card p-10 text-center space-y-3">
          <h2 className="section-title">No Packages to Reconcile</h2>
          <p className="text-[13px] text-[var(--muted)]">
            Add work packages in Sheet 01 Value &amp; Variations to populate the automated CVR Engine.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('value-vo')}
            className="btn-primary"
          >
            Go to 01 Value &amp; VOs
          </button>
        </div>
      ) : (
        <div className="surface-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="text-left sticky left-0 z-10 bg-[var(--surface)]">Pkg</th>
                  <th className="text-left">Package Name</th>
                  <th className="text-right">Target %</th>
                  {viewMode === 'full' && <th className="text-right">Book Inflated</th>}
                  <th className="text-right">CVR Value</th>
                  {viewMode === 'full' && <th className="text-right">Posted Cost</th>}
                  {viewMode === 'full' && <th className="text-right">Accruals</th>}
                  {viewMode === 'full' && <th className="text-right">Actual Cost</th>}
                  {viewMode === 'full' && <th className="text-right">Latest CTC</th>}
                  <th className="text-right">Forecast EAC</th>
                  <th className="text-right">Book Profit</th>
                  <th className="text-right">CVR Profit</th>
                  <th className="text-right">CVR %</th>
                  <th className="text-right">Drift</th>
                  <th className="text-left">Control Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => {
                  const isRed = row.controlStatus === 'Red Alert — Freeze Procurement';
                  return (
                    <tr key={row.packageCode} className={isRed ? 'anomaly-row' : ''}>
                      <td className="font-mono text-[12px] font-semibold text-[var(--brand)] whitespace-nowrap">
                        {row.packageCode}
                      </td>
                      <td className="font-medium text-[var(--brand)]">{row.packageName}</td>
                      <td className="text-right num-tabular text-[var(--muted)]">
                        {formatPercent(row.targetMarginPct)}
                      </td>
                      <td className="text-right num-tabular text-[var(--muted)]">
                        {formatCurrency(row.bookInflatedValue, sym)}
                      </td>
                      <td className="text-right">
                        <InlineDataBar
                          value={row.cvrRiskAdjustedValue}
                          max={maxMagnitude}
                          formattedLabel={formatCurrency(row.cvrRiskAdjustedValue, sym)}
                        />
                      </td>
                      <td className="text-right num-tabular">
                        {formatCurrency(row.postedLedgerCost, sym)}
                      </td>
                      <td className="text-right num-tabular">
                        {formatCurrency(row.siteAccruals, sym)}
                      </td>
                      <td className="text-right num-tabular font-medium text-[var(--brand)]">
                        {formatCurrency(row.actualIncurredCost, sym)}
                      </td>
                      <td className="text-right num-tabular">
                        {formatCurrency(row.latestCtc, sym)}
                      </td>
                      <td className="text-right">
                        <InlineDataBar
                          value={row.forecastEac}
                          max={maxMagnitude}
                          formattedLabel={formatCurrency(row.forecastEac, sym)}
                          isAnomaly={isRed}
                        />
                      </td>
                      <td className="text-right num-tabular text-[var(--muted)]">
                        {formatCurrency(row.bookPaperProfit, sym)}
                      </td>
                      <td
                        className={`text-right num-tabular font-semibold ${
                          isRed ? 'text-[var(--danger)]' : 'text-[var(--brand)]'
                        }`}
                      >
                        {formatCurrency(row.cvrRealForecastProfit, sym)}
                      </td>
                      <td
                        className={`text-right num-tabular font-medium ${
                          isRed ? 'text-[var(--danger)]' : 'text-[var(--brand)]'
                        }`}
                      >
                        {formatPercent(row.cvrRealMarginPct)}
                      </td>
                      <td
                        className={`text-right num-tabular font-semibold ${
                          isRed
                            ? 'text-[var(--danger)]'
                            : row.controlStatus === 'Yellow Warning — Margin Erosion'
                              ? 'text-[var(--accent)]'
                              : 'text-[var(--muted)]'
                        }`}
                      >
                        {formatPercent(row.marginDrift, true)}
                      </td>
                      <td>
                        <ControlStatusBadge
                          status={row.controlStatus}
                          onClick={() =>
                            setSelectedPkg((prev) =>
                              prev === row.packageCode ? null : row.packageCode
                            )
                          }
                          title={`Inspect ${row.packageCode} profit bridge`}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>Totals ({filtered.length} packages)</td>
                  <td className="text-right num-tabular">
                    {formatCurrency(totals.bookInflatedValue, sym)}
                  </td>
                  <td className="text-right num-tabular text-[var(--accent)]">
                    {formatCurrency(totals.cvrRiskAdjustedValue, sym)}
                  </td>
                  <td className="text-right num-tabular">
                    {formatCurrency(totals.postedLedgerCost, sym)}
                  </td>
                  <td className="text-right num-tabular">
                    {formatCurrency(totals.siteAccruals, sym)}
                  </td>
                  <td className="text-right num-tabular">
                    {formatCurrency(totals.actualIncurredCost, sym)}
                  </td>
                  <td className="text-right num-tabular">
                    {formatCurrency(totals.latestCtc, sym)}
                  </td>
                  <td className="text-right num-tabular">
                    {formatCurrency(totals.forecastEac, sym)}
                  </td>
                  <td className="text-right num-tabular">
                    {formatCurrency(totals.bookPaperProfit, sym)}
                  </td>
                  <td className="text-right num-tabular text-[var(--accent)]">
                    {formatCurrency(totals.cvrRealForecastProfit, sym)}
                  </td>
                  <td className="text-right num-tabular">{formatPercent(totalRealMargin)}</td>
                  <td colSpan={2} />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
