import { deleteRuntimeValue, getRuntimeValue, setRuntimeValue } from '../state/runtime-kv.js';

const CHECKPOINT_KEY = 'orchestration.checkpoint';

export interface OrchestrationCheckpoint {
  masterRunId?: string;
  status: 'running' | 'paused' | 'blocked' | 'completed' | 'failed';
  objective?: string;
  currentPhaseIndex?: number;
  currentPhaseId?: string;
  completedPhaseIds?: string[];
  blockedPhaseIds?: string[];
  failedPhaseIds?: string[];
  phaseSummaries?: Array<{
    phaseId: string;
    phaseName: string;
    status: 'completed' | 'failed' | 'blocked';
    summary: string;
  }>;
  supervisorStopReason?: string;
  resumeFromRunId?: string;
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
