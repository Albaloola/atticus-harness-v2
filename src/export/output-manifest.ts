import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import type { UnknownWorkProduct } from '../work-products/types.js';

export interface ReviewReadyExportedFile {
  path: string;
  role: 'work_product_markdown' | 'work_product_docx' | 'manifest' | 'review_order' | 'readiness_report' | 'unresolved_gaps_report' | 'source_map' | 'unsafe_not_ready_list';
  sha256: string;
  sizeBytes: number;
  workProductId?: string;
}

export interface ReviewReadyManifestSource {
  workProductId: string;
  title: string;
  sourceId: string;
  sourceType: string;
  description: string;
  authorityRefs: string[];
}

export interface ReviewReadyOutputManifest {
  manifestVersion: 1;
  matterName: string;
  generatedAt: string;
  runIds: string[];
  reviewOrder: string[];
  exportedWorkProductIds: string[];
  unsafeNotReadyWorkProductIds: string[];
  unresolvedGaps: Array<{ workProductId: string; title: string; gaps: string[] }>;
  sourceMap: ReviewReadyManifestSource[];
  files: ReviewReadyExportedFile[];
  warnings: string[];
}

export async function buildReviewReadyOutputManifest(input: {
  matterName: string;
  generatedAt: string;
  runIds?: string[];
  reviewOrder: UnknownWorkProduct[];
  unsafeNotReady: Array<{ product: UnknownWorkProduct; reasons: string[] }>;
  files: Array<Omit<ReviewReadyExportedFile, 'sha256' | 'sizeBytes'>>;
  warnings?: string[];
}): Promise<ReviewReadyOutputManifest> {
  const files: ReviewReadyExportedFile[] = [];
  for (const file of input.files) {
    const bytes = await readFile(file.path);
    files.push({
      ...file,
      sha256: createHash('sha256').update(bytes).digest('hex'),
      sizeBytes: bytes.length,
    });
  }

  return {
    manifestVersion: 1,
    matterName: input.matterName,
    generatedAt: input.generatedAt,
    runIds: input.runIds ?? [],
    reviewOrder: input.reviewOrder.map((product) => product.id),
    exportedWorkProductIds: input.reviewOrder.map((product) => product.id),
    unsafeNotReadyWorkProductIds: input.unsafeNotReady.map(({ product }) => product.id),
    unresolvedGaps: input.reviewOrder
      .filter((product) => product.unresolvedGaps.length > 0)
      .map((product) => ({ workProductId: product.id, title: product.title, gaps: product.unresolvedGaps })),
    sourceMap: input.reviewOrder.flatMap((product) => product.sourceBasis.map((source) => ({
      workProductId: product.id,
      title: product.title,
      sourceId: source.sourceId,
      sourceType: source.sourceType,
      description: source.description,
      authorityRefs: source.authorityRefs ?? [],
    }))),
    files,
    warnings: input.warnings ?? [],
  };
}
