import type { BenchmarkExpectation } from './expectation.js';

const DILLON_SOURCE_IDS = Array.from({ length: 14 }, (_, index) => `DIL-SRC-${String(index + 1).padStart(4, '0')}`);

export const SEED_BENCHMARK_EXPECTATIONS: Record<string, BenchmarkExpectation> = {
  'dillon-legacy-act-uksc': {
    matterName: 'dillon-legacy-act-uksc',
    expectedPosture: 'retrospective_benchmark',
    expectedJurisdictions: ['UKSC', 'Northern Ireland'],
    expectedTracks: ['concluded appellate record', 'legacy act constitutional challenge'],
    expectedSourceUniverse: { expectedCount: 14, requiredIds: DILLON_SOURCE_IDS, officialManifestRequired: true },
    expectedProductionUniverse: { expectedCount: 14, requiredIds: DILLON_SOURCE_IDS },
    expectedOutcomeAssertions: [
      'Secretary of State appeal allowed on Windsor Framework and ICRIR grounds',
      'Charter cross-appeal dismissed',
      'abandoned or unappealed Human Rights Act section 4 declarations were not disturbed',
    ],
    criticalOutcomeAssertions: ['abandoned or unappealed Human Rights Act section 4 declarations were not disturbed'],
    requiredArtifacts: ['retrospective-source-packet', 'outcome-summary', 'production-selection-analysis'],
    notApplicableOutputs: ['live filing', 'service', 'Scotland procedure'],
    knownReadinessBlockers: ['candidate/artifact index drift in original run'],
    privacyPolicy: { level: 'public', allowExternalActions: false, allowPrivateWebSearch: false },
  },
  'omer-elbushra-ultimate-benchmark': {
    matterName: 'omer-elbushra-ultimate-benchmark',
    expectedPosture: 'live_matter',
    expectedJurisdictions: ['Scotland', 'Court of Session', 'University of Glasgow', 'SLCC'],
    expectedTracks: ['ordinary action', 'judicial review', 'fitness to practise', 'SAR/data protection', 'student union', 'regulatory complaint'],
    expectedSourceUniverse: { minCount: 2700 },
    expectedProductionUniverse: { minCount: 1, notes: 'Production families should be identified even if no final bundle is accepted.' },
    expectedOutcomeAssertions: [
      'mixed Scottish active multi-track matter',
      'primary documents must be separated from drafts and strategy memos',
      'unsupported media and password-protected PDFs remain readiness blockers',
    ],
    requiredArtifacts: ['production-index', 'court-ready-bundle', 'operator-handoff'],
    notApplicableOutputs: ['external filing', 'external service', 'private web search'],
    knownReadinessBlockers: ['unsupported media', 'password-protected PDFs', 'final bundle/export absent'],
    privacyPolicy: { level: 'private', allowExternalActions: false, allowPrivateWebSearch: false, notes: 'Use only local/private matter data and generic public procedure sources.' },
  },
  'cherry-state-summary': {
    matterName: 'cherry-state-summary',
    expectedPosture: 'retrospective_benchmark',
    expectedJurisdictions: ['UK constitutional appellate'],
    expectedTracks: ['public constitutional appellate benchmark'],
    expectedSourceUniverse: { minCount: 1, officialManifestRequired: true },
    expectedProductionUniverse: { minCount: 1 },
    expectedOutcomeAssertions: ['partial or blocked repaired runs are not complete until required outputs are satisfied'],
    requiredArtifacts: ['retrospective-source-packet', 'outcome-summary'],
    notApplicableOutputs: ['live filing', 'service'],
    knownReadinessBlockers: ['partial phases', 'blocked phases', 'zero-findings retry outputs'],
    privacyPolicy: { level: 'public', allowExternalActions: false, allowPrivateWebSearch: false },
  },
  'napier-state-summary': {
    matterName: 'napier-state-summary',
    expectedPosture: 'live_matter',
    expectedJurisdictions: ['student accommodation dispute'],
    expectedTracks: ['live dispute', 'candidate promotion', 'artifact acceptance'],
    expectedSourceUniverse: { minCount: 1 },
    expectedProductionUniverse: { minCount: 1 },
    expectedOutcomeAssertions: ['acceptance and readiness telemetry must reconcile with promoted candidates and artifacts'],
    requiredArtifacts: ['accepted-artifact-readiness-summary'],
    notApplicableOutputs: [],
    knownReadinessBlockers: ['acceptance/readiness consistency'],
    privacyPolicy: { level: 'mixed', allowExternalActions: false, allowPrivateWebSearch: false },
  },
  'anfal-state-summary': {
    matterName: 'anfal-state-summary',
    expectedPosture: 'live_matter',
    expectedJurisdictions: ['student dispute'],
    expectedTracks: ['drafting recovery', 'stale run recovery', 'blocker reporting'],
    expectedSourceUniverse: { minCount: 82 },
    expectedProductionUniverse: { minCount: 2 },
    expectedOutcomeAssertions: ['stale partial drafting runs require recovery/readiness blockers rather than completion'],
    requiredArtifacts: ['recovery-summary', 'operator-handoff'],
    notApplicableOutputs: [],
    knownReadinessBlockers: ['stale run/task recovery events', 'no artifacts'],
    privacyPolicy: { level: 'mixed', allowExternalActions: false, allowPrivateWebSearch: false },
  },
};

export function getSeedBenchmarkExpectation(matterName: string): BenchmarkExpectation | undefined {
  return SEED_BENCHMARK_EXPECTATIONS[matterName];
}
