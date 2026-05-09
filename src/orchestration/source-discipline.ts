import { existsSync } from 'fs';
import { getMatterPath } from '../storage/matter.js';
import { getDb } from '../storage/sqlite/index.js';
import { getEvidenceItemV2 } from '../storage/sqlite/evidence.js';
import type { AgentStructuredResult } from './types.js';

export interface SourceDisciplineIssue {
  findingClaim: string;
  evidenceIds: string[];
  reason: string;
}

const EVIDENCE_ID_RE = /\b[A-Z][A-Z0-9_-]*-SRC-\d+\b/g;
const PRIMARY_KIND = new Set(['holding', 'procedural_fact', 'evidence_fact', 'risk_signal']);

export function auditSourceDiscipline(matterName: string, result: AgentStructuredResult): SourceDisciplineIssue[] {
  const evidenceDbPath = getMatterPath(matterName, '_evidence.db');
  if (!existsSync(evidenceDbPath)) return [];

  const db = getDb(matterName);
  const issues: SourceDisciplineIssue[] = [];

  for (const finding of result.findings) {
    if (!PRIMARY_KIND.has(finding.kind ?? 'evidence_fact')) continue;

    const evidenceIds = extractEvidenceIds(finding.support);
    if (evidenceIds.length === 0) continue;

    const sourceKinds = evidenceIds.map((evidenceId) => {
      const item = getEvidenceItemV2(db, evidenceId);
      return {
        evidenceId,
        kind: classifyEvidenceForSourceDiscipline(item?.originalFilename, item?.canonicalFilename),
      };
    });
    const knownSources = sourceKinds.filter((source) => source.kind !== 'unknown');
    if (knownSources.length === 0) continue;

    const primarySources = knownSources.filter((source) => source.kind === 'primary');
    const workProductSources = knownSources.filter((source) => source.kind === 'work_product' || source.kind === 'party_work_product');

    if (workProductSources.length > 0 && primarySources.length === 0) {
      issues.push({
        findingClaim: finding.claim,
        evidenceIds: workProductSources.map((source) => source.evidenceId),
        reason: 'Primary/procedural/risk finding is supported only by case-preparation work product, not source records.',
      });
    }
  }

  return issues;
}

export function applySourceDisciplineGate(
  matterName: string,
  result: AgentStructuredResult,
): AgentStructuredResult {
  const issues = auditSourceDiscipline(matterName, result);
  if (issues.length === 0) return result;

  const issueSummary = issues
    .map((issue) => `${issue.evidenceIds.join(', ')} supporting "${issue.findingClaim}"`)
    .join('; ');

  return {
    ...result,
    status: 'needs_followup',
    summary: `Worker output quarantined for source-discipline review: ${issueSummary}. Prior summary: ${result.summary}`,
    risks: [
      ...result.risks,
      {
        risk: 'Worker promoted secondary case-preparation work product as primary support for a factual, procedural, holding, or risk finding.',
        severity: 'high',
        mitigation: 'Rerun or revise the worker output so primary facts and procedural/legal conclusions are supported by source records; use drafts/action plans only as party positions or secondary context.',
      },
    ],
    nextActions: [
      ...result.nextActions,
      'Rerun the affected worker with source-record-only support for primary/procedural findings.',
    ],
  };
}

function extractEvidenceIds(text: string): string[] {
  return [...new Set(text.match(EVIDENCE_ID_RE) ?? [])];
}

function classifyEvidenceForSourceDiscipline(
  originalFilename: string | undefined,
  canonicalFilename: string | undefined,
): 'primary' | 'work_product' | 'party_work_product' | 'unknown' {
  const text = `${originalFilename ?? ''} ${canonicalFilename ?? ''}`
    .toLowerCase()
    .replace(/[_-]+/g, ' ');

  if (!text.trim()) return 'unknown';

  if (/\b(action plan|call script|call transcript comprehensive|email to edinburgh napier|version [a-z] after phone call|atticus|case preparation|strategy memo|draft response)\b/.test(text)) {
    return 'work_product';
  }
  if (/\b(complaint draft|formal complaint|draft updated|complaint updated)\b/.test(text)) {
    return 'party_work_product';
  }
  if (/\b(draft|script|template)\b/.test(text)) {
    return 'work_product';
  }

  return 'primary';
}
