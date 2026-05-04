import Database = require('better-sqlite3');

export function initSchema(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id TEXT PRIMARY KEY,
      timestamp TEXT NOT NULL,
      type TEXT NOT NULL,
      matter_name TEXT NOT NULL,
      data_json TEXT NOT NULL DEFAULT '{}',
      source TEXT NOT NULL DEFAULT 'operator'
    );

    CREATE INDEX IF NOT EXISTS idx_events_matter ON events(matter_name);
    CREATE INDEX IF NOT EXISTS idx_events_type ON events(type);
    CREATE INDEX IF NOT EXISTS idx_events_timestamp ON events(timestamp);

    CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY,
      matter_name TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      dependencies_json TEXT NOT NULL DEFAULT '[]',
      title TEXT NOT NULL,
      created TEXT NOT NULL,
      updated TEXT NOT NULL,
      data_json TEXT NOT NULL DEFAULT '{}'
    );

    CREATE INDEX IF NOT EXISTS idx_tasks_matter ON tasks(matter_name);
    CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);

    CREATE TABLE IF NOT EXISTS agent_runs (
      id TEXT PRIMARY KEY,
      matter_name TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'running',
      model TEXT NOT NULL,
      skill TEXT,
      prompt TEXT,
      started TEXT NOT NULL,
      ended TEXT,
      turns INTEGER NOT NULL DEFAULT 0,
      summary TEXT,
      error TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_agent_runs_matter ON agent_runs(matter_name);
    CREATE INDEX IF NOT EXISTS idx_agent_runs_status ON agent_runs(status);

    CREATE TABLE IF NOT EXISTS sources (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      matter_name TEXT NOT NULL,
      evidence_id TEXT NOT NULL,
      summary TEXT NOT NULL,
      added_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_sources_matter ON sources(matter_name);

    CREATE TABLE IF NOT EXISTS citations (
      id TEXT PRIMARY KEY,
      matter_name TEXT NOT NULL,
      evidence_id TEXT NOT NULL,
      candidate_id TEXT NOT NULL,
      supported INTEGER NOT NULL DEFAULT 0,
      score REAL NOT NULL DEFAULT 0.0,
      checked_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_citations_matter ON citations(matter_name);
    CREATE INDEX IF NOT EXISTS idx_citations_candidate ON citations(candidate_id);

    CREATE TABLE IF NOT EXISTS scheduler_jobs (
      id TEXT PRIMARY KEY,
      matter_name TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      scheduled_at TEXT NOT NULL,
      started_at TEXT,
      completed_at TEXT,
      data_json TEXT NOT NULL DEFAULT '{}'
    );

    CREATE INDEX IF NOT EXISTS idx_scheduler_jobs_matter ON scheduler_jobs(matter_name);

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
}
