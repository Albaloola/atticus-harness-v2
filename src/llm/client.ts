import {
  loadConfig,
  loadConfigFromStore,
  OPENROUTER_BASE_URL,
  CHAT_COMPLETIONS_PATH,
  type ProviderConfig,
} from './config.js';
import { AnthropicClient } from './anthropic.js';
import { CodexSdkClient } from './codex-sdk.js';
import { AuthError, LLMError, classifyError } from './errors.js';
import { assertProviderPolicyAllowed } from '../config/provider-policy.js';
import type { ReasoningControl, ResolvedHarnessConfig } from '../config/schema.js';
import type { LLMRequest, LLMResponse, LLMUsage, ReasoningEffort } from '../types/llm.js';
import type { LLMMessage, ToolCall } from '../types/message.js';

export interface LLMClient {
  capabilities?: LLMClientCapabilities;
  chat(request: LLMRequest): Promise<LLMResponse>;
  chatWithTools(request: LLMRequest): Promise<LLMResponse>;
  healthCheck(): Promise<boolean>;
}

export interface LLMClientCapabilities {
  tools: boolean;
  jsonSchema?: boolean;
}

export interface OpenAICompatibleResponse {
  id?: string;
  choices: Array<{
    finish_reason?: string;
    message: {
      role: string;
      content: string | null;
      reasoning?: string | null;
      reasoning_content?: string | null;
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
    prompt_tokens_details?: { cached_tokens?: number };
    completion_tokens_details?: { reasoning_tokens?: number };
    output_tokens_details?: { reasoning_tokens?: number };
  };
  provider?: string;
  model?: string;
  error?: { message: string; code: number };
}

/** Backward-compatible alias for existing imports. */
export type OpenRouterResponse = OpenAICompatibleResponse;

export interface OpenAICompatibleClientOptions {
  apiKey?: string;
  /** OAuth bearer token; used when apiKey is absent. */
  authToken?: string;
  /** Human-readable provider id for diagnostics and policy checks. */
  providerName?: string;
  baseUrl?: string;
  chatPath?: string;
  healthPath?: string;
  timeoutMs?: number;
  /** Explicitly allow unauthenticated requests, e.g. local Ollama. */
  allowNoAuth?: boolean;
  headers?: Record<string, string>;
  reasoningControl?: ReasoningControl;
}

/** Backward-compatible alias for existing imports. */
export type OpenRouterClientOptions = OpenAICompatibleClientOptions;

function joinUrl(baseUrl: string, path: string): string {
  const normalizedBase = baseUrl.replace(/\/+$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}


async function readResponseText(response: Response): Promise<string> {
  return typeof response.text === 'function' ? response.text() : '';
}
function isLocalProvider(providerName: string, baseUrl: string): boolean {
  return (
    providerName === 'local' ||
    providerName.includes('ollama') ||
    /(^|\.)localhost(?::|\/|$)|127\.0\.0\.1/.test(baseUrl)
  );
}

function buildOpenRouterReasoningPayload(effort: ReasoningEffort): Record<string, unknown> {
  return effort === 'none'
    ? { effort: 'none', exclude: true }
    : { effort };
}

function isDeepSeekModel(model: string): boolean {
  return model.toLowerCase().includes('deepseek');
}

function effectiveReasoningEffort(model: string, effort: ReasoningEffort | undefined): ReasoningEffort | undefined {
  return isDeepSeekModel(model) ? 'xhigh' : effort;
}

function mapDeepSeekReasoningEffort(effort: ReasoningEffort): 'high' | 'max' | undefined {
  switch (effort) {
    case 'none':
      return undefined;
    case 'xhigh':
      return 'max';
    case 'minimal':
    case 'low':
    case 'medium':
    case 'high':
      return 'high';
  }
}

function inferReasoningControl(providerName: string, baseUrl: string): ReasoningControl {
  const normalizedBase = baseUrl.toLowerCase();
  if (providerName === 'openrouter' || providerName.startsWith('openrouter-') || normalizedBase.includes('openrouter.ai')) {
    return 'openrouter-reasoning';
  }
  if (providerName === 'openai' || providerName.startsWith('openai-') || normalizedBase.includes('api.openai.com')) {
    return 'openai-reasoning';
  }
  if (providerName === 'deepseek' || providerName.startsWith('deepseek-') || normalizedBase.includes('api.deepseek.com')) {
    return 'deepseek-thinking';
  }
  if (isLocalProvider(providerName, baseUrl)) {
    return 'model-routing';
  }
  return 'none';
}

export class OpenAICompatibleClient implements LLMClient {
  readonly capabilities: LLMClientCapabilities = { tools: true, jsonSchema: true };
  private apiKey: string;
  private authToken: string;
  private baseUrl: string;
  private chatPath: string;
  private healthPath?: string;
  private timeoutMs: number;
  private providerName: string;
  private allowNoAuth: boolean;
  private headers: Record<string, string>;
  private reasoningControl: ReasoningControl;
  private readonly explicitOptions: OpenAICompatibleClientOptions;
  private readonly storeConfig: Promise<ProviderConfig>;

  constructor(options?: OpenAICompatibleClientOptions) {
    const config = loadConfig();
    this.explicitOptions = options ?? {};
    this.storeConfig = loadConfigFromStore();
    this.apiKey = options?.apiKey || config.apiKey || '';
    this.authToken = options?.authToken || '';
    this.baseUrl = options?.baseUrl || config.baseUrl || OPENROUTER_BASE_URL;
    this.chatPath = options?.chatPath || CHAT_COMPLETIONS_PATH;
    this.healthPath = options?.healthPath;
    this.timeoutMs = options?.timeoutMs || config.timeoutMs || 180_000;
    this.providerName = options?.providerName || config.providerName || 'openrouter';
    this.allowNoAuth = options?.allowNoAuth ?? isLocalProvider(this.providerName, this.baseUrl);
    if (this.allowNoAuth && !options?.apiKey && !options?.authToken) {
      this.apiKey = '';
      this.authToken = '';
    }
    this.headers = options?.headers ?? {};
    this.reasoningControl = options?.reasoningControl ?? inferReasoningControl(this.providerName, this.baseUrl);
  }

  async chat(request: LLMRequest): Promise<LLMResponse> {
    return this.chatWithTools(request);
  }

  async chatWithTools(request: LLMRequest): Promise<LLMResponse> {
    await this.hydrateConfigFromStore();

    if (!this.hasAuth()) {
      throw new AuthError();
    }

    const storeConfig = await this.storeConfig;
    if (
      storeConfig.providerPolicy &&
      storeConfig.providers &&
      (!this.explicitOptions.providerName || storeConfig.providerName === this.providerName)
    ) {
      assertProviderPolicyAllowed({
        policy: storeConfig.providerPolicy,
        providers: storeConfig.providers,
        providerName: storeConfig.providerName ?? this.providerName,
        model: request.config.model,
      });
    }

    const payload = this.buildPayload(request);
    const url = joinUrl(this.baseUrl, this.chatPath);

    return this.withTimeout(async (signal) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: this.buildHeaders(),
        body: JSON.stringify(payload),
        signal,
      });

      if (!response.ok) {
        const body = await readResponseText(response);
        throw classifyError(response.status, body);
      }

      const data = (await response.json()) as OpenAICompatibleResponse;

      if (data.error) {
        throw classifyError(data.error.code || 500, data.error.message, this.providerName);
      }

      return this.parseResponse(data);
    });
  }

  async healthCheck(): Promise<boolean> {
    await this.hydrateConfigFromStore();
    if (!this.hasAuth()) {
      throw new AuthError();
    }

    const path = this.healthPath ?? (isLocalProvider(this.providerName, this.baseUrl) ? '/models' : '/models');
    const url = joinUrl(this.baseUrl, path);

    return this.withTimeout(async (signal) => {
      const response = await fetch(url, {
        method: 'GET',
        headers: this.buildHeaders(false),
        signal,
      });
      if (response.status === 401 || response.status === 403) {
        const body = await readResponseText(response);
        throw classifyError(response.status, body);
      }
      if (response.status >= 500) {
        const body = await readResponseText(response);
        throw classifyError(response.status, body);
      }
      return response.ok;
    });
  }

  private async hydrateConfigFromStore(): Promise<void> {
    const config = await this.storeConfig;
    if (!this.explicitOptions.apiKey && !this.allowNoAuth && config.apiKey) {
      this.apiKey = config.apiKey;
    }
    if (!this.explicitOptions.baseUrl && config.baseUrl) {
      this.baseUrl = config.baseUrl;
    }
    if (!this.explicitOptions.timeoutMs && config.timeoutMs) {
      this.timeoutMs = config.timeoutMs;
    }
    if (!this.explicitOptions.providerName && config.providerName) {
      this.providerName = config.providerName;
    }
    if (!this.explicitOptions.reasoningControl) {
      const usingExplicitRoute = Boolean(this.explicitOptions.providerName || this.explicitOptions.baseUrl);
      this.reasoningControl = usingExplicitRoute
        ? inferReasoningControl(this.providerName, this.baseUrl)
        : (config.reasoningControl ?? inferReasoningControl(this.providerName, this.baseUrl));
    }
    if (this.explicitOptions.allowNoAuth === undefined) {
      this.allowNoAuth = isLocalProvider(this.providerName, this.baseUrl);
    }
  }

  private hasAuth(): boolean {
    return this.allowNoAuth || Boolean(this.apiKey || this.authToken);
  }

  private buildHeaders(includeJson = true): Record<string, string> {
    const headers: Record<string, string> = { ...this.headers };
    if (includeJson) {
      headers['Content-Type'] = 'application/json';
    }
    const bearer = this.apiKey || this.authToken;
    if (bearer) {
      headers.Authorization = `Bearer ${bearer}`;
    }
    if (this.isOpenRouterProvider()) {
      headers['HTTP-Referer'] = 'https://github.com/atticus/harness-v2';
      headers['X-Title'] = 'Harness v2';
    }
    return headers;
  }

  private isOpenRouterProvider(): boolean {
    return this.providerName === 'openrouter' ||
      this.providerName.startsWith('openrouter-') ||
      /https:\/\/openrouter\.ai\/api\/v1\/?$/i.test(this.baseUrl);
  }

  private async withTimeout<T>(operation: (signal: AbortSignal) => Promise<T>): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      return await operation(controller.signal);
    } catch (err) {
      if (err instanceof LLMError) throw err;
      const error = err as Error;
      if (error.name === 'AbortError' || /abort|aborted/i.test(error.message)) {
        throw new LLMError(`Request timed out after ${this.timeoutMs}ms`, 408, this.providerName);
      }
      if (err instanceof TypeError && error.message.includes('fetch')) {
        throw new LLMError(`Network error: ${error.message}`, 0, this.providerName);
      }
      throw new LLMError(`Unexpected error: ${error.message}`, 0, this.providerName);
    } finally {
      clearTimeout(timeoutId);
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
      if (this.reasoningControl !== 'deepseek-thinking') {
        payload.tool_choice = 'auto';
      }
    }

    if (request.config.jsonSchema) {
      payload.response_format = {
        type: 'json_schema',
        json_schema: {
          name: request.config.jsonSchema.name,
          strict: request.config.jsonSchema.strict ?? true,
          schema: request.config.jsonSchema.schema,
        },
      };
    } else if (request.config.jsonMode) {
      payload.response_format = { type: 'json_object' };
    }

    const reasoningEffort = effectiveReasoningEffort(request.config.model, request.config.reasoningEffort);
    const disableThinking = isDeepSeekModel(request.config.model) ? false : request.config.disableThinking;
    if (this.reasoningControl === 'deepseek-thinking' && (disableThinking || reasoningEffort)) {
      if (!reasoningEffort || reasoningEffort === 'none' || disableThinking) {
        payload.thinking = { type: 'disabled' };
      } else {
        payload.thinking = { type: 'enabled' };
        const effort = mapDeepSeekReasoningEffort(reasoningEffort);
        if (effort) payload.reasoning_effort = effort;
      }
    } else if (reasoningEffort) {
      if (this.reasoningControl === 'openai-reasoning') {
        payload.reasoning_effort = reasoningEffort;
      } else if (this.reasoningControl === 'openrouter-reasoning') {
        payload.reasoning = buildOpenRouterReasoningPayload(reasoningEffort);
      }
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

    if (this.reasoningControl === 'deepseek-thinking' && msg.reasoningContent) {
      formatted.reasoning_content = msg.reasoningContent;
    }

    return formatted;
  }

  private parseResponse(data: OpenAICompatibleResponse): LLMResponse {
    const choice = data.choices?.[0];
    if (!choice) {
      throw new LLMError(
        `Empty response from ${this.providerName} (no choices)`,
        0,
        data.provider ?? this.providerName,
      );
    }

    const message = choice.message;
    const reasoningContent = message.reasoning_content ?? message.reasoning ?? undefined;
    const toolCalls: ToolCall[] | undefined = message.tool_calls?.map((tc) => ({
      id: tc.id,
      name: tc.function.name,
      args: JSON.parse(tc.function.arguments) as Record<string, unknown>,
    }));

    const usage: LLMUsage | undefined = data.usage
      ? {
          promptTokens: data.usage.prompt_tokens,
          completionTokens: data.usage.completion_tokens,
          totalTokens: data.usage.total_tokens,
          cacheHitTokens: data.usage.prompt_cache_hit_tokens ?? data.usage.prompt_tokens_details?.cached_tokens,
          cacheMissTokens: data.usage.prompt_cache_miss_tokens,
          reasoningOutputTokens: data.usage.completion_tokens_details?.reasoning_tokens ??
            data.usage.output_tokens_details?.reasoning_tokens,
        }
      : undefined;

    return {
      content: message.content || '',
      reasoningContent,
      toolCalls,
      usage,
      provider: data.provider ?? this.providerName,
      model: data.model,
    };
  }
}

/** Backward-compatible name retained for existing imports. */
export class OpenRouterClient extends OpenAICompatibleClient {
  constructor(options?: OpenRouterClientOptions) {
    super({ providerName: 'openrouter', ...options });
  }
}

export function createLLMClient(config: ResolvedHarnessConfig | ProviderConfig): LLMClient {
  const isResolvedConfig = 'provider' in config;
  const provider = isResolvedConfig ? config.provider : config;
  const providerMetadata = provider as ProviderConfig;
  const providerName = isResolvedConfig ? config.providerName : (providerMetadata.providerName ?? 'openrouter');
  const providerKind = providerMetadata.providerKind;
  const baseUrl = provider.baseUrl ?? OPENROUTER_BASE_URL;
  const timeoutMs = provider.timeoutMs ?? 180_000;
  const apiKey = provider.apiKey;
  const reasoningControl = providerMetadata.reasoningControl;

  if (providerKind === 'codex-sdk' || providerName === 'codex-sdk') {
    return new CodexSdkClient({
      providerName,
      timeoutMs,
      workingDirectory: process.cwd(),
    });
  }

  if (providerKind === 'anthropic' || providerName === 'anthropic' || providerName.startsWith('anthropic')) {
    return new AnthropicClient({
      apiKey,
      baseUrl,
      timeoutMs,
      providerName,
    });
  }

  return new OpenAICompatibleClient({
    apiKey,
    baseUrl,
    timeoutMs,
    providerName,
    reasoningControl,
    allowNoAuth: isLocalProvider(providerName, baseUrl),
  });
}
