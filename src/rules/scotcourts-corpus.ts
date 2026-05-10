import { mkdir, readFile, readdir, stat, unlink, writeFile } from 'fs/promises';
import { basename, dirname, extname, join, relative } from 'path';
import { hashFile, hashText } from '../extraction/hash.js';
import { extractText } from '../extraction/index.js';

export const DEFAULT_SCOTCOURTS_CORPUS_DIR = 'legal-corpora/scotcourts';
export const DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH = '.atticus/rules/scotcourts-corpus.index.json';

const CORPUS_ID = 'scotcourts-corpus';
const SUPPORTED_EXTENSIONS = new Set(['.pdf', '.doc', '.docx', '.md']);
const DEFAULT_CONTEXT_LIMIT = 6;
const DEFAULT_SEARCH_LIMIT = 10;
const DEFAULT_SNIPPET_DOCS = 3;

const CORE_SCOTS_SKILLS = new Set([
  'atticus-scotcourts-corpus',
  'atticus-sheriff-court-rules',
  'atticus-court-of-session-rules',
  'atticus-scots-master-orchestrator',
  'atticus-scots-procedure-router',
  'atticus-scots-source-verification',
  'atticus-scots-litigation-machinery',
  'atticus-scots-hostile-review',
  'atticus-scots-evidence-matrix',
  'scots-legal-humanizer',
  'witness-prep-session',
]);

const SCOTS_WORKFLOW_PHASES = new Set([
  'intake_and_normalization',
  'evidence_ingestion_and_fact_extraction',
  'issue_spotting',
  'law_and_policy_research',
  'merits_and_risk_analysis',
  'procedural_route_planning',
  'document_production',
  'verification_and_hostile_review',
  'bundle_and_war_room_assembly',
  'operator_handoff',
  'document_output_pipeline',
]);

export type ScotCourtsDocumentKind = 'form' | 'rule' | 'guidance' | 'fee' | 'other';
export type ScotCourtsCourt =
  | 'court_of_session'
  | 'sheriff_court'
  | 'sheriff_appeal_court'
  | 'criminal_courts'
  | 'scottish_courts';

export interface ScotCourtsDocument {
  corpusId: typeof CORPUS_ID;
  id: string;
  relativePath: string;
  fileName: string;
  path: string;
  extension: string;
  categoryPath: string;
  category: string;
  title: string;
  documentKind: ScotCourtsDocumentKind;
  court: ScotCourtsCourt;
  stageIds: string[];
  skillIds: string[];
  keywords: string[];
}

export interface ScotCourtsIndexEntry extends ScotCourtsDocument {
  sha256: string;
  fileSizeBytes?: number;
  fileMtimeMs?: number;
  textHash?: string;
  text?: string;
  extractedAt?: string;
  extractionError?: string;
}

export interface ScotCourtsCorpusIndex {
  corpusId: typeof CORPUS_ID;
  sourceDir: string;
  indexedAt: string;
  entries: ScotCourtsIndexEntry[];
}

export interface ScotCourtsSearchResult {
  id: string;
  title: string;
  relativePath: string;
  fileName: string;
  path: string;
  categoryPath: string;
  category: string;
  documentKind: ScotCourtsDocumentKind;
  court: ScotCourtsCourt;
  score: number;
  snippet?: string;
  stageIds: string[];
  skillIds: string[];
  keywords: string[];
  indexed: boolean;
  hasText: boolean;
}

export interface ScotCourtsSearchInput {
  query: string;
  phaseId?: string;
  skillIds?: string[];
  categoryIds?: string[];
  court?: ScotCourtsCourt;
  documentKind?: ScotCourtsDocumentKind;
  limit?: number;
}

export interface ScotCourtsContextInput extends ScotCourtsSearchInput {
  sourceDir?: string;
  cachePath?: string;
  matterMeta?: Record<string, string | undefined>;
  includeSnippets?: boolean;
  maxSnippetDocs?: number;
}

export interface ScotCourtsNormalizeResult {
  corpusId: typeof CORPUS_ID;
  sourceDir: string;
  converted: number;
  deletedOriginals: number;
  skippedForms: number;
  skippedMarkdown: number;
  failed: Array<{ path: string; message: string }>;
}

export function resolveScotCourtsCorpusDir(sourceDir?: string): string {
  const configured = sourceDir ?? process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR ?? DEFAULT_SCOTCOURTS_CORPUS_DIR;
  return configured.startsWith('/') ? configured : join(process.cwd(), configured);
}

export async function discoverScotCourtsCorpus(
  sourceDir = resolveScotCourtsCorpusDir(),
): Promise<ScotCourtsDocument[]> {
  const files = await listFilesRecursive(sourceDir);
  return files
    .filter((filePath) => SUPPORTED_EXTENSIONS.has(extname(filePath).toLowerCase()))
    .map((filePath) => buildDocumentMetadata(sourceDir, filePath))
    .sort(compareDocuments);
}

export async function buildScotCourtsCorpusIndex(input: {
  sourceDir?: string;
  cachePath?: string;
  extractText?: boolean;
  maxTextDocs?: number;
  extractTextFor?: (document: ScotCourtsDocument) => boolean;
} = {}): Promise<ScotCourtsCorpusIndex> {
  const sourceDir = resolveScotCourtsCorpusDir(input.sourceDir);
  const cachePath = input.cachePath ?? DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH;
  const documents = await discoverScotCourtsCorpus(sourceDir);
  const entries: ScotCourtsIndexEntry[] = [];
  let extracted = 0;

  for (const document of documents) {
    const fileStat = await stat(document.path);
    const entry: ScotCourtsIndexEntry = {
      ...document,
      sha256: await hashFile(document.path),
      fileSizeBytes: fileStat.size,
      fileMtimeMs: Math.round(fileStat.mtimeMs),
    };

    const shouldExtractText = input.extractText && (!input.extractTextFor || input.extractTextFor(document));
    if (shouldExtractText && (input.maxTextDocs === undefined || extracted < input.maxTextDocs)) {
      try {
        const text = await extractText(document.path, { sourceId: `scotcourts:${document.id}` });
        entry.text = text.text;
        entry.textHash = hashText(text.text);
        entry.extractedAt = text.extractedAt;
        extracted += 1;
      } catch (err: unknown) {
        entry.extractionError = err instanceof Error ? err.message : String(err);
      }
    }

    entries.push(entry);
  }

  const index: ScotCourtsCorpusIndex = {
    corpusId: CORPUS_ID,
    sourceDir,
    indexedAt: new Date().toISOString(),
    entries,
  };
  await mkdirForFile(cachePath);
  await writeFile(cachePath, JSON.stringify(index, null, 2), 'utf-8');
  return index;
}

export async function loadScotCourtsCorpusIndex(
  cachePath = DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH,
): Promise<ScotCourtsCorpusIndex | undefined> {
  try {
    const parsed = JSON.parse(await readFile(cachePath, 'utf-8')) as ScotCourtsCorpusIndex;
    if (parsed.corpusId !== CORPUS_ID || !Array.isArray(parsed.entries)) return undefined;
    return parsed;
  } catch {
    return undefined;
  }
}

export async function normalizeScotCourtsCorpusRulesToMarkdown(input: {
  sourceDir?: string;
  deleteOriginals?: boolean;
} = {}): Promise<ScotCourtsNormalizeResult> {
  const sourceDir = resolveScotCourtsCorpusDir(input.sourceDir);
  const deleteOriginals = input.deleteOriginals ?? true;
  const documents = await discoverScotCourtsCorpus(sourceDir);
  const result: ScotCourtsNormalizeResult = {
    corpusId: CORPUS_ID,
    sourceDir,
    converted: 0,
    deletedOriginals: 0,
    skippedForms: 0,
    skippedMarkdown: 0,
    failed: [],
  };

  for (const document of documents) {
    if (document.extension === 'md') {
      result.skippedMarkdown += 1;
      continue;
    }
    if (document.documentKind === 'form') {
      result.skippedForms += 1;
      continue;
    }

    try {
      const extracted = await extractText(document.path, { sourceId: `scotcourts:${document.id}` });
      const markdownPath = document.path.replace(/\.[^.]+$/, '.md');
      await writeFile(markdownPath, formatScotCourtsMarkdown(document, extracted.text), 'utf-8');
      result.converted += 1;
      if (deleteOriginals) {
        await unlink(document.path);
        result.deletedOriginals += 1;
      }
    } catch (err: unknown) {
      result.failed.push({
        path: document.path,
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return result;
}

export async function searchScotCourtsCorpus(input: ScotCourtsContextInput): Promise<ScotCourtsSearchResult[]> {
  const sourceDir = resolveScotCourtsCorpusDir(input.sourceDir);
  const index = await loadScotCourtsCorpusIndex(input.cachePath ?? DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH);
  const documents = await discoverScotCourtsCorpus(sourceDir);
  if (index && index.sourceDir === sourceDir && await isScotCourtsIndexFresh(index, documents)) {
    return searchScotCourtsCorpusEntries(index.entries, input);
  }

  return searchScotCourtsCorpusEntries(documents, input);
}

export function searchScotCourtsCorpusEntries(
  entries: Array<ScotCourtsDocument | ScotCourtsIndexEntry>,
  input: ScotCourtsSearchInput,
): ScotCourtsSearchResult[] {
  const terms = tokenize(input.query);
  const skillSet = new Set(input.skillIds ?? []);
  const categorySet = new Set(input.categoryIds ?? []);

  return entries
    .filter((entry) => categorySet.size === 0 || categorySet.has(entry.category) || categorySet.has(entry.categoryPath))
    .filter((entry) => !input.court || entry.court === input.court)
    .filter((entry) => !input.documentKind || entry.documentKind === input.documentKind)
    .map((entry) => scoreScotCourtsEntry(entry, terms, input, skillSet))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.categoryPath.localeCompare(b.categoryPath) || a.fileName.localeCompare(b.fileName))
    .slice(0, input.limit ?? DEFAULT_SEARCH_LIMIT);
}

export async function buildScotCourtsCorpusContext(input: ScotCourtsContextInput): Promise<string> {
  if (!shouldAttachScotCourtsCorpus(input)) return '';
  const results = await searchScotCourtsCorpus({
    ...input,
    query: input.query || input.phaseId || 'Scotland court forms rules guidance',
    limit: input.limit ?? DEFAULT_CONTEXT_LIMIT,
  });
  if (results.length === 0) return '';

  const hydrated = input.includeSnippets === false
    ? results
    : await hydrateResultSnippets(results, input.maxSnippetDocs ?? DEFAULT_SNIPPET_DOCS, tokenize(input.query));

  return [
    '## ScotCourts Corpus',
    `Harness corpus folder: ${resolveScotCourtsCorpusDir(input.sourceDir)}`,
    'Use this repository-owned Scotland court corpus for finding relevant forms, rules, and guidance. Do not load the whole corpus into the prompt.',
    'Treat the entries below as a ranked shortlist. Open or extract only the specific files needed for the current task, then record the local path and exact proposition or form purpose in the source log.',
    '',
    ...hydrated.map(formatContextResult),
    '',
    `CLI: harness rules scotcourts search "${escapeForPrompt(input.query || input.phaseId || 'Scotland court forms rules guidance')}" --phase ${input.phaseId ?? 'law_and_policy_research'} --json`,
  ].join('\n');
}

function scoreScotCourtsEntry(
  entry: ScotCourtsDocument | ScotCourtsIndexEntry,
  terms: string[],
  input: ScotCourtsSearchInput,
  skillSet: Set<string>,
): ScotCourtsSearchResult {
  const indexed = isIndexedEntry(entry);
  const text = indexed ? entry.text ?? '' : '';
  const metadataHaystack = [
    entry.id,
    entry.title,
    entry.fileName,
    entry.relativePath,
    entry.categoryPath,
    entry.category,
    entry.documentKind,
    entry.court,
    entry.keywords.join(' '),
  ].join(' ').toLowerCase();
  const titleHaystack = [
    entry.title,
    entry.fileName,
    entry.keywords.join(' '),
  ].join(' ').toLowerCase();
  const lowerText = text.toLowerCase();
  let score = 0;

  for (const term of terms) {
    if (titleHaystack.includes(term)) score += 6;
    if (metadataHaystack.includes(term)) score += 3;
    if (lowerText.includes(term)) score += 1;
  }

  const phrase = input.query.toLowerCase().replace(/\s+/g, ' ').trim();
  if (phrase && titleHaystack.includes(phrase)) score += 8;
  if (input.phaseId && entry.stageIds.includes(input.phaseId)) score += 4;
  for (const skillId of skillSet) {
    if (entry.skillIds.includes(skillId)) score += 2;
  }
  score += inferCourtBoost(entry.court, phrase);
  score += inferDocumentKindBoost(entry.documentKind, phrase);
  if (terms.length === 0 && (input.phaseId || skillSet.size > 0)) score += 1;
  if (/\b(scot|scotland|scottish|sheriff|court of session|criminal|simple procedure|ordinary cause)\b/i.test(input.query)) {
    score += 1;
  }

  return {
    id: entry.id,
    title: entry.title,
    relativePath: entry.relativePath,
    fileName: entry.fileName,
    path: entry.path,
    categoryPath: entry.categoryPath,
    category: entry.category,
    documentKind: entry.documentKind,
    court: entry.court,
    score,
    snippet: text ? makeSnippet(text, terms) : undefined,
    stageIds: entry.stageIds,
    skillIds: entry.skillIds,
    keywords: entry.keywords,
    indexed,
    hasText: Boolean(text),
  };
}

function inferCourtBoost(court: ScotCourtsCourt, phrase: string): number {
  if (court === 'court_of_session' && /\bcourt of session|outer house|inner house|reclaiming\b/.test(phrase)) return 6;
  if (court === 'sheriff_appeal_court' && /\bsheriff appeal\b/.test(phrase)) return 6;
  if (court === 'criminal_courts' && /\bcriminal|solemn|summary complaint|jp court|justice of the peace\b/.test(phrase)) return 6;
  if (court === 'sheriff_court' && /\bsheriff court|simple procedure|ordinary cause|summary cause|small claim\b/.test(phrase)) return 5;
  return 0;
}

function inferDocumentKindBoost(kind: ScotCourtsDocumentKind, phrase: string): number {
  if (kind === 'form' && /\bform|application|petition|minute|summons|citation|notice|certificate|warrant|order\b/.test(phrase)) return 5;
  if (kind === 'rule' && /\brule|rules|procedure rules|act of sederunt|act of adjournal|chapter\b/.test(phrase)) return 5;
  if (kind === 'guidance' && /\bguidance|guide|practice note\b/.test(phrase)) return 5;
  if (kind === 'fee' && /\bfee|fees|fee exemption|expenses\b/.test(phrase)) return 5;
  return 0;
}

async function hydrateResultSnippets(
  results: ScotCourtsSearchResult[],
  maxDocs: number,
  terms: string[],
): Promise<ScotCourtsSearchResult[]> {
  let hydrated = 0;
  const next: ScotCourtsSearchResult[] = [];
  for (const result of results) {
    if (result.snippet || hydrated >= maxDocs) {
      next.push(result);
      continue;
    }
    try {
      const extracted = await extractText(result.path, { sourceId: `scotcourts:${result.id}` });
      next.push({
        ...result,
        snippet: makeSnippet(extracted.text, terms.length > 0 ? terms : tokenize(result.title)),
        hasText: Boolean(extracted.text.trim()),
      });
      hydrated += 1;
    } catch {
      next.push(result);
    }
  }
  return next;
}

function shouldAttachScotCourtsCorpus(input: ScotCourtsContextInput): boolean {
  const hasScotsSkill = input.skillIds?.some((skill) => CORE_SCOTS_SKILLS.has(skill)) ?? false;
  const haystack = [
    input.query,
    input.matterMeta?.jurisdiction,
    input.matterMeta?.forum,
    input.matterMeta?.type,
    input.matterMeta?.documentType,
  ].filter(Boolean).join(' ').toLowerCase();
  const hasScotsSignal = hasScotsSkill
    || /\b(scot|scotland|scottish|sheriff|court of session|inner house|outer house|high court|justice of the peace|jpic|scotcourts|simple procedure|ordinary cause|summary cause|small claim|criminal procedure|solemn|summary complaint)\b/.test(haystack);
  if (!hasScotsSignal) return false;
  if (input.phaseId && SCOTS_WORKFLOW_PHASES.has(input.phaseId)) return true;
  if (hasScotsSkill) return true;
  return hasScotsSignal;
}

export async function isScotCourtsIndexFresh(
  index: ScotCourtsCorpusIndex,
  documents: ScotCourtsDocument[],
): Promise<boolean> {
  if (index.entries.length !== documents.length) return false;

  const entriesByPath = new Map(index.entries.map((entry) => [entry.relativePath, entry]));
  for (const document of documents) {
    const entry = entriesByPath.get(document.relativePath);
    if (!entry || entry.fileSizeBytes === undefined || entry.fileMtimeMs === undefined) return false;

    const fileStat = await stat(document.path);
    if (entry.fileSizeBytes !== fileStat.size) return false;
    if (entry.fileMtimeMs !== Math.round(fileStat.mtimeMs)) return false;
  }

  return true;
}

function buildDocumentMetadata(sourceDir: string, filePath: string): ScotCourtsDocument {
  const relativePath = relative(sourceDir, filePath);
  const fileName = basename(filePath);
  const extension = extname(fileName).toLowerCase().replace('.', '');
  const categoryPath = relativePath.split('/').slice(0, -1).join('/') || 'root';
  const category = categoryPath.split('/')[0] || 'root';
  const title = parseTitle(fileName);
  const documentKind = deriveDocumentKind(categoryPath, title, extension);
  const court = deriveCourt(categoryPath, title);
  const keywords = deriveKeywords(relativePath, title, documentKind, court);
  const stageIds = deriveStageIds(categoryPath, title, documentKind);
  const skillIds = deriveSkillIds(stageIds, documentKind, court, title);

  return {
    corpusId: CORPUS_ID,
    id: makeDocumentId(relativePath),
    relativePath,
    fileName,
    path: filePath,
    extension,
    categoryPath,
    category,
    title,
    documentKind,
    court,
    stageIds,
    skillIds,
    keywords,
  };
}

function deriveDocumentKind(categoryPath: string, title: string, extension: string): ScotCourtsDocumentKind {
  const pathLower = categoryPath.toLowerCase();
  const lower = `${categoryPath} ${title}`.toLowerCase();
  if (extension === 'py') return 'other';

  if (/\b(guidance|guide|user-guide|practice-note)\b/.test(pathLower)) return 'guidance';
  if (/(^|[/_-])rules?($|[/_-])/.test(pathLower)) return 'rule';
  if (/\bfee exemption|fees?\b/.test(pathLower) && !/\bforms?\b/.test(pathLower)) return 'fee';

  if (/\bguidance|guide|user guide|practice note|practice-note\b/.test(lower)) return 'guidance';
  if (/\bforms?|form-|standard order|application|petition|minute|summons|citation|notice|certificate|warrant|order\b/.test(lower)) return 'form';
  if (/\bfee exemption|fees?\b/.test(lower)) return 'fee';
  if (/\brules?|procedure rules?|act of adjournal|ordinary cause|simple procedure|summary cause|small claim|bankruptcy|fatal accident inquiry|taxation\b/.test(lower)) return 'rule';
  return 'other';
}

function deriveCourt(categoryPath: string, title: string): ScotCourtsCourt {
  const lower = `${categoryPath} ${title}`.toLowerCase();
  if (lower.includes('court-of-session') || lower.includes('court of session')) return 'court_of_session';
  if (lower.includes('sheriff-appeal') || lower.includes('sheriff appeal')) return 'sheriff_appeal_court';
  if (lower.includes('criminal') || lower.includes('solemn') || lower.includes('summary complaint')) return 'criminal_courts';
  if (lower.includes('sheriff')) return 'sheriff_court';
  return 'scottish_courts';
}

function deriveStageIds(categoryPath: string, title: string, kind: ScotCourtsDocumentKind): string[] {
  const lower = `${categoryPath} ${title}`.toLowerCase();
  const stages = new Set<string>();

  if (kind === 'rule' || kind === 'guidance') {
    stages.add('law_and_policy_research');
    stages.add('procedural_route_planning');
    stages.add('verification_and_hostile_review');
  }
  if (kind === 'form' || kind === 'fee') {
    stages.add('document_production');
    stages.add('procedural_route_planning');
    stages.add('verification_and_hostile_review');
    stages.add('bundle_and_war_room_assembly');
    stages.add('operator_handoff');
    stages.add('document_output_pipeline');
  }
  if (/\b(intimation|citation|service|summons|petition|minute|notice|application|warrant|order|appeal|ordinary cause|simple procedure|summary cause|small claim|criminal procedure|solemn|summary complaint)\b/.test(lower)) {
    stages.add('intake_and_normalization');
    stages.add('procedural_route_planning');
    stages.add('document_production');
  }
  if (/\b(evidence|proof|witness|haver|productions?|recording|child witness|vulnerable witness|precognition)\b/.test(lower)) {
    stages.add('evidence_ingestion_and_fact_extraction');
    stages.add('document_production');
    stages.add('verification_and_hostile_review');
  }
  if (/\b(expenses?|fee exemption|taxation|bankruptcy|sequestration|diligence|arrestment|time to pay|summary decree|risk|caution|security)\b/.test(lower)) {
    stages.add('merits_and_risk_analysis');
    stages.add('verification_and_hostile_review');
  }
  if (/\b(bundle|inventory|lodging|confidential documents|court user|guidance|appeal|proof|jury|standard order)\b/.test(lower)) {
    stages.add('bundle_and_war_room_assembly');
    stages.add('operator_handoff');
  }

  if (stages.size === 0) stages.add('law_and_policy_research');
  return [...stages].sort();
}

function deriveSkillIds(
  stageIds: string[],
  kind: ScotCourtsDocumentKind,
  court: ScotCourtsCourt,
  title: string,
): string[] {
  const lower = title.toLowerCase();
  const skills = new Set<string>([
    'atticus-scotcourts-corpus',
    'atticus-scots-source-verification',
    'atticus-scots-master-orchestrator',
  ]);
  if (court === 'court_of_session') skills.add('atticus-court-of-session-rules');
  if (court === 'sheriff_court' && kind === 'rule') skills.add('atticus-sheriff-court-rules');
  if (stageIds.includes('procedural_route_planning') || kind === 'rule') skills.add('atticus-scots-procedure-router');
  if (stageIds.includes('document_production') || stageIds.includes('bundle_and_war_room_assembly') || kind === 'form') {
    skills.add('atticus-scots-litigation-machinery');
    skills.add('scots-legal-humanizer');
  }
  if (stageIds.includes('verification_and_hostile_review')) skills.add('atticus-scots-hostile-review');
  if (stageIds.includes('evidence_ingestion_and_fact_extraction') || /\b(evidence|proof|witness|productions?)\b/.test(lower)) {
    skills.add('atticus-scots-evidence-matrix');
  }
  if (/\bwitness|proof|hearing|pre-trial\b/.test(lower)) skills.add('witness-prep-session');
  return [...skills].sort();
}

function deriveKeywords(
  relativePath: string,
  title: string,
  kind: ScotCourtsDocumentKind,
  court: ScotCourtsCourt,
): string[] {
  const base = tokenize(`${relativePath} ${title} ${kind} ${court.replace(/_/g, ' ')}`);
  const lower = `${relativePath} ${title}`.toLowerCase();
  const extras: string[] = [];

  if (lower.includes('simple-procedure') || lower.includes('simple procedure')) extras.push('simple procedure');
  if (lower.includes('ordinary-cause') || lower.includes('ordinary cause')) extras.push('ordinary cause');
  if (lower.includes('summary-cause') || lower.includes('summary cause')) extras.push('summary cause');
  if (lower.includes('small-claim') || lower.includes('small claim')) extras.push('small claim');
  if (lower.includes('criminal')) extras.push('criminal procedure', 'solemn', 'summary complaint');
  if (lower.includes('fee-exemption') || lower.includes('fee exemption')) extras.push('fee exemption');
  if (lower.includes('court-of-session') || lower.includes('court of session')) extras.push('court of session');
  if (lower.includes('sheriff-appeal') || lower.includes('sheriff appeal')) extras.push('sheriff appeal court');
  if (/\bappeal|reclaiming\b/.test(lower)) extras.push('appeal');
  if (/\bdivorce|family|child|adoption|parental\b/.test(lower)) extras.push('family', 'children');
  if (/\bevidence|proof|witness|productions?\b/.test(lower)) extras.push('evidence', 'proof', 'witness');

  return [...new Set([...base, ...extras])].slice(0, 50);
}

async function listFilesRecursive(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const entryPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFilesRecursive(entryPath));
    } else if (entry.isFile()) {
      files.push(entryPath);
    }
  }
  return files;
}

function formatContextResult(result: ScotCourtsSearchResult): string {
  const snippet = result.snippet ? `\n  Snippet: ${result.snippet}` : '';
  return [
    `- ${result.title}`,
    `  Kind: ${result.documentKind}; court: ${result.court}; category: ${result.categoryPath}`,
    `  Path: ${result.path}`,
    `  Relevant stages: ${result.stageIds.join(', ')}`,
    snippet.trimEnd(),
  ].filter(Boolean).join('\n');
}

function parseTitle(fileName: string): string {
  const stem = basename(fileName, extname(fileName))
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return titleCase(stem || fileName);
}

function makeDocumentId(relativePath: string): string {
  return relativePath
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 180);
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((term) => term.length > 2);
}

function makeSnippet(text: string, terms: string[]): string | undefined {
  const normalized = stripMarkdownMetadata(text).replace(/\s+/g, ' ').trim();
  if (!normalized) return undefined;
  const lower = normalized.toLowerCase();
  const matchIndex = terms
    .map((term) => lower.indexOf(term))
    .filter((index) => index >= 0)
    .sort((a, b) => a - b)[0] ?? 0;
  const start = Math.max(0, matchIndex - 90);
  const end = Math.min(normalized.length, matchIndex + 260);
  return normalized.slice(start, end);
}

function stripMarkdownMetadata(text: string): string {
  return text.replace(/^---\n[\s\S]*?\n---\n+/, '').replace(/^# .+\n+/, '');
}

function isIndexedEntry(entry: ScotCourtsDocument | ScotCourtsIndexEntry): entry is ScotCourtsIndexEntry {
  return typeof (entry as ScotCourtsIndexEntry).sha256 === 'string';
}

function compareDocuments(a: ScotCourtsDocument, b: ScotCourtsDocument): number {
  return a.categoryPath.localeCompare(b.categoryPath) || a.fileName.localeCompare(b.fileName);
}

function titleCase(value: string): string {
  return value.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}

async function mkdirForFile(filePath: string): Promise<void> {
  await mkdir(dirname(filePath), { recursive: true });
}

function escapeForPrompt(value: string): string {
  return value.replace(/"/g, '\\"');
}

function formatScotCourtsMarkdown(document: ScotCourtsDocument, text: string): string {
  const normalized = normalizeMarkdownText(text);
  return [
    '---',
    `corpus: ${document.corpusId}`,
    `title: ${JSON.stringify(document.title)}`,
    `source_file: ${JSON.stringify(document.fileName)}`,
    `source_relative_path: ${JSON.stringify(document.relativePath)}`,
    `document_kind: ${document.documentKind}`,
    `court: ${document.court}`,
    `category: ${JSON.stringify(document.categoryPath)}`,
    'conversion: atticus-markdown-normalization-v1',
    '---',
    '',
    `# ${document.title}`,
    '',
    normalized,
    '',
  ].join('\n');
}

function normalizeMarkdownText(text: string): string {
  return text
    .replace(/\f/g, '\n\n')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim();
}
