import { readFile } from 'fs/promises';
import { loadMatter } from '../storage/matter.js';
import { listEvidence, getExtractionPath } from '../storage/evidence.js';
import { listCandidates } from '../storage/candidate.js';
import { listArtifacts } from '../storage/artifact.js';
import { listEvents } from '../state/events.js';
import { listTasks } from '../state/tasks.js';
import { listRuns } from '../state/runs.js';
import { listInboxMessages } from '../state/inbox.js';
import { deriveSnapshot } from '../state/snapshot.js';
import { resolveConfig } from '../config/loader.js';
import { listSources } from '../research/source-store.js';
import type { MatterRuntimeSnapshot } from '../types/state.js';
import type { MatterIndex } from '../types/matter.js';

const DEFAULT_LIMITS = {
  evidence: 20,
  artifacts: 12,
  candidates: 12,
  sources: 12,
  events: 40,
  tasks: 30,
  runs: 20,
  inbox: 20,
  extractionChars: 900,
  artifactChars: 2000,
  candidateChars: 1200,
};

export interface CaseMemoryPack {
  matterName: string;
  generatedAt: string;
  matter: MatterIndex;
  dashboard: MatterRuntimeSnapshot;
  settings: Record<string, unknown>;
  evidence: Array<{
    id: string;
    originalPath: string;
    format: string;
    status: string;
    extractedPreview?: string;
  }>;
  artifacts: Array<{
    id: string;
    type: string;
    title: string;
    accepted: string;
    contentPreview: string;
  }>;
  candidates: Array<{
    id: string;
    type: string;
    title: string;
    status: string;
    created: string;
    contentPreview: string;
  }>;
  sources: Array<{
    id: number;
    title: string | null;
    url: string | null;
    sourceType: string;
    fetchedAt: string;
  }>;
  recentEvents: Array<{ type: string; timestamp: string; source: string; data: Record<string, unknown> }>;
  activeAndRecentTasks: Array<{ id: string; type: string; status: string; title: string; updated: string }>;
  recentRuns: Array<{ id: string; role: string; status: string; prompt?: string; summary?: string; started: string }>;
  inbox: Array<{ id: string; timestamp: string; source: string; content: string }>;
  recoveryInstructions: string[];
}

export interface CaseMemoryOptions {
  limits?: Partial<typeof DEFAULT_LIMITS>;
}

export async function buildCaseMemoryPack(
  matterName: string,
  options: CaseMemoryOptions = {},
): Promise<CaseMemoryPack> {
  const limits = { ...DEFAULT_LIMITS, ...options.limits };
  const [matter, dashboard, resolvedConfig, evidence, artifacts, candidates, inbox] = await Promise.all([
    loadMatter(matterName),
    deriveSnapshot(matterName, { recoverRuntime: false }),
    resolveConfig({ matterName }),
    listEvidence(matterName).catch(() => []),
    listArtifacts(matterName).catch(() => []),
    listCandidates(matterName).catch(() => []),
    listInboxMessages(matterName, { tail: limits.inbox }).catch(() => []),
  ]);

  const evidenceSummary = await Promise.all(
    evidence.slice(0, limits.evidence).map(async (record) => ({
      id: record.id,
      originalPath: record.originalPath,
      format: record.format,
      status: record.status,
      extractedPreview: await readOptionalPreview(
        getExtractionPath(matterName, record.id),
        limits.extractionChars,
      ),
    })),
  );

  const sources = listSources(matterName, { limit: limits.sources }).map((source) => ({
    id: source.id,
    title: source.title,
    url: source.url,
    sourceType: source.source_type,
    fetchedAt: source.fetched_at,
  }));

  const recentEvents = listEvents(matterName, { tail: limits.events }).map((event) => ({
    type: event.type,
    timestamp: event.timestamp,
    source: event.source,
    data: event.data,
  }));

  const activeAndRecentTasks = listTasks(matterName)
    .slice(0, limits.tasks)
    .map((task) => ({
      id: task.id,
      type: task.type,
      status: task.status,
      title: task.title,
      updated: task.updated,
    }));

  const recentRuns = listRuns(matterName, { limit: limits.runs }).map((run) => ({
    id: run.id,
    role: run.role,
    status: run.status,
    prompt: run.prompt,
    summary: run.summary,
    started: run.started,
  }));
  const settings = resolvedConfig.redacted
    ? resolvedConfig.redacted()
    : {
        providerName: resolvedConfig.providerName,
        providerPolicy: resolvedConfig.providerPolicy,
        model: resolvedConfig.model,
        autonomy: resolvedConfig.autonomy,
        toolPolicy: resolvedConfig.toolPolicy,
        fromDisk: resolvedConfig.fromDisk,
        matterName: resolvedConfig.matterName,
      };

  return {
    matterName,
    generatedAt: new Date().toISOString(),
    matter,
    dashboard,
    settings,
    evidence: evidenceSummary,
    artifacts: artifacts.slice(0, limits.artifacts).map((artifact) => ({
      id: artifact.id,
      type: artifact.type,
      title: artifact.title,
      accepted: artifact.accepted,
      contentPreview: truncate(artifact.content, limits.artifactChars),
    })),
    candidates: candidates.slice(0, limits.candidates).map((candidate) => ({
      id: candidate.id,
      type: candidate.type,
      title: candidate.title,
      status: candidate.status,
      created: candidate.created,
      contentPreview: truncate(candidate.content, limits.candidateChars),
    })),
    sources,
    recentEvents,
    activeAndRecentTasks,
    recentRuns,
    inbox: inbox.map((message) => ({
      id: message.id,
      timestamp: message.timestamp,
      source: message.source,
      content: message.content,
    })),
    recoveryInstructions: [
      'Treat this pack as the source of continuity after compaction or reset.',
      'Use accepted artifacts, evidence IDs, source IDs, task history, and recent inbox messages before asking Hermes or the operator to restate the case.',
      'Do not rerun all investigation phases unless explicitly instructed or the dashboard shows missing foundational work.',
      'External communications are prepare-only drafts; do not send, file, serve, pay, or contact anyone.',
    ],
  };
}

export function summarizeCaseMemory(pack: CaseMemoryPack): string {
  return [
    `Matter ${pack.matterName}: status=${pack.dashboard.status}, phase=${pack.dashboard.phase}`,
    `${pack.evidence.length} evidence summaries, ${pack.artifacts.length} accepted artifacts, ${pack.candidates.length} candidates, ${pack.sources.length} sources`,
    `Tasks: ${JSON.stringify(pack.dashboard.taskCounts)}`,
    `Next actions: ${pack.dashboard.nextActions.join('; ') || 'none recorded'}`,
  ].join('\n');
}

async function readOptionalPreview(path: string, maxChars: number): Promise<string | undefined> {
  try {
    return truncate(await readFile(path, 'utf-8'), maxChars);
  } catch {
    return undefined;
  }
}

function truncate(value: string, maxChars: number): string {
  if (value.length <= maxChars) return value;
  return value.slice(0, maxChars) + '\n... [truncated]';
}
