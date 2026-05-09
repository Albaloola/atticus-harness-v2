import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { getChunkBounds, listChunks } from '../storage/sqlite/chunks.js';

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
  chunkBounds: {
    count: number;
    minChunkIndex?: number;
    maxChunkIndex?: number;
  };
  returnedRange?: {
    startChunkIndex: number;
    endChunkIndex: number;
  };
  chunks: Array<{
    chunkIndex: number;
    content: string;
    confidence: number;
    contentHash: string;
  }>;
  previousChunkIndex?: number;
  nextChunkIndex?: number;
  endReached: boolean;
  continuationHint?: string;
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
      const bounds = getChunkBounds(context.matterName, args.evidenceId);
      const chunks = listChunks(context.matterName, args.evidenceId, startChunkIndex, count + 1);
      if (chunks.length === 0) {
        if (bounds.count > 0) {
          return {
            success: false,
            data: {
              evidenceId: args.evidenceId,
              startChunkIndex,
              count: 0,
              chunkBounds: bounds,
              chunks: [],
              previousChunkIndex: bounds.maxChunkIndex,
              endReached: true,
              continuationHint: `Retry with evidence_chunk_read({"evidenceId":"${args.evidenceId}","chunkIndex":${bounds.maxChunkIndex},"count":${count}}) to read the final indexed chunk.`,
            },
            error: [
              `No chunks found for ${args.evidenceId} at or after chunk ${startChunkIndex}.`,
              `Available chunk range is ${bounds.minChunkIndex}-${bounds.maxChunkIndex} (${bounds.count} chunk(s)).`,
              `Retry with chunkIndex ${bounds.maxChunkIndex}.`,
            ].join(' '),
          };
        }
        return {
          success: false,
          data: {
            evidenceId: args.evidenceId,
            startChunkIndex,
            count: 0,
            chunkBounds: bounds,
            chunks: [],
            endReached: true,
          },
          error: `No chunks found for ${args.evidenceId}. It has no indexed chunks.`,
        };
      }
      const visibleChunks = chunks.slice(0, count);
      const firstChunkIndex = visibleChunks[0]?.chunkIndex ?? startChunkIndex;
      const lastChunkIndex = visibleChunks.at(-1)?.chunkIndex ?? startChunkIndex;
      const nextChunkIndex = chunks.length > count ? chunks[count].chunkIndex : undefined;
      const previousChunkIndex = bounds.minChunkIndex !== undefined && firstChunkIndex > bounds.minChunkIndex
        ? Math.max(bounds.minChunkIndex, startChunkIndex - count)
        : undefined;
      const endReached = nextChunkIndex === undefined;
      const continuationHint = nextChunkIndex !== undefined
        ? `Continue with evidence_chunk_read({"evidenceId":"${args.evidenceId}","chunkIndex":${nextChunkIndex},"count":${count}}).`
        : undefined;

      const data: EvidenceChunkReadResult = {
        evidenceId: args.evidenceId,
        startChunkIndex,
        count: visibleChunks.length,
        chunkBounds: bounds,
        returnedRange: {
          startChunkIndex: firstChunkIndex,
          endChunkIndex: lastChunkIndex,
        },
        chunks: visibleChunks.map((chunk) => ({
          chunkIndex: chunk.chunkIndex,
          content: chunk.content,
          confidence: chunk.confidence,
          contentHash: chunk.contentHash,
        })),
        previousChunkIndex,
        nextChunkIndex,
        endReached,
        continuationHint,
      };

      const body = data.chunks
        .map((chunk) => `## ${args.evidenceId} chunk ${chunk.chunkIndex}\n${chunk.content}`)
        .join('\n\n');
      const documentRange = bounds.count > 0 ? `${bounds.minChunkIndex}-${bounds.maxChunkIndex}` : 'none';
      const parts = [
        `returned=${visibleChunks.length}`,
        `documentRange=${documentRange}`,
        `returnedRange=${firstChunkIndex}-${lastChunkIndex}`,
        data.previousChunkIndex !== undefined ? `previousChunkIndex=${data.previousChunkIndex}` : undefined,
        data.nextChunkIndex !== undefined ? `nextChunkIndex=${data.nextChunkIndex}` : undefined,
        `endReached=${data.endReached}`,
        data.continuationHint,
      ].filter((part): part is string => typeof part === 'string');
      const footer = `\n\n[evidence_chunk_read ${parts.join('; ')}]`;

      return { success: true, data, output: body + footer };
    } catch (err: unknown) {
      return { success: false, error: `Chunk read failed: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}
