import { deleteRuntimeValue, getRuntimeValue, setRuntimeValue } from '../state/runtime-kv.js';

const CHECKPOINT_KEY = 'orchestration.checkpoint';

export interface OrchestrationCheckpoint {
  masterRunId?: string;
  status: 'running' | 'blocked' | 'completed' | 'failed';
  objective?: string;
  currentPhaseIndex?: number;
  currentPhaseId?: string;
  updatedAt: string;
  caseMemorySummary?: string;
  lastCandidateId?: string;
}

export function saveOrchestrationCheckpoint(
  matterName: string,
  checkpoint: Omit<OrchestrationCheckpoint, 'updatedAt'>,
): OrchestrationCheckpoint {
  const value: OrchestrationCheckpoint = {
    ...checkpoint,
    updatedAt: new Date().toISOString(),
  };
  setRuntimeValue(matterName, CHECKPOINT_KEY, value);
  return value;
}

export function loadOrchestrationCheckpoint(matterName: string): OrchestrationCheckpoint | null {
  return getRuntimeValue<OrchestrationCheckpoint>(matterName, CHECKPOINT_KEY);
}

export function clearOrchestrationCheckpoint(matterName: string): boolean {
  return deleteRuntimeValue(matterName, CHECKPOINT_KEY);
}
