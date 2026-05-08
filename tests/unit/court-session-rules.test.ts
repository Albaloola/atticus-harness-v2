import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import {
  buildCourtOfSessionRuleContext,
  buildCourtOfSessionRulesIndex,
  DEFAULT_COURT_OF_SESSION_RULES_CACHE_PATH,
  discoverCourtOfSessionRules,
  resolveCourtOfSessionRulesDir,
  searchCourtOfSessionRules,
  searchCourtOfSessionRuleEntries,
  type CourtOfSessionRuleIndexEntry,
} from '../../src/rules/court-session-rules.js';
import { DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH } from '../../src/rules/scotcourts-corpus.js';

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

  it('uses the shared ScotCourts cache path and corpus identity for Court of Session indexes', async () => {
    await rm(tmpDir, { recursive: true, force: true });
    await mkdir(tmpDir, { recursive: true });
    await writeFile(join(tmpDir, 'chapter-23-motions.md'), '# Chapter 23\n\nMotions are enrolled.');
    const cachePath = join(tmpDir, 'rules.index.json');

    const index = await buildCourtOfSessionRulesIndex({ sourceDir: tmpDir, cachePath });
    const cached = JSON.parse(await readFile(cachePath, 'utf-8')) as { corpusId: string };

    expect(DEFAULT_COURT_OF_SESSION_RULES_CACHE_PATH).toBe(DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH);
    expect(index.corpusId).toBe('scotcourts-corpus');
    expect(cached.corpusId).toBe('scotcourts-corpus');
    expect(index.entries).toHaveLength(1);
  });

  it('defaults Court of Session discovery to the harness-owned ScotCourts corpus, not the legacy focused env var', () => {
    const previousScotCourtsDir = process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR;
    const previousCourtSessionDir = process.env.ATTICUS_COURT_SESSION_RULES_DIR;
    delete process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR;
    process.env.ATTICUS_COURT_SESSION_RULES_DIR = tmpDir;

    try {
      expect(resolveCourtOfSessionRulesDir()).toBe(join(process.cwd(), 'legal-corpora/scotcourts'));
    } finally {
      if (previousScotCourtsDir === undefined) {
        delete process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR;
      } else {
        process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR = previousScotCourtsDir;
      }
      if (previousCourtSessionDir === undefined) {
        delete process.env.ATTICUS_COURT_SESSION_RULES_DIR;
      } else {
        process.env.ATTICUS_COURT_SESSION_RULES_DIR = previousCourtSessionDir;
      }
    }
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
    expect(context).not.toContain(tmpDir);
  });

  it('attaches rule context for evidence phases without requiring a selected skill', async () => {
    const context = await buildCourtOfSessionRuleContext({
      query: 'productions recovery proof',
      sourceDir: tmpDir,
      cachePath: join(tmpDir, 'missing-index.json'),
      phaseId: 'evidence_ingestion_and_fact_extraction',
      matterMeta: { jurisdiction: 'Scotland', forum: 'Court of Session' },
    });

    expect(context).toContain('Court of Session Rules Corpus');
    expect(context).toContain('chapter-35-recovery-of-evidence.pdf');
  });

  it('does not attach Court of Session context for a non-Scotland matter just because a phase is present', async () => {
    const context = await buildCourtOfSessionRuleContext({
      query: 'California breach of contract complaint',
      sourceDir: tmpDir,
      cachePath: join(tmpDir, 'missing-index.json'),
      phaseId: 'document_production',
      matterMeta: { jurisdiction: 'California', forum: 'Superior Court' },
    });

    expect(context).toBe('');
  });

  it('does not attach Court of Session context for generic judicial review without a Scotland signal', async () => {
    const context = await buildCourtOfSessionRuleContext({
      query: 'judicial review petition deadline',
      sourceDir: tmpDir,
      cachePath: join(tmpDir, 'missing-index.json'),
    });

    expect(context).toBe('');
  });

  it('attaches Court of Session context for Scots judicial review procedure', async () => {
    const context = await buildCourtOfSessionRuleContext({
      query: 'Scots judicial review petition deadline',
      sourceDir: tmpDir,
      cachePath: join(tmpDir, 'missing-index.json'),
    });

    expect(context).toContain('Court of Session Rules Corpus');
  });

  it('falls back to live rule metadata when the text cache is stale', async () => {
    await rm(tmpDir, { recursive: true, force: true });
    await mkdir(tmpDir, { recursive: true });
    await writeFile(join(tmpDir, 'chapter-23-motions.md'), '# Chapter 23\n\nMotions are enrolled.');
    const cachePath = join(tmpDir, 'rules.index.json');
    await buildCourtOfSessionRulesIndex({ sourceDir: tmpDir, cachePath });
    await writeFile(join(tmpDir, 'chapter-58-judicial-review.md'), '# Chapter 58\n\nJudicial review petitions.');

    const results = await searchCourtOfSessionRules({
      query: 'judicial review petition',
      sourceDir: tmpDir,
      cachePath,
    });

    expect(results[0].chapter).toBe('58');
    expect(results[0].indexed).toBe(false);
  });
});
