import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
const codexReadinessMock = vi.hoisted(() => ({
  checkCodexLoginStatus: vi.fn(),
}));

vi.mock('../../src/config/codex-readiness.ts', () => ({
  checkCodexLoginStatus: codexReadinessMock.checkCodexLoginStatus,
}));

import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { loadGlobalConfig, resolveConfig } from '../../src/config/loader.ts';
import { resolveProviderAuth, assertProviderReady } from '../../src/config/auth.ts';
import { PROVIDER_PRESETS } from '../../src/config/presets.ts';
import { DEFAULTS, type ProviderProfile } from '../../src/config/schema.ts';
import {
  handleProviderList,
  handleProviderModelSet,
  handleProviderReasoningReset,
  handleProviderReasoningSet,
  handleProviderReasoningShow,
  handleProviderSelect,
} from '../../src/commands/provider.ts';

const ENV_KEYS = ['OPENROUTER_API_KEY', 'OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'DEEPSEEK_API_KEY', 'CODEX_TOKEN', 'ANTHROPIC_AUTH_TOKEN'] as const;

describe('provider profiles and auth preflight', () => {
  let tmpHome: string;
  let originalHome: string | undefined;
  let originalEnv: Partial<Record<(typeof ENV_KEYS)[number], string | undefined>>;

  beforeEach(() => {
    tmpHome = mkdtempSync(join(tmpdir(), 'harness-provider-home-'));
    originalHome = process.env.HOME;
    originalEnv = Object.fromEntries(ENV_KEYS.map((key) => [key, process.env[key]]));
    process.env.HOME = tmpHome;
    for (const key of ENV_KEYS) delete process.env[key];
    codexReadinessMock.checkCodexLoginStatus.mockReset();
    codexReadinessMock.checkCodexLoginStatus.mockResolvedValue({
      ok: true,
      status: 'ok',
      message: 'Logged in using ChatGPT',
    });
    vi.unstubAllGlobals();
  });

  afterEach(() => {
    if (originalHome === undefined) delete process.env.HOME;
    else process.env.HOME = originalHome;
    for (const key of ENV_KEYS) {
      const value = originalEnv[key];
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    vi.unstubAllGlobals();
    rmSync(tmpHome, { recursive: true, force: true });
  });

  it('loads all built-in provider profiles while defaulting to OpenRouter DeepSeek', async () => {
    const { config, fromDisk } = await loadGlobalConfig();

    expect(fromDisk).toBe(false);
    expect(config.activeProvider).toBe('openrouter-deepseek');
    expect(Object.keys(config.profiles).sort()).toEqual(Object.keys(PROVIDER_PRESETS).sort());
    expect(config.profiles['codex-sdk'].authType).toBe('delegated');
    expect(config.profiles['codex-sdk'].agentCapable).toBe(true);
    expect(config.profiles['openai-codex-oauth']).toBeUndefined();
    expect(config.profiles['openrouter-deepseek'].providerKind).toBe('openai-compatible');
    expect(config.profiles['openrouter-deepseek'].reasoningControl).toBe('openrouter-reasoning');
    expect(config.profiles['openrouter-deepseek'].openRouterProviderRouting).toEqual({
      only: ['DeepSeek'],
      allowFallbacks: false,
      requireParameters: true,
      dataCollection: 'deny',
    });
    expect(config.profiles['openrouter-deepseek'].inputModalities).toEqual(['text', 'file']);
    expect(config.profiles['openrouter-deepseek'].models.reasoning).toBe('deepseek/deepseek-v4-pro');
    expect(config.providerPolicy.defaultProvider).toBe('openrouter-deepseek');
    expect(config.providerPolicy.allowedProviders).toEqual(['openrouter-deepseek']);
    expect(config.profiles['anthropic-oauth'].providerKind).toBe('anthropic');
    expect(config.profiles['anthropic-oauth'].reasoningControl).toBe('anthropic-thinking');
    expect(config.profiles['anthropic-api-key'].providerKind).toBe('anthropic');
    expect(config.profiles['deepseek-direct'].providerKind).toBe('openai-compatible');
    expect(config.profiles['deepseek-direct'].reasoningControl).toBe('deepseek-thinking');
    expect(config.profiles['deepseek-direct'].models.reasoning).toBe('deepseek-v4-pro');
    expect(config.profiles['openrouter-custom'].providerKind).toBe('openai-compatible');
  });

  it('reports provider kind and tool lane in the provider list panel', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    try {
      await handleProviderList({ json: true });

      const output = JSON.parse(String(log.mock.calls[0][0])) as {
        reasoning: { source: string; display: string; control: string };
        profiles: Array<{ name: string; providerKind: string; toolSupport: string; reasoningControl: string }>;
      };
      expect(output.reasoning).toMatchObject({
        source: 'provider-default',
        display: 'provider default',
        control: 'openrouter-reasoning',
      });
      const byName = Object.fromEntries(output.profiles.map((profile) => [profile.name, profile]));
      expect(byName['openrouter-deepseek']).toMatchObject({ providerKind: 'openai-compatible', toolSupport: 'tool-capable', reasoningControl: 'openrouter-reasoning' });
      expect(byName['anthropic-api-key']).toMatchObject({ providerKind: 'anthropic', toolSupport: 'tool-capable', reasoningControl: 'anthropic-thinking' });
      expect(byName['codex-sdk']).toMatchObject({ providerKind: 'codex-sdk', toolSupport: 'Harness-owned tools via Codex', reasoningControl: 'codex-sdk' });
    } finally {
      log.mockRestore();
    }
  });

  it('configures global reasoning effort through the provider panel', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    try {
      await handleProviderReasoningShow({ json: true });
      let output = JSON.parse(String(log.mock.calls[0][0])) as {
        reasoning: { effort?: string; source: string; display: string; validEfforts: string[] };
      };
      expect(output.reasoning.effort).toBeUndefined();
      expect(output.reasoning.source).toBe('provider-default');
      expect(output.reasoning.validEfforts).toContain('xhigh');

      log.mockClear();
      await handleProviderReasoningSet('HIGH');
      let config = await resolveConfig();
      expect(config.reasoningEffort).toBe('high');

      log.mockClear();
      await handleProviderReasoningShow({ json: true });
      output = JSON.parse(String(log.mock.calls[0][0]));
      expect(output.reasoning).toMatchObject({
        effort: 'high',
        source: 'global',
        display: 'high',
      });

      await handleProviderReasoningReset();
      config = await resolveConfig();
      expect(config.reasoningEffort).toBeUndefined();
    } finally {
      log.mockRestore();
    }
  });

  it('rejects invalid reasoning effort values before saving them', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    try {
      await expect(handleProviderReasoningSet('turbo')).rejects.toThrow('Invalid reasoning effort');
      const config = await resolveConfig();
      expect(config.reasoningEffort).toBeUndefined();
    } finally {
      log.mockRestore();
    }
  });

  it('provider selection carries model routing and reasoning controls together', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    try {
      await handleProviderSelect('anthropic-api-key');
      const config = await resolveConfig();

      expect(config.providerName).toBe('anthropic-api-key');
      expect(config.provider.providerKind).toBe('anthropic');
      expect(config.provider.reasoningControl).toBe('anthropic-thinking');
      expect(config.providerPolicy.defaultProvider).toBe('anthropic-api-key');
      expect(config.providerPolicy.models.reasoning).toBe('claude-opus-4');
      expect(config.providerPolicy.allowedModels).toContain('claude-opus-4');
    } finally {
      log.mockRestore();
    }
  });

  it('model role edits preserve provider-native optimisation metadata', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    try {
      await handleProviderSelect('anthropic-api-key');
      await handleProviderModelSet('reasoning', 'claude-opus-4-7');
      const config = await resolveConfig();

      expect(config.profile.models.reasoning).toBe('claude-opus-4-7');
      expect(config.providerPolicy.models.reasoning).toBe('claude-opus-4-7');
      expect(config.provider.reasoningControl).toBe('anthropic-thinking');
      expect(config.provider.anthropicFormat).toBe(true);
      expect(config.providerPolicy.allowedModels).toContain('claude-opus-4-7');
    } finally {
      log.mockRestore();
    }
  });

  it('rejects incompatible model ids for direct provider profiles', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    try {
      await handleProviderSelect('deepseek-direct');

      await expect(handleProviderModelSet('fast', 'gpt-5.5')).rejects.toThrow(
        'Direct DeepSeek profiles expect deepseek-* model ids',
      );

      const config = await resolveConfig();
      expect(config.profile.models.fast).toBe('deepseek-v4-flash');
      expect(config.provider.reasoningControl).toBe('deepseek-thinking');
    } finally {
      log.mockRestore();
    }
  });

  it('migrates legacy flat OpenRouter config into the default profile shape', async () => {
    const configDir = join(tmpHome, '.atticus-harness');
    mkdirSync(configDir, { recursive: true });
    const legacy = structuredClone(DEFAULTS);
    delete (legacy as Partial<typeof legacy>).profiles;
    legacy.providers.openrouter = {
      ...legacy.providers.openrouter,
      baseUrl: 'https://legacy.example/v1',
      fallbackModel: 'deepseek/deepseek-v4-pro',
    };
    legacy.providerPolicy.models.fast = 'legacy-fast-model';
    writeFileSync(join(configDir, 'config.json'), JSON.stringify(legacy), 'utf-8');

    const { config } = await loadGlobalConfig();

    expect(config.activeProvider).toBe('openrouter-deepseek');
    expect(config.profiles['openrouter-deepseek'].baseUrl).toBe('https://legacy.example/v1');
    expect(config.profiles['openrouter-deepseek'].models.fast).toBe('legacy-fast-model');
    expect(config.providers['openrouter-deepseek']).toBeDefined();
  });

  it('refreshes stale built-in profile metadata and model optimisations on load', async () => {
    const configDir = join(tmpHome, '.atticus-harness');
    mkdirSync(configDir, { recursive: true });
    const config = structuredClone(DEFAULTS);
    config.profiles['deepseek-direct'] = {
      name: 'deepseek-direct',
      label: 'DeepSeek direct',
      preset: 'deepseek-direct',
      authType: 'api-key',
      keyName: 'DEEPSEEK_API_KEY',
      baseUrl: 'https://api.deepseek.com',
      models: {
        fast: 'old-fast',
        reasoning: 'old-reasoning',
        drafting: 'old-drafting',
        reviewer: 'old-reviewer',
        citation: 'old-citation',
        cheap: 'old-cheap',
      },
      fallbackModel: 'old-fallback',
      isCustom: false,
    };
    config.activeProvider = 'deepseek-direct';
    writeFileSync(join(configDir, 'config.json'), JSON.stringify(config), 'utf-8');

    const { config: loaded } = await loadGlobalConfig();

    expect(loaded.profiles['deepseek-direct'].providerKind).toBe('openai-compatible');
    expect(loaded.profiles['deepseek-direct'].reasoningControl).toBe('deepseek-thinking');
    expect(loaded.profiles['deepseek-direct'].models.fast).toBe('deepseek-v4-flash');
    expect(loaded.profiles['deepseek-direct'].models.reasoning).toBe('deepseek-v4-pro');
  });

  it('fails closed when raw config contains incompatible selected profile models', async () => {
    const configDir = join(tmpHome, '.atticus-harness');
    mkdirSync(configDir, { recursive: true });
    const config = structuredClone(DEFAULTS);
    const deepseek = structuredClone(PROVIDER_PRESETS['deepseek-direct']);
    config.activeProvider = 'deepseek-direct';
    config.profiles['deepseek-direct'] = {
      ...deepseek,
      models: {
        ...deepseek.models,
        fast: 'gpt-5.5',
      },
      isCustom: true,
    };
    writeFileSync(join(configDir, 'config.json'), JSON.stringify(config), 'utf-8');

    await expect(resolveConfig()).rejects.toThrow('Direct DeepSeek profiles expect deepseek-* model ids');
  });

  it('resolves API keys from harness secrets before environment variables', async () => {
    const configDir = join(tmpHome, '.atticus-harness');
    mkdirSync(configDir, { recursive: true });
    writeFileSync(join(configDir, 'secrets.env'), 'OPENAI_API_KEY=secret-openai-key\n', 'utf-8');
    process.env.OPENAI_API_KEY = 'env-openai-key';

    const auth = await resolveProviderAuth(PROVIDER_PRESETS['openai-api-key']);

    expect(auth.status).toBe('ok');
    expect(auth.token).toBe('secret-openai-key');
    expect(auth.source).toBe('secrets:OPENAI_API_KEY');
  });

  it('fails strict resolution immediately when auth is missing', async () => {
    const configDir = join(tmpHome, '.atticus-harness');
    mkdirSync(configDir, { recursive: true });
    const config = structuredClone(DEFAULTS);
    config.activeProvider = 'openai-api-key';
    writeFileSync(join(configDir, 'config.json'), JSON.stringify(config), 'utf-8');

    await expect(resolveConfig({ strict: true })).rejects.toThrow('No API key configured for provider "openai-api-key"');
  });

  it('maps health-check auth rejection to a provider preflight error without leaking secrets', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: false, status: 401 })));
    const profile = PROVIDER_PRESETS['openai-api-key'];
    const configDir = join(tmpHome, '.atticus-harness');
    mkdirSync(configDir, { recursive: true });
    writeFileSync(join(configDir, 'secrets.env'), 'OPENAI_API_KEY=super-secret\n', 'utf-8');

    await expect(assertProviderReady(profile)).rejects.toThrow('rejected the configured credentials');
    await expect(assertProviderReady(profile)).rejects.not.toThrow('super-secret');
  });

  it('uses delegated Codex CLI readiness without storing a token', async () => {
    const auth = await resolveProviderAuth(PROVIDER_PRESETS['codex-sdk']);

    expect(auth.status).toBe('ok');
    expect(auth.token).toBeUndefined();
    expect(auth.source).toBe('codex-cli');
    const ready = await assertProviderReady(PROVIDER_PRESETS['codex-sdk']);
    expect(ready).toMatchObject({ status: 'ok' });
    expect(ready?.token).toBeUndefined();
    expect(codexReadinessMock.checkCodexLoginStatus).toHaveBeenCalled();
  });

  it('maps missing Codex CLI login to an actionable delegated auth error', async () => {
    codexReadinessMock.checkCodexLoginStatus.mockResolvedValue({
      ok: false,
      status: 'missing',
      message: 'Not logged in. Run: codex login',
    });

    const auth = await resolveProviderAuth(PROVIDER_PRESETS['codex-sdk']);

    expect(auth.status).toBe('missing');
    expect(auth.message).toContain('codex login');
    await expect(assertProviderReady(PROVIDER_PRESETS['codex-sdk'])).rejects.toThrow('codex login');
  });

  it('rejects stale Codex OAuth profile references with migration guidance', async () => {
    await expect(resolveConfig({ providerName: 'openai-codex-oauth' })).rejects.toThrow('Provider "openai-codex-oauth" has been removed');
    await expect(resolveConfig({ providerName: 'openai-codex-oauth' })).rejects.toThrow('Use the codex-sdk provider');
  });

  it('rejects custom Codex OAuth profiles instead of accepting CODEX_TOKEN', async () => {
    const profile: ProviderProfile = {
      name: 'custom-codex-oauth',
      label: 'Custom Codex OAuth',
      preset: 'custom-codex-oauth',
      providerKind: 'openai-compatible',
      authType: 'oauth',
      oauthProvider: 'codex',
      baseUrl: 'https://api.openai.com/v1',
      models: DEFAULTS.providerPolicy.models,
      fallbackModel: DEFAULTS.providerPolicy.models.reasoning,
      isCustom: true,
    };
    process.env.CODEX_TOKEN = 'do-not-use-this';

    const auth = await resolveProviderAuth(profile);

    expect(auth.status).toBe('unsupported');
    expect(auth.message).toContain('Use the codex-sdk provider');
    expect(auth.message).not.toContain('CODEX_TOKEN');

    const configDir = join(tmpHome, '.atticus-harness');
    mkdirSync(configDir, { recursive: true });
    const config = structuredClone(DEFAULTS);
    config.profiles[profile.name] = profile;
    config.activeProvider = profile.name;
    writeFileSync(join(configDir, 'config.json'), JSON.stringify(config), 'utf-8');

    await expect(resolveConfig({ providerName: profile.name })).rejects.toThrow('Use the codex-sdk provider');
  });
});
