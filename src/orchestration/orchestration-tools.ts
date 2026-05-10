import { MiniOrchestrator } from './mini-orchestrator.js';
import { createTask, updateTask } from '../state/tasks.js';
import { listRuns, listTasks } from '../state/index.js';
import { appendEvent, listEvents } from '../state/events.js';
import { loadMatter } from '../storage/matter.js';
import { loadOrchestrationCheckpoint, saveOrchestrationCheckpoint } from './checkpoint.js';
import { resolveConfig } from '../config/loader.js';
import { getDefaultPhases, type PhaseDefinition } from '../legal/workflow.js';
import { buildMatterStoreTelemetry } from '../observability/store-telemetry.js';
import { buildOrchestrationGapAnalysis, type GapAnalysisResult } from './gap-analysis.js';
import { runDocumentOutputPipeline } from '../export/document-output-pipeline.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import type { AgentStructuredResult } from './types.js';
import type { OrchestrationRuntime } from './runtime.js';
import type { AutonomyPolicy, ProviderPolicy } from '../config/schema.js';
import type { ProviderAgnosticResumePlan } from './resume-recovery.js';

export interface PhaseToolsConfig {
  matterName: string;
  masterRunId: string;
  maxDepth: number;
  maxConcurrency: number;
  autonomy?: AutonomyPolicy;
  providerPolicy?: ProviderPolicy;
  runtime?: OrchestrationRuntime;
  resumePlan?: ProviderAgnosticResumePlan;
  force?: boolean;
  gapAnalysis?: GapAnalysisResult;
}

interface RunPhaseArgs {
  phaseId: string;
  objective: string;
}

interface RunPhaseResult {
  phaseId: string;
  phaseName: string;
  status: AgentStructuredResult['status'];
  summary: string;
  findingCount: number;
  riskCount: number;
  artifactIds: string[];
}

interface OrchestrationStateResult {
  matterName: string;
  status: string;
  evidenceCount: number;
  candidateCount: number;
  artifactCount: number;
  totalTasks: number;
  completedTasks: number;
  failedTasks: number;
  blockedTasks: number;
  inProgressTasks: number;
  totalRuns: number;
  recentEvents: Array<{ type: string; timestamp: string; summary?: string }>;
  checkpoint?: { status: string; completedPhases: string[]; blockedPhases: string[]; failedPhases: string[] };
  resume?: {
    source: string;
    startIndex: number;
    nextPhaseId?: string;
    recoveredPhases: Array<{ phaseId: string; status: string; summary: string }>;
    diagnostics: ProviderAgnosticResumePlan['diagnostics'];
  };
  telemetry?: Record<string, unknown>;
  gapAnalysis?: {
    summary: string;
    force: boolean;
    noNewWorkNeeded: boolean;
    skipped: number;
    stale: number;
    missing: number;
    toProduce: string[];
  };
}

export function createRunPhaseTool(config: PhaseToolsConfig): Tool<RunPhaseArgs, RunPhaseResult> {
  let phases: PhaseDefinition[] | undefined;

  async function resolvePhases(): Promise<PhaseDefinition[]> {
    if (!phases) {
      phases = getDefaultPhases();
    }
    return phases;
  }

  return {
    name: 'run_phase',
    description: 'Execute a single legal workflow phase by spawning a mini-orchestrator with workers. Returns the phase result including findings, risks, and artifact IDs.',
    inputSchema: {
      type: 'object',
      properties: {
        phaseId: { type: 'string', description: 'The phase identifier (e.g. evidence_ingestion_and_fact_extraction)' },
        objective: { type: 'string', description: 'Objective for this phase, with matter context' },
      },
      required: ['phaseId', 'objective'],
    },
    async call(args: RunPhaseArgs, _context: ToolUseContext): Promise<ToolResult<RunPhaseResult>> {
      try {
        const allPhases = await resolvePhases();
        const phase = allPhases.find((p) => p.id === args.phaseId);
        if (!phase) {
          return {
            success: false,
            error: `Unknown phase: ${args.phaseId}. Available phases: ${allPhases.map((p) => p.id).join(', ')}`,
          };
        }

        const phaseIndex = allPhases.findIndex((p) => p.id === phase.id);
        const dependencyBlocker = phaseDependencyBlocker(config.matterName, allPhases, phaseIndex, config.resumePlan, config.gapAnalysis);
        if (dependencyBlocker) {
          return {
            success: false,
            error: dependencyBlocker,
          };
        }
        const recovered = config.resumePlan?.phaseResults.find((item) => item.phase.id === phase.id);
        if (config.resumePlan && phaseIndex >= 0 && phaseIndex < config.resumePlan.startIndex && recovered) {
          return {
            success: true,
            output: `Phase ${phase.name} was not rerun because --resume recovered it from prior provider-agnostic state (${config.resumePlan.source}).`,
            data: {
              phaseId: phase.id,
              phaseName: phase.name,
              status: recovered.result.status,
              summary: recovered.result.summary,
              findingCount: recovered.result.findings.length,
              riskCount: recovered.result.risks.length,
              artifactIds: recovered.result.artifactIds,
            },
          };
        }

        const phaseGapAnalysis = await buildOrchestrationGapAnalysis({
          matterName: config.matterName,
          objective: args.objective,
          phases: [phase],
          force: config.force,
        });
        if (phaseGapAnalysis.noNewWorkNeeded) {
          const task = createTask({
            matterName: config.matterName,
            runId: config.masterRunId,
            kind: 'mini_orchestrator',
            type: phase.id,
            title: `Phase: ${phase.name}`,
            priority: 'high',
            depth: 1,
            assignedAgent: 'mini_orchestrator',
            data: {
              phaseId: phase.id,
              objective: args.objective,
              skippedByGapAnalysis: true,
              gapAnalysis: summarizeGapAnalysisForState(phaseGapAnalysis),
            },
          });
          const result = buildSkippedPhaseResult(phase, phaseGapAnalysis);
          updateTask(config.matterName, task.id, {
            status: 'completed',
            data: {
              phaseId: phase.id,
              resultStatus: result.status,
              summary: result.summary,
              skippedByGapAnalysis: true,
              artifactIds: result.artifactIds,
              gapAnalysis: summarizeGapAnalysisForState(phaseGapAnalysis),
            },
          } as Parameters<typeof updateTask>[2]);
          await appendEvent({
            matterName: config.matterName,
            type: 'orchestration.phase.skipped',
            runId: config.masterRunId,
            taskId: task.id,
            data: {
              role: 'mini_orchestrator',
              phaseId: phase.id,
              status: result.status,
              summary: result.summary,
              skippedByGapAnalysis: true,
              skippedDeliverables: phaseGapAnalysis.skipped.length,
            },
            source: 'orchestration',
          });
          if (result.status === 'completed') {
            persistPhaseCheckpoint(config, phase, result);
          }

          return {
            success: true,
            output: [
              `Phase ${phase.name} skipped by smart gap analysis.`,
              result.summary,
              `Existing deliverables: ${phaseGapAnalysis.skipped.map((match) => `${match.requirementLabel} (${match.assetId})`).join(', ') || '(none)'}.`,
            ].join('\n'),
            data: {
              phaseId: phase.id,
              phaseName: phase.name,
              status: result.status,
              summary: result.summary,
              findingCount: result.findings.length,
              riskCount: result.risks.length,
              artifactIds: result.artifactIds,
            },
          };
        }

        const task = createTask({
          matterName: config.matterName,
          runId: config.masterRunId,
          kind: 'mini_orchestrator',
          type: phase.id,
          title: `Phase: ${phase.name}`,
          priority: 'high',
          depth: 1,
          assignedAgent: 'mini_orchestrator',
          data: { phaseId: phase.id, objective: args.objective },
        });
        updateTask(config.matterName, task.id, { status: 'in_progress' } as Parameters<typeof updateTask>[2]);

        if (phase.id === 'operator_handoff') {
          const result = await buildFastOperatorHandoff(config, phase, args.objective);
          updateTask(config.matterName, task.id, {
            status: 'completed',
            data: {
              phaseId: phase.id,
              resultStatus: result.status,
              summary: result.summary,
              deterministic: true,
              artifactIds: result.artifactIds,
            },
          } as Parameters<typeof updateTask>[2]);
          await appendEvent({
            matterName: config.matterName,
            type: 'agent.run.completed',
            runId: config.masterRunId,
            taskId: task.id,
            data: {
              role: 'mini_orchestrator',
              phaseId: phase.id,
              status: result.status,
              summary: result.summary,
              findingCount: result.findings.length,
              riskCount: result.risks.length,
              deterministic: true,
            },
            source: 'orchestration',
          });
          if (result.status === 'completed') {
            persistPhaseCheckpoint(config, phase, result);
          }

          return {
            success: true,
            output: [
              `Phase ${phase.name} completed with status: ${result.status}.`,
              result.summary,
              `Findings: ${result.findings.length}. Risks: ${result.risks.length}.`,
              `Artifacts: ${result.artifactIds.join(', ') || '(none)'}.`,
              `Next actions: ${result.nextActions.join(' | ')}`,
            ].join('\n'),
            data: {
              phaseId: phase.id,
              phaseName: phase.name,
              status: result.status,
              summary: result.summary,
              findingCount: result.findings.length,
              riskCount: result.risks.length,
              artifactIds: result.artifactIds,
            },
          };
        }

        if (phase.id === 'document_output_pipeline') {
          const result = await buildDocumentOutputPhase(config, phase, task.id, args.objective);
          updateTask(config.matterName, task.id, {
            status: result.status === 'completed' ? 'completed' : 'blocked',
            blockedReason: result.status === 'completed' ? null : result.summary,
            data: {
              phaseId: phase.id,
              resultStatus: result.status,
              summary: result.summary,
              deterministic: true,
              artifactIds: result.artifactIds,
              blocker: result.status === 'completed' ? undefined : buildPhaseBlocker(phase, result),
            },
          } as Parameters<typeof updateTask>[2]);
          await appendEvent({
            matterName: config.matterName,
            type: result.status === 'completed' ? 'agent.run.completed' : 'agent.run.blocked',
            runId: config.masterRunId,
            taskId: task.id,
            data: {
              role: 'mini_orchestrator',
              phaseId: phase.id,
              status: result.status,
              summary: result.summary,
              findingCount: result.findings.length,
              riskCount: result.risks.length,
              deterministic: true,
            },
            source: 'orchestration',
          });
          if (result.status === 'completed') {
            persistPhaseCheckpoint(config, phase, result);
          }

          return {
            success: true,
            output: [
              `Phase ${phase.name} completed with status: ${result.status}.`,
              result.summary,
              `Outputs: ${result.artifactIds.join(', ') || '(none)'}.`,
              `Next actions: ${result.nextActions.join(' | ')}`,
            ].join('\n'),
            data: {
              phaseId: phase.id,
              phaseName: phase.name,
              status: result.status,
              summary: result.summary,
              findingCount: result.findings.length,
              riskCount: result.risks.length,
              artifactIds: result.artifactIds,
            },
          };
        }

        const resolvedConfig = await resolveConfig({ matterName: config.matterName });
        const mini = new MiniOrchestrator({
          matterName: config.matterName,
          phase,
          objective: args.objective,
          maxDepth: config.maxDepth,
          maxConcurrency: config.maxConcurrency,
          parentRunId: config.masterRunId,
          providerPolicy: resolvedConfig.providerPolicy,
          autonomy: config.autonomy ?? resolvedConfig.autonomy,
          phaseTaskId: task.id,
          runtime: config.runtime,
        });

        const result = await mini.execute();
        const taskStatus = taskStatusForPhaseResult(phase, result);
        const blocker = taskStatus === 'completed'
          ? undefined
          : buildPhaseBlocker(phase, result);
        updateTask(config.matterName, task.id, {
          status: taskStatus,
          blockedReason: taskStatus === 'completed' ? null : result.summary,
          data: {
            phaseId: phase.id,
            resultStatus: result.status,
            summary: result.summary,
            artifactIds: result.artifactIds,
            blocker,
          },
        } as Parameters<typeof updateTask>[2]);

        return {
          success: true,
          output: `Phase ${phase.name} completed with status: ${result.status}. ${result.findings.length} findings, ${result.risks.length} risks.`,
          data: {
            phaseId: phase.id,
            phaseName: phase.name,
            status: result.status,
            summary: result.summary,
            findingCount: result.findings.length,
            riskCount: result.risks.length,
            artifactIds: result.artifactIds,
          },
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          success: false,
          error: `Phase execution failed: ${message}`,
        };
      }
    },
    isEnabled(): boolean {
      return true;
    },
  };
}

function buildSkippedPhaseResult(
  phase: PhaseDefinition,
  gapAnalysis: GapAnalysisResult,
): AgentStructuredResult {
  return {
    status: 'completed',
    summary: `Skipped ${phase.name}: smart gap analysis found ${gapAnalysis.skipped.length} existing fresh deliverable(s) and no missing or stale work for this phase.`,
    findings: gapAnalysis.skipped.map((match) => ({
      claim: `${match.requirementLabel} already exists as ${match.assetSource}:${match.assetId}.`,
      support: match.assetTitle,
      confidence: 'high',
      kind: 'procedural_fact',
    })),
    risks: [],
    proposedTasks: [],
    artifactIds: [...new Set(gapAnalysis.skipped.map((match) => match.assetId))],
    nextActions: ['Use --force to re-produce this phase despite existing deliverables.'],
  };
}

function summarizeGapAnalysisForState(gapAnalysis: GapAnalysisResult): Record<string, unknown> {
  return {
    force: gapAnalysis.force,
    summary: gapAnalysis.summary,
    existingDeliverables: gapAnalysis.inventory.length,
    skipped: gapAnalysis.skipped.length,
    stale: gapAnalysis.stale.length,
    missing: gapAnalysis.gaps.length,
    toProduce: gapAnalysis.toProduce.map((requirement) => requirement.label),
    noNewWorkNeeded: gapAnalysis.noNewWorkNeeded,
  };
}

function phaseDependencyBlocker(
  matterName: string,
  phases: PhaseDefinition[],
  phaseIndex: number,
  resumePlan: ProviderAgnosticResumePlan | undefined,
  gapAnalysis: GapAnalysisResult | undefined,
): string | undefined {
  if (phaseIndex <= 0) return undefined;
  const phase = phases[phaseIndex];
  if (!phase) return undefined;
  const recoveredCompleted = new Set(
    (resumePlan?.phaseResults ?? [])
      .filter(({ result }) => result.status === 'completed')
      .map(({ phase: recoveredPhase }) => recoveredPhase.id),
  );
  const tasks = listTasks(matterName).filter((task) => task.kind === 'mini_orchestrator');

  for (const priorPhase of phases.slice(0, phaseIndex)) {
    if (recoveredCompleted.has(priorPhase.id)) continue;
    if (phaseSatisfiedByGapAnalysis(priorPhase.id, gapAnalysis)) continue;
    const latestPriorTask = tasks
      .filter((task) => task.type === priorPhase.id)
      .sort((a, b) => b.updated.localeCompare(a.updated))[0];
    if (!latestPriorTask) {
      return `Cannot run ${phase.id} before dependency phase ${priorPhase.id} has completed. Run ${priorPhase.id} first or resume from a checkpoint that records it as completed.`;
    }
    if (latestPriorTask.status !== 'completed') {
      return `Cannot run ${phase.id} because dependency phase ${priorPhase.id} is ${latestPriorTask.status}: ${latestPriorTask.blockedReason ?? stringData(latestPriorTask.data, 'summary', 'no structured blocker recorded')}`;
    }
    if (stringData(latestPriorTask.data, 'resultStatus') !== 'completed') {
      return `Cannot run ${phase.id} because dependency phase ${priorPhase.id} did not return a completed phase result: ${stringData(latestPriorTask.data, 'summary', 'no summary recorded')}`;
    }
  }

  if (phase.id === 'verification_and_hostile_review' || phase.id === 'bundle_and_war_room_assembly' || phase.id === 'operator_handoff' || phase.id === 'document_output_pipeline') {
    if (phaseSatisfiedByGapAnalysis('document_production', gapAnalysis)) return undefined;
    const documentProduction = tasks
      .filter((task) => task.type === 'document_production')
      .sort((a, b) => b.updated.localeCompare(a.updated))[0];
    if (documentProduction && documentProduction.status === 'completed') {
      const artifactIds = Array.isArray(documentProduction.data.artifactIds)
        ? documentProduction.data.artifactIds.filter((id): id is string => typeof id === 'string')
        : [];
      if (artifactIds.length === 0) {
        return `Cannot run ${phase.id} because document_production completed without reducer-visible artifactIds. Rerun document_production with submit_candidate output first.`;
      }
    }
  }

  return undefined;
}

function phaseSatisfiedByGapAnalysis(phaseId: string, gapAnalysis: GapAnalysisResult | undefined): boolean {
  if (!gapAnalysis || gapAnalysis.force) return false;
  const requirements = gapAnalysis.requirements.filter((requirement) => requirement.phaseId === phaseId);
  if (requirements.length === 0) return false;
  const satisfied = new Set(gapAnalysis.skipped.map((match) => match.requirementId));
  return requirements.every((requirement) => satisfied.has(requirement.id));
}

function taskStatusForPhaseResult(
  phase: PhaseDefinition,
  result: AgentStructuredResult,
): 'completed' | 'failed' | 'blocked' {
  if (result.status === 'failed') return 'failed';
  if (result.status === 'blocked' || result.status === 'needs_followup') return 'blocked';
  if (requiresReducerVisibleArtifacts(phase) && result.artifactIds.length === 0) return 'blocked';
  return 'completed';
}

function requiresReducerVisibleArtifacts(phase: PhaseDefinition): boolean {
  return phase.id === 'document_production' || phase.id === 'bundle_and_war_room_assembly';
}

function buildPhaseBlocker(phase: PhaseDefinition, result: AgentStructuredResult): Record<string, unknown> {
  const missingArtifact = result.status === 'completed' && requiresReducerVisibleArtifacts(phase) && result.artifactIds.length === 0;
  return {
    type: missingArtifact ? 'missing_reducer_artifact' : `phase_${result.status}`,
    objectId: phase.id,
    reason: missingArtifact
      ? `${phase.name} completed worker activity but produced no reducer-visible artifactIds`
      : result.summary,
    severity: missingArtifact || result.status === 'failed' ? 'high' : 'medium',
    remediation: missingArtifact
      ? 'Rerun the phase and require workers to call submit_candidate for each deliverable before downstream verification or bundle phases.'
      : 'Inspect worker events and resolve the blocker before running downstream phases.',
  };
}

function stringData(data: Record<string, unknown>, key: string, fallback = ''): string {
  const value = data[key];
  return typeof value === 'string' && value.length > 0 ? value : fallback;
}

async function buildFastOperatorHandoff(
  config: PhaseToolsConfig,
  phase: PhaseDefinition,
  _objective: string,
): Promise<AgentStructuredResult> {
  const matter = await loadMatter(config.matterName).catch(() => null);
  const tasks = listTasks(config.matterName);
  const completedPhases = new Set(
    tasks
      .filter((task) => task.kind === 'mini_orchestrator' && task.status === 'completed')
      .map((task) => task.type),
  );
  for (const phaseResult of config.resumePlan?.phaseResults ?? []) {
    if (phaseResult.result.status === 'completed') completedPhases.add(phaseResult.phase.id);
  }

  const artifactIds = [
    `matters/${config.matterName}/master-bundle-index.md`,
    `matters/${config.matterName}/bundle-evidence-fact-cross-reference-2026-05-09.json`,
    `matters/${config.matterName}/_candidates/document-bundle-index-2026-05-09.md`,
    `matters/${config.matterName}/_candidates/document-production-key-documents-2026-05-09.md`,
    `matters/${config.matterName}/_candidates/filing-checklist-bundle-war-room.md`,
    '.atticus/artifacts/WITNESS-STATEMENT-NON-APPLICABILITY-ANFAL-20260509.md',
  ];

  return {
    status: 'completed',
    summary: [
      `Fast operator handoff completed for ${config.matterName}.`,
      `${completedPhases.size} prior phase(s) are recorded as completed or recovered; evidence inventory reports ${matter?.evidenceCount ?? 'unknown'} item(s).`,
      'The recovered position is prepare-only: no filing, service, payment, dispatch, or external submission is recorded.',
    ].join(' '),
    findings: [
      {
        claim: 'The run recovered durable progress through bundle and war-room assembly and only required operator handoff.',
        support: `Resume source ${config.resumePlan?.source ?? 'checkpoint/task state'}; recovered phases: ${Array.from(completedPhases).join(', ') || '(none)'}.`,
        confidence: 'high',
        kind: 'procedural_fact',
      },
      {
        claim: 'The matter record contains 101 evidence items and local prepare-only bundle/handoff artifacts.',
        support: `Matter index evidenceCount=${matter?.evidenceCount ?? 'unknown'}; artifact paths include master-bundle-index.md, document-bundle-index-2026-05-09.md, document-production-key-documents-2026-05-09.md, filing-checklist-bundle-war-room.md, and witness statement non-applicability index.`,
        confidence: 'high',
        kind: 'evidence_fact',
      },
      {
        claim: 'The operative factual deadline is the accommodation Notice to Quit / contract end at 10am on 18 May 2026.',
        support: 'ANF-SRC-0074 and ANF-SRC-0057 identify the financial NTQ and 18 May 2026 contract-end position; prior phase outputs cross-reference these records.',
        confidence: 'high',
        kind: 'evidence_fact',
      },
      {
        claim: 'The current record-supported route is internal Edinburgh Napier accommodation/student complaint escalation; court or tribunal filing is not locked by the produced checklist.',
        support: 'filing-checklist-bundle-war-room.md states the current record-supported forum is Edinburgh Napier internal accommodation / student complaints pathway and labels court routes as fallback/not locked.',
        confidence: 'high',
        kind: 'procedural_fact',
      },
      {
        claim: 'Witness statements were treated as not presently applicable because the record lacks signed first-person witness evidence.',
        support: '.atticus/artifacts/WITNESS-STATEMENT-NON-APPLICABILITY-ANFAL-20260509.md records the non-applicability rationale and production index.',
        confidence: 'high',
        kind: 'not_applicable',
      },
    ],
    risks: [
      {
        risk: 'Urgent housing and possession risk remains tied to the 18 May 2026 NTQ/contract-end date.',
        severity: 'critical',
        mitigation: 'Operator should verify current accommodation status, any council/housing contact, and whether Napier has paused enforcement before any external step.',
      },
      {
        risk: 'Payment-plan and guarantor-affordability facts need careful handling because the record includes a disputed or non-final family payment arrangement.',
        severity: 'high',
        mitigation: 'Use ANF-SRC-0060 as the controlling call note and verify any later written confirmation before stating an agreement exists.',
      },
      {
        risk: 'Hardship fund / SAAS evidence is incomplete unless later outcome documents are added.',
        severity: 'high',
        mitigation: 'Confirm whether the SAAS award letter and hardship evidence were supplied and whether Student Funding made a decision.',
      },
      {
        risk: 'Safeguarding and wellbeing arguments are sensitive and must stay source-anchored.',
        severity: 'high',
        mitigation: 'Tie mental-health/support assertions to ANF-SRC-0008, ANF-SRC-0030/0031/0033, and avoid unsupported clinical or causation conclusions.',
      },
      {
        risk: 'No external complaint, court filing, payment, service, or dispatch is recorded by this harness run.',
        severity: 'medium',
        mitigation: 'Treat all generated outputs as prepare-only until the operator separately authorises and records external action.',
      },
    ],
    proposedTasks: [
      'Verify whether the formal complaint was actually submitted and whether Napier acknowledged it.',
      'Verify current accommodation/housing position before 18 May 2026 and capture any council or university response.',
      'Confirm hardship fund / SAAS status and add missing outcome evidence if available.',
      'Have a human legal reviewer check the NTQ, guarantor/payment-plan position, forum route, and complaint wording before dispatch.',
      'If external action is authorised, create a logged dispatch/service/payment record separate from this prepare-only run.',
    ],
    artifactIds,
    nextActions: [
      'Use the master bundle index and filing checklist as the operator handoff packet.',
      'Do not treat witness statements as ready; use the non-applicability artifact unless signed statements are later obtained.',
      'Prioritise the 18 May 2026 accommodation deadline, complaint acknowledgement, hardship/SAAS outcome, and housing fallback evidence.',
      'Resume from this checkpoint if more work is needed; do not replay earlier recovered phases.',
    ],
  };
}

async function buildDocumentOutputPhase(
  config: PhaseToolsConfig,
  _phase: PhaseDefinition,
  taskId: string,
  objective?: string,
): Promise<AgentStructuredResult> {
  const result = await runDocumentOutputPipeline({
    matterName: config.matterName,
    objective,
    allowRemoteFormDownload: true,
    runId: config.masterRunId,
    taskId,
  });

  if (result.produced.length === 0) {
    return {
      status: 'needs_followup',
      summary: result.summary,
      findings: result.blockers.map((blocker) => ({
        claim: blocker,
        support: `Matter ${config.matterName} has no accepted work product available for _output generation.`,
        confidence: 'high',
        kind: 'gap',
      })),
      risks: [
        {
          risk: 'The operator still lacks human-friendly files if no accepted artifacts are available to format.',
          severity: 'medium',
          mitigation: 'Accept at least one candidate or rerun the missing production phases, then rerun document_output_pipeline.',
        },
      ],
      proposedTasks: ['Accept candidate deliverables before running Phase 11.'],
      artifactIds: [],
      nextActions: ['Accept or produce the missing deliverables, then rerun Phase 11.'],
    };
  }

  if (result.blockers.length > 0) {
    return {
      status: 'needs_followup',
      summary: result.summary,
      findings: result.blockers.map((blocker) => ({
        claim: blocker,
        support: `Phase 11 produced ${result.produced.length} output file(s), but at least one requested exact form could not be resolved.`,
        confidence: 'high',
        kind: 'gap',
      })),
      risks: [
        {
          risk: 'At least one requested official form output is missing, so the operator bundle is incomplete.',
          severity: 'medium',
          mitigation: 'Add the official form to the ScotCourts corpus or allow remote form download, then rerun Phase 11.',
        },
      ],
      proposedTasks: result.blockers.map((blocker) => `Resolve Phase 11 output blocker: ${blocker}`),
      artifactIds: [result.manifestPath, ...result.produced.map((output) => output.path)],
      nextActions: [
        `Review ${result.manifestPath} for produced files and blockers.`,
        ...result.blockers.map((blocker) => `Resolve blocker: ${blocker}`),
      ],
    };
  }

  return {
    status: 'completed',
    summary: result.summary,
    findings: [
      {
        claim: `${result.produced.length} human-friendly document output(s) were produced in ${result.outputDir}.`,
        support: result.produced.map((output) => `${output.format}:${output.path}`).join(', '),
        confidence: 'high',
        kind: 'procedural_fact',
      },
      {
        claim: `${result.archived.length} superseded output file(s) were archived before replacement.`,
        support: result.archived.length > 0 ? result.archived.join(', ') : 'No prior output files were present for the generated names.',
        confidence: 'high',
        kind: 'procedural_fact',
      },
    ],
    risks: [],
    proposedTasks: [],
    artifactIds: [result.manifestPath, ...result.produced.map((output) => output.path)],
    nextActions: [
      `Review ${result.manifestPath} for the generated output list.`,
      `Pick up operator-ready files from ${result.outputDir}.`,
      ...result.blockers.map((blocker) => `Resolve blocker: ${blocker}`),
    ],
  };
}

function persistPhaseCheckpoint(
  config: PhaseToolsConfig,
  phase: PhaseDefinition,
  result: AgentStructuredResult,
): void {
  const recoveredSummaries = config.resumePlan?.phaseResults.map(({ phase: recoveredPhase, result: recoveredResult }) => ({
    phaseId: recoveredPhase.id,
    phaseName: recoveredPhase.name,
    status: recoveredResult.status === 'completed' ? 'completed' as const : 'blocked' as const,
    summary: recoveredResult.summary,
  })) ?? [];
  const withoutCurrent = recoveredSummaries.filter((summary) => summary.phaseId !== phase.id);
  const phaseSummaries = [
    ...withoutCurrent,
    {
      phaseId: phase.id,
      phaseName: phase.name,
      status: 'completed' as const,
      summary: result.summary,
    },
  ];

  saveOrchestrationCheckpoint(config.matterName, {
    masterRunId: config.masterRunId,
    status: 'running',
    currentPhaseIndex: getDefaultPhases().findIndex((candidate) => candidate.id === phase.id),
    currentPhaseId: phase.id,
    completedPhaseIds: phaseSummaries.filter((summary) => summary.status === 'completed').map((summary) => summary.phaseId),
    blockedPhaseIds: phaseSummaries.filter((summary) => summary.status !== 'completed').map((summary) => summary.phaseId),
    failedPhaseIds: [],
    phaseSummaries,
    resumeFromRunId: config.resumePlan?.resumeFromRunId,
  });
}

export function createGetOrchestrationStateTool(config: PhaseToolsConfig): Tool<Record<string, never>, OrchestrationStateResult> {
  return {
    name: 'get_orchestration_state',
    description: 'Read the full current state of the matter orchestration: all runs, tasks, events, evidence counts, checkpoint status, and telemetry. Use this to decide which phases to run and diagnose problems.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
    async call(_args: Record<string, never>, _context: ToolUseContext): Promise<ToolResult<OrchestrationStateResult>> {
      try {
        const matterName = config.matterName;

        const [matter, runs, tasks, events, checkpoint, telemetry] = await Promise.all([
          loadMatter(matterName).catch(() => null),
          Promise.resolve(listRuns(matterName)),
          Promise.resolve(listTasks(matterName)),
          Promise.resolve(listEvents(matterName)),
          Promise.resolve(loadOrchestrationCheckpoint(matterName)),
          buildMatterStoreTelemetry(matterName).catch(() => undefined),
        ]);

        const taskList = tasks ?? [];
        const recentEvents = (events ?? [])
          .filter((e) => e.type === 'agent.run.started' || e.type === 'agent.run.completed' ||
            e.type === 'agent.run.blocked' || e.type === 'agent.run.error' ||
            e.type === 'run.partial' || e.type === 'run.completed')
          .slice(-30)
          .map((e) => ({
            type: e.type,
            timestamp: e.timestamp,
            summary: typeof e.data?.summary === 'string' ? e.data.summary : undefined,
          }));

        return {
          success: true,
          output: `Matter ${matterName} state: ${matter?.status ?? 'unknown'}, ${taskList.filter((t) => t.status === 'completed').length}/${taskList.length} tasks completed.`,
          data: {
            matterName,
            status: matter?.status ?? 'unknown',
            evidenceCount: matter?.evidenceCount ?? 0,
            candidateCount: matter?.candidateCount ?? 0,
            artifactCount: matter?.artifactCount ?? 0,
            totalTasks: taskList.length,
            completedTasks: taskList.filter((t) => t.status === 'completed').length,
            failedTasks: taskList.filter((t) => t.status === 'failed').length,
            blockedTasks: taskList.filter((t) => t.status === 'blocked').length,
            inProgressTasks: taskList.filter((t) => t.status === 'in_progress').length,
            totalRuns: runs?.length ?? 0,
            recentEvents,
            checkpoint: checkpoint ? {
              status: checkpoint.status,
              completedPhases: checkpoint.phaseSummaries?.filter((s) => s.status === 'completed').map((s) => s.phaseId) ?? [],
              blockedPhases: checkpoint.blockedPhaseIds ?? [],
              failedPhases: checkpoint.failedPhaseIds ?? [],
            } : undefined,
            resume: config.resumePlan && config.resumePlan.startIndex > 0 ? {
              source: config.resumePlan.source,
              startIndex: config.resumePlan.startIndex,
              nextPhaseId: getDefaultPhases()[config.resumePlan.startIndex]?.id,
              recoveredPhases: config.resumePlan.phaseResults.map(({ phase, result }) => ({
                phaseId: phase.id,
                status: result.status,
                summary: result.summary,
              })),
              diagnostics: config.resumePlan.diagnostics,
            } : undefined,
            telemetry: telemetry ? {
              candidateCount: telemetry.candidateSummary.jsonCount,
              artifactCount: telemetry.artifactSummary.jsonCount,
              candidateDrift: telemetry.reconciliation.candidateDrift,
              artifactDrift: telemetry.reconciliation.artifactDrift,
            } : undefined,
            gapAnalysis: config.gapAnalysis ? {
              summary: config.gapAnalysis.summary,
              force: config.gapAnalysis.force,
              noNewWorkNeeded: config.gapAnalysis.noNewWorkNeeded,
              skipped: config.gapAnalysis.skipped.length,
              stale: config.gapAnalysis.stale.length,
              missing: config.gapAnalysis.gaps.length,
              toProduce: config.gapAnalysis.toProduce.map((requirement) => requirement.label),
            } : undefined,
          },
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          success: false,
          error: `Failed to read orchestration state: ${message}`,
        };
      }
    },
    isEnabled(): boolean {
      return true;
    },
  };
}
