import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { closeDb, getDb } from '../../src/storage/sqlite/index.js';
import { insertEvidenceItemV2 } from '../../src/storage/sqlite/evidence.js';
import { closeStateDb, getStateDb } from '../../src/state/store.js';
import type { EvidenceItem } from '../../src/domain/evidence-item.js';

describe('court-ready v2 schema', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'atticus-v2-schema-'));
    originalCwd = process.cwd();
    process.chdir(tmpDir);
  });

  afterEach(async () => {
    closeDb('schema-matter');
    closeStateDb('schema-matter');
    await deleteMatter('schema-matter');
    process.chdir(originalCwd);
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('creates normalized evidence and workflow tables', async () => {
    await initMatter('schema-matter');
    const evidenceDb = getDb('schema-matter');
    const stateDb = getStateDb('schema-matter');

    const evidenceTables = tableNames(evidenceDb);
    expect(evidenceTables).toEqual(expect.arrayContaining([
      'evidence_items_v2',
      'evidence_pages',
      'evidence_chunks_v2',
      'ocr_runs',
      'extraction_quality_reports',
      'evidence_search_projection',
    ]));

    const stateTables = tableNames(stateDb);
    expect(stateTables).toEqual(expect.arrayContaining([
      'findings',
      'finding_citations',
      'contradictions',
      'review_tasks',
      'consensus_decisions',
      'draft_citations',
      'export_signoffs',
    ]));
  });

  it('uses immutable evidence IDs and deduplicates v2 items by matter hash', async () => {
    await initMatter('schema-matter');
    const db = getDb('schema-matter');
    const first = makeEvidenceItem('EVI-SRC-1', 'same-hash');
    const duplicateHash = makeEvidenceItem('EVI-SRC-2', 'same-hash');

    insertEvidenceItemV2(db, first);

    expect(() => insertEvidenceItemV2(db, duplicateHash)).toThrow(/UNIQUE/);
  });
});

function tableNames(db: { prepare: (sql: string) => { all: () => Array<{ name: string }> } }): string[] {
  return db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
    .all()
    .map((row) => row.name);
}

function makeEvidenceItem(evidenceId: string, sha256: string): EvidenceItem {
  return {
    evidenceId,
    matterName: 'schema-matter',
    sha256,
    originalPath: `/tmp/${evidenceId}.txt`,
    internalPath: `matters/schema-matter/_evidence/${evidenceId}.txt`,
    originalFilename: `${evidenceId}.txt`,
    sourceType: 'upload',
    mimeType: 'text/plain',
    format: 'text',
    status: 'copied_unindexed',
    ingestedAt: new Date().toISOString(),
    sizeBytes: 10,
    metadata: {},
  };
}
