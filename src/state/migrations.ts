import Database = require('better-sqlite3');

export interface StateMigration {
  version: number;
  description: string;
  up(db: Database.Database): void;
}

function columnExists(db: Database.Database, table: string, column: string): boolean {
  const rows = db.prepare(`PRAGMA table_info(${table})`).all() as Array<{ name: string }>;
  return rows.some((row) => row.name === column);
}

function addColumnIfMissing(db: Database.Database, table: string, column: string, ddl: string): void {
  if (!columnExists(db, table, column)) {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${ddl}`);
  }
}

export const STATE_MIGRATIONS: StateMigration[] = [
  {
    version: 1,
    description: 'baseline matter state ledger',
    up(_db) {
      // Baseline tables are created in initSchema before migrations are applied.
    },
  },
  {
    version: 2,
    description: 'hierarchical runs, task DAG metadata, and source/citation metadata',
    up(db) {
      addColumnIfMissing(db, 'events', 'run_id', 'run_id TEXT');
      addColumnIfMissing(db, 'events', 'task_id', 'task_id TEXT');

      addColumnIfMissing(db, 'tasks', 'parent_id', 'parent_id TEXT');
      addColumnIfMissing(db, 'tasks', 'run_id', 'run_id TEXT');
      addColumnIfMissing(db, 'tasks', 'kind', "kind TEXT NOT NULL DEFAULT ''");
      addColumnIfMissing(db, 'tasks', 'priority', "priority TEXT NOT NULL DEFAULT 'medium'");
      addColumnIfMissing(db, 'tasks', 'depth', 'depth INTEGER NOT NULL DEFAULT 0');
      addColumnIfMissing(db, 'tasks', 'assigned_agent', 'assigned_agent TEXT');

      addColumnIfMissing(db, 'agent_runs', 'parent_run_id', 'parent_run_id TEXT');
      addColumnIfMissing(db, 'agent_runs', 'agent_type', "agent_type TEXT NOT NULL DEFAULT 'worker'");
      addColumnIfMissing(db, 'agent_runs', 'role', "role TEXT NOT NULL DEFAULT 'worker'");
      addColumnIfMissing(db, 'agent_runs', 'cost_usd', 'cost_usd REAL NOT NULL DEFAULT 0.0');

      addColumnIfMissing(db, 'citations', 'artifact_id', 'artifact_id TEXT');
      addColumnIfMissing(db, 'citations', 'source_id', 'source_id TEXT');
      addColumnIfMissing(db, 'citations', 'quote', 'quote TEXT');
      addColumnIfMissing(db, 'citations', 'span_json', 'span_json TEXT');
      addColumnIfMissing(db, 'citations', 'metadata_json', "metadata_json TEXT NOT NULL DEFAULT '{}'");

      addColumnIfMissing(db, 'scheduler_jobs', 'cron', "cron TEXT NOT NULL DEFAULT '* * * * *'");
      addColumnIfMissing(db, 'scheduler_jobs', 'prompt', "prompt TEXT NOT NULL DEFAULT ''");
      addColumnIfMissing(db, 'scheduler_jobs', 'recurring', 'recurring INTEGER NOT NULL DEFAULT 0');
      addColumnIfMissing(db, 'scheduler_jobs', 'durable', 'durable INTEGER NOT NULL DEFAULT 0');
      addColumnIfMissing(db, 'scheduler_jobs', 'enabled', 'enabled INTEGER NOT NULL DEFAULT 1');
    },
  },
  {
    version: 3,
    description: 'reducer packets and fenced task leases',
    up(db) {
      db.exec(`
        CREATE TABLE IF NOT EXISTS task_leases (
          id TEXT PRIMARY KEY,
          task_id TEXT NOT NULL,
          matter_name TEXT NOT NULL,
          owner TEXT NOT NULL,
          role TEXT NOT NULL DEFAULT 'worker',
          status TEXT NOT NULL DEFAULT 'active',
          fencing_token INTEGER NOT NULL,
          acquired_at TEXT NOT NULL,
          renewed_at TEXT,
          expires_at TEXT NOT NULL,
          completed_at TEXT,
          result_status TEXT,
          reason TEXT,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE UNIQUE INDEX IF NOT EXISTS idx_task_leases_one_active
          ON task_leases(task_id, matter_name)
          WHERE status = 'active';
        CREATE INDEX IF NOT EXISTS idx_task_leases_matter ON task_leases(matter_name);
        CREATE INDEX IF NOT EXISTS idx_task_leases_status ON task_leases(status);

        CREATE TABLE IF NOT EXISTS reducer_packets (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          candidate_id TEXT NOT NULL,
          decision TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'decided',
          created_at TEXT NOT NULL,
          decided_at TEXT NOT NULL,
          lease_id TEXT,
          data_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE INDEX IF NOT EXISTS idx_reducer_packets_matter ON reducer_packets(matter_name);
        CREATE INDEX IF NOT EXISTS idx_reducer_packets_candidate ON reducer_packets(candidate_id);
      `);
    },
  },
];

export function applyStateMigrations(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS schema_version (
      version INTEGER PRIMARY KEY,
      applied_at TEXT NOT NULL
    );
  `);

  const appliedRows = db.prepare('SELECT version FROM schema_version').all() as Array<{ version: number }>;
  const applied = new Set(appliedRows.map((row) => row.version));

  for (const migration of STATE_MIGRATIONS) {
    if (applied.has(migration.version)) continue;
    const tx = db.transaction(() => {
      migration.up(db);
      db.prepare('INSERT INTO schema_version (version, applied_at) VALUES (?, ?)').run(
        migration.version,
        new Date().toISOString(),
      );
    });
    tx();
  }
}

export function latestStateSchemaVersion(): number {
  return Math.max(...STATE_MIGRATIONS.map((migration) => migration.version));
}
