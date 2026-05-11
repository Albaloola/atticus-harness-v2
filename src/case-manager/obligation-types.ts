import type { WorkProductReadiness, WorkProductType } from '../work-products/types.js';

export type ObligationStatus =
  | 'pending'
  | 'ready'
  | 'running'
  | 'blocked'
  | 'satisfied'
  | 'failed'
  | 'cancelled';

export type ObligationUrgency = 'low' | 'medium' | 'high' | 'critical';

export type ObligationType =
  | 'identify_parties'
  | 'extract_key_dates'
  | 'build_chronology'
  | 'build_evidence_matrix'
  | 'identify_legal_issues'
  | 'research_authorities'
  | 'assess_judicial_review_route'
  | 'assess_ordinary_action_route'
  | 'assess_complaint_route'
  | 'calculate_deadline'
  | 'ask_missing_fact'
  | 'draft_document'
  | 'verify_document'
  | 'prepare_email'
  | 'triage_incoming_email'
  | 'update_action_plan'
  | 'export_review_bundle';

export const OBLIGATION_TYPES: ObligationType[] = [
  'identify_parties',
  'extract_key_dates',
  'build_chronology',
  'build_evidence_matrix',
  'identify_legal_issues',
  'research_authorities',
  'assess_judicial_review_route',
  'assess_ordinary_action_route',
  'assess_complaint_route',
  'calculate_deadline',
  'ask_missing_fact',
  'draft_document',
  'verify_document',
  'prepare_email',
  'triage_incoming_email',
  'update_action_plan',
  'export_review_bundle',
];

export interface ObligationQuestion {
  questionId: string;
  neededFor: string;
  question: string;
  urgency: ObligationUrgency;
  canProceedWithoutAnswer: boolean;
  consequenceIfUnknown: string;
}

export interface CaseObligation {
  obligationId: string;
  matterName: string;
  type: ObligationType;
  status: ObligationStatus;
  readinessRequirement: WorkProductReadiness;
  targetWorkProductType?: WorkProductType;
  dependencies: string[];
  blockers: string[];
  question?: ObligationQuestion;
  reason: string;
  urgency: ObligationUrgency;
  estimatedWorkUnits: number;
  createdAt: string;
  updatedAt: string;
  lastError?: string;
}

export interface CaseObligationSet {
  matterName: string;
  generatedAt: string;
  obligations: CaseObligation[];
  blockedCount: number;
  readyCount: number;
  satisfiedCount: number;
}
