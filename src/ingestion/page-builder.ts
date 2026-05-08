import type { ExtractedText } from '../extraction/types.js';
import type { EvidenceChunk } from '../domain/evidence-chunk.js';
import type { EvidencePage } from '../domain/evidence-page.js';
import type { ExtractionQualityReport } from '../domain/extraction-quality-report.js';
import type { ChunkData } from '../storage/sqlite/chunks.js';

export function buildEvidencePages(evidenceId: string, extracted: ExtractedText): EvidencePage[] {
  const pages = extracted.pages?.length
    ? extracted.pages
    : [{ pageNumber: 1, text: extracted.text, method: extracted.method, confidence: extracted.confidence }];

  return pages.map((page) => ({
    pageId: makePageId(evidenceId, page.pageNumber),
    evidenceId,
    pageNumber: page.pageNumber,
    textStatus: page.method === 'tesseract_ocr' || page.method === 'visual_ocr_pipeline' ? 'ocr' : 'native',
    ocrConfidence: page.confidence,
    metadata: {
      method: page.method,
      renderedImageHash: page.renderedImageHash,
    },
  }));
}

export function buildEvidenceChunksV2(
  evidenceId: string,
  chunks: ChunkData[],
  pages: EvidencePage[],
): EvidenceChunk[] {
  const firstPageId = pages[0]?.pageId ?? makePageId(evidenceId, 1);
  return chunks.map((chunk) => ({
    chunkId: makeChunkId(evidenceId, chunk.chunkIndex),
    evidenceId,
    pageId: firstPageId,
    chunkIndex: chunk.chunkIndex,
    content: chunk.content,
    contentHash: chunk.contentHash,
    confidence: chunk.confidence,
    metadata: {},
  }));
}

export function buildExtractionQualityReport(
  evidenceId: string,
  extracted: ExtractedText,
): ExtractionQualityReport {
  const pageCount = extracted.pageCount ?? extracted.pages?.length ?? 1;
  const textDensity = pageCount > 0 ? extracted.text.trim().length / pageCount : 0;
  const warnings: string[] = [];
  if (extracted.confidence < 0.5) warnings.push('low_confidence');
  if (textDensity < 25) warnings.push('low_text_density');

  return {
    reportId: `${evidenceId}-QC-0001`,
    evidenceId,
    status: warnings.length === 0 ? 'passed' : 'qc_hold',
    textDensity,
    averageConfidence: extracted.confidence,
    pageCount,
    warnings,
    createdAt: new Date().toISOString(),
    metadata: {
      method: extracted.method,
      sha256: extracted.sha256,
    },
  };
}

export function makePageId(evidenceId: string, pageNumber: number): string {
  return `${evidenceId}-P${String(pageNumber).padStart(4, '0')}`;
}

export function makeChunkId(evidenceId: string, chunkIndex: number): string {
  return `${evidenceId}-C${String(chunkIndex).padStart(4, '0')}`;
}
