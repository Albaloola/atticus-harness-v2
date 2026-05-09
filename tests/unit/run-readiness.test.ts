import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdir, writeFile, rm } from 'fs/promises';
import { mkdtempSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { initMatter, deleteMatter, getMatterPath, loadMatter, saveMatterIndex } from '../../src/storage/matter.js';
import { saveCandidate } from '../../src/storage/candidate.js';
import { closeAllStateDbs } from '../../src/state/store.js';
import { evaluateRunReadiness } from '../../src/orchestration/run-readiness.js';
import statusHandler from '../../src/commands/status.js';

const MATTER = 'run-readiness-test';

describe('run readiness and status telemetry', () => {
  let tmpDir: string;
  let originalCwd: string;

  beforeEach(async () => {
    tmpDir = mkdtempSync(join(tmpdir(), 'atticus-run-readiness-'));
    originalCwd = process.cwd();
    process.chdir(tmpDir);
    await initMatter(MATTER);
  });

  afterEach(async () => {
    closeAllStateDbs();
    await deleteMatter(MATTER).catch(() => {});
    process.chdir(originalCwd);
    await rm(tmpDir, { recursive: true, force: true });
  });

  it('flags activity-complete runs as court-ready follow-up when required artifacts are missing', async () => {
    const readiness = await evaluateRunReadiness({
      matterName: MATTER,
      activityStatus: 'completed',
      phaseResults: [{
        phaseId: 'document_production',
        phaseName: 'Document Production',
        status: 'completed',
        summary: 'Worker finished without artifact IDs.',
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

  it('reconciles index counters with JSON candidates and transcript files', async () => {
    await saveCandidate(MATTER, {
      id: 'candidate-1',
      matterName: MATTER,
      type: 'report',
      title: 'Candidate report',
      content: 'Report content',
      status: 'candidate',
      created: new Date().toISOString(),
      metadata: {},
    });
    await mkdir(getMatterPath(MATTER, '_candidates'), { recursive: true });
    await writeFile(getMatterPath(MATTER, '_candidates', 'transcript-1.md'), '# transcript', 'utf-8');
    const index = await loadMatter(MATTER);
    index.candidateCount = 0;
    await saveMatterIndex(MATTER, index);

    const readiness = await evaluateRunReadiness({ matterName: MATTER, requireAcceptedArtifact: false });

    expect(readiness.candidateSummary).toMatchObject({ indexCount: 0, jsonCount: 1, transcriptCount: 1 });
    expect(readiness.telemetryReconciliation.find((item) => item.surface === 'candidates')?.status).toBe('drift');
  });

  it('adds runReadiness to status JSON output', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    await statusHandler(MATTER, { json: true });
    const output = JSON.parse(String(log.mock.calls[0]?.[0]));
    log.mockRestore();

    expect(output.runReadiness.courtReadyStatus).toBeTruthy();
    expect(output.runReadiness.candidateSummary).toBeTruthy();
  });
});
