import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { existsSync, mkdtempSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { hashText } from '../../src/extraction/hash.js';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { closeStateDb } from '../../src/state/store.js';
import { closeDb, getDb } from '../../src/storage/sqlite/index.js';
import {
  insertEvidenceChunkV2,
  insertEvidenceItemV2,
  insertEvidencePageV2,
} from '../../src/storage/sqlite/evidence.js';
import {
  addFindingCitation,
  proposeFinding,
} from '../../src/findings/finding-store.js';
import type { FindingCriticality } from '../../src/domain/finding.js';
import { promoteFindingToAccepted } from '../../src/findings/finding-promoter.js';
import { verifyExactQuote } from '../../src/citations/exact-quote-verifier.js';
import { runInvestigationWorkflow } from '../../src/workflows/investigation-workflow.js';
import { createReviewTask, completeReviewTask } from '../../src/review/review-store.js';
import { evaluateLegalReadiness } from '../../src/gates/legal-readiness.js';
import {
  createDraftCitation,
  createDraftParagraph,
  createDraftSection,
  createDraftOutline,
} from '../../src/drafting/draft-store.js';
import { evaluateParagraphTrace } from '../../src/drafting/paragraph-trace.js';
import { rebuildGraphProjection } from '../../src/retrieval/graph-projection.js';
import { checkExportReadiness } from '../../src/export/readiness.js';
import { buildPrepareOnlyBundle } from '../../src/export/bundle-builder.js';
import { recordExportSignoff } from '../../src/export/export-store.js';
import { saveCandidate, acceptCandidate } from '../../src/storage/candidate.js';
import { buildLegalBlockerSummary } from '../../src/observability/legal-blockers.js';

const MATTER = 'phase-4-9-matter';

describe('court-ready phase 4-9 workflows', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(async () => {
    tmpDir = mkdtempSync(join(tmpdir(), 'atticus-phase-4-9-'));
    originalCwd = process.cwd();
    process.chdir(tmpDir);
    await initMatter(MATTER);
  });

  afterEach(async () => {
    closeDb(MATTER);
    closeStateDb(MATTER);
    await deleteMatter(MATTER);
    process.chdir(originalCwd);
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('blocks duplicate and over-depth investigation threads with object IDs', async () => {
    await createAcceptedFinding();

    const first = await runInvestigationWorkflow({
      matterName: MATTER,
      objective: 'Prove notice service',
      claimElements: ['notice'],
    });
    expect(first.status).toBe('complete');

    const duplicate = await runInvestigationWorkflow({
      matterName: MATTER,
      objective: 'Prove notice service',
      claimElements: ['notice'],
    });
    expect(duplicate.status).toBe('blocked');
    expect(duplicate.stopReason).toBe('duplicate_scope');
    expect(duplicate.blockers[0].objectId).toBe(first.threadId);

    const overDepth = await runInvestigationWorkflow({
      matterName: MATTER,
      objective: 'Deep child thread',
      depth: 4,
      maxDepth: 3,
    });
    expect(overDepth.status).toBe('blocked');
    expect(overDepth.stopReason).toBe('over_depth');
    expect(overDepth.blockers[0].objectId).toBe('depth:4');
  });

  it('requires review quorum for critical accepted findings', async () => {
    const { findingId } = await createAcceptedFinding({ criticality: 'claim_dispositive' });

    let readiness = await evaluateLegalReadiness({ matterName: MATTER });
    expect(readiness.ready).toBe(false);
    expect(readiness.blockers.some((blocker) => blocker.objectId === findingId)).toBe(true);

    const firstReview = await createReviewTask({
      matterName: MATTER,
      targetType: 'finding',
      targetId: findingId,
      reviewerRole: 'adversarial-reviewer',
    });
    await completeReviewTask(MATTER, firstReview.reviewTaskId);
    const secondReview = await createReviewTask({
      matterName: MATTER,
      targetType: 'finding',
      targetId: findingId,
      reviewerRole: 'citation-reviewer',
    });
    await completeReviewTask(MATTER, secondReview.reviewTaskId);

    readiness = await evaluateLegalReadiness({ matterName: MATTER });
    expect(readiness.ready).toBe(true);
  });

  it('rejects paragraph approval when citation trace is fuzzy-only', async () => {
    const accepted = await createAcceptedFinding();
    const fuzzy = await addFindingCitation({
      matterName: MATTER,
      findingId: accepted.findingId,
      evidenceId: 'SRC-1',
      pageId: 'SRC-1-p1',
      chunkId: 'SRC-1-c0',
      quote: 'notice was served',
      quoteHash: hashText('notice was served'),
      sourceHash: accepted.sourceHash,
      status: 'verified_fuzzy',
    });
    const outline = createDraftOutline({ matterName: MATTER, documentType: 'brief' });
    const section = createDraftSection({
      matterName: MATTER,
      outlineId: outline.outlineId,
      heading: 'Facts',
      purpose: 'Trace accepted facts',
      ordinal: 1,
    });
    const paragraph = createDraftParagraph({
      matterName: MATTER,
      sectionId: section.sectionId,
      ordinal: 1,
      text: 'The notice was served.',
      findingIds: [accepted.findingId],
    });
    createDraftCitation({
      matterName: MATTER,
      paragraphId: paragraph.paragraphId,
      findingCitationId: fuzzy.findingCitationId,
      renderForm: `[${fuzzy.findingCitationId}]`,
      verificationStatus: 'verified',
    });

    const trace = await evaluateParagraphTrace(MATTER, paragraph.paragraphId);
    expect(trace.approved).toBe(false);
    expect(trace.blockers.map((blocker) => blocker.objectId)).toContain(fuzzy.findingCitationId);
  });

  it('rejects paragraph approval when a draft citation belongs to an unlinked finding', async () => {
    const primary = await createAcceptedFinding();
    const secondary = await proposeFinding({
      matterName: MATTER,
      statement: 'The landlord notice was created before the filing date.',
      criticality: 'ordinary',
      confidence: 0.8,
    });
    const verified = verifyExactQuote({
      matterName: MATTER,
      findingId: secondary.findingId,
      evidenceId: 'SRC-1',
      pageId: 'SRC-1-p1',
      chunkId: 'SRC-1-c0',
      quote: 'landlord notice was served',
      sourceHash: primary.sourceHash,
    });
    expect(verified.status).toBe('supported');
    const secondaryCitation = await addFindingCitation({
      matterName: MATTER,
      findingId: secondary.findingId,
      evidenceId: 'SRC-1',
      pageId: 'SRC-1-p1',
      chunkId: 'SRC-1-c0',
      quote: verified.quote,
      quoteHash: verified.quoteHash,
      sourceHash: primary.sourceHash,
      status: 'verified_exact',
    });
    await promoteFindingToAccepted(MATTER, secondary.findingId);
    const outline = createDraftOutline({ matterName: MATTER, documentType: 'brief' });
    const section = createDraftSection({
      matterName: MATTER,
      outlineId: outline.outlineId,
      heading: 'Facts',
      purpose: 'Trace accepted facts',
      ordinal: 1,
    });
    const paragraph = createDraftParagraph({
      matterName: MATTER,
      sectionId: section.sectionId,
      ordinal: 1,
      text: 'The notice was served.',
      findingIds: [primary.findingId],
    });
    createDraftCitation({
      matterName: MATTER,
      paragraphId: paragraph.paragraphId,
      findingCitationId: secondaryCitation.findingCitationId,
      renderForm: `[${secondaryCitation.findingCitationId}]`,
      verificationStatus: 'verified',
    });

    const trace = await evaluateParagraphTrace(MATTER, paragraph.paragraphId);
    expect(trace.approved).toBe(false);
    expect(trace.blockers).toContainEqual(expect.objectContaining({
      objectId: secondaryCitation.findingCitationId,
      reason: expect.stringContaining('unlinked finding'),
    }));
  });

  it('rebuilds graph projection deterministically from canonical records', async () => {
    const accepted = await createAcceptedFinding();

    const first = rebuildGraphProjection(MATTER);
    const second = rebuildGraphProjection(MATTER);

    expect(first.sourceHash).toBe(second.sourceHash);
    expect(first.nodeCount).toBe(second.nodeCount);
    expect(first.edgeCount).toBe(second.edgeCount);
    expect(first.nodeCount).toBeGreaterThanOrEqual(2);
    expect(accepted.findingId).toBeTruthy();
  });

  it('requires signoff before creating a prepare-only export bundle', async () => {
    await createAcceptedFinding();
    const blockedReadiness = await checkExportReadiness({
      matterName: MATTER,
      artifactId: 'missing-artifact',
    });
    expect(blockedReadiness.ready).toBe(false);
    await expect(recordExportSignoff({
      matterName: MATTER,
      exportId: blockedReadiness.exportId,
      operatorId: 'operator-1',
    })).rejects.toThrow('not ready for signoff');

    await saveCandidate(MATTER, {
      id: 'candidate-ready',
      matterName: MATTER,
      type: 'draft',
      title: 'Ready draft',
      content: 'A reducer-approved draft with exact cited findings.',
      status: 'candidate',
      created: new Date().toISOString(),
      metadata: { citations: [] },
    });
    const artifact = await acceptCandidate(MATTER, 'candidate-ready');
    const readiness = await checkExportReadiness({
      matterName: MATTER,
      artifactId: artifact.id,
    });
    expect(readiness.ready).toBe(true);
    const awaitingSignoff = await buildLegalBlockerSummary(MATTER);
    expect(awaitingSignoff.topBlockers.some((blocker) =>
      blocker.blockerType === 'export_id' && blocker.objectId === readiness.exportId
    )).toBe(true);

    const blocked = await buildPrepareOnlyBundle({
      matterName: MATTER,
      exportId: readiness.exportId,
      artifactId: artifact.id,
    });
    expect(blocked.bundled).toBe(false);
    expect(blocked.blockers[0].objectId).toBe(readiness.exportId);

    await recordExportSignoff({
      matterName: MATTER,
      exportId: readiness.exportId,
      operatorId: 'operator-1',
    });
    const bundled = await buildPrepareOnlyBundle({
      matterName: MATTER,
      exportId: readiness.exportId,
      artifactId: artifact.id,
    });
    expect(bundled.bundled).toBe(true);
    expect(bundled.manifestPath).toBeTruthy();
    expect(existsSync(bundled.manifestPath!)).toBe(true);
  });

  it('exposes legal blockers through observability read model', async () => {
    await createAcceptedFinding({ criticality: 'authority_dispositive' });
    const summary = await buildLegalBlockerSummary(MATTER);
    expect(summary.total).toBeGreaterThan(0);
    expect(summary.byType.finding_id).toBeGreaterThan(0);
    expect(summary.topBlockers[0].objectId).toBeTruthy();
  });
});

async function createAcceptedFinding(options?: {
  criticality?: FindingCriticality;
}): Promise<{ findingId: string; citationId: string; sourceHash: string }> {
  const content = 'The landlord notice was served before proceedings were raised.';
  const sourceHash = insertV2Source(content);
  const finding = await proposeFinding({
    matterName: MATTER,
    statement: 'The landlord notice was served before proceedings were raised.',
    criticality: options?.criticality ?? 'ordinary',
    confidence: 0.9,
  });
  const verified = verifyExactQuote({
    matterName: MATTER,
    findingId: finding.findingId,
    evidenceId: 'SRC-1',
    pageId: 'SRC-1-p1',
    chunkId: 'SRC-1-c0',
    quote: 'notice was served before proceedings',
    sourceHash,
  });
  expect(verified.status).toBe('supported');
  const citation = await addFindingCitation({
    matterName: MATTER,
    findingId: finding.findingId,
    evidenceId: 'SRC-1',
    pageId: 'SRC-1-p1',
    chunkId: 'SRC-1-c0',
    quote: verified.quote,
    quoteHash: verified.quoteHash,
    sourceHash,
    status: 'verified_exact',
  });
  const accepted = await promoteFindingToAccepted(MATTER, finding.findingId);
  return { findingId: accepted.findingId, citationId: citation.findingCitationId, sourceHash };
}

function insertV2Source(content: string): string {
  const db = getDb(MATTER);
  const sourceHash = hashText(content);
  insertEvidenceItemV2(db, {
    evidenceId: 'SRC-1',
    matterName: MATTER,
    sha256: hashText(`file:${content}`),
    originalPath: '/tmp/source.txt',
    internalPath: `matters/${MATTER}/_evidence/SRC-1.txt`,
    originalFilename: 'source.txt',
    sourceType: 'upload',
    mimeType: 'text/plain',
    format: 'text',
    status: 'approved',
    ingestedAt: new Date().toISOString(),
    sizeBytes: content.length,
    metadata: {},
  });
  insertEvidencePageV2(db, {
    pageId: 'SRC-1-p1',
    evidenceId: 'SRC-1',
    pageNumber: 1,
    textStatus: 'extracted',
    metadata: {},
  });
  insertEvidenceChunkV2(db, {
    chunkId: 'SRC-1-c0',
    evidenceId: 'SRC-1',
    pageId: 'SRC-1-p1',
    chunkIndex: 0,
    content,
    contentHash: sourceHash,
    confidence: 1,
    metadata: {},
  });
  return sourceHash;
}
