import { AuthError, LLMError, classifyError, classifyThrownError } from './errors.js';
import { defaultRetryPolicy, type RetryAttempt, type RetryFailure, withRetry } from './retry.js';
import type { LLMClientCapabilities } from './client.js';
import type { LLMRequest, LLMResponse, LLMUsage, ReasoningEffort } from '../types/llm.js';
import type { LLMMessage, ToolCall } from '../types/message.js';

export interface AnthropicClientOptions {
  apiKey?: string;
  authToken?: string;
  baseUrl?: string;
  timeoutMs?: number;
  maxRetries?: number;
  onRetry?: (attempt: RetryAttempt) => void | Promise<void>;
  onRetryFailure?: (failure: RetryFailure) => void | Promise<void>;
  providerName?: string;
  anthropicVersion?: string;
}

interface AnthropicContentBlock {
  type: string;
  text?: string;
  id?: string;
  name?: string;
  input?: Record<string, unknown>;
}

interface AnthropicResponse {
  content?: AnthropicContentBlock[];
  usage?: {
    input_tokens?: number;
    output_tokens?: number;
  };
  model?: string;
  error?: { message: string; type?: string };
}

type AnthropicThinkingConfig =
  | { type: 'enabled'; budget_tokens: number }
  | { type: 'adaptive'; display?: 'summarized' | 'omitted' };

function joinUrl(baseUrl: string, path: string): string {
  return `${baseUrl.replace(/\/+$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}


async function readResponseText(response: Response): Promise<string> {
  return typeof response.text === 'function' ? response.text() : '';
}

function targetThinkingBudget(effort: ReasoningEffort): number | undefined {
  switch (effort) {
    case 'minimal':
      return 1024;
    case 'low':
      return 2048;
    case 'medium':
      return 8192;
    case 'high':
      return 16384;
    case 'xhigh':
      return 32768;
    case 'none':
      return undefined;
  }
}

function supportsAdaptiveThinking(model: string): boolean {
  const normalized = model.toLowerCase();
  return normalized.includes('claude-mythos') ||
    /claude-(opus|sonnet)-4[-.]6/.test(normalized) ||
    /claude-opus-4[-.](?:[7-9]|\d{2,})/.test(normalized);
}

function adaptiveEffortForModel(model: string, effort: ReasoningEffort): 'low' | 'medium' | 'high' | 'xhigh' | 'max' | undefined {
  switch (effort) {
    case 'none':
      return undefined;
    case 'minimal':
    case 'low':
      return 'low';
    case 'medium':
      return 'medium';
    case 'high':
      return 'high';
    case 'xhigh':
      return /claude-opus-4[-.](?:[7-9]|\d{2,})/.test(model.toLowerCase()) ? 'xhigh' : 'max';
  }
}

function thinkingConfigForRequest(
  model: string,
  effort: ReasoningEffort,
  maxTokens: number,
): { thinking: AnthropicThinkingConfig; outputConfig?: Record<string, unknown> } | undefined {
  if (effort === 'none') return undefined;
  if (supportsAdaptiveThinking(model)) {
    const adaptiveEffort = adaptiveEffortForModel(model, effort);
    return {
      thinking: { type: 'adaptive' },
      outputConfig: adaptiveEffort ? { effort: adaptiveEffort } : undefined,
    };
  }

  const budget = thinkingBudgetForMaxTokens(effort, maxTokens);
  return budget ? { thinking: { type: 'enabled', budget_tokens: budget } } : undefined;
}

function thinkingBudgetForMaxTokens(effort: ReasoningEffort, maxTokens: number): number | undefined {
  const target = targetThinkingBudget(effort);
  if (!target) return undefined;
  const usableMax = Math.max(maxTokens, 2048);
  return Math.max(1024, Math.min(target, usableMax - 1));
}

export class AnthropicClient {
  readonly capabilities: LLMClientCapabilities = { tools: true, jsonSchema: false };

  private readonly apiKey: string;
  private readonly authToken: string;
  private readonly baseUrl: string;
  private readonly timeoutMs: number;
  private readonly maxRetries: number;
  private readonly onRetry?: (attempt: RetryAttempt) => void | Promise<void>;
  private readonly onRetryFailure?: (failure: RetryFailure) => void | Promise<void>;
  private readonly providerName: string;
  private readonly anthropicVersion: string;

  constructor(options: AnthropicClientOptions = {}) {
    this.apiKey = options.apiKey ?? '';
    this.authToken = options.authToken ?? '';
    this.baseUrl = options.baseUrl ?? 'https://api.anthropic.com/v1';
    this.timeoutMs = options.timeoutMs ?? 180_000;
    this.maxRetries = options.maxRetries ?? 3;
    this.onRetry = options.onRetry;
    this.onRetryFailure = options.onRetryFailure;
    this.providerName = options.providerName ?? 'anthropic';
    this.anthropicVersion = options.anthropicVersion ?? '2023-06-01';
  }

  async chat(request: LLMRequest): Promise<LLMResponse> {
    return this.chatWithTools(request);
  }

  async chatWithTools(request: LLMRequest): Promise<LLMResponse> {
    this.assertAuth();
    const payload = this.buildPayload(request);
    return this.withRetry(() => this.withTimeout(async (signal) => {
      const response = await fetch(joinUrl(this.baseUrl, '/messages'), {
        method: 'POST',
        headers: this.buildHeaders(),
        body: JSON.stringify(payload),
        signal,
      });

      if (!response.ok) {
        const body = await readResponseText(response);
        throw classifyError(response.status, body, this.providerName, { headers: response.headers });
      }

      const data = (await response.json()) as AnthropicResponse;
      if (data.error) {
        throw new LLMError(data.error.message, 0, this.providerName);
      }
      return this.parseResponse(data);
    }));
  }

  async healthCheck(): Promise<boolean> {
    this.assertAuth();
    return this.withRetry(() => this.withTimeout(async (signal) => {
      const response = await fetch(joinUrl(this.baseUrl, '/models'), {
        method: 'GET',
        headers: this.buildHeaders(false),
        signal,
      });
      if (response.status === 401 || response.status === 403 || response.status >= 500) {
        const body = await readResponseText(response);
        throw classifyError(response.status, body, this.providerName, { headers: response.headers });
      }
      return response.ok;
    }));
  }

  private assertAuth(): void {
    if (!this.apiKey && !this.authToken) {
      throw new AuthError();
    }
  }

  private buildHeaders(includeJson = true): Record<string, string> {
    const headers: Record<string, string> = {
      'anthropic-version': this.anthropicVersion,
    };
    if (includeJson) {
      headers['Content-Type'] = 'application/json';
    }
    if (this.apiKey) {
      headers['x-api-key'] = this.apiKey;
    } else if (this.authToken) {
      headers.Authorization = `Bearer ${this.authToken}`;
    }
    return headers;
  }

  private async withTimeout<T>(operation: (signal: AbortSignal) => Promise<T>): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      return await operation(controller.signal);
    } catch (err) {
      throw classifyThrownError(err, this.providerName, this.timeoutMs);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private async withRetry<T>(operation: () => Promise<T>): Promise<T> {
    return withRetry(operation, {
      ...defaultRetryPolicy,
      maxAttempts: Math.max(1, Math.trunc(this.maxRetries || 1)),
      source: 'interactive',
    }, {
      onRetry: this.onRetry,
      onFailure: this.onRetryFailure,
    });
  }

  private buildPayload(request: LLMRequest): Record<string, unknown> {
    const systemMessages = request.messages.filter((m) => m.role === 'system');
    const messages = request.messages
      .filter((m) => m.role !== 'system')
      .map((message) => this.formatMessage(message));

    const maxTokens = request.config.maxTokens ?? 4096;
    const hasTools = Boolean(request.tools?.length);
    const thinkingConfig = request.config.reasoningEffort && !request.config.disableThinking && !hasTools
      ? thinkingConfigForRequest(request.config.model, request.config.reasoningEffort, maxTokens)
      : undefined;
    const payload: Record<string, unknown> = {
      model: request.config.model,
      max_tokens: thinkingConfig?.thinking.type === 'enabled'
        ? Math.max(maxTokens, thinkingConfig.thinking.budget_tokens + 1)
        : maxTokens,
      temperature: request.config.temperature ?? 0.1,
      messages,
    };

    if (systemMessages.length > 0) {
      payload.system = systemMessages.map((m) => m.content).join('\n\n');
    }

    if (hasTools) {
      payload.tools = request.tools!.map((tool) => ({
        name: tool.name,
        description: tool.description,
        input_schema: tool.inputSchema,
      }));
      payload.tool_choice = { type: 'auto' };
    }

    if (thinkingConfig) {
      payload.thinking = thinkingConfig.thinking;
      if (thinkingConfig.outputConfig) {
        payload.output_config = thinkingConfig.outputConfig;
      }
    }

    return payload;
  }

  private formatMessage(message: LLMMessage): Record<string, unknown> {
    if (message.role === 'tool') {
      return {
        role: 'user',
        content: [
          {
            type: 'tool_result',
            tool_use_id: message.toolCallId,
            content: message.content,
          },
        ],
      };
    }

    if (message.toolCalls && message.toolCalls.length > 0) {
      return {
        role: 'assistant',
        content: [
          ...(message.content ? [{ type: 'text', text: message.content }] : []),
          ...message.toolCalls.map((toolCall) => ({
            type: 'tool_use',
            id: toolCall.id,
            name: toolCall.name,
            input: toolCall.args,
          })),
        ],
      };
    }

    return {
      role: message.role === 'assistant' ? 'assistant' : 'user',
      content: message.content,
    };
  }

  private parseResponse(data: AnthropicResponse): LLMResponse {
    const blocks = data.content ?? [];
    const text = blocks
      .filter((block) => block.type === 'text' && typeof block.text === 'string')
      .map((block) => block.text)
      .join('\n');
    const toolCalls: ToolCall[] = blocks
      .filter((block) => block.type === 'tool_use' && block.id && block.name)
      .map((block) => ({
        id: block.id as string,
        name: block.name as string,
        args: block.input ?? {},
      }));

    const inputTokens = data.usage?.input_tokens ?? 0;
    const outputTokens = data.usage?.output_tokens ?? 0;
    const usage: LLMUsage | undefined = data.usage
      ? {
          promptTokens: inputTokens,
          completionTokens: outputTokens,
          totalTokens: inputTokens + outputTokens,
        }
      : undefined;

    return {
      content: text,
      toolCalls: toolCalls.length > 0 ? toolCalls : undefined,
      usage,
      provider: this.providerName,
      model: data.model,
    };
  }
}
