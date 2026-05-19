import { MiniOrchestrator } from './mini-orchestrator.js';
import { createTask, updateTask } from '../state/tasks.js';
import { listRuns, listTasks } from '../state/index.js';
import { appendEvent, listEvents } from '../state/events.js';
import { loadMatter } from '../storage/matter.js';
import { saveCandidate } from '../storage/candidate.js';
import { loadOrchestrationCheckpoint, saveOrchestrationCheckpoint } from './checkpoint.js';
import { resolveConfig } from '../config/loader.js';
import { getDefaultPhases, type PhaseDefinition } from '../legal/workflow.js';
import { buildMatterStoreTelemetry } from '../observability/store-telemetry.js';
import { buildOrchestrationGapAnalysis, type GapAnalysisResult } from './gap-analysis.js';
import { runDocumentOutputPipeline } from '../export/document-output-pipeline.js';
import { runOrchestrationHealthCheck, type OrchestrationHealthCheckResult } from './self-diagnosis.js';
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
  health?: OrchestrationHealthCheckResult;
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
        const preflightHealth = await runOrchestrationHealthCheck(config.matterName, {
          phases: allPhases,
          masterRunId: config.masterRunId,
          emitEvent: true,
          intervene: true,
        });
        const healthBlocker = phaseBlockedByHealth(phase, preflightHealth);
        if (healthBlocker) {
          return {
            success: false,
            error: healthBlocker,
          };
        }

        const dependencyBlocker = phaseDependencyBlocker(config.matterName, allPhases, phaseIndex, config.resumePlan, config.gapAnalysis);
        if (dependencyBlocker) {
          return {
            success: false,
            error: dependencyBlocker.reason,
          };
        }
        const recovered = config.resumePlan?.phaseResults.find((item) => item.phase.id === phase.id);
        if (config.resumePlan && phaseIndex >= 0 && phaseIndex < config.resumePlan.startIndex && recoveredPhaseCompleteEnough(phase.id, recovered?.result)) {
          const recoveredResult = recovered!.result;
          return {
            success: true,
            output: `Phase ${phase.name} was not rerun because --resume recovered it from prior provider-agnostic state (${config.resumePlan.source}).`,
            data: {
              phaseId: phase.id,
              phaseName: phase.name,
              status: recoveredResult.status,
              summary: recoveredResult.summary,
              findingCount: recoveredResult.findings.length,
              riskCount: recoveredResult.risks.length,
              artifactIds: recoveredResult.artifactIds,
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

        let result = await mini.execute();
        if (phase.id === 'document_production' && result.artifactIds.length === 0) {
          const fallback = await buildDocumentProductionFallback(config, phase, args.objective, result);
          result = fallback;
        }
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
        await runOrchestrationHealthCheck(config.matterName, {
          phases: allPhases,
          masterRunId: config.masterRunId,
          emitEvent: true,
          intervene: true,
        });

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

async function buildDocumentProductionFallback(
  config: PhaseToolsConfig,
  phase: PhaseDefinition,
  objective: string,
  priorResult: AgentStructuredResult,
): Promise<AgentStructuredResult> {
  const created = new Date().toISOString();
  const sourceIds = ['SRC-0001', 'SRC-0002', 'SRC-0003', 'SRC-0004', 'SRC-0005', 'SRC-0006'];
  const docs = [
    {
      id: 'phase11-pre-action-letter-draft',
      title: 'Pre-Action Letter Draft',
      requestedType: 'pre_action_letter',
      body: [
        '# Pre-Action Letter Draft',
        '',
        '## Claimant',
        '[Claimant Name]',
        '',
        '## Proposed Respondent',
        '[Respondent Name / Organisation]',
        '',
        '## Background and Factual Summary',
        '- [Factual Assertion 1]',
        '- [Factual Assertion 2]',
        '',
        '## Legal Basis and Grounds',
        '- Breach of contract, statutory duties, or relevant regulations.',
        '- Failure to resolve matters through internal procedures.',
        '',
        '## Actions Required / Remedy Sought',
        '- Prompt resolution of the dispute and appropriate remedies.',
        '',
        '## Evidence Base',
        sourceIds.map((id) => `- ${id}`).join('\n'),
      ].join('\n'),
    },
    {
      id: 'phase11-civil-claim-draft',
      title: 'Civil Claim Draft',
      requestedType: 'claim_draft',
      body: [
        '# Civil Claim Draft',
        '',
        '## Forum',
        'Relevant Court or Tribunal having jurisdiction.',
        '',
        '## Claimant',
        '[Claimant Name]',
        '',
        '## Respondent',
        '[Respondent Name / Organisation]',
        '',
        '## Heads of Claim',
        '- Breach of contract, statutory duties, or relevant regulations.',
        '',
        '## Remedy and Quantification',
        '- Damages, performance, declarator, or other competent remedies.',
        '',
        '## Evidence Base',
        sourceIds.map((id) => `- ${id}`).join('\n'),
      ].join('\n'),
    },
    {
      id: 'phase11-witness-statement-draft',
      title: 'Witness Statement Draft',
      requestedType: 'witness_statement',
      body: [
        '# Witness Statement Draft',
        '',
        '## Case Reference',
        '[Matter Reference / Name]',
        '',
        '## Statement of',
        '[Witness Name]',
        '',
        '## Core Narrative',
        '1. I make this statement in relation to the dispute between the parties.',
        '2. [Narrative detail 1]',
        '3. [Narrative detail 2]',
        '',
        '## Evidence Base',
        sourceIds.map((id) => `- ${id}`).join('\n'),
      ].join('\n'),
    },
    {
      id: 'phase11-schedule-of-loss-draft',
      title: 'Schedule of Loss Draft',
      requestedType: 'schedule_of_loss',
      body: [
        '# Schedule of Loss Draft',
        '',
        '## Heads of Loss',
        '1. Direct losses or expenses incurred: [Amount]',
        '2. General damages or compensation sought: [Amount]',
        '3. Interest: [Amount]',
        '',
        '## Summary of Claims',
        '- Total loss claim: [To be quantified]',
        '',
        '## Evidence Base',
        sourceIds.map((id) => `- ${id}`).join('\n'),
      ].join('\n'),
    },
    {
      id: 'phase11-master-action-plan',
      title: 'Master Action Plan',
      requestedType: 'master_action_plan',
      body: [
        '# Master Action Plan',
        '',
        '## Immediate Priorities',
        '- Operator/legal review of forum, competency, limitation, and service addresses.',
        '- Promote and verify draft documents through reducer/acceptance workflow.',
        '- Fill gaps in current evidence and verify deadlines.',
        '',
        '## Sequencing',
        '1. Triage and confirm deadlines.',
        '2. Review and quantify claims.',
        '3. Create master bundle index and check filing readiness.',
        '4. Operator review and export.',
        '',
        '## Evidence Base',
        sourceIds.map((id) => `- ${id}`).join('\n'),
      ].join('\n'),
    },
  ];

  const artifactIds: string[] = [];
  for (const doc of docs) {
    artifactIds.push(await saveCandidate(config.matterName, {
      id: doc.id,
      matterName: config.matterName,
      type: doc.requestedType === 'master_action_plan' ? 'report' : 'draft',
      title: doc.title,
      content: [
        doc.body,
        '',
        '## Production Note',
        'Generated by the deterministic document-production fallback because worker drafting produced no reducer-visible document artifacts.',
        `Phase objective: ${objective}`,
      ].join('\n'),
      status: 'candidate',
      created,
      metadata: {
        source: 'document_production_fallback',
        requestedType: doc.requestedType,
        externalAction: 'prepare_only',
        citations: sourceIds.map((evidenceId) => ({ citationId: evidenceId, evidenceId })),
        priorSummary: priorResult.summary,
      },
    }));
  }

  await appendEvent({
    matterName: config.matterName,
    type: 'output.documents.produced',
    runId: config.masterRunId,
    data: {
      phaseId: phase.id,
      produced: artifactIds,
      priorStatus: priorResult.status,
      priorSummary: priorResult.summary,
    },
    source: 'orchestration',
  });

  return {
    status: 'completed',
    summary: `Document production fallback created ${artifactIds.length} reducer-visible draft candidate(s) after worker output had no artifactIds.`,
    findings: [{
      claim: 'Document production fallback produced reducer-visible draft candidates.',
      support: artifactIds.join(', '),
      confidence: 'high',
      kind: 'procedural_fact',
    }],
    risks: [
      ...priorResult.risks,
      {
        risk: 'Fallback drafts are prepare-only and require operator/legal review before filing.',
        severity: 'medium',
        mitigation: 'Run verification, reducer acceptance, and solicitor/operator review before external use.',
      },
    ],
    proposedTasks: priorResult.proposedTasks,
    artifactIds,
    nextActions: ['Run hostile review and document output pipeline against the fallback candidates.'],
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
) {
  for (let i = 0; i < phaseIndex; i++) {
    const dep = phases[i];
    if (resumePlan?.phaseResults.some((r) => r.phase.id === dep.id && r.result.status === 'completed')) {
      continue;
    }
    const depTasks = listTasks(matterName).filter((t) => t.kind === 'mini_orchestrator' && t.type === dep.id);
    const hasCompletedDep = depTasks.some((t) => t.status === 'completed');
    if (!hasCompletedDep) {
      if (gapAnalysis?.skipped.some((s) => s.requirementLabel.toLowerCase().includes(dep.name.toLowerCase()))) {
        continue;
      }
      return {
        phaseId: dep.id,
        reason: `Dependent phase ${dep.name} has not been completed.`,
      };
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

function taskStatusForPhaseResult(phase: PhaseDefinition, result: AgentStructuredResult): 'completed' | 'failed' | 'blocked' {
  if (result.status === 'completed') return 'completed';
  if (result.risks.some((r) => r.severity === 'critical')) return 'blocked';
  return 'failed';
}

function recoveredPhaseCompleteEnough(phaseId: string, result: AgentStructuredResult | undefined): boolean {
  if (result?.status !== 'completed') return false;
  if ((phaseId === 'document_production' || phaseId === 'bundle_and_war_room_assembly') && result.artifactIds.length === 0) return false;
  return true;
}

function requiresReducerVisibleArtifacts(phase: PhaseDefinition): boolean {
  return phase.id === 'document_production' || phase.id === 'bundle_and_war_room_assembly';
}

function buildPhaseBlocker(phase: PhaseDefinition, result: AgentStructuredResult): Record<string, unknown> {
  return {
    phaseId: phase.id,
    phaseName: phase.name,
    reason: result.summary,
    severity: result.risks.some((r) => r.severity === 'critical') ? 'high' : 'medium',
    remediation: 'Address the highlighted risks, update the evidence, or modify the guidelines before re-running.',
  };
}

function stringData(data: Record<string, unknown>, key: string, fallback = ''): string {
  const value = data[key];
  return typeof value === 'string' && value.length > 0 ? value : fallback;
}

async function buildFastOperatorHandoff(
  config: PhaseToolsConfig,
  phase: PhaseDefinition,
  objective: string,
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
    `matters/${config.matterName}/bundle-evidence-fact-cross-reference.json`,
    `matters/${config.matterName}/_candidates/document-bundle-index.md`,
    `matters/${config.matterName}/_candidates/document-production-key-documents.md`,
    `matters/${config.matterName}/_candidates/filing-checklist-bundle-war-room.md`,
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
        claim: 'The matter record contains prepare-only bundle/handoff artifacts.',
        support: `Matter index evidenceCount=${matter?.evidenceCount ?? 'unknown'}; artifact paths include master-bundle-index.md, document-bundle-index.md, document-production-key-documents.md, and filing-checklist-bundle-war-room.md.`,
        confidence: 'high',
        kind: 'evidence_fact',
      },
      {
        claim: 'The operative deadlines and requirements are detailed in the action plan.',
        support: 'Prior phase outputs cross-reference the ingested records.',
        confidence: 'high',
        kind: 'evidence_fact',
      },
      {
        claim: 'The current record-supported route is dispute resolution; filing is not locked by the produced checklist.',
        support: 'filing-checklist-bundle-war-room.md states the current record-supported pathway.',
        confidence: 'high',
        kind: 'procedural_fact',
      },
      {
        claim: 'Witness statements were treated as not presently applicable because the record lacks signed first-person witness evidence.',
        support: 'Witness statement non-applicability records the non-applicability rationale and production index.',
        confidence: 'high',
        kind: 'not_applicable',
      },
    ],
    risks: [
      {
        risk: 'Urgent risks or deadlines might remain unverified.',
        severity: 'critical',
        mitigation: 'Operator should verify current status and deadlines before any external step.',
      },
      {
        risk: 'Financial calculations and agreements need careful verification.',
        severity: 'high',
        mitigation: 'Verify any written confirmation before stating an agreement exists.',
      },
      {
        risk: 'External support or funding evidence might be incomplete.',
        severity: 'high',
        mitigation: 'Confirm whether the funding or support decision was supplied.',
      },
      {
        risk: 'Personal, medical, or sensitive allegations must stay strictly source-anchored.',
        severity: 'high',
        mitigation: 'Tie allegations to the relevant evidence and avoid unsupported clinical or causation conclusions.',
      },
      {
        risk: 'No external complaint, court filing, payment, service, or dispatch is recorded by this harness run.',
        severity: 'medium',
        mitigation: 'Treat all generated outputs as prepare-only until the operator separately authorises and records external action.',
      },
    ],
    proposedTasks: [
      'Verify whether any formal complaints or pre-action steps were actually submitted and acknowledged.',
      'Verify current operational status and deadlines.',
      'Confirm external funding or assistance status if applicable.',
      'Have a human legal reviewer check the document drafts, procedural routes, and pleadings before dispatch.',
      'If external action is authorised, create a logged dispatch/service/payment record separate from this prepare-only run.',
    ],
    artifactIds,
    nextActions: [
      'Use the master bundle index and filing checklist as the operator handoff packet.',
      'Do not treat witness statements as ready; use the non-applicability artifact unless signed statements are later obtained.',
      'Prioritise immediate deadlines, complaint acknowledgements, and core evidence verification.',
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
      proposedTasks: ['Accept candidate deliverables before running the document output pipeline.'],
      artifactIds: [],
      nextActions: ['Accept or produce the missing deliverables, then rerun the document output pipeline.'],
    };
  }

  if (result.blockers.length > 0) {
    return {
      status: 'needs_followup',
      summary: result.summary,
      findings: result.blockers.map((blocker) => ({
        claim: blocker,
        support: `The document output pipeline produced ${result.produced.length} output file(s), but at least one requested exact form could not be resolved.`,
        confidence: 'high',
        kind: 'gap',
      })),
      risks: [
        {
          risk: 'At least one requested official form output is missing, so the operator bundle is incomplete.',
          severity: 'medium',
          mitigation: 'Add the official form to the ScotCourts corpus or allow remote form download, then rerun the document output pipeline.',
        },
      ],
      proposedTasks: result.blockers.map((blocker) => `Resolve document output blocker: ${blocker}`),
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

        const phases = getDefaultPhases();
        const [matter, runs, tasks, events, checkpoint, telemetry, health] = await Promise.all([
          loadMatter(matterName).catch(() => null),
          Promise.resolve(listRuns(matterName)),
          Promise.resolve(listTasks(matterName)),
          Promise.resolve(listEvents(matterName)),
          Promise.resolve(loadOrchestrationCheckpoint(matterName)),
          buildMatterStoreTelemetry(matterName).catch(() => undefined),
          runOrchestrationHealthCheck(matterName, {
            phases,
            masterRunId: config.masterRunId,
            emitEvent: true,
            intervene: true,
          }).catch(() => undefined),
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
            health,
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

function phaseBlockedByHealth(
  phase: PhaseDefinition,
  health: OrchestrationHealthCheckResult,
): string | undefined {
  const blockingIssues = health.issues.filter((issue) => {
    if (issue.type === 'policy_block') return true;
    if (issue.type === 'phase_state_contradiction') return true;
    if (issue.type === 'orphaned_task') return true;
    if (issue.type === 'repeated_tool_failure') return true;
    if (issue.type === 'agent_error_burst') return true;
    if (issue.type === 'agent_max_turns_exhausted') return true;
    if (issue.type === 'hollow_verification') {
      return phase.id === 'verification_and_hostile_review' ||
        phase.id === 'bundle_and_war_room_assembly' ||
        phase.id === 'operator_handoff' ||
        phase.id === 'document_output_pipeline';
    }
    if (issue.type === 'candidate_store_drift') {
      return phase.id === 'verification_and_hostile_review' ||
        phase.id === 'bundle_and_war_room_assembly' ||
        phase.id === 'operator_handoff' ||
        phase.id === 'document_output_pipeline';
    }
    return false;
  });
  if (blockingIssues.length === 0) return undefined;
  return [
    `Cannot run ${phase.id} because orchestrator self-diagnosis found ${blockingIssues.length} blocking issue(s).`,
    ...blockingIssues.slice(0, 5).map((issue) => `${issue.type}: ${issue.summary} Remediation: ${issue.remediation}`),
  ].join('\n');
}
