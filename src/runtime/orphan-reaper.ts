import { listObligations, upsertObligations } from '../case-manager/obligation-store.js';
import type { CaseObligation } from '../case-manager/obligation-types.js';
import { listWorkUnits, markWorkUnitOrphaned, type WorkUnitLedgerEntry } from './work-unit-ledger.js';

export interface ReapOrphanedWorkUnitsOptions {
  matterName: string;
  now?: string;
  staleAfterMs?: number;
  activeWorkerIds?: readonly string[];
}

export interface OrphanedWorkUnitReport {
  matterName: string;
  orphanedWorkUnits: WorkUnitLedgerEntry[];
  updatedObligations: CaseObligation[];
}

export function findOrphanedWorkUnits(options: ReapOrphanedWorkUnitsOptions): WorkUnitLedgerEntry[] {
  const nowMs = Date.parse(options.now ?? new Date().toISOString());
  const staleAfterMs = options.staleAfterMs ?? 2 * 60 * 1000;
  const activeWorkerIds = new Set(options.activeWorkerIds ?? []);

  const runningUnits = listWorkUnits(options.matterName, { status: 'running' });
  return runningUnits.filter((unit) => {
    if (unit.workerId && activeWorkerIds.has(unit.workerId)) {
      return false;
    }
    const updatedAtMs = Date.parse(unit.updatedAt);
    if (Number.isNaN(updatedAtMs)) return false;
    return nowMs - updatedAtMs >= staleAfterMs;
  });
}

export async function reapOrphanedWorkUnits(
  options: ReapOrphanedWorkUnitsOptions,
): Promise<OrphanedWorkUnitReport> {
  const orphaned = findOrphanedWorkUnits(options);
  const reason = 'No active worker lease found for running work unit.';

  const updatedUnits = orphaned
    .map((unit) => markWorkUnitOrphaned(options.matterName, unit.workUnitId, reason))
    .filter((unit): unit is WorkUnitLedgerEntry => unit !== undefined);

  const obligationIds = new Set(updatedUnits.map((unit) => unit.obligationId));
  const existingObligations = await listObligations(options.matterName);
  const now = options.now ?? new Date().toISOString();
  const updatedObligations = existingObligations.map((obligation): CaseObligation => {
    if (!obligationIds.has(obligation.obligationId) || obligation.status === 'satisfied') {
      return obligation;
    }
    const blockers = Array.from(new Set([...obligation.blockers, 'agent_orphaned']));
    return {
      ...obligation,
      status: 'failed' as const,
      lastError: reason,
      blockers,
      updatedAt: now,
    };
  });

  const anyChanges = updatedObligations.some((obligation, index) => {
    return obligation !== existingObligations[index];
  });

  if (updatedUnits.length > 0 && anyChanges) {
    await upsertObligations(options.matterName, updatedObligations);
  }

  return {
    matterName: options.matterName,
    orphanedWorkUnits: updatedUnits,
    updatedObligations,
  };
}
