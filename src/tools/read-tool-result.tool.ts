import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { resolveWorkspacePath } from './path-safety.js';
import { readStoredToolResult } from './tool-result-store.js';

export interface ReadToolResultArgs {
  path: string;
  maxChars?: number;
}

export interface ReadToolResultData {
  path: string;
  toolCallId: string;
  toolName: string;
  originalByteLength: number;
  contentType: string;
  sha256: string;
  content: string;
  truncated: boolean;
}

const DEFAULT_MAX_CHARS = 200_000;
const HARD_MAX_CHARS = 1_000_000;

export class ReadToolResultTool implements Tool<ReadToolResultArgs, ReadToolResultData> {
  readonly name = 'read_tool_result';
  readonly description = 'Read a full persisted tool result by storedResultPath after Harness returns a preview for an oversized result.';
  readonly executionKind = 'read' as const;
  readonly isConcurrencySafe = true;
  readonly inputSchema = {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'storedResultPath returned by a prior tool result' },
      maxChars: { type: 'number', description: `Maximum output characters to return, default ${DEFAULT_MAX_CHARS}, max ${HARD_MAX_CHARS}` },
    },
    required: ['path'],
  };

  async call(args: ReadToolResultArgs, _context: ToolUseContext): Promise<ToolResult<ReadToolResultData>> {
    try {
      if (!args.path?.trim()) {
        return { success: false, error: 'read_tool_result requires path' };
      }
      const filePath = resolveWorkspacePath(args.path);
      const record = await readStoredToolResult(filePath);
      const maxChars = clamp(args.maxChars, DEFAULT_MAX_CHARS, 1, HARD_MAX_CHARS);
      const content = record.output.length > maxChars
        ? `${record.output.slice(0, maxChars)}\n... [truncated; retry read_tool_result with maxChars or inspect storedResultPath directly]`
        : record.output;
      const data: ReadToolResultData = {
        path: filePath,
        toolCallId: record.toolCallId,
        toolName: record.toolName,
        originalByteLength: record.originalByteLength,
        contentType: record.contentType,
        sha256: record.sha256,
        content,
        truncated: record.output.length > maxChars,
      };
      return {
        success: true,
        data,
        output: [
          `storedResultPath=${args.path}`,
          `tool=${record.toolName}`,
          `toolCallId=${record.toolCallId}`,
          `originalByteLength=${record.originalByteLength}`,
          `sha256=${record.sha256}`,
          '',
          content,
        ].join('\n'),
      };
    } catch (error) {
      return {
        success: false,
        error: `Failed to read stored tool result: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }

  isEnabled(): boolean {
    return true;
  }
}

function clamp(value: number | undefined, fallback: number, min: number, max: number): number {
  if (value === undefined || !Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, Math.trunc(value)));
}
