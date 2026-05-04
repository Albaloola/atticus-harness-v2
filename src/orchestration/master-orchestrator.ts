import { MiniOrchestrator } from './mini-orchestrator.js';
import { createTask, updateTask } from '../state/tasks.js';
import { createRun } from '../state/runs.js';
import { OrchestrationRuntime } from './runtime.js';
import { getDefaultPhases, type PhaseDefinition } from '../legal/workflow.js';
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

    const masterRun = createRun({
      matterName,
      model: 'deepseek/deepseek-v4-pro',
      agentType: 'master_orchestrator',
      role: 'master',
      prompt: objective,
    });

    await this.runtime.emitRunStarted(masterRun.id, objective);

    const phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }> = [];
    const failedPhases: string[] = [];

    for (const phase of phases) {
      if (this.runtime.isAborted() || this.runtime.isBudgetExceeded()) break;

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
      `Completed ${phaseResults.length - failedPhases.length}/${phaseResults.length} phases`
    );

    return this.synthesize(matterName, objective, phaseResults, failedPhases);
  }

  private synthesize(
    matterName: string,
    objective: string | undefined,
    phaseResults: Array<{ phase: PhaseDefinition; result: AgentStructuredResult }>,
    failedPhases: string[]
  ): OrchestratorResult {
    const allFindings = phaseResults.flatMap((p) =>
      p.result.findings.map((f) => ({ claim: `${p.phase.name}: ${f.claim}`, confidence: f.confidence === 'high' ? 1 : f.confidence === 'medium' ? 0.5 : 0 }))
    );
    const allRisks = phaseResults.flatMap((p) =>
      p.result.risks.map((r) => ({ risk: `${p.phase.name}: ${r.risk}`, severity: r.severity || 'medium' }))
    );
    const allArtifacts = phaseResults.flatMap((p) => p.result.artifactIds || []);

    const status = failedPhases.length === 0
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
      summary: `Orchestration ${status}: ${phaseResults.length - failedPhases.length}/${phaseResults.length} phases completed. ${allFindings.length} findings, ${allRisks.length} risks.`,
      status,
      artifacts: allArtifacts,
      findings: allFindings,
      risks: allRisks,
      phaseResults: allPhaseResults,
    };
  }
}
