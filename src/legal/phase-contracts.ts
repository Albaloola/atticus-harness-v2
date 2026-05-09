import { LegalArtifactType, getArtifactTypeCategory } from './artifact-types.js';
import type { PhaseDefinition } from './workflow.js';

export type RequiredFor = 'activity_completion' | 'legal_readiness' | 'export_readiness';
export type CitationRequirement = 'none' | 'evidence_id' | 'exact_quote';

export interface RequiredOutput {
  outputType: string;
  requiredFor: RequiredFor;
  artifactCategory: 'internal' | 'prepare_only';
  minCount: number;
  acceptedArtifactRequired: boolean;
  citationRequirement: CitationRequirement;
  primarySourceRequired: boolean;
  allowedNotApplicableReasons: string[];
  readinessBlockerSeverity: 'info' | 'low' | 'medium' | 'high' | 'critical';
}

export function requiredOutputsForPhase(phase: Pick<PhaseDefinition, 'id' | 'expectedOutputTypes'>): RequiredOutput[] {
  return phase.expectedOutputTypes.map((outputType) => requiredOutputForType(String(outputType), phase.id));
}

export function requiredOutputForType(outputType: string, phaseId?: string): RequiredOutput {
  const category = knownArtifactCategory(outputType);
  const prepareOnly = category === 'prepare_only';
  const productionCritical = phaseId === 'document_production' || phaseId === 'bundle_and_war_room_assembly' || phaseId === 'operator_handoff';
  return {
    outputType,
    requiredFor: prepareOnly || productionCritical ? 'legal_readiness' : 'activity_completion',
    artifactCategory: category,
    minCount: 1,
    acceptedArtifactRequired: prepareOnly || productionCritical,
    citationRequirement: prepareOnly || phaseId === 'verification_and_hostile_review' ? 'exact_quote' : 'evidence_id',
    primarySourceRequired: phaseId === 'law_and_policy_research' || phaseId === 'procedural_route_planning' || phaseId === 'verification_and_hostile_review',
    allowedNotApplicableReasons: defaultNotApplicableReasons(phaseId),
    readinessBlockerSeverity: prepareOnly || productionCritical ? 'critical' : 'high',
  };
}

function knownArtifactCategory(outputType: string): 'internal' | 'prepare_only' {
  if (Object.values(LegalArtifactType).includes(outputType as LegalArtifactType)) {
    return getArtifactTypeCategory(outputType as LegalArtifactType);
  }
  return 'internal';
}

function defaultNotApplicableReasons(phaseId?: string): string[] {
  if (phaseId === 'document_production') return ['retrospective_benchmark', 'no_live_filing_or_service_required'];
  if (phaseId === 'bundle_and_war_room_assembly') return ['retrospective_source_packet_only', 'operator_declined_export'];
  if (phaseId === 'operator_handoff') return ['analysis_only_archive'];
  return ['outside_matter_scope'];
}
