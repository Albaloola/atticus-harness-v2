import { loadSecrets, getOAuthToken } from './secrets.js';
import { createLLMClient } from '../llm/client.js';
import { checkCodexLoginStatus } from './codex-readiness.js';
import { AuthError, LLMError } from '../llm/errors.js';
import type { ProviderProfile, ResolvedHarnessConfig } from './schema.js';
import { legacyCodexOAuthMigrationMessage, isLegacyCodexOAuthProfileName } from './presets.js';

export type AuthStatus = 'ok' | 'missing' | 'unreachable' | 'rejected' | 'server_error' | 'unsupported';

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
  if (providerName === 'codex-sdk') {
    return 'codex login';
  }
  return `harness control-panel provider auth or export ${envKeyForProvider(providerName)}=<key>`;
}

function isResolvedConfig(value: ProviderProfile | ResolvedHarnessConfig): value is ResolvedHarnessConfig {
  return 'provider' in value && 'profile' in value && 'providerName' in value;
}

function isCodexOAuthProfile(profile: ProviderProfile): boolean {
  return profile.authType === 'oauth' && profile.oauthProvider === 'codex';
}

function codexOAuthUnsupportedMessage(providerName: string): string {
  return [
    `Provider "${providerName}" uses removed Codex OAuth token auth.`,
    'Use the codex-sdk provider with delegated Codex CLI auth: codex login.',
    'For non-Codex runs, select a provider profile with its own auth method.',
  ].join(' ');
}

export async function resolveProviderAuth(profile: ProviderProfile): Promise<ResolvedProviderAuth> {
  if (isLegacyCodexOAuthProfileName(profile.name)) {
    return {
      status: 'unsupported',
      source: 'codex',
      message: legacyCodexOAuthMigrationMessage(profile.name),
    };
  }

  if (profile.authType === 'none') {
    return { status: 'ok', source: 'none', message: 'No auth required' };
  }

  if (isCodexOAuthProfile(profile)) {
    return {
      status: 'unsupported',
      source: 'codex-cli',
      message: codexOAuthUnsupportedMessage(profile.name),
    };
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

  if (profile.authType === 'delegated') {
    if (profile.delegatedAuthProvider !== 'codex-cli') {
      return {
        status: 'missing',
        message: `No delegated auth provider configured for provider "${profile.name}".`,
      };
    }
    const readiness = await checkCodexLoginStatus();
    return {
      status: readiness.status === 'ok' ? 'ok' : readiness.status,
      source: 'codex-cli',
      message: readiness.message,
    };
  }

  if (!profile.oauthProvider) {
    return { status: 'missing', message: `No OAuth provider configured for provider "${profile.name}".` };
  }
  const token = await getOAuthToken(profile.oauthProvider);
  if (token) {
    return { status: 'ok', token, source: profile.oauthProvider, message: `OAuth token found from ${profile.oauthProvider}` };
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
    if (isLegacyCodexOAuthProfileName(input.name)) {
      throw new ProviderPreflightError(legacyCodexOAuthMigrationMessage(input.name), input.name);
    }
    const auth = await resolveProviderAuth(input);
    if (auth.status !== 'ok') {
      throw new ProviderPreflightError(auth.message, input.name);
    }
    if (input.authType === 'delegated') {
      return auth;
    }
    const health = await healthCheckProfile(input, auth.token);
    if (health.status !== 'ok') {
      throw new ProviderPreflightError(health.message, input.name);
    }
    return { ...auth, message: health.message };
  }

  const config = input;
  if (isLegacyCodexOAuthProfileName(config.providerName)) {
    throw new ProviderPreflightError(legacyCodexOAuthMigrationMessage(config.providerName), config.providerName);
  }
  if (isCodexOAuthProfile(config.profile)) {
    throw new ProviderPreflightError(codexOAuthUnsupportedMessage(config.providerName), config.providerName);
  }
  const authOptional =
    config.providerName === 'local' ||
    config.providerName.includes('ollama') ||
    config.profile.authType === 'none' ||
    config.profile.authType === 'delegated';
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
