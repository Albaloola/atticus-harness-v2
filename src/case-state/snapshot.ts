import type { CaseParty, CaseState, CaseStateDocument } from './schema.js';
import { detectCriticalDeadlineUncertainty } from '../deadlines/engine.js';

export interface CaseStateSnapshot {
  matterName: string;
  status: CaseState['status'];
  ready: boolean;
  done: string[];
  missing: string[];
  blocked: string[];
  unsafe: string[];
  workProductReadiness: {
    count: number;
    completeOrBetter: number;
  };
  generatedAt: string;
}

function partiesReady(parties: CaseParty[]): boolean {
  return parties.length > 0;
}

export function buildCaseStateSnapshot(input: CaseState | CaseStateDocument): CaseStateSnapshot {
  const state = 'state' in input ? input.state : input;
  const done: string[] = [];
  const missing: string[] = [];
  const blocked: string[] = [];
  const unsafe: string[] = [];

  if (partiesReady(state.parties)) {
    done.push('parties identified');
  } else {
    missing.push('identify parties');
  }

  if (state.facts.length > 0) {
    done.push('facts captured');
  } else {
    missing.push('capture factual basis');
  }

  if (state.legalIssues.length > 0) {
    done.push('issues identified');
  } else {
    missing.push('identify legal issues');
  }

  if (state.deadlines.some((deadline) => deadline.critical && deadline.status === 'pending')) {
    blocked.push('critical deadline pending');
  }

  const deadlineUncertainty = detectCriticalDeadlineUncertainty(state);
  for (const note of deadlineUncertainty) {
    blocked.push(`deadline uncertainty: ${note}`);
  }

  const criticalOpenQuestions = state.openQuestions.filter(
    (question) => question.status === 'pending' && question.canProceedWithoutAnswer === false,
  );
  if (criticalOpenQuestions.length > 0) {
    blocked.push(`${criticalOpenQuestions.length} critical question(s) pending`);
  }

  if (state.externalActions.some((action) => action.status === 'executed' && action.actionType === 'send_email')) {
    done.push('external action executed');
  }

  if (state.evidenceItems.some((item) => !item.isPrimaryEvidence && item.sourceType === 'generated_draft')) {
    unsafe.push('generated drafts recorded as support only');
  }

  const totalWp = state.workProducts.length;
  const safeWp = state.workProducts.filter(
    (wp) => wp.readiness === 'operator_review_ready'
      || wp.readiness === 'execution_ready'
      || wp.readiness === 'file_ready',
  ).length;

  const ready = state.status !== 'blocked'
    && missing.length === 0
    && blocked.length === 0
    && state.facts.length > 0
    && state.legalIssues.length > 0;

  return {
    matterName: state.matterName,
    status: state.status,
    ready,
    done,
    missing,
    blocked,
    unsafe,
    workProductReadiness: {
      count: totalWp,
      completeOrBetter: safeWp,
    },
    generatedAt: new Date().toISOString(),
  };
}
