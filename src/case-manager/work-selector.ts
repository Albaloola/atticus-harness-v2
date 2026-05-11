import type { CaseObligation } from './obligation-types.js';

const STATUS_PRIORITY: Record<CaseObligation['status'], number> = {
  blocked: 0,
  pending: 1,
  failed: 2,
  cancelled: 3,
  running: 4,
  ready: 5,
  satisfied: 6,
};

const URGENCY_PRIORITY: Record<CaseObligation['urgency'], number> = {
  low: 0,
  medium: 1,
  high: 2,
  critical: 3,
};

export interface WorkSelectorOptions {
  includeSatisfied?: boolean;
  maxItems?: number;
  allowBlocked?: boolean;
}

export function selectWorkObligations(
  obligations: CaseObligation[],
  options: WorkSelectorOptions = {},
): CaseObligation[] {
  const includeSatisfied = options.includeSatisfied ?? false;
  const allowBlocked = options.allowBlocked ?? false;
  const maxItems = options.maxItems ?? 4;

  const filtered = obligations.filter((obligation) => {
    if (!includeSatisfied && obligation.status === 'satisfied') {
      return false;
    }
    if (!allowBlocked && obligation.status === 'blocked') {
      return false;
    }
    return true;
  });

  return [...filtered].sort(compareObligationPriority).slice(0, maxItems);
}

export function pickNextObligation(
  obligations: CaseObligation[],
  options: WorkSelectorOptions = {},
): CaseObligation | undefined {
  return selectWorkObligations(obligations, options)[0];
}

export function compareObligationPriority(a: CaseObligation, b: CaseObligation): number {
  const statusDelta = STATUS_PRIORITY[b.status] - STATUS_PRIORITY[a.status];
  if (statusDelta !== 0) return statusDelta;

  const urgencyDelta = URGENCY_PRIORITY[b.urgency] - URGENCY_PRIORITY[a.urgency];
  if (urgencyDelta !== 0) return urgencyDelta;

  const workUnitsDelta = a.estimatedWorkUnits - b.estimatedWorkUnits;
  if (workUnitsDelta !== 0) return workUnitsDelta;

  const typeDelta = a.type.localeCompare(b.type);
  return typeDelta;
}
