import { describe, it, expect, afterEach } from 'vitest';
import { mkdir, writeFile } from 'fs/promises';
import { initMatter, deleteMatter, getMatterPath } from '../../src/storage/matter.js';
import { closeAllStateDbs } from '../../src/state/store.js';
import { evaluateRunReadiness } from '../../src/orchestration/run-readiness.js';

const created: string[] = [];

async function freshMatter(name: string): Promise<void> {
  await initMatter(name);
  created.push(name);
}

afterEach(async () => {
  closeAllStateDbs();
  for (const matter of created.splice(0)) await deleteMatter(matter).catch(() => undefined);
});

describe('run readiness', () => {
  it('separates completed activity from missing court-ready outputs', async () => {
    const matterName = 'readiness-missing-output-test';
    await freshMatter(matterName);

    const readiness = await evaluateRunReadiness({
      matterName,
      requireAcceptedArtifact: false,
      phaseResults: [{
        phaseId: 'document_production',
        phaseName: 'Document Production',
        status: 'completed',
        summary: 'Worker activity completed without a reducer artifact.',
        findings: [],
        risks: [],
        artifactIds: [],
        workerResults: [],
      }],
    });

    expect(readiness.activityStatus).toBe('completed');
    expect(readiness.courtReadyStatus).toBe('needs_followup');
    expect(readiness.missingOutputs).toContain('document_production:accepted_artifact');
    expect(readiness.blockers.some((blocker) => blocker.blockerType === 'required_output')).toBe(true);
  });

  it('reconciles non-JSON candidate transcripts separately from JSON candidates', async () => {
    const matterName = 'readiness-transcript-drift-test';
    await freshMatter(matterName);
    await mkdir(getMatterPath(matterName, '_candidates'), { recursive: true });
    await writeFile(getMatterPath(matterName, '_candidates', 'transcript-worker-1.md'), 'transcript only', 'utf-8');

    const readiness = await evaluateRunReadiness({ matterName, requireAcceptedArtifact: false });

    expect(readiness.candidateSummary.jsonCount).toBe(0);
    expect(readiness.candidateSummary.transcriptCount).toBe(1);
    expect(readiness.telemetryReconciliation.find((item) => item.surface === 'candidates')?.status).toBe('drift');
  });
});
