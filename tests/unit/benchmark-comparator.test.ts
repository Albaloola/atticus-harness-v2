import { describe, expect, it } from 'vitest';
import { loadBenchmarkExpectation, listBenchmarkExpectations } from '../../src/benchmark/loaders.js';
import { scoreBenchmark } from '../../src/benchmark/scorecard.js';
import type { BenchmarkObservation } from '../../src/benchmark/expectation.js';

const DILLON_IDS = Array.from({ length: 14 }, (_, index) => `DIL-SRC-${String(index + 1).padStart(4, '0')}`);

describe('benchmark comparator', () => {
  it('scores Dillon expected 14-document source universe', async () => {
    const expectation = await loadBenchmarkExpectation('dillon-legacy-act-uksc');
    const observation: BenchmarkObservation = {
      matterName: 'dillon-legacy-act-uksc',
      posture: 'retrospective_benchmark',
      jurisdictions: ['UKSC', 'Northern Ireland'],
      tracks: ['concluded appellate record', 'legacy act constitutional challenge'],
      sourceUniverse: { count: 14, ids: DILLON_IDS, officialManifestUsed: true },
      productionUniverse: { count: 14, ids: DILLON_IDS },
      outcomeAssertions: [
        'Secretary of State appeal allowed on Windsor Framework and ICRIR grounds',
        'Charter cross-appeal dismissed',
        'abandoned or unappealed Human Rights Act section 4 declarations were not disturbed',
      ],
      artifacts: ['retrospective-source-packet', 'outcome-summary', 'production-selection-analysis'],
      notApplicableOutputs: ['live filing', 'service', 'Scotland procedure'],
      citationReadinessSatisfied: true,
      telemetry: {
        runStatus: 'complete',
        completedPhases: 10,
        totalPhases: 10,
        candidateCount: 3,
        filesystemCandidateCount: 3,
        artifactCount: 3,
        filesystemArtifactCount: 3,
      },
    };

    const scorecard = scoreBenchmark(expectation, observation);

    expect(scorecard.status).toBe('pass');
    expect(scorecard.score).toBeGreaterThanOrEqual(0.85);
    expect(scorecard.dimensions.find((dimension) => dimension.name === 'sourceUniverse')?.score).toBe(1);
  });

  it('penalizes candidate/artifact index drift', async () => {
    const expectation = await loadBenchmarkExpectation('dillon-legacy-act-uksc');
    const observation: BenchmarkObservation = {
      matterName: 'dillon-legacy-act-uksc',
      posture: 'retrospective_benchmark',
      jurisdictions: ['UKSC', 'Northern Ireland'],
      tracks: ['concluded appellate record', 'legacy act constitutional challenge'],
      sourceUniverse: { count: 14, ids: DILLON_IDS, officialManifestUsed: true },
      productionUniverse: { count: 14, ids: DILLON_IDS },
      outcomeAssertions: [
        'Secretary of State appeal allowed on Windsor Framework and ICRIR grounds',
        'Charter cross-appeal dismissed',
        'abandoned or unappealed Human Rights Act section 4 declarations were not disturbed',
      ],
      artifacts: ['retrospective-source-packet', 'outcome-summary', 'production-selection-analysis'],
      citationReadinessSatisfied: true,
      telemetry: {
        runStatus: 'complete',
        completedPhases: 10,
        totalPhases: 10,
        candidateCount: 0,
        filesystemCandidateCount: 2,
        artifactCount: 0,
        filesystemArtifactCount: 1,
      },
    };

    const scorecard = scoreBenchmark(expectation, observation);
    const telemetry = scorecard.dimensions.find((dimension) => dimension.name === 'telemetry');

    expect(telemetry?.passed).toBe(false);
    expect(scorecard.warnings.some((warning) => warning.includes('candidate index drift'))).toBe(true);
    expect(scorecard.warnings.some((warning) => warning.includes('artifact index drift'))).toBe(true);
  });

  it('loads state-summary expectations for Cherry, Napier, and Anfal', async () => {
    const expectations = await listBenchmarkExpectations();
    const names = expectations.map((expectation) => expectation.matterName);

    expect(names).toContain('cherry-state-summary');
    expect(names).toContain('napier-state-summary');
    expect(names).toContain('anfal-state-summary');
  });
});
