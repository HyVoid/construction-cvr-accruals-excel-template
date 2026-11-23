import {
  AccrualCtcRow,
  ClaimEscalationOrder,
  ComputedAccrualCtcRow,
  ComputedPostedCostRow,
  ComputedValueVoRow,
  ControlStatus,
  CvrEngineRow,
  DashboardSummary,
  FreezeProcurementOrder,
  GlobalParameters,
  PostedCostRow,
  ValueVoRow,
  WorkbookState,
} from '../types/cvr';
import { formatCurrency, formatPercent } from '../utils/format';

/**
 * Compares two YYYY-MM-DD date strings safely.
 * Returns true if dateStr is non-empty and <= cutoffDate.
 */
export function isOnOrBeforeCutoff(dateStr: string, cutoffDate: string): boolean {
  const d = (dateStr || '').trim();
  const c = (cutoffDate || '').trim();
  if (!d || !c) return false;
  return d <= c;
}

/**
 * Sheet 01: Value & Variations (01_产值与变更清单)
 * Computes columns J, K, L, M from inputs A-I and global parameters.
 */
export function computeValueVoRows(
  rows: ValueVoRow[],
  params: GlobalParameters
): ComputedValueVoRow[] {
  return rows.map((row) => {
    const hasCode = row.packageCode.trim() !== '';
    if (!hasCode) {
      return {
        ...row,
        validCertifiedValue: 0,
        appliedRiskFactor: 0,
        riskAdjustedVoValue: 0,
        bookInflatedVoValue: 0,
      };
    }

    const validCertifiedValue = isOnOrBeforeCutoff(row.valuationDate, params.cutoffDate)
      ? row.certifiedValue
      : 0;

    let appliedRiskFactor = params.voFactorC;
    if (row.voConfidence === 'Grade A') {
      appliedRiskFactor = params.voFactorA;
    } else if (row.voConfidence === 'Grade B') {
      appliedRiskFactor = params.voFactorB;
    }

    const riskAdjustedVoValue = row.pendingVoClaimed * appliedRiskFactor;
    const bookInflatedVoValue = row.pendingVoClaimed * params.bookInflatedVoRate;

    return {
      ...row,
      validCertifiedValue,
      appliedRiskFactor,
      riskAdjustedVoValue,
      bookInflatedVoValue,
    };
  });
}

/**
 * Sheet 02: Financial Posted Costs (02_财务已入账成本)
 * Computes columns G and H from inputs A-F and PRM_CUTOFF.
 */
export function computePostedCostRows(
  rows: PostedCostRow[],
  params: GlobalParameters
): ComputedPostedCostRow[] {
  return rows.map((row) => {
    const included = isOnOrBeforeCutoff(row.actualIncurredDate, params.cutoffDate);
    return {
      ...row,
      cutoffStatus: included ? 'Included in Period' : 'Excluded (Post Cut-off)',
      validPostedCost: included ? row.postedAmount : 0,
    };
  });
}

/**
 * Sheet 03: Site Accruals & CTC Assessment (03_现场预提与CTC评估)
 * Computes columns H, I, J from inputs A-G and PRM_CUTOFF.
 */
export function computeAccrualCtcRows(
  rows: AccrualCtcRow[],
  params: GlobalParameters
): ComputedAccrualCtcRow[] {
  return rows.map((row) => {
    const included = isOnOrBeforeCutoff(row.incurredDate, params.cutoffDate);
    const totalAccruals =
      row.unbilledPlantHire + row.unsettledSiteLabor + row.qsSubcontractVariance;
    return {
      ...row,
      cutoffStatus: included ? 'Included in Period' : 'Excluded (Post Cut-off)',
      validTotalAccruals: included ? totalAccruals : 0,
      validCtc: included ? row.latestCtc : 0,
    };
  });
}

/**
 * Sheet 04: Package-Level CVR Reconciliation Engine (04_工作包CVR对账引擎)
 * Replicates UNIQUE(TOCOL('01'!A5:A5000, 1)) and columns B through O.
 */
export function computeCvrEngineRows(
  computedValueVos: ComputedValueVoRow[],
  computedPostedCosts: ComputedPostedCostRow[],
  computedAccrualsCtc: ComputedAccrualCtcRow[],
  params: GlobalParameters
): CvrEngineRow[] {
  // UNIQUE preserving first-appearance order for non-empty trimmed package codes
  const uniqueCodes: string[] = [];
  const seen = new Set<string>();
  for (const row of computedValueVos) {
    const code = row.packageCode.trim();
    if (code && !seen.has(code)) {
      seen.add(code);
      uniqueCodes.push(code);
    }
  }

  return uniqueCodes.map((pkgCode) => {
    const matchingVos = computedValueVos.filter(
      (r) => r.packageCode.trim() === pkgCode
    );
    const firstVo = matchingVos[0];
    const packageName = firstVo ? firstVo.packageName : '';
    const subcontractor = firstVo ? firstVo.subcontractor : 'Unassigned Subcontractor';

    const budgetRevenue = matchingVos.reduce((sum, r) => sum + r.budgetRevenue, 0);
    const targetCost = matchingVos.reduce((sum, r) => sum + r.targetCost, 0);
    const targetMarginPct =
      budgetRevenue === 0 ? 0 : (budgetRevenue - targetCost) / budgetRevenue;

    const validCert = matchingVos.reduce((sum, r) => sum + r.validCertifiedValue, 0);
    const bookInflatedVo = matchingVos.reduce((sum, r) => sum + r.bookInflatedVoValue, 0);
    const riskAdjustedVo = matchingVos.reduce((sum, r) => sum + r.riskAdjustedVoValue, 0);

    const bookInflatedValue = validCert + bookInflatedVo;
    const cvrRiskAdjustedValue = validCert + riskAdjustedVo;

    const postedLedgerCost = computedPostedCosts
      .filter((r) => r.packageCode.trim() === pkgCode)
      .reduce((sum, r) => sum + r.validPostedCost, 0);

    const matchingAccruals = computedAccrualsCtc.filter(
      (r) => r.packageCode.trim() === pkgCode
    );
    const siteAccruals = matchingAccruals.reduce(
      (sum, r) => sum + r.validTotalAccruals,
      0
    );
    const actualIncurredCost = postedLedgerCost + siteAccruals;
    const latestCtc = matchingAccruals.reduce((sum, r) => sum + r.validCtc, 0);
    const forecastEac = actualIncurredCost + latestCtc;

    const bookPaperProfit = bookInflatedValue - postedLedgerCost;
    const cvrRealForecastProfit = cvrRiskAdjustedValue - forecastEac;
    const cvrRealMarginPct =
      cvrRiskAdjustedValue === 0 ? 0 : cvrRealForecastProfit / cvrRiskAdjustedValue;
    const marginDrift = cvrRealMarginPct - targetMarginPct;

    let controlStatus: ControlStatus = 'Controlled';
    if (marginDrift <= params.driftRedThreshold) {
      controlStatus = 'Red Alert — Freeze Procurement';
    } else if (marginDrift <= params.driftYellowThreshold) {
      controlStatus = 'Yellow Warning — Margin Erosion';
    }

    return {
      packageCode: pkgCode,
      packageName,
      subcontractor,
      targetMarginPct,
      bookInflatedValue,
      cvrRiskAdjustedValue,
      postedLedgerCost,
      siteAccruals,
      actualIncurredCost,
      latestCtc,
      forecastEac,
      bookPaperProfit,
      cvrRealForecastProfit,
      cvrRealMarginPct,
      marginDrift,
      controlStatus,
    };
  });
}

/**
 * Sheet 05: Paper vs. Real Profit & Margin Drift Dashboard (05_真假利润与漂移看板)
 */
export function computeDashboardSummary(
  engineRows: CvrEngineRow[],
  params: GlobalParameters
): DashboardSummary {
  const totalBookPaperProfit = engineRows.reduce((s, r) => s + r.bookPaperProfit, 0);
  const totalCvrRealForecastProfit = engineRows.reduce(
    (s, r) => s + r.cvrRealForecastProfit,
    0
  );
  const profitOverstatementRemoved = totalBookPaperProfit - totalCvrRealForecastProfit;

  const totalPostedCost = engineRows.reduce((s, r) => s + r.postedLedgerCost, 0);
  const totalSiteAccruals = engineRows.reduce((s, r) => s + r.siteAccruals, 0);
  const totalActualIncurredCost = engineRows.reduce(
    (s, r) => s + r.actualIncurredCost,
    0
  );
  const totalCvrRiskAdjustedValue = engineRows.reduce(
    (s, r) => s + r.cvrRiskAdjustedValue,
    0
  );
  const totalForecastEac = engineRows.reduce((s, r) => s + r.forecastEac, 0);

  const accrualOmissionRate =
    totalActualIncurredCost === 0 ? 0 : totalSiteAccruals / totalActualIncurredCost;
  const overallRealGrossMargin =
    totalCvrRiskAdjustedValue === 0
      ? 0
      : totalCvrRealForecastProfit / totalCvrRiskAdjustedValue;

  const isAccrualLagging = accrualOmissionRate > params.accrualWarnThreshold;
  const isMarginBelowTarget = overallRealGrossMargin < params.targetGrossMargin;

  const overstatementWarningText = `Alert: Conventional ledger reporting overstates profit by ${formatCurrency(
    profitOverstatementRemoved,
    params.currencySymbol
  )}, driven primarily by unposted site accruals, remaining CTC exposure, and unapproved VO recognition at ${formatPercent(
    params.bookInflatedVoRate
  )}.`;

  const accrualHealthMessage = isAccrualLagging
    ? `Financial Posting Lag: Unposted accrual ratio (${formatPercent(
        accrualOmissionRate
      )}) exceeds ${formatPercent(params.accrualWarnThreshold)} threshold`
    : `Timely Cost Recognition: Unposted accrual ratio (${formatPercent(
        accrualOmissionRate
      )}) within ${formatPercent(params.accrualWarnThreshold)} threshold`;

  const marginHealthMessage = isMarginBelowTarget
    ? `Overall Margin Below Target: ${formatPercent(
        overallRealGrossMargin
      )} < ${formatPercent(params.targetGrossMargin)} benchmark`
    : `Overall Margin On Target: ${formatPercent(
        overallRealGrossMargin
      )} >= ${formatPercent(params.targetGrossMargin)} benchmark`;

  const combinedHealthDiagnosis = `${accrualHealthMessage} | ${marginHealthMessage}`;

  const driftExceptionRows = engineRows
    .filter((r) => r.controlStatus !== 'Controlled')
    .sort((a, b) => a.marginDrift - b.marginDrift);

  return {
    totalBookPaperProfit,
    totalCvrRealForecastProfit,
    profitOverstatementRemoved,
    overstatementWarningText,
    totalPostedCost,
    totalSiteAccruals,
    totalActualIncurredCost,
    totalCvrRiskAdjustedValue,
    totalForecastEac,
    accrualOmissionRate,
    overallRealGrossMargin,
    isAccrualLagging,
    isMarginBelowTarget,
    accrualHealthMessage,
    marginHealthMessage,
    combinedHealthDiagnosis,
    driftExceptionRows,
  };
}

/**
 * Sheet 06: Pending Claim Escalation & Procurement Freeze Directives (06_索赔与冻结采购指令单)
 */
export function computeActionDirectives(
  valueVos: ValueVoRow[],
  engineRows: CvrEngineRow[],
  params: GlobalParameters
): {
  claimOrders: ClaimEscalationOrder[];
  freezeOrders: FreezeProcurementOrder[];
} {
  const claimOrders: ClaimEscalationOrder[] = valueVos
    .filter(
      (row) =>
        row.packageCode.trim() !== '' &&
        row.pendingVoClaimed >= params.claimMinThreshold &&
        row.voConfidence !== 'Grade A'
    )
    .map((row) => ({
      id: row.id,
      packageCode: row.packageCode.trim(),
      packageName: row.packageName,
      pendingVoClaimed: row.pendingVoClaimed,
      voConfidence: row.voConfidence,
      actionDirective: `Substantiation Required: Commercial (QS) must compile signed engineer instructions and site evidence for ${row.packageCode.trim()} within 5 business days. Claimed amount is ${formatCurrency(
        row.pendingVoClaimed,
        params.currencySymbol
      )} (${row.voConfidence}); do not recognize at 100% prior to client agreement.`,
    }));

  const freezeOrders: FreezeProcurementOrder[] = engineRows
    .filter((row) => row.marginDrift <= params.driftRedThreshold)
    .map((row) => {
      const subName = row.subcontractor || 'Unknown Subcontractor';
      return {
        packageCode: row.packageCode,
        packageName: row.packageName,
        subcontractor: subName,
        cvrRealForecastProfit: row.cvrRealForecastProfit,
        marginDrift: row.marginDrift,
        controlDirective: `Red Freeze Directive: Immediately freeze new material purchase orders and plant hire requisitions for ${row.packageCode} (Subcontractor: ${subName}). Hold interim progress payments exceeding QS certified value pending Project Director cost recovery review.`,
      };
    });

  return { claimOrders, freezeOrders };
}

/**
 * Runs the entire workbook calculation pipeline end-to-end.
 */
export function evaluateWorkbook(state: WorkbookState) {
  const computedValueVos = computeValueVoRows(state.valueVos, state.parameters);
  const computedPostedCosts = computePostedCostRows(
    state.postedCosts,
    state.parameters
  );
  const computedAccrualsCtc = computeAccrualCtcRows(
    state.accrualsCtc,
    state.parameters
  );
  const engineRows = computeCvrEngineRows(
    computedValueVos,
    computedPostedCosts,
    computedAccrualsCtc,
    state.parameters
  );
  const dashboard = computeDashboardSummary(engineRows, state.parameters);
  const directives = computeActionDirectives(
    state.valueVos,
    engineRows,
    state.parameters
  );

  return {
    computedValueVos,
    computedPostedCosts,
    computedAccrualsCtc,
    engineRows,
    dashboard,
    directives,
  };
}
