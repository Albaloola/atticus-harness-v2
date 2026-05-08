import { basename } from 'path';
import type Database from 'better-sqlite3';
import type { ExtractedText } from '../extraction/types.js';
import type { EvidenceRecord } from '../types/evidence.js';
import {
  insertEvidenceChunkV2,
  insertEvidenceItemV2,
  insertEvidencePageV2,
  insertExtractionQualityReport,
  updateEvidenceItemV2Status,
} from '../storage/sqlite/evidence.js';
import type { ChunkData } from '../storage/sqlite/chunks.js';
import {
  buildEvidenceChunksV2,
  buildEvidencePages,
  buildExtractionQualityReport,
} from './page-builder.js';

export function registerCopiedEvidenceV2(db: Database.Database, record: EvidenceRecord): void {
  insertEvidenceItemV2(db, {
    evidenceId: record.id,
    matterName: record.matterName,
    sha256: record.sha256,
    originalPath: record.originalPath,
    internalPath: record.internalPath,
    originalFilename: String(record.metadata.originalFileName ?? basename(record.originalPath)),
    sourceType: 'upload',
    mimeType: record.mimeType,
    format: record.format,
    status: record.status,
    ingestedAt: record.ingested,
    sizeBytes: record.sizeBytes,
    metadata: record.metadata,
  });
}

export function persistExtractionV2(
  db: Database.Database,
  evidenceId: string,
  extracted: ExtractedText,
  chunks: ChunkData[],
): void {
  const pages = buildEvidencePages(evidenceId, extracted);
  for (const page of pages) {
    insertEvidencePageV2(db, page);
  }
  for (const chunk of buildEvidenceChunksV2(evidenceId, chunks, pages)) {
    insertEvidenceChunkV2(db, chunk);
  }
  insertExtractionQualityReport(db, buildExtractionQualityReport(evidenceId, extracted));
  updateEvidenceItemV2Status(db, evidenceId, 'approved');
}
