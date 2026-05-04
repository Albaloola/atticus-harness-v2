import { readFile, writeFile, mkdir, chmod, access } from 'fs/promises';
import { constants } from 'fs';
import { getConfigDir, getSecretsPath } from './paths.js';

const SECRETS_FILE_MODE = 0o600;

export async function loadSecrets(): Promise<Record<string, string>> {
  const secretsPath = getSecretsPath();
  const entries: Record<string, string> = {};

  try {
    const content = await readFile(secretsPath, 'utf-8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (trimmed === '' || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      let value = trimmed.slice(eqIdx + 1).trim();
      // Strip surrounding quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      entries[key] = value;
    }
  } catch {
    // File doesn't exist — return empty
  }

  return entries;
}

export async function getSecret(key: string): Promise<string | undefined> {
  const secrets = await loadSecrets();
  return secrets[key];
}

export async function saveSecret(key: string, value: string): Promise<void> {
  const secrets = await loadSecrets();
  secrets[key] = value;

  await ensureConfigDir();

  const lines = Object.entries(secrets).map(
    ([k, v]) => `${k}=${quoteValue(v)}`
  );
  const content = lines.join('\n') + '\n';

  const secretsPath = getSecretsPath();
  await writeFile(secretsPath, content, { mode: SECRETS_FILE_MODE, flag: 'w' });

  // Explicit chmod for platforms where writeFile mode may not apply
  if (process.platform !== 'win32') {
    await chmod(secretsPath, SECRETS_FILE_MODE);
  }
}

export async function deleteSecret(key: string): Promise<void> {
  const secrets = await loadSecrets();
  delete secrets[key];

  const lines = Object.entries(secrets).map(
    ([k, v]) => `${k}=${quoteValue(v)}`
  );
  const content = lines.length > 0 ? lines.join('\n') + '\n' : '';

  const secretsPath = getSecretsPath();
  await writeFile(secretsPath, content, { mode: SECRETS_FILE_MODE, flag: 'w' });

  if (process.platform !== 'win32') {
    await chmod(secretsPath, SECRETS_FILE_MODE);
  }
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

export async function getSearchApiKey(): Promise<string | undefined> {
  if (process.env.SEARCH_API_KEY) {
    return process.env.SEARCH_API_KEY;
  }
  return getSecret('SEARCH_API_KEY');
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function ensureConfigDir(): Promise<void> {
  const dir = getConfigDir();
  try {
    await access(dir, constants.F_OK);
  } catch {
    await mkdir(dir, { recursive: true, mode: 0o700 });
  }
}

function quoteValue(value: string): string {
  // Quote if value contains spaces, equals, hash or special chars
  if (/[\s=#"'\\]/.test(value) || value === '') {
    const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `"${escaped}"`;
  }
  return value;
}
