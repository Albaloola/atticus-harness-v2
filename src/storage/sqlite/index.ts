import Database from 'better-sqlite3';
import { join } from 'path';
import { getMatterPath } from '../matter.js';
import { createTables } from './schema.js';
import type { EvidenceRecord } from '../../types/evidence.js';
import type { FtsMatch } from '../../types/search.js';

// Cache open databases by matter name (singleton per process)
const dbCache = new Map<string, Database.Database>();

export function getDb(matterName: string): Database.Database {
  let db = dbCache.get(matterName);
  if (!db) {
    const dbPath = getMatterPath(matterName, '_evidence.db');
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
    createTables(db);
    dbCache.set(matterName, db);
  }
  return db;
}

export function closeDb(matterName: string): void {
  const db = dbCache.get(matterName);
  if (db) {
    db.close();
    dbCache.delete(matterName);
  }
}

export function closeAllDbs(): void {
  for (const [name, db] of dbCache) {
    db.close();
  }
  dbCache.clear();
}
