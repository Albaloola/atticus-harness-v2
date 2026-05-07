import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { OpenAICompatibleClient, AnthropicClient } from '../../src/llm/index.ts';
import { buildModelDelegationPrompt, selectModelForTask } from '../../src/llm/prompt-builder.ts';

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
});

describe('model delegation prompt builder', () => {
  const profile = {
    label: 'openai-codex-oauth',
    preset: 'openai-codex-oauth',
    baseUrl: 'https://api.openai.com/v1',
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
    expect(prompt).toContain('openai-codex-oauth');
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
