import {
  createDraftOutline,
  createDraftSection,
  type CreateDraftOutlineInput,
} from './draft-store.js';

export interface BuildOutlineResult {
  outlineId: string;
  sectionIds: string[];
}

const DEFAULT_SECTIONS = [
  ['Introduction', 'Frame the relief sought and procedural posture.'],
  ['Facts', 'State only traceable facts tied to accepted findings.'],
  ['Issues', 'Identify claim elements and disputed legal issues.'],
  ['Argument', 'Apply law to accepted facts with exact citations.'],
  ['Relief', 'State the requested court-ready outcome.'],
] as const;

export function buildDraftOutline(input: CreateDraftOutlineInput & {
  sections?: Array<{ heading: string; purpose: string }>;
}): BuildOutlineResult {
  const outline = createDraftOutline(input);
  const sections = input.sections ?? DEFAULT_SECTIONS.map(([heading, purpose]) => ({ heading, purpose }));
  const sectionIds = sections.map((section, index) =>
    createDraftSection({
      matterName: input.matterName,
      outlineId: outline.outlineId,
      heading: section.heading,
      purpose: section.purpose,
      ordinal: index + 1,
    }).sectionId);
  return { outlineId: outline.outlineId, sectionIds };
}
