import { getStateDb } from './store.js';

export function setRuntimeValue(
  matterName: string,
  key: string,
  value: unknown,
): void {
  const db = getStateDb(matterName);
  db.prepare(
    `INSERT INTO runtime_kv (matter_name, key, value_json, updated_at)
     VALUES (?, ?, ?, ?)
     ON CONFLICT(matter_name, key)
     DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at`
  ).run(matterName, key, JSON.stringify(value), new Date().toISOString());
}

export function getRuntimeValue<T = unknown>(
  matterName: string,
  key: string,
): T | null {
  const db = getStateDb(matterName);
  const row = db.prepare(
    'SELECT value_json FROM runtime_kv WHERE matter_name = ? AND key = ?'
  ).get(matterName, key) as { value_json: string } | undefined;

  if (!row) return null;
  return JSON.parse(row.value_json) as T;
}

export function deleteRuntimeValue(matterName: string, key: string): boolean {
  const db = getStateDb(matterName);
  const result = db.prepare(
    'DELETE FROM runtime_kv WHERE matter_name = ? AND key = ?'
  ).run(matterName, key);
  return result.changes > 0;
}
