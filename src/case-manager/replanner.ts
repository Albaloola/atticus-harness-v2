import type { CaseStateDocument, CaseState } from '../case-state/schema.js';
import { loadCaseStateDocument } from '../case-state/store.js';
import { listObligations, upsertObligations } from './obligation-store.js';
import {
  generateObligationsFromCaseState,
  refreshObligationBlocking,
} from './obligation-engine.js';
import type { CaseObligation, CaseObligationSet } from './obligation-types.js';

type ReplanStateInput = CaseState | CaseStateDocument;

interface ReplanOptions {
  preserveFailure?: boolean;
}

function nowCounts(obligations: CaseObligation[]): Pick<CaseObligationSet, 'readyCount' | 'blockedCount' | 'satisfiedCount'> {
  return {
    readyCount: obligations.filter((obligation) => obligation.status === 'ready').length,
    blockedCount: obligations.filter((obligation) => obligation.status === 'blocked').length,
    satisfiedCount: obligations.filter((obligation) => obligation.status === 'satisfied').length,
  };
}

function mergeStatuses(
  generated: CaseObligation,
  existing: CaseObligation | undefined,
  preserveFailure = true,
): CaseObligation {
  if (!existing) {
    return generated;
  }

  if (existing.status === 'satisfied') {
    return {
      ...generated,
      status: 'satisfied',
      blockers: [],
      lastError: undefined,
    };
  }

  if (preserveFailure && existing.status === 'failed') {
    return {
      ...generated,
      status: 'failed',
      blockers: existing.blockers.length > 0 ? existing.blockers : generated.blockers,
      lastError: existing.lastError,
      updatedAt: new Date().toISOString(),
    };
  }

  if (existing.status === 'running' || existing.status === 'cancelled') {
    return {
      ...generated,
      status: existing.status,
      blockers: generated.blockers,
      lastError: existing.lastError,
    };
  }

  return {
    ...generated,
    lastError: existing.lastError,
  };
}

export interface ReplanResult {
  obligations: CaseObligationSet;
  persisted: boolean;
}

export async function buildReplannedObligations(
  matterName: string,
  options: ReplanOptions = {},
): Promise<ReplanResult> {
  const stateDocument = await loadCaseStateDocument(matterName);
  if (!stateDocument) {
    throw new Error(`Case state not found for ${matterName}`);
  }

  const persisted = await listObligations(matterName);
  const existingMap = new Map(persisted.map((item) => [item.obligationId, item]));
  const generated = generateObligationsFromCaseState(stateDocument.state);
  const now = new Date().toISOString();

  const merged: CaseObligation[] = generated.obligations.map((obligation) => {
    const existing = existingMap.get(obligation.obligationId);
    const mergedObligation = mergeStatuses(obligation, existing, options.preserveFailure);
    return {
      ...mergedObligation,
      createdAt: mergedObligation.createdAt || now,
      updatedAt: now,
    };
  });

  const mergedSet: CaseObligationSet = {
    ...generated,
    obligations: merged,
    ...nowCounts(merged),
    generatedAt: now,
  };

  const refreshed = refreshObligationBlocking(mergedSet, stateDocument.state);
  const counts = nowCounts(refreshed.obligations);
  const output: CaseObligationSet = {
    ...refreshed,
    readyCount: counts.readyCount,
    blockedCount: counts.blockedCount,
    satisfiedCount: counts.satisfiedCount,
  };

  await upsertObligations(matterName, output.obligations);

  return {
    obligations: output,
    persisted: true,
  };
}

export async function replanFromState(
  matterName: string,
  options: ReplanOptions = {},
): Promise<CaseObligationSet> {
  return (await buildReplannedObligations(matterName, options)).obligations;
}
