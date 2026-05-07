import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { loadGlobalConfig, resolveConfig } from '../../src/config/loader.ts';
import { resolveProviderAuth, assertProviderReady } from '../../src/config/auth.ts';
import { PROVIDER_PRESETS } from '../../src/config/presets.ts';
import { DEFAULTS } from '../../src/config/schema.ts';

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
    expect(config.profiles['openrouter-deepseek'].models.reasoning).toBe('deepseek/deepseek-v4-pro');
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
});
