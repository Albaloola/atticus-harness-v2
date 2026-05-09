import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { collectWorkspaceFiles, matchGlob } from './file-search-utils.js';
import { resolveWorkspacePath } from './path-safety.js';

export interface SearchFilesArgs {
  pattern: string;
  path?: string;
  maxResults?: number;
  includeIgnored?: boolean;
}

export class SearchFilesTool implements Tool<SearchFilesArgs, string[]> {
  readonly name = 'search_files';
  readonly description = 'Search for files matching a glob pattern anywhere under a workspace path. Returns matching file paths.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      pattern: { type: 'string', description: 'Glob pattern (e.g., "**/*.pdf")' },
      path: { type: 'string', description: 'Workspace-relative directory, or absolute directory inside the current workspace (default: current)' },
      maxResults: { type: 'number', description: 'Maximum matching paths to return. Defaults to 100; pass 0 for all collected matches.' },
      includeIgnored: { type: 'boolean', description: 'Include normally noisy directories such as .git and node_modules.' },
    },
    required: ['pattern'],
  };

  isEnabled(): boolean { return true; }

  async call(args: SearchFilesArgs, _context: ToolUseContext): Promise<ToolResult<string[]>> {
    try {
      resolveWorkspacePath(args.path || '.');
      const maxResults = normalizeLimit(args.maxResults, 100);
      const collected = await collectWorkspaceFiles(args.path, {
        includeIgnored: args.includeIgnored === true,
      });
      const matches = collected.files
        .filter((file) => matchGlob(file.relativePath, args.pattern))
        .sort((a, b) => b.mtimeMs - a.mtimeMs || a.relativePath.localeCompare(b.relativePath));
      const results = maxResults === undefined
        ? matches.map((file) => file.absolutePath)
        : matches.slice(0, maxResults).map((file) => file.absolutePath);
      const truncated = collected.truncated || results.length < matches.length;

      const output = results.length === 0
        ? 'No matching files found'
        : `Found ${results.length} file${results.length === 1 ? '' : 's'}${truncated ? ' (truncated)' : ''}:\n${results.join('\n')}`;
      return { success: true, data: results, output };
    } catch (err: unknown) {
      return { success: false, error: `Search failed: ${(err as Error).message}` };
    }
  }
}

function normalizeLimit(value: number | undefined, fallback: number): number | undefined {
  if (value === 0) return undefined;
  if (value === undefined || !Number.isFinite(value) || value < 0) return fallback;
  return Math.trunc(value);
}
