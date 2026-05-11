import { randomUUID } from 'crypto';
import type {
  CaseState,
  CaseStateMutationContext,
  CaseReadiness,
  CaseStateDocument,
  DeadlineRecord,
  CommunicationRecord,
} from './schema.js';
import {
  applyCaseStateMutation,
  getCaseStateDocumentOrCreate,
  newCaseStateDocument,
  saveCaseStateDocument,
} from './store.js';
import {
  createDefaultCaseState,
  type CaseClaim,
  type CaseComplaint,
  type CaseEvidenceItem,
  type CaseFact,
  type CaseParty,
  type CaseRepresentative,
  type CaseWorkProductReference,
  type OpenQuestionRecord,
} from './schema.js';

const DEFAULT_CONTEXT = {
  source: 'operator',
  actor: 'operator',
  confidence: 1,
};

function normalizeContext(context?: CaseStateMutationContext): CaseStateMutationContext {
  return {
    ...DEFAULT_CONTEXT,
    ...context,
    summary: context?.summary,
  } as CaseStateMutationContext;
}

function withDefaultReadiness(readiness?: CaseReadiness): CaseReadiness {
  if (readiness) return readiness;
  return {
    done: [],
    missing: [],
    blocked: [],
    unsafe: [],
  };
}

export async function createCaseState(input: {
  matterName: string;
  status?: CaseState['status'];
  posture?: CaseState['posture'];
  context?: CaseStateMutationContext;
}): Promise<CaseStateDocument> {
  const existing = await getCaseStateDocumentOrCreate({
    matterName: input.matterName,
    status: input.status,
    posture: input.posture,
  });
  if (existing.revision > 0) {
    return existing;
  }

  const state = {
    ...createDefaultCaseState({
      matterName: input.matterName,
      status: input.status,
      posture: input.posture,
    }),
    readiness: withDefaultReadiness(),
  };

  const document = newCaseStateDocument(input.matterName, state);
  return saveCaseStateDocument(document);
}

export async function addParty(
  matterName: string,
  party: Omit<CaseParty, 'partyId'> & { partyId?: string },
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.party_added',
      summary: normalizedContext.summary ?? `Added party ${party.name}`,
    },
    (state) => {
      const next = {
        ...state,
        parties: [...state.parties],
      };
      next.parties.push({
        ...party,
        partyId: party.partyId ?? randomUUID(),
      });
      return next;
    },
  );
}

export async function addRepresentative(
  matterName: string,
  representative: Omit<CaseRepresentative, 'representativeId'> & { representativeId?: string },
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.representative_added',
      summary: normalizedContext.summary ?? `Added representative ${representative.name}`,
    },
    (state) => {
      const next = {
        ...state,
        representatives: [...state.representatives],
      };
      next.representatives.push({
        ...representative,
        representativeId: representative.representativeId ?? randomUUID(),
      });
      return next;
    },
  );
}

export async function addClaim(
  matterName: string,
  claim: Omit<CaseClaim, 'claimId' | 'createdAt'>,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.claim_added',
      summary: normalizedContext.summary ?? `Added claim ${claim.description}`,
    },
    (state) => {
      const next = {
        ...state,
        claims: [...state.claims],
      };
      next.claims.push({
        ...claim,
        claimId: randomUUID(),
        createdAt: new Date().toISOString(),
      });
      return next;
    },
  );
}

export async function addComplaint(
  matterName: string,
  complaint: Omit<CaseComplaint, 'complaintId' | 'createdAt'>,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.complaint_added',
      summary: normalizedContext.summary ?? `Added complaint ${complaint.description}`,
    },
    (state) => {
      const next = {
        ...state,
        complaints: [...state.complaints],
      };
      next.complaints.push({
        ...complaint,
        complaintId: randomUUID(),
        status: complaint.status ?? 'draft',
        createdAt: new Date().toISOString(),
      });
      return next;
    },
  );
}

export async function addEvidenceItem(
  matterName: string,
  evidenceItem: Omit<CaseEvidenceItem, 'evidenceItemId' | 'createdAt' | 'updatedAt'>,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.evidence_item_added',
      summary: normalizedContext.summary ?? `Added evidence ${evidenceItem.title}`,
    },
    (state) => {
      const next = {
        ...state,
        evidenceItems: [...state.evidenceItems],
      };
      next.evidenceItems.push({
        ...evidenceItem,
        evidenceItemId: randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      return next;
    },
  );
}

export async function addFact(
  matterName: string,
  fact: Omit<CaseFact, 'factId' | 'createdAt'>,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.fact_added',
      summary: normalizedContext.summary ?? `Added fact ${fact.statement}`,
    },
    (state) => {
      const next = {
        ...state,
        facts: [...state.facts],
      };
      next.facts.push({
        ...fact,
        factId: randomUUID(),
        createdAt: new Date().toISOString(),
      });
      return next;
    },
  );
}

export async function addLegalIssue(
  matterName: string,
  issue: string,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.legal_issue_added',
      summary: normalizedContext.summary ?? `Added legal issue ${issue}`,
    },
    (state) => ({
      ...state,
      legalIssues: [...state.legalIssues, issue],
    }),
  );
}

export async function addRisk(
  matterName: string,
  risk: string,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.risk_added',
      summary: normalizedContext.summary ?? `Added risk ${risk}`,
    },
    (state) => ({
      ...state,
      risks: [...state.risks, risk],
    }),
  );
}

export async function addQuestion(
  matterName: string,
  question: Omit<OpenQuestionRecord, 'questionId' | 'createdAt'>,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.question_added',
      summary: normalizedContext.summary ?? `Added question ${question.question}`,
    },
    (state) => {
      const next = {
        ...state,
        openQuestions: [...state.openQuestions],
      };
      next.openQuestions.push({
        ...question,
        questionId: randomUUID(),
        createdAt: new Date().toISOString(),
        status: question.status ?? 'pending',
      });
      return next;
    },
  );
}

export async function addDeadline(
  matterName: string,
  deadline: Omit<DeadlineRecord, 'deadlineId' | 'createdAt'>,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.deadline_added',
      summary: normalizedContext.summary ?? `Added deadline ${deadline.description}`,
    },
    (state) => {
      const next = {
        ...state,
        deadlines: [...state.deadlines],
      };
      next.deadlines.push({
        ...deadline,
        deadlineId: randomUUID(),
        createdAt: new Date().toISOString(),
      });
      return next;
    },
  );
}

export async function addWorkProductReference(
  matterName: string,
  workProduct: Omit<CaseWorkProductReference, 'linkedAt'>,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.work_product_linked',
      summary: normalizedContext.summary ?? `Linked work product ${workProduct.workProductId}`,
    },
    (state) => {
      const next = {
        ...state,
        workProducts: [...state.workProducts],
      };
      const existing = next.workProducts.find((entry) => entry.workProductId === workProduct.workProductId);
      if (existing) {
        existing.readiness = workProduct.readiness;
        existing.type = workProduct.type;
        existing.source = workProduct.source;
        existing.runId = workProduct.runId;
        existing.linkedAt = new Date().toISOString();
        return next;
      }

      next.workProducts.push({
        ...workProduct,
        linkedAt: new Date().toISOString(),
      });
      return next;
    },
  );
}

export async function addCommunication(
  matterName: string,
  communication: Omit<CommunicationRecord, 'communicationId'>,
  context?: CaseStateMutationContext,
): Promise<CaseStateDocument> {
  const normalizedContext = normalizeContext(context);
  return applyCaseStateMutation(
    {
      ...normalizedContext,
      matterName,
      type: 'case.communication_added',
      summary: normalizedContext.summary ?? `Added communication ${communication.subject}`,
    },
    (state) => {
      const next = {
        ...state,
        communications: [...state.communications],
      };
      next.communications.push({
        ...communication,
        communicationId: randomUUID(),
      });
      return next;
    },
  );
}
