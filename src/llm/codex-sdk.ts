import { Codex, type ModelReasoningEffort, type ThreadEvent, type ThreadItem, type Usage } from '@openai/codex-sdk';
import { checkCodexLoginStatus } from '../config/codex-readiness.js';
import { LLMError } from './errors.js';
import type { LLMClient, LLMClientCapabilities } from './client.js';
import type { LLMRequest, LLMResponse, LLMUsage, ReasoningEffort } from '../types/llm.js';
import type { LLMMessage } from '../types/message.js';

const CODEX_ENV_ALLOWLIST = [
  'HOME',
  'USER',
  'LOGNAME',
  'PATH',
  'SHELL',
  'TMPDIR',
  'TEMP',
  'TMP',
  'XDG_CONFIG_HOME',
  'XDG_CACHE_HOME',
  'XDG_DATA_HOME',
  'CODEX_HOME',
  'LANG',
  'LC_ALL',
  'LC_CTYPE',
  'SSL_CERT_FILE',
  'SSL_CERT_DIR',
  'NODE_EXTRA_CA_CERTS',
] as const;

const NATIVE_ACTION_TYPES = new Set([
  'command_execution',
  'file_change',
  'mcp_tool_call',
  'web_search',
]);

export interface CodexSdkClientOptions {
  providerName?: string;
  timeoutMs?: number;
  workingDirectory?: string;
  codexPathOverride?: string;
}

export class CodexSdkClient implements LLMClient {
  readonly capabilities: LLMClientCapabilities = { tools: false, jsonSchema: true };

  private readonly providerName: string;
  private readonly timeoutMs: number;
  private readonly workingDirectory: string;
  private readonly codexPathOverride?: string;

  constructor(options: CodexSdkClientOptions = {}) {
    this.providerName = options.providerName ?? 'codex-sdk';
    this.timeoutMs = options.timeoutMs ?? 180_000;
    this.workingDirectory = options.workingDirectory ?? process.cwd();
    this.codexPathOverride = options.codexPathOverride;
  }

  async chat(request: LLMRequest): Promise<LLMResponse> {
    return this.chatWithTools(request);
  }

  async chatWithTools(request: LLMRequest): Promise<LLMResponse> {
    if (request.tools && request.tools.length > 0) {
      throw new LLMError(
        'Provider codex-sdk does not support Harness-owned tool calls in this profile; run with --no-tools or select a tool-capable provider profile.',
        400,
        this.providerName,
      );
    }

    const prompt = buildPrompt(request.messages, Boolean(request.config.jsonMode && !request.config.jsonSchema));
    return this.withTimeout(async (signal) => {
      const codex = new Codex({
        codexPathOverride: this.codexPathOverride,
        env: buildCodexEnv(process.env),
      });
      const thread = codex.startThread({
        model: request.config.model,
        sandboxMode: 'read-only',
        workingDirectory: this.workingDirectory,
        modelReasoningEffort: mapReasoningEffort(request.config.reasoningEffort),
        networkAccessEnabled: false,
        webSearchMode: 'disabled',
        webSearchEnabled: false,
        approvalPolicy: 'never',
        additionalDirectories: [],
      });
      const outputSchema = request.config.jsonSchema?.schema;
      const { events } = await thread.runStreamed(prompt, {
        signal,
        ...(outputSchema ? { outputSchema } : {}),
      });

      let finalResponse = '';
      let usage: Usage | null = null;
      for await (const event of events) {
        const next = this.handleEvent(event);
        if (next.finalResponse !== undefined) {
          finalResponse = next.finalResponse;
        }
        if (next.usage !== undefined) {
          usage = next.usage;
        }
      }

      if ((request.config.jsonSchema || request.config.jsonMode) && finalResponse.trim()) {
        this.validateJson(finalResponse);
      }

      return {
        content: finalResponse,
        usage: usage ? mapUsage(usage) : undefined,
        provider: this.providerName,
        model: request.config.model,
      };
    });
  }

  async healthCheck(): Promise<boolean> {
    const readiness = await checkCodexLoginStatus(Math.min(this.timeoutMs, 10_000));
    if (!readiness.ok) {
      throw new LLMError(readiness.message, readiness.status === 'missing' ? 401 : 0, this.providerName);
    }
    return true;
  }

  private handleEvent(event: ThreadEvent): { finalResponse?: string; usage?: Usage } {
    switch (event.type) {
      case 'item.started':
      case 'item.updated':
      case 'item.completed':
        return this.handleItem(event.item);
      case 'turn.completed':
        return { usage: event.usage };
      case 'turn.failed':
        throw new LLMError(event.error.message, 0, this.providerName);
      case 'error':
        throw new LLMError(event.message, 0, this.providerName);
      case 'thread.started':
      case 'turn.started':
        return {};
      default:
        throw new LLMError(`Unsupported Codex SDK event: ${(event as { type?: string }).type ?? 'unknown'}`, 0, this.providerName);
    }
  }

  private handleItem(item: ThreadItem): { finalResponse?: string } {
    if (NATIVE_ACTION_TYPES.has(item.type)) {
      throw new LLMError(`Codex SDK attempted native action "${item.type}" outside Harness tool policy.`, 400, this.providerName);
    }

    switch (item.type) {
      case 'agent_message':
        return { finalResponse: item.text };
      case 'reasoning':
      case 'todo_list':
        return {};
      case 'error':
        throw new LLMError(item.message, 0, this.providerName);
      default:
        throw new LLMError(`Unsupported Codex SDK item: ${(item as { type?: string }).type ?? 'unknown'}`, 0, this.providerName);
    }
  }

  private async withTimeout<T>(operation: (signal: AbortSignal) => Promise<T>): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      return await operation(controller.signal);
    } catch (error) {
      if (error instanceof LLMError) throw error;
      const err = error as Error;
      if (err.name === 'AbortError' || /abort|aborted/i.test(err.message)) {
        throw new LLMError(`Request timed out after ${this.timeoutMs}ms`, 408, this.providerName);
      }
      throw new LLMError(`Codex SDK error: ${err.message}`, 0, this.providerName);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private validateJson(text: string): void {
    try {
      JSON.parse(text);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new LLMError(`Codex SDK returned invalid JSON for structured output: ${message}`, 0, this.providerName);
    }
  }
}

function buildPrompt(messages: LLMMessage[], forceJsonInstruction: boolean): string {
  const body = messages.map((message) => {
    const label = message.toolName ? `${message.role}:${message.toolName}` : message.role;
    const toolCalls = message.toolCalls?.length
      ? `\nTool calls requested by prior assistant message: ${message.toolCalls.map((tool) => tool.name).join(', ')}`
      : '';
    return `## ${label.toUpperCase()}\n${message.content}${toolCalls}`;
  }).join('\n\n');

  return forceJsonInstruction
    ? `${body}\n\nReturn only valid JSON.`
    : body;
}

function mapReasoningEffort(effort: ReasoningEffort | undefined): ModelReasoningEffort | undefined {
  if (!effort || effort === 'none') return undefined;
  return effort;
}

function mapUsage(usage: Usage): LLMUsage {
  return {
    promptTokens: usage.input_tokens,
    completionTokens: usage.output_tokens,
    totalTokens: usage.input_tokens + usage.output_tokens,
    cacheHitTokens: usage.cached_input_tokens,
    reasoningOutputTokens: usage.reasoning_output_tokens,
  };
}

function buildCodexEnv(env: NodeJS.ProcessEnv): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key of CODEX_ENV_ALLOWLIST) {
    const value = env[key];
    if (value !== undefined) {
      result[key] = value;
    }
  }
  return result;
}
