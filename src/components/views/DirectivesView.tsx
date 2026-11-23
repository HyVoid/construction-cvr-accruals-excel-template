import { Printer } from 'lucide-react';
import {
  ClaimEscalationOrder,
  FreezeProcurementOrder,
  GlobalParameters,
} from '../../types/cvr';
import { formatCurrency, formatPercent } from '../../utils/format';
import { VoGradeBadge } from '../StatusBadge';

interface DirectivesViewProps {
  claimOrders: ClaimEscalationOrder[];
  freezeOrders: FreezeProcurementOrder[];
  parameters: GlobalParameters;
}

export function DirectivesView({
  claimOrders,
  freezeOrders,
  parameters,
}: DirectivesViewProps) {
  const sym = parameters.currencySymbol;
  const totalClaimExposure = claimOrders.reduce((s, o) => s + o.pendingVoClaimed, 0);

  return (
    <section className="view-animate space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="page-title">06 Claim Escalation &amp; Procurement Freeze Directives</h1>
          <p className="text-[13px] text-[var(--muted)] mt-1.5 max-w-3xl">
            Automated operational action sheets generated directly from CVR reconciliation thresholds as of {parameters.cutoffDate}. Issue the left schedule to Commercial (QS) and the right directive to Procurement &amp; Finance.
          </p>
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="btn-primary no-print"
        >
          <Printer size={14} aria-hidden="true" />
          <span>Print Monthly Directives</span>
        </button>
      </div>

      <div className="space-y-8">
        {/* Directive 1: Pending Claim Escalation & Substantiation Order */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h2 className="section-title">
                Pending Claim Substantiation Order (Commercial / QS)
              </h2>
              <p className="text-[12px] text-[var(--muted)] mt-0.5 num-tabular">
                Filter: Pending VO &gt;= {formatCurrency(parameters.claimMinThreshold, sym)} and VO Grade &ne; Grade A
              </p>
            </div>
            <span className="status-pill status-warning num-tabular">
              {claimOrders.length} Active {claimOrders.length === 1 ? 'Order' : 'Orders'}
            </span>
          </div>

          {claimOrders.length === 0 ? (
            <div className="surface-card p-8 text-center">
              <div className="section-title text-[17px]">No High-Risk Pending Claims</div>
              <p className="text-[12.5px] text-[var(--muted)] mt-1">
                No non-Grade A pending variations meet the {formatCurrency(parameters.claimMinThreshold, sym)} escalation threshold. No claim escalation action required.
              </p>
            </div>
          ) : (
            <div className="surface-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th className="text-left">Pkg</th>
                      <th className="text-left min-w-[140px]">Package Name</th>
                      <th className="text-right">Pending VO</th>
                      <th className="text-left">Grade</th>
                      <th className="text-left min-w-[240px]">Substantiation Action Directive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {claimOrders.map((order) => (
                      <tr
                        key={order.id}
                        className={order.voConfidence === 'Grade C' ? 'anomaly-row' : ''}
                      >
                        <td className="font-mono text-[12px] font-semibold text-[var(--brand)] whitespace-nowrap">
                          {order.packageCode}
                        </td>
                        <td className="font-medium text-[var(--brand)]">
                          {order.packageName}
                        </td>
                        <td className="text-right num-tabular font-semibold text-[var(--brand)] whitespace-nowrap">
                          {formatCurrency(order.pendingVoClaimed, sym)}
                        </td>
                        <td>
                          <VoGradeBadge grade={order.voConfidence} />
                        </td>
                        <td className="text-[12px] text-[var(--body-text)] leading-snug">
                          {order.actionDirective}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2}>Total Unsubstantiated VO Exposure</td>
                      <td className="text-right num-tabular text-[var(--accent)]">
                        {formatCurrency(totalClaimExposure, sym)}
                      </td>
                      <td colSpan={2} />
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Right Directive: Procurement Freeze & Payment Hold Order */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h2 className="section-title">
                Procurement Freeze &amp; Payment Hold Order (Procurement / Finance)
              </h2>
              <p className="text-[12px] text-[var(--muted)] mt-0.5 num-tabular">
                Filter: Package Margin Drift &lt;= {formatPercent(parameters.driftRedThreshold)} Red Freeze Line
              </p>
            </div>
            <span
              className={`status-pill num-tabular ${
                freezeOrders.length > 0 ? 'status-red' : 'status-neutral'
              }`}
            >
              {freezeOrders.length} Frozen {freezeOrders.length === 1 ? 'Package' : 'Packages'}
            </span>
          </div>

          {freezeOrders.length === 0 ? (
            <div className="surface-card p-8 text-center">
              <div className="section-title text-[17px]">Procurement &amp; Payments Cleared</div>
              <p className="text-[12.5px] text-[var(--muted)] mt-1">
                No work packages breach the {formatPercent(parameters.driftRedThreshold)} red freeze threshold. Standard purchasing and payment approvals remain open.
              </p>
            </div>
          ) : (
            <div className="surface-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th className="text-left">Pkg</th>
                      <th className="text-left min-w-[140px]">Package Name</th>
                      <th className="text-right">CVR Profit</th>
                      <th className="text-right">Drift</th>
                      <th className="text-left min-w-[240px]">Procurement &amp; Payment Control Directive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {freezeOrders.map((order) => (
                      <tr key={order.packageCode} className="anomaly-row">
                        <td className="font-mono text-[12px] font-semibold text-[var(--brand)] whitespace-nowrap">
                          {order.packageCode}
                        </td>
                        <td className="font-medium text-[var(--brand)]">
                          <div>{order.packageName}</div>
                          <div className="text-[11px] text-[var(--muted)]">
                            {order.subcontractor}
                          </div>
                        </td>
                        <td className="text-right num-tabular font-semibold text-[var(--danger)] whitespace-nowrap">
                          {formatCurrency(order.cvrRealForecastProfit, sym)}
                        </td>
                        <td className="text-right num-tabular font-semibold text-[var(--danger)] whitespace-nowrap">
                          {formatPercent(order.marginDrift, true)}
                        </td>
                        <td className="text-[12px] text-[var(--body-text)] leading-snug">
                          {order.controlDirective}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
