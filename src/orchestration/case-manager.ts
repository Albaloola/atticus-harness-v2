import { createLLMClient, type LLMClient } from '../llm/client.js';
import { DEFAULT_MODEL } from '../llm/config.js';
import { appendInboxMessage } from '../state/inbox.js';
import { appendEvent } from '../state/events.js';
import { createRun, updateRun } from '../state/runs.js';
import { createTask, updateTask } from '../state/tasks.js';
import { saveCandidate } from '../storage/candidate.js';
import { resolveConfig } from '../config/loader.js';
import { tryAutoAccept, type AutoAcceptResult, type TryAutoAcceptContext } from '../acceptance/auto-accept.js';
import { buildCaseManagerPrompt } from './prompts.js';
import { buildCaseMemoryPack, summarizeCaseMemory, type CaseMemoryPack } from './case-memory.js';
import { saveOrchestrationCheckpoint } from './checkpoint.js';
import { buildCaseGapAnalysis, formatGapAnalysisForPrompt, type GapAnalysisResult } from './gap-analysis.js';
import { loadHumanizerPrompt } from '../skills/humanizer.js';
import { SkillSelectionWorker } from '../skills/selection-worker.js';
import { verifyCandidateCitations } from '../citation/verify.js';
import type { ArtifactType, CandidateArtifact, CitationRef } from '../types/artifact.js';
import type { LLMResponse } from '../types/llm.js';
import type { AutonomyPolicy } from '../config/schema.js';
import type { ReviewSeverity } from '../types/review.js';

export type CaseRequestType =
  | 'email'
  | 'communication'
  | 'task'
  | 'case_management'
  | 'draft'
  | 'report';

export const CASE_REQUEST_TYPES: readonly CaseRequestType[] = [
  'email',
  'communication',
  'task',
  'case_management',
  'draft',
  'report',
] as const;

export interface CaseManagerRequest {
  matterName: string;
  runId?: string;
  instruction: string;
  requestedType?: CaseRequestType;
  source?: string;
  autoAccept?: boolean;
  force?: boolean;
}

export interface CaseManagerResult {
  candidateId?: string;
  title: string;
  type: CaseRequestType;
  content: string;
  summary: string;
  nextActions: string[];
  risks: Array<{ risk: string; severity: string; mitigation?: string }>;
  memorySummary: string;
  autoAccept?: AutoAcceptResult;
  skipped?: boolean;
  gapAnalysis?: GapAnalysisResult;
}

export interface CaseManagerOptions {
  client?: Pick<LLMClient, 'chat'>;
  model?: string;
}

interface CaseManagerResponse {
  title?: string;
  type?: CaseRequestType;
  content?: string;
  summary?: string;
  nextActions?: string[];
  risks?: Array<{ risk: string; severity: string; mitigation?: string }>;
  citations?: CitationRef[];
}

export class CaseManager {
  private client?: Pick<LLMClient, 'chat'>;
  private model?: string;

  constructor(options: CaseManagerOptions = {}) {
    this.client = options.client;
    this.model = options.model;
  }

  async handle(request: CaseManagerRequest): Promise<CaseManagerResult> {
    const requestedType = request.requestedType ?? inferRequestType(request.instruction);
    const source = request.source ?? 'hermes';
    const run = createRun({
      id: request.runId ?? process.env.ATTICUS_RUN_ID,
      matterName: request.matterName,
      model: this.model ?? DEFAULT_MODEL,
      agentType: 'main_orchestrator',
      role: 'case_manager',
      prompt: request.instruction,
    });
    const task = createTask({
      matterName: request.matterName,
      runId: run.id,
      kind: 'case_management',
      type: requestedType,
      title: `Case instruction: ${request.instruction.slice(0, 80)}`,
      priority: 'high',
      assignedAgent: 'main_orchestrator',
      data: { instruction: request.instruction, source, requestedType },
    });

    try {
      await updateTask(request.matterName, task.id, { status: 'in_progress' });
      await appendInboxMessage(request.matterName, request.instruction, source);
      await appendEvent({
        matterName: request.matterName,
        type: 'case.instruction.received',
        runId: run.id,
        taskId: task.id,
        source,
        data: { instruction: request.instruction, requestedType },
      });

      const config = await resolveConfig({ matterName: request.matterName });
      const memory = await buildCaseMemoryPack(request.matterName);
      const memorySummary = summarizeCaseMemory(memory);
      await appendEvent({
        matterName: request.matterName,
        type: 'case.memory.loaded',
        runId: run.id,
        taskId: task.id,
        source: 'orchestration',
        data: {
          evidence: memory.evidence.length,
          artifacts: memory.artifacts.length,
          candidates: memory.candidates.length,
          sources: memory.sources.length,
          tasks: memory.activeAndRecentTasks.length,
          settingsLoaded: true,
        },
      });

      const gapAnalysis = await buildCaseGapAnalysis({
        matterName: request.matterName,
        instruction: request.instruction,
        requestedType,
        force: request.force,
      });
      await appendEvent({
        matterName: request.matterName,
        type: 'case.gap_analysis.completed',
        runId: run.id,
        taskId: task.id,
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
        saveOrchestrationCheckpoint(request.matterName, {
          masterRunId: run.id,
          status: 'completed',
          objective: request.instruction,
          currentPhaseId: 'case_management',
          caseMemorySummary: memorySummary,
        });
        await updateTask(request.matterName, task.id, {
          status: 'completed',
          data: {
            skippedByGapAnalysis: true,
            gapAnalysis: summarizeGapAnalysisForState(gapAnalysis),
          },
        });
        updateRun(request.matterName, run.id, {
          status: 'completed',
          summary: gapAnalysis.summary,
        });

        return {
          title: 'No new work needed',
          type: requestedType,
          content: '',
          summary: gapAnalysis.summary,
          nextActions: [
            `Skipped ${gapAnalysis.skipped.length} existing deliverable(s). Use --force to re-produce them.`,
          ],
          risks: [],
          memorySummary,
          skipped: true,
          gapAnalysis,
        };
      }

      const humanizer = await loadHumanizerPrompt({
        objective: request.instruction,
        requestedType,
        jurisdiction: extractMatterString(memory, 'jurisdiction'),
        matterType: extractMatterString(memory, 'type'),
      });
      const skillSelector = new SkillSelectionWorker();
      const skillContext = await skillSelector.buildContext({
        objective: request.instruction,
        requestedType,
        matterMeta: {
          jurisdiction: extractMatterString(memory, 'jurisdiction') ?? 'Scotland',
          type: extractMatterString(memory, 'type'),
        },
        limit: 3,
        maxBodyChars: 1600,
        excludeSkillIds: humanizer?.skillName ? [humanizer.skillName] : [],
      });
      const systemPrompt = buildCaseManagerPrompt({
        matterName: request.matterName,
        matter: memory.matter,
        model: this.model ?? config.model ?? DEFAULT_MODEL,
        providerName: config.providerName,
        providerPolicy: config.providerPolicy,
        autonomy: config.autonomy,
        toolPolicy: config.toolPolicy,
        skillSection: [
          humanizer
            ? `Apply this output-style skill to the final candidate without changing facts, citations, dates, amounts, source IDs, or legal uncertainty:\n\n## Active Skill: ${humanizer.skillName}\n${humanizer.prompt}`
            : undefined,
          skillContext.promptSection,
        ].filter(Boolean).join('\n\n') || undefined,
      });
      const response = await this.generate(request, requestedType, memory, systemPrompt, humanizer?.skillName, config, gapAnalysis);
      const parsed = parseCaseManagerResponse(response.content);
      const title = parsed.title || defaultTitle(requestedType, request.instruction);
      const content = parsed.content || response.content;
      const outputType = normalizeType(parsed.type ?? requestedType);
      const candidate: CandidateArtifact = {
        id: makeCandidateId(outputType),
        matterName: request.matterName,
        type: outputType,
        title,
        content,
        status: 'candidate',
        created: new Date().toISOString(),
        metadata: {
          source,
          model: this.model ?? DEFAULT_MODEL,
          requestedType,
          caseMemorySummary: memorySummary,
          citations: parsed.citations || [],
          externalAction: isPrepareOnlyType(outputType) ? 'prepare_only' : 'internal',
          nextActions: parsed.nextActions || [],
          risks: parsed.risks || [],
          dashboardStatus: memory.dashboard.status,
          dashboardPhase: memory.dashboard.phase,
          autonomy: config.autonomy,
          humanizerSkill: humanizer?.skillName,
          selectedSkills: skillContext.selectedSkills.map(({ skill, score }) => ({
            skillId: skill.skillId,
            score,
          })),
          gapAnalysis: summarizeGapAnalysisForState(gapAnalysis),
        },
      };

      await saveCandidate(request.matterName, candidate);
      await appendEvent({
        matterName: request.matterName,
        type: 'case.output.created',
        runId: run.id,
        taskId: task.id,
        source: 'orchestration',
        data: {
          candidateId: candidate.id,
          title,
          requestedType,
          outputType,
          prepareOnly: isPrepareOnlyType(outputType),
          skippedExisting: gapAnalysis.skipped.length,
          producedRequirements: gapAnalysis.toProduce.map((requirement) => requirement.label),
        },
      });

      const shouldAutoAccept = request.autoAccept ?? config.autonomy.autoAcceptCandidates;
      const autoAcceptContext = shouldAutoAccept
        ? await this.buildAutoAcceptContext(candidate, config.autonomy)
        : undefined;
      if (autoAcceptContext) {
        candidate.metadata.acceptancePipeline = autoAcceptContext;
        await saveCandidate(request.matterName, candidate);
      }

      const autoAccept = shouldAutoAccept
        ? await tryAutoAccept(candidate, request.matterName, config.autonomy, autoAcceptContext)
        : undefined;
      if (autoAccept) {
        await appendEvent({
          matterName: request.matterName,
          type: 'case.auto_accept.evaluated',
          runId: run.id,
          taskId: task.id,
          source: 'orchestration',
          data: { ...autoAccept },
        });
      }

      saveOrchestrationCheckpoint(request.matterName, {
        masterRunId: run.id,
        status: autoAccept?.accepted || !autoAccept ? 'completed' : 'blocked',
        objective: request.instruction,
        currentPhaseId: 'case_management',
        caseMemorySummary: memorySummary,
        lastCandidateId: candidate.id,
      });

      await updateTask(request.matterName, task.id, {
        status: autoAccept?.accepted || !autoAccept ? 'completed' : 'blocked',
        data: { candidateId: candidate.id, autoAccept },
      });
      updateRun(request.matterName, run.id, {
        status: 'completed',
        summary: parsed.summary || `Produced ${outputType} candidate ${candidate.id}`,
      });

      return {
        candidateId: candidate.id,
        title,
        type: outputType,
        content,
        summary: parsed.summary || `Produced ${outputType} from persisted case memory.`,
        nextActions: parsed.nextActions || [],
        risks: parsed.risks || [],
        memorySummary,
        autoAccept,
        gapAnalysis,
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      updateRun(request.matterName, run.id, { status: 'error', summary: message, error: message });
      await updateTask(request.matterName, task.id, { status: 'failed', data: { error: message } });
      await appendEvent({
        matterName: request.matterName,
        type: 'agent.run.error',
        runId: run.id,
        taskId: task.id,
        source: 'orchestration',
        data: { error: message, phase: 'case_management' },
      });
      throw err;
    }
  }

  private async generate(
    request: CaseManagerRequest,
    requestedType: CaseRequestType,
    memory: CaseMemoryPack,
    systemPrompt: string,
    activeSkillName?: string,
    config?: Awaited<ReturnType<typeof resolveConfig>>,
    gapAnalysis?: GapAnalysisResult,
  ): Promise<LLMResponse> {
    const activeSkillMarker = activeSkillName ? `Active Skill: ${activeSkillName}` : /Active Skill: [^\n]+/.exec(systemPrompt)?.[0];
    const resolvedConfig = config ?? await resolveConfig({ matterName: request.matterName });
    const reasoningEffort = memory.matter.config.reasoningEffort ?? resolvedConfig.reasoningEffort;
    const client = this.client ?? createLLMClient(resolvedConfig);
    return client.chat({
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: [
            `Requested output type: ${requestedType}`,
            ...(activeSkillMarker ? [activeSkillMarker] : []),
            `Instruction from ${request.source ?? 'hermes'}: ${request.instruction}`,
            ...(gapAnalysis
              ? [
                  '',
                  formatGapAnalysisForPrompt(gapAnalysis),
                  '',
                  'Gap-analysis directive: produce only the deliverables listed under "Produce only these missing or stale deliverables". Do not re-produce or consolidate skipped deliverables unless --force is active.',
                ]
              : []),
            '',
            'Persisted case memory pack:',
            JSON.stringify(memory),
          ].join('\n'),
        },
      ],
      config: {
        model: this.model ?? resolvedConfig.model ?? DEFAULT_MODEL,
        temperature: 0.15,
        maxTokens: memory.matter.config.maxTokens ?? resolvedConfig.maxTokens ?? 8192,
        reasoningEffort,
        jsonMode: true,
        disableThinking: reasoningEffort ? reasoningEffort === 'none' : true,
      },
    });
  }

  private async buildAutoAcceptContext(
    candidate: CandidateArtifact,
    policy: AutonomyPolicy,
  ): Promise<TryAutoAcceptContext> {
    const citationResult = await verifyCandidateCitations(candidate.matterName, candidate);
    const context: TryAutoAcceptContext = {
      citationResult,
      requiredFields: requiredFieldsForType(candidate.type),
      operatorHandoffNotes: candidate.metadata.externalAction === 'prepare_only'
        ? 'Prepared for operator review; external sending/filing/serving remains disabled.'
        : undefined,
    };

    if (policy.requireHostileReviewForAcceptance) {
      try {
        const config = await resolveConfig({ matterName: candidate.matterName });
        const client = this.client ?? createLLMClient(config);
        const review = await client.chat({
          messages: [
            {
              role: 'system',
              content: 'You are a hostile legal reviewer. Identify the highest severity risk in this candidate. Use severity labels CRITICAL, HIGH, MEDIUM, LOW.',
            },
            {
              role: 'user',
              content: candidate.content.slice(0, 12000),
            },
          ],
          config: {
            model: 'deepseek/deepseek-v4-pro',
            temperature: 0.2,
            maxTokens: 2048,
            disableThinking: true,
          },
        });
        context.reviewSeverity = extractMaxReviewSeverity(review.content);
        context.reviewFindings = countReviewFindings(review.content);
        candidate.metadata.hostileReview = {
          severity: context.reviewSeverity,
          findingCount: context.reviewFindings,
          preview: review.content.slice(0, 1200),
        };
      } catch (err: unknown) {
        context.reviewSeverity = 'high';
        context.reviewFindings = 1;
        candidate.metadata.hostileReview = {
          severity: 'high',
          findingCount: 1,
          error: (err as Error).message,
        };
      }
    }

    candidate.metadata.citationVerification = citationResult;
    return context;
  }
}

export function inferRequestType(instruction: string): CaseRequestType {
  const lower = instruction.toLowerCase();
  if (/\b(email|e-mail|reply|inbox)\b/.test(lower)) return 'email';
  if (/\b(letter|communication|correspondence|message|notice)\b/.test(lower)) return 'communication';
  if (/\b(task|todo|checklist|reminder|follow up|follow-up)\b/.test(lower)) return 'task';
  if (/\b(report|status update|dashboard)\b/.test(lower)) return 'report';
  if (/\b(draft|document|statement|application|form)\b/.test(lower)) return 'draft';
  return 'case_management';
}

function parseCaseManagerResponse(content: string): CaseManagerResponse {
  try {
    const parsed = JSON.parse(content) as CaseManagerResponse;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function normalizeType(type: string): CaseRequestType {
  if ((CASE_REQUEST_TYPES as readonly string[]).includes(type)) {
    return type as CaseRequestType;
  }
  return 'case_management';
}

function isPrepareOnlyType(type: string): boolean {
  return type === 'email' || type === 'communication' || type === 'draft';
}

function makeCandidateId(type: string): string {
  return `case-${type}-${Date.now()}`;
}

function defaultTitle(type: string, instruction: string): string {
  const trimmed = instruction.replace(/\s+/g, ' ').trim();
  return `${type}: ${trimmed.slice(0, 80) || 'case instruction'}`;
}

function extractMatterString(memory: CaseMemoryPack, key: string): string | undefined {
  const matter = memory.matter as unknown as Record<string, unknown>;
  const direct = matter[key];
  if (typeof direct === 'string') return direct;
  const config = matter.config;
  if (config && typeof config === 'object') {
    const nested = (config as Record<string, unknown>)[key];
    if (typeof nested === 'string') return nested;
  }
  return undefined;
}

function requiredFieldsForType(type: ArtifactType): string[] {
  switch (type) {
    case 'email':
    case 'communication':
      return ['Dear', 'Yours', 'review'];
    case 'draft':
      return ['#'];
    case 'report':
      return ['Summary'];
    case 'task':
      return [];
    default:
      return [];
  }
}

function extractMaxReviewSeverity(content: string): ReviewSeverity {
  const upper = content.toUpperCase();
  if (/\bCRITICAL\b/.test(upper)) return 'critical';
  if (/\bHIGH\b/.test(upper)) return 'high';
  if (/\bMEDIUM\b/.test(upper)) return 'medium';
  return 'low';
}

function countReviewFindings(content: string): number {
  const matches = content.match(/\b(CRITICAL|HIGH|MEDIUM|LOW)\b/gi);
  return matches?.length ?? 0;
}

function summarizeGapAnalysisForState(gapAnalysis: GapAnalysisResult): Record<string, unknown> {
  return {
    force: gapAnalysis.force,
    summary: gapAnalysis.summary,
    latestEvidenceIngested: gapAnalysis.latestEvidenceIngested,
    existingDeliverables: gapAnalysis.inventory.length,
    complete: gapAnalysis.complete.map((match) => ({
      requirement: match.requirementLabel,
      assetId: match.assetId,
      source: match.assetSource,
    })),
    stale: gapAnalysis.stale.map((match) => ({
      requirement: match.requirementLabel,
      assetId: match.assetId,
      reason: match.staleReason,
    })),
    missing: gapAnalysis.gaps.map((requirement) => requirement.label),
    toProduce: gapAnalysis.toProduce.map((requirement) => requirement.label),
    noNewWorkNeeded: gapAnalysis.noNewWorkNeeded,
  };
}
