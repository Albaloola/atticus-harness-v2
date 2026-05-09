import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { readFileSync } from 'fs';
const codexSdkMock = vi.hoisted(() => ({
  startThread: vi.fn(),
  Codex: vi.fn(),
}));

vi.mock('@openai/codex-sdk', () => ({
  Codex: codexSdkMock.Codex,
}));

import { OpenAICompatibleClient, AnthropicClient, CodexSdkClient, createLLMClient } from '../../src/llm/index.ts';
import type { RateLimitError } from '../../src/llm/errors.ts';
import { buildModelDelegationPrompt, selectModelForTask } from '../../src/llm/prompt-builder.ts';
import { DEFAULTS } from '../../src/config/schema.ts';

describe('OpenAICompatibleClient', () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn(async () => ({
      ok: true,
      json: async () => ({
        choices: [
          {
            finish_reason: 'stop',
            message: {
              role: 'assistant',
              content: 'ok',
              tool_calls: [
                {
                  id: 'call_1',
                  type: 'function',
                  function: { name: 'lookup', arguments: '{"id":"123"}' },
                },
              ],
            },
          },
        ],
        usage: { prompt_tokens: 2, completion_tokens: 3, total_tokens: 5 },
        provider: 'openai',
        model: 'gpt-test',
      }),
    }));
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('posts OpenAI-compatible chat completions with bearer auth and tools', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://api.openai.test/v1',
      providerName: 'openai',
    });

    const response = await client.chatWithTools({
      messages: [{ role: 'user', content: 'hello' }],
      tools: [{ name: 'lookup', description: 'Lookup', inputSchema: { type: 'object' } }],
      config: { model: 'gpt-test' },
    });

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.openai.test/v1/chat/completions');
    expect(init.headers.Authorization).toBe('Bearer test-key');
    expect(JSON.parse(init.body).tools[0].function.name).toBe('lookup');
    expect(response.content).toBe('ok');
    expect(response.toolCalls?.[0]).toEqual({ id: 'call_1', name: 'lookup', args: { id: '123' } });
  });

  it('sends OpenRouter app headers for OpenRouter profile aliases', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://openrouter.ai/api/v1',
      providerName: 'openrouter-deepseek',
    });

    await client.chat({
      messages: [{ role: 'user', content: 'hello' }],
      config: { model: 'deepseek/deepseek-v4-flash' },
    });

    const [, init] = fetchMock.mock.calls[0];
    expect(init.headers['HTTP-Referer']).toBe('https://github.com/atticus/harness-v2');
    expect(init.headers['X-Title']).toBe('Harness v2');
  });

  it('allows no auth for local providers and checks /models health', async () => {
    fetchMock.mockResolvedValueOnce({ ok: true, status: 200 });
    const client = new OpenAICompatibleClient({
      baseUrl: 'http://localhost:11434/v1',
      providerName: 'ollama-local',
      allowNoAuth: true,
    });

    await expect(client.healthCheck()).resolves.toBe(true);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('http://localhost:11434/v1/models');
    expect(init.headers.Authorization).toBeUndefined();
  });

  it('passes configured reasoning effort to OpenAI-compatible providers', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://api.openai.test/v1',
      providerName: 'openai',
    });

    await client.chat({
      messages: [{ role: 'user', content: 'think carefully' }],
      config: { model: 'gpt-test', reasoningEffort: 'xhigh' },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.reasoning_effort).toBe('xhigh');
    expect(body.reasoning).toBeUndefined();
    expect(body.thinking).toBeUndefined();
  });

  it('maps reasoning effort none to disabled reasoning payloads', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://api.openai.test/v1',
      providerName: 'openai',
    });

    await client.chat({
      messages: [{ role: 'user', content: 'answer directly' }],
      config: { model: 'gpt-test', reasoningEffort: 'none' },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.reasoning_effort).toBe('none');
    expect(body.reasoning).toBeUndefined();
    expect(body.thinking).toBeUndefined();
  });

  it('passes configured DeepSeek OpenRouter reasoning effort without upgrading it', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://openrouter.ai/api/v1',
      providerName: 'openrouter-custom',
    });

    await client.chat({
      messages: [{ role: 'user', content: 'think lightly' }],
      config: { model: 'deepseek/deepseek-v4-pro', reasoningEffort: 'minimal' },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.reasoning).toEqual({ effort: 'minimal' });
    expect(body.reasoning_effort).toBeUndefined();
    expect(body.thinking).toBeUndefined();
  });

  it('leaves DeepSeek OpenRouter reasoning at provider default when no effort is configured', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://openrouter.ai/api/v1',
      providerName: 'openrouter-custom',
    });

    await client.chat({
      messages: [{ role: 'user', content: 'answer with maximum reasoning' }],
      config: { model: 'deepseek/deepseek-v4-flash' },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.reasoning).toBeUndefined();
    expect(body.reasoning_effort).toBeUndefined();
    expect(body.thinking).toBeUndefined();
  });

  it('does not force reasoning for non-DeepSeek OpenRouter models', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://openrouter.ai/api/v1',
      providerName: 'openrouter-custom',
    });

    await client.chat({
      messages: [{ role: 'user', content: 'answer normally' }],
      config: { model: 'anthropic/claude-sonnet-4' },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.reasoning).toBeUndefined();
    expect(body.reasoning_effort).toBeUndefined();
    expect(body.thinking).toBeUndefined();
  });

  it('uses DeepSeek V4 thinking parameters without forcing OpenAI tool_choice', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://api.deepseek.com',
      providerName: 'deepseek-direct',
    });

    await client.chatWithTools({
      messages: [
        { role: 'assistant', content: 'I need a lookup.', reasoningContent: 'reasoned about the lookup' },
        { role: 'user', content: 'continue' },
      ],
      tools: [{ name: 'lookup', description: 'Lookup', inputSchema: { type: 'object' } }],
      config: { model: 'deepseek-v4-pro', reasoningEffort: 'xhigh' },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.thinking).toEqual({ type: 'enabled' });
    expect(body.reasoning_effort).toBe('max');
    expect(body.tool_choice).toBeUndefined();
    expect(body.messages[0].reasoning_content).toBe('reasoned about the lookup');
  });

  it('disables direct DeepSeek V4 thinking when reasoning effort is none', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://api.deepseek.com',
      providerName: 'deepseek-direct',
    });

    await client.chat({
      messages: [{ role: 'user', content: 'answer directly' }],
      config: { model: 'deepseek-v4-flash', reasoningEffort: 'none', disableThinking: true },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.thinking).toEqual({ type: 'disabled' });
    expect(body.reasoning_effort).toBeUndefined();
  });

  it('maps direct DeepSeek V4 lower thinking efforts to high', async () => {
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://api.deepseek.com',
      providerName: 'deepseek-direct',
    });

    await client.chat({
      messages: [{ role: 'user', content: 'think lightly' }],
      config: { model: 'deepseek-v4-flash', reasoningEffort: 'low' },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.thinking).toEqual({ type: 'enabled' });
    expect(body.reasoning_effort).toBe('high');
  });

  it('maps OpenAI-compatible cached and reasoning usage details', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: 'ok' } }],
        usage: {
          prompt_tokens: 10,
          completion_tokens: 7,
          total_tokens: 17,
          prompt_tokens_details: { cached_tokens: 4 },
          completion_tokens_details: { reasoning_tokens: 3 },
        },
      }),
    });
    const client = new OpenAICompatibleClient({
      apiKey: 'test-key',
      baseUrl: 'https://api.openai.test/v1',
      providerName: 'openai',
    });

    const response = await client.chat({
      messages: [{ role: 'user', content: 'hello' }],
      config: { model: 'gpt-test' },
    });

    expect(response.usage).toMatchObject({
      promptTokens: 10,
      completionTokens: 7,
      totalTokens: 17,
      cacheHitTokens: 4,
      reasoningOutputTokens: 3,
    });
  });
});

describe('AnthropicClient', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('translates system messages, tools, and tool results to Anthropic messages format', async () => {
    const fetchMock = vi.fn(async () => ({
      ok: true,
      json: async () => ({
        content: [
          { type: 'text', text: 'done' },
          { type: 'tool_use', id: 'toolu_1', name: 'search', input: { q: 'x' } },
        ],
        usage: { input_tokens: 4, output_tokens: 6 },
        model: 'claude-test',
      }),
    }));
    vi.stubGlobal('fetch', fetchMock);

    const client = new AnthropicClient({ apiKey: 'anthropic-key' });
    const response = await client.chatWithTools({
      messages: [
        { role: 'system', content: 'be concise' },
        { role: 'user', content: 'hello' },
        { role: 'tool', toolCallId: 'toolu_prev', content: 'tool output' },
      ],
      tools: [{ name: 'search', description: 'Search', inputSchema: { type: 'object' } }],
      config: { model: 'claude-test' },
    });

    const [url, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(url).toBe('https://api.anthropic.com/v1/messages');
    expect(init.headers['x-api-key']).toBe('anthropic-key');
    expect(init.headers['anthropic-version']).toBe('2023-06-01');
    expect(body.system).toBe('be concise');
    expect(body.messages[1]).toEqual({
      role: 'user',
      content: [{ type: 'tool_result', tool_use_id: 'toolu_prev', content: 'tool output' }],
    });
    expect(body.tools[0].input_schema).toEqual({ type: 'object' });
    expect(response.content).toBe('done');
    expect(response.toolCalls?.[0]).toEqual({ id: 'toolu_1', name: 'search', args: { q: 'x' } });
    expect(response.usage?.totalTokens).toBe(10);
  });

  it('sends Anthropic OAuth tokens as bearer auth for health and messages', async () => {
    const fetchMock = vi.fn(async (url: string) => ({
      ok: true,
      status: 200,
      json: async () => url.endsWith('/models')
        ? { data: [] }
        : {
            content: [{ type: 'text', text: 'done' }],
            usage: { input_tokens: 4, output_tokens: 6 },
            model: 'claude-sonnet-4',
          },
    }));
    vi.stubGlobal('fetch', fetchMock);

    const client = createLLMClient({
      providerName: 'anthropic-oauth',
      providerKind: 'anthropic',
      authType: 'oauth',
      apiKey: 'oauth-token',
      baseUrl: 'https://api.anthropic.com/v1',
    });

    await expect(client.healthCheck()).resolves.toBe(true);
    await client.chat({
      messages: [{ role: 'user', content: 'hello' }],
      config: { model: 'claude-sonnet-4' },
    });

    const [modelsUrl, modelsInit] = fetchMock.mock.calls[0];
    const [messagesUrl, messagesInit] = fetchMock.mock.calls[1];
    expect(modelsUrl).toBe('https://api.anthropic.com/v1/models');
    expect(modelsInit.headers.Authorization).toBe('Bearer oauth-token');
    expect(modelsInit.headers['x-api-key']).toBeUndefined();
    expect(messagesUrl).toBe('https://api.anthropic.com/v1/messages');
    expect(messagesInit.headers.Authorization).toBe('Bearer oauth-token');
    expect(messagesInit.headers['x-api-key']).toBeUndefined();
  });

  it('classifies Anthropic rate limits with provider and retry-after metadata', async () => {
    const fetchMock = vi.fn(async () => ({
      ok: false,
      status: 429,
      headers: new Headers({ 'retry-after': '3' }),
      text: async () => JSON.stringify({ error: { code: 'rate_limit' } }),
    }));
    vi.stubGlobal('fetch', fetchMock);

    const client = new AnthropicClient({
      apiKey: 'anthropic-key',
      providerName: 'anthropic-test',
      maxRetries: 1,
    });

    await expect(client.chat({
      messages: [{ role: 'user', content: 'hello' }],
      config: { model: 'claude-test' },
    })).rejects.toMatchObject({
      name: 'RateLimitError',
      provider: 'anthropic-test',
      retryAfterMs: 3000,
    } satisfies Partial<RateLimitError>);
  });

  it('maps reasoning effort to Anthropic thinking budgets for non-tool calls', async () => {
    const fetchMock = vi.fn(async () => ({
      ok: true,
      json: async () => ({
        content: [{ type: 'text', text: 'done' }],
        usage: { input_tokens: 4, output_tokens: 6 },
        model: 'claude-test',
      }),
    }));
    vi.stubGlobal('fetch', fetchMock);

    const client = new AnthropicClient({ apiKey: 'anthropic-key' });
    await client.chat({
      messages: [{ role: 'user', content: 'analyze deeply' }],
      config: { model: 'claude-test', maxTokens: 10000, reasoningEffort: 'medium' },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.thinking).toEqual({ type: 'enabled', budget_tokens: 8192 });
    expect(body.max_tokens).toBe(10000);
  });

  it('uses Anthropic adaptive thinking for models that require it', async () => {
    const fetchMock = vi.fn(async () => ({
      ok: true,
      json: async () => ({
        content: [{ type: 'text', text: 'done' }],
        usage: { input_tokens: 4, output_tokens: 6 },
        model: 'claude-opus-4-7',
      }),
    }));
    vi.stubGlobal('fetch', fetchMock);

    const client = new AnthropicClient({ apiKey: 'anthropic-key' });
    await client.chat({
      messages: [{ role: 'user', content: 'analyze deeply' }],
      config: { model: 'claude-opus-4-7', maxTokens: 10000, reasoningEffort: 'xhigh' },
    });

    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.thinking).toEqual({ type: 'adaptive' });
    expect(body.output_config).toEqual({ effort: 'xhigh' });
    expect(body.max_tokens).toBe(10000);
  });
});

describe('CodexSdkClient', () => {
  beforeEach(() => {
    codexSdkMock.Codex.mockReset();
    codexSdkMock.startThread.mockReset();
    codexSdkMock.Codex.mockImplementation(() => ({
      startThread: codexSdkMock.startThread,
    }));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('runs streamed SDK calls with read-only native options and maps final response usage', async () => {
    const runStreamed = mockCodexRun([
      { type: 'thread.started', thread_id: 'thread-1' },
      { type: 'turn.started' },
      { type: 'item.completed', item: { id: 'msg-1', type: 'agent_message', text: '{"ok":true}' } },
      {
        type: 'turn.completed',
        usage: {
          input_tokens: 10,
          cached_input_tokens: 4,
          output_tokens: 6,
          reasoning_output_tokens: 2,
        },
      },
    ]);
    const client = new CodexSdkClient({ workingDirectory: '/tmp/harness-test' });

    const response = await client.chat({
      messages: [
        { role: 'system', content: 'Be exact.' },
        { role: 'user', content: 'Return JSON.' },
      ],
      config: {
        model: 'gpt-5.5',
        reasoningEffort: 'high',
        jsonSchema: {
          name: 'test_response',
          schema: { type: 'object', properties: { ok: { type: 'boolean' } }, required: ['ok'] },
          strict: true,
        },
      },
    });

    expect(response.content).toBe('{"ok":true}');
    expect(response.usage).toEqual({
      promptTokens: 10,
      completionTokens: 6,
      totalTokens: 16,
      cacheHitTokens: 4,
      reasoningOutputTokens: 2,
    });
    expect(codexSdkMock.startThread).toHaveBeenCalledWith({
      model: 'gpt-5.5',
      sandboxMode: 'read-only',
      workingDirectory: '/tmp/harness-test',
      modelReasoningEffort: 'high',
      networkAccessEnabled: false,
      webSearchMode: 'disabled',
      webSearchEnabled: false,
      approvalPolicy: 'never',
      additionalDirectories: [],
    });
    expect(codexSdkMock.Codex).toHaveBeenCalledWith({
      codexPathOverride: undefined,
      env: expect.objectContaining({
        HOME: expect.any(String),
        PATH: expect.any(String),
      }),
    });
    expect(runStreamed.mock.calls[0][1].outputSchema).toEqual({
      type: 'object',
      properties: { ok: { type: 'boolean' } },
      required: ['ok'],
    });
  });

  it('hard-times out streamed SDK calls when the stream ignores abort', async () => {
    vi.useFakeTimers();
    try {
      const runStreamed = vi.fn(async () => ({
        events: neverEventStream(),
      }));
      codexSdkMock.startThread.mockReturnValue({ runStreamed });
      const client = new CodexSdkClient({ timeoutMs: 10 });

      const response = client.chat({
        messages: [{ role: 'user', content: 'hang' }],
        config: { model: 'gpt-5.5' },
      });
      const assertion = expect(response).rejects.toThrow('Request timed out after 10ms');

      await Promise.resolve();
      await vi.advanceTimersByTimeAsync(10);

      await assertion;
    } finally {
      vi.useRealTimers();
    }
  });

  it('configures the Harness MCP server when tools are provided', async () => {
    const runStreamed = mockCodexRun([
      { type: 'item.completed', item: { id: 'msg-1', type: 'agent_message', text: 'used tools' } },
    ]);
    const client = new CodexSdkClient({
      workingDirectory: '/tmp/harness-test',
      matterName: 'case-1',
      harnessMcpServerPath: '/tmp/harness-mcp.js',
      codexToolStrategy: 'mcp',
    });

    const response = await client.chatWithTools({
      messages: [{ role: 'user', content: 'use a tool' }],
      tools: [{ name: 'search', description: 'Search', inputSchema: { type: 'object' } }],
      config: { model: 'gpt-5.5' },
    });

    expect(response.content).toBe('used tools');
    expect(codexSdkMock.Codex).toHaveBeenCalledWith(expect.objectContaining({
      config: {
        mcp_servers: {
          harness: {
            command: process.execPath,
            args: ['/tmp/harness-mcp.js'],
            env: expect.objectContaining({
              ATTICUS_HARNESS_MCP: '1',
              ATTICUS_HARNESS_CWD: '/tmp/harness-test',
              ATTICUS_HARNESS_MATTER_NAME: 'case-1',
            }),
          },
        },
      },
    }));
    const mcpEnv = codexSdkMock.Codex.mock.calls[0][0].config.mcp_servers.harness.env;
    expect(JSON.parse(mcpEnv.ATTICUS_HARNESS_MCP_TOOLS)).toEqual(['search']);
    expect(codexSdkMock.startThread).toHaveBeenCalledWith(expect.objectContaining({
      sandboxMode: 'workspace-write',
      networkAccessEnabled: false,
      webSearchMode: 'disabled',
      webSearchEnabled: false,
    }));
    expect(runStreamed.mock.calls[0][0]).toContain('HARNESS MCP TOOLS');
    expect(runStreamed.mock.calls[0][0]).toContain('Do not use Codex native web/search');
    expect(runStreamed.mock.calls[0][0]).toContain('"name": "search"');
  });

  it('enables native Codex web only when autonomy approves web in MCP mode', async () => {
    mockCodexRun([
      { type: 'item.completed', item: { id: 'msg-1', type: 'agent_message', text: 'used tools' } },
    ]);
    const client = new CodexSdkClient({
      workingDirectory: '/tmp/harness-test',
      matterName: 'case-1',
      harnessMcpServerPath: '/tmp/harness-mcp.js',
      codexToolStrategy: 'mcp',
      autonomy: {
        ...DEFAULTS.autonomy,
        autoApproveWeb: true,
      },
    });

    await client.chatWithTools({
      messages: [{ role: 'user', content: 'use a tool' }],
      tools: [{ name: 'search', description: 'Search', inputSchema: { type: 'object' } }],
      config: { model: 'gpt-5.5' },
    });

    expect(codexSdkMock.startThread).toHaveBeenCalledWith(expect.objectContaining({
      sandboxMode: 'workspace-write',
      networkAccessEnabled: true,
      webSearchMode: 'live',
      webSearchEnabled: true,
    }));
  });

  it('uses Harness-owned JSON tool calls by default instead of configuring MCP', async () => {
    const runStreamed = mockCodexRun([
      {
        type: 'item.completed',
        item: {
          id: 'msg-1',
          type: 'agent_message',
          text: '{"type":"tool_calls","toolCalls":[{"name":"matter_inventory","args":{"view":"manifest","limit":1}}]}',
        },
      },
    ]);
    const client = new CodexSdkClient({
      workingDirectory: '/tmp/harness-test',
      matterName: 'case-1',
      harnessMcpServerPath: '/tmp/harness-mcp.js',
    });

    const response = await client.chatWithTools({
      messages: [{ role: 'user', content: 'inspect the matter' }],
      tools: [{ name: 'matter_inventory', description: 'Inventory', inputSchema: { type: 'object' } }],
      config: { model: 'gpt-5.5' },
    });

    expect(response.content).toBe('');
    expect(response.toolCalls).toEqual([{
      id: 'codex_tool_1',
      name: 'matter_inventory',
      args: { view: 'manifest', limit: 1 },
    }]);
    expect(codexSdkMock.Codex).toHaveBeenCalledWith(expect.not.objectContaining({
      config: expect.anything(),
    }));
    expect(codexSdkMock.startThread).toHaveBeenCalledWith(expect.objectContaining({
      sandboxMode: 'read-only',
      networkAccessEnabled: false,
      webSearchMode: 'disabled',
      webSearchEnabled: false,
    }));
    expect(runStreamed.mock.calls[0][0]).toContain('HARNESS-OWNED TOOL PROTOCOL');
    expect(runStreamed.mock.calls[0][0]).not.toContain('HARNESS MCP TOOLS');
    expect(runStreamed.mock.calls[0][1].outputSchema.properties.type.enum).toEqual(['tool_calls', 'final']);
  });

  it('unwraps Harness-owned final result objects for downstream structured parsing', async () => {
    mockCodexRun([
      {
        type: 'item.completed',
        item: {
          id: 'msg-1',
          type: 'agent_message',
          text: '{"type":"final","result":{"status":"completed","summary":"done","findings":[],"risks":[],"proposedTasks":[],"artifactIds":[],"nextActions":[]}}',
        },
      },
    ]);
    const client = new CodexSdkClient();

    const response = await client.chatWithTools({
      messages: [{ role: 'user', content: 'finish' }],
      tools: [{ name: 'evidence_search', description: 'Search', inputSchema: { type: 'object' } }],
      config: { model: 'gpt-5.5' },
    });

    expect(JSON.parse(response.content)).toMatchObject({
      status: 'completed',
      summary: 'done',
    });
    expect(response.toolCalls).toBeUndefined();
  });

  it('rejects native Codex actions in Harness-owned tool mode', async () => {
    mockCodexRun([
      {
        type: 'item.completed',
        item: {
          id: 'native-1',
          type: 'command_execution',
          command: 'harness status',
          aggregated_output: '',
          status: 'completed',
        },
      },
      {
        type: 'item.completed',
        item: {
          id: 'msg-1',
          type: 'agent_message',
          text: '{"type":"final","content":"done"}',
        },
      },
    ]);
    const client = new CodexSdkClient();

    await expect(client.chatWithTools({
      messages: [{ role: 'user', content: 'finish' }],
      tools: [{ name: 'evidence_search', description: 'Search', inputSchema: { type: 'object' } }],
      config: { model: 'gpt-5.5' },
    })).rejects.toThrow('attempted native CLI action');
  });

  it('can wrap the Codex CLI with the bypass flag for native MCP exec mode', async () => {
    mockCodexRun([
      { type: 'item.completed', item: { id: 'msg-1', type: 'agent_message', text: 'used tools' } },
    ]);
    const client = new CodexSdkClient({
      codexPathOverride: '/tmp/codex-real',
      codexToolStrategy: 'mcp',
      dangerouslyBypassApprovalsAndSandbox: true,
    });

    await client.chatWithTools({
      messages: [{ role: 'user', content: 'use a tool' }],
      tools: [{ name: 'matter_inventory', description: 'Inventory', inputSchema: { type: 'object' } }],
      config: { model: 'gpt-5.5' },
    });

    const options = codexSdkMock.Codex.mock.calls[0][0];
    expect(options.codexPathOverride).toContain('codex-dangerous-bypass-wrapper.sh');
    const wrapper = readFileSync(options.codexPathOverride, 'utf8');
    expect(wrapper).toContain('/tmp/codex-real');
    expect(wrapper).toContain('--dangerously-bypass-approvals-and-sandbox');
  });

  it.each([
    ['command_execution', { command: 'pwd', aggregated_output: '', status: 'in_progress' }],
    ['file_change', { changes: [{ path: 'x', kind: 'update' }], status: 'completed' }],
    ['mcp_tool_call', { server: 'srv', tool: 'lookup', arguments: {}, status: 'in_progress' }],
    ['web_search', { query: 'latest rule' }],
  ])('records native Codex %s events without failing the run', async (type, payload) => {
    mockCodexRun([
      { type: 'item.started', item: { id: 'native-1', type, ...payload } },
      { type: 'item.completed', item: { id: 'msg-1', type: 'agent_message', text: 'done' } },
    ]);
    const client = new CodexSdkClient();

    const response = await client.chat({
      messages: [{ role: 'user', content: 'hello' }],
      config: { model: 'gpt-5.5' },
    });

    expect(response.content).toBe('done');
    expect(response.nativeActions?.[0]).toMatchObject({
      id: 'native-1',
      type,
    });
  });

  it('does not pass Harness provider secrets into the Codex child environment', async () => {
    const original = {
      OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
      ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
      CODEX_TOKEN: process.env.CODEX_TOKEN,
    };
    process.env.OPENROUTER_API_KEY = 'openrouter-secret';
    process.env.OPENAI_API_KEY = 'openai-secret';
    process.env.DEEPSEEK_API_KEY = 'deepseek-secret';
    process.env.ANTHROPIC_API_KEY = 'anthropic-secret';
    process.env.CODEX_TOKEN = 'codex-secret';
    mockCodexRun([
      { type: 'item.completed', item: { id: 'msg-1', type: 'agent_message', text: 'ok' } },
    ]);
    const client = new CodexSdkClient();

    try {
      await client.chat({
        messages: [{ role: 'user', content: 'hello' }],
        config: { model: 'gpt-5.5' },
      });

      const options = codexSdkMock.Codex.mock.calls[0][0];
      expect(options.env.OPENROUTER_API_KEY).toBeUndefined();
      expect(options.env.OPENAI_API_KEY).toBeUndefined();
      expect(options.env.DEEPSEEK_API_KEY).toBeUndefined();
      expect(options.env.ANTHROPIC_API_KEY).toBeUndefined();
      expect(options.env.CODEX_TOKEN).toBeUndefined();
      expect(options.env.HOME).toBe(process.env.HOME);
    } finally {
      for (const [key, value] of Object.entries(original)) {
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
      }
    }
  });
});

describe('model delegation prompt builder', () => {
  const profile = {
    label: 'codex-sdk',
    preset: 'codex-sdk',
    baseUrl: 'codex://local',
    models: {
      fast: 'gpt-fast',
      reasoning: 'gpt-reasoning',
      drafting: 'gpt-drafting',
      reviewer: 'gpt-reviewer',
      citation: 'gpt-citation',
      cheap: 'gpt-cheap',
    },
  };

  it('builds a cost-free model delegation prompt', () => {
    const prompt = buildModelDelegationPrompt(profile);
    expect(prompt).toContain('codex-sdk');
    expect(prompt).toContain('- reasoning');
    expect(prompt).not.toMatch(/\$|cost|price|pricing|currency/i);
  });

  it('selects models by task family with fallback', () => {
    expect(selectModelForTask('research', profile)).toBe('gpt-reasoning');
    expect(selectModelForTask('letter', profile)).toBe('gpt-drafting');
    expect(selectModelForTask('hostile-review', profile)).toBe('gpt-reviewer');
    expect(selectModelForTask('unknown', profile)).toBe('gpt-fast');
  });
});

function mockCodexRun(events: Array<Record<string, unknown>>): ReturnType<typeof vi.fn> {
  const runStreamed = vi.fn(async () => ({
    events: eventStream(events),
  }));
  codexSdkMock.startThread.mockReturnValue({ runStreamed });
  return runStreamed;
}

async function* eventStream(events: Array<Record<string, unknown>>): AsyncGenerator<Record<string, unknown>> {
  for (const event of events) {
    yield event;
  }
}

async function* neverEventStream(): AsyncGenerator<Record<string, unknown>> {
  await new Promise(() => {});
}
