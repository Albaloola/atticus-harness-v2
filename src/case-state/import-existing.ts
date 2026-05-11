import { listCandidates } from '../storage/candidate.js';
import { listEvidence } from '../storage/evidence.js';
import type { EvidenceRecord } from '../types/evidence.js';
import { isWorkProductType, type WorkProductReadiness } from '../work-products/types.js';
import { addEvidenceItem, addWorkProductReference } from './mutations.js';
import { createCaseState } from './mutations.js';
import type { CaseEvidenceItem } from './schema.js';

const CANDIDATE_SAFE_BASIS: WorkProductReadiness[] = ['raw', 'structured'];

export interface ImportExistingInputsResult {
  importedEvidenceItems: number;
  importedCandidateItems: number;
  linkedCandidateProducts: number;
}

export async function importExistingMatterInputs(input: {
  matterName: string;
  source?: string;
  actor?: string;
}): Promise<ImportExistingInputsResult> {
  const context = {
    source: input.source ?? 'importer',
    actor: input.actor ?? 'system',
    confidence: 0.9,
    summary: 'Imported existing evidence and candidates as support-only case state updates',
  };

  await createCaseState({ matterName: input.matterName, context });

  const evidence = await listEvidence(input.matterName);
  const candidates = await listCandidates(input.matterName);

  let importedEvidenceItems = 0;
  let importedCandidateItems = 0;
  let linkedCandidateProducts = 0;

  for (const item of evidence) {
    const evidenceStatus = normalizeEvidenceStatus(item);
    const note = metadataNote(item.metadata);
    const result = await addEvidenceItem(input.matterName, {
      title: item.originalPath,
      sourceType: 'file_evidence',
      sourceReference: item.id,
      status: evidenceStatus,
      isPrimaryEvidence: true,
      confidence: evidenceConfidence(item.status, evidenceStatus),
      notes: note,
    }, context);
    if (result.revision > 0) {
      importedEvidenceItems += 1;
    }
  }

  for (const candidate of candidates) {
    const candidateStatus: CaseEvidenceItem['status'] = candidate.status === 'rejected' ? 'rejected' : 'pending';
    await addEvidenceItem(input.matterName, {
      title: candidate.title,
      sourceType: 'generated_draft',
      sourceReference: candidate.id,
      status: candidateStatus,
      isPrimaryEvidence: false,
      confidence: 0.2,
      notes: metadataNote(candidate.metadata),
    }, context);
    importedCandidateItems += 1;

    if (typeof candidate.metadata?.requestedType === 'string' && isWorkProductType(candidate.metadata.requestedType)) {
      await addWorkProductReference(input.matterName, {
        workProductId: candidate.id,
        type: candidate.metadata.requestedType,
        readiness: CANDIDATE_SAFE_BASIS[0],
        source: 'candidate-import',
      }, context);
      linkedCandidateProducts += 1;
    }
  }

  return {
    importedEvidenceItems,
    importedCandidateItems,
    linkedCandidateProducts,
  };
}

function normalizeEvidenceStatus(item: EvidenceRecord): CaseEvidenceItem['status'] {
  if (item.status === 'failed' || item.status === 'excluded') {
    return 'rejected';
  }
  if (item.status === 'ocr_required' || item.status === 'qc_failed') {
    return 'pending';
  }
  return 'accepted';
}

function evidenceConfidence(
  itemStatus: EvidenceRecord['status'],
  derivedStatus: CaseEvidenceItem['status'],
): number {
  if (derivedStatus === 'rejected') {
    return 0.05;
  }
  if ([
    'approved',
    'extracted',
    'indexed',
    'typed',
    'hashed',
    'discovered',
    'registered',
    'pending',
  ].includes(itemStatus)) {
    return 0.9;
  }
  return 0.75;
}

function metadataNote(metadata: unknown): string | undefined {
  if (!metadata || typeof metadata !== 'object') return undefined;
  const source = metadata as Record<string, unknown>;
  if (typeof source.note === 'string') return source.note;
  if (typeof source.summary === 'string') return source.summary;
  if (typeof source.source === 'string') return source.source;
  return undefined;
}
