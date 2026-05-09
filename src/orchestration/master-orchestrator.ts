import { MiniOrchestrator } from './mini-orchestrator.js';
import { createTask, listTasks, updateTask } from '../state/tasks.js';
import { createRun, updateRun } from '../state/runs.js';
import { recoverStaleRuntimeState } from '../state/runtime-recovery.js';
import { OrchestrationRuntime } from './runtime.js';
import { DEFAULT_MAX_CONCURRENCY, DEFAULT_MAX_DEPTH, normalizePositiveInteger, remainingDepth } from './limits.js';
import { resolveConfig } from '../config/loader.js';
import { selectModelForTask } from '../config/model-routing.js';
import { getDefaultPhases, type PhaseDefinition } from '../legal/workflow.js';
import { loadMatter, saveMatterIndex } from '../storage/matter.js';
import { evaluateRunReadiness } from './run-readiness.js';
import type { OrchestratorConfig, OrchestratorResult, AgentStructuredResult } from './types.js';

export { OrchestratorConfig, OrchestratorResult } from './types.js';

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

  async run(): Promise<OrchestratorResult> {
    const { matterName, objective, maxDepth, maxConcurrency } = this.config;
    const phaseMaxDepth = remainingDepth(maxDepth, DEFAULT_MAX_DEPTH);
    const phaseMaxConcurrency = normalizePositiveInteger(maxConcurrency, DEFAULT_MAX_CONCURRENCY);
    const phases = this.config.phases ?? getDefaultPhases();
    await recoverStaleRuntimeState(matterName);
    const resolvedConfig = await resolveConfig({ matterName });
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

      const phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }> = [];
      const failedPhases: string[] = [];
      const blockedPhases: string[] = [];
      let stoppedReason: 'aborted' | 'budget_exceeded' | undefined;

      for (const phase of phases) {
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

        const result = await mini.execute();
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
      }

      const result = await this.synthesize(matterName, objective, phaseResults, failedPhases, blockedPhases, stoppedReason, phases);
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
    stoppedReason: 'aborted' | 'budget_exceeded' | undefined,
    phases: PhaseDefinition[],
  ): Promise<OrchestratorResult> {
    const allFindings = phaseResults.flatMap((p) =>
      p.result.findings.map((f) => ({ claim: `${p.phase.name}: ${f.claim}`, confidence: f.confidence === 'high' ? 1 : f.confidence === 'medium' ? 0.5 : 0 }))
    );
    const allRisks = phaseResults.flatMap((p) =>
      p.result.risks.map((r) => ({ risk: `${p.phase.name}: ${r.risk}`, severity: r.severity || 'medium' }))
    );
    const allArtifacts = phaseResults.flatMap((p) => p.result.artifactIds || []);

    let status: OrchestratorResult['status'];
    if (stoppedReason || blockedPhases.length > 0) {
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
        support: '',
        confidence: f.confidence,
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
      phases,
      phaseResults: allPhaseResults,
      activityStatus: stoppedReason ?? (status === 'failed' ? 'failed' : status === 'completed' ? 'completed' : 'partial'),
      requireAcceptedArtifact: false,
      requireExportSignoff: false,
    });

    return {
      matterName,
      summary: `Orchestration ${status}: ${phaseResults.length - failedPhases.length - blockedPhases.length}/${phaseResults.length} phases completed, ${blockedPhases.length} blocked. ${allFindings.length} findings, ${allRisks.length} risks. Court-ready: ${runReadiness.courtReadyStatus}.${stoppedReason ? ` Stopped because ${stoppedReason}.` : ''}`,
      status,
      artifacts: allArtifacts,
      findings: allFindings,
      risks: allRisks,
      phaseResults: allPhaseResults,
      runReadiness,
    };
  }
}

async function setMatterStatus(matterName: string, status: 'analyzing' | 'complete'): Promise<void> {
  try {
    const index = await loadMatter(matterName);
    index.status = status;
    await saveMatterIndex(matterName, index);
  } catch {
  }
}
