import { getDb } from './index.js';
import * as crypto from 'crypto';

export interface ChronologyEvent {
  id: string;
  matterName: string;
  dateStart: string | null;
  dateEnd: string | null;
  description: string;
  evidenceId: string | null;
  issueId: string | null;
  status: 'active' | 'disputed' | 'resolved' | string;
  sourceTeam: string;
  metadataJson: string;
  createdAt: string;
  updatedAt: string;
}

export interface InsertChronologyEvent {
  matterName: string;
  dateStart?: string;
  dateEnd?: string;
  description: string;
  evidenceId?: string;
  issueId?: string;
  status?: string;
  sourceTeam: string;
  metadata?: Record<string, unknown>;
}

export function addChronologyEvent(input: InsertChronologyEvent): ChronologyEvent {
  const db = getDb(input.matterName);
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  
  const event: ChronologyEvent = {
    id,
    matterName: input.matterName,
    dateStart: input.dateStart ?? null,
    dateEnd: input.dateEnd ?? null,
    description: input.description,
    evidenceId: input.evidenceId ?? null,
    issueId: input.issueId ?? null,
    status: input.status ?? 'active',
    sourceTeam: input.sourceTeam,
    metadataJson: JSON.stringify(input.metadata ?? {}),
    createdAt: now,
    updatedAt: now,
  };

  const stmt = db.prepare(`
    INSERT INTO chronology_events (
      id, matter_name, date_start, date_end, description, 
      evidence_id, issue_id, status, source_team, metadata_json, created_at, updated_at
    ) VALUES (
      @id, @matterName, @dateStart, @dateEnd, @description, 
      @evidenceId, @issueId, @status, @sourceTeam, @metadataJson, @createdAt, @updatedAt
    )
  `);

  stmt.run(event);
  return event;
}

export function updateChronologyEvent(
  matterName: string,
  id: string, 
  updates: Partial<Omit<ChronologyEvent, 'id' | 'matterName' | 'createdAt' | 'updatedAt'>>
): ChronologyEvent | null {
  const db = getDb(matterName);
  
  const current = db.prepare('SELECT * FROM chronology_events WHERE id = ?').get(id) as Record<string, any> | undefined;
  if (!current) return null;

  const now = new Date().toISOString();
  
  const updatedEvent = {
    id,
    date_start: updates.dateStart !== undefined ? updates.dateStart : current.date_start,
    date_end: updates.dateEnd !== undefined ? updates.dateEnd : current.date_end,
    description: updates.description ?? current.description,
    evidence_id: updates.evidenceId !== undefined ? updates.evidenceId : current.evidence_id,
    issue_id: updates.issueId !== undefined ? updates.issueId : current.issue_id,
    status: updates.status ?? current.status,
    source_team: updates.sourceTeam ?? current.source_team,
    metadata_json: updates.metadataJson ?? current.metadata_json,
    updated_at: now,
  };

  const stmt = db.prepare(`
    UPDATE chronology_events SET 
      date_start = @date_start,
      date_end = @date_end,
      description = @description,
      evidence_id = @evidence_id,
      issue_id = @issue_id,
      status = @status,
      source_team = @source_team,
      metadata_json = @metadata_json,
      updated_at = @updated_at
    WHERE id = @id
  `);

  stmt.run(updatedEvent);

  return getChronologyEvent(matterName, id);
}

export function getChronologyEvent(matterName: string, id: string): ChronologyEvent | null {
  const db = getDb(matterName);
  const row = db.prepare('SELECT * FROM chronology_events WHERE id = ?').get(id) as Record<string, any> | undefined;
  if (!row) return null;
  return mapRowToEvent(row);
}

export function listChronologyEvents(matterName: string): ChronologyEvent[] {
  const db = getDb(matterName);
  const rows = db.prepare('SELECT * FROM chronology_events WHERE matter_name = ? ORDER BY date_start ASC').all(matterName) as Record<string, any>[];
  return rows.map(mapRowToEvent);
}

function mapRowToEvent(row: Record<string, any>): ChronologyEvent {
  return {
    id: row.id,
    matterName: row.matter_name,
    dateStart: row.date_start,
    dateEnd: row.date_end,
    description: row.description,
    evidenceId: row.evidence_id,
    issueId: row.issue_id,
    status: row.status,
    sourceTeam: row.source_team,
    metadataJson: row.metadata_json,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}
