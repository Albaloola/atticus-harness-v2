export interface ScotlandJudicialReviewInputs {
  decisionDate: string;
  now?: string;
}

export interface ScotlandJudicialReviewResult {
  deadlineAt: string;
  daysUntilDeadline: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  status: 'ok' | 'urgent' | 'missed';
  confidence: number;
}

export const JUDICIAL_REVIEW_DAYS = 90;
const HIGH_URGENCY_DAYS = 21;
const MEDIUM_URGENCY_DAYS = 42;

function addDays(date: string, days: number): string {
  const parsed = new Date(date);
  const next = new Date(parsed.getTime());
  next.setUTCDate(parsed.getUTCDate() + days);
  return next.toISOString();
}

export function assessScotlandJudicialReviewUrgency(input: ScotlandJudicialReviewInputs): ScotlandJudicialReviewResult {
  const parsedDecision = new Date(input.decisionDate);
  if (Number.isNaN(parsedDecision.getTime())) {
    return {
      deadlineAt: '',
      daysUntilDeadline: Number.NaN,
      urgency: 'critical',
      status: 'missed',
      confidence: 0,
    };
  }

  const now = new Date(input.now ?? new Date().toISOString());
  const dueAt = addDays(parsedDecision.toISOString(), JUDICIAL_REVIEW_DAYS);
  const due = new Date(dueAt);
  const daysUntilDeadline = Math.floor((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  const urgency: ScotlandJudicialReviewResult['urgency'] =
    daysUntilDeadline <= HIGH_URGENCY_DAYS ? 'critical' : daysUntilDeadline <= MEDIUM_URGENCY_DAYS ? 'high' : 'medium';
  const status: ScotlandJudicialReviewResult['status'] = daysUntilDeadline < 0 ? 'missed' : urgency === 'critical' ? 'urgent' : 'ok';

  return {
    deadlineAt: dueAt,
    daysUntilDeadline,
    urgency,
    status,
    confidence: 0.85,
  };
}
