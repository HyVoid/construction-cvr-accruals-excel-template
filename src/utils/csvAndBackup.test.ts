import test from 'node:test';
import assert from 'node:assert/strict';
import { INITIAL_WORKBOOK_STATE } from '../data/seedData';
import {
  CSV_TEMPLATES,
  parseCsvForSheet,
  serializeBackup,
  validateAndParseBackup,
} from './csvAndBackup';

test('CSV parser parses valid templates for all three source sheets', () => {
  const voRes = parseCsvForSheet('value-vo', CSV_TEMPLATES['value-vo'].sample);
  assert.equal(voRes.errors.length, 0);
  assert.equal(voRes.rows.length, 2);

  const pcRes = parseCsvForSheet('posted-costs', CSV_TEMPLATES['posted-costs'].sample);
  assert.equal(pcRes.errors.length, 0);
  assert.equal(pcRes.rows.length, 2);

  const acRes = parseCsvForSheet('accruals-ctc', CSV_TEMPLATES['accruals-ctc'].sample);
  assert.equal(acRes.errors.length, 0);
  assert.equal(acRes.rows.length, 2);
});

test('CSV parser reports clear English validation errors on bad dates, numbers, and grades', () => {
  const badCsv = [
    'Package Code,Package Name,Subcontractor,Original Budget Revenue,Original Target Cost,Certified Value (IPC),Valuation Cut-off Date,Pending VO Claimed,VO Approval Confidence',
    'PKG-99,Test Package,Sub A,not-a-number,1000,500,10/31/2026,200,Grade Z',
  ].join('\n');

  const res = parseCsvForSheet('value-vo', badCsv);
  assert.equal(res.rows.length, 0);
  assert.ok(res.errors.length >= 3);
  assert.ok(res.errors.some((e) => e.includes('not a valid number')));
  assert.ok(res.errors.some((e) => e.includes('YYYY-MM-DD')));
  assert.ok(res.errors.some((e) => e.includes('Grade A, Grade B, or Grade C')));
});

test('Backup serializer and validator round-trip cleanly and reject corrupted backups', () => {
  const serialized = serializeBackup(INITIAL_WORKBOOK_STATE);
  const parsed = validateAndParseBackup(serialized);
  assert.equal(parsed.valid, true);
  if (parsed.valid) {
    assert.equal(parsed.state.parameters.cutoffDate, '2026-10-31');
    assert.equal(parsed.state.valueVos.length, INITIAL_WORKBOOK_STATE.valueVos.length);
  }

  const badJson = validateAndParseBackup('{broken');
  assert.equal(badJson.valid, false);

  const missingParams = validateAndParseBackup(JSON.stringify({ data: { valueVos: [] } }));
  assert.equal(missingParams.valid, false);
});
