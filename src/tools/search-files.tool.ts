import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { resolveWorkspacePath } from './path-safety.js';

function matchGlob(name: string, pattern: string): boolean {
  const regexStr = pattern
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/\?/g, '.');
  return new RegExp(`^${regexStr}$`).test(name);
}

export class SearchFilesTool implements Tool<{ pattern: string; path?: string }, string[]> {
  readonly name = 'search_files';
  readonly description = 'Search for files matching a glob pattern. Returns matching file paths.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      pattern: { type: 'string', description: 'Glob pattern (e.g., "**/*.pdf")' },
      path: { type: 'string', description: 'Workspace-relative directory, or absolute directory inside the current workspace (default: current)' },
    },
    required: ['pattern'],
  };

  isEnabled(): boolean { return true; }

  async call(args: { pattern: string; path?: string }, _context: ToolUseContext): Promise<ToolResult<string[]>> {
    try {
      const basePath = resolveWorkspacePath(args.path || '.');
      const results: string[] = [];

      await walkDir(basePath, '', results, args.pattern, 3);

      const output = results.length === 0
        ? 'No matching files found'
        : `Found ${results.length} file${results.length === 1 ? '' : 's'}:\n${results.join('\n')}`;
      return { success: true, data: results, output };
    } catch (err: unknown) {
      return { success: false, error: `Search failed: ${(err as Error).message}` };
    }
  }
}

async function walkDir(
  basePath: string,
  relativePath: string,
  results: string[],
  pattern: string,
  maxDepth: number,
): Promise<void> {
  if (maxDepth <= 0 || results.length >= 100) return;

  const dirPath = join(basePath, relativePath);
  let entries: string[];
  try {
    entries = await readdir(dirPath);
  } catch {
    return;
  }

  for (const entry of entries) {
    const entryRel = relativePath ? join(relativePath, entry) : entry;
    const fullPath = join(basePath, entryRel);

    try {
      const entryStat = await stat(fullPath);
      if (entryStat.isDirectory()) {
        await walkDir(basePath, entryRel, results, pattern, maxDepth - 1);
      } else if (entryStat.isFile()) {
        if (matchGlob(entryRel, pattern)) {
          results.push(fullPath);
          if (results.length >= 100) return;
        }
      }
    } catch {
      continue;
    }
  }
}
