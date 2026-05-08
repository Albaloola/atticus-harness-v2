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
  {
    version: 4,
    description: 'durable lease ledger and reducer packet compatibility columns',
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
          artifact_id TEXT,
          decision TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'decided',
          reducer_name TEXT NOT NULL DEFAULT 'canonical-reducer',
          rationale TEXT NOT NULL DEFAULT '',
          created_at TEXT NOT NULL,
          decided_at TEXT NOT NULL DEFAULT '',
          lease_id TEXT,
          data_json TEXT NOT NULL DEFAULT '{}',
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );
      `);
      addColumnIfMissing(db, 'reducer_packets', 'artifact_id', 'artifact_id TEXT');
      addColumnIfMissing(db, 'reducer_packets', 'status', "status TEXT NOT NULL DEFAULT 'decided'");
      addColumnIfMissing(db, 'reducer_packets', 'reducer_name', "reducer_name TEXT NOT NULL DEFAULT 'canonical-reducer'");
      addColumnIfMissing(db, 'reducer_packets', 'rationale', "rationale TEXT NOT NULL DEFAULT ''");
      addColumnIfMissing(db, 'reducer_packets', 'decided_at', "decided_at TEXT NOT NULL DEFAULT ''");
      addColumnIfMissing(db, 'reducer_packets', 'lease_id', 'lease_id TEXT');
      addColumnIfMissing(db, 'reducer_packets', 'data_json', "data_json TEXT NOT NULL DEFAULT '{}'");
      addColumnIfMissing(db, 'reducer_packets', 'metadata_json', "metadata_json TEXT NOT NULL DEFAULT '{}'");
      db.exec(`
        CREATE INDEX IF NOT EXISTS idx_reducer_packets_matter ON reducer_packets(matter_name);
        CREATE INDEX IF NOT EXISTS idx_reducer_packets_candidate ON reducer_packets(candidate_id);
        CREATE INDEX IF NOT EXISTS idx_reducer_packets_decision ON reducer_packets(decision);
        UPDATE reducer_packets
        SET data_json = metadata_json
        WHERE (data_json IS NULL OR data_json = '{}')
          AND metadata_json IS NOT NULL
          AND metadata_json <> '{}';
        INSERT OR IGNORE INTO task_leases (
          id, task_id, matter_name, owner, role, status, fencing_token,
          acquired_at, renewed_at, expires_at, metadata_json
        )
        SELECT
          lease_id,
          id,
          matter_name,
          COALESCE(lease_owner, 'legacy'),
          COALESCE(lease_role, 'worker'),
          'active',
          COALESCE(lease_fencing_token, 0),
          COALESCE(lease_acquired_at, updated, created),
          COALESCE(lease_heartbeat_at, lease_acquired_at, updated, created),
          COALESCE(lease_expires_at, datetime('now')),
          '{}'
        FROM tasks
        WHERE lease_id IS NOT NULL;
      `);
    },
  },
  {
    version: 5,
    description: 'agent run heartbeat and process liveness columns',
    up(db) {
      addColumnIfMissing(db, 'agent_runs', 'heartbeat_at', 'heartbeat_at TEXT');
      addColumnIfMissing(db, 'agent_runs', 'pid', 'pid INTEGER');
      db.exec(`
        UPDATE agent_runs
        SET heartbeat_at = COALESCE(heartbeat_at, started)
        WHERE heartbeat_at IS NULL;
      `);
    },
  },
  {
    version: 6,
    description: 'court-ready legal workflow tables',
    up(db) {
      db.exec(`
        CREATE TABLE IF NOT EXISTS findings (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          statement TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'proposed',
          criticality TEXT NOT NULL DEFAULT 'ordinary',
          confidence REAL NOT NULL DEFAULT 0,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );
        CREATE INDEX IF NOT EXISTS idx_findings_matter ON findings(matter_name);
        CREATE INDEX IF NOT EXISTS idx_findings_status ON findings(matter_name, status);

        CREATE TABLE IF NOT EXISTS finding_citations (
          id TEXT PRIMARY KEY,
          finding_id TEXT NOT NULL REFERENCES findings(id) ON DELETE CASCADE,
          evidence_id TEXT NOT NULL,
          page_id TEXT NOT NULL,
          chunk_id TEXT NOT NULL,
          quote TEXT NOT NULL,
          quote_hash TEXT NOT NULL,
          source_hash TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'unchecked',
          checked_at TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS quotes (
          id TEXT PRIMARY KEY,
          evidence_id TEXT NOT NULL,
          page_id TEXT NOT NULL,
          chunk_id TEXT NOT NULL,
          text TEXT NOT NULL,
          quote_hash TEXT NOT NULL,
          created_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS contradictions (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          finding_id_a TEXT NOT NULL,
          finding_id_b TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'open',
          severity TEXT NOT NULL DEFAULT 'medium',
          rationale TEXT NOT NULL,
          created_at TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS investigation_threads (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          parent_thread_id TEXT,
          objective TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'queued',
          depth INTEGER NOT NULL DEFAULT 0,
          budget_usd REAL,
          stop_reason TEXT,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS review_tasks (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          target_type TEXT NOT NULL,
          target_id TEXT NOT NULL,
          reviewer_role TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'queued',
          created_at TEXT NOT NULL,
          completed_at TEXT,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS review_findings (
          id TEXT PRIMARY KEY,
          review_task_id TEXT NOT NULL REFERENCES review_tasks(id) ON DELETE CASCADE,
          severity TEXT NOT NULL,
          type TEXT NOT NULL,
          description TEXT NOT NULL,
          target_locator TEXT NOT NULL,
          recommended_action TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS consensus_decisions (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          target_type TEXT NOT NULL,
          target_id TEXT NOT NULL,
          decision TEXT NOT NULL,
          required_quorum INTEGER NOT NULL DEFAULT 1,
          achieved_quorum INTEGER NOT NULL DEFAULT 0,
          adjudicator_role TEXT,
          created_at TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS draft_outlines (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          document_type TEXT NOT NULL,
          version INTEGER NOT NULL DEFAULT 1,
          status TEXT NOT NULL DEFAULT 'draft',
          created_at TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS draft_sections (
          id TEXT PRIMARY KEY,
          outline_id TEXT NOT NULL REFERENCES draft_outlines(id) ON DELETE CASCADE,
          heading TEXT NOT NULL,
          purpose TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'todo',
          ordinal INTEGER NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS draft_paragraphs (
          id TEXT PRIMARY KEY,
          section_id TEXT NOT NULL REFERENCES draft_sections(id) ON DELETE CASCADE,
          ordinal INTEGER NOT NULL,
          text TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'draft',
          trace_status TEXT NOT NULL DEFAULT 'missing',
          finding_ids_json TEXT NOT NULL DEFAULT '[]',
          draft_citation_ids_json TEXT NOT NULL DEFAULT '[]',
          active_revision_id TEXT,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS draft_citations (
          id TEXT PRIMARY KEY,
          paragraph_id TEXT NOT NULL REFERENCES draft_paragraphs(id) ON DELETE CASCADE,
          finding_citation_id TEXT NOT NULL,
          render_form TEXT NOT NULL,
          verification_status TEXT NOT NULL DEFAULT 'unchecked',
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS export_bundles (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          bundle_type TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'draft',
          output_path TEXT,
          manifest_path TEXT,
          created_at TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS export_signoffs (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          export_id TEXT NOT NULL,
          operator_id TEXT NOT NULL,
          status TEXT NOT NULL,
          signed_at TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );
      `);
    },
  },
  {
    version: 7,
    description: 'court-ready graph projection read model tables',
    up(db) {
      db.exec(`
        -- Projection-only read model. Canonical facts remain in evidence,
        -- findings, review, draft, and export tables.
        CREATE TABLE IF NOT EXISTS graph_nodes (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          object_type TEXT NOT NULL,
          object_id TEXT NOT NULL,
          label TEXT NOT NULL,
          canonical INTEGER NOT NULL DEFAULT 0,
          source_table TEXT NOT NULL,
          source_hash TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}',
          UNIQUE(matter_name, object_type, object_id)
        );

        CREATE INDEX IF NOT EXISTS idx_graph_nodes_matter_type
          ON graph_nodes(matter_name, object_type);

        CREATE TABLE IF NOT EXISTS graph_edges (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          from_node_id TEXT NOT NULL,
          to_node_id TEXT NOT NULL,
          edge_type TEXT NOT NULL,
          source_table TEXT NOT NULL,
          source_hash TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}',
          UNIQUE(matter_name, from_node_id, to_node_id, edge_type)
        );

        CREATE INDEX IF NOT EXISTS idx_graph_edges_from
          ON graph_edges(matter_name, from_node_id);
        CREATE INDEX IF NOT EXISTS idx_graph_edges_to
          ON graph_edges(matter_name, to_node_id);

        CREATE TABLE IF NOT EXISTS graph_rebuilds (
          id TEXT PRIMARY KEY,
          matter_name TEXT NOT NULL,
          started_at TEXT NOT NULL,
          completed_at TEXT NOT NULL,
          node_count INTEGER NOT NULL DEFAULT 0,
          edge_count INTEGER NOT NULL DEFAULT 0,
          source_hash TEXT NOT NULL,
          metadata_json TEXT NOT NULL DEFAULT '{}'
        );
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
