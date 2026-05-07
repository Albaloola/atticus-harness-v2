import { homedir } from 'os';
import { join } from 'path';

const CONFIG_DIR = '.atticus-harness';

export function getConfigDir(): string {
  return join(process.env.HOME ?? homedir(), CONFIG_DIR);
}

export function getConfigPath(): string {
  return join(getConfigDir(), 'config.json');
}

export function getSecretsPath(): string {
  return join(getConfigDir(), 'secrets.env');
}

export function getProvidersPath(): string {
  return join(getConfigDir(), 'providers.json');
}

export function getPolicyPath(): string {
  return join(getConfigDir(), 'policy.json');
}

export function getMatterConfigPath(matterName: string): string {
  return join(process.cwd(), 'matters', matterName, '_config.json');
}

export function getMatterPolicyPath(matterName: string): string {
  return join(process.cwd(), 'matters', matterName, '_policy.json');
}
