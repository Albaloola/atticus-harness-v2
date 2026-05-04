import { appendFile, mkdir } from 'fs/promises';
import { randomUUID } from 'crypto';
import { getMatterPath } from '../storage/matter.js';
import { getStateDb } from './store.js';
import type { MatterEvent, MatterEventType } from '../types/state.js';

export interface AppendEventParams {
  matterName: string;
  type: MatterEventType;
  data?: Record<string, unknown>;
  source?: string;
}

export async function appendEvent(params: AppendEventParams): Promise<MatterEvent> {
  const { matterName, type, data = {}, source = 'operator' } = params;

  const event: MatterEvent = {
    id: randomUUID(),
    timestamp: new Date().toISOString(),
    type,
    matterName,
    data,
    source,
  };

  const db = getStateDb(matterName);
  db.prepare(
    `INSERT INTO events (id, timestamp, type, matter_name, data_json, source)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).run(event.id, event.timestamp, event.type, event.matterName, JSON.stringify(event.data), event.source);

  const stateDir = getMatterPath(matterName, '_state');
  await mkdir(stateDir, { recursive: true });

  const eventsPath = getMatterPath(matterName, '_state', 'events.jsonl');
  await appendFile(eventsPath, JSON.stringify(event) + '\n', 'utf-8');

  return event;
}

export function listEvents(matterName: string, options?: {
  tail?: number;
  type?: MatterEventType;
}): MatterEvent[] {
  const db = getStateDb(matterName);

  let sql = 'SELECT * FROM events WHERE matter_name = ?';
  const params: (string | number)[] = [matterName];

  if (options?.type) {
    sql += ' AND type = ?';
    params.push(options.type);
  }

  sql += ' ORDER BY timestamp DESC';

  if (options?.tail) {
    sql += ' LIMIT ?';
    params.push(options.tail);
  }

  const rows = db.prepare(sql).all(...params) as Array<{
    id: string;
    timestamp: string;
    type: string;
    matter_name: string;
    data_json: string;
    source: string;
  }>;

  return rows.map((row) => ({
    id: row.id,
    timestamp: row.timestamp,
    type: row.type as MatterEventType,
    matterName: row.matter_name,
    data: JSON.parse(row.data_json),
    source: row.source,
  }));
}

export function getEventCount(matterName: string): number {
  const db = getStateDb(matterName);
  const row = db.prepare(
    'SELECT COUNT(*) as c FROM events WHERE matter_name = ?'
  ).get(matterName) as { c: number };
  return row.c;
}
