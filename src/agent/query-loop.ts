import { appendFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { OpenRouterClient, type LLMClient } from '../llm/client.js';
import { DEFAULT_MODEL } from '../llm/config.js';
import { MalformedProviderResponseError, TokenLimitError } from '../llm/errors.js';
import type { AgentTurn, ToolCallResult } from '../types/agent.js';
import { stringifyMessageContent, type LLMMessage } from '../types/message.js';
import type { LLMNativeAction, LLMResponse, ReasoningEffort } from '../types/llm.js';
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
  mcpContext?: Record<string, string>;
  shouldStop?: () => string | undefined;
  /** When true, if the final response is not valid JSON, the loop will give the model another turn with feedback instead of returning raw non-JSON content. */
  retryNonJson?: boolean;
  /** When set, the agent MUST call this tool to exit the loop. Raw text responses without tool calls will be rejected with feedback. */
  requireTerminationTool?: string;
}

export interface QueryLoopResult {
  turns: AgentTurn[];
  history: LLMMessage[];
  finalContent: string;
  status: 'completed' | 'max_turns' | 'error' | 'aborted';
  error?: string;
  transcriptPath?: string;
  nativeActions?: LLMNativeAction[];
  policyViolations?: string[];
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
    const nativeActions: LLMNativeAction[] = [];
    const policyViolations: string[] = [];
    await this.saveResumeSummary({
      lastUserGoal: userMessage,
      lastModelVisibleSummary: 'Run started.',
    });

    const maxTurns = this.config.maxTurns || 25;
    let nonJsonRetries = 0;
    const maxNonJsonRetries = 3;

    try {
      for (let turnCount = 1; turnCount <= maxTurns; turnCount++) {
      const stopReason = this.config.shouldStop?.();
      if (stopReason) {
        return await this.abortResult(userMessage, stopReason);
      }

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
          nativeActions: nativeActions.length ? nativeActions : undefined,
          policyViolations: policyViolations.length ? policyViolations : undefined,
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
          nativeActions: nativeActions.length ? nativeActions : undefined,
          policyViolations: policyViolations.length ? policyViolations : undefined,
        };
      }

      const responseViolations = this.recordNativePolicySignals(response);
      if (response.nativeActions?.length) nativeActions.push(...response.nativeActions);
      if (responseViolations.length) {
        policyViolations.push(...responseViolations);
        await this.emitPolicyViolationEvent(responseViolations, response.nativeActions);
      }

      this.history.push({
        role: 'assistant',
        content: response.content || '',
        reasoningContent: response.reasoningContent,
        nativeActions: response.nativeActions,
        toolCalls: response.toolCalls,
      });

      if (!response.toolCalls || response.toolCalls.length === 0) {
        if (!this.config.quietMode) {
          console.log(
            `  [Agent] ${response.content.substring(0, 200)}${response.content.length > 200 ? '...' : ''}`
          );
        }

        if (this.config.requireTerminationTool) {
          nonJsonRetries += 1; // Reuse the retry counter
          this.history.push({
            role: 'user',
            content: `You must call the '${this.config.requireTerminationTool}' tool to finish your turn. Do not return raw text responses.`,
          });
          await this.saveResumeSummary({
            lastUserGoal: userMessage,
            lastModelVisibleSummary: `Agent attempted to exit without calling ${this.config.requireTerminationTool}. Asked model to use the tool.`,
          });
          continue;
        }

        if (this.config.retryNonJson && nonJsonRetries < maxNonJsonRetries && !isJsonLike(response.content)) {
          nonJsonRetries += 1;
          const feedback = buildNonJsonRetryFeedback(response.content);
          this.history.push({
            role: 'user',
            content: feedback,
          });
          await this.saveResumeSummary({
            lastUserGoal: userMessage,
            lastModelVisibleSummary: `Non-JSON output detected (retry ${nonJsonRetries}/${maxNonJsonRetries}). Asked model to fix.`,
          });
          continue;
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
          nativeActions: nativeActions.length ? nativeActions : undefined,
          policyViolations: policyViolations.length ? policyViolations : undefined,
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

        // If the agent called the required termination tool, we can exit early.
        if (this.config.requireTerminationTool && toolCall.name === this.config.requireTerminationTool) {
          this.turns.push({
            turnNumber: turnCount,
            request: this.history.slice(-(response.toolCalls.length + 2)),
            response,
            toolCalls: toolCallResults,
          });
          await this.emitTurnEvent(turnCount, response.content);
          
          const transcriptPath = await this.saveTranscript();
          return {
            turns: this.turns,
            history: this.history,
            finalContent: JSON.stringify(toolCall.args), // Return the structured args as finalContent
            status: 'completed',
            transcriptPath,
            nativeActions: nativeActions.length ? nativeActions : undefined,
            policyViolations: policyViolations.length ? policyViolations : undefined,
          };
        }
      }

      const stopAfterTools = this.config.shouldStop?.();
      if (stopAfterTools) {
        this.turns.push({
          turnNumber: turnCount,
          request: this.history.slice(-(response.toolCalls.length + 2)),
          response,
          toolCalls: toolCallResults,
        });
        await this.emitTurnEvent(turnCount, response.content);
        return await this.abortResult(userMessage, stopAfterTools);
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
        nativeActions: nativeActions.length ? nativeActions : undefined,
        policyViolations: policyViolations.length ? policyViolations : undefined,
      };
    } finally {
      await this.toolRegistry.close();
    }
  }

  private async abortResult(userMessage: string, reason: string): Promise<QueryLoopResult> {
    const transcriptPath = await this.saveTranscript();
    await this.saveResumeSummary({
      lastUserGoal: userMessage,
      failedOperation: { type: 'agent.aborted', error: reason },
      lastModelVisibleSummary: `Stopped by runtime monitor: ${reason}`,
    });
    return {
      turns: this.turns,
      history: this.history,
      finalContent: '',
      status: 'aborted',
      error: reason,
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

  private async chatWithContextRecovery(input: {
    tools: ToolDefinition[];
    userMessage: string;
    turnCount: number;
  }): Promise<LLMResponse> {
    let recoveredFromContextOverflow = false;
    let malformedToolRetries = 0;
    const maxMalformedToolRetries = 2;

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
            jsonMode: this.config.retryNonJson || undefined,
            disableThinking: this.config.reasoningEffort ? this.config.reasoningEffort === 'none' : true,
            mcpContext: this.buildMcpContext(),
          },
        });
      } catch (error) {
        if (isMalformedToolArgumentError(error) && malformedToolRetries < maxMalformedToolRetries) {
          malformedToolRetries += 1;
          const message = error instanceof Error ? error.message : String(error);
          this.history.push({
            role: 'user',
            content: buildMalformedToolRetryFeedback(message, malformedToolRetries, maxMalformedToolRetries),
          });
          await this.saveResumeSummary({
            lastUserGoal: input.userMessage,
            failedOperation: {
              type: 'llm.malformed_tool_arguments',
              error: message,
              recovered: true,
            },
            lastModelVisibleSummary: `Malformed tool arguments detected (retry ${malformedToolRetries}/${maxMalformedToolRetries}). Asked model to resend a smaller valid JSON tool call.`,
          });
          continue;
        }

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

  private buildMcpContext(): Record<string, string> {
    const context: Record<string, string> = { ...(this.config.mcpContext ?? {}) };
    if (this.config.runId) context.ATTICUS_HARNESS_RUN_ID = this.config.runId;
    if (this.config.taskId) context.ATTICUS_HARNESS_TASK_ID = this.config.taskId;
    if (this.config.role) context.ATTICUS_HARNESS_ROLE = this.config.role;
    return context;
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

  private recordNativePolicySignals(response: LLMResponse): string[] {
    return [
      ...nativeActionPolicyViolations(response.nativeActions, this.config.autonomy),
      ...selfReportedPolicyViolations(response.content, this.config.autonomy),
    ];
  }

  private async emitPolicyViolationEvent(violations: string[], nativeActions?: LLMNativeAction[]): Promise<void> {
    if (!this.config.matterName || violations.length === 0) return;
    try {
      await appendEvent({
        matterName: this.config.matterName,
        type: 'agent.policy_violation',
        runId: this.config.runId,
        taskId: this.config.taskId,
        data: {
          violations,
          nativeActions: nativeActions?.map((action) => ({
            type: action.type,
            status: action.status,
            label: action.label,
          })),
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
          const nativeActionsLine = m.nativeActions?.length
            ? '\n' + m.nativeActions.map((a) => `  \u2192 Native: ${a.type}${a.label ? ` (${a.label})` : ''}${a.status ? ` [${a.status}]` : ''}`).join('\n')
            : '';
          return `## ${m.role.toUpperCase()}\n${m.content}${toolCallsLine}${nativeActionsLine}`;
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
    const totalChars = this.history.reduce((sum, message) => sum + stringifyMessageContent(message.content).length, 0);
    if (totalChars <= maxChars || this.history.length <= 10) return;
    this.compactHistory('size_limit', 8);
  }

  private compactHistoryForContextOverflow(): HistoryCompactionResult {
    return this.compactHistory('context_overflow', 8);
  }

  private compactHistory(reason: 'size_limit' | 'context_overflow', recentMessageCount: number): HistoryCompactionResult {
    const beforeChars = this.history.reduce((sum, message) => sum + stringifyMessageContent(message.content).length, 0);
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
    let recentStart = this.history.length - boundedRecentCount;
    while (recentStart > 1 && this.history[recentStart]?.role === 'tool') {
      recentStart -= 1;
    }
    const recent = this.history.slice(recentStart);
    const compacted = this.history.slice(1, recentStart);
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
        return `- ${label}: ${truncateText(stringifyMessageContent(message.content).replace(/\s+/g, ' '), 300)}`;
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

    const afterChars = this.history.reduce((sum, message) => sum + stringifyMessageContent(message.content).length, 0);
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

function nativeActionPolicyViolations(
  actions: LLMNativeAction[] | undefined,
  autonomy: AutonomyPolicy | undefined,
): string[] {
  if (!actions?.length || !autonomy) return [];
  const violations: string[] = [];

  for (const action of actions) {
    const label = action.label ? ` (${action.label})` : '';
    if (action.type === 'web_search' && !autonomy.autoApproveWeb) {
      violations.push(`Native Codex web_search used while autonomy.autoApproveWeb=false${label}`);
    } else if (action.type === 'command_execution' && !autonomy.autoApproveShell) {
      violations.push(`Native Codex shell command used while autonomy.autoApproveShell=false${label}`);
    } else if (action.type === 'file_change' && !autonomy.autoApproveFileWrites) {
      violations.push(`Native Codex file change used while autonomy.autoApproveFileWrites=false${label}`);
    } else if (action.type === 'mcp_tool_call') {
      const server = typeof action.data?.server === 'string' ? action.data.server : undefined;
      if (server && server !== 'harness') {
        violations.push(`Native Codex MCP call used non-Harness server "${server}"${label}`);
      }
    }
  }

  return [...new Set(violations)];
}

function selfReportedPolicyViolations(
  content: string | undefined,
  autonomy: AutonomyPolicy | undefined,
): string[] {
  if (!content || !autonomy || autonomy.autoApproveWeb) return [];
  const compact = content.replace(/\s+/g, ' ');
  const claimsLiveOfficialSource =
    hasUnnegatedPolicyClaim(
      compact,
      /\blive official (?:sources?|authorit(?:y|ies)|legislation|pages?|web pages?|URLs?).{0,80}\b(?:checked|verified|accessed|searched|consulted|used)\b/gi,
    ) ||
    /\bofficial (?:sources?|authorit(?:y|ies)|legislation|pages?|web pages?|URLs?).{0,120}\b(?:checked|verified|accessed|searched|consulted)\b.{0,80}\b(?:live|online|web|today|202\d-\d\d-\d\d)\b/i.test(compact) ||
    /\b(?:checked|verified|accessed|searched|consulted)\b.{0,120}\b(?:live|online|web)\b.{0,120}\bofficial (?:sources?|authorit(?:y|ies)|legislation|pages?|URLs?)\b/i.test(compact) ||
    /\b(?:web_search|web_fetch|web source ingestion|Harness web).{0,160}\b(?:policy-blocked|blocked by policy)\b.{0,160}\b(?:live|official|URL|source|legislation|authority)\b/i.test(compact);
  const citesExternalUrlAsSource =
    /https?:\/\/\S+/i.test(compact) &&
    /\b(?:official|source|accessed|checked|verified|live|legislation\.gov\.uk|spso\.org\.uk|gov\.uk)\b/i.test(compact);

  if (!claimsLiveOfficialSource && !citesExternalUrlAsSource) return [];
  return ['Worker output appears to rely on live/external web sources while autonomy.autoApproveWeb=false'];
}

function hasUnnegatedPolicyClaim(content: string, pattern: RegExp): boolean {
  for (const match of content.matchAll(pattern)) {
    const index = match.index ?? 0;
    const before = content.slice(Math.max(0, index - 32), index);
    if (/\b(?:no|not|without|never)\b.{0,24}$/i.test(before)) continue;
    return true;
  }
  return false;
}

function isJsonLike(content: string): boolean {
  const trimmed = content.trim();
  if (trimmed.length === 0) return false;
  if (trimmed === '(no response)') return false;
  try {
    JSON.parse(trimmed);
    return true;
  } catch {
    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fenced) {
      try { JSON.parse(fenced[1].trim()); return true; } catch { }
    }
    const objMatch = trimmed.match(/\{[\s\S]*\}/);
    if (objMatch) {
      try { JSON.parse(objMatch[0]); return true; } catch { }
    }
    return false;
  }
}

function buildNonJsonRetryFeedback(previousContent: string): string {
  return [
    'Your last response was not valid JSON. You MUST return a valid JSON object.',
    'Do NOT include markdown code fences, explanations, or any text outside the JSON object.',
    previousContent
      ? `Your previous response was: ${previousContent.slice(0, 200)}${previousContent.length > 200 ? '...' : ''}`
      : 'Your previous response was empty.',
    'Return ONLY the JSON object now, starting with { and ending with }.',
  ].join('\n');
}

function isMalformedToolArgumentError(error: unknown): boolean {
  if (!(error instanceof MalformedProviderResponseError)) return false;
  return /Malformed tool arguments|JSON|Unterminated string|Unexpected end/i.test(error.message);
}

function buildMalformedToolRetryFeedback(errorMessage: string, retry: number, maxRetries: number): string {
  return [
    `Your previous tool call could not be executed because its function arguments were not valid JSON (retry ${retry}/${maxRetries}).`,
    'Call the tool again with syntactically valid, complete JSON arguments.',
    'If the candidate or artifact body is long, split it into a concise structured candidate now and put detailed prose in later smaller candidates rather than one huge string.',
    'Do not wrap tool arguments in markdown. Do not leave strings unterminated. Escape quotes and newlines correctly.',
    '',
    'Provider/tool error:',
    truncateText(errorMessage, 1200),
  ].join('\n');
}
