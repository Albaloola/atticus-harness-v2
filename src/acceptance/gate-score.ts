import type { CandidateArtifact, CitationRef } from '../types/artifact.js';
import type { ReviewSeverity } from '../types/review.js';

export interface GateCheck {
  name: string;
  score: number;
  weight: number;
  passed: boolean;
  details?: string;
}

export interface GateResult {
  score: number;
  checks: GateCheck[];
  passed: boolean;
}

export interface GateScoringContext {
  citationResult?: {
    passed: boolean;
    summary?: { total: number; supported: number; unsupported: number; contradicted: number; notChecked: number };
  };
  reviewSeverity?: ReviewSeverity;
  reviewFindings?: number;
  evidenceDates?: string[];
  artifactType?: string;
  requiredFields?: string[];
  operatorHandoffNotes?: string;
}

const GATE_WEIGHTS: Record<string, number> = {
  citationCoverage: 0.15,
  quoteVerification: 0.15,
  evidenceContradiction: 0.15,
  datesDeadlines: 0.10,
  jurisdictionCompliance: 0.10,
  requiredFields: 0.10,
  adversarialReview: 0.10,
  sourceFreshness: 0.05,
  hallucinationSensitivity: 0.05,
  operatorHandoffClarity: 0.05,
};

const JURISDICTION_KEYWORDS = [
  /court/i, /jurisdiction/i, /venue/i, /forum/i,
  /statute/i, /code\s+of/i, /rule\s+\d/i, /section\s+\d/i,
  /civil\s+procedure/i, /rules\s+of\s+court/i, /local\s+rule/i,
  /federal\s+rule/i, /standing\s+order/i, /practice\s+note/i,
];

const DATE_PATTERNS = [
  /\d{1,2}\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{4}/gi,
  /\d{4}-\d{2}-\d{2}/g,
  /\d{1,2}\/\d{1,2}\/\d{2,4}/g,
];

const HALLUCINATION_SIGNALS = [
  /nonexistent/i,
  /according to sources? that (?:do|are) not exist/i,
  /citation[s]? unavailable/i,
  /\[citation needed\]/i,
  /source[s]? unknown/i,
  /undocumented/i,
  /unverified assumption/i,
  /alleged(?:ly)? without evidence/i,
];

export function computeGateScore(
  candidate: CandidateArtifact,
  context: GateScoringContext
): GateResult {
  const checks: GateCheck[] = [];
  const content = candidate.content || '';
  const citations = candidate.metadata.citations || [];

  checks.push(scoreCitationCoverage(content, citations));
  checks.push(scoreQuoteVerification(context));
  checks.push(scoreEvidenceContradiction(context));
  checks.push(scoreDatesDeadlines(content, context));
  checks.push(scoreJurisdictionCompliance(content));
  checks.push(scoreRequiredFields(content, context));
  checks.push(scoreAdversarialReview(context));
  checks.push(scoreSourceFreshness(context));
  checks.push(scoreHallucinationSensitivity(content));
  checks.push(scoreOperatorHandoffClarity(content, context));

  const weightedScore = checks.reduce((sum, c) => sum + c.score * c.weight, 0);
  const totalWeight = checks.reduce((sum, c) => sum + c.weight, 0);
  const score = totalWeight > 0 ? weightedScore / totalWeight : 0;

  return {
    score: Math.round(score * 1000) / 1000,
    checks,
    passed: score >= 0.5,
  };
}

function scoreCitationCoverage(content: string, citations: CitationRef[]): GateCheck {
  const weight = GATE_WEIGHTS.citationCoverage;
  const uniqueCited = new Set(citations.map(c => c.citationId)).size;
  const inlineRefs = (content.match(/\[([A-Z]+-SRC-\d+)\]/g) || []).length;

  if (uniqueCited === 0 && inlineRefs === 0) {
    return { name: 'Citation coverage', score: 0, weight, passed: false, details: 'No citations found' };
  }

  const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
  const refsPerWord = wordCount > 0 ? (inlineRefs / wordCount) * 1000 : 0;

  if (refsPerWord >= 2) {
    return { name: 'Citation coverage', score: 1.0, weight, passed: true, details: `${inlineRefs} inline references (dense)` };
  }
  if (refsPerWord >= 0.5) {
    return { name: 'Citation coverage', score: 0.8, weight, passed: true, details: `${inlineRefs} inline references (adequate)` };
  }
  if (uniqueCited >= 1) {
    return { name: 'Citation coverage', score: 0.5, weight, passed: true, details: `${uniqueCited} unique citations (sparse)` };
  }
  return { name: 'Citation coverage', score: 0.2, weight, passed: false, details: 'No inline citation references detected' };
}

function scoreQuoteVerification(context: GateScoringContext): GateCheck {
  const weight = GATE_WEIGHTS.quoteVerification;
  const cr = context.citationResult;

  if (!cr || !cr.summary) {
    return { name: 'Quote verification', score: 0.5, weight, passed: false, details: 'No citation verification result available' };
  }

  const { total, supported, unsupported, contradicted } = cr.summary;
  if (total === 0) {
    return { name: 'Quote verification', score: 0, weight, passed: false, details: 'No citations to verify' };
  }

  const supportedRatio = supported / total;
  const contradictionPenalty = contradicted > 0 ? contradicted / total * 0.5 : 0;

  if (contradicted > 0) {
    const score = Math.max(0, supportedRatio - contradictionPenalty);
    return { name: 'Quote verification', score, weight, passed: false, details: `${contradicted} contradicted; ${unsupported} unsupported; ${supported} supported` };
  }

  if (unsupported > 0) {
    const score = Math.max(0, supportedRatio * 0.7);
    return { name: 'Quote verification', score, weight, passed: false, details: `${unsupported} unsupported; ${supported} supported out of ${total}` };
  }

  return { name: 'Quote verification', score: 1.0, weight, passed: true, details: `All ${total} citations verified` };
}

function scoreEvidenceContradiction(context: GateScoringContext): GateCheck {
  const weight = GATE_WEIGHTS.evidenceContradiction;
  const cr = context.citationResult;

  if (!cr || !cr.summary) {
    return { name: 'Evidence contradiction', score: 0.5, weight, passed: false, details: 'No contradiction data available' };
  }

  const { contradicted, total } = cr.summary;
  if (total === 0) {
    return { name: 'Evidence contradiction', score: 0.5, weight, passed: false, details: 'No citations to check for contradiction' };
  }

  const contradictionRatio = contradicted / total;
  if (contradictionRatio === 0) {
    return { name: 'Evidence contradiction', score: 1.0, weight, passed: true, details: 'No contradictions found' };
  }
  if (contradictionRatio <= 0.1) {
    return { name: 'Evidence contradiction', score: 0.7, weight, passed: true, details: `${contradicted} minor contradiction(s)` };
  }
  if (contradictionRatio <= 0.25) {
    return { name: 'Evidence contradiction', score: 0.4, weight, passed: false, details: `${contradicted} contradictions (${Math.round(contradictionRatio * 100)}% of citations)` };
  }

  return { name: 'Evidence contradiction', score: 0, weight, passed: false, details: `${contradicted} contradictions (severe — ${Math.round(contradictionRatio * 100)}% of citations)` };
}

function scoreDatesDeadlines(content: string, context: GateScoringContext): GateCheck {
  const weight = GATE_WEIGHTS.datesDeadlines;

  const datesFound: string[] = [];
  for (const pattern of DATE_PATTERNS) {
    const matches = content.match(pattern);
    if (matches) datesFound.push(...matches);
  }

  if (datesFound.length === 0) {
    return { name: 'Dates/deadlines', score: 0.2, weight, passed: false, details: 'No dates found in document' };
  }

  const hasDeadline = /deadline|due\s+(?:by|on|date)|filing\s+date|response\s+due|must\s+(?:file|serve|respond)\s+(?:by|within|on|no\s+later)/i.test(content);
  const hasPastTenseDates = /\b(?:filed|served|executed|entered|signed)\s+on/i.test(content);

  if (hasDeadline && datesFound.length >= 2) {
    return { name: 'Dates/deadlines', score: 1.0, weight, passed: true, details: `${datesFound.length} dates including deadlines` };
  }
  if (hasPastTenseDates && datesFound.length >= 2) {
    return { name: 'Dates/deadlines', score: 0.8, weight, passed: true, details: `${datesFound.length} dates with timeline context` };
  }
  if (datesFound.length >= 3) {
    return { name: 'Dates/deadlines', score: 0.7, weight, passed: true, details: `${datesFound.length} dates (no explicit deadlines)` };
  }

  return { name: 'Dates/deadlines', score: 0.5, weight, passed: false, details: `${datesFound.length} date(s) (may need more deadline context)` };
}

function scoreJurisdictionCompliance(content: string): GateCheck {
  const weight = GATE_WEIGHTS.jurisdictionCompliance;

  let matchCount = 0;
  for (const pattern of JURISDICTION_KEYWORDS) {
    if (pattern.test(content)) matchCount++;
  }

  if (matchCount >= 4) {
    return { name: 'Jurisdiction/procedure', score: 1.0, weight, passed: true, details: 'Strong jurisdiction references' };
  }
  if (matchCount >= 2) {
    return { name: 'Jurisdiction/procedure', score: 0.7, weight, passed: true, details: 'Adequate jurisdiction references' };
  }
  if (matchCount >= 1) {
    return { name: 'Jurisdiction/procedure', score: 0.4, weight, passed: false, details: 'Minimal jurisdiction references' };
  }

  return { name: 'Jurisdiction/procedure', score: 0.2, weight, passed: false, details: 'No jurisdiction or procedural references detected' };
}

function scoreRequiredFields(content: string, context: GateScoringContext): GateCheck {
  const weight = GATE_WEIGHTS.requiredFields;

  const required = context.requiredFields || [];
  if (required.length === 0) {
    const hasTitle = /^#\s/m.test(content);
    const hasBody = content.split(/\s+/).filter(w => w.length > 0).length >= 50;
    const hasHeading = /^#{1,3}\s/m.test(content);

    if (hasTitle && hasBody && hasHeading) {
      return { name: 'Required fields', score: 1.0, weight, passed: true, details: 'Document has title, body, and structure' };
    }
    if (hasBody) {
      return { name: 'Required fields', score: 0.6, weight, passed: true, details: 'Document has body content' };
    }
    return { name: 'Required fields', score: 0.2, weight, passed: false, details: 'Document may be incomplete' };
  }

  const present = required.filter(field => content.toLowerCase().includes(field.toLowerCase()));
  const ratio = present.length / required.length;

  if (ratio >= 0.9) {
    return { name: 'Required fields', score: 1.0, weight, passed: true, details: `${present.length}/${required.length} required fields present` };
  }
  if (ratio >= 0.7) {
    return { name: 'Required fields', score: 0.7, weight, passed: true, details: `${present.length}/${required.length} required fields present` };
  }
  if (ratio >= 0.5) {
    return { name: 'Required fields', score: 0.4, weight, passed: false, details: `${present.length}/${required.length} required fields (missing ${required.length - present.length})` };
  }

  return { name: 'Required fields', score: 0, weight, passed: false, details: `Only ${present.length}/${required.length} required fields present` };
}

function scoreAdversarialReview(context: GateScoringContext): GateCheck {
  const weight = GATE_WEIGHTS.adversarialReview;

  if (!context.reviewSeverity) {
    return { name: 'Adversarial review', score: 0, weight, passed: false, details: 'No hostile review performed' };
  }

  switch (context.reviewSeverity) {
    case 'info':
      return { name: 'Adversarial review', score: 1.0, weight, passed: true, details: 'Review: informational findings only' };
    case 'low':
      return { name: 'Adversarial review', score: 0.9, weight, passed: true, details: 'Review: low-severity findings' };
    case 'medium':
      return { name: 'Adversarial review', score: 0.6, weight, passed: true, details: 'Review: medium-severity findings' };
    case 'high':
      return { name: 'Adversarial review', score: 0.3, weight, passed: false, details: 'Review: high-severity findings — operator review recommended' };
    case 'critical':
      return { name: 'Adversarial review', score: 0, weight, passed: false, details: 'CRITICAL review findings — automatic rejection required' };
    default:
      return { name: 'Adversarial review', score: 0, weight, passed: false, details: 'Unknown review severity' };
  }
}

function scoreSourceFreshness(context: GateScoringContext): GateCheck {
  const weight = GATE_WEIGHTS.sourceFreshness;

  const dates = context.evidenceDates || [];
  if (dates.length === 0) {
    return { name: 'Source freshness', score: 0.5, weight, passed: false, details: 'No evidence dates available for freshness check' };
  }

  const now = new Date();
  const oneYearMs = 365 * 24 * 60 * 60 * 1000;
  const threeYearsMs = 3 * oneYearMs;
  const fiveYearsMs = 5 * oneYearMs;

  let recent = 0;
  let stale = 0;
  let veryStale = 0;

  for (const d of dates) {
    const parsed = new Date(d);
    if (isNaN(parsed.getTime())) continue;
    const age = now.getTime() - parsed.getTime();
    if (age <= oneYearMs) recent++;
    else if (age <= threeYearsMs) stale++;
    else if (age > fiveYearsMs) veryStale++;
  }

  const valid = recent + stale + veryStale;
  if (valid === 0) {
    return { name: 'Source freshness', score: 0.5, weight, passed: false, details: 'Could not parse evidence dates' };
  }

  const recentRatio = recent / valid;

  if (recentRatio >= 0.8) {
    return { name: 'Source freshness', score: 1.0, weight, passed: true, details: `${recent}/${valid} sources within 1 year` };
  }
  if (recentRatio >= 0.5) {
    return { name: 'Source freshness', score: 0.7, weight, passed: true, details: `${recent}/${valid} sources within 1 year, ${stale + veryStale} older` };
  }
  if (veryStale > valid * 0.3) {
    return { name: 'Source freshness', score: 0.2, weight, passed: false, details: `${veryStale}/${valid} sources over 5 years old` };
  }

  return { name: 'Source freshness', score: 0.4, weight, passed: false, details: `${recent}/${valid} recent; ${stale + veryStale} stale` };
}

function scoreHallucinationSensitivity(content: string): GateCheck {
  const weight = GATE_WEIGHTS.hallucinationSensitivity;

  let signalCount = 0;
  const matches: string[] = [];

  for (const signal of HALLUCINATION_SIGNALS) {
    const m = content.match(signal);
    if (m) {
      signalCount++;
      matches.push(m[0]);
    }
  }

  if (signalCount === 0) {
    return { name: 'Hallucination sensitivity', score: 1.0, weight, passed: true, details: 'No hallucination signals detected' };
  }
  if (signalCount === 1) {
    return { name: 'Hallucination sensitivity', score: 0.6, weight, passed: false, details: `1 potential hallucination signal: "${matches[0]}"` };
  }
  if (signalCount <= 3) {
    return { name: 'Hallucination sensitivity', score: 0.3, weight, passed: false, details: `${signalCount} hallucination signals detected` };
  }

  return { name: 'Hallucination sensitivity', score: 0, weight, passed: false, details: `${signalCount} hallucination signals — high risk of fabricated content` };
}

function scoreOperatorHandoffClarity(content: string, context: GateScoringContext): GateCheck {
  const weight = GATE_WEIGHTS.operatorHandoffClarity;

  const hasActionItems = /(?:action|next\s+step|todo|instruction|operator|dispatch|send|file|submit)[\s:]/i.test(content);
  const hasChecklist = /\d+\.\s|[-*]\s(?=.*action|.*step|.*task|.*file|.*send)/i.test(content);
  const hasOperatorNotes = context.operatorHandoffNotes && context.operatorHandoffNotes.length > 0;

  if (hasActionItems && hasChecklist) {
    return { name: 'Operator handoff', score: 1.0, weight, passed: true, details: 'Clear action items with checklist' };
  }
  if (hasActionItems || hasOperatorNotes) {
    return { name: 'Operator handoff', score: 0.7, weight, passed: true, details: 'Action items present but could be clearer' };
  }
  if (content.length > 0) {
    return { name: 'Operator handoff', score: 0.3, weight, passed: false, details: 'No explicit operator handoff or action items' };
  }

  return { name: 'Operator handoff', score: 0, weight, passed: false, details: 'No content to assess' };
}
