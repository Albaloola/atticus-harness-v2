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

  it('penalizes Omer false court-ready completion when artifact/bundle outputs are missing', async () => {
    const expectation = await loadBenchmarkExpectation('omer-elbushra-ultimate-benchmark');
    const observation: BenchmarkObservation = {
      matterName: 'omer-elbushra-ultimate-benchmark',
      posture: 'live_matter',
      jurisdictions: ['Scotland', 'Court of Session', 'University of Glasgow', 'SLCC'],
      tracks: ['ordinary action', 'judicial review', 'fitness to practise', 'SAR/data protection', 'student union', 'regulatory complaint'],
      sourceUniverse: { count: 2771 },
      productionUniverse: { count: 9 },
      outcomeAssertions: [
        'mixed Scottish active multi-track matter',
        'primary documents must be separated from drafts and strategy memos',
        'unsupported media and password-protected PDFs remain readiness blockers',
      ],
      artifacts: ['production-index'],
      citationReadinessSatisfied: false,
      telemetry: {
        runStatus: 'complete',
        completedPhases: 10,
        totalPhases: 10,
        candidateCount: 0,
        filesystemCandidateCount: 4,
        artifactCount: 0,
        filesystemArtifactCount: 0,
      },
    };

    const scorecard = scoreBenchmark(expectation, observation);

    expect(scorecard.status).toBe('fail');
    expect(scorecard.criticalFailures).toContain('critical false-completion: terminal status without required source/artifact satisfaction');
    expect(scorecard.dimensions.find((dimension) => dimension.name === 'requiredArtifacts')?.passed).toBe(false);
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

  it('fails on privacy-policy violation', async () => {
    const expectation = await loadBenchmarkExpectation('omer-elbushra-ultimate-benchmark');
    const observation: BenchmarkObservation = {
      matterName: 'omer-elbushra-ultimate-benchmark',
      posture: 'live_matter',
      jurisdictions: ['Scotland', 'Court of Session', 'University of Glasgow', 'SLCC'],
      tracks: ['ordinary action', 'judicial review', 'fitness to practise', 'SAR/data protection', 'student union', 'regulatory complaint'],
      sourceUniverse: { count: 2771 },
      productionUniverse: { count: 9 },
      outcomeAssertions: [
        'mixed Scottish active multi-track matter',
        'primary documents must be separated from drafts and strategy memos',
        'unsupported media and password-protected PDFs remain readiness blockers',
      ],
      artifacts: ['production-index', 'court-ready-bundle', 'operator-handoff'],
      citationReadinessSatisfied: true,
      telemetry: { runStatus: 'drafting', completedPhases: 8, totalPhases: 10 },
      privacyEvents: [{ kind: 'private_web_search', detail: 'searched private Omer facts externally' }],
    };

    const scorecard = scoreBenchmark(expectation, observation);

    expect(scorecard.status).toBe('fail');
    expect(scorecard.criticalFailures).toContain('privacy policy violation: private web search recorded');
  });

  it('loads state-summary expectations for Cherry, Napier, and Anfal', async () => {
    const expectations = await listBenchmarkExpectations();
    const names = expectations.map((expectation) => expectation.matterName);

    expect(names).toContain('cherry-state-summary');
    expect(names).toContain('napier-state-summary');
    expect(names).toContain('anfal-state-summary');
  });
});
