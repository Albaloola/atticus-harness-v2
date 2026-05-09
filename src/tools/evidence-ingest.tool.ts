import { copyFile, stat, mkdir, writeFile } from 'fs/promises';
import { join, basename } from 'path';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import type { EvidenceRecord } from '../types/evidence.js';
import { extractText, hashFile } from '../extraction/index.js';
import { detectFormatByMagic, getMimeType } from '../extraction/detect.js';
import { appendEvent } from '../state/events.js';
import { registerCopiedEvidenceV2, persistExtractionV2 } from '../ingestion/register-evidence.js';
import { resolveWorkspacePath } from './path-safety.js';

export class EvidenceIngestTool implements Tool<{ matterName: string; filePath: string }, unknown> {
  readonly name = 'evidence_ingest';
  readonly description = 'Import a source document into a matter: copies file, hashes it, extracts text, indexes it.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      matterName: { type: 'string', description: 'Matter name' },
      filePath: { type: 'string', description: 'Workspace-relative source document path, or absolute path inside the current workspace' },
    },
    required: ['matterName', 'filePath'],
  };

  isEnabled(): boolean { return true; }

  async call(args: { matterName: string; filePath: string }, context: ToolUseContext): Promise<ToolResult<unknown>> {
    if (context.matterName && context.matterName !== args.matterName) {
      return {
        success: false,
        error: `Matter context mismatch: tool is scoped to ${context.matterName}, not ${args.matterName}`,
      };
    }

    let filePath: string;
    try {
      filePath = resolveWorkspacePath(args.filePath);
    } catch (err: unknown) {
      return { success: false, error: `File not available for ingestion: ${(err as Error).message}` };
    }

    let fileStat;
    try {
      fileStat = await stat(filePath);
    } catch {
      return { success: false, error: `File not found: ${args.filePath}` };
    }

    const evidenceDir = join('matters', args.matterName, '_evidence');
    const extractionDir = join('matters', args.matterName, '_extractions');
    const fileName = basename(filePath);

    const sha256 = await hashFile(filePath);
    const format = await detectFormatByMagic(filePath);
    const evidenceId = `${args.matterName.substring(0, 3).toUpperCase()}-SRC-${Date.now().toString(36)}`;

    await mkdir(evidenceDir, { recursive: true });
    const internalPath = join(evidenceDir, `${evidenceId}_${fileName}`);
    await copyFile(filePath, internalPath);

    const record: EvidenceRecord = {
      id: evidenceId,
      matterName: args.matterName,
      originalPath: filePath,
      internalPath,
      sha256,
      mimeType: getMimeType(format),
      format,
      status: 'copied_unindexed',
      ingested: new Date().toISOString(),
      sizeBytes: fileStat.size,
      metadata: { originalFileName: fileName },
    };

    try {
      const { getDb } = await import('../storage/sqlite/index.js');
      const { insertEvidence } = await import('../storage/sqlite/evidence.js');
      const db = getDb(args.matterName);
      insertEvidence(db, record);
      registerCopiedEvidenceV2(db, record);
      await appendEvent({
        matterName: args.matterName,
        type: 'evidence.copied_unindexed',
        data: { evidenceId, fileName, sha256 },
        source: 'tool',
      });
    } catch (err: unknown) {
      return {
        success: false,
        data: { evidenceId, sha256, format, indexing: 'failed' },
        error: `Copied ${fileName} as ${evidenceId} but could not register copied evidence: ${(err as Error).message}`,
      };
    }

    let extracted;
    try {
      extracted = await extractText(filePath, { sourceId: evidenceId });
    } catch (err: unknown) {
      try {
        const { getDb } = await import('../storage/sqlite/index.js');
        const { insertEvidence, updateEvidenceItemV2Status } = await import('../storage/sqlite/evidence.js');
        const db = getDb(args.matterName);
        insertEvidence(db, { ...record, status: 'qc_failed' });
        updateEvidenceItemV2Status(db, evidenceId, 'qc_failed', {
          ...record.metadata,
          extractionError: (err as Error).message,
        });
        await appendEvent({
          matterName: args.matterName,
          type: 'evidence.ingestion_failed',
          data: { evidenceId, fileName, error: (err as Error).message },
          source: 'tool',
        });
      } catch {}
      return {
        success: false,
        data: { evidenceId, sha256, format, extraction: 'failed' },
        error: `Copied ${fileName} as ${evidenceId} but text extraction failed: ${(err as Error).message}`,
      };
    }

    await mkdir(extractionDir, { recursive: true });
    const extractionPath = join(extractionDir, `${evidenceId}.txt`);
    await writeFile(extractionPath, extracted.text, 'utf-8');

    let indexedChunks = 0;
    try {
      const { getDb } = await import('../storage/sqlite/index.js');
      const { insertEvidence } = await import('../storage/sqlite/evidence.js');
      const { chunkText, insertChunks } = await import('../storage/sqlite/chunks.js');
      const db = getDb(args.matterName);
      const approvedRecord: EvidenceRecord = { ...record, status: 'approved' };
      insertEvidence(db, approvedRecord);
      const chunks = chunkText(evidenceId, extracted.text, extracted.confidence);
      insertChunks(db, chunks);
      persistExtractionV2(db, evidenceId, extracted, chunks);
      indexedChunks = chunks.length;
      await appendEvent({
        matterName: args.matterName,
        type: 'evidence.ingested',
        data: { evidenceId, fileName, format, sha256, chunks: chunks.length },
        source: 'tool',
      });
    } catch (err: unknown) {
      try {
        const { getDb } = await import('../storage/sqlite/index.js');
        const { insertEvidence, updateEvidenceItemV2Status } = await import('../storage/sqlite/evidence.js');
        const db = getDb(args.matterName);
        insertEvidence(db, { ...record, status: 'failed' });
        updateEvidenceItemV2Status(db, evidenceId, 'failed', {
          ...record.metadata,
          indexingError: (err as Error).message,
        });
        await appendEvent({
          matterName: args.matterName,
          type: 'evidence.index_failed',
          data: { evidenceId, fileName, error: (err as Error).message },
          source: 'tool',
        });
      } catch {}
      return {
        success: false,
        data: { evidenceId, sha256, format, sqliteIndexing: 'failed' },
        error: `Copied and extracted ${fileName} as ${evidenceId} but SQLite indexing failed: ${(err as Error).message}`,
      };
    }

    return {
      success: true,
      data: { evidenceId, sha256, format, method: extracted.method, chunks: indexedChunks },
      output: `Ingested ${fileName} as ${evidenceId} (${format}, ${extracted.method}, ${extracted.confidence * 100}% confidence, ${indexedChunks} chunks indexed)`,
    };
  }
}
