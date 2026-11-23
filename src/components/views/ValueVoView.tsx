import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  ComputedValueVoRow,
  GlobalParameters,
  ValueVoRow,
  VoConfidenceGrade,
} from '../../types/cvr';
import { formatCurrency, formatPercent } from '../../utils/format';
import { InlineDataBar } from '../InlineDataBar';

interface ValueVoViewProps {
  rows: ValueVoRow[];
  computedRows: ComputedValueVoRow[];
  parameters: GlobalParameters;
  onUpdateRow: (id: string, patch: Partial<ValueVoRow>) => void;
  onAddRow: () => void;
  onDeleteRow: (id: string) => void;
  onOpenCsvImport: () => void;
}

const VO_GRADES: VoConfidenceGrade[] = ['Grade A', 'Grade B', 'Grade C'];

export function ValueVoView({
  computedRows,
  parameters,
  onUpdateRow,
  onAddRow,
  onDeleteRow,
  onOpenCsvImport,
}: ValueVoViewProps) {
  const [search, setSearch] = useState('');
  const [gradeFilter, setGradeFilter] = useState<'ALL' | VoConfidenceGrade>('ALL');

  const filtered = computedRows.filter((r) => {
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      r.packageCode.toLowerCase().includes(q) ||
      r.packageName.toLowerCase().includes(q) ||
      r.subcontractor.toLowerCase().includes(q);
    const matchesGrade = gradeFilter === 'ALL' || r.voConfidence === gradeFilter;
    return matchesSearch && matchesGrade;
  });

  const maxCertified = Math.max(
    1,
    ...computedRows.map((r) => Math.max(r.validCertifiedValue, r.bookInflatedVoValue))
  );

  const totals = filtered.reduce(
    (acc, r) => ({
      budgetRevenue: acc.budgetRevenue + r.budgetRevenue,
      targetCost: acc.targetCost + r.targetCost,
      certifiedValue: acc.certifiedValue + r.certifiedValue,
      pendingVoClaimed: acc.pendingVoClaimed + r.pendingVoClaimed,
      validCertifiedValue: acc.validCertifiedValue + r.validCertifiedValue,
      riskAdjustedVoValue: acc.riskAdjustedVoValue + r.riskAdjustedVoValue,
      bookInflatedVoValue: acc.bookInflatedVoValue + r.bookInflatedVoValue,
    }),
    {
      budgetRevenue: 0,
      targetCost: 0,
      certifiedValue: 0,
      pendingVoClaimed: 0,
      validCertifiedValue: 0,
      riskAdjustedVoValue: 0,
      bookInflatedVoValue: 0,
    }
  );

  const sym = parameters.currencySymbol;

  return (
    <section className="view-animate space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="page-title">01 Value &amp; Variations (Value &amp; VOs)</h1>
          <p className="text-[13px] text-[var(--muted)] mt-1.5 max-w-3xl">
            Commercial (QS) source ledger for original package budgets, client interim payment certificates (IPC), and pending variation orders (VOs). Columns J through M automatically apply the cut-off date ({parameters.cutoffDate}) and Grade A/B/C risk factors.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={onAddRow} className="btn-primary">
            <Plus size={14} aria-hidden="true" />
            <span>Add Work Package</span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            aria-label="Filter work packages"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search package code, name, or subcontractor..."
            className="cell-input w-[280px] bg-[var(--surface)]"
          />
          <div className="flex items-center gap-1 p-1 rounded-[var(--radius-sm)] bg-[var(--brand-4)]">
            {(['ALL', 'Grade A', 'Grade B', 'Grade C'] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGradeFilter(g)}
                className={`px-2.5 py-1 text-[12px] font-medium rounded-[4px] border-0 cursor-pointer transition-colors ${
                  gradeFilter === g
                    ? 'bg-[var(--surface)] text-[var(--brand)] shadow-[var(--shadow-sm)]'
                    : 'bg-transparent text-[var(--muted)] hover:text-[var(--brand)]'
                }`}
              >
                {g === 'ALL' ? 'All Grades' : g}
              </button>
            ))}
          </div>
        </div>

        <div className="text-[12px] text-[var(--muted)] num-tabular">
          Showing {filtered.length} of {computedRows.length} packages · Editable inputs shaded · Auto columns locked
        </div>
      </div>

      {computedRows.length === 0 ? (
        <div className="surface-card p-10 text-center space-y-3">
          <h2 className="section-title">No Work Packages Recorded</h2>
          <p className="text-[13px] text-[var(--muted)] max-w-md mx-auto">
            Add your first subcontract work package manually or import a CSV schedule to initialize the CVR Reconciliation Engine.
          </p>
          <div className="flex items-center justify-center gap-2.5 pt-2">
            <button type="button" onClick={onAddRow} className="btn-primary">
              <Plus size={14} aria-hidden="true" />
              <span>Add First Package</span>
            </button>
            <button type="button" onClick={onOpenCsvImport} className="btn-secondary">
              Bulk CSV Import
            </button>
          </div>
        </div>
      ) : (
        <div className="surface-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="text-left min-w-[96px]">Package Code</th>
                  <th className="text-left min-w-[200px]">Package Name</th>
                  <th className="text-left min-w-[170px]">Subcontractor</th>
                  <th className="text-right min-w-[125px]">Budget Revenue</th>
                  <th className="text-right min-w-[125px]">Target Cost</th>
                  <th className="text-right min-w-[125px]">Certified IPC</th>
                  <th className="text-left min-w-[132px]">Valuation Date</th>
                  <th className="text-right min-w-[125px]">Pending VO</th>
                  <th className="text-left min-w-[106px]">VO Grade</th>
                  <th className="text-right min-w-[136px]">Valid Cert. (Auto)</th>
                  <th className="text-right min-w-[92px]">Factor (Auto)</th>
                  <th className="text-right min-w-[136px]">Risk VO (Auto)</th>
                  <th className="text-right min-w-[136px]">Book VO (Auto)</th>
                  <th className="text-center w-[48px]">Act</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => {
                  const isExcludedCert =
                    row.certifiedValue > 0 && row.validCertifiedValue === 0;
                  return (
                    <tr key={row.id} className={isExcludedCert ? 'anomaly-row' : ''}>
                      <td>
                        <input
                          type="text"
                          aria-label={`Package code for ${row.packageName || row.id}`}
                          value={row.packageCode}
                          onChange={(e) =>
                            onUpdateRow(row.id, { packageCode: e.target.value })
                          }
                          className="cell-input font-mono text-[12px]"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          aria-label={`Package name for ${row.packageCode}`}
                          value={row.packageName}
                          onChange={(e) =>
                            onUpdateRow(row.id, { packageName: e.target.value })
                          }
                          className="cell-input"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          aria-label={`Subcontractor for ${row.packageCode}`}
                          value={row.subcontractor}
                          onChange={(e) =>
                            onUpdateRow(row.id, { subcontractor: e.target.value })
                          }
                          className="cell-input"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          aria-label={`Original budget revenue for ${row.packageCode}`}
                          value={row.budgetRevenue}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              budgetRevenue: Number(e.target.value) || 0,
                            })
                          }
                          className="cell-input text-right"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          aria-label={`Original target cost for ${row.packageCode}`}
                          value={row.targetCost}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              targetCost: Number(e.target.value) || 0,
                            })
                          }
                          className="cell-input text-right"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          aria-label={`Certified IPC value for ${row.packageCode}`}
                          value={row.certifiedValue}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              certifiedValue: Number(e.target.value) || 0,
                            })
                          }
                          className="cell-input text-right"
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          aria-label={`Valuation date for ${row.packageCode}`}
                          value={row.valuationDate}
                          onChange={(e) =>
                            onUpdateRow(row.id, { valuationDate: e.target.value })
                          }
                          className="cell-input"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          aria-label={`Pending VO claimed for ${row.packageCode}`}
                          value={row.pendingVoClaimed}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              pendingVoClaimed: Number(e.target.value) || 0,
                            })
                          }
                          className="cell-input text-right"
                        />
                      </td>
                      <td>
                        <select
                          aria-label={`VO confidence grade for ${row.packageCode}`}
                          value={row.voConfidence}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              voConfidence: e.target.value as VoConfidenceGrade,
                            })
                          }
                          className="cell-input"
                        >
                          {VO_GRADES.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="cell-readonly-tint text-right">
                        <InlineDataBar
                          value={row.validCertifiedValue}
                          max={maxCertified}
                          formattedLabel={formatCurrency(row.validCertifiedValue, sym)}
                          isAnomaly={isExcludedCert}
                        />
                      </td>
                      <td className="cell-readonly-tint text-right num-tabular font-medium text-[var(--brand)]">
                        {formatPercent(row.appliedRiskFactor)}
                      </td>
                      <td className="cell-readonly-tint text-right num-tabular font-medium text-[var(--accent)]">
                        {formatCurrency(row.riskAdjustedVoValue, sym)}
                      </td>
                      <td className="cell-readonly-tint text-right num-tabular text-[var(--muted)]">
                        {formatCurrency(row.bookInflatedVoValue, sym)}
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          onClick={() => onDeleteRow(row.id)}
                          aria-label={`Delete package ${row.packageCode}`}
                          className="p-1.5 rounded-[var(--radius-sm)] bg-transparent border-0 text-[var(--muted)] hover:text-[var(--danger)] hover:bg-[var(--danger-10)] cursor-pointer transition-colors"
                        >
                          <Trash2 size={14} aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>Filtered Totals ({filtered.length} packages)</td>
                  <td className="text-right num-tabular">{formatCurrency(totals.budgetRevenue, sym)}</td>
                  <td className="text-right num-tabular">{formatCurrency(totals.targetCost, sym)}</td>
                  <td className="text-right num-tabular">{formatCurrency(totals.certifiedValue, sym)}</td>
                  <td />
                  <td className="text-right num-tabular">{formatCurrency(totals.pendingVoClaimed, sym)}</td>
                  <td />
                  <td className="text-right num-tabular">{formatCurrency(totals.validCertifiedValue, sym)}</td>
                  <td />
                  <td className="text-right num-tabular text-[var(--accent)]">
                    {formatCurrency(totals.riskAdjustedVoValue, sym)}
                  </td>
                  <td className="text-right num-tabular">{formatCurrency(totals.bookInflatedVoValue, sym)}</td>
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
