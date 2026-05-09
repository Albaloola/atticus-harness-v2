import { createHash } from 'node:crypto';
import { appendFile, mkdir, readFile, writeFile } from 'fs/promises';
import { dirname } from 'path';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { resolveWorkspacePath } from './path-safety.js';

export interface WriteFileArgs {
  path: string;
  content: string;
  mode?: 'overwrite' | 'append';
  expectedContentHash?: string;
}

export interface WriteFileResult {
  path: string;
  mode: 'overwrite' | 'append';
  bytesWritten: number;
  previousContentHash?: string;
  contentHash: string;
}

export class WriteFileTool implements Tool<WriteFileArgs, WriteFileResult> {
  readonly name = 'write_file';
  readonly description = 'Write or append content to a file. Use append plus expectedContentHash to checkpoint long artifacts safely.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'Workspace-relative path, or absolute path inside the current workspace' },
      content: { type: 'string', description: 'Content to write' },
      mode: {
        type: 'string',
        enum: ['overwrite', 'append'],
        description: 'Write mode. Defaults to overwrite; use append for long artifacts built section by section.',
      },
      expectedContentHash: {
        type: 'string',
        description: 'Optional sha256 hash of the file content before this write. Prevents accidental overwrite or stale append.',
      },
    },
    required: ['path', 'content'],
  };

  async call(args: WriteFileArgs, _context: ToolUseContext): Promise<ToolResult<WriteFileResult>> {
    try {
      const filePath = resolveWorkspacePath(args.path);
      const mode = args.mode ?? 'overwrite';
      if (mode !== 'overwrite' && mode !== 'append') {
        return { success: false, error: `Unsupported write mode: ${mode}` };
      }

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

      await mkdir(dirname(filePath), { recursive: true });
      if (mode === 'append') {
        await appendFile(filePath, args.content, 'utf-8');
      } else {
        await writeFile(filePath, args.content, 'utf-8');
      }

      const resultingContent = mode === 'append'
        ? `${previousContent ?? ''}${args.content}`
        : args.content;
      const data: WriteFileResult = {
        path: filePath,
        mode,
        bytesWritten: Buffer.byteLength(args.content, 'utf8'),
        previousContentHash,
        contentHash: sha256(resultingContent),
      };
      return {
        success: true,
        data,
        output: [
          `${mode === 'append' ? 'Appended' : 'Written'} ${data.bytesWritten} bytes to ${filePath}.`,
          `contentHash=${data.contentHash}`,
          previousContentHash ? `previousContentHash=${previousContentHash}` : undefined,
        ].filter(Boolean).join(' '),
      };
    } catch (err: unknown) {
      return { success: false, error: `Failed to write file: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
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

function sha256(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}
