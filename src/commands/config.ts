import { resolveConfig, setConfigValue } from '../config/loader.js';
import { getOpenRouterKey } from '../config/secrets.js';
import { mkdir, access, writeFile } from 'fs/promises';
import { constants } from 'fs';
import { getConfigDir, getConfigPath, getSecretsPath } from '../config/paths.js';
import { DEFAULTS } from '../config/schema.js';
import type { ToolCategoryPolicy } from '../config/schema.js';

type JsonObject = { [key: string]: unknown };

export async function handleConfigShow(
  matterName: string | undefined,
  opts: { json?: boolean }
): Promise<void> {
  const config = await resolveConfig({ matterName });
  const output = config.redacted ? config.redacted() : config;

  if (opts.json) {
    console.log(JSON.stringify(output, null, 2));
  } else {
    printSection('Provider', {
      name: output.providerName,
      model: output.model,
      baseUrl: (output.provider as JsonObject).baseUrl,
      apiKey: (output.provider as JsonObject).apiKey
        ? 'configured'
        : 'not set',
    });
    printSection('Autonomy', output.autonomy as unknown as JsonObject);
    printSection('Tool Policy', output.toolPolicy as unknown as JsonObject);
    console.log(`  fromDisk:   ${output.fromDisk}`);
    if (output.matterName) {
      console.log(`  matter:     ${output.matterName}`);
    }
  }
}

export async function handleConfigInit(
  opts: { force?: boolean }
): Promise<void> {
  const dir = getConfigDir();
  const configPath = getConfigPath();

  try {
    await access(dir, constants.F_OK);
  } catch {
    await mkdir(dir, { recursive: true, mode: 0o700 });
  }

  try {
    await access(configPath, constants.F_OK);
    if (!opts.force) {
      console.log('Config already exists at', configPath);
      console.log('Use --force to overwrite.');
      return;
    }
    console.log('Overwriting existing config...');
  } catch {
    // File doesn't exist, proceed with creation
  }

  const apiKey = await getOpenRouterKey();
  const defaults = structuredClone(DEFAULTS);
  if (apiKey) {
    defaults.providers.openrouter = defaults.providers.openrouter ?? {};
  }

  await writeFile(configPath, JSON.stringify(defaults, null, 2) + '\n', {
    mode: 0o600,
  });

  console.log('Config initialized at', configPath);

  const keyStatus = apiKey ? 'found' : 'not found';
  console.log(`OPENROUTER_API_KEY: ${keyStatus}`);
  if (!apiKey) {
    console.log(
      'Set with: harness secrets set OPENROUTER_API_KEY <your-key>'
    );
  }
}

export async function handleConfigSet(
  path: string,
  value: string
): Promise<void> {
  const parsed = parseValue(value);
  await setConfigValue(path, parsed);
  console.log(`Set ${path} = ${JSON.stringify(parsed)}`);
}

export async function handleSecretsSet(
  key: string,
  value: string
): Promise<void> {
  const { saveSecret } = await import('../config/secrets.js');
  await saveSecret(key, value);
  console.log(`Secret ${key} saved to ${getSecretsPath()}`);
}

export async function handlePolicyShow(
  matterName: string | undefined,
  opts: { json?: boolean }
): Promise<void> {
  const config = await resolveConfig({ matterName });
  const { toolPolicy: policy, autonomy } = config;

  if (opts.json) {
    console.log(
      JSON.stringify({ toolPolicy: policy, autonomy }, null, 2)
    );
  } else {
    printSection('Autonomy Policy', autonomy as unknown as JsonObject);
    const simplified: JsonObject = {};
    for (const [cat, p] of Object.entries(policy)) {
      simplified[cat] = (p as ToolCategoryPolicy)?.defaultDecision ?? 'ask';
    }
    printSection('Tool Policy', simplified);
    if (matterName) {
      console.log(`  matter: ${matterName}`);
    }
  }
}

export async function handlePolicySet(
  path: string,
  value: string
): Promise<void> {
  const parsed = parseValue(value);
  const fullPath = (!path.startsWith('toolPolicy.') && !path.startsWith('autonomy.'))
    ? 'toolPolicy.' + path
    : path;
  await setConfigValue(fullPath, parsed);
  console.log(`Policy ${fullPath} = ${JSON.stringify(parsed)}`);
}

function parseValue(value: string): unknown {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null') return null;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function printSection(title: string, data: JsonObject): void {
  console.log(`${title}:`);
  for (const [key, val] of Object.entries(data)) {
    if (val !== undefined) {
      const display =
        typeof val === 'object' && val !== null
          ? JSON.stringify(val)
          : String(val);
      console.log(`  ${key}: ${display}`);
    }
  }
}
