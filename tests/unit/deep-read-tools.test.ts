import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { ReadFileTool } from '../../src/tools/read-file.tool.ts';
import { EvidenceChunkReadTool } from '../../src/tools/evidence-chunk-read.tool.ts';
import { initMatter, deleteMatter } from '../../src/storage/matter.ts';
import { getDb, closeDb } from '../../src/storage/sqlite/index.ts';
import { insertEvidence } from '../../src/storage/sqlite/evidence.ts';
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
    expect(result.success).toBe(true);
    expect(result.data?.chunks).toHaveLength(1);
    expect(result.data?.chunks[0]).toMatchObject({ chunkIndex: 1, content: 'second chunk' });
    expect(result.data?.nextChunkIndex).toBeUndefined();
    expect(result.output).toContain('DEE-SRC-1 chunk 1');

    closeDb(matterName);
    await deleteMatter(matterName);
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
