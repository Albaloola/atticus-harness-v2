import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { resolveWorkspacePath } from './path-safety.js';

type NotebookEditMode = 'replace' | 'insert' | 'delete';
type NotebookCellType = 'code' | 'markdown' | 'raw';

export interface NotebookEditArgs {
  path?: string;
  file_path?: string;
  cellIndex?: number;
  cell_index?: number;
  mode?: NotebookEditMode;
  newSource?: string;
  new_source?: string;
  cellType?: NotebookCellType;
  cell_type?: NotebookCellType;
  expectedContentHash?: string;
}

export interface NotebookEditResult {
  path: string;
  mode: NotebookEditMode;
  cellIndex: number;
  cellCount: number;
  previousContentHash: string;
  contentHash: string;
}

interface Notebook {
  cells: NotebookCell[];
  metadata?: Record<string, unknown>;
  nbformat?: number;
  nbformat_minor?: number;
  [key: string]: unknown;
}

interface NotebookCell {
  cell_type: NotebookCellType;
  source: string | string[];
  metadata?: Record<string, unknown>;
  outputs?: unknown[];
  execution_count?: number | null;
  [key: string]: unknown;
}

export class NotebookEditTool implements Tool<NotebookEditArgs, NotebookEditResult> {
  readonly name = 'notebook_edit';
  readonly description = 'Edit a Jupyter .ipynb notebook cell by index. Supports replace, insert, and delete with code/markdown/raw cell types and optional hash guard.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'Workspace-relative .ipynb path, or absolute path inside the workspace' },
      file_path: { type: 'string', description: 'Claude-compatible alias for path' },
      cellIndex: { type: 'number', description: 'Zero-based cell index' },
      cell_index: { type: 'number', description: 'Claude-compatible alias for cellIndex' },
      mode: { type: 'string', enum: ['replace', 'insert', 'delete'], description: 'Edit mode. Defaults to replace.' },
      newSource: { type: 'string', description: 'New cell source for replace/insert' },
      new_source: { type: 'string', description: 'Claude-compatible alias for newSource' },
      cellType: { type: 'string', enum: ['code', 'markdown', 'raw'], description: 'Cell type for inserted or replaced cells. Defaults to the existing cell type, then code.' },
      cell_type: { type: 'string', enum: ['code', 'markdown', 'raw'], description: 'Claude-compatible alias for cellType' },
      expectedContentHash: { type: 'string', description: 'Optional sha256 hash of notebook JSON before editing' },
    },
  };

  isEnabled(): boolean { return true; }

  async call(args: NotebookEditArgs, _context: ToolUseContext): Promise<ToolResult<NotebookEditResult>> {
    try {
      const requestedPath = args.path ?? args.file_path;
      if (!requestedPath) return { success: false, error: 'notebook_edit requires path or file_path' };

      const filePath = resolveWorkspacePath(requestedPath);
      if (!filePath.endsWith('.ipynb')) {
        return { success: false, error: 'notebook_edit only edits .ipynb files' };
      }

      const raw = await readFile(filePath, 'utf-8');
      const previousContentHash = sha256(raw);
      if (args.expectedContentHash !== undefined && previousContentHash !== args.expectedContentHash) {
        return {
          success: false,
          error: `Content hash mismatch for ${filePath}. Expected ${args.expectedContentHash}; found ${previousContentHash}.`,
        };
      }

      const notebook = JSON.parse(raw) as Notebook;
      if (!Array.isArray(notebook.cells)) {
        return { success: false, error: `${filePath} is not a valid notebook: missing cells array` };
      }

      const mode = args.mode ?? 'replace';
      const cellIndex = normalizeCellIndex(args.cellIndex ?? args.cell_index, notebook.cells.length, mode);
      const source = args.newSource ?? args.new_source;
      const requestedCellType = args.cellType ?? args.cell_type;

      if (mode === 'delete') {
        notebook.cells.splice(cellIndex, 1);
      } else {
        if (source === undefined) return { success: false, error: `notebook_edit mode ${mode} requires newSource or new_source` };
        const existing = mode === 'replace' ? notebook.cells[cellIndex] : undefined;
        const cellType = requestedCellType ?? existing?.cell_type ?? 'code';
        const newCell = makeCell(cellType, source, existing);
        if (mode === 'insert') {
          notebook.cells.splice(cellIndex, 0, newCell);
        } else {
          notebook.cells[cellIndex] = newCell;
        }
      }

      const serialized = `${JSON.stringify(notebook, null, 2)}\n`;
      await writeFile(filePath, serialized, 'utf-8');
      const data: NotebookEditResult = {
        path: filePath,
        mode,
        cellIndex,
        cellCount: notebook.cells.length,
        previousContentHash,
        contentHash: sha256(serialized),
      };
      return {
        success: true,
        data,
        output: `Notebook edited. mode=${mode} cellIndex=${cellIndex} cellCount=${data.cellCount} contentHash=${data.contentHash}`,
      };
    } catch (err: unknown) {
      return { success: false, error: `Failed to edit notebook: ${(err as Error).message}` };
    }
  }
}

function normalizeCellIndex(value: number | undefined, cellCount: number, mode: NotebookEditMode): number {
  if (value === undefined || !Number.isFinite(value)) {
    throw new Error('notebook_edit requires cellIndex or cell_index');
  }
  const index = Math.trunc(value);
  const max = mode === 'insert' ? cellCount : cellCount - 1;
  if (index < 0 || index > max) {
    throw new Error(`Cell index ${index} is outside the valid range 0-${Math.max(max, 0)}`);
  }
  return index;
}

function makeCell(type: NotebookCellType, source: string, existing: NotebookCell | undefined): NotebookCell {
  const base: NotebookCell = {
    cell_type: type,
    metadata: existing?.metadata ?? {},
    source: sourceToNotebookLines(source),
  };
  if (type === 'code') {
    base.execution_count = existing?.cell_type === 'code' ? existing.execution_count ?? null : null;
    base.outputs = existing?.cell_type === 'code' ? existing.outputs ?? [] : [];
  }
  return base;
}

function sourceToNotebookLines(source: string): string[] {
  if (source.length === 0) return [];
  const lines = source.split(/(?<=\n)/);
  return lines[lines.length - 1] === '' ? lines.slice(0, -1) : lines;
}

function sha256(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}
