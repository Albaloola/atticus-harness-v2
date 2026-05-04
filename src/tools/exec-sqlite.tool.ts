import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { getDb } from '../storage/sqlite/index.js';

export class ExecSqliteTool implements Tool<{ sql: string; params?: unknown[] }, unknown[]> {
  readonly name = 'exec_sqlite';
  readonly description = 'Execute a SQL query on the evidence database. Use SELECT only (read-only). Returns rows as arrays.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      sql: { type: 'string', description: 'SQL query (SELECT only)' },
      params: { type: 'array', description: 'Query parameters', items: {} },
    },
    required: ['sql'],
  };

  async call(args: { sql: string; params?: unknown[] }, context: ToolUseContext): Promise<ToolResult<unknown[]>> {
    const sql = args.sql.trim().toUpperCase();
    if (!sql.startsWith('SELECT') && !sql.startsWith('PRAGMA')) {
      return { success: false, error: 'Only SELECT and PRAGMA queries are allowed' };
    }

    if (!context.matterName) {
      return { success: false, error: 'No matter context available' };
    }

    try {
      const db = getDb(context.matterName);
      const rows = db.prepare(args.sql).all(...(args.params || []));
      const output = JSON.stringify(rows, null, 2);
      return { success: true, data: rows as unknown[], output: output.length > 5000 ? output.substring(0, 5000) + '\n... [truncated]' : output };
    } catch (err: unknown) {
      return { success: false, error: `SQL error: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}
