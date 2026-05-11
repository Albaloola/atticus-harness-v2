import { randomUUID } from 'crypto';
import type { ClaimCategory, ClaimRecord } from './schema.js';
import { classifySource, isGeneratedOrDraftSource, type GroundingSourceReference } from '../evidence/source-classification.js';

export interface ClaimDraft {
  claimId: string;
  category: ClaimCategory;
  statement: string;
  sourceClass: ReturnType<typeof classifySource>;
  sourceReferences: GroundingSourceReference[];
  authorityRefs: string[];
  confidence: number;
}

export interface ClaimExtractionInput {
  matterName: string;
  sourceType?: string;
  sourceId: string;
  content: string;
  classificationHint?: string;
  maxClaims?: number;
}

export interface ClaimExtractionResult {
  matterName: string;
  claims: ClaimRecord[];
}

export function extractClaimsFromContent(input: ClaimExtractionInput): ClaimExtractionResult {
  const sourceClass = classifySource({
    sourceId: input.sourceId,
    sourceType: input.sourceType,
    classificationHint: input.classificationHint,
  });

  const sentences = splitIntoSentences(input.content);
  const drafts = sentences
    .map((statement) => mapSentenceToDraft({
      statement,
      sourceClass,
      sourceId: input.sourceId,
      sourceType: input.sourceType,
      classificationHint: input.classificationHint,
    }))
    .filter((draft): draft is ClaimDraft => draft !== undefined);

  const deduped = dedupeClaims(drafts);
  const normalized = (input.maxClaims && input.maxClaims > 0)
    ? deduped.slice(0, input.maxClaims)
    : deduped;

  const claims: ClaimRecord[] = normalized.map((draft): ClaimRecord => ({
    claimId: draft.claimId,
    matterName: input.matterName,
    category: draft.category,
    statement: draft.statement,
    status: draft.sourceReferences.some((reference) => isGeneratedOrDraftSource(reference.sourceClass))
      ? 'unsupported'
      : 'proposed',
    confidence: draft.confidence,
    sourceReferences: draft.sourceReferences,
    authorityRefs: draft.authorityRefs,
    evidenceBasisNote: `Parsed from ${input.sourceId}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));

  return {
    matterName: input.matterName,
    claims,
  };
}

function mapSentenceToDraft(input: {
  statement: string;
  sourceClass: ReturnType<typeof classifySource>;
  sourceId: string;
  sourceType?: string;
  classificationHint?: string;
}): ClaimDraft | undefined {
  const statement = sanitizeSentence(input.statement);
  if (statement.length < 40) {
    return undefined;
  }

  const category = inferCategory(statement);
  const authorityRefs = inferAuthorityRefs(statement);
  const sourceClass = input.sourceClass;
  const confidence = estimateConfidence(category, statement);

  return {
    claimId: randomUUID(),
    category,
    statement,
    sourceClass,
    sourceReferences: [{
      sourceClass,
      sourceId: input.sourceId,
      excerpt: statement.slice(0, 140),
      confidence,
    }],
    authorityRefs,
    confidence,
  };
}

function splitIntoSentences(content: string): string[] {
  const clean = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\r\n/g, '\n')
    .replace(/\n{2,}/g, '. ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!clean) {
    return [];
  }

  return clean.split(/(?<=[.!?])\s+/).filter(Boolean);
}

function inferCategory(statement: string): ClaimCategory {
  const lower = statement.toLowerCase();

  if (/\b(risk|harm|loss|exposure|threat|penalty|cost)\b/.test(lower)) {
    return 'risk';
  }
  if (/\b(section|article|rule|statut[eue]|regulation|jurisdiction|legal|liable|breach|authority|precedent)\b/.test(lower)) {
    return 'law';
  }
  if (/\btherefore|hence|thus|indicates|suggests|inference|likely|conclusion|implies|implied\b/.test(lower)) {
    return 'inference';
  }
  if (/\b(i|we|user|client)\s+(believe|state|said|told|took|received|expect)\b/i.test(statement)) {
    return 'user_assertion';
  }
  return 'fact';
}

function sanitizeSentence(input: string): string {
  return input.replace(/\s+/g, ' ').trim();
}

function dedupeClaims(items: ClaimDraft[]): ClaimDraft[] {
  const seen = new Set<string>();
  const output: ClaimDraft[] = [];

  for (const item of items) {
    const normalized = item.statement.toLowerCase().replace(/\s+/g, ' ').trim();
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    output.push(item);
  }
  return output;
}

function inferAuthorityRefs(statement: string): string[] {
  const refs = new Set<string>();
  const patterns = [
    /section\s+\d+[a-z]?(?:\(\w+\))*/gi,
    /article\s+\d+[a-z]?(?:\(\w+\))*/gi,
    /\b[A-Z][A-Za-z]+\s+v\s+[A-Z][A-Za-z]+\b/g,
    /\b[Rr]ule\s+\d+[a-z]?(?:\([^)]+\))?/g,
    /\b[Oo]rder\s+\d+[a-z]?(?:\([^)]+\))?/g,
  ];

  for (const pattern of patterns) {
    for (const match of statement.match(pattern) ?? []) {
      refs.add(match.trim());
    }
  }

  return [...refs];
}

function estimateConfidence(category: ClaimCategory, statement: string): number {
  const confidenceByCategory: Record<ClaimCategory, number> = {
    fact: 0.6,
    law: 0.8,
    inference: 0.45,
    user_assertion: 0.5,
    risk: 0.55,
  };
  const lengthBonus = Math.min(0.25, Math.max(0, statement.length - 80) / 400);
  return Number((confidenceByCategory[category] + lengthBonus).toFixed(2));
}
