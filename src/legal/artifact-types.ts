export const LegalArtifactType = {
  case_theory: 'case_theory',
  chronology: 'chronology',
  issue_map: 'issue_map',
  evidence_matrix: 'evidence_matrix',
  legal_memo: 'legal_memo',
  procedure_plan: 'procedure_plan',
  risk_register: 'risk_register',
  pre_action_letter: 'pre_action_letter',
  claim_draft: 'claim_draft',
  witness_statement: 'witness_statement',
  schedule_of_loss: 'schedule_of_loss',
  draft_order: 'draft_order',
  bundle_index: 'bundle_index',
  filing_checklist: 'filing_checklist',
  operator_handoff_report: 'operator_handoff_report',
  authority_map: 'authority_map',
  intake_summary: 'intake_summary',
  fact_extraction: 'fact_extraction',
  legal_research: 'legal_research',
  risk_assessment: 'risk_assessment',
  procedural_route_map: 'procedural_route_map',
  draft_document: 'draft_document',
  hostile_review_report: 'hostile_review_report',
  war_room_pack: 'war_room_pack',
  document_output_bundle: 'document_output_bundle',
} as const;

export type LegalArtifactType = (typeof LegalArtifactType)[keyof typeof LegalArtifactType];

export type ArtifactCategory = 'internal' | 'prepare_only';

export const artifactTypeCategories: Record<LegalArtifactType, ArtifactCategory> = {
  [LegalArtifactType.case_theory]: 'internal',
  [LegalArtifactType.chronology]: 'internal',
  [LegalArtifactType.issue_map]: 'internal',
  [LegalArtifactType.evidence_matrix]: 'internal',
  [LegalArtifactType.legal_memo]: 'internal',
  [LegalArtifactType.procedure_plan]: 'internal',
  [LegalArtifactType.risk_register]: 'internal',
  [LegalArtifactType.authority_map]: 'internal',
  [LegalArtifactType.intake_summary]: 'internal',
  [LegalArtifactType.fact_extraction]: 'internal',
  [LegalArtifactType.legal_research]: 'internal',
  [LegalArtifactType.risk_assessment]: 'internal',
  [LegalArtifactType.procedural_route_map]: 'internal',
  [LegalArtifactType.hostile_review_report]: 'internal',
  [LegalArtifactType.draft_document]: 'internal',
  [LegalArtifactType.pre_action_letter]: 'prepare_only',
  [LegalArtifactType.claim_draft]: 'prepare_only',
  [LegalArtifactType.witness_statement]: 'prepare_only',
  [LegalArtifactType.schedule_of_loss]: 'prepare_only',
  [LegalArtifactType.draft_order]: 'prepare_only',
  [LegalArtifactType.bundle_index]: 'prepare_only',
  [LegalArtifactType.filing_checklist]: 'prepare_only',
  [LegalArtifactType.operator_handoff_report]: 'prepare_only',
  [LegalArtifactType.war_room_pack]: 'prepare_only',
  [LegalArtifactType.document_output_bundle]: 'prepare_only',
};

export function getArtifactTypeCategory(type: LegalArtifactType): ArtifactCategory {
  return artifactTypeCategories[type];
}
