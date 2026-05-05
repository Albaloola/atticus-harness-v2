import { readFile } from 'fs/promises';
import { getExtractionPath, listEvidence } from '../storage/evidence.js';
import type { CandidateArtifact, CitationRef } from '../types/artifact.js';
import type { CitationCheck, CitationResult, CitationSupportStatus } from '../types/citation.js';

const INLINE_CITATION_REGEX = /\[([A-Z][A-Z0-9_-]*-\d+)\]/g;
const CONTEXT_CHARS = 240;

interface CitationCandidate {
  citationId: string;
  evidenceId: string;
  quote: string;
}

export async function verifyCandidateCitations(
  matterName: string,
  candidate: Pick<CandidateArtifact, 'id' | 'content' | 'metadata'>,
): Promise<CitationResult> {
  const knownEvidenceIds = new Set((await listEvidence(matterName).catch(() => [])).map((e) => e.id));
  const citationCandidates = collectCitationCandidates(candidate);
  const checks: CitationCheck[] = [];

  if (citationCandidates.length === 0) {
    return makeResult(candidate.id, checks);
  }

  let index = 0;
  for (const citation of citationCandidates) {
    if (!knownEvidenceIds.has(citation.evidenceId)) {
      checks.push(makeCheck(citation, index++, 'unsupported', 0, 'Evidence source not found in matter index'));
      continue;
    }

    let sourceText = '';
    try {
      sourceText = await readFile(getExtractionPath(matterName, citation.evidenceId), 'utf-8');
    } catch {
      checks.push(makeCheck(citation, index++, 'unsupported', 0, 'Evidence extraction file not found'));
      continue;
    }

    const match = scoreQuoteAgainstSource(citation.quote, sourceText);
    checks.push(makeCheck(citation, index++, match.status, match.confidence, match.details));
  }

  return makeResult(candidate.id, checks);
}

export function collectCitationCandidates(
  candidate: Pick<CandidateArtifact, 'content' | 'metadata'>,
): CitationCandidate[] {
  const citations = new Map<string, CitationCandidate>();
  const metadataCitations = Array.isArray(candidate.metadata.citations)
    ? candidate.metadata.citations as CitationRef[]
    : [];

  for (const citation of metadataCitations) {
    const evidenceId = citation.evidenceId || citation.citationId;
    if (!evidenceId) continue;
    const quote = citation.quote?.trim() || extractCitationContext(candidate.content, citation.citationId) || '';
    citations.set(`${citation.citationId}:${evidenceId}:${quote}`, {
      citationId: citation.citationId || evidenceId,
      evidenceId,
      quote,
    });
  }

  let match: RegExpExecArray | null;
  while ((match = INLINE_CITATION_REGEX.exec(candidate.content)) !== null) {
    const citationId = match[1];
    const quote = extractCitationContextAt(candidate.content, match.index, match[0].length);
    citations.set(`${citationId}:${citationId}:${quote}`, {
      citationId,
      evidenceId: citationId,
      quote,
    });
  }

  return [...citations.values()];
}

export function scoreQuoteAgainstSource(
  quote: string,
  sourceText: string,
): { status: CitationSupportStatus; confidence: number; details: string } {
  const normalizedQuote = normalizeText(quote);
  const normalizedSource = normalizeText(sourceText);

  if (normalizedQuote.length < 12) {
    return {
      status: 'not_checked',
      confidence: 0,
      details: 'Quoted context is too short for reliable verification',
    };
  }

  if (normalizedSource.includes(normalizedQuote)) {
    return {
      status: 'supported',
      confidence: 0.95,
      details: 'Normalized quote found exactly in source evidence',
    };
  }

  const quoteTokens = tokenize(normalizedQuote).filter((token) => token.length > 2);
  const sourceTokens = tokenize(normalizedSource);
  if (quoteTokens.length === 0 || sourceTokens.length === 0) {
    return {
      status: 'not_checked',
      confidence: 0,
      details: 'No comparable text tokens available after normalization',
    };
  }

  const sourceTokenSet = new Set(sourceTokens);
  const matched = quoteTokens.filter((token) => sourceTokenSet.has(token));
  const coverage = matched.length / quoteTokens.length;
  const sequenceCoverage = longestContiguousTokenCoverage(quoteTokens, sourceTokens);
  const confidence = Math.max(coverage * 0.75, sequenceCoverage);

  if (confidence >= 0.72 || (coverage >= 0.82 && sequenceCoverage >= 0.28)) {
    return {
      status: 'supported',
      confidence: roundConfidence(confidence),
      details: `Fuzzy OCR-tolerant match: ${matched.length}/${quoteTokens.length} terms, ${Math.round(sequenceCoverage * 100)}% sequence coverage`,
    };
  }

  if (confidence >= 0.45 || coverage >= 0.55) {
    return {
      status: 'partially_supported',
      confidence: roundConfidence(confidence),
      details: `Partial OCR-tolerant match: ${matched.length}/${quoteTokens.length} terms, ${Math.round(sequenceCoverage * 100)}% sequence coverage`,
    };
  }

  return {
    status: 'unsupported',
    confidence: roundConfidence(confidence),
    details: `Quoted text not verified: ${matched.length}/${quoteTokens.length} terms matched`,
  };
}

export function normalizeText(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/[\uFB00-\uFB06]/g, (ligature) => LIGATURES[ligature] || ligature)
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[^\p{Letter}\p{Number}\s£$.'"-]/gu, ' ')
    .replace(/[-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

function extractCitationContext(content: string, citationId: string): string | null {
  const escaped = citationId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`.{0,${CONTEXT_CHARS}}\\[${escaped}\\].{0,${CONTEXT_CHARS}}`, 's');
  const match = regex.exec(content);
  return match ? match[0].replace(`[${citationId}]`, '').trim() : null;
}

function extractCitationContextAt(content: string, index: number, citationLength: number): string {
  const start = Math.max(0, index - CONTEXT_CHARS);
  const end = Math.min(content.length, index + citationLength + CONTEXT_CHARS);
  return content.slice(start, end).replace(content.slice(index, index + citationLength), '').trim();
}

function makeCheck(
  citation: CitationCandidate,
  index: number,
  status: CitationSupportStatus,
  confidence: number,
  details: string,
): CitationCheck {
  return {
    findingId: `${citation.citationId}-${index}`,
    citationId: citation.citationId,
    evidenceId: citation.evidenceId,
    quote: citation.quote.slice(0, 240),
    quoteHash: hashText(citation.quote),
    status,
    confidence,
    details,
  };
}

function makeResult(candidateId: string, checks: CitationCheck[]): CitationResult {
  const supported = checks.filter((check) =>
    check.status === 'supported' || (check.status === 'partially_supported' && check.confidence >= 0.6)
  ).length;
  const unsupported = checks.filter((check) => check.status === 'unsupported').length;
  const contradicted = checks.filter((check) => check.status === 'contradicted').length;
  const notChecked = checks.filter((check) => check.status === 'not_checked').length;

  return {
    candidateId,
    checks,
    summary: { total: checks.length, supported, unsupported, contradicted, notChecked },
    passed: checks.length > 0 && unsupported === 0 && contradicted === 0 && notChecked === 0,
  };
}

function tokenize(text: string): string[] {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .filter((token) => !STOPWORDS.has(token))
    .map(normalizeToken);
}

function longestContiguousTokenCoverage(needle: string[], haystack: string[]): number {
  const positions = new Map<string, number[]>();
  haystack.forEach((token, index) => {
    const values = positions.get(token) || [];
    values.push(index);
    positions.set(token, values);
  });

  let best = 0;
  for (let i = 0; i < needle.length; i++) {
    for (const start of positions.get(needle[i]) || []) {
      let length = 0;
      while (
        i + length < needle.length &&
        start + length < haystack.length &&
        needle[i + length] === haystack[start + length]
      ) {
        length++;
      }
      best = Math.max(best, length);
    }
  }
  return needle.length > 0 ? best / needle.length : 0;
}

function roundConfidence(value: number): number {
  return Math.round(Math.min(0.99, Math.max(0, value)) * 100) / 100;
}

function hashText(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) - hash) + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

const LIGATURES: Record<string, string> = {
  '\uFB00': 'ff',
  '\uFB01': 'fi',
  '\uFB02': 'fl',
  '\uFB03': 'ffi',
  '\uFB04': 'ffl',
  '\uFB05': 'st',
  '\uFB06': 'st',
};

const STOPWORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'had', 'has',
  'have', 'in', 'into', 'is', 'it', 'of', 'on', 'or', 'that', 'the', 'their',
  'this', 'to', 'was', 'were', 'with',
]);

function normalizeToken(token: string): string {
  if (token.length > 4 && token.endsWith('ies')) return token.slice(0, -3) + 'y';
  if (token.length > 4 && token.endsWith('s')) return token.slice(0, -1);
  return token;
}
