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

	    CREATE TABLE IF NOT EXISTS evidence_items_v2 (
	      evidence_id TEXT PRIMARY KEY,
	      matter_name TEXT NOT NULL,
	      sha256 TEXT NOT NULL,
	      original_path TEXT NOT NULL,
	      internal_path TEXT NOT NULL,
	      original_filename TEXT NOT NULL,
	      canonical_filename TEXT,
	      source_type TEXT NOT NULL DEFAULT 'upload',
	      mime_type TEXT,
	      format TEXT NOT NULL DEFAULT 'unknown',
	      status TEXT NOT NULL DEFAULT 'registered',
	      ingested_at TEXT NOT NULL,
	      size_bytes INTEGER DEFAULT 0,
	      metadata_json TEXT NOT NULL DEFAULT '{}'
	    );

	    CREATE UNIQUE INDEX IF NOT EXISTS idx_evidence_items_v2_sha
	      ON evidence_items_v2(matter_name, sha256);
	    CREATE INDEX IF NOT EXISTS idx_evidence_items_v2_status
	      ON evidence_items_v2(matter_name, status);

	    CREATE TABLE IF NOT EXISTS evidence_pages (
	      page_id TEXT PRIMARY KEY,
	      evidence_id TEXT NOT NULL REFERENCES evidence_items_v2(evidence_id) ON DELETE CASCADE,
	      page_number INTEGER NOT NULL,
	      image_path TEXT,
	      text_status TEXT NOT NULL DEFAULT 'pending',
	      dpi INTEGER,
	      rotation INTEGER,
	      blankness_score REAL,
	      ocr_confidence REAL,
	      metadata_json TEXT NOT NULL DEFAULT '{}',
	      UNIQUE(evidence_id, page_number)
	    );

	    CREATE TABLE IF NOT EXISTS evidence_chunks_v2 (
	      chunk_id TEXT PRIMARY KEY,
	      evidence_id TEXT NOT NULL REFERENCES evidence_items_v2(evidence_id) ON DELETE CASCADE,
	      page_id TEXT NOT NULL REFERENCES evidence_pages(page_id) ON DELETE CASCADE,
	      chunk_index INTEGER NOT NULL,
	      content TEXT NOT NULL,
	      content_hash TEXT NOT NULL,
	      confidence REAL NOT NULL DEFAULT 1.0,
	      char_start INTEGER,
	      char_end INTEGER,
	      metadata_json TEXT NOT NULL DEFAULT '{}',
	      UNIQUE(evidence_id, chunk_index)
	    );

	    CREATE INDEX IF NOT EXISTS idx_evidence_chunks_v2_evidence
	      ON evidence_chunks_v2(evidence_id, chunk_index);
	    CREATE INDEX IF NOT EXISTS idx_evidence_chunks_v2_page
	      ON evidence_chunks_v2(page_id);

	    CREATE TABLE IF NOT EXISTS ocr_runs (
	      ocr_run_id TEXT PRIMARY KEY,
	      evidence_id TEXT NOT NULL REFERENCES evidence_items_v2(evidence_id) ON DELETE CASCADE,
	      engine TEXT NOT NULL,
	      status TEXT NOT NULL,
	      started_at TEXT NOT NULL,
	      completed_at TEXT,
	      confidence REAL,
	      output_path TEXT,
	      error TEXT,
	      metadata_json TEXT NOT NULL DEFAULT '{}'
	    );

	    CREATE TABLE IF NOT EXISTS extraction_quality_reports (
	      report_id TEXT PRIMARY KEY,
	      evidence_id TEXT NOT NULL REFERENCES evidence_items_v2(evidence_id) ON DELETE CASCADE,
	      status TEXT NOT NULL,
	      text_density REAL NOT NULL DEFAULT 0,
	      average_confidence REAL NOT NULL DEFAULT 0,
	      page_count INTEGER NOT NULL DEFAULT 0,
	      warnings_json TEXT NOT NULL DEFAULT '[]',
	      created_at TEXT NOT NULL,
	      metadata_json TEXT NOT NULL DEFAULT '{}'
	    );

	    CREATE TABLE IF NOT EXISTS evidence_search_projection (
	      projection_id TEXT PRIMARY KEY,
	      evidence_id TEXT NOT NULL,
	      chunk_id TEXT NOT NULL,
	      page_id TEXT NOT NULL,
	      content TEXT NOT NULL,
	      searchable INTEGER NOT NULL DEFAULT 0,
	      updated_at TEXT NOT NULL,
	      metadata_json TEXT NOT NULL DEFAULT '{}'
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

	  if (version < 2) {
	    db.prepare('INSERT OR IGNORE INTO schema_version (version, applied_at) VALUES (2, ?)').run(new Date().toISOString());
	  }
	}
