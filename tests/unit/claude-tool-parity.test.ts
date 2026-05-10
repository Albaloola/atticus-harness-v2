import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { ToolRegistry } from '../../src/tools/index.ts';
import { GlobTool } from '../../src/tools/glob.tool.ts';
import { GrepTool } from '../../src/tools/grep.tool.ts';
import { EditFileTool } from '../../src/tools/edit-file.tool.ts';
import { BashTool } from '../../src/tools/bash.tool.ts';
import { TodoWriteTool } from '../../src/tools/todo-write.tool.ts';
import { NotebookEditTool } from '../../src/tools/notebook-edit.tool.ts';
import { classifyToolCategory, evaluateAutonomyPolicy } from '../../src/config/policy.ts';
import { DEFAULTS } from '../../src/config/schema.ts';
import type { ToolUseContext } from '../../src/types/tool.ts';

describe('Claude-style tool parity', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'claude-tool-parity-'));
    originalCwd = process.cwd();
    process.chdir(tmpDir);
  });

  afterEach(() => {
    process.chdir(originalCwd);
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('registers core Claude-style tools by default', () => {
    const registry = new ToolRegistry();
    const names = new Set(registry.getAll().map((tool) => tool.name));

    for (const name of [
      'read_file',
      'write_file',
      'edit_file',
      'glob',
      'grep',
      'bash',
      'todo_write',
      'tool_search',
      'sleep',
      'notebook_edit',
      'web_fetch',
    ]) {
      expect(names.has(name)).toBe(true);
    }
  });

  it('finds files with glob and searches contents with grep', async () => {
    writeFileSync(join(tmpDir, 'alpha.ts'), 'export const marker = 1;\n', 'utf-8');
    writeFileSync(join(tmpDir, 'beta.md'), 'marker in markdown\n', 'utf-8');

    const glob = await new GlobTool().call({ pattern: '**/*.ts' }, makeContext());
    const grep = await new GrepTool().call({
      pattern: 'marker',
      glob: '*.{ts,md}',
      output_mode: 'content',
    }, makeContext());

    expect(glob.success).toBe(true);
    expect(glob.data?.filenames).toContain('alpha.ts');
    expect(grep.success).toBe(true);
    expect(grep.output).toContain('alpha.ts:1:export const marker = 1;');
    expect(grep.output).toContain('beta.md:1:marker in markdown');
  });

  it('edits exact strings with Claude-compatible argument names', async () => {
    const filePath = join(tmpDir, 'note.txt');
    writeFileSync(filePath, 'hello world\n', 'utf-8');

    const result = await new EditFileTool().call({
      file_path: filePath,
      old_string: 'hello world',
      new_string: 'hello harness',
    }, makeContext());

    expect(result.success).toBe(true);
    expect(result.data?.replacements).toBe(1);
    expect(readFileSync(filePath, 'utf-8')).toBe('hello harness\n');
  });

  it('runs workspace-local shell commands and persists todos', async () => {
    const bash = await new BashTool().call({ command: 'printf ready', timeoutMs: 5000 }, makeContext());
    const todo = await new TodoWriteTool().call({
      todos: [{ content: 'Verify tools', status: 'completed', priority: 'high' }],
    }, makeContext());

    expect(bash.success).toBe(true);
    expect(bash.data?.exitCode).toBe(0);
    expect(bash.data?.stdout).toBe('ready');
    expect(todo.success).toBe(true);
    expect(existsSync(join(tmpDir, '.atticus', 'todos.json'))).toBe(true);
    expect(todo.data?.newTodos[0].content).toBe('Verify tools');
  });

  it('isolates todo files by run to survive concurrent workers', async () => {
    const tool = new TodoWriteTool();
    const [first, second] = await Promise.all([
      tool.call({
        todos: [{ content: 'Worker one', status: 'in_progress', priority: 'high' }],
      }, { ...makeContext(), runId: 'run/one' }),
      tool.call({
        todos: [{ content: 'Worker two', status: 'completed', priority: 'medium' }],
      }, { ...makeContext(), runId: 'run/two' }),
    ]);

    expect(first.success).toBe(true);
    expect(second.success).toBe(true);
    expect(existsSync(join(tmpDir, '.atticus', 'todos', 'run_one.json'))).toBe(true);
    expect(existsSync(join(tmpDir, '.atticus', 'todos', 'run_two.json'))).toBe(true);
    expect(readFileSync(join(tmpDir, '.atticus', 'todos', 'run_one.json'), 'utf-8')).toContain('Worker one');
    expect(readFileSync(join(tmpDir, '.atticus', 'todos', 'run_two.json'), 'utf-8')).toContain('Worker two');
  });

  it('edits notebooks by cell index', async () => {
    const notebookPath = join(tmpDir, 'analysis.ipynb');
    writeFileSync(notebookPath, JSON.stringify({
      cells: [
        { cell_type: 'markdown', metadata: {}, source: ['# Old\n'] },
        { cell_type: 'code', metadata: {}, execution_count: null, outputs: [], source: ['x = 1\n'] },
      ],
      metadata: {},
      nbformat: 4,
      nbformat_minor: 5,
    }, null, 2), 'utf-8');

    const result = await new NotebookEditTool().call({
      file_path: notebookPath,
      cell_index: 1,
      new_source: 'x = 2\n',
      cell_type: 'code',
    }, makeContext());

    const parsed = JSON.parse(readFileSync(notebookPath, 'utf-8')) as { cells: Array<{ source: string[] }> };
    expect(result.success).toBe(true);
    expect(parsed.cells[1].source).toEqual(['x = 2\n']);
  });

  it('classifies search, shell, and write tools for policy enforcement', () => {
    expect(classifyToolCategory('glob')).toBe('read_only');
    expect(classifyToolCategory('grep')).toBe('read_only');
    expect(classifyToolCategory('tool_search')).toBe('read_only');
    expect(classifyToolCategory('sleep')).toBe('read_only');
    expect(classifyToolCategory('bash')).toBe('external_action');
    expect(classifyToolCategory('edit_file')).toBe('matter_write');
    expect(classifyToolCategory('notebook_edit')).toBe('matter_write');
    expect(evaluateAutonomyPolicy(DEFAULTS.autonomy, 'glob')).toBe('allow');
    expect(evaluateAutonomyPolicy(DEFAULTS.autonomy, 'bash')).toBe('ask');
  });
});

function makeContext(): ToolUseContext {
  return {
    getEvidencePath: (id: string) => id,
    getExtractionPath: (id: string) => id,
    getConfig: () => ({ autonomy: DEFAULTS.autonomy }),
    log: () => {},
  };
}
