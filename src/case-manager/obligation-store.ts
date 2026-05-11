import { mkdir, readFile, writeFile } from 'fs/promises';
import type { CaseObligation } from './obligation-types.js';
import { getMatterPath } from '../storage/matter.js';

const OBLIGATION_STORE_FILE = '_state/obligations.json';
const OBLIGATION_FORMAT_VERSION = 1;

interface CaseObligationStoreDocument {
  formatVersion: number;
  matterName: string;
  revision: number;
  obligations: CaseObligation[];
  updatedAt: string;
}

export interface SaveObligationsResult {
  added: number;
  updated: number;
  removed: number;
}

function obligationPath(matterName: string): string {
  return getMatterPath(matterName, OBLIGATION_STORE_FILE);
}

export async function loadObligationDocument(
  matterName: string,
): Promise<CaseObligationStoreDocument | undefined> {
  try {
    const raw = await readFile(obligationPath(matterName), 'utf-8');
    return JSON.parse(raw) as CaseObligationStoreDocument;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return undefined;
    }
    throw error;
  }
}

export async function listObligations(
  matterName: string,
): Promise<CaseObligation[]> {
  const document = await loadObligationDocument(matterName);
  return document?.obligations ?? [];
}

export async function saveObligationDocument(
  document: CaseObligationStoreDocument,
): Promise<CaseObligationStoreDocument> {
  await mkdir(getMatterPath(document.matterName, '_state'), { recursive: true });
  const normalized = {
    ...document,
    formatVersion: OBLIGATION_FORMAT_VERSION,
    updatedAt: new Date().toISOString(),
  };
  await writeFile(obligationPath(document.matterName), JSON.stringify(normalized, null, 2), 'utf-8');
  return normalized;
}

export async function upsertObligations(
  matterName: string,
  obligations: CaseObligation[],
): Promise<SaveObligationsResult> {
  const existing = await loadObligationDocument(matterName);
  const existingMap = new Map(existing?.obligations.map((obligation) => [obligation.obligationId, obligation]));

  let added = 0;
  let updated = 0;

  const nextObligations = obligations.map((incoming) => {
    const current = existingMap.get(incoming.obligationId);
    if (!current) {
      added += 1;
      return incoming;
    }
    updated += 1;
    return {
      ...current,
      ...incoming,
      // Keep a true append-only-ish ordering for mutation visibility.
      updatedAt: incoming.updatedAt,
      createdAt: current.createdAt,
    };
  });

  const removed = Math.max(0, (existing?.obligations.length ?? 0) - nextObligations.length);

  await saveObligationDocument({
    formatVersion: OBLIGATION_FORMAT_VERSION,
    matterName,
    revision: (existing?.revision ?? 0) + 1,
    obligations: nextObligations,
    updatedAt: new Date().toISOString(),
  });

  return { added, updated, removed };
}

export async function removeAllObligations(matterName: string): Promise<void> {
  const existing = await loadObligationDocument(matterName);
  if (!existing) {
    return;
  }

  await saveObligationDocument({
    ...existing,
    revision: existing.revision + 1,
    obligations: [],
  });
}
