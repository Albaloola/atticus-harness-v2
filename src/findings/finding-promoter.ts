import { appendEvent } from '../state/events.js';
import type { Finding } from '../domain/finding.js';
import { verifyExactQuote } from '../citations/exact-quote-verifier.js';
import {
  getFinding,
  listFindingCitations,
  setFindingStatus,
} from './finding-store.js';

export async function promoteFindingToAccepted(matterName: string, findingId: string): Promise<Finding> {
  const finding = getFinding(matterName, findingId);
  if (!finding) {
    throw new Error(`Finding "${findingId}" was not found`);
  }

  const citations = listFindingCitations(matterName, findingId);
  const hasExactCitation = citations.some((citation) =>
    citation.status === 'verified_exact' &&
    verifyExactQuote({
      matterName,
      findingId,
      citationId: citation.findingCitationId,
      evidenceId: citation.evidenceId,
      pageId: citation.pageId,
      chunkId: citation.chunkId,
      quote: citation.quote,
      sourceHash: citation.sourceHash,
    }).status === 'supported'
  );
  if (!hasExactCitation) {
    throw new Error(`Finding "${findingId}" cannot be accepted without an exact page-bounded citation`);
  }

  const accepted = setFindingStatus(matterName, findingId, 'accepted', {
    acceptedAt: new Date().toISOString(),
  });

  await appendEvent({
    matterName,
    type: 'finding.accepted',
    data: { findingId },
    source: 'finding-promoter',
  });

  return accepted;
}
