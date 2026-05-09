import { readFile, writeFile, mkdir, access, rename } from 'fs/promises';
import { constants } from 'fs';
import { basename, dirname, join } from 'path';
import { loadSecrets, getOAuthToken } from './secrets.js';
import {
  getConfigPath,
  getConfigDir,
  getMatterConfigPath,
  getMatterPolicyPath,
} from './paths.js';
import {
  DEFAULTS,
  type GlobalHarnessConfig,
  type AutonomyPolicy,
  type ToolPolicy,
  type ProviderConfig,
  type ResolvedHarnessConfig,
  type MatterConfigOverride,
} from './schema.js';
import { validateProviderPolicy } from './policy.js';
import { canonicalProviderPolicy, assertProviderPolicyAllowed } from './provider-policy.js';
import { assertModelCompatibleWithProfile, validateProfileModelCompatibility } from './model-compat.js';
import {
  DEFAULT_ACTIVE_PROVIDER,
  isLegacyCodexOAuthProfileName,
  legacyCodexOAuthMigrationMessage,
  normalizeProviderProfiles,
  policyForProfile,
  profileToProviderConfig,
} from './presets.js';
import { assertProviderReady } from './auth.js';
import { normalizeReasoningEffort } from './reasoning.js';

function deepMerge<T extends Record<string, unknown>>(
  base: T,
  override: Partial<T> | undefined
): T {
  if (!override) return { ...base };
  const result = { ...base };
  for (const [key, val] of Object.entries(override)) {
    if (
      val !== undefined &&
      typeof val === 'object' &&
      !Array.isArray(val) &&
      typeof result[key] === 'object' &&
      !Array.isArray(result[key]) &&
      result[key] !== null
    ) {
      (result as Record<string, unknown>)[key] = deepMerge(
        result[key] as Record<string, unknown>,
        val as Record<string, unknown>
      ) as Record<string, unknown>;
    } else {
      (result as Record<string, unknown>)[key] = val;
    }
  }
  return result;
}

export async function loadGlobalConfig(): Promise<{ config: GlobalHarnessConfig; fromDisk: boolean }> {
  const configPath = getConfigPath();
  try {
    const raw = await readFile(configPath, 'utf-8');
    const diskConfig = JSON.parse(raw) as Partial<GlobalHarnessConfig>;
    const merged = deepMerge(
      DEFAULTS as unknown as Record<string, unknown>,
      diskConfig as unknown as Partial<Record<string, unknown>>
    ) as unknown as GlobalHarnessConfig;
    if (diskConfig.profiles === undefined) {
      delete (merged as Partial<GlobalHarnessConfig>).profiles;
    }
    return { config: normalizeProviderProfiles(merged), fromDisk: true };
  } catch {
    return { config: normalizeProviderProfiles(structuredClone(DEFAULTS)), fromDisk: false };
  }
}

export async function saveGlobalConfig(config: GlobalHarnessConfig): Promise<void> {
  const dir = getConfigDir();
  try {
    await access(dir, constants.F_OK);
  } catch {
    await mkdir(dir, { recursive: true, mode: 0o700 });
  }
  const normalized = normalizeProviderProfiles(config);
  const configPath = getConfigPath();
  const tmpPath = join(dirname(configPath), `.${basename(configPath)}.${process.pid}.${Date.now()}.tmp`);
  await writeFile(tmpPath, JSON.stringify(normalized, null, 2) + '\n', { mode: 0o600 });
  await rename(tmpPath, configPath);
}

export async function loadMatterConfigOverride(
  matterName: string
): Promise<(Partial<GlobalHarnessConfig> & MatterConfigOverride) | null> {
  const configPath = getMatterConfigPath(matterName);
  try {
    const raw = await readFile(configPath, 'utf-8');
    return JSON.parse(raw) as Partial<GlobalHarnessConfig> & MatterConfigOverride;
  } catch {
    return null;
  }
}

async function loadMatterPolicyOverride(matterName: string): Promise<ToolPolicy | null> {
  const policyPath = getMatterPolicyPath(matterName);
  try {
    const raw = await readFile(policyPath, 'utf-8');
    return JSON.parse(raw) as ToolPolicy;
  } catch {
    return null;
  }
}

async function buildProviderConfig(
  providers: GlobalHarnessConfig['providers'],
  profileName: string,
  profile = normalizeProviderProfiles({ ...DEFAULTS, providers }).profiles[profileName]
): Promise<ProviderConfig> {
  const base = { ...(providers[profileName] ?? providers.openrouter ?? {}) };
  const legacyOpenRouter = profileName === DEFAULT_ACTIVE_PROVIDER ? providers.openrouter : undefined;
  if (legacyOpenRouter && DEFAULTS.providers.openrouter) {
    if (legacyOpenRouter.defaultModel !== DEFAULTS.providers.openrouter.defaultModel) {
      base.defaultModel = legacyOpenRouter.defaultModel;
    }
    if (legacyOpenRouter.fallbackModel !== DEFAULTS.providers.openrouter.fallbackModel) {
      base.fallbackModel = legacyOpenRouter.fallbackModel;
    }
  }
  const secrets = await loadSecrets();
  let apiKey: string | undefined;

  if (profile.authType === 'api-key') {
    const keyName = profile.keyName ?? `${profileName.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_API_KEY`;
    const envApiKey = process.env[keyName];
    const secretApiKey = secrets[keyName];
    apiKey = base.preferSecrets ? (secretApiKey ?? envApiKey) : (secretApiKey ?? envApiKey);
  } else if (profile.authType === 'oauth' && profile.oauthProvider) {
    if (profile.oauthProvider === 'codex') {
      throw new Error(legacyCodexOAuthMigrationMessage(profile.name));
    }
    apiKey = await getOAuthToken(profile.oauthProvider);
  }

  const profileConfig = profileToProviderConfig(profile, apiKey);
  return {
    ...profileConfig,
    ...base,
    apiKey,
    authType: profileConfig.authType,
    providerKind: profileConfig.providerKind,
    keyName: profileConfig.keyName,
    oauthProvider: profileConfig.oauthProvider,
    delegatedAuthProvider: profileConfig.delegatedAuthProvider,
    apiPath: profileConfig.apiPath,
    anthropicFormat: profileConfig.anthropicFormat,
    reasoningControl: profileConfig.reasoningControl,
    timeoutMs: base.timeoutMs ?? profileConfig.timeoutMs,
    maxRetries: base.maxRetries ?? profileConfig.maxRetries,
  };
}

export interface LoadConfigOptions {
  matterName?: string;
  providerName?: string;
  strict?: boolean;
}

export async function resolveConfig(options: LoadConfigOptions = {}): Promise<ResolvedHarnessConfig> {
  const loaded = await loadGlobalConfig();
  const globalConfig = normalizeProviderProfiles(loaded.config);
  const { fromDisk } = loaded;
  const { matterName, providerName } = options;

  let autonomy: AutonomyPolicy = { ...globalConfig.autonomy };
  let toolPolicy: ToolPolicy = { ...globalConfig.toolPolicy };
  let temperature: number | undefined;
  let maxTokens: number | undefined;
  let reasoningEffort = normalizeReasoningEffort(globalConfig.reasoningEffort, 'global reasoningEffort');
  const selectedProviderName = providerName ?? globalConfig.activeProvider;
  if (isLegacyCodexOAuthProfileName(selectedProviderName)) {
    throw new Error(legacyCodexOAuthMigrationMessage(selectedProviderName));
  }
  if (providerName && !globalConfig.profiles[providerName]) {
    throw new Error(`Provider "${providerName}" is not configured`);
  }
  if (
    !providerName &&
    globalConfig.providerPolicy.defaultProvider !== DEFAULTS.providerPolicy.defaultProvider &&
    globalConfig.providers[globalConfig.providerPolicy.defaultProvider]?.reserved
  ) {
    throw new Error(`Provider policy denied reserved provider "${globalConfig.providerPolicy.defaultProvider}"`);
  }
  const profile = globalConfig.profiles[selectedProviderName];
  if (!profile) throw new Error(`Provider "${selectedProviderName}" is not configured`);
  if (profile.authType === 'oauth' && profile.oauthProvider === 'codex') {
    throw new Error(legacyCodexOAuthMigrationMessage(profile.name));
  }
  validateProfileModelCompatibility(profile);
  let model = profile.models.fast;

  if (matterName) {
    const matterOverride = await loadMatterConfigOverride(matterName);
    if (matterOverride) {
      const matterModel = matterOverride.model ?? matterOverride.defaultModel;
      if (matterModel && shouldApplyMatterModelOverride({
        explicitProvider: Boolean(providerName),
        selectedProviderName,
        profile,
        model: matterModel,
      })) {
        model = matterModel;
      }
      if (matterOverride.temperature !== undefined) temperature = matterOverride.temperature;
      if (matterOverride.maxTokens !== undefined) maxTokens = matterOverride.maxTokens;
      if (matterOverride.reasoningEffort !== undefined) {
        reasoningEffort = normalizeReasoningEffort(
          matterOverride.reasoningEffort,
          `matter ${matterName} reasoningEffort`,
        );
      }
      if (matterOverride.autonomy) {
        autonomy = deepMerge(
          autonomy as unknown as Record<string, unknown>,
          matterOverride.autonomy as unknown as Partial<Record<string, unknown>>
        ) as unknown as AutonomyPolicy;
      }
    }
    const matterPolicy = await loadMatterPolicyOverride(matterName);
    if (matterPolicy) {
      toolPolicy = deepMerge(
        toolPolicy as Record<string, unknown>,
        matterPolicy as Record<string, unknown>
      ) as unknown as ToolPolicy;
    }
  }

  assertModelCompatibleWithProfile(profile, model);
  const provider = await buildProviderConfig(globalConfig.providers, selectedProviderName, profile);
  const providersForPolicy = {
    ...globalConfig.providers,
    [selectedProviderName]: provider,
    [profile.name]: provider,
  };
  const providerPolicy = canonicalProviderPolicy(policyForProfile(profile, {
    ...globalConfig.providerPolicy,
    allowedModels: Array.from(new Set([
      ...(globalConfig.providerPolicy.allowedModels ?? []),
      globalConfig.defaultModel,
      model,
    ].filter(Boolean))),
  }));

  validateProviderPolicy({
    config: { ...globalConfig, providerPolicy, providers: providersForPolicy },
    providerName: selectedProviderName,
    provider,
    model,
  });
  assertProviderPolicyAllowed({
    policy: providerPolicy,
    providers: providersForPolicy,
    providerName: selectedProviderName,
    model,
  });
  const result: ResolvedHarnessConfig = {
    provider,
    providerName: selectedProviderName,
    profile,
    activeProfile: profile,
    providerPolicy,
    model,
    temperature,
    maxTokens,
    reasoningEffort,
    autonomy,
    toolPolicy,
    search: globalConfig.search,
    mcp: globalConfig.mcp,
    plugins: globalConfig.plugins,
    fromDisk,
    matterName,
  };
  result.redacted = () => redactConfig(result);

  if (options.strict) {
    await assertProviderReady(result);
  }

  return result;
}

function shouldApplyMatterModelOverride(input: {
  explicitProvider: boolean;
  selectedProviderName: string;
  profile: { models: Record<string, string>; fallbackModel?: string };
  model: string;
}): boolean {
  if (Object.values(input.profile.models).includes(input.model) || input.profile.fallbackModel === input.model) {
    return true;
  }
  if (input.explicitProvider) return false;
  return input.selectedProviderName === DEFAULT_ACTIVE_PROVIDER;
}

function redactConfig(config: ResolvedHarnessConfig): Record<string, unknown> {
  const provider = { ...config.provider };
  if (provider.apiKey) provider.apiKey = '__REDACTED__';
  return {
    provider,
    providerName: config.providerName,
    profile: config.profile,
    providerPolicy: config.providerPolicy,
    model: config.model,
    temperature: config.temperature,
    maxTokens: config.maxTokens,
    reasoningEffort: config.reasoningEffort,
    autonomy: config.autonomy,
    toolPolicy: config.toolPolicy,
    search: config.search,
    mcp: config.mcp,
    plugins: config.plugins,
    fromDisk: config.fromDisk,
    matterName: config.matterName,
  };
}

export async function getConfigValue(path: string): Promise<unknown> {
  const config = await resolveConfig();
  const keys = path.split('.');
  let current: Record<string, unknown> = config as unknown as Record<string, unknown>;
  for (const key of keys) {
    if (current === null || typeof current !== 'object') return undefined;
    current = current[key] as Record<string, unknown>;
  }
  return current;
}

export async function setConfigValue(path: string, value: unknown): Promise<void> {
  const { config } = await loadGlobalConfig();
  const keys = path.split('.');
  let target: Record<string, unknown> = config as unknown as Record<string, unknown>;
  for (let i = 0; i < keys.length - 1; i++) {
    if (typeof target[keys[i]] !== 'object' || target[keys[i]] === null) {
      target[keys[i]] = {} as Record<string, unknown>;
    }
    target = target[keys[i]] as Record<string, unknown>;
  }
  target[keys[keys.length - 1]] = value;
  await saveGlobalConfig(config);
}
