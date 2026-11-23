import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  ComputedPostedCostRow,
  GlobalParameters,
  PostedCostRow,
} from '../../types/cvr';
import { formatCurrency } from '../../utils/format';
import { InlineDataBar } from '../InlineDataBar';
import { CutoffStatusBadge } from '../StatusBadge';

interface PostedCostsViewProps {
  computedRows: ComputedPostedCostRow[];
  parameters: GlobalParameters;
  knownPackageCodes: string[];
  onUpdateRow: (id: string, patch: Partial<PostedCostRow>) => void;
  onAddRow: () => void;
  onDeleteRow: (id: string) => void;
  onOpenCsvImport: () => void;
}

const COST_CATEGORIES = [
  'Subcontract Progress',
  'Bulk Materials',
  'Plant Hire',
  'Site Labor',
  'Temporary Works',
  'General Preliminaries',
];

export function PostedCostsView({
  computedRows,
  parameters,
  knownPackageCodes,
  onUpdateRow,
  onAddRow,
  onDeleteRow,
  onOpenCsvImport,
}: PostedCostsViewProps) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'INCLUDED' | 'EXCLUDED'>('ALL');

  const filtered = computedRows.filter((r) => {
    const q = search.trim().toLowerCase();
    const matchesQ =
      !q ||
      r.voucherNo.toLowerCase().includes(q) ||
      r.packageCode.toLowerCase().includes(q) ||
      r.costCategory.toLowerCase().includes(q);
    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'INCLUDED' && r.cutoffStatus === 'Included in Period') ||
      (statusFilter === 'EXCLUDED' && r.cutoffStatus === 'Excluded (Post Cut-off)');
    return matchesQ && matchesStatus;
  });

  const excludedCount = computedRows.filter(
    (r) => r.cutoffStatus === 'Excluded (Post Cut-off)'
  ).length;
  const maxAmount = Math.max(1, ...computedRows.map((r) => r.postedAmount));
  const totalPosted = filtered.reduce((s, r) => s + r.postedAmount, 0);
  const totalValid = filtered.reduce((s, r) => s + r.validPostedCost, 0);
  const sym = parameters.currencySymbol;

  return (
    <section className="view-animate space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="page-title">02 Financial Posted Costs</h1>
          <p className="text-[13px] text-[var(--muted)] mt-1.5 max-w-3xl">
            ERP general ledger invoice postings by work package. Every voucher is checked against the global Cut-off Date ({parameters.cutoffDate}) on Actual Incurred Date to eliminate cross-period distortion.
          </p>
        </div>

        <button type="button" onClick={onAddRow} className="btn-primary">
          <Plus size={14} aria-hidden="true" />
          <span>Add Ledger Voucher</span>
        </button>
      </div>

      {excludedCount > 0 && (
        <div className="insight-block">
          <div className="text-[12.5px] font-semibold text-[var(--brand)]">
            Cut-off Gate Active: {excludedCount} Post-Cut-off {excludedCount === 1 ? 'Voucher' : 'Vouchers'} Automatically Excluded
          </div>
          <p className="text-[12.5px] text-[var(--muted)] mt-0.5">
            Vouchers with an Actual Incurred Date after {parameters.cutoffDate} evaluate to {formatCurrency(0, sym)} in Valid Posted Cost so revenue and cost cut-offs stay strictly synchronized.
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            aria-label="Filter posted cost vouchers"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search voucher no., package code, or category..."
            className="cell-input w-[280px] bg-[var(--surface)]"
          />
          <div className="flex items-center gap-1 p-1 rounded-[var(--radius-sm)] bg-[var(--brand-4)]">
            {(
              [
                ['ALL', 'All Vouchers'],
                ['INCLUDED', 'Included in Period'],
                ['EXCLUDED', `Excluded (${excludedCount})`],
              ] as const
            ).map(([val, label]) => (
              <button
                key={val}
                type="button"
                onClick={() => setStatusFilter(val)}
                className={`px-2.5 py-1 text-[12px] font-medium rounded-[4px] border-0 cursor-pointer transition-colors ${
                  statusFilter === val
                    ? 'bg-[var(--surface)] text-[var(--brand)] shadow-[var(--shadow-sm)]'
                    : 'bg-transparent text-[var(--muted)] hover:text-[var(--brand)]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="text-[12px] text-[var(--muted)] num-tabular">
          Showing {filtered.length} of {computedRows.length} vouchers
        </div>
      </div>

      <datalist id="known-package-codes-pc">
        {knownPackageCodes.map((code) => (
          <option key={code} value={code} />
        ))}
      </datalist>

      {computedRows.length === 0 ? (
        <div className="surface-card p-10 text-center space-y-3">
          <h2 className="section-title">No Posted Cost Vouchers</h2>
          <p className="text-[13px] text-[var(--muted)] max-w-md mx-auto">
            Import ERP general ledger vouchers via CSV or add an entry manually.
          </p>
          <div className="flex items-center justify-center gap-2.5 pt-2">
            <button type="button" onClick={onAddRow} className="btn-primary">
              <Plus size={14} aria-hidden="true" />
              <span>Add First Voucher</span>
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
                  <th className="text-left min-w-[140px]">Voucher No.</th>
                  <th className="text-left min-w-[138px]">Invoice Posting Date</th>
                  <th className="text-left min-w-[138px]">Actual Incurred Date</th>
                  <th className="text-left min-w-[110px]">Package Code</th>
                  <th className="text-left min-w-[175px]">Cost Category</th>
                  <th className="text-right min-w-[140px]">Posted Amount</th>
                  <th className="text-left min-w-[175px]">Cut-off Status (Auto)</th>
                  <th className="text-right min-w-[155px]">Valid Posted Cost (Auto)</th>
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
                          aria-label={`Voucher number for ${row.id}`}
                          value={row.voucherNo}
                          onChange={(e) =>
                            onUpdateRow(row.id, { voucherNo: e.target.value })
                          }
                          className="cell-input font-mono text-[12px]"
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          aria-label={`Invoice posting date for ${row.voucherNo}`}
                          value={row.invoicePostingDate}
                          onChange={(e) =>
                            onUpdateRow(row.id, { invoicePostingDate: e.target.value })
                          }
                          className="cell-input"
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          aria-label={`Actual incurred date for ${row.voucherNo}`}
                          value={row.actualIncurredDate}
                          onChange={(e) =>
                            onUpdateRow(row.id, { actualIncurredDate: e.target.value })
                          }
                          className="cell-input"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          list="known-package-codes-pc"
                          aria-label={`Package code for ${row.voucherNo}`}
                          value={row.packageCode}
                          onChange={(e) =>
                            onUpdateRow(row.id, { packageCode: e.target.value })
                          }
                          className="cell-input font-mono text-[12px]"
                        />
                      </td>
                      <td>
                        <select
                          aria-label={`Cost category for ${row.voucherNo}`}
                          value={
                            COST_CATEGORIES.includes(row.costCategory)
                              ? row.costCategory
                              : COST_CATEGORIES[0]
                          }
                          onChange={(e) =>
                            onUpdateRow(row.id, { costCategory: e.target.value })
                          }
                          className="cell-input"
                        >
                          {COST_CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <input
                          type="number"
                          aria-label={`Posted ledger amount for ${row.voucherNo}`}
                          value={row.postedAmount}
                          onChange={(e) =>
                            onUpdateRow(row.id, {
                              postedAmount: Number(e.target.value) || 0,
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
                          value={row.validPostedCost}
                          max={maxAmount}
                          formattedLabel={formatCurrency(row.validPostedCost, sym)}
                          isAnomaly={isExcluded}
                        />
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          onClick={() => onDeleteRow(row.id)}
                          aria-label={`Delete voucher ${row.voucherNo}`}
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
                  <td colSpan={5}>Filtered Totals ({filtered.length} vouchers)</td>
                  <td className="text-right num-tabular">{formatCurrency(totalPosted, sym)}</td>
                  <td className="text-[12px] text-[var(--muted)]">
                    Excluded: {formatCurrency(totalPosted - totalValid, sym)}
                  </td>
                  <td className="text-right num-tabular text-[var(--accent)]">
                    {formatCurrency(totalValid, sym)}
                  </td>
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
