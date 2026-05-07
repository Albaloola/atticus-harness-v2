import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { AnthropicClient, CodexSdkClient, OpenRouterClient, createLLMClient } from '../../src/llm/index.ts';
import { resolveConfig } from '../../src/config/loader.ts';
import { evaluateProviderPolicy } from '../../src/config/provider-policy.ts';
import { DEFAULTS } from '../../src/config/schema.ts';
import { initMatter, deleteMatter } from '../../src/storage/matter.ts';
import { closeAllStateDbs } from '../../src/state/store.ts';

describe('OpenRouterClient config resolution', () => {
  let tmpHome: string;
  let originalHome: string | undefined;
  let originalKey: string | undefined;
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    tmpHome = mkdtempSync(join(tmpdir(), 'harness-home-'));
    originalHome = process.env.HOME;
    originalKey = process.env.OPENROUTER_API_KEY;
    delete process.env.OPENROUTER_API_KEY;
    process.env.HOME = tmpHome;
    fetchMock = vi.fn(async () => ({
      ok: true,
      json: async () => ({
        choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: 'ok' } }],
      }),
    }));
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    if (originalHome === undefined) delete process.env.HOME;
    else process.env.HOME = originalHome;
    if (originalKey === undefined) delete process.env.OPENROUTER_API_KEY;
    else process.env.OPENROUTER_API_KEY = originalKey;
    vi.unstubAllGlobals();
    closeAllStateDbs();
    rmSync(tmpHome, { recursive: true, force: true });
  });

  it('uses OPENROUTER_API_KEY from the harness secrets store when env is absent', async () => {
    const configDir = join(tmpHome, '.atticus-harness');
    mkdirSync(configDir, { recursive: true });
    writeFileSync(join(configDir, 'secrets.env'), 'OPENROUTER_API_KEY=secret-store-key\n', 'utf-8');

    const client = new OpenRouterClient();
    await client.chat({
      messages: [{ role: 'user', content: 'hello' }],
      config: { model: 'deepseek/deepseek-v4-flash' },
    });

    expect(fetchMock).toHaveBeenCalledOnce();
    const [, init] = fetchMock.mock.calls[0];
    expect(init.headers.Authorization).toBe('Bearer secret-store-key');
  });

  it('fails closed for unknown provider models', () => {
    const decision = evaluateProviderPolicy({
      policy: DEFAULTS.providerPolicy,
      providers: DEFAULTS.providers,
      providerName: 'openrouter',
      model: 'unlisted/model',
    });
    expect(decision.allowed).toBe(false);
    expect(decision.reason).toContain('allow-list');
  });

  it('denies explicit fallback unless policy allows fallback', () => {
    const decision = evaluateProviderPolicy({
      policy: DEFAULTS.providerPolicy,
      providers: DEFAULTS.providers,
      providerName: 'openrouter',
      model: DEFAULTS.providerPolicy.models.reasoning,
      requestedFallback: true,
    });
    expect(decision.allowed).toBe(false);
    expect(decision.reason).toContain('fallback');
  });

  it('constructs a CodexSdkClient for codex-sdk provider configs', () => {
    const client = createLLMClient({
      providerName: 'codex-sdk',
      provider: {
        providerKind: 'codex-sdk',
        authType: 'delegated',
        delegatedAuthProvider: 'codex-cli',
        baseUrl: 'codex://local',
      },
      profile: {
        name: 'codex-sdk',
        label: 'Codex SDK',
        preset: 'codex-sdk',
        providerKind: 'codex-sdk',
        authType: 'delegated',
        delegatedAuthProvider: 'codex-cli',
        baseUrl: 'codex://local',
        models: DEFAULTS.providerPolicy.models,
        isCustom: false,
      },
      activeProfile: undefined,
      providerPolicy: DEFAULTS.providerPolicy,
      model: 'gpt-5.5',
      autonomy: DEFAULTS.autonomy,
      toolPolicy: DEFAULTS.toolPolicy,
      fromDisk: false,
    });

    expect(client).toBeInstanceOf(CodexSdkClient);
    expect(client.capabilities?.tools).toBe(false);
  });

  it('constructs an AnthropicClient for anthropic provider configs', () => {
    const client = createLLMClient({
      providerName: 'anthropic-api-key',
      provider: {
        providerKind: 'anthropic',
        authType: 'api-key',
        keyName: 'ANTHROPIC_API_KEY',
        baseUrl: 'https://api.anthropic.com/v1',
      },
      profile: {
        name: 'anthropic-api-key',
        label: 'Anthropic API key',
        preset: 'anthropic-api-key',
        providerKind: 'anthropic',
        authType: 'api-key',
        keyName: 'ANTHROPIC_API_KEY',
        baseUrl: 'https://api.anthropic.com/v1',
        models: DEFAULTS.providerPolicy.models,
        isCustom: false,
      },
      activeProfile: undefined,
      providerPolicy: DEFAULTS.providerPolicy,
      model: 'claude-sonnet-4-5',
      autonomy: DEFAULTS.autonomy,
      toolPolicy: DEFAULTS.toolPolicy,
      fromDisk: false,
    });

    expect(client).toBeInstanceOf(AnthropicClient);
    expect(client.capabilities?.tools).toBe(true);
  });

  it('uses the Codex profile model instead of a legacy DeepSeek matter model when codex-sdk is explicit', async () => {
    const matterName = `codex-sdk-model-${Date.now()}`;
    await initMatter(matterName);

    try {
      const config = await resolveConfig({ matterName, providerName: 'codex-sdk' });

      expect(config.providerName).toBe('codex-sdk');
      expect(config.model).toBe('gpt-5.5');
      expect(config.model).not.toContain('deepseek/');
    } finally {
      await deleteMatter(matterName);
    }
  });
});
