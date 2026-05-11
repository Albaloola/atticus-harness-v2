export type SourceClass =
  | 'primary_evidence'
  | 'court_or_tribunal_record'
  | 'official_policy_or_rule'
  | 'legal_authority'
  | 'user_statement'
  | 'transcript'
  | 'generated_work_product'
  | 'draft'
  | 'unknown';

export interface GroundingSourceLocation {
  section?: string;
  page?: number;
  startLine?: number;
  endLine?: number;
  timestamp?: string;
}

export interface GroundingSourceReference {
  sourceClass: SourceClass;
  sourceId: string;
  location?: GroundingSourceLocation;
  excerpt?: string;
  confidence?: number;
}

export interface SourceClassificationInput {
  sourceId: string;
  sourceType?: string;
  classificationHint?: string;
  notes?: string;
}

export const PRIMARY_EVIDENCE_SOURCE_CLASSES: SourceClass[] = [
  'primary_evidence',
  'court_or_tribunal_record',
  'official_policy_or_rule',
  'legal_authority',
  'transcript',
];

const GENERATED_WORK_TYPES = new Set(['generated_work_product', 'draft']);

const CASE_STATE_TO_SOURCE_CLASS: Record<string, SourceClass> = {
  file_evidence: 'primary_evidence',
  generated_draft: 'generated_work_product',
  user_statement: 'user_statement',
  other: 'unknown',
};

export function classifySource(input: SourceClassificationInput): SourceClass {
  const hinted = normalizeSourceClass(input.classificationHint);
  if (hinted) {
    return hinted;
  }

  const fromType = normalizeSourceClass(input.sourceType);
  if (fromType) {
    return fromType;
  }

  if (typeof input.sourceType === 'string') {
    const mapped = CASE_STATE_TO_SOURCE_CLASS[input.sourceType];
    if (mapped) {
      return mapped;
    }
  }

  if (typeof input.notes === 'string') {
    const normalizedNotes = input.notes.toLowerCase();
    if (normalizedNotes.includes('user statement') || normalizedNotes.includes('user assertion')) {
      return 'user_statement';
    }
    if (normalizedNotes.includes('generated') || normalizedNotes.includes('draft') || normalizedNotes.includes('candidate')) {
      return 'generated_work_product';
    }
    if (normalizedNotes.includes('transcript')) {
      return 'transcript';
    }
    if (normalizedNotes.includes('court record') || normalizedNotes.includes('tribunal record')) {
      return 'court_or_tribunal_record';
    }
    if (normalizedNotes.includes('policy') || normalizedNotes.includes('rule') || normalizedNotes.includes('regulation')) {
      return 'official_policy_or_rule';
    }
    if (normalizedNotes.includes('authority') || normalizedNotes.includes('case law') || normalizedNotes.includes('precedent')) {
      return 'legal_authority';
    }
  }

  if (sourceIdLooksGeneratedOrDraft(input.sourceId)) {
    return 'generated_work_product';
  }

  return 'unknown';
}

export function isPrimaryEvidenceSource(sourceClass: SourceClass): boolean {
  return PRIMARY_EVIDENCE_SOURCE_CLASSES.includes(sourceClass);
}

export function isDisallowedPrimarySource(sourceClass: SourceClass): boolean {
  return sourceClass === 'generated_work_product' || sourceClass === 'draft' || sourceClass === 'unknown' || sourceClass === 'user_statement';
}

export function isGeneratedOrDraftSource(sourceClass: SourceClass): boolean {
  return GENERATED_WORK_TYPES.has(sourceClass);
}

function normalizeSourceClass(raw?: string): SourceClass | undefined {
  if (!raw) return undefined;
  const normalized = raw.toLowerCase().trim();

  if (normalized === 'primary_evidence' || normalized === 'primary-evidence' || normalized === 'primary evidence') {
    return 'primary_evidence';
  }
  if (normalized === 'court_or_tribunal_record' || normalized === 'court_or_tribunal' || normalized === 'court record' || normalized === 'tribunal record') {
    return 'court_or_tribunal_record';
  }
  if (normalized === 'official_policy_or_rule' || normalized === 'official_policy' || normalized === 'policy_or_rule' || normalized === 'policy' || normalized === 'rule' || normalized === 'regulation') {
    return 'official_policy_or_rule';
  }
  if (normalized === 'legal_authority' || normalized === 'legal authority' || normalized === 'authority') {
    return 'legal_authority';
  }
  if (normalized === 'user_statement' || normalized === 'user statement') {
    return 'user_statement';
  }
  if (normalized === 'transcript') {
    return 'transcript';
  }
  if (normalized === 'generated_work_product' || normalized === 'generated_work_product_draft' || normalized === 'generated work product' || normalized === 'generated' || normalized === 'candidate') {
    return 'generated_work_product';
  }
  if (normalized === 'draft') {
    return 'draft';
  }
  if (normalized === 'file_evidence' || normalized === 'evidence' || normalized === 'document') {
    return 'primary_evidence';
  }
  return undefined;
}

function sourceIdLooksGeneratedOrDraft(sourceId: string): boolean {
  const lower = sourceId.toLowerCase();
  return lower.includes('draft') || lower.includes('candidate') || lower.includes('wp-');
}
