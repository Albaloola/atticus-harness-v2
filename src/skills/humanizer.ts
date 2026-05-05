import { join } from 'path';
import { loadSkillCatalog } from './selection-worker.js';

export type HumanizerSkillName = 'humanizer' | 'scots-legal-humanizer';

export interface HumanizerSelectionInput {
  objective?: string;
  requestedType?: string;
  docType?: string;
  jurisdiction?: string;
  forum?: string;
  matterType?: string;
  sourceText?: string;
}

const HUMAN_FACING_TYPES = new Set([
  'email',
  'communication',
  'draft',
  'report',
  'letter',
  'pre_action_letter',
  'witness_statement',
  'claim_draft',
  'draft_document',
  'operator_handoff_report',
]);

const SCOTTISH_LEGAL_TERMS = [
  'scotland',
  'scottish',
  'scots',
  'sheriff',
  'sheriff court',
  'simple procedure',
  'ordinary cause',
  'court of session',
  'lord ordinary',
  'sheriff appeal court',
  'pursuer',
  'defender',
  'claimant',
  'respondent',
  'sist',
  'interlocutor',
  'decree',
  'expenses',
  'productions',
  'ombudsman',
  'spso',
  'slcc',
  'tribunal',
  'judicial review',
];

const HUMANIZE_TERMS = [
  'humanize',
  'humanise',
  'naturalize',
  'naturalise',
  'de-ai',
  'deai',
  'remove ai',
  'ai tone',
  'sound human',
  'human written',
  'make it natural',
  'make this natural',
];

export function chooseHumanizerSkill(input: HumanizerSelectionInput): HumanizerSkillName | undefined {
  const combined = [
    input.objective,
    input.requestedType,
    input.docType,
    input.jurisdiction,
    input.forum,
    input.matterType,
    input.sourceText,
  ]
    .filter((value): value is string => Boolean(value))
    .join(' ')
    .toLowerCase();

  if (!combined) return undefined;

  const type = (input.requestedType || input.docType || '').toLowerCase();
  const isHumanFacing = HUMAN_FACING_TYPES.has(type) || HUMANIZE_TERMS.some((term) => combined.includes(term));
  if (!isHumanFacing) return undefined;

  if (SCOTTISH_LEGAL_TERMS.some((term) => combined.includes(term))) {
    return 'scots-legal-humanizer';
  }

  return 'humanizer';
}

export async function loadHumanizerPrompt(
  input: HumanizerSelectionInput,
  skillsDir = join(process.cwd(), 'skills'),
): Promise<{ skillName: HumanizerSkillName; prompt: string } | undefined> {
  const skillName = chooseHumanizerSkill(input);
  if (!skillName) return undefined;

  const skills = await loadSkillCatalog(skillsDir);
  const prompt = skills.find((skill) => skill.skillId === skillName)?.body;
  return prompt ? { skillName, prompt } : undefined;
}
