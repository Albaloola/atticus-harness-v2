import type { ExternalActionRecord as CaseStateExternalActionRecord } from '../case-state/schema.js';

export type ExternalActionType =
  | 'send_email'
  | 'file_document'
  | 'submit_complaint'
  | 'contact_third_party'
  | 'pay_fee'
  | 'concede_position'
  | 'withdraw_claim'
  | 'accept_settlement'
  | 'other';

export type ExternalActionExecutionMode = 'prepare_only' | 'execute';

export type ExternalActionLifecycleStatus =
  | 'proposed'
  | 'prepared'
  | 'approved'
  | 'executed'
  | 'rejected'
  | 'archived'
  | 'cancelled';

export interface ExternalActionRecord {
  actionId: string;
  matterName: string;
  actionType: ExternalActionType;
  status: ExternalActionLifecycleStatus;
  requestedBy: string;
  requestedAt: string;
  updatedAt: string;
  summary: string;
  reason?: string;
  source?: string;
  runId?: string;
}

export const APPROVAL_REQUIRED_ACTION_TYPES: readonly ExternalActionType[] = [
  'send_email',
  'file_document',
  'submit_complaint',
  'contact_third_party',
  'pay_fee',
  'concede_position',
  'withdraw_claim',
  'accept_settlement',
] as const;

export const PREPARE_ONLY_ACTION_TYPES: readonly ExternalActionType[] = ['other'];

export function isApprovalRequired(actionType: ExternalActionType): boolean {
  return APPROVAL_REQUIRED_ACTION_TYPES.includes(actionType);
}

export function isPreparedOnlyAction(actionType: ExternalActionType): boolean {
  return !isApprovalRequired(actionType);
}

export function toCaseStateActionType(actionType: ExternalActionType): CaseStateExternalActionRecord['actionType'] {
  if (actionType === 'send_email'
    || actionType === 'file_document'
    || actionType === 'submit_complaint'
    || actionType === 'contact_third_party'
    || actionType === 'other') {
    return actionType;
  }

  return 'other';
}

export function toCaseStateActionStatus(status: ExternalActionLifecycleStatus): CaseStateExternalActionRecord['status'] {
  if (status === 'prepared') {
    return 'proposed';
  }
  if (status === 'archived') {
    return 'cancelled';
  }
  return status;
}

export function buildExternalActionId(scope: string, ...parts: string[]): string {
  return `${scope}-${parts.join('-')}`.replace(/[^a-zA-Z0-9-]/g, '-').replace(/-+/g, '-');
}
