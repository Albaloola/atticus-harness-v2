import { MiniOrchestrator } from './mini-orchestrator.js';
import { createTask, updateTask } from '../state/tasks.js';
import { createRun, updateRun } from '../state/runs.js';
import { OrchestrationRuntime } from './runtime.js';
import { resolveConfig } from '../config/loader.js';
import { selectModelForTask } from '../config/model-routing.js';
import { getDefaultPhases, type PhaseDefinition } from '../legal/workflow.js';
import { loadMatter, saveMatterIndex } from '../storage/matter.js';
import type { OrchestratorConfig, OrchestratorResult, AgentStructuredResult } from './types.js';

export { OrchestratorConfig, OrchestratorResult } from './types.js';

export class MasterOrchestrator {
  private config: OrchestratorConfig;
  private runtime: OrchestrationRuntime;

  constructor(config: OrchestratorConfig) {
    this.config = config;
    this.runtime = new OrchestrationRuntime({
      matterName: config.matterName,
      maxDepth: config.maxDepth,
      maxConcurrency: config.maxConcurrency,
    });
  }

  async run(): Promise<OrchestratorResult> {
    const { matterName, objective, maxDepth, maxConcurrency } = this.config;
    const phases = getDefaultPhases();
    const resolvedConfig = await resolveConfig({ matterName });
    const masterModel = this.config.model ?? selectModelForTask({
      providerPolicy: resolvedConfig.providerPolicy,
      role: 'master_orchestrator',
      objective,
    });

    const masterRun = createRun({
      matterName,
      model: masterModel,
      agentType: 'master_orchestrator',
      role: 'master',
      prompt: objective,
    });

    this.runtime.trackRun(masterRun.id);

    try {
      await this.runtime.emitRunStarted(masterRun.id, objective);
      await setMatterStatus(matterName, 'analyzing');

      const phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }> = [];
      const failedPhases: string[] = [];
      let stoppedReason: 'aborted' | 'budget_exceeded' | undefined;

      for (const phase of phases) {
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
          maxDepth: (maxDepth || 3) - 1,
          maxConcurrency: maxConcurrency || 4,
          parentRunId: masterRun.id,
          providerPolicy: resolvedConfig.providerPolicy,
          phaseTaskId: task.id,
          runtime: this.runtime,
        });

        const result = await mini.execute();
        phaseResults.push({ phase, result });

        if (result.status === 'failed') {
          failedPhases.push(phase.id);
          updateTask(matterName, task.id, { status: 'failed' } as Parameters<typeof updateTask>[2]);
        } else {
          updateTask(matterName, task.id, { status: 'completed' } as Parameters<typeof updateTask>[2]);
        }
      }

      await this.runtime.emitRunCompleted(
        masterRun.id,
        stoppedReason
          ? `Stopped because ${stoppedReason}; completed ${phaseResults.length - failedPhases.length}/${phaseResults.length} phases`
          : `Completed ${phaseResults.length - failedPhases.length}/${phaseResults.length} phases`
      );

      const result = this.synthesize(matterName, objective, phaseResults, failedPhases, stoppedReason);
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

      await this.runtime.emitRunCompleted(masterRun.id, result.summary);
      updateRun(matterName, masterRun.id, {
        status: 'error',
        summary: result.summary,
        error: msg,
      });
      await setMatterStatus(matterName, 'analyzing');
      return result;
    } finally {
      this.runtime.untrackRun(masterRun.id);
    }
  }

  getActiveRunCount(): number {
    return this.runtime.getActiveCount();
  }

  abort(): void {
    this.runtime.abort();
  }

  private synthesize(
    matterName: string,
    objective: string | undefined,
    phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }>,
    failedPhases: string[],
    stoppedReason?: 'aborted' | 'budget_exceeded',
  ): OrchestratorResult {
    const allFindings = phaseResults.flatMap((p) =>
      p.result.findings.map((f) => ({ claim: `${p.phase.name}: ${f.claim}`, confidence: f.confidence === 'high' ? 1 : f.confidence === 'medium' ? 0.5 : 0 }))
    );
    const allRisks = phaseResults.flatMap((p) =>
      p.result.risks.map((r) => ({ risk: `${p.phase.name}: ${r.risk}`, severity: r.severity || 'medium' }))
    );
    const allArtifacts = phaseResults.flatMap((p) => p.result.artifactIds || []);

    const status = stoppedReason
      ? 'needs_followup'
      : failedPhases.length === 0
      ? 'completed'
      : failedPhases.length < phaseResults.length / 2
        ? 'needs_followup'
        : 'failed';

    const allPhaseResults = phaseResults.map(({ phase, result }) => ({
      phaseId: phase.id,
      phaseName: phase.name,
      status: result.status === 'failed' ? 'failed' as const : result.status === 'blocked' ? 'blocked' as const : 'completed' as const,
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

    return {
      matterName,
      summary: `Orchestration ${status}: ${phaseResults.length - failedPhases.length}/${phaseResults.length} phases completed. ${allFindings.length} findings, ${allRisks.length} risks.${stoppedReason ? ` Stopped because ${stoppedReason}.` : ''}`,
      status,
      artifacts: allArtifacts,
      findings: allFindings,
      risks: allRisks,
      phaseResults: allPhaseResults,
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
