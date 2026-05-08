import type { Contradiction } from '../domain/contradiction.js';
import type { Finding } from '../domain/finding.js';
import { hashText } from '../extraction/hash.js';

const NEGATION_TERMS = new Set(['no', 'not', 'never', 'without', 'denied', 'none']);

export function detectTextContradictions(findings: Finding[]): Contradiction[] {
  const contradictions: Contradiction[] = [];

  for (let i = 0; i < findings.length; i++) {
    for (let j = i + 1; j < findings.length; j++) {
      const rationale = contradictionRationale(findings[i].statement, findings[j].statement);
      if (!rationale) continue;
      const now = new Date().toISOString();
      contradictions.push({
        contradictionId: hashText(`${findings[i].findingId}:${findings[j].findingId}:${rationale}`).slice(0, 24),
        matterName: findings[i].matterName,
        findingIdA: findings[i].findingId,
        findingIdB: findings[j].findingId,
        status: 'open',
        severity: 'medium',
        rationale,
        createdAt: now,
        metadata: {},
      });
    }
  }

  return contradictions;
}

function contradictionRationale(a: string, b: string): string | null {
  const aTokens = tokenize(a);
  const bTokens = tokenize(b);
  const overlap = [...aTokens].filter((token) => bTokens.has(token));
  const aNegated = [...aTokens].some((token) => NEGATION_TERMS.has(token));
  const bNegated = [...bTokens].some((token) => NEGATION_TERMS.has(token));
  if (overlap.length >= 3 && aNegated !== bNegated) {
    return 'Statements share core terms but only one contains a negation marker';
  }
  return null;
}

function tokenize(text: string): Set<string> {
  return new Set(text.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter((token) => token.length > 2));
}
