import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { closeStateDb } from '../src/state/store.js';
import { createCaseState, addParty, addFact, addWorkProductReference } from '../src/case-state/mutations.js';
import { initMatter, deleteMatter } from '../src/storage/matter.js';
import { loadCaseStateDocument, saveCaseStateDocument } from '../src/case-state/store.js';
import { generateObligationsFromCaseState } from '../src/case-manager/obligation-engine.js';
import {
  listPendingQuestionsFromStore,
  syncQuestionsForMatter,
} from '../src/questions/generate.js';
import { submitQuestionAnswer } from '../src/questions/answers.js';

describe('questions', () => {
  const matterName = 'questions-test-matter';

  beforeEach(async () => {
    await initMatter(matterName);
    await createCaseState({ matterName, context: { source: 'operator', actor: 'unit-test' } });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('creates one targeted question when final decision date is missing', async () => {
    const questions = await syncQuestionsForMatter({ matterName });
    const pending = await listPendingQuestionsFromStore(matterName);

    expect(questions).toHaveLength(1);
    expect(questions[0]?.neededFor).toBe('final decision date');
    expect(pending).toHaveLength(1);
    expect(pending[0]?.blockedObligationIds).toContain('ask_missing_fact');
  });

  it('records the answer and updates case state for resumed obligations', async () => {
    const questions = await syncQuestionsForMatter({ matterName });
    expect(questions[0]).toBeDefined();

    await submitQuestionAnswer({
      matterName,
      questionId: questions[0]!.questionId,
      answer: '2026-03-15',
      source: 'agent',
    });

    const updated = await loadCaseStateDocument(matterName);
    const answered = updated?.state.openQuestions.find((question) => question.questionId === questions[0]!.questionId);
    expect(answered?.status).toBe('answered');

    const obligations = generateObligationsFromCaseState(updated!);
    expect(obligations.obligations.find((obligation) => obligation.type === 'ask_missing_fact')).toBeUndefined();
    expect(
      updated?.state.deadlines.some((deadline) => deadline.description === 'Final decision date provided by user'),
    ).toBe(true);
  });

  it('keeps unrelated non-critical blockers from halting unrelated obligation work', async () => {
    await addParty(matterName, { name: 'Alex Student', role: 'client' });
    await addFact(matterName, {
      statement: 'Claim fact supporting filing history.',
      status: 'accepted',
      evidenceItemIds: [],
    });
    await addWorkProductReference(matterName, {
      workProductId: 'wp-chrono',
      type: 'chronology',
      readiness: 'operator_review_ready',
      source: 'unit-test',
    });
    const state = await loadCaseStateDocument(matterName);
    state!.state.openQuestions.push({
      questionId: 'q-noncritical',
      neededFor: 'non critical detail',
      question: 'What is your preferred font?',
      urgency: 'low',
      status: 'pending',
      canProceedWithoutAnswer: true,
      blockedObligationIds: [],
      createdAt: new Date().toISOString(),
    });
    await saveCaseStateDocument(state!);

    const obligations = generateObligationsFromCaseState((await loadCaseStateDocument(matterName))!);
    const chronology = obligations.obligations.find((obligation) => obligation.type === 'build_chronology');
    expect(chronology?.status).toBe('satisfied');

    const fromGenerator = await syncQuestionsForMatter({ matterName });
    expect(fromGenerator[0]?.question).toContain('What is the final decision date');
  });

  it('returns pending questions as JSON-ready payload', async () => {
    await syncQuestionsForMatter({ matterName });
    const pending = await listPendingQuestionsFromStore(matterName);
    const payload = JSON.stringify(pending, null, 2);
    expect(payload.includes('final decision date')).toBe(true);
  });
});
