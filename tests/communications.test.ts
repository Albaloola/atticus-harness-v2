import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ingestIncomingEmail } from '../src/communications/email-ingest.js';
import { draftIncomingEmailReply } from '../src/communications/email-draft.js';
import {
  archiveRejectedAction,
  evaluateExternalAction,
  evaluateExternalActionForMode,
} from '../src/external-actions/gate.js';
import type { ExternalActionRecord } from '../src/external-actions/schema.js';
import { closeStateDb } from '../src/state/store.js';
import { createCaseState } from '../src/case-state/mutations.js';
import { loadWorkProductDocument } from '../src/work-products/store.js';
import { deleteMatter, initMatter } from '../src/storage/matter.js';
import { loadCaseStateDocument } from '../src/case-state/store.js';

describe('communications and external action control', () => {
  const matterName = 'communications-milestone-10';

  beforeEach(async () => {
    await initMatter(matterName);
    await createCaseState({ matterName, context: { source: 'operator', actor: 'unit-test' } });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('updates case state and extracts a deadline from incoming email', async () => {
    const result = await ingestIncomingEmail({
      matterName,
      subject: 'Response needed',
      body: 'Please reply by 2026-07-04 with the requested details.',
      from: 'opponent@example.org',
      source: 'email',
      actor: 'operator',
    });

    const state = await loadCaseStateDocument(matterName);
    expect(state?.state.communications.some((entry) => entry.communicationId === result.communicationId)).toBe(true);
    expect(result.deadlineAt).toBe('2026-07-04T00:00:00.000Z');
    expect(state?.state.deadlines.some((deadline) => deadline.description.includes('Email response deadline from opponent@example.org'))).toBe(true);
  });

  it('creates draft email work product and marks external action as proposed, without sending', async () => {
    const draft = await draftIncomingEmailReply({
      matterName,
      to: 'opponent@example.org',
      subject: 'Request for docs',
      objective: 'Prepare a draft response requesting copies of the files.',
      source: 'agent',
      actor: 'operator',
      requestedAt: '2026-01-01T00:00:00.000Z',
    });

    const state = await loadCaseStateDocument(matterName);
    const action = state?.state.externalActions.find((item) => item.actionId === draft.externalActionId);
    expect(action?.status).toBe('proposed');
    expect(action?.actionType).toBe('send_email');
    const outgoingSent = state?.state.communications.some((item) => item.type === 'outgoing' && item.summary.includes('Request for docs'));
    expect(outgoingSent).toBe(false);

    const workProduct = await loadWorkProductDocument(matterName, draft.workProductId);
    expect(workProduct?.workProduct.id).toBe(draft.workProductId);
    expect(workProduct?.workProduct.type).toBe('draft_email');
  });

  it('requires explicit approval before execution for sensitive external actions', () => {
    const pending: ExternalActionRecord = {
      actionId: 'ext-1',
      matterName,
      actionType: 'send_email',
      status: 'proposed',
      requestedBy: 'operator',
      requestedAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z',
      summary: 'Prepare and send reply draft.',
      source: 'agent',
    };

    const prepareMode = evaluateExternalActionForMode({ action: pending, executionMode: 'prepare_only' });
    expect(prepareMode.allowed).toBe(true);
    expect(prepareMode.requiresApproval).toBe(true);

    const executeMode = evaluateExternalActionForMode({ action: pending, executionMode: 'execute' });
    expect(executeMode.allowed).toBe(false);
    expect(executeMode.requiresApproval).toBe(true);

    const approved: ExternalActionRecord = {
      ...pending,
      status: 'approved',
      actionId: 'ext-1-approved',
    };
    const executeApproved = evaluateExternalActionForMode({ action: approved, executionMode: 'execute' });
    expect(executeApproved.allowed).toBe(true);
  });

  it('archives rejected actions with a reason and preserves audit state', () => {
    const rejected: ExternalActionRecord = {
      actionId: 'ext-2',
      matterName,
      actionType: 'file_document',
      status: 'rejected',
      requestedBy: 'operator',
      requestedAt: '2026-01-02T00:00:00.000Z',
      updatedAt: '2026-01-02T00:00:00.000Z',
      summary: 'File complaint draft',
      source: 'agent',
    };

    const archived = archiveRejectedAction(rejected, 'User rejected due to low confidence');
    expect(archived.status).toBe('archived');
    expect(archived.reason).toBe('User rejected due to low confidence');
    expect(archived.archiveReason).toBe('User rejected due to low confidence');

    const decision = evaluateExternalAction(archived);
    expect(decision.allowed).toBe(false);
    expect(decision.requiresApproval).toBe(false);
  });
});

