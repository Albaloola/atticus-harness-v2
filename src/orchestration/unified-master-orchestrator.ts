import { QueryLoop } from '../agent/query-loop.js';
import { createLLMClient } from '../llm/client.js';
import { createRun, updateRun } from '../state/runs.js';
import { appendEvent } from '../state/events.js';
import { recoverStaleRuntimeState } from '../state/runtime-recovery.js';
import { OrchestrationRuntime } from './runtime.js';
import { saveOrchestrationCheckpoint } from './checkpoint.js';
import { DEFAULT_MAX_CONCURRENCY, DEFAULT_MAX_DEPTH, normalizePositiveInteger, remainingDepth } from './limits.js';
import { resolveConfig } from '../config/loader.js';
import { selectModelForTask } from '../config/model-routing.js';
import { getDefaultPhases, type PhaseDefinition } from '../legal/workflow.js';
import { DEFAULTS, type AutonomyPolicy, type ResolvedHarnessConfig } from '../config/schema.js';
import { buildUnifiedMasterOrchestratorPrompt } from './prompts.js';
import { ToolRegistry } from '../tools/index.js';
import { createRunPhaseTool, createGetOrchestrationStateTool, type PhaseToolsConfig } from './orchestration-tools.js';
import { buildProviderAgnosticResumePlan } from './resume-recovery.js';
import { buildOrchestrationGapAnalysis, formatGapAnalysisForPrompt, type GapAnalysisResult } from './gap-analysis.js';
import type { OrchestratorConfig, OrchestratorResult } from './types.js';

export { OrchestratorConfig, OrchestratorResult } from './types.js';

export class UnifiedMasterOrchestrator {
  private config: OrchestratorConfig;
  private runtime: OrchestrationRuntime;

  constructor(config: OrchestratorConfig) {
    this.config = config;
    this.runtime = new OrchestrationRuntime({
      matterName: config.matterName,
      maxDepth: config.maxDepth,
      maxConcurrency: config.maxConcurrency,
      maxBudgetUsd: config.maxRunBudgetUsd,
    });
  }

  async run(): Promise<OrchestratorResult> {
    const { matterName, objective, maxDepth, maxConcurrency } = this.config;
    const phases = this.config.phases ?? getDefaultPhases();
    await recoverStaleRuntimeState(matterName, { preserveInterruptedTasks: Boolean(this.config.resume) });
    const resolvedConfig = await resolveConfig({ matterName });
    const masterModel = this.config.model ?? selectModelForTask({
      providerPolicy: resolvedConfig.providerPolicy,
      role: 'master_orchestrator',
      objective,
    });

    const masterRun = createRun({
      id: this.config.runId ?? process.env.ATTICUS_RUN_ID,
      matterName,
      model: masterModel,
      agentType: 'master_orchestrator',
      role: 'master',
      prompt: objective,
    });

    this.runtime.trackRun(masterRun.id);
    const removeShutdownCleanup = this.installShutdownCleanup(masterRun.id);

    try {
      await this.runtime.emitRunStarted(masterRun.id, objective);

      const gapAnalysis = await buildOrchestrationGapAnalysis({
        matterName,
        objective,
        phases,
        force: this.config.force,
      });
      await appendEvent({
        matterName,
        type: 'orchestration.gap_analysis.completed',
        runId: masterRun.id,
        source: 'orchestration',
        data: {
          force: gapAnalysis.force,
          existingDeliverables: gapAnalysis.inventory.length,
          skipped: gapAnalysis.skipped.length,
          stale: gapAnalysis.stale.length,
          missing: gapAnalysis.gaps.length,
          toProduce: gapAnalysis.toProduce.map((requirement) => requirement.label),
          noNewWorkNeeded: gapAnalysis.noNewWorkNeeded,
        },
      });

      if (gapAnalysis.noNewWorkNeeded) {
        const noWorkResult = buildNoNewWorkResult(matterName, phases, gapAnalysis);
        await this.runtime.emitRunCompleted(masterRun.id, noWorkResult.summary, {
          status: 'completed',
          completedPhases: phases.length,
          totalPhases: phases.length,
        });
        updateRun(matterName, masterRun.id, {
          status: 'completed',
          summary: noWorkResult.summary,
        });
        saveOrchestrationCheckpoint(matterName, {
          masterRunId: masterRun.id,
          status: 'completed',
          objective,
          completedPhaseIds: phases.map((phase) => phase.id),
          blockedPhaseIds: [],
          failedPhaseIds: [],
          phaseSummaries: noWorkResult.phaseResults.map((phaseResult) => ({
            phaseId: phaseResult.phaseId,
            phaseName: phaseResult.phaseName,
            status: 'completed',
            summary: phaseResult.summary,
          })),
        });
        return noWorkResult;
      }

      const resumePlan = this.config.resume
        ? buildProviderAgnosticResumePlan({ matterName, objective, phases })
        : undefined;
      if (resumePlan && resumePlan.phaseResults.length > 0) {
          saveOrchestrationCheckpoint(matterName, {
            masterRunId: masterRun.id,
            status: 'running',
            objective,
            currentPhaseIndex: resumePlan.startIndex,
            currentPhaseId: phases[resumePlan.startIndex]?.id,
            completedPhaseIds: resumePlan.phaseResults
              .filter(({ result }) => result.status === 'completed')
              .map(({ phase }) => phase.id),
            blockedPhaseIds: resumePlan.phaseResults
              .filter(({ result }) => result.status === 'blocked' || result.status === 'needs_followup')
              .map(({ phase }) => phase.id),
            failedPhaseIds: resumePlan.phaseResults
              .filter(({ result }) => result.status === 'failed')
              .map(({ phase }) => phase.id),
            phaseSummaries: resumePlan.phaseResults.map(({ phase, result }) => ({
              phaseId: phase.id,
              phaseName: phase.name,
              status: result.status === 'completed' ? 'completed' : result.status === 'failed' ? 'failed' : 'blocked',
              summary: result.summary,
            })),
            resumeFromRunId: resumePlan.resumeFromRunId,
          });
      }

      const phaseMaxDepth = remainingDepth(maxDepth, DEFAULT_MAX_DEPTH);
      const phaseMaxConcurrency = normalizePositiveInteger(maxConcurrency, DEFAULT_MAX_CONCURRENCY);
      const autonomy = resolvedConfig.autonomy ?? DEFAULTS.autonomy;
      const unifiedAutonomy: AutonomyPolicy = {
        ...autonomy,
        mode: 'auto_internal',
        autoApproveTools: true,
        autoApproveReadOnly: true,
        autoApproveFileWrites: true,
        autoApproveShell: true,
        autoAcceptCandidates: false,
        externalActionMode: 'prepare_only',
        allowExternalDispatch: false,
      };

      const phaseToolsConfig: PhaseToolsConfig = {
        matterName,
        masterRunId: masterRun.id,
        maxDepth: phaseMaxDepth,
        maxConcurrency: phaseMaxConcurrency,
        autonomy: unifiedAutonomy,
        providerPolicy: resolvedConfig.providerPolicy,
        runtime: this.runtime,
        resumePlan,
        force: Boolean(this.config.force),
        gapAnalysis,
      };

      const toolRegistry = new ToolRegistry({
        enforcePolicy: true,
        includeResearchTools: Boolean(resolvedConfig.autonomy?.autoApproveWeb),
      });
      toolRegistry.register(createRunPhaseTool(phaseToolsConfig));
      toolRegistry.register(createGetOrchestrationStateTool(phaseToolsConfig));

      const phaseIds = phases.map((p) => p.id).join(', ');
      const resumeLines = resumePlan && resumePlan.startIndex > 0
        ? [
            '',
            'Resume mode is enabled and provider-agnostic recovery found durable prior progress.',
            `Resume source: ${resumePlan.source}`,
            `Recovered phase IDs: ${resumePlan.diagnostics.recoveredPhaseIds.join(', ') || '(none)'}`,
            `Resume start index: ${resumePlan.startIndex}/${phases.length}`,
            `Next phase to run: ${phases[resumePlan.startIndex]?.id ?? '(all phases already processed)'}`,
            `Last recovered checkpoint: ${resumePlan.diagnostics.lastCheckpoint ?? '(none)'} ${resumePlan.diagnostics.lastCheckpointPhaseId ?? ''} ${resumePlan.diagnostics.lastCheckpointAt ?? ''}`.trim(),
            `Recovered after_phase completions: ${resumePlan.diagnostics.afterPhaseCount}`,
            `Recovered mini-orchestrator spawns: ${resumePlan.diagnostics.miniOrchestratorSpawnCount}`,
            'Do not replay recovered phases. If you call run_phase for a recovered phase, the tool will return the recovered result without rerunning workers.',
            'Continue from the next phase unless the recovered state itself proves corrupt.',
          ]
        : [];
      const userMessage = [
        `Master run: ${masterRun.id}`,
        `Matter: ${matterName}`,
        `Objective: ${objective ?? '(none)'}`,
        `Available phases (${phases.length}): ${phaseIds}`,
        `Max agent depth: ${phaseMaxDepth}`,
        `Max concurrency: ${phaseMaxConcurrency}`,
        '',
        'You are the Unified Master Orchestrator. Your job is to run legal matter phases and oversee the entire harness.',
        'Start by calling get_orchestration_state to understand the current matter state.',
        'Then use todo_write to plan which phases to run.',
        'For each phase that has missing or stale deliverables, call run_phase with the phase ID and a clear objective. Do not intentionally re-produce complete deliverables unless force mode is enabled.',
        'Between phases, inspect results, diagnose issues, and if the harness itself is broken, fix the harness code using your editing tools.',
        'When all necessary phases are complete (or you decide to stop), return a JSON synthesis of the entire run.',
        ...resumeLines,
        '',
        formatGapAnalysisForPrompt(gapAnalysis),
        '',
        'Smart gap-analysis rule: produce only the deliverables listed under missing or stale work. Existing complete deliverables are skipped and should be referenced, not regenerated.',
        '',
        'Phase descriptions:',
        ...phases.map((phase) => `  - ${phase.id}: ${phase.name} — ${phase.description}`),
      ].join('\n');

      const loop = new QueryLoop({
        model: masterModel,
        maxTokens: 8192,
        maxTurns: 60,
        systemPrompt: buildUnifiedMasterOrchestratorPrompt({
          matterName,
          model: masterModel,
          providerName: resolvedConfig.providerName,
          providerPolicy: resolvedConfig.providerPolicy,
          autonomy: unifiedAutonomy,
          toolPolicy: resolvedConfig.toolPolicy,
        }),
        tools: toolRegistry,
        matterName,
        providerName: resolvedConfig.providerName,
        runId: masterRun.id,
        role: 'master',
        quietMode: true,
        autonomy: unifiedAutonomy,
        mcpContext: {
          ATTICUS_HARNESS_MASTER_RUN_ID: masterRun.id,
          ATTICUS_HARNESS_MAX_DEPTH: String(phaseMaxDepth),
          ATTICUS_HARNESS_MAX_CONCURRENCY: String(phaseMaxConcurrency),
          ATTICUS_HARNESS_RESUME: this.config.resume ? '1' : '0',
        },
        retryNonJson: true,
      }, createLLMClient(resolvedConfig));

      const result = await loop.run(userMessage);

      const parsed = reconcileOrchestratorResult(
        parseOrchestratorResult(result.finalContent, matterName),
        phases,
        gapAnalysis,
      );
      const terminalStatus = parsed.status;

      await this.runtime.emitRunCompleted(masterRun.id, parsed.summary, {
        status: terminalStatus === 'failed' ? 'failed' : terminalStatus === 'needs_followup' ? 'needs_followup' : 'completed',
        completedPhases: parsed.phaseResults?.filter((p) => p.status === 'completed').length ?? 0,
        totalPhases: phases.length,
      });
      updateRun(matterName, masterRun.id, {
        status: parsed.status === 'failed' ? 'error' : parsed.status === 'needs_followup' ? 'blocked' : 'completed',
        summary: parsed.summary,
      });

      const phaseSummaries = parsed.phaseResults ?? [];
      saveOrchestrationCheckpoint(matterName, {
        masterRunId: masterRun.id,
        status: parsed.status === 'completed' ? 'completed' : 'blocked',
        objective,
        completedPhaseIds: phaseSummaries.filter((p) => p.status === 'completed').map((p) => p.phaseId),
        blockedPhaseIds: phaseSummaries.filter((p) => p.status === 'blocked' || p.status === 'failed').map((p) => p.phaseId),
        failedPhaseIds: phaseSummaries.filter((p) => p.status === 'failed').map((p) => p.phaseId),
        phaseSummaries: phaseSummaries.map((p) => ({
          phaseId: p.phaseId,
          phaseName: p.phaseName,
          status: p.status === 'completed' ? 'completed' : 'blocked',
          summary: p.summary,
        })),
      });

      return parsed;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      const failureResult: OrchestratorResult = {
        matterName,
        summary: `Unified orchestration failed: ${msg}`,
        status: 'failed',
        artifacts: [],
        findings: [],
        risks: [{ risk: msg, severity: 'high' }],
        phaseResults: [],
      };

      await this.runtime.emitRunCompleted(masterRun.id, failureResult.summary, {
        status: 'failed',
        completedPhases: 0,
        totalPhases: phases.length,
      });
      updateRun(matterName, masterRun.id, {
        status: 'error',
        summary: failureResult.summary,
        error: msg,
      });
      return failureResult;
    } finally {
      removeShutdownCleanup();
      this.runtime.untrackRun(masterRun.id);
    }
  }

  getActiveRunCount(): number {
    return this.runtime.getActiveCount();
  }

  abort(): void {
    this.runtime.abort('aborted');
  }

  private installShutdownCleanup(masterRunId: string): () => void {
    const { matterName } = this.config;
    const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGUSR1'];
    const handler = (signal: NodeJS.Signals): void => {
      const message = `Orchestration interrupted by ${signal}`;
      this.runtime.abort(message, masterRunId);
      updateRun(matterName, masterRunId, {
        status: 'error',
        summary: message,
        error: message,
      });
      process.exit(signal === 'SIGINT' ? 130 : 143);
    };
    for (const signal of signals) process.once(signal, handler);
    return () => {
      for (const signal of signals) process.removeListener(signal, handler);
    };
  }
}

function buildNoNewWorkResult(
  matterName: string,
  phases: PhaseDefinition[],
  gapAnalysis: GapAnalysisResult,
): OrchestratorResult {
  const artifactIds = [...new Set(gapAnalysis.skipped.map((match) => match.assetId))];
  return {
    matterName,
    summary: `${gapAnalysis.summary} Smart gap analysis skipped ${gapAnalysis.skipped.length} existing deliverable(s); no phases were rerun.`,
    status: 'completed',
    artifacts: artifactIds,
    findings: [{
      claim: 'Smart gap analysis found every required deliverable already present and fresh.',
      confidence: 1,
    }],
    risks: [],
    phaseResults: phases.map((phase) => {
      const phaseRequirementIds = new Set(
        gapAnalysis.requirements
          .filter((requirement) => requirement.phaseId === phase.id)
          .map((requirement) => requirement.id),
      );
      const phaseMatches = gapAnalysis.skipped.filter((match) => phaseRequirementIds.has(match.requirementId));
      return {
        phaseId: phase.id,
        phaseName: phase.name,
        status: 'completed' as const,
        summary: `Skipped by smart gap analysis: ${phaseMatches.length} existing deliverable(s) satisfy this phase.`,
        findings: phaseMatches.map((match) => ({
          claim: `${match.requirementLabel} already exists as ${match.assetSource}:${match.assetId}.`,
          support: match.assetTitle,
          confidence: 'high' as const,
          kind: 'procedural_fact' as const,
        })),
        risks: [],
        artifactIds: [...new Set(phaseMatches.map((match) => match.assetId))],
        workerResults: [],
      };
    }),
  };
}

function parseOrchestratorResult(content: string, matterName: string): OrchestratorResult {
  const parsed = tryParseJson(content);
  if (!parsed) {
    return {
      matterName,
      summary: `Master orchestrator returned non-JSON output: ${content.slice(0, 500)}`,
      status: 'needs_followup',
      artifacts: [],
      findings: [],
      risks: [{
        risk: 'Master orchestrator did not return valid JSON. The agent may need more turns or a different model.',
        severity: 'high',
      }],
      phaseResults: [],
    };
  }

  return {
    matterName,
    summary: typeof parsed.summary === 'string' ? parsed.summary : 'Orchestration completed.',
    status: coerceStatus(parsed.status),
    artifacts: stringArray(parsed.artifacts),
    findings: (Array.isArray(parsed.findings) ? parsed.findings : []).map((f: unknown) => ({
      claim: isRecord(f) && typeof f.claim === 'string' ? f.claim : '',
      confidence: isRecord(f) && (f.confidence === 1 || f.confidence === 0.5) ? f.confidence : 0.5,
    })),
    risks: (Array.isArray(parsed.risks) ? parsed.risks : []).map((r: unknown) => ({
      risk: isRecord(r) && typeof r.risk === 'string' ? r.risk : '',
      severity: isRecord(r) && typeof r.severity === 'string' ? r.severity : 'medium',
    })),
    phaseResults: (Array.isArray(parsed.phaseResults) ? parsed.phaseResults : []).map((p: unknown) => ({
      phaseId: isRecord(p) && typeof p.phaseId === 'string' ? p.phaseId : '',
      phaseName: isRecord(p) && typeof p.phaseName === 'string' ? p.phaseName : '',
      status: isRecord(p) ? coercePhaseStatus((p as Record<string, unknown>).status) : 'blocked',
      summary: isRecord(p) && typeof p.summary === 'string' ? p.summary : '',
      findings: [],
      risks: [],
      artifactIds: [],
      workerResults: [],
    })),
    harnessPatchesApplied: stringArray(parsed.harnessPatchesApplied),
  };
}

function reconcileOrchestratorResult(
  parsed: OrchestratorResult,
  phases: PhaseDefinition[],
  gapAnalysis: GapAnalysisResult,
): OrchestratorResult {
  const byPhase = new Map(parsed.phaseResults.map((phase) => [phase.phaseId, phase]));
  const phaseResults = phases.map((phase) => {
    const existing = byPhase.get(phase.id);
    if (existing) return existing;
    if (phaseSatisfiedByGapAnalysis(phase.id, gapAnalysis)) {
      return {
        phaseId: phase.id,
        phaseName: phase.name,
        status: 'completed' as const,
        summary: 'Satisfied by existing fresh deliverables in smart gap analysis.',
        findings: [],
        risks: [],
        artifactIds: gapAnalysis.skipped
          .filter((match) => gapAnalysis.requirements.find((requirement) => requirement.id === match.requirementId)?.phaseId === phase.id)
          .map((match) => match.assetId),
        workerResults: [],
      };
    }
    return {
      phaseId: phase.id,
      phaseName: phase.name,
      status: 'blocked' as const,
      summary: 'No phase result was returned by the master orchestrator.',
      findings: [],
      risks: [],
      artifactIds: [],
      workerResults: [],
    };
  });

  const blocked = phaseResults.filter((phase) => phase.status !== 'completed');
  const missingDocumentArtifacts = phaseResults.some((phase) =>
    (phase.phaseId === 'document_production' || phase.phaseId === 'bundle_and_war_room_assembly') &&
    phase.status === 'completed' &&
    phase.artifactIds.length === 0 &&
    !phaseSatisfiedByGapAnalysis(phase.phaseId, gapAnalysis)
  );
  if (blocked.length === 0 && !missingDocumentArtifacts) {
    return { ...parsed, phaseResults };
  }

  return {
    ...parsed,
    status: parsed.status === 'failed' ? 'failed' : 'needs_followup',
    summary: [
      parsed.summary,
      blocked.length > 0 ? `Reconciler found ${blocked.length} missing or blocked phase result(s).` : undefined,
      missingDocumentArtifacts ? 'Reconciler found a production phase completed without reducer-visible artifactIds.' : undefined,
    ].filter(Boolean).join(' '),
    phaseResults: phaseResults.map((phase) => {
      if (
        (phase.phaseId === 'document_production' || phase.phaseId === 'bundle_and_war_room_assembly') &&
        phase.status === 'completed' &&
        phase.artifactIds.length === 0 &&
        !phaseSatisfiedByGapAnalysis(phase.phaseId, gapAnalysis)
      ) {
        return {
          ...phase,
          status: 'blocked' as const,
          summary: `${phase.summary} Missing reducer-visible artifactIds; rerun this phase and require submit_candidate output.`,
        };
      }
      return phase;
    }),
  };
}

function phaseSatisfiedByGapAnalysis(phaseId: string, gapAnalysis: GapAnalysisResult): boolean {
  if (gapAnalysis.force) return false;
  const requirements = gapAnalysis.requirements.filter((requirement) => requirement.phaseId === phaseId);
  if (requirements.length === 0) return false;
  const satisfied = new Set(gapAnalysis.skipped.map((match) => match.requirementId));
  return requirements.every((requirement) => satisfied.has(requirement.id));
}

function tryParseJson(content: string): Record<string, unknown> | undefined {
  try {
    const direct = JSON.parse(content.trim());
    if (isRecord(direct)) return direct;
  } catch {}
  const fenced = content.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (!fenced) return undefined;
  try {
    const parsed = JSON.parse(fenced[1].trim());
    return isRecord(parsed) ? parsed : undefined;
  } catch {
    return undefined;
  }
}

function coerceStatus(value: unknown): OrchestratorResult['status'] {
  return value === 'completed' || value === 'failed' || value === 'needs_followup'
    ? value
    : 'needs_followup';
}

function coercePhaseStatus(value: unknown): 'completed' | 'failed' | 'blocked' {
  if (value === 'completed' || value === 'failed' || value === 'blocked') return value;
  return 'blocked';
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
