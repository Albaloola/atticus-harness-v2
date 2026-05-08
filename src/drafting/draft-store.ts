import { randomUUID } from 'crypto';
import { getStateDb } from '../state/store.js';
import type { DraftCitation } from '../domain/draft-citation.js';
import type { DraftOutline } from '../domain/draft-outline.js';
import type { DraftParagraph, DraftParagraphStatus, DraftTraceStatus } from '../domain/draft-paragraph.js';
import type { DraftSection } from '../domain/draft-section.js';

export interface CreateDraftOutlineInput {
  id?: string;
  matterName: string;
  documentType: string;
  metadata?: Record<string, unknown>;
}

export interface CreateDraftSectionInput {
  id?: string;
  matterName: string;
  outlineId: string;
  heading: string;
  purpose: string;
  ordinal: number;
  metadata?: Record<string, unknown>;
}

export interface CreateDraftParagraphInput {
  id?: string;
  matterName: string;
  sectionId: string;
  ordinal: number;
  text: string;
  findingIds?: string[];
  metadata?: Record<string, unknown>;
}

export interface CreateDraftCitationInput {
  id?: string;
  matterName: string;
  paragraphId: string;
  findingCitationId: string;
  renderForm: string;
  verificationStatus?: DraftCitation['verificationStatus'];
  metadata?: Record<string, unknown>;
}

export function createDraftOutline(input: CreateDraftOutlineInput): DraftOutline {
  const outline: DraftOutline = {
    outlineId: input.id ?? randomUUID(),
    matterName: input.matterName,
    documentType: input.documentType,
    version: nextOutlineVersion(input.matterName, input.documentType),
    status: 'draft',
    createdAt: new Date().toISOString(),
    metadata: input.metadata ?? {},
  };
  getStateDb(input.matterName).prepare(`
    INSERT INTO draft_outlines (
      id, matter_name, document_type, version, status, created_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    outline.outlineId,
    outline.matterName,
    outline.documentType,
    outline.version,
    outline.status,
    outline.createdAt,
    JSON.stringify(outline.metadata),
  );
  return outline;
}

export function createDraftSection(input: CreateDraftSectionInput): DraftSection {
  assertOutline(input.matterName, input.outlineId);
  const section: DraftSection = {
    sectionId: input.id ?? randomUUID(),
    outlineId: input.outlineId,
    heading: input.heading,
    purpose: input.purpose,
    status: 'todo',
    ordinal: input.ordinal,
    metadata: input.metadata ?? {},
  };
  getStateDb(input.matterName).prepare(`
    INSERT INTO draft_sections (
      id, outline_id, heading, purpose, status, ordinal, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    section.sectionId,
    section.outlineId,
    section.heading,
    section.purpose,
    section.status,
    section.ordinal,
    JSON.stringify(section.metadata),
  );
  return section;
}

export function createDraftParagraph(input: CreateDraftParagraphInput): DraftParagraph {
  assertSection(input.matterName, input.sectionId);
  const paragraph: DraftParagraph = {
    paragraphId: input.id ?? randomUUID(),
    sectionId: input.sectionId,
    ordinal: input.ordinal,
    text: input.text,
    status: 'draft',
    traceStatus: 'missing',
    findingIds: input.findingIds ?? [],
    draftCitationIds: [],
    metadata: input.metadata ?? {},
  };
  getStateDb(input.matterName).prepare(`
    INSERT INTO draft_paragraphs (
      id, section_id, ordinal, text, status, trace_status,
      finding_ids_json, draft_citation_ids_json, active_revision_id, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    paragraph.paragraphId,
    paragraph.sectionId,
    paragraph.ordinal,
    paragraph.text,
    paragraph.status,
    paragraph.traceStatus,
    JSON.stringify(paragraph.findingIds),
    JSON.stringify(paragraph.draftCitationIds),
    paragraph.activeRevisionId ?? null,
    JSON.stringify(paragraph.metadata),
  );
  return paragraph;
}

export function createDraftCitation(input: CreateDraftCitationInput): DraftCitation {
  const paragraph = getDraftParagraph(input.matterName, input.paragraphId);
  if (!paragraph) {
    throw new Error(`Draft paragraph "${input.paragraphId}" was not found`);
  }
  const citation: DraftCitation = {
    draftCitationId: input.id ?? randomUUID(),
    paragraphId: input.paragraphId,
    findingCitationId: input.findingCitationId,
    renderForm: input.renderForm,
    verificationStatus: input.verificationStatus ?? 'unchecked',
    metadata: input.metadata ?? {},
  };
  getStateDb(input.matterName).prepare(`
    INSERT INTO draft_citations (
      id, paragraph_id, finding_citation_id, render_form, verification_status, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?)
  `).run(
    citation.draftCitationId,
    citation.paragraphId,
    citation.findingCitationId,
    citation.renderForm,
    citation.verificationStatus,
    JSON.stringify(citation.metadata),
  );
  updateDraftParagraph(input.matterName, input.paragraphId, {
    draftCitationIds: [...paragraph.draftCitationIds, citation.draftCitationId],
  });
  return citation;
}

export function updateDraftParagraph(
  matterName: string,
  paragraphId: string,
  patch: Partial<Pick<DraftParagraph, 'status' | 'traceStatus' | 'findingIds' | 'draftCitationIds' | 'activeRevisionId' | 'metadata'>>,
): DraftParagraph {
  const existing = getDraftParagraph(matterName, paragraphId);
  if (!existing) {
    throw new Error(`Draft paragraph "${paragraphId}" was not found`);
  }
  const updated: DraftParagraph = {
    ...existing,
    status: patch.status ?? existing.status,
    traceStatus: patch.traceStatus ?? existing.traceStatus,
    findingIds: patch.findingIds ?? existing.findingIds,
    draftCitationIds: patch.draftCitationIds ?? existing.draftCitationIds,
    activeRevisionId: patch.activeRevisionId ?? existing.activeRevisionId,
    metadata: { ...existing.metadata, ...(patch.metadata ?? {}) },
  };
  getStateDb(matterName).prepare(`
    UPDATE draft_paragraphs
    SET status = ?, trace_status = ?, finding_ids_json = ?,
        draft_citation_ids_json = ?, active_revision_id = ?, metadata_json = ?
    WHERE id = ?
  `).run(
    updated.status,
    updated.traceStatus,
    JSON.stringify(updated.findingIds),
    JSON.stringify(updated.draftCitationIds),
    updated.activeRevisionId ?? null,
    JSON.stringify(updated.metadata),
    paragraphId,
  );
  return updated;
}

export function updateDraftSectionStatus(
  matterName: string,
  sectionId: string,
  status: DraftSection['status'],
): DraftSection {
  const existing = getDraftSection(matterName, sectionId);
  if (!existing) {
    throw new Error(`Draft section "${sectionId}" was not found`);
  }
  getStateDb(matterName).prepare('UPDATE draft_sections SET status = ? WHERE id = ?')
    .run(status, sectionId);
  return { ...existing, status };
}

export function getDraftOutline(matterName: string, outlineId: string): DraftOutline | undefined {
  const row = getStateDb(matterName)
    .prepare('SELECT * FROM draft_outlines WHERE matter_name = ? AND id = ?')
    .get(matterName, outlineId) as DraftOutlineRow | undefined;
  return row ? rowToDraftOutline(row) : undefined;
}

export function listDraftOutlines(matterName: string): DraftOutline[] {
  const rows = getStateDb(matterName)
    .prepare('SELECT * FROM draft_outlines WHERE matter_name = ? ORDER BY created_at DESC')
    .all(matterName) as DraftOutlineRow[];
  return rows.map(rowToDraftOutline);
}

export function getDraftSection(matterName: string, sectionId: string): DraftSection | undefined {
  const row = getStateDb(matterName).prepare(`
    SELECT ds.*
    FROM draft_sections ds
    JOIN draft_outlines dout ON dout.id = ds.outline_id
    WHERE dout.matter_name = ?
      AND ds.id = ?
  `).get(matterName, sectionId) as DraftSectionRow | undefined;
  return row ? rowToDraftSection(row) : undefined;
}

export function listDraftSections(matterName: string, outlineId: string): DraftSection[] {
  const rows = getStateDb(matterName).prepare(`
    SELECT ds.*
    FROM draft_sections ds
    JOIN draft_outlines dout ON dout.id = ds.outline_id
    WHERE dout.matter_name = ?
      AND ds.outline_id = ?
    ORDER BY ds.ordinal, ds.id
  `).all(matterName, outlineId) as DraftSectionRow[];
  return rows.map(rowToDraftSection);
}

export function getDraftParagraph(matterName: string, paragraphId: string): DraftParagraph | undefined {
  const row = getStateDb(matterName).prepare(`
    SELECT dp.*
    FROM draft_paragraphs dp
    JOIN draft_sections ds ON ds.id = dp.section_id
    JOIN draft_outlines dout ON dout.id = ds.outline_id
    WHERE dout.matter_name = ?
      AND dp.id = ?
  `).get(matterName, paragraphId) as DraftParagraphRow | undefined;
  return row ? rowToDraftParagraph(row) : undefined;
}

export function listDraftParagraphs(matterName: string, options?: {
  outlineId?: string;
  sectionId?: string;
  status?: DraftParagraphStatus;
  traceStatus?: DraftTraceStatus;
}): DraftParagraph[] {
  let sql = `
    SELECT dp.*
    FROM draft_paragraphs dp
    JOIN draft_sections ds ON ds.id = dp.section_id
    JOIN draft_outlines dout ON dout.id = ds.outline_id
    WHERE dout.matter_name = ?
  `;
  const params: string[] = [matterName];
  if (options?.outlineId) {
    sql += ' AND dout.id = ?';
    params.push(options.outlineId);
  }
  if (options?.sectionId) {
    sql += ' AND ds.id = ?';
    params.push(options.sectionId);
  }
  if (options?.status) {
    sql += ' AND dp.status = ?';
    params.push(options.status);
  }
  if (options?.traceStatus) {
    sql += ' AND dp.trace_status = ?';
    params.push(options.traceStatus);
  }
  sql += ' ORDER BY ds.ordinal, dp.ordinal, dp.id';
  const rows = getStateDb(matterName).prepare(sql).all(...params) as DraftParagraphRow[];
  return rows.map(rowToDraftParagraph);
}

export function getDraftCitation(matterName: string, draftCitationId: string): DraftCitation | undefined {
  const row = getStateDb(matterName).prepare(`
    SELECT dc.*
    FROM draft_citations dc
    JOIN draft_paragraphs dp ON dp.id = dc.paragraph_id
    JOIN draft_sections ds ON ds.id = dp.section_id
    JOIN draft_outlines dout ON dout.id = ds.outline_id
    WHERE dout.matter_name = ?
      AND dc.id = ?
  `).get(matterName, draftCitationId) as DraftCitationRow | undefined;
  return row ? rowToDraftCitation(row) : undefined;
}

export function listDraftCitations(matterName: string, paragraphId?: string): DraftCitation[] {
  let sql = `
    SELECT dc.*
    FROM draft_citations dc
    JOIN draft_paragraphs dp ON dp.id = dc.paragraph_id
    JOIN draft_sections ds ON ds.id = dp.section_id
    JOIN draft_outlines dout ON dout.id = ds.outline_id
    WHERE dout.matter_name = ?
  `;
  const params = [matterName];
  if (paragraphId) {
    sql += ' AND dp.id = ?';
    params.push(paragraphId);
  }
  sql += ' ORDER BY dc.id';
  const rows = getStateDb(matterName).prepare(sql).all(...params) as DraftCitationRow[];
  return rows.map(rowToDraftCitation);
}

function nextOutlineVersion(matterName: string, documentType: string): number {
  const row = getStateDb(matterName)
    .prepare('SELECT MAX(version) as version FROM draft_outlines WHERE matter_name = ? AND document_type = ?')
    .get(matterName, documentType) as { version: number | null };
  return (row.version ?? 0) + 1;
}

function assertOutline(matterName: string, outlineId: string): void {
  if (!getDraftOutline(matterName, outlineId)) {
    throw new Error(`Draft outline "${outlineId}" was not found`);
  }
}

function assertSection(matterName: string, sectionId: string): void {
  if (!getDraftSection(matterName, sectionId)) {
    throw new Error(`Draft section "${sectionId}" was not found`);
  }
}

interface DraftOutlineRow {
  id: string;
  matter_name: string;
  document_type: string;
  version: number;
  status: DraftOutline['status'];
  created_at: string;
  metadata_json: string;
}

interface DraftSectionRow {
  id: string;
  outline_id: string;
  heading: string;
  purpose: string;
  status: DraftSection['status'];
  ordinal: number;
  metadata_json: string;
}

interface DraftParagraphRow {
  id: string;
  section_id: string;
  ordinal: number;
  text: string;
  status: DraftParagraphStatus;
  trace_status: DraftTraceStatus;
  finding_ids_json: string;
  draft_citation_ids_json: string;
  active_revision_id: string | null;
  metadata_json: string;
}

interface DraftCitationRow {
  id: string;
  paragraph_id: string;
  finding_citation_id: string;
  render_form: string;
  verification_status: DraftCitation['verificationStatus'];
  metadata_json: string;
}

function rowToDraftOutline(row: DraftOutlineRow): DraftOutline {
  return {
    outlineId: row.id,
    matterName: row.matter_name,
    documentType: row.document_type,
    version: row.version,
    status: row.status,
    createdAt: row.created_at,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}

function rowToDraftSection(row: DraftSectionRow): DraftSection {
  return {
    sectionId: row.id,
    outlineId: row.outline_id,
    heading: row.heading,
    purpose: row.purpose,
    status: row.status,
    ordinal: row.ordinal,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}

function rowToDraftParagraph(row: DraftParagraphRow): DraftParagraph {
  return {
    paragraphId: row.id,
    sectionId: row.section_id,
    ordinal: row.ordinal,
    text: row.text,
    status: row.status,
    traceStatus: row.trace_status,
    findingIds: JSON.parse(row.finding_ids_json || '[]'),
    draftCitationIds: JSON.parse(row.draft_citation_ids_json || '[]'),
    activeRevisionId: row.active_revision_id ?? undefined,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}

function rowToDraftCitation(row: DraftCitationRow): DraftCitation {
  return {
    draftCitationId: row.id,
    paragraphId: row.paragraph_id,
    findingCitationId: row.finding_citation_id,
    renderForm: row.render_form,
    verificationStatus: row.verification_status,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}
