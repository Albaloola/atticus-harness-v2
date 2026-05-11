import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { getMatterPath } from '../storage/matter.js';
import { READINESS_ORDER } from '../work-products/contracts.js';
import { listWorkProducts } from '../work-products/store.js';
import type { UnknownWorkProduct, WorkProductReadiness } from '../work-products/types.js';
import { validateWorkProductReadiness } from '../work-products/validators.js';
import { renderReviewReadyDocx, verifyReviewReadyDocx } from './docx-render-verify.js';
import { buildReviewReadyOutputManifest, type ReviewReadyOutputManifest, type ReviewReadyExportedFile } from './output-manifest.js';

export interface RunReviewReadyExportInput {
  matterName: string;
  generatedAt?: Date;
  runIds?: string[];
  workProducts?: UnknownWorkProduct[];
}

export interface ReviewReadyExportRejectedProduct {
  product: UnknownWorkProduct;
  reasons: string[];
}

export interface ReviewReadyExportResult {
  matterName: string;
  outputDir: string;
  generatedAt: string;
  exported: Array<{ workProductId: string; title: string; markdownPath: string; docxPath: string }>;
  unsafeNotReady: ReviewReadyExportRejectedProduct[];
  manifestPath?: string;
  manifest?: ReviewReadyOutputManifest;
  readinessReportPath: string;
  sourceMapPath?: string;
  blockers: string[];
}

const MINIMUM_EXPORT_READINESS: WorkProductReadiness = 'operator_review_ready';

export async function runReviewReadyExport(input: RunReviewReadyExportInput): Promise<ReviewReadyExportResult> {
  const generatedAt = (input.generatedAt ?? new Date()).toISOString();
  const outputDir = getMatterPath(input.matterName, '_output');
  await mkdir(outputDir, { recursive: true });

  const products = input.workProducts ?? await listWorkProducts(input.matterName);
  const assessed = products.map((product) => ({ product, reasons: exportBlockers(product) }));
  const ready = assessed
    .filter((item) => item.reasons.length === 0)
    .map((item) => item.product)
    .sort(compareReviewOrder);
  const unsafeNotReady = assessed.filter((item) => item.reasons.length > 0);

  if (ready.length === 0) {
    const readinessReportPath = join(outputDir, 'review-readiness-report.md');
    await writeFile(readinessReportPath, renderFailureReadinessReport({
      matterName: input.matterName,
      generatedAt,
      rejected: unsafeNotReady,
      sourceCount: products.length,
    }), 'utf-8');
    return {
      matterName: input.matterName,
      outputDir,
      generatedAt,
      exported: [],
      unsafeNotReady,
      readinessReportPath,
      blockers: ['No work products passed review-ready export gates.'],
    };
  }

  const files: Array<Omit<ReviewReadyExportedFile, 'sha256' | 'sizeBytes'>> = [];
  const exported: ReviewReadyExportResult['exported'] = [];
  for (const [index, product] of ready.entries()) {
    const prefix = String(index + 1).padStart(2, '0');
    const safeTitle = sanitizeFileName(product.title);
    const markdownPath = join(outputDir, `${prefix}-${safeTitle}.md`);
    const docxPath = join(outputDir, `${prefix}-${safeTitle}.docx`);
    const body = renderWorkProductMarkdown(product, generatedAt);
    await writeFile(markdownPath, body, 'utf-8');
    files.push({ path: markdownPath, role: 'work_product_markdown', workProductId: product.id });

    const docx = await renderReviewReadyDocx({
      title: product.title,
      matterName: input.matterName,
      generatedAt,
      body,
      sourceMap: sourceMapLines(product),
    });
    const docxCheck = await verifyReviewReadyDocx(docx);
    if (!docxCheck.valid) {
      throw new Error(`DOCX render verification failed for ${product.id}: ${docxCheck.errors.join('; ')}`);
    }
    await writeFile(docxPath, docx);
    files.push({ path: docxPath, role: 'work_product_docx', workProductId: product.id });
    exported.push({ workProductId: product.id, title: product.title, markdownPath, docxPath });
  }

  const reviewOrderPath = join(outputDir, 'review-order.md');
  const readinessReportPath = join(outputDir, 'readiness-report.md');
  const gapsPath = join(outputDir, 'unresolved-gaps.md');
  const sourceMapPath = join(outputDir, 'source-map.md');
  const unsafePath = join(outputDir, 'unsafe-not-ready.md');
  const manifestPath = join(outputDir, 'manifest.json');

  await writeFile(reviewOrderPath, renderReviewOrder(ready), 'utf-8');
  await writeFile(readinessReportPath, renderReadinessReport(input.matterName, generatedAt, ready, unsafeNotReady), 'utf-8');
  await writeFile(gapsPath, renderUnresolvedGaps(ready), 'utf-8');
  await writeFile(sourceMapPath, renderSourceMap(ready), 'utf-8');
  await writeFile(unsafePath, renderUnsafeNotReady(unsafeNotReady), 'utf-8');

  files.push(
    { path: reviewOrderPath, role: 'review_order' },
    { path: readinessReportPath, role: 'readiness_report' },
    { path: gapsPath, role: 'unresolved_gaps_report' },
    { path: sourceMapPath, role: 'source_map' },
    { path: unsafePath, role: 'unsafe_not_ready_list' },
  );

  const manifest = await buildReviewReadyOutputManifest({
    matterName: input.matterName,
    generatedAt,
    runIds: input.runIds,
    reviewOrder: ready,
    unsafeNotReady,
    files,
    warnings: unsafeNotReady.map(({ product }) => `${product.id} was not exported.`),
  });
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');

  const manifestWithSelf = await buildReviewReadyOutputManifest({
    matterName: input.matterName,
    generatedAt,
    runIds: input.runIds,
    reviewOrder: ready,
    unsafeNotReady,
    files: [...files, { path: manifestPath, role: 'manifest' }],
    warnings: manifest.warnings,
  });
  await writeFile(manifestPath, JSON.stringify(manifestWithSelf, null, 2), 'utf-8');

  return {
    matterName: input.matterName,
    outputDir,
    generatedAt,
    exported,
    unsafeNotReady,
    manifestPath,
    manifest: manifestWithSelf,
    readinessReportPath,
    sourceMapPath,
    blockers: [],
  };
}

export function exportBlockers(product: UnknownWorkProduct): string[] {
  const reasons: string[] = [];
  if (!isAtLeastReadiness(product.readiness, MINIMUM_EXPORT_READINESS)) {
    reasons.push(`Readiness is ${product.readiness}; requires at least ${MINIMUM_EXPORT_READINESS}.`);
  }
  if (product.safetyStatus !== 'safe') {
    reasons.push('Safety status is unsafe.');
  }
  if (looksLikeGarbage(product.content)) {
    reasons.push('Content looks like JSON scaffolding, a transcript dump, or a fallback fragment.');
  }

  const validationReadiness = product.readiness === 'operator_review_ready_with_critical_gap'
    ? 'operator_review_ready_with_critical_gap'
    : MINIMUM_EXPORT_READINESS;
  const report = validateWorkProductReadiness(product, validationReadiness);
  for (const error of report.errors) {
    reasons.push(`${error.code}: ${error.message}`);
  }
  return [...new Set(reasons)];
}

function isAtLeastReadiness(actual: WorkProductReadiness, minimum: WorkProductReadiness): boolean {
  return READINESS_ORDER.indexOf(actual) >= READINESS_ORDER.indexOf(minimum);
}

function compareReviewOrder(a: UnknownWorkProduct, b: UnknownWorkProduct): number {
  const typeOrder = reviewRank(a.type) - reviewRank(b.type);
  if (typeOrder !== 0) return typeOrder;
  return a.title.localeCompare(b.title) || a.id.localeCompare(b.id);
}

function reviewRank(type: UnknownWorkProduct['type']): number {
  switch (type) {
    case 'intake_summary':
      return 1;
    case 'chronology':
      return 2;
    case 'evidence_matrix':
      return 3;
    case 'legal_research_memo':
    case 'procedural_route_memo':
      return 4;
    case 'merits_opinion':
    case 'case_theory':
      return 5;
    case 'draft_pleading':
    case 'draft_complaint':
      return 6;
    case 'draft_letter':
    case 'draft_email':
      return 7;
    default:
      return 9;
  }
}

function renderWorkProductMarkdown(product: UnknownWorkProduct, generatedAt: string): string {
  return [
    `# ${product.title}`,
    '',
    `Matter: ${product.matterName}`,
    `Work product ID: ${product.id}`,
    `Type: ${product.type}`,
    `Readiness: ${product.readiness}`,
    `Generated: ${generatedAt}`,
    '',
    '## Purpose',
    product.purpose,
    '',
    '## Audience',
    product.audience,
    '',
    '## Body',
    product.content.trim(),
    '',
    '## Unresolved Gaps',
    product.unresolvedGaps.length ? product.unresolvedGaps.map((gap) => `- ${gap}`).join('\n') : 'None recorded.',
    '',
    '## Citation and Source Map',
    sourceMapLines(product).join('\n'),
    '',
  ].join('\n');
}

function renderReviewOrder(products: UnknownWorkProduct[]): string {
  return ['# Review Order', '', ...products.map((product, index) => `${index + 1}. ${product.title} (${product.id}) - ${product.type}`), ''].join('\n');
}

function renderReadinessReport(
  matterName: string,
  generatedAt: string,
  ready: UnknownWorkProduct[],
  rejected: ReviewReadyExportRejectedProduct[],
): string {
  return [
    `# Review-Ready Export Readiness Report`,
    '',
    `Matter: ${matterName}`,
    `Generated: ${generatedAt}`,
    `Exported work products: ${ready.length}`,
    `Not-ready work products: ${rejected.length}`,
    '',
    '## Exported',
    ready.length ? ready.map((product) => `- ${product.id}: ${product.title} (${product.readiness})`).join('\n') : 'None.',
    '',
    '## Not Exported',
    renderUnsafeNotReady(rejected).replace(/^# Unsafe or Not Ready\n\n/, ''),
  ].join('\n');
}

function renderFailureReadinessReport(input: {
  matterName: string;
  generatedAt: string;
  sourceCount: number;
  rejected: ReviewReadyExportRejectedProduct[];
}): string {
  return [
    '# Review-Ready Export Failed',
    '',
    `Matter: ${input.matterName}`,
    `Generated: ${input.generatedAt}`,
    `Assessed work products: ${input.sourceCount}`,
    '',
    'No review-ready documents were exported. The harness did not create fake documents or promote fallback fragments.',
    '',
    '## Reasons',
    input.rejected.length ? renderUnsafeNotReady(input.rejected).replace(/^# Unsafe or Not Ready\n\n/, '') : '- No typed work products were available for export.',
    '',
  ].join('\n');
}

function renderUnresolvedGaps(products: UnknownWorkProduct[]): string {
  const lines = ['# Unresolved Gaps', ''];
  for (const product of products) {
    lines.push(`## ${product.title} (${product.id})`);
    lines.push(product.unresolvedGaps.length ? product.unresolvedGaps.map((gap) => `- ${gap}`).join('\n') : 'None recorded.');
    lines.push('');
  }
  return lines.join('\n');
}

function renderSourceMap(products: UnknownWorkProduct[]): string {
  return ['# Citation and Source Map', '', ...products.flatMap((product) => [`## ${product.title} (${product.id})`, ...sourceMapLines(product), ''])].join('\n');
}

function renderUnsafeNotReady(rejected: ReviewReadyExportRejectedProduct[]): string {
  if (rejected.length === 0) return '# Unsafe or Not Ready\n\nNone.\n';
  return [
    '# Unsafe or Not Ready',
    '',
    ...rejected.flatMap(({ product, reasons }) => [
      `## ${product.title} (${product.id})`,
      ...reasons.map((reason) => `- ${reason}`),
      '',
    ]),
  ].join('\n');
}

function sourceMapLines(product: UnknownWorkProduct): string[] {
  if (product.sourceBasis.length === 0) return ['- No source basis recorded.'];
  return product.sourceBasis.map((source) => {
    const authorities = source.authorityRefs?.length ? ` Authorities: ${source.authorityRefs.join(', ')}.` : '';
    return `- ${source.sourceType}:${source.sourceId} - ${source.description}.${authorities}`;
  });
}

function looksLikeGarbage(content: string): boolean {
  const trimmed = content.trim();
  return trimmed.length < 120
    || /^[{[]/.test(trimmed)
    || /"(content|payload|metadata|messages|toolCalls|role)"\s*:/.test(trimmed)
    || /^```(?:json)?\s*[{[]/i.test(trimmed)
    || /\b(raw candidate|candidate wrapper|transcript dump|tool_call|assistant:|system:)\b/i.test(trimmed);
}

function sanitizeFileName(title: string): string {
  const sanitized = title
    .replace(/[_-]+/g, ' ')
    .replace(/[^a-zA-Z0-9 ]+/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
  return sanitized || 'review-ready-work-product';
}
