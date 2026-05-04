import { existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import Database = require('better-sqlite3');
import { getMatterPath } from '../storage/matter.js';
import { initSchema } from './schema.js';

const storeCache = new Map<string, Database.Database>();

export function getStateDb(matterName: string): Database.Database {
  let db = storeCache.get(matterName);
  if (!db) {
    const dbPath = getMatterPath(matterName, '_state', 'matter.sqlite');
    mkdirSync(dirname(dbPath), { recursive: true });
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
    initSchema(db);
    storeCache.set(matterName, db);
  }
  return db;
}

export function closeStateDb(matterName: string): void {
  const db = storeCache.get(matterName);
  if (db) {
    db.close();
    storeCache.delete(matterName);
  }
}

export function closeAllStateDbs(): void {
  for (const [, db] of storeCache) {
    db.close();
  }
  storeCache.clear();
}

export function stateDbExists(matterName: string): boolean {
  if (storeCache.has(matterName)) return true;
  return existsSync(getMatterPath(matterName, '_state', 'matter.sqlite'));
}
