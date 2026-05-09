import { describe, it, expect, afterEach } from 'vitest';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { closeAllStateDbs } from '../../src/state/store.js';
import { normalizeExpectation } from '../../src/benchmark/expectation.js';
import { scoreBenchmarkExpectation } from '../../src/benchmark/scorecard.js';

const created: string[] = [];

afterEach(async () => {
  closeAllStateDbs();
  for (const matter of created.splice(0)) await deleteMatter(matter).catch(() => undefined);
});

describe('benchmark comparator', () => {
  it('scores benchmark expectations with readiness and telemetry dimensions', async () => {
    const matterName = 'dillon-legacy-act-uksc';
    await initMatter(matterName);
    created.push(matterName);
    const expectation = normalizeExpectation({
      matterName,
      expectedPosture: 'retrospective_benchmark',
      expectedJurisdictions: ['United Kingdom'],
      expectedTracks: ['appellate'],
      privacyPolicy: 'public_sources_only',
      requiredArtifacts: ['bundle_index'],
    });

    const scorecard = await scoreBenchmarkExpectation(expectation);

    expect(scorecard.matterName).toBe(matterName);
    expect(scorecard.details.map((detail) => detail.dimension)).toContain('falseCompletion');
    expect(scorecard.details.map((detail) => detail.dimension)).toContain('telemetryConsistency');
    expect(scorecard.runReadiness).toBeDefined();
    expect(['pass', 'needs_followup', 'fail']).toContain(scorecard.verdict);
  });
});
