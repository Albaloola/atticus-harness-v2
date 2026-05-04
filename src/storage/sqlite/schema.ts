import type Database from 'better-sqlite3';
import { type LLMMessage, type ToolCall } from '../../types/message.js';
export { getDb, closeDb, closeAllDbs } from './index.js';

export function createTables(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS evidence (
      id TEXT PRIMARY KEY,
      matter_name TEXT NOT NULL,
      original_path TEXT NOT NULL,
      internal_path TEXT NOT NULL,
      sha256 TEXT NOT NULL,
      mime_type TEXT,
      format TEXT NOT NULL DEFAULT 'unknown',
      status TEXT NOT NULL DEFAULT 'pending',
      ingested TEXT NOT NULL,
      size_bytes INTEGER DEFAULT 0,
      metadata_json TEXT DEFAULT '{}'
    );

    CREATE TABLE IF NOT EXISTS extraction_chunks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      evidence_id TEXT NOT NULL REFERENCES evidence(id) ON DELETE CASCADE,
      chunk_index INTEGER NOT NULL,
      content TEXT NOT NULL,
      content_hash TEXT,
      confidence REAL DEFAULT 1.0
    );

    CREATE VIRTUAL TABLE IF NOT EXISTS evidence_fts USING fts5(
      content,
      evidence_id UNINDEXED,
      chunk_index UNINDEXED,
      content='extraction_chunks',
      content_rowid='id'
    );

    -- Triggers to keep FTS in sync with extraction_chunks
    CREATE TRIGGER IF NOT EXISTS extraction_chunks_ai AFTER INSERT ON extraction_chunks BEGIN
      INSERT INTO evidence_fts(rowid, content, evidence_id, chunk_index)
      VALUES (new.id, new.content, new.evidence_id, new.chunk_index);
    END;

    CREATE TRIGGER IF NOT EXISTS extraction_chunks_ad AFTER DELETE ON extraction_chunks BEGIN
      INSERT INTO evidence_fts(evidence_fts, rowid, content, evidence_id, chunk_index)
      VALUES ('delete', old.id, old.content, old.evidence_id, old.chunk_index);
    END;

    CREATE TRIGGER IF NOT EXISTS extraction_chunks_au AFTER UPDATE ON extraction_chunks BEGIN
      INSERT INTO evidence_fts(evidence_fts, rowid, content, evidence_id, chunk_index)
      VALUES ('delete', old.id, old.content, old.evidence_id, old.chunk_index);
      INSERT INTO evidence_fts(rowid, content, evidence_id, chunk_index)
      VALUES (new.id, new.content, new.evidence_id, new.chunk_index);
    END;

    CREATE TABLE IF NOT EXISTS schema_version (
      version INTEGER PRIMARY KEY,
      applied_at TEXT NOT NULL
    );
  `);

  // Check schema version and apply migrations
  const currentVersion = db.prepare('SELECT MAX(version) as v FROM schema_version').get() as { v: number | null } | undefined;
  const version = currentVersion?.v ?? 0;

  if (version < 1) {
    // Version 1 is the initial schema above
    db.prepare('INSERT INTO schema_version (version, applied_at) VALUES (1, ?)').run(new Date().toISOString());
  }
}
