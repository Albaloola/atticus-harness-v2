import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { hashText } from '../../src/extraction/hash.js';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { closeDb, getDb } from '../../src/storage/sqlite/index.js';
import { insertChunks } from '../../src/storage/sqlite/chunks.js';
import { insertEvidence, insertEvidenceItemV2 } from '../../src/storage/sqlite/evidence.js';
import { searchEvidence } from '../../src/storage/sqlite/search.js';
import { closeStateDb } from '../../src/state/store.js';
import type { EvidenceItem } from '../../src/domain/evidence-item.js';
import type { EvidenceRecord, EvidenceStatus } from '../../src/types/evidence.js';

describe('fail-closed evidence search', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'atticus-fail-closed-'));
    originalCwd = process.cwd();
    process.chdir(tmpDir);
  });

  afterEach(async () => {
    closeDb('search-matter');
    closeStateDb('search-matter');
    await deleteMatter('search-matter');
    process.chdir(originalCwd);
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('excludes copied, failed, QC-failed, and excluded evidence from search', async () => {
    await initMatter('search-matter');
    insertIndexedChunk('EVI-COPIED', 'copied_unindexed', 'lease arrears repair obligation');
    insertIndexedChunk('EVI-QC', 'qc_failed', 'lease arrears repair obligation');
    insertIndexedChunk('EVI-FAILED', 'failed', 'lease arrears repair obligation');
    insertIndexedChunk('EVI-EXCLUDED', 'excluded', 'lease arrears repair obligation');
    insertIndexedChunk('EVI-APPROVED', 'approved', 'lease arrears repair obligation');

    const results = searchEvidence('search-matter', 'lease arrears obligation', { topK: 10 });

    expect(results.map((result) => result.evidenceId)).toEqual(['EVI-APPROVED']);
  });

  it('returns no results for empty queries instead of falling back open', async () => {
    await initMatter('search-matter');
    insertIndexedChunk('EVI-APPROVED', 'approved', 'lease arrears repair obligation');

    expect(searchEvidence('search-matter', '   ', { topK: 10 })).toEqual([]);
  });

  it('falls back to manifest filename matches when chunk FTS has no hits', async () => {
    await initMatter('search-matter');
    const db = getDb('search-matter');
    const item: EvidenceItem = {
      evidenceId: 'OME-SRC-0026',
      matterName: 'search-matter',
      sha256: hashText('OME-SRC-0026'),
      originalPath: '/tmp/CIVIL_CASE_WRIT_ACTION_PLAN.md',
      internalPath: 'matters/search-matter/_evidence/OME-SRC-0026.md',
      originalFilename: 'CIVIL_CASE_WRIT_ACTION_PLAN.md',
      canonicalFilename: 'civil-case-writ-action-plan.md',
      sourceType: 'upload',
      mimeType: 'text/markdown',
      format: 'text',
      status: 'registered',
      ingestedAt: new Date().toISOString(),
      sizeBytes: 10,
      metadata: {},
    };
    insertEvidenceItemV2(db, item);

    const results = searchEvidence('search-matter', 'writ summons initial pleading filing sheriff court', { topK: 10 });

    expect(results.map((result) => result.evidenceId)).toContain('OME-SRC-0026');
    expect(results[0].snippet).toContain('Filename/manifest match');
  });
});

function insertIndexedChunk(evidenceId: string, status: EvidenceStatus, content: string): void {
  const db = getDb('search-matter');
  const record: EvidenceRecord = {
    id: evidenceId,
    matterName: 'search-matter',
    originalPath: `/tmp/${evidenceId}.txt`,
    internalPath: `matters/search-matter/_evidence/${evidenceId}.txt`,
    sha256: hashText(evidenceId),
    mimeType: 'text/plain',
    format: 'text',
    status,
    ingested: new Date().toISOString(),
    sizeBytes: content.length,
    metadata: {},
  };
  insertEvidence(db, record);
  insertChunks(db, [{
    evidenceId,
    chunkIndex: 0,
    content,
    contentHash: hashText(content),
    confidence: 1,
  }]);
}
