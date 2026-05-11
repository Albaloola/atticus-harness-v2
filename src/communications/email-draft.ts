import { createHash } from 'node:crypto';
import { addWorkProductReference, createCaseState } from '../case-state/mutations.js';
import type { CaseStateMutationContext, ExternalActionRecord as CaseStateExternalActionRecord } from '../case-state/schema.js';
import { applyCaseStateMutation, getCaseStateDocumentOrCreate } from '../case-state/store.js';
import { upsertWorkProduct } from '../work-products/store.js';
import type { UnknownWorkProduct, WorkProductPayloadByType } from '../work-products/types.js';
import {
  buildExternalActionId,
  type ExternalActionRecord,
  toCaseStateActionStatus,
  toCaseStateActionType,
} from '../external-actions/schema.js';
import { summarizeEmailForDraft } from './email-triage.js';

export interface EmailDraftInput {
  matterName: string;
  to: string;
  subject: string;
  objective?: string;
  sender?: string;
  source?: string;
  actor?: string;
  runId?: string;
  requestedAt?: string;
  tone?: 'formal' | 'concise';
}

export interface EmailDraftResult {
  workProductId: string;
  communicationId: string;
  externalActionId: string;
  workProduct: UnknownWorkProduct;
  externalAction: ExternalActionRecord;
  actionSummary: string;
}

type DraftEmailPayload = WorkProductPayloadByType['draft_email'];

const DEFAULT_TONE: EmailDraftInput['tone'] = 'formal';
const SOURCE_FALLBACK = 'hermes';

function deterministicId(prefix: string, ...parts: string[]): string {
  const hash = createHash('sha256')
    .update(parts.join('|'))
    .digest('hex')
    .slice(0, 14);
  return `${prefix}-${hash}`;
}

function normalizeContext(input: EmailDraftInput, action: string): CaseStateMutationContext {
  return {
    source: input.source ?? SOURCE_FALLBACK,
    actor: input.actor ?? 'hermes',
    runId: input.runId,
    confidence: 0.95,
    summary: `${action} for ${input.matterName}`,
  };
}

function buildDraftEmailContent(input: EmailDraftInput): string {
  const toneGreeting = input.tone === 'concise' ? 'Following up:' : 'Thank you for your email.';
  const objective = input.objective?.trim() || 'Drafting a response to the incoming communication.';
  const sender = input.sender ? `, ${input.sender}` : '';
  const opening = `${toneGreeting}${sender}`;
  return [
    `Subject: ${input.subject}`,
    '',
    opening,
    '',
    'Please review and send the following draft response:',
    '',
    objective,
    '',
    'Kind regards,',
    'Atticus AI Assistant',
  ].join('\n');
}

function defaultPayload(input: EmailDraftInput): DraftEmailPayload {
  return {
    to: input.to,
    subject: input.subject,
  };
}

async function createEmailDraftWorkProduct(
  input: EmailDraftInput,
  requestedAt: string,
  requestSeed: string,
  context: CaseStateMutationContext,
): Promise<{
  workProductId: string;
  workProduct: UnknownWorkProduct;
}> {
  const workProductId = deterministicId(
    'draft-email',
    input.matterName,
    input.to,
    input.subject,
    requestSeed,
  );
  const content = buildDraftEmailContent(input);
  const summary = summarizeEmailForDraft(content);

  const workProduct: UnknownWorkProduct = {
    id: workProductId,
    matterName: input.matterName,
    type: 'draft_email',
    title: `Email response draft: ${input.subject}`,
    content,
    readiness: 'raw',
    purpose: 'Draft a response email for operator review.',
    audience: 'client',
    sourceBasis: [
      {
        sourceType: 'user_statement',
        sourceId: 'hermes-command',
        description: `Requested by ${context.actor} via ${context.source}`,
      },
    ],
    unresolvedGaps: ['Await operator send/dispatch decision', 'Address any legal-risking assertions.'],
    safetyStatus: 'safe',
    metadata: {
      tone: input.tone ?? DEFAULT_TONE,
      to: input.to,
      requestedAt,
      source: context.source,
      actor: context.actor,
    },
    payload: defaultPayload(input),
    createdAt: requestedAt,
    updatedAt: requestedAt,
  };

  await upsertWorkProduct(input.matterName, workProduct);
  return { workProductId, workProduct };
}

async function upsertDraftCommunication(input: {
  matterName: string;
  communicationId: string;
  subject: string;
  summary: string;
  occurredAt: string;
  context: CaseStateMutationContext;
}): Promise<void> {
  await applyCaseStateMutation(
    {
      matterName: input.matterName,
      source: input.context.source,
      actor: input.context.actor,
      runId: input.context.runId,
      type: 'case.communication_added',
      summary: `Prepared draft email communication ${input.communicationId}`,
      confidence: input.context.confidence,
    },
    (state) => {
      if (state.communications.some((entry) => entry.communicationId === input.communicationId)) {
        return state;
      }
      return {
        ...state,
        communications: [
          ...state.communications,
          {
            communicationId: input.communicationId,
            type: 'draft',
            channel: 'email',
            subject: input.subject,
            summary: input.summary,
            occurredAt: input.occurredAt,
          },
        ],
      };
    },
  );
}

function createProposedExternalAction(
  input: EmailDraftInput,
  communicationId: string,
  requestedAt: string,
): ExternalActionRecord {
  return {
    actionId: buildExternalActionId('ext-action', communicationId, input.to, input.subject),
    matterName: input.matterName,
    actionType: 'send_email',
    status: 'proposed',
    requestedBy: input.actor ?? 'hermes',
    requestedAt,
    updatedAt: requestedAt,
    summary: `Send draft email to ${input.to}: ${input.subject}`,
    source: input.source ?? SOURCE_FALLBACK,
    runId: input.runId,
  };
}

function toLocalActionStatus(status: CaseStateExternalActionRecord['status']): ExternalActionRecord['status'] {
  if (status === 'cancelled') {
    return 'archived';
  }
  return status;
}

function toLocalActionRecord(
  fallback: ExternalActionRecord,
  existing: CaseStateExternalActionRecord,
): ExternalActionRecord {
  return {
    ...fallback,
    actionType: existing.actionType === 'other' && fallback.actionType !== 'other'
      ? fallback.actionType
      : existing.actionType,
    status: toLocalActionStatus(existing.status),
    requestedAt: existing.requestedAt,
    updatedAt: existing.updatedAt,
    summary: existing.summary,
    requestedBy: existing.requestedBy,
  };
}

async function upsertExternalAction(input: EmailDraftInput, action: ExternalActionRecord): Promise<ExternalActionRecord> {
  await createCaseState({
    matterName: input.matterName,
    context: {
      source: input.source ?? SOURCE_FALLBACK,
      actor: input.actor ?? 'hermes',
      runId: input.runId,
      confidence: 0.95,
      summary: `Creating draft email action ${action.actionId}`,
    },
  });

  const existingDocument = await getCaseStateDocumentOrCreate({ matterName: input.matterName });
  const existing = existingDocument.state.externalActions.find((candidate) => candidate.actionId === action.actionId);
  if (existing) {
    return toLocalActionRecord(action, existing);
  }

  const now = action.requestedAt;
  await applyCaseStateMutation(
    {
      matterName: input.matterName,
      source: input.source ?? SOURCE_FALLBACK,
      actor: input.actor ?? 'hermes',
      runId: input.runId,
      type: 'case.external_action_created',
      summary: `Created external action ${action.actionId}`,
      confidence: 0.95,
    },
    (state) => ({
      ...state,
      externalActions: [
        ...state.externalActions,
        {
          actionId: action.actionId,
          actionType: toCaseStateActionType(action.actionType),
          status: toCaseStateActionStatus(action.status),
          requestedBy: action.requestedBy,
          requestedAt: action.requestedAt,
          updatedAt: now,
          summary: action.summary,
        },
      ],
    }),
  );

  return action;
}

export async function draftIncomingEmailReply(input: EmailDraftInput): Promise<EmailDraftResult> {
  if (!input.to.trim()) {
    throw new Error('Recipient (to) is required for draft email.');
  }
  if (!input.subject.trim()) {
    throw new Error('Subject is required for draft email.');
  }

  const context = normalizeContext(input, 'prepare-email-draft');
  const requestedAt = input.requestedAt ?? context.runId ?? new Date().toISOString();
  const requestSeed = input.requestedAt
    ?? context.runId
    ?? `${input.to}|${input.subject}|${input.objective ?? ''}|${input.sender ?? ''}|${input.tone ?? DEFAULT_TONE}|${input.actor ?? ''}`;
  const { workProductId, workProduct } = await createEmailDraftWorkProduct(input, requestedAt, requestSeed, context);

  const communicationId = deterministicId('draft-email-comm', input.matterName, input.to, input.subject, workProductId);
  const occurredAt = context.runId ?? new Date().toISOString();
  await upsertDraftCommunication({
    matterName: input.matterName,
    communicationId,
    subject: `Draft prepared: ${input.subject}`,
    summary: summarizeEmailForDraft(workProduct.content),
    occurredAt,
    context,
  });

  await addWorkProductReference(input.matterName, {
    workProductId,
    type: workProduct.type,
    readiness: workProduct.readiness,
    source: context.source,
    runId: context.runId,
  }, {
    source: context.source,
    actor: context.actor,
    runId: context.runId,
    confidence: context.confidence,
    summary: `Prepared draft email work product for ${input.subject}`,
  });

  const actionSeed = createProposedExternalAction(input, communicationId, requestedAt);
  const externalAction = await upsertExternalAction(input, actionSeed);

  return {
    workProductId,
    communicationId,
    externalActionId: externalAction.actionId,
    workProduct,
    externalAction,
    actionSummary: `Prepared but not sent email draft ${workProductId}`,
  };
}
