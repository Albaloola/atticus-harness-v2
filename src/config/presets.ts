import type { GlobalHarnessConfig, ProviderConfig, ProviderPolicy, ProviderProfile } from './schema.js';

/**
 * Provider Profiles
 *
 * All profiles below are supported by the UnifiedMasterOrchestrator. The
 * orchestrator uses provider-agnostic JSON retry (retryNonJson on QueryLoop)
 * plus provider-native JSON mode when a compatible transport supports it.
 * OpenRouter DeepSeek profiles also pin request routing to DeepSeek with
 * fallbacks disabled so OpenRouter cannot silently substitute another
 * provider.
 *
 * The active profile controls the model used for the master orchestrator
 * role via the 'reasoning' slot. Change providers with:
 *
 *   harness control-panel provider select <profile>
 *   harness control-panel model set reasoning <model-id>
 */

export const DEFAULT_ACTIVE_PROVIDER = 'openrouter-deepseek';

export const MODEL_ROLES = [
  'fast',
  'reasoning',
  'drafting',
  'reviewer',
  'citation',
  'cheap',
] as const;

export type ModelRole = (typeof MODEL_ROLES)[number];

export const DEFAULT_PROVIDER_PROFILES: Record<string, ProviderProfile> = {
  'openrouter-deepseek': {
    name: 'openrouter-deepseek',
    label: 'OpenRouter DeepSeek',
    preset: 'openrouter-deepseek',
    providerKind: 'openai-compatible',
    authType: 'api-key',
    keyName: 'OPENROUTER_API_KEY',
    baseUrl: 'https://openrouter.ai/api/v1',
    reasoningControl: 'openrouter-reasoning',
    openRouterProviderRouting: {
      only: ['DeepSeek'],
      allowFallbacks: false,
      requireParameters: true,
      dataCollection: 'allow',
    },
    inputModalities: ['text', 'file'],
    models: {
      fast: 'deepseek/deepseek-v4-flash',
      reasoning: 'deepseek/deepseek-v4-pro',
      drafting: 'deepseek/deepseek-v4-pro',
      reviewer: 'deepseek/deepseek-v4-pro',
      citation: 'deepseek/deepseek-v4-flash',
      cheap: 'deepseek/deepseek-v4-flash',
    },
    fallbackModel: 'deepseek/deepseek-v4-pro',
    isCustom: false,
  },
  'codex-sdk': {
    name: 'codex-sdk',
    label: 'Codex SDK (local delegated auth)',
    preset: 'codex-sdk',
    providerKind: 'codex-sdk',
    authType: 'delegated',
    delegatedAuthProvider: 'codex-cli',
    baseUrl: 'codex://local',
    reasoningControl: 'codex-sdk',
    agentCapable: true,
    codexToolStrategy: 'harness',
    models: {
      fast: 'gpt-5.5',
      reasoning: 'gpt-5.5',
      drafting: 'gpt-5.5',
      reviewer: 'gpt-5.5',
      citation: 'gpt-5.5',
      cheap: 'gpt-5.5',
    },
    fallbackModel: 'gpt-5.5',
    isCustom: false,
  },
  'openai-api-key': {
    name: 'openai-api-key',
    label: 'OpenAI API key',
    preset: 'openai-api-key',
    providerKind: 'openai-compatible',
    authType: 'api-key',
    keyName: 'OPENAI_API_KEY',
    baseUrl: 'https://api.openai.com/v1',
    reasoningControl: 'openai-reasoning',
    models: {
      fast: 'gpt-5.5-medium',
      reasoning: 'gpt-5.5-xhigh',
      drafting: 'gpt-5.4-medium',
      reviewer: 'gpt-5.5-medium',
      citation: 'gpt-5.4-mini',
      cheap: 'gpt-5.4-mini',
    },
    fallbackModel: 'gpt-5.4-medium',
    isCustom: false,
  },
  'anthropic-oauth': {
    name: 'anthropic-oauth',
    label: 'Anthropic OAuth',
    preset: 'anthropic-oauth',
    providerKind: 'anthropic',
    authType: 'oauth',
    oauthProvider: 'claude-code',
    baseUrl: 'https://api.anthropic.com/v1',
    anthropicFormat: true,
    reasoningControl: 'anthropic-thinking',
    models: {
      fast: 'claude-sonnet-4',
      reasoning: 'claude-opus-4',
      drafting: 'claude-sonnet-4',
      reviewer: 'claude-opus-4',
      citation: 'claude-sonnet-4',
      cheap: 'claude-haiku-3.5',
    },
    fallbackModel: 'claude-sonnet-4',
    isCustom: false,
  },
  'anthropic-api-key': {
    name: 'anthropic-api-key',
    label: 'Anthropic API key',
    preset: 'anthropic-api-key',
    providerKind: 'anthropic',
    authType: 'api-key',
    keyName: 'ANTHROPIC_API_KEY',
    baseUrl: 'https://api.anthropic.com/v1',
    anthropicFormat: true,
    reasoningControl: 'anthropic-thinking',
    models: {
      fast: 'claude-sonnet-4',
      reasoning: 'claude-opus-4',
      drafting: 'claude-sonnet-4',
      reviewer: 'claude-opus-4',
      citation: 'claude-sonnet-4',
      cheap: 'claude-haiku-3.5',
    },
    fallbackModel: 'claude-sonnet-4',
    isCustom: false,
  },
  'deepseek-direct': {
    name: 'deepseek-direct',
    label: 'DeepSeek direct',
    preset: 'deepseek-direct',
    providerKind: 'openai-compatible',
    authType: 'api-key',
    keyName: 'DEEPSEEK_API_KEY',
    baseUrl: 'https://api.deepseek.com',
    reasoningControl: 'deepseek-thinking',
    models: {
      fast: 'deepseek-v4-flash',
      reasoning: 'deepseek-v4-pro',
      drafting: 'deepseek-v4-pro',
      reviewer: 'deepseek-v4-pro',
      citation: 'deepseek-v4-flash',
      cheap: 'deepseek-v4-flash',
    },
    fallbackModel: 'deepseek-v4-flash',
    isCustom: false,
  },
  'ollama-local': {
    name: 'ollama-local',
    label: 'Ollama local',
    preset: 'ollama-local',
    providerKind: 'local',
    authType: 'none',
    baseUrl: 'http://localhost:11434/v1',
    reasoningControl: 'model-routing',
    models: {
      fast: 'llama3.2',
      reasoning: 'llama3.1:70b',
      drafting: 'llama3.2',
      reviewer: 'llama3.1:70b',
      citation: 'llama3.2:3b',
      cheap: 'llama3.2:3b',
    },
    fallbackModel: 'llama3.2',
    isCustom: false,
  },
  'openrouter-custom': {
    name: 'openrouter-custom',
    label: 'OpenRouter custom',
    preset: 'openrouter-custom',
    providerKind: 'openai-compatible',
    authType: 'api-key',
    keyName: 'OPENROUTER_API_KEY',
    baseUrl: 'https://openrouter.ai/api/v1',
    reasoningControl: 'openrouter-reasoning',
    openRouterProviderRouting: {
      only: ['DeepSeek'],
      allowFallbacks: false,
      requireParameters: true,
      dataCollection: 'allow',
    },
    inputModalities: ['text', 'file'],
    models: {
      fast: 'deepseek/deepseek-v4-flash',
      reasoning: 'deepseek/deepseek-v4-pro',
      drafting: 'deepseek/deepseek-v4-pro',
      reviewer: 'deepseek/deepseek-v4-pro',
      citation: 'deepseek/deepseek-v4-flash',
      cheap: 'deepseek/deepseek-v4-flash',
    },
    fallbackModel: 'deepseek/deepseek-v4-pro',
    isCustom: true,
  },
};

export const PROVIDER_PRESETS = DEFAULT_PROVIDER_PROFILES;
export const LEGACY_CODEX_OAUTH_PROFILE = 'openai-codex-oauth';

export function isLegacyCodexOAuthProfileName(name: string | undefined): boolean {
  return name === LEGACY_CODEX_OAUTH_PROFILE;
}

export function legacyCodexOAuthMigrationMessage(name = LEGACY_CODEX_OAUTH_PROFILE): string {
  return [
    `Provider "${name}" has been removed.`,
    'Codex CLI OAuth is not an OpenAI REST credential.',
    'Use the codex-sdk provider and authenticate with: codex login',
  ].join(' ');
}

export function cloneDefaultProviderProfiles(): Record<string, ProviderProfile> {
  return structuredClone(DEFAULT_PROVIDER_PROFILES);
}

export const clonePresetProfiles = cloneDefaultProviderProfiles;

export function isPresetProfile(name: string): boolean {
  return Object.prototype.hasOwnProperty.call(DEFAULT_PROVIDER_PROFILES, name);
}

export function normalizeProviderProfiles(config: GlobalHarnessConfig): GlobalHarnessConfig {
  const hadProfiles = Boolean(config.profiles) && Object.keys(config.profiles ?? {}).length > 0;
  const diskProfiles = { ...(config.profiles ?? {}) };
  delete diskProfiles[LEGACY_CODEX_OAUTH_PROFILE];
  const profiles = cloneDefaultProviderProfiles();
  for (const [name, profile] of Object.entries(diskProfiles)) {
    profiles[name] = normalizeDiskProfile(name, profile);
  }

  if (!hadProfiles) {
    const legacyOpenRouter = config.providers?.openrouter;
    const preset = profiles[DEFAULT_ACTIVE_PROVIDER];
    const looksLegacy = legacyOpenRouter?.baseUrl !== undefined || legacyOpenRouter?.fallbackModel !== undefined;
    profiles[DEFAULT_ACTIVE_PROVIDER] = {
      ...preset,
      baseUrl: looksLegacy ? (legacyOpenRouter?.baseUrl ?? preset.baseUrl) : preset.baseUrl,
      models: looksLegacy ? {
        ...preset.models,
        ...(config.providerPolicy?.models ?? {}),
      } : preset.models,
      fallbackModel: looksLegacy ? (legacyOpenRouter?.fallbackModel ?? preset.fallbackModel) : preset.fallbackModel,
      isCustom: false,
    };
  }

  const activeProvider = config.activeProvider && profiles[config.activeProvider]
    ? config.activeProvider
    : DEFAULT_ACTIVE_PROVIDER;
  const activeProfile = profiles[activeProvider];
  const providers: GlobalHarnessConfig['providers'] = { ...(config.providers ?? {}) };
  delete providers[LEGACY_CODEX_OAUTH_PROFILE];
  for (const profile of Object.values(profiles)) {
    providers[profile.name] = {
      ...providers[profile.name],
      ...profileToProviderConfig(profile, providers[profile.name]?.apiKey),
      timeoutMs: providers[profile.name]?.timeoutMs ?? 180_000,
      maxRetries: providers[profile.name]?.maxRetries ?? 3,
    };
  }

  return {
    ...config,
    activeProvider,
    profiles,
    providers,
    defaultModel: config.defaultModel || activeProfile.models.fast,
  };
}

function normalizeDiskProfile(name: string, diskProfile: ProviderProfile): ProviderProfile {
  const preset = DEFAULT_PROVIDER_PROFILES[diskProfile.preset] ?? DEFAULT_PROVIDER_PROFILES[name];
  if (!preset) {
    return {
      ...diskProfile,
      name: diskProfile.name || name,
      label: diskProfile.label || name,
      preset: diskProfile.preset || 'custom',
      providerKind: diskProfile.providerKind ?? 'openai-compatible',
      authType: diskProfile.authType ?? 'api-key',
      models: { ...DEFAULT_PROVIDER_PROFILES[DEFAULT_ACTIVE_PROVIDER].models, ...(diskProfile.models ?? {}) },
      fallbackModel: diskProfile.fallbackModel,
      isCustom: true,
    };
  }

  if (!diskProfile.isCustom) {
    return structuredClone(preset);
  }

  return {
    ...preset,
    ...diskProfile,
    name: diskProfile.name || name,
    label: diskProfile.label || preset.label,
    preset: diskProfile.preset || preset.preset,
    providerKind: diskProfile.providerKind ?? preset.providerKind,
    authType: diskProfile.authType ?? preset.authType,
    keyName: diskProfile.keyName ?? preset.keyName,
    oauthProvider: diskProfile.oauthProvider ?? preset.oauthProvider,
    delegatedAuthProvider: diskProfile.delegatedAuthProvider ?? preset.delegatedAuthProvider,
    baseUrl: diskProfile.baseUrl || preset.baseUrl,
    apiPath: diskProfile.apiPath ?? preset.apiPath,
    anthropicFormat: diskProfile.anthropicFormat ?? preset.anthropicFormat,
    reasoningControl: diskProfile.reasoningControl ?? preset.reasoningControl,
    openRouterProviderRouting: diskProfile.openRouterProviderRouting ?? preset.openRouterProviderRouting,
    inputModalities: diskProfile.inputModalities ?? preset.inputModalities,
    agentCapable: diskProfile.agentCapable ?? preset.agentCapable,
    codexToolStrategy: diskProfile.codexToolStrategy ?? preset.codexToolStrategy,
    codexDangerouslyBypassApprovalsAndSandbox: diskProfile.codexDangerouslyBypassApprovalsAndSandbox ?? preset.codexDangerouslyBypassApprovalsAndSandbox,
    models: { ...preset.models, ...(diskProfile.models ?? {}) },
    fallbackModel: diskProfile.fallbackModel ?? preset.fallbackModel,
    isCustom: true,
  };
}

export function profileToProviderConfig(profile: ProviderProfile, apiKey?: string): ProviderConfig {
  return {
    apiKey,
    baseUrl: profile.baseUrl,
    defaultModel: profile.models.fast,
    fallbackModel: profile.fallbackModel,
    timeoutMs: 180_000,
    maxRetries: 3,
    providerKind: profile.providerKind,
    authType: profile.authType,
    keyName: profile.keyName,
    oauthProvider: profile.oauthProvider,
    delegatedAuthProvider: profile.delegatedAuthProvider,
    apiPath: profile.apiPath,
    anthropicFormat: profile.anthropicFormat,
    reasoningControl: profile.reasoningControl,
    openRouterProviderRouting: profile.openRouterProviderRouting,
    inputModalities: profile.inputModalities,
    agentCapable: profile.agentCapable,
    codexToolStrategy: profile.codexToolStrategy,
    codexDangerouslyBypassApprovalsAndSandbox: profile.codexDangerouslyBypassApprovalsAndSandbox,
  };
}

export function policyForProfile(profile: ProviderProfile, basePolicy: ProviderPolicy): ProviderPolicy {
  const models = { ...profile.models };
  const allowedModels = Array.from(new Set([
    ...Object.values(models),
    profile.fallbackModel,
    ...(basePolicy.allowedModels ?? []),
  ].filter((item): item is string => typeof item === 'string' && item.length > 0)));

  return {
    ...basePolicy,
    defaultProvider: profile.name,
    models,
    allowedProviders: Array.from(new Set([profile.name, ...(basePolicy.allowedProviders ?? [])])),
    allowedModels,
  };
}

export function isModelRole(value: string): value is ModelRole {
  return (MODEL_ROLES as readonly string[]).includes(value);
}
