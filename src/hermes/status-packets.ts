import type { CaseStateDocument } from '../case-state/schema.js';
import { buildCaseStateSnapshot, type CaseStateSnapshot } from '../case-state/snapshot.js';
import type { CaseObligationSet } from '../case-manager/obligation-types.js';
import type { QuestionRecord } from '../questions/schema.js';
import type { HermesDiagnosticSummary, HermesUserSummary } from './protocol.js';

export interface HermesStatusPacketInput {
  matterName: string;
  runId: string;
  stateDocument: CaseStateDocument;
  obligations: CaseObligationSet;
  pendingQuestions: QuestionRecord[];
}

export interface HermesStatusPacket {
  summary: HermesUserSummary;
  diagnostics: HermesDiagnosticSummary;
}

export function buildHermesStatusPacket(input: HermesStatusPacketInput): HermesStatusPacket {
  const snapshot = buildCaseStateSnapshot(input.stateDocument.state);
  const pendingQuestionCount = input.pendingQuestions.length;
  const nextActions = deriveNextActions(input.obligations);

  return {
    summary: {
      matterName: input.matterName,
      caseStatus: snapshot.status,
      done: snapshot.done,
      missing: snapshot.missing,
      blocked: snapshot.blocked,
      unsafe: snapshot.unsafe,
      nextActions,
      pendingQuestionCount,
      pendingWorkProductCount: snapshot.workProductReadiness.count,
      openObligationCount: input.obligations.obligations.length,
    },
    diagnostics: {
      runId: input.runId,
      stateRevision: input.stateDocument.revision,
      obligationCounts: {
        total: input.obligations.obligations.length,
        ready: input.obligations.readyCount,
        blocked: input.obligations.blockedCount,
        satisfied: input.obligations.satisfiedCount,
      },
      questionCounts: {
        total: input.stateDocument.state.openQuestions.length,
        pending: pendingQuestionCount,
      },
      workProductCount: input.stateDocument.state.workProducts.length,
    },
  };
}

function deriveNextActions(obligations: CaseObligationSet): string[] {
  return obligations.obligations
    .filter((obligation) => obligation.status === 'ready')
    .map((obligation) => `${obligation.type}: ${obligation.reason}`);
}

export function summarizeCaseStateSnapshot(snapshot: CaseStateSnapshot): string {
  const blocks = snapshot.blocked.length > 0 ? `Blocked: ${snapshot.blocked.join('; ')}` : 'No blocked items';
  const misses = snapshot.missing.length > 0 ? `Missing: ${snapshot.missing.join('; ')}` : 'No missing items';
  return `${blocks}. ${misses}. Ready: ${snapshot.ready ? 'yes' : 'no'}.`;
}
