import type { MatterPrimaryMode, MatterTrack, PrivateDataPolicy } from '../legal/matter-posture.js';
import type { LegalArtifactType } from '../legal/artifact-types.js';

export interface BenchmarkExpectation {
  matterName: string;
  expectedPosture: MatterPrimaryMode;
  expectedJurisdictions: string[];
  expectedTracks: MatterTrack[];
  expectedSourceUniverse: string[];
  expectedProductionUniverse: string[];
  expectedOutcomeAssertions: string[];
  requiredArtifacts: LegalArtifactType[];
  notApplicableOutputs: LegalArtifactType[];
  knownReadinessBlockers: string[];
  privacyPolicy: PrivateDataPolicy;
  scoringWeights: Partial<Record<BenchmarkScoreDimension, number>>;
}

export type BenchmarkScoreDimension =
  | 'posture'
  | 'jurisdiction'
  | 'sourceUniverse'
  | 'productionSelection'
  | 'legalOutcome'
  | 'requiredArtifacts'
  | 'citationReadiness'
  | 'telemetryConsistency'
  | 'toolErrorResilience'
  | 'falseCompletion';

export const DEFAULT_BENCHMARK_WEIGHTS: Record<BenchmarkScoreDimension, number> = {
  posture: 0.12,
  jurisdiction: 0.1,
  sourceUniverse: 0.1,
  productionSelection: 0.1,
  legalOutcome: 0.12,
  requiredArtifacts: 0.16,
  citationReadiness: 0.12,
  telemetryConsistency: 0.1,
  toolErrorResilience: 0.04,
  falseCompletion: 0.04,
};

export function normalizeExpectation(raw: Partial<BenchmarkExpectation> & { matterName: string }): BenchmarkExpectation {
  return {
    matterName: raw.matterName,
    expectedPosture: raw.expectedPosture ?? 'archive_analysis',
    expectedJurisdictions: raw.expectedJurisdictions ?? [],
    expectedTracks: raw.expectedTracks ?? ['unknown'],
    expectedSourceUniverse: raw.expectedSourceUniverse ?? [],
    expectedProductionUniverse: raw.expectedProductionUniverse ?? [],
    expectedOutcomeAssertions: raw.expectedOutcomeAssertions ?? [],
    requiredArtifacts: raw.requiredArtifacts ?? [],
    notApplicableOutputs: raw.notApplicableOutputs ?? [],
    knownReadinessBlockers: raw.knownReadinessBlockers ?? [],
    privacyPolicy: raw.privacyPolicy ?? 'local_only',
    scoringWeights: raw.scoringWeights ?? {},
  };
  dimensions: BenchmarkDimensionScore[];
  criticalFailures: string[];
  warnings: string[];
}

export function normalizeWeights(weights?: Partial<ScoringWeights>): ScoringWeights {
  const merged = { ...DEFAULT_SCORING_WEIGHTS, ...weights };
  const total = Object.values(merged).reduce((sum, value) => sum + value, 0);
  if (total <= 0) return DEFAULT_SCORING_WEIGHTS;
  return {
    posture: merged.posture / total,
    jurisdiction: merged.jurisdiction / total,
    sourceUniverse: merged.sourceUniverse / total,
    productionSelection: merged.productionSelection / total,
    legalOutcome: merged.legalOutcome / total,
    requiredArtifacts: merged.requiredArtifacts / total,
    citationReadiness: merged.citationReadiness / total,
    telemetry: merged.telemetry / total,
    toolErrorResilience: merged.toolErrorResilience / total,
    falseCompletion: merged.falseCompletion / total,
  };
}
