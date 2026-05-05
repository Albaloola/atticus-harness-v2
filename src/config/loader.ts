import { readFile, writeFile, mkdir, access } from 'fs/promises';
import { constants } from 'fs';
import { loadSecrets } from './secrets.js';
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
} from './schema.js';

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

export async function loadGlobalConfig(): Promise<{
  config: GlobalHarnessConfig;
  fromDisk: boolean;
}> {
  const configPath = getConfigPath();
  try {
    const raw = await readFile(configPath, 'utf-8');
    const diskConfig = JSON.parse(raw) as Partial<GlobalHarnessConfig>;
    const merged = deepMerge(
      DEFAULTS as unknown as Record<string, unknown>,
      diskConfig as unknown as Partial<Record<string, unknown>>
    ) as unknown as GlobalHarnessConfig;
    return { config: merged, fromDisk: true };
  } catch {
    return { config: { ...DEFAULTS }, fromDisk: false };
  }
}

export async function saveGlobalConfig(
  config: GlobalHarnessConfig
): Promise<void> {
  const dir = getConfigDir();
  try {
    await access(dir, constants.F_OK);
  } catch {
    await mkdir(dir, { recursive: true, mode: 0o700 });
  }
  await writeFile(getConfigPath(), JSON.stringify(config, null, 2) + '\n', {
    mode: 0o600,
  });
}

export async function loadMatterConfigOverride(
  matterName: string
): Promise<Partial<GlobalHarnessConfig> | null> {
  const configPath = getMatterConfigPath(matterName);
  try {
    const raw = await readFile(configPath, 'utf-8');
    return JSON.parse(raw) as Partial<GlobalHarnessConfig>;
  } catch {
    return null;
  }
}

async function loadMatterPolicyOverride(
  matterName: string
): Promise<ToolPolicy | null> {
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
  providerName = 'openrouter'
): Promise<ProviderConfig> {
  const base = providers[providerName] ?? providers.openrouter ?? {};
  const secrets = await loadSecrets();
  const envApiKey =
    process.env.OPENROUTER_API_KEY ?? process.env[`${providerName.toUpperCase()}_API_KEY`];
  const secretApiKey =
    secrets.OPENROUTER_API_KEY ?? secrets[`${providerName.toUpperCase()}_API_KEY`];

  return {
    ...base,
    apiKey: base.preferSecrets ? (secretApiKey ?? envApiKey) : (envApiKey ?? secretApiKey),
  };
}

export interface LoadConfigOptions {
  matterName?: string;
  providerName?: string;
}

export async function resolveConfig(
  options: LoadConfigOptions = {}
): Promise<ResolvedHarnessConfig> {
  const { config: globalConfig, fromDisk } = await loadGlobalConfig();
  const { matterName, providerName } = options;

  // Merge with matter overrides
  let autonomy: AutonomyPolicy = { ...globalConfig.autonomy };
  let toolPolicy: ToolPolicy = { ...globalConfig.toolPolicy };
  let model = globalConfig.defaultModel;

  if (matterName) {
    const matterOverride = await loadMatterConfigOverride(matterName);
    if (matterOverride) {
      if (matterOverride.defaultModel) {
        model = matterOverride.defaultModel;
      }
      if (matterOverride.autonomy) {
        autonomy = { ...autonomy, ...matterOverride.autonomy };
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

  const provider = await buildProviderConfig(
    globalConfig.providers,
    providerName
  );

  const result: ResolvedHarnessConfig = {
    provider,
    providerName: providerName ?? 'openrouter',
    providerPolicy: globalConfig.providerPolicy,
    model,
    autonomy,
    toolPolicy,
    fromDisk,
    matterName,
  };
  result.redacted = () => redactConfig(result);
  return result;
}

function redactConfig(config: ResolvedHarnessConfig): Record<string, unknown> {
  const provider = { ...config.provider };
  if (provider.apiKey) {
    provider.apiKey = '__REDACTED__';
  }

  return {
    provider,
    providerName: config.providerName,
    providerPolicy: config.providerPolicy,
    model: config.model,
    autonomy: config.autonomy,
    toolPolicy: config.toolPolicy,
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

export async function setConfigValue(
  path: string,
  value: unknown
): Promise<void> {
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
