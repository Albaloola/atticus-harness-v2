import { join } from 'path';
import type { AgentConfig, AgentResult } from '../types/agent.js';
import { buildSystemPrompt } from './context.js';
import { QueryLoop } from './query-loop.js';
import { resolveConfig } from '../config/loader.js';
import { createLLMClient } from '../llm/client.js';

export class AgentLoop {
  private config: AgentConfig;

  constructor(config: AgentConfig) {
    this.config = config;
  }

  async run(matterName: string, initialPrompt?: string): Promise<AgentResult> {
    const resolvedConfig = await resolveConfig({
      matterName,
      providerName: this.config.providerName,
    });
    const { ToolRegistry } = await import('../tools/index.js');
    const toolRegistry = new ToolRegistry({
      registerDefaults: this.config.toolMode !== 'disabled',
    });
    if (this.config.toolMode !== 'disabled') {
      await toolRegistry.registerConfiguredMcpTools({
        mcp: resolvedConfig.mcp,
        plugins: resolvedConfig.plugins,
        log: (message) => {
          if (this.config.verbose) console.warn(message);
        },
      });
    }
    const client = createLLMClient(resolvedConfig);

    let matterIndex;
    try {
      const { loadMatter } = await import('../storage/matter.js');
      matterIndex = await loadMatter(matterName);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return this.makeErrorResult(matterName, msg);
    }

    const systemPrompt = await buildSystemPrompt(matterName, matterIndex, this.config);

    let userMessage: string;
    if (initialPrompt) {
      userMessage = initialPrompt;
    } else {
      const contextSummary = await this.buildContextSummary(matterName, matterIndex);
      userMessage = `I am working on matter "${matterName}". ${contextSummary}\n\nWhat should I do next? Assess the current state and take the appropriate action.`;
    }

    const queryLoop = new QueryLoop({
      model: resolvedConfig.model || this.config.model,
      temperature: this.config.temperature,
      maxTokens: this.config.maxTokens ?? 8192,
      reasoningEffort: this.config.reasoningEffort,
      maxTurns: this.config.maxTurns || 25,
      systemPrompt,
      tools: toolRegistry,
      toolMode: this.config.toolMode ?? 'auto',
      matterName,
      providerName: resolvedConfig.providerName,
      quietMode: this.config.quietMode,
      verbose: this.config.verbose,
    }, client);

    const result = await queryLoop.run(userMessage);

    if (result.status === 'error') {
      return this.makeErrorResult(
        matterName,
        `LLM call failed: ${result.error}`,
      );
    }

    const blockedIndicators = [
      'cannot proceed', 'need your', 'operator must', 'requires your input',
      'need input', 'I need you to', 'please provide', 'I require',
      'cannot continue', 'I am blocked', "I'm blocked", 'need additional',
      'need more information', 'ask the operator', 'manual intervention',
    ];
    const lower = result.finalContent.toLowerCase();
    const isBlocked = result.finalContent
      ? blockedIndicators.some((i) => lower.includes(i))
      : false;

    if (result.status !== 'max_turns') {
      try {
        const { loadMatter, saveMatterIndex } = await import('../storage/matter.js');
        const updatedIndex = await loadMatter(matterName);
        updatedIndex.status = 'analyzing';
        await saveMatterIndex(matterName, updatedIndex);
      } catch {
      }
    }

    const transcript = result.history
      .map((m) => `${m.role}: ${m.content}`)
      .join('\n');

    if (isBlocked) {
      return {
        matterName,
        turns: result.turns,
        transcript,
        status: 'blocked' as const,
        summary: result.finalContent.substring(0, 500),
      };
    }

    return {
      matterName,
      turns: result.turns,
      transcript,
      status: result.status === 'max_turns' ? 'max_turns' : 'completed',
      summary: result.status === 'max_turns'
        ? `Reached maximum of ${this.config.maxTurns || 25} turns.`
        : result.finalContent.substring(0, 500),
    };
  }

  private async buildContextSummary(
    _matterName: string,
    matterIndex: {
      status: string;
      evidenceCount: number;
      candidateCount: number;
      artifactCount: number;
    },
  ): Promise<string> {
    try {
      const { listEvidence } = await import('../storage/evidence.js');
      const evidence = await listEvidence(_matterName);
      const evidenceSummary = evidence
        .map(
          (e: { id: string; originalPath: string; format: string; status: string }) =>
            `  [${e.id}] ${e.originalPath.split('/').pop()} (${e.format}, ${e.status})`,
        )
        .join('\n');

      return [
        `Current state: ${matterIndex.status}`,
        `Evidence count: ${matterIndex.evidenceCount}`,
        `Candidates: ${matterIndex.candidateCount}`,
        `Artifacts: ${matterIndex.artifactCount}`,
        '',
        'Evidence files:',
        evidenceSummary || '  (no evidence ingested yet)',
      ].join('\n');
    } catch {
      return `Status: ${matterIndex.status}. No additional context available.`;
    }
  }

  private makeErrorResult(matterName: string, error: string): AgentResult {
    return {
      matterName,
      turns: [],
      transcript: '',
      status: 'error',
      summary: error,
    };
  }
}
