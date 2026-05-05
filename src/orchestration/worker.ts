import { QueryLoop } from '../agent/query-loop.js';
import { parseStructuredResult } from '../agent/result-schema.js';
import { createRun, updateRun } from '../state/runs.js';
import { appendEvent } from '../state/events.js';
import { buildWorkerPrompt } from './prompts.js';
import { ToolRegistry } from '../tools/index.js';
import { resolveConfig } from '../config/loader.js';
import { SkillSelectionWorker } from '../skills/selection-worker.js';
import { synthesizeWorkerOutput, type WorkerSynthesisClient } from './worker-synthesis.js';
import type { AgentSpawnInput, AgentStructuredResult } from './types.js';
import type { QueryLoopConfig, QueryLoopResult } from '../agent/query-loop.js';
import type { AgentRun } from '../types/state.js';

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

      const userMessage = [
        `Task: ${this.spawn.title}`,
        `Objective: ${this.spawn.objective}`,
        '',
        'Complete your assigned task using the available tools.',
        'Output your final result as a JSON object with: status, summary, findings, risks, proposedTasks, artifactIds, nextActions.',
      ].join('\n');

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
          type:
            parsed.status === 'failed' ? 'agent.run.error' :
            parsed.status === 'blocked' || parsed.status === 'needs_followup' ? 'agent.run.blocked' :
            'agent.run.completed',
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

      const rawResult = await synthesizeWorkerOutput({
        spawn: this.spawn,
        loopResult,
        model: 'deepseek/deepseek-v4-pro',
        client: this.config.synthesisClient,
      });

      updateRun(this.spawn.matterName, this.run.id, {
        status: this.mapStatus(rawResult.status),
        turns: loopResult.turns.length,
        summary: rawResult.summary,
      });

      await appendEvent({
        matterName: this.spawn.matterName,
        type: loopResult.status === 'error' ? 'agent.run.error' : 'agent.run.completed',
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
      temperature: this.config.temperature ?? 0.1,
      maxTurns,
      maxTokens: 8192,
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

    const loop = new QueryLoop(config);
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
}
