import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { appendEvent } from '../src/state/events.js';
import { closeStateDb } from '../src/state/store.js';
import { deleteMatter, initMatter } from '../src/storage/matter.js';
import { createCaseState } from '../src/case-state/mutations.js';
import { listObligations, upsertObligations } from '../src/case-manager/obligation-store.js';
import type { CaseObligation } from '../src/case-manager/obligation-types.js';
import { buildRuntimeRecoveryPlan, markInterruptedRunResumable } from '../src/runtime/recovery.js';
import { completeWorkUnit, incrementWorkUnitRetryCount, listWorkUnits, startWorkUnit, updateWorkUnit } from '../src/runtime/work-unit-ledger.js';
import { installRuntimeCheckpointSigintHandler, loadRuntimeCheckpoint } from '../src/runtime/checkpoint.js';
import { reapOrphanedWorkUnits } from '../src/runtime/orphan-reaper.js';

describe('runtime recovery', () => {
  const matterName = 'runtime-recovery-test';

  beforeEach(async () => {
    await initMatter(matterName);
    await createCaseState({
      matterName,
      status: 'active',
      context: { source: 'operator', actor: 'unit-test' },
    });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('marks SIGINT as a paused checkpoint', async () => {
    const stop = installRuntimeCheckpointSigintHandler({
      matterName,
      runId: 'run-sigint',
      reason: 'Test SIGINT pause',
      getActiveWorkUnitIds: () => ['unit-1'],
    });

    process.emit('SIGINT');
    const checkpoint = loadRuntimeCheckpoint(matterName);
    stop();

    expect(checkpoint).toBeDefined();
    expect(checkpoint?.status).toBe('paused');
    expect(checkpoint?.reason).toContain('SIGINT');
    expect(checkpoint?.activeWorkUnitIds).toContain('unit-1');
  });

  it('resumes from unsatisfied obligations and does not rerun satisfied ones', async () => {
    await upsertObligations(matterName, [
      makeObligation({
        obligationId: 'obl-parties',
        type: 'identify_parties',
        status: 'satisfied',
      }),
      makeObligation({
        obligationId: 'obl-chrono',
        type: 'build_chronology',
        status: 'ready',
      }),
    ]);
    const unitA = await startWorkUnit(matterName, {
      taskId: 'task-parties',
      obligationId: 'obl-parties',
      model: 'gpt-4.1',
      provider: 'provider-a',
      runId: 'run-resume',
    });
    completeWorkUnit(matterName, unitA.workUnitId);

    const interrupted = await startWorkUnit(matterName, {
      taskId: 'task-chrono',
      obligationId: 'obl-chrono',
      model: 'gpt-4.1',
      provider: 'provider-a',
      runId: 'run-resume',
    });
    updateWorkUnit(matterName, interrupted.workUnitId, {
      status: 'interrupted',
      failureReason: 'Worker crashed',
    });

    const plan = await buildRuntimeRecoveryPlan(matterName);
    expect(plan.action).toBe('resume');
    expect(plan.resumeFromObligationId).toBe('obl-chrono');
    expect(plan.obligationsToResume.map((obligation) => obligation.obligationId)).toEqual(['obl-chrono']);
    expect(plan.resumableWorkUnits.some((unit) => unit.workUnitId === interrupted.workUnitId)).toBe(true);
  });

  it('reaps stale running work as orphaned', async () => {
    await upsertObligations(matterName, [
      makeObligation({
        obligationId: 'obl-orphan',
        type: 'build_chronology',
        status: 'running',
      }),
    ]);
    const started = await startWorkUnit(matterName, {
      taskId: 'task-orphan',
      obligationId: 'obl-orphan',
      model: 'gpt-4.1',
      provider: 'provider-a',
      runId: 'run-orphan',
      now: '2026-01-01T00:00:00.000Z',
    });
    updateWorkUnit(matterName, started.workUnitId, {
      updatedAt: '2026-01-01T00:00:00.000Z',
    });

    const report = await reapOrphanedWorkUnits({
      matterName,
      now: '2026-01-01T00:10:00.000Z',
      staleAfterMs: 60_000,
    });

    const updated = report.orphanedWorkUnits[0];
    expect(updated?.status).toBe('orphaned');
    const obligations = await listObligations(matterName);
    expect(obligations.find((entry) => entry.obligationId === 'obl-orphan')?.status).toBe('failed');
  });

  it('pauses checkpoint when provider credits are exhausted', async () => {
    await upsertObligations(matterName, [
      makeObligation({
        obligationId: 'obl-openapi',
        type: 'prepare_email',
        status: 'ready',
      }),
    ]);
    await appendEvent({
      matterName,
      type: 'agent.run.error',
      runId: 'run-credit',
      data: { error: 'provider request failed: 402 Insufficient credits for provider account' },
    });

    const plan = await buildRuntimeRecoveryPlan(matterName);
    expect(plan.action).toBe('pause_for_repair');
    expect(plan.providerCreditSignal).toBe(true);
    expect(plan.checkpoint?.status).toBe('paused');
    expect(plan.blockedReasons).toContain('Recovery paused due to provider-credit exhaustion.');
  });

  it('does not mark case complete when network appears stalled', async () => {
    await upsertObligations(matterName, [
      makeObligation({
        obligationId: 'obl-openapi',
        type: 'prepare_email',
        status: 'ready',
      }),
      makeObligation({
        obligationId: 'obl-draft',
        type: 'draft_document',
        status: 'failed',
      }),
    ]);
    await appendEvent({
      matterName,
      type: 'agent.run.error',
      runId: 'run-stall',
      data: { error: 'network request failed: ETIMEDOUT' },
    });
    await startWorkUnit(matterName, {
      taskId: 'draft-task',
      obligationId: 'obl-draft',
      model: 'gpt-4.1',
      provider: 'provider-a',
      runId: 'run-stall',
    });
    const unit = listWorkUnits(matterName)[0];
    const interrupted = unit
      ? incrementWorkUnitRetryCount(matterName, unit.workUnitId) ?? unit
      : await startWorkUnit(matterName, {
        taskId: 'draft-task',
        obligationId: 'obl-draft',
        model: 'gpt-4.1',
        provider: 'provider-a',
        runId: 'run-stall',
      });
    if (interrupted) {
      updateWorkUnit(matterName, interrupted.workUnitId, { status: 'failed', failureReason: 'Network stalled' });
    }

    const plan = await buildRuntimeRecoveryPlan(matterName);
    expect(plan.networkStallSignal).toBe(true);
    expect(plan.action).not.toBe('complete');
    expect(plan.unsatisfiedObligations.map((obligation) => obligation.obligationId)).toContain('obl-openapi');
    expect(plan.unsatisfiedObligations.map((obligation) => obligation.obligationId)).toContain('obl-draft');
  });

  it('keeps legacy resumable-run helper functional', () => {
    const checkpoint = markInterruptedRunResumable({
      matterName,
      runId: 'run-legacy',
      reason: 'legacy path',
    });
    expect(checkpoint.status).toBe('resumed');
    expect(checkpoint.reason).toContain('legacy path');
  });
});

function makeObligation(overrides: {
  obligationId: string;
  type: CaseObligation['type'];
  status?: CaseObligation['status'];
  matterName?: string;
}): CaseObligation {
  const now = new Date().toISOString();
  return {
    obligationId: overrides.obligationId,
    matterName: overrides.matterName ?? 'runtime-recovery-test',
    type: overrides.type,
    status: overrides.status ?? 'ready',
    readinessRequirement: 'raw',
    dependencies: [],
    blockers: [],
    reason: `${overrides.type} must be done`,
    urgency: 'medium',
    estimatedWorkUnits: 1,
    createdAt: now,
    updatedAt: now,
  };
}
