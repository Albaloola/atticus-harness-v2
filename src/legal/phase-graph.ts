import type { PhaseDefinition } from './workflow.js';
import { getDefaultPhases } from './workflow.js';
import type { MatterPosture } from './matter-posture.js';
import { requiredOutputsForPhase, type RequiredOutput } from './phase-contracts.js';

export interface PhaseGraphNode {
  phaseId: string;
  phaseName: string;
  enabled: boolean;
  skipReason?: string;
  requiredOutputs: RequiredOutput[];
  workerTasks: string[];
  dependencies: string[];
  readinessPolicy: 'activity_only' | 'legal_readiness' | 'export_readiness' | 'not_applicable';
}

export interface PhaseGraph {
  graphId: string;
  matterName: string;
  posture: MatterPosture;
  nodes: PhaseGraphNode[];
  edges: Array<{ from: string; to: string; dependencyType: 'sequential' | 'readiness' }>;
  globalRequiredOutputs: RequiredOutput[];
  notApplicablePolicy: string[];
  createdAt: string;
}

export function buildPhaseGraph(input: { matterName: string; objective?: string; phases?: PhaseDefinition[]; posture?: MatterPosture }): PhaseGraph {
  const phases = input.phases ?? getDefaultPhases();
  const posture = input.posture ?? fallbackPosture(input.matterName, input.objective);
  const nodes = phases.map((phase, index): PhaseGraphNode => {
    const requiredOutputs = requiredOutputsForPhase(phase);
    const liveOnly = phase.id === 'procedural_route_planning' || phase.id === 'document_production' || phase.id === 'bundle_and_war_room_assembly';
    const enabled = !(posture.primaryMode === 'retrospective_benchmark' && liveOnly && posture.liveObligations.includes('none'));
    return {
      phaseId: phase.id,
      phaseName: phase.name,
      enabled,
      skipReason: enabled ? undefined : 'retrospective_no_live_obligation',
      requiredOutputs,
      workerTasks: [],
      dependencies: index === 0 ? [] : [phases[index - 1]!.id],
      readinessPolicy: enabled ? (requiredOutputs.some((output) => output.acceptedArtifactRequired) ? 'legal_readiness' : 'activity_only') : 'not_applicable',
    };
  });
  return {
    graphId: `${input.matterName}-${Date.now()}`,
    matterName: input.matterName,
    posture,
    nodes,
    edges: nodes.slice(1).map((node, index) => ({ from: nodes[index]!.phaseId, to: node.phaseId, dependencyType: 'sequential' })),
    globalRequiredOutputs: nodes.flatMap((node) => node.enabled ? node.requiredOutputs.filter((output) => output.requiredFor !== 'activity_completion') : []),
    notApplicablePolicy: ['retrospective_no_live_obligation', 'outside_matter_scope', 'operator_declined_export'],
    createdAt: new Date().toISOString(),
  };
}


function fallbackPosture(matterName: string, objective = ''): MatterPosture {
  const text = `${matterName} ${objective}`.toLowerCase();
  const retrospective = /retrospective|benchmark|concluded|known outcome|judgment|uksc|appeal/.test(text);
  return {
    matterName,
    primaryMode: retrospective ? 'retrospective_benchmark' : 'live_matter',
    jurisdictions: [],
    tracks: retrospective ? ['appellate'] : ['unknown'],
    liveObligations: retrospective ? ['none'] : ['filing'],
    sourceProfile: {},
    retrospectiveOutcomeKnown: retrospective,
    requiresCourtReadyArtifacts: !retrospective,
    requiresExternalResearch: false,
    privateDataPolicy: /omer|private|confidential/.test(text) ? 'local_only' : 'public_sources_only',
    confidence: 0.5,
    reasons: ['phase graph fallback posture'],
  };
}
