import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createHash } from 'node:crypto';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { ReadFileTool } from '../../src/tools/read-file.tool.ts';
import { SearchFilesTool } from '../../src/tools/search-files.tool.ts';
import { WriteFileTool } from '../../src/tools/write-file.tool.ts';
import { EvidenceChunkReadTool } from '../../src/tools/evidence-chunk-read.tool.ts';
import { EvidenceIngestTool } from '../../src/tools/evidence-ingest.tool.ts';
import { ExecSqliteTool } from '../../src/tools/exec-sqlite.tool.ts';
import { MatterInventoryTool } from '../../src/tools/matter-inventory.tool.ts';
import { VerifyCitationsTool } from '../../src/tools/verify-citations.tool.ts';
import { initMatter, deleteMatter } from '../../src/storage/matter.ts';
import { getDb, closeDb } from '../../src/storage/sqlite/index.ts';
import { insertEvidence, insertEvidenceItemV2 } from '../../src/storage/sqlite/evidence.ts';
import { insertChunks } from '../../src/storage/sqlite/chunks.ts';
import type { ToolUseContext } from '../../src/types/tool.ts';

describe('deep read tools', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'deep-read-tools-'));
    originalCwd = process.cwd();
    process.chdir(tmpDir);
  });

  afterEach(async () => {
    process.chdir(originalCwd);
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('pages read_file output without dropping long content tails', async () => {
    const filePath = join(tmpDir, 'long.txt');
    writeFileSync(filePath, '0123456789abcdefghijklmnopqrstuvwxyz', 'utf-8');

    const tool = new ReadFileTool();
    const first = await tool.call({ path: filePath, offset: 0, length: 10 }, makeContext());
    const second = await tool.call({ path: filePath, offset: first.data?.nextOffset, length: 10 }, makeContext());

    expect(first.success).toBe(true);
    expect(first.data?.content).toBe('0123456789');
    expect(first.data?.nextOffset).toBe(10);
    expect(first.output).toContain('nextOffset=10');
    expect(second.data?.content).toBe('abcdefghij');
  });

  it('reads the whole file by default instead of capping at the old small window', async () => {
    const filePath = join(tmpDir, 'whole-document.txt');
    const content = Array.from({ length: 6000 }, (_, index) => `line ${index + 1}: full document text`).join('\n');
    writeFileSync(filePath, content, 'utf-8');

    const tool = new ReadFileTool();
    const result = await tool.call({ path: filePath }, makeContext());

    expect(result.success).toBe(true);
    expect(result.data?.content).toBe(content);
    expect(result.data?.readMode).toBe('full');
    expect(result.data?.totalLines).toBe(6000);
    expect(result.output).toContain('line 6000: full document text');
  });

  it('lets agents jump to exact line ranges for focused rereads', async () => {
    const filePath = join(tmpDir, 'line-ranges.txt');
    writeFileSync(filePath, ['alpha', 'bravo', 'charlie', 'delta', 'echo'].join('\n'), 'utf-8');

    const tool = new ReadFileTool();
    const result = await tool.call({ file_path: filePath, offset: 3, limit: 2 }, makeContext());

    expect(result.success).toBe(true);
    expect(result.data?.content).toBe('charlie\ndelta');
    expect(result.data?.readMode).toBe('line_range');
    expect(result.data?.startLine).toBe(3);
    expect(result.data?.nextStartLine).toBe(5);
    expect(result.output).toContain('3\tcharlie');
    expect(result.output).toContain('4\tdelta');
  });

  it('returns coordinates instead of content when a requested read exceeds the token budget', async () => {
    const filePath = join(tmpDir, 'too-large.txt');
    writeFileSync(filePath, Array.from({ length: 100 }, (_, index) => `line ${index + 1} ${'word '.repeat(20)}`).join('\n'), 'utf-8');

    const tool = new ReadFileTool();
    const result = await tool.call({ path: filePath, maxTokens: 20 }, makeContext());

    expect(result.success).toBe(true);
    expect(result.data?.type).toBe('too_large');
    expect(result.data?.content).toBe('');
    expect(result.data?.suggestedLineLimit).toBeGreaterThan(0);
    expect(result.output).toContain('did not return document content');
    expect(result.output).toContain('startLine');
    expect(result.output).toContain('limit');
  });

  it('keeps filesystem tools inside the current workspace', async () => {
    const readTool = new ReadFileTool();
    const writeTool = new WriteFileTool();
    const searchTool = new SearchFilesTool();
    const verifyTool = new VerifyCitationsTool();
    const ingestTool = new EvidenceIngestTool();
    const outsidePath = join(tmpDir, '..', 'outside-harness-tool.txt');

    const read = await readTool.call({ path: outsidePath }, makeContext());
    const write = await writeTool.call({ path: outsidePath, content: 'nope' }, makeContext());
    const search = await searchTool.call({ pattern: '*', path: join(tmpDir, '..') }, makeContext());
    const verify = await verifyTool.call({ candidatePath: outsidePath }, makeContext('tool-safety'));
    const ingest = await ingestTool.call({ matterName: 'tool-safety', filePath: outsidePath }, makeContext('tool-safety'));

    expect(read.success).toBe(false);
    expect(read.error).toContain('outside the workspace');
    expect(write.success).toBe(false);
    expect(write.error).toContain('outside the workspace');
    expect(search.success).toBe(false);
    expect(search.error).toContain('outside the workspace');
    expect(verify.success).toBe(false);
    expect(verify.error).toContain('outside the workspace');
    expect(ingest.success).toBe(false);
    expect(ingest.error).toContain('outside the workspace');
    expect(existsSync(outsidePath)).toBe(false);
  });

  it('appends file checkpoints with hash guards for long artifacts', async () => {
    const filePath = join(tmpDir, 'outputs', 'bundle-index.md');
    const tool = new WriteFileTool();

    const first = await tool.call({ path: filePath, content: '# Bundle index\n' }, makeContext());
    const second = await tool.call({
      path: filePath,
      mode: 'append',
      content: '\n## Authorities\nDIL-SRC-0013\n',
      expectedContentHash: first.data?.contentHash,
    }, makeContext());
    const stale = await tool.call({
      path: filePath,
      mode: 'append',
      content: '\n## Stale write\n',
      expectedContentHash: sha256('old content'),
    }, makeContext());

    expect(first.success).toBe(true);
    expect(first.data).toMatchObject({ mode: 'overwrite', bytesWritten: 15 });
    expect(second.success).toBe(true);
    expect(second.data?.mode).toBe('append');
    expect(second.output).toContain('previousContentHash=');
    expect(readFileSync(filePath, 'utf-8')).toBe('# Bundle index\n\n## Authorities\nDIL-SRC-0013\n');
    expect(stale.success).toBe(false);
    expect(stale.error).toContain('Content hash mismatch');
  });

  it('rejects cross-matter evidence ingestion through the tool context', async () => {
    const filePath = join(tmpDir, 'source.txt');
    writeFileSync(filePath, 'source text', 'utf-8');

    const tool = new EvidenceIngestTool();
    const result = await tool.call({ matterName: 'other-matter', filePath }, makeContext('tool-safety'));

    expect(result.success).toBe(false);
    expect(result.error).toContain('Matter context mismatch');
  });

  it('blocks mutating SQLite pragmas in the read-only SQL tool', async () => {
    const matterName = 'deep-read-sqlite-safety';
    await initMatter(matterName);
    const tool = new ExecSqliteTool();

    try {
      const blocked = await tool.call({ sql: 'PRAGMA journal_mode = OFF' }, makeContext(matterName));
      const allowed = await tool.call({ sql: 'PRAGMA table_info(evidence)' }, makeContext(matterName));

      expect(blocked.success).toBe(false);
      expect(blocked.error).toContain('read-only SELECT');
      expect(blocked.error).toContain('matter_inventory');
      expect(allowed.success).toBe(true);
    } finally {
      closeDb(matterName);
      await deleteMatter(matterName);
    }
  });

  it('returns schema hints when read-only SQLite queries use the wrong shape', async () => {
    const matterName = 'deep-read-sqlite-schema-hint';
    await initMatter(matterName);
    const tool = new ExecSqliteTool();

    try {
      const result = await tool.call({ sql: 'SELECT source_url FROM evidence LIMIT 1' }, makeContext(matterName));

      expect(result.success).toBe(false);
      expect(result.error).toContain('SQL error');
      expect(result.error).toContain('matter_inventory');
      expect(result.error).toContain('Available schema');
      expect(result.error).toContain('evidence(');
      expect(result.error).toContain('original_path');
      expect(result.error).toContain('extraction_chunks(');
    } finally {
      closeDb(matterName);
      await deleteMatter(matterName);
    }
  });

  it('reads indexed evidence chunks by stable evidence id and chunk index', async () => {
    const matterName = 'deep-read-matter';
    await initMatter(matterName);
    const db = getDb(matterName);
    insertEvidence(db, {
      id: 'DEE-SRC-1',
      matterName,
      originalPath: '/tmp/source.txt',
      internalPath: '/tmp/internal.txt',
      sha256: 'abc',
      mimeType: 'text/plain',
      format: 'text',
      status: 'indexed',
      ingested: new Date().toISOString(),
      sizeBytes: 20,
      metadata: {},
    });
    insertChunks(db, [
      { evidenceId: 'DEE-SRC-1', chunkIndex: 0, content: 'first chunk', contentHash: 'h0', confidence: 0.9 },
      { evidenceId: 'DEE-SRC-1', chunkIndex: 1, content: 'second chunk', contentHash: 'h1', confidence: 0.8 },
    ]);

    const tool = new EvidenceChunkReadTool();
    const first = await tool.call({ evidenceId: 'DEE-SRC-1', chunkIndex: 0, count: 1 }, makeContext(matterName));
    const result = await tool.call({ evidenceId: 'DEE-SRC-1', chunkIndex: 1, count: 1 }, makeContext(matterName));

    expect(first.data?.nextChunkIndex).toBe(1);
    expect(first.data?.chunkBounds).toMatchObject({ count: 2, minChunkIndex: 0, maxChunkIndex: 1 });
    expect(first.data?.returnedRange).toEqual({ startChunkIndex: 0, endChunkIndex: 0 });
    expect(first.data?.endReached).toBe(false);
    expect(first.data?.continuationHint).toContain('"chunkIndex":1');
    expect(result.success).toBe(true);
    expect(result.data?.chunks).toHaveLength(1);
    expect(result.data?.chunks[0]).toMatchObject({ chunkIndex: 1, content: 'second chunk' });
    expect(result.data?.previousChunkIndex).toBe(0);
    expect(result.data?.nextChunkIndex).toBeUndefined();
    expect(result.data?.endReached).toBe(true);
    expect(result.output).toContain('documentRange=0-1');
    expect(result.output).toContain('returnedRange=1-1');
    expect(result.output).toContain('endReached=true');
    expect(result.output).toContain('DEE-SRC-1 chunk 1');

    closeDb(matterName);
    await deleteMatter(matterName);
  });

  it('reads all remaining evidence chunks by default when they fit the token budget', async () => {
    const matterName = 'deep-read-all-chunks';
    await initMatter(matterName);
    const db = getDb(matterName);
    insertEvidence(db, {
      id: 'DEE-SRC-ALL',
      matterName,
      originalPath: '/tmp/source.txt',
      internalPath: '/tmp/internal.txt',
      sha256: 'all-sha',
      mimeType: 'text/plain',
      format: 'text',
      status: 'indexed',
      ingested: new Date().toISOString(),
      sizeBytes: 20,
      metadata: {},
    });
    insertChunks(db, [
      { evidenceId: 'DEE-SRC-ALL', chunkIndex: 0, content: 'first chunk', contentHash: 'h0', confidence: 0.9 },
      { evidenceId: 'DEE-SRC-ALL', chunkIndex: 1, content: 'second chunk', contentHash: 'h1', confidence: 0.8 },
      { evidenceId: 'DEE-SRC-ALL', chunkIndex: 2, content: 'third chunk', contentHash: 'h2', confidence: 0.7 },
    ]);

    try {
      const tool = new EvidenceChunkReadTool();
      const result = await tool.call({ evidenceId: 'DEE-SRC-ALL', chunkIndex: 0 }, makeContext(matterName));

      expect(result.success).toBe(true);
      expect(result.data?.chunks).toHaveLength(3);
      expect(result.data?.nextChunkIndex).toBeUndefined();
      expect(result.data?.endReached).toBe(true);
      expect(result.output).toContain('DEE-SRC-ALL chunk 2');
    } finally {
      closeDb(matterName);
      await deleteMatter(matterName);
    }
  });

  it('returns exact chunk-range guidance when all remaining chunks exceed maxTokens', async () => {
    const matterName = 'deep-read-large-chunks';
    await initMatter(matterName);
    const db = getDb(matterName);
    insertEvidence(db, {
      id: 'DEE-SRC-LARGE',
      matterName,
      originalPath: '/tmp/source.txt',
      internalPath: '/tmp/internal.txt',
      sha256: 'large-sha',
      mimeType: 'text/plain',
      format: 'text',
      status: 'indexed',
      ingested: new Date().toISOString(),
      sizeBytes: 20,
      metadata: {},
    });
    insertChunks(db, [
      { evidenceId: 'DEE-SRC-LARGE', chunkIndex: 0, content: 'word '.repeat(100), contentHash: 'h0', confidence: 0.9 },
      { evidenceId: 'DEE-SRC-LARGE', chunkIndex: 1, content: 'word '.repeat(100), contentHash: 'h1', confidence: 0.8 },
    ]);

    try {
      const tool = new EvidenceChunkReadTool();
      const result = await tool.call({ evidenceId: 'DEE-SRC-LARGE', chunkIndex: 0, maxTokens: 20 }, makeContext(matterName));

      expect(result.success).toBe(true);
      expect(result.data?.tooLarge).toBe(true);
      expect(result.data?.chunks).toHaveLength(0);
      expect(result.data?.suggestedChunkCount).toBeGreaterThan(0);
      expect(result.output).toContain('did not return chunk content');
      expect(result.output).toContain('"count":');
    } finally {
      closeDb(matterName);
      await deleteMatter(matterName);
    }
  });

  it('returns chunk bounds when a worker reads past the indexed range', async () => {
    const matterName = 'deep-read-chunk-bounds';
    await initMatter(matterName);
    const db = getDb(matterName);
    insertEvidence(db, {
      id: 'DEE-SRC-BOUNDS',
      matterName,
      originalPath: '/tmp/source.txt',
      internalPath: '/tmp/internal.txt',
      sha256: 'bounds-sha',
      mimeType: 'text/plain',
      format: 'text',
      status: 'indexed',
      ingested: new Date().toISOString(),
      sizeBytes: 20,
      metadata: {},
    });
    insertChunks(db, [
      { evidenceId: 'DEE-SRC-BOUNDS', chunkIndex: 0, content: 'first chunk', contentHash: 'h0', confidence: 0.9 },
      { evidenceId: 'DEE-SRC-BOUNDS', chunkIndex: 1, content: 'second chunk', contentHash: 'h1', confidence: 0.8 },
    ]);

    try {
      const tool = new EvidenceChunkReadTool();
      const result = await tool.call({ evidenceId: 'DEE-SRC-BOUNDS', chunkIndex: 9, count: 1 }, makeContext(matterName));

      expect(result.success).toBe(false);
      expect(result.data?.chunkBounds).toMatchObject({ count: 2, minChunkIndex: 0, maxChunkIndex: 1 });
      expect(result.data?.previousChunkIndex).toBe(1);
      expect(result.data?.endReached).toBe(true);
      expect(result.error).toContain('Available chunk range is 0-1');
      expect(result.error).toContain('Retry with chunkIndex 1');
    } finally {
      closeDb(matterName);
      await deleteMatter(matterName);
    }
  });

  it('exposes matter evidence inventory without requiring workers to guess schema', async () => {
    const matterName = 'deep-read-inventory';
    await initMatter(matterName);
    const db = getDb(matterName);
    insertEvidence(db, {
      id: 'INV-SRC-LEGACY',
      matterName,
      originalPath: '/tmp/judgment-legacy.pdf',
      internalPath: '/tmp/internal/judgment-legacy.pdf',
      sha256: 'legacy-sha',
      mimeType: 'application/pdf',
      format: 'pdf',
      status: 'indexed',
      ingested: new Date().toISOString(),
      sizeBytes: 123,
      metadata: { sourceUrl: 'https://example.test/judgment-legacy.pdf' },
    });
    insertChunks(db, [
      { evidenceId: 'INV-SRC-LEGACY', chunkIndex: 0, content: 'The court held the order was unlawful.', contentHash: 'h0', confidence: 0.95 },
    ]);

    try {
      const tool = new MatterInventoryTool();
      const manifest = await tool.call({ view: 'manifest' }, makeContext(matterName));
      const schemaGuide = await tool.call({ view: 'schema_guide' }, makeContext(matterName));

      expect(manifest.success).toBe(true);
      expect(manifest.data?.totalEvidence).toBe(1);
      expect(manifest.data?.items[0]).toMatchObject({
        evidenceId: 'INV-SRC-LEGACY',
        documentRole: 'holding',
        chunkCount: 1,
      });
      expect(manifest.data?.items[0].readHint).toContain('evidence_chunk_read');
      expect(schemaGuide.output).toContain('Do not guess old tables');
      expect(schemaGuide.output).toContain('transcript-*.md files');
      expect(schemaGuide.data?.schemaGuide.canonicalTables).toContain('evidence_items_v2');
    } finally {
      closeDb(matterName);
      await deleteMatter(matterName);
    }
  });

  it('selects compact production candidates and suppresses judgment and summary duplicates', async () => {
    const matterName = 'deep-read-production-candidates';
    await initMatter(matterName);
    const db = getDb(matterName);
    const now = new Date().toISOString();

    for (const item of [
      ['INV-SRC-0001', 'judgment-legacy.pdf', 'https://example.test/judgment-legacy.pdf'],
      ['INV-SRC-0002', 'judgment-official.pdf', 'https://www.supremecourt.uk/cases/docs/uksc-2019-0193-judgment.pdf'],
      ['INV-SRC-0003', 'press-summary-official.pdf', 'https://www.supremecourt.uk/cases/docs/uksc-2019-0193-press-summary.pdf'],
      ['INV-SRC-0004', 'press-summary-tna.html', 'https://caselaw.nationalarchives.gov.uk/uksc/2019/41/press-summary'],
      ['INV-SRC-0005', 'written-case-cherry.pdf', 'https://www.supremecourt.uk/cases/docs/uksc-2019-0193-written-case-cherry.pdf'],
      ['INV-SRC-0006', 'written-case-public-law-project.pdf', 'https://www.supremecourt.uk/cases/docs/uksc-2019-0193-written-case-public-law-project.pdf'],
      ['INV-SRC-0007', 'written-case-lord-advocate.pdf', 'https://www.supremecourt.uk/cases/docs/uksc-2019-0193-written-case-lord-advocate.pdf'],
    ] as const) {
      insertEvidenceItemV2(db, {
        evidenceId: item[0],
        matterName,
        sha256: `${item[0]}-sha`,
        originalPath: `/tmp/${item[1]}`,
        internalPath: `/tmp/internal/${item[1]}`,
        originalFilename: item[1],
        canonicalFilename: item[1],
        sourceType: 'source_snapshot',
        mimeType: item[1].endsWith('.html') ? 'text/html' : 'application/pdf',
        format: item[1].endsWith('.html') ? 'html' : 'pdf',
        status: 'indexed',
        ingestedAt: now,
        sizeBytes: 100,
        metadata: { sourceUrl: item[2] },
      });
    }

    try {
      const tool = new MatterInventoryTool();
      const result = await tool.call({ view: 'production_candidates' }, makeContext(matterName));

      expect(result.success).toBe(true);
      const candidateIds = result.data?.productionCandidates.map((item) => item.evidenceId) ?? [];
      const recommendedIds = result.data?.productionCandidates
        .filter((item) => item.recommendedForProduction)
        .map((item) => item.evidenceId) ?? [];
      const holdingGroup = result.data?.duplicateGroups.find((group) => group.groupKey === 'holding:final-judgment');
      const summaryGroup = result.data?.duplicateGroups.find((group) => group.groupKey === 'summary:press-summary');

      expect(candidateIds).toContain('INV-SRC-0002');
      expect(candidateIds).not.toContain('INV-SRC-0001');
      expect(candidateIds).toContain('INV-SRC-0003');
      expect(candidateIds).not.toContain('INV-SRC-0004');
      expect(recommendedIds).toEqual(expect.arrayContaining(['INV-SRC-0002', 'INV-SRC-0003', 'INV-SRC-0005', 'INV-SRC-0007']));
      expect(recommendedIds).not.toContain('INV-SRC-0006');
      expect(holdingGroup?.selectedEvidenceId).toBe('INV-SRC-0002');
      expect(summaryGroup?.selectedEvidenceId).toBe('INV-SRC-0003');
    } finally {
      closeDb(matterName);
      await deleteMatter(matterName);
    }
  });

  it('classifies generic UKSC docket filings without being fooled by local matter paths', async () => {
    const matterName = 'dillon-legacy-act-uksc';
    await initMatter(matterName);
    const db = getDb(matterName);
    const now = new Date().toISOString();

    for (const item of [
      ['DIL-SRC-0001', 'Secretary_of_State_UKSC_2025_0013_and_0013_A.pdf'],
      ['DIL-SRC-0002', 'Dillon_UKSC_2025_0013_and_0013_A.pdf'],
      ['DIL-SRC-0003', 'NIVM_UKSC_2025_0013_and_0013_A.pdf'],
      ['DIL-SRC-0004', 'SFI_UKSC_2025_0013_and_0013_A.pdf'],
      ['DIL-SRC-0005', 'uksc_2025_0013_0013_A_judgment.pdf'],
      ['DIL-SRC-0006', 'uksc_2025_0013_0013_A_press_summary.pdf'],
    ] as const) {
      insertEvidenceItemV2(db, {
        evidenceId: item[0],
        matterName,
        sha256: `${item[0]}-sha`,
        originalPath: `/tmp/${matterName}/raw/${item[1]}`,
        internalPath: `/tmp/${matterName}/_evidence/${item[0]}_${item[1]}`,
        originalFilename: item[1],
        canonicalFilename: item[1],
        sourceType: 'upload',
        mimeType: 'application/pdf',
        format: 'pdf',
        status: 'approved',
        ingestedAt: now,
        sizeBytes: 100,
        metadata: {},
      });
    }

    try {
      const tool = new MatterInventoryTool();
      const result = await tool.call({ view: 'production_candidates' }, makeContext(matterName));

      expect(result.success).toBe(true);
      const byId = new Map(result.data?.productionCandidates.map((item) => [item.evidenceId, item]));
      expect(byId.get('DIL-SRC-0001')).toMatchObject({
        documentRole: 'case_written_argument',
        sourceVariant: 'court_pdf',
        recommendedForProduction: true,
      });
      expect(byId.get('DIL-SRC-0004')).toMatchObject({
        documentRole: 'statement_of_facts_issues',
        recommendedForProduction: true,
      });
      expect(byId.get('DIL-SRC-0005')).toMatchObject({
        documentRole: 'holding',
        sourceVariant: 'court_pdf',
        recommendedForProduction: true,
      });
      expect(byId.get('DIL-SRC-0006')).toMatchObject({
        documentRole: 'press_summary',
        sourceVariant: 'court_pdf',
        recommendedForProduction: true,
      });
      expect(result.data?.productionCandidates.every((item) => item.sourceVariant !== 'legacy')).toBe(true);
    } finally {
      closeDb(matterName);
      await deleteMatter(matterName);
    }
  });
});

function makeContext(matterName?: string): ToolUseContext {
  return {
    matterName,
    getEvidencePath: (id: string) => id,
    getExtractionPath: (id: string) => id,
    getConfig: () => ({}),
    log: () => {},
  };
}

function sha256(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}
