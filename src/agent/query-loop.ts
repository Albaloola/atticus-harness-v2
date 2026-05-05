import { appendFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { OpenRouterClient } from '../llm/client.js';
import { DEFAULT_MODEL } from '../llm/config.js';
import type { AgentTurn, ToolCallResult } from '../types/agent.js';
import type { LLMMessage } from '../types/message.js';
import type { ToolUseContext } from '../types/tool.js';
import type { ToolRegistry } from '../tools/index.js';
import { appendEvent } from '../state/events.js';
import type { AutonomyPolicy } from '../config/schema.js';

const MAX_TOOL_OUTPUT_CHARS = 5000;
const DEFAULT_MAX_HISTORY_CHARS = 60000;

export interface QueryLoopConfig {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  maxTurns?: number;
  systemPrompt: string;
  tools: ToolRegistry;
  matterName?: string;
  runId?: string;
  taskId?: string;
  role?: string;
  quietMode?: boolean;
  verbose?: boolean;
  autonomy?: AutonomyPolicy;
  maxHistoryChars?: number;
}

export interface QueryLoopResult {
  turns: AgentTurn[];
  history: LLMMessage[];
  finalContent: string;
  status: 'completed' | 'max_turns' | 'error';
  error?: string;
  transcriptPath?: string;
}

export class QueryLoop {
  private client: OpenRouterClient;
  private toolRegistry: ToolRegistry;
  private config: QueryLoopConfig;
  private history: LLMMessage[];
  private turns: AgentTurn[];

  constructor(config: QueryLoopConfig, client?: OpenRouterClient) {
    this.config = config;
    this.client = client ?? new OpenRouterClient();
    this.toolRegistry = config.tools;
    this.history = [{ role: 'system', content: config.systemPrompt }];
    this.turns = [];
  }

  async run(userMessage: string): Promise<QueryLoopResult> {
    this.history.push({ role: 'user', content: userMessage });

    const maxTurns = this.config.maxTurns || 25;

    for (let turnCount = 1; turnCount <= maxTurns; turnCount++) {
      if (this.config.verbose && !this.config.quietMode) {
        console.log(`\n[Turn ${turnCount}/${maxTurns}]`);
      }

      const tools = this.toolRegistry.getAllDefinitions();
      this.compactHistoryIfNeeded();

      let response;
      try {
        response = await this.client.chatWithTools({
          messages: this.history,
          tools: tools.length > 0 ? tools : undefined,
          config: {
            model: this.config.model || DEFAULT_MODEL,
            temperature: this.config.temperature ?? 0.1,
            maxTokens: this.config.maxTokens ?? 8192,
            disableThinking: true,
          },
        });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        if (!this.config.quietMode) {
          console.error(`  [LLM Error] ${msg}`);
        }
        return {
          turns: this.turns,
          history: this.history,
          finalContent: '',
          status: 'error',
          error: msg,
        };
      }

      this.history.push({
        role: 'assistant',
        content: response.content || '',
        toolCalls: response.toolCalls,
      });

      if (!response.toolCalls || response.toolCalls.length === 0) {
        if (!this.config.quietMode) {
          console.log(
            `  [Agent] ${response.content.substring(0, 200)}${response.content.length > 200 ? '...' : ''}`
          );
        }

        await this.emitTurnEvent(turnCount, response.content);
        const transcriptPath = await this.saveTranscript();

        return {
          turns: this.turns,
          history: this.history,
          finalContent: response.content || '(no response)',
          status: 'completed',
          transcriptPath,
        };
      }

      const toolCallResults: ToolCallResult[] = [];
      for (const toolCall of response.toolCalls) {
        const toolStart = Date.now();

        if (!this.config.quietMode) {
          console.log(`  [Tool] ${toolCall.name}(${truncateArgs(toolCall.args)})`);
        }

        const matterPath = this.config.matterName
          ? join('matters', this.config.matterName)
          : '';

        const context: ToolUseContext = {
          matterName: this.config.matterName,
          getEvidencePath: (id: string) => join(matterPath, '_evidence', id),
          getExtractionPath: (id: string) => join(matterPath, '_extractions', `${id}.txt`),
          getConfig: () => ({ ...this.config }),
          log: (msg: string) => {
            if (this.config.verbose) console.log(`    ${msg}`);
          },
        };

        const result = await this.toolRegistry.execute(
          toolCall.name,
          toolCall.args,
          context,
        );
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
          ? result.output || JSON.stringify(result.data) || 'ok'
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

      await this.emitTurnEvent(turnCount, response.content);
    }

    const transcriptPath = await this.saveTranscript();

    return {
      turns: this.turns,
      history: this.history,
      finalContent: '',
      status: 'max_turns',
      transcriptPath,
    };
  }

  private async emitTurnEvent(turnNumber: number, content: string): Promise<void> {
    if (!this.config.matterName) return;
    try {
      await appendEvent({
        matterName: this.config.matterName,
        type: 'agent.turn.completed',
        runId: this.config.runId,
        taskId: this.config.taskId,
        data: { turnNumber, summary: content.substring(0, 200) },
        source: 'agent',
      });
    } catch {
    }
  }

  private async saveTranscript(): Promise<string | undefined> {
    if (!this.config.matterName) return undefined;

    const transcriptDir = join('matters', this.config.matterName, '_candidates');
    try {
      await mkdir(transcriptDir, { recursive: true });
    } catch {
    }

    try {
      const transcript = this.history
        .map((m) => {
          const toolCallsLine = m.toolCalls?.length
            ? '\n' + m.toolCalls.map((t) => `  \u2192 Tool: ${t.name}`).join('\n')
            : '';
          return `## ${m.role.toUpperCase()}\n${m.content}${toolCallsLine}`;
        })
        .join('\n\n');

      const ts = new Date().toISOString().replace(/[:.]/g, '-');
      const transcriptFile = join(transcriptDir, `transcript-${ts}.md`);
      await appendFile(transcriptFile, transcript, 'utf-8');
      return transcriptFile;
    } catch {
      return undefined;
    }
  }

  private compactHistoryIfNeeded(): void {
    const maxChars = this.config.maxHistoryChars ?? DEFAULT_MAX_HISTORY_CHARS;
    const totalChars = this.history.reduce((sum, message) => sum + message.content.length, 0);
    if (totalChars <= maxChars || this.history.length <= 10) return;

    const system = this.history[0];
    const recent = this.history.slice(-8);
    const compacted = this.history.slice(1, -8);
    const summary = compacted
      .map((message) => {
        const label = message.toolName ? `${message.role}:${message.toolName}` : message.role;
        return `- ${label}: ${truncateText(message.content.replace(/\s+/g, ' '), 300)}`;
      })
      .join('\n');

    this.history = [
      system,
      {
        role: 'system',
        content: [
          '## Compacted Prior Context',
          'Earlier conversation/tool context was compacted to keep the worker alive. Preserve these facts, evidence IDs, conclusions, blockers, selected skills, and next actions.',
          summary,
        ].join('\n'),
      },
      ...recent,
    ];
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
