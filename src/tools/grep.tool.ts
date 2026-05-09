import { readFile } from 'node:fs/promises';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import {
  collectWorkspaceFiles,
  isLikelyBinaryFile,
  matchGlob,
  splitGlobPatterns,
  typeMatches,
} from './file-search-utils.js';

type GrepOutputMode = 'content' | 'files_with_matches' | 'count';

export interface GrepArgs {
  pattern: string;
  path?: string;
  glob?: string;
  type?: string;
  output_mode?: GrepOutputMode;
  outputMode?: GrepOutputMode;
  '-B'?: number;
  '-A'?: number;
  '-C'?: number;
  context?: number;
  '-n'?: boolean;
  '-i'?: boolean;
  caseSensitive?: boolean;
  head_limit?: number;
  headLimit?: number;
  offset?: number;
  multiline?: boolean;
  includeIgnored?: boolean;
  maxFiles?: number;
}

export interface GrepResult {
  mode: GrepOutputMode;
  numFiles: number;
  filenames: string[];
  content?: string;
  numLines?: number;
  numMatches?: number;
  appliedLimit?: number;
  appliedOffset?: number;
  traversalTruncated?: boolean;
}

const DEFAULT_HEAD_LIMIT = 250;
const MAX_COLUMNS = 500;

export class GrepTool implements Tool<GrepArgs, GrepResult> {
  readonly name = 'grep';
  readonly description = 'Search file contents with a regular expression. Supports path, glob, type, content/count/file output modes, line numbers, context, and offset/head_limit pagination.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      pattern: { type: 'string', description: 'Regular expression pattern to search for' },
      path: { type: 'string', description: 'File or directory to search. Defaults to the current workspace.' },
      glob: { type: 'string', description: 'Glob filter such as "*.js", "**/*.ts", or "*.{ts,tsx}". Prefix a pattern with ! to exclude it.' },
      type: { type: 'string', description: 'File type or extension filter, e.g. ts, js, py, md, json' },
      output_mode: {
        type: 'string',
        enum: ['content', 'files_with_matches', 'count'],
        description: 'content shows matching lines, files_with_matches lists matching files, count shows per-file counts. Defaults to files_with_matches.',
      },
      outputMode: {
        type: 'string',
        enum: ['content', 'files_with_matches', 'count'],
        description: 'Camel-case alias for output_mode.',
      },
      '-B': { type: 'number', description: 'Lines of context before each match for content mode' },
      '-A': { type: 'number', description: 'Lines of context after each match for content mode' },
      '-C': { type: 'number', description: 'Lines of context before and after each match for content mode' },
      context: { type: 'number', description: 'Alias for -C' },
      '-n': { type: 'boolean', description: 'Show line numbers in content mode. Defaults to true.' },
      '-i': { type: 'boolean', description: 'Case-insensitive search' },
      caseSensitive: { type: 'boolean', description: 'Set false for case-insensitive search; -i also works.' },
      head_limit: { type: 'number', description: 'Limit returned lines or entries. Defaults to 250; pass 0 for all.' },
      headLimit: { type: 'number', description: 'Camel-case alias for head_limit.' },
      offset: { type: 'number', description: 'Skip this many result lines or entries before applying head_limit.' },
      multiline: { type: 'boolean', description: 'Allow regex matches across line breaks.' },
      includeIgnored: { type: 'boolean', description: 'Include normally noisy directories such as .git and node_modules.' },
      maxFiles: { type: 'number', description: 'Maximum files to scan before returning traversalTruncated.' },
    },
    required: ['pattern'],
  };

  isEnabled(): boolean { return true; }

  async call(args: GrepArgs, _context: ToolUseContext): Promise<ToolResult<GrepResult>> {
    try {
      if (!args.pattern?.trim()) {
        return { success: false, error: 'grep requires a non-empty pattern' };
      }

      const mode = args.output_mode ?? args.outputMode ?? 'files_with_matches';
      if (!['content', 'files_with_matches', 'count'].includes(mode)) {
        return { success: false, error: `Unsupported grep output mode: ${mode}` };
      }

      const flags = [
        args.multiline ? 'm' : '',
        args.multiline ? 's' : '',
        args['-i'] === true || args.caseSensitive === false ? 'i' : '',
      ].join('');
      const regex = new RegExp(args.pattern, flags);
      const globalRegex = new RegExp(args.pattern, `${flags}g`);
      const globPatterns = splitGlobPatterns(args.glob);
      const collected = await collectWorkspaceFiles(args.path, {
        includeIgnored: args.includeIgnored === true,
        maxFiles: args.maxFiles,
      });
      const files = collected.files.filter((file) =>
        typeMatches(file.relativePath, args.type) && matchesGlobFilters(file.relativePath, globPatterns)
      );

      if (mode === 'content') {
        const result = await contentMode(files, regex, globalRegex, args);
        const data = { ...result.data, traversalTruncated: collected.truncated };
        return {
          success: true,
          data,
          output: formatContentOutput(data),
        };
      }

      if (mode === 'count') {
        const result = await countMode(files, globalRegex, args);
        const data = { ...result.data, traversalTruncated: collected.truncated };
        return {
          success: true,
          data,
          output: formatCountOutput(data),
        };
      }

      const result = await filesWithMatchesMode(files, regex, args);
      const data = { ...result.data, traversalTruncated: collected.truncated };
      return {
        success: true,
        data,
        output: formatFilesOutput(data),
      };
    } catch (err: unknown) {
      return { success: false, error: `Grep failed: ${(err as Error).message}` };
    }
  }
}

async function contentMode(
  files: Array<{ absolutePath: string; relativePath: string }>,
  regex: RegExp,
  globalRegex: RegExp,
  args: GrepArgs,
): Promise<{ data: GrepResult }> {
  const showLineNumbers = args['-n'] ?? true;
  const before = normalizeNonNegative(args.context ?? args['-C'] ?? args['-B'] ?? 0);
  const after = normalizeNonNegative(args.context ?? args['-C'] ?? args['-A'] ?? 0);
  const rows: string[] = [];
  const matchedFiles = new Set<string>();

  for (const file of files) {
    if (await isLikelyBinaryFile(file.absolutePath)) continue;
    const content = await readFile(file.absolutePath, 'utf-8');

    if (args.multiline) {
      const matches = collectMultilineMatches(content, globalRegex);
      for (const match of matches) {
        matchedFiles.add(file.relativePath);
        const prefix = showLineNumbers ? `${file.relativePath}:${match.line}:` : `${file.relativePath}:`;
        rows.push(prefix + truncateColumn(match.excerpt));
      }
      continue;
    }

    const lines = content.split(/\r?\n/);
    const selected = new Map<number, string>();
    for (let index = 0; index < lines.length; index += 1) {
      regex.lastIndex = 0;
      if (!regex.test(lines[index])) continue;
      matchedFiles.add(file.relativePath);
      const start = Math.max(0, index - before);
      const end = Math.min(lines.length - 1, index + after);
      for (let lineIndex = start; lineIndex <= end; lineIndex += 1) {
        selected.set(lineIndex, lines[lineIndex]);
      }
    }

    for (const [lineIndex, line] of selected) {
      const prefix = showLineNumbers ? `${file.relativePath}:${lineIndex + 1}:` : `${file.relativePath}:`;
      rows.push(prefix + truncateColumn(line));
    }
  }

  const window = applyWindow(rows, args.head_limit ?? args.headLimit, args.offset);
  return {
    data: {
      mode: 'content',
      numFiles: matchedFiles.size,
      filenames: [...matchedFiles],
      content: window.items.join('\n'),
      numLines: window.items.length,
      ...(window.appliedLimit !== undefined ? { appliedLimit: window.appliedLimit } : {}),
      ...(window.appliedOffset ? { appliedOffset: window.appliedOffset } : {}),
    },
  };
}

async function countMode(
  files: Array<{ absolutePath: string; relativePath: string }>,
  globalRegex: RegExp,
  args: GrepArgs,
): Promise<{ data: GrepResult }> {
  const rows: string[] = [];
  let totalMatches = 0;
  let fileCount = 0;

  for (const file of files) {
    if (await isLikelyBinaryFile(file.absolutePath)) continue;
    const content = await readFile(file.absolutePath, 'utf-8');
    const count = countMatches(content, globalRegex);
    if (count === 0) continue;
    fileCount += 1;
    totalMatches += count;
    rows.push(`${file.relativePath}:${count}`);
  }

  const window = applyWindow(rows, args.head_limit ?? args.headLimit, args.offset);
  return {
    data: {
      mode: 'count',
      numFiles: fileCount,
      filenames: [],
      content: window.items.join('\n'),
      numMatches: totalMatches,
      ...(window.appliedLimit !== undefined ? { appliedLimit: window.appliedLimit } : {}),
      ...(window.appliedOffset ? { appliedOffset: window.appliedOffset } : {}),
    },
  };
}

async function filesWithMatchesMode(
  files: Array<{ absolutePath: string; relativePath: string }>,
  regex: RegExp,
  args: GrepArgs,
): Promise<{ data: GrepResult }> {
  const matches: string[] = [];
  for (const file of files) {
    if (await isLikelyBinaryFile(file.absolutePath)) continue;
    const content = await readFile(file.absolutePath, 'utf-8');
    regex.lastIndex = 0;
    if (regex.test(content)) matches.push(file.relativePath);
  }

  const window = applyWindow(matches, args.head_limit ?? args.headLimit, args.offset);
  return {
    data: {
      mode: 'files_with_matches',
      numFiles: window.items.length,
      filenames: window.items,
      ...(window.appliedLimit !== undefined ? { appliedLimit: window.appliedLimit } : {}),
      ...(window.appliedOffset ? { appliedOffset: window.appliedOffset } : {}),
    },
  };
}

function matchesGlobFilters(relativePath: string, patterns: string[]): boolean {
  if (patterns.length === 0) return true;
  const positive = patterns.filter((pattern) => !pattern.startsWith('!'));
  const negative = patterns.filter((pattern) => pattern.startsWith('!')).map((pattern) => pattern.slice(1));
  if (negative.some((pattern) => matchGlob(relativePath, pattern))) return false;
  if (positive.length === 0) return true;
  return positive.some((pattern) => matchGlob(relativePath, pattern));
}

function collectMultilineMatches(content: string, regex: RegExp): Array<{ line: number; excerpt: string }> {
  const matches: Array<{ line: number; excerpt: string }> = [];
  regex.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    const start = match.index;
    const line = content.slice(0, start).split(/\r?\n/).length;
    const excerpt = (match[0] || content.slice(start, start + MAX_COLUMNS)).replace(/\r?\n/g, '\\n');
    matches.push({ line, excerpt });
    if (match[0] === '') regex.lastIndex += 1;
  }
  return matches;
}

function countMatches(content: string, regex: RegExp): number {
  regex.lastIndex = 0;
  let count = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    count += 1;
    if (match[0] === '') regex.lastIndex += 1;
  }
  return count;
}

function applyWindow<T>(
  items: T[],
  headLimit: number | undefined,
  offsetValue: number | undefined,
): { items: T[]; appliedLimit?: number; appliedOffset?: number } {
  const offset = normalizeNonNegative(offsetValue ?? 0);
  if (headLimit === 0) {
    return {
      items: items.slice(offset),
      ...(offset ? { appliedOffset: offset } : {}),
    };
  }

  const limit = normalizePositive(headLimit, DEFAULT_HEAD_LIMIT);
  const window = items.slice(offset, offset + limit);
  return {
    items: window,
    ...(items.length - offset > limit ? { appliedLimit: limit } : {}),
    ...(offset ? { appliedOffset: offset } : {}),
  };
}

function formatContentOutput(data: GrepResult): string {
  const content = data.content || 'No matches found';
  return appendWindowNote(content, data);
}

function formatCountOutput(data: GrepResult): string {
  const body = data.content || 'No matches found';
  const summary = `Found ${data.numMatches ?? 0} occurrence${data.numMatches === 1 ? '' : 's'} across ${data.numFiles} file${data.numFiles === 1 ? '' : 's'}.`;
  return appendWindowNote(`${body}\n\n${summary}`, data);
}

function formatFilesOutput(data: GrepResult): string {
  if (data.filenames.length === 0) return 'No files found';
  return appendWindowNote(`Found ${data.filenames.length} file${data.filenames.length === 1 ? '' : 's'}\n${data.filenames.join('\n')}`, data);
}

function appendWindowNote(output: string, data: GrepResult): string {
  const parts = [
    data.appliedLimit !== undefined ? `head_limit=${data.appliedLimit}` : undefined,
    data.appliedOffset !== undefined ? `offset=${data.appliedOffset}` : undefined,
    data.traversalTruncated ? 'file traversal truncated' : undefined,
  ].filter(Boolean);
  return parts.length ? `${output}\n\n[${parts.join(', ')}]` : output;
}

function truncateColumn(line: string): string {
  return line.length > MAX_COLUMNS ? `${line.slice(0, MAX_COLUMNS)}...` : line;
}

function normalizeNonNegative(value: number): number {
  if (!Number.isFinite(value) || value < 0) return 0;
  return Math.trunc(value);
}

function normalizePositive(value: number | undefined, fallback: number): number {
  if (value === undefined || !Number.isFinite(value) || value <= 0) return fallback;
  return Math.trunc(value);
}
