import { GlobalParameters } from '../../types/cvr';

interface ParametersViewProps {
  parameters: GlobalParameters;
  onChange: (updated: GlobalParameters) => void;
}

interface ParameterMeta {
  code: string;
  cellRef: string;
  name: string;
  key: keyof GlobalParameters;
  kind: 'text' | 'date' | 'percent' | 'currency';
  description: string;
  step?: string;
}

const PARAMETER_DEFINITIONS: ParameterMeta[] = [
  {
    code: 'PRM_CURR',
    cellRef: 'C4',
    name: 'Base Currency Symbol',
    key: 'currencySymbol',
    kind: 'text',
    description:
      'Project reporting currency symbol (e.g., $, £, €, ¥, NT$). Dynamically formats all monetary fields and executive alerts across sheets 01 through 06.',
  },
  {
    code: 'PRM_CUTOFF',
    cellRef: 'C5',
    name: 'Current Cut-off Date',
    key: 'cutoffDate',
    kind: 'date',
    description:
      'Monthly CVR cut-off date enforced across Valuation (01), Posted Ledger Costs (02), and Site Accruals & CTC (03). Any transaction dated after this cut-off is automatically excluded.',
  },
  {
    code: 'PRM_FAKE_VO',
    cellRef: 'C6',
    name: 'Book Inflated VO Recognition Rate',
    key: 'bookInflatedVoRate',
    kind: 'percent',
    step: '1',
    description:
      'Traditional ledger practice recognizing unapproved variations at 100%. Used to compute inflated book value and expose paper profit overstatement.',
  },
  {
    code: 'PRM_VO_A',
    cellRef: 'C7',
    name: 'Grade A VO Risk Factor',
    key: 'voFactorA',
    kind: 'percent',
    step: '1',
    description:
      'Prudent recognition factor for Grade A variations backed by signed engineer instructions and verified site measurement records.',
  },
  {
    code: 'PRM_VO_B',
    cellRef: 'C8',
    name: 'Grade B VO Risk Factor',
    key: 'voFactorB',
    kind: 'percent',
    step: '1',
    description:
      'Risk-adjusted recognition factor for Grade B variations supported only by meeting minutes or verbal instructions under commercial negotiation.',
  },
  {
    code: 'PRM_VO_C',
    cellRef: 'C9',
    name: 'Grade C VO Risk Factor',
    key: 'voFactorC',
    kind: 'percent',
    step: '1',
    description:
      'Conservative recognition factor for Grade C variations with disputed entitlement, liability conflict, or late notice submissions.',
  },
  {
    code: 'PRM_DRIFT_YLW',
    cellRef: 'C10',
    name: 'Margin Drift Yellow Warning Threshold',
    key: 'driftYellowThreshold',
    kind: 'percent',
    step: '0.5',
    description:
      'Triggers "Yellow Warning — Margin Erosion" in the CVR Engine when package margin drift falls at or below this threshold (e.g., -3.0%) without breaching the red freeze line.',
  },
  {
    code: 'PRM_DRIFT_RED',
    cellRef: 'C11',
    name: 'Margin Drift Red Freeze Threshold',
    key: 'driftRedThreshold',
    kind: 'percent',
    step: '0.5',
    description:
      'Triggers "Red Alert — Freeze Procurement" in the CVR Engine and automatically pushes the package into Sheet 06 Procurement Freeze Orders.',
  },
  {
    code: 'PRM_ACCR_WARN',
    cellRef: 'C12',
    name: 'Accrual Omission Rate Warning Threshold',
    key: 'accrualWarnThreshold',
    kind: 'percent',
    step: '1',
    description:
      'Project-wide diagnostic limit for unposted site accruals as a share of actual incurred costs. Breaching this limit raises a Financial Posting Lag warning on the Dashboard.',
  },
  {
    code: 'PRM_CLAIM_MIN',
    cellRef: 'C13',
    name: 'High-Priority Claim Escalation Minimum',
    key: 'claimMinThreshold',
    kind: 'currency',
    step: '5000',
    description:
      'Minimum claimed value for non-Grade A pending variations to automatically enter the Sheet 06 Pending Claim Escalation Order for urgent QS substantiation.',
  },
  {
    code: 'PRM_TGT_GPM',
    cellRef: 'C14',
    name: 'Target Overall Gross Margin Benchmark',
    key: 'targetGrossMargin',
    kind: 'percent',
    step: '0.5',
    description:
      'Corporate minimum overall gross margin benchmark evaluated against CVR real forecast gross margin on Sheet 05 Dashboard.',
  },
];

export function ParametersView({ parameters, onChange }: ParametersViewProps) {
  const handleTextOrDate = (key: 'currencySymbol' | 'cutoffDate', value: string) => {
    onChange({ ...parameters, [key]: value });
  };

  const handlePercent = (key: keyof GlobalParameters, rawPct: string) => {
    const num = Number(rawPct);
    if (!Number.isFinite(num)) return;
    onChange({ ...parameters, [key]: num / 100 });
  };

  const handleCurrency = (key: keyof GlobalParameters, rawVal: string) => {
    const num = Number(rawVal);
    if (!Number.isFinite(num)) return;
    onChange({ ...parameters, [key]: num });
  };

  return (
    <section className="view-animate space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="page-title">00 Global Parameters</h1>
          <p className="text-[13px] text-[var(--muted)] mt-1.5 max-w-3xl">
            Single source of truth for cut-off alignment, variation risk discounting, margin drift thresholds, and claim escalation triggers. Every edit propagates instantaneously across all downstream worksheets.
          </p>
        </div>
        <div className="text-[12px] text-[var(--muted)] num-tabular">
          11 configurable control parameters · Cells C4:C14
        </div>
      </div>

      <div className="insight-block">
        <div className="text-[12.5px] font-semibold text-[var(--brand)] mb-1">
          Sensitivity &amp; Stress-Testing Control Hub
        </div>
        <p className="text-[12.5px] text-[var(--body-text)]">
          Shaded input fields represent editable workbook assumptions. Tightening Grade B/C risk factors or lowering the Red Freeze Threshold immediately recalculates package EAC margins, executive dashboard variances, and Sheet 06 operational directives without modifying formulas.
        </p>
      </div>

      <div className="surface-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-left w-[120px]">Parameter Code</th>
                <th className="text-left w-[72px]">Ref</th>
                <th className="text-left w-[250px]">Parameter Name</th>
                <th className="text-right w-[200px]">Configured Value</th>
                <th className="text-left">Business Description &amp; Downstream Reference</th>
              </tr>
            </thead>
            <tbody>
              {PARAMETER_DEFINITIONS.map((def) => {
                const rawVal = parameters[def.key];
                return (
                  <tr key={def.code}>
                    <td className="font-mono text-[12px] font-medium text-[var(--brand)] whitespace-nowrap">
                      {def.code}
                    </td>
                    <td className="font-mono text-[11.5px] text-[var(--muted)] whitespace-nowrap">
                      {def.cellRef}
                    </td>
                    <td className="font-medium text-[var(--brand)]">{def.name}</td>
                    <td className="text-right">
                      {def.kind === 'text' && (
                        <input
                          type="text"
                          aria-label={def.name}
                          value={String(rawVal)}
                          maxLength={6}
                          onChange={(e) =>
                            handleTextOrDate('currencySymbol', e.target.value)
                          }
                          className="cell-input text-right font-semibold"
                        />
                      )}
                      {def.kind === 'date' && (
                        <input
                          type="date"
                          aria-label={def.name}
                          value={String(rawVal)}
                          onChange={(e) => handleTextOrDate('cutoffDate', e.target.value)}
                          className="cell-input text-right"
                        />
                      )}
                      {def.kind === 'percent' && (
                        <div className="flex items-center justify-end gap-1.5">
                          <input
                            type="number"
                            aria-label={`${def.name} (%)`}
                            step={def.step || '0.5'}
                            value={Number(((rawVal as number) * 100).toFixed(2))}
                            onChange={(e) => handlePercent(def.key, e.target.value)}
                            className="cell-input text-right"
                          />
                          <span className="text-[12px] font-semibold text-[var(--muted)] w-4 text-left">
                            %
                          </span>
                        </div>
                      )}
                      {def.kind === 'currency' && (
                        <div className="flex items-center justify-end gap-1.5">
                          <span className="text-[12px] font-semibold text-[var(--muted)]">
                            {parameters.currencySymbol}
                          </span>
                          <input
                            type="number"
                            aria-label={def.name}
                            step={def.step || '1000'}
                            min={0}
                            value={Number(rawVal)}
                            onChange={(e) => handleCurrency(def.key, e.target.value)}
                            className="cell-input text-right"
                          />
                        </div>
                      )}
                    </td>
                    <td className="text-[12.5px] text-[var(--muted)] leading-snug">
                      {def.description}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
