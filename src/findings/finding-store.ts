import { randomUUID } from 'crypto';
import { getStateDb } from '../state/store.js';
import { appendEvent } from '../state/events.js';
import type { Finding, FindingCriticality, FindingStatus } from '../domain/finding.js';
import type { FindingCitation, FindingCitationStatus } from '../domain/finding-citation.js';

export interface ProposeFindingInput {
  id?: string;
  matterName: string;
  statement: string;
  criticality?: FindingCriticality;
  confidence?: number;
  metadata?: Record<string, unknown>;
}

export interface AddFindingCitationInput {
  id?: string;
  matterName: string;
  findingId: string;
  evidenceId: string;
  pageId: string;
  chunkId: string;
  quote: string;
  quoteHash: string;
  sourceHash: string;
  status?: FindingCitationStatus;
  checkedAt?: string;
  metadata?: Record<string, unknown>;
}

export async function proposeFinding(input: ProposeFindingInput): Promise<Finding> {
  const now = new Date().toISOString();
  const finding: Finding = {
    findingId: input.id ?? randomUUID(),
    matterName: input.matterName,
    statement: input.statement,
    status: 'proposed',
    criticality: input.criticality ?? 'ordinary',
    confidence: input.confidence ?? 0,
    createdAt: now,
    updatedAt: now,
    metadata: input.metadata ?? {},
  };

  const db = getStateDb(input.matterName);
  db.prepare(`
    INSERT INTO findings (
      id, matter_name, statement, status, criticality, confidence,
      created_at, updated_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    finding.findingId,
    finding.matterName,
    finding.statement,
    finding.status,
    finding.criticality,
    finding.confidence,
    finding.createdAt,
    finding.updatedAt,
    JSON.stringify(finding.metadata),
  );

  await appendEvent({
    matterName: input.matterName,
    type: 'finding.proposed',
    data: { findingId: finding.findingId },
    source: 'finding-store',
  });

  return finding;
}

export async function addFindingCitation(input: AddFindingCitationInput): Promise<FindingCitation> {
  if (!getFinding(input.matterName, input.findingId)) {
    throw new Error(`Finding "${input.findingId}" was not found`);
  }

  const citation: FindingCitation = {
    findingCitationId: input.id ?? randomUUID(),
    findingId: input.findingId,
    evidenceId: input.evidenceId,
    pageId: input.pageId,
    chunkId: input.chunkId,
    quote: input.quote,
    quoteHash: input.quoteHash,
    sourceHash: input.sourceHash,
    status: input.status ?? 'unchecked',
    checkedAt: input.checkedAt ?? new Date().toISOString(),
    metadata: input.metadata ?? {},
  };

  const db = getStateDb(input.matterName);
  db.prepare(`
    INSERT INTO finding_citations (
      id, finding_id, evidence_id, page_id, chunk_id, quote, quote_hash,
      source_hash, status, checked_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    citation.findingCitationId,
    citation.findingId,
    citation.evidenceId,
    citation.pageId,
    citation.chunkId,
    citation.quote,
    citation.quoteHash,
    citation.sourceHash,
    citation.status,
    citation.checkedAt,
    JSON.stringify(citation.metadata),
  );

  await appendEvent({
    matterName: input.matterName,
    type: 'finding.citation_checked',
    data: { findingId: citation.findingId, findingCitationId: citation.findingCitationId, status: citation.status },
    source: 'finding-store',
  });

  return citation;
}

export function getFinding(matterName: string, findingId: string): Finding | undefined {
  const db = getStateDb(matterName);
  const row = db.prepare('SELECT * FROM findings WHERE matter_name = ? AND id = ?')
    .get(matterName, findingId) as FindingRow | undefined;
  return row ? rowToFinding(row) : undefined;
}

export function listFindings(matterName: string, options?: {
  status?: FindingStatus;
  criticality?: FindingCriticality;
}): Finding[] {
  const db = getStateDb(matterName);
  let sql = 'SELECT * FROM findings WHERE matter_name = ?';
  const params: Array<string | number> = [matterName];
  if (options?.status) {
    sql += ' AND status = ?';
    params.push(options.status);
  }
  if (options?.criticality) {
    sql += ' AND criticality = ?';
    params.push(options.criticality);
  }
  sql += ' ORDER BY updated_at DESC, created_at DESC';
  const rows = db.prepare(sql).all(...params) as FindingRow[];
  return rows.map(rowToFinding);
}

export function listFindingCitations(matterName: string, findingId: string): FindingCitation[] {
  const db = getStateDb(matterName);
  const rows = db.prepare(`
    SELECT fc.*
    FROM finding_citations fc
    JOIN findings f ON f.id = fc.finding_id
    WHERE f.matter_name = ?
      AND fc.finding_id = ?
    ORDER BY fc.checked_at
  `).all(matterName, findingId) as FindingCitationRow[];
  return rows.map(rowToFindingCitation);
}

export function listAllFindingCitations(matterName: string, options?: {
  status?: FindingCitationStatus;
}): FindingCitation[] {
  const db = getStateDb(matterName);
  let sql = `
    SELECT fc.*
    FROM finding_citations fc
    JOIN findings f ON f.id = fc.finding_id
    WHERE f.matter_name = ?
  `;
  const params: string[] = [matterName];
  if (options?.status) {
    sql += ' AND fc.status = ?';
    params.push(options.status);
  }
  sql += ' ORDER BY fc.checked_at DESC';
  const rows = db.prepare(sql).all(...params) as FindingCitationRow[];
  return rows.map(rowToFindingCitation);
}

export function getFindingCitation(
  matterName: string,
  findingCitationId: string,
): FindingCitation | undefined {
  const db = getStateDb(matterName);
  const row = db.prepare(`
    SELECT fc.*
    FROM finding_citations fc
    JOIN findings f ON f.id = fc.finding_id
    WHERE f.matter_name = ?
      AND fc.id = ?
  `).get(matterName, findingCitationId) as FindingCitationRow | undefined;
  return row ? rowToFindingCitation(row) : undefined;
}

export function setFindingStatus(
  matterName: string,
  findingId: string,
  status: FindingStatus,
  metadataPatch?: Record<string, unknown>,
): Finding {
  const existing = getFinding(matterName, findingId);
  if (!existing) {
    throw new Error(`Finding "${findingId}" was not found`);
  }

  const now = new Date().toISOString();
  const metadata = { ...existing.metadata, ...metadataPatch };
  const db = getStateDb(matterName);
  db.prepare(`
    UPDATE findings
    SET status = ?, updated_at = ?, metadata_json = ?
    WHERE matter_name = ? AND id = ?
  `).run(status, now, JSON.stringify(metadata), matterName, findingId);

  return {
    ...existing,
    status,
    updatedAt: now,
    metadata,
  };
}

interface FindingRow {
  id: string;
  matter_name: string;
  statement: string;
  status: FindingStatus;
  criticality: FindingCriticality;
  confidence: number;
  created_at: string;
  updated_at: string;
  metadata_json: string;
}

interface FindingCitationRow {
  id: string;
  finding_id: string;
  evidence_id: string;
  page_id: string;
  chunk_id: string;
  quote: string;
  quote_hash: string;
  source_hash: string;
  status: FindingCitationStatus;
  checked_at: string;
  metadata_json: string;
}

function rowToFinding(row: FindingRow): Finding {
  return {
    findingId: row.id,
    matterName: row.matter_name,
    statement: row.statement,
    status: row.status,
    criticality: row.criticality,
    confidence: row.confidence,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}

function rowToFindingCitation(row: FindingCitationRow): FindingCitation {
  return {
    findingCitationId: row.id,
    findingId: row.finding_id,
    evidenceId: row.evidence_id,
    pageId: row.page_id,
    chunkId: row.chunk_id,
    quote: row.quote,
    quoteHash: row.quote_hash,
    sourceHash: row.source_hash,
    status: row.status,
    checkedAt: row.checked_at,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}
