import {
  discoverScotCourtsCorpus,
  searchScotCourtsCorpus,
  type ScotCourtsContextInput,
  type ScotCourtsDocument,
  type ScotCourtsSearchResult,
} from './scotcourts-corpus.js';

export const SHERIFF_COURT_RULES_CATEGORY = 'sheriff-court-civil-procedure-rules';
export const SHERIFF_COURT_RULES_SKILL_ID = 'atticus-sheriff-court-rules';

const DEFAULT_CONTEXT_LIMIT = 6;
const SHERIFF_COURT_RULE_PHASES = new Set([
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

export type SheriffCourtRulesContextInput = ScotCourtsContextInput;

export async function discoverSheriffCourtRules(sourceDir?: string): Promise<ScotCourtsDocument[]> {
  const documents = await discoverScotCourtsCorpus(sourceDir);
  return documents.filter(isSheriffCourtRule);
}

export async function searchSheriffCourtRules(input: SheriffCourtRulesContextInput): Promise<ScotCourtsSearchResult[]> {
  return searchScotCourtsCorpus({
    ...input,
    query: input.query || input.phaseId || 'sheriff court civil procedure rules',
    categoryIds: [SHERIFF_COURT_RULES_CATEGORY],
    court: 'sheriff_court',
    documentKind: 'rule',
  });
}

export async function buildSheriffCourtRuleContext(input: SheriffCourtRulesContextInput): Promise<string> {
  if (!shouldAttachSheriffCourtRules(input)) return '';

  const results = await searchSheriffCourtRules({
    ...input,
    query: input.query || input.phaseId || 'sheriff court civil procedure rules',
    skillIds: withSheriffRulesSkill(input.skillIds),
    limit: input.limit ?? DEFAULT_CONTEXT_LIMIT,
  });
  if (results.length === 0) return '';

  return [
    '## Sheriff Court Rules Corpus',
    'Harness corpus category: legal-corpora/scotcourts/sheriff-court-civil-procedure-rules',
    'Use this focused Sheriff Court civil procedure rules shortlist for ordinary cause, simple procedure, summary cause, small claims, summary applications, bankruptcy, FAI, taxation, adoption, child support, childcare, and maintenance procedure checks.',
    'Open or extract only the specific Markdown rule files needed for the current task. Record the local path, rule category, access date, and exact proposition supported in the source log.',
    '',
    ...results.map(formatSheriffRuleContextResult),
    '',
    `CLI: harness rules sheriff-court search "${escapeForPrompt(input.query || input.phaseId || 'sheriff court civil procedure rules')}" --phase ${input.phaseId ?? 'law_and_policy_research'} --json`,
  ].join('\n');
}

function isSheriffCourtRule(document: ScotCourtsDocument): boolean {
  return document.category === SHERIFF_COURT_RULES_CATEGORY
    && document.court === 'sheriff_court'
    && document.documentKind === 'rule';
}

function shouldAttachSheriffCourtRules(input: SheriffCourtRulesContextInput): boolean {
  const hasSheriffRuleSkill = input.skillIds?.includes(SHERIFF_COURT_RULES_SKILL_ID) ?? false;
  const haystack = [
    input.query,
    input.matterMeta?.jurisdiction,
    input.matterMeta?.forum,
    input.matterMeta?.type,
    input.matterMeta?.documentType,
  ].filter(Boolean).join(' ').toLowerCase();
  const hasSheriffSignal = hasSheriffRuleSkill
    || /\b(sheriff court|sheriff|ordinary cause|simple procedure|summary cause|small claim|summary application|summary applications|statutory application|statutory applications|bankruptcy|fatal accident inquiry|fai|taxation|child support|childcare|maintenance|adoption)\b/.test(haystack);

  if (!hasSheriffSignal) return false;
  if (input.phaseId && SHERIFF_COURT_RULE_PHASES.has(input.phaseId)) return true;
  if (hasSheriffRuleSkill) return true;
  return hasSheriffSignal;
}

function withSheriffRulesSkill(skillIds: string[] | undefined): string[] {
  return [...new Set([...(skillIds ?? []), SHERIFF_COURT_RULES_SKILL_ID])];
}

function formatSheriffRuleContextResult(result: ScotCourtsSearchResult): string {
  return [
    `- ${result.title}`,
    `  Path: ${result.path}`,
    `  Rule category: ${result.categoryPath}`,
    `  Relevant stages: ${result.stageIds.join(', ')}`,
  ].join('\n');
}

function escapeForPrompt(value: string): string {
  return value.replace(/"/g, '\\"');
}
