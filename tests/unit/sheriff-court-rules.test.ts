import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { mkdir, mkdtemp, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import {
  buildSheriffCourtRuleContext,
  discoverSheriffCourtRules,
  searchSheriffCourtRules,
} from '../../src/rules/sheriff-court-rules.js';

describe('Sheriff Court rules corpus', () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await mkdtemp(join(tmpdir(), 'atticus-sheriff-rules-'));
    await mkdir(join(tmpDir, 'sheriff-court-civil-procedure-rules', 'ordinary-cause-rules'), { recursive: true });
    await mkdir(join(tmpDir, 'sheriff-court-civil-procedure-rules', 'simple-procedure-rules-for-claims-initiated-on-or-after-31-may-2023'), { recursive: true });
    await mkdir(join(tmpDir, 'sheriff-court-forms'), { recursive: true });
    await mkdir(join(tmpDir, 'court-of-session-rules'), { recursive: true });

    await writeFile(
      join(tmpDir, 'sheriff-court-civil-procedure-rules', 'ordinary-cause-rules', 'chapter-9-service.md'),
      '# Ordinary Cause Chapter 9\nService and citation.',
    );
    await writeFile(
      join(tmpDir, 'sheriff-court-civil-procedure-rules', 'simple-procedure-rules-for-claims-initiated-on-or-after-31-may-2023', 'part-3-response.md'),
      '# Simple Procedure Part 3\nResponse procedure.',
    );
    await writeFile(join(tmpDir, 'sheriff-court-forms', 'simple-procedure-response-form.docx'), '');
    await writeFile(join(tmpDir, 'court-of-session-rules', 'chapter-58-judicial-review.md'), '# Court of Session');
  });

  afterEach(async () => {
    await rm(tmpDir, { recursive: true, force: true });
  });

  it('discovers only Sheriff Court rule documents', async () => {
    const rules = await discoverSheriffCourtRules(tmpDir);

    expect(rules).toHaveLength(2);
    expect(rules.every((rule) => rule.category === 'sheriff-court-civil-procedure-rules')).toBe(true);
    expect(rules.every((rule) => rule.documentKind === 'rule')).toBe(true);
    expect(rules.every((rule) => rule.skillIds.includes('atticus-sheriff-court-rules'))).toBe(true);
  });

  it('searches Sheriff Court rules without returning forms or Court of Session rules', async () => {
    const results = await searchSheriffCourtRules({
      query: 'simple procedure response',
      sourceDir: tmpDir,
      phaseId: 'procedural_route_planning',
      limit: 5,
    });

    expect(results.map((result) => result.fileName)).toContain('part-3-response.md');
    expect(results.every((result) => result.documentKind === 'rule')).toBe(true);
    expect(results.every((result) => result.category === 'sheriff-court-civil-procedure-rules')).toBe(true);
    expect(results.map((result) => result.fileName)).not.toContain('simple-procedure-response-form.docx');
    expect(results.map((result) => result.fileName)).not.toContain('chapter-58-judicial-review.md');
  });

  it('builds focused Sheriff Court context with the dedicated CLI route', async () => {
    const context = await buildSheriffCourtRuleContext({
      query: 'ordinary cause service sheriff court',
      sourceDir: tmpDir,
      phaseId: 'procedural_route_planning',
      skillIds: ['atticus-sheriff-court-rules'],
      limit: 2,
    });

    expect(context).toContain('Sheriff Court Rules Corpus');
    expect(context).toContain('chapter-9-service.md');
    expect(context).toContain('harness rules sheriff-court search');
    expect(context).not.toContain('simple-procedure-response-form.docx');
  });
});
