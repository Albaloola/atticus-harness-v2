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
import { getDefaultPhases } from '../legal/workflow.js';
import { DEFAULTS, type AutonomyPolicy, type ResolvedHarnessConfig } from '../config/schema.js';
import { buildUnifiedMasterOrchestratorPrompt } from './prompts.js';
import { ToolRegistry } from '../tools/index.js';
import { createRunPhaseTool, createGetOrchestrationStateTool, type PhaseToolsConfig } from './orchestration-tools.js';
import { buildProviderAgnosticResumePlan } from './resume-recovery.js';
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

      const phaseToolsConfig: PhaseToolsConfig = {
        matterName,
        masterRunId: masterRun.id,
        maxDepth: phaseMaxDepth,
        maxConcurrency: phaseMaxConcurrency,
        autonomy: resolvedConfig.autonomy,
        providerPolicy: resolvedConfig.providerPolicy,
        runtime: this.runtime,
        resumePlan,
      };

      const toolRegistry = new ToolRegistry({
        enforcePolicy: true,
        includeResearchTools: Boolean(resolvedConfig.autonomy?.autoApproveWeb),
      });
      toolRegistry.register(createRunPhaseTool(phaseToolsConfig));
      toolRegistry.register(createGetOrchestrationStateTool(phaseToolsConfig));

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
        'For each phase, call run_phase with the phase ID and a clear objective.',
        'Between phases, inspect results, diagnose issues, and if the harness itself is broken, fix the harness code using your editing tools.',
        'When all necessary phases are complete (or you decide to stop), return a JSON synthesis of the entire run.',
        ...resumeLines,
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

      const parsed = parseOrchestratorResult(result.finalContent, matterName);
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
