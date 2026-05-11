import { READINESS_ORDER } from '../work-products/contracts.js';
import type { CaseState, CaseStateDocument, OpenQuestionRecord } from '../case-state/schema.js';
import { isWorkProductType } from '../work-products/types.js';
import type { CaseObligation, CaseObligationSet, ObligationQuestion, ObligationStatus, ObligationType, ObligationUrgency } from './obligation-types.js';

type CaseStateInput = CaseState | CaseStateDocument;

export interface ObligationGeneratorOptions {
  completedPhases?: string[];
}

interface RequirementRule {
  type: ObligationType;
  urgency: ObligationUrgency;
  estimatedWorkUnits: number;
  readinessRequirement: CaseObligation['readinessRequirement'];
  targetWorkProductType?: CaseObligation['targetWorkProductType'];
  dependencies: string[];
  isSatisfied: (state: CaseState) => boolean;
  isApplicable: (state: CaseState) => boolean;
  missingReason: string;
  questionFactory?: (state: CaseState, existingQuestion?: OpenQuestionRecord) => ObligationQuestion | undefined;
}

const readinessThreshold = 'case_integrated';
const MISSING_FINAL_DECISION = 'final decision date';

const obligationRules: RequirementRule[] = [
  {
    type: 'identify_parties',
    urgency: 'critical',
    estimatedWorkUnits: 1,
    readinessRequirement: 'raw',
    dependencies: [],
    isApplicable: () => true,
    isSatisfied: (state) => state.parties.length > 0,
    missingReason: 'Identify claim parties before drafting obligations.',
  },
  {
    type: 'extract_key_dates',
    urgency: 'high',
    estimatedWorkUnits: 2,
    readinessRequirement: 'raw',
    dependencies: ['identify_parties'],
    isApplicable: (state) => state.deadlines.length === 0,
    isSatisfied: (state) => state.deadlines.length > 0,
    missingReason: 'Capture explicit key dates before scheduling work.',
  },
  {
    type: 'build_chronology',
    urgency: 'high',
    estimatedWorkUnits: 3,
    readinessRequirement: 'case_integrated',
    targetWorkProductType: 'chronology',
    dependencies: ['identify_parties'],
    isApplicable: (state) => state.facts.length > 0 || state.evidenceItems.length > 0,
    isSatisfied: (state) => hasWorkProductAtLeast(state, 'chronology', readinessThreshold),
    missingReason: 'Create a chronology from the captured facts and documents.',
  },
  {
    type: 'build_evidence_matrix',
    urgency: 'high',
    estimatedWorkUnits: 3,
    readinessRequirement: 'case_integrated',
    targetWorkProductType: 'evidence_matrix',
    dependencies: ['build_chronology'],
    isApplicable: () => true,
    isSatisfied: (state) => hasWorkProductAtLeast(state, 'evidence_matrix', readinessThreshold),
    missingReason: 'Build an evidence matrix for factual-grounding and burden mapping.',
  },
  {
    type: 'identify_legal_issues',
    urgency: 'high',
    estimatedWorkUnits: 2,
    readinessRequirement: 'structured',
    dependencies: ['build_chronology'],
    isApplicable: (state) => state.legalIssues.length === 0,
    isSatisfied: (state) => state.legalIssues.length > 0,
    missingReason: 'Identify the legal and procedural issues before route assessment.',
  },
  {
    type: 'ask_missing_fact',
    urgency: 'critical',
    estimatedWorkUnits: 1,
    readinessRequirement: 'raw',
    dependencies: [],
    isApplicable: (state) => !hasFinalDecisionDeadline(state) || isFinalDecisionQuestionPending(state),
    isSatisfied: (state) => hasFinalDecisionDeadline(state),
    missingReason: 'Ask for a final decision date to make deadline planning safe.',
    questionFactory: buildFinalDecisionQuestion,
  },
  {
    type: 'research_authorities',
    urgency: 'medium',
    estimatedWorkUnits: 4,
    readinessRequirement: 'legally_reviewed',
    targetWorkProductType: 'legal_research_memo',
    dependencies: ['identify_legal_issues'],
    isApplicable: (state) => state.legalIssues.length > 0,
    isSatisfied: (state) => hasWorkProductAtLeast(state, 'legal_research_memo', 'case_integrated'),
    missingReason: 'Research primary legal authorities after issue identification.',
  },
];

export function generateObligationsFromCaseState(
  input: CaseStateInput,
  options: ObligationGeneratorOptions = {},
): CaseObligationSet {
  const state = 'state' in input ? input.state : input;
  const now = new Date().toISOString();
  const obligations: CaseObligation[] = [];

  // completedPhases is intentionally ignored to keep obligations case-state-first.
  void options.completedPhases;

  const applicableRules = obligationRules.filter((rule) => rule.isApplicable(state));

  const generated = new Set<string>();
  for (const rule of applicableRules) {
    generated.add(rule.type);
    const blockers: string[] = [];
    const pendingQuestion = findPendingMissingFactQuestion(state, rule.type);
    if (pendingQuestion) {
      blockers.push(pendingQuestion.questionId);
    }

    const dependencyBlocked = rule.dependencies.some((dependencyType) => {
      const dependency = obligations.find((obligation) => obligation.type === dependencyType);
      return !dependency || dependency.status !== 'satisfied';
    });

    if (dependencyBlocked) {
      blockers.push(...rule.dependencies.filter((dependencyType) => !isDependencySatisfied(obligations, dependencyType)));
    }

    const isSatisfied = rule.isSatisfied(state);
    let status: ObligationStatus = 'pending';
    if (isSatisfied) {
      status = 'satisfied';
    } else if (pendingQuestion || dependencyBlocked) {
      status = 'blocked';
    } else {
      status = 'ready';
    }

    const question = pendingQuestion ? undefined : rule.questionFactory?.(state, findAnyQuestionForNeed(state, rule.type));

    if (rule.type === 'ask_missing_fact' && isSatisfied) {
      continue;
    }

    obligations.push({
      obligationId: rule.type,
      matterName: state.matterName,
      type: rule.type,
      status,
      readinessRequirement: rule.readinessRequirement,
      targetWorkProductType: rule.targetWorkProductType,
      dependencies: [...rule.dependencies],
      blockers,
      reason: rule.missingReason,
      question: isSatisfied ? undefined : question,
      urgency: rule.urgency,
      estimatedWorkUnits: rule.estimatedWorkUnits,
      createdAt: now,
      updatedAt: now,
      lastError: dependencyBlocked ? 'Dependency not satisfied' : undefined,
    });
  }

  // Add deterministic default for dependency tracking that can become unsatisfied
  // when a dependency is not part of this generated list.
  for (const obligation of obligations) {
    obligation.dependencies = obligation.dependencies.filter((dependency) => generated.has(dependency));
  }

  return {
    matterName: state.matterName,
    generatedAt: now,
    obligations,
    blockedCount: obligations.filter((item) => item.status === 'blocked').length,
    readyCount: obligations.filter((item) => item.status === 'ready').length,
    satisfiedCount: obligations.filter((item) => item.status === 'satisfied').length,
  };
}

export function refreshObligationBlocking(
  input: CaseObligationSet,
  state: CaseState,
): CaseObligationSet {
  const now = new Date().toISOString();
  const refreshed = input.obligations.map((obligation) => {
    const updated = { ...obligation, updatedAt: now };
    if (updated.status !== 'running' && updated.status !== 'failed' && updated.status !== 'cancelled' && updated.status !== 'satisfied') {
      const openQuestion = findPendingMissingFactQuestion(state, updated.type);
      const dependencyBlocked = updated.dependencies.some((dependencyType) => {
        const dependency = input.obligations.find((item) => item.type === dependencyType);
        return !dependency || dependency.status !== 'satisfied';
      });
      if (openQuestion) {
        updated.status = 'blocked';
        updated.blockers = [openQuestion.questionId, ...updated.dependencies];
      } else if (dependencyBlocked) {
        updated.status = 'blocked';
        updated.blockers = [...updated.dependencies];
      } else {
        updated.status = 'ready';
        updated.blockers = [];
      }
    }
    return updated;
  });
  return {
    ...input,
    obligations: refreshed,
    blockedCount: refreshed.filter((item) => item.status === 'blocked').length,
    readyCount: refreshed.filter((item) => item.status === 'ready').length,
    satisfiedCount: refreshed.filter((item) => item.status === 'satisfied').length,
    generatedAt: now,
  };
}

export function hasWorkProductAtLeast(
  state: CaseState,
  type: string,
  minimumReadiness: string,
): boolean {
  if (!isWorkProductType(type)) {
    return false;
  }
  const minimumIndex = READINESS_ORDER.indexOf(minimumReadiness as any);
  if (minimumIndex < 0) return false;

  return state.workProducts.some((entry) => {
    if (entry.type !== type) {
      return false;
    }
    const readinessIndex = READINESS_ORDER.indexOf(entry.readiness as any);
    return readinessIndex >= minimumIndex;
  });
}

function isDependencySatisfied(obligations: CaseObligation[], type: string): boolean {
  return obligations.some((obligation) => obligation.type === type && obligation.status === 'satisfied');
}

function findPendingMissingFactQuestion(state: CaseState, obligationType: string): OpenQuestionRecord | undefined {
  const neededFor = obligationType === 'ask_missing_fact' ? MISSING_FINAL_DECISION : obligationType;
  return state.openQuestions.find(
    (question) => question.status === 'pending'
      && !question.canProceedWithoutAnswer
      && question.neededFor === neededFor,
  );
}

function findAnyQuestionForNeed(state: CaseState, obligationType: string): OpenQuestionRecord | undefined {
  const neededFor = obligationType === 'ask_missing_fact' ? MISSING_FINAL_DECISION : obligationType;
  return state.openQuestions.find((question) => question.neededFor === neededFor && question.status === 'pending');
}

function hasFinalDecisionDeadline(state: CaseState): boolean {
  return state.deadlines.some(
    (deadline) => /final\s+decision|judicial\s+review|appeal\s+window/i.test(deadline.description),
  );
}

function isFinalDecisionQuestionPending(state: CaseState): boolean {
  return state.openQuestions.some(
    (question) => question.neededFor === MISSING_FINAL_DECISION && question.status === 'pending',
  );
}

function isFinalDecisionQuestionAnswered(state: CaseState): boolean {
  return state.openQuestions.some(
    (question) => question.neededFor === MISSING_FINAL_DECISION && question.status === 'answered',
  );
}

function buildFinalDecisionQuestion(state: CaseState): ObligationQuestion {
  const existing = state.openQuestions.find(
    (question) => question.neededFor === MISSING_FINAL_DECISION && question.status === 'pending',
  );

  return {
    questionId: existing?.questionId ?? `q-${MISSING_FINAL_DECISION.replace(/\\s+/g, '-')}`,
    neededFor: MISSING_FINAL_DECISION,
    question: 'What is the final decision date from the university body, tribunal, or authority?',
    urgency: 'critical',
    canProceedWithoutAnswer: false,
    consequenceIfUnknown: 'Deadline and route planning remain provisional with increased risk of missed response periods.',
  };
}
