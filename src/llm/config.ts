export const DEFAULT_MODEL = 'deepseek/deepseek-v4-flash';
export const PRO_MODEL = 'deepseek/deepseek-v4-pro';
export const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
export const CHAT_COMPLETIONS_PATH = '/chat/completions';

export interface ProviderConfig {
  apiKey?: string;
  baseUrl?: string;
  defaultModel?: string;
  timeoutMs?: number;
  maxRetries?: number;
}

export function loadConfig(): ProviderConfig {
  return {
    apiKey: process.env.OPENROUTER_API_KEY || '',
    baseUrl: OPENROUTER_BASE_URL,
    defaultModel: process.env.HARNESS_MODEL || DEFAULT_MODEL,
    timeoutMs: 180_000,
    maxRetries: 3,
  };
}

export async function loadConfigFromStore(): Promise<ProviderConfig> {
  try {
    const { resolveConfig } = await import('../config/loader.js');
    const resolved = await resolveConfig();

    return {
      apiKey:
        resolved.provider.apiKey ??
        process.env.OPENROUTER_API_KEY ??
        '',
      baseUrl: resolved.provider.baseUrl ?? OPENROUTER_BASE_URL,
      defaultModel: resolved.model ?? DEFAULT_MODEL,
      timeoutMs: resolved.provider.timeoutMs ?? 180_000,
      maxRetries: resolved.provider.maxRetries ?? 3,
    };
  } catch {
    return loadConfig();
  }
}

export function getDefaultModels(): { flash: string; pro: string } {
  return {
    flash: DEFAULT_MODEL,
    pro: PRO_MODEL,
  };
}
