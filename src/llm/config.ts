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

export function getDefaultModels(): { flash: string; pro: string } {
  return {
    flash: DEFAULT_MODEL,
    pro: PRO_MODEL,
  };
}
