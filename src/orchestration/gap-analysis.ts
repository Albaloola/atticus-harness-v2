import { listArtifacts } from '../storage/artifact.js';
import { listCandidates } from '../storage/candidate.js';
import { listEvidence } from '../storage/evidence.js';
import { getDocumentOutputBundle, type DocumentOutputBundleSummary } from '../export/document-output-pipeline.js';
import type { Artifact, ArtifactType, CandidateArtifact } from '../types/artifact.js';
import type { LegalArtifactType } from '../legal/artifact-types.js';
import { getDefaultPhases, type PhaseDefinition } from '../legal/workflow.js';

export type GapAssetSource = 'artifact' | 'candidate' | 'output';
export type GapAssetCategory = 'draft' | 'report' | 'task' | 'communication';

export interface GapInventoryAsset {
  id: string;
  source: GapAssetSource;
  status: 'accepted' | 'candidate' | 'output';
  type: ArtifactType;
  category: GapAssetCategory;
  title: string;
  timestamp?: string;
  stale: boolean;
  staleReason?: string;
  summary: string;
}

export interface GapRequirement {
  id: string;
  label: string;
  category: GapAssetCategory;
  aliases: string[];
  reason: string;
  phaseId?: string;
  outputType?: LegalArtifactType | string;
}

export interface GapMatch {
  requirementId: string;
  requirementLabel: string;
  assetId: string;
  assetTitle: string;
  assetSource: GapAssetSource;
  stale: boolean;
  staleReason?: string;
}

export interface GapAnalysisResult {
  matterName: string;
  generatedAt: string;
  force: boolean;
  latestEvidenceIngested?: string;
  inventory: GapInventoryAsset[];
  requirements: GapRequirement[];
  complete: GapMatch[];
  stale: GapMatch[];
  gaps: GapRequirement[];
  skipped: GapMatch[];
  toProduce: GapRequirement[];
  noNewWorkNeeded: boolean;
  summary: string;
}

export interface CaseGapAnalysisInput {
  matterName: string;
  instruction: string;
  requestedType?: string;
  force?: boolean;
}

export interface OrchestrationGapAnalysisInput {
  matterName: string;
  objective?: string;
  phases?: PhaseDefinition[];
  force?: boolean;
}

interface InventoryInput {
  artifacts: Artifact[];
  candidates: CandidateArtifact[];
  outputBundles?: DocumentOutputBundleSummary[];
  latestEvidenceIngested?: string;
}

const CASE_BROAD_RE = /\b(all|everything|what'?s needed|needed|handle|manage|full|complete|master|bundle)\b/i;
const HOUSING_CONTEXT_RE = /\b(napier|accommodation|housing|arrears|rent|eviction|notice to quit|ntq|guarantor|university|student)\b/i;

const LEGAL_ALIASES: Partial<Record<LegalArtifactType, string[]>> = {
  intake_summary: ['intake summary', 'matter intake', 'case intake'],
  chronology: ['chronology', 'timeline'],
  evidence_matrix: ['evidence matrix', 'evidence table'],
  fact_extraction: ['fact extraction', 'extracted facts', 'fact summary'],
  issue_map: ['issue map', 'issues map', 'issue spotting'],
  authority_map: ['authority map', 'authorities map'],
  legal_research: ['legal research', 'law and policy research'],
  case_theory: ['case theory', 'theory memo'],
  legal_memo: ['legal memo', 'legal memorandum', 'merits memo'],
  risk_register: ['risk register'],
  risk_assessment: ['risk assessment', 'chances assessment', 'merits assessment'],
  procedure_plan: ['procedure plan', 'procedural plan'],
  procedural_route_map: ['procedural route map', 'route map'],
  pre_action_letter: ['pre action letter', 'pre-action letter', 'letter before action', 'complaint letter'],
  claim_draft: ['claim draft', 'claim form', 'draft claim'],
  witness_statement: ['witness statement'],
  schedule_of_loss: ['schedule of loss', 'loss schedule'],
  draft_order: ['draft order'],
  draft_document: ['draft document', 'document draft'],
  hostile_review_report: ['hostile review report', 'red team review', 'verification report'],
  bundle_index: ['bundle index'],
  filing_checklist: ['filing checklist', 'filing check list'],
  war_room_pack: ['war room pack', 'case pack'],
  operator_handoff_report: ['operator handoff report', 'handoff report', 'handoff'],
  document_output_bundle: ['document output bundle', 'output bundle', 'output documents', 'human friendly documents', 'formatted documents'],
};

const CASE_REQUIREMENTS: GapRequirement[] = [
  {
    id: 'case:complaint-letter',
    label: 'formal complaint letter',
    category: 'draft',
    aliases: ['formal complaint letter', 'complaint letter', 'letter of complaint'],
    reason: 'A complete case packet usually needs the primary complaint or challenge letter.',
  },
  {
    id: 'case:follow-up-email',
    label: 'follow-up email',
    category: 'communication',
    aliases: ['follow up email', 'follow-up email', 'email follow up', 'reply email'],
    reason: 'A short follow-up email is often needed alongside the formal letter.',
  },
  {
    id: 'case:chances-assessment',
    label: 'chances assessment',
    category: 'report',
    aliases: ['chances assessment', 'merits assessment', 'risk assessment', 'case assessment'],
    reason: 'The operator needs a concise merits and risk view before deciding next steps.',
  },
  {
    id: 'case:action-plan',
    label: 'action plan',
    category: 'task',
    aliases: ['action plan', 'urgent action plan', 'task plan', 'checklist', 'timeline'],
    reason: 'A case-management instruction should leave the operator with concrete next actions.',
  },
  {
    id: 'case:negotiation-guide',
    label: 'negotiation guide',
    category: 'communication',
    aliases: ['negotiation guide', 'pursuit guide', 'guarantor guide', 'counter argument guide'],
    reason: 'Negotiation material prevents duplicating strategy work into new drafts.',
  },
  {
    id: 'case:phone-script',
    label: 'phone script',
    category: 'communication',
    aliases: ['phone script', 'call script', 'telephone script'],
    reason: 'Live case management often needs a prepare-only script for calls.',
  },
  {
    id: 'case:escalation-template',
    label: 'OIA/SPSO escalation template',
    category: 'draft',
    aliases: ['oia escalation template', 'spso escalation template', 'ombudsman escalation', 'escalation template'],
    reason: 'Accommodation and university disputes often need a next-step escalation template.',
  },
  {
    id: 'case:housing-emergency-checklist',
    label: 'housing emergency checklist',
    category: 'task',
    aliases: ['housing emergency checklist', 'emergency housing checklist', 'housing checklist', 'emergency checklist'],
    reason: 'Housing-risk matters need an emergency checklist rather than another general analysis.',
  },
];

const GENERIC_CASE_REQUIREMENTS: GapRequirement[] = [
  {
    id: 'case:case-assessment',
    label: 'case assessment',
    category: 'report',
    aliases: ['case assessment', 'merits assessment', 'risk assessment', 'chances assessment'],
    reason: 'A broad case-management request needs a concise assessment of the current position.',
  },
  {
    id: 'case:action-plan',
    label: 'action plan',
    category: 'task',
    aliases: ['action plan', 'task plan', 'checklist', 'timeline'],
    reason: 'A broad case-management request needs concrete next actions.',
  },
  {
    id: 'case:primary-communication',
    label: 'primary communication draft',
    category: 'draft',
    aliases: ['communication draft', 'letter', 'email', 'notice', 'draft'],
    reason: 'A broad case-management request usually needs the next prepare-only communication.',
  },
];

export async function buildCaseGapAnalysis(input: CaseGapAnalysisInput): Promise<GapAnalysisResult> {
  const [artifacts, candidates, evidence, outputBundle] = await Promise.all([
    listArtifacts(input.matterName).catch(() => []),
    listCandidates(input.matterName).catch(() => []),
    listEvidence(input.matterName).catch(() => []),
    getDocumentOutputBundle(input.matterName).catch(() => undefined),
  ]);
  const latestEvidenceIngested = latestTimestamp(evidence.map((record) => record.ingested));
  const requirements = deriveCaseRequirements(input);
  return analyzeRequirements({
    matterName: input.matterName,
    force: Boolean(input.force),
    requirements,
    inventoryInput: {
      artifacts,
      candidates,
      outputBundles: outputBundle ? [outputBundle] : [],
      latestEvidenceIngested,
    },
  });
}

export async function buildOrchestrationGapAnalysis(input: OrchestrationGapAnalysisInput): Promise<GapAnalysisResult> {
  const phases = input.phases ?? getDefaultPhases();
  const [artifacts, candidates, evidence] = await Promise.all([
    listArtifacts(input.matterName).catch(() => []),
    listCandidates(input.matterName).catch(() => []),
    listEvidence(input.matterName).catch(() => []),
  ]);
  const latestEvidenceIngested = latestTimestamp(evidence.map((record) => record.ingested));
  const requirements = phases.flatMap((phase) => phase.expectedOutputTypes.map((outputType) => ({
    id: `${phase.id}:${outputType}`,
    label: readableLabel(outputType),
    category: categoryForLegalOutput(outputType),
    aliases: aliasesForLegalOutput(outputType),
    reason: `${phase.name} expects ${readableLabel(outputType)}.`,
    phaseId: phase.id,
    outputType,
  } satisfies GapRequirement)));

  return analyzeRequirements({
    matterName: input.matterName,
    force: Boolean(input.force),
    requirements,
    inventoryInput: {
      artifacts,
      candidates,
      latestEvidenceIngested,
    },
  });
}

export function formatGapAnalysisForPrompt(result: GapAnalysisResult): string {
  const lines = [
    `Smart gap analysis for ${result.matterName}:`,
    result.summary,
    `Latest evidence ingested: ${result.latestEvidenceIngested ?? '(none)'}`,
    `Force reproduction: ${result.force ? 'yes' : 'no'}`,
    '',
    'Existing inventory:',
    ...result.inventory.map((asset) =>
      `- ${asset.source}:${asset.id} [${asset.category}/${asset.type}] ${asset.title}${asset.stale ? ` (stale: ${asset.staleReason})` : ''}`,
    ),
    '',
    'Skip these complete deliverables:',
    ...(result.skipped.length > 0
      ? result.skipped.map((match) => `- ${match.requirementLabel} -> ${match.assetSource}:${match.assetId} (${match.assetTitle})`)
      : ['- (none)']),
    '',
    'Produce only these missing or stale deliverables:',
    ...(result.toProduce.length > 0
      ? result.toProduce.map((requirement) => `- ${requirement.label} (${requirement.category}): ${requirement.reason}`)
      : ['- (none)']),
  ];
  return lines.join('\n');
}

function analyzeRequirements(input: {
  matterName: string;
  force: boolean;
  requirements: GapRequirement[];
  inventoryInput: InventoryInput;
}): GapAnalysisResult {
  const inventory = buildInventory(input.inventoryInput);
  const complete: GapMatch[] = [];
  const stale: GapMatch[] = [];
  const gaps: GapRequirement[] = [];

  for (const requirement of input.requirements) {
    const matches = inventory.filter((asset) => assetMatchesRequirement(asset, requirement));
    const freshMatch = bestAsset(matches.filter((asset) => !asset.stale));
    if (freshMatch) {
      complete.push(toMatch(requirement, freshMatch));
      continue;
    }
    const staleMatch = bestAsset(matches.filter((asset) => asset.stale));
    if (staleMatch) {
      stale.push(toMatch(requirement, staleMatch));
      continue;
    }
    gaps.push(requirement);
  }

  const toProduce = input.force
    ? input.requirements
    : [
        ...gaps,
        ...stale.map((match) => input.requirements.find((requirement) => requirement.id === match.requirementId)).filter(isRequirement),
      ];
  const skipped = input.force ? [] : complete;
  const noNewWorkNeeded = !input.force && toProduce.length === 0;

  return {
    matterName: input.matterName,
    generatedAt: new Date().toISOString(),
    force: input.force,
    latestEvidenceIngested: input.inventoryInput.latestEvidenceIngested,
    inventory,
    requirements: input.requirements,
    complete,
    stale,
    gaps,
    skipped,
    toProduce,
    noNewWorkNeeded,
    summary: buildSummary({
      inventoryCount: inventory.length,
      completeCount: complete.length,
      staleCount: stale.length,
      gapCount: gaps.length,
      toProduceCount: toProduce.length,
      force: input.force,
      noNewWorkNeeded,
    }),
  };
}

function buildInventory(input: InventoryInput): GapInventoryAsset[] {
  const artifactAssets = input.artifacts.map((artifact) => {
    const timestamp = artifact.accepted;
    const staleReason = staleReasonFor(timestamp, input.latestEvidenceIngested, 'accepted');
    return {
      id: artifact.id,
      source: 'artifact' as const,
      status: 'accepted' as const,
      type: artifact.type,
      category: classifyCategory(artifact.type, artifact.title),
      title: artifact.title,
      timestamp,
      stale: Boolean(staleReason),
      staleReason,
      summary: summarizeContent(artifact.content, artifact.title),
    };
  });

  const candidateAssets = input.candidates
    .filter((candidate) => candidate.status !== 'rejected')
    .map((candidate) => {
      const timestamp = candidate.created;
      const staleReason = staleReasonFor(timestamp, input.latestEvidenceIngested, 'created');
      return {
        id: candidate.id,
        source: 'candidate' as const,
        status: 'candidate' as const,
        type: candidate.type,
        category: classifyCategory(candidate.type, candidate.title),
        title: candidate.title,
        timestamp,
        stale: Boolean(staleReason),
        staleReason,
        summary: summarizeContent(candidate.content, candidate.title),
      };
    });

  const outputAssets = (input.outputBundles ?? []).map((bundle) => {
    const staleReason = staleReasonFor(bundle.generatedAt, input.latestEvidenceIngested, 'created');
    return {
      id: bundle.id,
      source: 'output' as const,
      status: 'output' as const,
      type: 'report' as const,
      category: 'report' as const,
      title: bundle.title,
      timestamp: bundle.generatedAt,
      stale: Boolean(staleReason),
      staleReason,
      summary: `${bundle.summary} ${bundle.outputCount} file(s) in ${bundle.path}.`,
    };
  });

  return [...artifactAssets, ...candidateAssets, ...outputAssets].sort((a, b) => {
    const aTime = a.timestamp ?? '';
    const bTime = b.timestamp ?? '';
    return aTime.localeCompare(bTime);
  });
}

function deriveCaseRequirements(input: CaseGapAnalysisInput): GapRequirement[] {
  const requestedType = input.requestedType ?? 'case_management';
  const context = `${input.matterName} ${input.instruction}`;
  const broad = requestedType === 'case_management' || CASE_BROAD_RE.test(input.instruction);
  if (!broad) {
    return [singleCaseRequirement(input.instruction, requestedType)];
  }
  if (HOUSING_CONTEXT_RE.test(context)) {
    return CASE_REQUIREMENTS;
  }
  return GENERIC_CASE_REQUIREMENTS;
}

function singleCaseRequirement(instruction: string, requestedType: string): GapRequirement {
  const category = categoryForRequestedType(requestedType);
  const inferredLabel = inferSingleRequirementLabel(instruction, requestedType);
  return {
    id: `case:${slugify(inferredLabel)}`,
    label: inferredLabel,
    category,
    aliases: aliasesForInstruction(instruction, requestedType, inferredLabel),
    reason: `The operator requested ${inferredLabel}.`,
    outputType: requestedType,
  };
}

function inferSingleRequirementLabel(instruction: string, requestedType: string): string {
  const lower = instruction.toLowerCase();
  if (/\bfollow[- ]?up\b/.test(lower) && /\bemail|e-mail\b/.test(lower)) return 'follow-up email';
  if (/\bcomplaint\b/.test(lower) && /\bletter\b/.test(lower)) return 'complaint letter';
  if (/\bphone|call\b/.test(lower) && /\bscript\b/.test(lower)) return 'phone script';
  if (/\baction plan\b/.test(lower)) return 'action plan';
  if (/\bchecklist\b/.test(lower)) return 'checklist';
  if (/\breport|assessment\b/.test(lower)) return 'assessment report';
  if (/\bletter\b/.test(lower)) return 'letter draft';
  if (/\bemail|e-mail\b/.test(lower)) return 'email draft';
  return readableLabel(requestedType);
}

function aliasesForInstruction(instruction: string, requestedType: string, label: string): string[] {
  const aliases = new Set<string>([label, readableLabel(requestedType), requestedType]);
  const lower = normalizeText(instruction);
  for (const phrase of [
    'follow up email',
    'follow-up email',
    'complaint letter',
    'phone script',
    'call script',
    'action plan',
    'checklist',
    'negotiation guide',
    'case assessment',
    'assessment report',
    'draft',
    'letter',
    'email',
  ]) {
    if (lower.includes(normalizeText(phrase))) aliases.add(phrase);
  }
  return [...aliases];
}

function aliasesForLegalOutput(outputType: LegalArtifactType): string[] {
  return [...new Set([
    readableLabel(outputType),
    outputType,
    ...(LEGAL_ALIASES[outputType] ?? []),
  ])];
}

function classifyCategory(type: ArtifactType, title: string): GapAssetCategory {
  const text = normalizeText(title);
  if (/\b(script|guide|negotiation|counter argument|phone|call)\b/.test(text)) return 'communication';
  if (/\b(action plan|checklist|check list|timeline|todo|task|filing)\b/.test(text)) return 'task';
  if (/\b(letter|email|notice|complaint|template|application|statement|draft|order|claim)\b/.test(text)) return 'draft';
  if (/\b(report|assessment|analysis|memo|research|chances|entitlements|chronology|matrix|map|register|handoff)\b/.test(text)) return 'report';

  switch (type) {
    case 'email':
    case 'communication':
      return 'communication';
    case 'task':
      return 'task';
    case 'draft':
      return 'draft';
    case 'analysis':
    case 'case_management':
    case 'extraction':
    case 'report':
    case 'review':
      return 'report';
    default:
      return 'report';
  }
}

function categoryForRequestedType(type: string): GapAssetCategory {
  if (type === 'email' || type === 'communication') return 'communication';
  if (type === 'task') return 'task';
  if (type === 'draft') return 'draft';
  return 'report';
}

function categoryForLegalOutput(outputType: LegalArtifactType): GapAssetCategory {
  if (/_letter$|_draft$|_statement$|_order$|draft_document/.test(outputType)) return 'draft';
  if (/checklist|bundle_index|war_room_pack/.test(outputType)) return 'task';
  return 'report';
}

function assetMatchesRequirement(asset: GapInventoryAsset, requirement: GapRequirement): boolean {
  const assetText = normalizeText(`${asset.id} ${asset.title} ${asset.type} ${asset.category} ${asset.summary}`);
  for (const alias of requirement.aliases) {
    const normalizedAlias = normalizeText(alias);
    if (normalizedAlias.length >= 4 && assetText.includes(normalizedAlias)) {
      return true;
    }
  }

  const requirementTokens = new Set(
    requirement.aliases.flatMap((alias) => significantTokens(alias)).concat(significantTokens(requirement.label)),
  );
  if (requirementTokens.size === 0) return false;
  const assetTokens = new Set(significantTokens(assetText));
  const overlap = [...requirementTokens].filter((token) => assetTokens.has(token));
  const threshold = requirement.category === asset.category ? 2 : 3;
  return overlap.length >= Math.min(threshold, requirementTokens.size);
}

function bestAsset(matches: GapInventoryAsset[]): GapInventoryAsset | undefined {
  return [...matches].sort((a, b) => {
    if (a.source !== b.source) return sourceRank(a.source) - sourceRank(b.source);
    return (b.timestamp ?? '').localeCompare(a.timestamp ?? '');
  })[0];
}

function sourceRank(source: GapAssetSource): number {
  switch (source) {
    case 'artifact':
      return 1;
    case 'output':
      return 2;
    case 'candidate':
      return 3;
  }
}

function toMatch(requirement: GapRequirement, asset: GapInventoryAsset): GapMatch {
  return {
    requirementId: requirement.id,
    requirementLabel: requirement.label,
    assetId: asset.id,
    assetTitle: asset.title,
    assetSource: asset.source,
    stale: asset.stale,
    staleReason: asset.staleReason,
  };
}

function staleReasonFor(timestamp: string | undefined, latestEvidenceIngested: string | undefined, verb: 'accepted' | 'created'): string | undefined {
  if (!timestamp || !latestEvidenceIngested) return undefined;
  const itemTime = Date.parse(timestamp);
  const evidenceTime = Date.parse(latestEvidenceIngested);
  if (!Number.isFinite(itemTime) || !Number.isFinite(evidenceTime)) return undefined;
  if (itemTime < evidenceTime) {
    return `item was ${verb} before latest evidence was ingested (${latestEvidenceIngested})`;
  }
  return undefined;
}

function latestTimestamp(values: string[]): string | undefined {
  const sorted = values.filter((value) => Number.isFinite(Date.parse(value))).sort();
  return sorted.at(-1);
}

function summarizeContent(content: string, fallback: string): string {
  const heading = /^#\s+(.+)$/m.exec(content)?.[1]?.trim();
  if (heading) return heading;
  return content.replace(/\s+/g, ' ').trim().slice(0, 280) || fallback;
}

function buildSummary(input: {
  inventoryCount: number;
  completeCount: number;
  staleCount: number;
  gapCount: number;
  toProduceCount: number;
  force: boolean;
  noNewWorkNeeded: boolean;
}): string {
  if (input.force) {
    return `Found ${input.inventoryCount} existing deliverable(s). Force enabled: ${input.toProduceCount} requirement(s) will be produced again.`;
  }
  if (input.noNewWorkNeeded) {
    return `Found ${input.inventoryCount} existing deliverable(s). No new work needed: ${input.completeCount} complete, 0 stale, 0 missing.`;
  }
  return `Found ${input.inventoryCount} existing deliverable(s). ${input.completeCount} complete, ${input.staleCount} stale, ${input.gapCount} missing; produce ${input.toProduceCount} gap(s).`;
}

function readableLabel(value: string): string {
  return value.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function slugify(value: string): string {
  return normalizeText(value).replace(/\s+/g, '-');
}

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/[_-]+/g, ' ').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function significantTokens(value: string): string[] {
  const stop = new Set(['and', 'the', 'for', 'with', 'from', 'into', 'that', 'this', 'only', 'case', 'draft', 'report']);
  return normalizeText(value).split(/\s+/).filter((token) => token.length > 3 && !stop.has(token));
}

function isRequirement(value: GapRequirement | undefined): value is GapRequirement {
  return Boolean(value);
}
