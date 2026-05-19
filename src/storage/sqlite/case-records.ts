import { getDb } from './index.js';
import * as crypto from 'crypto';

export interface EntityRecord {
  id: string;
  matterName: string;
  name: string;
  role: string;
  description: string | null;
  metadataJson: string;
  createdAt: string;
  updatedAt: string;
}

export interface InsertEntityInput {
  matterName: string;
  name: string;
  role: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

export interface BreachRecord {
  id: string;
  matterName: string;
  entityId: string;
  dateCommitted: string | null;
  title: string;
  description: string;
  provisionsViolated: string | null;
  evidenceCitationsJson: string;
  createdAt: string;
  updatedAt: string;
}

export interface InsertBreachInput {
  matterName: string;
  entityId: string;
  dateCommitted?: string;
  title: string;
  description: string;
  provisionsViolated?: string;
  evidenceCitations?: any[];
}

export interface RelationshipRecord {
  id: string;
  matterName: string;
  sourceId: string;
  targetId: string;
  relationType: string;
  metadataJson: string;
  createdAt: string;
}

export interface InsertRelationshipInput {
  matterName: string;
  sourceId: string;
  targetId: string;
  relationType: string;
  metadata?: Record<string, unknown>;
}

export interface CaseCitationRecord {
  id: string;
  matterName: string;
  citationQuery: string | null;
  caseName: string;
  relevanceScore: number;
  relevanceRationale: string | null;
  keyQuote: string | null;
  proceduralContext: string | null;
  createdAt: string;
}

export interface InsertCaseCitationInput {
  matterName: string;
  citationQuery?: string;
  caseName: string;
  relevanceScore?: number;
  relevanceRationale?: string;
  keyQuote?: string;
  proceduralContext?: string;
}

// Entities DB methods
export function addEntity(input: InsertEntityInput): EntityRecord {
  const db = getDb(input.matterName);
  const id = `entity-${crypto.randomUUID()}`;
  const now = new Date().toISOString();
  const record: EntityRecord = {
    id,
    matterName: input.matterName,
    name: input.name,
    role: input.role,
    description: input.description ?? null,
    metadataJson: JSON.stringify(input.metadata ?? {}),
    createdAt: now,
    updatedAt: now,
  };
  db.prepare(`
    INSERT INTO entities (id, matter_name, name, role, description, metadata_json, created_at, updated_at)
    VALUES (@id, @matterName, @name, @role, @description, @metadataJson, @createdAt, @updatedAt)
  `).run(record);
  return record;
}

export function listEntities(matterName: string, filters: { role?: string } = {}): EntityRecord[] {
  const db = getDb(matterName);
  let query = 'SELECT * FROM entities WHERE matter_name = ?';
  const params: any[] = [matterName];
  if (filters.role) {
    query += ' AND role = ?';
    params.push(filters.role);
  }
  const rows = db.prepare(query).all(...params) as Record<string, any>[];
  return rows.map((row) => ({
    id: row.id,
    matterName: row.matter_name,
    name: row.name,
    role: row.role,
    description: row.description,
    metadataJson: row.metadata_json,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
}

// Breaches DB methods
export function addBreach(input: InsertBreachInput): BreachRecord {
  const db = getDb(input.matterName);
  const id = `breach-${crypto.randomUUID()}`;
  const now = new Date().toISOString();
  const record: BreachRecord = {
    id,
    matterName: input.matterName,
    entityId: input.entityId,
    dateCommitted: input.dateCommitted ?? null,
    title: input.title,
    description: input.description,
    provisionsViolated: input.provisionsViolated ?? null,
    evidenceCitationsJson: JSON.stringify(input.evidenceCitations ?? []),
    createdAt: now,
    updatedAt: now,
  };
  db.prepare(`
    INSERT INTO breaches (id, matter_name, entity_id, date_committed, title, description, provisions_violated, evidence_citations_json, created_at, updated_at)
    VALUES (@id, @matterName, @entityId, @dateCommitted, @title, @description, @provisionsViolated, @evidenceCitationsJson, @createdAt, @updatedAt)
  `).run(record);
  return record;
}

export function listBreaches(matterName: string, filters: { entityId?: string } = {}): BreachRecord[] {
  const db = getDb(matterName);
  let query = 'SELECT * FROM breaches WHERE matter_name = ?';
  const params: any[] = [matterName];
  if (filters.entityId) {
    query += ' AND entity_id = ?';
    params.push(filters.entityId);
  }
  const rows = db.prepare(query).all(...params) as Record<string, any>[];
  return rows.map((row) => ({
    id: row.id,
    matterName: row.matter_name,
    entityId: row.entity_id,
    dateCommitted: row.date_committed,
    title: row.title,
    description: row.description,
    provisionsViolated: row.provisions_violated,
    evidenceCitationsJson: row.evidence_citations_json,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
}

// Relationships DB methods
export function addRelationship(input: InsertRelationshipInput): RelationshipRecord {
  const db = getDb(input.matterName);
  const id = `relation-${crypto.randomUUID()}`;
  const now = new Date().toISOString();
  const record: RelationshipRecord = {
    id,
    matterName: input.matterName,
    sourceId: input.sourceId,
    targetId: input.targetId,
    relationType: input.relationType,
    metadataJson: JSON.stringify(input.metadata ?? {}),
    createdAt: now,
  };
  db.prepare(`
    INSERT INTO relationships (id, matter_name, source_id, target_id, relation_type, metadata_json, created_at)
    VALUES (@id, @matterName, @sourceId, @targetId, @relationType, @metadataJson, @createdAt)
  `).run(record);
  return record;
}

export function listRelationships(matterName: string): RelationshipRecord[] {
  const db = getDb(matterName);
  const rows = db.prepare('SELECT * FROM relationships WHERE matter_name = ?').all(matterName) as Record<string, any>[];
  return rows.map((row) => ({
    id: row.id,
    matterName: row.matter_name,
    sourceId: row.source_id,
    targetId: row.target_id,
    relationType: row.relation_type,
    metadataJson: row.metadata_json,
    createdAt: row.created_at,
  }));
}

// Case Citations DB methods
export function addCaseCitation(input: InsertCaseCitationInput): CaseCitationRecord {
  const db = getDb(input.matterName);
  const id = `citation-${crypto.randomUUID()}`;
  const now = new Date().toISOString();
  const record: CaseCitationRecord = {
    id,
    matterName: input.matterName,
    citationQuery: input.citationQuery ?? null,
    caseName: input.caseName,
    relevanceScore: input.relevanceScore ?? 0.0,
    relevanceRationale: input.relevanceRationale ?? null,
    keyQuote: input.keyQuote ?? null,
    proceduralContext: input.proceduralContext ?? null,
    createdAt: now,
  };
  db.prepare(`
    INSERT INTO case_citations (id, matter_name, citation_query, case_name, relevance_score, relevance_rationale, key_quote, procedural_context, created_at)
    VALUES (@id, @matterName, @citationQuery, @caseName, @relevanceScore, @relevanceRationale, @keyQuote, @proceduralContext, @createdAt)
  `).run(record);
  return record;
}

export function listCaseCitations(
  matterName: string,
  filters: { query?: string; context?: string } = {}
): CaseCitationRecord[] {
  const db = getDb(matterName);
  let query = 'SELECT * FROM case_citations WHERE matter_name = ?';
  const params: any[] = [matterName];
  if (filters.query) {
    query += ' AND citation_query = ?';
    params.push(filters.query);
  }
  if (filters.context) {
    query += ' AND procedural_context = ?';
    params.push(filters.context);
  }
  const rows = db.prepare(query).all(...params) as Record<string, any>[];
  return rows.map((row) => ({
    id: row.id,
    matterName: row.matter_name,
    citationQuery: row.citation_query,
    caseName: row.case_name,
    relevanceScore: row.relevance_score,
    relevanceRationale: row.relevance_rationale,
    keyQuote: row.key_quote,
    proceduralContext: row.procedural_context,
    createdAt: row.created_at,
  }));
}
