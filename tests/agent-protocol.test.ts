import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { closeStateDb } from '../src/state/store.js';
import { deleteMatter, initMatter } from '../src/storage/matter.js';
import { loadCaseStateDocument } from '../src/case-state/store.js';
import { loadWorkProductDocument } from '../src/work-products/store.js';
import { executeAgentCommand } from '../src/agent-protocol/commands.js';
import { listPendingQuestionsFromStore, syncQuestionsForMatter } from '../src/questions/generate.js';

describe('agent-protocol', () => {
  const matterName = 'agent-protocol-test';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('starts case management and returns a status packet', async () => {
    const response = await executeAgentCommand({
      command: 'start_case_management',
      matterName,
      instruction: 'Prepare case management for the new matter.',
      source: 'agent',
    });

    expect(response.ok).toBe(true);
    expect(response.summary.caseStatus).toBe('active');
    expect(response.summary.matterName).toBe(matterName);
    expect(response.userMessage).toContain('Case management started');
  });

  it('records a user answer and refreshes obligations for resume', async () => {
    await executeAgentCommand({
      command: 'start_case_management',
      matterName,
      instruction: 'Start this case and build required artifacts.',
      source: 'agent',
    });

    await syncQuestionsForMatter({ matterName });
    const pendingQuestions = await listPendingQuestionsFromStore(matterName);
    expect(pendingQuestions.length).toBeGreaterThan(0);

    const answer = await executeAgentCommand({
      command: 'submit_user_answer',
      matterName,
      questionId: pendingQuestions[0]!.questionId,
      answer: '2026-05-10',
      source: 'agent',
    });

    expect(answer.ok).toBe(true);
    const document = await loadCaseStateDocument(matterName);
    expect(document?.state.deadlines.some((deadline) => deadline.description.includes('Final decision date'))).toBe(true);
    expect(answer.summary.blocked.length).toBe(0);
  });

  it('returns a requested document with work product id and status', async () => {
    await executeAgentCommand({
      command: 'start_case_management',
      matterName,
      instruction: 'Need chronology for the case.',
      source: 'agent',
    });

    const response = await executeAgentCommand({
      command: 'request_document',
      matterName,
      documentType: 'chronology',
      title: 'Case Chronology',
      objective: 'Capture timeline',
      source: 'agent',
    });

    expect(response.ok).toBe(true);
    expect(response.data).toBeDefined();
    const workProductId = response.data?.workProductId as string | undefined;
    expect(workProductId).toBeTruthy();

    const document = await loadWorkProductDocument(matterName, workProductId!);
    expect(document?.workProduct.type).toBe('chronology');
    expect(document?.workProduct.readiness).toBe('raw');
  });

  it('prevents sending draft email without explicit external action approval', async () => {
    await executeAgentCommand({
      command: 'start_case_management',
      matterName,
      instruction: 'Draft a response email.',
      source: 'agent',
    });

    const draft = await executeAgentCommand({
      command: 'request_email_draft',
      matterName,
      to: 'opponent@example.org',
      subject: 'Request for documents',
      source: 'agent',
      objective: 'Draft a polite records request',
    });
    const externalActionId = draft.data?.externalActionId as string | undefined;
    expect(externalActionId).toBeTruthy();

    const blocked = await executeAgentCommand({
      command: 'record_sent_email',
      matterName,
      externalActionId,
      to: 'opponent@example.org',
      subject: 'Request for documents',
      source: 'agent',
      body: 'Please provide the records.',
    });
    expect(blocked.ok).toBe(false);
    expect(blocked.userMessage).toContain('must be approved');

    const approved = await executeAgentCommand({
      command: 'approve_external_action',
      matterName,
      actionId: externalActionId,
      reason: 'User approved send',
      source: 'agent',
    });
    expect(approved.ok).toBe(true);
    expect(approved.data?.status).toBe('approved');

    const sent = await executeAgentCommand({
      command: 'record_sent_email',
      matterName,
      externalActionId,
      to: 'opponent@example.org',
      subject: 'Request for documents',
      source: 'agent',
      body: 'Please provide the records.',
    });
    expect(sent.ok).toBe(true);
  });
});
