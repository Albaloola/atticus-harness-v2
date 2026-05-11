import { randomUUID } from 'crypto';
import type { CaseObligation } from './obligation-types.js';
import type { CaseState } from '../case-state/schema.js';
import { addDeadline, addFact, addLegalIssue, addWorkProductReference } from '../case-state/mutations.js';
import { upsertWorkProduct } from '../work-products/store.js';
import { validateWorkProductReadiness } from '../work-products/validators.js';
import type { UnknownWorkProduct } from '../work-products/types.js';

export interface ExecuteObligationInput {
  matterName: string;
  obligation: CaseObligation;
  state: CaseState;
  source?: string;
  actor?: string;
}

export interface ExecuteObligationResult {
  status: 'satisfied' | 'failed' | 'blocked' | 'skipped';
  error?: string;
  workProductId?: string;
}

type ExecutionResult = WorkProductExecutionResult | undefined;

interface WorkProductExecutionResult {
  product: UnknownWorkProduct;
}

export async function executeObligation(input: ExecuteObligationInput): Promise<ExecuteObligationResult> {
  const source = input.source ?? 'autonomous-case-manager';
  const actor = input.actor ?? 'autonomous-case-manager';

  if (input.obligation.type === 'identify_parties') {
    return input.state.parties.length > 0
      ? { status: 'satisfied' }
      : { status: 'failed', error: 'Parties are required before case planning.' };
  }

  if (input.obligation.type === 'extract_key_dates') {
    const parsed = parseDatesFromFacts(input.state.facts);
    if (parsed.length === 0) {
      return { status: 'failed', error: 'No dated facts found for safe key-date extraction.' };
    }
    for (const date of parsed) {
      await addDeadline(
        input.matterName,
        {
          description: `Key date extracted from fact ${date.factId}`,
          dueAt: date.value,
          critical: date.isFinalDate,
          status: 'pending',
          source: 'autonomous-case-manager',
        },
        {
          source,
          actor,
          summary: `Added key date ${date.value} from ${date.source}`,
        },
      );
    }
    return { status: 'satisfied' };
  }

  if (input.obligation.type === 'identify_legal_issues') {
    if (input.state.legalIssues.length > 0) {
      return { status: 'satisfied' };
    }
    const issue = buildIssueCandidate(input.state);
    if (!issue) {
      return { status: 'failed', error: 'No legal issue can be derived yet.' };
    }
    await addLegalIssue(
      input.matterName,
      issue,
      {
        source,
        actor,
        summary: `Added issue ${issue}`,
      },
    );
    return { status: 'satisfied' };
  }

  if (input.obligation.type === 'build_chronology') {
    const execution = await makeChronologyPlaceholder(input);
    return await writeWorkProduct(input, execution);
  }

  if (input.obligation.type === 'build_evidence_matrix') {
    const execution = makeEvidenceMatrixPlaceholder(input);
    return await writeWorkProduct(input, execution);
  }

  if (input.obligation.type === 'research_authorities') {
    if (input.state.legalIssues.length === 0) {
      return { status: 'failed', error: 'Cannot safely research authorities before legal issues exist.' };
    }
    const execution = makeResearchPlaceholder(input);
    return await writeWorkProduct(input, execution);
  }

  if (input.obligation.type === 'ask_missing_fact') {
    return {
      status: 'blocked',
      error: 'Critical input required from user.',
    };
  }

  return {
    status: 'blocked',
    error: `No safe autonomous executor for obligation ${input.obligation.type}.`,
  };
}

async function writeWorkProduct(
  input: ExecuteObligationInput,
  execution: ExecutionResult,
): Promise<ExecuteObligationResult> {
  if (!execution) {
    return {
      status: 'failed',
      error: 'No deterministic placeholder could be generated.',
    };
  }

  const report = validateWorkProductReadiness(execution.product, input.obligation.readinessRequirement);
  if (!report.valid) {
    return {
      status: 'failed',
      error: report.errors.map((entry) => `${entry.path}: ${entry.message}`).join(' | '),
    };
  }

  await upsertWorkProduct(input.matterName, {
    ...execution.product,
    updatedAt: new Date().toISOString(),
  });
  await addWorkProductReference(
    input.matterName,
    {
      workProductId: execution.product.id,
      type: execution.product.type,
      readiness: execution.product.readiness,
      source: input.source ?? 'autonomous-case-manager',
    },
    {
      source: input.source ?? 'autonomous-case-manager',
      actor: input.actor ?? 'autonomous-case-manager',
      summary: `Linked ${execution.product.type} to case state`,
      confidence: 0.9,
    },
  );

  return { status: 'satisfied', workProductId: execution.product.id };
}

async function makeChronologyPlaceholder(input: ExecuteObligationInput): Promise<ExecutionResult> {
  const facts = input.state.facts;
  if (facts.length === 0) {
    return undefined;
  }

  const now = new Date().toISOString();
  const events = facts.slice(0, 8).map((fact) => ({
    date: extractDateFromStatement(fact.statement) ?? now.slice(0, 10),
    event: fact.statement,
    sourceIds: fact.evidenceItemIds.length > 0 ? fact.evidenceItemIds : ['accepted-fact'],
  }));

  const product: UnknownWorkProduct = {
    id: randomUUID(),
    matterName: input.matterName,
    type: 'chronology',
    title: `Chronology for ${input.matterName}`,
    content: [
      '# Chronology',
      '',
      ...events.map((entry) => `- ${entry.date}: ${entry.event}`),
      '',
      'This is a deterministic, safety-checked placeholder chronology generated from case-state facts.',
    ].join('\n'),
    readiness: 'case_integrated',
    purpose: 'Provide structured timeline context for legal planning.',
    audience: 'operator',
    sourceBasis: deriveSourceBasis(events),
    unresolvedGaps: ['Authorities and procedural timing need operator review.'],
    safetyStatus: 'safe',
    metadata: {
      executionMode: 'autonomous-case-manager',
      generatedAt: now,
    },
    payload: { events },
    createdAt: now,
    updatedAt: now,
  };

  if (!input.state.evidenceItems.some((item) => item.isPrimaryEvidence)) {
    await addFact(
      input.matterName,
      {
        statement: 'Chronology placeholder generated autonomously from case state.',
        status: 'accepted',
        evidenceItemIds: [product.id],
      },
    );
  }
  return { product };
}

function makeEvidenceMatrixPlaceholder(input: ExecuteObligationInput): ExecutionResult {
  if (input.state.facts.length === 0) {
    return undefined;
  }
  const now = new Date().toISOString();
  const rows = input.state.facts.map((fact) => ({
    claim: `Factual node from ${fact.factId}`,
    evidence: fact.evidenceItemIds.length > 0 ? fact.evidenceItemIds : ['autonomous-case-manager'],
    inference: fact.status === 'disputed'
      ? 'Disputed fact requiring explicit operator confirmation.'
      : 'Accepted for planning unless contradicted by later validation.',
  }));
  const sourceIds = rows.flatMap((entry) => entry.evidence);
  const product: UnknownWorkProduct = {
    id: randomUUID(),
    matterName: input.matterName,
    type: 'evidence_matrix',
    title: `Evidence Matrix for ${input.matterName}`,
    content: [
      '# Evidence Matrix',
      '',
      ...rows.map((row) => `- ${row.claim}: ${row.inference}`),
      '',
      'Rows are derived deterministically from current accepted factual state and tagged for operator validation.',
    ].join('\n'),
    readiness: 'case_integrated',
    purpose: 'Map claims to evidence for planning and review.',
    audience: 'operator',
    sourceBasis: sourceIds.length > 0
      ? sourceIds.slice(0, 6).map((sourceId) => ({
        sourceType: sourceId === 'autonomous-case-manager' ? 'case_artifact' : 'evidence',
        sourceId,
        description: `Referenced by matrix row`,
      }))
      : [{ sourceType: 'user_statement', sourceId: 'case-state', description: 'No explicit evidence references yet.' }],
    unresolvedGaps: ['Some evidentiary links should be reviewed for quality.'],
    safetyStatus: 'safe',
    metadata: {
      executionMode: 'autonomous-case-manager',
      generatedAt: now,
    },
    payload: { rows },
    createdAt: now,
    updatedAt: now,
  };
  return { product };
}

function makeResearchPlaceholder(input: ExecuteObligationInput): ExecutionResult {
  const issue = input.state.legalIssues[0];
  if (!issue) return undefined;
  const now = new Date().toISOString();
  const product: UnknownWorkProduct = {
    id: randomUUID(),
    matterName: input.matterName,
    type: 'legal_research_memo',
    title: `Authority memo: ${issue}`,
    content: [
      '# Legal Research Memo',
      '',
      `Issue: ${issue}`,
      '',
      'Authorities, forum, and remedies are placeholder-safe placeholders until direct legal authority review.',
    ].join('\n'),
    readiness: 'legally_reviewed',
    purpose: 'Provide a deterministic legal-research scaffold for operator follow-up.',
    audience: 'operator',
    sourceBasis: [{
      sourceType: 'case_artifact',
      sourceId: issue,
      description: `Derived from legal issue ${issue}`,
    }],
    unresolvedGaps: ['Jurisdiction and authority mapping require operator review.'],
    safetyStatus: 'safe',
    metadata: {
      executionMode: 'autonomous-case-manager',
      generatedAt: now,
    },
    payload: {
      legalQuestion: issue,
      forum: 'Pending operator confirmation',
      facts: input.state.facts.map((fact) => fact.statement),
      laws: ['Pending authority confirmation'],
      analysis: 'Draft scaffold to keep case planning moving while user input is stable.',
      conclusion: 'Operator review required before action.',
      uncertainties: ['No legal citation extraction completed.'],
      risks: ['Precedent and jurisdictional mismatch'],
      nextActions: ['Add binding authorities', 'Confirm forum'],
      authorities: ['pending'],
    },
    createdAt: now,
    updatedAt: now,
  };
  return { product };
}

function parseDatesFromFacts(facts: CaseState['facts']): Array<{ factId: string; value: string; source: string; isFinalDate: boolean }> {
  const extracted: Array<{ factId: string; value: string; source: string; isFinalDate: boolean }> = [];
  for (const fact of facts) {
    const value = extractDateFromStatement(fact.statement);
    if (!value) continue;
    extracted.push({
      factId: fact.factId,
      source: `fact:${fact.factId}`,
      value,
      isFinalDate: /final|decision|deadline|appeal/i.test(fact.statement),
    });
  }
  return extracted;
}

function extractDateFromStatement(value: string): string | undefined {
  const iso = value.match(/\d{4}-\d{2}-\d{2}/)?.[0];
  if (iso) {
    const normalized = new Date(iso);
    if (!Number.isNaN(normalized.getTime())) return normalized.toISOString();
  }
  const long = value.match(/\b\d{1,2}\s+\w+\s+\d{4}\b/)?.[0];
  if (long) {
    const normalized = new Date(long);
    if (!Number.isNaN(normalized.getTime())) return normalized.toISOString();
  }
  return undefined;
}

function deriveSourceBasis(entries: Array<{ sourceIds: string[] }>): UnknownWorkProduct['sourceBasis'] {
  const sourceIds = Array.from(new Set(entries.flatMap((item) => item.sourceIds))).slice(0, 8);
  return sourceIds.length > 0
    ? sourceIds.map((sourceId) => ({
      sourceType: 'evidence',
      sourceId,
      description: `Used in safe placeholder generation from ${sourceId}`,
    }))
    : [{ sourceType: 'user_statement', sourceId: 'case-state', description: 'Fallback basis from case state.' }];
}

function buildIssueCandidate(state: CaseState): string | undefined {
  const first = state.facts[0]?.statement;
  if (!first) return undefined;
  return `Potential legal issue from core facts: ${first.slice(0, 100)}`;
}
