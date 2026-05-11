import { loadCaseStateDocument } from '../case-state/store.js';
import { executeObligation } from './executor.js';
import { replanFromState } from './replanner.js';
import { upsertObligations } from './obligation-store.js';
import { selectWorkObligations } from './work-selector.js';
import type { CaseObligation, CaseObligationSet } from './obligation-types.js';
import type { ExecuteObligationResult } from './executor.js';
import { listPendingQuestionsFromStore, syncQuestionsForMatter } from '../questions/generate.js';
import { buildAutonomousCaseManagerStatus, type AutonomousCaseManagerStatus } from './status.js';
import type { CaseState } from '../case-state/schema.js';
import { OBLIGATION_TYPES } from './obligation-types.js';

export interface AutonomousCaseManagerLoopOptions {
  matterName: string;
  source?: string;
  actor?: string;
  maxIterations?: number;
  maxObligationsPerIteration?: number;
}

export interface AutonomousCaseManagerExecutionRecord {
  obligationId: string;
  obligationType: CaseObligation['type'];
  status: ExecuteObligationResult['status'];
  error?: string;
  workProductId?: string;
}

export interface AutonomousCaseManagerLoopResult {
  matterName: string;
  status: AutonomousCaseManagerStatus['status'];
  statusReport: AutonomousCaseManagerStatus;
  obligations: CaseObligationSet;
  iterations: number;
  executed: AutonomousCaseManagerExecutionRecord[];
}

export async function runAutonomousCaseManagerLoop(
  options: AutonomousCaseManagerLoopOptions,
): Promise<AutonomousCaseManagerLoopResult> {
  const source = options.source ?? 'autonomous-case-manager';
  const actor = options.actor ?? 'autonomous-case-manager';
  const maxIterations = Math.max(1, options.maxIterations ?? 12);
  const maxObligationsPerIteration = Math.max(1, options.maxObligationsPerIteration ?? 8);

  let obligations = await replanFromState(options.matterName, { preserveFailure: true });
  const executed: AutonomousCaseManagerExecutionRecord[] = [];
  let iterations = 0;

  for (let iteration = 0; iteration < maxIterations; iteration += 1) {
    iterations += 1;
    const stateDocument = await loadCaseStateDocument(options.matterName);
    if (!stateDocument) {
      throw new Error(`Case state not found for ${options.matterName}`);
    }

    await syncQuestionsForMatter({ matterName: options.matterName });
    obligations = await replanFromState(options.matterName, { preserveFailure: true });

    const criticalBlockedObligationIds = buildCriticalBlockedObligationIds(stateDocument.state);
    const obligationsToRun = selectWorkObligations(obligations.obligations, {
      maxItems: maxObligationsPerIteration,
      allowBlocked: true,
      includeSatisfied: false,
    }).filter((obligation) => {
      if (obligation.status === 'blocked') {
        return canBypassBlockedDependency(obligation, criticalBlockedObligationIds);
      }
      return obligation.status === 'ready' || obligation.status === 'failed';
    });

    if (obligationsToRun.length === 0) {
      break;
    }

    const nextObligations = [...obligations.obligations];
    let madeProgress = false;

    for (const obligation of obligationsToRun) {
      const before = nextObligations.find((entry) => entry.obligationId === obligation.obligationId);
      if (!before) {
        continue;
      }

      const executionResult = await safeExecuteObligation({
        obligation: before,
        matterName: options.matterName,
        state: stateDocument.state,
        source,
        actor,
      });

      if (executionResult.status === 'blocked') {
        await syncQuestionsForMatter({ matterName: options.matterName });
      }

      const after = applyExecutionResult(before, executionResult);
      madeProgress ||= hasProgress(before, after);

      const nextIndex = nextObligations.findIndex((entry) => entry.obligationId === obligation.obligationId);
      if (nextIndex >= 0) {
        nextObligations[nextIndex] = after;
      }

      executed.push({
        obligationId: obligation.obligationId,
        obligationType: obligation.type,
        status: executionResult.status,
        error: executionResult.error,
        workProductId: executionResult.workProductId,
      });
    }

    await upsertObligations(options.matterName, nextObligations);
    obligations = await replanFromState(options.matterName, { preserveFailure: true });

    if (!madeProgress) {
      break;
    }
  }

  const stateDocument = await loadCaseStateDocument(options.matterName);
  if (!stateDocument) {
    throw new Error(`Case state not found for ${options.matterName}`);
  }
  const pendingQuestions = await listPendingQuestionsFromStore(options.matterName);
  const statusReport = buildAutonomousCaseManagerStatus({
    matterName: options.matterName,
    stateDocument,
    obligations,
    pendingQuestions,
  });

  return {
    matterName: options.matterName,
    status: statusReport.status,
    statusReport,
    obligations,
    iterations,
    executed,
  };
}

interface SafeExecuteInput {
  obligation: CaseObligation;
  matterName: string;
  state: CaseState;
  source: string;
  actor: string;
}

async function safeExecuteObligation(input: SafeExecuteInput): Promise<ExecuteObligationResult> {
  try {
    return await executeObligation({
      matterName: input.matterName,
      obligation: input.obligation,
      state: input.state,
      source: input.source,
      actor: input.actor,
    });
  } catch (error) {
    return {
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unexpected execution failure',
    };
  }
}

function applyExecutionResult(obligation: CaseObligation, result: ExecuteObligationResult): CaseObligation {
  if (result.status === 'satisfied') {
    return {
      ...obligation,
      status: 'satisfied',
      question: undefined,
      blockers: [],
      lastError: undefined,
      updatedAt: new Date().toISOString(),
    };
  }

  return {
    ...obligation,
    status: result.status === 'skipped' ? 'blocked' : result.status,
    lastError: result.error,
    question: obligation.question,
    blockers: obligation.blockers,
    updatedAt: new Date().toISOString(),
  };
}

function hasProgress(before: CaseObligation, after: CaseObligation): boolean {
  if (before.status !== after.status) return true;
  if ((before.lastError ?? '') !== (after.lastError ?? '')) return true;
  return false;
}

const knownObligationIdSet = new Set<string>(OBLIGATION_TYPES);

function canBypassBlockedDependency(
  obligation: CaseObligation,
  criticalBlockedObligationIds: Set<string>,
): boolean {
  if (!obligation.blockers || obligation.blockers.length === 0) {
    return false;
  }

  if (obligation.blockers.some((blocker) => criticalBlockedObligationIds.has(blocker))) {
    return false;
  }

  return obligation.blockers.every((blocker) => knownObligationIdSet.has(blocker));
}

function buildCriticalBlockedObligationIds(state: CaseState): Set<string> {
  const criticalQuestions = state.openQuestions.filter(
    (question) => question.status === 'pending' && !question.canProceedWithoutAnswer,
  );

  const fromExplicitLinks = new Set(
    criticalQuestions.flatMap((question) => question.blockedObligationIds),
  );
  for (const question of criticalQuestions) {
    if (!fromExplicitLinks.has(question.neededFor)) {
      fromExplicitLinks.add(question.neededFor);
    }
  }
  return fromExplicitLinks;
}
