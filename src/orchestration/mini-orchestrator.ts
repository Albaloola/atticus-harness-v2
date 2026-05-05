import { WorkerAgent } from './worker.js';
import { createTask, updateTask } from '../state/tasks.js';
import { createRun, updateRun } from '../state/runs.js';
import { appendEvent } from '../state/events.js';
import type { MiniOrchestratorInput, AgentStructuredResult } from './types.js';

export class MiniOrchestrator {
  private input: MiniOrchestratorInput;

  constructor(input: MiniOrchestratorInput) {
    this.input = input;
  }

  async execute(): Promise<AgentStructuredResult> {
    const { matterName, phase, objective, maxDepth, maxConcurrency, parentRunId, phaseTaskId, runtime } = this.input;
    const phaseName = phase?.id || 'unknown';
    const miniRun = createRun({
      matterName,
      model: 'deepseek/deepseek-v4-pro',
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
      const limit = Math.min(maxConcurrency || 4, workers.length);

      for (let i = 0; i < workers.length; i += limit) {
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
                allowedTools: ['read_file', 'search_files', 'exec_sqlite', 'evidence_search', 'draft', 'verify_citations'],
                maxTurns: 15,
                maxDepth: (maxDepth || 1) - 1,
                depth: 2,
                phaseId: phaseName,
              },
              model: 'deepseek/deepseek-v4-flash',
              runtime,
            });

            updateTask(matterName, task.id, { status: 'in_progress' } as Parameters<typeof updateTask>[2]);
            const result = await worker.execute();

            if (result.status === 'failed') {
              updateTask(matterName, task.id, { status: 'failed' } as Parameters<typeof updateTask>[2]);
            } else if (result.status === 'blocked' || result.status === 'needs_followup') {
              updateTask(matterName, task.id, { status: 'blocked' } as Parameters<typeof updateTask>[2]);
            } else {
              updateTask(matterName, task.id, { status: 'completed' } as Parameters<typeof updateTask>[2]);
            }

            return result;
          })
        );
        results.push(...batchResults);
      }

      const synthesized = this.synthesize(phaseName, objective, results);
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

  private decompose(objective: string, phase: string): Array<{ title: string }> {
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
          { title: 'Prepare witness statements' },
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
          { title: 'Prepare filing checklist' },
        ];
      case 'operator_handoff':
        return [
          { title: 'Summarize findings and status' },
          { title: 'Identify remaining risks' },
          { title: 'List next recommended actions' },
        ];
      default:
        return [
          { title: objective.substring(0, 120) },
        ];
    }
  }

  private synthesize(
    _phase: string,
    objective: string,
    results: AgentStructuredResult[]
  ): AgentStructuredResult {
    const allFindings = results.flatMap((r) => r.findings);
    const allRisks = results.flatMap((r) => r.risks);
    const allTasks = results.flatMap((r) => r.proposedTasks || []);
    const allArtifacts = results.flatMap((r) => r.artifactIds || []);
    const allActions = results.flatMap((r) => r.nextActions || []);

    const failed = results.filter((r) => r.status === 'failed');
    const blocked = results.filter((r) => r.status === 'blocked');
    const allOk = failed.length === 0 && blocked.length === 0;

    return {
      status: allOk ? 'completed' : (failed.length > 0 ? 'failed' : 'blocked'),
      summary: `Phase synthesis: ${results.length} workers, ${allFindings.length} findings, ${allRisks.length} risks`,
      findings: allFindings.slice(0, 20),
      risks: allRisks.slice(0, 20),
      proposedTasks: allTasks.slice(0, 10),
      artifactIds: allArtifacts.slice(0, 20),
      nextActions: allActions.slice(0, 10),
    };
  }
}
