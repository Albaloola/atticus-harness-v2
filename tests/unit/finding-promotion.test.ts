import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { hashText } from '../../src/extraction/hash.js';
import { verifyExactQuote } from '../../src/citations/exact-quote-verifier.js';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { closeDb, getDb } from '../../src/storage/sqlite/index.js';
import {
  insertEvidenceChunkV2,
  insertEvidenceItemV2,
  insertEvidencePageV2,
} from '../../src/storage/sqlite/evidence.js';
import { closeStateDb } from '../../src/state/store.js';
import {
  addFindingCitation,
  getFinding,
  proposeFinding,
} from '../../src/findings/finding-store.js';
import { promoteFindingToAccepted } from '../../src/findings/finding-promoter.js';

describe('finding promotion', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'atticus-finding-'));
    originalCwd = process.cwd();
    process.chdir(tmpDir);
  });

  afterEach(async () => {
    closeDb('finding-matter');
    closeStateDb('finding-matter');
    await deleteMatter('finding-matter');
    process.chdir(originalCwd);
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('requires an exact page-bounded citation before accepting a finding', async () => {
    await initMatter('finding-matter');
    const finding = await proposeFinding({
      matterName: 'finding-matter',
      statement: 'The landlord served a notice before issuing proceedings.',
      confidence: 0.8,
    });

    await expect(promoteFindingToAccepted('finding-matter', finding.findingId))
      .rejects.toThrow(/exact page-bounded citation/);

    const sourceHash = insertV2Source('The landlord served a notice before issuing proceedings.');
    const verified = verifyExactQuote({
      matterName: 'finding-matter',
      findingId: finding.findingId,
      evidenceId: 'FND-SRC-1',
      pageId: 'FND-SRC-1-p1',
      chunkId: 'FND-SRC-1-c0',
      quote: 'served a notice before issuing proceedings',
      sourceHash,
    });
    expect(verified.status).toBe('supported');

    await addFindingCitation({
      matterName: 'finding-matter',
      findingId: finding.findingId,
      evidenceId: 'FND-SRC-1',
      pageId: 'FND-SRC-1-p1',
      chunkId: 'FND-SRC-1-c0',
      quote: verified.quote,
      quoteHash: verified.quoteHash,
      sourceHash,
      status: 'verified_exact',
    });

    const accepted = await promoteFindingToAccepted('finding-matter', finding.findingId);

    expect(accepted.status).toBe('accepted');
    expect(getFinding('finding-matter', finding.findingId)?.status).toBe('accepted');
  });
});

function insertV2Source(content: string): string {
  const db = getDb('finding-matter');
  const sourceHash = hashText(content);
  insertEvidenceItemV2(db, {
    evidenceId: 'FND-SRC-1',
    matterName: 'finding-matter',
    sha256: hashText(`file:${content}`),
    originalPath: '/tmp/finding-source.txt',
    internalPath: 'matters/finding-matter/_evidence/FND-SRC-1.txt',
    originalFilename: 'finding-source.txt',
    sourceType: 'upload',
    mimeType: 'text/plain',
    format: 'text',
    status: 'approved',
    ingestedAt: new Date().toISOString(),
    sizeBytes: content.length,
    metadata: {},
  });
  insertEvidencePageV2(db, {
    pageId: 'FND-SRC-1-p1',
    evidenceId: 'FND-SRC-1',
    pageNumber: 1,
    textStatus: 'extracted',
    metadata: {},
  });
  insertEvidenceChunkV2(db, {
    chunkId: 'FND-SRC-1-c0',
    evidenceId: 'FND-SRC-1',
    pageId: 'FND-SRC-1-p1',
    chunkIndex: 0,
    content,
    contentHash: sourceHash,
    confidence: 1,
    metadata: {},
  });
  return sourceHash;
}
