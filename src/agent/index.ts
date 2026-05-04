import { appendFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { OpenRouterClient } from '../llm/client.js';
import { DEFAULT_MODEL } from '../llm/config.js';
import type { AgentConfig, AgentTurn, ToolCallResult, AgentResult } from '../types/agent.js';
import type { LLMMessage } from '../types/message.js';
import type { ToolUseContext } from '../types/tool.js';
import { buildSystemPrompt } from './context.js';
import { recordTurn } from './recorder.js';
import type { ToolRegistry } from '../tools/index.js';

const MAX_TOOL_OUTPUT_CHARS = 5000;

export class AgentLoop {
  private client: OpenRouterClient;
  private toolRegistry: ToolRegistry | null;
  private skillRegistry: unknown;
  private config: AgentConfig;
  private history: LLMMessage[];
  private turns: AgentTurn[];

  constructor(config: AgentConfig) {
    this.config = config;
    this.client = new OpenRouterClient();
    this.toolRegistry = null;
    this.skillRegistry = null;
    this.history = [];
    this.turns = [];
  }

  async run(matterName: string, initialPrompt?: string): Promise<AgentResult> {
    const { ToolRegistry } = await import('../tools/index.js');
    this.toolRegistry = new ToolRegistry();

    const matterPath = join('matters', matterName);
    const transcriptDir = join(matterPath, '_candidates');

    await mkdir(transcriptDir, { recursive: true });

    const { loadMatter } = await import('../storage/matter.js');
    let matterIndex;
    try {
      matterIndex = await loadMatter(matterName);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return this.makeErrorResult(matterName, msg);
    }

    const systemPrompt = await buildSystemPrompt(matterName, matterIndex, this.config);

    this.history = [{ role: 'system', content: systemPrompt }];

    if (initialPrompt) {
      this.history.push({ role: 'user', content: initialPrompt });
    } else {
      const contextSummary = await this.buildContextSummary(matterName, matterIndex);
      this.history.push({
        role: 'user',
        content: `I am working on matter "${matterName}". ${contextSummary}\n\nWhat should I do next? Assess the current state and take the appropriate action.`,
      });
    }

    let turnCount = 0;
    const maxTurns = this.config.maxTurns || 25;

    while (turnCount < maxTurns) {
      turnCount++;

      if (this.config.verbose && !this.config.quietMode) {
        console.log(`\n[Turn ${turnCount}/${maxTurns}]`);
      }

      const tools = this.toolRegistry.getAllDefinitions();

      let response;
      try {
        response = await this.client.chatWithTools({
          messages: this.history,
          tools: tools.length > 0 ? tools : undefined,
          config: {
            model: this.config.model || DEFAULT_MODEL,
            temperature: this.config.temperature ?? 0.1,
            maxTokens: 8192,
            disableThinking: true,
          },
        });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        if (!this.config.quietMode) {
          console.error(`  [LLM Error] ${msg}`);
        }
        return this.makeErrorResult(matterName, `LLM call failed: ${msg}`);
      }

      this.history.push({
        role: 'assistant',
        content: response.content || '',
        toolCalls: response.toolCalls,
      });

      if (!response.toolCalls || response.toolCalls.length === 0) {
        const summary = response.content || '(no response)';

        const blockedIndicators = [
          'cannot proceed', 'need your', 'operator must', 'requires your input',
          'need input', 'I need you to', 'please provide', 'I require',
          'cannot continue', 'I am blocked', 'I\'m blocked', 'need additional',
          'need more information', 'ask the operator', 'manual intervention',
        ];
        const lower = summary.toLowerCase();
        const isBlocked = blockedIndicators.some(i => lower.includes(i));

        if (!this.config.quietMode) {
          console.log(`  [Agent] ${summary.substring(0, 200)}${summary.length > 200 ? '...' : ''}`);
        }

        await this.saveTranscript(matterName, transcriptDir);

        try {
          const updatedIndex = await loadMatter(matterName);
          updatedIndex.status = isBlocked ? 'analyzing' : 'analyzing';
          const { saveMatterIndex } = await import('../storage/matter.js');
          await saveMatterIndex(matterName, updatedIndex);
        } catch {
        }

        if (isBlocked) {
          return {
            matterName,
            turns: this.turns,
            transcript: this.history.map(m => `${m.role}: ${m.content}`).join('\n'),
            status: 'blocked' as const,
            summary: summary.substring(0, 500),
          };
        }

        return {
          matterName,
          turns: this.turns,
          transcript: this.history.map(m => `${m.role}: ${m.content}`).join('\n'),
          status: 'completed',
          summary: summary.substring(0, 500),
        };
      }

      const toolCallResults: ToolCallResult[] = [];
      for (const toolCall of response.toolCalls) {
        const toolStart = Date.now();

        if (!this.config.quietMode) {
          console.log(`  [Tool] ${toolCall.name}(${truncateArgs(toolCall.args)})`);
        }

        const context: ToolUseContext = {
          matterName,
          getEvidencePath: (id: string) => join(matterPath, '_evidence', id),
          getExtractionPath: (id: string) => join(matterPath, '_extractions', `${id}.txt`),
          getConfig: () => ({ ...this.config }),
          log: (msg: string) => {
            if (this.config.verbose) console.log(`    ${msg}`);
          },
        };

        const result = await this.toolRegistry.execute(toolCall.name, toolCall.args, context);
        const duration = Date.now() - toolStart;

        toolCallResults.push({
          toolName: toolCall.name,
          args: toolCall.args,
          result,
          durationMs: duration,
        });

        if (!this.config.quietMode) {
          const status = result.success ? '\u2713' : '\u2717';
          console.log(`    ${status} (${duration}ms)`);
        }

        const resultContent = result.success
          ? (result.output || JSON.stringify(result.data) || 'ok')
          : `Error: ${result.error}`;

        this.history.push({
          role: 'tool',
          content: truncateText(resultContent, MAX_TOOL_OUTPUT_CHARS),
          toolCallId: toolCall.id,
          toolName: toolCall.name,
        });
      }

      const requestSlice = this.history.slice(-(response.toolCalls.length + 2));

      const turn: AgentTurn = {
        turnNumber: turnCount,
        request: requestSlice,
        response,
        toolCalls: toolCallResults,
      };

      this.turns.push(turn);
    }

    await this.saveTranscript(matterName, transcriptDir);

    return {
      matterName,
      turns: this.turns,
      transcript: this.history.map(m => `${m.role}: ${m.content}`).join('\n'),
      status: 'max_turns',
      summary: `Reached maximum of ${maxTurns} turns.`,
    };
  }

  private async buildContextSummary(
    _matterName: string,
    matterIndex: { status: string; evidenceCount: number; candidateCount: number; artifactCount: number }
  ): Promise<string> {
    try {
      const { listEvidence } = await import('../storage/evidence.js');
      const evidence = await listEvidence(_matterName);
      const evidenceSummary = evidence.map(
        (e: { id: string; originalPath: string; format: string; status: string }) =>
          `  [${e.id}] ${e.originalPath.split('/').pop()} (${e.format}, ${e.status})`
      ).join('\n');

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

  private async saveTranscript(matterName: string, transcriptDir: string): Promise<void> {
    try {
      const transcript = this.history
        .map(m => {
          const toolCallsLine = m.toolCalls?.length
            ? '\n' + m.toolCalls.map(t => `  \u2192 Tool: ${t.name}`).join('\n')
            : '';
          return `## ${m.role.toUpperCase()}\n${m.content}${toolCallsLine}`;
        })
        .join('\n\n');

      const ts = new Date().toISOString().replace(/[:.]/g, '-');
      const transcriptFile = join(transcriptDir, `transcript-${ts}.md`);
      await appendFile(transcriptFile, transcript, 'utf-8');
    } catch {
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

function truncateArgs(args: Record<string, unknown>): string {
  const str = JSON.stringify(args);
  return str.length > 100 ? str.substring(0, 100) + '...' : str;
}

function truncateText(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.substring(0, max) + '\n... [truncated]';
}
