export type WorkProductReadiness =
  | 'raw'
  | 'structured'
  | 'case_integrated'
  | 'evidence_grounded'
  | 'legally_reviewed'
  | 'hostile_reviewed'
  | 'operator_review_ready'
  | 'operator_review_ready_with_critical_gap'
  | 'execution_ready'
  | 'file_ready';

export const WORK_PRODUCT_TYPES = [
  'intake_summary',
  'chronology',
  'evidence_matrix',
  'fact_finding_report',
  'issue_map',
  'authority_map',
  'legal_research_memo',
  'procedural_route_memo',
  'case_theory',
  'merits_opinion',
  'risk_register',
  'draft_pleading',
  'draft_complaint',
  'draft_letter',
  'draft_email',
  'witness_statement',
  'schedule_of_loss',
  'draft_order',
  'bundle_index',
  'war_room_pack',
  'operator_handoff',
  'review_ready_output_bundle',
] as const;

export type WorkProductType = typeof WORK_PRODUCT_TYPES[number];

export interface WorkProductSourceBasis {
  sourceType: 'evidence' | 'user_statement' | 'law' | 'case_artifact' | 'analysis';
  sourceId: string;
  description: string;
  authorityRefs?: string[];
}

export interface WorkProductPayloadByType {
  intake_summary: { intakeSummary: string; sourceType: string; };
  chronology: { events: Array<{ date: string; event: string; sourceIds: string[] }> };
  evidence_matrix: { rows: Array<{ claim: string; evidence: string[]; inference: string }> };
  fact_finding_report: { findings: Array<{ finding: string; basis: string[]; confidence: number }> };
  issue_map: { issues: Array<{ issue: string; status: string; }>; };
  authority_map: { authorities: string[]; };
  legal_research_memo: {
    legalQuestion: string;
    forum: string;
    facts: string[];
    laws: string[];
    analysis: string;
    conclusion: string;
    uncertainties: string[];
    risks: string[];
    nextActions: string[];
    authorities: string[];
  };
  procedural_route_memo: {
    forum: string;
    routes: string[];
    authorities: string[];
    recommendation: string;
    risks: string[];
    nextAction: string;
  };
  case_theory: { theory: string; assumptions: string[]; evidenceLinks: string[]; };
  merits_opinion: { merits: string; downside: string[]; relief: string[]; };
  risk_register: { risks: Array<{ risk: string; impact: string; mitigation: string }> };
  draft_pleading: { forum: string; parties: string[]; remedies: string[]; relief: string; };
  draft_complaint: { forum: string; parties: string[]; remedies: string[]; relief: string; };
  draft_letter: { to: string; subject: string; };
  draft_email: { to: string; subject: string; };
  witness_statement: { witness: string; statement: string; }; 
  schedule_of_loss: { losses: Array<{ date: string; harm: string }> };
  draft_order: { orderFor: string; requestedRelief: string; supportingFacts: string[] };
  bundle_index: { entries: string[] };
  war_room_pack: { highlights: string[] };
  operator_handoff: { status: string; nextSteps: string[] };
  review_ready_output_bundle: { manifest: Array<{ file: string; purpose: string }>; workProductIds: string[] };
}

export interface WorkProduct<TType extends WorkProductType = WorkProductType> {
  id: string;
  matterName: string;
  type: TType;
  title: string;
  content: string;
  readiness: WorkProductReadiness;
  purpose: string;
  audience: string;
  sourceBasis: WorkProductSourceBasis[];
  unresolvedGaps: string[];
  safetyStatus: 'safe' | 'unsafe';
  metadata: Record<string, unknown>;
  payload: WorkProductPayloadByType[TType];
  createdAt: string;
  updatedAt: string;
}

export type UnknownWorkProduct = WorkProduct<WorkProductType>;

export function isWorkProductType(value: string): value is WorkProductType {
  return WORK_PRODUCT_TYPES.includes(value as WorkProductType);
}
