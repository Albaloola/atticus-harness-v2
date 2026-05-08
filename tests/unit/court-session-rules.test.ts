import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mkdtemp, rm, writeFile } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import {
  buildCourtOfSessionRuleContext,
  discoverCourtOfSessionRules,
  searchCourtOfSessionRuleEntries,
  type CourtOfSessionRuleIndexEntry,
} from '../../src/rules/court-session-rules.js';

describe('Court of Session rules corpus', () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await mkdtemp(join(tmpdir(), 'atticus-rcs-rules-'));
    await writeFile(join(tmpDir, 'chapter-23-motions.pdf'), '');
    await writeFile(join(tmpDir, 'chapter-35-recovery-of-evidence.pdf'), '');
    await writeFile(join(tmpDir, 'chapter-58-judicial-review.pdf'), '');
  });

  afterEach(async () => {
    await rm(tmpDir, { recursive: true, force: true });
  });

  it('discovers chapter metadata from downloaded PDF filenames', async () => {
    const chapters = await discoverCourtOfSessionRules(tmpDir);

    expect(chapters.map((chapter) => chapter.chapter)).toEqual(['23', '35', '58']);
    expect(chapters[0].title).toBe('Chapter 23 - Motions');
    expect(chapters[0].stageIds).toContain('procedural_route_planning');
    expect(chapters[0].skillIds).toContain('atticus-scots-procedure-router');
    expect(chapters[1].stageIds).toContain('evidence_ingestion_and_fact_extraction');
    expect(chapters[1].skillIds).toContain('atticus-scots-evidence-matrix');
  });

  it('discovers Markdown-normalized rule chapters', async () => {
    await writeFile(join(tmpDir, 'chapter-47-commercial-actions.md'), '# Chapter 47\n\nCommercial actions.');

    const chapters = await discoverCourtOfSessionRules(tmpDir);
    const commercial = chapters.find((chapter) => chapter.chapter === '47')!;

    expect(commercial.fileName).toBe('chapter-47-commercial-actions.md');
    expect(commercial.title).toBe('Chapter 47 - Commercial Actions');
    expect(commercial.stageIds).toContain('procedural_route_planning');
  });

  it('ranks indexed rule text by query and phase', async () => {
    const chapters = await discoverCourtOfSessionRules(tmpDir);
    const entries = chapters.map((chapter): CourtOfSessionRuleIndexEntry => ({
      ...chapter,
      sha256: `sha-${chapter.chapter}`,
      textHash: `text-${chapter.chapter}`,
      text: chapter.chapter === '23'
        ? 'Motions are enrolled and disposed of by the court under motion procedure.'
        : 'Judicial review petitions are brought by petition in the Outer House.',
      extractedAt: '2026-05-08T00:00:00.000Z',
    }));

    const results = searchCourtOfSessionRuleEntries(entries, {
      query: 'motion enrolled',
      phaseId: 'procedural_route_planning',
      skillIds: ['atticus-scots-procedure-router'],
    });

    expect(results[0].chapter).toBe('23');
    expect(results[0].snippet).toContain('Motions are enrolled');
    expect(results[0].indexed).toBe(true);
  });

  it('builds a skill/stage context with local rule paths', async () => {
    const context = await buildCourtOfSessionRuleContext({
      query: 'Court of Session judicial review petition',
      sourceDir: tmpDir,
      cachePath: join(tmpDir, 'missing-index.json'),
      phaseId: 'document_production',
      skillIds: ['atticus-court-of-session-rules'],
    });

    expect(context).toContain('Court of Session Rules Corpus');
    expect(context).toContain('chapter-58-judicial-review.pdf');
    expect(context).toContain('harness rules court-session search');
  });

  it('attaches rule context for evidence phases without requiring a selected skill', async () => {
    const context = await buildCourtOfSessionRuleContext({
      query: 'productions recovery proof',
      sourceDir: tmpDir,
      cachePath: join(tmpDir, 'missing-index.json'),
      phaseId: 'evidence_ingestion_and_fact_extraction',
    });

    expect(context).toContain('Court of Session Rules Corpus');
    expect(context).toContain('chapter-35-recovery-of-evidence.pdf');
  });
});
