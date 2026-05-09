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
  const nextContent = JSON.stringify(normalized, null, 2) + '\n';
  try {
    if (await readFile(configPath, 'utf-8') === nextContent) return;
  } catch {
  }
  const tmpPath = join(dirname(configPath), `.${basename(configPath)}.${process.pid}.${Date.now()}.tmp`);
  await writeFile(tmpPath, nextContent, { mode: 0o600 });
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

export type ConfigSourceKind = 'default' | 'global' | 'matter';

export interface ConfigProvenanceEntry {
  source: ConfigSourceKind;
  sourcePath?: string;
  value: unknown;
  active: boolean;
}

export interface ConfigExplanation {
  key: string;
  effectiveValue: unknown;
  provenance: ConfigProvenanceEntry[];
  tip?: string;
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
  let outputStyle = globalConfig.outputStyle;
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
      if (matterOverride.outputStyle !== undefined) outputStyle = matterOverride.outputStyle;
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
    outputStyle,
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
    outputStyle: config.outputStyle,
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

export async function explainConfigValue(
  path: string,
  options: { matterName?: string } = {},
): Promise<ConfigExplanation> {
  const configPath = getConfigPath();
  const defaultValue = getNestedValue(DEFAULTS as unknown as Record<string, unknown>, path);
  const diskConfig = await readJsonFile<Partial<GlobalHarnessConfig>>(configPath);
  const diskValue = diskConfig ? getNestedValue(diskConfig as Record<string, unknown>, path) : undefined;
  const matterPath = options.matterName ? getMatterConfigPath(options.matterName) : undefined;
  const matterConfig = matterPath ? await readJsonFile<Partial<GlobalHarnessConfig> & MatterConfigOverride>(matterPath) : undefined;
  const matterValue = matterConfig ? getNestedValue(matterConfig as Record<string, unknown>, path) : undefined;
  const effectiveValue = matterValue !== undefined
    ? matterValue
    : diskValue !== undefined
      ? diskValue
      : defaultValue;
  const provenance: ConfigProvenanceEntry[] = [
    {
      source: 'default',
      value: defaultValue,
      active: matterValue === undefined && diskValue === undefined,
    },
  ];
  if (diskConfig && diskValue !== undefined) {
    provenance.push({
      source: 'global',
      sourcePath: configPath,
      value: diskValue,
      active: matterValue === undefined,
    });
  }
  if (matterPath && matterConfig && matterValue !== undefined) {
    provenance.push({
      source: 'matter',
      sourcePath: matterPath,
      value: matterValue,
      active: true,
    });
  }

  return {
    key: path,
    effectiveValue: redactConfigExplanationValue(path, effectiveValue),
    provenance: provenance.map((entry) => ({
      ...entry,
      value: redactConfigExplanationValue(path, entry.value),
    })),
    tip: buildConfigRepairTip(path, effectiveValue, options.matterName),
  };
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

async function readJsonFile<T>(path: string): Promise<T | undefined> {
  try {
    return JSON.parse(await readFile(path, 'utf-8')) as T;
  } catch {
    return undefined;
  }
}

function getNestedValue(source: Record<string, unknown>, path: string): unknown {
  let current: unknown = source;
  for (const key of path.split('.')) {
    if (current === null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

function redactConfigExplanationValue(path: string, value: unknown): unknown {
  if (value === undefined) return value;
  if (isSensitiveConfigPath(path)) return '__REDACTED__';
  return redactNestedConfigValue(value);
}

function redactNestedConfigValue(value: unknown, keyHint = ''): unknown {
  if (value === null || value === undefined) return value;
  if (isSensitiveConfigPath(keyHint)) return '__REDACTED__';
  if (typeof value === 'string') return redactSecretLikeString(value);
  if (typeof value !== 'object') return value;
  if (Array.isArray(value)) return value.map((entry) => redactNestedConfigValue(entry, keyHint));

  const output: Record<string, unknown> = {};
  for (const [key, entry] of Object.entries(value)) {
    output[key] = redactNestedConfigValue(entry, key);
  }
  return output;
}

function isSensitiveConfigPath(path: string): boolean {
  return /(^|\.|_|\b)(apiKey|api[_-]?key|authToken|authorization|bearer|cookie|credential|oauthToken|password|secret|token)($|\.|_|\b)/i.test(path);
}

function redactSecretLikeString(value: string): string {
  return value
    .replace(/\bBearer\s+[A-Za-z0-9._~+/-]+=*/gi, 'Bearer __REDACTED__')
    .replace(/\b(?:sk|pk|rk|or|tvly|brv)-[A-Za-z0-9_-]{8,}\b/g, '__REDACTED__')
    .replace(/\b[A-Za-z0-9._%+-]+_API_KEY\s*=\s*['"]?[^'"\s]+['"]?/gi, '__REDACTED__');
}

function buildConfigRepairTip(path: string, value: unknown, matterName?: string): string | undefined {
  if (matterName && !/^[a-zA-Z0-9_-]+$/.test(matterName)) {
    return 'Matter names must use only letters, numbers, hyphens, or underscores.';
  }
  if (/apiKey|keyName/i.test(path) && (value === undefined || value === '')) {
    return 'Provider credentials should be stored with "harness provider auth <profile> <key>" or an environment variable matching the profile keyName.';
  }
  if (/^activeProvider$|^providers\.|^profiles\./.test(path) && value === undefined) {
    return 'Check "harness provider list" and select a configured profile with "harness provider select <name>".';
  }
  if (/\.model$|models\.|defaultModel$/.test(path) && typeof value === 'string' && /:free$|\/auto$/.test(value)) {
    return 'Provider policy usually denies free, auto-routed, or reserved models; choose an explicit allowed model for the active profile.';
  }
  if (/mcp\.servers\..*\.type$/.test(path) && !['stdio', 'http', 'sse', undefined].includes(value as string | undefined)) {
    return 'MCP transport must be one of stdio, http, or sse.';
  }
  if (/plugins\./.test(path)) {
    return 'Plugin paths and manifests are validated for traversal; run "harness plugin list" for skipped plugin errors.';
  }
  if (/toolPolicy|autonomy/.test(path)) {
    return 'If a skill requests a disabled tool, adjust the specific tool policy override instead of weakening unrelated categories.';
  }
  return undefined;
}
