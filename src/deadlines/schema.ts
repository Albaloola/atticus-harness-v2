export type DeadlineCategory =
  | 'limitation_or_prescription'
  | 'judicial_review'
  | 'university_internal_appeal'
  | 'ombudsman_or_complaint'
  | 'court_service'
  | 'email_response'
  | 'user_reminder'
  | 'other';

export type DeadlineUrgency = 'low' | 'medium' | 'high' | 'critical';

export type DeadlineStatus = 'pending' | 'met' | 'missed' | 'unknown';

export interface BaseDeadline {
  deadlineId: string;
  matterName: string;
  category: DeadlineCategory;
  description: string;
  dueAt: string;
  critical: boolean;
  status: DeadlineStatus;
  source: string;
  confidence: number;
  createdAt: string;
  updatedAt: string;
  sourceReference?: string;
  notes?: string;
  urgency?: DeadlineUrgency;
  isCalculated?: boolean;
}

export interface DeadlineCalculationInput {
  matterName: string;
  category: DeadlineCategory;
  description: string;
  dueAt: string;
  critical: boolean;
  source: string;
  confidence: number;
  status?: DeadlineStatus;
  sourceReference?: string;
  notes?: string;
  urgency?: DeadlineUrgency;
  isCalculated?: boolean;
}

export interface DeadlineEngineResult {
  calculated: BaseDeadline[];
  questions: string[];
  uncertaintyNotes: string[];
}
