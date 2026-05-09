import { MiniOrchestrator } from './mini-orchestrator.js';
import { MasterSupervisor, type MasterSupervisorResult } from './master-supervisor.js';
import { createTask, listTasks, updateTask } from '../state/tasks.js';
import { createRun, updateRun } from '../state/runs.js';
import { recoverStaleRuntimeState } from '../state/runtime-recovery.js';
import { OrchestrationRuntime } from './runtime.js';
import { saveOrchestrationCheckpoint } from './checkpoint.js';
import { DEFAULT_MAX_CONCURRENCY, DEFAULT_MAX_DEPTH, normalizePositiveInteger, remainingDepth } from './limits.js';
import { resolveConfig } from '../config/loader.js';
import { selectModelForTask } from '../config/model-routing.js';
import { getDefaultPhases, type PhaseDefinition } from '../legal/workflow.js';
import { loadMatter, saveMatterIndex } from '../storage/matter.js';
import { evaluateRunReadiness } from './run-readiness.js';
import { buildProviderAgnosticResumePlan } from './resume-recovery.js';
import type { OrchestratorConfig, OrchestratorResult, AgentStructuredResult } from './types.js';

export { OrchestratorConfig, OrchestratorResult } from './types.js';

interface ResumePlan {
  phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }>;
  startIndex: number;
  resumeFromRunId?: string;
}

export class MasterOrchestrator {
  private config: OrchestratorConfig;
  private runtime: OrchestrationRuntime;
  private activeMasterRunId?: string;

  constructor(config: OrchestratorConfig) {
    this.config = config;
    this.runtime = new OrchestrationRuntime({
      matterName: config.matterName,
      maxDepth: config.maxDepth,
      maxConcurrency: config.maxConcurrency,
      maxBudgetUsd: config.maxRunBudgetUsd,
    });
  }

  private buildResumePlan(matterName: string, objective: string | undefined, phases: PhaseDefinition[]): ResumePlan {
    const plan = buildProviderAgnosticResumePlan({ matterName, objective, phases });
    return {
      phaseResults: plan.phaseResults,
      startIndex: plan.startIndex,
      resumeFromRunId: plan.resumeFromRunId,
    };
  }

  private saveCheckpoint(input: {
    masterRunId: string;
    status: 'running' | 'blocked' | 'completed' | 'failed';
    objective?: string;
    currentPhaseIndex?: number;
    currentPhaseId?: string;
    phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }>;
    failedPhases: string[];
    blockedPhases: string[];
    supervisorStopReason?: string;
    resumeFromRunId?: string;
  }): void {
    saveOrchestrationCheckpoint(this.config.matterName, {
      masterRunId: input.masterRunId,
      status: input.status,
      objective: input.objective,
      currentPhaseIndex: input.currentPhaseIndex,
      currentPhaseId: input.currentPhaseId,
      completedPhaseIds: input.phaseResults
        .filter(({ result }) => result.status === 'completed')
        .map(({ phase }) => phase.id),
      blockedPhaseIds: input.blockedPhases,
      failedPhaseIds: input.failedPhases,
      phaseSummaries: input.phaseResults.map(({ phase, result }) => ({
        phaseId: phase.id,
        phaseName: phase.name,
        status: toCheckpointPhaseStatus(result.status),
        summary: result.summary,
      })),
      supervisorStopReason: input.supervisorStopReason,
      resumeFromRunId: input.resumeFromRunId,
    });
  }

  async run(): Promise<OrchestratorResult> {
    const { matterName, objective, maxDepth, maxConcurrency } = this.config;
    const phaseMaxDepth = remainingDepth(maxDepth, DEFAULT_MAX_DEPTH);
    const phaseMaxConcurrency = normalizePositiveInteger(maxConcurrency, DEFAULT_MAX_CONCURRENCY);
    const phases = this.config.phases ?? getDefaultPhases();
    await recoverStaleRuntimeState(matterName, { preserveInterruptedTasks: Boolean(this.config.resume) });
    const resolvedConfig = await resolveConfig({ matterName });
    const resumePlan = this.config.resume
      ? this.buildResumePlan(matterName, objective, phases)
      : emptyResumePlan();
    const masterModel = this.config.model ?? selectModelForTask({
      providerPolicy: resolvedConfig.providerPolicy,
      role: 'master_orchestrator',
      objective,
    });

    const masterRun = createRun({
      id: this.config.runId ?? process.env.ATTICUS_RUN_ID,
      matterName,
      model: masterModel,
      agentType: 'master_orchestrator',
      role: 'master',
      prompt: objective,
    });

    this.runtime.trackRun(masterRun.id);
    this.activeMasterRunId = masterRun.id;
    const removeShutdownCleanup = this.installShutdownCleanup(masterRun.id);

    try {
      await this.runtime.emitRunStarted(masterRun.id, objective);
      await setMatterStatus(matterName, 'analyzing');

      const phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }> = [...resumePlan.phaseResults];
      const supervisorResults: MasterSupervisorResult[] = [];
      const failedPhases: string[] = [];
      const blockedPhases: string[] = [];
      let stoppedReason: 'aborted' | 'budget_exceeded' | undefined;
      let supervisorStopReason: string | undefined;
      const supervisor = new MasterSupervisor({
        matterName,
        masterRunId: masterRun.id,
        objective,
        resolvedConfig,
        model: masterModel,
        quietMode: true,
      });

      if (!this.runtime.isAborted()) {
        this.saveCheckpoint({
          masterRunId: masterRun.id,
          status: 'running',
          objective,
          currentPhaseIndex: resumePlan.startIndex,
          currentPhaseId: phases[resumePlan.startIndex]?.id,
          phaseResults,
          failedPhases,
          blockedPhases,
          resumeFromRunId: resumePlan.resumeFromRunId,
        });
        const preflightSupervision = await supervisor.inspect({
          checkpoint: 'preflight',
          completedPhaseCount: phaseResults.length,
        });
        supervisorResults.push(preflightSupervision);
        if (this.supervisorRequiresStop(preflightSupervision)) {
          supervisorStopReason = this.supervisorStopReason(preflightSupervision);
        }
      }

      for (let phaseIndex = resumePlan.startIndex; phaseIndex < phases.length; phaseIndex += 1) {
        const phase = phases[phaseIndex];
        if (supervisorStopReason) break;
        await this.runtime.applyControlCommands(masterRun.id);
        await this.runtime.waitIfPaused(masterRun.id);
        if (this.runtime.isAborted()) {
          stoppedReason = 'aborted';
          break;
        }
        if (this.runtime.isBudgetExceeded()) {
          stoppedReason = 'budget_exceeded';
          break;
        }

        this.saveCheckpoint({
          masterRunId: masterRun.id,
          status: 'running',
          objective,
          currentPhaseIndex: phaseIndex,
          currentPhaseId: phase.id,
          phaseResults,
          failedPhases,
          blockedPhases,
          resumeFromRunId: resumePlan.resumeFromRunId,
        });

        const task = createTask({
          matterName,
          runId: masterRun.id,
          kind: 'mini_orchestrator',
          type: phase.id,
          title: `Phase: ${phase.name}`,
          priority: 'high',
          depth: 1,
          assignedAgent: 'mini_orchestrator',
          data: { phaseId: phase.id, objective: phase.description },
        });

        updateTask(matterName, task.id, { status: 'in_progress' } as Parameters<typeof updateTask>[2]);

        const mini = new MiniOrchestrator({
          matterName,
          phase,
          objective: `${phase.name}: ${phase.description}. Matter context: ${objective || matterName}`,
          maxDepth: phaseMaxDepth,
          maxConcurrency: phaseMaxConcurrency,
          parentRunId: masterRun.id,
          providerPolicy: resolvedConfig.providerPolicy,
          autonomy: resolvedConfig.autonomy,
          phaseTaskId: task.id,
          runtime: this.runtime,
        });

        const phaseExecution = await this.executePhaseWithSupervision({
          mini,
          supervisor,
          phase,
          completedPhaseCount: phaseResults.length,
          failedPhases,
          blockedPhases,
        });
        supervisorResults.push(...phaseExecution.supervisorResults);
        if (phaseExecution.supervisorStopReason) {
          supervisorStopReason = phaseExecution.supervisorStopReason;
        }

        let result = phaseExecution.result;
        if (!this.runtime.isAborted()) {
          const phaseSupervision = await supervisor.inspect({
            checkpoint: result.status === 'completed' ? 'after_phase' : 'blocked_phase',
            phase,
            phaseResult: result,
            completedPhaseCount: phaseResults.length + 1,
            failedPhases,
            blockedPhases,
          });
          supervisorResults.push(phaseSupervision);
          result = this.applySupervisorToPhaseResult(result, phaseSupervision);
          if (this.supervisorRequiresStop(phaseSupervision)) {
            supervisorStopReason = this.supervisorStopReason(phaseSupervision);
          }
        }
        phaseResults.push({ phase, result });

        if (result.status === 'failed') {
          failedPhases.push(phase.id);
          updateTask(matterName, task.id, {
            status: 'failed',
            data: { failureReason: result.summary },
          } as Parameters<typeof updateTask>[2]);
        } else if (result.status === 'blocked' || result.status === 'needs_followup') {
          blockedPhases.push(phase.id);
          updateTask(matterName, task.id, {
            status: 'blocked',
            data: { blockReason: result.summary },
          } as Parameters<typeof updateTask>[2]);
        } else {
          updateTask(matterName, task.id, { status: 'completed' } as Parameters<typeof updateTask>[2]);
        }

        this.saveCheckpoint({
          masterRunId: masterRun.id,
          status: supervisorStopReason || result.status === 'failed' || result.status === 'blocked' || result.status === 'needs_followup'
            ? 'blocked'
            : 'running',
          objective,
          currentPhaseIndex: phaseIndex + 1,
          currentPhaseId: phases[phaseIndex + 1]?.id,
          phaseResults,
          failedPhases,
          blockedPhases,
          supervisorStopReason,
          resumeFromRunId: resumePlan.resumeFromRunId,
        });

        if (this.runtime.isAborted()) {
          stoppedReason = 'aborted';
          break;
        }
      }

      if (!this.runtime.isAborted() && !this.runtime.isBudgetExceeded()) {
        const finalSupervision = await supervisor.inspect({
          checkpoint: 'final',
          completedPhaseCount: phaseResults.length,
          failedPhases,
          blockedPhases,
          stoppedReason: stoppedReason ?? supervisorStopReason,
        });
        supervisorResults.push(finalSupervision);
        if (this.supervisorRequiresStop(finalSupervision) && !supervisorStopReason) {
          supervisorStopReason = this.supervisorStopReason(finalSupervision);
        }
      }

      const result = await this.synthesize(
        matterName,
        objective,
        phaseResults,
        failedPhases,
        blockedPhases,
        supervisorResults,
        stoppedReason,
        supervisorStopReason,
        phases.length,
      );
      const terminalStatus = stoppedReason ?? result.status;
      await this.runtime.emitRunCompleted(masterRun.id, result.summary, {
        status: terminalStatus,
        completedPhases: phaseResults.length - failedPhases.length - blockedPhases.length,
        totalPhases: phases.length,
      });
      updateRun(matterName, masterRun.id, {
        status: result.status === 'failed' ? 'error' : result.status === 'needs_followup' ? 'blocked' : 'completed',
        summary: result.summary,
      });
      this.saveCheckpoint({
        masterRunId: masterRun.id,
        status: result.status === 'completed' ? 'completed' : result.status === 'failed' ? 'failed' : 'blocked',
        objective,
        currentPhaseIndex: phaseResults.length,
        currentPhaseId: phases[phaseResults.length]?.id,
        phaseResults,
        failedPhases,
        blockedPhases,
        supervisorStopReason,
        resumeFromRunId: resumePlan.resumeFromRunId,
      });
      await setMatterStatus(matterName, result.status === 'completed' ? 'complete' : 'analyzing');
      return result;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      const result: OrchestratorResult = {
        matterName,
        summary: `Orchestration failed: ${msg}`,
        status: 'failed',
        artifacts: [],
        findings: [],
        risks: [{ risk: msg, severity: 'high' }],
        phaseResults: [],
      };

      await this.runtime.emitRunCompleted(masterRun.id, result.summary, {
        status: 'failed',
        completedPhases: 0,
        totalPhases: phases.length,
      });
      updateRun(matterName, masterRun.id, {
        status: 'error',
        summary: result.summary,
        error: msg,
      });
      for (const task of listTasks(matterName, { status: 'in_progress' })) {
        updateTask(matterName, task.id, {
          status: 'failed',
          data: { failureReason: result.summary },
        });
      }
      await setMatterStatus(matterName, 'analyzing');
      return result;
    } finally {
      removeShutdownCleanup();
      this.runtime.untrackRun(masterRun.id);
      this.activeMasterRunId = undefined;
    }
  }

  getActiveRunCount(): number {
    return this.runtime.getActiveCount();
  }

  abort(): void {
    this.runtime.abort('aborted', this.activeMasterRunId);
  }

  private async executePhaseWithSupervision(input: {
    mini: MiniOrchestrator;
    supervisor: MasterSupervisor;
    phase: PhaseDefinition;
    completedPhaseCount: number;
    failedPhases: string[];
    blockedPhases: string[];
  }): Promise<{
    result: AgentStructuredResult;
    supervisorResults: MasterSupervisorResult[];
    supervisorStopReason?: string;
  }> {
    const supervisorResults: MasterSupervisorResult[] = [];
    let deferredStopReason: string | undefined;
    const intervalMs = getMasterSupervisorIntervalMs();
    const phasePromise = input.mini.execute().then(
      (result) => ({ result }),
      (error: unknown) => ({ error }),
    );

    if (intervalMs <= 0) {
      const completed = await phasePromise;
      if ('error' in completed) throw completed.error;
      return { result: completed.result, supervisorResults };
    }

    for (;;) {
      const next = await Promise.race([
        phasePromise,
        sleep(intervalMs).then(() => undefined),
      ]);
      if (next !== undefined) {
        if ('error' in next) throw next.error;
        return { result: next.result, supervisorResults, supervisorStopReason: deferredStopReason };
      }

      if (this.runtime.isAborted()) {
        continue;
      }

      const supervision = await input.supervisor.inspect({
        checkpoint: 'during_phase',
        phase: input.phase,
        completedPhaseCount: input.completedPhaseCount,
        failedPhases: input.failedPhases,
        blockedPhases: input.blockedPhases,
      });
      supervisorResults.push(supervision);
      if (this.supervisorRequiresImmediateStop(supervision)) {
        const stopReason = this.supervisorStopReason(supervision);
        this.runtime.abort(stopReason, this.activeMasterRunId);
        return {
          result: await this.awaitPhaseAfterSupervisorStop(phasePromise, input.phase, stopReason),
          supervisorResults,
          supervisorStopReason: stopReason,
        };
      }
      if (this.supervisorRequiresStop(supervision)) {
        deferredStopReason ??= this.supervisorStopReason(supervision);
      }
    }
  }

  private async awaitPhaseAfterSupervisorStop(
    phasePromise: Promise<{ result: AgentStructuredResult } | { error: unknown }>,
    phase: PhaseDefinition,
    stopReason: string,
  ): Promise<AgentStructuredResult> {
    const completed = await phasePromise;
    if ('result' in completed) return completed.result;
    return {
      status: 'needs_followup',
      summary: `Phase ${phase.name} was interrupted by master supervision: ${stopReason}`,
      findings: [],
      risks: [{
        risk: completed.error instanceof Error ? completed.error.message : String(completed.error),
        severity: 'high',
        mitigation: 'Restart the phase after applying the master supervisor recovery recommendation.',
      }],
      proposedTasks: [],
      artifactIds: [],
      nextActions: ['Restart the interrupted phase after master supervisor recovery.'],
    };
  }

  private applySupervisorToPhaseResult(
    result: AgentStructuredResult,
    supervision: MasterSupervisorResult,
  ): AgentStructuredResult {
    if (!this.supervisorRequiresStop(supervision)) return result;
    if (!this.supervisorInvalidatesPhase(supervision)) {
      return {
        ...result,
        risks: [
          ...result.risks,
          ...supervision.issues.map((issue) => ({
            risk: `Master supervisor: ${issue.issue}`,
            severity: issue.severity,
            mitigation: issue.mitigation || 'Resolve the supervisor issue before continuing to downstream phases.',
          })),
        ],
        nextActions: [
          ...result.nextActions,
          `Master supervisor recommended ${supervision.recommendedRunAction}: ${supervision.summary}`,
          ...supervision.actionsTaken.map((action) => `Supervisor action: ${action}`),
        ],
      };
    }

    return {
      ...result,
      status: result.status === 'failed' ? 'failed' : 'needs_followup',
      summary: `Master supervisor requires follow-up (${supervision.recommendedRunAction}): ${supervision.summary}. Prior phase summary: ${result.summary}`,
      risks: [
        ...result.risks,
        ...supervision.issues.map((issue) => ({
          risk: `Master supervisor: ${issue.issue}`,
          severity: issue.severity,
          mitigation: issue.mitigation || 'Resolve the supervisor issue before accepting this phase.',
        })),
      ],
      nextActions: [
        ...result.nextActions,
        `Master supervisor recommended ${supervision.recommendedRunAction}: ${supervision.summary}`,
        ...supervision.actionsTaken.map((action) => `Supervisor action: ${action}`),
      ],
    };
  }

  private supervisorRequiresStop(supervision: MasterSupervisorResult): boolean {
    return supervision.status === 'failed' ||
      supervision.recommendedRunAction !== 'continue' ||
      supervision.requiresRestart;
  }

  private supervisorRequiresImmediateStop(supervision: MasterSupervisorResult): boolean {
    return supervision.status === 'failed' ||
      supervision.recommendedRunAction === 'pause' ||
      supervision.recommendedRunAction === 'abort';
  }

  private supervisorInvalidatesPhase(supervision: MasterSupervisorResult): boolean {
    return supervision.status === 'failed' ||
      supervision.recommendedRunAction === 'retry_phase' ||
      supervision.recommendedRunAction === 'pause' ||
      supervision.recommendedRunAction === 'abort';
  }

  private supervisorStopReason(supervision: MasterSupervisorResult): string {
    return `master supervisor recommended ${supervision.recommendedRunAction}: ${supervision.summary}`;
  }

  private installShutdownCleanup(masterRunId: string): () => void {
    const { matterName } = this.config;
    const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGUSR1'];
    const handler = (signal: NodeJS.Signals): void => {
      const message = `Orchestration interrupted by ${signal}`;
      this.runtime.abort(message, masterRunId);
      updateRun(matterName, masterRunId, {
        status: 'error',
        summary: message,
        error: message,
      });
      for (const task of listTasks(matterName, { status: 'in_progress' })) {
        updateTask(matterName, task.id, {
          status: 'failed',
          data: { shutdownReason: message },
        });
      }
      process.exit(signal === 'SIGINT' ? 130 : 143);
    };
    for (const signal of signals) process.once(signal, handler);
    return () => {
      for (const signal of signals) process.removeListener(signal, handler);
    };
  }

  private async synthesize(
    matterName: string,
    objective: string | undefined,
    phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }>,
    failedPhases: string[],
    blockedPhases: string[],
    supervisorResults: MasterSupervisorResult[],
    stoppedReason?: 'aborted' | 'budget_exceeded',
    supervisorStopReason?: string,
    totalPhaseCount: number = phaseResults.length,
  ): Promise<OrchestratorResult> {
    const allFindings = phaseResults.flatMap((p) =>
      p.result.findings.map((f) => ({ claim: `${p.phase.name}: ${f.claim}`, confidence: f.confidence === 'high' ? 1 : f.confidence === 'medium' ? 0.5 : 0 }))
    );
    const supervisorRisks = supervisorResults.flatMap((supervision) =>
      supervision.issues.map((issue) => ({
        risk: `Master supervisor: ${issue.issue}`,
        severity: issue.severity,
      }))
    );
    const allRisks = [
      ...phaseResults.flatMap((p) =>
        p.result.risks.map((r) => ({ risk: `${p.phase.name}: ${r.risk}`, severity: r.severity || 'medium' }))
      ),
      ...supervisorRisks,
    ];
    const allArtifacts = phaseResults.flatMap((p) => p.result.artifactIds || []);
    const supervisorNeedsFollowup = supervisorResults.some((supervision) =>
      this.supervisorRequiresStop(supervision) ||
      supervision.status !== 'completed' ||
      supervision.issues.length > 0
    );
    const supervisorAttentionCount = supervisorResults.filter((supervision) =>
      this.supervisorRequiresStop(supervision) ||
      supervision.status !== 'completed' ||
      supervision.issues.length > 0
    ).length;

    let status: OrchestratorResult['status'];
    if (stoppedReason || supervisorStopReason || blockedPhases.length > 0 || supervisorNeedsFollowup) {
      status = 'needs_followup';
    } else if (failedPhases.length === 0) {
      status = 'completed';
    } else if (failedPhases.length < phaseResults.length / 2) {
      status = 'needs_followup';
    } else {
      status = 'failed';
    }

    const allPhaseResults = phaseResults.map(({ phase, result }) => ({
      phaseId: phase.id,
      phaseName: phase.name,
      status: result.status === 'failed'
        ? 'failed' as const
        : result.status === 'blocked' || result.status === 'needs_followup'
          ? 'blocked' as const
          : 'completed' as const,
      summary: result.summary,
      findings: result.findings.map((f) => ({
        claim: f.claim,
        support: f.support,
        confidence: f.confidence,
        kind: f.kind,
      })),
      risks: result.risks.map((r) => ({
        risk: r.risk,
        severity: r.severity || 'medium' as const,
        mitigation: r.mitigation || '',
      })),
      artifactIds: result.artifactIds,
      workerResults: [],
    }));

    const runReadiness = await evaluateRunReadiness({
      matterName,
      phaseResults: allPhaseResults,
      stoppedReason,
      requireAcceptedArtifact: false,
      requireExportSignoff: false,
    });

    return {
      matterName,
      summary: `Orchestration ${status}: ${phaseResults.length - failedPhases.length - blockedPhases.length}/${totalPhaseCount} phases completed, ${blockedPhases.length} blocked. ${allFindings.length} findings, ${allRisks.length} risks. Court-ready: ${runReadiness.courtReadyStatus}.${stoppedReason ? ` Stopped because ${stoppedReason}.` : ''}${supervisorStopReason ? ` Master supervision stopped because ${supervisorStopReason}.` : ''}${supervisorNeedsFollowup ? ` Master supervision flagged ${supervisorAttentionCount} checkpoint(s).` : ''}`,
      status,
      artifacts: allArtifacts,
      findings: allFindings,
      risks: allRisks,
      phaseResults: allPhaseResults,
      runReadiness,
    };
  }
}

function getMasterSupervisorIntervalMs(): number {
  const raw = process.env.ATTICUS_MASTER_SUPERVISOR_INTERVAL_MS;
  if (raw !== undefined) {
    const parsed = Number.parseInt(raw, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return 0;
    return Math.max(parsed, 5_000);
  }
  return 120_000;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function emptyResumePlan(): ResumePlan {
  return {
    phaseResults: [],
    startIndex: 0,
  };
}

function toCheckpointPhaseStatus(status: AgentStructuredResult['status']): 'completed' | 'failed' | 'blocked' {
  if (status === 'completed') return 'completed';
  if (status === 'failed') return 'failed';
  return 'blocked';
}

async function setMatterStatus(matterName: string, status: 'analyzing' | 'complete'): Promise<void> {
  try {
    const index = await loadMatter(matterName);
    index.status = status;
    await saveMatterIndex(matterName, index);
  } catch {
  }
}
