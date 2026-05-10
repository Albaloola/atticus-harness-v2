import { buildMatterStoreTelemetry } from '../observability/store-telemetry.js';
import { appendEvent, listEvents } from '../state/events.js';
import { isRunLive, listRuns } from '../state/runs.js';
import { listTasks, updateTask } from '../state/tasks.js';
import type { AgentRun, MatterEvent, TaskDagNode } from '../types/state.js';
import { loadOrchestrationCheckpoint, saveOrchestrationCheckpoint } from './checkpoint.js';
import type { PhaseDefinition } from '../legal/workflow.js';

export type OrchestrationHealthSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface OrchestrationHealthIssue {
  type: string;
  severity: OrchestrationHealthSeverity;
  summary: string;
  remediation: string;
  objectId?: string;
  evidence?: Record<string, unknown>;
}

export interface OrchestrationHealthCheckOptions {
  phases: PhaseDefinition[];
  masterRunId?: string;
  now?: Date;
  emitEvent?: boolean;
  intervene?: boolean;
  reconcileCheckpoint?: boolean;
  orphanAfterMs?: number;
}

export interface OrchestrationHealthCheckResult {
  status: 'healthy' | 'warning' | 'blocked';
  issues: OrchestrationHealthIssue[];
  interventions: string[];
  shouldBlockAdvance: boolean;
}

const DEFAULT_ORPHAN_AFTER_MS = 2 * 60 * 1000;
const DRIFT_THRESHOLD = 5;

export async function runOrchestrationHealthCheck(
  matterName: string,
  options: OrchestrationHealthCheckOptions,
): Promise<OrchestrationHealthCheckResult> {
  const now = options.now ?? new Date();
  const tasks = listTasks(matterName);
  const runs = listRuns(matterName);
  const events = listEvents(matterName);
  const telemetry = await buildMatterStoreTelemetry(matterName).catch(() => undefined);
  const checkpoint = loadOrchestrationCheckpoint(matterName);
  const liveRunIds = new Set(runs.filter((run) => isRunLive(run, now)).map((run) => run.id));
  const relatedRunIds = options.masterRunId ? collectRelatedRunIds(runs, options.masterRunId) : undefined;
  const scopedTasks = relatedRunIds
    ? tasks.filter((task) => task.runId && relatedRunIds.has(task.runId))
    : tasks;
  const scopedEvents = relatedRunIds
    ? events.filter((event) => event.runId && relatedRunIds.has(event.runId))
    : events.slice(0, 200);
  const issues: OrchestrationHealthIssue[] = [];
  const interventions: string[] = [];

  issues.push(...detectPolicyBlocks(scopedEvents));
  issues.push(...detectCandidateDrift(telemetry));
  issues.push(...detectPhaseContradictions(scopedTasks, options.phases));
  issues.push(...detectHollowVerification(scopedTasks));
  issues.push(...detectPathGuessing(scopedEvents));
  issues.push(...detectMasterNoPhaseProgress(scopedEvents, scopedTasks));
  issues.push(...detectProviderCreditExhaustion(scopedEvents));
  issues.push(...detectRuntimeAnomalies(scopedEvents, scopedTasks, runs, now));
  issues.push(...detectCheckpointContradiction(checkpoint, tasks, runs));
  issues.push(...detectOrphanedTasks(scopedTasks, liveRunIds, now, options.orphanAfterMs ?? DEFAULT_ORPHAN_AFTER_MS));
  issues.push(...detectOpaqueBlockedTasks(scopedTasks));

  if (options.intervene) {
    interventions.push(...repairOrphanedTasks(matterName, scopedTasks, liveRunIds, now, options.orphanAfterMs ?? DEFAULT_ORPHAN_AFTER_MS));
    interventions.push(...repairOpaqueBlockedTasks(matterName, scopedTasks));
  }

  if (options.reconcileCheckpoint) {
    const reconciliation = reconcileCheckpoint(matterName, options.phases, scopedTasks, options.masterRunId, issues);
    if (reconciliation) interventions.push(reconciliation);
  }

  const shouldBlockAdvance = issues.some((issue) =>
    issue.severity === 'critical' ||
    issue.type === 'policy_block' ||
    issue.type === 'phase_state_contradiction' ||
    issue.type === 'hollow_verification' ||
    issue.type === 'master_no_phase_progress' ||
    issue.type === 'provider_credit_exhausted' ||
    issue.type === 'candidate_store_drift' ||
    issue.type === 'repeated_tool_failure' ||
    issue.type === 'agent_error_burst' ||
    issue.type === 'agent_max_turns_exhausted'
  );
  const status = shouldBlockAdvance
    ? 'blocked'
    : issues.some((issue) => issue.severity === 'high' || issue.severity === 'medium')
      ? 'warning'
      : 'healthy';

  const result: OrchestrationHealthCheckResult = {
    status,
    issues,
    interventions,
    shouldBlockAdvance,
  };

  if (options.emitEvent && (issues.length > 0 || interventions.length > 0)) {
    await appendEvent({
      matterName,
      type: 'orchestration.health_check',
      runId: options.masterRunId,
      source: 'orchestration',
      data: {
        status,
        shouldBlockAdvance,
        issueCount: issues.length,
        issues,
        interventions,
      },
    });
  }

  return result;
}

function detectProviderCreditExhaustion(events: MatterEvent[]): OrchestrationHealthIssue[] {
  const creditErrors = events.filter((event) => {
    if (event.type !== 'agent.run.error') return false;
    const error = typeof event.data.error === 'string' ? event.data.error : '';
    return error.includes('Insufficient credits') || error.includes('error (402)') || error.includes(' 402');
  });
  if (creditErrors.length === 0) return [];

  return [{
    type: 'provider_credit_exhausted',
    severity: 'critical',
    summary: `Provider credit exhaustion detected in ${creditErrors.length} agent error event(s).`,
    remediation: 'Pause orchestration for operator repair. Add provider credits or switch to an explicitly allowed provider, then resume from the checkpoint instead of restarting completed phases.',
    objectId: creditErrors[0]?.runId ?? creditErrors[0]?.id,
    evidence: {
      errors: creditErrors.slice(0, 5).map((event) => ({
        eventId: event.id,
        runId: event.runId,
        taskId: event.taskId,
        error: event.data.error,
      })),
    },
  }];
}

function detectMasterNoPhaseProgress(events: MatterEvent[], tasks: TaskDagNode[]): OrchestrationHealthIssue[] {
  if (tasks.some((task) => task.kind === 'mini_orchestrator')) return [];
  const turnEvents = events.filter((event) => event.type === 'agent.turn.completed');
  if (turnEvents.length < 8) return [];
  const toolEvents = events.filter((event) => event.type === 'tool.called');
  const runPhaseCalls = toolEvents.filter((event) => event.data.tool === 'run_phase');
  if (runPhaseCalls.length > 0) return [];
  return [{
    type: 'master_no_phase_progress',
    severity: 'critical',
    summary: `Master completed ${turnEvents.length} turn(s) without creating any phase task or calling run_phase.`,
    remediation: 'Pause for repair, checkpoint the master state, tighten the master prompt/tool policy, then resume from the same run position without replaying completed phases.',
    evidence: {
      turnCount: turnEvents.length,
      recentTools: toolEvents.slice(0, 10).map((event) => ({
        eventId: event.id,
        tool: event.data.tool,
        success: event.data.success,
      })),
    },
  }];
}

function detectPolicyBlocks(events: MatterEvent[]): OrchestrationHealthIssue[] {
  const blocked = events
    .filter((event) => event.type === 'tool.called')
    .filter((event) => event.data.success === false && (event.data.policyDecision === 'ask' || event.data.policyDecision === 'deny'));
  const recent = blocked.slice(0, 10);
  return recent.map((event) => ({
    type: 'policy_block',
    severity: 'critical',
    summary: `Tool ${stringData(event.data, 'tool', 'unknown')} was blocked by policy decision ${stringData(event.data, 'policyDecision', 'unknown')}.`,
    remediation: 'Stop phase advancement, align autonomy/tool policy, then retry the affected task.',
    objectId: event.taskId ?? event.runId ?? event.id,
    evidence: {
      eventId: event.id,
      runId: event.runId,
      taskId: event.taskId,
      tool: event.data.tool,
      policyDecision: event.data.policyDecision,
      error: event.data.error,
    },
  }));
}

function detectCandidateDrift(telemetry: Awaited<ReturnType<typeof buildMatterStoreTelemetry>> | undefined): OrchestrationHealthIssue[] {
  if (!telemetry) return [];
  const { artifactSummary, candidateSummary, reconciliation } = telemetry;
  if (reconciliation.candidateFilesystemDrift <= DRIFT_THRESHOLD) return [];
  if (candidateSummary.jsonCount > 0 || candidateSummary.indexCount > 0) return [];
  if (artifactSummary.jsonCount > 0 || artifactSummary.indexCount > 0) return [];
  return [{
    type: 'candidate_store_drift',
    severity: 'critical',
    summary: `${reconciliation.candidateFilesystemDrift} candidate filesystem file(s) exist but zero JSON/indexed candidates are reducer-visible.`,
    remediation: 'Require workers to call submit_candidate for deliverables and do not advance to verification/export until reducer-visible candidates or artifacts exist.',
    evidence: {
      filesystemCount: candidateSummary.filesystemCount,
      transcriptCount: candidateSummary.transcriptCount,
      jsonCount: candidateSummary.jsonCount,
      indexCount: candidateSummary.indexCount,
      candidateFilesystemDrift: reconciliation.candidateFilesystemDrift,
    },
  }];
}

function detectPhaseContradictions(tasks: TaskDagNode[], phases: PhaseDefinition[]): OrchestrationHealthIssue[] {
  const issues: OrchestrationHealthIssue[] = [];
  const phaseIds = new Set(phases.map((phase) => phase.id));
  for (const task of tasks.filter((candidate) => candidate.kind === 'mini_orchestrator' && phaseIds.has(candidate.type))) {
    const resultStatus = stringData(task.data, 'resultStatus');
    const blocker = isRecord(task.data.blocker) ? task.data.blocker : undefined;
    if (task.status === 'completed' && (resultStatus === 'blocked' || resultStatus === 'failed' || blocker)) {
      issues.push({
        type: 'phase_state_contradiction',
        severity: 'critical',
        summary: `Phase task ${task.type} is completed but carries ${resultStatus || 'blocker'} state.`,
        remediation: 'Treat the phase as blocked, inspect worker events, and prevent downstream phase execution.',
        objectId: task.id,
        evidence: {
          phaseId: task.type,
          resultStatus,
          blocker,
          summary: task.data.summary,
        },
      });
    }
  }
  return issues;
}

function detectHollowVerification(tasks: TaskDagNode[]): OrchestrationHealthIssue[] {
  const latestDocumentProduction = latestPhaseTask(tasks, 'document_production');
  const latestVerification = latestPhaseTask(tasks, 'verification_and_hostile_review');
  if (!latestVerification || latestVerification.status !== 'completed') return [];
  const documentArtifacts = artifactIds(latestDocumentProduction);
  if (documentArtifacts.length > 0) return [];
  return [{
    type: 'hollow_verification',
    severity: 'critical',
    summary: 'Verification completed without reducer-visible document production artifacts.',
    remediation: 'Invalidate or block the verification phase, rerun document production with submit_candidate output, then verify actual documents.',
    objectId: latestVerification.id,
    evidence: {
      phaseId: 'verification_and_hostile_review',
      verificationTaskId: latestVerification.id,
      documentProductionTaskId: latestDocumentProduction?.id,
      documentProductionStatus: latestDocumentProduction?.status,
      documentArtifactIds: documentArtifacts,
    },
  }];
}

function detectPathGuessing(events: MatterEvent[]): OrchestrationHealthIssue[] {
  const misses = events
    .filter((event) => event.type === 'tool.called')
    .filter((event) => event.data.success === false && /ENOENT|no such file|not found/i.test(stringData(event.data, 'error')))
    .filter((event) => {
      const tool = stringData(event.data, 'tool');
      return tool === 'read_file' || tool === 'search_files' || tool === 'glob' || tool === 'grep';
    })
    .slice(0, 12);
  if (misses.length < 2) return [];
  return [{
    type: 'path_guessing',
    severity: 'medium',
    summary: `${misses.length} recent filesystem lookup failure(s) suggest workers are guessing paths instead of using evidence APIs.`,
    remediation: 'Broadcast matter_inventory -> evidence_search/evidence_chunk_read guidance and include evidence id-to-filename mappings in worker context.',
    evidence: {
      events: misses.map((event) => ({
        eventId: event.id,
        runId: event.runId,
        taskId: event.taskId,
        tool: event.data.tool,
        error: event.data.error,
        args: event.data.args,
      })),
    },
  }];
}

function detectRuntimeAnomalies(
  events: MatterEvent[],
  tasks: TaskDagNode[],
  runs: AgentRun[],
  now: Date,
): OrchestrationHealthIssue[] {
  const issues: OrchestrationHealthIssue[] = [];
  const recentEvents = events.slice(0, 100);
  const failedToolEvents = recentEvents.filter((event) =>
    event.type === 'tool.called' &&
    event.data.success === false &&
    event.data.policyDecision !== 'ask' &&
    event.data.policyDecision !== 'deny' &&
    !isNonBlockingToolMiss(event)
  );
  const failuresByRunAndTool = new Map<string, MatterEvent[]>();
  for (const event of failedToolEvents) {
    const key = `${event.runId ?? 'unknown'}:${stringData(event.data, 'tool', 'unknown')}`;
    const grouped = failuresByRunAndTool.get(key) ?? [];
    grouped.push(event);
    failuresByRunAndTool.set(key, grouped);
  }
  for (const grouped of failuresByRunAndTool.values()) {
    if (grouped.length < 3) continue;
    const first = grouped[0];
    issues.push({
      type: 'repeated_tool_failure',
      severity: 'high',
      summary: `Tool ${stringData(first.data, 'tool', 'unknown')} failed ${grouped.length} time(s) in run ${first.runId ?? 'unknown'}.`,
      remediation: 'Stop spending agent turns, inspect the repeated tool error, repair configuration/tool inputs, then retry the affected task.',
      objectId: first.taskId ?? first.runId ?? first.id,
      evidence: {
        runId: first.runId,
        taskId: first.taskId,
        tool: first.data.tool,
        failures: grouped.slice(0, 5).map((event) => ({
          eventId: event.id,
          error: event.data.error,
          args: event.data.args,
        })),
      },
    });
  }

  const errorEvents = recentEvents.filter((event) => event.type === 'agent.run.error');
  if (errorEvents.length >= 2) {
    issues.push({
      type: 'agent_error_burst',
      severity: 'high',
      summary: `${errorEvents.length} recent agent run error event(s) were recorded.`,
      remediation: 'Pause orchestration, inspect common failure causes, and restart only after the failing tool/model/config path is repaired.',
      objectId: errorEvents[0]?.runId ?? errorEvents[0]?.id,
      evidence: {
        errors: errorEvents.slice(0, 5).map((event) => ({
          eventId: event.id,
          runId: event.runId,
          taskId: event.taskId,
          error: event.data.error,
          summary: event.data.summary,
        })),
      },
    });
  }

  const maxTurnEvents = recentEvents.filter((event) => event.type === 'agent.run.max_turns');
  for (const event of maxTurnEvents.slice(0, 5)) {
    issues.push({
      type: 'agent_max_turns_exhausted',
      severity: 'high',
      summary: `Agent run ${event.runId ?? 'unknown'} exhausted its turn budget without a usable final result.`,
      remediation: 'Stop dependent work, inspect the transcript for loops or missing tools, then retry with corrected task context or tool access.',
      objectId: event.taskId ?? event.runId ?? event.id,
      evidence: {
        eventId: event.id,
        runId: event.runId,
        taskId: event.taskId,
        data: event.data,
      },
    });
  }

  const liveRunIds = new Set(runs.filter((run) => isRunLive(run, now)).map((run) => run.id));
  const staleInProgress = tasks
    .filter((task) => task.status === 'in_progress' && task.runId && liveRunIds.has(task.runId))
    .filter((task) => {
      const updatedAt = new Date(task.updated).getTime();
      return Number.isFinite(updatedAt) && now.getTime() - updatedAt >= 10 * 60 * 1000;
    })
    .slice(0, 5);
  for (const task of staleInProgress) {
    issues.push({
      type: 'stale_in_progress_task',
      severity: 'medium',
      summary: `Task ${task.id} has been in_progress for more than 10 minutes without task-state movement.`,
      remediation: 'Inspect the owning run heartbeat and latest transcript; split, retry, or cancel the task if it is not producing progress.',
      objectId: task.id,
      evidence: {
        taskId: task.id,
        runId: task.runId,
        phaseId: task.type,
        updated: task.updated,
      },
    });
  }

  return issues;
}

function isNonBlockingToolMiss(event: MatterEvent): boolean {
  const tool = stringData(event.data, 'tool');
  const error = stringData(event.data, 'error');
  if (tool === 'evidence_chunk_read' && /No chunks found|no indexed chunks/i.test(error)) {
    return true;
  }
  if ((tool === 'evidence_search' || tool === 'glob' || tool === 'search_files') && /No matching evidence found|No files found/i.test(error)) {
    return true;
  }
  return false;
}

function detectCheckpointContradiction(
  checkpoint: ReturnType<typeof loadOrchestrationCheckpoint>,
  tasks: TaskDagNode[],
  runs: AgentRun[],
): OrchestrationHealthIssue[] {
  if (!checkpoint) return [];
  const runningRuns = runs.filter((run) => run.status === 'running');
  const phaseTasks = tasks.filter((task) => task.kind === 'mini_orchestrator');
  const completedPhases = phaseTasks.filter((task) => task.status === 'completed').map((task) => task.type);
  const blockedPhases = phaseTasks.filter((task) => task.status === 'blocked' || task.status === 'failed').map((task) => task.type);
  if (runningRuns.length > 0) return [];
  if (checkpoint.status === 'blocked' && (checkpoint.completedPhaseIds ?? []).length === 0 && completedPhases.length > 0) {
    return [{
      type: 'checkpoint_live_state_mismatch',
      severity: 'medium',
      summary: 'Checkpoint says blocked with no completed phases, but live task state has completed phase tasks.',
      remediation: 'Reconcile the checkpoint at wind-down using task state and preserve blocked/failed phase reasons.',
      evidence: {
        checkpointStatus: checkpoint.status,
        checkpointCompletedPhaseIds: checkpoint.completedPhaseIds ?? [],
        liveCompletedPhases: completedPhases,
        liveBlockedPhases: blockedPhases,
      },
    }];
  }
  return [];
}

function detectOrphanedTasks(
  tasks: TaskDagNode[],
  liveRunIds: Set<string>,
  now: Date,
  orphanAfterMs: number,
): OrchestrationHealthIssue[] {
  return tasks
    .filter((task) => isOrphanedTask(task, liveRunIds, now, orphanAfterMs))
    .map((task) => ({
      type: 'orphaned_task',
      severity: 'high',
      summary: `Task ${task.id} is in_progress but has no live run or lease.`,
      remediation: 'Mark the task blocked with an agent_orphaned blocker, then retry or replace the worker before continuing.',
      objectId: task.id,
      evidence: {
        taskId: task.id,
        phaseId: task.type,
        runId: task.runId,
        updated: task.updated,
        leaseId: task.leaseId,
        leaseExpiresAt: task.leaseExpiresAt,
      },
    }));
}

function detectOpaqueBlockedTasks(tasks: TaskDagNode[]): OrchestrationHealthIssue[] {
  return tasks
    .filter((task) => task.status === 'blocked' && !task.blockedReason && !isRecord(task.data.blocker))
    .map((task) => ({
      type: 'opaque_blocked_task',
      severity: 'medium',
      summary: `Blocked task ${task.id} has no structured blocker or blocked reason.`,
      remediation: 'Populate blockedReason and data.blocker before checkpointing or operator handoff.',
      objectId: task.id,
      evidence: {
        taskId: task.id,
        phaseId: task.type,
        title: task.title,
      },
    }));
}

function repairOrphanedTasks(
  matterName: string,
  tasks: TaskDagNode[],
  liveRunIds: Set<string>,
  now: Date,
  orphanAfterMs: number,
): string[] {
  const interventions: string[] = [];
  for (const task of tasks.filter((candidate) => isOrphanedTask(candidate, liveRunIds, now, orphanAfterMs))) {
    const reason = task.runId ? `owning run ${task.runId} is not live` : 'task has no owning run';
    updateTask(matterName, task.id, {
      status: 'blocked',
      blockedReason: `agent_orphaned: ${reason}`,
      data: {
        blocker: {
          type: 'agent_orphaned',
          objectId: task.id,
          reason,
          remediation: 'Retry this task with a replacement worker before trusting downstream phases.',
          severity: 'high',
        },
      },
    });
    interventions.push(`Marked orphaned task ${task.id} blocked.`);
  }
  return interventions;
}

function repairOpaqueBlockedTasks(matterName: string, tasks: TaskDagNode[]): string[] {
  const interventions: string[] = [];
  for (const task of tasks.filter((candidate) => candidate.status === 'blocked' && !candidate.blockedReason && !isRecord(candidate.data.blocker))) {
    const reason = 'blocked_without_structured_reason: inspect latest task/agent/tool events to determine the original blocker';
    updateTask(matterName, task.id, {
      blockedReason: reason,
      data: {
        blocker: {
          type: 'unknown_blocker',
          objectId: task.id,
          reason,
          remediation: 'Replay recent events for this task and replace this placeholder with the policy, dependency, evidence, or runtime cause.',
          severity: 'medium',
        },
      },
    });
    interventions.push(`Added placeholder blocker for task ${task.id}.`);
  }
  return interventions;
}

function reconcileCheckpoint(
  matterName: string,
  phases: PhaseDefinition[],
  tasks: TaskDagNode[],
  masterRunId: string | undefined,
  issues: OrchestrationHealthIssue[],
): string | undefined {
  const phaseTasks = tasks.filter((task) => task.kind === 'mini_orchestrator');
  const phaseIds = new Set(phases.map((phase) => phase.id));
  const phaseByTaskId = buildPhaseByTaskId(tasks, phaseIds);
  const phaseSummaries = phases
    .map((phase) => {
      const task = latestPhaseTask(phaseTasks, phase.id);
      if (!task) return undefined;
      const status = task.status === 'completed' ? 'completed' : 'blocked';
      return {
        phaseId: phase.id,
        phaseName: phase.name,
        status,
        summary: stringData(task.data, 'summary', task.blockedReason ?? `Phase task is ${task.status}.`),
      };
    })
    .filter((summary): summary is { phaseId: string; phaseName: string; status: 'completed' | 'blocked'; summary: string } => Boolean(summary));
  if (phaseSummaries.length === 0) return undefined;
  const blockedIssuePhaseIds = new Set(
    issues
      .filter((issue) => issue.severity === 'critical' || issue.severity === 'high')
      .map((issue) => phaseIdForIssue(issue, phaseIds, phaseByTaskId))
      .filter((phaseId): phaseId is string => Boolean(phaseId)),
  );
  const hasUnmappedBlockingIssue = issues.some((issue) =>
    (issue.severity === 'critical' || issue.severity === 'high') &&
    !phaseIdForIssue(issue, phaseIds, phaseByTaskId)
  );
  const fallbackBlockedPhaseId = hasUnmappedBlockingIssue
    ? fallbackPhaseForGlobalBlocker(phaseSummaries, phaseIds)
    : undefined;
  if (fallbackBlockedPhaseId) {
    blockedIssuePhaseIds.add(fallbackBlockedPhaseId);
  }
  const normalizedSummaries = phaseSummaries.map((summary) => blockedIssuePhaseIds.has(summary.phaseId)
    ? { ...summary, status: 'blocked' as const, summary: `${summary.summary} Health check blocked this phase.` }
    : summary);
  const blockedPhaseIds = normalizedSummaries.filter((summary) => summary.status !== 'completed').map((summary) => summary.phaseId);

  saveOrchestrationCheckpoint(matterName, {
    masterRunId,
    status: blockedPhaseIds.length > 0 ? 'blocked' : 'completed',
    completedPhaseIds: normalizedSummaries.filter((summary) => summary.status === 'completed').map((summary) => summary.phaseId),
    blockedPhaseIds,
    failedPhaseIds: tasks.filter((task) => task.kind === 'mini_orchestrator' && task.status === 'failed').map((task) => task.type),
    phaseSummaries: normalizedSummaries,
  });
  return `Reconciled checkpoint from ${normalizedSummaries.length} live phase task(s).`;
}

function latestPhaseTask(tasks: TaskDagNode[], phaseId: string): TaskDagNode | undefined {
  return tasks
    .filter((task) => task.kind === 'mini_orchestrator' && task.type === phaseId)
    .sort((a, b) => b.updated.localeCompare(a.updated))[0];
}

function buildPhaseByTaskId(tasks: TaskDagNode[], phaseIds: Set<string>): Map<string, string> {
  const byId = new Map(tasks.map((task) => [task.id, task]));
  const phaseByTaskId = new Map<string, string>();
  for (const task of tasks) {
    const directPhaseId = typeof task.data.phaseId === 'string' ? task.data.phaseId : undefined;
    if (directPhaseId && phaseIds.has(directPhaseId)) {
      phaseByTaskId.set(task.id, directPhaseId);
      continue;
    }
    if (task.kind === 'mini_orchestrator' && phaseIds.has(task.type)) {
      phaseByTaskId.set(task.id, task.type);
      continue;
    }
    let cursor = task.parentId ? byId.get(task.parentId) : undefined;
    while (cursor) {
      const parentPhaseId = typeof cursor.data.phaseId === 'string' ? cursor.data.phaseId : undefined;
      if (parentPhaseId && phaseIds.has(parentPhaseId)) {
        phaseByTaskId.set(task.id, parentPhaseId);
        break;
      }
      if (cursor.kind === 'mini_orchestrator' && phaseIds.has(cursor.type)) {
        phaseByTaskId.set(task.id, cursor.type);
        break;
      }
      cursor = cursor.parentId ? byId.get(cursor.parentId) : undefined;
    }
  }
  return phaseByTaskId;
}

function phaseIdForIssue(
  issue: OrchestrationHealthIssue,
  phaseIds: Set<string>,
  phaseByTaskId: Map<string, string>,
): string | undefined {
  const evidencePhaseId = typeof issue.evidence?.phaseId === 'string' ? issue.evidence.phaseId : undefined;
  if (evidencePhaseId && phaseIds.has(evidencePhaseId)) return evidencePhaseId;
  if (issue.objectId) {
    const taskPhaseId = phaseByTaskId.get(issue.objectId);
    if (taskPhaseId) return taskPhaseId;
  }
  const taskId = typeof issue.evidence?.taskId === 'string' ? issue.evidence.taskId : undefined;
  return taskId ? phaseByTaskId.get(taskId) : undefined;
}

function fallbackPhaseForGlobalBlocker(
  phaseSummaries: Array<{ phaseId: string; phaseName: string; status: 'completed' | 'blocked'; summary: string }>,
  phaseIds: Set<string>,
): string | undefined {
  for (const preferred of ['document_output_pipeline', 'operator_handoff', 'bundle_and_war_room_assembly', 'verification_and_hostile_review']) {
    if (phaseIds.has(preferred) && phaseSummaries.some((summary) => summary.phaseId === preferred)) return preferred;
  }
  return phaseSummaries.at(-1)?.phaseId;
}

function collectRelatedRunIds(runs: AgentRun[], masterRunId: string): Set<string> {
  const related = new Set<string>([masterRunId]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const run of runs) {
      if (run.parentRunId && related.has(run.parentRunId) && !related.has(run.id)) {
        related.add(run.id);
        changed = true;
      }
    }
  }
  return related;
}

function artifactIds(task: TaskDagNode | undefined): string[] {
  if (!task) return [];
  return Array.isArray(task.data.artifactIds)
    ? task.data.artifactIds.filter((id): id is string => typeof id === 'string' && id.length > 0)
    : [];
}

function isOrphanedTask(task: TaskDagNode, liveRunIds: Set<string>, now: Date, orphanAfterMs: number): boolean {
  if (task.status !== 'in_progress') return false;
  if (task.leaseExpiresAt && new Date(task.leaseExpiresAt).getTime() > now.getTime()) return false;
  if (task.runId && liveRunIds.has(task.runId)) return false;
  const updatedAt = new Date(task.updated).getTime();
  return Number.isFinite(updatedAt) && now.getTime() - updatedAt >= orphanAfterMs;
}

function stringData(data: Record<string, unknown>, key: string, fallback = ''): string {
  const value = data[key];
  return typeof value === 'string' && value.length > 0 ? value : fallback;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
