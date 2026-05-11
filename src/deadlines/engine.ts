import type { CaseState } from '../case-state/schema.js';
import { assessScotlandJudicialReviewUrgency, JUDICIAL_REVIEW_DAYS } from './rules/scotland.js';
import {
  type BaseDeadline,
  type DeadlineCategory,
  type DeadlineEngineResult,
  type DeadlineStatus,
  type DeadlineUrgency,
} from './schema.js';
import { isFinalDecisionDateMissing, buildFinalDecisionQuestion } from './questions.js';

const UNKNOWN_SOURCE = 'deadline-engine';

interface ExtractedDecisionDate {
  dueAt: string;
  source: 'case-state';
}

export interface DeadlineEngineOptions {
  now?: string;
  jurisdiction?: string;
}

export interface DeadlineEngineInput {
  state: CaseState;
  options?: DeadlineEngineOptions;
}

function normalizeDueAt(raw: string): string | undefined {
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }
  return parsed.toISOString();
}

function mapToCaseUrgency(status: DeadlineStatus, urgency?: DeadlineUrgency): DeadlineUrgency {
  if (urgency) {
    return urgency;
  }
  if (status === 'met') {
    return 'low';
  }
  if (status === 'missed') {
    return 'critical';
  }
  return 'medium';
}

function buildCalculatedDeadline(
  descriptor: {
    matterName: string;
    category: DeadlineCategory;
    description: string;
    dueAt: string;
    critical: boolean;
    status: DeadlineStatus;
    confidence: number;
    source: string;
    sourceReference?: string;
    notes?: string;
    urgency?: DeadlineUrgency;
  },
): BaseDeadline {
  const now = new Date().toISOString();
  return {
    deadlineId: `d-${Math.random().toString(36).slice(2, 12)}`,
    matterName: descriptor.matterName,
    category: descriptor.category,
    description: descriptor.description,
    dueAt: descriptor.dueAt,
    critical: descriptor.critical,
    status: descriptor.status,
    source: descriptor.source,
    confidence: descriptor.confidence,
    sourceReference: descriptor.sourceReference,
    notes: descriptor.notes,
    urgency: mapToCaseUrgency(descriptor.status, descriptor.urgency),
    isCalculated: true,
    createdAt: now,
    updatedAt: now,
  };
}

function extractFinalDecisionDate(state: CaseState): ExtractedDecisionDate | undefined {
  const finalDecisionDeadline = state.deadlines.find(
    (item) => /final\s+decision|judicial\s+review|appeal\s+window/i.test(item.description),
  );

  if (!finalDecisionDeadline) return undefined;
  const normalized = normalizeDueAt(finalDecisionDeadline.dueAt);
  if (!normalized) return undefined;

  return {
    dueAt: normalized,
    source: 'case-state',
  };
}

export function calculateCaseDeadlines(input: DeadlineEngineInput): DeadlineEngineResult {
  const state = input.state;
  const now = input.options?.now;
  const jurisdiction = input.options?.jurisdiction?.toLowerCase() ?? 'scotland';

  const calculated: BaseDeadline[] = [];
  const uncertaintyNotes: string[] = [];
  const questions: string[] = [];

  const finalDecision = extractFinalDecisionDate(state);
  if (!finalDecision) {
    uncertaintyNotes.push('Final decision date not available in case deadlines.');
    if (isFinalDecisionDateMissing(state)) {
      const question = buildFinalDecisionQuestion(state.matterName);
      questions.push(question.questionId);
      uncertaintyNotes.push(`Missing final decision date: ${question.question}`);
    }
    return {
      calculated,
      questions,
      uncertaintyNotes,
    };
  }

  if (jurisdiction === 'scotland' || jurisdiction === 'uk' || jurisdiction === 'scotland/uk') {
    const result = assessScotlandJudicialReviewUrgency({
      decisionDate: finalDecision.dueAt,
      now,
    });

    if (!Number.isFinite(result.daysUntilDeadline)) {
      calculated.push(
        buildCalculatedDeadline({
          matterName: state.matterName,
          category: 'judicial_review',
          description: 'Judicial review decision-window could not be calculated (decision date format issue).',
          dueAt: finalDecision.dueAt,
          critical: false,
          status: 'unknown',
          confidence: result.confidence,
          source: UNKNOWN_SOURCE,
          sourceReference: finalDecision.source,
          notes: 'Invalid or ambiguous final decision date.',
          urgency: 'medium',
        }),
      );
      uncertaintyNotes.push('Could not safely calculate judicial review deadline from the provided final-decision date.');
      return {
        calculated,
        questions,
        uncertaintyNotes,
      };
    }

    const daysRemaining = result.daysUntilDeadline;
    const status = result.status === 'missed' ? 'missed' : result.urgency === 'critical' ? 'pending' : 'pending';
    calculated.push(
      buildCalculatedDeadline({
        matterName: state.matterName,
        category: 'judicial_review',
        description: `Scottish judicial review filing deadline (~${JUDICIAL_REVIEW_DAYS} days after decision date)`,
        dueAt: result.deadlineAt,
        critical: result.urgency === 'critical' || daysRemaining <= 42,
        status,
        confidence: result.confidence,
        source: `${UNKNOWN_SOURCE}:scotland`,
        sourceReference: finalDecision.source,
        notes: `Estimated ${result.status} with ${daysRemaining} day(s) remaining before JR window.`,
        urgency: result.urgency,
      }),
    );

    return {
      calculated,
      questions,
      uncertaintyNotes,
    };
  }

  uncertaintyNotes.push(`No jurisdiction-specific deadline rules loaded for: ${jurisdiction}`);
  return {
    calculated,
    questions,
    uncertaintyNotes,
  };
}

export function detectCriticalDeadlineUncertainty(state: CaseState): string[] {
  const notes = calculateCaseDeadlines({ state, options: { jurisdiction: 'scotland' } }).uncertaintyNotes;
  return notes.filter((note) => note.length > 0);
}
