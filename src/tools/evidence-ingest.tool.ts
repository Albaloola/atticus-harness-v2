import { copyFile, stat, mkdir, writeFile } from 'fs/promises';
import { join, basename } from 'path';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import type { EvidenceRecord, EvidenceFormat } from '../types/evidence.js';
import { extractText, hashFile } from '../extraction/index.js';
import { detectFormatByMagic, getMimeType } from '../extraction/detect.js';

export class EvidenceIngestTool implements Tool<{ matterName: string; filePath: string }, unknown> {
  readonly name = 'evidence_ingest';
  readonly description = 'Import a source document into a matter: copies file, hashes it, extracts text, indexes it.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      matterName: { type: 'string', description: 'Matter name' },
      filePath: { type: 'string', description: 'Path to the source document' },
    },
    required: ['matterName', 'filePath'],
  };

  isEnabled(): boolean { return true; }

  async call(args: { matterName: string; filePath: string }, context: ToolUseContext): Promise<ToolResult<unknown>> {
    try {
      await stat(args.filePath);
    } catch {
      return { success: false, error: `File not found: ${args.filePath}` };
    }

    const evidenceDir = join('matters', args.matterName, '_evidence');
    const extractionDir = join('matters', args.matterName, '_extractions');
    const fileName = basename(args.filePath);

    const sha256 = await hashFile(args.filePath);
    const format = await detectFormatByMagic(args.filePath);
    const evidenceId = `${args.matterName.substring(0, 3).toUpperCase()}-SRC-${Date.now().toString(36)}`;

    await mkdir(evidenceDir, { recursive: true });
    const internalPath = join(evidenceDir, `${evidenceId}_${fileName}`);
    await copyFile(args.filePath, internalPath);

    let extracted;
    try {
      extracted = await extractText(args.filePath, { sourceId: evidenceId });
    } catch (err: unknown) {
      return {
        success: true,
        data: { evidenceId, sha256, format, extraction: 'failed' },
        output: `Ingested ${fileName} as ${evidenceId} but text extraction failed: ${(err as Error).message}`,
      };
    }

    await mkdir(extractionDir, { recursive: true });
    const extractionPath = join(extractionDir, `${evidenceId}.txt`);
    await writeFile(extractionPath, extracted.text, 'utf-8');

    const record: EvidenceRecord = {
      id: evidenceId,
      matterName: args.matterName,
      originalPath: args.filePath,
      internalPath,
      sha256,
      mimeType: getMimeType(format),
      format,
      status: 'extracted',
      ingested: new Date().toISOString(),
      sizeBytes: 0,
      metadata: { originalFileName: fileName },
    };

    try {
      const { getDb } = await import('../storage/sqlite/index.js');
      const { insertEvidence } = await import('../storage/sqlite/evidence.js');
      const { chunkText, insertChunks } = await import('../storage/sqlite/chunks.js');
      const db = getDb(args.matterName);
      insertEvidence(db, record);
      const chunks = chunkText(evidenceId, extracted.text, extracted.confidence);
      insertChunks(db, chunks);
    } catch (err: unknown) {
      return {
        success: true,
        data: { evidenceId, sha256, format, sqliteIndexing: 'failed' },
        output: `Ingested ${fileName} as ${evidenceId} but SQLite indexing failed: ${(err as Error).message}`,
      };
    }

    const totalChunks = Math.ceil(extracted.text.length / 4000);

    return {
      success: true,
      data: { evidenceId, sha256, format, method: extracted.method, chunks: totalChunks },
      output: `Ingested ${fileName} as ${evidenceId} (${format}, ${extracted.method}, ${extracted.confidence * 100}% confidence, ${totalChunks} chunks indexed)`,
    };
  }
}
