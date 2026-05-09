import { chmod, mkdir, readFile, rename, writeFile } from 'fs/promises';
import { basename, dirname, join } from 'path';
import { getMatterPath } from '../storage/matter.js';

const RESUME_SUMMARY_FILE = 'resume-summary.json';
const REDACTED = '[REDACTED]';

export interface ResumeToolCallSummary {
  id?: string;
  name?: string;
  input?: unknown;
  status?: string;
}

export interface ResumeSummary {
  lastUserGoal?: string;
  activePlan?: unknown;
  pendingToolCalls?: ResumeToolCallSummary[];
  lastModelVisibleSummary?: string;
  artifactPaths?: string[];
  failedOperation?: unknown;
  updatedAt: string;
}

export type ResumeSummaryInput = Omit<ResumeSummary, 'updatedAt'> & {
  updatedAt?: string;
};

export function getResumeSummaryPath(matterName: string): string {
  return getMatterPath(matterName, '_state', RESUME_SUMMARY_FILE);
}

export async function writeResumeSummary(
  matterName: string,
  summary: ResumeSummaryInput
): Promise<ResumeSummary> {
  const redacted = redactResumeValue(summary) as ResumeSummaryInput;
  const stored: ResumeSummary = {
    ...redacted,
    updatedAt: summary.updatedAt ?? new Date().toISOString(),
  };
  const filePath = getResumeSummaryPath(matterName);
  await mkdir(dirname(filePath), { recursive: true });
  const tmpPath = join(dirname(filePath), `.${basename(filePath)}.${process.pid}.${Date.now()}.tmp`);
  await writeFile(tmpPath, `${JSON.stringify(stored, null, 2)}\n`, { mode: 0o600, flag: 'wx' });
  await chmodIfSupported(tmpPath, 0o600);
  await rename(tmpPath, filePath);
  await chmodIfSupported(filePath, 0o600);
  return stored;
}

export async function readResumeSummary(matterName: string): Promise<ResumeSummary | null> {
  try {
    const raw = await readFile(getResumeSummaryPath(matterName), 'utf-8');
    return redactResumeValue(JSON.parse(raw)) as ResumeSummary;
  } catch {
    return null;
  }
}

export function redactResumeValue(value: unknown, keyHint = ''): unknown {
  if (value === null || value === undefined) return value;
  if (typeof value === 'string') {
    return shouldRedactKey(keyHint) ? REDACTED : redactSecretPatterns(value);
  }
  if (typeof value !== 'object') return value;
  if (Array.isArray(value)) {
    return value.map((entry) => redactResumeValue(entry, keyHint));
  }
  const output: Record<string, unknown> = {};
  for (const [key, entry] of Object.entries(value)) {
    output[key] = shouldRedactKey(key) ? REDACTED : redactResumeValue(entry, key);
  }
  return output;
}

function shouldRedactKey(key: string): boolean {
  return /api[_-]?key|auth|authorization|bearer|cookie|credential|oauth|password|secret|token/i.test(key);
}

function redactSecretPatterns(value: string): string {
  return value
    .replace(/\bBearer\s+[A-Za-z0-9._~+/-]+=*/gi, `Bearer ${REDACTED}`)
    .replace(/\b(?:sk|pk|rk|or|tvly|brv)-[A-Za-z0-9_-]{8,}\b/g, REDACTED)
    .replace(/\b[A-Za-z0-9._%+-]+_API_KEY\s*=\s*['"]?[^'"\s]+['"]?/gi, REDACTED);
}

async function chmodIfSupported(path: string, mode: number): Promise<void> {
  if (process.platform !== 'win32') {
    await chmod(path, mode);
  }
}
