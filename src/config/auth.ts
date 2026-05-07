import { loadSecrets, getOAuthToken } from './secrets.js';
import { createLLMClient } from '../llm/client.js';
import { AuthError, LLMError } from '../llm/errors.js';
import type { ProviderProfile, ResolvedHarnessConfig } from './schema.js';

export type AuthStatus = 'ok' | 'missing' | 'unreachable' | 'rejected' | 'server_error';

export interface ResolvedProviderAuth {
  status: AuthStatus;
  token?: string;
  source?: string;
  message: string;
}

export class ProviderPreflightError extends Error {
  constructor(
    message: string,
    public readonly providerName: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = 'ProviderPreflightError';
  }
}

function envKeyForProvider(providerName: string): string {
  return `${providerName.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_API_KEY`;
}

function authCommand(providerName: string): string {
  return `harness control-panel provider auth or export ${envKeyForProvider(providerName)}=<key>`;
}

function isResolvedConfig(value: ProviderProfile | ResolvedHarnessConfig): value is ResolvedHarnessConfig {
  return 'provider' in value && 'profile' in value && 'providerName' in value;
}

export async function resolveProviderAuth(profile: ProviderProfile): Promise<ResolvedProviderAuth> {
  if (profile.authType === 'none') {
    return { status: 'ok', source: 'none', message: 'No auth required' };
  }

  if (profile.authType === 'api-key') {
    const keyName = profile.keyName ?? envKeyForProvider(profile.name);
    const secrets = await loadSecrets();
    const secretValue = secrets[keyName];
    if (secretValue) {
      return { status: 'ok', token: secretValue, source: `secrets:${keyName}`, message: `${keyName} found in harness secrets` };
    }
    const envValue = process.env[keyName];
    if (envValue) {
      return { status: 'ok', token: envValue, source: `env:${keyName}`, message: `${keyName} found in environment` };
    }
    return {
      status: 'missing',
      message: `No API key configured for provider "${profile.name}". Set one with: harness control-panel provider auth or export ${keyName}=<key>`,
    };
  }

  if (!profile.oauthProvider) {
    return { status: 'missing', message: `No OAuth provider configured for provider "${profile.name}".` };
  }
  const token = await getOAuthToken(profile.oauthProvider);
  if (token) {
    return { status: 'ok', token, source: profile.oauthProvider, message: `OAuth token found from ${profile.oauthProvider}` };
  }
  if (profile.oauthProvider === 'codex') {
    return {
      status: 'missing',
      message: `No OAuth token found for provider "${profile.name}". Authenticate with Codex CLI first, or set CODEX_TOKEN env var.`,
    };
  }
  return {
    status: 'missing',
    message: `No OAuth token found for provider "${profile.name}". Authenticate with Claude Code first, or set ANTHROPIC_AUTH_TOKEN env var.`,
  };
}

async function healthCheckProfile(profile: ProviderProfile, token?: string, timeoutMs = 10_000): Promise<ResolvedProviderAuth> {
  const baseUrl = profile.baseUrl.replace(/\/+$/, '');
  const url = profile.authType === 'none' && baseUrl.endsWith('/v1')
    ? `${baseUrl.slice(0, -3)}/api/tags`
    : `${baseUrl}/models`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const headers: Record<string, string> = {};
    if (token) {
      if (profile.anthropicFormat && profile.authType === 'api-key') {
        headers['x-api-key'] = token;
        headers['anthropic-version'] = '2023-06-01';
      } else {
        headers.Authorization = `Bearer ${token}`;
      }
    }
    const response = await fetch(url, { method: 'GET', headers, signal: controller.signal });
    if (response.status === 401 || response.status === 403) {
      return {
        status: 'rejected',
        message: `Provider "${profile.name}" rejected the configured credentials at ${profile.baseUrl}. Check your auth is valid.`,
      };
    }
    if (response.status >= 500) {
      return { status: 'server_error', message: `Provider "${profile.name}" returned a server error.` };
    }
    if (!response.ok) {
      return { status: 'unreachable', message: `Provider "${profile.name}" is unreachable at ${profile.baseUrl}.` };
    }
    return { status: 'ok', source: 'health-check', message: `Provider "${profile.name}" is reachable` };
  } catch (error) {
    return {
      status: 'unreachable',
      message: profile.authType === 'none'
        ? `Provider "${profile.name}" is unreachable at ${profile.baseUrl}. Is Ollama running? Start with: ollama serve`
        : `Provider "${profile.name}" is unreachable at ${profile.baseUrl}. ${(error as Error).message}`,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function assertProviderReady(input: ProviderProfile | ResolvedHarnessConfig): Promise<ResolvedProviderAuth | void> {
  if (!isResolvedConfig(input)) {
    const auth = await resolveProviderAuth(input);
    if (auth.status !== 'ok') {
      throw new ProviderPreflightError(auth.message, input.name);
    }
    const health = await healthCheckProfile(input, auth.token);
    if (health.status !== 'ok') {
      throw new ProviderPreflightError(health.message, input.name);
    }
    return { ...auth, message: health.message };
  }

  const config = input;
  const authOptional = config.providerName === 'local' || config.providerName.includes('ollama') || config.profile.authType === 'none';
  if (!authOptional && !config.provider.apiKey) {
    throw new ProviderPreflightError(
      `No API key configured for provider "${config.providerName}". Set one with: ${authCommand(config.providerName)}`,
      config.providerName,
    );
  }

  const client = createLLMClient(config);
  try {
    const ok = await client.healthCheck();
    if (!ok) {
      throw new ProviderPreflightError(
        `Provider "${config.providerName}" is unreachable at ${config.provider.baseUrl ?? 'configured endpoint'}.`,
        config.providerName,
      );
    }
  } catch (error) {
    if (error instanceof ProviderPreflightError) throw error;
    if (error instanceof AuthError) {
      throw new ProviderPreflightError(
        `Provider "${config.providerName}" rejected or is missing credentials. Set one with: ${authCommand(config.providerName)}`,
        config.providerName,
        error,
      );
    }
    if (error instanceof LLMError) {
      throw new ProviderPreflightError(error.message, config.providerName, error);
    }
    throw error;
  }
}
