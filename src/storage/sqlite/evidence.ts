import type Database from 'better-sqlite3';
import { getDb } from './index.js';
import type { EvidenceRecord } from '../../types/evidence.js';
import type { EvidenceChunk } from '../../domain/evidence-chunk.js';
import type { EvidenceItem } from '../../domain/evidence-item.js';
import type { EvidencePage } from '../../domain/evidence-page.js';
import type { ExtractionQualityReport } from '../../domain/extraction-quality-report.js';
import type { OCRRun } from '../../domain/ocr-run.js';

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

export function insertEvidenceItemV2(db: Database.Database, item: EvidenceItem): void {
  const stmt = db.prepare(`
    INSERT INTO evidence_items_v2 (
      evidence_id, matter_name, sha256, original_path, internal_path,
      original_filename, canonical_filename, source_type, mime_type, format,
      status, ingested_at, size_bytes, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(
    item.evidenceId,
    item.matterName,
    item.sha256,
    item.originalPath,
    item.internalPath,
    item.originalFilename,
    item.canonicalFilename ?? null,
    item.sourceType,
    item.mimeType,
    item.format,
    item.status,
    item.ingestedAt,
    item.sizeBytes,
    JSON.stringify(item.metadata),
  );
}

export function getEvidenceItemV2(db: Database.Database, evidenceId: string): EvidenceItem | undefined {
  const row = db.prepare('SELECT * FROM evidence_items_v2 WHERE evidence_id = ?').get(evidenceId) as
    | Record<string, unknown>
    | undefined;
  return row ? rowToEvidenceItemV2(row) : undefined;
}

export function updateEvidenceItemV2Status(
  db: Database.Database,
  evidenceId: string,
  status: EvidenceItem['status'],
  metadata?: Record<string, unknown>,
): void {
  if (metadata) {
    db.prepare('UPDATE evidence_items_v2 SET status = ?, metadata_json = ? WHERE evidence_id = ?')
      .run(status, JSON.stringify(metadata), evidenceId);
    return;
  }
  db.prepare('UPDATE evidence_items_v2 SET status = ? WHERE evidence_id = ?').run(status, evidenceId);
}

export function insertEvidencePageV2(db: Database.Database, page: EvidencePage): void {
  db.prepare(`
    INSERT INTO evidence_pages (
      page_id, evidence_id, page_number, image_path, text_status,
      dpi, rotation, blankness_score, ocr_confidence, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    page.pageId,
    page.evidenceId,
    page.pageNumber,
    page.imagePath ?? null,
    page.textStatus,
    page.dpi ?? null,
    page.rotation ?? null,
    page.blanknessScore ?? null,
    page.ocrConfidence ?? null,
    JSON.stringify(page.metadata),
  );
}

export function listEvidencePagesV2(db: Database.Database, evidenceId: string): EvidencePage[] {
  const rows = db.prepare('SELECT * FROM evidence_pages WHERE evidence_id = ? ORDER BY page_number')
    .all(evidenceId) as Record<string, unknown>[];
  return rows.map(rowToEvidencePageV2);
}

export function insertEvidenceChunkV2(db: Database.Database, chunk: EvidenceChunk): void {
  db.prepare(`
    INSERT INTO evidence_chunks_v2 (
      chunk_id, evidence_id, page_id, chunk_index, content, content_hash,
      confidence, char_start, char_end, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    chunk.chunkId,
    chunk.evidenceId,
    chunk.pageId,
    chunk.chunkIndex,
    chunk.content,
    chunk.contentHash,
    chunk.confidence,
    chunk.charStart ?? null,
    chunk.charEnd ?? null,
    JSON.stringify(chunk.metadata),
  );
}

export function listEvidenceChunksV2(db: Database.Database, evidenceId: string): EvidenceChunk[] {
  const rows = db.prepare('SELECT * FROM evidence_chunks_v2 WHERE evidence_id = ? ORDER BY chunk_index')
    .all(evidenceId) as Record<string, unknown>[];
  return rows.map(rowToEvidenceChunkV2);
}

export function insertOCRRun(db: Database.Database, run: OCRRun): void {
  db.prepare(`
    INSERT INTO ocr_runs (
      ocr_run_id, evidence_id, engine, status, started_at, completed_at,
      confidence, output_path, error, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    run.ocrRunId,
    run.evidenceId,
    run.engine,
    run.status,
    run.startedAt,
    run.completedAt ?? null,
    run.confidence ?? null,
    run.outputPath ?? null,
    run.error ?? null,
    JSON.stringify(run.metadata),
  );
}

export function insertExtractionQualityReport(
  db: Database.Database,
  report: ExtractionQualityReport,
): void {
  db.prepare(`
    INSERT INTO extraction_quality_reports (
      report_id, evidence_id, status, text_density, average_confidence,
      page_count, warnings_json, created_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    report.reportId,
    report.evidenceId,
    report.status,
    report.textDensity,
    report.averageConfidence,
    report.pageCount,
    JSON.stringify(report.warnings),
    report.createdAt,
    JSON.stringify(report.metadata),
  );
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

function rowToEvidenceItemV2(row: Record<string, unknown>): EvidenceItem {
  return {
    evidenceId: row.evidence_id as string,
    matterName: row.matter_name as string,
    sha256: row.sha256 as string,
    originalPath: row.original_path as string,
    internalPath: row.internal_path as string,
    originalFilename: row.original_filename as string,
    canonicalFilename: (row.canonical_filename as string | null) ?? undefined,
    sourceType: row.source_type as EvidenceItem['sourceType'],
    mimeType: (row.mime_type as string | null) ?? '',
    format: row.format as EvidenceItem['format'],
    status: row.status as EvidenceItem['status'],
    ingestedAt: row.ingested_at as string,
    sizeBytes: (row.size_bytes as number) ?? 0,
    metadata: JSON.parse((row.metadata_json as string) || '{}'),
  };
}

function rowToEvidencePageV2(row: Record<string, unknown>): EvidencePage {
  return {
    pageId: row.page_id as string,
    evidenceId: row.evidence_id as string,
    pageNumber: row.page_number as number,
    imagePath: (row.image_path as string | null) ?? undefined,
    textStatus: row.text_status as EvidencePage['textStatus'],
    dpi: (row.dpi as number | null) ?? undefined,
    rotation: (row.rotation as number | null) ?? undefined,
    blanknessScore: (row.blankness_score as number | null) ?? undefined,
    ocrConfidence: (row.ocr_confidence as number | null) ?? undefined,
    metadata: JSON.parse((row.metadata_json as string) || '{}'),
  };
}

function rowToEvidenceChunkV2(row: Record<string, unknown>): EvidenceChunk {
  return {
    chunkId: row.chunk_id as string,
    evidenceId: row.evidence_id as string,
    pageId: row.page_id as string,
    chunkIndex: row.chunk_index as number,
    content: row.content as string,
    contentHash: row.content_hash as string,
    confidence: row.confidence as number,
    charStart: (row.char_start as number | null) ?? undefined,
    charEnd: (row.char_end as number | null) ?? undefined,
    metadata: JSON.parse((row.metadata_json as string) || '{}'),
  };
}

export type { EvidenceRecord };
