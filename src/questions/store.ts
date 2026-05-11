import { mkdir, readFile, writeFile } from 'fs/promises';
import { getMatterPath } from '../storage/matter.js';
import type { QuestionRecord, QuestionStoreDocument } from './schema.js';

const QUESTION_FILE = '_state/questions.json';
const QUESTION_FORMAT_VERSION = 1;

function questionStorePath(matterName: string): string {
  return getMatterPath(matterName, QUESTION_FILE);
}

export async function loadQuestionStore(
  matterName: string,
): Promise<QuestionStoreDocument | undefined> {
  try {
    const raw = await readFile(questionStorePath(matterName), 'utf-8');
    return JSON.parse(raw) as QuestionStoreDocument;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return undefined;
    }
    throw error;
  }
}

export async function saveQuestionStore(document: QuestionStoreDocument): Promise<QuestionStoreDocument> {
  await mkdir(getMatterPath(document.matterName, '_state'), { recursive: true });
  const normalized: QuestionStoreDocument = {
    ...document,
    formatVersion: QUESTION_FORMAT_VERSION,
    updatedAt: new Date().toISOString(),
  };
  await writeFile(questionStorePath(document.matterName), JSON.stringify(normalized, null, 2), 'utf-8');
  return normalized;
}

export async function listQuestions(matterName: string): Promise<QuestionRecord[]> {
  const document = await loadQuestionStore(matterName);
  return document?.questions ?? [];
}

export async function upsertQuestion(matterName: string, question: QuestionRecord): Promise<void> {
  const existing = await loadQuestionStore(matterName);
  const questions = existing?.questions ?? [];
  const index = questions.findIndex((item) => item.questionId === question.questionId);

  let next = questions;
  if (index >= 0) {
    next = [...questions];
    next[index] = {
      ...next[index],
      ...question,
      updatedAt: new Date().toISOString(),
    };
  } else {
    next = [...questions, question];
  }

  await saveQuestionStore({
    formatVersion: QUESTION_FORMAT_VERSION,
    matterName,
    revision: (existing?.revision ?? 0) + 1,
    questions: next,
    updatedAt: new Date().toISOString(),
  });
}
