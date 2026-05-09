/**
 * @deprecated MasterSupervisor has been merged into UnifiedMasterOrchestrator (unified-master-orchestrator.ts).
 * The unified orchestrator wraps a QueryLoop with the merged prompt, orchestration tools, and provider-agnostic JSON retry.
 * This class is kept for backward compatibility with existing code that still imports it.
 * New code should use UnifiedMasterOrchestrator instead.
 */
import { QueryLoop } from '../agent/query-loop.js';
import { DEFAULTS, type AutonomyPolicy, type ResolvedHarnessConfig } from '../config/schema.js';
import { createLLMClient } from '../llm/client.js';
import { buildMasterSupervisorPrompt } from './prompts.js';
import { ToolRegistry } from '../tools/index.js';
import { createRun, updateRun } from '../state/runs.js';
import { appendEvent } from '../state/events.js';
import { selectModelForTask } from '../config/model-routing.js';
import type { AgentStructuredResult } from './types.js';
import type { PhaseDefinition } from '../legal/workflow.js';

export interface MasterSupervisorInput {
  matterName: string;
  masterRunId: string;
  objective?: string;
  resolvedConfig: ResolvedHarnessConfig;
  model?: string;
  quietMode?: boolean;
  verbose?: boolean;
}

export interface MasterSupervisorCheckpoint {
  checkpoint: 'preflight' | 'during_phase' | 'after_phase' | 'blocked_phase' | 'final';
  phase?: PhaseDefinition;
  phaseResult?: AgentStructuredResult;
  completedPhaseCount?: number;
  failedPhases?: string[];
  blockedPhases?: string[];
  stoppedReason?: string;
}

export interface MasterSupervisorResult {
  status: 'completed' | 'needs_followup' | 'failed';
  summary: string;
  actionsTaken: string[];
  issues: Array<{
    issue: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
    evidence: string;
    mitigation: string;
  }>;
  recommendedRunAction: 'continue' | 'retry_phase' | 'pause' | 'restart' | 'abort';
  patched: boolean;
  requiresRestart: boolean;
}

export class MasterSupervisor {
  private readonly input: MasterSupervisorInput;

  constructor(input: MasterSupervisorInput) {
    this.input = input;
  }

  async inspect(checkpoint: MasterSupervisorCheckpoint): Promise<MasterSupervisorResult> {
    const model = this.input.model ?? selectModelForTask({
      providerPolicy: this.input.resolvedConfig.providerPolicy,
      role: 'master_orchestrator',
      objective: this.input.objective,
    });
    const supervisorRun = createRun({
      matterName: this.input.matterName,
      model,
      parentRunId: this.input.masterRunId,
      agentType: 'master_supervisor',
      role: 'master_supervisor',
      prompt: checkpoint.checkpoint,
    });

    await appendEvent({
      matterName: this.input.matterName,
      type: 'agent.run.started',
      runId: supervisorRun.id,
      source: 'orchestration',
      data: {
        role: 'master_supervisor',
        checkpoint: checkpoint.checkpoint,
        phaseId: checkpoint.phase?.id,
      },
    }).catch(() => {});

    const supervisorAutonomy = masterSupervisorAutonomy(this.input.resolvedConfig.autonomy ?? DEFAULTS.autonomy);
    const toolRegistry = new ToolRegistry({
      enforcePolicy: true,
      includeResearchTools: Boolean(supervisorAutonomy.autoApproveWeb),
    });
    const clientConfig = supervisorClientConfig(this.input.resolvedConfig, {
      matterName: this.input.matterName,
      model,
      autonomy: supervisorAutonomy,
    });

    try {
      const loop = new QueryLoop({
        model,
        maxTokens: 8192,
        reasoningEffort: 'high',
        maxTurns: 12,
        systemPrompt: buildMasterSupervisorPrompt({
          matterName: this.input.matterName,
          model,
          providerName: clientConfig.providerName,
          providerPolicy: this.input.resolvedConfig.providerPolicy,
          autonomy: supervisorAutonomy,
          toolPolicy: this.input.resolvedConfig.toolPolicy,
        }),
        tools: toolRegistry,
        matterName: this.input.matterName,
        providerName: clientConfig.providerName,
        runId: supervisorRun.id,
        role: 'master_supervisor',
        quietMode: this.input.quietMode ?? true,
        verbose: this.input.verbose,
        autonomy: supervisorAutonomy,
      }, createLLMClient(clientConfig));

      const result = await loop.run(this.buildSupervisorMessage(checkpoint));
      const parsed = parseMasterSupervisorResult(result.finalContent);
      updateRun(this.input.matterName, supervisorRun.id, {
        status: parsed.status === 'failed' ? 'error' : parsed.status === 'needs_followup' ? 'blocked' : 'completed',
        turns: result.turns.length,
        summary: parsed.summary,
      });
      await appendEvent({
        matterName: this.input.matterName,
        type: parsed.status === 'failed' ? 'agent.run.error' : parsed.status === 'needs_followup' ? 'agent.run.blocked' : 'agent.run.completed',
        runId: supervisorRun.id,
        source: 'orchestration',
        data: {
          role: 'master_supervisor',
          checkpoint: checkpoint.checkpoint,
          phaseId: checkpoint.phase?.id,
          status: parsed.status,
          recommendedRunAction: parsed.recommendedRunAction,
          patched: parsed.patched,
          requiresRestart: parsed.requiresRestart,
          issueCount: parsed.issues.length,
        },
      }).catch(() => {});
      return parsed;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const failed = makeSupervisorFailure(message);
      updateRun(this.input.matterName, supervisorRun.id, {
        status: 'error',
        summary: failed.summary,
        error: message,
      });
      await appendEvent({
        matterName: this.input.matterName,
        type: 'agent.run.error',
        runId: supervisorRun.id,
        source: 'orchestration',
        data: {
          role: 'master_supervisor',
          checkpoint: checkpoint.checkpoint,
          phaseId: checkpoint.phase?.id,
          error: message,
        },
      }).catch(() => {});
      return failed;
    }
  }

  private buildSupervisorMessage(checkpoint: MasterSupervisorCheckpoint): string {
    return [
      `Master run: ${this.input.masterRunId}`,
      `Matter: ${this.input.matterName}`,
      `Objective: ${this.input.objective ?? '(none)'}`,
      `Checkpoint: ${checkpoint.checkpoint}`,
      checkpoint.phase ? `Phase: ${checkpoint.phase.id} — ${checkpoint.phase.name}` : undefined,
      checkpoint.phaseResult ? `Phase result JSON:\n${JSON.stringify(checkpoint.phaseResult, null, 2)}` : undefined,
      checkpoint.completedPhaseCount !== undefined ? `Completed phase count so far: ${checkpoint.completedPhaseCount}` : undefined,
      checkpoint.failedPhases?.length ? `Failed phases: ${checkpoint.failedPhases.join(', ')}` : undefined,
      checkpoint.blockedPhases?.length ? `Blocked phases: ${checkpoint.blockedPhases.join(', ')}` : undefined,
      checkpoint.stoppedReason ? `Stopped reason: ${checkpoint.stoppedReason}` : undefined,
      '',
      'Inspect only what is needed for this checkpoint. If you find a harness bug, patch local harness code and run the smallest useful verification. If the current process must restart to use the patch, say requiresRestart=true and recommendedRunAction="restart". During an active during_phase checkpoint, prefer letting active workers finish and checkpointing for a clean resume unless the run is corrupting data or violating safety/policy.',
      'Return the strict JSON object required by your system prompt.',
    ].filter((line): line is string => typeof line === 'string').join('\n');
  }
}

export function masterSupervisorAutonomy(base: AutonomyPolicy): AutonomyPolicy {
  return {
    ...base,
    mode: 'auto_internal',
    autoApproveTools: true,
    autoApproveReadOnly: true,
    autoApproveFileWrites: true,
    autoApproveShell: true,
    autoApproveWeb: base.autoApproveWeb,
    autoAcceptCandidates: false,
    externalActionMode: 'prepare_only',
    allowExternalDispatch: false,
  };
}

function supervisorClientConfig(
  resolvedConfig: ResolvedHarnessConfig,
  overrides: {
    matterName: string;
    model: string;
    autonomy: AutonomyPolicy;
  },
): ResolvedHarnessConfig {
  const base = {
    ...resolvedConfig,
    matterName: overrides.matterName,
    model: overrides.model,
    autonomy: overrides.autonomy,
  };

  if (!isCodexNativeProfile(resolvedConfig)) {
    return base;
  }

  return {
    ...base,
    providerName: resolvedConfig.providerName,
    provider: {
      ...resolvedConfig.provider,
      defaultModel: overrides.model,
      providerKind: 'codex-sdk',
      codexToolStrategy: 'mcp',
      agentCapable: true,
      codexDangerouslyBypassApprovalsAndSandbox: true,
    },
    profile: {
      ...resolvedConfig.profile,
      providerKind: 'codex-sdk',
    },
    activeProfile: resolvedConfig.activeProfile
      ? {
          ...resolvedConfig.activeProfile,
          providerKind: 'codex-sdk',
        }
      : undefined,
  };
}

function isCodexNativeProfile(config: ResolvedHarnessConfig): boolean {
  return config.providerName === 'codex-sdk' ||
    config.provider.providerKind === 'codex-sdk' ||
    config.provider.codexToolStrategy === 'mcp';
}

function parseMasterSupervisorResult(content: string): MasterSupervisorResult {
  const parsed = parseJsonObject(content);
  if (!parsed) return {
    status: 'needs_followup',
    summary: `Master supervisor returned non-JSON output: ${content.slice(0, 500)}`,
    actionsTaken: [],
    issues: [{
      issue: 'Master supervisor did not return the required JSON contract.',
      severity: 'medium',
      evidence: content.slice(0, 500),
      mitigation: 'Retry the supervisor checkpoint with a stricter JSON instruction.',
    }],
    recommendedRunAction: 'retry_phase',
    patched: false,
    requiresRestart: false,
  };

  return {
    status: coerceStatus(parsed.status),
    summary: typeof parsed.summary === 'string' ? parsed.summary : 'Master supervisor checkpoint completed.',
    actionsTaken: stringArray(parsed.actionsTaken),
    issues: issueArray(parsed.issues),
    recommendedRunAction: coerceRunAction(parsed.recommendedRunAction),
    patched: parsed.patched === true,
    requiresRestart: parsed.requiresRestart === true,
  };
}

function parseJsonObject(content: string): Record<string, unknown> | undefined {
  try {
    const direct = JSON.parse(content.trim());
    if (isRecord(direct)) return direct;
  } catch {
  }
  const fenced = content.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (!fenced) return undefined;
  try {
    const parsed = JSON.parse(fenced[1].trim());
    return isRecord(parsed) ? parsed : undefined;
  } catch {
    return undefined;
  }
}

function coerceStatus(value: unknown): MasterSupervisorResult['status'] {
  return value === 'completed' || value === 'failed' || value === 'needs_followup'
    ? value
    : 'needs_followup';
}

function coerceRunAction(value: unknown): MasterSupervisorResult['recommendedRunAction'] {
  return value === 'continue' || value === 'retry_phase' || value === 'pause' || value === 'restart' || value === 'abort'
    ? value
    : 'continue';
}

function issueArray(value: unknown): MasterSupervisorResult['issues'] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item): MasterSupervisorResult['issues'] => {
    if (!isRecord(item) || typeof item.issue !== 'string') return [];
    return [{
      issue: item.issue,
      severity: item.severity === 'critical' || item.severity === 'high' || item.severity === 'medium' || item.severity === 'low'
        ? item.severity
        : 'medium',
      evidence: typeof item.evidence === 'string' ? item.evidence : '',
      mitigation: typeof item.mitigation === 'string' ? item.mitigation : '',
    }];
  });
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function makeSupervisorFailure(message: string): MasterSupervisorResult {
  return {
    status: 'needs_followup',
    summary: `Master supervisor failed: ${message}`,
    actionsTaken: [],
    issues: [{
      issue: 'Master supervisor checkpoint failed.',
      severity: 'high',
      evidence: message,
      mitigation: 'Retry the supervisor checkpoint or run a direct harness diagnostic.',
    }],
    recommendedRunAction: 'retry_phase',
    patched: false,
    requiresRestart: false,
  };
}
