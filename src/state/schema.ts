import Database = require('better-sqlite3');

const CURRENT_SCHEMA_VERSION = 3;

type MigrationFn = (db: Database.Database) => void;

function hasColumn(db: Database.Database, table: string, column: string): boolean {
  const rows = db.prepare(`PRAGMA table_info(${table})`).all() as Array<{ name: string }>;
  return rows.some((row) => row.name === column);
}

function addColumnIfMissing(db: Database.Database, table: string, column: string, ddl: string): void {
  if (!hasColumn(db, table, column)) {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${ddl}`);
  }
}

function ensureMigrationLedger(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS schema_version (
      version INTEGER PRIMARY KEY,
      applied_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS schema_migrations (
      version_from INTEGER NOT NULL,
      version_to INTEGER NOT NULL,
      description TEXT NOT NULL,
      applied_at TEXT NOT NULL,
      PRIMARY KEY (version_from, version_to)
    );
  `);
}

function recordMigration(
  db: Database.Database,
  from: number,
  to: number,
  description: string,
): void {
  const now = new Date().toISOString();
  db.prepare(
    `INSERT OR IGNORE INTO schema_migrations (version_from, version_to, description, applied_at)
     VALUES (?, ?, ?, ?)`
  ).run(from, to, description, now);
  db.prepare('INSERT OR IGNORE INTO schema_version (version, applied_at) VALUES (?, ?)').run(to, now);
}

function currentSchemaVersion(db: Database.Database): number {
  const row = db.prepare('SELECT MAX(version) as v FROM schema_version').get() as
    | { v: number | null }
    | undefined;
  return row?.v ?? 0;
}

function applyMigration(
  db: Database.Database,
  from: number,
  to: number,
  description: string,
  apply: MigrationFn,
): void {
  const version = currentSchemaVersion(db);
  if (version >= to) return;
  if (version !== from) {
    throw new Error(`Cannot apply migration ${from}->${to}; current schema version is ${version}`);
  }
  const tx = db.transaction(() => {
    apply(db);
    recordMigration(db, from, to, description);
  });
  tx();
}

export function initSchema(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id TEXT PRIMARY KEY,
      timestamp TEXT NOT NULL,
      type TEXT NOT NULL,
      matter_name TEXT NOT NULL,
      run_id TEXT,
      task_id TEXT,
      data_json TEXT NOT NULL DEFAULT '{}',
      source TEXT NOT NULL DEFAULT 'operator'
    );

    CREATE INDEX IF NOT EXISTS idx_events_matter ON events(matter_name);
    CREATE INDEX IF NOT EXISTS idx_events_type ON events(type);
    CREATE INDEX IF NOT EXISTS idx_events_timestamp ON events(timestamp);
    CREATE INDEX IF NOT EXISTS idx_events_run ON events(run_id);

    CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY,
      matter_name TEXT NOT NULL,
      parent_id TEXT,
      run_id TEXT,
      kind TEXT NOT NULL,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      priority TEXT NOT NULL DEFAULT 'medium',
      depth INTEGER NOT NULL DEFAULT 0,
      assigned_agent TEXT,
      dependencies_json TEXT NOT NULL DEFAULT '[]',
      created TEXT NOT NULL,
      updated TEXT NOT NULL,
      data_json TEXT NOT NULL DEFAULT '{}',
      lease_id TEXT,
      lease_owner TEXT,
      lease_role TEXT,
      lease_fencing_token INTEGER NOT NULL DEFAULT 0,
      lease_expires_at TEXT,
      lease_acquired_at TEXT,
      lease_heartbeat_at TEXT,
      blocked_reason TEXT,
      attempt_count INTEGER NOT NULL DEFAULT 0
    );

    CREATE INDEX IF NOT EXISTS idx_tasks_matter ON tasks(matter_name);
    CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
    CREATE INDEX IF NOT EXISTS idx_tasks_parent ON tasks(parent_id);
    CREATE INDEX IF NOT EXISTS idx_tasks_lease ON tasks(lease_id);
    CREATE INDEX IF NOT EXISTS idx_tasks_lease_expiry ON tasks(lease_expires_at);

    CREATE TABLE IF NOT EXISTS agent_runs (
      id TEXT PRIMARY KEY,
      matter_name TEXT NOT NULL,
      parent_run_id TEXT,
      agent_type TEXT NOT NULL DEFAULT 'worker',
      role TEXT NOT NULL DEFAULT 'worker',
      model TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'running',
      skill TEXT,
      prompt TEXT,
      started TEXT NOT NULL,
      ended TEXT,
      turns INTEGER NOT NULL DEFAULT 0,
      cost_usd REAL NOT NULL DEFAULT 0.0,
      summary TEXT,
      error TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_agent_runs_matter ON agent_runs(matter_name);
    CREATE INDEX IF NOT EXISTS idx_agent_runs_status ON agent_runs(status);
    CREATE INDEX IF NOT EXISTS idx_agent_runs_parent ON agent_runs(parent_run_id);

    CREATE TABLE IF NOT EXISTS sources (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      matter_name TEXT NOT NULL,
      url TEXT,
      title TEXT,
      fetched_at TEXT NOT NULL,
      sha256 TEXT,
      source_type TEXT NOT NULL DEFAULT 'other',
      jurisdiction TEXT,
      snapshot_path TEXT,
      text_path TEXT,
      metadata_json TEXT NOT NULL DEFAULT '{}'
    );

    CREATE INDEX IF NOT EXISTS idx_sources_matter ON sources(matter_name);

    CREATE TABLE IF NOT EXISTS citations (
      id TEXT PRIMARY KEY,
      matter_name TEXT NOT NULL,
      artifact_id TEXT,
      source_id TEXT,
      evidence_id TEXT NOT NULL,
      candidate_id TEXT NOT NULL,
      quote TEXT,
      span_json TEXT,
      verified INTEGER NOT NULL DEFAULT 0,
      score REAL NOT NULL DEFAULT 0.0,
      checked_at TEXT NOT NULL,
      metadata_json TEXT NOT NULL DEFAULT '{}'
    );

    CREATE INDEX IF NOT EXISTS idx_citations_matter ON citations(matter_name);
    CREATE INDEX IF NOT EXISTS idx_citations_candidate ON citations(candidate_id);

    CREATE TABLE IF NOT EXISTS scheduler_jobs (
      id TEXT PRIMARY KEY,
      matter_name TEXT NOT NULL,
      cron TEXT NOT NULL,
      prompt TEXT NOT NULL,
      recurring INTEGER NOT NULL DEFAULT 0,
      durable INTEGER NOT NULL DEFAULT 0,
      enabled INTEGER NOT NULL DEFAULT 1,
      status TEXT NOT NULL DEFAULT 'pending',
      created_at TEXT NOT NULL,
      next_run_at TEXT,
      last_run_at TEXT,
      metadata_json TEXT NOT NULL DEFAULT '{}',
      lease_id TEXT,
      lease_owner TEXT,
      lease_fencing_token INTEGER NOT NULL DEFAULT 0,
      lease_expires_at TEXT,
      lease_acquired_at TEXT,
      lease_heartbeat_at TEXT,
      blocked_reason TEXT,
      attempt_count INTEGER NOT NULL DEFAULT 0
    );

    CREATE INDEX IF NOT EXISTS idx_scheduler_jobs_matter ON scheduler_jobs(matter_name);
    CREATE INDEX IF NOT EXISTS idx_scheduler_jobs_enabled ON scheduler_jobs(enabled);
    CREATE INDEX IF NOT EXISTS idx_scheduler_jobs_lease_expiry ON scheduler_jobs(lease_expires_at);

    CREATE TABLE IF NOT EXISTS runtime_kv (
      matter_name TEXT NOT NULL,
      key TEXT NOT NULL,
      value_json TEXT NOT NULL DEFAULT 'null',
      updated_at TEXT NOT NULL,
      PRIMARY KEY (matter_name, key)
    );
  `);

  ensureMigrationLedger(db);

  if (currentSchemaVersion(db) === 0) {
    const now = new Date().toISOString();
    db.prepare('INSERT OR IGNORE INTO schema_version (version, applied_at) VALUES (1, ?)').run(now);
    recordMigration(db, 0, 1, 'initial matter state schema');
  }

  applyMigration(db, 1, 2, 'backfill V2 hierarchy, run, citation, and scheduler columns', (txDb) => {
    addColumnIfMissing(txDb, 'events', 'run_id', 'TEXT');
    addColumnIfMissing(txDb, 'events', 'task_id', 'TEXT');
    addColumnIfMissing(txDb, 'tasks', 'parent_id', 'TEXT');
    addColumnIfMissing(txDb, 'tasks', 'run_id', 'TEXT');
    addColumnIfMissing(txDb, 'tasks', 'kind', "TEXT NOT NULL DEFAULT ''");
    addColumnIfMissing(txDb, 'tasks', 'priority', "TEXT NOT NULL DEFAULT 'medium'");
    addColumnIfMissing(txDb, 'tasks', 'depth', 'INTEGER NOT NULL DEFAULT 0');
    addColumnIfMissing(txDb, 'tasks', 'assigned_agent', 'TEXT');
    addColumnIfMissing(txDb, 'agent_runs', 'parent_run_id', 'TEXT');
    addColumnIfMissing(txDb, 'agent_runs', 'agent_type', "TEXT NOT NULL DEFAULT 'worker'");
    addColumnIfMissing(txDb, 'agent_runs', 'role', "TEXT NOT NULL DEFAULT 'worker'");
    addColumnIfMissing(txDb, 'agent_runs', 'cost_usd', 'REAL NOT NULL DEFAULT 0.0');
    addColumnIfMissing(txDb, 'citations', 'artifact_id', 'TEXT');
    addColumnIfMissing(txDb, 'citations', 'source_id', 'TEXT');
    addColumnIfMissing(txDb, 'citations', 'quote', 'TEXT');
    addColumnIfMissing(txDb, 'citations', 'span_json', 'TEXT');
    addColumnIfMissing(txDb, 'citations', 'metadata_json', "TEXT NOT NULL DEFAULT '{}'");
    addColumnIfMissing(txDb, 'scheduler_jobs', 'cron', "TEXT NOT NULL DEFAULT '* * * * *'");
    addColumnIfMissing(txDb, 'scheduler_jobs', 'prompt', "TEXT NOT NULL DEFAULT ''");
    addColumnIfMissing(txDb, 'scheduler_jobs', 'recurring', 'INTEGER NOT NULL DEFAULT 0');
    addColumnIfMissing(txDb, 'scheduler_jobs', 'durable', 'INTEGER NOT NULL DEFAULT 0');
    addColumnIfMissing(txDb, 'scheduler_jobs', 'enabled', 'INTEGER NOT NULL DEFAULT 1');
  });

  applyMigration(db, 2, CURRENT_SCHEMA_VERSION, 'governance: leases, reducer packets, migration ledger', (txDb) => {
    const taskColumns: Array<[string, string]> = [
      ['lease_id', 'TEXT'],
      ['lease_owner', 'TEXT'],
      ['lease_role', 'TEXT'],
      ['lease_fencing_token', 'INTEGER NOT NULL DEFAULT 0'],
      ['lease_expires_at', 'TEXT'],
      ['lease_acquired_at', 'TEXT'],
      ['lease_heartbeat_at', 'TEXT'],
      ['blocked_reason', 'TEXT'],
      ['attempt_count', 'INTEGER NOT NULL DEFAULT 0'],
    ];
    for (const [column, ddl] of taskColumns) addColumnIfMissing(txDb, 'tasks', column, ddl);

    const jobColumns: Array<[string, string]> = [
      ['lease_id', 'TEXT'],
      ['lease_owner', 'TEXT'],
      ['lease_fencing_token', 'INTEGER NOT NULL DEFAULT 0'],
      ['lease_expires_at', 'TEXT'],
      ['lease_acquired_at', 'TEXT'],
      ['lease_heartbeat_at', 'TEXT'],
      ['blocked_reason', 'TEXT'],
      ['attempt_count', 'INTEGER NOT NULL DEFAULT 0'],
    ];
    for (const [column, ddl] of jobColumns) addColumnIfMissing(txDb, 'scheduler_jobs', column, ddl);

    txDb.exec(`
      CREATE TABLE IF NOT EXISTS reducer_packets (
        id TEXT PRIMARY KEY,
        matter_name TEXT NOT NULL,
        candidate_id TEXT NOT NULL,
        artifact_id TEXT,
        decision TEXT NOT NULL,
        reducer_name TEXT NOT NULL,
        rationale TEXT NOT NULL DEFAULT '',
        created_at TEXT NOT NULL,
        metadata_json TEXT NOT NULL DEFAULT '{}'
      );
      CREATE INDEX IF NOT EXISTS idx_reducer_packets_matter ON reducer_packets(matter_name);
      CREATE INDEX IF NOT EXISTS idx_reducer_packets_candidate ON reducer_packets(candidate_id);
      CREATE INDEX IF NOT EXISTS idx_reducer_packets_decision ON reducer_packets(decision);
    `);
  });
}
