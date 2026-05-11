import { getRuntimeValue, setRuntimeValue } from '../state/runtime-kv.js';

const RUNTIME_CHECKPOINT_KEY = 'runtime.checkpoint.v1';

export type RuntimeCheckpointStatus = 'running' | 'paused' | 'resumed' | 'resumable' | 'completed' | 'failed';

export interface RuntimeCheckpoint {
  version: 1;
  matterName: string;
  runId: string;
  status: RuntimeCheckpointStatus;
  phaseId?: string;
  reason?: string;
  activeWorkUnitIds: string[];
  completedWorkUnitIds: string[];
  failedWorkUnitIds: string[];
  interruptedWorkUnitIds: string[];
  orphanedWorkUnitIds: string[];
  resumeToken: string;
  createdAt: string;
  updatedAt: string;
}

export interface SaveRuntimeCheckpointInput {
  matterName: string;
  runId: string;
  status: RuntimeCheckpointStatus;
  phaseId?: string;
  reason?: string;
  activeWorkUnitIds?: string[];
  completedWorkUnitIds?: string[];
  failedWorkUnitIds?: string[];
  interruptedWorkUnitIds?: string[];
  orphanedWorkUnitIds?: string[];
  now?: string;
}

export interface SigintCheckpointOptions {
  matterName: string;
  runId: string;
  phaseId?: string;
  reason?: string;
  now?: string;
  getActiveWorkUnitIds?: () => string[] | undefined;
  getCompletedWorkUnitIds?: () => string[] | undefined;
  getFailedWorkUnitIds?: () => string[] | undefined;
  getInterruptedWorkUnitIds?: () => string[] | undefined;
  getOrphanedWorkUnitIds?: () => string[] | undefined;
}

export function loadRuntimeCheckpoint(matterName: string): RuntimeCheckpoint | undefined {
  const value = getRuntimeValue<RuntimeCheckpoint>(matterName, RUNTIME_CHECKPOINT_KEY);
  if (!value) return undefined;
  return normalizeCheckpoint(value, matterName);
}

function normalizeCheckpoint(
  value: RuntimeCheckpoint,
  matterName: string,
): RuntimeCheckpoint {
  return {
    ...value,
    matterName,
    createdAt: value.createdAt || new Date().toISOString(),
    updatedAt: value.updatedAt || new Date().toISOString(),
    status: value.status ?? 'running',
    activeWorkUnitIds: normalizeStringList(value.activeWorkUnitIds),
    completedWorkUnitIds: normalizeStringList(value.completedWorkUnitIds),
    failedWorkUnitIds: normalizeStringList(value.failedWorkUnitIds),
    interruptedWorkUnitIds: normalizeStringList(value.interruptedWorkUnitIds),
    orphanedWorkUnitIds: normalizeStringList(value.orphanedWorkUnitIds),
    resumeToken: value.resumeToken ?? buildResumeToken(value),
    runId: value.runId || 'unknown-run',
    phaseId: value.phaseId,
    reason: value.reason,
    version: 1,
  };
}

function normalizeStringList(values: unknown): string[] {
  if (!Array.isArray(values)) return [];
  return values
    .filter((value): value is string => typeof value === 'string' && value.length > 0)
    .map((value) => value.trim())
    .filter((value, index, all) => all.indexOf(value) === index);
}

export function saveRuntimeCheckpoint(input: SaveRuntimeCheckpointInput): RuntimeCheckpoint {
  const previous = loadRuntimeCheckpoint(input.matterName);
  const now = input.now ?? new Date().toISOString();
  const checkpoint: RuntimeCheckpoint = {
    version: 1,
    matterName: input.matterName,
    runId: input.runId,
    status: input.status,
    phaseId: input.phaseId,
    reason: input.reason,
    activeWorkUnitIds: normalizeStringList(input.activeWorkUnitIds ?? previous?.activeWorkUnitIds ?? []),
    completedWorkUnitIds: normalizeStringList(input.completedWorkUnitIds ?? previous?.completedWorkUnitIds ?? []),
    failedWorkUnitIds: normalizeStringList(input.failedWorkUnitIds ?? previous?.failedWorkUnitIds ?? []),
    interruptedWorkUnitIds: normalizeStringList(input.interruptedWorkUnitIds ?? previous?.interruptedWorkUnitIds ?? []),
    orphanedWorkUnitIds: normalizeStringList(input.orphanedWorkUnitIds ?? previous?.orphanedWorkUnitIds ?? []),
    resumeToken: previous?.resumeToken ?? buildResumeToken({
      matterName: input.matterName,
      runId: input.runId,
      status: input.status,
      now,
    }),
    createdAt: previous?.createdAt ?? now,
    updatedAt: now,
  };
  setRuntimeValue(input.matterName, RUNTIME_CHECKPOINT_KEY, checkpoint);
  return checkpoint;
}

export function pauseRuntimeCheckpoint(input: Omit<SaveRuntimeCheckpointInput, 'status'>): RuntimeCheckpoint {
  return saveRuntimeCheckpoint({
    ...input,
    status: 'paused',
    reason: input.reason ?? 'Runtime paused for operator or runtime repair.',
  });
}

export function resumeRuntimeCheckpoint(input: Omit<SaveRuntimeCheckpointInput, 'status'>): RuntimeCheckpoint {
  return saveRuntimeCheckpoint({
    ...input,
    status: 'resumed',
    reason: input.reason ?? 'Runtime resumed from recovery path.',
  });
}

export function markRuntimeResumable(input: Omit<SaveRuntimeCheckpointInput, 'status'>): RuntimeCheckpoint {
  return saveRuntimeCheckpoint({
    ...input,
    status: 'resumable',
    reason: input.reason ?? 'Runtime can resume incomplete work.',
  });
}

export function reconcileRuntimeCheckpoint(input: {
  matterName: string;
  runId: string;
  activeWorkUnitIds: string[];
  completedWorkUnitIds: string[];
  failedWorkUnitIds: string[];
  interruptedWorkUnitIds?: string[];
  orphanedWorkUnitIds?: string[];
  phaseId?: string;
  now?: string;
}): RuntimeCheckpoint {
  const status: RuntimeCheckpointStatus = input.activeWorkUnitIds.length > 0
    ? 'running'
    : input.failedWorkUnitIds.length > 0 || (input.interruptedWorkUnitIds ?? []).length > 0 || (input.orphanedWorkUnitIds ?? []).length > 0
      ? 'resumable'
      : 'completed';

  return saveRuntimeCheckpoint({
    matterName: input.matterName,
    runId: input.runId,
    status,
    phaseId: input.phaseId,
    activeWorkUnitIds: input.activeWorkUnitIds,
    completedWorkUnitIds: input.completedWorkUnitIds,
    failedWorkUnitIds: input.failedWorkUnitIds,
    interruptedWorkUnitIds: input.interruptedWorkUnitIds,
    orphanedWorkUnitIds: input.orphanedWorkUnitIds,
    reason: status === 'resumable' ? 'Resumable runtime state remains after an interruption.' : undefined,
    now: input.now,
  });
}

export function installRuntimeCheckpointSigintHandler(options: SigintCheckpointOptions): () => void {
  const handler = () => {
    pauseRuntimeCheckpoint({
      matterName: options.matterName,
      runId: options.runId,
      phaseId: options.phaseId,
      reason: options.reason ?? 'Interrupted by SIGINT',
      now: options.now,
      activeWorkUnitIds: options.getActiveWorkUnitIds?.() ?? [],
      completedWorkUnitIds: options.getCompletedWorkUnitIds?.() ?? [],
      failedWorkUnitIds: options.getFailedWorkUnitIds?.() ?? [],
      interruptedWorkUnitIds: options.getInterruptedWorkUnitIds?.() ?? [],
      orphanedWorkUnitIds: options.getOrphanedWorkUnitIds?.() ?? [],
    });
  };

  process.on('SIGINT', handler);
  return () => process.off('SIGINT', handler);
}

function buildResumeToken(input: { matterName: string; runId: string; status?: RuntimeCheckpointStatus; now?: string }): string {
  const now = input.now ?? new Date().toISOString();
  return Buffer.from(`${input.matterName}|${input.runId}|${input.status ?? 'running'}|${now}`).toString('base64url');
}
