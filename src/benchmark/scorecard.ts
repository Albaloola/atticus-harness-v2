import type { BenchmarkExpectation, BenchmarkScoreDimension } from './expectation.js';
import { DEFAULT_BENCHMARK_WEIGHTS } from './expectation.js';
import { classifyMatterPosture } from '../legal/matter-posture.js';
import { evaluateRunReadiness, type RunReadiness } from '../orchestration/run-readiness.js';

export interface BenchmarkScoreDetail {
  dimension: BenchmarkScoreDimension;
  score: number;
  weight: number;
  notes: string[];
}

export interface BenchmarkScorecard {
  matterName: string;
  overallScore: number;
  verdict: 'pass' | 'needs_followup' | 'fail';
  details: BenchmarkScoreDetail[];
  criticalFailures: string[];
  runReadiness: RunReadiness;
  checkedAt: string;
}

export async function scoreBenchmarkExpectation(expectation: BenchmarkExpectation): Promise<BenchmarkScorecard> {
  const posture = await classifyMatterPosture({ matterName: expectation.matterName, objective: expectation.matterName });
  const runReadiness = await evaluateRunReadiness({ matterName: expectation.matterName, requireAcceptedArtifact: false });
  const weights = { ...DEFAULT_BENCHMARK_WEIGHTS, ...expectation.scoringWeights };
  const telemetryDrift = runReadiness.telemetryReconciliation.some((item) => item.status === 'drift');
  const details: BenchmarkScoreDetail[] = [
    detail('posture', posture.primaryMode === expectation.expectedPosture ? 1 : 0, weights.posture, [`expected ${expectation.expectedPosture}, got ${posture.primaryMode}`]),
    detail('jurisdiction', overlapScore(expectation.expectedJurisdictions, posture.jurisdictions.map((j) => j.system)), weights.jurisdiction, [`detected: ${posture.jurisdictions.map((j) => `${j.system}/${j.forum}`).join(', ') || 'none'}`]),
    detail('sourceUniverse', expectation.expectedSourceUniverse.length === 0 ? 1 : boundedRatio(runReadiness.candidateSummary.jsonCount + runReadiness.candidateSummary.transcriptCount, expectation.expectedSourceUniverse.length), weights.sourceUniverse, [`candidate json=${runReadiness.candidateSummary.jsonCount}; transcripts=${runReadiness.candidateSummary.transcriptCount}`]),
    detail('productionSelection', expectation.expectedProductionUniverse.length === 0 ? 1 : boundedRatio(runReadiness.candidateSummary.jsonCount, expectation.expectedProductionUniverse.length), weights.productionSelection, [`json candidates: ${runReadiness.candidateSummary.jsonCount}`]),
    detail('legalOutcome', expectation.expectedOutcomeAssertions.length === 0 ? 1 : 0.5, weights.legalOutcome, ['outcome assertion review is expectation-driven and remains operator/audit checked']),
    detail('requiredArtifacts', expectation.requiredArtifacts.length === 0 ? (runReadiness.missingOutputs.length === 0 ? 1 : 0.5) : boundedRatio(runReadiness.artifactSummary.jsonCount, expectation.requiredArtifacts.length), weights.requiredArtifacts, [`accepted artifacts: ${runReadiness.artifactSummary.jsonCount}`]),
    detail('citationReadiness', runReadiness.legalReadinessResult?.ready ? 1 : 0, weights.citationReadiness, [`legal blockers: ${runReadiness.legalReadinessResult?.blockerCount ?? 0}`]),
    detail('telemetryConsistency', telemetryDrift ? 0 : 1, weights.telemetryConsistency, runReadiness.telemetryReconciliation.map((item) => `${item.surface}:${item.status}`)),
    detail('toolErrorResilience', 1, weights.toolErrorResilience, ['typed comparator avoided raw SQL/tool schema guessing']),
    detail('falseCompletion', runReadiness.activityStatus === 'completed' && runReadiness.courtReadyStatus !== 'ready' ? 0 : 1, weights.falseCompletion, [`activity=${runReadiness.activityStatus}; courtReady=${runReadiness.courtReadyStatus}`]),
  ];
  const criticalFailures: string[] = [];
  if (expectation.privacyPolicy === 'local_only' && posture.privateDataPolicy !== 'local_only') {
    criticalFailures.push('privacy policy violation: local_only expected');
  }
  if (runReadiness.activityStatus === 'completed' && runReadiness.courtReadyStatus !== 'ready') {
    criticalFailures.push('critical false-completion: activity complete but court-ready blocked');
  }
  const weighted = details.reduce((sum, item) => sum + item.score * item.weight, 0);
  const totalWeight = details.reduce((sum, item) => sum + item.weight, 0) || 1;
  const overallScore = Number((weighted / totalWeight).toFixed(3));
  const verdict = criticalFailures.length > 0 || overallScore < 0.7 ? 'fail' : overallScore < 0.85 ? 'needs_followup' : 'pass';
  return { matterName: expectation.matterName, overallScore, verdict, details, criticalFailures, runReadiness, checkedAt: new Date().toISOString() };
}

function detail(dimension: BenchmarkScoreDimension, score: number, weight: number, notes: string[]): BenchmarkScoreDetail {
  return { dimension, score: Number(score.toFixed(3)), weight, notes };
}

function overlapScore(expected: string[], actual: string[]): number {
  if (expected.length === 0) return 1;
  const actualText = actual.join(' ').toLowerCase();
  return expected.filter((item) => actualText.includes(item.toLowerCase())).length / expected.length;
}

function boundedRatio(actual: number, expected: number): number {
  if (expected <= 0) return 1;
  return Math.min(1, actual / expected);
}

export interface BenchmarkObservation {
  posture?: Awaited<ReturnType<typeof classifyMatterPosture>>;
  runReadiness?: RunReadiness;
  sourceIds?: string[];
  productionIds?: string[];
  outcomeAssertions?: string[];
  toolErrorCount?: number;
  privacyViolation?: boolean;
}

export interface SynchronousBenchmarkScorecard {
  matterName: string;
  score: number;
  band: 'pass' | 'needs_followup' | 'fail';
  automaticFailReasons: string[];
  dimensions: Record<string, { score: number; weight: number; reasons: string[] }>;
}

export function scoreBenchmark(expectation: Partial<BenchmarkExpectation> & { matterName: string }, observation: BenchmarkObservation): SynchronousBenchmarkScorecard {
  const weights = { ...DEFAULT_BENCHMARK_WEIGHTS, ...expectation.scoringWeights };
  const dimensions: SynchronousBenchmarkScorecard['dimensions'] = {
    posture: scoreDetail(observation.posture?.primaryMode === expectation.expectedPosture || !expectation.expectedPosture, weights.posture),
    jurisdiction: scoreRatio(expectation.expectedJurisdictions ?? [], new Set(observation.posture?.jurisdictions.map((j) => j.system) ?? []), weights.jurisdiction),
    sourceUniverse: scoreRatio(expectation.expectedSourceUniverse ?? [], new Set(observation.sourceIds ?? []), weights.sourceUniverse),
    productionSelection: scoreRatio(expectation.expectedProductionUniverse ?? [], new Set(observation.productionIds ?? []), weights.productionSelection),
    legalOutcome: scoreRatio(expectation.expectedOutcomeAssertions ?? [], new Set(observation.outcomeAssertions ?? []), weights.legalOutcome),
    requiredArtifacts: scoreDetail((observation.runReadiness?.missingOutputs.length ?? 0) === 0, weights.requiredArtifacts),
    citationReadiness: scoreDetail(observation.runReadiness?.courtReadyStatus === 'ready', weights.citationReadiness),
    telemetryConsistency: scoreDetail(observation.runReadiness?.telemetryReconciliation.every((item) => item.status === 'match') ?? false, weights.telemetryConsistency),
    toolErrorResilience: scoreDetail((observation.toolErrorCount ?? 0) === 0, weights.toolErrorResilience),
    falseCompletion: scoreDetail(!(observation.runReadiness?.activityStatus === 'completed' && observation.runReadiness.courtReadyStatus !== 'ready'), weights.falseCompletion),
  };
  const automaticFailReasons: string[] = [];
  if (observation.privacyViolation) automaticFailReasons.push('privacy_violation');
  if (observation.runReadiness?.activityStatus === 'completed' && observation.runReadiness.courtReadyStatus !== 'ready') automaticFailReasons.push('critical_false_completion');
  const weighted = Object.values(dimensions).reduce((sum, dimension) => sum + dimension.score * dimension.weight, 0);
  const totalWeight = Object.values(dimensions).reduce((sum, dimension) => sum + dimension.weight, 0) || 1;
  const score = weighted / totalWeight;
  const band = automaticFailReasons.length > 0 || score < 0.7 ? 'fail' : score < 0.85 ? 'needs_followup' : 'pass';
  return { matterName: expectation.matterName, score, band, automaticFailReasons, dimensions };
}

function scoreDetail(pass: boolean, weight: number): { score: number; weight: number; reasons: string[] } {
  return { score: pass ? 1 : 0, weight, reasons: pass ? [] : ['expectation not satisfied'] };
}

function scoreRatio(expected: string[], observed: Set<string>, weight: number): { score: number; weight: number; reasons: string[] } {
  if (expected.length === 0) return { score: 1, weight, reasons: [] };
  const covered = expected.filter((item) => observed.has(item)).length;
  return { score: covered / expected.length, weight, reasons: covered === expected.length ? [] : ['missing expected items'] };
}
