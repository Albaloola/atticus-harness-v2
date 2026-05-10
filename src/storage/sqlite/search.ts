import { getDb } from './index.js';
import type { FtsMatch, SearchResult } from '../../types/search.js';

export interface SearchOptions {
  topK?: number;
}

export function searchEvidence(matterName: string, query: string, options?: SearchOptions): SearchResult[] {
  const db = getDb(matterName);
  const topK = options?.topK ?? 10;

  // Sanitize FTS5 query syntax
  const sanitized = sanitizeFtsQuery(query);
  if (!sanitized) return [];

  try {
    const rows = db.prepare(`
      SELECT
        e.id as evidence_id,
        e.original_path,
        e.sha256,
        snippet(evidence_fts, 0, '<<', '>>', '...', 48) as snippet,
        ec.chunk_index,
        rank
      FROM evidence_fts
      JOIN extraction_chunks ec ON evidence_fts.rowid = ec.id
      JOIN evidence e ON ec.evidence_id = e.id
      WHERE evidence_fts MATCH ?
        AND e.status IN ('extracted', 'indexed', 'approved')
      ORDER BY rank
      LIMIT ?
    `).all(sanitized, topK) as Record<string, unknown>[];

    const results = rows.map(row => ({
      evidenceId: row.evidence_id as string,
      originalPath: row.original_path as string,
      sha256: row.sha256 as string,
      snippet: row.snippet as string,
      score: 1.0 / (1.0 + (row.rank as number)), // Convert rank to score (higher is better)
      chunkIndex: row.chunk_index as number | undefined,
    }));
    return results.length > 0 ? results : filenameFallbackSearch(matterName, query, topK);
  } catch {
    // If FTS5 query fails (bad syntax), fall back to LIKE search
    const results = fallbackSearch(matterName, query, topK);
    return results.length > 0 ? results : filenameFallbackSearch(matterName, query, topK);
  }
}

export function searchEvidenceByTerm(matterName: string, term: string, topK?: number): SearchResult[] {
  return searchEvidence(matterName, `"${term}"`, { topK });
}

function sanitizeFtsQuery(query: string): string {
  // Escape special FTS5 characters but keep quotes and prefix operators
  return query
    .replace(/[^\w\s"*-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function fallbackSearch(matterName: string, query: string, topK: number): SearchResult[] {
  const db = getDb(matterName);
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
  if (terms.length === 0) return [];

  // Simple LIKE-based fallback
  const likeConditions = terms.map(() => 'LOWER(ec.content) LIKE ?').join(' AND ');

  const rows = db.prepare(`
    SELECT e.id as evidence_id, e.original_path, e.sha256, ec.chunk_index,
           SUBSTR(ec.content, 1, 200) as snippet
    FROM extraction_chunks ec
    JOIN evidence e ON ec.evidence_id = e.id
    WHERE e.status IN ('extracted', 'indexed', 'approved')
      AND ${likeConditions}
    LIMIT ?
  `).all(...terms.map(t => `%${t}%`), topK) as Record<string, unknown>[];

  return rows.map(row => ({
    evidenceId: row.evidence_id as string,
    originalPath: row.original_path as string,
    sha256: row.sha256 as string,
    snippet: row.snippet as string,
    score: 0.5,
    chunkIndex: row.chunk_index as number | undefined,
  }));
}

function filenameFallbackSearch(matterName: string, query: string, topK: number): SearchResult[] {
  const db = getDb(matterName);
  const terms = query.toLowerCase().split(/\s+/).filter((term) => term.length >= 3);
  if (terms.length === 0) return [];
  const likeConditions = terms.map(() => 'LOWER(search_text) LIKE ?').join(' OR ');
  const params = terms.map((term) => `%${term}%`);

  try {
    const rows = db.prepare(`
      SELECT evidence_id, original_path, sha256, original_filename, canonical_filename, status
      FROM (
        SELECT
          evidence_id,
          original_path,
          sha256,
          original_filename,
          canonical_filename,
          status,
          COALESCE(original_filename, '') || ' ' || COALESCE(canonical_filename, '') || ' ' || COALESCE(original_path, '') AS search_text
        FROM evidence_items_v2
        WHERE matter_name = ?
        UNION ALL
        SELECT
          id AS evidence_id,
          original_path,
          sha256,
          NULL AS original_filename,
          NULL AS canonical_filename,
          status,
          original_path AS search_text
        FROM evidence
        WHERE matter_name = ?
          AND NOT EXISTS (SELECT 1 FROM evidence_items_v2 v2 WHERE v2.evidence_id = evidence.id)
      )
      WHERE status IN ('registered', 'copied_unindexed', 'extracted', 'indexed', 'approved')
        AND (${likeConditions})
      ORDER BY evidence_id
      LIMIT ?
    `).all(matterName, matterName, ...params, topK) as Record<string, unknown>[];

    return rows.map((row) => {
      const filename = String(row.original_filename ?? row.canonical_filename ?? row.original_path ?? '');
      return {
        evidenceId: row.evidence_id as string,
        originalPath: row.original_path as string,
        sha256: row.sha256 as string,
        snippet: `Filename/manifest match: ${filename}. Text chunks did not match; read with evidence_chunk_read if chunks exist, or inspect the manifest path.`,
        score: 0.25,
        chunkIndex: 0,
      };
    });
  } catch {
    return [];
  }
}

export type { FtsMatch, SearchResult };
