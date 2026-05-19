import { QueryLoop } from '../agent/query-loop.js';
import { createLLMClient } from '../llm/client.js';
import { createRun, updateRun } from '../state/runs.js';
import { listTasks } from '../state/tasks.js';
import { appendEvent } from '../state/events.js';
import { recoverStaleRuntimeState } from '../state/runtime-recovery.js';
import { OrchestrationRuntime } from './runtime.js';
import { loadOrchestrationCheckpoint, saveOrchestrationCheckpoint } from './checkpoint.js';
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
import { runOrchestrationHealthCheck, type OrchestrationHealthCheckResult } from './self-diagnosis.js';
import type { AgentStructuredResult, OrchestratorConfig, OrchestratorResult } from './types.js';
import type { ToolUseContext } from '../types/tool.js';

export { OrchestratorConfig, OrchestratorResult } from './types.js';

const ACTIVE_HEALTH_MONITOR_INTERVAL_MS = 5_000;

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
    const startingCheckpoint = loadOrchestrationCheckpoint(matterName);
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
    let stopActiveHealthMonitor: (() => void) | undefined;

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
      if (shouldUseDeterministicPhaseDriver({
        checkpoint: startingCheckpoint,
        resume: Boolean(this.config.resume),
        force: Boolean(this.config.force),
      })) {
        const runPhaseTool = createRunPhaseTool(phaseToolsConfig);
        const deterministicResult = await runDeterministicPhaseDriver({
          matterName,
          objective,
          phases,
          masterRunId: masterRun.id,
          tool: runPhaseTool,
          gapAnalysis,
          resumePlan,
        });
        await this.runtime.emitRunCompleted(masterRun.id, deterministicResult.summary, {
          status: deterministicResult.status,
          completedPhases: deterministicResult.phaseResults.filter((phase) => phase.status === 'completed').length,
          totalPhases: phases.length,
        });
        updateRun(matterName, masterRun.id, {
          status: deterministicResult.status === 'completed' ? 'completed' : 'blocked',
          summary: deterministicResult.summary,
        });
        return deterministicResult;
      }
      const runPhaseTool = createRunPhaseTool(phaseToolsConfig);
      toolRegistry.register(runPhaseTool);
      toolRegistry.register(createGetOrchestrationStateTool(phaseToolsConfig));
      stopActiveHealthMonitor = this.startActiveHealthMonitor(masterRun.id, phases);

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
        `Max agent depth: ${phaseMaxDepth}`,
        `Max concurrency: ${phaseMaxConcurrency}`,
        '',
        'You are the Lead Counsel Agent for this matter.',
        'Your job is to orchestrate the Legal Teams to achieve the best outcome for the client. The matter is not strictly a lawsuit; you should seek to advise, negotiate, and avoid risks.',
        '',
        'Instead of linear phases, you have access to a dynamic task queue. Use the `delegate_task` tool to assign work to specialized teams:',
        '  - IntakeTeam: basic info parsing',
        '  - EvidenceTeam: fact extraction, chronology building',
        '  - AnalysisTeam: strategy, research, options',
        '  - CommunicationsTeam: letters, emails, negotiations',
        '  - LitigationTeam: court documents (if needed)',
        '  - ReviewTeam: junior/senior counsel peer review (required before final output)',
        '',
        'When you delegate tasks, wait for their results. You can also read the chronology to see what has been found.',
        'When all necessary tasks are complete, or the objective is blocked, you MUST call the `submit_matter_outcome` tool to terminate your execution. Do not return raw text as your final answer.',
        '',
        formatGapAnalysisForPrompt(gapAnalysis),
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
        shouldStop: () => this.runtime.isAborted()
          ? (this.runtime.getStopReason() ?? 'orchestration runtime aborted by active health monitor or operator control')
          : undefined,
        requireTerminationTool: 'submit_matter_outcome',
      }, createLLMClient(resolvedConfig));

      const result = await loop.run(userMessage);
      stopActiveHealthMonitor?.();
      stopActiveHealthMonitor = undefined;

      if (result.status === 'aborted') {
        const pausedForRepair = this.runtime.isPaused();
        const finalHealth = await runOrchestrationHealthCheck(matterName, {
          phases,
          masterRunId: masterRun.id,
          emitEvent: true,
          intervene: true,
          reconcileCheckpoint: true,
        });
        const abortedResult = reconcileOrchestratorHealth({
          matterName,
          summary: pausedForRepair
            ? `Unified orchestration paused for repair: ${result.error ?? 'runtime paused'}`
            : `Unified orchestration stopped by active monitor: ${result.error ?? 'runtime aborted'}`,
          status: 'needs_followup',
          artifacts: [],
          findings: [],
          risks: [],
          phaseResults: [],
        }, finalHealth);
        await this.runtime.emitRunCompleted(masterRun.id, abortedResult.summary, {
          status: 'needs_followup',
          completedPhases: 0,
          totalPhases: phases.length,
        });
        updateRun(matterName, masterRun.id, {
          status: 'blocked',
          summary: abortedResult.summary,
          error: result.error,
        });
        saveOrchestrationCheckpoint(matterName, {
          masterRunId: masterRun.id,
          status: pausedForRepair ? 'paused' : 'blocked',
          objective,
          currentPhaseIndex: nextPhaseIndexFromTasks(listTasks(matterName), phases),
          currentPhaseId: phases[nextPhaseIndexFromTasks(listTasks(matterName), phases)]?.id,
          completedPhaseIds: listTasks(matterName)
            .filter((task) => task.kind === 'mini_orchestrator' && task.status === 'completed')
            .map((task) => task.type),
          blockedPhaseIds: listTasks(matterName)
            .filter((task) => task.kind === 'mini_orchestrator' && task.status === 'blocked')
            .map((task) => task.type),
          failedPhaseIds: listTasks(matterName)
            .filter((task) => task.kind === 'mini_orchestrator' && task.status === 'failed')
            .map((task) => task.type),
          phaseSummaries: recoverPhaseResultsFromTasks(matterName, phases).map((phaseResult) => ({
            phaseId: phaseResult.phaseId,
            phaseName: phaseResult.phaseName,
            status: phaseResult.status === 'completed' ? 'completed' : phaseResult.status === 'failed' ? 'failed' : 'blocked',
            summary: phaseResult.summary,
          })),
          supervisorStopReason: result.error,
          resumeFromRunId: masterRun.id,
        });
        return abortedResult;
      }

      let parsedOutcome: OrchestratorResult;
      try {
        const finalArgs = JSON.parse(result.finalContent);
        parsedOutcome = {
          matterName,
          summary: finalArgs.summary || 'No summary provided.',
          status: finalArgs.status as 'completed' | 'failed' | 'needs_followup',
          artifacts: finalArgs.artifacts || [],
          risks: finalArgs.risks || [],
          findings: finalArgs.findings || [],
          phaseResults: []
        };
      } catch (err) {
        parsedOutcome = {
          matterName,
          summary: `Failed to parse final outcome: ${result.finalContent}`,
          status: 'failed',
          artifacts: [],
          risks: [],
          findings: [],
          phaseResults: []
        };
      }
      
      const initialParsed = reconcileOrchestratorResult(
        parsedOutcome,
        matterName,
        phases,
        gapAnalysis,
      );
      const finalHealth = await runOrchestrationHealthCheck(matterName, {
        phases,
        masterRunId: masterRun.id,
        emitEvent: true,
        intervene: true,
        reconcileCheckpoint: true,
      });
      const parsed = reconcileOrchestratorHealth(initialParsed, finalHealth);
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
      // The active monitor is normally stopped after the master loop returns. If the
      // loop throws before then, the runtime cleanup below still must not leave a
      // background interval inspecting old state.
      stopActiveHealthMonitor?.();
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
      const existingCheckpoint = loadOrchestrationCheckpoint(matterName);
      this.runtime.pauseForRepair(message, masterRunId);
      saveOrchestrationCheckpoint(matterName, {
        ...existingCheckpoint,
        masterRunId,
        status: 'paused',
        objective: this.config.objective,
        supervisorStopReason: message,
        resumeFromRunId: masterRunId,
      });
      updateRun(matterName, masterRunId, {
        status: 'blocked',
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

  private startActiveHealthMonitor(masterRunId: string, phases: PhaseDefinition[]): () => void {
    const { matterName } = this.config;
    let stopped = false;
    let running = false;

    const tick = async (): Promise<void> => {
      if (stopped || running || this.runtime.isAborted()) return;
      running = true;
      try {
        const health = await runOrchestrationHealthCheck(matterName, {
          phases,
          masterRunId,
          emitEvent: true,
          intervene: true,
          orphanAfterMs: 30_000,
        });
        if (health.shouldBlockAdvance) {
          const summary = summarizeHealthForAbort(health);
          this.runtime.pauseForRepair(`active_health_monitor: ${summary}`, masterRunId);
          saveOrchestrationCheckpoint(matterName, {
            masterRunId,
            status: 'paused',
            objective: this.config.objective,
            currentPhaseIndex: nextPhaseIndexFromTasks(listTasks(matterName), phases),
            currentPhaseId: phases[nextPhaseIndexFromTasks(listTasks(matterName), phases)]?.id,
            completedPhaseIds: listTasks(matterName)
              .filter((task) => task.kind === 'mini_orchestrator' && task.status === 'completed')
              .map((task) => task.type),
            blockedPhaseIds: listTasks(matterName)
              .filter((task) => task.kind === 'mini_orchestrator' && task.status === 'blocked')
              .map((task) => task.type),
            failedPhaseIds: listTasks(matterName)
              .filter((task) => task.kind === 'mini_orchestrator' && task.status === 'failed')
              .map((task) => task.type),
            phaseSummaries: recoverPhaseResultsFromTasks(matterName, phases).map((phaseResult) => ({
              phaseId: phaseResult.phaseId,
              phaseName: phaseResult.phaseName,
              status: phaseResult.status === 'completed' ? 'completed' : phaseResult.status === 'failed' ? 'failed' : 'blocked',
              summary: phaseResult.summary,
            })),
            supervisorStopReason: summary,
            resumeFromRunId: masterRunId,
          });
          updateRun(matterName, masterRunId, {
            status: 'blocked',
            summary: `Active health monitor paused orchestration for repair: ${summary}`,
            error: summary,
          });
        }
      } catch (error) {
        await appendEvent({
          matterName,
          type: 'orchestration.health_check',
          runId: masterRunId,
          source: 'orchestration',
          data: {
            status: 'warning',
            shouldBlockAdvance: false,
            monitorError: error instanceof Error ? error.message : String(error),
          },
        }).catch(() => undefined);
      } finally {
        running = false;
      }
    };

    const timer = setInterval(() => {
      void tick();
    }, ACTIVE_HEALTH_MONITOR_INTERVAL_MS);
    timer.unref?.();
    void tick();

    return () => {
      stopped = true;
      clearInterval(timer);
    };
  }
}

function summarizeHealthForAbort(health: OrchestrationHealthCheckResult): string {
  return health.issues
    .filter((issue) => issue.severity === 'critical' || issue.type === 'policy_block' || issue.type === 'orphaned_task')
    .slice(0, 3)
    .map((issue) => `${issue.type}: ${issue.summary}`)
    .join(' | ') || `${health.issues.length} health issue(s)`;
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
  matterName: string,
  phases: PhaseDefinition[],
  gapAnalysis: GapAnalysisResult,
): OrchestratorResult {
  const recoveredPhaseResults = parsed.phaseResults.length > 0
    ? parsed.phaseResults
    : recoverPhaseResultsFromTasks(matterName, phases);
  const byPhase = new Map(recoveredPhaseResults.map((phase) => [phase.phaseId, phase]));
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

  // Under the Teams architecture, if the Lead Counsel successfully completes the matter,
  // we do not downgrade the run status to 'needs_followup' just because legacy phase tasks are absent.
  const finalStatus = parsed.status === 'completed' ? 'completed' : (parsed.status === 'failed' ? 'failed' : 'needs_followup');

  return {
    ...parsed,
    status: finalStatus,
    summary: [
      parsed.summary,
      blocked.length > 0 && finalStatus !== 'completed' ? `Reconciler found ${blocked.length} missing or blocked phase result(s).` : undefined,
      missingDocumentArtifacts && finalStatus !== 'completed' ? 'Reconciler found a production phase completed without reducer-visible artifactIds.' : undefined,
    ].filter(Boolean).join(' '),
    phaseResults: phaseResults.map((phase) => {
      if (
        finalStatus !== 'completed' &&
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

function recoverPhaseResultsFromTasks(
  matterName: string,
  phases: PhaseDefinition[],
): OrchestratorResult['phaseResults'] {
  const phaseIds = new Set(phases.map((phase) => phase.id));
  const latestByPhase = new Map<string, ReturnType<typeof listTasks>[number]>();
  for (const task of listTasks(matterName)) {
    if (task.kind !== 'mini_orchestrator' || !phaseIds.has(task.type)) continue;
    const existing = latestByPhase.get(task.type);
    if (!existing || task.updated.localeCompare(existing.updated) > 0) {
      latestByPhase.set(task.type, task);
    }
  }

  return phases.flatMap((phase) => {
    const task = latestByPhase.get(phase.id);
    if (!task) return [];
    const resultStatus = stringValue(task.data.resultStatus);
    const status = task.status === 'completed' && resultStatus === 'completed'
      ? 'completed'
      : task.status === 'failed' || resultStatus === 'failed'
        ? 'failed'
        : 'blocked';
    return [{
      phaseId: phase.id,
      phaseName: phase.name,
      status,
      summary: stringValue(task.data.summary) || task.blockedReason || `Recovered ${phase.name} from task state (${task.status}).`,
      findings: [],
      risks: [],
      artifactIds: stringArray(task.data.artifactIds),
      workerResults: [],
    }];
  });
}

function nextPhaseIndexFromTasks(tasks: ReturnType<typeof listTasks>, phases: PhaseDefinition[]): number {
  const completedPhaseIds = new Set(
    tasks
      .filter((task) => task.kind === 'mini_orchestrator' && task.status === 'completed')
      .map((task) => task.type),
  );
  const index = phases.findIndex((phase) => !completedPhaseIds.has(phase.id));
  return index === -1 ? phases.length : index;
}

function shouldUseDeterministicPhaseDriver(input: {
  checkpoint: ReturnType<typeof loadOrchestrationCheckpoint>;
  resume: boolean;
  force: boolean;
}): boolean {
  // Always return false to ensure we run the new Lead Counsel loop and don't fall back
  // to the obsolete linear phase driver.
  return false;
}

async function runDeterministicPhaseDriver(input: {
  matterName: string;
  objective?: string;
  phases: PhaseDefinition[];
  masterRunId: string;
  tool: ReturnType<typeof createRunPhaseTool>;
  gapAnalysis: GapAnalysisResult;
  resumePlan?: ReturnType<typeof buildProviderAgnosticResumePlan>;
}): Promise<OrchestratorResult> {
  const requiredPhaseIds = new Set(input.gapAnalysis.toProduce.map((requirement) => requirement.phaseId).filter((id): id is string => Boolean(id)));
  const recoveredResultByPhase = new Map(input.resumePlan?.phaseResults.map(({ phase, result }) => [phase.id, result]) ?? []);
  const phasesToRun = input.phases.filter((phase, index) =>
    (requiredPhaseIds.size === 0 || requiredPhaseIds.has(phase.id)) &&
    (
      input.resumePlan
        ? !isRecoveredPhaseCompleteEnough(phase.id, recoveredResultByPhase.get(phase.id), input.gapAnalysis)
        : (input.gapAnalysis.force || index >= 0)
    )
  );
  const phaseResults: OrchestratorResult['phaseResults'] = [
    ...(input.resumePlan?.phaseResults
      .filter(({ phase, result }) => isRecoveredPhaseCompleteEnough(phase.id, result, input.gapAnalysis))
      .map(({ phase, result }) => ({
        phaseId: phase.id,
        phaseName: phase.name,
        status: result.status === 'completed' ? 'completed' as const : result.status === 'failed' ? 'failed' as const : 'blocked' as const,
        summary: result.summary,
        findings: result.findings.map((finding) => ({
          claim: finding.claim,
          support: finding.support,
          confidence: finding.confidence,
          kind: finding.kind,
        })),
        risks: result.risks,
        artifactIds: result.artifactIds,
        workerResults: [],
      })) ?? []),
  ];

  for (const phase of phasesToRun) {
    saveOrchestrationCheckpoint(input.matterName, {
      masterRunId: input.masterRunId,
      status: 'running',
      objective: input.objective,
      currentPhaseIndex: input.phases.findIndex((candidate) => candidate.id === phase.id),
      currentPhaseId: phase.id,
      completedPhaseIds: phaseResults.filter((result) => result.status === 'completed').map((result) => result.phaseId),
      blockedPhaseIds: phaseResults.filter((result) => result.status === 'blocked').map((result) => result.phaseId),
      failedPhaseIds: phaseResults.filter((result) => result.status === 'failed').map((result) => result.phaseId),
      phaseSummaries: phaseResults.map((result) => ({
        phaseId: result.phaseId,
        phaseName: result.phaseName,
        status: result.status === 'completed' ? 'completed' : result.status === 'failed' ? 'failed' : 'blocked',
        summary: result.summary,
      })),
      resumeFromRunId: input.resumePlan?.resumeFromRunId,
    });

    const result = await input.tool.call({
      phaseId: phase.id,
      objective: `${input.objective ?? 'Run phase'}\n\nDeterministic phase driver: execute ${phase.name} because gap analysis still requires this phase. Preserve existing completed phase outputs and do not replay unrelated phases.`,
    }, makeDeterministicToolContext(input.matterName, input.masterRunId));
    const data = result.data;
    const phaseResult = {
      phaseId: phase.id,
      phaseName: phase.name,
      status: result.success && data?.status === 'completed' ? 'completed' as const : result.success && data?.status === 'failed' ? 'failed' as const : 'blocked' as const,
      summary: result.success ? (data?.summary ?? result.output ?? `Phase ${phase.name} completed.`) : (result.error ?? `Phase ${phase.name} failed.`),
      findings: [],
      risks: result.success ? [] : [{
        risk: result.error ?? `Phase ${phase.name} failed.`,
        severity: 'high' as const,
        mitigation: 'Pause for repair, keep the checkpoint, then resume this phase after fixing the blocker.',
      }],
      artifactIds: data?.artifactIds ?? [],
      workerResults: [],
    };
    phaseResults.push(phaseResult);
    if (phaseResult.status !== 'completed') {
      saveOrchestrationCheckpoint(input.matterName, {
        masterRunId: input.masterRunId,
        status: 'paused',
        objective: input.objective,
        currentPhaseIndex: input.phases.findIndex((candidate) => candidate.id === phase.id),
        currentPhaseId: phase.id,
        completedPhaseIds: phaseResults.filter((item) => item.status === 'completed').map((item) => item.phaseId),
        blockedPhaseIds: phaseResults.filter((item) => item.status === 'blocked').map((item) => item.phaseId),
        failedPhaseIds: phaseResults.filter((item) => item.status === 'failed').map((item) => item.phaseId),
        phaseSummaries: phaseResults.map((item) => ({
          phaseId: item.phaseId,
          phaseName: item.phaseName,
          status: item.status === 'completed' ? 'completed' : item.status === 'failed' ? 'failed' : 'blocked',
          summary: item.summary,
        })),
        supervisorStopReason: phaseResult.summary,
        resumeFromRunId: input.masterRunId,
      });
      return {
        matterName: input.matterName,
        summary: `Deterministic orchestration paused at ${phase.name}: ${phaseResult.summary}`,
        status: 'needs_followup',
        artifacts: phaseResults.flatMap((item) => item.artifactIds),
        findings: [],
        risks: phaseResult.risks,
        phaseResults,
      };
    }
  }

  saveOrchestrationCheckpoint(input.matterName, {
    masterRunId: input.masterRunId,
    status: 'completed',
    objective: input.objective,
    completedPhaseIds: phaseResults.filter((item) => item.status === 'completed').map((item) => item.phaseId),
    blockedPhaseIds: [],
    failedPhaseIds: [],
    phaseSummaries: phaseResults.map((item) => ({
      phaseId: item.phaseId,
      phaseName: item.phaseName,
      status: item.status === 'completed' ? 'completed' : item.status === 'failed' ? 'failed' : 'blocked',
      summary: item.summary,
    })),
    resumeFromRunId: input.masterRunId,
  });
  return {
    matterName: input.matterName,
    summary: `Deterministic orchestration completed ${phasesToRun.length} phase(s) from paused checkpoint.`,
    status: 'completed',
    artifacts: phaseResults.flatMap((item) => item.artifactIds),
    findings: [],
    risks: [],
    phaseResults,
  };
}

function isRecoveredPhaseCompleteEnough(
  phaseId: string,
  result: AgentStructuredResult | undefined,
  gapAnalysis: GapAnalysisResult,
): boolean {
  if (result?.status !== 'completed') return false;
  if (gapAnalysis.toProduce.some((requirement) => requirement.phaseId === phaseId)) return false;
  if ((phaseId === 'document_production' || phaseId === 'bundle_and_war_room_assembly') && result.artifactIds.length === 0) return false;
  return true;
}

function makeDeterministicToolContext(matterName: string, runId: string): ToolUseContext {
  return {
    matterName,
    runId,
    getEvidencePath: (id: string) => `matters/${matterName}/_evidence/${id}`,
    getExtractionPath: (id: string) => `matters/${matterName}/_extractions/${id}.txt`,
    getConfig: () => ({ matterName, runId, deterministicPhaseDriver: true }),
    log: () => {},
  };
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function reconcileOrchestratorHealth(
  parsed: OrchestratorResult,
  health: OrchestrationHealthCheckResult,
): OrchestratorResult {
  if (health.status === 'healthy' && health.issues.length === 0) return parsed;
  const risks = [
    ...parsed.risks,
    ...health.issues
      .filter((issue) => issue.severity === 'critical' || issue.severity === 'high')
      .map((issue) => ({
        risk: `Orchestrator self-diagnosis: ${issue.summary}`,
        severity: issue.severity,
        mitigation: issue.remediation,
      })),
  ];
  return {
    ...parsed,
    status: parsed.status === 'failed' ? 'failed' : health.shouldBlockAdvance ? 'needs_followup' : parsed.status,
    summary: [
      parsed.summary,
      health.issues.length > 0
        ? `Self-diagnosis found ${health.issues.length} issue(s): ${health.issues.slice(0, 3).map((issue) => issue.type).join(', ')}.`
        : undefined,
      health.interventions.length > 0
        ? `Interventions: ${health.interventions.slice(0, 3).join(' ')}`
        : undefined,
    ].filter(Boolean).join(' '),
    risks,
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
