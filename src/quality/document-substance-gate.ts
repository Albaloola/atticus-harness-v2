import type { UnknownWorkProduct, WorkProductReadiness } from '../work-products/types.js';

export interface DocumentSubstanceIssue {
  code: string;
  path: string;
  message: string;
}

export interface DocumentSubstanceReport {
  valid: boolean;
  issues: DocumentSubstanceIssue[];
}

const SECTION_MARKERS = [
  /^#{1,6}\s+/m,
  /^\d+[.)]\s+/m,
  /^[-*]\s+/m,
  /(?:^|\n)\s*(Facts?|Issues?|Authorities?|Remedies?|Grounds?|Background|Conclusion|Next Action|Risk|Application|Recommendation)\s*:/i,
];

const STRUCTURE_REQUIRED_TYPES = new Set<UnknownWorkProduct['type']>([
  'intake_summary',
  'chronology',
  'evidence_matrix',
  'fact_finding_report',
  'issue_map',
  'authority_map',
  'legal_research_memo',
  'procedural_route_memo',
  'case_theory',
  'merits_opinion',
  'risk_register',
  'draft_pleading',
  'draft_complaint',
  'draft_letter',
  'draft_email',
  'witness_statement',
  'schedule_of_loss',
  'draft_order',
  'bundle_index',
  'war_room_pack',
  'operator_handoff',
  'review_ready_output_bundle',
]);

const DRAFT_TYPES_REQUIRING_EVIDENCE_CITATION = new Set<UnknownWorkProduct['type']>([
  'draft_pleading',
  'draft_complaint',
  'draft_letter',
  'draft_email',
  'witness_statement',
  'schedule_of_loss',
  'draft_order',
]);

export function hasCriticalDeadlineGap(product: UnknownWorkProduct): boolean {
  return product.unresolvedGaps.some(
    (gap) => /(critical|urgent)/i.test(gap) && /deadline/i.test(gap),
  );
}

function hasEvidenceCitation(product: UnknownWorkProduct): boolean {
  return (
    product.sourceBasis.some((basis) => basis.sourceType === 'evidence' && /\S/.test(basis.sourceId))
    || /\(\w{2,}[-–—]?\d+\)/.test(product.content)
    || /\b(?:EV|EVD|DOC)-\d+/i.test(product.content)
    || /\[[^\]]+\]\([^)]+\)/.test(product.content)
  );
}

export function evaluateDocumentSubstanceGate(
  product: UnknownWorkProduct,
  readiness: WorkProductReadiness,
): DocumentSubstanceReport {
  const issues: DocumentSubstanceIssue[] = [];

  if (!STRUCTURE_REQUIRED_TYPES.has(product.type)) {
    return { valid: true, issues };
  }

  const isSubstantialGate = readiness === 'operator_review_ready'
    || readiness === 'operator_review_ready_with_critical_gap'
    || readiness === 'execution_ready'
    || readiness === 'file_ready';
  if (!isSubstantialGate) {
    return { valid: true, issues };
  }

  if (product.content.trim().length < 400) {
    issues.push({
      code: 'SUBSTANCE_TOO_SHORT',
      path: 'content',
      message: 'Document substance is too short to be review ready.',
    });
  }

  const hasSectionMarker = SECTION_MARKERS.some((pattern) => pattern.test(product.content));
  const hasStructuredPayload = product.type === 'chronology'
    && Array.isArray((product.payload as { events?: unknown }).events)
    && ((product.payload as { events?: unknown[] }).events?.length ?? 0) > 0;
  if (!hasSectionMarker && !hasStructuredPayload) {
    issues.push({
      code: 'SUBSTANCE_NO_STRUCTURE',
      path: 'content',
      message: 'Document appears to lack sectioning, paragraph structure, or legal drafting markers.',
    });
  }

  if (product.purpose.trim().length < 10) {
    issues.push({
      code: 'SUBSTANCE_MISSING_PURPOSE',
      path: 'purpose',
      message: 'Purpose is too short to be review ready.',
    });
  }

  if (DRAFT_TYPES_REQUIRING_EVIDENCE_CITATION.has(product.type) && !hasEvidenceCitation(product)) {
    issues.push({
      code: 'SUBSTANCE_NO_EVIDENCE_CITATION',
      path: 'sourceBasis',
      message: 'Draft documents that may be reviewed or filed must cite supporting evidence.',
    });
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}
