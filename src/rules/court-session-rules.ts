import { mkdir, unlink, writeFile } from 'fs/promises';
import { basename, dirname, extname } from 'path';
import { extractText } from '../extraction/index.js';
import {
  buildScotCourtsCorpusIndex,
  DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH,
  DEFAULT_SCOTCOURTS_CORPUS_DIR,
  discoverScotCourtsCorpus,
  isScotCourtsIndexFresh,
  loadScotCourtsCorpusIndex,
  resolveScotCourtsCorpusDir,
  type ScotCourtsDocument,
  type ScotCourtsIndexEntry,
} from './scotcourts-corpus.js';

export const DEFAULT_COURT_OF_SESSION_RULES_DIR =
  DEFAULT_SCOTCOURTS_CORPUS_DIR;
export const DEFAULT_COURT_OF_SESSION_RULES_CACHE_PATH =
  DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH;

const CORPUS_ID = 'scotcourts-corpus';
const COURT_OF_SESSION_RULES_CATEGORY = 'court-of-session-rules';
const COURT_OF_SESSION_PHASES = new Set([
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
]);

const PHASE_RULE_HINTS: Record<string, string[]> = {
  intake_and_normalization: ['1', '2', '3', '4', '6', '9', '11', '12a', '12b', '12c'],
  evidence_ingestion_and_fact_extraction: ['27', '28a', '35', '35a', '35b', '36', '37', '43'],
  issue_spotting: ['14', '15', '21', '21a', '23', '24', '25', '26', '26a', '35', '41b', '47', '58'],
  law_and_policy_research: [],
  merits_and_risk_analysis: ['21', '21a', '29', '33', '34a', '35', '41', '41a', '41b', '47', '58'],
  procedural_route_planning: ['13', '14', '15', '16', '17', '18', '22', '23', '24', '25', '26', '26a', '32', '40', '41', '41a', '47', '58', '60'],
  document_production: ['13', '14', '15', '16', '18', '22', '23', '24', '27', '34a', '35', '36', '37', '38', '41', '47', '58', '59', '60'],
  verification_and_hostile_review: ['16', '21', '21a', '22', '23', '24', '27', '28', '28a', '29', '33', '34a', '35', '36', '37', '38', '41b', '47', '58'],
  bundle_and_war_room_assembly: ['4', '6', '9', '22', '27', '35', '36', '37', '38', '41', '47', '58'],
  operator_handoff: ['4', '6', '9', '16', '23', '35', '41b', '47', '58'],
};

export interface CourtOfSessionRuleChapter {
  corpusId: typeof CORPUS_ID;
  chapter: string;
  title: string;
  fileName: string;
  relativePath?: string;
  path: string;
  stageIds: string[];
  skillIds: string[];
  keywords: string[];
}

export interface CourtOfSessionRuleIndexEntry extends CourtOfSessionRuleChapter {
  sha256: string;
  textHash: string;
  text: string;
  fileSizeBytes?: number;
  fileMtimeMs?: number;
  pageCount?: number;
  extractedAt: string;
}

export interface CourtOfSessionRuleIndex {
  corpusId: typeof CORPUS_ID;
  sourceDir: string;
  indexedAt: string;
  entries: CourtOfSessionRuleIndexEntry[];
}

export interface CourtOfSessionRuleSearchResult {
  chapter: string;
  title: string;
  fileName: string;
  relativePath?: string;
  path: string;
  score: number;
  snippet?: string;
  stageIds: string[];
  skillIds: string[];
  keywords: string[];
  indexed: boolean;
}

export interface CourtOfSessionRuleSearchInput {
  query: string;
  phaseId?: string;
  skillIds?: string[];
  limit?: number;
}

export interface CourtOfSessionRuleContextInput extends CourtOfSessionRuleSearchInput {
  sourceDir?: string;
  cachePath?: string;
  matterMeta?: Record<string, string | undefined>;
  forceAttach?: boolean;
}

export interface CourtOfSessionRulesNormalizeResult {
  corpusId: typeof CORPUS_ID;
  sourceDir: string;
  converted: number;
  deletedOriginals: number;
  skippedMarkdown: number;
  failed: Array<{ path: string; message: string }>;
}

export function resolveCourtOfSessionRulesDir(sourceDir?: string): string {
  const configured =
    sourceDir
    ?? process.env.ATTICUS_SCOTCOURTS_CORPUS_DIR
    ?? DEFAULT_COURT_OF_SESSION_RULES_DIR;
  return resolveScotCourtsCorpusDir(configured);
}

export async function discoverCourtOfSessionRules(
  sourceDir = resolveCourtOfSessionRulesDir(),
): Promise<CourtOfSessionRuleChapter[]> {
  const documents = await discoverScotCourtsCorpus(sourceDir);
  return documents
    .filter(isCourtOfSessionRuleDocument)
    .map(toCourtOfSessionRuleChapter)
    .sort(compareChapters);
}

export async function buildCourtOfSessionRulesIndex(input: {
  sourceDir?: string;
  cachePath?: string;
} = {}): Promise<CourtOfSessionRuleIndex> {
  const sourceDir = resolveCourtOfSessionRulesDir(input.sourceDir);
  const cachePath = input.cachePath ?? DEFAULT_COURT_OF_SESSION_RULES_CACHE_PATH;
  const scotCourtsIndex = await buildScotCourtsCorpusIndex({
    sourceDir,
    cachePath,
    extractText: true,
    extractTextFor: isCourtOfSessionRuleDocument,
  });

  return {
    corpusId: CORPUS_ID,
    sourceDir,
    indexedAt: scotCourtsIndex.indexedAt,
    entries: scotCourtsIndex.entries
      .filter(isCourtOfSessionRuleDocument)
      .map((entry) => toCourtOfSessionRuleIndexEntry(entry, scotCourtsIndex.indexedAt)),
  };
}

export async function loadCourtOfSessionRulesIndex(
  cachePath = DEFAULT_COURT_OF_SESSION_RULES_CACHE_PATH,
): Promise<CourtOfSessionRuleIndex | undefined> {
  const scotCourtsIndex = await loadScotCourtsCorpusIndex(cachePath);
  if (!scotCourtsIndex) return undefined;
  return {
    corpusId: CORPUS_ID,
    sourceDir: scotCourtsIndex.sourceDir,
    indexedAt: scotCourtsIndex.indexedAt,
    entries: scotCourtsIndex.entries
      .filter(isCourtOfSessionRuleDocument)
      .map((entry) => toCourtOfSessionRuleIndexEntry(entry, scotCourtsIndex.indexedAt)),
  };
}

export async function normalizeCourtOfSessionRulesToMarkdown(input: {
  sourceDir?: string;
  deleteOriginals?: boolean;
} = {}): Promise<CourtOfSessionRulesNormalizeResult> {
  const sourceDir = resolveCourtOfSessionRulesDir(input.sourceDir);
  const deleteOriginals = input.deleteOriginals ?? true;
  const chapters = await discoverCourtOfSessionRules(sourceDir);
  const result: CourtOfSessionRulesNormalizeResult = {
    corpusId: CORPUS_ID,
    sourceDir,
    converted: 0,
    deletedOriginals: 0,
    skippedMarkdown: 0,
    failed: [],
  };

  for (const chapter of chapters) {
    if (extname(chapter.fileName).toLowerCase() === '.md') {
      result.skippedMarkdown += 1;
      continue;
    }

    try {
      const extracted = await extractText(chapter.path, { sourceId: `court-session-rule:${chapter.chapter}` });
      const markdownPath = chapter.path.replace(/\.[^.]+$/, '.md');
      await writeFile(markdownPath, formatCourtOfSessionRuleMarkdown(chapter, extracted.text), 'utf-8');
      result.converted += 1;
      if (deleteOriginals) {
        await unlink(chapter.path);
        result.deletedOriginals += 1;
      }
    } catch (err: unknown) {
      result.failed.push({
        path: chapter.path,
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return result;
}

export async function searchCourtOfSessionRules(input: CourtOfSessionRuleContextInput): Promise<CourtOfSessionRuleSearchResult[]> {
  const sourceDir = resolveCourtOfSessionRulesDir(input.sourceDir);
  const documents = await discoverScotCourtsCorpus(sourceDir);
  const index = await loadScotCourtsCorpusIndex(input.cachePath ?? DEFAULT_COURT_OF_SESSION_RULES_CACHE_PATH);
  if (index && index.sourceDir === sourceDir && await isScotCourtsIndexFresh(index, documents)) {
    const entries = index.entries
      .filter(isCourtOfSessionRuleDocument)
      .map((entry) => toCourtOfSessionRuleIndexEntry(entry, index.indexedAt));
    return searchCourtOfSessionRuleEntries(entries, {
      query: input.query,
      phaseId: input.phaseId,
      skillIds: input.skillIds,
      limit: input.limit,
    });
  }

  return searchCourtOfSessionRuleEntries(documents.filter(isCourtOfSessionRuleDocument).map(toCourtOfSessionRuleChapter), {
    query: input.query,
    phaseId: input.phaseId,
    skillIds: input.skillIds,
    limit: input.limit,
  });
}

export function searchCourtOfSessionRuleEntries(
  entries: Array<CourtOfSessionRuleChapter | CourtOfSessionRuleIndexEntry>,
  input: CourtOfSessionRuleSearchInput,
): CourtOfSessionRuleSearchResult[] {
  const terms = tokenize(input.query);
  const skillSet = new Set(input.skillIds ?? []);
  const phaseChapterHints = new Set((input.phaseId ? PHASE_RULE_HINTS[input.phaseId] : undefined) ?? []);

  return entries
    .map((entry) => {
      const indexed = isIndexedEntry(entry);
      const text = indexed ? entry.text : '';
      const titleHaystack = [entry.chapter, entry.title, entry.fileName, entry.keywords.join(' ')].join(' ').toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (titleHaystack.includes(term)) score += 4;
        if (text.toLowerCase().includes(term)) score += 1;
      }
      if (input.phaseId && entry.stageIds.includes(input.phaseId)) score += 3;
      if (phaseChapterHints.has(entry.chapter)) score += 4;
      for (const skillId of skillSet) {
        if (entry.skillIds.includes(skillId)) score += 2;
      }
      if (/\bcourt of session|rules of court|rcs|scotland|scots\b/i.test(input.query)) score += 1;
      if (terms.length === 0 && (input.phaseId || skillSet.size > 0)) score += 1;

      return {
        chapter: entry.chapter,
        title: entry.title,
        fileName: entry.fileName,
        relativePath: entry.relativePath,
        path: entry.path,
        score,
        snippet: indexed ? makeSnippet(text, terms) : undefined,
        stageIds: entry.stageIds,
        skillIds: entry.skillIds,
        keywords: entry.keywords,
        indexed,
      };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || compareChapterValues(a.chapter, b.chapter))
    .slice(0, input.limit ?? 8);
}

export async function buildCourtOfSessionRuleContext(input: CourtOfSessionRuleContextInput): Promise<string> {
  if (!shouldAttachCourtOfSessionRules(input)) return '';
  const results = await searchCourtOfSessionRules({
    ...input,
    query: input.query || input.phaseId || 'Court of Session rules',
    limit: input.limit ?? 6,
  });
  if (results.length === 0) return '';

  return [
    '## Court of Session Rules Corpus',
    `Harness corpus category: legal-corpora/scotcourts/${COURT_OF_SESSION_RULES_CATEGORY}`,
    'Use these repository-owned ScotCourts Rules of the Court of Session Markdown files as primary procedural sources for Court of Session work. Record the chapter title, local corpus path, access date, and exact proposition supported in any source log.',
    'Before finalising any procedural step, deadline, form, motion, petition, proof, reclaiming, judicial review, appeal, or bundle checklist, search the corpus and cite the exact chapter/rule text rather than relying on memory.',
    '',
    ...results.map((result) => {
      const snippet = result.snippet ? `\n  Snippet: ${result.snippet}` : '';
      return `- Chapter ${result.chapter}: ${result.title}\n  Path: ${result.relativePath ?? result.path}\n  Relevant stages: ${result.stageIds.join(', ')}${snippet}`;
    }),
    '',
    `CLI: harness rules court-session search "${escapeForPrompt(input.query || input.phaseId || 'Court of Session rules')}" --phase ${input.phaseId ?? 'law_and_policy_research'} --json`,
  ].join('\n');
}

function shouldAttachCourtOfSessionRules(input: CourtOfSessionRuleContextInput): boolean {
  const haystack = [
    input.query,
    input.matterMeta?.jurisdiction,
    input.matterMeta?.forum,
    input.matterMeta?.type,
  ].filter(Boolean).join(' ').toLowerCase();
  if (input.forceAttach) return true;

  const hasScotsSignal = /\b(scot|scots|scotland|scottish)\b/.test(haystack);
  const hasExplicitCourtOfSessionSignal =
    /\b(court of session|rules of the court of session|court of session rules|rcs|lord ordinary|inner house|outer house|reclaiming)\b/.test(haystack);
  const hasProcedureSignal = /\b(rules of court|judicial review|petition|motion|proof)\b/.test(haystack);
  const forumIsNotCourtOfSession =
    /\b(sheriff court|sheriff appeal|high court|justice of the peace|jp court|tribunal|county court|superior court)\b/.test(
      input.matterMeta?.forum?.toLowerCase() ?? '',
    );

  if (forumIsNotCourtOfSession) return false;
  if (hasExplicitCourtOfSessionSignal) return true;
  return Boolean(hasScotsSignal && (hasProcedureSignal || input.phaseId && COURT_OF_SESSION_PHASES.has(input.phaseId)));
}

function isCourtOfSessionRuleDocument(document: ScotCourtsDocument | ScotCourtsIndexEntry): boolean {
  const fileName = document.fileName.toLowerCase();
  const isChapterFile = /^chap(?:ter)?[-_]?0?\d+[a-z]?/.test(fileName);
  const isFocusedRoot = document.category === 'root' && isChapterFile;
  const isCourtOfSessionCategory =
    document.category === COURT_OF_SESSION_RULES_CATEGORY
    || document.categoryPath === COURT_OF_SESSION_RULES_CATEGORY
    || document.categoryPath.startsWith(`${COURT_OF_SESSION_RULES_CATEGORY}/`);
  const isRuleLike = document.documentKind === 'rule' || isChapterFile;

  return isRuleLike && (document.court === 'court_of_session' || isCourtOfSessionCategory || isFocusedRoot);
}

function toCourtOfSessionRuleChapter(document: ScotCourtsDocument): CourtOfSessionRuleChapter {
  const fileName = document.fileName;
  const chapter = parseChapter(document.fileName);
  const title = parseTitle(fileName, chapter);
  const keywords = deriveKeywords(chapter, title, fileName);
  const stageIds = deriveStageIds(chapter, title);
  const skillIds = deriveSkillIds(stageIds, title);
  return {
    corpusId: CORPUS_ID,
    chapter,
    title,
    fileName: document.fileName,
    relativePath: document.relativePath,
    path: document.path,
    stageIds,
    skillIds,
    keywords,
  };
}

function toCourtOfSessionRuleIndexEntry(
  document: ScotCourtsIndexEntry,
  indexedAt: string,
): CourtOfSessionRuleIndexEntry {
  return {
    ...toCourtOfSessionRuleChapter(document),
    sha256: document.sha256,
    textHash: document.textHash ?? '',
    text: document.text ?? '',
    fileSizeBytes: document.fileSizeBytes,
    fileMtimeMs: document.fileMtimeMs,
    extractedAt: document.extractedAt ?? indexedAt,
  };
}

function parseChapter(fileName: string): string {
  const slug = basename(fileName, extname(fileName)).toLowerCase();
  const match = slug.match(/^chapter-(\d+[a-z]?)/) ?? slug.match(/^chap0?(\d+[a-z]?)/);
  return normalizeChapter(match?.[1] ?? slug.replace(/^chapter-|^chap/, ''));
}

function parseTitle(fileName: string, chapter: string): string {
  const slug = basename(fileName, extname(fileName))
    .toLowerCase()
    .replace(/^chapter-\d+[a-z]?[-_]?/, '')
    .replace(/^chap0?\d+[a-z]?[-_]?/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
  const topic = slug ? titleCase(slug) : 'Untitled';
  return `Chapter ${chapter.toUpperCase()} - ${topic}`;
}

function deriveStageIds(chapter: string, title: string): string[] {
  const lower = title.toLowerCase();
  const stages = new Set<string>(['law_and_policy_research']);
  addStagesForChapter(chapter, stages);

  if (/\b(citation|application|offices|process|rolls|records|vacation judge|lay support|lay representation|attendance)\b/.test(lower)) {
    stages.add('intake_and_normalization');
    stages.add('procedural_route_planning');
  }
  if (/\b(evidence|proofs|jury|witness|recordings|productions|notices to admit)\b/.test(lower)) {
    stages.add('evidence_ingestion_and_fact_extraction');
    stages.add('document_production');
    stages.add('verification_and_hostile_review');
    stages.add('bundle_and_war_room_assembly');
  }
  if (/\b(summons|petition|minute|note|service|intimation|appearance|defences|answers|motions|amendment|counterclaims|third party|group procedure|transmission|remit|appeals|reclaiming|judicial review|suspension|interdict)\b/.test(lower)) {
    stages.add('procedural_route_planning');
    stages.add('document_production');
    stages.add('verification_and_hostile_review');
  }
  if (/\b(decrees|summary decree|delay|abandonment|caution|security|offers|expenses|costs|qocs|qualified one way costs)\b/.test(lower)) {
    stages.add('merits_and_risk_analysis');
    stages.add('verification_and_hostile_review');
  }
  if (/\b(process|records|proofs|jury|appeals|reclaiming|commercial actions|judicial review|productions|recovery)\b/.test(lower)) {
    stages.add('bundle_and_war_room_assembly');
    stages.add('operator_handoff');
  }

  return [...stages].sort();
}

function addStagesForChapter(chapter: string, stages: Set<string>): void {
  for (const [stageId, chapters] of Object.entries(PHASE_RULE_HINTS)) {
    if (chapters.includes(chapter)) stages.add(stageId);
  }
}

function deriveSkillIds(stageIds: string[], title: string): string[] {
  const lower = title.toLowerCase();
  const skills = new Set<string>([
    'atticus-court-of-session-rules',
    'atticus-scots-source-verification',
    'atticus-scots-master-orchestrator',
  ]);
  if (stageIds.includes('procedural_route_planning')) skills.add('atticus-scots-procedure-router');
  if (stageIds.includes('document_production') || stageIds.includes('bundle_and_war_room_assembly')) {
    skills.add('atticus-scots-litigation-machinery');
  }
  if (stageIds.includes('verification_and_hostile_review')) skills.add('atticus-scots-hostile-review');
  if (stageIds.includes('evidence_ingestion_and_fact_extraction') || /\b(evidence|proof|witness|productions)\b/.test(lower)) {
    skills.add('atticus-scots-evidence-matrix');
  }
  if (stageIds.includes('document_production')) skills.add('scots-legal-humanizer');
  return [...skills].sort();
}

function deriveKeywords(chapter: string, title: string, fileName: string): string[] {
  const base = tokenize(`${chapter} ${title} ${fileName}`);
  const extras: string[] = [];
  if (/\bpetition/i.test(title)) extras.push('petition', 'outer house');
  if (/\bjudicial review\b/i.test(title)) extras.push('judicial review');
  if (/\bmotion|minute|note\b/i.test(title)) extras.push('motion', 'minute', 'note', 'interlocutor');
  if (/\bservice|summons|calling|appearance\b/i.test(title)) extras.push('service', 'summons', 'calling', 'defender');
  if (/\bevidence|proof|witness|productions\b/i.test(title)) extras.push('evidence', 'proof', 'productions', 'witness');
  if (/\breclaiming|appeal|supreme court\b/i.test(title)) extras.push('appeal', 'inner house', 'reclaiming');
  return [...new Set([...base, ...extras])].slice(0, 40);
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
  const end = Math.min(normalized.length, matchIndex + 220);
  return normalized.slice(start, end);
}

function stripMarkdownMetadata(text: string): string {
  return text.replace(/^---\n[\s\S]*?\n---\n+/, '').replace(/^# .+\n+/, '');
}

function isIndexedEntry(entry: CourtOfSessionRuleChapter | CourtOfSessionRuleIndexEntry): entry is CourtOfSessionRuleIndexEntry {
  return typeof (entry as CourtOfSessionRuleIndexEntry).text === 'string';
}

function compareChapters(a: CourtOfSessionRuleChapter, b: CourtOfSessionRuleChapter): number {
  return compareChapterValues(a.chapter, b.chapter) || a.fileName.localeCompare(b.fileName);
}

function compareChapterValues(a: string, b: string): number {
  const parsedA = parseChapterSortValue(a);
  const parsedB = parseChapterSortValue(b);
  return parsedA.number - parsedB.number || parsedA.suffix.localeCompare(parsedB.suffix);
}

function parseChapterSortValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)([a-z]*)$/i);
  return {
    number: match ? Number(match[1]) : Number.MAX_SAFE_INTEGER,
    suffix: match?.[2] ?? value,
  };
}

function normalizeChapter(value: string): string {
  const match = value.toLowerCase().match(/^0*(\d+)([a-z]*)/);
  if (!match) return value.toLowerCase();
  return `${Number(match[1])}${match[2] ?? ''}`;
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

function formatCourtOfSessionRuleMarkdown(chapter: CourtOfSessionRuleChapter, text: string): string {
  const normalized = normalizeMarkdownText(text);
  return [
    '---',
    `corpus: ${chapter.corpusId}`,
    `chapter: ${JSON.stringify(chapter.chapter)}`,
    `title: ${JSON.stringify(chapter.title)}`,
    `source_file: ${JSON.stringify(chapter.fileName)}`,
    'conversion: atticus-markdown-normalization-v1',
    '---',
    '',
    `# ${chapter.title}`,
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
