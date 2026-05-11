import { extractDeadlinesFromEmailText } from './email-ingest.js';

export type EmailTriageDisposition = 'draft_response' | 'acknowledge' | 'monitor' | 'human_review';

export interface EmailTriageInput {
  subject: string;
  body: string;
  from?: string;
  receivedAt?: string;
}

export interface EmailTriageResult {
  disposition: EmailTriageDisposition;
  urgency: 'low' | 'medium' | 'high';
  summary: string;
  extractedDeadlines: string[];
  requiresDraft: boolean;
  suggestedAction: string;
  suggestedActionType: 'send_email' | 'none';
}

export function summarizeEmailForDraft(content: string): string {
  const normalized = content.replace(/\s+/g, ' ').trim();
  if (normalized.length <= 140) {
    return normalized;
  }
  return `${normalized.slice(0, 139).trimEnd()}…`;
}

function buildBaseSummary(input: EmailTriageInput): string {
  return summarizeEmailForDraft(`${input.subject} ${input.body}`);
}

function matchesAny(patterns: RegExp[], value: string): boolean {
  return patterns.some((pattern) => pattern.test(value));
}

function inferUrgency(input: EmailTriageInput, now: Date): 'low' | 'medium' | 'high' {
  const normalized = `${input.subject} ${input.body}`.toLowerCase();
  const hasUrgentLanguage = /\b(urgent|asap|immediately|as soon as possible|today|by tomorrow|by 24h)\b/i.test(normalized);
  if (hasUrgentLanguage) {
    return 'high';
  }

  const deadlines = extractDeadlinesFromEmailText(`${input.subject} ${input.body}`);
  if (deadlines.length > 0) {
    const first = new Date(deadlines[0]!);
    const diffHours = (first.getTime() - now.getTime()) / (1000 * 60 * 60);
    if (diffHours > 0 && diffHours <= 24) {
      return 'high';
    }
    if (diffHours > 24 && diffHours <= 72) {
      return 'medium';
    }
    return 'low';
  }

  if (/\b(quick|soon|reply|respond|please)\b/i.test(normalized)) {
    return 'medium';
  }
  return 'low';
}

function classifyDisposition(input: EmailTriageInput): EmailTriageDisposition {
  const normalized = `${input.subject} ${input.body}`.toLowerCase();
  if (/\b(please|could you|can you|request|need|would you|kindly|send|provide|attach|forward)\b/i.test(normalized)) {
    return 'draft_response';
  }
  if (/\b(acknowledge|acknowledgment|thank you|thanks|received)\b/i.test(normalized)) {
    return 'acknowledge';
  }
  if (/\b(risk|unclear|ambiguous|not sure|sensitive|review required|legal)\b/i.test(normalized)) {
    return 'human_review';
  }
  return 'monitor';
}

export function triageIncomingEmail(input: EmailTriageInput): EmailTriageResult {
  const now = input.receivedAt ? new Date(input.receivedAt) : new Date();
  const normalized = `${input.subject} ${input.body}`;
  const deadlines = extractDeadlinesFromEmailText(normalized);
  const urgency = inferUrgency(input, now);
  const disposition = classifyDisposition(input);
  const requiresDraft = disposition === 'draft_response' || (disposition === 'human_review' && matchesAny([
    /response|reply|please|request/i,
    /\b(what should|how should|advise|recommend|recommendation)\b/i,
  ], normalized));
  const suggestedActionType = requiresDraft ? 'send_email' : 'none';
  const suggestedAction = requiresDraft
    ? `Prepare response draft for ${input.from ?? 'sender'}`
    : 'No immediate draft required.';

  return {
    disposition,
    urgency,
    summary: buildBaseSummary(input),
    extractedDeadlines: deadlines,
    requiresDraft,
    suggestedActionType,
    suggestedAction,
  };
}
