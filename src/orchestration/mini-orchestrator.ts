import { WorkerAgent } from './worker.js';
import { createTask, updateTask, listTasks } from '../state/tasks.js';
import { appendEvent } from '../state/events.js';
import type { MiniOrchestratorInput, AgentStructuredResult } from './types.js';

export class MiniOrchestrator {
  private input: MiniOrchestratorInput;

  constructor(input: MiniOrchestratorInput) {
    this.input = input;
  }

  async execute(): Promise<AgentStructuredResult> {
    const { matterName, phase, objective, maxDepth, maxConcurrency, parentRunId } = this.input;
    const phaseName = phase?.id || 'unknown';

    appendEvent({
      matterName,
      type: 'agent.spawned',
      source: 'agent',
      data: { role: 'mini_orchestrator', phase: phaseName, objective: objective.substring(0, 200) },
    }).catch(() => {});

    const workers = this.decompose(objective, phaseName);
    const results: AgentStructuredResult[] = [];
    const limit = Math.min(maxConcurrency || 4, workers.length);

    for (let i = 0; i < workers.length; i += limit) {
      const batch = workers.slice(i, i + limit);
      const batchResults = await Promise.all(
        batch.map(async (w) => {
          const task = createTask({
            matterName,
            kind: 'worker',
            type: phaseName,
            title: w.title,
            priority: 'medium',
            depth: (maxDepth || 1) - 1,
            assignedAgent: 'worker',
            data: { objective: w.title },
          });

          appendEvent({ matterName, type: 'task.created', source: 'agent', data: { taskId: task.id, title: w.title } }).catch(() => {});

          const worker = new WorkerAgent({
            spawn: {
              matterName,
              parentRunId,
              taskId: task.id,
              role: 'worker',
              title: w.title,
              objective: w.title,
              allowedTools: ['read_file', 'search_files', 'exec_sqlite', 'evidence_search', 'draft', 'verify_citations'],
              maxTurns: 15,
              maxDepth: (maxDepth || 1) - 1,
            },
            model: 'deepseek/deepseek-v4-flash',
          });

          updateTask(matterName, task.id, { status: 'in_progress' } as Parameters<typeof updateTask>[2]);
          const result = await worker.execute();

          if (result.status === 'failed') {
            updateTask(matterName, task.id, { status: 'failed' } as Parameters<typeof updateTask>[2]);
          } else {
            updateTask(matterName, task.id, { status: 'completed' } as Parameters<typeof updateTask>[2]);
          }

          return result;
        })
      );
      results.push(...batchResults);
    }

    return this.synthesize(phaseName, objective, results);
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
