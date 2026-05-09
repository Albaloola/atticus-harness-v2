import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { collectWorkspaceFiles, matchGlob } from './file-search-utils.js';
import { resolveWorkspacePath } from './path-safety.js';

export interface GlobArgs {
  pattern: string;
  path?: string;
  maxResults?: number;
  includeIgnored?: boolean;
}

export interface GlobResult {
  durationMs: number;
  numFiles: number;
  filenames: string[];
  truncated: boolean;
  path: string;
}

export class GlobTool implements Tool<GlobArgs, GlobResult> {
  readonly name = 'glob';
  readonly executionKind = 'read' as const;
  readonly isConcurrencySafe = true;
  readonly description = 'Find files by glob pattern anywhere under a workspace path. Results are sorted by most recently modified first.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      pattern: { type: 'string', description: 'Glob pattern to match, e.g. "**/*.ts", "*.pdf", or "src/**/*.{ts,tsx}"' },
      path: { type: 'string', description: 'Directory or file to search. Defaults to the current workspace.' },
      maxResults: { type: 'number', description: 'Maximum number of matching paths to return. Defaults to 100; pass 0 for all collected matches.' },
      includeIgnored: { type: 'boolean', description: 'Include normally noisy directories such as .git and node_modules.' },
    },
    required: ['pattern'],
  };

  isEnabled(): boolean { return true; }

  async call(args: GlobArgs, _context: ToolUseContext): Promise<ToolResult<GlobResult>> {
    try {
      if (!args.pattern?.trim()) {
        return { success: false, error: 'glob requires a non-empty pattern' };
      }

      const started = Date.now();
      const rootPath = resolveWorkspacePath(args.path || '.');
      const maxResults = normalizeLimit(args.maxResults, 100);
      const collected = await collectWorkspaceFiles(args.path, {
        includeIgnored: args.includeIgnored === true,
      });

      const matches = collected.files
        .filter((file) => matchGlob(file.relativePath, args.pattern))
        .sort((a, b) => b.mtimeMs - a.mtimeMs || a.relativePath.localeCompare(b.relativePath));
      const filenames = maxResults === undefined
        ? matches.map((file) => file.relativePath)
        : matches.slice(0, maxResults).map((file) => file.relativePath);
      const truncated = collected.truncated || filenames.length < matches.length;
      const data: GlobResult = {
        durationMs: Date.now() - started,
        numFiles: filenames.length,
        filenames,
        truncated,
        path: rootPath,
      };

      const output = filenames.length === 0
        ? 'No files found'
        : [
            `Found ${filenames.length} file${filenames.length === 1 ? '' : 's'}${truncated ? ' (truncated)' : ''}:`,
            filenames.join('\n'),
          ].join('\n');
      return { success: true, data, output };
    } catch (err: unknown) {
      return { success: false, error: `Glob failed: ${(err as Error).message}` };
    }
  }
}

function normalizeLimit(value: number | undefined, fallback: number): number | undefined {
  if (value === 0) return undefined;
  if (value === undefined || !Number.isFinite(value) || value < 0) return fallback;
  return Math.trunc(value);
}
