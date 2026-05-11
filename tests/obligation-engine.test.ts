import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { closeStateDb } from '../src/state/store.js';
import { createCaseState, addParty, addFact, addWorkProductReference } from '../src/case-state/mutations.js';
import { loadCaseStateDocument, saveCaseStateDocument } from '../src/case-state/store.js';
import { initMatter, deleteMatter } from '../src/storage/matter.js';
import type { CaseStateDocument } from '../src/case-state/schema.js';
import { generateObligationsFromCaseState } from '../src/case-manager/obligation-engine.js';
import { pickNextObligation, selectWorkObligations } from '../src/case-manager/work-selector.js';

describe('obligation-engine', () => {
  const matterName = 'obligation-test-matter';

  beforeEach(async () => {
    await initMatter(matterName);
    await createCaseState({ matterName, context: { source: 'operator', actor: 'unit-test' } });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('creates a missing final decision question obligation when the date is missing', async () => {
    const document = await loadCaseStateDocument(matterName);
    expect(document).toBeTruthy();

    const set = generateObligationsFromCaseState(document as CaseStateDocument);
    const questionObligation = set.obligations.find((obligation) => obligation.type === 'ask_missing_fact');

    expect(questionObligation).toBeDefined();
    expect(questionObligation?.status).toBe('ready');
    expect(questionObligation?.question?.neededFor).toBe('final decision date');
    expect(questionObligation?.question?.question).toContain('final decision date');
  });

  it('creates evidence-matrix obligation when no accepted matrix exists and chronology exists', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addFact(matterName, {
      statement: 'Notice of tenancy ended on 1 Jan.',
      status: 'accepted',
      evidenceItemIds: [],
    });
    await addWorkProductReference(matterName, {
      workProductId: 'wp-chrono',
      type: 'chronology',
      readiness: 'case_integrated',
      source: 'unit-test',
    });

    const document = await loadCaseStateDocument(matterName);
    const set = generateObligationsFromCaseState(document as CaseStateDocument);
    const matrix = set.obligations.find((obligation) => obligation.type === 'build_evidence_matrix');

    expect(matrix).toBeDefined();
    expect(matrix?.status).toBe('ready');
    expect(matrix?.dependencies).toContain('build_chronology');
  });

  it('uses existing accepted chronology so build_chronology is not rerun', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addFact(matterName, {
      statement: 'Final notice received after appeal deadline review.',
      status: 'accepted',
      evidenceItemIds: [],
    });
    await addWorkProductReference(matterName, {
      workProductId: 'wp-chrono',
      type: 'chronology',
      readiness: 'operator_review_ready',
      source: 'unit-test',
    });

    const document = await loadCaseStateDocument(matterName);
    const set = generateObligationsFromCaseState(document as CaseStateDocument);
    const chronology = set.obligations.find((obligation) => obligation.type === 'build_chronology');

    expect(chronology?.status).toBe('satisfied');
  });

  it('moves a blocked obligation to ready after the user answers the blocker question', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addFact(matterName, {
      statement: 'Case has a procedural decision step.',
      status: 'accepted',
      evidenceItemIds: [],
    });

    let document = await loadCaseStateDocument(matterName);
    expect(document).toBeTruthy();

    const questionId = 'q-final-decision-date';
    document!.state.openQuestions.push({
      questionId,
      neededFor: 'final decision date',
      question: 'When was the decision made?',
      urgency: 'high',
      status: 'pending',
      canProceedWithoutAnswer: false,
      blockedObligationIds: [],
      createdAt: new Date().toISOString(),
    });
    await saveCaseStateDocument(document!);

    const blockedSet = generateObligationsFromCaseState(await loadCaseStateDocument(matterName) as CaseStateDocument);
    const blockedObligation = blockedSet.obligations.find((obligation) => obligation.type === 'ask_missing_fact');
    expect(blockedObligation?.status).toBe('blocked');
    expect(blockedObligation?.blockers).toContain(questionId);

    document = await loadCaseStateDocument(matterName);
    const answeredQuestion = document!.state.openQuestions.find((item) => item.questionId === questionId);
    expect(answeredQuestion).toBeTruthy();
    answeredQuestion!.status = 'answered';
    await saveCaseStateDocument(document!);

    const resumedSet = generateObligationsFromCaseState(await loadCaseStateDocument(matterName) as CaseStateDocument);
    const resumedObligation = resumedSet.obligations.find((obligation) => obligation.type === 'ask_missing_fact');
    expect(resumedObligation?.status).toBe('ready');
    expect(resumedObligation?.blockers).toHaveLength(0);
  });

  it('selects ready work using readiness and minimum-work heuristics', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addFact(matterName, {
      statement: 'Chronology-relevant fact exists.',
      status: 'accepted',
      evidenceItemIds: [],
    });

    const set = generateObligationsFromCaseState(await loadCaseStateDocument(matterName) as CaseStateDocument);
    const selected = selectWorkObligations(set.obligations, { maxItems: 2 });
    expect(selected.length).toBeGreaterThan(0);
    expect(selected[0]?.status).toBe('ready');
    expect(pickNextObligation(set.obligations)?.obligationId).toBe(selected[0]?.obligationId);
  });

  it('ignores completed phases unless case-state evidence exists', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addFact(matterName, {
      statement: 'Chronology-relevant fact exists.',
      status: 'accepted',
      evidenceItemIds: [],
    });

    const byPhases = generateObligationsFromCaseState(
      await loadCaseStateDocument(matterName) as CaseStateDocument,
      { completedPhases: ['build_chronology'] },
    );
    const chronology = byPhases.obligations.find((obligation) => obligation.type === 'build_chronology');

    expect(chronology?.status).toBe('ready');
  });
});
