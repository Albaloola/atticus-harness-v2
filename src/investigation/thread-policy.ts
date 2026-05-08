import type { InvestigationThread } from '../domain/investigation-thread.js';
import {
  computeInvestigationScopeHash,
  listInvestigationThreads,
  type InvestigationStopReason,
} from './thread-store.js';

export interface InvestigationPolicyInput {
  matterName: string;
  parentThreadId?: string;
  objective: string;
  claimElements?: string[];
  evidenceScope?: string[];
  requestedDepth?: number;
  maxDepth?: number;
  budgetUsd?: number;
  estimatedCostUsd?: number;
}

export interface InvestigationPolicyDecision {
  allowed: boolean;
  scopeHash: string;
  stopReason?: InvestigationStopReason;
  blocker?: {
    objectId: string;
    reason: string;
    remediation: string;
  };
  duplicateThread?: InvestigationThread;
}

export function evaluateInvestigationPolicy(
  input: InvestigationPolicyInput,
): InvestigationPolicyDecision {
  const scopeHash = computeInvestigationScopeHash({
    matterName: input.matterName,
    parentThreadId: input.parentThreadId,
    objective: input.objective,
    claimElements: input.claimElements,
    evidenceScope: input.evidenceScope,
  });

  const duplicateThread = listInvestigationThreads(input.matterName)
    .find((thread) => thread.metadata.scopeHash === scopeHash);
  if (duplicateThread) {
    return {
      allowed: false,
      scopeHash,
      stopReason: 'duplicate_scope',
      duplicateThread,
      blocker: {
        objectId: duplicateThread.threadId,
        reason: 'Duplicate investigation scope',
        remediation: 'Reuse the existing investigation thread or change objective, claim elements, or evidence scope.',
      },
    };
  }

  const requestedDepth = input.requestedDepth ?? 0;
  const maxDepth = input.maxDepth ?? 3;
  if (requestedDepth > maxDepth) {
    return {
      allowed: false,
      scopeHash,
      stopReason: 'over_depth',
      blocker: {
        objectId: `depth:${requestedDepth}`,
        reason: `Requested investigation depth ${requestedDepth} exceeds max depth ${maxDepth}`,
        remediation: 'Reduce max-depth or complete a shallower parent investigation first.',
      },
    };
  }

  const budgetUsd = input.budgetUsd;
  const estimatedCostUsd = input.estimatedCostUsd ?? 0;
  if (budgetUsd !== undefined && budgetUsd <= estimatedCostUsd) {
    return {
      allowed: false,
      scopeHash,
      stopReason: 'budget_exhausted',
      blocker: {
        objectId: `budget:${budgetUsd}`,
        reason: `Remaining budget ${budgetUsd} is not enough for estimated cost ${estimatedCostUsd}`,
        remediation: 'Increase the local budget or narrow the investigation scope.',
      },
    };
  }

  return { allowed: true, scopeHash };
}
