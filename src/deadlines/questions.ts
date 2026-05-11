import { randomUUID } from 'crypto';
import type { CaseState } from '../case-state/schema.js';
import type { QuestionRecord } from '../questions/schema.js';

const FINAL_DECISION_KEY = 'final decision date';

export function isFinalDecisionDateMissing(state: CaseState): boolean {
  const known = state.deadlines.some((deadline) => /final\s+decision|judicial\s+review|appeal\s+window/i.test(deadline.description));
  if (known) {
    return false;
  }

  const answered = state.openQuestions.some(
    (question) => question.neededFor === FINAL_DECISION_KEY && question.status === 'answered',
  );
  if (answered) {
    return false;
  }

  const pending = state.openQuestions.some(
    (question) => question.neededFor === FINAL_DECISION_KEY && question.status === 'pending',
  );
  if (pending) {
    return false;
  }

  return true;
}

export function buildFinalDecisionQuestion(matterName: string): QuestionRecord {
  const now = new Date().toISOString();
  return {
    questionId: `q-${randomUUID()}`,
    matterName,
    neededFor: FINAL_DECISION_KEY,
    question: 'What is the final decision date from the authority or body?',
    whyNeeded: 'Deadline planning and route safety depends on the final decision timing.',
    urgency: 'critical',
    answerType: 'date',
    allowedFormats: ['ISO date', 'long date'],
    canProceedWithoutAnswer: false,
    consequenceIfUnknown: 'Limitation and challenge windows cannot be trusted without this date.',
    blockedObligationIds: ['ask_missing_fact'],
    status: 'pending',
    createdAt: now,
    updatedAt: now,
  };
}

export function buildMissingFinalDecisionQuestionIfNeeded(state: CaseState): QuestionRecord[] {
  if (!isFinalDecisionDateMissing(state)) {
    return [];
  }
  return [buildFinalDecisionQuestion(state.matterName)];
}
