import { randomUUID } from 'node:crypto';
import { appendEvent } from '../state/events.js';
import { saveCandidate } from '../storage/candidate.js';
import type { ArtifactType, CandidateArtifact, CitationRef } from '../types/artifact.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export interface SubmitCandidateArgs {
  id?: string;
  type?: ArtifactType;
  title: string;
  content: string;
  metadata?: Record<string, unknown>;
  citations?: CitationRef[];
}

export interface SubmitCandidateResult {
  candidateId: string;
  pathHint: string;
}

const ALLOWED_TYPES = new Set<ArtifactType>([
  'draft',
  'review',
  'analysis',
  'extraction',
  'report',
  'email',
  'communication',
  'task',
  'case_management',
]);

export class SubmitCandidateTool implements Tool<SubmitCandidateArgs, SubmitCandidateResult> {
  readonly name = 'submit_candidate';
  readonly description = [
    'Submit a structured JSON candidate artifact for reducer review.',
    'Use this for worker deliverables instead of writing loose markdown into _candidates.',
  ].join(' ');
  readonly inputSchema = {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'Optional stable candidate id; unsafe characters will be normalized' },
      type: {
        type: 'string',
        enum: [...ALLOWED_TYPES],
        description: 'Candidate artifact type; defaults to report',
      },
      title: { type: 'string', description: 'Human-readable artifact title' },
      content: { type: 'string', description: 'Complete artifact content' },
      metadata: { type: 'object', description: 'Additional reducer-visible metadata' },
      citations: {
        type: 'array',
        description: 'Optional citation references supporting the candidate',
        items: {
          type: 'object',
          properties: {
            citationId: { type: 'string' },
            evidenceId: { type: 'string' },
            quote: { type: 'string' },
            quoteHash: { type: 'string' },
            locator: { type: 'string' },
          },
          required: ['citationId', 'evidenceId'],
        },
      },
    },
    required: ['title', 'content'],
  };
  readonly executionKind = 'write' as const;
  readonly modifiesContext = true;

  isEnabled(): boolean {
    return true;
  }

  async call(args: SubmitCandidateArgs, context: ToolUseContext): Promise<ToolResult<SubmitCandidateResult>> {
    if (!context.matterName) return { success: false, error: 'No matter context available' };
    if (!args || typeof args.title !== 'string' || args.title.trim().length === 0) {
      return { success: false, error: 'submit_candidate requires a non-empty title' };
    }
    if (typeof args.content !== 'string' || args.content.trim().length === 0) {
      return { success: false, error: 'submit_candidate requires non-empty content' };
    }

    const type = normalizeType(args.type);
    const candidateId = normalizeCandidateId(args.id, type);
    const metadata = isRecord(args.metadata) ? args.metadata : {};
    const citations = Array.isArray(args.citations)
      ? args.citations.filter(isCitationRef)
      : Array.isArray(metadata.citations)
        ? metadata.citations.filter(isCitationRef)
        : [];
    const candidate: CandidateArtifact = {
      id: candidateId,
      matterName: context.matterName,
      type,
      title: args.title.trim(),
      content: args.content,
      status: 'candidate',
      created: new Date().toISOString(),
      metadata: {
        ...metadata,
        citations,
        source: typeof metadata.source === 'string' ? metadata.source : 'submit_candidate',
        submittedByRunId: context.runId,
        submittedByTaskId: context.taskId,
      },
    };

    await saveCandidate(context.matterName, candidate);
    await appendEvent({
      matterName: context.matterName,
      runId: context.runId,
      taskId: context.taskId,
      type: 'case.output.created',
      source: 'tool',
      data: {
        candidateId,
        title: candidate.title,
        outputType: type,
        source: 'submit_candidate',
      },
    }).catch(() => undefined);

    return {
      success: true,
      data: {
        candidateId,
        pathHint: `matters/${context.matterName}/_candidates/${candidateId}.json`,
      },
      output: `Structured candidate submitted: ${candidateId}. Reducer-visible JSON is in matters/${context.matterName}/_candidates/${candidateId}.json`,
    };
  }
}

function normalizeType(type: unknown): ArtifactType {
  return typeof type === 'string' && ALLOWED_TYPES.has(type as ArtifactType)
    ? type as ArtifactType
    : 'report';
}

function normalizeCandidateId(id: unknown, type: ArtifactType): string {
  const raw = typeof id === 'string' && id.trim().length > 0
    ? id
    : `${type}-${randomUUID()}`;
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120) || `${type}-${randomUUID()}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isCitationRef(value: unknown): value is CitationRef {
  if (!isRecord(value)) return false;
  return typeof value.citationId === 'string' && typeof value.evidenceId === 'string';
}
