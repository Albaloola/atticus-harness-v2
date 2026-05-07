import type { GlobalHarnessConfig, ProviderConfig, ProviderPolicy, ProviderProfile } from './schema.js';

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
    authType: 'api-key',
    keyName: 'OPENROUTER_API_KEY',
    baseUrl: 'https://openrouter.ai/api/v1',
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
  'openai-codex-oauth': {
    name: 'openai-codex-oauth',
    label: 'OpenAI Codex OAuth',
    preset: 'openai-codex-oauth',
    authType: 'oauth',
    oauthProvider: 'codex',
    baseUrl: 'https://api.openai.com/v1',
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
  'openai-api-key': {
    name: 'openai-api-key',
    label: 'OpenAI API key',
    preset: 'openai-api-key',
    authType: 'api-key',
    keyName: 'OPENAI_API_KEY',
    baseUrl: 'https://api.openai.com/v1',
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
    authType: 'oauth',
    oauthProvider: 'claude-code',
    baseUrl: 'https://api.anthropic.com/v1',
    anthropicFormat: true,
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
    authType: 'api-key',
    keyName: 'ANTHROPIC_API_KEY',
    baseUrl: 'https://api.anthropic.com/v1',
    anthropicFormat: true,
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
    authType: 'api-key',
    keyName: 'DEEPSEEK_API_KEY',
    baseUrl: 'https://api.deepseek.com/v1',
    models: {
      fast: 'deepseek-chat',
      reasoning: 'deepseek-reasoner',
      drafting: 'deepseek-chat',
      reviewer: 'deepseek-reasoner',
      citation: 'deepseek-chat',
      cheap: 'deepseek-chat',
    },
    fallbackModel: 'deepseek-chat',
    isCustom: false,
  },
  'ollama-local': {
    name: 'ollama-local',
    label: 'Ollama local',
    preset: 'ollama-local',
    authType: 'none',
    baseUrl: 'http://localhost:11434/v1',
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
    authType: 'api-key',
    keyName: 'OPENROUTER_API_KEY',
    baseUrl: 'https://openrouter.ai/api/v1',
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

export function cloneDefaultProviderProfiles(): Record<string, ProviderProfile> {
  return structuredClone(DEFAULT_PROVIDER_PROFILES);
}

export const clonePresetProfiles = cloneDefaultProviderProfiles;

export function isPresetProfile(name: string): boolean {
  return Object.prototype.hasOwnProperty.call(DEFAULT_PROVIDER_PROFILES, name);
}

export function normalizeProviderProfiles(config: GlobalHarnessConfig): GlobalHarnessConfig {
  const hadProfiles = Boolean(config.profiles) && Object.keys(config.profiles ?? {}).length > 0;
  const profiles: Record<string, ProviderProfile> = {
    ...cloneDefaultProviderProfiles(),
    ...(config.profiles ?? {}),
  };

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

export function profileToProviderConfig(profile: ProviderProfile, apiKey?: string): ProviderConfig {
  return {
    apiKey,
    baseUrl: profile.baseUrl,
    defaultModel: profile.models.fast,
    fallbackModel: profile.fallbackModel,
    timeoutMs: 180_000,
    maxRetries: 3,
    authType: profile.authType,
    keyName: profile.keyName,
    oauthProvider: profile.oauthProvider,
    apiPath: profile.apiPath,
    anthropicFormat: profile.anthropicFormat,
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
