import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { getMatterPath } from '../storage/matter.js';
import type { StoredToolResultMetadata, ToolResult } from '../types/tool.js';

export interface ToolResultStoreOptions {
  matterName?: string;
  runId?: string;
  baseDir?: string;
}

export interface StoreToolResultInput {
  toolCallId: string;
  toolName: string;
  content: string;
  result: ToolResult;
  previewChars: number;
  contentType?: string;
}

export interface StoredToolResultRecord {
  schemaVersion: 1;
  createdAt: string;
  toolCallId: string;
  toolName: string;
  originalByteLength: number;
  contentType: string;
  sha256: string;
  preview: string;
  result: ToolResult;
  output: string;
}

const DEFAULT_RUN_ID = 'ad-hoc';

export class ToolResultStore {
  private readonly baseDir: string;

  constructor(options: ToolResultStoreOptions = {}) {
    this.baseDir = options.baseDir ?? defaultToolResultDir(options.matterName, options.runId);
  }

  async store(input: StoreToolResultInput): Promise<StoredToolResultMetadata> {
    await mkdir(this.baseDir, { recursive: true });
    const fileName = `${safeSegment(input.toolCallId || input.toolName)}.json`;
    const absolutePath = join(this.baseDir, fileName);
    const originalByteLength = Buffer.byteLength(input.content, 'utf8');
    const preview = previewText(input.content, input.previewChars);
    const sha256 = createHash('sha256').update(input.content).digest('hex');
    const contentType = input.contentType ?? 'text/plain; charset=utf-8';
    const resultForRecord = stripStoredMetadata(input.result);
    const record: StoredToolResultRecord = {
      schemaVersion: 1,
      createdAt: new Date().toISOString(),
      toolCallId: input.toolCallId,
      toolName: input.toolName,
      originalByteLength,
      contentType,
      sha256,
      preview,
      result: resultForRecord,
      output: input.content,
    };
    await writeFile(absolutePath, JSON.stringify(record, null, 2) + '\n', 'utf-8');
    return {
      preview,
      truncated: true,
      storedResultPath: relative(process.cwd(), absolutePath),
      originalByteLength,
      contentType,
      toolCallId: input.toolCallId,
      toolName: input.toolName,
      sha256,
    };
  }
}

export async function readStoredToolResult(path: string): Promise<StoredToolResultRecord> {
  const raw = await readFile(path, 'utf-8');
  const parsed = JSON.parse(raw) as StoredToolResultRecord;
  if (parsed.schemaVersion !== 1 || typeof parsed.output !== 'string') {
    throw new Error(`Unsupported stored tool result format: ${path}`);
  }
  return parsed;
}

export function formatStoredToolResultForModel(metadata: StoredToolResultMetadata): string {
  return [
    metadata.preview,
    '',
    '[tool result persisted]',
    `storedResultPath=${metadata.storedResultPath}`,
    `originalByteLength=${metadata.originalByteLength}`,
    `contentType=${metadata.contentType}`,
    `sha256=${metadata.sha256}`,
    `Read the full result with read_tool_result({"path":"${metadata.storedResultPath}"}).`,
  ].join('\n');
}

function defaultToolResultDir(matterName: string | undefined, runId: string | undefined): string {
  const safeRunId = safeSegment(runId ?? DEFAULT_RUN_ID);
  if (matterName) {
    return getMatterPath(matterName, '_artifacts', 'tool-results', safeRunId);
  }
  return join('.harness', 'runs', safeRunId, 'tool-results');
}

function previewText(content: string, maxChars: number): string {
  if (content.length <= maxChars) return content;
  return `${content.slice(0, maxChars)}\n... [truncated preview; full tool result persisted]`;
}

function safeSegment(value: string): string {
  return value.replace(/[^A-Za-z0-9_.-]/g, '_').slice(0, 160) || 'result';
}

function stripStoredMetadata(result: ToolResult): ToolResult {
  const clone: ToolResult = { ...result };
  delete clone.storedResult;
  return clone;
}
