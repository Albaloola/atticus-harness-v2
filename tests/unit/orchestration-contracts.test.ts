import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { closeStateDb } from '../../src/state/index.js';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { createTask, updateTask } from '../../src/state/tasks.js';
import { deriveSnapshot } from '../../src/state/snapshot.js';
import { getDefaultPhases } from '../../src/legal/workflow.js';
import {
  buildPhaseGraph,
  classifyMatterPosture,
  evaluateRunReadiness,
  phaseWorkerTitlesForPosture,
} from '../../src/orchestration/contracts.js';

const emptyCounts = {
  total: 0,
  pending: 0,
  in_progress: 0,
  completed: 0,
  failed: 0,
  blocked: 0,
};

describe('orchestration posture contracts', () => {
  it('classifies concluded appellate trials as retrospective records without live action', () => {
    const posture = classifyMatterPosture(
      'Retrospective concluded UKSC Cherry case trial with known outcome and downloaded court documents',
    );

    expect(posture).toMatchObject({
      mode: 'retrospective_record',
      forum: 'appellate',
      liveActionRequired: false,
    });
    expect(posture.signals).toEqual(expect.arrayContaining(['retrospective', 'appellate']));
  });

  it('lets live filing language override retrospective appellate shortcuts', () => {
    const graph = buildPhaseGraph(
      'Retrospective UKSC appeal but urgent live filing and serve today',
    );
    const documentProduction = graph.phases.find((node) => node.phase.id === 'document_production')!;

    expect(graph.posture.mode).toBe('prospective_live');
    expect(documentProduction.requiredOutputs.every((output) => output.required)).toBe(true);
    expect(documentProduction.workerTitles).toEqual([]);
  });

  it('wraps PHASES as a compatibility catalog while applying posture graph overrides', () => {
    const objective = 'Retrospective concluded UKSC Cherry prorogation case trial with known outcome and downloaded court documents';
    const graph = buildPhaseGraph(objective);
    const phases = getDefaultPhases();
    const bundle = graph.phases.find((node) => node.phase.id === 'bundle_and_war_room_assembly')!;

    expect(graph.phases.map((node) => node.phase)).toEqual(phases);
    expect(graph.phases).toHaveLength(phases.length);
    expect(bundle.allowNotApplicable).toBe(true);
    expect(bundle.requiredOutputs.every((output) => output.required === false)).toBe(true);
    expect(phaseWorkerTitlesForPosture('bundle_and_war_room_assembly', objective)).toContain(
      'Create retrospective appellate bundle index from matter_inventory production candidates',
    );
  });
});

describe('run readiness contract', () => {
  it('reports needs_input before evidence is ingested', () => {
    const readiness = evaluateRunReadiness({
      status: 'pending',
      phase: 'intake',
      evidenceCount: 0,
      candidateCount: 0,
      taskCounts: emptyCounts,
      activeAgentCount: 0,
    });

    expect(readiness.status).toBe('needs_input');
    expect(readiness.ready).toBe(false);
    expect(readiness.nextActions).toContain('harness ingest <matter> <path>');
  });

  it('blocks when the task graph has terminal blocked or failed tasks', () => {
    const readiness = evaluateRunReadiness({
      status: 'analyzing',
      phase: 'verification_and_hostile_review',
      evidenceCount: 1,
      candidateCount: 0,
      taskCounts: { total: 2, pending: 0, in_progress: 0, completed: 1, failed: 1, blocked: 0 },
      activeAgentCount: 0,
    });

    expect(readiness.status).toBe('blocked');
    expect(readiness.ready).toBe(false);
    expect(readiness.reasons).toContain('task graph has failed or blocked work');
    expect(readiness.missingRequiredOutputs.length).toBeGreaterThan(0);
  });
});

describe('snapshot run readiness integration', () => {
  const matterName = 'test-run-readiness-snapshot';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('includes readiness status and readiness-derived next actions', async () => {
    const snapshot = await deriveSnapshot(matterName);

    expect(snapshot.runReadiness?.status).toBe('needs_input');
    expect(snapshot.runReadiness?.phase).toBe('intake');
    expect(snapshot.nextActions).toContain('harness ingest <matter> <path>');
  });

  it('surfaces blocked readiness for completed task graphs with blockers', async () => {
    const task = createTask({ matterName, type: 'verification_and_hostile_review', title: 'Blocked check' });
    updateTask(matterName, task.id, { status: 'blocked', data: { blockReason: 'missing source' } });

    const snapshot = await deriveSnapshot(matterName);

    expect(snapshot.runReadiness?.status).toBe('blocked');
    expect(snapshot.nextActions).toContain('Inspect blocked and failed tasks before continuing');
  });
});
