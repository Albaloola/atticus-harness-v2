export type QuestionUrgency = 'low' | 'medium' | 'high' | 'critical';

export type QuestionAnswerType = 'date' | 'text' | 'number' | 'choice' | 'boolean';

export interface QuestionRecord {
  questionId: string;
  matterName: string;
  neededFor: string;
  question: string;
  whyNeeded: string;
  urgency: QuestionUrgency;
  answerType: QuestionAnswerType;
  allowedFormats: string[];
  canProceedWithoutAnswer: boolean;
  consequenceIfUnknown: string;
  blockedObligationIds: string[];
  status: 'pending' | 'answered';
  createdAt: string;
  updatedAt: string;
  answeredAt?: string;
}

export interface QuestionStoreDocument {
  formatVersion: number;
  matterName: string;
  revision: number;
  questions: QuestionRecord[];
  updatedAt: string;
}
