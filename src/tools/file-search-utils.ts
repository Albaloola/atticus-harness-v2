import { open, readdir, stat } from 'node:fs/promises';
import { basename, relative, resolve, sep, join } from 'node:path';
import { resolveWorkspacePath } from './path-safety.js';

const DEFAULT_IGNORED_DIRECTORIES = new Set([
  '.git',
  '.hg',
  '.jj',
  '.sl',
  '.svn',
  'node_modules',
]);

export interface WalkedFile {
  absolutePath: string;
  relativePath: string;
  mtimeMs: number;
  size: number;
}

export interface CollectFilesOptions {
  includeIgnored?: boolean;
  maxFiles?: number;
}

export interface CollectFilesResult {
  files: WalkedFile[];
  truncated: boolean;
}

export async function collectWorkspaceFiles(
  inputPath: string | undefined,
  options: CollectFilesOptions = {},
): Promise<CollectFilesResult> {
  const startPath = resolveWorkspacePath(inputPath || '.');
  const startStat = await stat(startPath);
  const workspaceRoot = resolve(process.cwd());
  const maxFiles = options.maxFiles && options.maxFiles > 0 ? Math.trunc(options.maxFiles) : 50_000;
  const files: WalkedFile[] = [];
  let truncated = false;

  if (startStat.isFile()) {
    return {
      files: [toWalkedFile(workspaceRoot, startPath, startStat)],
      truncated: false,
    };
  }
  if (!startStat.isDirectory()) {
    throw new Error(`Path is not a file or directory: ${inputPath || '.'}`);
  }

  async function walk(dirPath: string): Promise<void> {
    if (truncated) return;
    let entries;
    try {
      entries = await readdir(dirPath, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (truncated) return;
      const fullPath = join(dirPath, entry.name);
      if (entry.isDirectory()) {
        if (!options.includeIgnored && DEFAULT_IGNORED_DIRECTORIES.has(entry.name)) continue;
        await walk(fullPath);
        continue;
      }
      if (!entry.isFile()) continue;

      try {
        const fileStat = await stat(fullPath);
        files.push(toWalkedFile(workspaceRoot, fullPath, fileStat));
        if (files.length >= maxFiles) {
          truncated = true;
          return;
        }
      } catch {
        continue;
      }
    }
  }

  await walk(startPath);
  return { files, truncated };
}

export function workspaceRelativePath(absolutePath: string): string {
  const rel = relative(resolve(process.cwd()), absolutePath);
  return normalizePath(rel || basename(absolutePath));
}

export function normalizePath(path: string): string {
  return path.split(sep).join('/');
}

export function matchGlob(relativePath: string, pattern: string): boolean {
  const normalizedPath = normalizePath(relativePath);
  const normalizedPattern = normalizePath(pattern.trim());
  if (!normalizedPattern) return false;

  const matcher = globToRegExp(normalizedPattern);
  if (normalizedPattern.includes('/')) {
    return matcher.test(normalizedPath);
  }
  return matcher.test(basename(normalizedPath)) || matcher.test(normalizedPath);
}

export function splitGlobPatterns(input: string | undefined): string[] {
  if (!input) return [];
  const patterns: string[] = [];
  let current = '';
  let braceDepth = 0;

  for (const char of input) {
    if (char === '{') braceDepth += 1;
    if (char === '}' && braceDepth > 0) braceDepth -= 1;
    if ((char === ',' || /\s/.test(char)) && braceDepth === 0) {
      if (current.trim()) patterns.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }

  if (current.trim()) patterns.push(current.trim());
  return patterns;
}

export async function isLikelyBinaryFile(path: string): Promise<boolean> {
  const handle = await open(path, 'r');
  let sample: Buffer;
  try {
    const buffer = Buffer.alloc(4096);
    const result = await handle.read(buffer, 0, buffer.length, 0);
    sample = buffer.subarray(0, result.bytesRead);
  } finally {
    await handle.close();
  }
  if (sample.includes(0)) return true;
  if (sample.length === 0) return false;

  let suspicious = 0;
  for (const byte of sample) {
    if (byte === 9 || byte === 10 || byte === 13) continue;
    if (byte >= 32 && byte <= 126) continue;
    if (byte >= 128) continue;
    suspicious += 1;
  }
  return suspicious / sample.length > 0.3;
}

export function typeMatches(relativePath: string, type: string | undefined): boolean {
  if (!type) return true;
  const ext = relativePath.split('.').pop()?.toLowerCase() ?? '';
  const normalized = type.toLowerCase().replace(/^\./, '');
  const extensions = TYPE_EXTENSIONS[normalized] ?? [normalized];
  return extensions.includes(ext);
}

function toWalkedFile(workspaceRoot: string, absolutePath: string, fileStat: { mtimeMs: number; size: number }): WalkedFile {
  const rel = relative(workspaceRoot, absolutePath);
  return {
    absolutePath,
    relativePath: normalizePath(rel || basename(absolutePath)),
    mtimeMs: fileStat.mtimeMs,
    size: fileStat.size,
  };
}

function globToRegExp(pattern: string): RegExp {
  let source = '^';
  for (let index = 0; index < pattern.length;) {
    const char = pattern[index];
    const next = pattern[index + 1];

    if (char === '*' && next === '*') {
      const after = pattern[index + 2];
      if (after === '/') {
        source += '(?:.*/)?';
        index += 3;
      } else {
        source += '.*';
        index += 2;
      }
      continue;
    }

    if (char === '*') {
      source += '[^/]*';
      index += 1;
      continue;
    }

    if (char === '?') {
      source += '[^/]';
      index += 1;
      continue;
    }

    if (char === '{') {
      const end = pattern.indexOf('}', index + 1);
      if (end > index) {
        const body = pattern.slice(index + 1, end);
        const alternatives = body.split(',').map(escapeRegex).join('|');
        source += `(?:${alternatives})`;
        index = end + 1;
        continue;
      }
    }

    source += escapeRegex(char);
    index += 1;
  }
  source += '$';
  return new RegExp(source);
}

function escapeRegex(value: string): string {
  return value.replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
}

const TYPE_EXTENSIONS: Record<string, string[]> = {
  c: ['c', 'h'],
  cpp: ['cc', 'cpp', 'cxx', 'hh', 'hpp', 'hxx'],
  css: ['css'],
  go: ['go'],
  html: ['htm', 'html'],
  java: ['java'],
  js: ['js', 'jsx', 'mjs', 'cjs'],
  json: ['json', 'jsonc'],
  md: ['md', 'markdown', 'mdx'],
  py: ['py', 'pyi'],
  rs: ['rs'],
  rust: ['rs'],
  sh: ['sh', 'bash', 'zsh'],
  ts: ['ts', 'tsx', 'mts', 'cts'],
  txt: ['txt', 'text'],
  yaml: ['yaml', 'yml'],
};
