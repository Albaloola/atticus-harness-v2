import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { listChunks } from '../storage/sqlite/chunks.js';

const DEFAULT_CHUNK_COUNT = 3;
const MAX_CHUNK_COUNT = 10;

export interface EvidenceChunkReadArgs {
  evidenceId: string;
  chunkIndex?: number;
  count?: number;
}

export interface EvidenceChunkReadResult {
  evidenceId: string;
  startChunkIndex: number;
  count: number;
  chunks: Array<{
    chunkIndex: number;
    content: string;
    confidence: number;
    contentHash: string;
  }>;
  nextChunkIndex?: number;
}

export class EvidenceChunkReadTool implements Tool<EvidenceChunkReadArgs, EvidenceChunkReadResult> {
  readonly name = 'evidence_chunk_read';
  readonly description = 'Read indexed evidence chunks by evidenceId and chunkIndex. Use this after evidence_search for deep review beyond snippets.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      evidenceId: { type: 'string', description: 'Evidence ID returned by evidence_search' },
      chunkIndex: { type: 'number', description: 'First chunk index to read (default: 0)' },
      count: { type: 'number', description: `Number of chunks to read, max ${MAX_CHUNK_COUNT} (default: ${DEFAULT_CHUNK_COUNT})` },
    },
    required: ['evidenceId'],
  };

  async call(args: EvidenceChunkReadArgs, context: ToolUseContext): Promise<ToolResult<EvidenceChunkReadResult>> {
    if (!context.matterName) {
      return { success: false, error: 'No matter context available' };
    }

    try {
      const startChunkIndex = Math.max(0, Math.trunc(args.chunkIndex ?? 0));
      const count = Math.min(
        Math.max(1, Math.trunc(args.count ?? DEFAULT_CHUNK_COUNT)),
        MAX_CHUNK_COUNT,
      );
      const chunks = listChunks(context.matterName, args.evidenceId, startChunkIndex, count + 1);
      if (chunks.length === 0) {
        return { success: false, error: `No chunks found for ${args.evidenceId} at or after chunk ${startChunkIndex}` };
      }
      const visibleChunks = chunks.slice(0, count);

      const data: EvidenceChunkReadResult = {
        evidenceId: args.evidenceId,
        startChunkIndex,
        count: visibleChunks.length,
        chunks: visibleChunks.map((chunk) => ({
          chunkIndex: chunk.chunkIndex,
          content: chunk.content,
          confidence: chunk.confidence,
          contentHash: chunk.contentHash,
        })),
        nextChunkIndex: chunks.length > count ? chunks[count].chunkIndex : undefined,
      };

      const body = data.chunks
        .map((chunk) => `## ${args.evidenceId} chunk ${chunk.chunkIndex}\n${chunk.content}`)
        .join('\n\n');
      const footer = data.nextChunkIndex !== undefined
        ? `\n\n[evidence_chunk_read returned ${visibleChunks.length} chunks; nextChunkIndex=${data.nextChunkIndex}]`
        : `\n\n[evidence_chunk_read returned ${visibleChunks.length} chunks; no later chunk found in this window]`;

      return { success: true, data, output: body + footer };
    } catch (err: unknown) {
      return { success: false, error: `Chunk read failed: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}
