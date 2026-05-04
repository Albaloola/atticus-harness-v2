import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export class WriteFileTool implements Tool<{ path: string; content: string }, void> {
  readonly name = 'write_file';
  readonly description = 'Write content to a file. Creates parent directories if needed.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'Absolute path to write to' },
      content: { type: 'string', description: 'Content to write' },
    },
    required: ['path', 'content'],
  };

  async call(args: { path: string; content: string }, _context: ToolUseContext): Promise<ToolResult<void>> {
    try {
      await mkdir(dirname(args.path), { recursive: true });
      await writeFile(args.path, args.content, 'utf-8');
      return { success: true, output: `Written ${args.content.length} bytes to ${args.path}` };
    } catch (err: unknown) {
      return { success: false, error: `Failed to write file: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}
