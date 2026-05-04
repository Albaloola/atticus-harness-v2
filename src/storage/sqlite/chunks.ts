import { createHash } from 'node:crypto';
import type Database from 'better-sqlite3';
import { getDb } from './index.js';

const CHUNK_TARGET_CHARS = 4000;  // ~1000 tokens
const CHUNK_MAX_CHARS = 5200;

export interface ChunkData {
  evidenceId: string;
  chunkIndex: number;
  content: string;
  contentHash: string;
  confidence: number;
}

export function insertChunks(db: Database.Database, chunks: ChunkData[]): void {
  const stmt = db.prepare(`
    INSERT INTO extraction_chunks (evidence_id, chunk_index, content, content_hash, confidence)
    VALUES (?, ?, ?, ?, ?)
  `);

  const insertMany = db.transaction((items: ChunkData[]) => {
    for (const chunk of items) {
      stmt.run(chunk.evidenceId, chunk.chunkIndex, chunk.content, chunk.contentHash, chunk.confidence);
    }
  });

  insertMany(chunks);
}

export function chunkText(evidenceId: string, text: string, confidence: number): ChunkData[] {
  const paragraphs = text.split('\n\n');
  const chunks: ChunkData[] = [];
  let currentChunk = '';
  let chunkIndex = 0;

  for (const para of paragraphs) {
    const trimmed = para.trim();
    if (!trimmed) continue;

    // If adding this paragraph would exceed max, flush current chunk
    if (currentChunk.length + trimmed.length + 2 > CHUNK_MAX_CHARS && currentChunk.length > 0) {
      chunks.push(createChunk(evidenceId, chunkIndex++, currentChunk.trim(), confidence));
      currentChunk = '';
    }

    // If a single paragraph exceeds max, split at word boundaries
    if (trimmed.length > CHUNK_MAX_CHARS) {
      if (currentChunk.length > 0) {
        chunks.push(createChunk(evidenceId, chunkIndex++, currentChunk.trim(), confidence));
        currentChunk = '';
      }
      // Split long paragraph
      const words = trimmed.split(' ');
      let partial = '';
      for (const word of words) {
        if (partial.length + word.length + 1 > CHUNK_TARGET_CHARS) {
          chunks.push(createChunk(evidenceId, chunkIndex++, partial.trim(), confidence));
          partial = word;
        } else {
          partial += (partial ? ' ' : '') + word;
        }
      }
      if (partial.length > 0) {
        // Start new chunk accumulation rather than immediate flush
        currentChunk = partial;
      }
    } else {
      currentChunk += (currentChunk ? '\n\n' : '') + trimmed;
    }
  }

  // Flush remaining
  if (currentChunk.trim().length > 0) {
    chunks.push(createChunk(evidenceId, chunkIndex, currentChunk.trim(), confidence));
  }

  return chunks;
}

function createChunk(evidenceId: string, chunkIndex: number, content: string, confidence: number): ChunkData {
  const hash = createHash('sha256');
  hash.update(`${evidenceId}:${chunkIndex}:${content}`);
  return {
    evidenceId,
    chunkIndex,
    content,
    contentHash: hash.digest('hex'),
    confidence,
  };
}
