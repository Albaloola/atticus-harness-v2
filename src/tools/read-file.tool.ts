import { readFile } from 'fs/promises';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export class ReadFileTool implements Tool<{ path: string }, string> {
  readonly name = 'read_file';
  readonly description = 'Read the contents of a file. Returns the file content as text.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'Absolute path to the file to read' },
    },
    required: ['path'],
  };

  async call(args: { path: string }, _context: ToolUseContext): Promise<ToolResult<string>> {
    try {
      const content = await readFile(args.path, 'utf-8');
      return { success: true, data: content, output: content.length > 2000 ? content.substring(0, 2000) + '\n... [truncated]' : content };
    } catch (err: unknown) {
      return { success: false, error: `Failed to read file: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}
