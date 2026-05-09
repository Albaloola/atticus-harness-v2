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
    if (!isAllowedReadOnlySql(args.sql)) {
      return { success: false, error: 'Only read-only SELECT queries and safe metadata PRAGMAs are allowed' };
    }

    if (!context.matterName) {
      return { success: false, error: 'No matter context available' };
    }

    const db = getDb(context.matterName);

    try {
      const rows = db.prepare(args.sql).all(...(args.params || []));
      const output = JSON.stringify(rows, null, 2);
      return { success: true, data: rows as unknown[], output: output.length > 5000 ? output.substring(0, 5000) + '\n... [truncated]' : output };
    } catch (err: unknown) {
      const schemaHint = buildSchemaHint(db);
      return { success: false, error: `SQL error: ${(err as Error).message}${schemaHint ? `\n${schemaHint}` : ''}` };
    }
  }

  isEnabled(): boolean { return true; }
}

function isAllowedReadOnlySql(sql: string): boolean {
  const statements = sql.split(';').map((part) => part.trim()).filter(Boolean);
  if (statements.length !== 1) return false;

  const statement = statements[0];
  const upper = statement.toUpperCase();
  if (upper.startsWith('SELECT')) return true;

  if (!upper.startsWith('PRAGMA') || upper.includes('=')) return false;
  return /^PRAGMA\s+(TABLE_INFO|TABLE_XINFO|INDEX_LIST|INDEX_INFO|FOREIGN_KEY_LIST|DATABASE_LIST|SCHEMA_VERSION|USER_VERSION)\b/.test(upper);
}

function buildSchemaHint(db: ReturnType<typeof getDb>): string {
  try {
    const tables = db.prepare(`
      SELECT name
      FROM sqlite_master
      WHERE type IN ('table', 'view')
        AND name NOT LIKE 'sqlite_%'
      ORDER BY name
    `).all() as Array<{ name: string }>;

    const visibleTables = tables
      .map((row) => row.name)
      .filter(isSafeIdentifier)
      .filter((name) => !isNoisyVirtualTablePart(name))
      .slice(0, 12);

    if (visibleTables.length === 0) return '';

    const tableLines = visibleTables.map((tableName) => {
      const columns = db.prepare(`PRAGMA table_info(${quoteIdentifier(tableName)})`).all() as Array<{ name: string; type: string }>;
      const columnSummary = columns
        .slice(0, 12)
        .map((column) => column.type ? `${column.name} ${column.type}` : column.name)
        .join(', ');
      const suffix = columns.length > 12 ? ', ...' : '';
      return `- ${tableName}(${columnSummary}${suffix})`;
    });

    return `Available schema:\n${tableLines.join('\n')}`;
  } catch {
    return '';
  }
}

function isSafeIdentifier(value: string): boolean {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(value);
}

function quoteIdentifier(value: string): string {
  return `"${value.replaceAll('"', '""')}"`;
}

function isNoisyVirtualTablePart(name: string): boolean {
  return /_(data|idx|docsize|config)$/.test(name);
}
