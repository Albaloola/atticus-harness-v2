import { WorkerAgent } from './worker.js';
import { createTask, updateTask } from '../state/tasks.js';
import { createRun, updateRun } from '../state/runs.js';
import { appendEvent } from '../state/events.js';
import { DEFAULTS } from '../config/schema.js';
import { selectModelForTask } from '../config/model-routing.js';
import { DEFAULT_MAX_CONCURRENCY, normalizePositiveInteger, remainingDepth } from './limits.js';
import { allowedToolsForPhase } from './phase-tools.js';
import { classifyMatterPosture, isRetrospectiveAppellatePosture, phaseWorkerTitlesForPosture } from './contracts.js';
import type { MiniOrchestratorInput, AgentStructuredResult } from './types.js';
import type { TaskDagNode } from '../types/state.js';

const DEFAULT_WORKER_RECOVERY_RETRIES = DEFAULTS.autonomy.gateFeedback.maxWorkerRetries;

export class MiniOrchestrator {
  private input: MiniOrchestratorInput;

  constructor(input: MiniOrchestratorInput) {
    this.input = input;
  }

  async execute(): Promise<AgentStructuredResult> {
    const { matterName, phase, objective, maxDepth, maxConcurrency, parentRunId, phaseTaskId, runtime } = this.input;
    const phaseName = phase?.id || 'unknown';
    const providerPolicy = this.input.providerPolicy ?? DEFAULTS.providerPolicy;
    const miniModel = selectModelForTask({
      providerPolicy,
      role: 'mini_orchestrator',
      phaseId: phaseName,
      objective,
    });
    const miniRun = createRun({
      matterName,
      model: miniModel,
      parentRunId,
      agentType: 'mini_orchestrator',
      role: 'mini_orchestrator',
      prompt: objective,
    });

    runtime?.trackRun(miniRun.id);

    try {
      await appendEvent({
        matterName,
        type: 'agent.spawned',
        runId: miniRun.id,
        taskId: phaseTaskId,
        source: 'agent',
        data: { role: 'mini_orchestrator', phase: phaseName, objective: objective.substring(0, 200) },
      }).catch(() => {});

      const workers = this.decompose(objective, phaseName);
      const results: AgentStructuredResult[] = [];
      const limit = Math.min(normalizePositiveInteger(maxConcurrency, DEFAULT_MAX_CONCURRENCY), Math.max(workers.length, 1));
      const childMaxDepth = remainingDepth(maxDepth, 1);

      for (let i = 0; i < workers.length; i += limit) {
        await runtime?.applyControlCommands(miniRun.id);
        await runtime?.waitIfPaused(miniRun.id);
        if (runtime?.isAborted()) break;

        const batch = workers.slice(i, i + limit);
        const batchResults = await Promise.all(
          batch.map(async (w) => {
            const task = createTask({
              matterName,
              kind: 'worker',
              type: phaseName,
              title: w.title,
              parentId: phaseTaskId,
              priority: 'medium',
              depth: 2,
              assignedAgent: 'worker',
              data: { objective: w.title },
            });

            appendEvent({ matterName, type: 'task.created', source: 'agent', data: { taskId: task.id, title: w.title } }).catch(() => {});

            const worker = new WorkerAgent({
              spawn: {
                matterName,
                parentRunId: miniRun.id,
                taskId: task.id,
                role: 'worker',
                title: w.title,
                objective: w.title,
                contextPack: this.phaseContextPack(phaseName, objective, w.title),
                allowedTools: allowedToolsForPhase(phaseName),
                maxTurns: 15,
                maxDepth: childMaxDepth,
                depth: 2,
                phaseId: phaseName,
              },
              model: selectModelForTask({
                providerPolicy,
                role: 'worker',
                phaseId: phaseName,
                title: w.title,
                objective: w.title,
              }),
              runtime,
            });

            updateTask(matterName, task.id, {
              status: 'in_progress',
              runId: worker.getRunId,
            } as Parameters<typeof updateTask>[2]);
            let result = await worker.execute();
            const maxRecoveryRetries = this.workerRecoveryRetries();
            let retryTaskId: string | undefined;

            if (isRecoverableWorkerStatus(result.status) && maxRecoveryRetries > 0 && !runtime?.isAborted()) {
              retryTaskId = this.createWorkerRetryTask({
                matterName,
                phaseName,
                phaseTaskId,
                originalTask: task,
                result,
                maxRecoveryRetries,
              });

              const retryResult = await this.executeWorkerRetry({
                matterName,
                miniRunId: miniRun.id,
                phaseName,
                originalTitle: w.title,
                retryTaskId,
                priorResult: result,
                providerPolicy,
                childMaxDepth,
              });

              if (retryResult.status === 'completed') {
                updateTask(matterName, task.id, {
                  status: 'completed',
                  data: {
                    phaseId: phaseName,
                    recoveryOutcome: 'recovered_by_retry',
                    retryTaskId,
                    maxRecoveryRetries,
                  },
                } as Parameters<typeof updateTask>[2]);
                return retryResult;
              }

              result = retryResult;
            }

            if (result.status === 'failed') {
              updateTask(matterName, task.id, {
                status: 'failed',
                data: {
                  failureReason: result.summary,
                  phaseId: phaseName,
                  recoveryOutcome: 'spawn_replacement',
                  retryTaskId,
                  maxRecoveryRetries,
                },
              } as Parameters<typeof updateTask>[2]);
            } else if (result.status === 'blocked' || result.status === 'needs_followup') {
              updateTask(matterName, task.id, {
                status: 'blocked',
                data: {
                  blockReason: result.summary,
                  phaseId: phaseName,
                  recoveryOutcome: 'spawn_replacement',
                  retryTaskId,
                  maxRecoveryRetries,
                },
              } as Parameters<typeof updateTask>[2]);
            } else {
              updateTask(matterName, task.id, { status: 'completed' } as Parameters<typeof updateTask>[2]);
            }

            return result;
          })
        );
        results.push(...batchResults);
      }

      const synthesized = this.synthesize(phaseName, objective, workers.length, results, Boolean(runtime?.isAborted()));
      updateRun(matterName, miniRun.id, {
        status: synthesized.status === 'failed' ? 'error' : synthesized.status === 'blocked' ? 'blocked' : 'completed',
        summary: synthesized.summary,
      });
      await appendEvent({
        matterName,
        type: synthesized.status === 'failed' ? 'agent.run.error' : synthesized.status === 'blocked' ? 'agent.run.blocked' : 'agent.run.completed',
        runId: miniRun.id,
        taskId: phaseTaskId,
        source: 'orchestration',
        data: {
          role: 'mini_orchestrator',
          phase: phaseName,
          status: synthesized.status,
          findingCount: synthesized.findings.length,
          riskCount: synthesized.risks.length,
        },
      }).catch(() => {});
      return synthesized;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      updateRun(matterName, miniRun.id, {
        status: 'error',
        summary: `Mini-orchestrator failed: ${msg}`,
        error: msg,
      });
      await appendEvent({
        matterName,
        type: 'agent.run.error',
        runId: miniRun.id,
        taskId: phaseTaskId,
        source: 'orchestration',
        data: { role: 'mini_orchestrator', phase: phaseName, error: msg },
      }).catch(() => {});
      return {
        status: 'failed',
        summary: `Mini-orchestrator failed: ${msg}`,
        findings: [],
        risks: [{ risk: msg, severity: 'high', mitigation: 'Escalate phase to operator' }],
        proposedTasks: [],
        artifactIds: [],
        nextActions: ['Escalate phase to operator'],
      };
    } finally {
      runtime?.untrackRun(miniRun.id);
    }
  }

  private createWorkerRetryTask(input: {
    matterName: string;
    phaseName: string;
    phaseTaskId?: string;
    originalTask: TaskDagNode;
    result: AgentStructuredResult;
    maxRecoveryRetries: number;
  }): string {
    const retryTask = createTask({
      matterName: input.matterName,
      kind: 'worker_retry',
      type: input.phaseName,
      title: `Retry: ${input.originalTask.title}`,
      parentId: input.phaseTaskId,
      priority: 'high',
      depth: (input.originalTask.depth ?? 2) + 1,
      assignedAgent: 'worker',
      data: {
        retryOf: input.originalTask.id,
        phaseId: input.phaseName,
        retryAttempt: 1,
        maxRecoveryRetries: input.maxRecoveryRetries,
        retryReason: input.result.summary,
        retryStatus: input.result.status,
        priorAttemptIds: [input.originalTask.id],
        recoveryOutcome: 'spawn_replacement',
      },
    });

    appendEvent({
      matterName: input.matterName,
      type: 'task.created',
      source: 'orchestration',
      data: {
        taskId: retryTask.id,
        title: retryTask.title,
        retryOf: input.originalTask.id,
        phase: input.phaseName,
        recoveryOutcome: 'spawn_replacement',
      },
    }).catch(() => {});

    return retryTask.id;
  }

  private async executeWorkerRetry(input: {
    matterName: string;
    miniRunId: string;
    phaseName: string;
    originalTitle: string;
    retryTaskId: string;
    priorResult: AgentStructuredResult;
    providerPolicy: MiniOrchestratorInput['providerPolicy'];
    childMaxDepth: number;
  }): Promise<AgentStructuredResult> {
    const retryObjective = [
      `Retry the worker task after a ${input.priorResult.status} result.`,
      `Original task: ${input.originalTitle}`,
      `Prior summary: ${input.priorResult.summary}`,
      'Use the prior attempt as context, avoid repeating failed search paths, and return a bounded JSON result.',
      'If the missing item is not applicable or unavailable from the persisted matter evidence, return status "completed" with a finding explaining the gap.',
    ].join('\n');

    const retryWorker = new WorkerAgent({
      spawn: {
        matterName: input.matterName,
        parentRunId: input.miniRunId,
        taskId: input.retryTaskId,
        role: 'worker',
        title: `Retry: ${input.originalTitle}`,
        objective: retryObjective,
        contextPack: this.phaseContextPack(input.phaseName, retryObjective, input.originalTitle),
        allowedTools: allowedToolsForPhase(input.phaseName),
        maxTurns: 10,
        maxDepth: input.childMaxDepth,
        depth: 3,
        phaseId: input.phaseName,
      },
      model: selectModelForTask({
        providerPolicy: input.providerPolicy ?? DEFAULTS.providerPolicy,
        role: 'worker',
        phaseId: input.phaseName,
        title: `Retry: ${input.originalTitle}`,
        objective: retryObjective,
      }),
      runtime: this.input.runtime,
    });

    updateTask(input.matterName, input.retryTaskId, {
      status: 'in_progress',
      runId: retryWorker.getRunId,
    } as Parameters<typeof updateTask>[2]);

    const retryResult = await retryWorker.execute();
    updateTask(input.matterName, input.retryTaskId, {
      status: retryResult.status === 'completed'
        ? 'completed'
        : retryResult.status === 'failed'
          ? 'failed'
          : 'blocked',
      data: {
        phaseId: input.phaseName,
        retryStatus: retryResult.status,
        retrySummary: retryResult.summary,
        retryExecutionOutcome: retryResult.status === 'completed' ? 'recovered' : 'retry_unresolved',
      },
    } as Parameters<typeof updateTask>[2]);

    return retryResult;
  }

  private workerRecoveryRetries(): number {
    const configured = this.input.autonomy?.gateFeedback?.maxWorkerRetries ?? DEFAULT_WORKER_RECOVERY_RETRIES;
    if (!Number.isFinite(configured) || configured < 0) return DEFAULT_WORKER_RECOVERY_RETRIES;
    return Math.trunc(configured);
  }

  private decompose(objective: string, phase: string): Array<{ title: string }> {
    const postureTitles = phaseWorkerTitlesForPosture(phase, objective);
    if (postureTitles && postureTitles.length > 0) return postureTitles.map((title) => ({ title }));

    switch (phase) {
      case 'intake_and_normalization':
        return [
          { title: 'Identify parties and timeline' },
          { title: 'Determine jurisdiction and desired outcome' },
          { title: 'Assess urgency and deadlines' },
        ];
      case 'evidence_ingestion_and_fact_extraction':
        return [
          { title: 'Extract key facts from evidence' },
          { title: 'Build chronology of events' },
          { title: 'Identify missing evidence gaps' },
        ];
      case 'issue_spotting':
        return [
          { title: 'Identify potential causes of action' },
          { title: 'Identify procedural barriers and limitation issues' },
          { title: 'List possible defences and counterclaims' },
        ];
      case 'law_and_policy_research':
        return [
          { title: 'Research applicable legislation' },
          { title: 'Research relevant case law' },
          { title: 'Check institutional policies and guidance' },
        ];
      case 'merits_and_risk_analysis':
        return [
          { title: 'Assess strength of claims' },
          { title: 'Identify evidential weaknesses' },
          { title: 'Evaluate settlement leverage' },
        ];
      case 'procedural_route_planning':
        return [
          { title: 'Determine appropriate forum' },
          { title: 'Check limitation and pre-action steps' },
          { title: 'Assess costs and funding risks' },
        ];
      case 'document_production':
        return [
          { title: 'Draft key documents' },
          { title: 'Prepare witness statements if supported by the record, otherwise document why they are not applicable' },
          { title: 'Assemble document bundle' },
        ];
      case 'verification_and_hostile_review':
        return [
          { title: 'Verify all citations' },
          { title: 'Run hostile review' },
          { title: 'Check procedural compliance' },
        ];
      case 'bundle_and_war_room_assembly':
        return [
          { title: 'Create master bundle index' },
          { title: 'Cross-reference evidence and facts' },
          { title: 'Prepare a filing checklist from available forum and bundle evidence, noting any unavailable filing data' },
        ];
      case 'operator_handoff':
        return [
          { title: 'Summarize findings and status from the current run and persisted matter evidence' },
          { title: 'Identify remaining risks' },
          { title: 'List next recommended actions' },
        ];
      default:
        return [
          { title: objective.substring(0, 120) },
        ];
    }
  }

  private phaseContextPack(phase: string, objective: string, taskTitle: string): string {
    const lines = [
      `Phase: ${phase}`,
      `Task: ${taskTitle}`,
      'Inventory rule: use matter_inventory for matter manifests, canonical schema guidance, production selection, and bundle indexes before trying direct SQLite.',
      'Finding labels: classify each finding as holding, party_argument, procedural_fact, evidence_fact, risk_signal, unsupported_inference, gap, or not_applicable.',
      'Do not block merely because a live litigation artifact is not needed; after checking the record, return completed with a not_applicable or gap finding.',
    ];

    if (isRetrospectiveAppellatePosture(classifyMatterPosture(objective))) {
      lines.push(
        'Matter mode: retrospective/concluded appellate record. Do not demand live filing, service, deadline, witness, or court-practice-direction artifacts unless the evidence itself asks for current filing work.',
        'Production bridge: call matter_inventory with view="production_candidates" and includeDuplicates=false. Use recommended production candidates as bundle-ready evidence IDs.',
        'Duplicate suppression: select one judgment variant and one press-summary variant; keep party written cases separate; treat interveners as optional unless central to the Scotland-specific objective.',
        'Bundle output: summarize the compact production list, role labels, evidence IDs, and reasons. Put selected evidence IDs in artifactIds so downstream phases can reuse them.',
      );
    }

    if (phase === 'document_production') {
      lines.push(
        'Document-production bridge: turn phase findings and production candidates into a bounded prepare-only document or production index. If drafting is not applicable, produce the production index instead of blocking.',
      );
    }

    if (phase === 'bundle_and_war_room_assembly') {
      lines.push(
        'Bundle assembly bridge: build the bundle index from selected evidence IDs and label each entry by role. For concluded appellate work, filing checklists are retrospective operator notes, not live filing demands.',
      );
    }

    return lines.join('\n');
  }

  private synthesize(
    _phase: string,
    objective: string,
    workerCount: number,
    results: AgentStructuredResult[],
    aborted: boolean,
  ): AgentStructuredResult {
    const allFindings = results.flatMap((r) => r.findings);
    const allRisks = results.flatMap((r) => r.risks);
    const allTasks = results.flatMap((r) => r.proposedTasks || []);
    const allArtifacts = results.flatMap((r) => r.artifactIds || []);
    const allActions = results.flatMap((r) => r.nextActions || []);

    const failed = results.filter((r) => r.status === 'failed');
    const blocked = results.filter((r) => r.status === 'blocked' || r.status === 'needs_followup');
    const incomplete = aborted || results.length < workerCount;
    const allOk = failed.length === 0 && blocked.length === 0 && !incomplete;

    return {
      status: allOk ? 'completed' : (failed.length > 0 ? 'failed' : 'blocked'),
      summary: `Phase synthesis: ${results.length}/${workerCount} workers, ${allFindings.length} findings, ${allRisks.length} risks${incomplete ? '; phase stopped before all workers completed' : ''}`,
      findings: allFindings.slice(0, 20),
      risks: allRisks.slice(0, 20),
      proposedTasks: allTasks.slice(0, 10),
      artifactIds: allArtifacts.slice(0, 20),
      nextActions: (incomplete ? ['Resume or rerun the phase'] : allActions).slice(0, 10),
    };
  }
}

function isRecoverableWorkerStatus(status: AgentStructuredResult['status']): boolean {
  return status === 'failed' || status === 'blocked' || status === 'needs_followup';
}
