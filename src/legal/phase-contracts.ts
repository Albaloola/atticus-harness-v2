import type { LegalArtifactType } from './artifact-types.js';
import { getArtifactTypeCategory } from './artifact-types.js';
import type { PhaseDefinition } from './workflow.js';

export type RequiredFor = 'activity_completion' | 'legal_readiness' | 'export_readiness';
export type CitationRequirement = 'none' | 'evidence_id' | 'exact_quote';
export type ReadinessBlockerSeverity = 'info' | 'low' | 'medium' | 'high' | 'critical';

export interface RequiredOutput {
  outputType: LegalArtifactType;
  requiredFor: RequiredFor;
  artifactCategory: 'internal' | 'prepare_only';
  minCount: number;
  acceptedArtifactRequired: boolean;
  citationRequirement: CitationRequirement;
  primarySourceRequired: boolean;
  allowedNotApplicableReasons: string[];
  readinessBlockerSeverity: ReadinessBlockerSeverity;
}

const COURT_READY_PHASES = new Set([
  'document_production',
  'bundle_and_war_room_assembly',
  'operator_handoff',
]);

export function requiredOutputsForPhase(phase: PhaseDefinition): RequiredOutput[] {
  const courtReadyPhase = COURT_READY_PHASES.has(phase.id);
  return phase.expectedOutputTypes.map((outputType) => {
    const artifactCategory = getArtifactTypeCategory(outputType);
    const acceptedArtifactRequired = courtReadyPhase || artifactCategory === 'prepare_only';
    return {
      outputType,
      requiredFor: acceptedArtifactRequired ? 'legal_readiness' : 'activity_completion',
      artifactCategory,
      minCount: 1,
      acceptedArtifactRequired,
      citationRequirement: acceptedArtifactRequired ? 'exact_quote' : 'evidence_id',
      primarySourceRequired: acceptedArtifactRequired,
      allowedNotApplicableReasons: [
        'retrospective matter with no live filing obligation',
        'operator marked output not applicable',
        'source universe lacks required primary material',
      ],
      readinessBlockerSeverity: acceptedArtifactRequired ? 'critical' : 'medium',
    } satisfies RequiredOutput;
  });
}

export function requiredOutputsForPhases(phases: PhaseDefinition[]): RequiredOutput[] {
  return phases.flatMap(requiredOutputsForPhase);
}
