import { mkdir, readFile, writeFile } from 'fs/promises';
import { randomUUID } from 'crypto';
import { getMatterPath } from '../storage/matter.js';
import {
  CASE_STATE_FORMAT_VERSION,
  createCaseStateDocument,
  createDefaultCaseState,
  CaseState,
  CaseStateDocument,
  CaseStateMutationContext,
  CaseStateMutationEntry,
} from './schema.js';

const CASE_STATE_FILE = '_state/case-state.json';

function statePath(matterName: string): string {
  return getMatterPath(matterName, CASE_STATE_FILE);
}

function clampConfidence(value: number): number {
  if (!Number.isFinite(value)) return 0.5;
  return Math.min(1, Math.max(0, value));
}

function normalizeInputContext(context: CaseStateMutationContext): { source: string; actor: string; runId?: string; confidence: number } {
  return {
    source: context.source || 'system',
    actor: context.actor || 'system',
    runId: context.runId,
    confidence: clampConfidence(context.confidence ?? 1),
  };
}

export async function loadCaseStateDocument(matterName: string): Promise<CaseStateDocument | undefined> {
  try {
    const raw = await readFile(statePath(matterName), 'utf-8');
    const parsed = JSON.parse(raw) as CaseStateDocument;
    return parsed;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      return undefined;
    }
    throw err;
  }
}

export async function getCaseStateDocumentOrCreate(input: { matterName: string; status?: CaseState['status']; posture?: CaseState['posture']; }): Promise<CaseStateDocument> {
  const existing = await loadCaseStateDocument(input.matterName);
  if (existing) {
    return existing;
  }

  const document = createCaseStateDocument(createDefaultCaseState({
    matterName: input.matterName,
    status: input.status,
    posture: input.posture,
  }));
  return saveCaseStateDocument(document);
}

export function newCaseStateDocument(matterName: string, state?: CaseState): CaseStateDocument {
  if (state) {
    return {
      ...createCaseStateDocument(state),
      formatVersion: CASE_STATE_FORMAT_VERSION,
    };
  }

  return createCaseStateDocument(createDefaultCaseState({ matterName }));
}

export async function saveCaseStateDocument(document: CaseStateDocument): Promise<CaseStateDocument> {
  await mkdir(getMatterPath(document.matterName, '_state'), { recursive: true });
  const normalized: CaseStateDocument = {
    ...document,
    formatVersion: CASE_STATE_FORMAT_VERSION,
    updatedAt: new Date().toISOString(),
  };
  await writeFile(statePath(document.matterName), JSON.stringify(normalized, null, 2), 'utf-8');
  return normalized;
}

export function appendMutationEntry(
  document: CaseStateDocument,
  mutation: {
    type: string;
    summary: string;
    source: string;
    actor: string;
    runId?: string;
    confidence: number;
  },
): CaseStateMutationEntry {
  return {
    mutationId: randomUUID(),
    timestamp: new Date().toISOString(),
    type: mutation.type,
    summary: mutation.summary,
    source: mutation.source,
    actor: mutation.actor,
    runId: mutation.runId,
    confidence: clampConfidence(mutation.confidence),
  };
}

export async function applyCaseStateMutation(
  input: CaseStateMutationContext & { matterName: string; type: string; summary: string },
  mutate: (state: CaseState) => CaseState,
): Promise<CaseStateDocument> {
  const normalized = normalizeInputContext(input);
  const current = await getCaseStateDocumentOrCreate({ matterName: input.matterName });
  const nextState = mutate(structuredClone(current.state));

  const mutation: CaseStateMutationEntry = {
    mutationId: randomUUID(),
    timestamp: new Date().toISOString(),
    type: input.type,
    summary: input.summary,
    source: normalized.source,
    actor: normalized.actor,
    runId: normalized.runId,
    confidence: normalized.confidence,
  };

  return saveCaseStateDocument({
    ...current,
    revision: current.revision + 1,
    updatedAt: new Date().toISOString(),
    state: nextState,
    mutationLog: [...current.mutationLog, mutation],
  });
}
