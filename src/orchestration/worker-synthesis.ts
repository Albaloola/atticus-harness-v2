import { createLLMClient, type LLMClient } from '../llm/client.js';
import { PRO_MODEL } from '../llm/config.js';
import { resolveConfig } from '../config/loader.js';
import { parseStructuredResult } from '../agent/result-schema.js';
import type { LLMResponse } from '../types/llm.js';
import type { LLMMessage } from '../types/message.js';
import type { AgentSpawnInput, AgentStructuredResult } from './types.js';
import type { QueryLoopResult } from '../agent/query-loop.js';

export interface WorkerSynthesisClient {
  chat(request: Parameters<LLMClient['chat']>[0]): Promise<LLMResponse>;
}

export async function synthesizeWorkerOutput(params: {
  spawn: AgentSpawnInput;
  loopResult: QueryLoopResult;
  model?: string;
  client?: WorkerSynthesisClient;
}): Promise<AgentStructuredResult> {
  const transcript = buildTranscriptExcerpt(params.loopResult.history);
  const deterministic = makeDeterministicResult(params.spawn, params.loopResult, transcript);
  const resolvedConfig = params.client ? undefined : await resolveConfig({ matterName: params.spawn.matterName });
  const client = params.client ?? createLLMClient(resolvedConfig!);

  try {
    const response = await client.chat({
      messages: [
        {
          role: 'system',
          content: [
            'You are a legal reducer. Convert raw worker transcript content into one strict JSON object.',
            'Preserve evidence IDs, source IDs, dates, amounts, legal uncertainty, blockers, and next actions.',
            'Do not invent findings. If the transcript contains only process chatter, return empty findings and explain that in the summary.',
            'Write every JSON string value in English unless the operator explicitly asked for another language.',
          ].join('\n'),
        },
        {
          role: 'user',
          content: [
            `Task: ${params.spawn.title}`,
            `Objective: ${params.spawn.objective}`,
            `Phase: ${params.spawn.phaseId || 'unknown'}`,
            '',
            'Raw transcript excerpt:',
            transcript,
          ].join('\n'),
        },
      ],
      config: {
        model: params.model || resolvedConfig?.model || PRO_MODEL,
        temperature: 0,
        maxTokens: 4096,
        disableThinking: true,
        jsonSchema: {
          name: 'agent_structured_result',
          schema: AGENT_RESULT_JSON_SCHEMA,
          strict: true,
        },
      },
    });

    const parsed = parseStructuredResult(response.content);
    return applyWorkerQualityGate(parsed ?? deterministic, params.spawn, params.loopResult);
  } catch {
    return applyWorkerQualityGate(deterministic, params.spawn, params.loopResult);
  }
}

export function buildTranscriptExcerpt(history: LLMMessage[], maxChars = 12000): string {
  const usefulMessages = history
    .filter((message) => message.role !== 'system')
    .map((message) => {
      const label = message.toolName ? `${message.role}:${message.toolName}` : message.role;
      const toolCalls = message.toolCalls?.length
        ? `\nTool calls: ${message.toolCalls.map((tool) => tool.name).join(', ')}`
        : '';
      return `## ${label}\n${message.content}${toolCalls}`;
    });

  const excerpt = usefulMessages.join('\n\n');
  if (excerpt.length <= maxChars) return excerpt;
  return excerpt.slice(0, Math.floor(maxChars / 2)) +
    '\n\n...[middle transcript omitted for synthesis budget]...\n\n' +
    excerpt.slice(-Math.floor(maxChars / 2));
}

function makeDeterministicResult(
  spawn: AgentSpawnInput,
  loopResult: QueryLoopResult,
  transcript: string,
): AgentStructuredResult {
  const toolMessages = loopResult.history.filter((message) => message.role === 'tool');
  const evidenceIds = [...new Set(transcript.match(/[A-Z][A-Z0-9_-]*-SRC-\d+/g) || [])].slice(0, 12);
  const summarySource = loopResult.finalContent.trim() || toolMessages.at(-1)?.content || transcript;
  const summary = summarySource
    ? summarizeText(summarySource, 700)
    : 'Worker completed but did not return reducer-readable content.';

  return {
    status: loopResult.status === 'error' ? 'failed' : loopResult.status === 'max_turns' ? 'needs_followup' : 'completed',
    summary: `Structured synthesis fallback for "${spawn.title}": ${summary}`,
    findings: evidenceIds.length > 0
      ? [{
          claim: `Worker referenced evidence/source IDs relevant to ${spawn.title}: ${evidenceIds.join(', ')}`,
          support: evidenceIds.join(', '),
          confidence: 'medium',
        }]
      : [],
    risks: loopResult.status === 'completed'
      ? []
      : [{
          risk: `Worker ended with status ${loopResult.status}; reducer used partial transcript synthesis`,
          severity: loopResult.status === 'error' ? 'high' : 'medium',
          mitigation: 'Retry or assign a focused reducer pass if the phase depends on this worker',
        }],
    proposedTasks: [],
    artifactIds: [],
    nextActions: loopResult.status === 'completed' ? [] : ['Review synthesized worker transcript before relying on it'],
  };
}

export function applyWorkerQualityGate(
  result: AgentStructuredResult,
  spawn: AgentSpawnInput,
  loopResult: QueryLoopResult,
): AgentStructuredResult {
  if (loopResult.policyViolations?.length) {
    return {
      ...result,
      status: 'needs_followup',
      summary: `Worker output quarantined for "${spawn.title}": ${loopResult.policyViolations.join('; ')}. Prior summary: ${result.summary}`,
      risks: [
        ...result.risks,
        {
          risk: 'Worker used or relied on a source/tool surface forbidden by the active autonomy policy.',
          severity: 'high',
          mitigation: 'Rerun the worker under the current Harness policy and accept only evidence-backed output from approved tools.',
        },
      ],
      nextActions: [
        ...result.nextActions,
        `Rerun worker task under policy supervision: ${spawn.title}`,
      ],
    };
  }

  if (result.status !== 'completed' || loopResult.status !== 'completed') return result;

  const hasReducerOutput = result.findings.length > 0 ||
    result.risks.length > 0 ||
    result.proposedTasks.length > 0 ||
    result.artifactIds.length > 0 ||
    result.nextActions.length > 0;
  const weakSummary = looksLikeWeakCompletion(result.summary);

  if (hasReducerOutput && !weakSummary) return result;

  return {
    ...result,
    status: 'needs_followup',
    summary: `Worker output needs follow-up for "${spawn.title}": ${result.summary}`,
    risks: [
      ...result.risks,
      {
        risk: hasReducerOutput
          ? 'Worker result says the task was not substantively completed.'
          : 'Worker completed without reducer-usable findings, risks, artifacts, proposed tasks, or next actions.',
        severity: 'medium',
        mitigation: 'Rerun a focused worker or convert the transcript into a concrete gap/not-applicable finding before relying on the phase.',
      },
    ],
    nextActions: [
      ...result.nextActions,
      `Rerun or manually review worker task: ${spawn.title}`,
    ],
  };
}

function looksLikeWeakCompletion(summary: string): boolean {
  return [
    /\bprocess chatter\b/i,
    /\btranscript (?:excerpt )?contains only (?:task instructions|process instructions|workflow constraints|process guidance)\b/i,
    /\btask\b.*\b(?:not addressed|not advanced|not executed)\b/i,
    /\b(?:does not include|does not contain|provides no|contains no|includes no)\b.{0,120}\b(?:substantive|matter inventory|evidence IDs?|source IDs?|worker findings?|evidence content|event facts?|dates|amounts)\b/i,
    /\bno (?:actual )?(?:evidence content|evidence IDs?|source IDs?|dates|amounts|matter inventory output|worker findings?|substantive event facts?)\b/i,
    /\bno substantive (?:analysis|findings|conclusions)\b/i,
    /\bdoes not contain any (?:actual|final|substantive)\b/i,
    /\bno findings can be extracted\b/i,
    /\bonly (?:records|shows|contains) (?:tool calls|process|data retrieval|evidence retrieval)\b/i,
  ].some((pattern) => pattern.test(summary));
}

function summarizeText(text: string, maxChars: number): string {
  const compact = text.replace(/\s+/g, ' ').trim();
  if (compact.length <= maxChars) return compact;
  return compact.slice(0, maxChars - 18) + ' ...[truncated]';
}

const AGENT_RESULT_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['status', 'summary', 'findings', 'risks', 'proposedTasks', 'artifactIds', 'nextActions'],
  properties: {
    status: { type: 'string', enum: ['completed', 'blocked', 'failed', 'needs_followup'] },
    summary: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['claim', 'support', 'confidence'],
        properties: {
          claim: { type: 'string' },
          support: { type: 'string' },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
        },
      },
    },
    risks: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['risk', 'severity', 'mitigation'],
        properties: {
          risk: { type: 'string' },
          severity: { type: 'string', enum: ['critical', 'high', 'medium', 'low'] },
          mitigation: { type: 'string' },
        },
      },
    },
    proposedTasks: { type: 'array', items: { type: 'string' } },
    artifactIds: { type: 'array', items: { type: 'string' } },
    nextActions: { type: 'array', items: { type: 'string' } },
  },
};
