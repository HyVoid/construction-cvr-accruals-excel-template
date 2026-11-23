import {
  AccrualCtcRow,
  GlobalParameters,
  PostedCostRow,
  ValueVoRow,
  VoConfidenceGrade,
  WorkbookBackupFile,
  WorkbookState,
} from '../types/cvr';

export type CsvTargetSheet = 'value-vo' | 'posted-costs' | 'accruals-ctc';

export interface CsvParseResult<T> {
  rows: T[];
  errors: string[];
}

export const CSV_TEMPLATES: Record<CsvTargetSheet, { headers: string[]; sample: string }> = {
  'value-vo': {
    headers: [
      'Package Code',
      'Package Name',
      'Subcontractor',
      'Original Budget Revenue',
      'Original Target Cost',
      'Certified Value (IPC)',
      'Valuation Cut-off Date',
      'Pending VO Claimed',
      'VO Approval Confidence',
    ],
    sample: [
      'Package Code,Package Name,Subcontractor,Original Budget Revenue,Original Target Cost,Certified Value (IPC),Valuation Cut-off Date,Pending VO Claimed,VO Approval Confidence',
      'PKG-08,Roofing & Waterproofing,Summit Envelope Co.,980000,833000,610000,2026-10-28,135000,Grade B',
      'PKG-09,Fire Protection & Alarms,Aegis Life Safety Ltd.,760000,653600,520000,2026-10-29,48000,Grade A',
    ].join('\n'),
  },
  'posted-costs': {
    headers: [
      'Voucher No.',
      'Invoice Posting Date',
      'Actual Incurred Date',
      'Package Code',
      'Cost Category',
      'Posted Ledger Amount',
    ],
    sample: [
      'Voucher No.,Invoice Posting Date,Actual Incurred Date,Package Code,Cost Category,Posted Ledger Amount',
      'GL-2026-1201,2026-10-29,2026-10-25,PKG-01,Plant Hire,62500',
      'GL-2026-1202,2026-10-30,2026-10-27,PKG-05,Bulk Materials,118000',
    ].join('\n'),
  },
  'accruals-ctc': {
    headers: [
      'Accrual Doc No.',
      'Package Code',
      'Incurred Date',
      'Unbilled Plant Hire',
      'Unsettled Site Labor',
      'QS Subcontract Variance',
      'Latest CTC',
    ],
    sample: [
      'Accrual Doc No.,Package Code,Incurred Date,Unbilled Plant Hire,Unsettled Site Labor,QS Subcontract Variance,Latest CTC',
      'ACR-2026-11,PKG-05,2026-10-30,28000,19500,42000,150000',
      'ACR-2026-12,PKG-06,2026-10-31,12000,8500,15000,80000',
    ].join('\n'),
  },
};

/**
 * RFC-4180 compliant CSV line parser supporting quoted fields and escaped quotes.
 */
export function parseCsvMatrix(rawText: string): string[][] {
  const text = rawText.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        row.push(field.trim());
        field = '';
      } else if (ch === '\n') {
        row.push(field.trim());
        if (row.some((cell) => cell !== '')) {
          rows.push(row);
        }
        row = [];
        field = '';
      } else {
        field += ch;
      }
    }
  }
  row.push(field.trim());
  if (row.some((cell) => cell !== '')) {
    rows.push(row);
  }
  return rows;
}

function parseStrictNumber(raw: string, fieldName: string, rowNum: number, errors: string[]): number {
  const cleaned = raw.replace(/[$¥£€,\s]/g, '');
  if (cleaned === '') {
    errors.push(`Row ${rowNum}: "${fieldName}" is required and must be a valid number.`);
    return 0;
  }
  const num = Number(cleaned);
  if (!Number.isFinite(num)) {
    errors.push(`Row ${rowNum}: "${fieldName}" value "${raw}" is not a valid number.`);
    return 0;
  }
  return num;
}

function parseStrictDate(raw: string, fieldName: string, rowNum: number, errors: string[]): string {
  const trimmed = raw.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    errors.push(`Row ${rowNum}: "${fieldName}" must use YYYY-MM-DD format (received "${raw}").`);
    return trimmed;
  }
  return trimmed;
}

function parseVoGrade(raw: string, rowNum: number, errors: string[]): VoConfidenceGrade {
  const norm = raw.trim().toLowerCase();
  if (norm === 'grade a' || norm === 'a') return 'Grade A';
  if (norm === 'grade b' || norm === 'b') return 'Grade B';
  if (norm === 'grade c' || norm === 'c') return 'Grade C';
  errors.push(
    `Row ${rowNum}: "VO Approval Confidence" must be Grade A, Grade B, or Grade C (received "${raw}").`
  );
  return 'Grade C';
}

function looksLikeHeader(firstRow: string[], expectedFirstHeader: string): boolean {
  if (!firstRow.length) return false;
  const firstCell = firstRow[0].toLowerCase();
  return (
    firstCell === expectedFirstHeader.toLowerCase() ||
    firstCell.includes('package') ||
    firstCell.includes('voucher') ||
    firstCell.includes('accrual')
  );
}

export function parseCsvForSheet(
  target: CsvTargetSheet,
  csvText: string
): CsvParseResult<ValueVoRow | PostedCostRow | AccrualCtcRow> {
  const matrix = parseCsvMatrix(csvText);
  if (matrix.length === 0) {
    return { rows: [], errors: ['CSV input is empty. Please paste CSV content or upload a .csv file.'] };
  }

  const expectedHeaders = CSV_TEMPLATES[target].headers;
  const hasHeader = looksLikeHeader(matrix[0], expectedHeaders[0]);
  const dataRows = hasHeader ? matrix.slice(1) : matrix;

  if (dataRows.length === 0) {
    return { rows: [], errors: ['CSV contains only a header row and no data rows.'] };
  }

  const errors: string[] = [];
  const rows: Array<ValueVoRow | PostedCostRow | AccrualCtcRow> = [];
  const baseStamp = Date.now();

  dataRows.forEach((cols, idx) => {
    const rowNum = hasHeader ? idx + 2 : idx + 1;
    if (cols.length < expectedHeaders.length) {
      errors.push(
        `Row ${rowNum}: Expected ${expectedHeaders.length} columns (${expectedHeaders.join(
          ', '
        )}), but found ${cols.length}.`
      );
      return;
    }

    if (target === 'value-vo') {
      const packageCode = cols[0];
      const packageName = cols[1];
      const subcontractor = cols[2];
      if (!packageCode) errors.push(`Row ${rowNum}: "Package Code" cannot be empty.`);
      if (!packageName) errors.push(`Row ${rowNum}: "Package Name" cannot be empty.`);
      const budgetRevenue = parseStrictNumber(cols[3], 'Original Budget Revenue', rowNum, errors);
      const targetCost = parseStrictNumber(cols[4], 'Original Target Cost', rowNum, errors);
      const certifiedValue = parseStrictNumber(cols[5], 'Certified Value (IPC)', rowNum, errors);
      const valuationDate = parseStrictDate(cols[6], 'Valuation Cut-off Date', rowNum, errors);
      const pendingVoClaimed = parseStrictNumber(cols[7], 'Pending VO Claimed', rowNum, errors);
      const voConfidence = parseVoGrade(cols[8], rowNum, errors);

      rows.push({
        id: `csv-vo-${baseStamp}-${idx}`,
        packageCode,
        packageName,
        subcontractor: subcontractor || 'Unassigned Subcontractor',
        budgetRevenue,
        targetCost,
        certifiedValue,
        valuationDate,
        pendingVoClaimed,
        voConfidence,
      });
    } else if (target === 'posted-costs') {
      const voucherNo = cols[0];
      if (!voucherNo) errors.push(`Row ${rowNum}: "Voucher No." cannot be empty.`);
      const invoicePostingDate = parseStrictDate(cols[1], 'Invoice Posting Date', rowNum, errors);
      const actualIncurredDate = parseStrictDate(cols[2], 'Actual Incurred Date', rowNum, errors);
      const packageCode = cols[3];
      if (!packageCode) errors.push(`Row ${rowNum}: "Package Code" cannot be empty.`);
      const costCategory = cols[4] || 'General Cost';
      const postedAmount = parseStrictNumber(cols[5], 'Posted Ledger Amount', rowNum, errors);

      rows.push({
        id: `csv-pc-${baseStamp}-${idx}`,
        voucherNo,
        invoicePostingDate,
        actualIncurredDate,
        packageCode,
        costCategory,
        postedAmount,
      });
    } else {
      const accrualDocNo = cols[0];
      const packageCode = cols[1];
      if (!accrualDocNo) errors.push(`Row ${rowNum}: "Accrual Doc No." cannot be empty.`);
      if (!packageCode) errors.push(`Row ${rowNum}: "Package Code" cannot be empty.`);
      const incurredDate = parseStrictDate(cols[2], 'Incurred Date', rowNum, errors);
      const unbilledPlantHire = parseStrictNumber(cols[3], 'Unbilled Plant Hire', rowNum, errors);
      const unsettledSiteLabor = parseStrictNumber(cols[4], 'Unsettled Site Labor', rowNum, errors);
      const qsSubcontractVariance = parseStrictNumber(
        cols[5],
        'QS Subcontract Variance',
        rowNum,
        errors
      );
      const latestCtc = parseStrictNumber(cols[6], 'Latest CTC', rowNum, errors);

      rows.push({
        id: `csv-ac-${baseStamp}-${idx}`,
        accrualDocNo,
        packageCode,
        incurredDate,
        unbilledPlantHire,
        unsettledSiteLabor,
        qsSubcontractVariance,
        latestCtc,
      });
    }
  });

  return { rows: errors.length === 0 ? rows : [], errors };
}

export function serializeBackup(state: WorkbookState): string {
  const payload: WorkbookBackupFile = {
    schemaVersion: 1,
    app: 'Theseus Workshop — Construction CVR & Accruals Reconciliation',
    exportedAt: new Date().toISOString(),
    data: state,
  };
  return JSON.stringify(payload, null, 2);
}

function isFiniteNum(v: unknown): v is number {
  return typeof v === 'number' && Number.isFinite(v);
}

function isNonEmptyStr(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

function isDateStr(v: unknown): v is string {
  return typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
}

export function validateAndParseBackup(
  jsonText: string
): { valid: true; state: WorkbookState } | { valid: false; error: string } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    return {
      valid: false,
      error: 'Invalid JSON syntax. Please select a valid backup JSON file exported from this tool.',
    };
  }

  if (!parsed || typeof parsed !== 'object') {
    return { valid: false, error: 'Backup root must be a JSON object.' };
  }

  const root = parsed as Record<string, unknown>;
  const data = (root.data && typeof root.data === 'object'
    ? root.data
    : root) as Record<string, unknown>;

  if (!data.parameters || typeof data.parameters !== 'object') {
    return { valid: false, error: 'Backup is missing the "parameters" configuration block.' };
  }

  const p = data.parameters as Record<string, unknown>;
  const requiredNumericParams: Array<keyof GlobalParameters> = [
    'bookInflatedVoRate',
    'voFactorA',
    'voFactorB',
    'voFactorC',
    'driftYellowThreshold',
    'driftRedThreshold',
    'accrualWarnThreshold',
    'claimMinThreshold',
    'targetGrossMargin',
  ];

  if (!isNonEmptyStr(p.currencySymbol)) {
    return { valid: false, error: 'Invalid parameter: "currencySymbol" must be a non-empty string.' };
  }
  if (!isDateStr(p.cutoffDate)) {
    return { valid: false, error: 'Invalid parameter: "cutoffDate" must be in YYYY-MM-DD format.' };
  }
  for (const key of requiredNumericParams) {
    if (!isFiniteNum(p[key])) {
      return { valid: false, error: `Invalid parameter: "${key}" must be a finite number.` };
    }
  }

  if (!Array.isArray(data.valueVos)) {
    return { valid: false, error: 'Backup is missing the "valueVos" sheet array.' };
  }
  if (!Array.isArray(data.postedCosts)) {
    return { valid: false, error: 'Backup is missing the "postedCosts" sheet array.' };
  }
  if (!Array.isArray(data.accrualsCtc)) {
    return { valid: false, error: 'Backup is missing the "accrualsCtc" sheet array.' };
  }

  const validGrades = new Set(['Grade A', 'Grade B', 'Grade C']);

  for (let i = 0; i < data.valueVos.length; i++) {
    const r = data.valueVos[i] as Record<string, unknown>;
    if (
      !r ||
      typeof r !== 'object' ||
      typeof r.packageCode !== 'string' ||
      typeof r.packageName !== 'string' ||
      typeof r.subcontractor !== 'string' ||
      !isFiniteNum(r.budgetRevenue) ||
      !isFiniteNum(r.targetCost) ||
      !isFiniteNum(r.certifiedValue) ||
      typeof r.valuationDate !== 'string' ||
      !isFiniteNum(r.pendingVoClaimed) ||
      !validGrades.has(String(r.voConfidence))
    ) {
      return {
        valid: false,
        error: `Invalid row at index ${i} in "01 Value & VOs". Ensure all numeric fields and VO grades are valid.`,
      };
    }
  }

  for (let i = 0; i < data.postedCosts.length; i++) {
    const r = data.postedCosts[i] as Record<string, unknown>;
    if (
      !r ||
      typeof r !== 'object' ||
      typeof r.voucherNo !== 'string' ||
      typeof r.invoicePostingDate !== 'string' ||
      typeof r.actualIncurredDate !== 'string' ||
      typeof r.packageCode !== 'string' ||
      typeof r.costCategory !== 'string' ||
      !isFiniteNum(r.postedAmount)
    ) {
      return {
        valid: false,
        error: `Invalid row at index ${i} in "02 Posted Costs".`,
      };
    }
  }

  for (let i = 0; i < data.accrualsCtc.length; i++) {
    const r = data.accrualsCtc[i] as Record<string, unknown>;
    if (
      !r ||
      typeof r !== 'object' ||
      typeof r.accrualDocNo !== 'string' ||
      typeof r.packageCode !== 'string' ||
      typeof r.incurredDate !== 'string' ||
      !isFiniteNum(r.unbilledPlantHire) ||
      !isFiniteNum(r.unsettledSiteLabor) ||
      !isFiniteNum(r.qsSubcontractVariance) ||
      !isFiniteNum(r.latestCtc)
    ) {
      return {
        valid: false,
        error: `Invalid row at index ${i} in "03 Accruals & CTC".`,
      };
    }
  }

  const normalized: WorkbookState = {
    parameters: {
      currencySymbol: (p.currencySymbol as string).trim(),
      cutoffDate: p.cutoffDate as string,
      bookInflatedVoRate: p.bookInflatedVoRate as number,
      voFactorA: p.voFactorA as number,
      voFactorB: p.voFactorB as number,
      voFactorC: p.voFactorC as number,
      driftYellowThreshold: p.driftYellowThreshold as number,
      driftRedThreshold: p.driftRedThreshold as number,
      accrualWarnThreshold: p.accrualWarnThreshold as number,
      claimMinThreshold: p.claimMinThreshold as number,
      targetGrossMargin: p.targetGrossMargin as number,
    },
    valueVos: data.valueVos.map((r, i) => ({
      ...(r as ValueVoRow),
      id: (r as ValueVoRow).id || `restored-vo-${i}`,
    })),
    postedCosts: data.postedCosts.map((r, i) => ({
      ...(r as PostedCostRow),
      id: (r as PostedCostRow).id || `restored-pc-${i}`,
    })),
    accrualsCtc: data.accrualsCtc.map((r, i) => ({
      ...(r as AccrualCtcRow),
      id: (r as AccrualCtcRow).id || `restored-ac-${i}`,
    })),
  };

  return { valid: true, state: normalized };
}
