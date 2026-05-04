import { getSourceById, getSourceText, type SourceRecord } from './source-store.js';

export async function verifyQuote(sourceId: number, matterName: string, quote: string): Promise<{
  verified: boolean;
  confidence?: number;
  error?: string;
}> {
  try {
    const source = getSourceById(matterName, sourceId);
    if (!source) {
      return { verified: false, error: `Source ${sourceId} not found in matter ${matterName}` };
    }

    const text = await getSourceText(source);
    const normalizedText = text
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s]/g, '')
      .trim();

    const normalizedQuote = quote
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s]/g, '')
      .trim();

    if (normalizedText.includes(normalizedQuote)) {
      const confidence = Math.min(1.0, normalizedQuote.length / normalizedText.length * 10);
      return { verified: true, confidence };
    }

    return { verified: false };
  } catch (err: unknown) {
    return {
      verified: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export function calcSourceFreshness(source: SourceRecord): number {
  const fetchedDate = new Date(source.fetched_at);
  const now = new Date();
  const ageMs = now.getTime() - fetchedDate.getTime();
  const ageDays = ageMs / (1000 * 60 * 60 * 24);

  if (ageDays <= 1) return 1.0;
  if (ageDays <= 7) return 0.9;
  if (ageDays <= 30) return 0.8;
  if (ageDays <= 90) return 0.6;
  if (ageDays <= 180) return 0.4;
  if (ageDays <= 365) return 0.3;
  return 0.1;
}

export function rankSourceAuthority(source: SourceRecord): number {
  let score = 0.5;

  const typeScores: Record<string, number> = {
    statute: 1.0,
    regulation: 1.0,
    case_law: 0.95,
    court_opinion: 0.95,
    government: 0.85,
    legal_database: 0.8,
    academic: 0.75,
    news: 0.5,
    blog: 0.3,
    social_media: 0.1,
    web: 0.4,
    other: 0.3,
  };

  score = typeScores[source.source_type] ?? typeScores['other'] ?? 0.3;

  if (source.jurisdiction) {
    score += 0.05;
  }

  if (source.text_path) {
    score += 0.05;
  }

  return Math.min(1.0, score);
}
