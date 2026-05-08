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
import type { EvidenceStatus } from '../../src/types/evidence.js';

describe('exact quote verifier', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'atticus-exact-quote-'));
    originalCwd = process.cwd();
    process.chdir(tmpDir);
  });

  afterEach(async () => {
    closeDb('citation-matter');
    closeStateDb('citation-matter');
    await deleteMatter('citation-matter');
    process.chdir(originalCwd);
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('verifies only exact quotes inside the cited page and chunk', async () => {
    await initMatter('citation-matter');
    const sourceHash = insertV2Source(
      'approved',
      'The landlord served a section 8 notice on 3 March. The tenant disputed arrears.',
    );

    const supported = verifyExactQuote({
      matterName: 'citation-matter',
      evidenceId: 'CIT-SRC-1',
      pageId: 'CIT-SRC-1-p1',
      chunkId: 'CIT-SRC-1-c0',
      quote: 'section 8 notice on 3 March',
      sourceHash,
    });

    expect(supported.status).toBe('supported');
    expect(supported.exact).toBe(true);
    expect(supported.confidence).toBe(1);
    expect(supported.sourceHash).toBe(sourceHash);

    const fabricated = verifyExactQuote({
      matterName: 'citation-matter',
      evidenceId: 'CIT-SRC-1',
      pageId: 'CIT-SRC-1-p1',
      chunkId: 'CIT-SRC-1-c0',
      quote: 'section 21 notice on 9 April',
      sourceHash,
    });

    expect(fabricated.status).toBe('unsupported');
    expect(fabricated.exact).toBe(false);
  });

  it('refuses citations against non-approved ingestion states', async () => {
    await initMatter('citation-matter');
    const sourceHash = insertV2Source('qc_failed', 'The tenant disputed arrears.');

    const result = verifyExactQuote({
      matterName: 'citation-matter',
      evidenceId: 'CIT-SRC-1',
      pageId: 'CIT-SRC-1-p1',
      chunkId: 'CIT-SRC-1-c0',
      quote: 'tenant disputed arrears',
      sourceHash,
    });

    expect(result.status).toBe('not_checked');
    expect(result.details).toContain('not approved');
  });
});

function insertV2Source(status: EvidenceStatus, content: string): string {
  const db = getDb('citation-matter');
  const sourceHash = hashText(content);
  insertEvidenceItemV2(db, {
    evidenceId: 'CIT-SRC-1',
    matterName: 'citation-matter',
    sha256: hashText(`file:${content}`),
    originalPath: '/tmp/citation-source.txt',
    internalPath: 'matters/citation-matter/_evidence/CIT-SRC-1.txt',
    originalFilename: 'citation-source.txt',
    sourceType: 'upload',
    mimeType: 'text/plain',
    format: 'text',
    status,
    ingestedAt: new Date().toISOString(),
    sizeBytes: content.length,
    metadata: {},
  });
  insertEvidencePageV2(db, {
    pageId: 'CIT-SRC-1-p1',
    evidenceId: 'CIT-SRC-1',
    pageNumber: 1,
    textStatus: 'extracted',
    metadata: {},
  });
  insertEvidenceChunkV2(db, {
    chunkId: 'CIT-SRC-1-c0',
    evidenceId: 'CIT-SRC-1',
    pageId: 'CIT-SRC-1-p1',
    chunkIndex: 0,
    content,
    contentHash: sourceHash,
    confidence: 1,
    charStart: 0,
    charEnd: content.length,
    metadata: {},
  });
  return sourceHash;
}
