import { constants } from 'fs';
import { access, chmod, mkdir, readFile, rename, writeFile } from 'fs/promises';
import { basename, dirname, join } from 'path';

const PRIVATE_DIR_MODE = 0o700;
const PRIVATE_FILE_MODE = 0o600;

export interface SecureStorageBackendDescription {
  type: string;
  location?: string;
  keyCount: number;
}

export interface SecureStorage {
  get(key: string): Promise<string | undefined>;
  set(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
  list(): Promise<string[]>;
  describeBackend(): Promise<SecureStorageBackendDescription>;
}

export class PlaintextFileSecureStorage implements SecureStorage {
  constructor(private readonly filePath: string) {}

  async get(key: string): Promise<string | undefined> {
    const entries = await this.loadEntries();
    return entries[key];
  }

  async set(key: string, value: string): Promise<void> {
    const entries = await this.loadEntries();
    entries[key] = value;
    await this.saveEntries(entries);
  }

  async delete(key: string): Promise<void> {
    const entries = await this.loadEntries();
    delete entries[key];
    await this.saveEntries(entries);
  }

  async list(): Promise<string[]> {
    const entries = await this.loadEntries();
    return Object.keys(entries).sort();
  }

  async describeBackend(): Promise<SecureStorageBackendDescription> {
    return {
      type: 'plaintext-file',
      location: this.filePath,
      keyCount: (await this.list()).length,
    };
  }

  async loadEntries(): Promise<Record<string, string>> {
    const entries: Record<string, string> = {};

    try {
      const content = await readFile(this.filePath, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed === '' || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx === -1) continue;
        const key = trimmed.slice(0, eqIdx).trim();
        let value = trimmed.slice(eqIdx + 1).trim();
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }
        entries[key] = value;
      }
    } catch {
      // Missing or unreadable plaintext storage behaves like an empty store.
    }

    return entries;
  }

  private async saveEntries(entries: Record<string, string>): Promise<void> {
    await ensurePrivateDir(dirname(this.filePath));

    const lines = Object.entries(entries).map(
      ([key, value]) => `${key}=${quoteEnvValue(value)}`
    );
    const content = lines.length > 0 ? `${lines.join('\n')}\n` : '';
    const tmpPath = join(
      dirname(this.filePath),
      `.${basename(this.filePath)}.${process.pid}.${Date.now()}.tmp`
    );

    await writeFile(tmpPath, content, { mode: PRIVATE_FILE_MODE, flag: 'wx' });
    await chmodIfSupported(tmpPath, PRIVATE_FILE_MODE);
    await rename(tmpPath, this.filePath);
    await chmodIfSupported(this.filePath, PRIVATE_FILE_MODE);
  }
}

export function createPlaintextFileSecureStorage(filePath: string): PlaintextFileSecureStorage {
  return new PlaintextFileSecureStorage(filePath);
}

export function parsePlaintextSecrets(content: string): Record<string, string> {
  const entries: Record<string, string> = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let value = trimmed.slice(eqIdx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    entries[key] = value;
  }
  return entries;
}

export function quoteEnvValue(value: string): string {
  if (/[\s=#"'\\]/.test(value) || value === '') {
    const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `"${escaped}"`;
  }
  return value;
}

async function ensurePrivateDir(dir: string): Promise<void> {
  try {
    await access(dir, constants.F_OK);
  } catch {
    await mkdir(dir, { recursive: true, mode: PRIVATE_DIR_MODE });
  }
  await chmodIfSupported(dir, PRIVATE_DIR_MODE);
}

async function chmodIfSupported(path: string, mode: number): Promise<void> {
  if (process.platform !== 'win32') {
    await chmod(path, mode);
  }
}
