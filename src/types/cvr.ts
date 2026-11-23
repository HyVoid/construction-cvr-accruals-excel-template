export type SheetId =
  | 'parameters'
  | 'value-vo'
  | 'posted-costs'
  | 'accruals-ctc'
  | 'cvr-engine'
  | 'dashboard'
  | 'directives';

export type VoConfidenceGrade = 'Grade A' | 'Grade B' | 'Grade C';

export type CutoffStatus = 'Included in Period' | 'Excluded (Post Cut-off)';

export type ControlStatus =
  | 'Red Alert — Freeze Procurement'
  | 'Yellow Warning — Margin Erosion'
  | 'Controlled';

export interface GlobalParameters {
  currencySymbol: string;       // C4: PRM_CURR
  cutoffDate: string;           // C5: PRM_CUTOFF (YYYY-MM-DD)
  bookInflatedVoRate: number;   // C6: PRM_FAKE_VO (decimal, e.g. 1.0 = 100%)
  voFactorA: number;            // C7: PRM_VO_A (decimal, e.g. 0.85)
  voFactorB: number;            // C8: PRM_VO_B (decimal, e.g. 0.50)
  voFactorC: number;            // C9: PRM_VO_C (decimal, e.g. 0.10)
  driftYellowThreshold: number; // C10: PRM_DRIFT_YLW (decimal, e.g. -0.03)
  driftRedThreshold: number;    // C11: PRM_DRIFT_RED (decimal, e.g. -0.05)
  accrualWarnThreshold: number; // C12: PRM_ACCR_WARN (decimal, e.g. 0.15)
  claimMinThreshold: number;    // C13: PRM_CLAIM_MIN (currency amount, e.g. 100000)
  targetGrossMargin: number;    // C14: PRM_TGT_GPM (decimal, e.g. 0.12)
}

export interface ValueVoRow {
  id: string;
  packageCode: string;          // A
  packageName: string;          // B
  subcontractor: string;        // C
  budgetRevenue: number;        // D
  targetCost: number;           // E
  certifiedValue: number;       // F
  valuationDate: string;        // G (YYYY-MM-DD)
  pendingVoClaimed: number;     // H
  voConfidence: VoConfidenceGrade; // I
}

export interface ComputedValueVoRow extends ValueVoRow {
  validCertifiedValue: number;  // J
  appliedRiskFactor: number;    // K
  riskAdjustedVoValue: number;  // L
  bookInflatedVoValue: number;  // M
}

export interface PostedCostRow {
  id: string;
  voucherNo: string;            // A
  invoicePostingDate: string;   // B (YYYY-MM-DD)
  actualIncurredDate: string;   // C (YYYY-MM-DD)
  packageCode: string;          // D
  costCategory: string;         // E
  postedAmount: number;         // F
}

export interface ComputedPostedCostRow extends PostedCostRow {
  cutoffStatus: CutoffStatus;   // G
  validPostedCost: number;      // H
}

export interface AccrualCtcRow {
  id: string;
  accrualDocNo: string;         // A
  packageCode: string;          // B
  incurredDate: string;         // C (YYYY-MM-DD)
  unbilledPlantHire: number;    // D
  unsettledSiteLabor: number;   // E
  qsSubcontractVariance: number;// F
  latestCtc: number;            // G
}

export interface ComputedAccrualCtcRow extends AccrualCtcRow {
  cutoffStatus: CutoffStatus;   // H
  validTotalAccruals: number;   // I
  validCtc: number;             // J
}

export interface CvrEngineRow {
  packageCode: string;          // A
  packageName: string;          // B
  subcontractor: string;        // Lookup for directives
  targetMarginPct: number;      // C
  bookInflatedValue: number;    // D
  cvrRiskAdjustedValue: number; // E
  postedLedgerCost: number;     // F
  siteAccruals: number;         // G
  actualIncurredCost: number;   // H
  latestCtc: number;            // I
  forecastEac: number;          // J
  bookPaperProfit: number;      // K
  cvrRealForecastProfit: number;// L
  cvrRealMarginPct: number;     // M
  marginDrift: number;          // N
  controlStatus: ControlStatus; // O
}

export interface DashboardSummary {
  totalBookPaperProfit: number;         // C5
  totalCvrRealForecastProfit: number;   // C6
  profitOverstatementRemoved: number;   // C7
  overstatementWarningText: string;     // D7
  totalPostedCost: number;
  totalSiteAccruals: number;
  totalActualIncurredCost: number;
  totalCvrRiskAdjustedValue: number;
  totalForecastEac: number;
  accrualOmissionRate: number;
  overallRealGrossMargin: number;
  isAccrualLagging: boolean;
  isMarginBelowTarget: boolean;
  accrualHealthMessage: string;
  marginHealthMessage: string;
  combinedHealthDiagnosis: string;      // C8
  driftExceptionRows: CvrEngineRow[];   // A12# sorted asc by marginDrift
}

export interface ClaimEscalationOrder {
  id: string;
  packageCode: string;
  packageName: string;
  pendingVoClaimed: number;
  voConfidence: VoConfidenceGrade;
  actionDirective: string;
}

export interface FreezeProcurementOrder {
  packageCode: string;
  packageName: string;
  subcontractor: string;
  cvrRealForecastProfit: number;
  marginDrift: number;
  controlDirective: string;
}

export interface WorkbookState {
  parameters: GlobalParameters;
  valueVos: ValueVoRow[];
  postedCosts: PostedCostRow[];
  accrualsCtc: AccrualCtcRow[];
}

export interface WorkbookBackupFile {
  schemaVersion: number;
  app: string;
  exportedAt: string;
  data: WorkbookState;
}
