
# Monthly Cost Value Reconciliation (CVR & Accruals)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform](https://img.shields.io/badge/Platform-Excel-217346.svg)
![Construction](https://img.shields.io/badge/Industry-Construction-orange.svg)
![Tool](https://img.shields.io/badge/Tool-Cost%20Control%20%26%20CVR-2251FF.svg)

**A monthly construction cost reconciliation framework that exposes hidden liabilities, discounts uncertain change-order revenue, and forecasts package-level profit before accounting reports turn into a false picture of project performance.**

> **Free to use. No signup. No installation.**
>
> This workbook helps construction teams reconcile certified value, booked costs, site accruals, disputed change orders, and remaining cost to complete.
>
> It is designed to turn fragmented monthly records into a defensible Cost Value Reconciliation (CVR) forecast.
>
> - **Excel workbook:** Download the workbook and maintain your monthly reconciliation records locally.
> - **No additional software subscription required:** The model operates within a supported spreadsheet environment.

---

## What It Helps You Track

- **Book profit versus forecast profit:** See how much reported profit is supported by actual project economics instead of invoice timing and optimistic revenue recognition.
- **Unbilled site liabilities:** Account for equipment hire, labor hours, and subcontractor valuation differences that have occurred but have not yet entered the financial ledger.
- **Change-order revenue risk:** Apply evidence-based confidence adjustments to pending variations instead of treating every submitted claim as fully recoverable.
- **Package-level cost exposure:** Identify which subcontract packages are experiencing margin deterioration and which are still within their original commercial targets.
- **Estimate at Completion (EAC):** Combine costs incurred, accruals, and remaining cost to complete into a forecast of the total cost required to finish.
- **Action-oriented cost control:** Convert high-risk variation claims and margin deterioration into follow-up and procurement-control actions.

---

## Quick Start Workflow

### 1. Set the reconciliation parameters

Open `00_Global Parameters` and define the monthly cut-off date, currency symbol, variation confidence factors, margin-drift thresholds, accrual warning threshold, and claim follow-up threshold.

The parameters are centralized. Changes to risk assumptions can be made without rebuilding the workbook.

### 2. Import or update your project records

Update the three input sheets:

- `01_Value & Variation Register` — package-level contract values, certified value, and pending variations.
- `02_Booked Cost Ledger` — financial ledger cost transactions.
- `03_Site Accruals & CTC` — unbilled equipment, labor, subcontract valuation differences, and cost to complete.

Existing spreadsheet exports can be copied into the designated input areas.

### 3. Review the package-level CVR

Open `04_Package CVR Engine`.

The workbook automatically consolidates revenue, booked costs, accruals, and CTC by package. It calculates forecast profit, forecast margin, margin drift, and package risk status.

### 4. Review management outputs and follow-up actions

Use `05_Profit Reality & Margin Drift Dashboard` to review project-level profit reconciliation and the worst-performing packages.

Use `06_Claims & Procurement Control Orders` to identify high-priority claims and packages requiring procurement or payment controls.

**Set the cut-off. Update the records. Review the reconciliation. Act on the exceptions.**

---

## Why I Built This

Construction projects can appear profitable during execution and suddenly reveal significant losses near completion.

The problem is often not a single bad cost estimate. It is the way different operational records are recognized at different times.

Finance may record costs only after invoices arrive. Meanwhile, site teams have already consumed equipment, labor, subcontractor work, and materials. Commercial teams may submit variations that remain disputed, negotiated, or unsupported by complete evidence. Management reports can therefore combine fully booked costs with incomplete liabilities and optimistic revenue assumptions.

That combination creates a misleading picture.

A project might report a healthy margin because the financial ledger contains only invoiced costs while pending variations are recognized at their full submitted value. But the project has already incurred additional liabilities that have not yet been booked, and the remaining work may require substantially more expenditure.

The reporting problem is fundamentally a reconciliation problem.

I designed this workbook around a package-level comparison of:

- Revenue supported by certification and risk-adjusted variations.
- Costs already booked by finance.
- Site liabilities that have occurred but have not yet been invoiced.
- The remaining cost required to finish each package.

Instead of waiting for accounting entries to catch up with the site, the reconciliation estimates the commercial position at the monthly cut-off.

For example, a package reporting a positive accounting profit may become marginal or loss-making once unbilled labor, equipment hire, subcontractor valuation differences, and remaining cost to complete are incorporated. The difference is not merely an accounting adjustment. It can change whether procurement continues, whether a claim needs urgent evidence, and whether the package requires a commercial review.

This is a productized reasoning framework rather than a one-off spreadsheet. The purpose is to make the same reconciliation logic repeatable every month, across packages, without manually rebuilding calculations or chasing disconnected reports.

---

## Common Construction Cost Control Problems This Solves

| Problem | Without This Tool | With This Tool |
|---|---|---|
| Unbilled site costs are missing from financial reports | Profit appears higher because incurred costs have not reached the ledger | Equipment, labor, and subcontract valuation differences are incorporated as accruals |
| Pending variations are recognized too optimistically | Submitted variation amounts are treated as if they were fully recoverable | Variation revenue is adjusted according to evidence and confidence levels |
| Finance and site records use different cut-off dates | Revenue and cost figures refer to different periods | Records are aligned to a common cut-off date |
| Remaining work is not reflected in current profitability | Management focuses on costs already incurred instead of the final cost of the package | EAC incorporates incurred cost and remaining CTC |
| Margin deterioration is hidden inside package totals | Project-level reporting conceals individual package losses | Package-level margin drift is automatically monitored |
| Commercial issues remain without actionable follow-up | Claims, evidence collection, procurement, and payment decisions remain disconnected | High-priority claims and red-alert packages generate follow-up instructions |

---

## Who This Is For

This workbook is designed for construction project managers, commercial managers, quantity surveyors (QS), cost controllers, project accountants, procurement teams, and contractors managing subcontract packages and monthly progress valuations.

It is particularly useful for projects where invoice timing does not reflect actual site consumption, variations remain unresolved, subcontractor valuations are regularly reconciled, and management needs a forecast of final profitability before completion.

It is suitable for general contracting, civil infrastructure, mechanical and electrical installation, facade, fit-out, and other package-based construction environments.

This is a lightweight monthly cost reconciliation and decision-support tool. It is not designed to replace an ERP, project accounting system, contractual valuation process, or professional judgment.

No spreadsheet expertise beyond basic data updating is required to operate the workflow. The workbook consolidates the analysis into a repeatable monthly process.

---

## About

I build lightweight operational trackers and decision-support tools for situations where too many moving parts make the next decision difficult.

The central question is simple: **What information needs to be in one place to make the next decision confidently?**

Monthly Cost Value Reconciliation is one example of that approach — bringing site liabilities, booked costs, revenue confidence, and forecast completion costs together into a repeatable commercial control framework.


## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

### Workbook Architecture

The workbook follows a four-layer architecture:

| Layer | Sheet | Responsibility |
|---|---|---|
| Global control | `00_Global Parameters` | Cut-off date, currency, variation confidence factors, margin drift thresholds, accrual warning thresholds, claim follow-up threshold, and target margin |
| Data inputs | `01_Value & Variation Register` | Package baseline, certified value, and pending variation data |
| Data inputs | `02_Booked Cost Ledger` | Financial cost ledger records |
| Data inputs | `03_Site Accruals & CTC` | Site accrual liabilities and cost-to-complete estimates |
| Calculation engine | `04_Package CVR Engine` | Package-level revenue reconciliation, cost aggregation, EAC, profit, margin, drift, and status |
| Management output | `05_Profit Reality & Margin Drift Dashboard` | Project-level reconciliation, accrual health, and exception ranking |
| Action output | `06_Claims & Procurement Control Orders` | Claim follow-up and red-alert procurement/payment control instructions |

#### Data Flow

```text
                   GLOBAL PARAMETERS
             Cut-off / Risk / Thresholds
                          |
        +-----------------+-----------------+
        |                 |                 |
        v                 v                 v
  VALUE & VO         BOOKED COST       SITE ACCRUALS
  REGISTER            LEDGER              & CTC
        |                 |                 |
        +-----------------+-----------------+
                          |
                          v
                 PACKAGE CVR ENGINE
                          |
          +---------------+---------------+
          |                               |
          v                               v
   MANAGEMENT DASHBOARD           ACTION INSTRUCTION SHEETS
   Profit & Margin Drift          Claims / Procurement / Payment
```

#### Reconciliation Logic

The calculation engine uses package codes as the primary aggregation key.

For each package, the model consolidates:

1. Cut-off-valid certified revenue.
2. Risk-adjusted pending variation revenue.
3. Booked financial costs.
4. Site accrual liabilities.
5. Remaining cost to complete.

The resulting EAC is compared with the risk-adjusted revenue forecast to derive package-level forecast profit and margin.

### Three Traps That Catch Even Experienced Construction Managers

#### Trap 1 — Treating Invoiced Costs as the Total Cost Incurred

**Decision:** A project manager concludes that a subcontract package remains profitable because the booked ledger shows costs below the budget.

**The hidden flaw:** Site labor, equipment hire, and completed subcontract work have already occurred but have not yet been invoiced or booked.

**Illustration:**

| | Amount |
|---|---:|
| Certified and reported revenue | 1,000,000 |
| Booked cost | 700,000 |
| Apparent profit | 300,000 |
| Unbilled site accruals | 180,000 |
| Actual incurred cost | 880,000 |
| Corrected incurred profit | 120,000 |

The apparent profit is overstated by 180,000 before even considering the remaining work.

The financial ledger is not necessarily wrong. It is incomplete for project forecasting.

The corrected approach is to reconcile ledger costs with operational liabilities at a common cut-off. Profitability should be assessed against costs already incurred, not only against invoices already processed.

<details>
<summary>Formula reference — incurred cost reconciliation</summary>

```excel
Booked Cost = SUMIFS(Valid_Booked_Cost, Package_Code)

Accruals = SUMIFS(Valid_Accruals, Package_Code)

Actual Incurred Cost = Booked Cost + Accruals
```

The workbook implements this aggregation through dynamic-array outputs and package-level `SUMIFS` logic.

</details>

#### Trap 2 — Treating Every Pending Variation as Fully Recoverable

**Decision:** A project reports the full value of submitted variations as revenue.

**The hidden flaw:** The variation may have incomplete evidence, unresolved pricing, disputed entitlement, or no formal instruction.

A submitted claim is not equivalent to an approved or recoverable value.

| Variation Evidence Status | Illustrative Confidence Factor |
|---|---:|
| A — Complete evidence / strong instruction | 85% |
| B — Negotiation or partial supporting evidence | 50% |
| C — Disputed or weak evidence | 10% |

These are configurable assessment factors, not contractual approval probabilities or accounting standards.

For example, a submitted variation of 200,000 assessed at Level B contributes 100,000 to the risk-adjusted revenue forecast under the default model.

The corrected approach separates the submitted amount from the risk-adjusted amount. This makes the uncertainty visible and prevents a pending claim from automatically inflating forecast profit.

<details>
<summary>Formula reference — variation risk adjustment</summary>

```excel
Risk-Adjusted Variation =
Submitted Variation Amount
* Confidence Factor
```

The confidence factor is assigned according to the selected variation evidence level.

</details>

#### Trap 3 — Ignoring the Remaining Cost to Complete

**Decision:** Management concludes that a package has acceptable profitability because the costs incurred so far are controlled.

**The hidden flaw:** The remaining scope may still require significant expenditure, and current incurred cost does not represent final package cost.

| | Amount |
|---|---:|
| Risk-adjusted revenue | 1,000,000 |
| Booked cost | 600,000 |
| Accruals | 100,000 |
| Incurred cost | 700,000 |
| Remaining CTC | 250,000 |
| Forecast EAC | 950,000 |
| Forecast profit | 50,000 |

The package has 300,000 of apparent profit when booked costs alone are deducted. After accruals and CTC, forecast profit is only 50,000.

The corrected approach is to forecast the cost of completing the entire package. The commercial decision should be based on the final expected cost, not the cost accumulated to date.

<details>
<summary>Formula reference — Estimate at Completion</summary>

```excel
EAC = Booked Cost + Accruals + CTC
```

</details>

### Example Scenario

Consider a subcontract package with the following commercial position at the monthly cut-off:

| Item | Amount |
|---|---:|
| Baseline revenue | 1,200,000 |
| Baseline target cost | 1,050,000 |
| Certified revenue | 850,000 |
| Pending variations | 200,000 |
| Variation evidence level | B |
| Booked cost | 720,000 |
| Unbilled equipment and labor | 80,000 |
| QS subcontract valuation difference | 40,000 |
| Remaining CTC | 260,000 |

#### Step 1 — Establish the Baseline Margin

The original target margin is based on the baseline contract value and target cost.

The package baseline margin is 12.5%.

#### Step 2 — Risk-Adjust Pending Variations

The pending variation amount of 200,000 is assessed at Level B.

Under the default 50% factor, the risk-adjusted variation value is 100,000.

The risk-adjusted forecast revenue is:

850,000 + 100,000 = 950,000

#### Step 3 — Reconcile Incurred Cost

Booked cost is 720,000.

Site accruals include:

- Equipment and labor: 80,000
- QS subcontract valuation difference: 40,000

Actual incurred cost is 840,000.

#### Step 4 — Forecast Completion Cost

The package's remaining CTC is 260,000.

EAC is:

840,000 + 260,000 = 1,100,000

#### Step 5 — Assess Forecast Profitability

| Metric | Amount |
|---|---:|
| Risk-adjusted revenue | 950,000 |
| EAC | 1,100,000 |
| Forecast profit | -150,000 |
| Forecast margin | -15.8% |
| Baseline margin | 12.5% |
| Margin drift | -28.3 percentage points |

The package is forecast to lose 150,000 under the current assumptions.

The problem is not merely that the package is underperforming. The combination of incomplete variation recovery and forecast completion cost has moved the package materially below its original commercial target.

The appropriate response is a commercial review, claim evidence follow-up, and cost-control intervention rather than continued reliance on the original budget margin.

### Formula Reference

The formulas below describe the workbook's calculation logic. Formula groups are organized by source sheet and calculation layer.

</details>


<details>
<summary>Formula Reference — Input and Calculation Sheets</summary>

#### Sheet 00 — Global Parameters

The global parameter sheet contains 11 parameters, configured in `C4:C14`.

| Cell | Parameter | Default |
|---|---|---:|
| C4 | Currency Symbol | User-defined |
| C5 | Cut-off Date | 2026-10-31 |
| C6 | Financial Variation Recognition Factor | 100% |
| C7 | Level A Variation Factor | 85% |
| C8 | Level B Variation Factor | 50% |
| C9 | Level C Variation Factor | 10% |
| C10 | Margin Drift Yellow Threshold | -3.0% |
| C11 | Margin Drift Red Threshold | -5.0% |
| C12 | Accrual Warning Threshold | 15.0% |
| C13 | Claim Follow-up Amount Threshold | 100,000 |
| C14 | Project Target Gross Margin | 12.0% |

The parameter values are the central configuration source for the workbook.

#### Sheet 01 — Value & Variation Register

##### Cut-off Valid Certified Revenue

Starting cell: `J5`

```excel
=IF(A5:A5000="", "", IF(G5:G5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

Only certified value associated with dates on or before the monthly cut-off is recognized.

##### Variation Confidence Factor

Starting cell: `K5`

```excel
=IF(A5:A5000="", "", IF(I5:I5000="A", '00_Global Parameters'!$C$7, IF(I5:I5000="B", '00_Global Parameters'!$C$8, '00_Global Parameters'!$C$9)))
```

The confidence factor is assigned according to the variation evidence level.

##### Risk-Adjusted Variation Value

Starting cell: `L5`

```excel
=IF(A5:A5000="", "", H5:H5000 * K5#)
```

##### Financially Recognized Pending Variation

Starting cell: `M5`

```excel
=IF(A5:A5000="", "", H5:H5000 * '00_Global Parameters'!$C$6)
```

This column reproduces the traditional full-recognition treatment under the configured financial variation factor. It is used as a comparison benchmark, not as an assertion of compliance with any particular accounting standard.

#### Sheet 02 — Booked Cost Ledger

##### Cut-off Classification

Starting cell: `G5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Cut-off Valid Booked Cost

Starting cell: `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

The workbook filters costs using the business actual occurrence date, rather than relying exclusively on the invoice posting date.

#### Sheet 03 — Site Accruals & CTC

##### Accrual Cut-off Classification

Starting cell: `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Valid Site Accruals

Starting cell: `I5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, D5:D5000 + E5:E5000 + F5:F5000, 0))
```

Accruals include:

- Unbilled equipment hire.
- Unsettled labor hours.
- QS-approved subcontract valuation differences.

##### Valid Cost to Complete

Starting cell: `J5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, G5:G5000, 0))
```

The CTC estimate is taken from the current assessment record associated with the cut-off.

#### Sheet 04 — Package CVR Engine

##### 1. Unique Package Codes

Starting cell: `A5`

```excel
=UNIQUE(TOCOL('01_Value & Variation Register'!A5:A5000, 1))
```

##### 2. Package Name

Starting cell: `B5`

```excel
=XLOOKUP(A5#, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!B5:B5000, "")
```

##### 3. Baseline Target Margin

Starting cell: `C5`

```excel
=LET(
    rev, SUMIFS('01_Value & Variation Register'!D5:D5000, '01_Value & Variation Register'!A5:A5000, A5#),
    cost, SUMIFS('01_Value & Variation Register'!E5:E5000, '01_Value & Variation Register'!A5:A5000, A5#),
    IF(rev=0, 0, (rev - cost) / rev)
)
```

##### 4. Financially Reported Revenue

Starting cell: `D5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!M5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

This reproduces the comparison revenue measure based on cut-off valid certified value and configured financial variation recognition.

##### 5. Risk-Adjusted CVR Revenue

Starting cell: `E5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!L5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

##### 6. Booked Cost

Starting cell: `F5`

```excel
=SUMIFS('02_Booked Cost Ledger'!H5#, '02_Booked Cost Ledger'!D5:D5000, A5#)
```

##### 7. Accruals

Starting cell: `G5`

```excel
=SUMIFS('03_Site Accruals & CTC'!I5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 8. Actual Incurred Cost

Starting cell: `H5`

```excel
=F5# + G5#
```

##### 9. Cost to Complete

Starting cell: `I5`

```excel
=SUMIFS('03_Site Accruals & CTC'!J5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 10. Estimate at Completion

Starting cell: `J5`

```excel
=H5# + I5#
```

##### 11. Financially Reported Profit

Starting cell: `K5`

```excel
=D5# - F5#
```

This comparison profit is based on financially recognized revenue and booked costs only.

##### 12. Forecast CVR Profit

Starting cell: `L5`

```excel
=E5# - J5#
```

##### 13. Forecast CVR Margin

Starting cell: `M5`

```excel
=IF(E5#=0, 0, L5# / E5#)
```

##### 14. Margin Drift

Starting cell: `N5`

```excel
=M5# - C5#
```

Margin drift is expressed as a difference in percentage points between the forecast margin and the original target margin.

##### 15. Package Control Status

Starting cell: `O5`

```excel
=IF(N5#<='00_Global Parameters'!$C$11, "RED ALERT - FREEZE PROCUREMENT", IF(N5#<='00_Global Parameters'!$C$10, "YELLOW ALERT - MARGIN DECLINE", "NORMAL"))
```

The package status is driven by the configured red and yellow margin drift thresholds.

</details>

<details>
<summary>Formula Reference — Dashboard and Action Sheets</summary>

#### Sheet 05 — Profit Reality & Margin Drift Dashboard

##### 1. Total Financially Reported Profit

Starting cell: `C5`

```excel
=SUM('04_Package CVR Engine'!K5#)
```

##### 2. Total Forecast CVR Profit

Starting cell: `C6`

```excel
=SUM('04_Package CVR Engine'!L5#)
```

##### 3. Profit Adjustment Difference

Starting cell: `C7`

```excel
=C5-C6
```

Management warning summary in `D7`:

```excel
="Warning: Reported profit exceeds the CVR forecast by "&'00_Global Parameters'!$C$4&TEXT(C7,"#,##0.00")&", primarily due to incomplete accruals and variation recognition assumptions."
```

##### 4. Accrual Health and Margin Diagnostic

Starting cell: `C8`

```excel
=LET(
    accr_rate, SUM('04_Package CVR Engine'!G5#) / SUM('04_Package CVR Engine'!H5#),
    real_gpm, SUM('04_Package CVR Engine'!L5#) / SUM('04_Package CVR Engine'!E5#),
    accr_msg, IF(accr_rate>'00_Global Parameters'!$C$12, "【Accrual Warning: "&TEXT(accr_rate,"0.0%")&" exceeds threshold】", "【Accrual Health: "&TEXT(accr_rate,"0.0%")&"】"),
    gpm_msg, IF(real_gpm<'00_Global Parameters'!$C$14, "【Project margin below target: "&TEXT(real_gpm,"0.0%")&" < "&TEXT('00_Global Parameters'!$C$14,"0.0%")&"】", "【Project margin meets target: "&TEXT(real_gpm,"0.0%")&"】"),
    accr_msg & " | " & gpm_msg
)
```

This formula evaluates accrual ratio and overall forecast gross margin against the configured thresholds.

##### 5. Margin Drift Exception Matrix

Starting cell: `A12`

```excel
=SORT(
    FILTER(
        '04_Package CVR Engine'!A5:O5000,
        ('04_Package CVR Engine'!A5:A5000<>"")*
        ('04_Package CVR Engine'!O5:O5000<>"NORMAL"),
        "All packages are currently within control thresholds"
    ),
    14,
    1
)
```

Packages with non-normal control status are filtered and ranked by margin drift.

#### Sheet 06 — Claims & Procurement Control Orders

##### 1. Claim Follow-up List

Starting cell: `A5`

```excel
=FILTER(
    CHOOSECOLS('01_Value & Variation Register'!A5:I5000, 1, 2, 8, 9),
    ('01_Value & Variation Register'!A5:A5000<>"")*
    ('01_Value & Variation Register'!H5:H5000>='00_Global Parameters'!$C$13)*
    ('01_Value & Variation Register'!I5:I5000<>"A"),
    "No claims meet the follow-up threshold"
)
```

The list identifies variations meeting the amount threshold but lacking Level A evidence.

##### 2. Claim Evidence Action Instruction

Starting cell: `E5`

```excel
=LET(
    pkg_codes, INDEX(A5#, 0, 1),
    IF(pkg_codes="No claims meet the follow-up threshold", "No claim follow-up required",
        "【Claim Follow-up】Commercial/QS team to complete supporting site records, signed instructions, and evidence for package "&pkg_codes&" within the current reporting cycle. Submitted variation amount: "&'00_Global Parameters'!$C$4&TEXT(INDEX(A5#, 0, 3),"#,##0.00")&". Evidence level: "&INDEX(A5#, 0, 4)&". Do not treat the full amount as confirmed revenue until entitlement and valuation are supported."
    )
)
```

##### 3. Red Alert Procurement Control List

Starting cell: `G5`

```excel
=FILTER(
    CHOOSECOLS('04_Package CVR Engine'!A5:O5000, 1, 2, 12, 14),
    ('04_Package CVR Engine'!A5:A5000<>"")*
    ('04_Package CVR Engine'!N5:N5000<='00_Global Parameters'!$C$11),
    "No package has reached the red alert threshold"
)
```

##### 4. Procurement and Payment Control Instruction

Starting cell: `K5`

```excel
=LET(
    red_codes, INDEX(G5#, 0, 1),
    sub_name, XLOOKUP(red_codes, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!C5:C5000, "Unknown Subcontractor"),
    IF(red_codes="No package has reached the red alert threshold", "Procurement and payment release remain subject to normal review",
        "【RED ALERT CONTROL】Freeze new procurement and equipment hire commitments for package "&red_codes&" (Subcontractor: "&sub_name&"). Review payment against verified valuation and approved obligations. Require a package cost review before releasing additional discretionary commitments."
    )
)
```

The control output is a management action recommendation. It is not a legal determination, contractual suspension instruction, or substitute for approved procurement and payment procedures.

</details>

### Validation Rules

| Field / Area | Rule | Error Behavior |
|---|---|---|
| Package Code | Must match the package identifier used throughout the workbook | Unmatched codes may not aggregate correctly |
| Package Name | Should remain consistent with the package code | Duplicate or inconsistent descriptions can create ambiguity |
| Baseline Revenue | Numeric value | Non-numeric values prevent correct margin calculations |
| Baseline Cost | Numeric value | Non-numeric values prevent correct margin calculations |
| Certified Revenue | Numeric value with a valid certification date | Invalid dates or values may be excluded or misclassified |
| Certification Date | Must be a valid Excel date | Cut-off calculation may fail if stored as text |
| Variation Amount | Numeric value | Text-formatted amounts may cause calculation errors |
| Variation Level | A, B, or C | Invalid classifications can cause incorrect confidence-factor assignment |
| Financial Posting Date | Valid date | Invalid date formats can disrupt transaction records |
| Business Actual Date | Valid date | Cut-off classification relies on this field |
| Package Code in Cost Ledger | Must correspond to an existing package code | Cost may not aggregate to the intended package |
| Accrual Date | Valid date | Cut-off logic may fail if date is stored as text |
| Equipment Accrual | Numeric value | Text-formatted amounts may cause calculation errors |
| Labor Accrual | Numeric value | Text-formatted amounts may cause calculation errors |
| QS Valuation Difference | Numeric value | Text-formatted amounts may cause calculation errors |
| CTC Estimate | Numeric value | Non-numeric values can prevent EAC calculation |
| Cut-off Date | Valid date in global parameters | All date-based reconciliation outputs depend on this date |
| Currency Symbol | Text symbol configured by the user | Numeric formats may need manual synchronization |
| Dynamic Array Output Areas | No manually entered values inside spill ranges | Blocked ranges may trigger `#SPILL!` |
| Excel Calculation Mode | Automatic calculation recommended | Manual mode may leave outputs stale |
| Variation Confidence Factors | Configured numeric percentages | Changes affect risk-adjusted revenue |
| Margin Drift Thresholds | Configured numeric percentages | Changes affect package alerts and procurement output |
| Claim Threshold | Numeric amount | Changes affect claim follow-up filtering |
| Target Margin | Numeric percentage | Changes affect project-level health assessment |

### Workbook Integrity Check

The implementation specification includes a cross-validation review of the architecture and data dictionary.

| Validation | Expected | Result |
|---|---:|---|
| Input fields | 26 | Fully mapped |
| Key output fields | 33 | Fully mapped |
| Global parameter references | 11 | Mapped to calculation or presentation outputs |
| Package CVR engine | 15 output columns | Fully mapped |
| Dashboard | 5 key output groups | Fully mapped |
| Action sheets | 4 key output groups | Fully mapped |

The design specification reports the cross-validation as complete. This is a design-level mapping review, not a claim that every deployed workbook instance has been independently tested.

</details>

---

## The Business Logic & Methodology

The workbook is built around a simple commercial principle: **project profit should be assessed using the revenue that is reasonably supportable and the cost required to deliver the entire scope, not just the transactions already processed by finance.**

- **Cut-off reconciliation:** Revenue and cost records are aligned to a common reporting date. This prevents transactions from different reporting periods from distorting the monthly commercial position.
- **Evidence-weighted variation assessment:** Pending variations are assessed according to their evidence status. This prevents uncertain claims from automatically inflating forecast revenue and highlights the work required to secure commercial entitlement.
- **Accrual recognition:** Site costs that have already occurred but have not yet been invoiced are brought into the reconciliation. This reduces the gap between financial reporting and actual site consumption.
- **Estimate at Completion:** Incurred costs and remaining completion costs are combined to estimate the final cost of the package. This allows profitability to be assessed before the project reaches completion.
- **Margin drift monitoring:** Current forecast margin is compared with the original commercial target. The deterioration is made visible at package level, allowing management to identify where intervention is required.
- **Exception-to-action workflow:** High-value unresolved variations and packages with significant margin deterioration are identified for commercial follow-up and procurement review.

The methods work together. Cut-off alignment establishes a consistent reporting basis. Risk-adjusted revenue and accrual recognition correct incomplete or optimistic inputs. EAC forecasts the final commercial outcome. Margin drift and exception filtering turn the reconciliation into an operational control process.

The objective is not to produce a more elaborate financial report. It is to make commercial exposure visible early enough for the project team to act.

---

## Monthly Operating Procedure

### Step 1 — Update the Cut-off and Parameters

Open `00_Global Parameters`.

Update the monthly cut-off date and confirm the currency symbol. Review variation confidence factors and alert thresholds if the commercial control policy has changed.

### Step 2 — Update the Source Records

Update the following sheets:

- `01_Value & Variation Register` — QS updates certified value, pending variations, and evidence level.
- `02_Booked Cost Ledger` — finance imports the relevant cost transactions.
- `03_Site Accruals & CTC` — site and commercial teams update unbilled liabilities and remaining completion cost.

### Step 3 — Review Cut-off Classification

Check the cut-off classification outputs in the booked cost and accrual sheets.

Confirm that transactions beyond the reporting cut-off are excluded and that the business actual dates reflect the correct reporting period.

### Step 4 — Review the Package CVR Engine

Open `04_Package CVR Engine`.

Check the package list, incurred cost, EAC, forecast profit, forecast margin, and margin drift status.

### Step 5 — Review Management Outputs

Open `05_Profit Reality & Margin Drift Dashboard`.

Review the reconciliation difference, accrual health, project-level forecast margin, and exception ranking.

### Step 6 — Issue Follow-up Actions

Open `06_Claims & Procurement Control Orders`.

Review the claim follow-up list and red alert procurement list. Validate the proposed actions against contracts, site records, procurement policies, and payment approval procedures before issuing formal instructions.

---

## Data Maintenance

### Adding New Transactions

Add records in the designated input areas of Sheets 01, 02, and 03.

Paste values into the input areas. Do not manually fill calculation columns.

### Adding a New Package

Add the package code and name in the Value & Variation Register.

The package code is automatically incorporated into the CVR engine through the dynamic unique package list.

### Changing Commercial Thresholds

Adjust the global parameter values.

The workbook recalculates the variation adjustment, margin drift classification, dashboard outputs, and action lists.

---

## Requirements & Limitations

- **Business scope:** Package-based construction projects with progress valuation, subcontracting, cost accumulation, variation management, and completion cost forecasting.
- **Aggregation level:** Package-level reconciliation.
- **Formula capacity:** Default source ranges cover up to 5,000 rows. Administrators can extend ranges if required.
- **Recommended operational data volume:** The implementation specification recommends keeping individual transaction tables below 50,000 rows for routine operation, with expansion up to 100,000 rows depending on workbook performance and formula adjustments.
- **Required spreadsheet environment:** Microsoft 365, Excel 2021, Excel 2024, or a compatible version of WPS supporting the dynamic-array functions used in the workbook.
- **Unsupported versions:** Excel 2016 and Excel 2019 or earlier are not supported by the dynamic-array implementation.
- **Collaboration:** During monthly reconciliation, avoid simultaneous edits to dynamic spill areas. A controlled single-editor workflow is recommended during close.
- **Accounting and contractual judgment:** Risk factors are configurable management assumptions. They do not replace accounting policy, contractual entitlement assessment, formal variation approval, or professional judgment.
- **Procurement and payment control:** The generated freeze or review instructions are management-control outputs. Formal actions must be reviewed against contractual obligations and internal authority.

### Troubleshooting

#### `#SPILL!` Errors

A dynamic array may be blocked by existing content or merged cells.

1. Select the cell displaying `#SPILL!`.
2. Identify the obstructed spill range.
3. Clear the blocking cells or remove incompatible merged cells.
4. Confirm the output expands normally.

#### Cost Data Does Not Aggregate

Check:

- Whether the transaction date falls after the cut-off.
- Whether the package code matches the register.
- Whether amounts or dates are stored as text.
- Whether Excel calculation mode is set to Automatic.

#### `#VALUE!` Errors After Import

External accounting exports may contain text-formatted numbers or dates.

Convert affected values to numeric/date formats and use paste-values workflows where appropriate.

#### Currency Symbol Does Not Match

Changing the currency symbol parameter does not necessarily change every Excel cell's number-format attributes.

If the project changes currency, synchronize the numeric display formats across the relevant monetary columns.

</details>

## Other Tools in This Series

Explore other lightweight construction and project-control tools in the [Theseus Workshop / HyVoid GitHub repositories](https://github.com/HyVoid).

Designed to support estimation, cost tracking, project management, and operational decision-making without requiring a full enterprise software implementation.

## License

This project is licensed under the **Apache License 2.0**.

See the [LICENSE](LICENSE) file for details.
