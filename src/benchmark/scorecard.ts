import {
  type BenchmarkDimensionScore,
  type BenchmarkExpectation,
  type BenchmarkObservation,
  type BenchmarkScorecard,
  type ScoringWeights,
  normalizeWeights,
} from './expectation.js';

const PASS_THRESHOLD = 0.85;
const NEEDS_FOLLOWUP_THRESHOLD = 0.7;

export function scoreBenchmark(
  expectation: BenchmarkExpectation,
  observation: BenchmarkObservation,
): BenchmarkScorecard {
  const weights = normalizeWeights(expectation.scoringWeights);
  const dimensions: BenchmarkDimensionScore[] = [
    dimension('posture', weights, scorePosture(expectation, observation)),
    dimension('jurisdiction', weights, scoreSetCoverage('jurisdiction', expectation.expectedJurisdictions, observation.jurisdictions)),
    dimension('sourceUniverse', weights, scoreUniverse('source universe', expectation.expectedSourceUniverse, observation.sourceUniverse)),
    dimension('productionSelection', weights, scoreUniverse('production universe', expectation.expectedProductionUniverse, observation.productionUniverse)),
    dimension('legalOutcome', weights, scoreOutcome(expectation, observation)),
    dimension('requiredArtifacts', weights, scoreRequiredArtifacts(expectation, observation)),
    dimension('citationReadiness', weights, scoreBoolean('citation/readiness', observation.citationReadinessSatisfied)),
    dimension('telemetry', weights, scoreTelemetry(observation)),
    dimension('toolErrorResilience', weights, scoreToolErrors(observation)),
    dimension('falseCompletion', weights, scoreFalseCompletion(expectation, observation)),
  ];

  const criticalFailures = findCriticalFailures(expectation, observation, dimensions);
  const weighted = dimensions.reduce((sum, item) => sum + item.score * item.weight, 0);
  const score = criticalFailures.length > 0 ? Math.min(weighted, 0.69) : weighted;
  const status = criticalFailures.length > 0 || score < NEEDS_FOLLOWUP_THRESHOLD
    ? 'fail'
    : score >= PASS_THRESHOLD
      ? 'pass'
      : 'needs_followup';

  return {
    matterName: expectation.matterName,
    score: round(score),
    status,
    threshold: { pass: PASS_THRESHOLD, needsFollowup: NEEDS_FOLLOWUP_THRESHOLD },
    dimensions,
    criticalFailures,
    warnings: dimensions.flatMap((item) => item.passed ? [] : item.notes.map((note) => `${item.name}: ${note}`)),
  };
}

function dimension(
  name: keyof ScoringWeights,
  weights: ScoringWeights,
  result: { score: number; notes: string[]; passAt?: number },
): BenchmarkDimensionScore {
  const score = clamp(result.score);
  return {
    name,
    score: round(score),
    weight: round(weights[name]),
    passed: score >= (result.passAt ?? 0.8),
    notes: result.notes,
  };
}

function scorePosture(expectation: BenchmarkExpectation, observation: BenchmarkObservation): { score: number; notes: string[] } {
  if (observation.posture === expectation.expectedPosture) return { score: 1, notes: [] };
  return { score: 0, notes: [`expected ${expectation.expectedPosture}, observed ${observation.posture ?? 'missing'}`] };
}

function scoreSetCoverage(name: string, expected: string[], observed: string[] = []): { score: number; notes: string[] } {
  if (expected.length === 0) return { score: 1, notes: [] };
  const observedSet = new Set(observed.map(normalize));
  const matched = expected.filter((item) => observedSet.has(normalize(item)));
  const score = matched.length / expected.length;
  const missing = expected.filter((item) => !observedSet.has(normalize(item)));
  return { score, notes: missing.length ? [`missing ${name}: ${missing.join(', ')}`] : [] };
}

function scoreUniverse(
  label: string,
  expected: { expectedCount?: number; minCount?: number; requiredIds?: string[]; officialManifestRequired?: boolean },
  observed?: { count?: number; ids?: string[]; officialManifestUsed?: boolean },
): { score: number; notes: string[] } {
  const notes: string[] = [];
  const scores: number[] = [];
  const count = observed?.count ?? observed?.ids?.length ?? 0;

  if (expected.expectedCount !== undefined) {
    scores.push(expected.expectedCount === 0 ? (count === 0 ? 1 : 0) : Math.min(count / expected.expectedCount, 1));
    if (count !== expected.expectedCount) notes.push(`${label} count ${count} differs from expected ${expected.expectedCount}`);
  }
  if (expected.minCount !== undefined) {
    scores.push(count >= expected.minCount ? 1 : count / expected.minCount);
    if (count < expected.minCount) notes.push(`${label} count ${count} below minimum ${expected.minCount}`);
  }
  if (expected.requiredIds?.length) {
    const coverage = scoreSetCoverage(`${label} ids`, expected.requiredIds, observed?.ids);
    scores.push(coverage.score);
    notes.push(...coverage.notes);
  }
  if (expected.officialManifestRequired) {
    scores.push(observed?.officialManifestUsed ? 1 : 0);
    if (!observed?.officialManifestUsed) notes.push(`${label} did not use official manifest`);
  }

  if (scores.length === 0) return { score: 1, notes: [] };
  return { score: average(scores), notes };
}

function scoreOutcome(expectation: BenchmarkExpectation, observation: BenchmarkObservation): { score: number; notes: string[] } {
  const expected = expectation.expectedOutcomeAssertions;
  const observed = observation.outcomeAssertions ?? [];
  const coverage = scoreSetCoverage('outcome assertions', expected, observed);
  const critical = expectation.criticalOutcomeAssertions ?? [];
  const criticalCoverage = scoreSetCoverage('critical outcome assertions', critical, observed);
  return {
    score: critical.length ? Math.min(coverage.score, criticalCoverage.score) : coverage.score,
    notes: [...coverage.notes, ...criticalCoverage.notes],
  };
}

function scoreRequiredArtifacts(expectation: BenchmarkExpectation, observation: BenchmarkObservation): { score: number; notes: string[] } {
  return scoreSetCoverage('required artifacts', expectation.requiredArtifacts, observation.artifacts);
}

function scoreBoolean(label: string, value: boolean | undefined): { score: number; notes: string[]; passAt: number } {
  if (value === true) return { score: 1, notes: [], passAt: 1 };
  if (value === false) return { score: 0, notes: [`${label} unsatisfied`], passAt: 1 };
  return { score: 0.5, notes: [`${label} not reported`], passAt: 1 };
}

function scoreTelemetry(observation: BenchmarkObservation): { score: number; notes: string[] } {
  const telemetry = observation.telemetry;
  if (!telemetry) return { score: 0.5, notes: ['telemetry not reported'] };
  const scores: number[] = [];
  const notes: string[] = [];
  if (telemetry.totalPhases !== undefined && telemetry.completedPhases !== undefined) {
    scores.push(telemetry.totalPhases === 0 ? 1 : telemetry.completedPhases / telemetry.totalPhases);
  }
  if (telemetry.candidateCount !== undefined && telemetry.filesystemCandidateCount !== undefined) {
    const match = telemetry.candidateCount === telemetry.filesystemCandidateCount;
    scores.push(match ? 1 : 0);
    if (!match) notes.push(`candidate index drift: index=${telemetry.candidateCount}, filesystem=${telemetry.filesystemCandidateCount}`);
  }
  if (telemetry.artifactCount !== undefined && telemetry.filesystemArtifactCount !== undefined) {
    const match = telemetry.artifactCount === telemetry.filesystemArtifactCount;
    scores.push(match ? 1 : 0);
    if (!match) notes.push(`artifact index drift: index=${telemetry.artifactCount}, filesystem=${telemetry.filesystemArtifactCount}`);
  }
  return { score: scores.length ? average(scores) : 0.75, notes };
}

function scoreToolErrors(observation: BenchmarkObservation): { score: number; notes: string[] } {
  const errors = observation.toolErrors ?? [];
  if (errors.length === 0) return { score: 1, notes: [] };
  const recovered = errors.filter((error) => error.recovered).length;
  return {
    score: recovered / errors.length,
    notes: recovered === errors.length ? [] : [`${errors.length - recovered} unrecovered tool error(s)`],
  };
}

function scoreFalseCompletion(expectation: BenchmarkExpectation, observation: BenchmarkObservation): { score: number; notes: string[]; passAt: number } {
  const runStatus = observation.telemetry?.runStatus;
  const completed = runStatus === 'complete' || runStatus === 'completed';
  if (!completed) return { score: 1, notes: [], passAt: 1 };
  const artifactScore = scoreRequiredArtifacts(expectation, observation);
  const sourceScore = scoreUniverse('source universe', expectation.expectedSourceUniverse, observation.sourceUniverse);
  const hasCriticalGap = artifactScore.score < 1 || sourceScore.score < 0.8;
  return hasCriticalGap
    ? { score: 0, notes: ['run claims completion while required benchmark outputs are missing'], passAt: 1 }
    : { score: 1, notes: [], passAt: 1 };
}

function findCriticalFailures(
  expectation: BenchmarkExpectation,
  observation: BenchmarkObservation,
  dimensions: BenchmarkDimensionScore[],
): string[] {
  const failures: string[] = [];
  const privacyEvents = observation.privacyEvents ?? [];
  if (!expectation.privacyPolicy.allowExternalActions && privacyEvents.some((event) => event.kind === 'external_action')) {
    failures.push('privacy policy violation: external action recorded');
  }
  if (!expectation.privacyPolicy.allowPrivateWebSearch && privacyEvents.some((event) => event.kind === 'private_web_search')) {
    failures.push('privacy policy violation: private web search recorded');
  }
  if (privacyEvents.some((event) => event.kind === 'private_data_disclosure')) {
    failures.push('privacy policy violation: private data disclosure recorded');
  }
  const falseCompletion = dimensions.find((item) => item.name === 'falseCompletion');
  if (falseCompletion && falseCompletion.score === 0) {
    failures.push('critical false-completion: terminal status without required source/artifact satisfaction');
  }
  return failures;
}

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function average(values: number[]): number {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function clamp(value: number): number {
  return Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
}

function round(value: number): number {
  return Math.round(value * 1000) / 1000;
}
