import { getStateDb } from '../state/store.js';

export interface SourceRecord {
  id: number;
  matter_name: string;
  url: string | null;
  title: string | null;
  fetched_at: string;
  sha256: string | null;
  source_type: string;
  jurisdiction: string | null;
  snapshot_path: string | null;
  text_path: string | null;
  metadata_json: string;
}

export interface InsertSourceParams {
  matterName: string;
  url?: string;
  title?: string;
  sha256?: string;
  sourceType?: string;
  jurisdiction?: string;
  snapshotPath?: string;
  textPath?: string;
  metadata?: Record<string, unknown>;
}

export function insertSource(params: InsertSourceParams): SourceRecord {
  const db = getStateDb(params.matterName);
  const fetchedAt = new Date().toISOString();

  const result = db
    .prepare(
      `INSERT INTO sources (matter_name, url, title, fetched_at, sha256, source_type, jurisdiction, snapshot_path, text_path, metadata_json)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      params.matterName,
      params.url ?? null,
      params.title ?? null,
      fetchedAt,
      params.sha256 ?? null,
      params.sourceType ?? 'other',
      params.jurisdiction ?? null,
      params.snapshotPath ?? null,
      params.textPath ?? null,
      JSON.stringify(params.metadata ?? {}),
    );

  const row = db
    .prepare('SELECT * FROM sources WHERE id = ?')
    .get(result.lastInsertRowid) as Record<string, unknown>;

  return {
    id: row.id as number,
    matter_name: row.matter_name as string,
    url: row.url as string | null,
    title: row.title as string | null,
    fetched_at: row.fetched_at as string,
    sha256: row.sha256 as string | null,
    source_type: row.source_type as string,
    jurisdiction: row.jurisdiction as string | null,
    snapshot_path: row.snapshot_path as string | null,
    text_path: row.text_path as string | null,
    metadata_json: row.metadata_json as string,
  };
}

export function getSourceById(matterName: string, sourceId: number): SourceRecord | null {
  const db = getStateDb(matterName);
  const row = db
    .prepare('SELECT * FROM sources WHERE id = ?')
    .get(sourceId) as Record<string, unknown> | undefined;

  if (!row) return null;

  return {
    id: row.id as number,
    matter_name: row.matter_name as string,
    url: row.url as string | null,
    title: row.title as string | null,
    fetched_at: row.fetched_at as string,
    sha256: row.sha256 as string | null,
    source_type: row.source_type as string,
    jurisdiction: row.jurisdiction as string | null,
    snapshot_path: row.snapshot_path as string | null,
    text_path: row.text_path as string | null,
    metadata_json: row.metadata_json as string,
  };
}

export interface ListSourcesOptions {
  sourceType?: string;
  jurisdiction?: string;
  limit?: number;
  offset?: number;
}

export function listSources(matterName: string, options?: ListSourcesOptions): SourceRecord[] {
  const db = getStateDb(matterName);

  let sql = 'SELECT * FROM sources WHERE matter_name = ?';
  const params: (string | number)[] = [matterName];

  if (options?.sourceType) {
    sql += ' AND source_type = ?';
    params.push(options.sourceType);
  }

  if (options?.jurisdiction) {
    sql += ' AND jurisdiction = ?';
    params.push(options.jurisdiction);
  }

  sql += ' ORDER BY fetched_at DESC, id DESC';

  if (options?.limit !== undefined) {
    sql += ' LIMIT ?';
    params.push(options.limit);
    if (options?.offset !== undefined) {
      sql += ' OFFSET ?';
      params.push(options.offset);
    }
  }

  const rows = db.prepare(sql).all(...params) as Record<string, unknown>[];

  return rows.map((row) => ({
    id: row.id as number,
    matter_name: row.matter_name as string,
    url: row.url as string | null,
    title: row.title as string | null,
    fetched_at: row.fetched_at as string,
    sha256: row.sha256 as string | null,
    source_type: row.source_type as string,
    jurisdiction: row.jurisdiction as string | null,
    snapshot_path: row.snapshot_path as string | null,
    text_path: row.text_path as string | null,
    metadata_json: row.metadata_json as string,
  }));
}

export async function getSourceText(source: SourceRecord): Promise<string> {
  if (!source.text_path) {
    throw new Error(`No text path for source ${source.id}`);
  }
  const { readFile } = await import('fs/promises');
  return readFile(source.text_path, 'utf-8');
}

export function verifyQuote(text: string, quote: string): boolean {
  const normalizedText = text
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .trim();

  const normalizedQuote = quote
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .trim();

  return normalizedText.includes(normalizedQuote);
}
