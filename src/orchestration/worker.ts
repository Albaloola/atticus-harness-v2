import { QueryLoop } from '../agent/query-loop.js';
import { parseStructuredResult } from '../agent/result-schema.js';
import { createRun, updateRun } from '../state/runs.js';
import { appendEvent } from '../state/events.js';
import { buildWorkerPrompt } from './prompts.js';
import { ToolRegistry } from '../tools/index.js';
import { resolveConfig } from '../config/loader.js';
import { createLLMClient } from '../llm/client.js';
import { selectModelForTask } from '../config/model-routing.js';
import { loadMatter } from '../storage/matter.js';
import { SkillSelectionWorker } from '../skills/selection-worker.js';
import { synthesizeWorkerOutput, type WorkerSynthesisClient } from './worker-synthesis.js';
import type { AgentSpawnInput, AgentStructuredResult } from './types.js';
import type { QueryLoopConfig, QueryLoopResult } from '../agent/query-loop.js';
import type { AgentRun } from '../types/state.js';
import type { MatterEventType } from '../types/state.js';
import type { OrchestrationRuntime } from './runtime.js';

export interface QueryLoopLike {
  run(userMessage: string): Promise<QueryLoopResult>;
}

export type QueryLoopFactory = (config: QueryLoopConfig) => QueryLoopLike;

export interface WorkerAgentConfig {
  spawn: AgentSpawnInput;
  model: string;
  temperature?: number;
  quietMode?: boolean;
  verbose?: boolean;
  queryLoopFactory?: QueryLoopFactory;
  synthesisClient?: WorkerSynthesisClient;
  runtime?: OrchestrationRuntime;
}

export class WorkerAgent {
  private spawn: AgentSpawnInput;
  private config: WorkerAgentConfig;
  private run: AgentRun;
  private aborted: boolean;

  constructor(config: WorkerAgentConfig) {
    this.spawn = config.spawn;
    this.config = config;
    this.aborted = false;

    this.run = createRun({
      matterName: this.spawn.matterName,
      model: config.model,
      parentRunId: this.spawn.parentRunId,
      agentType: 'worker',
      role: this.spawn.role,
      prompt: this.spawn.objective,
    });
  }

  async execute(): Promise<AgentStructuredResult> {
    this.config.runtime?.trackRun(this.run.id, { worker: true });

    try {
      await appendEvent({
        matterName: this.spawn.matterName,
        type: 'agent.run.started',
        runId: this.run.id,
        taskId: this.spawn.taskId,
        data: {
          title: this.spawn.title,
          role: this.spawn.role,
          objective: this.spawn.objective,
          depth: this.spawn.depth,
          phaseId: this.spawn.phaseId,
        },
        source: 'orchestration',
      });

      await this.config.runtime?.applyControlCommands(this.run.id);
      await this.config.runtime?.waitIfPaused(this.run.id);

      if (this.config.runtime?.isAborted()) {
        this.aborted = true;
        const result = this.makeBlockedResult('Aborted before worker execution');
        updateRun(this.spawn.matterName, this.run.id, {
          status: 'blocked',
          summary: result.summary,
        });
        await appendEvent({
          matterName: this.spawn.matterName,
          type: 'agent.run.blocked',
          runId: this.run.id,
          taskId: this.spawn.taskId,
          data: {
            status: result.status,
            summary: result.summary,
            depth: this.spawn.depth,
          },
          source: 'orchestration',
        });
        return result;
      }

      const userMessage = [
        `Task: ${this.spawn.title}`,
        `Objective: ${this.spawn.objective}`,
        this.spawn.contextPack ? `Phase context:\n${this.spawn.contextPack}` : undefined,
        '',
        'Complete your assigned task using the available tools.',
        'Use matter_inventory before exec_sqlite/search_files for evidence manifests, production selection, bundle indexes, or schema guidance.',
        'For long evidence, keep paging evidence_chunk_read/read_file with nextChunkIndex/nextOffset until you reach the relevant section or endReached/complete; do not treat one window as the whole document.',
        'For long deliverables, checkpoint sections with write_file mode "append" and expectedContentHash so later turns can continue without losing earlier work.',
        'If the task is not applicable to this matter after checking the evidence, return status "completed" with a finding that explains why; reserve "blocked" for missing authority or evidence that prevents any bounded output.',
        'Each finding should include kind: holding, party_argument, procedural_fact, evidence_fact, risk_signal, unsupported_inference, gap, or not_applicable.',
        'Write the summary, findings, risks, proposed tasks, and next actions in English unless the operator explicitly asked for another language.',
        'Output your final result as a JSON object with: status, summary, findings, risks, proposedTasks, artifactIds, nextActions.',
      ].filter((line): line is string => typeof line === 'string').join('\n');

      const loopResult = await this.executeQueryLoop(userMessage);

      if (this.aborted) {
        return this.makeFailedResult('Aborted');
      }

      const parsed = parseStructuredResult(loopResult.finalContent);

      if (parsed) {
        updateRun(this.spawn.matterName, this.run.id, {
          status: this.mapStatus(parsed.status),
          turns: loopResult.turns.length,
          summary: parsed.summary,
        });

        await appendEvent({
          matterName: this.spawn.matterName,
          type: this.eventTypeForStatus(parsed.status),
          runId: this.run.id,
          taskId: this.spawn.taskId,
          data: {
            status: parsed.status,
            summary: parsed.summary,
            findingCount: parsed.findings.length,
            riskCount: parsed.risks.length,
            depth: this.spawn.depth,
          },
          source: 'orchestration',
        });

        return parsed;
      }

      const resolvedConfig = await resolveConfig({ matterName: this.spawn.matterName });
      const rawResult = await synthesizeWorkerOutput({
        spawn: this.spawn,
        loopResult,
        model: selectModelForTask({
          providerPolicy: resolvedConfig.providerPolicy,
          role: 'worker_synthesis',
          phaseId: this.spawn.phaseId,
          title: this.spawn.title,
          objective: this.spawn.objective,
        }),
        client: this.config.synthesisClient,
      });

      updateRun(this.spawn.matterName, this.run.id, {
        status: this.mapStatus(rawResult.status),
        turns: loopResult.turns.length,
        summary: rawResult.summary,
      });

      await appendEvent({
        matterName: this.spawn.matterName,
        type: this.eventTypeForStatus(rawResult.status),
        runId: this.run.id,
        taskId: this.spawn.taskId,
        data: {
          status: rawResult.status,
          rawOutputSynthesized: true,
          findingCount: rawResult.findings.length,
          riskCount: rawResult.risks.length,
          depth: this.spawn.depth,
        },
        source: 'orchestration',
      });

      await appendEvent({
        matterName: this.spawn.matterName,
        type: 'agent.output.synthesized',
        runId: this.run.id,
        taskId: this.spawn.taskId,
        data: {
          title: this.spawn.title,
          status: rawResult.status,
          findingCount: rawResult.findings.length,
          riskCount: rawResult.risks.length,
        },
        source: 'orchestration',
      });

      return rawResult;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);

      updateRun(this.spawn.matterName, this.run.id, {
        status: 'error',
        summary: `Worker failed: ${msg}`,
        error: msg,
      });

      await appendEvent({
        matterName: this.spawn.matterName,
        type: 'agent.run.error',
        runId: this.run.id,
        taskId: this.spawn.taskId,
        data: {
          error: msg,
          title: this.spawn.title,
          depth: this.spawn.depth,
        },
        source: 'orchestration',
      });

      return {
        status: 'failed',
        summary: `Worker error: ${msg}`,
        findings: [],
        risks: [{ risk: msg, severity: 'high', mitigation: 'Escalate to operator' }],
        proposedTasks: [],
        artifactIds: [],
        nextActions: ['Escalate to operator'],
      };
    } finally {
      this.config.runtime?.untrackRun(this.run.id);
    }
  }

  abort(): void {
    this.aborted = true;
  }

  get getRunId(): string {
    return this.run.id;
  }

  get getSpawn(): AgentSpawnInput {
    return this.spawn;
  }

  private async executeQueryLoop(userMessage: string): Promise<QueryLoopResult> {
    const resolvedConfig = await resolveConfig({ matterName: this.spawn.matterName });
    const matterIndex = await loadMatter(this.spawn.matterName).catch(() => undefined);
    const toolRegistry = new ToolRegistry({
      allowedTools: this.spawn.allowedTools,
      enforcePolicy: true,
    });
    const skillSelector = new SkillSelectionWorker();
    const skillContext = await skillSelector.buildContext({
      objective: [this.spawn.title, this.spawn.objective, this.spawn.contextPack].filter(Boolean).join('\n'),
      phaseId: this.spawn.phaseId,
      matterMeta: { jurisdiction: 'Scotland' },
      limit: 4,
      maxBodyChars: 1600,
    });

    const maxTurns = this.spawn.maxTurns ?? (this.config.spawn.allowedTools ? 15 : 25);

    const config: QueryLoopConfig = {
      model: this.config.model,
      temperature: this.config.temperature ?? resolvedConfig.temperature ?? 0.1,
      maxTokens: matterIndex?.config.maxTokens ?? resolvedConfig.maxTokens ?? 8192,
      reasoningEffort: matterIndex?.config.reasoningEffort ?? resolvedConfig.reasoningEffort,
      maxTurns,
      systemPrompt: buildWorkerPrompt({
        matterName: this.spawn.matterName,
        model: this.config.model,
        providerName: resolvedConfig.providerName,
        providerPolicy: resolvedConfig.providerPolicy,
        autonomy: resolvedConfig.autonomy,
        toolPolicy: resolvedConfig.toolPolicy,
        skillSection: skillContext.promptSection,
      }),
      tools: toolRegistry,
      matterName: this.spawn.matterName,
      providerName: resolvedConfig.providerName,
      runId: this.run.id,
      taskId: this.spawn.taskId,
      role: this.spawn.role,
      quietMode: this.config.quietMode,
      verbose: this.config.verbose,
      autonomy: resolvedConfig.autonomy,
    };

    if (this.config.queryLoopFactory) {
      return this.config.queryLoopFactory(config).run(userMessage);
    }

    const loop = new QueryLoop(config, createLLMClient(resolvedConfig));
    return loop.run(userMessage);
  }

  private mapStatus(status: AgentStructuredResult['status']): 'completed' | 'blocked' | 'error' | 'max_turns' {
    switch (status) {
      case 'completed': return 'completed';
      case 'blocked': return 'blocked';
      case 'needs_followup': return 'blocked';
      case 'failed': return 'error';
      default: return 'error';
    }
  }

  private eventTypeForStatus(status: AgentStructuredResult['status']): MatterEventType {
    switch (status) {
      case 'completed': return 'agent.run.completed';
      case 'blocked':
      case 'needs_followup':
        return 'agent.run.blocked';
      case 'failed':
      default:
        return 'agent.run.error';
    }
  }

  private makeFailedResult(reason: string): AgentStructuredResult {
    return {
      status: 'failed',
      summary: reason,
      findings: [],
      risks: [],
      proposedTasks: [],
      artifactIds: [],
      nextActions: [],
    };
  }

  private makeBlockedResult(reason: string): AgentStructuredResult {
    return {
      status: 'blocked',
      summary: reason,
      findings: [],
      risks: [{ risk: reason, severity: 'medium', mitigation: 'Resume or rerun when the runtime is active' }],
      proposedTasks: [],
      artifactIds: [],
      nextActions: ['Resume or rerun the task'],
    };
  }
}
