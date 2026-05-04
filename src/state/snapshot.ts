import { loadMatter } from '../storage/matter.js';
import { listEvidence } from '../storage/evidence.js';
import { listCandidates } from '../storage/candidate.js';
import { listEvents, getEventCount } from './events.js';
import { listTasks } from './tasks.js';
import { listRuns } from './runs.js';
import type { MatterRuntimeSnapshot, TaskCounts, RuntimeCosts } from '../types/state.js';
import type { MatterStatus } from '../types/matter.js';

export async function deriveSnapshot(matterName: string): Promise<MatterRuntimeSnapshot> {
  const index = await loadMatter(matterName);
  const evidence = await listEvidence(matterName).catch(() => []);
  const candidates = await listCandidates(matterName).catch(() => []);

  const tasks = listTasks(matterName);
  const runs = listRuns(matterName);
  const allEvents = listEvents(matterName, { tail: 200 });

  const taskCounts: TaskCounts = {
    total: tasks.length,
    pending: tasks.filter((t) => t.status === 'pending').length,
    in_progress: tasks.filter((t) => t.status === 'in_progress').length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    failed: tasks.filter((t) => t.status === 'failed').length,
    blocked: tasks.filter((t) => t.status === 'blocked').length,
  };

  const activeAgents = runs
    .filter((r) => r.status === 'running')
    .map((r) => ({
      runId: r.id,
      role: r.role,
      title: r.prompt || r.skill || `Agent run ${r.id.substring(0, 8)}`,
      status: r.status,
      lastEventAt: r.started,
    }));

  const findings = allEvents
    .filter((e) => e.type === 'tool.called' && e.data?.output)
    .slice(0, 10)
    .map((e) => String(e.data.output).substring(0, 200));

  const risks = allEvents
    .filter((e) => e.data?.risk)
    .slice(0, 10)
    .map((e) => String(e.data.risk));

  const candidateIds = candidates.map((c) => c.id);

  const totalEvents = getEventCount(matterName);
  const costs: RuntimeCosts = {
    estimatedTotal: totalEvents * 0.002,
    lastRunCost: runs.length > 0 ? runs.length * 0.01 : 0,
  };

  const phase = derivePhase(index.status, evidence.length, candidates.length);

  const nextActions = deriveNextActions(
    index.status,
    evidence.length,
    candidates.length,
    activeAgents.length,
  );

  return {
    matterName,
    timestamp: new Date().toISOString(),
    status: index.status,
    phase,
    activeRunId: activeAgents.length > 0 ? activeAgents[0].runId : undefined,
    currentPhase: phase,
    activeAgents,
    taskCounts,
    latestFindings: findings,
    latestRisks: risks,
    candidates: candidateIds,
    costs,
    nextActions,
  };
}

function derivePhase(
  status: MatterStatus,
  evidenceCount: number,
  candidateCount: number,
): string {
  if (evidenceCount === 0) return 'intake';
  if (status === 'pending') return 'intake';
  if (status === 'ingesting') return 'evidence-processing';
  if (status === 'analyzing') return 'analysis';
  if (status === 'drafting') return 'drafting';
  if (status === 'verifying') return 'verification';
  if (candidateCount > 0) return 'review';
  if (status === 'complete') return 'complete';
  if (status === 'archived') return 'archived';
  return 'unknown';
}

function deriveNextActions(
  status: MatterStatus,
  evidenceCount: number,
  candidateCount: number,
  activeAgentCount: number,
): string[] {
  const actions: string[] = [];

  if (evidenceCount === 0 && status === 'pending') {
    actions.push('harness ingest <matter> <path>');
  }
  if (evidenceCount > 0 && status === 'pending') {
    actions.push('harness run <matter>');
  }
  if (candidateCount > 0 && status !== 'complete' && status !== 'archived') {
    const latestCandidate = `(latest candidate)`;
    actions.push(`harness verify <matter> ${latestCandidate}`);
    actions.push(`harness gate <matter> ${latestCandidate}`);
    actions.push(`harness review <matter> ${latestCandidate}`);
  }
  if (activeAgentCount > 0) {
    actions.push('Agent is currently running - check status for progress');
  }

  return actions;
}
