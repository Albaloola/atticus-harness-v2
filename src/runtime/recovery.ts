import { listEvents } from '../state/events.js';
import { loadCaseStateDocument } from '../case-state/store.js';
import { generateObligationsFromCaseState } from '../case-manager/obligation-engine.js';
import { listObligations } from '../case-manager/obligation-store.js';
import type { CaseObligation } from '../case-manager/obligation-types.js';
import { compareObligationPriority } from '../case-manager/work-selector.js';
import {
  pauseRuntimeCheckpoint,
  type RuntimeCheckpoint,
  reconcileRuntimeCheckpoint,
  resumeRuntimeCheckpoint,
  loadRuntimeCheckpoint,
} from './checkpoint.js';
import { listWorkUnits, type WorkUnitLedgerEntry } from './work-unit-ledger.js';
import { reapOrphanedWorkUnits, type OrphanedWorkUnitReport } from './orphan-reaper.js';

const RETRY_LIMIT = 3;

export type RuntimeRecoveryAction = 'start_new' | 'resume' | 'pause_for_repair' | 'complete';

export interface RuntimeRecoveryPlan {
  matterName: string;
  action: RuntimeRecoveryAction;
  checkpoint?: RuntimeCheckpoint;
  resumableWorkUnits: WorkUnitLedgerEntry[];
  retryableWorkUnits: WorkUnitLedgerEntry[];
  unsatisfiedObligations: CaseObligation[];
  obligationsToResume: CaseObligation[];
  resumeFromObligationId?: string;
  blockedReasons: string[];
  providerCreditSignal: boolean;
  networkStallSignal: boolean;
  reapedOrphans: OrphanedWorkUnitReport;
}

export interface RuntimeRecoveryPlanOptions {
  now?: string;
  staleAfterMs?: number;
  activeWorkerIds?: string[];
}

export async function buildRuntimeRecoveryPlan(
  matterName: string,
  options: RuntimeRecoveryPlanOptions = {},
): Promise<RuntimeRecoveryPlan> {
  const now = options.now ?? new Date().toISOString();
  const blockedReasons: string[] = [];

  const reapedOrphans = await reapOrphanedWorkUnits({
    matterName,
    now,
    staleAfterMs: options.staleAfterMs,
    activeWorkerIds: options.activeWorkerIds,
  }).catch((error: unknown) => {
    blockedReasons.push(`Orphan reaping failed: ${error instanceof Error ? error.message : String(error)}`);
    return {
      matterName,
      orphanedWorkUnits: [],
      updatedObligations: [],
    } satisfies OrphanedWorkUnitReport;
  });

  const allUnits = listWorkUnits(matterName);
  const unsatisfiedObligations = await loadUnsatisfiedObligations(matterName);
  const obligationsToResume = unsatisfiedObligations.slice().sort(compareObligationPriority);
  const resumeFromObligationId = obligationsToResume[0]?.obligationId;

  const resumableWorkUnits = allUnits.filter((unit) =>
    unit.status === 'interrupted' || unit.status === 'orphaned'
  );
  const runningWorkUnits = allUnits.filter((unit) => unit.status === 'running');
  const retryableWorkUnits = allUnits
    .filter((unit) => unit.status === 'failed')
    .filter((unit) => unit.retryCount < RETRY_LIMIT);
  const checkpoint = loadRuntimeCheckpoint(matterName);

  const providerCreditSignal = hasProviderCreditSignal(matterName);
  const networkStallSignal = hasNetworkStallSignal(matterName);

  if (providerCreditSignal) {
    const paused = pauseRuntimeCheckpoint({
      matterName,
      runId: checkpoint?.runId ?? inferRunId(allUnits, 'provider-credit'),
      reason: 'Provider-credit exhaustion signal detected while recovering runtime.',
      activeWorkUnitIds: runningWorkUnits.map((unit) => unit.workUnitId),
      completedWorkUnitIds: allUnits.filter((unit) => unit.status === 'completed').map((unit) => unit.workUnitId),
      failedWorkUnitIds: allUnits.filter((unit) => unit.status === 'failed').map((unit) => unit.workUnitId),
      interruptedWorkUnitIds: allUnits.filter((unit) => unit.status === 'interrupted').map((unit) => unit.workUnitId),
      orphanedWorkUnitIds: allUnits.filter((unit) => unit.status === 'orphaned').map((unit) => unit.workUnitId),
      now,
    });
    blockedReasons.push('Recovery paused due to provider-credit exhaustion.');
    return {
      matterName,
      action: unsatisfiedObligations.length > 0 ? 'pause_for_repair' : 'complete',
      checkpoint: paused,
      resumableWorkUnits: [...resumableWorkUnits, ...runningWorkUnits],
      retryableWorkUnits,
      unsatisfiedObligations,
      obligationsToResume,
      resumeFromObligationId,
      blockedReasons,
      providerCreditSignal,
      networkStallSignal,
      reapedOrphans,
    };
  }

  if (networkStallSignal && unsatisfiedObligations.length > 0) {
    const paused = checkpoint?.status === 'paused'
      ? checkpoint
      : pauseRuntimeCheckpoint({
        matterName,
        runId: checkpoint?.runId ?? inferRunId(allUnits, 'network-stall'),
        reason: 'Network stall signal detected while recovering runtime.',
        activeWorkUnitIds: runningWorkUnits.map((unit) => unit.workUnitId),
        completedWorkUnitIds: allUnits.filter((unit) => unit.status === 'completed').map((unit) => unit.workUnitId),
        failedWorkUnitIds: allUnits.filter((unit) => unit.status === 'failed').map((unit) => unit.workUnitId),
        interruptedWorkUnitIds: allUnits.filter((unit) => unit.status === 'interrupted').map((unit) => unit.workUnitId),
        orphanedWorkUnitIds: allUnits.filter((unit) => unit.status === 'orphaned').map((unit) => unit.workUnitId),
        now,
      });
    blockedReasons.push('Recovery retained in repair mode because the network was marked unstable.');
    return {
      matterName,
      action: 'pause_for_repair',
      checkpoint: paused,
      resumableWorkUnits: [...resumableWorkUnits, ...runningWorkUnits],
      retryableWorkUnits,
      unsatisfiedObligations,
      obligationsToResume,
      resumeFromObligationId,
      blockedReasons,
      providerCreditSignal,
      networkStallSignal,
      reapedOrphans,
    };
  }

  if (unsatisfiedObligations.length === 0) {
    const completedCheckpoint = reconcileIfNeeded({
      checkpoint,
      matterName,
      now,
      units: allUnits,
      unsatisfiedCount: unsatisfiedObligations.length,
    });
    return {
      matterName,
      action: 'complete',
      checkpoint: completedCheckpoint,
      resumableWorkUnits: [...resumableWorkUnits, ...runningWorkUnits],
      retryableWorkUnits,
      unsatisfiedObligations,
      obligationsToResume,
      resumeFromObligationId,
      blockedReasons,
      providerCreditSignal,
      networkStallSignal,
      reapedOrphans,
    };
  }

  if (checkpoint?.status === 'paused') {
    blockedReasons.push('Checkpoint is explicitly paused.');
    return {
      matterName,
      action: 'pause_for_repair',
      checkpoint,
      resumableWorkUnits: [...resumableWorkUnits, ...runningWorkUnits],
      retryableWorkUnits,
      unsatisfiedObligations,
      obligationsToResume,
      resumeFromObligationId,
      blockedReasons,
      providerCreditSignal,
      networkStallSignal,
      reapedOrphans,
    };
  }

  const hasPriorRecoveryState = Boolean(
    checkpoint || resumableWorkUnits.length > 0 || runningWorkUnits.length > 0 || retryableWorkUnits.length > 0,
  );
  const action: RuntimeRecoveryAction = hasPriorRecoveryState ? 'resume' : 'start_new';

  const recoveryCheckpoint = hasPriorRecoveryState
    ? (checkpoint?.status === 'running' || checkpoint?.status === 'completed' || !checkpoint
      ? resumeRuntimeCheckpoint({
        matterName,
        runId: inferRunId(allUnits, 'resume'),
        reason: 'Recovery resumed using persisted runtime and obligation evidence.',
        now,
      })
      : checkpoint)
    : checkpoint;

  return {
    matterName,
    action,
    checkpoint: recoveryCheckpoint,
    resumableWorkUnits: [...resumableWorkUnits, ...runningWorkUnits],
    retryableWorkUnits,
    unsatisfiedObligations,
    obligationsToResume,
    resumeFromObligationId,
    blockedReasons,
    providerCreditSignal,
    networkStallSignal,
    reapedOrphans,
  };
}

export function markInterruptedRunResumable(input: {
  matterName: string;
  runId: string;
  phaseId?: string;
  reason?: string;
}): RuntimeCheckpoint {
  return resumeRuntimeCheckpoint({
    matterName: input.matterName,
    runId: input.runId,
    phaseId: input.phaseId,
    reason: input.reason ?? 'Runtime was interrupted and can resume incomplete work.',
  });
}

async function loadUnsatisfiedObligations(matterName: string): Promise<CaseObligation[]> {
  const persisted = await listObligations(matterName);
  if (persisted.length > 0) {
    return persisted.filter((obligation) => obligation.status !== 'satisfied');
  }
  return deriveObligationsFromCaseState(matterName);
}

async function deriveObligationsFromCaseState(matterName: string): Promise<CaseObligation[]> {
  const document = await loadCaseStateDocument(matterName);
  if (!document) return [];
  const obligations = generateObligationsFromCaseState(document).obligations;
  return obligations.filter((obligation) => obligation.status !== 'satisfied');
}

function inferRunId(units: WorkUnitLedgerEntry[], fallback: string): string {
  const first = units.find((unit) => unit.runId);
  return first?.runId ?? fallback;
}

function hasProviderCreditSignal(matterName: string): boolean {
  return listEvents(matterName).some((event) => {
    if (event.type !== 'agent.run.error') return false;
    const errorText = stringFromEventData(event.data?.error);
    return /insufficient credits|error \(402\)|\b402\b/i.test(errorText);
  });
}

function hasNetworkStallSignal(matterName: string): boolean {
  return listEvents(matterName).some((event) => {
    const errorText = stringFromEventData(event.data?.error);
    return /network|timeout|timed out|econnreset|enotfound|etimedout|socket hang up|eai_again/i.test(errorText);
  });
}

function stringFromEventData(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function reconcileIfNeeded(input: {
  checkpoint?: RuntimeCheckpoint;
  matterName: string;
  now: string;
  units: WorkUnitLedgerEntry[];
  unsatisfiedCount: number;
}): RuntimeCheckpoint | undefined {
  if (!input.checkpoint) return undefined;
  if (input.unsatisfiedCount > 0) return input.checkpoint;
  return reconcileRuntimeCheckpoint({
    matterName: input.matterName,
    runId: input.checkpoint.runId,
    activeWorkUnitIds: input.units.filter((unit) => unit.status === 'running').map((unit) => unit.workUnitId),
    completedWorkUnitIds: input.units.filter((unit) => unit.status === 'completed').map((unit) => unit.workUnitId),
    failedWorkUnitIds: input.units.filter((unit) => unit.status === 'failed').map((unit) => unit.workUnitId),
    interruptedWorkUnitIds: input.units.filter((unit) => unit.status === 'interrupted').map((unit) => unit.workUnitId),
    orphanedWorkUnitIds: input.units.filter((unit) => unit.status === 'orphaned').map((unit) => unit.workUnitId),
    phaseId: input.checkpoint.phaseId,
    now: input.now,
  });
}
