import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { extractDocxText } from '../src/export/docx-render-verify.js';
import { runReviewReadyExport } from '../src/export/review-ready-export.js';
import { getMatterPath, initMatter, deleteMatter } from '../src/storage/matter.js';
import { saveCandidate } from '../src/storage/candidate.js';
import { upsertWorkProduct } from '../src/work-products/store.js';
import type { UnknownWorkProduct } from '../src/work-products/types.js';

describe('review-ready export', () => {
  const matterName = 'review-ready-export-test';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    await deleteMatter(matterName);
  });

  it('does not export unaccepted candidates as review-ready documents', async () => {
    await saveCandidate(matterName, {
      id: 'candidate-only',
      matterName,
      type: 'draft',
      title: 'Unaccepted candidate',
      content: 'This candidate has not passed reducer acceptance and should not be exported as a review-ready document.',
      status: 'candidate',
      created: now(),
      metadata: { phase: 'document_production' },
    });

    const result = await runReviewReadyExport({ matterName, generatedAt: fixedDate() });

    expect(result.exported).toHaveLength(0);
    expect(result.blockers).toContain('No work products passed review-ready export gates.');
    const files = await readdir(getMatterPath(matterName, '_output'));
    expect(files).toEqual(['review-readiness-report.md']);
    const report = await readFile(result.readinessReportPath, 'utf-8');
    expect(report).toContain('No typed work products were available');
  });

  it('fails thin fallback documents at the export gate', async () => {
    await upsertWorkProduct(matterName, {
      ...baseMemo('thin-memo'),
      title: 'Thin fallback memo',
      content: 'Fallback fragment.',
      readiness: 'operator_review_ready',
    });

    const result = await runReviewReadyExport({ matterName, generatedAt: fixedDate() });

    expect(result.exported).toHaveLength(0);
    expect(result.unsafeNotReady[0]?.reasons.join('\n')).toMatch(/Content looks|INSUFFICIENT_CONTENT/);
    const files = await readdir(getMatterPath(matterName, '_output'));
    expect(files).toEqual(['review-readiness-report.md']);
  });

  it('exports a valid memo with manifest, source map, markdown, and readable DOCX', async () => {
    await upsertWorkProduct(matterName, baseMemo('valid-memo'));

    const result = await runReviewReadyExport({
      matterName,
      generatedAt: fixedDate(),
      runIds: ['run-13'],
    });

    expect(result.blockers).toHaveLength(0);
    expect(result.exported).toHaveLength(1);
    expect(result.manifestPath).toBeTruthy();
    expect(result.sourceMapPath).toBeTruthy();

    const manifest = JSON.parse(await readFile(result.manifestPath!, 'utf-8')) as {
      exportedWorkProductIds: string[];
      runIds: string[];
      sourceMap: Array<{ sourceId: string; authorityRefs: string[] }>;
      files: Array<{ role: string; workProductId?: string }>;
    };
    expect(manifest.exportedWorkProductIds).toEqual(['valid-memo']);
    expect(manifest.runIds).toEqual(['run-13']);
    expect(manifest.sourceMap[0]).toMatchObject({ sourceId: 'LAW-42', authorityRefs: ['Authority v Agency [2025] CSOH 1'] });
    expect(manifest.files.some((file) => file.role === 'manifest')).toBe(true);
    expect(manifest.files.filter((file) => file.workProductId === 'valid-memo')).toHaveLength(2);

    const sourceMap = await readFile(result.sourceMapPath!, 'utf-8');
    expect(sourceMap).toContain('law:LAW-42');
    expect(sourceMap).toContain('Authority v Agency [2025] CSOH 1');

    const markdown = await readFile(result.exported[0].markdownPath, 'utf-8');
    expect(markdown).toContain('## Citation and Source Map');
    expect(markdown).not.toMatch(/"payload"\s*:/);

    const docxText = await extractDocxText(await readFile(result.exported[0].docxPath));
    expect(docxText).toContain('Procedural Fairness Memo');
    expect(docxText).toContain('Citation and Source Map');
    expect(docxText).not.toMatch(/"payload"\s*:/);
  });

  it('writes only a failure/readiness report when no docs pass', async () => {
    await upsertWorkProduct(matterName, {
      ...baseMemo('raw-memo'),
      readiness: 'structured',
    });

    const result = await runReviewReadyExport({ matterName, generatedAt: fixedDate() });

    expect(result.exported).toHaveLength(0);
    expect(result.manifestPath).toBeUndefined();
    const files = await readdir(getMatterPath(matterName, '_output'));
    expect(files).toEqual(['review-readiness-report.md']);
    const report = await readFile(join(getMatterPath(matterName, '_output'), 'review-readiness-report.md'), 'utf-8');
    expect(report).toContain('No review-ready documents were exported');
    expect(report).toContain('requires at least operator_review_ready');
  });
});

function baseMemo(id: string): UnknownWorkProduct {
  return {
    id,
    matterName: 'review-ready-export-test',
    type: 'legal_research_memo',
    title: 'Procedural Fairness Memo',
    content: [
      '## Issue',
      'The legal question is whether the agency decision can be challenged for procedural unfairness where the affected party did not receive a meaningful opportunity to answer the decisive point.',
      '',
      '## Jurisdiction and Forum',
      'The proposed jurisdiction and forum for operator review is the Court of Session, subject to a final limitation check before any external action is approved.',
      '',
      '## Facts',
      'The file records notice, response correspondence, and the final decision. The evidence supports a focused chronology and identifies the procedural step that was skipped.',
      '',
      '## Law',
      'Authority v Agency [2025] CSOH 1 and the cited statutory appeal provisions require fair notice, a chance to make representations, and reasons that engage with the decisive evidence.',
      '',
      '## Analysis',
      'Applying those authorities, the strongest review point is that the decision maker relied on a new ground without putting it to the client. That creates a credible procedural fairness argument and supports interim preservation steps.',
      '',
      '## Conclusion',
      'The memo is review-ready for operator assessment. It identifies the forum, legal basis, evidence anchors, risks, and next actions without presenting the draft as filed or sent.',
      '',
      '## Uncertainties',
      'The final deadline and any alternative remedy objection remain uncertainties for operator review.',
      '',
      '## Risks',
      'The main risks are a short deadline, a possible alternative remedy argument, and evidential challenge to the notice chronology.',
      '',
      '## Next Actions',
      'Confirm the final deadline, review the evidence chronology, and decide whether to instruct a draft petition.',
      '',
      '## Authorities',
      'Authority v Agency [2025] CSOH 1 is the current primary authority anchor.',
    ].join('\n'),
    readiness: 'operator_review_ready',
    purpose: 'Assess procedural fairness challenge and prepare operator review.',
    audience: 'Operator and supervising solicitor',
    sourceBasis: [{
      sourceType: 'law',
      sourceId: 'LAW-42',
      description: 'Primary authority and statutory route notes',
      authorityRefs: ['Authority v Agency [2025] CSOH 1'],
    }, {
      sourceType: 'evidence',
      sourceId: 'EV-7',
      description: 'Notice, response, and final decision correspondence',
    }],
    unresolvedGaps: [],
    safetyStatus: 'safe',
    metadata: {},
    payload: {
      legalQuestion: 'Whether procedural fairness grounds support challenge',
      jurisdiction: 'Scotland',
      forum: 'Court of Session',
      facts: ['Notice received', 'Response submitted', 'Decision issued on new ground'],
      law: 'Procedural fairness and statutory appeal provisions',
      laws: ['Statutory appeal route', 'Procedural fairness authorities'],
      analysis: 'The decision appears vulnerable because the decisive new ground was not put for response.',
      conclusion: 'Proceed with operator review of challenge route.',
      uncertainties: ['Final limitation date should be rechecked before filing.'],
      risks: ['Short deadline and possible alternative remedy argument.'],
      nextActions: ['Confirm final deadline', 'Prepare draft petition if operator approves.'],
      authorities: ['Authority v Agency [2025] CSOH 1'],
    } as any,
    createdAt: now(),
    updatedAt: now(),
  };
}

function now(): string {
  return new Date().toISOString();
}

function fixedDate(): Date {
  return new Date('2026-05-11T12:00:00.000Z');
}
