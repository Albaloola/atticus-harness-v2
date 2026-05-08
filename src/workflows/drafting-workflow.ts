import { assembleDraftCandidate } from '../drafting/assembly.js';
import { buildEvidenceMatrix } from '../drafting/evidence-matrix.js';
import { buildIssueMap } from '../drafting/issue-map.js';
import { buildDraftOutline } from '../drafting/outline-builder.js';
import { evaluateParagraphTrace } from '../drafting/paragraph-trace.js';
import { draftSectionFromFindings } from '../drafting/section-drafter.js';

export async function runDraftingWorkflow(input: {
  matterName: string;
  documentType: string;
  claimElements?: string[];
  title?: string;
}): Promise<{
  outlineId: string;
  sectionIds: string[];
  paragraphIds: string[];
  candidateId?: string;
  blockers: Array<{ objectId: string; reason: string; remediation: string }>;
}> {
  const matrix = buildEvidenceMatrix({
    matterName: input.matterName,
    claimElements: input.claimElements,
  });
  const issueMap = buildIssueMap(input.claimElements ?? [], matrix);
  const outline = buildDraftOutline({
    matterName: input.matterName,
    documentType: input.documentType,
    metadata: { issueMap },
  });
  const paragraphIds: string[] = [];
  for (const sectionId of outline.sectionIds) {
    const result = draftSectionFromFindings({
      matterName: input.matterName,
      sectionId,
      claimElements: input.claimElements,
      maxParagraphs: 2,
    });
    paragraphIds.push(...result.paragraphIds);
  }
  const traceResults = [];
  for (const paragraphId of paragraphIds) {
    traceResults.push(await evaluateParagraphTrace(input.matterName, paragraphId));
  }
  const assembly = await assembleDraftCandidate({
    matterName: input.matterName,
    outlineId: outline.outlineId,
    title: input.title,
  });
  return {
    outlineId: outline.outlineId,
    sectionIds: outline.sectionIds,
    paragraphIds,
    candidateId: assembly.candidateId,
    blockers: [
      ...traceResults.flatMap((result) => result.blockers),
      ...assembly.blockers,
    ],
  };
}
