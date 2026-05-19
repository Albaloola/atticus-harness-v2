import { addDeadline, addFact } from '../case-state/mutations.js';
import { loadCaseStateDocument, saveCaseStateDocument } from '../case-state/store.js';
import { upsertQuestion } from './store.js';

interface SubmitQuestionAnswerInput {
  matterName: string;
  questionId: string;
  answer: string;
  source?: string;
}

export async function submitQuestionAnswer(input: SubmitQuestionAnswerInput): Promise<void> {
  const document = await loadCaseStateDocument(input.matterName);
  if (!document) {
    throw new Error(`Matter state not found for ${input.matterName}`);
  }

  const target = document.state.openQuestions.find((question) => question.questionId === input.questionId);
  if (!target) {
    throw new Error(`Question ${input.questionId} is not tracked in case state`);
  }

  target.status = 'answered';
  await saveCaseStateDocument(document);
  await upsertQuestion(input.matterName, {
    ...mapOpenQuestionToAnswered(input.questionId, input.matterName),
    updatedAt: new Date().toISOString(),
    answeredAt: new Date().toISOString(),
  });

  if (target.neededFor === 'final decision date') {
    const normalized = normalizeDate(input.answer);
    if (normalized) {
      await addDeadline(input.matterName, {
        description: 'Final decision date provided by user',
        dueAt: normalized,
        critical: false,
        status: 'met',
      }, {
        source: input.source ?? 'agent',
        actor: input.source ?? 'agent',
        summary: `Answered question ${input.questionId}`,
      });
    } else {
      await addFact(input.matterName, {
        statement: `Answer for final decision date: ${input.answer}`,
        status: 'accepted',
        evidenceItemIds: [],
      }, {
        source: input.source ?? 'agent',
        actor: input.source ?? 'agent',
        summary: `Answered question ${input.questionId}`,
      });
    }
  }
}

function mapOpenQuestionToAnswered(questionId: string, matterName: string) {
  return {
    questionId,
    matterName,
    neededFor: 'final decision date',
    question: '',
    whyNeeded: 'Updated from case-state answer.',
    urgency: 'high' as const,
    answerType: 'text' as const,
    allowedFormats: ['text'],
    canProceedWithoutAnswer: false,
    consequenceIfUnknown: 'Could pause deadline planning.',
    blockedObligationIds: ['ask_missing_fact'],
    status: 'answered' as const,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    answeredAt: new Date().toISOString(),
  };
}

function normalizeDate(value: string): string | undefined {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }
  return parsed.toISOString();
}
