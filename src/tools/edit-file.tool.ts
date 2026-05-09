import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { resolveWorkspacePath } from './path-safety.js';

export interface EditFileArgs {
  path?: string;
  file_path?: string;
  oldString?: string;
  old_string?: string;
  newString?: string;
  new_string?: string;
  replaceAll?: boolean;
  replace_all?: boolean;
  expectedContentHash?: string;
}

export interface EditFileResult {
  path: string;
  replacements: number;
  bytesWritten: number;
  previousContentHash?: string;
  contentHash: string;
  created: boolean;
}

export class EditFileTool implements Tool<EditFileArgs, EditFileResult> {
  readonly name = 'edit_file';
  readonly description = 'Edit a text file by exact string replacement, with Claude-style file_path/old_string/new_string aliases, replace_all, creation through empty old string, and optional hash guard.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'Workspace-relative path, or absolute path inside the current workspace' },
      file_path: { type: 'string', description: 'Claude-compatible alias for path' },
      oldString: { type: 'string', description: 'Exact string to replace' },
      old_string: { type: 'string', description: 'Claude-compatible alias for oldString' },
      newString: { type: 'string', description: 'Replacement string' },
      new_string: { type: 'string', description: 'Claude-compatible alias for newString' },
      replaceAll: { type: 'boolean', description: 'Replace every occurrence. Defaults to false and requires the old string to be unique.' },
      replace_all: { type: 'boolean', description: 'Claude-compatible alias for replaceAll' },
      expectedContentHash: { type: 'string', description: 'Optional sha256 hash of file content before editing' },
    },
  };

  isEnabled(): boolean { return true; }

  async call(args: EditFileArgs, _context: ToolUseContext): Promise<ToolResult<EditFileResult>> {
    try {
      const requestedPath = args.path ?? args.file_path;
      if (!requestedPath) return { success: false, error: 'edit_file requires path or file_path' };

      const oldString = args.oldString ?? args.old_string;
      const newString = args.newString ?? args.new_string;
      if (oldString === undefined) return { success: false, error: 'edit_file requires oldString or old_string' };
      if (newString === undefined) return { success: false, error: 'edit_file requires newString or new_string' };
      if (oldString === newString) return { success: false, error: 'No changes to make: old string and new string are identical.' };

      const filePath = resolveWorkspacePath(requestedPath);
      const previousContent = await readExistingFile(filePath);
      const previousContentHash = previousContent !== undefined ? sha256(previousContent) : undefined;
      if (args.expectedContentHash !== undefined && previousContentHash !== args.expectedContentHash) {
        return {
          success: false,
          error: [
            `Content hash mismatch for ${filePath}.`,
            `Expected ${args.expectedContentHash}; found ${previousContentHash ?? 'missing file'}.`,
            'Read the current file before retrying to avoid overwriting newer work.',
          ].join(' '),
        };
      }

      if (previousContent === undefined) {
        if (oldString !== '') {
          return { success: false, error: `File does not exist: ${filePath}. Use old_string="" to create it.` };
        }
        await mkdir(dirname(filePath), { recursive: true });
        await writeFile(filePath, newString, 'utf-8');
        return this.success(filePath, newString, undefined, 1, true);
      }

      if (oldString === '' && previousContent.length > 0) {
        return { success: false, error: 'Cannot create file with old_string="" because the file already exists and is not empty.' };
      }

      const replaceAll = args.replaceAll ?? args.replace_all ?? false;
      const prepared = findReplacement(previousContent, oldString);
      if (prepared.matches === 0) {
        return { success: false, error: `String to replace was not found in ${filePath}.` };
      }
      if (!replaceAll && prepared.matches > 1) {
        return {
          success: false,
          error: `String to replace appears ${prepared.matches} times in ${filePath}. Set replaceAll=true or provide a more specific old string.`,
        };
      }

      const resultingContent = replaceAll
        ? replaceAllExact(previousContent, prepared.oldString, newString)
        : previousContent.replace(prepared.oldString, newString);
      await writeFile(filePath, resultingContent, 'utf-8');
      return this.success(filePath, resultingContent, previousContentHash, replaceAll ? prepared.matches : 1, false);
    } catch (err: unknown) {
      return { success: false, error: `Failed to edit file: ${(err as Error).message}` };
    }
  }

  private success(
    path: string,
    content: string,
    previousContentHash: string | undefined,
    replacements: number,
    created: boolean,
  ): ToolResult<EditFileResult> {
    const data: EditFileResult = {
      path,
      replacements,
      bytesWritten: Buffer.byteLength(content, 'utf8'),
      previousContentHash,
      contentHash: sha256(content),
      created,
    };
    return {
      success: true,
      data,
      output: [
        created ? `Created ${path}.` : `Edited ${path}.`,
        `replacements=${replacements}`,
        `contentHash=${data.contentHash}`,
        previousContentHash ? `previousContentHash=${previousContentHash}` : undefined,
      ].filter(Boolean).join(' '),
    };
  }
}

async function readExistingFile(path: string): Promise<string | undefined> {
  try {
    return await readFile(path, 'utf-8');
  } catch (err: unknown) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code === 'ENOENT') return undefined;
    throw err;
  }
}

function findReplacement(content: string, oldString: string): { oldString: string; matches: number } {
  const exactMatches = countOccurrences(content, oldString);
  if (exactMatches > 0) return { oldString, matches: exactMatches };

  const crlfOldString = oldString.replace(/\n/g, '\r\n');
  if (crlfOldString !== oldString) {
    const crlfMatches = countOccurrences(content, crlfOldString);
    if (crlfMatches > 0) return { oldString: crlfOldString, matches: crlfMatches };
  }

  return { oldString, matches: 0 };
}

function countOccurrences(content: string, needle: string): number {
  if (needle === '') return content.length === 0 ? 1 : 0;
  let count = 0;
  let index = 0;
  while (true) {
    index = content.indexOf(needle, index);
    if (index === -1) return count;
    count += 1;
    index += needle.length;
  }
}

function replaceAllExact(content: string, oldString: string, newString: string): string {
  return content.split(oldString).join(newString);
}

function sha256(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}
