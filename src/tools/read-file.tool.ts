import { readFile } from 'fs/promises';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { resolveWorkspacePath } from './path-safety.js';

const DEFAULT_READ_LENGTH = 5000;
const MAX_READ_LENGTH = 20000;

export interface ReadFileArgs {
  path: string;
  offset?: number;
  length?: number;
}

export interface ReadFileResult {
  content: string;
  offset: number;
  length: number;
  totalLength: number;
  truncated: boolean;
  nextOffset?: number;
}

export class ReadFileTool implements Tool<ReadFileArgs, ReadFileResult> {
  readonly name = 'read_file';
  readonly description = 'Read a window of a text file. Use offset and length to page through long evidence without losing tail content.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'Workspace-relative path, or absolute path inside the current workspace' },
      offset: { type: 'number', description: 'Character offset to start reading from (default: 0)' },
      length: { type: 'number', description: `Characters to read, max ${MAX_READ_LENGTH} (default: ${DEFAULT_READ_LENGTH})` },
    },
    required: ['path'],
  };

  async call(args: ReadFileArgs, _context: ToolUseContext): Promise<ToolResult<ReadFileResult>> {
    try {
      const filePath = resolveWorkspacePath(args.path);
      const content = await readFile(filePath, 'utf-8');
      const offset = Math.max(0, Math.trunc(args.offset ?? 0));
      const requestedLength = Math.max(1, Math.trunc(args.length ?? DEFAULT_READ_LENGTH));
      const length = Math.min(requestedLength, MAX_READ_LENGTH);
      const slice = content.slice(offset, offset + length);
      const nextOffset = offset + slice.length < content.length ? offset + slice.length : undefined;
      const data: ReadFileResult = {
        content: slice,
        offset,
        length: slice.length,
        totalLength: content.length,
        truncated: nextOffset !== undefined,
        nextOffset,
      };
      const footer = data.truncated
        ? `\n\n[read_file window ${offset}-${offset + slice.length} of ${content.length}; nextOffset=${nextOffset}]`
        : `\n\n[read_file complete ${offset}-${offset + slice.length} of ${content.length}]`;
      return { success: true, data, output: slice + footer };
    } catch (err: unknown) {
      return { success: false, error: `Failed to read file: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}
