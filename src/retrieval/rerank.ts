export interface RerankableResult {
  id: string;
  text: string;
  score: number;
  source: string;
  metadata?: Record<string, unknown>;
}

export function rerankByTermOverlap(query: string, results: RerankableResult[], limit = results.length): RerankableResult[] {
  const terms = new Set(query.toLowerCase().split(/\W+/).filter((term) => term.length > 2));
  return [...results]
    .map((result) => {
      const text = result.text.toLowerCase();
      let overlap = 0;
      for (const term of terms) {
        if (text.includes(term)) overlap++;
      }
      const overlapScore = terms.size === 0 ? 0 : overlap / terms.size;
      return {
        ...result,
        score: Number((result.score + overlapScore).toFixed(6)),
        metadata: { ...(result.metadata ?? {}), overlapScore },
      };
    })
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, limit);
}
