import { loadCaseStateDocument, saveCaseStateDocument } from '../case-state/store.js';
import type { CaseState } from '../case-state/schema.js';
import { listQuestions, upsertQuestion } from './store.js';
import type { QuestionRecord } from './schema.js';
import {
  buildFinalDecisionQuestion,
  isFinalDecisionDateMissing as isFinalDecisionMissingFromDeadlineModule,
} from '../deadlines/questions.js';

const FINAL_DECISION_KEY = 'final decision date';

export interface CaseQuestionOptions {
  matterName: string;
}

export async function syncQuestionsForMatter(options: CaseQuestionOptions): Promise<QuestionRecord[]> {
  const document = await loadCaseStateDocument(options.matterName);
  if (!document) {
    return [];
  }
  const generated = generateMissingFactQuestions(document.state);
  for (const question of generated) {
    if (question.neededFor !== FINAL_DECISION_KEY) {
      continue;
    }
    const exists = document.state.openQuestions.some((item) => item.neededFor === FINAL_DECISION_KEY && item.status === 'pending');
    if (!exists) {
      document.state.openQuestions.push({
        questionId: question.questionId,
        neededFor: FINAL_DECISION_KEY,
        question: question.question,
        urgency: question.urgency,
        status: 'pending',
        canProceedWithoutAnswer: false,
        blockedObligationIds: [],
        createdAt: question.createdAt,
      });
      await saveCaseStateDocument(document);
    }
    await upsertQuestion(options.matterName, question);
  }
  return generated;
}

export function generateMissingFactQuestions(state: CaseState): QuestionRecord[] {
  return isFinalDecisionMissingFromDeadlineModule(state) ? [createFinalDecisionDateQuestion(state.matterName)] : [];
}

export function isFinalDecisionDateMissing(state: CaseState): boolean {
  return isFinalDecisionMissingFromDeadlineModule(state);
}

export async function listPendingQuestionsFromStore(matterName: string): Promise<QuestionRecord[]> {
  const [storedQuestions, state] = await Promise.all([
    listQuestions(matterName),
    loadCaseStateDocument(matterName),
  ]);

  const fromStore = storedQuestions.filter((question) => question.status === 'pending');
  if (fromStore.length > 0) {
    return fromStore;
  }

  if (!state) {
    return [];
  }
  const fromState = state.state.openQuestions
    .filter((question) => question.status === 'pending')
    .map((question) => mapOpenQuestionToStoreQuestion(question, matterName));
  return fromState;
}

function createFinalDecisionDateQuestion(matterName: string): QuestionRecord {
  return buildFinalDecisionQuestion(matterName);
}

function mapOpenQuestionToStoreQuestion(question: {
  questionId: string;
  neededFor: string;
  question: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  canProceedWithoutAnswer: boolean;
  blockedObligationIds: string[];
  createdAt: string;
}, matterName: string): QuestionRecord {
  const now = new Date().toISOString();
  return {
    questionId: question.questionId,
    matterName,
    neededFor: question.neededFor,
    question: question.question,
    whyNeeded: 'Generated from case-state-required missing information.',
    urgency: question.urgency,
    answerType: 'text',
    allowedFormats: ['text', 'short note'],
    canProceedWithoutAnswer: question.canProceedWithoutAnswer,
    consequenceIfUnknown: 'May pause unrelated planning if critical.',
    blockedObligationIds: question.blockedObligationIds,
    status: 'pending',
    createdAt: question.createdAt,
    updatedAt: now,
  };
}
