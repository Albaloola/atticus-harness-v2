import { basename } from 'path';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { getDb } from '../storage/sqlite/index.js';

export type MatterInventoryView = 'manifest' | 'production_candidates' | 'schema_guide';

export interface MatterInventoryArgs {
  matterName?: string;
  view?: MatterInventoryView;
  includeDuplicates?: boolean;
  limit?: number;
}

export type DocumentRole =
  | 'holding'
  | 'press_summary'
  | 'statement_of_facts_issues'
  | 'case_written_argument'
  | 'party_written_case'
  | 'scottish_constitutional_position'
  | 'public_authority_position'
  | 'intervener_written_case'
  | 'background_record';

export interface EvidenceInventoryItem {
  evidenceId: string;
  originalFilename: string;
  canonicalFilename?: string;
  originalPath: string;
  internalPath: string;
  sourceType: string;
  mimeType: string;
  format: string;
  status: string;
  ingestedAt: string;
  sizeBytes: number;
  sourceUrl?: string;
  legacyChunkCount: number;
  v2ChunkCount: number;
  chunkCount: number;
  quality?: {
    status: string;
    textDensity: number;
    averageConfidence: number;
    pageCount: number;
    warnings: string[];
  };
  documentRole: DocumentRole;
  sourceVariant: string;
  duplicateGroupKey: string;
  productionRank: number;
  recommendedForProduction: boolean;
  productionReason: string;
  readHint: string;
}

export interface DuplicateGroup {
  groupKey: string;
  selectedEvidenceId: string;
  members: Array<{
    evidenceId: string;
    originalFilename: string;
    documentRole: DocumentRole;
    sourceVariant: string;
    productionRank: number;
  }>;
}

export interface MatterInventoryResult {
  matterName: string;
  view: MatterInventoryView;
  totalEvidence: number;
  returnedEvidence: number;
  items: EvidenceInventoryItem[];
  productionCandidates: EvidenceInventoryItem[];
  duplicateGroups: DuplicateGroup[];
  schemaGuide: {
    canonicalTables: string[];
    notes: string[];
    exampleQueries: string[];
  };
}

interface RawEvidenceRow {
  evidence_id?: string;
  id?: string;
  matter_name: string;
  original_filename?: string | null;
  canonical_filename?: string | null;
  original_path: string;
  internal_path: string;
  source_type?: string | null;
  mime_type?: string | null;
  format: string;
  status: string;
  ingested_at?: string;
  ingested?: string;
  size_bytes?: number | null;
  metadata_json?: string | null;
}

interface QualityRow {
  evidence_id: string;
  status: string;
  text_density: number;
  average_confidence: number;
  page_count: number;
  warnings_json: string | null;
}

export class MatterInventoryTool implements Tool<MatterInventoryArgs, MatterInventoryResult> {
  readonly name = 'matter_inventory';
  readonly description = [
    'Read the current matter evidence inventory without guessing SQLite table names.',
    'Use this before exec_sqlite when selecting productions, building bundle indexes, or checking manifest/schema shape.',
  ].join(' ');

  readonly inputSchema = {
    type: 'object',
    properties: {
      matterName: { type: 'string', description: 'Optional matter name; must match the current matter context when provided' },
      view: {
        type: 'string',
        enum: ['manifest', 'production_candidates', 'schema_guide'],
        description: 'manifest lists evidence; production_candidates returns duplicate-suppressed productions; schema_guide returns canonical SQLite guidance',
      },
      includeDuplicates: {
        type: 'boolean',
        description: 'For production_candidates, include duplicate judgment/summary variants instead of suppressing them',
      },
      limit: { type: 'number', description: 'Maximum inventory or candidate rows to return, default 50, max 200' },
    },
  };

  async call(args: MatterInventoryArgs, context: ToolUseContext): Promise<ToolResult<MatterInventoryResult>> {
    const matterName = context.matterName;
    if (!matterName) {
      return { success: false, error: 'No matter context available' };
    }
    if (args.matterName && args.matterName !== matterName) {
      return { success: false, error: `Matter context mismatch: current matter is "${matterName}", requested "${args.matterName}"` };
    }

    const view = args.view ?? 'manifest';
    const limit = normalizeLimit(args.limit);
    const includeDuplicates = args.includeDuplicates ?? false;
    const db = getDb(matterName);
    const items = buildInventory(matterName, db);
    const duplicateGroups = buildDuplicateGroups(items);
    const productionCandidates = buildProductionCandidates(items, includeDuplicates).slice(0, limit);
    const shownItems = view === 'manifest' ? items.slice(0, limit) : [];
    const result: MatterInventoryResult = {
      matterName,
      view,
      totalEvidence: items.length,
      returnedEvidence: view === 'manifest' ? shownItems.length : productionCandidates.length,
      items: shownItems,
      productionCandidates: view === 'schema_guide' ? [] : productionCandidates,
      duplicateGroups,
      schemaGuide: buildSchemaGuide(),
    };

    return {
      success: true,
      data: result,
      output: formatInventoryOutput(result),
    };
  }

  isEnabled(): boolean {
    return true;
  }
}

function buildInventory(matterName: string, db: ReturnType<typeof getDb>): EvidenceInventoryItem[] {
  const legacyCounts = countByEvidenceId(db, 'extraction_chunks');
  const v2Counts = countByEvidenceId(db, 'evidence_chunks_v2');
  const qualityByEvidenceId = latestQualityByEvidenceId(db);
  const rows = [
    ...queryV2Rows(db, matterName),
    ...queryLegacyOnlyRows(db, matterName),
  ];

  return rows
    .map((row) => {
      const evidenceId = String(row.evidence_id ?? row.id ?? '');
      const metadata = parseObject(row.metadata_json);
      const originalFilename = row.original_filename ?? basename(row.original_path);
      const sourceUrl = stringMetadata(metadata, 'sourceUrl') ?? stringMetadata(metadata, 'url');
      const roleText = [
        evidenceId,
        originalFilename,
        row.canonical_filename ?? '',
        sourceUrl,
        stringMetadata(metadata, 'title'),
      ].join(' ').toLowerCase();
      const sourceVariant = classifySourceVariant(roleText, row.format);
      const documentRole = classifyDocumentRole(roleText);
      const productionRank = scoreProductionRank(documentRole, sourceVariant, roleText, row.format);
      const duplicateGroupKey = buildDuplicateGroupKey(documentRole, roleText, originalFilename);
      const recommendedForProduction = isRecommendedForProduction(documentRole, productionRank);
      const quality = qualityByEvidenceId.get(evidenceId);
      const legacyChunkCount = legacyCounts.get(evidenceId) ?? 0;
      const v2ChunkCount = v2Counts.get(evidenceId) ?? 0;

      return {
        evidenceId,
        originalFilename,
        canonicalFilename: row.canonical_filename ?? undefined,
        originalPath: row.original_path,
        internalPath: row.internal_path,
        sourceType: row.source_type ?? 'legacy',
        mimeType: row.mime_type ?? '',
        format: row.format,
        status: row.status,
        ingestedAt: row.ingested_at ?? row.ingested ?? '',
        sizeBytes: row.size_bytes ?? 0,
        sourceUrl,
        legacyChunkCount,
        v2ChunkCount,
        chunkCount: Math.max(legacyChunkCount, v2ChunkCount),
        quality,
        documentRole,
        sourceVariant,
        duplicateGroupKey,
        productionRank,
        recommendedForProduction,
        productionReason: productionReason(documentRole, sourceVariant, recommendedForProduction),
        readHint: `evidence_chunk_read({"evidenceId":"${evidenceId}","chunkIndex":0,"count":3})`,
      };
    })
    .sort((a, b) => a.evidenceId.localeCompare(b.evidenceId));
}

function queryV2Rows(db: ReturnType<typeof getDb>, matterName: string): RawEvidenceRow[] {
  return db.prepare(`
    SELECT evidence_id, matter_name, original_filename, canonical_filename, original_path,
           internal_path, source_type, mime_type, format, status, ingested_at,
           size_bytes, metadata_json
    FROM evidence_items_v2
    WHERE matter_name = ?
    ORDER BY evidence_id
  `).all(matterName) as RawEvidenceRow[];
}

function queryLegacyOnlyRows(db: ReturnType<typeof getDb>, matterName: string): RawEvidenceRow[] {
  return db.prepare(`
    SELECT e.id, e.matter_name, e.original_path, e.internal_path, e.mime_type, e.format,
           e.status, e.ingested, e.size_bytes, e.metadata_json
    FROM evidence e
    WHERE e.matter_name = ?
      AND NOT EXISTS (
        SELECT 1 FROM evidence_items_v2 v2 WHERE v2.evidence_id = e.id
      )
    ORDER BY e.id
  `).all(matterName) as RawEvidenceRow[];
}

function countByEvidenceId(db: ReturnType<typeof getDb>, tableName: 'extraction_chunks' | 'evidence_chunks_v2'): Map<string, number> {
  const rows = db.prepare(`
    SELECT evidence_id, COUNT(*) AS count
    FROM ${tableName}
    GROUP BY evidence_id
  `).all() as Array<{ evidence_id: string; count: number }>;

  return new Map(rows.map((row) => [row.evidence_id, row.count]));
}

function latestQualityByEvidenceId(db: ReturnType<typeof getDb>): Map<string, EvidenceInventoryItem['quality']> {
  const rows = db.prepare(`
    SELECT evidence_id, status, text_density, average_confidence, page_count, warnings_json
    FROM extraction_quality_reports
    ORDER BY created_at DESC
  `).all() as QualityRow[];
  const byEvidence = new Map<string, EvidenceInventoryItem['quality']>();

  for (const row of rows) {
    if (byEvidence.has(row.evidence_id)) continue;
    byEvidence.set(row.evidence_id, {
      status: row.status,
      textDensity: row.text_density,
      averageConfidence: row.average_confidence,
      pageCount: row.page_count,
      warnings: parseStringArray(row.warnings_json),
    });
  }

  return byEvidence;
}

function buildProductionCandidates(items: EvidenceInventoryItem[], includeDuplicates: boolean): EvidenceInventoryItem[] {
  const sorted = [...items].sort(compareProductionCandidates);
  if (includeDuplicates) return sorted;

  const selectedByGroup = new Map<string, EvidenceInventoryItem>();
  for (const item of sorted) {
    if (!selectedByGroup.has(item.duplicateGroupKey)) {
      selectedByGroup.set(item.duplicateGroupKey, item);
    }
  }

  return [...selectedByGroup.values()].sort(compareProductionCandidates);
}

function buildDuplicateGroups(items: EvidenceInventoryItem[]): DuplicateGroup[] {
  const groups = new Map<string, EvidenceInventoryItem[]>();
  for (const item of items) {
    const group = groups.get(item.duplicateGroupKey) ?? [];
    group.push(item);
    groups.set(item.duplicateGroupKey, group);
  }

  return [...groups.entries()]
    .filter(([, members]) => members.length > 1)
    .map(([groupKey, members]) => {
      const sorted = [...members].sort(compareProductionCandidates);
      return {
        groupKey,
        selectedEvidenceId: sorted[0].evidenceId,
        members: sorted.map((member) => ({
          evidenceId: member.evidenceId,
          originalFilename: member.originalFilename,
          documentRole: member.documentRole,
          sourceVariant: member.sourceVariant,
          productionRank: member.productionRank,
        })),
      };
    })
    .sort((a, b) => b.members[0].productionRank - a.members[0].productionRank);
}

function compareProductionCandidates(a: EvidenceInventoryItem, b: EvidenceInventoryItem): number {
  if (a.recommendedForProduction !== b.recommendedForProduction) {
    return a.recommendedForProduction ? -1 : 1;
  }
  if (a.productionRank !== b.productionRank) return b.productionRank - a.productionRank;
  return a.evidenceId.localeCompare(b.evidenceId);
}

function classifyDocumentRole(contextText: string): DocumentRole {
  const normalizedText = normalizeRoleText(contextText);
  if (/\bpress summary\b/.test(normalizedText) || /\bsummary\b/.test(normalizedText) && !/\bwritten case\b/.test(normalizedText)) {
    return 'press_summary';
  }
  if (/\bjudg(e)?ment\b/.test(normalizedText) || /\/uksc\/\d{4}\/\d+/.test(contextText)) {
    return 'holding';
  }
  if (/\bsfi\b/.test(normalizedText) || /\bstatement of facts\b/.test(normalizedText) || /\bfacts and issues\b/.test(normalizedText)) {
    return 'statement_of_facts_issues';
  }
  if (/\bwritten case\b/.test(normalizedText)) {
    if (/\b(cherry|miller|prime minister|advocate general)\b/.test(normalizedText)) {
      return 'party_written_case';
    }
    if (/\blord advocate\b/.test(normalizedText)) {
      return 'scottish_constitutional_position';
    }
    if (/\bcounsel general\b/.test(normalizedText)) {
      return 'public_authority_position';
    }
    return 'intervener_written_case';
  }
  if (/\b(uksc|jcpc)\b/.test(normalizedText) && /\b\d{4}\b/.test(normalizedText)) {
    return 'case_written_argument';
  }
  return 'background_record';
}

function classifySourceVariant(contextText: string, format: string): string {
  const normalizedText = normalizeRoleText(contextText);
  if (/\bofficial\b/.test(contextText) || /supremecourt\.uk/.test(contextText)) return 'official';
  if (/\btna\b/.test(contextText) || /nationalarchives\.gov\.uk/.test(contextText)) return 'national_archives';
  if (/\baccessible\b/.test(contextText)) return 'accessible';
  if (/\blegacy\b/.test(normalizedText)) return 'legacy';
  if (/\b(uksc|jcpc)\b/.test(normalizedText) && format === 'pdf') return 'court_pdf';
  if (format === 'html') return 'html';
  if (format === 'pdf') return 'pdf';
  return 'source';
}

function scoreProductionRank(
  role: DocumentRole,
  sourceVariant: string,
  contextText: string,
  format: string,
): number {
  const baseByRole: Record<DocumentRole, number> = {
    holding: 100,
    press_summary: 84,
    statement_of_facts_issues: 76,
    case_written_argument: 68,
    party_written_case: 70,
    scottish_constitutional_position: 66,
    public_authority_position: 58,
    intervener_written_case: 52,
    background_record: 20,
  };
  let score = baseByRole[role];
  if (sourceVariant === 'official') score += 6;
  if (sourceVariant === 'national_archives') score += 4;
  if (sourceVariant === 'court_pdf') score += 3;
  if (sourceVariant === 'accessible') score += 2;
  if (sourceVariant === 'legacy') score -= 2;
  if (format === 'pdf') score += 1;
  const normalizedText = normalizeRoleText(contextText);
  if (/\bcherry\b/.test(normalizedText)) score += 4;
  if (/\b(prime minister|advocate general|miller)\b/.test(normalizedText)) score += 2;
  if (/\blord advocate\b/.test(normalizedText)) score += 2;
  return score;
}

function buildDuplicateGroupKey(role: DocumentRole, contextText: string, filename: string): string {
  if (role === 'holding') return 'holding:final-judgment';
  if (role === 'press_summary') return 'summary:press-summary';
  if (role === 'statement_of_facts_issues') return 'statement:facts-and-issues';
  return `${role}:${normalizeFilenameForGroup(filename || contextText)}`;
}

function normalizeFilenameForGroup(value: string): string {
  return value
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/\b(official|legacy|accessible|tna|html|pdf|source|snapshot)\b/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100) || 'record';
}

function isRecommendedForProduction(role: DocumentRole, score: number): boolean {
  return (
    role === 'holding' ||
    role === 'press_summary' ||
    role === 'statement_of_facts_issues' ||
    role === 'case_written_argument' ||
    role === 'party_written_case' ||
    role === 'scottish_constitutional_position'
  ) && score >= 60;
}

function productionReason(role: DocumentRole, sourceVariant: string, recommended: boolean): string {
  if (!recommended) {
    return 'Optional or background material; include only if the bundle objective specifically calls for this role.';
  }
  if (role === 'holding') return `Primary outcome document; preferred ${sourceVariant} variant.`;
  if (role === 'press_summary') return `Outcome summary; preferred ${sourceVariant} variant.`;
  if (role === 'statement_of_facts_issues') return `Agreed procedural roadmap for the appeal; include with the main record.`;
  if (role === 'case_written_argument') return `Official court filing for this appeal; include in the benchmark production set.`;
  if (role === 'party_written_case') return `Core party submission; keep with the main judgment record.`;
  if (role === 'scottish_constitutional_position') return `Scottish constitutional position; useful for the Scotland-specific bundle view.`;
  return 'Recommended production candidate.';
}

function normalizeRoleText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[_-]+/g, ' ')
    .replace(/[^a-z0-9/]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildSchemaGuide(): MatterInventoryResult['schemaGuide'] {
  return {
    canonicalTables: [
      'evidence_items_v2',
      'evidence_pages',
      'evidence_chunks_v2',
      'extraction_quality_reports',
      'evidence',
      'extraction_chunks',
    ],
    notes: [
      'Call matter_inventory before writing direct SQL for manifest, production, or bundle-index work.',
      'Use evidence_items_v2 as the canonical manifest when present; legacy evidence is included for backwards compatibility.',
      'Use extraction_chunks for indexed text search chunks and evidence_chunks_v2 for page-aware v2 chunks.',
      'Do not guess old tables such as evidence_index, findings_core, review_tasks, matter_kv, or productions.',
    ],
    exampleQueries: [
      'SELECT evidence_id, original_filename, source_type, status FROM evidence_items_v2 ORDER BY evidence_id',
      'SELECT evidence_id, COUNT(*) AS chunks FROM extraction_chunks GROUP BY evidence_id',
      'SELECT evidence_id, chunk_index, content FROM extraction_chunks WHERE evidence_id = ? ORDER BY chunk_index LIMIT 3',
    ],
  };
}

function formatInventoryOutput(result: MatterInventoryResult): string {
  const lines = [
    `Matter inventory for ${result.matterName}: ${result.totalEvidence} evidence item(s).`,
    `View: ${result.view}. Canonical manifest table: evidence_items_v2. Legacy fallback: evidence.`,
  ];

  if (result.view === 'schema_guide') {
    lines.push('Schema guide:');
    lines.push(...result.schemaGuide.notes.map((note) => `- ${note}`));
    lines.push('Example queries:');
    lines.push(...result.schemaGuide.exampleQueries.map((query) => `- ${query}`));
    return lines.join('\n');
  }

  if (result.items.length > 0) {
    lines.push('Evidence manifest:');
    for (const item of result.items) {
      lines.push(`- ${item.evidenceId}: ${item.originalFilename} [${item.documentRole}, ${item.sourceVariant}, chunks=${item.chunkCount}]`);
    }
  }

  if (result.productionCandidates.length > 0) {
    lines.push('Production candidates:');
    for (const item of result.productionCandidates) {
      const marker = item.recommendedForProduction ? 'recommended' : 'optional';
      lines.push(`- ${item.evidenceId}: ${item.originalFilename} [${item.documentRole}, ${item.sourceVariant}, rank=${item.productionRank}, ${marker}] ${item.productionReason}`);
    }
  }

  if (result.duplicateGroups.length > 0) {
    lines.push('Duplicate groups suppressed unless includeDuplicates=true:');
    for (const group of result.duplicateGroups.slice(0, 10)) {
      const members = group.members.map((member) => member.evidenceId).join(', ');
      lines.push(`- ${group.groupKey}: selected ${group.selectedEvidenceId}; members ${members}`);
    }
  }

  lines.push('Use matter_inventory({ "view": "schema_guide" }) for canonical SQLite query examples.');
  return lines.join('\n');
}

function normalizeLimit(limit: number | undefined): number {
  if (!Number.isFinite(limit)) return 50;
  return Math.min(Math.max(Math.trunc(limit as number), 1), 200);
}

function parseObject(json: string | null | undefined): Record<string, unknown> {
  if (!json) return {};
  try {
    const parsed = JSON.parse(json);
    return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed) ? parsed as Record<string, unknown> : {};
  } catch {
    return {};
  }
}

function parseStringArray(json: string | null | undefined): string[] {
  if (!json) return [];
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === 'string') : [];
  } catch {
    return [];
  }
}

function stringMetadata(metadata: Record<string, unknown>, key: string): string | undefined {
  const value = metadata[key];
  return typeof value === 'string' && value.trim() ? value : undefined;
}
