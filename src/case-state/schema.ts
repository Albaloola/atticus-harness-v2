import type { WorkProductReadiness } from '../work-products/types.js';

export type CaseStatus = 'new' | 'active' | 'blocked' | 'ready' | 'complete' | 'archived';
export type CasePosture = 'client' | 'defendant' | 'neutral' | 'unknown';

export interface CaseParty {
  partyId: string;
  name: string;
  role: string;
  organization?: string;
  contact?: string;
}

export interface CaseRepresentative {
  representativeId: string;
  name: string;
  role: string;
  partyIds: string[];
  contact?: string;
}

export interface CaseForum {
  forumId: string;
  name: string;
  forumType: string;
  status?: string;
}

export interface CaseClaim {
  claimId: string;
  description: string;
  status: 'proposed' | 'accepted' | 'rejected' | 'resolved';
  createdAt: string;
}

export interface CaseComplaint {
  complaintId: string;
  description: string;
  status: 'draft' | 'submitted' | 'resolved' | 'closed';
  createdAt: string;
}

export interface CaseLegalRoute {
  routeId: string;
  name: string;
  status: 'identified' | 'disputed' | 'blocked' | 'active' | 'resolved';
  supportBasis: string[];
}

export interface CaseEvidenceItem {
  evidenceItemId: string;
  title: string;
  sourceType: 'file_evidence' | 'user_statement' | 'generated_draft' | 'other';
  sourceReference: string;
  status: 'accepted' | 'pending' | 'disputed' | 'rejected';
  isPrimaryEvidence: boolean;
  confidence: number;
  acceptedBy?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CaseFact {
  factId: string;
  statement: string;
  status: 'proposed' | 'accepted' | 'disputed';
  evidenceItemIds: string[];
  createdAt: string;
}

export interface CaseWorkProductReference {
  workProductId: string;
  type: string;
  readiness: WorkProductReadiness;
  linkedAt: string;
  source: string;
  runId?: string;
}

export interface OpenQuestionRecord {
  questionId: string;
  neededFor: string;
  question: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'answered' | 'closed';
  canProceedWithoutAnswer: boolean;
  blockedObligationIds: string[];
  createdAt: string;
}

export interface DeadlineRecord {
  deadlineId: string;
  description: string;
  dueAt: string;
  critical: boolean;
  status: 'pending' | 'met' | 'missed' | 'unknown';
  source?: string;
  createdAt: string;
}

export interface CommunicationRecord {
  communicationId: string;
  type: 'incoming' | 'outgoing' | 'draft';
  channel: string;
  subject: string;
  summary: string;
  occurredAt: string;
}

export interface ExternalActionRecord {
  actionId: string;
  actionType: 'send_email' | 'file_document' | 'submit_complaint' | 'contact_third_party' | 'other';
  status: 'proposed' | 'approved' | 'rejected' | 'executed' | 'cancelled';
  requestedBy: string;
  requestedAt: string;
  updatedAt: string;
  summary: string;
}

export interface CaseReadiness {
  done: string[];
  missing: string[];
  blocked: string[];
  unsafe: string[];
}

export interface CaseState {
  matterName: string;
  status: CaseStatus;
  posture: CasePosture;
  parties: CaseParty[];
  representatives: CaseRepresentative[];
  forums: CaseForum[];
  claims: CaseClaim[];
  complaints: CaseComplaint[];
  legalRoutes: CaseLegalRoute[];
  remedies: string[];
  evidenceItems: CaseEvidenceItem[];
  facts: CaseFact[];
  disputedFacts: string[];
  admissions: string[];
  legalIssues: string[];
  proceduralIssues: string[];
  deadlines: DeadlineRecord[];
  risks: string[];
  openQuestions: OpenQuestionRecord[];
  workProducts: CaseWorkProductReference[];
  communications: CommunicationRecord[];
  externalActions: ExternalActionRecord[];
  nextActions: string[];
  blockedObligations: string[];
  readiness: CaseReadiness;
}

export interface CaseStateMutationEntry {
  mutationId: string;
  timestamp: string;
  type: string;
  summary: string;
  source: string;
  actor: string;
  runId?: string;
  confidence: number;
}

export interface CaseStateDocument {
  formatVersion: number;
  matterName: string;
  revision: number;
  state: CaseState;
  updatedAt: string;
  mutationLog: CaseStateMutationEntry[];
}

export interface CaseStateInitInput {
  matterName: string;
  status?: CaseStatus;
  posture?: CasePosture;
}

export interface CaseStateMutationContext {
  source: string;
  actor: string;
  runId?: string;
  confidence?: number;
  summary?: string;
}

export const CASE_STATE_FORMAT_VERSION = 1;

export function createDefaultCaseState(input: CaseStateInitInput): CaseState {
  return {
    matterName: input.matterName,
    status: input.status ?? 'new',
    posture: input.posture ?? 'unknown',
    parties: [],
    representatives: [],
    forums: [],
    claims: [],
    complaints: [],
    legalRoutes: [],
    remedies: [],
    evidenceItems: [],
    facts: [],
    disputedFacts: [],
    admissions: [],
    legalIssues: [],
    proceduralIssues: [],
    deadlines: [],
    risks: [],
    openQuestions: [],
    workProducts: [],
    communications: [],
    externalActions: [],
    nextActions: [],
    blockedObligations: [],
    readiness: {
      done: [],
      missing: [],
      blocked: [],
      unsafe: [],
    },
  };
}

export function createCaseStateDocument(state: CaseState): CaseStateDocument {
  const now = new Date().toISOString();
  return {
    formatVersion: CASE_STATE_FORMAT_VERSION,
    matterName: state.matterName,
    revision: 0,
    state,
    updatedAt: now,
    mutationLog: [],
  };
}
