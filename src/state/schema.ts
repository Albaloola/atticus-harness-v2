import Database = require('better-sqlite3');

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
      data_json TEXT NOT NULL DEFAULT '{}'
    );

    CREATE INDEX IF NOT EXISTS idx_tasks_matter ON tasks(matter_name);
    CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
    CREATE INDEX IF NOT EXISTS idx_tasks_parent ON tasks(parent_id);

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
      metadata_json TEXT NOT NULL DEFAULT '{}'
    );

    CREATE INDEX IF NOT EXISTS idx_scheduler_jobs_matter ON scheduler_jobs(matter_name);
    CREATE INDEX IF NOT EXISTS idx_scheduler_jobs_enabled ON scheduler_jobs(enabled);

    CREATE TABLE IF NOT EXISTS runtime_kv (
      matter_name TEXT NOT NULL,
      key TEXT NOT NULL,
      value_json TEXT NOT NULL DEFAULT 'null',
      updated_at TEXT NOT NULL,
      PRIMARY KEY (matter_name, key)
    );

    CREATE TABLE IF NOT EXISTS schema_version (
      version INTEGER PRIMARY KEY,
      applied_at TEXT NOT NULL
    );
  `);

  const currentVersion = (
    db.prepare('SELECT MAX(version) as v FROM schema_version').get() as
      | { v: number | null }
      | undefined
  );
  const version = currentVersion?.v ?? 0;

  if (version < 1) {
    db.prepare(
      'INSERT INTO schema_version (version, applied_at) VALUES (1, ?)'
    ).run(new Date().toISOString());
  }

  if (version < 2) {
    try {
      db.exec(`
        ALTER TABLE events ADD COLUMN run_id TEXT;
        ALTER TABLE events ADD COLUMN task_id TEXT;
      `);
    } catch { /* columns may already exist */ }
    try {
      db.exec(`
        ALTER TABLE tasks ADD COLUMN parent_id TEXT;
        ALTER TABLE tasks ADD COLUMN run_id TEXT;
        ALTER TABLE tasks ADD COLUMN kind TEXT NOT NULL DEFAULT '';
        ALTER TABLE tasks ADD COLUMN priority TEXT NOT NULL DEFAULT 'medium';
        ALTER TABLE tasks ADD COLUMN depth INTEGER NOT NULL DEFAULT 0;
        ALTER TABLE tasks ADD COLUMN assigned_agent TEXT;
      `);
    } catch { /* columns may already exist */ }
    try {
      db.exec(`
        ALTER TABLE agent_runs ADD COLUMN parent_run_id TEXT;
        ALTER TABLE agent_runs ADD COLUMN agent_type TEXT NOT NULL DEFAULT 'worker';
        ALTER TABLE agent_runs ADD COLUMN role TEXT NOT NULL DEFAULT 'worker';
        ALTER TABLE agent_runs ADD COLUMN cost_usd REAL NOT NULL DEFAULT 0.0;
      `);
    } catch { /* columns may already exist */ }
    try {
      db.exec(`
        ALTER TABLE citations ADD COLUMN artifact_id TEXT;
        ALTER TABLE citations ADD COLUMN source_id TEXT;
        ALTER TABLE citations ADD COLUMN quote TEXT;
        ALTER TABLE citations ADD COLUMN span_json TEXT;
        ALTER TABLE citations ADD COLUMN metadata_json TEXT NOT NULL DEFAULT '{}';
      `);
    } catch { /* columns may already exist */ }
    try {
      db.exec(`
        ALTER TABLE scheduler_jobs ADD COLUMN cron TEXT NOT NULL DEFAULT '* * * * *';
        ALTER TABLE scheduler_jobs ADD COLUMN prompt TEXT NOT NULL DEFAULT '';
        ALTER TABLE scheduler_jobs ADD COLUMN recurring INTEGER NOT NULL DEFAULT 0;
        ALTER TABLE scheduler_jobs ADD COLUMN durable INTEGER NOT NULL DEFAULT 0;
        ALTER TABLE scheduler_jobs ADD COLUMN enabled INTEGER NOT NULL DEFAULT 1;
      `);
    } catch { /* columns may already exist */ }

    db.prepare(
      'INSERT INTO schema_version (version, applied_at) VALUES (2, ?)'
    ).run(new Date().toISOString());
  }
}
