import type { CaseStateDocument, CaseState } from '../case-state/schema.js';
import { buildCaseStateSnapshot, type CaseStateSnapshot } from '../case-state/snapshot.js';
import type { CaseObligation, CaseObligationSet } from './obligation-types.js';
import type { QuestionRecord } from '../questions/schema.js';

export type AutonomousStatus = 'managed' | 'blocked';

export interface AutonomousCaseManagerStatusInput {
  matterName: string;
  stateDocument: CaseStateDocument;
  obligations: CaseObligationSet;
  pendingQuestions: QuestionRecord[];
}

export interface AutonomousCaseManagerStatus {
  matterName: string;
  status: AutonomousStatus;
  caseStatus: CaseState['status'];
  managed: boolean;
  done: string[];
  missing: string[];
  blocked: string[];
  unsafe: string[];
  pendingQuestionCount: number;
  obligations: {
    total: number;
    ready: number;
    blocked: number;
    failed: number;
    satisfied: number;
  };
  nextActions: string[];
  lastUpdatedAt: string;
}

export function buildAutonomousCaseManagerStatus(input: AutonomousCaseManagerStatusInput): AutonomousCaseManagerStatus {
  const snapshot = buildCaseStateSnapshot(input.stateDocument.state);
  const pendingCriticalQuestions = input.pendingQuestions.filter((question) => question.status === 'pending' && question.canProceedWithoutAnswer === false);
  const blockedObligations = input.obligations.obligations.filter((obligation) => obligation.status === 'blocked');
  const failedObligations = input.obligations.obligations.filter((obligation) => obligation.status === 'failed');

  const blocked = [
    ...snapshot.blocked,
    ...blockedObligations.map((obligation) => `${obligation.type} blocked: ${obligation.reason}`),
    ...failedObligations.map((obligation) => `${obligation.type} failed: ${obligation.lastError ?? 'execution failed'}`),
    ...pendingCriticalQuestions.map((question) => `Critical question pending: ${question.question}`),
  ];

  const uniqueBlocked = dedupeText(blocked);
  const status: AutonomousStatus = uniqueBlocked.length === 0 ? 'managed' : 'blocked';

  return {
    matterName: input.matterName,
    status,
    caseStatus: input.stateDocument.state.status,
    managed: status === 'managed',
    done: snapshot.done,
    missing: snapshot.missing,
    blocked: uniqueBlocked,
    unsafe: snapshot.unsafe,
    pendingQuestionCount: input.pendingQuestions.length,
    obligations: countObligations(input.obligations.obligations),
    nextActions: deriveNextActions(input.obligations),
    lastUpdatedAt: new Date().toISOString(),
  };
}

function countObligations(obligations: CaseObligation[]): AutonomousCaseManagerStatus['obligations'] {
  const ready = obligations.filter((obligation) => obligation.status === 'ready').length;
  const blocked = obligations.filter((obligation) => obligation.status === 'blocked').length;
  const failed = obligations.filter((obligation) => obligation.status === 'failed').length;
  const satisfied = obligations.filter((obligation) => obligation.status === 'satisfied').length;
  return {
    total: obligations.length,
    ready,
    blocked,
    failed,
    satisfied,
  };
}

function deriveNextActions(obligations: CaseObligationSet): string[] {
  return obligations.obligations
    .filter((obligation) => obligation.status === 'ready' || obligation.status === 'failed')
    .map((obligation) => `${obligation.type}: ${obligation.reason}`);
}

function dedupeText(values: string[]): string[] {
  const seen = new Set<string>();
  const output: string[] = [];
  for (const value of values) {
    if (seen.has(value)) continue;
    seen.add(value);
    output.push(value);
  }
  return output;
}
