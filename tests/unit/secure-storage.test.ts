import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync, statSync, readFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import {
  createPlaintextFileSecureStorage,
  getProviderKey,
  loadSecrets,
  saveSecret,
} from '../../src/config/index.ts';

describe('secure storage and secrets compatibility', () => {
  const envKey = 'OPENAI_API_KEY';
  let tmpHome: string;
  let originalHome: string | undefined;
  let originalEnv: string | undefined;

  beforeEach(() => {
    tmpHome = mkdtempSync(join(tmpdir(), 'harness-secure-storage-'));
    originalHome = process.env.HOME;
    originalEnv = process.env[envKey];
    process.env.HOME = tmpHome;
    delete process.env[envKey];
  });

  afterEach(() => {
    if (originalHome === undefined) delete process.env.HOME;
    else process.env.HOME = originalHome;
    if (originalEnv === undefined) delete process.env[envKey];
    else process.env[envKey] = originalEnv;
    rmSync(tmpHome, { recursive: true, force: true });
  });

  it('preserves existing secrets.env parsing and public helper env precedence', async () => {
    await saveSecret(envKey, 'secret-openai-key');
    process.env[envKey] = 'env-openai-key';

    await expect(loadSecrets()).resolves.toMatchObject({
      [envKey]: 'secret-openai-key',
    });
    await expect(getProviderKey('openai')).resolves.toBe('env-openai-key');
  });

  it('lists and describes the plaintext backend without leaking values', async () => {
    const storage = createPlaintextFileSecureStorage(join(tmpHome, '.atticus-harness', 'secrets.env'));

    await storage.set('FIRST_TOKEN', 'super-secret-token');
    await storage.set('SECOND_API_KEY', 'another-secret');
    await storage.delete('SECOND_API_KEY');
    await expect(storage.get('SECOND_API_KEY')).resolves.toBeUndefined();
    await storage.set('SECOND_API_KEY', 'another-secret');

    await expect(storage.list()).resolves.toEqual(['FIRST_TOKEN', 'SECOND_API_KEY']);
    const description = await storage.describeBackend();
    expect(description).toMatchObject({
      type: 'plaintext-file',
      keyCount: 2,
    });
    expect(JSON.stringify(description)).not.toContain('super-secret-token');
    expect(JSON.stringify(description)).not.toContain('another-secret');
  });

  it('writes plaintext secrets with restrictive permissions', async () => {
    const secretsPath = join(tmpHome, '.atticus-harness', 'secrets.env');
    const storage = createPlaintextFileSecureStorage(secretsPath);

    await storage.set('OPENAI_API_KEY', 'secret-openai-key');

    expect(readFileSync(secretsPath, 'utf-8')).toContain('OPENAI_API_KEY=secret-openai-key');
    if (process.platform !== 'win32') {
      expect(statSync(secretsPath).mode & 0o777).toBe(0o600);
      expect(statSync(join(tmpHome, '.atticus-harness')).mode & 0o777).toBe(0o700);
    }
  });
});
