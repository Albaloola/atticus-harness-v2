import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { estimateTokenCount } from '../llm/token-counter.js';
import { getChunkBounds, listChunks } from '../storage/sqlite/chunks.js';

const DEFAULT_MAX_READ_TOKENS = 1_200_000;
const HARD_MAX_READ_TOKENS = 1_200_000;

export interface EvidenceChunkReadArgs {
  evidenceId: string;
  chunkIndex?: number;
  count?: number;
  maxTokens?: number;
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
  estimatedTokens: number;
  maxTokens: number;
  tooLarge: boolean;
  suggestedChunkCount?: number;
  continuationHint?: string;
}

export class EvidenceChunkReadTool implements Tool<EvidenceChunkReadArgs, EvidenceChunkReadResult> {
  readonly name = 'evidence_chunk_read';
  readonly description = [
    'Read indexed evidence chunks by evidenceId and chunkIndex.',
    'By default this attempts to return the whole indexed document from chunkIndex to the end, up to a 1,200,000-token safety limit.',
    'Use count and maxTokens to choose an exact adjustable chunk range for focused rereads when the full document is too large.',
  ].join(' ');
  readonly inputSchema = {
    type: 'object',
    properties: {
      evidenceId: { type: 'string', description: 'Evidence ID returned by evidence_search' },
      chunkIndex: { type: 'number', description: 'First chunk index to read (default: 0)' },
      count: { type: 'number', description: 'Number of chunks to read. Omit to read all remaining chunks when within maxTokens.' },
      maxTokens: { type: 'number', description: `Maximum estimated tokens to return, default/max ${DEFAULT_MAX_READ_TOKENS}` },
    },
    required: ['evidenceId'],
  };

  async call(args: EvidenceChunkReadArgs, context: ToolUseContext): Promise<ToolResult<EvidenceChunkReadResult>> {
    if (!context.matterName) {
      return { success: false, error: 'No matter context available' };
    }

    try {
      const startChunkIndex = Math.max(0, Math.trunc(args.chunkIndex ?? 0));
      const maxTokens = normalizeMaxTokens(args.maxTokens);
      const bounds = getChunkBounds(context.matterName, args.evidenceId);
      const availableCount = bounds.maxChunkIndex !== undefined && bounds.maxChunkIndex >= startChunkIndex
        ? bounds.maxChunkIndex - startChunkIndex + 1
        : 0;
      const requestedCount = normalizeRequestedCount(args.count, availableCount);
      const chunks = listChunks(context.matterName, args.evidenceId, startChunkIndex, requestedCount + 1);
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
              estimatedTokens: 0,
              maxTokens,
              tooLarge: false,
              continuationHint: `Retry with evidence_chunk_read({"evidenceId":"${args.evidenceId}","chunkIndex":${bounds.maxChunkIndex}}) to read from the final indexed chunk.`,
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
            estimatedTokens: 0,
            maxTokens,
            tooLarge: false,
          },
          error: `No chunks found for ${args.evidenceId}. It has no indexed chunks.`,
        };
      }
      const visibleChunks = chunks.slice(0, requestedCount);
      const firstChunkIndex = visibleChunks[0]?.chunkIndex ?? startChunkIndex;
      const lastChunkIndex = visibleChunks.at(-1)?.chunkIndex ?? startChunkIndex;
      const estimatedTokens = estimateTokenCount(formatChunkBody(args.evidenceId, visibleChunks));
      if (estimatedTokens > maxTokens) {
        const suggestedChunkCount = suggestChunkCount(args.evidenceId, visibleChunks, maxTokens);
        const data: EvidenceChunkReadResult = {
          evidenceId: args.evidenceId,
          startChunkIndex,
          count: 0,
          chunkBounds: bounds,
          returnedRange: undefined,
          chunks: [],
          previousChunkIndex: bounds.minChunkIndex !== undefined && startChunkIndex > bounds.minChunkIndex
            ? Math.max(bounds.minChunkIndex, startChunkIndex - Math.max(1, suggestedChunkCount))
            : undefined,
          nextChunkIndex: startChunkIndex,
          endReached: false,
          estimatedTokens,
          maxTokens,
          tooLarge: true,
          suggestedChunkCount,
          continuationHint: `Retry with evidence_chunk_read({"evidenceId":"${args.evidenceId}","chunkIndex":${startChunkIndex},"count":${suggestedChunkCount}}), or choose any other chunkIndex/count range.`,
        };
        return {
          success: true,
          data,
          output: [
            'evidence_chunk_read did not return chunk content because the requested range exceeds the model safety limit.',
            `evidenceId=${args.evidenceId}`,
            `requestedRange=${firstChunkIndex}-${lastChunkIndex}`,
            `documentRange=${bounds.minChunkIndex}-${bounds.maxChunkIndex}`,
            `estimatedTokens=${estimatedTokens}; maxTokens=${maxTokens}`,
            data.continuationHint,
            'You can choose any chunkIndex/count range for focused rereads; this is not limited to next/back paging.',
          ].filter(Boolean).join('\n'),
        };
      }

      const nextChunkIndex = chunks.length > requestedCount ? chunks[requestedCount].chunkIndex : undefined;
      const previousChunkIndex = bounds.minChunkIndex !== undefined && firstChunkIndex > bounds.minChunkIndex
        ? Math.max(bounds.minChunkIndex, startChunkIndex - requestedCount)
        : undefined;
      const endReached = nextChunkIndex === undefined;
      const continuationHint = nextChunkIndex !== undefined
        ? `Continue with evidence_chunk_read({"evidenceId":"${args.evidenceId}","chunkIndex":${nextChunkIndex},"count":${requestedCount}}).`
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
        estimatedTokens,
        maxTokens,
        tooLarge: false,
        continuationHint,
      };

      const body = formatChunkBody(args.evidenceId, data.chunks);
      const documentRange = bounds.count > 0 ? `${bounds.minChunkIndex}-${bounds.maxChunkIndex}` : 'none';
      const parts = [
        `returned=${visibleChunks.length}`,
        `documentRange=${documentRange}`,
        `returnedRange=${firstChunkIndex}-${lastChunkIndex}`,
        data.previousChunkIndex !== undefined ? `previousChunkIndex=${data.previousChunkIndex}` : undefined,
        data.nextChunkIndex !== undefined ? `nextChunkIndex=${data.nextChunkIndex}` : undefined,
        `endReached=${data.endReached}`,
        `estimatedTokens=${data.estimatedTokens}`,
        `maxTokens=${data.maxTokens}`,
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

function normalizeRequestedCount(value: number | undefined, availableCount: number): number {
  if (availableCount <= 0) return 1;
  if (value === undefined || !Number.isFinite(value)) return availableCount;
  return Math.min(availableCount, Math.max(1, Math.trunc(value)));
}

function normalizeMaxTokens(value: number | undefined): number {
  if (value === undefined || !Number.isFinite(value)) return DEFAULT_MAX_READ_TOKENS;
  return Math.min(HARD_MAX_READ_TOKENS, Math.max(1, Math.trunc(value)));
}

function formatChunkBody(
  evidenceId: string,
  chunks: Array<{ chunkIndex: number; content: string }>,
): string {
  return chunks
    .map((chunk) => `## ${evidenceId} chunk ${chunk.chunkIndex}\n${chunk.content}`)
    .join('\n\n');
}

function suggestChunkCount(
  evidenceId: string,
  chunks: Array<{ chunkIndex: number; content: string }>,
  maxTokens: number,
): number {
  let selected = 0;
  const chosen: Array<{ chunkIndex: number; content: string }> = [];
  for (const chunk of chunks) {
    chosen.push(chunk);
    const tokens = estimateTokenCount(formatChunkBody(evidenceId, chosen));
    if (tokens > maxTokens) break;
    selected = chosen.length;
  }
  return Math.max(1, selected);
}
