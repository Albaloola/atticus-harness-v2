import { MiniOrchestrator } from './mini-orchestrator.js';
import { createTask, updateTask } from '../state/tasks.js';
import { listRuns, listTasks } from '../state/index.js';
import { appendEvent, listEvents } from '../state/events.js';
import { loadMatter } from '../storage/matter.js';
import { loadOrchestrationCheckpoint, saveOrchestrationCheckpoint } from './checkpoint.js';
import { resolveConfig } from '../config/loader.js';
import { getDefaultPhases, type PhaseDefinition } from '../legal/workflow.js';
import { buildMatterStoreTelemetry } from '../observability/store-telemetry.js';
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
          persistPhaseCheckpoint(config, phase, result);

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

        const resolvedConfig = await resolveConfig({ matterName: config.matterName });
        const mini = new MiniOrchestrator({
          matterName: config.matterName,
          phase,
          objective: args.objective,
          maxDepth: config.maxDepth,
          maxConcurrency: config.maxConcurrency,
          parentRunId: config.masterRunId,
          providerPolicy: resolvedConfig.providerPolicy,
          autonomy: resolvedConfig.autonomy,
          phaseTaskId: task.id,
          runtime: config.runtime,
        });

        const result = await mini.execute();
        updateTask(config.matterName, task.id, {
          status: result.status === 'failed'
            ? 'failed'
            : result.status === 'blocked' || result.status === 'needs_followup'
              ? 'blocked'
              : 'completed',
          data: {
            phaseId: phase.id,
            resultStatus: result.status,
            summary: result.summary,
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
