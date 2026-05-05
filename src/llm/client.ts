import {
  loadConfig,
  loadConfigFromStore,
  OPENROUTER_BASE_URL,
  CHAT_COMPLETIONS_PATH,
  type ProviderConfig,
} from './config.js';
import { AuthError, LLMError, classifyError } from './errors.js';
import type { LLMConfig, LLMRequest, LLMResponse, LLMUsage } from '../types/llm.js';
import type { LLMMessage, ToolCall } from '../types/message.js';
import type { ToolDefinition } from '../types/tool.js';

export interface OpenRouterResponse {
  id: string;
  choices: Array<{
    finish_reason: string;
    message: {
      role: string;
      content: string | null;
      tool_calls?: Array<{
        id: string;
        type: 'function';
        function: { name: string; arguments: string };
      }>;
    };
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    prompt_cache_hit_tokens?: number;
    prompt_cache_miss_tokens?: number;
  };
  provider?: string;
  model?: string;
  error?: { message: string; code: number };
}

export interface OpenRouterClientOptions {
  apiKey?: string;
  baseUrl?: string;
  timeoutMs?: number;
}

export class OpenRouterClient {
  private apiKey: string;
  private baseUrl: string;
  private timeoutMs: number;
  private readonly explicitOptions: OpenRouterClientOptions;
  private readonly storeConfig: Promise<ProviderConfig>;

  constructor(options?: OpenRouterClientOptions) {
    const config = loadConfig();
    this.explicitOptions = options ?? {};
    this.storeConfig = loadConfigFromStore();
    this.apiKey = options?.apiKey || config.apiKey || '';
    this.baseUrl = options?.baseUrl || config.baseUrl || OPENROUTER_BASE_URL;
    this.timeoutMs = options?.timeoutMs || config.timeoutMs || 180_000;
  }

  async chat(request: LLMRequest): Promise<LLMResponse> {
    return this.chatWithTools(request);
  }

  async chatWithTools(request: LLMRequest): Promise<LLMResponse> {
    await this.hydrateConfigFromStore();

    if (!this.apiKey) {
      throw new AuthError();
    }

    const payload = this.buildPayload(request);
    const url = `${this.baseUrl}${CHAT_COMPLETIONS_PATH}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://github.com/atticus/harness-v2',
          'X-Title': 'Harness v2',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        const body = await response.text();
        throw classifyError(response.status, body);
      }

      const data = (await response.json()) as OpenRouterResponse;

      if (data.error) {
        throw classifyError(data.error.code || 500, data.error.message);
      }

      return this.parseResponse(data);
    } catch (err) {
      if (err instanceof LLMError) throw err;
      if (
        err instanceof TypeError &&
        (err as Error).message.includes('abort')
      ) {
        throw new LLMError('Request timed out', 408);
      }
      if (
        err instanceof TypeError &&
        (err as Error).message.includes('fetch')
      ) {
        throw new LLMError(
          `Network error: ${(err as Error).message}`,
          0,
        );
      }
      throw new LLMError(
        `Unexpected error: ${(err as Error).message}`,
        0,
      );
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private async hydrateConfigFromStore(): Promise<void> {
    const config = await this.storeConfig;
    if (!this.explicitOptions.apiKey && config.apiKey) {
      this.apiKey = config.apiKey;
    }
    if (!this.explicitOptions.baseUrl && config.baseUrl) {
      this.baseUrl = config.baseUrl;
    }
    if (!this.explicitOptions.timeoutMs && config.timeoutMs) {
      this.timeoutMs = config.timeoutMs;
    }
  }

  private buildPayload(request: LLMRequest): Record<string, unknown> {
    const messages = request.messages.map((m) => this.formatMessage(m));

    const payload: Record<string, unknown> = {
      model: request.config.model,
      messages,
      temperature: request.config.temperature ?? 0.1,
      max_tokens: request.config.maxTokens ?? 4096,
    };

    if (request.tools && request.tools.length > 0) {
      payload.tools = request.tools.map((t) => ({
        type: 'function',
        function: {
          name: t.name,
          description: t.description,
          parameters: t.inputSchema,
        },
      }));
      payload.tool_choice = 'auto';
    }

    if (request.config.jsonMode) {
      payload.response_format = { type: 'json_object' };
    }

    if (request.config.disableThinking) {
      payload.thinking = { type: 'disabled' };
      payload.reasoning = { effort: 'none', exclude: true };
    }

    return payload;
  }

  private formatMessage(msg: LLMMessage): Record<string, unknown> {
    const formatted: Record<string, unknown> = {
      role: msg.role,
      content: msg.content,
    };

    if (msg.toolCalls && msg.toolCalls.length > 0) {
      formatted.tool_calls = msg.toolCalls.map((tc) => ({
        id: tc.id,
        type: 'function',
        function: {
          name: tc.name,
          arguments: JSON.stringify(tc.args),
        },
      }));
    }

    if (msg.toolCallId) {
      formatted.tool_call_id = msg.toolCallId;
    }

    return formatted;
  }

  private parseResponse(data: OpenRouterResponse): LLMResponse {
    const choice = data.choices?.[0];
    if (!choice) {
      throw new LLMError(
        'Empty response from OpenRouter (no choices)',
        0,
        data.provider,
      );
    }

    const message = choice.message;
    const toolCalls: ToolCall[] | undefined = message.tool_calls?.map(
      (tc) => ({
        id: tc.id,
        name: tc.function.name,
        args: JSON.parse(tc.function.arguments),
      }),
    );

    const usage: LLMUsage | undefined = data.usage
      ? {
          promptTokens: data.usage.prompt_tokens,
          completionTokens: data.usage.completion_tokens,
          totalTokens: data.usage.total_tokens,
          cacheHitTokens: data.usage.prompt_cache_hit_tokens,
          cacheMissTokens: data.usage.prompt_cache_miss_tokens,
        }
      : undefined;

    return {
      content: message.content || '',
      toolCalls,
      usage,
      provider: data.provider,
      model: data.model,
    };
  }
}
