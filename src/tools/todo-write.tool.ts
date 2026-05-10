import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { resolveWorkspacePath } from './path-safety.js';

export type TodoStatus = 'pending' | 'in_progress' | 'completed';

export interface TodoItem {
  id?: string;
  content: string;
  status: TodoStatus;
  priority?: 'low' | 'medium' | 'high';
}

export interface TodoWriteArgs {
  todos: TodoItem[];
}

export interface TodoWriteResult {
  oldTodos: TodoItem[];
  newTodos: TodoItem[];
  path: string;
}

interface TodoStore {
  updatedAt: string;
  todos: TodoItem[];
}

export class TodoWriteTool implements Tool<TodoWriteArgs, TodoWriteResult> {
  readonly name = 'todo_write';
  readonly description = 'Persist the session task checklist. Use it for multi-step work so pending, in-progress, and completed tasks stay visible across turns.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      todos: {
        type: 'array',
        description: 'Complete replacement todo list for the current session',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Stable optional id for the todo' },
            content: { type: 'string', description: 'Task description' },
            status: { type: 'string', enum: ['pending', 'in_progress', 'completed'] },
            priority: { type: 'string', enum: ['low', 'medium', 'high'] },
          },
          required: ['content', 'status'],
        },
      },
    },
    required: ['todos'],
  };

  isEnabled(): boolean { return true; }

  async call(args: TodoWriteArgs, context: ToolUseContext): Promise<ToolResult<TodoWriteResult>> {
    try {
      if (!Array.isArray(args.todos)) {
        return { success: false, error: 'todo_write requires a todos array' };
      }
      const newTodos = args.todos.map((todo, index) => normalizeTodo(todo, index));
      const path = resolveWorkspacePath(todoPathForContext(context));
      const oldTodos = await readTodos(path);
      const store: TodoStore = {
        updatedAt: new Date().toISOString(),
        todos: newTodos,
      };
      await mkdir(dirname(path), { recursive: true });
      await atomicWriteFile(path, `${JSON.stringify(store, null, 2)}\n`);

      const data: TodoWriteResult = { oldTodos, newTodos, path };
      return {
        success: true,
        data,
        output: `Todos updated: ${oldTodos.length} previous, ${newTodos.length} current. path=${path}`,
      };
    } catch (err: unknown) {
      return { success: false, error: `Failed to write todos: ${(err as Error).message}` };
    }
  }
}

async function readTodos(path: string): Promise<TodoItem[]> {
  try {
    const raw = await readFile(path, 'utf-8');
    const parsed = JSON.parse(raw) as Partial<TodoStore>;
    return Array.isArray(parsed.todos) ? parsed.todos.filter(isTodoItem) : [];
  } catch (err: unknown) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code === 'ENOENT') return [];
    if (err instanceof SyntaxError) return [];
    throw err;
  }
}

async function atomicWriteFile(path: string, contents: string): Promise<void> {
  const tempPath = `${path}.${process.pid}.${Date.now()}.${Math.random().toString(36).slice(2)}.tmp`;
  await writeFile(tempPath, contents, 'utf-8');
  await rename(tempPath, path);
}

function todoPathForContext(context: ToolUseContext): string {
  if (context.runId) return `.atticus/todos/${safePathSegment(context.runId)}.json`;
  if (context.taskId) return `.atticus/todos/${safePathSegment(context.taskId)}.json`;
  return '.atticus/todos.json';
}

function safePathSegment(value: string): string {
  return value.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120) || 'session';
}

function normalizeTodo(todo: TodoItem, index: number): TodoItem {
  if (!todo || typeof todo.content !== 'string' || todo.content.trim() === '') {
    throw new Error(`Todo at index ${index} needs non-empty content`);
  }
  if (!['pending', 'in_progress', 'completed'].includes(todo.status)) {
    throw new Error(`Todo at index ${index} has unsupported status: ${String(todo.status)}`);
  }
  if (todo.priority !== undefined && !['low', 'medium', 'high'].includes(todo.priority)) {
    throw new Error(`Todo at index ${index} has unsupported priority: ${String(todo.priority)}`);
  }
  return {
    id: todo.id,
    content: todo.content,
    status: todo.status,
    priority: todo.priority,
  };
}

function isTodoItem(value: unknown): value is TodoItem {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return typeof record.content === 'string'
    && ['pending', 'in_progress', 'completed'].includes(String(record.status));
}
