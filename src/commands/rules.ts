import chalk from 'chalk';
import {
  buildCourtOfSessionRuleContext,
  buildCourtOfSessionRulesIndex,
  DEFAULT_COURT_OF_SESSION_RULES_CACHE_PATH,
  discoverCourtOfSessionRules,
  normalizeCourtOfSessionRulesToMarkdown,
  searchCourtOfSessionRules,
} from '../rules/court-session-rules.js';
import {
  buildSheriffCourtRuleContext,
  discoverSheriffCourtRules,
  searchSheriffCourtRules,
} from '../rules/sheriff-court-rules.js';
import {
  buildScotCourtsCorpusContext,
  buildScotCourtsCorpusIndex,
  DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH,
  discoverScotCourtsCorpus,
  normalizeScotCourtsCorpusRulesToMarkdown,
  searchScotCourtsCorpus,
  type ScotCourtsCourt,
  type ScotCourtsDocumentKind,
} from '../rules/scotcourts-corpus.js';
import { parseNumberOption } from './number-options.js';

const SCOTCOURTS_COURTS: readonly ScotCourtsCourt[] = [
  'court_of_session',
  'sheriff_court',
  'sheriff_appeal_court',
  'criminal_courts',
  'scottish_courts',
];

const SCOTCOURTS_DOCUMENT_KINDS: readonly ScotCourtsDocumentKind[] = [
  'form',
  'rule',
  'guidance',
  'fee',
  'other',
];

export interface CourtSessionRulesOptions {
  sourceDir?: string;
  cachePath?: string;
  phase?: string;
  skill?: string[];
  limit?: string;
  json?: boolean;
  keepOriginals?: boolean;
}

export interface ScotCourtsCorpusOptions extends CourtSessionRulesOptions {
  category?: string[];
  court?: string;
  kind?: string;
  extractText?: boolean;
  maxTextDocs?: string;
}

export async function handleSheriffCourtRulesList(options: CourtSessionRulesOptions = {}): Promise<void> {
  try {
    const documents = await discoverSheriffCourtRules(options.sourceDir);
    const filtered = documents.filter((document) =>
      (!options.phase || document.stageIds.includes(options.phase))
      && (!(options.skill?.length) || options.skill.some((skill) => document.skillIds.includes(skill)))
    ).slice(0, parseLimit(options.limit, documents.length));
    if (options.json) {
      console.log(JSON.stringify(filtered, null, 2));
      return;
    }
    console.log(chalk.cyan('Sheriff Court rules corpus'));
    console.log(`  Rule documents: ${filtered.length}`);
    for (const document of filtered) {
      console.log(`  - ${chalk.bold(document.title)}`);
      console.log(`    ${chalk.gray(document.path)}`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Sheriff Court rules list failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleSheriffCourtRulesSearch(
  query: string,
  options: CourtSessionRulesOptions = {},
): Promise<void> {
  try {
    const results = await searchSheriffCourtRules({
      query,
      sourceDir: options.sourceDir,
      cachePath: options.cachePath,
      phaseId: options.phase,
      skillIds: options.skill,
      limit: parseLimit(options.limit, 8),
    });
    if (options.json) {
      console.log(JSON.stringify(results, null, 2));
      return;
    }
    console.log(chalk.cyan(`Sheriff Court rules for: ${query}`));
    for (const result of results) {
      console.log(`  - ${chalk.bold(result.title)} (${result.score.toFixed(1)})`);
      console.log(`    ${chalk.gray(result.path)}`);
      if (result.snippet) console.log(`    ${result.snippet}`);
    }
    if (results.length === 0) console.log(chalk.gray('  No matching Sheriff Court rule documents found.'));
  } catch (err: unknown) {
    console.error(chalk.red('Sheriff Court rules search failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleSheriffCourtRulesContext(
  objective: string,
  options: CourtSessionRulesOptions = {},
): Promise<void> {
  try {
    const context = await buildSheriffCourtRuleContext({
      query: objective,
      sourceDir: options.sourceDir,
      cachePath: options.cachePath,
      phaseId: options.phase,
      skillIds: options.skill,
      matterMeta: { jurisdiction: 'Scotland', forum: 'Sheriff Court' },
      limit: parseLimit(options.limit, 6),
    });
    if (options.json) {
      console.log(JSON.stringify({ objective, context }, null, 2));
      return;
    }
    console.log(context || chalk.gray('No Sheriff Court rule context selected.'));
  } catch (err: unknown) {
    console.error(chalk.red('Sheriff Court rules context failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleCourtSessionRulesList(options: CourtSessionRulesOptions = {}): Promise<void> {
  try {
    const chapters = await discoverCourtOfSessionRules(options.sourceDir);
    const filtered = chapters.filter((chapter) =>
      (!options.phase || chapter.stageIds.includes(options.phase))
      && (!(options.skill?.length) || options.skill.some((skill) => chapter.skillIds.includes(skill)))
    ).slice(0, parseLimit(options.limit, chapters.length));
    if (options.json) {
      console.log(JSON.stringify(filtered, null, 2));
      return;
    }
    console.log(chalk.cyan('Court of Session rules corpus'));
    console.log(`  Chapters: ${filtered.length}`);
    for (const chapter of filtered.slice(0, parseLimit(options.limit, filtered.length))) {
      console.log(`  - Chapter ${chapter.chapter}: ${chapter.title}`);
      console.log(`    ${chalk.gray(chapter.path)}`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Court rules list failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleCourtSessionRulesSearch(
  query: string,
  options: CourtSessionRulesOptions = {},
): Promise<void> {
  try {
    const results = await searchCourtOfSessionRules({
      query,
      sourceDir: options.sourceDir,
      cachePath: options.cachePath,
      phaseId: options.phase,
      skillIds: options.skill,
      limit: parseLimit(options.limit, 8),
    });
    if (options.json) {
      console.log(JSON.stringify(results, null, 2));
      return;
    }
    console.log(chalk.cyan(`Court of Session rules for: ${query}`));
    for (const result of results) {
      console.log(`  - Chapter ${result.chapter}: ${chalk.bold(result.title)} (${result.score.toFixed(1)})`);
      console.log(`    ${chalk.gray(result.path)}`);
      if (result.snippet) console.log(`    ${result.snippet}`);
    }
    if (results.length === 0) console.log(chalk.gray('  No matching rule chapters found.'));
  } catch (err: unknown) {
    console.error(chalk.red('Court rules search failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleCourtSessionRulesContext(
  objective: string,
  options: CourtSessionRulesOptions = {},
): Promise<void> {
  try {
    const context = await buildCourtOfSessionRuleContext({
      query: objective,
      sourceDir: options.sourceDir,
      cachePath: options.cachePath,
      phaseId: options.phase,
      skillIds: options.skill,
      matterMeta: { jurisdiction: 'Scotland' },
      limit: parseLimit(options.limit, 6),
    });
    if (options.json) {
      console.log(JSON.stringify({ objective, context }, null, 2));
      return;
    }
    console.log(context || chalk.gray('No Court of Session rule context selected.'));
  } catch (err: unknown) {
    console.error(chalk.red('Court rules context failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleCourtSessionRulesIndex(options: CourtSessionRulesOptions = {}): Promise<void> {
  try {
    const cachePath = options.cachePath ?? DEFAULT_COURT_OF_SESSION_RULES_CACHE_PATH;
    if (!options.json) {
      console.log(chalk.cyan('Indexing Court of Session rules...'));
      console.log(`  Cache: ${chalk.gray(cachePath)}`);
    }
    const index = await buildCourtOfSessionRulesIndex({
      sourceDir: options.sourceDir,
      cachePath,
    });
    const output = {
      corpusId: index.corpusId,
      sourceDir: index.sourceDir,
      cachePath,
      indexedAt: index.indexedAt,
      chapters: index.entries.length,
    };
    if (options.json) {
      console.log(JSON.stringify(output, null, 2));
      return;
    }
    console.log(chalk.green('✓'), `Indexed ${index.entries.length} Court of Session rule chapters`);
  } catch (err: unknown) {
    console.error(chalk.red('Court rules index failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleCourtSessionRulesNormalize(options: CourtSessionRulesOptions = {}): Promise<void> {
  try {
    if (!options.json) {
      console.log(chalk.cyan('Normalizing Court of Session rules to Markdown...'));
      console.log(`  Originals: ${options.keepOriginals ? 'kept' : 'deleted after successful conversion'}`);
    }
    const result = await normalizeCourtOfSessionRulesToMarkdown({
      sourceDir: options.sourceDir,
      deleteOriginals: !options.keepOriginals,
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(
      chalk.green('✓'),
      `Converted ${result.converted} Court of Session rule files; deleted ${result.deletedOriginals} originals; skipped ${result.skippedMarkdown} Markdown files`,
    );
    if (result.failed.length > 0) {
      console.log(chalk.yellow(`  ${result.failed.length} files failed; rerun with --json for details.`));
    }
  } catch (err: unknown) {
    console.error(chalk.red('Court rules normalize failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleScotCourtsCorpusList(options: ScotCourtsCorpusOptions = {}): Promise<void> {
  try {
    const documents = await discoverScotCourtsCorpus(options.sourceDir);
    const filtered = documents.filter((document) =>
      (!options.phase || document.stageIds.includes(options.phase))
      && (!(options.skill?.length) || options.skill.some((skill) => document.skillIds.includes(skill)))
      && (!(options.category?.length) || options.category.includes(document.category) || options.category.includes(document.categoryPath))
      && (!options.court || document.court === parseCourt(options.court))
      && (!options.kind || document.documentKind === parseKind(options.kind))
    ).slice(0, parseLimit(options.limit, documents.length));
    if (options.json) {
      console.log(JSON.stringify(filtered, null, 2));
      return;
    }
    console.log(chalk.cyan('ScotCourts corpus'));
    console.log(`  Documents: ${filtered.length}`);
    for (const document of filtered) {
      console.log(`  - ${chalk.bold(document.title)} [${document.documentKind}; ${document.court}]`);
      console.log(`    ${chalk.gray(document.path)}`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('ScotCourts corpus list failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleScotCourtsCorpusSearch(
  query: string,
  options: ScotCourtsCorpusOptions = {},
): Promise<void> {
  try {
    const results = await searchScotCourtsCorpus({
      query,
      sourceDir: options.sourceDir,
      cachePath: options.cachePath,
      phaseId: options.phase,
      skillIds: options.skill,
      categoryIds: options.category,
      court: parseCourt(options.court),
      documentKind: parseKind(options.kind),
      limit: parseLimit(options.limit, 10),
    });
    if (options.json) {
      console.log(JSON.stringify(results, null, 2));
      return;
    }
    console.log(chalk.cyan(`ScotCourts corpus for: ${query}`));
    for (const result of results) {
      console.log(`  - ${chalk.bold(result.title)} (${result.score.toFixed(1)}) [${result.documentKind}; ${result.court}]`);
      console.log(`    ${chalk.gray(result.path)}`);
      if (result.snippet) console.log(`    ${result.snippet}`);
    }
    if (results.length === 0) console.log(chalk.gray('  No matching ScotCourts documents found.'));
  } catch (err: unknown) {
    console.error(chalk.red('ScotCourts corpus search failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleScotCourtsCorpusContext(
  objective: string,
  options: ScotCourtsCorpusOptions = {},
): Promise<void> {
  try {
    const context = await buildScotCourtsCorpusContext({
      query: objective,
      sourceDir: options.sourceDir,
      cachePath: options.cachePath,
      phaseId: options.phase,
      skillIds: options.skill,
      categoryIds: options.category,
      court: parseCourt(options.court),
      documentKind: parseKind(options.kind),
      matterMeta: { jurisdiction: 'Scotland' },
      limit: parseLimit(options.limit, 6),
    });
    if (options.json) {
      console.log(JSON.stringify({ objective, context }, null, 2));
      return;
    }
    console.log(context || chalk.gray('No ScotCourts corpus context selected.'));
  } catch (err: unknown) {
    console.error(chalk.red('ScotCourts corpus context failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleScotCourtsCorpusIndex(options: ScotCourtsCorpusOptions = {}): Promise<void> {
  try {
    const cachePath = options.cachePath ?? DEFAULT_SCOTCOURTS_CORPUS_CACHE_PATH;
    if (!options.json) {
      console.log(chalk.cyan('Indexing ScotCourts corpus...'));
      console.log(`  Cache: ${chalk.gray(cachePath)}`);
      console.log(`  Text extraction: ${options.extractText ? 'enabled' : 'metadata only'}`);
    }
    const index = await buildScotCourtsCorpusIndex({
      sourceDir: options.sourceDir,
      cachePath,
      extractText: options.extractText,
      maxTextDocs: options.maxTextDocs ? parseLimit(options.maxTextDocs, Number.MAX_SAFE_INTEGER) : undefined,
    });
    const textEntries = index.entries.filter((entry) => entry.text).length;
    const output = {
      corpusId: index.corpusId,
      sourceDir: index.sourceDir,
      cachePath,
      indexedAt: index.indexedAt,
      documents: index.entries.length,
      textEntries,
    };
    if (options.json) {
      console.log(JSON.stringify(output, null, 2));
      return;
    }
    console.log(chalk.green('✓'), `Indexed ${index.entries.length} ScotCourts documents (${textEntries} with extracted text)`);
  } catch (err: unknown) {
    console.error(chalk.red('ScotCourts corpus index failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleScotCourtsCorpusNormalize(options: ScotCourtsCorpusOptions = {}): Promise<void> {
  try {
    if (!options.json) {
      console.log(chalk.cyan('Normalizing ScotCourts rules/procedure documents to Markdown...'));
      console.log(`  Originals: ${options.keepOriginals ? 'kept' : 'deleted after successful conversion'}`);
      console.log('  Form originals are always preserved.');
    }
    const result = await normalizeScotCourtsCorpusRulesToMarkdown({
      sourceDir: options.sourceDir,
      deleteOriginals: !options.keepOriginals,
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(
      chalk.green('✓'),
      `Converted ${result.converted} ScotCourts rules/procedure files; deleted ${result.deletedOriginals} originals; preserved ${result.skippedForms} form originals; skipped ${result.skippedMarkdown} Markdown files`,
    );
    if (result.failed.length > 0) {
      console.log(chalk.yellow(`  ${result.failed.length} files failed; rerun with --json for details.`));
    }
  } catch (err: unknown) {
    console.error(chalk.red('ScotCourts corpus normalize failed:'), (err as Error).message);
    process.exit(1);
  }
}

function parseLimit(value: string | undefined, fallback: number): number {
  return parseNumberOption(value, '--limit', {
    defaultValue: fallback,
    integer: true,
    min: 1,
  });
}

function parseCourt(value: string | undefined): ScotCourtsCourt | undefined {
  if (!value) return undefined;
  if (!SCOTCOURTS_COURTS.includes(value as ScotCourtsCourt)) {
    throw new Error(`Invalid --court value "${value}". Expected one of: ${SCOTCOURTS_COURTS.join(', ')}`);
  }
  return value as ScotCourtsCourt;
}

function parseKind(value: string | undefined): ScotCourtsDocumentKind | undefined {
  if (!value) return undefined;
  if (!SCOTCOURTS_DOCUMENT_KINDS.includes(value as ScotCourtsDocumentKind)) {
    throw new Error(`Invalid --kind value "${value}". Expected one of: ${SCOTCOURTS_DOCUMENT_KINDS.join(', ')}`);
  }
  return value as ScotCourtsDocumentKind;
}
