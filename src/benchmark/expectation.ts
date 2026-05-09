export type BenchmarkMode = 'live_matter' | 'retrospective_benchmark' | 'archive_analysis';
export type BenchmarkPrivacyLevel = 'public' | 'private' | 'mixed';

export interface BenchmarkPrivacyPolicy {
  level: BenchmarkPrivacyLevel;
  allowExternalActions: boolean;
  allowPrivateWebSearch: boolean;
  notes?: string;
}

export interface ExpectedSourceUniverse {
  expectedCount?: number;
  minCount?: number;
  requiredIds?: string[];
  officialManifestRequired?: boolean;
  notes?: string;
}

export interface ExpectedProductionUniverse {
  expectedCount?: number;
  minCount?: number;
  requiredIds?: string[];
  notes?: string;
}

export interface ScoringWeights {
  posture: number;
  jurisdiction: number;
  sourceUniverse: number;
  productionSelection: number;
  legalOutcome: number;
  requiredArtifacts: number;
  citationReadiness: number;
  telemetry: number;
  toolErrorResilience: number;
  falseCompletion: number;
}

export const DEFAULT_SCORING_WEIGHTS: ScoringWeights = {
  posture: 0.1,
  jurisdiction: 0.1,
  sourceUniverse: 0.15,
  productionSelection: 0.1,
  legalOutcome: 0.15,
  requiredArtifacts: 0.15,
  citationReadiness: 0.08,
  telemetry: 0.06,
  toolErrorResilience: 0.06,
  falseCompletion: 0.05,
};

export interface BenchmarkExpectation {
  matterName: string;
  expectedPosture: BenchmarkMode;
  expectedJurisdictions: string[];
  expectedTracks: string[];
  expectedSourceUniverse: ExpectedSourceUniverse;
  expectedProductionUniverse: ExpectedProductionUniverse;
  expectedOutcomeAssertions: string[];
  requiredArtifacts: string[];
  notApplicableOutputs: string[];
  knownReadinessBlockers: string[];
  privacyPolicy: BenchmarkPrivacyPolicy;
  scoringWeights?: Partial<ScoringWeights>;
  criticalOutcomeAssertions?: string[];
  notes?: string;
}

export interface BenchmarkObservation {
  matterName: string;
  posture?: BenchmarkMode | string;
  jurisdictions?: string[];
  tracks?: string[];
  sourceUniverse?: {
    count?: number;
    ids?: string[];
    officialManifestUsed?: boolean;
  };
  productionUniverse?: {
    count?: number;
    ids?: string[];
  };
  outcomeAssertions?: string[];
  artifacts?: string[];
  notApplicableOutputs?: string[];
  readinessBlockers?: string[];
  citationReadinessSatisfied?: boolean;
  telemetry?: {
    runStatus?: string;
    phase?: string;
    completedPhases?: number;
    totalPhases?: number;
    candidateCount?: number;
    artifactCount?: number;
    filesystemCandidateCount?: number;
    filesystemArtifactCount?: number;
  };
  toolErrors?: Array<{ kind: string; recovered?: boolean; message?: string }>;
  privacyEvents?: Array<{ kind: 'external_action' | 'private_web_search' | 'private_data_disclosure'; detail?: string }>;
}

export interface BenchmarkDimensionScore {
  name: keyof ScoringWeights;
  score: number;
  weight: number;
  passed: boolean;
  notes: string[];
}

export interface BenchmarkScorecard {
  matterName: string;
  score: number;
  status: 'pass' | 'needs_followup' | 'fail';
  threshold: {
    pass: 0.85;
    needsFollowup: 0.7;
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
