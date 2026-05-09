import { describe, expect, it } from 'vitest';
import { scoreBenchmark } from '../../src/benchmark/scorecard.js';
import type { BenchmarkExpectation } from '../../src/benchmark/expectation.js';
import type { RunReadiness } from '../../src/orchestration/run-readiness.js';

function readiness(overrides: Partial<RunReadiness>): RunReadiness {
  return {
    matterName: 'benchmark',
    activityStatus: 'completed',
    legalStatus: 'blocked',
    exportStatus: 'not_required',
    courtReadyStatus: 'needs_followup',
    phaseReadiness: [],
    missingOutputs: ['bundle_index'],
    notApplicableFindings: [],
    candidateSummary: { indexCount: 0, jsonCount: 0, transcriptCount: 0, drift: 0 },
    artifactSummary: { indexCount: 0, jsonCount: 0, drift: 0 },
    telemetryReconciliation: [{ surface: 'candidates', expected: 0, actual: 0, status: 'match' }],
    blockers: [],
    checkedAt: new Date().toISOString(),
    ...overrides,
  };
}

describe('benchmark comparator scorecards', () => {
  const expectation: BenchmarkExpectation = {
    matterName: 'dillon',
    expectedPosture: 'retrospective_benchmark',
    expectedJurisdictions: ['United Kingdom'],
    expectedSourceUniverse: ['official-pdf-1'],
    expectedProductionUniverse: ['written-case'],
    expectedOutcomeAssertions: ['appeal-allowed-nuanced'],
    requiredArtifacts: ['bundle_index'],
    privacyPolicy: 'public_sources_only',
  };

  it('passes a complete benchmark observation above the threshold', () => {
    const scorecard = scoreBenchmark(expectation, {
      posture: {
        matterName: 'dillon',
        primaryMode: 'retrospective_benchmark',
        jurisdictions: [{ system: 'United Kingdom', forum: 'UK Supreme Court', confidence: 1, evidenceIds: [], reason: 'fixture' }],
        tracks: ['appellate'],
        liveObligations: ['none'],
        sourceProfile: {},
        retrospectiveOutcomeKnown: true,
        requiresCourtReadyArtifacts: true,
        requiresExternalResearch: false,
        privateDataPolicy: 'public_sources_only',
        confidence: 1,
        reasons: [],
      },
      sourceIds: ['official-pdf-1'],
      productionIds: ['written-case'],
      outcomeAssertions: ['appeal-allowed-nuanced'],
      runReadiness: readiness({ courtReadyStatus: 'ready', legalStatus: 'ready', missingOutputs: [] }),
    });

    expect(scorecard.band).toBe('pass');
    expect(scorecard.score).toBeGreaterThanOrEqual(0.85);
  });

  it('auto-fails critical false completion even if activity completed', () => {
    const scorecard = scoreBenchmark(expectation, {
      posture: {
        matterName: 'dillon',
        primaryMode: 'retrospective_benchmark',
        jurisdictions: [{ system: 'United Kingdom', forum: 'UK Supreme Court', confidence: 1, evidenceIds: [], reason: 'fixture' }],
        tracks: ['appellate'],
        liveObligations: ['none'],
        sourceProfile: {},
        retrospectiveOutcomeKnown: true,
        requiresCourtReadyArtifacts: true,
        requiresExternalResearch: false,
        privateDataPolicy: 'public_sources_only',
        confidence: 1,
        reasons: [],
      },
      runReadiness: readiness({ activityStatus: 'completed', courtReadyStatus: 'needs_followup' }),
    });

    expect(scorecard.band).toBe('fail');
    expect(scorecard.automaticFailReasons).toContain('critical_false_completion');
  });

  it('auto-fails privacy violations for local-only benchmark material', () => {
    const scorecard = scoreBenchmark({ ...expectation, matterName: 'omer', privacyPolicy: 'local_only' }, {
      privacyViolation: true,
      runReadiness: readiness({ activityStatus: 'partial' }),
    });

    expect(scorecard.band).toBe('fail');
    expect(scorecard.automaticFailReasons).toContain('privacy_violation');
  });
});
