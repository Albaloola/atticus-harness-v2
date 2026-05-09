import { loadMatter } from '../storage/matter.js';
import { listEvidence } from '../storage/evidence.js';
import { listCandidates } from '../storage/candidate.js';
import { listEvents, getEventCount } from './events.js';
import { listTasks } from './tasks.js';
import { isRunLive, listRuns } from './runs.js';
import { buildMatterStoreTelemetry } from '../observability/store-telemetry.js';
import { recoverStaleRuntimeState } from './runtime-recovery.js';
import type { MatterRuntimeSnapshot, TaskCounts, RuntimeCosts } from '../types/state.js';
import { evaluateRunReadiness } from '../orchestration/contracts.js';
import type { MatterStatus } from '../types/matter.js';

export async function deriveSnapshot(
  matterName: string,
  options: { recoverRuntime?: boolean } = {},
): Promise<MatterRuntimeSnapshot> {
  const index = await loadMatter(matterName);
  const evidence = await listEvidence(matterName).catch(() => []);
  const candidates = await listCandidates(matterName).catch(() => []);
  const storeTelemetry = await buildMatterStoreTelemetry(matterName).catch(() => undefined);
  if (options.recoverRuntime !== false) {
    await recoverStaleRuntimeState(matterName);
  }

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

  const completedRunIds = new Set(
    allEvents
      .filter((event) =>
        (event.type === 'run.completed' || event.type === 'agent.run.completed') &&
        typeof event.runId === 'string'
      )
      .map((event) => event.runId as string)
  );

  const activeAgents = runs
    .filter((r) => r.status === 'running')
    .filter((r) => isRunLive(r))
    .filter((r) => !completedRunIds.has(r.id))
    .map((r) => ({
      runId: r.id,
      role: r.role,
      title: r.prompt || r.skill || `Agent run ${r.id.substring(0, 8)}`,
      status: r.status,
      lastEventAt: r.heartbeatAt ?? r.started,
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


  const leases = tasks
    .filter((task) => task.leaseId)
    .map((task) => ({
      taskId: task.id,
      leaseId: task.leaseId!,
      owner: task.leaseOwner,
      role: task.leaseRole,
      expiresAt: task.leaseExpiresAt,
      stale: task.leaseExpiresAt ? new Date(task.leaseExpiresAt).getTime() <= Date.now() : false,
    }));

  const blockedReasons = tasks
    .filter((task) => task.status === 'blocked' || task.blockedReason)
    .map((task) => ({ taskId: task.id, reason: task.blockedReason || 'blocked' }));

  const totalEvents = getEventCount(matterName);
  const costs: RuntimeCosts = {
    estimatedTotal: totalEvents * 0.002,
    lastRunCost: runs.length > 0 ? runs.length * 0.01 : 0,
  };

  const derivedStatus = deriveRuntimeStatus(index.status, taskCounts, activeAgents.length);
  const phase = derivePhase(derivedStatus, evidence.length, candidates.length, taskCounts, activeAgents.length);

  const runReadiness = evaluateRunReadiness({
    status: derivedStatus,
    phase,
    evidenceCount: evidence.length,
    candidateCount: candidates.length,
    taskCounts,
    activeAgentCount: activeAgents.length,
  });

  const nextActions = mergeNextActions(deriveNextActions(
    derivedStatus,
    evidence.length,
    candidates.length,
    activeAgents.length,
  ), runReadiness.nextActions);

  return {
    matterName,
    timestamp: new Date().toISOString(),
    status: derivedStatus,
    phase,
    activeRunId: activeAgents.length > 0 ? activeAgents[0].runId : undefined,
    currentPhase: phase,
    activeAgents,
    taskCounts,
    latestFindings: findings,
    latestRisks: risks,
    candidates: candidateIds,
    storeTelemetry,
    costs,
    nextActions,
    leases,
    blockedReasons,
    runReadiness,
  };
}

function derivePhase(
  status: MatterStatus,
  evidenceCount: number,
  candidateCount: number,
  taskCounts?: TaskCounts,
  activeAgentCount = 0,
): string {
  if (activeAgentCount === 0 && taskCounts && taskCounts.total > 0 && taskCounts.in_progress === 0 && taskCounts.pending === 0) {
    if (taskCounts.failed > 0 || taskCounts.blocked > 0) return 'needs-followup';
    return 'complete';
  }
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

function deriveRuntimeStatus(
  indexStatus: MatterStatus,
  taskCounts: TaskCounts,
  activeAgentCount: number,
): MatterStatus {
  if (
    activeAgentCount === 0 &&
    taskCounts.total > 0 &&
    taskCounts.in_progress === 0 &&
    taskCounts.pending === 0 &&
    taskCounts.completed + taskCounts.failed + taskCounts.blocked === taskCounts.total
  ) {
    return taskCounts.failed > 0 || taskCounts.blocked > 0 ? 'analyzing' : 'complete';
  }
  return indexStatus;
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

function mergeNextActions(...actionSets: string[][]): string[] {
  return [...new Set(actionSets.flat())];
}
