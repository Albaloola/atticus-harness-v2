import type { SkillDefinition } from '../skills/types.js';
import type { PhaseDefinition } from './workflow.js';

export interface MatterMetadata {
  jurisdiction?: string;
  type?: string;
  [key: string]: string | undefined;
}

export interface SkillScore {
  skill: SkillDefinition;
  score: number;
}

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been',
  'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
  'could', 'should', 'may', 'might', 'can', 'shall', 'this', 'that',
  'it', 'its', 'i', 'we', 'you', 'he', 'she', 'they', 'me', 'us', 'him',
  'her', 'them', 'my', 'our', 'your', 'his', 'their', 'not', 'no', 'as',
  'if', 'so', 'than', 'too', 'very', 'just', 'also', 'use', 'using',
  'used', 'when', 'where', 'which', 'how', 'what', 'who', 'whom',
  'into', 'over', 'under', 'about', 'between', 'through', 'during',
  'before', 'after', 'above', 'below', 'up', 'down', 'out', 'off',
  'any', 'all', 'each', 'every', 'both', 'few', 'more', 'most', 'other',
  'some', 'such', 'only', 'own', 'same', 'new', 'now', 'then', 'here',
  'there', 'must', 'need', 'needs',
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

function keywordScore(text: string, keywords: string[]): number {
  const lowerText = text.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    if (lowerText.includes(kw)) {
      score += 1;
    }
  }
  return score;
}

function tagScore(text: string, metadata: MatterMetadata): number {
  let score = 0;
  const lowerText = text.toLowerCase();

  if (metadata.jurisdiction) {
    const j = metadata.jurisdiction.toLowerCase();
    if (lowerText.includes(j)) score += 2;
  }

  if (metadata.type) {
    const t = metadata.type.toLowerCase();
    if (lowerText.includes(t)) score += 2;
  }

  const extraTags = Object.entries(metadata)
    .filter(([k]) => k !== 'jurisdiction' && k !== 'type')
    .map(([, v]) => v)
    .filter((v): v is string => v !== undefined);

  for (const tag of extraTags) {
    const t = tag.toLowerCase();
    if (t.length > 2 && lowerText.includes(t)) score += 1;
  }

  return score;
}

function phaseSkillBonus(skillId: string, phase?: PhaseDefinition): number {
  if (!phase) return 0;
  return phase.suggestedSkills.includes(skillId) ? 5 : 0;
}

const RELEVANCE_KEYWORDS: Record<string, string[]> = {
  review: ['review', 'analysis', 'assess', 'evaluate', 'check', 'audit'],
  research: ['research', 'law', 'statute', 'regulation', 'authority', 'jurisprudence', 'case law'],
  draft: ['draft', 'generate', 'document', 'letter', 'statement', 'claim', 'order'],
  risk: ['risk', 'severity', 'likelihood', 'exposure', 'mitigation', 'escalation'],
  jurisdiction: ['jurisdiction', 'cross-border', 'multi-jurisdictional', 'forum'],
  negotiation: ['negotiation', 'settlement', 'mediation', 'bargaining', 'agreement'],
  contract: ['contract', 'agreement', 'nda', 'terms', 'clause', 'provision'],
  compliance: ['compliance', 'regulatory', 'gdpr', 'privacy', 'data protection', 'dpia'],
  verification: ['verify', 'verification', 'citation', 'source', 'integrity', 'audit'],
  strategy: ['strategy', 'plan', 'route', 'pathway', 'batna', 'litigation'],
  evidence: ['evidence', 'chronology', 'fact', 'extraction', 'ingestion'],
  intake: ['intake', 'triage', 'client', 'interview', 'normalisation'],
};

function deriveKeywordCategories(objective: string): string[] {
  const lower = objective.toLowerCase();
  const categories: string[] = [];
  for (const [cat, keywords] of Object.entries(RELEVANCE_KEYWORDS)) {
    for (const kw of keywords) {
      if (lower.includes(kw)) {
        categories.push(cat);
        break;
      }
    }
  }
  return categories;
}

function categoryBonus(skill: SkillDefinition, categories: string[]): number {
  let score = 0;
  const desc = skill.manifest.description.toLowerCase();
  const body = skill.body.toLowerCase();
  const combined = desc + ' ' + body;
  for (const cat of categories) {
    const keywords = RELEVANCE_KEYWORDS[cat];
    if (!keywords) continue;
    for (const kw of keywords) {
      if (combined.includes(kw)) {
        score += 1;
      }
    }
  }
  return score;
}

export function selectSkills(
  skills: SkillDefinition[],
  objective: string,
  matterMeta: MatterMetadata = {},
  phase?: PhaseDefinition,
  limit = 8,
): SkillScore[] {
  const objectiveTokens = tokenize(objective);
  const categories = deriveKeywordCategories(objective);

  const results: SkillScore[] = skills.map((skill) => {
    const descText = skill.manifest.description;
    const bodyText = skill.body;
    const combinedText = descText + ' ' + bodyText;

    let score = 0;

    score += keywordScore(combinedText, objectiveTokens);

    score += tagScore(combinedText, matterMeta);

    score += phaseSkillBonus(skill.skillId, phase);

    score += categoryBonus(skill, categories);

    if (matterMeta.jurisdiction || matterMeta.type) {
      score += tagScore(skill.skillId, matterMeta) * 0.5;
    }

    return { skill, score };
  });

  results.sort((a, b) => b.score - a.score);

  if (results.every((r) => r.score === 0)) return [];

  return results.slice(0, limit);
}
