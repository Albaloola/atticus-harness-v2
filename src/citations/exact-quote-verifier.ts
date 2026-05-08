import { hashText } from '../extraction/hash.js';
import { getDb } from '../storage/sqlite/index.js';
import type { CitationCheck } from '../types/citation.js';
import { isSearchableEvidenceStatus } from '../workflows/ingestion-workflow.js';
import type { EvidenceStatus } from '../types/evidence.js';

export interface ExactQuoteVerificationInput {
  matterName: string;
  evidenceId: string;
  pageId: string;
  chunkId: string;
  quote: string;
  sourceHash?: string;
  findingId?: string;
  citationId?: string;
}

interface ChunkSourceRow {
  evidence_status: EvidenceStatus;
  page_id: string;
  chunk_id: string;
  content: string;
  content_hash: string;
}

export function verifyExactQuote(input: ExactQuoteVerificationInput): CitationCheck {
  const quote = input.quote.trim();
  const quoteHash = hashText(quote);
  const checkedAt = new Date().toISOString();
  const citationId = input.citationId ?? `${input.evidenceId}:${input.pageId}:${input.chunkId}:${quoteHash.slice(0, 12)}`;
  const findingId = input.findingId ?? citationId;
  const source = getChunkSource(input);

  if (!source) {
    return makeCheck(input, {
      findingId,
      citationId,
      status: 'unsupported',
      quote,
      quoteHash,
      checkedAt,
      confidence: 0,
      details: 'Evidence page/chunk source was not found',
    });
  }

  if (!isSearchableEvidenceStatus(source.evidence_status)) {
    return makeCheck(input, {
      findingId,
      citationId,
      status: 'not_checked',
      quote,
      quoteHash,
      sourceHash: source.content_hash,
      checkedAt,
      confidence: 0,
      details: `Evidence status "${source.evidence_status}" is not approved for citation`,
    });
  }

  if (input.sourceHash && input.sourceHash !== source.content_hash) {
    return makeCheck(input, {
      findingId,
      citationId,
      status: 'unsupported',
      quote,
      quoteHash,
      sourceHash: source.content_hash,
      checkedAt,
      confidence: 0,
      details: 'Citation source hash does not match the current evidence chunk',
    });
  }

  const exactRawMatch = quote.length > 0 && source.content.includes(quote);
  const exactWhitespaceMatch = quote.length > 0 && normalizeWhitespace(source.content).includes(normalizeWhitespace(quote));
  if (!exactRawMatch && !exactWhitespaceMatch) {
    return makeCheck(input, {
      findingId,
      citationId,
      status: 'unsupported',
      quote,
      quoteHash,
      sourceHash: source.content_hash,
      checkedAt,
      confidence: 0,
      details: 'Quoted text was not found inside the cited evidence chunk',
    });
  }

  return {
    findingId,
    citationId,
    evidenceId: input.evidenceId,
    pageId: input.pageId,
    chunkId: input.chunkId,
    quote,
    quoteHash,
    sourceHash: source.content_hash,
    exact: true,
    status: 'supported',
    confidence: exactRawMatch ? 1 : 0.98,
    details: exactRawMatch
      ? 'Exact quote found in cited evidence chunk'
      : 'Whitespace-normalized exact quote found in cited evidence chunk',
    checkedAt,
  };
}

function getChunkSource(input: ExactQuoteVerificationInput): ChunkSourceRow | undefined {
  const db = getDb(input.matterName);
  return db.prepare(`
    SELECT
      item.status as evidence_status,
      page.page_id,
      chunk.chunk_id,
      chunk.content,
      chunk.content_hash
    FROM evidence_items_v2 item
    JOIN evidence_pages page
      ON page.evidence_id = item.evidence_id
    JOIN evidence_chunks_v2 chunk
      ON chunk.evidence_id = item.evidence_id
     AND chunk.page_id = page.page_id
    WHERE item.evidence_id = ?
      AND page.page_id = ?
      AND chunk.chunk_id = ?
  `).get(input.evidenceId, input.pageId, input.chunkId) as ChunkSourceRow | undefined;
}

function makeCheck(
  input: ExactQuoteVerificationInput,
  fields: {
    findingId: string;
    citationId: string;
    status: 'unsupported' | 'not_checked';
    quote: string;
    quoteHash: string;
    sourceHash?: string;
    checkedAt: string;
    confidence: number;
    details: string;
  },
): CitationCheck {
  return {
    findingId: fields.findingId,
    citationId: fields.citationId,
    evidenceId: input.evidenceId,
    pageId: input.pageId,
    chunkId: input.chunkId,
    quote: fields.quote,
    quoteHash: fields.quoteHash,
    sourceHash: fields.sourceHash,
    exact: false,
    status: fields.status,
    confidence: fields.confidence,
    details: fields.details,
    checkedAt: fields.checkedAt,
  };
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}
