import { createHash } from 'node:crypto';
import { createCaseState } from '../case-state/mutations.js';
import type { CaseStateMutationContext } from '../case-state/schema.js';
import { applyCaseStateMutation } from '../case-state/store.js';

export interface EmailIngestInput {
  matterName: string;
  subject: string;
  body: string;
  from?: string;
  to?: string;
  messageId?: string;
  receivedAt?: string;
  source?: string;
  actor?: string;
  runId?: string;
  confidence?: number;
}

export interface ExtractedDeadline {
  source: string;
  dueAt: string;
}

export interface EmailIngestResult {
  communicationId: string;
  summary: string;
  deadlineAt?: string;
  extractedDeadlines: string[];
}

const SOURCE_FALLBACK = 'email-ingest';
const SUMMARY_MAX_LENGTH = 160;
const MONTH_BY_NAME: Record<string, number> = {
  jan: 1,
  january: 1,
  feb: 2,
  february: 2,
  mar: 3,
  march: 3,
  apr: 4,
  april: 4,
  may: 5,
  jun: 6,
  june: 6,
  jul: 7,
  july: 7,
  aug: 8,
  august: 8,
  sep: 9,
  sept: 9,
  september: 9,
  oct: 10,
  october: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,
};

function normalizeContext(
  input: EmailIngestInput,
  action: 'ingest-email',
): CaseStateMutationContext {
  return {
    source: input.source ?? SOURCE_FALLBACK,
    actor: input.actor ?? 'agent',
    runId: input.runId,
    confidence: input.confidence ?? 0.9,
    summary: `${action} for ${input.matterName}`,
  };
}

function normalizeText(value: string): string {
  return value
    .replace(/\r\n/g, '\n')
    .replace(/\t+/g, ' ')
    .replace(/[ ]+/g, ' ')
    .trim();
}

function isValidYmdDate(year: number, month: number, day: number): boolean {
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }
  const utc = new Date(Date.UTC(year, month - 1, day));
  return utc.getUTCFullYear() === year && utc.getUTCMonth() + 1 === month && utc.getUTCDate() === day;
}

function deterministicId(prefix: string, ...parts: string[]): string {
  const hash = createHash('sha256')
    .update(parts.join('|'))
    .digest('hex')
    .slice(0, 12);
  return `${prefix}-${hash}`;
}

function deriveCommunicationSeed(input: EmailIngestInput): string {
  if (input.messageId) {
    return `message:${input.messageId}`;
  }

  return `${input.from ?? 'unknown'}|${input.subject}|${input.body}|${input.receivedAt ?? ''}`;
}

function summarizeEmail(subject: string, body: string): string {
  const normalized = normalizeText(`${subject} ${body}`);
  if (normalized.length <= SUMMARY_MAX_LENGTH) {
    return normalized;
  }
  return `${normalized.slice(0, SUMMARY_MAX_LENGTH - 1).trimEnd()}…`;
}

function toIsoDate(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T00:00:00.000Z`;
}

function parseDateText(raw: string): string | undefined {
  const cleaned = raw.replace(/(\d+)(st|nd|rd|th)/gi, '$1');
  const trimmed = normalizeText(cleaned);
  if (!trimmed) {
    return undefined;
  }

  const ymd = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (ymd) {
    const year = Number(ymd[1]);
    const month = Number(ymd[2]);
    const day = Number(ymd[3]);
    if (!isValidYmdDate(year, month, day)) {
      return undefined;
    }
    return toIsoDate(year, month, day);
  }

  const ymdSlash = /^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/.exec(trimmed);
  if (ymdSlash) {
    const year = Number(ymdSlash[1]);
    const month = Number(ymdSlash[2]);
    const day = Number(ymdSlash[3]);
    if (!isValidYmdDate(year, month, day)) {
      return undefined;
    }
    return toIsoDate(year, month, day);
  }

  const dmy = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/.exec(trimmed);
  if (dmy) {
    const year = Number(dmy[3]);
    const month = Number(dmy[2]);
    const day = Number(dmy[1]);
    if (!isValidYmdDate(year, month, day)) {
      return undefined;
    }
    return toIsoDate(year, month, day);
  }

  const monthNameFirst = /^\s*(\d{1,2})\s+(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)\s*,?\s+(\d{4})$/i.exec(trimmed);
  if (monthNameFirst) {
    const day = Number(monthNameFirst[1]);
    const month = MONTH_BY_NAME[monthNameFirst[2]!.toLowerCase()];
    const year = Number(monthNameFirst[3]);
    if (Number.isInteger(month) && Number.isInteger(day) && Number.isInteger(year) && isValidYmdDate(year, month, day)) {
      return toIsoDate(year, month, day);
    }
  }

  const monthNameLast = /^(jan|january|feb|february|mar|march|apr|april|may|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)\s+(\d{1,2})[,]?\s+(\d{4})$/i.exec(trimmed);
  if (monthNameLast) {
    const month = MONTH_BY_NAME[monthNameLast[1]!.toLowerCase()];
    const day = Number(monthNameLast[2]);
    const year = Number(monthNameLast[3]);
    if (Number.isInteger(month) && Number.isInteger(day) && Number.isInteger(year) && isValidYmdDate(year, month, day)) {
      return toIsoDate(year, month, day);
    }
  }

  const parsed = Date.parse(trimmed);
  if (Number.isNaN(parsed)) {
    return undefined;
  }
  const parsedDate = new Date(parsed);
  return `${parsedDate.getUTCFullYear()}-${String(parsedDate.getUTCMonth() + 1).padStart(2, '0')}-${String(parsedDate.getUTCDate()).padStart(2, '0')}T00:00:00.000Z`;
}

function dedupeSortedDates(dates: string[]): string[] {
  const unique = [...new Set(dates)];
  unique.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  return unique.filter((value) => !Number.isNaN(new Date(value).getTime()));
}

export function extractDeadlinesFromEmailText(content: string): string[] {
  const normalized = normalizeText(content);
  const candidates = new Set<string>();
  const patterns = [
    /(?:by|before|until|due\s+by|respond\s+by|reply\s+by)\s*([0-9]{4}-[0-9]{2}-[0-9]{2})/gi,
    /(?:by|before|until|due\s+by|respond\s+by|reply\s+by)\s*([0-9]{4}[\/-][0-9]{1,2}[\/-][0-9]{1,2})/gi,
    /(?:by|before|until|due\s+by|respond\s+by|reply\s+by)\s*(\d{1,2}[\/-]\d{1,2}[\/-]\d{4})/gi,
    /(?:by|before|until|due\s+by|respond\s+by|reply\s+by)\s*([a-z]{3,9}\s+\d{1,2},?\s+\d{4})/gi,
    /(?:by|before|until|due\s+by|respond\s+by|reply\s+by)\s*(\d{1,2}\s+[a-z]{3,9},?\s+\d{4})/gi,
  ];

  for (const pattern of patterns) {
    for (const match of normalized.matchAll(pattern)) {
      const matched = match[1];
      if (!matched) continue;
      const parsed = parseDateText(matched);
      if (!parsed) continue;
      candidates.add(parsed);
    }
  }

  return dedupeSortedDates(Array.from(candidates));
}

export function extractDeadlineFromEmailText(content: string): string | undefined {
  return extractDeadlinesFromEmailText(content)[0];
}

async function upsertIncomingEmailCommunication(input: {
  matterName: string;
  communicationId: string;
  subject: string;
  summary: string;
  from?: string;
  receivedAt: string;
  context: CaseStateMutationContext;
}): Promise<void> {
  await applyCaseStateMutation(
    {
      matterName: input.matterName,
      source: input.context.source,
      actor: input.context.actor,
      runId: input.context.runId,
      type: 'case.communication_added',
      summary: `Recorded incoming email ${input.communicationId}`,
      confidence: input.context.confidence,
    },
    (state) => {
      if (state.communications.some((entry) => entry.communicationId === input.communicationId)) {
        return state;
      }
      return {
        ...state,
        communications: [
          ...state.communications,
          {
            communicationId: input.communicationId,
            type: 'incoming',
            channel: 'email',
            subject: input.subject,
            summary: input.summary,
            occurredAt: input.receivedAt,
          },
        ],
      };
    },
  );
}

async function upsertEmailDeadline(input: {
  matterName: string;
  deadlineAt: string;
  source: string;
  from?: string;
  subject: string;
  communicationId: string;
  context: CaseStateMutationContext;
}): Promise<boolean> {
  const description = `Email response deadline from ${input.from ?? 'sender'}: ${input.subject}`;
  const deadlineId = deterministicId('deadline', input.matterName, input.communicationId, input.deadlineAt);

  await applyCaseStateMutation(
    {
      matterName: input.matterName,
      source: input.context.source,
      actor: input.context.actor,
      runId: input.context.runId,
      type: 'case.deadline_added',
      confidence: input.context.confidence,
      summary: `Recorded deadline from inbound email ${input.subject}`,
    },
    (state) => {
      if (state.deadlines.some((deadline) => deadline.description === description && deadline.dueAt === input.deadlineAt)) {
        return state;
      }
      return {
        ...state,
        deadlines: [
          ...state.deadlines,
          {
            deadlineId,
            description,
            dueAt: input.deadlineAt,
            critical: false,
            status: 'pending',
            source: input.source,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    },
  );

  return true;
}

export async function ingestIncomingEmail(input: EmailIngestInput): Promise<EmailIngestResult> {
  if (!input.subject.trim()) {
    throw new Error('Email subject is required for ingest.');
  }
  if (!input.body.trim()) {
    throw new Error('Email body is required for ingest.');
  }

  const context = normalizeContext(input, 'ingest-email');
  await createCaseState({
    matterName: input.matterName,
    context: {
      source: context.source,
      actor: context.actor,
      runId: context.runId,
      confidence: context.confidence,
      summary: context.summary,
    },
  });

  const occurredAt = input.receivedAt ?? new Date().toISOString();
  const summary = summarizeEmail(input.subject, input.body);
  const communicationId = deterministicId(
    'email-inbound',
    input.matterName,
    deriveCommunicationSeed(input),
  );

  await upsertIncomingEmailCommunication({
    matterName: input.matterName,
    communicationId,
    subject: input.subject,
    summary,
    from: input.from,
    receivedAt: occurredAt,
    context,
  });

  const content = `${input.subject}\n${input.body}`;
  const extractedDeadlines = extractDeadlinesFromEmailText(content);

  let deadlineAt: string | undefined;
  if (extractedDeadlines.length > 0) {
    deadlineAt = extractedDeadlines[0];
    await upsertEmailDeadline({
      matterName: input.matterName,
      deadlineAt,
      source: context.source,
      from: input.from,
      subject: input.subject,
      communicationId,
      context,
    });
  }

  return {
    communicationId,
    summary,
    deadlineAt,
    extractedDeadlines,
  };
}
