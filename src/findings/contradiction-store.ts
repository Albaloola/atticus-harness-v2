import { randomUUID } from 'crypto';
import { appendEvent } from '../state/events.js';
import { getStateDb } from '../state/store.js';
import type { Contradiction, ContradictionStatus } from '../domain/contradiction.js';

export interface CreateContradictionInput {
  id?: string;
  matterName: string;
  findingIdA: string;
  findingIdB: string;
  severity?: Contradiction['severity'];
  rationale: string;
  metadata?: Record<string, unknown>;
}

export async function createContradiction(input: CreateContradictionInput): Promise<Contradiction> {
  const contradiction: Contradiction = {
    contradictionId: input.id ?? randomUUID(),
    matterName: input.matterName,
    findingIdA: input.findingIdA,
    findingIdB: input.findingIdB,
    status: 'open',
    severity: input.severity ?? 'medium',
    rationale: input.rationale,
    createdAt: new Date().toISOString(),
    metadata: input.metadata ?? {},
  };

  getStateDb(input.matterName).prepare(`
    INSERT INTO contradictions (
      id, matter_name, finding_id_a, finding_id_b, status, severity,
      rationale, created_at, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    contradiction.contradictionId,
    contradiction.matterName,
    contradiction.findingIdA,
    contradiction.findingIdB,
    contradiction.status,
    contradiction.severity,
    contradiction.rationale,
    contradiction.createdAt,
    JSON.stringify(contradiction.metadata),
  );

  await appendEvent({
    matterName: input.matterName,
    type: 'contradiction.created',
    data: { contradictionId: contradiction.contradictionId, findingIdA: input.findingIdA, findingIdB: input.findingIdB },
    source: 'contradiction-store',
  });

  return contradiction;
}

export function listContradictions(matterName: string, options?: {
  status?: ContradictionStatus;
  findingId?: string;
}): Contradiction[] {
  let sql = 'SELECT * FROM contradictions WHERE matter_name = ?';
  const params: string[] = [matterName];
  if (options?.status) {
    sql += ' AND status = ?';
    params.push(options.status);
  }
  if (options?.findingId) {
    sql += ' AND (finding_id_a = ? OR finding_id_b = ?)';
    params.push(options.findingId, options.findingId);
  }
  sql += ' ORDER BY created_at DESC';
  const rows = getStateDb(matterName).prepare(sql).all(...params) as ContradictionRow[];
  return rows.map(rowToContradiction);
}

export function setContradictionStatus(
  matterName: string,
  contradictionId: string,
  status: ContradictionStatus,
  metadataPatch?: Record<string, unknown>,
): Contradiction {
  const existing = getContradiction(matterName, contradictionId);
  if (!existing) {
    throw new Error(`Contradiction "${contradictionId}" was not found`);
  }
  const metadata = { ...existing.metadata, ...(metadataPatch ?? {}) };
  getStateDb(matterName).prepare(`
    UPDATE contradictions
    SET status = ?, metadata_json = ?
    WHERE matter_name = ? AND id = ?
  `).run(status, JSON.stringify(metadata), matterName, contradictionId);
  return { ...existing, status, metadata };
}

export function getContradiction(matterName: string, contradictionId: string): Contradiction | undefined {
  const row = getStateDb(matterName)
    .prepare('SELECT * FROM contradictions WHERE matter_name = ? AND id = ?')
    .get(matterName, contradictionId) as ContradictionRow | undefined;
  return row ? rowToContradiction(row) : undefined;
}

interface ContradictionRow {
  id: string;
  matter_name: string;
  finding_id_a: string;
  finding_id_b: string;
  status: ContradictionStatus;
  severity: Contradiction['severity'];
  rationale: string;
  created_at: string;
  metadata_json: string;
}

function rowToContradiction(row: ContradictionRow): Contradiction {
  return {
    contradictionId: row.id,
    matterName: row.matter_name,
    findingIdA: row.finding_id_a,
    findingIdB: row.finding_id_b,
    status: row.status,
    severity: row.severity,
    rationale: row.rationale,
    createdAt: row.created_at,
    metadata: JSON.parse(row.metadata_json || '{}'),
  };
}
