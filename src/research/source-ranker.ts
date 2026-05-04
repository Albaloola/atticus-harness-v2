import type { SourceRecord } from './source-store.js';
import { calcSourceFreshness, rankSourceAuthority } from './source-citation.js';

export interface RankedSource {
  source: SourceRecord;
  score: number;
  relevance: number;
  authority: number;
  freshness: number;
}

export function scoreRelevance(source: SourceRecord, query: string): number {
  const q = query.toLowerCase();
  let score = 0;

  if (source.title) {
    const title = source.title.toLowerCase();
    const terms = q.split(/\s+/);
    for (const term of terms) {
      if (title.includes(term)) {
        score += 0.3 / terms.length;
      }
    }
    if (title.includes(q)) {
      score += 0.2;
    }
  }

  if (source.url) {
    const url = source.url.toLowerCase();
    if (url.includes('.gov')) score += 0.15;
    if (url.includes('.edu')) score += 0.1;
  }

  return Math.min(1.0, score);
}

export function rankSources(sources: SourceRecord[], query: string): RankedSource[] {
  const ranked = sources.map((source) => {
    const relevance = scoreRelevance(source, query);
    const authority = rankSourceAuthority(source);
    const freshness = calcSourceFreshness(source);

    const score = relevance * 0.4 + authority * 0.35 + freshness * 0.25;

    return { source, score: Math.round(score * 1000) / 1000, relevance, authority, freshness };
  });

  ranked.sort((a, b) => b.score - a.score);

  return ranked;
}
