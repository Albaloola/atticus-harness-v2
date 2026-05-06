import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { OpenRouterClient } from '../../src/llm/client.ts';
import { evaluateProviderPolicy } from '../../src/config/provider-policy.ts';
import { DEFAULTS } from '../../src/config/schema.ts';

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
});
