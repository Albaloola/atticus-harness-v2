import { hashText } from '../extraction/hash.js';
import type { CaseStateDocument } from '../case-state/schema.js';
import { loadCaseStateDocument } from '../case-state/store.js';
import { getRuntimeValue, setRuntimeValue } from '../state/runtime-kv.js';

const WORK_UNIT_LEDGER_KEY = 'runtime.workUnitLedger.v1';
const WORK_UNIT_LEDGER_FORMAT_VERSION = 1;

export type WorkUnitLedgerStatus = 'running' | 'completed' | 'interrupted' | 'orphaned' | 'failed';

export interface WorkUnitLedgerEntry {
  workUnitId: string;
  matterName: string;
  obligationId: string;
  taskId: string;
  runId: string;
  workerId?: string;
  provider?: string;
  model: string;
  inputStateHash: string;
  status: WorkUnitLedgerStatus;
  startedAt: string;
  updatedAt: string;
  partialOutputs: string[];
  appliedCaseUpdateIds: string[];
  workProductIds: string[];
  questionIds: string[];
  retryCount: number;
  failureReason?: string;
  costUsd?: number;
}

interface WorkUnitLedgerDocument {
  formatVersion: number;
  matterName: string;
  updatedAt: string;
  units: WorkUnitLedgerEntry[];
}

interface InternalWorkUnitLedgerDocument extends WorkUnitLedgerDocument {
  units: Array<WorkUnitLedgerEntry & { _isLegacy?: boolean }>;
}

export interface StartWorkUnitInput {
  obligationId: string;
  taskId: string;
  runId?: string;
  workerId?: string;
  provider?: string;
  model: string;
  inputStateHash?: string;
  now?: string;
  unitId?: string;
  retryCount?: number;
}

export interface UpdateWorkUnitPatch {
  status?: WorkUnitLedgerStatus;
  failureReason?: string;
  costUsd?: number;
  retryCount?: number;
  partialOutput?: string;
  partialOutputs?: string[];
  appliedCaseUpdateId?: string;
  appliedCaseUpdateIds?: string[];
  workProductId?: string;
  workProductIds?: string[];
  questionId?: string;
  questionIds?: string[];
  startedAt?: string;
  updatedAt?: string;
}

export interface WorkUnitListFilter {
  status?: WorkUnitLedgerStatus | WorkUnitLedgerStatus[];
  obligationId?: string;
  taskId?: string;
  runId?: string;
}

export interface WorkUnitLedgerReport {
  matterName: string;
  totalUnits: number;
  active: number;
  completed: number;
  interrupted: number;
  orphaned: number;
  failed: number;
}

export interface LegacyWorkUnitSummary {
  workUnitId: string;
  status: WorkUnitLedgerStatus;
  updatedAt: string;
}

function emptyLedger(matterName: string): WorkUnitLedgerDocument {
  return {
    formatVersion: WORK_UNIT_LEDGER_FORMAT_VERSION,
    matterName,
    updatedAt: new Date().toISOString(),
    units: [],
  };
}

export function loadWorkUnitLedger(matterName: string): WorkUnitLedgerDocument {
  const raw = getRuntimeValue<InternalWorkUnitLedgerDocument>(matterName, WORK_UNIT_LEDGER_KEY);
  if (!raw) {
    return emptyLedger(matterName);
  }

  return {
    ...raw,
    formatVersion: WORK_UNIT_LEDGER_FORMAT_VERSION,
    units: Array.isArray(raw.units) ? raw.units : [],
    updatedAt: raw.updatedAt ?? new Date().toISOString(),
  };
}

function saveWorkUnitLedger(matterName: string, document: WorkUnitLedgerDocument): void {
  const normalized: WorkUnitLedgerDocument = {
    ...document,
    formatVersion: WORK_UNIT_LEDGER_FORMAT_VERSION,
    updatedAt: new Date().toISOString(),
    units: [...document.units],
  };
  setRuntimeValue(matterName, WORK_UNIT_LEDGER_KEY, normalized);
}

function normalizeStringList(values: unknown): string[] {
  if (!Array.isArray(values)) return [];
  return values
    .filter((value): value is string => typeof value === 'string' && value.length > 0)
    .map((value) => value.trim())
    .filter((value, index, all) => all.indexOf(value) === index);
}

function normalizeEntry(entry: WorkUnitLedgerEntry): WorkUnitLedgerEntry {
  return {
    ...entry,
    status: entry.status,
    workUnitId: entry.workUnitId?.trim() || fallbackId(entry),
    matterName: entry.matterName,
    obligationId: entry.obligationId,
    taskId: entry.taskId,
    runId: entry.runId ?? 'unknown-run',
    model: entry.model || 'unknown',
    startedAt: entry.startedAt || new Date().toISOString(),
    updatedAt: entry.updatedAt || new Date().toISOString(),
    inputStateHash: entry.inputStateHash || hashText(`no-case:${entry.matterName}:${entry.obligationId}:${entry.taskId}`),
    partialOutputs: normalizeStringList(entry.partialOutputs),
    appliedCaseUpdateIds: normalizeStringList(entry.appliedCaseUpdateIds),
    workProductIds: normalizeStringList(entry.workProductIds),
    questionIds: normalizeStringList(entry.questionIds),
    retryCount: Number.isFinite(entry.retryCount) ? Math.max(0, Math.floor(entry.retryCount)) : 0,
    costUsd: typeof entry.costUsd === 'number' && Number.isFinite(entry.costUsd) ? entry.costUsd : undefined,
    failureReason: typeof entry.failureReason === 'string' && entry.failureReason.length > 0
      ? entry.failureReason
      : undefined,
  };
}

function fallbackId(entry: WorkUnitLedgerEntry): string {
  return hashText(`${entry.matterName}|${entry.obligationId}|${entry.taskId}|${entry.runId}|${entry.startedAt}`);
}

function listWithFilter(matterName: string, filter: WorkUnitListFilter = {}): WorkUnitLedgerEntry[] {
  const document = loadWorkUnitLedger(matterName);
  const normalizedUnits = document.units.map(normalizeEntry);
  const statusFilter = filter.status
    ? new Set(Array.isArray(filter.status) ? filter.status : [filter.status])
    : null;

  return normalizedUnits
    .filter((unit) => (statusFilter ? statusFilter.has(unit.status) : true))
    .filter((unit) => !filter.obligationId || unit.obligationId === filter.obligationId)
    .filter((unit) => !filter.taskId || unit.taskId === filter.taskId)
    .filter((unit) => !filter.runId || unit.runId === filter.runId)
    .sort((a, b) => {
      if (a.startedAt !== b.startedAt) return b.startedAt.localeCompare(a.startedAt);
      if (a.updatedAt !== b.updatedAt) return b.updatedAt.localeCompare(a.updatedAt);
      return b.workUnitId.localeCompare(a.workUnitId);
    });
}

export async function computeCaseStateHash(matterName: string): Promise<string> {
  const document = await loadCaseStateDocument(matterName);
  if (!document) {
    return hashText(`runtime-no-case:${matterName}`);
  }
  return computeCaseStateHashFromDocument(document);
}

export function computeCaseStateHashFromDocument(document: CaseStateDocument): string {
  const normalized = stableNormalize({
    revision: document.revision,
    updatedAt: document.updatedAt,
    matterName: document.matterName,
    state: document.state,
  });
  return hashText(JSON.stringify(normalized));
}

export async function startWorkUnit(
  matterName: string,
  input: StartWorkUnitInput,
): Promise<WorkUnitLedgerEntry> {
  const now = input.now ?? new Date().toISOString();
  const inputStateHash = input.inputStateHash ?? await computeCaseStateHash(matterName);
  const runId = input.runId ?? 'unknown-run';

  const document = loadWorkUnitLedger(matterName);
  const existing = document.units.find((unit) =>
    unit.status === 'running' &&
    unit.taskId === input.taskId &&
    unit.obligationId === input.obligationId &&
    unit.runId === runId &&
    unit.inputStateHash === inputStateHash &&
    unit.model === input.model &&
    unit.provider === input.provider &&
    unit.workerId === input.workerId
  );
  if (existing) {
    return normalizeEntry(existing);
  }

  const entry: WorkUnitLedgerEntry = normalizeEntry({
    workUnitId: input.unitId ?? deterministicWorkUnitId({
      matterName,
      obligationId: input.obligationId,
      taskId: input.taskId,
      runId,
      workerId: input.workerId,
      provider: input.provider,
      model: input.model,
      inputStateHash,
      startedAt: now,
    }),
    matterName,
    obligationId: input.obligationId,
    taskId: input.taskId,
    runId,
    workerId: input.workerId,
    provider: input.provider,
    model: input.model,
    inputStateHash,
    status: 'running',
    startedAt: now,
    updatedAt: now,
    partialOutputs: [],
    appliedCaseUpdateIds: [],
    workProductIds: [],
    questionIds: [],
    retryCount: Number.isFinite(input.retryCount) ? Math.max(0, Math.floor(input.retryCount!)) : 0,
    costUsd: undefined,
  });

  const next = dedupeById([...document.units, entry]);
  saveWorkUnitLedger(matterName, {
    ...document,
    units: next,
  });
  return normalizeEntry(entry);
}

export function listWorkUnits(matterName: string, filter: WorkUnitListFilter = {}): WorkUnitLedgerEntry[] {
  return listWithFilter(matterName, filter);
}

export function getWorkUnit(matterName: string, workUnitId: string): WorkUnitLedgerEntry | undefined {
  const document = loadWorkUnitLedger(matterName);
  return document.units.find((unit) => unit.workUnitId === workUnitId);
}

export function getLatestWorkUnitForTask(matterName: string, taskId: string): WorkUnitLedgerEntry | undefined {
  const list = listWorkUnits(matterName, { taskId });
  return list[0];
}

export function updateWorkUnit(
  matterName: string,
  workUnitId: string,
  patch: UpdateWorkUnitPatch,
): WorkUnitLedgerEntry | undefined {
  const document = loadWorkUnitLedger(matterName);
  const index = document.units.findIndex((unit) => unit.workUnitId === workUnitId);
  if (index < 0) return undefined;

  const now = patch.updatedAt ?? new Date().toISOString();
  const current = document.units[index];
  if (!current) return undefined;

  const next: WorkUnitLedgerEntry = normalizeEntry({
    ...current,
    status: patch.status ?? current.status,
    failureReason: patch.failureReason ?? current.failureReason,
    costUsd: patch.costUsd ?? current.costUsd,
    retryCount: patch.retryCount ?? current.retryCount,
    startedAt: patch.startedAt ?? current.startedAt,
    partialOutputs: mergeUnique(current.partialOutputs, patch.partialOutput ? [patch.partialOutput] : patch.partialOutputs),
    appliedCaseUpdateIds: mergeUnique(current.appliedCaseUpdateIds, patch.appliedCaseUpdateId ? [patch.appliedCaseUpdateId] : patch.appliedCaseUpdateIds),
    workProductIds: mergeUnique(current.workProductIds, patch.workProductId ? [patch.workProductId] : patch.workProductIds),
    questionIds: mergeUnique(current.questionIds, patch.questionId ? [patch.questionId] : patch.questionIds),
    updatedAt: now,
  });

  const nextUnits = [...document.units];
  nextUnits[index] = next;
  saveWorkUnitLedger(matterName, {
    ...document,
    units: nextUnits,
  });
  return next;
}

export function markWorkUnitInterrupted(matterName: string, workUnitId: string, reason?: string): WorkUnitLedgerEntry | undefined {
  return updateWorkUnit(matterName, workUnitId, { status: 'interrupted', failureReason: reason });
}

export function markWorkUnitOrphaned(matterName: string, workUnitId: string, reason?: string): WorkUnitLedgerEntry | undefined {
  return updateWorkUnit(matterName, workUnitId, { status: 'orphaned', failureReason: reason ?? 'Work unit was orphaned.' });
}

export function markWorkUnitFailed(
  matterName: string,
  workUnitId: string,
  reason?: string,
  costUsd?: number,
): WorkUnitLedgerEntry | undefined {
  return updateWorkUnit(matterName, workUnitId, {
    status: 'failed',
    failureReason: reason,
    costUsd,
  });
}

export function completeWorkUnit(
  matterName: string,
  workUnitId: string,
  costUsd?: number,
): WorkUnitLedgerEntry | undefined {
  return updateWorkUnit(matterName, workUnitId, {
    status: 'completed',
    costUsd,
  });
}

export function incrementWorkUnitRetryCount(
  matterName: string,
  workUnitId: string,
): WorkUnitLedgerEntry | undefined {
  const unit = getWorkUnit(matterName, workUnitId);
  if (!unit) return undefined;
  return updateWorkUnit(matterName, workUnitId, { retryCount: unit.retryCount + 1 });
}

export function setWorkUnitCost(
  matterName: string,
  workUnitId: string,
  costUsd?: number,
): WorkUnitLedgerEntry | undefined {
  return updateWorkUnit(matterName, workUnitId, { costUsd });
}

export function listWorkUnitReport(matterName: string): WorkUnitLedgerReport {
  const units = listWorkUnits(matterName);
  return {
    matterName,
    totalUnits: units.length,
    active: units.filter((unit) => unit.status === 'running').length,
    completed: units.filter((unit) => unit.status === 'completed').length,
    interrupted: units.filter((unit) => unit.status === 'interrupted').length,
    orphaned: units.filter((unit) => unit.status === 'orphaned').length,
    failed: units.filter((unit) => unit.status === 'failed').length,
  };
}

export function interruptWorkUnit(matterName: string, workUnitId: string): WorkUnitLedgerEntry | undefined {
  return markWorkUnitInterrupted(matterName, workUnitId);
}

export function orphanWorkUnit(matterName: string, workUnitId: string, reason?: string): WorkUnitLedgerEntry | undefined {
  return markWorkUnitOrphaned(matterName, workUnitId, reason);
}

export function failWorkUnit(
  matterName: string,
  workUnitId: string,
  reason: string,
  costUsd?: number,
): WorkUnitLedgerEntry | undefined {
  return markWorkUnitFailed(matterName, workUnitId, reason, costUsd);
}

export function bumpWorkUnitRetry(matterName: string, workUnitId: string): WorkUnitLedgerEntry | undefined {
  return incrementWorkUnitRetryCount(matterName, workUnitId);
}

export function appendWorkUnitOutputs(
  matterName: string,
  workUnitId: string,
  input: {
    partialOutputs?: string[];
    appliedCaseUpdates?: string[];
    workProductsCreated?: string[];
    questionsCreated?: string[];
  },
): WorkUnitLedgerEntry | undefined {
  return updateWorkUnit(matterName, workUnitId, {
    partialOutputs: input.partialOutputs,
    appliedCaseUpdateIds: input.appliedCaseUpdates,
    workProductIds: input.workProductsCreated,
    questionIds: input.questionsCreated,
  });
}

function dedupeById(entries: WorkUnitLedgerEntry[]): WorkUnitLedgerEntry[] {
  const ordered = [...entries].map((entry) => normalizeEntry(entry));
  const seen = new Set<string>();
  const deduped: WorkUnitLedgerEntry[] = [];
  for (const entry of ordered) {
    if (seen.has(entry.workUnitId)) continue;
    seen.add(entry.workUnitId);
    deduped.push(entry);
  }
  return deduped.sort((a, b) => {
    if (a.startedAt !== b.startedAt) return b.startedAt.localeCompare(a.startedAt);
    return b.workUnitId.localeCompare(a.workUnitId);
  });
}

function mergeUnique(values: string[], incoming?: string[]): string[] {
  if (!incoming || incoming.length === 0) return normalizeStringList(values);
  return normalizeStringList([...values, ...incoming]);
}

function deterministicWorkUnitId(input: {
  matterName: string;
  obligationId: string;
  taskId: string;
  runId: string;
  workerId?: string;
  provider?: string;
  model: string;
  inputStateHash: string;
  startedAt: string;
}): string {
  const normalized = stableNormalize(input);
  return hashText(JSON.stringify(normalized)).slice(0, 16);
}

function stableNormalize(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => stableNormalize(item));
  }
  if (value && typeof value === 'object' && value.constructor === Object) {
    const output: Record<string, unknown> = {};
    const keys = Object.keys(value).sort();
    for (const key of keys) {
      output[key] = stableNormalize((value as Record<string, unknown>)[key]);
    }
    return output;
  }
  return value;
}
