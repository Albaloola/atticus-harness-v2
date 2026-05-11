export type CaseManagementWorkProductType =
  | 'legal_research_memo'
  | 'procedural_route_memo'
  | 'merits_risk_memo'
  | 'draft_document';

export interface CaseManagementExpectation {
  matterName: string;
  requiredJurisdictions: string[];
  requiredTracks: string[];
  minPrimaryEvidenceSources: number;
  minChronologyEntries: number;
  minEvidenceMatrixRows: number;
  minIssues: number;
  minPendingQuestionQuality: number;
  minCitationCoverage: number;
  minDocumentWords: number;
  minMemoWords: number;
  requiredWorkProducts: CaseManagementWorkProductType[];
  enoughInformationForDraft: boolean;
  minMetricScores: Record<CaseManagementMetricName, number>;
}

export type CaseManagementMetricName =
  | 'legalDepth'
  | 'factualGrounding'
  | 'citationCoverage'
  | 'deadlineDetection'
  | 'questionQuality'
  | 'documentUsefulness'
  | 'recoveryCorrectness'
  | 'providerCompliance'
  | 'cost';

export interface CaseManagementObservation {
  matterName: string;
  caseState?: {
    authoritative?: boolean;
    jurisdictions?: string[];
    tracks?: string[];
    primaryEvidenceSourceCount?: number;
    generatedPrimaryEvidenceCount?: number;
    missingFactCount?: number;
    activeDeadlines?: Array<{ date: string; sourceIds: string[] }>;
  };
  pendingQuestions?: Array<{
    question: string;
    reason: string;
    blocks: string[];
    qualityScore: number;
  }>;
  chronology?: Array<{
    date: string;
    event: string;
    sourceIds: string[];
  }>;
  evidenceMatrix?: Array<{
    proposition: string;
    primarySourceIds: string[];
    generatedSourceIds?: string[];
  }>;
  issueMap?: Array<{
    issue: string;
    route: string;
    supportingEvidenceIds: string[];
    risks: string[];
  }>;
  workProducts?: Array<{
    type: CaseManagementWorkProductType;
    title: string;
    wordCount: number;
    citationCount: number;
    sourceIds: string[];
  }>;
  hostileReview?: {
    completed?: boolean;
    findingCount?: number;
    unresolvedCriticalFindingCount?: number;
  };
  handoffReport?: {
    completed?: boolean;
    nextActions?: string[];
    blockers?: string[];
  };
  completion?: {
    claimedComplete?: boolean;
    readyForExternalAction?: boolean;
  };
  output?: {
    junkFiles?: string[];
    reviewReadyFiles?: string[];
    rawCandidateFiles?: string[];
  };
  recovery?: {
    interruptionSimulated?: boolean;
    resumedFromCheckpoint?: boolean;
    duplicatedWorkProductCount?: number;
    lostState?: boolean;
  };
  provider?: {
    unsupportedToolCallCount?: number;
    jsonRetryRecovered?: boolean;
  };
  metrics?: Partial<Record<CaseManagementMetricName, number>>;
}

export interface CaseManagementBenchmarkResult {
  passed: boolean;
  failures: string[];
  metrics: Record<CaseManagementMetricName, number>;
}

const METRIC_NAMES: CaseManagementMetricName[] = [
  'legalDepth',
  'factualGrounding',
  'citationCoverage',
  'deadlineDetection',
  'questionQuality',
  'documentUsefulness',
  'recoveryCorrectness',
  'providerCompliance',
  'cost',
];

export function assertCaseManagementBenchmark(
  expectation: CaseManagementExpectation,
  observation: CaseManagementObservation,
): CaseManagementBenchmarkResult {
  const failures: string[] = [];

  requireEqual('matter name', expectation.matterName, observation.matterName, failures);
  requireCaseState(expectation, observation, failures);
  requireQuestionsWhenFactsAreMissing(expectation, observation, failures);
  requireChronology(expectation, observation, failures);
  requireEvidenceMatrix(expectation, observation, failures);
  requireIssueMap(expectation, observation, failures);
  requireWorkProducts(expectation, observation, failures);
  requireHostileReview(observation, failures);
  requireHandoffReport(observation, failures);
  requireNoFalseCompletion(observation, failures);
  requireCleanOutput(observation, failures);
  requireRecovery(observation, failures);
  requireProviderCompliance(observation, failures);

  const metrics = normalizeMetrics(observation);
  for (const metric of METRIC_NAMES) {
    const minimum = expectation.minMetricScores[metric];
    if (metrics[metric] < minimum) {
      failures.push(`metric ${metric} ${metrics[metric]} below minimum ${minimum}`);
    }
  }

  return {
    passed: failures.length === 0,
    failures,
    metrics,
  };
}

function requireCaseState(
  expectation: CaseManagementExpectation,
  observation: CaseManagementObservation,
  failures: string[],
): void {
  const state = observation.caseState;
  if (!state?.authoritative) failures.push('authoritative case state missing');
  if ((state?.primaryEvidenceSourceCount ?? 0) < expectation.minPrimaryEvidenceSources) {
    failures.push('authoritative case state does not cover the required primary source universe');
  }
  if ((state?.generatedPrimaryEvidenceCount ?? 0) > 0) {
    failures.push('generated work product treated as primary evidence');
  }
  requireSetCoverage('jurisdictions', expectation.requiredJurisdictions, state?.jurisdictions, failures);
  requireSetCoverage('tracks', expectation.requiredTracks, state?.tracks, failures);
}

function requireQuestionsWhenFactsAreMissing(
  expectation: CaseManagementExpectation,
  observation: CaseManagementObservation,
  failures: string[],
): void {
  const missingFactCount = observation.caseState?.missingFactCount ?? 0;
  if (missingFactCount === 0) return;
  const questions = observation.pendingQuestions ?? [];
  if (questions.length === 0) {
    failures.push('pending questions missing despite missing facts');
    return;
  }
  if (questions.some((question) => question.qualityScore < expectation.minPendingQuestionQuality)) {
    failures.push('pending question quality below threshold');
  }
  if (questions.some((question) => question.blocks.length === 0 || question.reason.trim().length === 0)) {
    failures.push('pending questions must explain reason and blocked work');
  }
}

function requireChronology(
  expectation: CaseManagementExpectation,
  observation: CaseManagementObservation,
  failures: string[],
): void {
  const chronology = observation.chronology ?? [];
  if (chronology.length < expectation.minChronologyEntries) {
    failures.push('chronology missing or too thin');
  }
  if (chronology.some((entry) => entry.sourceIds.length === 0)) {
    failures.push('chronology entries must cite evidence sources');
  }
}

function requireEvidenceMatrix(
  expectation: CaseManagementExpectation,
  observation: CaseManagementObservation,
  failures: string[],
): void {
  const rows = observation.evidenceMatrix ?? [];
  if (rows.length < expectation.minEvidenceMatrixRows) {
    failures.push('evidence matrix missing or too thin');
  }
  if (rows.some((row) => row.primarySourceIds.length === 0)) {
    failures.push('evidence matrix propositions must cite primary sources');
  }
  if (rows.some((row) => (row.generatedSourceIds ?? []).length > 0)) {
    failures.push('evidence matrix includes generated work product as evidence');
  }
}

function requireIssueMap(
  expectation: CaseManagementExpectation,
  observation: CaseManagementObservation,
  failures: string[],
): void {
  const issues = observation.issueMap ?? [];
  if (issues.length < expectation.minIssues) failures.push('issue map missing or too thin');
  if (issues.some((issue) => issue.supportingEvidenceIds.length === 0 || issue.risks.length === 0)) {
    failures.push('issue map entries must include supporting evidence and risks');
  }
}

function requireWorkProducts(
  expectation: CaseManagementExpectation,
  observation: CaseManagementObservation,
  failures: string[],
): void {
  const products = observation.workProducts ?? [];
  for (const type of expectation.requiredWorkProducts) {
    const product = products.find((candidate) => candidate.type === type);
    if (!product) {
      failures.push(`required work product missing: ${type}`);
      continue;
    }
    const minWords = type === 'draft_document' ? expectation.minDocumentWords : expectation.minMemoWords;
    if (product.wordCount < minWords) failures.push(`work product too thin: ${type}`);
    if (product.citationCount <= 0 || product.sourceIds.length === 0) {
      failures.push(`work product lacks citation grounding: ${type}`);
    }
  }
  if (expectation.enoughInformationForDraft && !products.some((product) => product.type === 'draft_document')) {
    failures.push('substantial draft document missing despite enough information');
  }
}

function requireHostileReview(observation: CaseManagementObservation, failures: string[]): void {
  const review = observation.hostileReview;
  if (!review?.completed) failures.push('hostile review missing');
  if ((review?.findingCount ?? 0) === 0) failures.push('hostile review has no findings');
  if ((review?.unresolvedCriticalFindingCount ?? 0) > 0) failures.push('hostile review has unresolved critical findings');
}

function requireHandoffReport(observation: CaseManagementObservation, failures: string[]): void {
  const report = observation.handoffReport;
  if (!report?.completed) failures.push('handoff report missing');
  if ((report?.nextActions ?? []).length === 0) failures.push('handoff report must include next actions');
}

function requireNoFalseCompletion(observation: CaseManagementObservation, failures: string[]): void {
  const claimedComplete = observation.completion?.claimedComplete === true;
  const hasBlockers = (observation.handoffReport?.blockers ?? []).length > 0;
  const hasQuestions = (observation.pendingQuestions ?? []).length > 0;
  if (claimedComplete && (hasBlockers || hasQuestions)) {
    failures.push('false completion: completion claimed while blockers or questions remain');
  }
  if (observation.completion?.readyForExternalAction === true && hasBlockers) {
    failures.push('false readiness: external action marked ready while blockers remain');
  }
}

function requireCleanOutput(observation: CaseManagementObservation, failures: string[]): void {
  const output = observation.output;
  if ((output?.junkFiles ?? []).length > 0) failures.push('junk files present in _output');
  if ((output?.rawCandidateFiles ?? []).length > 0) failures.push('raw candidate files present in _output');
  if ((output?.reviewReadyFiles ?? []).length === 0) failures.push('no review-ready handoff output reported');
}

function requireRecovery(observation: CaseManagementObservation, failures: string[]): void {
  const recovery = observation.recovery;
  if (!recovery?.interruptionSimulated) failures.push('interruption recovery was not exercised');
  if (!recovery?.resumedFromCheckpoint) failures.push('run did not resume from checkpoint after interruption');
  if ((recovery?.duplicatedWorkProductCount ?? 0) > 0) failures.push('recovery duplicated work products');
  if (recovery?.lostState) failures.push('recovery lost case state');
}

function requireProviderCompliance(observation: CaseManagementObservation, failures: string[]): void {
  const provider = observation.provider;
  if ((provider?.unsupportedToolCallCount ?? 0) > 0) failures.push('provider emitted unsupported tool calls');
  if (provider?.jsonRetryRecovered === false) failures.push('provider JSON retry did not recover');
}

function requireSetCoverage(label: string, expected: string[], observed: string[] | undefined, failures: string[]): void {
  const observedSet = new Set((observed ?? []).map(normalize));
  const missing = expected.filter((item) => !observedSet.has(normalize(item)));
  if (missing.length > 0) failures.push(`missing ${label}: ${missing.join(', ')}`);
}

function requireEqual(label: string, expected: string, observed: string, failures: string[]): void {
  if (expected !== observed) failures.push(`${label} expected ${expected}, observed ${observed}`);
}

function normalizeMetrics(observation: CaseManagementObservation): Record<CaseManagementMetricName, number> {
  const metrics = {} as Record<CaseManagementMetricName, number>;
  for (const metric of METRIC_NAMES) metrics[metric] = clamp(observation.metrics?.[metric] ?? 0);
  return metrics;
}

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function clamp(value: number): number {
  return Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
}
