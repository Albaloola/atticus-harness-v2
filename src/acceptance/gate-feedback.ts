import { randomUUID } from 'crypto';
import type { CandidateArtifact } from '../types/artifact.js';
import type { GateCheck, GateResult } from './gate-score.js';

export type GateFeedbackLocationKind =
  | 'candidate'
  | 'source'
  | 'file'
  | 'matter_state'
  | 'gate_check';

export interface GateFeedbackLocation {
  kind: GateFeedbackLocationKind;
  path: string;
  label?: string;
  gateName?: string;
  details?: string;
}

export interface GateFeedbackFailedCheck {
  name: string;
  score: number;
  weight: number;
  details?: string;
  expected: string;
  suggestedRemediation: string;
}

export interface GateFeedbackPacket {
  feedbackId: string;
  candidateId: string;
  matterName: string;
  threshold: number;
  achievedScore: number;
  failedChecks: GateFeedbackFailedCheck[];
  locations: GateFeedbackLocation[];
  evidenceRefs: string[];
  citationRefs: string[];
  priorAttemptIds: string[];
  supersedesCandidateId?: string;
  retryCount: number;
  escalationTarget: 'worker' | 'mini_orchestrator' | 'master_orchestrator';
  suggestedRemediation: string[];
  createdAt: string;
}

export function buildGateFeedbackPacket(
  candidate: CandidateArtifact,
  matterName: string,
  gateResult: GateResult,
  threshold: number,
): GateFeedbackPacket {
  const failedChecks = gateResult.checks
    .filter((check) => !check.passed || check.score < threshold)
    .map(toFailedCheck);
  const locations = failedChecks.length > 0
    ? failedChecks.map((check) => ({
      kind: 'candidate' as const,
      path: `candidate:${candidate.id}`,
      label: check.name,
      gateName: check.name,
      details: check.details,
    }))
    : [{
      kind: 'candidate' as const,
      path: `candidate:${candidate.id}`,
      label: 'Quality gate',
      gateName: 'Quality gate',
    }];

  const citations = candidate.metadata.citations ?? [];
  const priorAttemptIds = Array.isArray(candidate.metadata.priorAttemptIds)
    ? candidate.metadata.priorAttemptIds.filter((id): id is string => typeof id === 'string')
    : [];
  const supersedesCandidateId = typeof candidate.metadata.supersedesCandidateId === 'string'
    ? candidate.metadata.supersedesCandidateId
    : undefined;
  const retryCount = typeof candidate.metadata.retryCount === 'number'
    ? candidate.metadata.retryCount
    : priorAttemptIds.length;

  return {
    feedbackId: randomUUID(),
    candidateId: candidate.id,
    matterName,
    threshold,
    achievedScore: gateResult.score,
    failedChecks,
    locations,
    evidenceRefs: unique(citations.map((citation) => citation.evidenceId).filter(Boolean)),
    citationRefs: unique(citations.map((citation) => citation.citationId).filter(Boolean)),
    priorAttemptIds,
    ...(supersedesCandidateId ? { supersedesCandidateId } : {}),
    retryCount,
    escalationTarget: 'worker',
    suggestedRemediation: failedChecks.map((check) => check.suggestedRemediation),
    createdAt: new Date().toISOString(),
  };
}

function toFailedCheck(check: GateCheck): GateFeedbackFailedCheck {
  return {
    name: check.name,
    score: check.score,
    weight: check.weight,
    details: check.details,
    expected: `Score >= ${check.weight > 0 ? 'passing threshold for this check' : '0'}`,
    suggestedRemediation: remediationFor(check),
  };
}

function remediationFor(check: GateCheck): string {
  const detail = check.details ? ` Current detail: ${check.details}.` : '';
  switch (check.name) {
    case 'Citation coverage':
      return `Add or repair inline evidence citations for unsupported factual claims.${detail}`;
    case 'Quote verification':
      return `Replace unsupported or contradicted quotes with verified evidence-backed text.${detail}`;
    case 'Evidence contradiction':
      return `Resolve contradictions before resubmission or escalate with a specific exception rationale.${detail}`;
    case 'Dates/deadlines':
      return `Add the relevant timeline dates, deadlines, and source-backed deadline context.${detail}`;
    case 'Jurisdiction/procedure':
      return `Add jurisdiction, forum, procedural rule, or local practice support where required.${detail}`;
    case 'Required fields':
      return `Complete the required document sections or fields before resubmission.${detail}`;
    case 'Adversarial review':
      return `Run or address hostile-review findings before asking the gate to accept the candidate.${detail}`;
    case 'Source freshness':
      return `Refresh stale source material or explain why older evidence remains controlling.${detail}`;
    case 'Hallucination sensitivity':
      return `Remove unsupported assertions and mark unavoidable assumptions explicitly.${detail}`;
    case 'Operator handoff':
      return `Clarify operator-facing next steps, external-action status, and dispatch limits.${detail}`;
    default:
      return `Improve the failed gate check "${check.name}" and resubmit.${detail}`;
  }
}

function unique(values: string[]): string[] {
  return [...new Set(values)];
}
