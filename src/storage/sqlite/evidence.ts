import type Database from 'better-sqlite3';
import { getDb } from './index.js';
import type { EvidenceRecord } from '../../types/evidence.js';

export function insertEvidence(db: Database.Database, record: EvidenceRecord): void {
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO evidence (id, matter_name, original_path, internal_path, sha256, mime_type, format, status, ingested, size_bytes, metadata_json)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(
    record.id,
    record.matterName,
    record.originalPath,
    record.internalPath,
    record.sha256,
    record.mimeType,
    record.format,
    record.status,
    record.ingested,
    record.sizeBytes,
    JSON.stringify(record.metadata),
  );
}

export function getEvidenceById(matterName: string, evidenceId: string): EvidenceRecord | undefined {
  const db = getDb(matterName);
  const row = db.prepare('SELECT * FROM evidence WHERE id = ?').get(evidenceId) as Record<string, unknown> | undefined;
  if (!row) return undefined;
  return rowToEvidence(row);
}

export function getAllEvidence(matterName: string): EvidenceRecord[] {
  const db = getDb(matterName);
  const rows = db.prepare('SELECT * FROM evidence ORDER BY ingested DESC').all() as Record<string, unknown>[];
  return rows.map(rowToEvidence);
}

export function deleteEvidence(matterName: string, evidenceId: string): void {
  const db = getDb(matterName);
  db.prepare('DELETE FROM evidence WHERE id = ?').run(evidenceId);
}

export function getEvidenceCount(matterName: string): number {
  const db = getDb(matterName);
  const row = db.prepare('SELECT COUNT(*) as count FROM evidence').get() as { count: number };
  return row.count;
}

function rowToEvidence(row: Record<string, unknown>): EvidenceRecord {
  return {
    id: row.id as string,
    matterName: row.matter_name as string,
    originalPath: row.original_path as string,
    internalPath: row.internal_path as string,
    sha256: row.sha256 as string,
    mimeType: row.mime_type as string,
    format: row.format as EvidenceRecord['format'],
    status: row.status as EvidenceRecord['status'],
    ingested: row.ingested as string,
    sizeBytes: (row.size_bytes as number) ?? 0,
    metadata: JSON.parse((row.metadata_json as string) || '{}'),
  };
}

export type { EvidenceRecord };
