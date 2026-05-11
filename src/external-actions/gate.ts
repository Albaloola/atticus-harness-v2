import {
  APPROVAL_REQUIRED_ACTION_TYPES,
  type ExternalActionExecutionMode,
  type ExternalActionRecord,
  isApprovalRequired,
  isPreparedOnlyAction as isPreparedOnlyActionType,
} from './schema.js';

export interface ExternalActionDecisionContext {
  action: ExternalActionRecord;
  executionMode?: ExternalActionExecutionMode;
  reasonHint?: string;
}

export interface ExternalActionDecision {
  allowed: boolean;
  requiresApproval: boolean;
  reason: string;
}

export interface ExternalActionArchiveResult extends ExternalActionRecord {
  status: 'archived';
  archiveReason: string;
  archivedAt: string;
}

function describeActionType(actionType: string): string {
  return actionType.replace(/_/g, ' ');
}

function requiresApproval(action: ExternalActionRecord): boolean {
  return isApprovalRequired(action.actionType);
}

export function evaluateExternalAction(action: ExternalActionRecord): ExternalActionDecision {
  if (action.status === 'executed') {
    return {
      allowed: true,
      requiresApproval: false,
      reason: 'Action already executed.',
    };
  }

  if (action.status === 'rejected') {
    return {
      allowed: false,
      requiresApproval: false,
      reason: `Action ${action.actionId} was rejected.`,
    };
  }

  if (action.status === 'archived') {
    return {
      allowed: false,
      requiresApproval: false,
      reason: `Action ${action.actionId} is archived and cannot run.`,
    };
  }

  if (!requiresApproval(action) && action.status === 'proposed') {
    return {
      allowed: true,
      requiresApproval: false,
      reason: `Action ${action.actionId} is prepare-only and does not require explicit approval.`,
    };
  }

  if (requiresApproval(action) && action.status === 'approved') {
    return {
      allowed: true,
      requiresApproval: true,
      reason: `Action ${action.actionId} is approved for ${describeActionType(action.actionType)}.`,
    };
  }

  return {
    allowed: false,
    requiresApproval: true,
    reason: `${describeActionType(action.actionType)} requires explicit approval before execution.`,
  };
}

export function evaluateExternalActionForMode(
  input: ExternalActionDecisionContext,
): ExternalActionDecision {
  const executionMode: ExternalActionExecutionMode = input.executionMode ?? 'execute';
  const requires = APPROVAL_REQUIRED_ACTION_TYPES.includes(input.action.actionType);

  if (executionMode === 'prepare_only' && requires) {
    if (input.action.status === 'rejected' || input.action.status === 'archived') {
      return {
        allowed: false,
        requiresApproval: true,
        reason: input.reasonHint
          ? input.reasonHint
          : `Action ${input.action.actionId} cannot be prepared because it was ${input.action.status}.`,
      };
    }
    if (input.reasonHint) {
      return {
        allowed: true,
        requiresApproval: true,
        reason: input.reasonHint,
      };
    }
    return {
      allowed: true,
      requiresApproval: true,
      reason: `Prepare-only mode: ${describeActionType(input.action.actionType)} can be prepared but requires explicit approval before execution.`,
    };
  }

  const decision = evaluateExternalAction(input.action);
  return {
    ...decision,
    reason: input.reasonHint ? `${decision.reason} ${input.reasonHint}`.trim() : decision.reason,
  };
}

export function archiveRejectedAction(
  action: ExternalActionRecord,
  reason: string,
  now: string = new Date().toISOString(),
): ExternalActionArchiveResult {
  return {
    ...action,
    status: 'archived',
    reason: reason.trim(),
    archiveReason: reason.trim(),
    archivedAt: now,
    updatedAt: now,
  };
}

export function isPreparedOnlyAction(action: ExternalActionRecord): boolean {
  return isPreparedOnlyActionType(action.actionType);
}
