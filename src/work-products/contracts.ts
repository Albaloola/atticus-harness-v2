import type { WorkProductReadiness, WorkProductType } from './types.js';

export interface WorkProductReadinessRequirements {
  minimumAuthorityCount?: number;
  requiredForum?: boolean;
  requiredPartiesMin?: number;
  requiredRemediesMin?: number;
}

export interface WorkProductTypeContract {
  minimumContentLength: number;
  requiredPayloadFields: string[];
  minimumReadinessRequirements: Partial<Record<WorkProductReadiness, WorkProductReadinessRequirements>>;
}

const defaultContract = (minimumContentLength = 120): WorkProductTypeContract => ({
  minimumContentLength,
  requiredPayloadFields: [],
  minimumReadinessRequirements: {
    case_integrated: {},
    evidence_grounded: {},
    legally_reviewed: {},
    hostile_reviewed: {},
    operator_review_ready: {},
    execution_ready: {},
    file_ready: {},
  },
});

export const WORK_PRODUCT_CONTRACTS: Record<WorkProductType, WorkProductTypeContract> = {
  intake_summary: {
    ...defaultContract(120),
    requiredPayloadFields: ['intakeSummary', 'sourceType'],
  },
  chronology: {
    ...defaultContract(180),
    requiredPayloadFields: ['events'],
  },
  evidence_matrix: {
    ...defaultContract(180),
    requiredPayloadFields: ['rows'],
  },
  fact_finding_report: {
    ...defaultContract(180),
    requiredPayloadFields: ['findings'],
  },
  issue_map: {
    ...defaultContract(160),
    requiredPayloadFields: ['issues'],
  },
  authority_map: {
    ...defaultContract(120),
    requiredPayloadFields: ['authorities'],
  },
  legal_research_memo: {
    ...defaultContract(340),
    requiredPayloadFields: ['legalQuestion', 'forum', 'facts', 'laws', 'analysis', 'conclusion', 'uncertainties', 'risks', 'nextActions', 'authorities'],
    minimumReadinessRequirements: {
      legally_reviewed: { minimumAuthorityCount: 1 },
      hostile_reviewed: { minimumAuthorityCount: 1 },
      operator_review_ready: { minimumAuthorityCount: 1 },
    },
  },
  procedural_route_memo: {
    ...defaultContract(260),
    requiredPayloadFields: ['forum', 'routes', 'authorities', 'recommendation', 'risks', 'nextAction'],
    minimumReadinessRequirements: {
      legally_reviewed: { minimumAuthorityCount: 1 },
      hostile_reviewed: { minimumAuthorityCount: 1 },
    },
  },
  case_theory: {
    ...defaultContract(180),
    requiredPayloadFields: ['theory', 'assumptions', 'evidenceLinks'],
  },
  merits_opinion: {
    ...defaultContract(200),
    requiredPayloadFields: ['merits', 'downside', 'relief'],
  },
  risk_register: {
    ...defaultContract(180),
    requiredPayloadFields: ['risks'],
  },
  draft_pleading: {
    ...defaultContract(250),
    requiredPayloadFields: ['forum', 'parties', 'remedies', 'relief'],
    minimumReadinessRequirements: {
      operator_review_ready: { requiredForum: true, requiredPartiesMin: 1, requiredRemediesMin: 1 },
      execution_ready: { requiredForum: true, requiredPartiesMin: 1, requiredRemediesMin: 1 },
      file_ready: { requiredForum: true, requiredPartiesMin: 1, requiredRemediesMin: 1 },
    },
  },
  draft_complaint: {
    ...defaultContract(250),
    requiredPayloadFields: ['forum', 'parties', 'remedies', 'relief'],
    minimumReadinessRequirements: {
      operator_review_ready: { requiredForum: true, requiredPartiesMin: 1, requiredRemediesMin: 1 },
      execution_ready: { requiredForum: true, requiredPartiesMin: 1, requiredRemediesMin: 1 },
      file_ready: { requiredForum: true, requiredPartiesMin: 1, requiredRemediesMin: 1 },
    },
  },
  draft_letter: {
    ...defaultContract(120),
    requiredPayloadFields: ['to', 'subject'],
  },
  draft_email: {
    ...defaultContract(120),
    requiredPayloadFields: ['to', 'subject'],
  },
  witness_statement: {
    ...defaultContract(180),
    requiredPayloadFields: ['witness', 'statement'],
  },
  schedule_of_loss: {
    ...defaultContract(160),
    requiredPayloadFields: ['losses'],
  },
  draft_order: {
    ...defaultContract(180),
    requiredPayloadFields: ['orderFor', 'requestedRelief', 'supportingFacts'],
  },
  bundle_index: {
    ...defaultContract(120),
    requiredPayloadFields: ['entries'],
  },
  war_room_pack: {
    ...defaultContract(200),
    requiredPayloadFields: ['highlights'],
  },
  operator_handoff: {
    ...defaultContract(160),
    requiredPayloadFields: ['status', 'nextSteps'],
  },
  review_ready_output_bundle: {
    ...defaultContract(120),
    requiredPayloadFields: ['manifest', 'workProductIds'],
  },
};

export const READINESS_ORDER: WorkProductReadiness[] = [
  'raw',
  'structured',
  'case_integrated',
  'evidence_grounded',
  'legally_reviewed',
  'hostile_reviewed',
  'operator_review_ready',
  'operator_review_ready_with_critical_gap',
  'execution_ready',
  'file_ready',
];

export function getWorkProductContract(type: WorkProductType): WorkProductTypeContract {
  return WORK_PRODUCT_CONTRACTS[type];
}
