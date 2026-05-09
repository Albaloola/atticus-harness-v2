import type { LegalArtifactType } from '../legal/artifact-types.js';
import { PHASES, type PhaseDefinition } from '../legal/workflow.js';
import type { MatterStatus } from '../types/matter.js';
import type { TaskCounts } from '../types/state.js';

export type MatterMode = 'prospective_live' | 'retrospective_record' | 'unknown';
export type MatterForum = 'appellate' | 'trial' | 'unknown';

export interface MatterPosture {
  mode: MatterMode;
  forum: MatterForum;
  liveActionRequired: boolean;
  signals: string[];
}

export interface RequiredOutput {
  phaseId: string;
  type: LegalArtifactType;
  required: boolean;
  reason: string;
}

export interface PhaseGraphNode {
  phase: PhaseDefinition;
  requiredOutputs: RequiredOutput[];
  workerTitles: string[];
  allowNotApplicable: boolean;
}

export interface PhaseGraph {
  posture: MatterPosture;
  phases: PhaseGraphNode[];
}

export interface RunReadiness {
  status: 'ready' | 'blocked' | 'needs_input' | 'running' | 'complete';
  ready: boolean;
  phase: string;
  reasons: string[];
  nextActions: string[];
  missingRequiredOutputs: RequiredOutput[];
}

export interface RunReadinessInput {
  status: MatterStatus;
  phase: string;
  evidenceCount: number;
  candidateCount: number;
  taskCounts: TaskCounts;
  activeAgentCount: number;
  objective?: string;
}

const APPELLATE_RE = /\b(appellate|appeal|supreme court|uksc|judgment|written case|prorogation|cherry|miller)\b/i;
const RETROSPECTIVE_RE = /\b(concluded|retrospective|known outcome|outcome|trial run|harness test|downloaded|case documents|court documents|already has the outcome)\b/i;
const LIVE_ACTION_RE = /\b(file today|serve today|lodge today|urgent live filing|live deadline|current client matter|injunction|interdict|immediate filing)\b/i;

export function classifyMatterPosture(objective = ''): MatterPosture {
  const signals: string[] = [];
  const forum: MatterForum = APPELLATE_RE.test(objective) ? 'appellate' : 'unknown';
  const hasRetrospective = RETROSPECTIVE_RE.test(objective);
  const liveActionRequired = LIVE_ACTION_RE.test(objective);

  if (forum === 'appellate') signals.push('appellate');
  if (hasRetrospective) signals.push('retrospective');
  if (liveActionRequired) signals.push('live_action');

  let mode: MatterMode = 'unknown';
  if (liveActionRequired) mode = 'prospective_live';
  else if (hasRetrospective) mode = 'retrospective_record';

  return { mode, forum, liveActionRequired, signals };
}

export function isRetrospectiveAppellatePosture(posture: MatterPosture): boolean {
  return posture.mode === 'retrospective_record' && posture.forum === 'appellate' && !posture.liveActionRequired;
}

export function buildPhaseGraph(
  objective = '',
  phases: PhaseDefinition[] = PHASES,
): PhaseGraph {
  const posture = classifyMatterPosture(objective);
  return {
    posture,
    phases: phases.map((phase) => ({
      phase,
      requiredOutputs: phase.expectedOutputTypes.map((type) => ({
        phaseId: phase.id,
        type,
        required: isOutputRequiredForPosture(phase.id, posture),
        reason: outputRequirementReason(phase.id, posture),
      })),
      workerTitles: workerTitlesForPhase(phase.id, posture),
      allowNotApplicable: isRetrospectiveAppellatePosture(posture),
    })),
  };
}

export function phaseWorkerTitlesForPosture(
  phaseId: string,
  objective = '',
): string[] | undefined {
  return buildPhaseGraph(objective).phases.find((node) => node.phase.id === phaseId)?.workerTitles;
}

export function evaluateRunReadiness(input: RunReadinessInput): RunReadiness {
  const reasons: string[] = [];
  const nextActions: string[] = [];
  const posture = classifyMatterPosture(input.objective);
  const graph = buildPhaseGraph(input.objective);
  const currentNode = graph.phases.find((node) => node.phase.id === input.phase);
  const missingRequiredOutputs = currentNode?.requiredOutputs.filter((output) => output.required) ?? [];

  if (input.activeAgentCount > 0) {
    reasons.push('active agents are still running');
    nextActions.push('Agent is currently running - check status for progress');
    return makeReadiness('running', input.phase, reasons, nextActions, []);
  }

  if (input.taskCounts.total > 0 && input.taskCounts.in_progress === 0 && input.taskCounts.pending === 0) {
    if (input.taskCounts.failed > 0 || input.taskCounts.blocked > 0) {
      reasons.push('task graph has failed or blocked work');
      nextActions.push('Inspect blocked and failed tasks before continuing');
      return makeReadiness('blocked', input.phase, reasons, nextActions, missingRequiredOutputs);
    }
    reasons.push('all tasks completed');
    return makeReadiness('complete', input.phase, reasons, nextActions, []);
  }

  if (input.evidenceCount === 0) {
    reasons.push('no evidence has been ingested');
    nextActions.push('harness ingest <matter> <path>');
    return makeReadiness('needs_input', 'intake', reasons, nextActions, missingRequiredOutputs);
  }

  if (input.status === 'pending') {
    reasons.push('matter is ready for initial run');
    nextActions.push('harness run <matter>');
    return makeReadiness('ready', input.phase, reasons, nextActions, []);
  }

  if (input.candidateCount > 0 && input.status !== 'complete' && input.status !== 'archived') {
    reasons.push('candidate outputs are available for verification and review');
    nextActions.push('harness verify <matter> (latest candidate)');
    nextActions.push('harness gate <matter> (latest candidate)');
    nextActions.push('harness review <matter> (latest candidate)');
    return makeReadiness('ready', input.phase, reasons, nextActions, []);
  }

  if (posture.liveActionRequired && input.status !== 'complete') {
    reasons.push('live-action matter requires operator validation before completion');
    nextActions.push('Confirm live filing/service/deadline instructions before final handoff');
    return makeReadiness('needs_input', input.phase, reasons, nextActions, missingRequiredOutputs);
  }

  reasons.push('no immediate blockers detected');
  return makeReadiness('ready', input.phase, reasons, nextActions, []);
}

function makeReadiness(
  status: RunReadiness['status'],
  phase: string,
  reasons: string[],
  nextActions: string[],
  missingRequiredOutputs: RequiredOutput[],
): RunReadiness {
  return {
    status,
    ready: status === 'ready' || status === 'running' || status === 'complete',
    phase,
    reasons,
    nextActions,
    missingRequiredOutputs,
  };
}

function isOutputRequiredForPosture(phaseId: string, posture: MatterPosture): boolean {
  if (!isRetrospectiveAppellatePosture(posture)) return true;
  return !new Set([
    'document_production',
    'bundle_and_war_room_assembly',
    'operator_handoff',
  ]).has(phaseId);
}

function outputRequirementReason(phaseId: string, posture: MatterPosture): string {
  if (isOutputRequiredForPosture(phaseId, posture)) return 'required by active phase contract';
  return 'retrospective appellate posture permits not_applicable or production-index substitute instead of live filing artifact';
}

function workerTitlesForPhase(phaseId: string, posture: MatterPosture): string[] {
  if (isRetrospectiveAppellatePosture(posture)) {
    if (phaseId === 'document_production') {
      return [
        'Classify live drafting and witness-statement requirements as applicable or not applicable for this concluded appellate record',
        'Select a compact production set using matter_inventory production candidates, distinguishing holdings from submissions',
        'Create a retrospective bundle-ready production index from evidence IDs, suppressing duplicate judgment and summary variants',
      ];
    }
    if (phaseId === 'bundle_and_war_room_assembly') {
      return [
        'Create retrospective appellate bundle index from matter_inventory production candidates',
        'Cross-reference holdings, party arguments, and procedural facts to evidence IDs',
        'Prepare retrospective operator handoff checklist and mark live filing or service tasks not applicable unless evidence requires them',
      ];
    }
  }

  return [];
}
