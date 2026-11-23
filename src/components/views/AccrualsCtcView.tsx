import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  AccrualCtcRow,
  ComputedAccrualCtcRow,
  GlobalParameters,
} from '../../types/cvr';
import { formatCurrency } from '../../utils/format';
import { InlineDataBar } from '../InlineDataBar';
import { CutoffStatusBadge } from '../StatusBadge';

interface AccrualsCtcViewProps {
  computedRows: ComputedAccrualCtcRow[];
  parameters: GlobalParameters;
  knownPackageCodes: string[];
  onUpdateRow: (id: string, patch: Partial<AccrualCtcRow>) => void;
  onAddRow: () => void;
  onDeleteRow: (id: string) => void;
  onOpenCsvImport: () => void;
}

export function AccrualsCtcView({
  computedRows,
  parameters,
  knownPackageCodes,
  onUpdateRow,
  onAddRow,
  onDeleteRow,
  onOpenCsvImport,
}: AccrualsCtcViewProps) {
  const [search, setSearch] = useState('');

  const filtered = computedRows.filter((r) => {
    const q = search.trim().toLowerCase();
    return (
      !q ||
      r.accrualDocNo.toLowerCase().includes(q) ||
      r.packageCode.toLowerCase().includes(q)
    );
  });

  const maxAccrual = Math.max(
    1,
    ...computedRows.map((r) => Math.max(r.validTotalAccruals, r.validCtc))
  );

  const totals = filtered.reduce(
    (acc, r) => ({
      plant: acc.plant + r.unbilledPlantHire,
      labor: acc.labor + r.unsettledSiteLabor,
      qsVar: acc.qsVar + r.qsSubcontractVariance,
      ctc: acc.ctc + r.latestCtc,
      validAccruals: acc.validAccruals + r.validTotalAccruals,
      validCtc: acc.validCtc + r.validCtc,
    }),
    { plant: 0, labor: 0, qsVar: 0, ctc: 0, validAccruals: 0, validCtc: 0 }
  );

  const sym = parameters.currencySymbol;

  return (
    <section className="view-animate space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="page-title">03 Site Accruals &amp; CTC Assessment</h1>
          <p className="text-[13px] text-[var(--muted)] mt-1.5 max-w-3xl">
            Captures site-incurred unbilled liabilities omitted from the financial ledger—unbilled plant hire, unsettled site labor, and QS subcontract certification variances—plus latest Cost to Complete (CTC) estimates aligned to {parameters.cutoffDate}.
          </p>
        </div>

        <button type="button" onClick={onAddRow} className="btn-primary">
          <Plus size={14} aria-hidden="true" />
          <span>Add Accrual / CTC Sheet</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <input
          type="search"
          aria-label="Filter accrual sheets"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search accrual doc no. or package code..."
          className="cell-input w-[280px] bg-[var(--surface)]"
        />
        <div className="text-[12px] text-[var(--muted)] num-tabular">
          Showing {filtered.length} of {computedRows.length} assessment records · Accruals = Plant + Labor + QS Variance
        </div>
      </div>

      <datalist id="known-package-codes-ac">
        {knownPackageCodes.map((code) => (
          <option key={code} value={code} />
        ))}
      </datalist>

      {computedRows.length === 0 ? (
        <div className="surface-card p-10 text-center space-y-3">
          <h2 className="section-title">No Site Accruals or CTC Entries</h2>
          <p className="text-[13px] text-[var(--muted)] max-w-md mx-auto">
            Record unbilled plant hire, site labor, QS subcontract variances, and Cost to Complete assessments to compute full Forecast EAC.
          </p>
          <div className="flex items-center justify-center gap-2.5 pt-2">
            <button type="button" onClick={onAddRow} className="btn-primary">
              <Plus size={14} aria-hidden="true" />
              <span>Add First Record</span>
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
                  <th className="text-left min-w-[130px]">Accrual Doc No.</th>
                  <th className="text-left min-w-[104px]">Package Code</th>
                  <th className="text-left min-w-[134px]">Incurred Date</th>
                  <th className="text-right min-w-[130px]">Unbilled Plant</th>
                  <th className="text-right min-w-[130px]">Unsettled Labor</th>
                  <th className="text-right min-w-[135px]">QS Subc. Variance</th>
                  <th className="text-right min-w-[135px]">Latest CTC</th>
                  <th className="text-left min-w-[165px]">Cut-off Status (Auto)</th>
                  <th className="text-right min-w-[148px]">Valid Accruals (Auto)</th>
                  <th className="text-right min-w-[140px]">Valid CTC (Auto)</th>
                  <th className="text-center w-[48px]">Act</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => {
                  const isExcluded = row.cutoffStatus === 'Excluded (Post Cut-off)';
                  return (
                    <tr key={row.id} className={isExcluded ? 'anomaly-row' : ''}>
                      <td>
                        <input
                          type="text"
                          aria-label={`Accrual document number for ${row.id}`}
                          value={row.accrualDocNo}
                          onChange={(e) =>
                            onUpdateRow(row.id, { accrualDocNo: e.target.value })
                          }
                          className="cell-input font-mono text-[12px]"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          list="known-package-codes-ac"
                          aria-label={`Package code for ${row.accrualDocNo}`}
                          value={row.packageCode}
                          onChange={(e) =>
                            onUpdateRow(row.id, { packageCode: e.target.value })
                          }
                          className="cell-input font-mono text-[12px]"
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          aria-label={`Incurred date for ${row.accrualDocNo}`}
                          value={row.incurredDate}
                          onChange={(e) =>
                            onUpdateRow(row.id, { incurredDate: e.target.value })
                          }
                          className="cell-input"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          aria-label={`Unbilled plant hire for ${row.accrualDocNo}`}
                          value={row.unbilledPlantHire}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              unbilledPlantHire: Number(e.target.value) || 0,
                            })
                          }
                          className="cell-input text-right"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          aria-label={`Unsettled site labor for ${row.accrualDocNo}`}
                          value={row.unsettledSiteLabor}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              unsettledSiteLabor: Number(e.target.value) || 0,
                            })
                          }
                          className="cell-input text-right"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          aria-label={`QS subcontract variance for ${row.accrualDocNo}`}
                          value={row.qsSubcontractVariance}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              qsSubcontractVariance: Number(e.target.value) || 0,
                            })
                          }
                          className="cell-input text-right"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          aria-label={`Latest CTC for ${row.accrualDocNo}`}
                          value={row.latestCtc}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              latestCtc: Number(e.target.value) || 0,
                            })
                          }
                          className="cell-input text-right"
                        />
                      </td>
                      <td className="cell-readonly-tint">
                        <CutoffStatusBadge status={row.cutoffStatus} />
                      </td>
                      <td className="cell-readonly-tint text-right">
                        <InlineDataBar
                          value={row.validTotalAccruals}
                          max={maxAccrual}
                          formattedLabel={formatCurrency(row.validTotalAccruals, sym)}
                          isAnomaly={isExcluded}
                        />
                      </td>
                      <td className="cell-readonly-tint text-right num-tabular font-medium text-[var(--brand)]">
                        {formatCurrency(row.validCtc, sym)}
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          onClick={() => onDeleteRow(row.id)}
                          aria-label={`Delete accrual record ${row.accrualDocNo}`}
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
                  <td colSpan={3}>Filtered Totals ({filtered.length} records)</td>
                  <td className="text-right num-tabular">{formatCurrency(totals.plant, sym)}</td>
                  <td className="text-right num-tabular">{formatCurrency(totals.labor, sym)}</td>
                  <td className="text-right num-tabular">{formatCurrency(totals.qsVar, sym)}</td>
                  <td className="text-right num-tabular">{formatCurrency(totals.ctc, sym)}</td>
                  <td />
                  <td className="text-right num-tabular text-[var(--accent)]">
                    {formatCurrency(totals.validAccruals, sym)}
                  </td>
                  <td className="text-right num-tabular">{formatCurrency(totals.validCtc, sym)}</td>
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
