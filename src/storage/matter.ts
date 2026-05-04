import { readFile, writeFile, mkdir, readdir, rm } from 'fs/promises';
import { join } from 'path';
import type { MatterIndex, MatterStatus, MatterConfig } from '../types/matter.js';
import { getStateDb } from '../state/store.js';

const MATTERS_ROOT = 'matters';
const INDEX_FILE = '_index.json';
const CONFIG_FILE = '_config.json';

export interface InitMatterOptions {
  config?: Partial<MatterConfig>;
}

export async function initMatter(name: string, options?: InitMatterOptions): Promise<MatterIndex> {
  if (!/^[a-zA-Z0-9_-]+$/.test(name)) {
    throw new Error(`Invalid matter name: "${name}". Use alphanumeric, hyphens, or underscores.`);
  }

  await ensureMatterDirectories(name);

  const now = new Date().toISOString();
  const index: MatterIndex = {
    name,
    created: now,
    updated: now,
    status: 'pending',
    evidenceCount: 0,
    candidateCount: 0,
    artifactCount: 0,
    config: {
      model: 'deepseek/deepseek-v4-flash',
      temperature: 0.1,
      maxTokens: 4096,
      skills: [],
      providerPolicy: {
        primaryModel: 'deepseek/deepseek-v4-flash',
        fallbackModel: 'deepseek/deepseek-v4-pro',
        maxRetries: 3,
      },
      ...options?.config,
    },
  };

  await saveMatterIndex(name, index);
  await writeDefaultConfig(name, index.config);

  return index;
}

export async function loadMatter(name: string): Promise<MatterIndex> {
  const filePath = getMatterPath(name, INDEX_FILE);
  try {
    const content = await readFile(filePath, 'utf-8');
    return JSON.parse(content) as MatterIndex;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(`Matter "${name}" not found. Run "harness init ${name}" first.`);
    }
    throw err;
  }
}

export async function saveMatterIndex(name: string, index: MatterIndex): Promise<void> {
  index.updated = new Date().toISOString();
  const filePath = getMatterPath(name, INDEX_FILE);
  await writeFile(filePath, JSON.stringify(index, null, 2), 'utf-8');
}

export function getMatterPath(name: string, ...segments: string[]): string {
  return join(MATTERS_ROOT, name, ...segments);
}

export async function listMatters(): Promise<string[]> {
  try {
    const entries = await readdir(MATTERS_ROOT, { withFileTypes: true });
    const matters: string[] = [];
    for (const entry of entries) {
      if (entry.isDirectory()) {
        try {
          await readFile(join(MATTERS_ROOT, entry.name, INDEX_FILE), 'utf-8');
          matters.push(entry.name);
        } catch {
        }
      }
    }
    return matters.sort();
  } catch {
    return [];
  }
}

export async function ensureMatterDirectories(name: string): Promise<void> {
  const dirs = [
    getMatterPath(name),
    getMatterPath(name, '_evidence'),
    getMatterPath(name, '_extractions'),
    getMatterPath(name, '_candidates'),
    getMatterPath(name, '_artifacts'),
    getMatterPath(name, '_state'),
  ];
  for (const dir of dirs) {
    await mkdir(dir, { recursive: true });
  }

  getStateDb(name);
}

export async function deleteMatter(name: string): Promise<void> {
  await rm(getMatterPath(name), { recursive: true, force: true });
}

async function writeDefaultConfig(name: string, config: MatterConfig): Promise<void> {
  const filePath = getMatterPath(name, CONFIG_FILE);
  await writeFile(filePath, JSON.stringify(config, null, 2), 'utf-8');
}
