import { mkdir, readdir, readFile, writeFile } from 'fs/promises';
import type { Dirent } from 'fs';
import { getMatterPath } from '../storage/matter.js';
import type { UnknownWorkProduct } from './types.js';

export interface WorkProductStoreDocument {
  formatVersion: number;
  matterName: string;
  revision: number;
  workProduct: UnknownWorkProduct;
  createdAt: string;
  updatedAt: string;
}

export interface WorkProductStorageResult {
  imported: number;
  skipped: number;
}

const WORK_PRODUCT_FORMAT_VERSION = 1;
const WORK_PRODUCT_DIR = '_state/work-products';

function workProductPath(matterName: string, workProductId: string): string {
  return getMatterPath(matterName, WORK_PRODUCT_DIR, `${workProductId}.json`);
}

function workProductsDir(matterName: string): string {
  return getMatterPath(matterName, WORK_PRODUCT_DIR);
}

export async function loadWorkProductDocument(
  matterName: string,
  workProductId: string,
): Promise<WorkProductStoreDocument | undefined> {
  try {
    const raw = await readFile(workProductPath(matterName, workProductId), 'utf-8');
    return JSON.parse(raw) as WorkProductStoreDocument;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return undefined;
    }
    throw error;
  }
}

export function createWorkProductDocument(
  matterName: string,
  workProduct: UnknownWorkProduct,
): WorkProductStoreDocument {
  const now = new Date().toISOString();
  return {
    formatVersion: WORK_PRODUCT_FORMAT_VERSION,
    matterName,
    revision: 0,
    workProduct,
    createdAt: now,
    updatedAt: now,
  };
}

export async function saveWorkProductDocument(document: WorkProductStoreDocument): Promise<WorkProductStoreDocument> {
  await mkdir(workProductsDir(document.matterName), { recursive: true });
  const now = new Date().toISOString();
  const normalized: WorkProductStoreDocument = {
    ...document,
    formatVersion: WORK_PRODUCT_FORMAT_VERSION,
    updatedAt: now,
  };
  await writeFile(workProductPath(document.matterName, document.workProduct.id), JSON.stringify(normalized, null, 2), 'utf-8');
  return normalized;
}

export async function upsertWorkProduct(matterName: string, workProduct: UnknownWorkProduct): Promise<WorkProductStoreDocument> {
  const existing = await loadWorkProductDocument(matterName, workProduct.id);
  const now = new Date().toISOString();
  const next = existing
    ? {
        ...existing,
        revision: existing.revision + 1,
        workProduct: {
          ...existing.workProduct,
          ...workProduct,
          updatedAt: now,
        },
        updatedAt: now,
      }
    : {
        ...createWorkProductDocument(matterName, {
          ...workProduct,
          updatedAt: now,
          createdAt: now,
        }),
      };
  return saveWorkProductDocument(next);
}

export async function listWorkProducts(matterName: string): Promise<UnknownWorkProduct[]> {
  try {
    const dir = workProductsDir(matterName);
    const entries = await readdir(dir, { withFileTypes: true });
    const workProducts: UnknownWorkProduct[] = [];
    for (const entry of entries) {
      if (!isJsonFile(entry)) continue;
      const record = await loadWorkProductDocument(matterName, trimExtension(entry.name));
      if (record) {
        workProducts.push(record.workProduct);
      }
    }
    return workProducts.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  } catch {
    return [];
  }
}

function isJsonFile(entry: Dirent): boolean {
  return entry.isFile() && entry.name.endsWith('.json');
}

function trimExtension(fileName: string): string {
  return fileName.replace(/\.json$/, '');
}

export async function importWorkProductsFromDirectory(
  matterName: string,
): Promise<WorkProductStorageResult> {
  const existing = await listWorkProducts(matterName);
  const seen = new Set(existing.map((item) => item.id));
  const imported: string[] = [];
  const dir = workProductsDir(matterName);
  try {
    const entries = await readdir(dir);
    for (const entry of entries) {
      if (!entry.endsWith('.json')) continue;
      const workProductId = trimExtension(entry);
      if (seen.has(workProductId)) continue;
      const document = await loadWorkProductDocument(matterName, workProductId);
      if (document) {
        imported.push(document.workProduct.id);
      }
    }
  } catch {}

  return {
    imported: imported.length,
    skipped: existing.length,
  };
}
