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

export interface PhaseGraphEdge {
  from: string;
  to: string;
  dependencyType: 'sequential' | 'readiness_gate';
}

export interface PhaseGraph {
  graphId: string;
  matterName: string;
  posture: MatterPosture;
  nodes: PhaseGraphNode[];
  edges: PhaseGraphEdge[];
  globalRequiredOutputs: RequiredOutput[];
  notApplicablePolicy: string;
  createdAt: string;
}

const LIVE_OUTPUT_PHASES = new Set(['document_production', 'bundle_and_war_room_assembly']);

export function buildPhaseGraph(input: {
  matterName: string;
  posture: MatterPosture;
  phases?: PhaseDefinition[];
}): PhaseGraph {
  const phases = input.phases ?? getDefaultPhases();
  const retrospectiveNoLiveWork = input.posture.primaryMode === 'retrospective_benchmark'
    && input.posture.liveObligations.includes('none');
  const nodes: PhaseGraphNode[] = phases.map((phase, index) => {
    const disabled = retrospectiveNoLiveWork && LIVE_OUTPUT_PHASES.has(phase.id);
    const requiredOutputs = disabled ? [] : requiredOutputsForPhase(phase);
    return {
      phaseId: phase.id,
      phaseName: phase.name,
      enabled: !disabled,
      skipReason: disabled ? 'retrospective matter with no live filing obligation' : undefined,
      requiredOutputs,
      workerTasks: disabled ? [] : [phase.description],
      dependencies: index === 0 ? [] : [phases[index - 1]!.id],
      readinessPolicy: disabled
        ? 'not_applicable'
        : phase.id === 'operator_handoff' || phase.id === 'document_output_pipeline'
          ? 'export_readiness'
          : requiredOutputs.some((output) => output.acceptedArtifactRequired)
            ? 'legal_readiness'
            : 'activity_only',
    };
  });
  return {
    graphId: `${input.matterName}-${Date.now()}`,
    matterName: input.matterName,
    posture: input.posture,
    nodes,
    edges: phases.slice(1).map((phase, index) => ({ from: phases[index]!.id, to: phase.id, dependencyType: 'sequential' })),
    globalRequiredOutputs: nodes.flatMap((node) => node.requiredOutputs),
    notApplicablePolicy: 'disabled phases must carry skipReason and produce notApplicableFindings rather than false completion',
    createdAt: new Date().toISOString(),
  };
}
