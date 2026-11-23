import test from 'node:test';
import assert from 'node:assert/strict';
import { INITIAL_WORKBOOK_STATE, cloneInitialState } from '../data/seedData';
import {
  computeAccrualCtcRows,
  computePostedCostRows,
  computeValueVoRows,
  evaluateWorkbook,
} from './cvrEngine';

test('Sheet 01 computes Cut-off certification and A/B/C risk-adjusted VOs accurately', () => {
  const state = cloneInitialState();
  // Set one package valuation date past cut-off
  state.valueVos[0].valuationDate = '2026-11-05';
  const rows = computeValueVoRows(state.valueVos, state.parameters);

  // PKG-01 past cut-off => validCertifiedValue = 0, Grade A => 0.85
  assert.equal(rows[0].validCertifiedValue, 0);
  assert.equal(rows[0].appliedRiskFactor, 0.85);
  assert.equal(rows[0].riskAdjustedVoValue, 120000 * 0.85);
  assert.equal(rows[0].bookInflatedVoValue, 120000 * 1.0);

  // PKG-02 Grade B => 0.50
  assert.equal(rows[1].validCertifiedValue, 3920000);
  assert.equal(rows[1].appliedRiskFactor, 0.5);
  assert.equal(rows[1].riskAdjustedVoValue, 130000);

  // PKG-03 Grade C => 0.10
  assert.equal(rows[2].appliedRiskFactor, 0.1);
  assert.equal(rows[2].riskAdjustedVoValue, 44000);
});

test('Sheet 02 and Sheet 03 strictly exclude post-cut-off records', () => {
  const state = cloneInitialState();
  const posted = computePostedCostRows(state.postedCosts, state.parameters);
  const excludedPosted = posted.filter((r) => r.cutoffStatus === 'Excluded (Post Cut-off)');
  assert.equal(excludedPosted.length, 2);
  excludedPosted.forEach((r) => assert.equal(r.validPostedCost, 0));

  const accruals = computeAccrualCtcRows(state.accrualsCtc, state.parameters);
  const excludedAccruals = accruals.filter(
    (r) => r.cutoffStatus === 'Excluded (Post Cut-off)'
  );
  assert.equal(excludedAccruals.length, 1);
  assert.equal(excludedAccruals[0].validTotalAccruals, 0);
  assert.equal(excludedAccruals[0].validCtc, 0);

  // Extending cut-off date to 2026-11-30 includes them
  state.parameters.cutoffDate = '2026-11-30';
  const postedLater = computePostedCostRows(state.postedCosts, state.parameters);
  assert.equal(
    postedLater.filter((r) => r.cutoffStatus === 'Excluded (Post Cut-off)').length,
    0
  );
});

test('Sheet 04 CVR Engine computes EAC, Paper vs Real Profit, Margin Drift, and Red/Yellow/Controlled alerts', () => {
  const result = evaluateWorkbook(INITIAL_WORKBOOK_STATE);
  assert.equal(result.engineRows.length, 7);

  // Verify PKG-03 (Unitized Curtain Wall) exact math
  const pkg3 = result.engineRows.find((r) => r.packageCode === 'PKG-03');
  assert.ok(pkg3);
  // Budget 3,600,000, target cost 3,096,000 => target margin 14.0%
  assert.ok(Math.abs(pkg3.targetMarginPct - 0.14) < 1e-9);
  // Certified 2,740,000 + Grade C VO (440,000 * 0.10 = 44,000) = 2,784,000
  assert.equal(pkg3.cvrRiskAdjustedValue, 2784000);
  // Book inflated value: 2,740,000 + 440,000 = 3,180,000
  assert.equal(pkg3.bookInflatedValue, 3180000);
  // Posted costs PKG-03: 1,210,000 + 690,000 = 1,900,000
  assert.equal(pkg3.postedLedgerCost, 1900000);
  // Site accruals PKG-03 (ACR-2026-08 is 2026-11-04 so excluded!): 215k + 128k + 345k = 688,000
  assert.equal(pkg3.siteAccruals, 688000);
  assert.equal(pkg3.actualIncurredCost, 2588000);
  assert.equal(pkg3.latestCtc, 465000);
  assert.equal(pkg3.forecastEac, 3053000);
  // Book paper profit: 3,180,000 - 1,900,000 = 1,280,000
  assert.equal(pkg3.bookPaperProfit, 1280000);
  // CVR real forecast profit: 2,784,000 - 3,053,000 = -269,000
  assert.equal(pkg3.cvrRealForecastProfit, -269000);
  assert.equal(pkg3.controlStatus, 'Red Alert — Freeze Procurement');
});

test('Sheet 05 Dashboard aggregates totals, checks lag & target margin, and sorts drift exceptions ascending', () => {
  const result = evaluateWorkbook(INITIAL_WORKBOOK_STATE);
  const { dashboard, engineRows } = result;

  const expectedBook = engineRows.reduce((s, r) => s + r.bookPaperProfit, 0);
  const expectedReal = engineRows.reduce((s, r) => s + r.cvrRealForecastProfit, 0);
  assert.equal(dashboard.totalBookPaperProfit, expectedBook);
  assert.equal(dashboard.totalCvrRealForecastProfit, expectedReal);
  assert.equal(dashboard.profitOverstatementRemoved, expectedBook - expectedReal);

  // Exception rows must exclude Controlled and be sorted worst drift first
  assert.ok(dashboard.driftExceptionRows.length >= 2);
  for (let i = 1; i < dashboard.driftExceptionRows.length; i++) {
    assert.ok(
      dashboard.driftExceptionRows[i - 1].marginDrift <=
        dashboard.driftExceptionRows[i].marginDrift
    );
  }
  assert.ok(dashboard.overstatementWarningText.includes('$'));
});

test('Sheet 06 Action Directives filter Claim Escalations and Freeze Procurement orders accurately', () => {
  const state = cloneInitialState();
  state.parameters.currencySymbol = '£';
  const result = evaluateWorkbook(state);

  // Claim orders: pendingVoClaimed >= 100,000 AND grade !== Grade A (PKG-02, PKG-03, PKG-04, PKG-05)
  const claimCodes = result.directives.claimOrders.map((c) => c.packageCode);
  assert.deepEqual(claimCodes, ['PKG-02', 'PKG-03', 'PKG-04', 'PKG-05']);
  assert.ok(result.directives.claimOrders[0].actionDirective.includes('£'));

  // Freeze orders: drift <= -5% (PKG-03, PKG-04)
  const freezeCodes = result.directives.freezeOrders.map((f) => f.packageCode);
  assert.ok(freezeCodes.includes('PKG-03'));
  assert.ok(freezeCodes.includes('PKG-04'));
  const pkg3Freeze = result.directives.freezeOrders.find((f) => f.packageCode === 'PKG-03');
  assert.ok(pkg3Freeze?.controlDirective.includes('Vanguard Facade Systems'));
});
