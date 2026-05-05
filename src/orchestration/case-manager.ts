import { OpenRouterClient } from '../llm/client.js';
import { DEFAULT_MODEL } from '../llm/config.js';
import { appendInboxMessage } from '../state/inbox.js';
import { appendEvent } from '../state/events.js';
import { createRun, updateRun } from '../state/runs.js';
import { createTask, updateTask } from '../state/tasks.js';
import { saveCandidate } from '../storage/candidate.js';
import { resolveConfig } from '../config/loader.js';
import { tryAutoAccept, type AutoAcceptResult } from '../acceptance/auto-accept.js';
import { CASE_MANAGER_PROMPT } from './prompts.js';
import { buildCaseMemoryPack, summarizeCaseMemory, type CaseMemoryPack } from './case-memory.js';
import { saveOrchestrationCheckpoint } from './checkpoint.js';
import { loadHumanizerPrompt } from '../skills/humanizer.js';
import type { ArtifactType, CandidateArtifact, CitationRef } from '../types/artifact.js';
import type { LLMResponse } from '../types/llm.js';

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
  instruction: string;
  requestedType?: CaseRequestType;
  source?: string;
  autoAccept?: boolean;
}

export interface CaseManagerResult {
  candidateId: string;
  title: string;
  type: CaseRequestType;
  content: string;
  summary: string;
  nextActions: string[];
  risks: Array<{ risk: string; severity: string; mitigation?: string }>;
  memorySummary: string;
  autoAccept?: AutoAcceptResult;
}

export interface CaseManagerOptions {
  client?: Pick<OpenRouterClient, 'chat'>;
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
  private client: Pick<OpenRouterClient, 'chat'>;
  private model?: string;

  constructor(options: CaseManagerOptions = {}) {
    this.client = options.client ?? new OpenRouterClient();
    this.model = options.model;
  }

  async handle(request: CaseManagerRequest): Promise<CaseManagerResult> {
    const requestedType = request.requestedType ?? inferRequestType(request.instruction);
    const source = request.source ?? 'hermes';
    const run = createRun({
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

      const humanizer = await loadHumanizerPrompt({
        objective: request.instruction,
        requestedType,
        jurisdiction: extractMatterString(memory, 'jurisdiction'),
        matterType: extractMatterString(memory, 'type'),
      });
      const response = await this.generate(request, requestedType, memory, humanizer);
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
        },
      });

      const autoAccept = request.autoAccept
        ? await tryAutoAccept(candidate, request.matterName, config.autonomy)
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
    humanizer?: { skillName: string; prompt: string },
  ): Promise<LLMResponse> {
    return this.client.chat({
      messages: [
        { role: 'system', content: CASE_MANAGER_PROMPT },
        ...(humanizer
          ? [{
              role: 'system' as const,
              content: `Apply this output-style skill to the final candidate without changing facts, citations, dates, amounts, source IDs, or legal uncertainty:\n\n## Active Skill: ${humanizer.skillName}\n${humanizer.prompt}`,
            }]
          : []),
        {
          role: 'user',
          content: [
            `Requested output type: ${requestedType}`,
            `Instruction from ${request.source ?? 'hermes'}: ${request.instruction}`,
            '',
            'Persisted case memory pack:',
            JSON.stringify(memory),
          ].join('\n'),
        },
      ],
      config: {
        model: this.model ?? DEFAULT_MODEL,
        temperature: 0.15,
        maxTokens: 8192,
        jsonMode: true,
        disableThinking: true,
      },
    });
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
