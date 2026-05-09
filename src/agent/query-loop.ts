import { appendFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { OpenRouterClient, type LLMClient } from '../llm/client.js';
import { DEFAULT_MODEL } from '../llm/config.js';
import { TokenLimitError } from '../llm/errors.js';
import type { AgentTurn, ToolCallResult } from '../types/agent.js';
import type { LLMMessage } from '../types/message.js';
import type { LLMResponse, ReasoningEffort } from '../types/llm.js';
import type { StoredToolResultMetadata, ToolDefinition, ToolResult, ToolUseContext } from '../types/tool.js';
import type { ToolRegistry } from '../tools/index.js';
import { executeToolCalls } from '../tools/executor.js';
import { formatStoredToolResultForModel, ToolResultStore } from '../tools/tool-result-store.js';
import { appendEvent } from '../state/events.js';
import { writeResumeSummary } from '../state/resume-summary.js';
import type { AutonomyPolicy } from '../config/schema.js';

const DEFAULT_MAX_TOOL_OUTPUT_CHARS = 200_000;
const DEFAULT_MAX_HISTORY_CHARS = 60000;

export interface QueryLoopConfig {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  reasoningEffort?: ReasoningEffort;
  maxTurns?: number;
  systemPrompt: string;
  tools: ToolRegistry;
  toolMode?: 'auto' | 'disabled';
  matterName?: string;
  providerName?: string;
  runId?: string;
  taskId?: string;
  role?: string;
  quietMode?: boolean;
  verbose?: boolean;
  autonomy?: AutonomyPolicy;
  maxHistoryChars?: number;
  maxToolOutputChars?: number;
}

export interface QueryLoopResult {
  turns: AgentTurn[];
  history: LLMMessage[];
  finalContent: string;
  status: 'completed' | 'max_turns' | 'error';
  error?: string;
  transcriptPath?: string;
}

interface HistoryCompactionResult {
  compacted: boolean;
  beforeChars: number;
  afterChars: number;
  messagesRemoved: number;
}

export class QueryLoop {
  private client: LLMClient;
  private toolRegistry: ToolRegistry;
  private config: QueryLoopConfig;
  private history: LLMMessage[];
  private turns: AgentTurn[];

  constructor(config: QueryLoopConfig, client?: LLMClient) {
    this.config = config;
    this.client = client ?? new OpenRouterClient();
    this.toolRegistry = config.tools;
    this.history = [{ role: 'system', content: config.systemPrompt }];
    this.turns = [];
  }

  async run(userMessage: string): Promise<QueryLoopResult> {
    this.history.push({ role: 'user', content: userMessage });
    await this.saveResumeSummary({
      lastUserGoal: userMessage,
      lastModelVisibleSummary: 'Run started.',
    });

    const maxTurns = this.config.maxTurns || 25;

    try {
      for (let turnCount = 1; turnCount <= maxTurns; turnCount++) {
      if (this.config.verbose && !this.config.quietMode) {
        console.log(`\n[Turn ${turnCount}/${maxTurns}]`);
      }

      const tools = this.config.toolMode === 'disabled'
        ? []
        : this.toolRegistry.getAllDefinitions();
      const usesNativeToolLoop = Boolean(
        this.client.capabilities?.agentMode && this.client.capabilities?.nativeMcpTools,
      );
      if (tools.length > 0 && this.client.capabilities?.tools === false && !usesNativeToolLoop) {
        const providerName = this.config.providerName ?? 'selected provider';
        const message = `Provider ${providerName} does not support Harness-owned tool calls in this profile; run with --no-tools or select a tool-capable provider profile.`;
        if (!this.config.quietMode) {
          console.error(`  [LLM Error] ${message}`);
        }
        return {
          turns: this.turns,
          history: this.history,
          finalContent: '',
          status: 'error',
          error: message,
        };
      }
      this.compactHistoryIfNeeded();

      let response: LLMResponse;
      try {
        response = await this.chatWithContextRecovery({
          tools,
          userMessage,
          turnCount,
        });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        await this.saveResumeSummary({
          lastUserGoal: userMessage,
          failedOperation: { type: 'llm.chatWithTools', error: msg },
          lastModelVisibleSummary: 'LLM call failed before the turn could complete.',
        });
        if (!this.config.quietMode) {
          console.error(`  [LLM Error] ${msg}`);
        }
        await this.emitLlmFailureEvent(err);
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
        reasoningContent: response.reasoningContent,
        toolCalls: response.toolCalls,
      });

      if (!response.toolCalls || response.toolCalls.length === 0) {
        if (!this.config.quietMode) {
          console.log(
            `  [Agent] ${response.content.substring(0, 200)}${response.content.length > 200 ? '...' : ''}`
          );
        }

        await this.emitTurnEvent(turnCount, response.content);
        await this.saveResumeSummary({
          lastUserGoal: userMessage,
          lastModelVisibleSummary: response.content || '(no response)',
        });
        const transcriptPath = await this.saveTranscript();

        return {
          turns: this.turns,
          history: this.history,
          finalContent: response.content || '(no response)',
          status: 'completed',
          transcriptPath,
        };
      }

      for (const toolCall of response.toolCalls) {
        if (!this.config.quietMode) {
          console.log(`  [Tool] ${toolCall.name}(${truncateArgs(toolCall.args)})`);
        }
      }

      const executedTools = await executeToolCalls({
        registry: this.toolRegistry,
        toolCalls: response.toolCalls,
        createContext: (toolCall) => this.makeToolContext(toolCall.id),
      });
      const toolCallResults: ToolCallResult[] = [];

      for (const executed of executedTools) {
        const { toolCall, result, durationMs } = executed;
        const modelVisibleResult = await this.prepareToolResultForModel(toolCall.id, toolCall.name, result);
        if (!this.config.quietMode) {
          const status = result.success ? '\u2713' : '\u2717';
          const stored = modelVisibleResult.stored ? ' stored' : '';
          console.log(`    ${status} ${toolCall.name}${stored} (${durationMs}ms)`);
        }

        toolCallResults.push({
          toolName: toolCall.name,
          args: toolCall.args,
          result,
          durationMs,
        });

        this.history.push({
          role: 'tool',
          content: modelVisibleResult.content,
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
      await this.saveResumeSummary({
        lastUserGoal: userMessage,
        pendingToolCalls: [],
        lastModelVisibleSummary: response.content || `Turn ${turnCount} completed with ${toolCallResults.length} tool call(s).`,
        artifactPaths: toolCallResults
          .map((toolResult) => toolResult.result.storedResult?.storedResultPath)
          .filter((path): path is string => Boolean(path)),
      });
    }

      const transcriptPath = await this.saveTranscript();
      await this.saveResumeSummary({
        lastUserGoal: userMessage,
        failedOperation: { type: 'agent.max_turns', maxTurns },
        lastModelVisibleSummary: `Stopped after ${maxTurns} turns without a final response.`,
      });

      return {
        turns: this.turns,
        history: this.history,
        finalContent: '',
        status: 'max_turns',
        transcriptPath,
      };
    } finally {
      await this.toolRegistry.close();
    }
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

  private async chatWithContextRecovery(input: {
    tools: ToolDefinition[];
    userMessage: string;
    turnCount: number;
  }): Promise<LLMResponse> {
    let recoveredFromContextOverflow = false;

    for (;;) {
      try {
        return await this.client.chatWithTools({
          messages: this.history,
          tools: input.tools.length > 0 ? input.tools : undefined,
          config: {
            model: this.config.model || DEFAULT_MODEL,
            temperature: this.config.temperature ?? 0.1,
            maxTokens: this.config.maxTokens ?? 8192,
            reasoningEffort: this.config.reasoningEffort,
            disableThinking: this.config.reasoningEffort ? this.config.reasoningEffort === 'none' : true,
          },
        });
      } catch (error) {
        if (!(error instanceof TokenLimitError) || recoveredFromContextOverflow) {
          throw error;
        }

        recoveredFromContextOverflow = true;
        const compaction = this.compactHistoryForContextOverflow();
        await this.emitContextCompactedEvent(input.turnCount, error, compaction);
        await this.saveResumeSummary({
          lastUserGoal: input.userMessage,
          failedOperation: {
            type: 'llm.context_length',
            error: error.message,
            recovered: compaction.compacted,
          },
          lastModelVisibleSummary: compaction.compacted
            ? 'Context length failure recovered by compacting prior conversation/tool context and retrying the model call.'
            : 'Context length failure encountered, but there was not enough history to compact before retrying once.',
        });
      }
    }
  }

  private makeToolContext(toolCallId?: string): ToolUseContext {
    const matterPath = this.config.matterName
      ? join('matters', this.config.matterName)
      : '';

    return {
      matterName: this.config.matterName,
      runId: this.config.runId,
      taskId: this.config.taskId,
      toolCallId,
      getEvidencePath: (id: string) => join(matterPath, '_evidence', id),
      getExtractionPath: (id: string) => join(matterPath, '_extractions', `${id}.txt`),
      getConfig: () => ({ ...this.config }),
      log: (msg: string) => {
        if (this.config.verbose) console.log(`    ${msg}`);
      },
    };
  }

  private async prepareToolResultForModel(
    toolCallId: string,
    toolName: string,
    result: ToolResult,
  ): Promise<{ content: string; stored: boolean }> {
    const resultContent = result.success
      ? result.output || JSON.stringify(result.data) || 'ok'
      : `Error: ${result.error}`;
    const maxChars = this.maxToolOutputChars();
    if (resultContent.length <= maxChars) {
      return { content: resultContent, stored: false };
    }

    try {
      const store = new ToolResultStore({
        matterName: this.config.matterName,
        runId: this.config.runId,
      });
      const stored = await store.store({
        toolCallId,
        toolName,
        content: resultContent,
        result,
        previewChars: Math.min(maxChars, 20_000),
      });
      result.storedResult = stored;
      await this.emitToolResultStoredEvent(stored);
      return { content: formatStoredToolResultForModel(stored), stored: true };
    } catch {
      return {
        content: truncateText(resultContent, maxChars),
        stored: false,
      };
    }
  }

  private async emitToolResultStoredEvent(stored: StoredToolResultMetadata): Promise<void> {
    if (!this.config.matterName) return;
    try {
      await appendEvent({
        matterName: this.config.matterName,
        type: 'tool.called',
        runId: this.config.runId,
        taskId: this.config.taskId,
        data: {
          tool: stored.toolName,
          success: true,
          storedResult: stored,
          note: 'Oversized tool result persisted with a model-visible preview',
        },
        source: 'tool',
      });
    } catch {
    }
  }

  private async emitContextCompactedEvent(
    turnNumber: number,
    error: TokenLimitError,
    compaction: HistoryCompactionResult,
  ): Promise<void> {
    if (!this.config.matterName) return;
    try {
      await appendEvent({
        matterName: this.config.matterName,
        type: 'llm.context.compacted',
        runId: this.config.runId,
        taskId: this.config.taskId,
        data: {
          turnNumber,
          reason: 'context_length',
          error: error.message,
          compacted: compaction.compacted,
          beforeChars: compaction.beforeChars,
          afterChars: compaction.afterChars,
          messagesRemoved: compaction.messagesRemoved,
        },
        source: 'agent',
      });
    } catch {
    }
  }

  private async emitLlmFailureEvent(error: unknown): Promise<void> {
    if (!this.config.matterName) return;
    const message = error instanceof Error ? error.message : String(error);
    try {
      await appendEvent({
        matterName: this.config.matterName,
        type: 'agent.run.error',
        runId: this.config.runId,
        taskId: this.config.taskId,
        data: {
          operation: 'llm.chatWithTools',
          error: message,
          errorName: error instanceof Error ? error.name : undefined,
        },
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

  private async saveResumeSummary(summary: {
    lastUserGoal?: string;
    activePlan?: unknown;
    pendingToolCalls?: Array<{ id?: string; name?: string; input?: unknown; status?: string }>;
    lastModelVisibleSummary?: string;
    artifactPaths?: string[];
    failedOperation?: unknown;
  }): Promise<void> {
    if (!this.config.matterName) return;
    try {
      await writeResumeSummary(this.config.matterName, summary);
    } catch {
    }
  }

  private compactHistoryIfNeeded(): void {
    const maxChars = this.config.maxHistoryChars ?? DEFAULT_MAX_HISTORY_CHARS;
    const totalChars = this.history.reduce((sum, message) => sum + message.content.length, 0);
    if (totalChars <= maxChars || this.history.length <= 10) return;
    this.compactHistory('size_limit', 8);
  }

  private compactHistoryForContextOverflow(): HistoryCompactionResult {
    return this.compactHistory('context_overflow', 8);
  }

  private compactHistory(reason: 'size_limit' | 'context_overflow', recentMessageCount: number): HistoryCompactionResult {
    const beforeChars = this.history.reduce((sum, message) => sum + message.content.length, 0);
    if (this.history.length <= 3) {
      return {
        compacted: false,
        beforeChars,
        afterChars: beforeChars,
        messagesRemoved: 0,
      };
    }

    const system = this.history[0];
    const boundedRecentCount = Math.max(2, Math.min(recentMessageCount, this.history.length - 2));
    const recent = this.history.slice(-boundedRecentCount);
    const compacted = this.history.slice(1, -boundedRecentCount);
    if (compacted.length === 0) {
      return {
        compacted: false,
        beforeChars,
        afterChars: beforeChars,
        messagesRemoved: 0,
      };
    }

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
          `Earlier conversation/tool context was compacted to keep the worker alive (${reason}). Preserve these facts, evidence IDs, conclusions, blockers, selected skills, and next actions.`,
          summary,
        ].join('\n'),
      },
      ...recent,
    ];

    const afterChars = this.history.reduce((sum, message) => sum + message.content.length, 0);
    return {
      compacted: true,
      beforeChars,
      afterChars,
      messagesRemoved: compacted.length,
    };
  }

  private maxToolOutputChars(): number {
    const configured = this.config.maxToolOutputChars ?? Number(process.env.ATTICUS_MAX_TOOL_OUTPUT_CHARS);
    if (!Number.isFinite(configured) || configured <= 0) return DEFAULT_MAX_TOOL_OUTPUT_CHARS;
    return Math.trunc(configured);
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
