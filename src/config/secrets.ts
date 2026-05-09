import { readFile } from 'fs/promises';
import { getSecretsPath } from './paths.js';
import { createPlaintextFileSecureStorage } from './secure-storage.js';

export async function loadSecrets(): Promise<Record<string, string>> {
  return createPlaintextFileSecureStorage(getSecretsPath()).loadEntries();
}

export async function getSecret(key: string): Promise<string | undefined> {
  return createPlaintextFileSecureStorage(getSecretsPath()).get(key);
}

export async function saveSecret(key: string, value: string): Promise<void> {
  await createPlaintextFileSecureStorage(getSecretsPath()).set(key, value);
}

export async function deleteSecret(key: string): Promise<void> {
  await createPlaintextFileSecureStorage(getSecretsPath()).delete(key);
}

export async function getOpenRouterKey(): Promise<string | undefined> {
  // Prioritize env var for backward compatibility
  if (process.env.OPENROUTER_API_KEY) {
    return process.env.OPENROUTER_API_KEY;
  }
  return getSecret('OPENROUTER_API_KEY');
}

export async function getProviderKey(provider: string): Promise<string | undefined> {
  const envKey = `${provider.toUpperCase()}_API_KEY`;
  if (process.env[envKey]) {
    return process.env[envKey];
  }
  return getSecret(envKey);
}


export async function getClaudeToken(): Promise<string | undefined> {
  if (process.env.ANTHROPIC_AUTH_TOKEN) {
    return process.env.ANTHROPIC_AUTH_TOKEN;
  }
  return getSecret('ANTHROPIC_AUTH_TOKEN');
}

export async function getOAuthToken(provider: 'codex' | 'claude-code' | string): Promise<string | undefined> {
  if (provider === 'codex') return undefined;
  if (provider === 'claude-code') return getClaudeToken();
  const envKey = `${provider.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_TOKEN`;
  if (process.env[envKey]) return process.env[envKey];
  return getSecret(envKey);
}

export async function getSearchApiKey(): Promise<string | undefined> {
  if (process.env.SEARCH_API_KEY) {
    return process.env.SEARCH_API_KEY;
  }
  return getSecret('SEARCH_API_KEY');
}

export async function getTavilyApiKey(): Promise<string | undefined> {
  if (process.env.TAVILY_API_KEY) {
    return process.env.TAVILY_API_KEY;
  }
  return getSecret('TAVILY_API_KEY');
}

export async function getBraveSearchApiKey(): Promise<string | undefined> {
  if (process.env.BRAVE_SEARCH_API_KEY) {
    return process.env.BRAVE_SEARCH_API_KEY;
  }
  return getSecret('BRAVE_SEARCH_API_KEY');
}


async function readTokenFile(filePath: string, keys: string[]): Promise<string | undefined> {
  try {
    const raw = await readFile(filePath, 'utf-8');
    try {
      const parsed = JSON.parse(raw) as unknown;
      return findTokenInJson(parsed, keys);
    } catch {
      for (const line of raw.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx === -1) {
          if (/^[A-Za-z0-9._~+/-]+$/.test(trimmed) && trimmed.length > 20) return trimmed;
          continue;
        }
        const key = trimmed.slice(0, eqIdx).trim();
        if (!keys.includes(key)) continue;
        let value = trimmed.slice(eqIdx + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        if (value) return value;
      }
    }
  } catch {
    // Missing or unreadable source credential files are not fatal.
  }
  return undefined;
}

function findTokenInJson(value: unknown, keys: string[]): string | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const record = value as Record<string, unknown>;
  for (const key of keys) {
    const found = record[key];
    if (typeof found === 'string' && found.trim()) return found.trim();
  }
  for (const nested of Object.values(record)) {
    const found = findTokenInJson(nested, keys);
    if (found) return found;
  }
  return undefined;
}
