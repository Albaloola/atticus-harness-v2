import { mkdir, readdir, readFile, rename, stat, writeFile } from 'fs/promises';
import { basename, dirname, extname, join } from 'path';
import JSZip from 'jszip';
import { searchScotCourtsCorpus } from '../rules/scotcourts-corpus.js';
import { appendEvent } from '../state/events.js';
import { listArtifacts } from '../storage/artifact.js';
import { listCandidates } from '../storage/candidate.js';
import { getMatterPath } from '../storage/matter.js';
import type { Artifact, ArtifactType, CandidateArtifact, CitationRef } from '../types/artifact.js';

export type DocumentOutputKind = 'letter' | 'email' | 'form' | 'report' | 'task' | 'script' | 'reference';
export type DocumentOutputFormat = 'docx' | 'txt';

export interface RunDocumentOutputPipelineInput {
  matterName: string;
  objective?: string;
  outputContracts?: DocumentOutputContract[];
  allowRemoteFormDownload?: boolean;
  scotCourtsSourceDir?: string;
  scotCourtsCachePath?: string;
  officialFormSearchBaseUrl?: string;
  generatedAt?: Date;
  runId?: string;
  taskId?: string;
}

export interface DocumentOutputContract {
  desiredKind?: DocumentOutputKind;
  title?: string;
  audience?: string;
  forum?: string;
  formQuery?: string;
  exactFormRequired?: boolean;
  source: 'orchestrator' | 'inferred';
}

export interface FormSourceResolution {
  status: 'not_needed' | 'local_found' | 'remote_downloaded' | 'missing';
  required: boolean;
  query?: string;
  title?: string;
  path?: string;
  url?: string;
  source?: 'scotcourts_local' | 'scotcourts_official';
  message: string;
}

export interface ProducedDocumentOutput {
  id: string;
  sourceId: string;
  source: 'artifact' | 'candidate';
  title: string;
  kind: DocumentOutputKind;
  format: DocumentOutputFormat;
  formatGuideline: string;
  path: string;
  contract?: DocumentOutputContract;
  formSource?: FormSourceResolution;
  archivedPreviousPath?: string;
}

export interface DocumentOutputManifest {
  version: 1;
  matterName: string;
  generatedAt: string;
  phaseId: 'document_output_pipeline';
  sourceCount: number;
  producedCount: number;
  archivedCount: number;
  blockers: string[];
  outputs: ProducedDocumentOutput[];
  summary: string;
}

export interface DocumentOutputPipelineResult {
  matterName: string;
  outputDir: string;
  manifestPath: string;
  sourceCount: number;
  produced: ProducedDocumentOutput[];
  archived: string[];
  blockers: string[];
  summary: string;
}

export interface DocumentOutputBundleSummary {
  id: 'document_output_bundle';
  title: string;
  path: string;
  generatedAt: string;
  outputCount: number;
  summary: string;
}

interface AcceptedWorkProduct {
  id: string;
  source: 'artifact' | 'candidate';
  type: ArtifactType;
  title: string;
  content: string;
  acceptedAt: string;
  citations: CitationRef[];
}

interface DocxParagraph {
  text: string;
  style?: 'Title' | 'Heading1' | 'Heading2' | 'Heading3' | 'ListParagraph' | 'Normal';
}

const OUTPUT_MANIFEST = 'manifest.json';
const ARCHIVE_DIR = 'archived';

const AIISM_REMEDIES: Array<[RegExp, string]> = [
  [/It is worth noting that\b/gi, ''],
  [/It should be noted that\b/gi, ''],
  [/Furthermore,?\b/gi, ''],
  [/Moreover,?\b/gi, ''],
  [/In addition,?\b/gi, ''],
  [/It is important to\b/gi, ''],
  [/\b(arguably|possibly|potentially)\s+/gi, ''],
  [/(it may be|it could be)\s+(worth|considered|argued)\s+/gi, ''],
  [/\byou may want to\b/gi, 'you should'],
  [/\byou might consider\b/gi, 'do this:'],
];

const OUTPUT_PROFILES: Record<DocumentOutputKind, { label: string; guideline: string }> = {
  letter: {
    label: 'Formal letter',
    guideline: 'Use a formal letter layout with address blocks, date, subject, salutation, body, and signature block.',
  },
  email: {
    label: 'Plain text email',
    guideline: 'Use a clean subject line, readable plain text body, and no unnecessary Word formatting.',
  },
  form: {
    label: 'Submission form',
    guideline: 'Use the official form source where a specific form is requested. Preserve field labels, section order, signature blocks, date blocks, and formal spacing.',
  },
  report: {
    label: 'Polished report',
    guideline: 'Use a presentable report layout with a title page style heading, structured sections, readable paragraphs, and source references.',
  },
  task: {
    label: 'Action plan',
    guideline: 'Use a structured action-plan layout with priorities, checkbox items, timelines, and concise task wording.',
  },
  script: {
    label: 'Script',
    guideline: 'Use a script layout with role headers, escalation paths, and clear if they say this, you say this wording.',
  },
  reference: {
    label: 'Reference guide',
    guideline: 'Use a tidy reference layout with section headings, concise guidance, and scannable bullets.',
  },
};

export async function runDocumentOutputPipeline(
  input: RunDocumentOutputPipelineInput,
): Promise<DocumentOutputPipelineResult> {
  const generatedAt = input.generatedAt ?? new Date();
  const generatedIso = generatedAt.toISOString();
  const outputDir = getMatterPath(input.matterName, '_output');
  const manifestPath = join(outputDir, OUTPUT_MANIFEST);
  await mkdir(outputDir, { recursive: true });

  const sources = await loadAcceptedWorkProducts(input.matterName);
  if (sources.length === 0) {
    const result: DocumentOutputPipelineResult = {
      matterName: input.matterName,
      outputDir,
      manifestPath,
      sourceCount: 0,
      produced: [],
      archived: [],
      blockers: ['No reducer-accepted artifacts or accepted candidates were available for document output.'],
      summary: `No document outputs produced for ${input.matterName}: there are no accepted work products to format.`,
    };
    await writeManifest(result, generatedIso);
    return result;
  }

  const produced: ProducedDocumentOutput[] = [];
  const archived: string[] = [];
  const blockers: string[] = [];
  const contracts = input.outputContracts ?? deriveOutputContracts(input.objective);

  for (const source of sources) {
    const contract = selectOutputContract(source, contracts, input.objective);
    const kind = contract.desiredKind ?? classifyDocumentOutput(source);
    const format: DocumentOutputFormat = kind === 'email' ? 'txt' : 'docx';
    const title = cleanOutputText(source.title);
    const formSource = await resolveFormSource({
      source,
      kind,
      contract,
      objective: input.objective,
      outputDir,
      generatedAt,
      scotCourtsSourceDir: input.scotCourtsSourceDir,
      scotCourtsCachePath: input.scotCourtsCachePath,
      allowRemoteDownload: input.allowRemoteFormDownload ?? false,
      officialFormSearchBaseUrl: input.officialFormSearchBaseUrl,
    });
    if (formSource.status === 'missing' && formSource.required) {
      blockers.push(formSource.message);
      continue;
    }

    const outputIndex = produced.length + 1;
    const outputPath = join(
      outputDir,
      `${String(outputIndex).padStart(2, '0')}-${sanitizeFileName(title)}.${format}`,
    );
    const archivedPreviousPath = await archiveExistingOutput(outputPath, generatedAt);
    if (archivedPreviousPath) archived.push(archivedPreviousPath);

    const cleanBody = humanize(source.content);
    const outputSource = { ...source, title };
    if (format === 'txt') {
      await writeFile(outputPath, renderEmailText(outputSource, cleanBody, generatedIso), 'utf-8');
    } else {
      const buffer = await renderDocx({
        matterName: input.matterName,
        title,
        kind,
        sourceId: source.id,
        generatedIso,
        body: cleanBody,
        citations: source.citations,
        contract,
        formSource,
      });
      await writeFile(outputPath, buffer);
    }

    produced.push({
      id: `${outputIndex}-${source.id}`,
      sourceId: source.id,
      source: source.source,
      title,
      kind,
      format,
      formatGuideline: outputFormatGuideline(kind),
      path: outputPath,
      contract,
      formSource: formSource.status === 'not_needed' ? undefined : formSource,
      archivedPreviousPath,
    });
  }

  const result: DocumentOutputPipelineResult = {
    matterName: input.matterName,
    outputDir,
    manifestPath,
    sourceCount: sources.length,
    produced,
    archived,
    blockers,
    summary: `${produced.length} document output(s) produced for ${input.matterName}; ${archived.length} superseded file(s) archived${blockers.length > 0 ? `; ${blockers.length} blocker(s) remain` : ''}.`,
  };
  await writeManifest(result, generatedIso);
  await appendEvent({
    matterName: input.matterName,
    type: 'output.documents.produced',
    runId: input.runId,
    taskId: input.taskId,
    data: {
      producedCount: produced.length,
      archivedCount: archived.length,
      blockerCount: blockers.length,
      blockers,
      outputDir,
      manifestPath,
      outputs: produced.map((output) => ({
        path: output.path,
        kind: output.kind,
        format: output.format,
        sourceId: output.sourceId,
      })),
    },
    source: 'document_output_pipeline',
  });

  return result;
}

export async function listDocumentOutputs(matterName: string): Promise<ProducedDocumentOutput[]> {
  const manifestPath = getMatterPath(matterName, '_output', OUTPUT_MANIFEST);
  try {
    const content = await readFile(manifestPath, 'utf-8');
    const manifest = JSON.parse(content) as DocumentOutputManifest;
    return Array.isArray(manifest.outputs) ? manifest.outputs : [];
  } catch {
    return [];
  }
}

export async function getDocumentOutputBundle(matterName: string): Promise<DocumentOutputBundleSummary | undefined> {
  const manifestPath = getMatterPath(matterName, '_output', OUTPUT_MANIFEST);
  try {
    const content = await readFile(manifestPath, 'utf-8');
    const manifest = JSON.parse(content) as DocumentOutputManifest;
    if (manifest.phaseId !== 'document_output_pipeline') return undefined;
    if (!Array.isArray(manifest.outputs) || manifest.outputs.length === 0) return undefined;
    return {
      id: 'document_output_bundle',
      title: 'Document Output Bundle',
      path: manifestPath,
      generatedAt: manifest.generatedAt,
      outputCount: manifest.outputs.length,
      summary: manifest.summary,
    };
  } catch {
    return undefined;
  }
}

export function deriveOutputContracts(objective?: string): DocumentOutputContract[] {
  if (!objective?.trim()) return [];
  const normalized = normalizeText(objective);
  const hasOutputDirective = /\b(produce|create|prepare|draft|write|format|generate|output|export|fill|complete|want|wants|need|needs)\b/.test(normalized);
  const shortStandaloneRequest = normalized.split(/\s+/).length <= 6;
  const desiredKind = hasOutputDirective || shortStandaloneRequest ? parseDesiredKind(normalized) : undefined;
  const exactFormRequired = /\b(exact|specific|official|scotcourts|court form|form to be filled|fill(?:ed)? in|complete(?:d)? form)\b/.test(normalized)
    && /\b(form|petition|witness statement|statement of truth|schedule of loss|draft order|claim form|application form)\b/.test(normalized);
  if (!desiredKind && !exactFormRequired) return [];

  return [
    {
      desiredKind: desiredKind ?? (exactFormRequired ? 'form' : undefined),
      title: extractRequestedTitle(objective),
      formQuery: desiredKind === 'form' || exactFormRequired ? extractFormQuery(objective) : undefined,
      exactFormRequired,
      source: 'orchestrator',
    },
  ];
}

function selectOutputContract(
  source: AcceptedWorkProduct,
  contracts: DocumentOutputContract[],
  objective?: string,
): DocumentOutputContract {
  const sourceTitle = normalizeText(source.title);
  const sourceId = normalizeText(source.id);
  const explicit = contracts.find((contract) => {
    const contractTitle = normalizeText(contract.title ?? '');
    return contractTitle && (sourceTitle.includes(contractTitle) || contractTitle.includes(sourceTitle) || sourceId.includes(contractTitle));
  }) ?? (contracts.length === 1 ? contracts[0] : undefined);
  if (explicit) return explicit;

  const inferredKind = classifyDocumentOutput(source);
  return {
    desiredKind: inferredKind,
    title: source.title,
    formQuery: inferredKind === 'form' ? buildFormQuery(source, objective) : undefined,
    exactFormRequired: inferredKind === 'form',
    source: 'inferred',
  };
}

function parseDesiredKind(normalizedObjective: string): DocumentOutputKind | undefined {
  if (/\b(email|e-mail)\b/.test(normalizedObjective)) return 'email';
  if (/\b(letter|pre action notice|pre-action notice|notice letter|complaint letter)\b/.test(normalizedObjective)) return 'letter';
  if (/\b(form|application form|petition|witness statement|statement of truth|schedule of loss|draft order|claim form)\b/.test(normalizedObjective)) return 'form';
  if (/\b(action plan|checklist|check list|task list|todo|next actions)\b/.test(normalizedObjective)) return 'task';
  if (/\b(script|phone script|call script|if they say)\b/.test(normalizedObjective)) return 'script';
  if (/\b(reference guide|guidance note|reference)\b/.test(normalizedObjective)) return 'reference';
  if (/\b(report|memo|memorandum|analysis)\b/.test(normalizedObjective)) return 'report';
  return undefined;
}

function extractRequestedTitle(objective: string): string | undefined {
  const match = /\b(?:produce|create|prepare|draft|fill(?:\s+in)?|complete)\s+(?:an?|the)?\s*([^.;\n]{4,90})/i.exec(objective);
  return match ? cleanOutputText(match[1].trim()) : undefined;
}

function extractFormQuery(objective: string): string {
  const knownForm = /\b(simple procedure application|time to pay application|fee exemption|witness statement|statement of truth|schedule of loss|draft order|claim form|notice of intention to defend|petition|application(?: form)?)\b/i.exec(objective);
  if (knownForm) return cleanOutputText(knownForm[1]);
  return cleanOutputText(extractRequestedTitle(objective) ?? objective).slice(0, 160);
}

function buildFormQuery(source: AcceptedWorkProduct, objective?: string): string {
  const combined = `${source.title} ${objective ?? ''}`;
  return extractFormQuery(combined);
}

async function resolveFormSource(input: {
  source: AcceptedWorkProduct;
  kind: DocumentOutputKind;
  contract: DocumentOutputContract;
  objective?: string;
  outputDir: string;
  generatedAt: Date;
  scotCourtsSourceDir?: string;
  scotCourtsCachePath?: string;
  allowRemoteDownload: boolean;
  officialFormSearchBaseUrl?: string;
}): Promise<FormSourceResolution> {
  const required = input.contract.exactFormRequired === true || input.kind === 'form';
  if (!required) {
    return {
      status: 'not_needed',
      required: false,
      message: 'No official form source required for this output.',
    };
  }

  const query = input.contract.formQuery ?? buildFormQuery(input.source, input.objective);
  const local = await findLocalScotCourtsForm(query, input.scotCourtsSourceDir, input.scotCourtsCachePath);
  if (local) {
    return {
      status: 'local_found',
      required,
      query,
      title: local.title,
      path: local.path,
      source: 'scotcourts_local',
      message: `Matched local ScotCourts form "${local.title}".`,
    };
  }

  if (input.allowRemoteDownload) {
    const remote = await downloadOfficialScotCourtsForm({
      query,
      outputDir: input.outputDir,
      generatedAt: input.generatedAt,
      officialFormSearchBaseUrl: input.officialFormSearchBaseUrl,
    });
    if (remote.status === 'remote_downloaded') return remote;
  }

  return {
    status: 'missing',
    required,
    query,
    source: 'scotcourts_official',
    message: `No matching ScotCourts form found for "${query}". Add the official form to the local ScotCourts corpus or enable remote form download before producing this exact form output.`,
  };
}

async function findLocalScotCourtsForm(
  query: string,
  sourceDir?: string,
  cachePath?: string,
): Promise<{ title: string; path: string } | undefined> {
  try {
    const results = await searchScotCourtsCorpus({
      query,
      phaseId: 'document_output_pipeline',
      skillIds: ['atticus-scotcourts-corpus'],
      documentKind: 'form',
      limit: 1,
      sourceDir,
      cachePath,
    });
    const best = results[0];
    return best ? { title: best.title, path: best.path } : undefined;
  } catch {
    return undefined;
  }
}

async function downloadOfficialScotCourtsForm(input: {
  query: string;
  outputDir: string;
  generatedAt: Date;
  officialFormSearchBaseUrl?: string;
}): Promise<FormSourceResolution> {
  const fetchImpl = globalThis.fetch;
  if (!fetchImpl) {
    return {
      status: 'missing',
      required: true,
      query: input.query,
      source: 'scotcourts_official',
      message: 'Remote form download is unavailable in this runtime.',
    };
  }

  try {
    const searchUrl = new URL(input.officialFormSearchBaseUrl ?? 'https://www.scotcourts.gov.uk/search');
    searchUrl.searchParams.set('query', input.query);
    searchUrl.searchParams.set('q', input.query);
    const searchResponse = await fetchImpl(searchUrl);
    if (!searchResponse.ok) {
      return missingRemoteForm(input.query, `ScotCourts search returned HTTP ${searchResponse.status}.`);
    }
    const html = await searchResponse.text();
    const formUrl = chooseOfficialFormUrl(html, searchUrl, input.query);
    if (!formUrl) {
      return missingRemoteForm(input.query, 'ScotCourts search did not return a downloadable official form link.');
    }

    const formResponse = await fetchImpl(formUrl);
    if (!formResponse.ok) {
      return missingRemoteForm(input.query, `Official form download returned HTTP ${formResponse.status}.`);
    }
    const formsDir = join(input.outputDir, 'forms');
    await mkdir(formsDir, { recursive: true });
    const extension = inferFormExtension(formUrl, formResponse.headers.get('content-type'));
    const formPath = join(formsDir, `${timestampForFile(input.generatedAt)}-${sanitizeFileName(input.query)}${extension}`);
    const arrayBuffer = await formResponse.arrayBuffer();
    await writeFile(formPath, Buffer.from(arrayBuffer));
    return {
      status: 'remote_downloaded',
      required: true,
      query: input.query,
      title: basename(formUrl.pathname) || input.query,
      path: formPath,
      url: formUrl.toString(),
      source: 'scotcourts_official',
      message: `Downloaded official ScotCourts form from ${formUrl.toString()}.`,
    };
  } catch (error) {
    return missingRemoteForm(input.query, error instanceof Error ? error.message : String(error));
  }
}

function chooseOfficialFormUrl(html: string, searchUrl: URL, query: string): URL | undefined {
  const links = [...html.matchAll(/href=["']([^"']+)["']/gi)]
    .map((match) => match[1])
    .filter((href) => /\.(pdf|docx?|rtf)(?:[?#].*)?$/i.test(href))
    .map((href) => {
      try {
        return new URL(href, searchUrl);
      } catch {
        return undefined;
      }
    })
    .filter((url): url is URL => Boolean(url))
    .filter((url) => url.hostname === 'scotcourts.gov.uk' || url.hostname.endsWith('.scotcourts.gov.uk'));

  const terms = normalizeText(query).split(/\s+/).filter((term) => term.length > 2);
  return links.sort((a, b) => scoreFormUrl(b, terms) - scoreFormUrl(a, terms))[0];
}

function scoreFormUrl(url: URL, terms: string[]): number {
  const text = normalizeText(`${url.pathname} ${url.search}`);
  return terms.reduce((score, term) => score + (text.includes(term) ? 1 : 0), 0);
}

function inferFormExtension(url: URL, contentType: string | null): string {
  const extension = extname(url.pathname).toLowerCase();
  if (['.pdf', '.doc', '.docx', '.rtf'].includes(extension)) return extension;
  const normalized = contentType?.toLowerCase() ?? '';
  if (normalized.includes('wordprocessingml')) return '.docx';
  if (normalized.includes('msword')) return '.doc';
  if (normalized.includes('rtf')) return '.rtf';
  return '.pdf';
}

function missingRemoteForm(query: string, reason: string): FormSourceResolution {
  return {
    status: 'missing',
    required: true,
    query,
    source: 'scotcourts_official',
    message: `Remote ScotCourts form lookup did not find "${query}": ${reason}`,
  };
}


export function classifyDocumentOutput(source: Pick<AcceptedWorkProduct, 'type' | 'title'>): DocumentOutputKind {
  const text = normalizeText(`${source.type} ${source.title}`);
  if (source.type === 'email' || /\b(email|e-mail)\b/.test(text)) return 'email';
  if (/\b(letter|notice|complaint|pre action|pre-action)\b/.test(text)) return 'letter';
  if (/\b(form|application|petition|witness statement|statement of truth|schedule of loss|draft order|claim form)\b/.test(text)) return 'form';
  if (source.type === 'task' || /\b(action plan|checklist|check list|timeline|todo|task)\b/.test(text)) return 'task';
  if (/\b(script|phone|call|if they say|you say)\b/.test(text)) return 'script';
  if (source.type === 'communication' || /\b(guide|negotiation|counter argument|reference)\b/.test(text)) return 'reference';
  return 'report';
}

export function outputFormatGuideline(kind: DocumentOutputKind): string {
  return OUTPUT_PROFILES[kind].guideline;
}

export function humanize(text: string): string {
  let next = text;
  for (const [pattern, replacement] of AIISM_REMEDIES) {
    next = next.replace(pattern, replacement);
  }
  return next
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/(^|[\s([{])\*(\S[^*]*\S|\S)\*($|[\s)\]}.,;:!?])/g, '$1$2$3')
    .replace(/(^|[\s([{])_(\S[^_]*\S|\S)_($|[\s)\]}.,;:!?])/g, '$1$2$3')
    .replace(/&mdash;|&#8212;|&#x2014;/gi, ' - ')
    .replace(/\u2014/g, ' - ')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .split('\n')
    .map((line) => line.replace(/[ \t]{2,}/g, ' ').trimEnd())
    .join('\n')
    .trim();
}

async function loadAcceptedWorkProducts(matterName: string): Promise<AcceptedWorkProduct[]> {
  const [artifacts, candidates] = await Promise.all([
    listArtifacts(matterName).catch(() => []),
    listCandidates(matterName).catch(() => []),
  ]);

  const products: AcceptedWorkProduct[] = artifacts.map((artifact) => fromArtifact(artifact));
  const artifactIds = new Set(products.map((product) => product.id));
  for (const candidate of candidates.filter((item) => item.status === 'accepted')) {
    if (artifactIds.has(candidate.id)) continue;
    products.push(fromCandidate(candidate));
  }

  const seen = new Set<string>();
  return products
    .filter((product) => {
      const key = `${normalizeText(product.title)}:${normalizeText(product.content).slice(0, 500)}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => {
      const kindOrder = outputKindRank(classifyDocumentOutput(a)) - outputKindRank(classifyDocumentOutput(b));
      if (kindOrder !== 0) return kindOrder;
      return a.acceptedAt.localeCompare(b.acceptedAt) || a.title.localeCompare(b.title);
    });
}

function fromArtifact(artifact: Artifact): AcceptedWorkProduct {
  return {
    id: artifact.id,
    source: 'artifact',
    type: artifact.type,
    title: artifact.title,
    content: artifact.content,
    acceptedAt: artifact.accepted,
    citations: artifact.citations,
  };
}

function fromCandidate(candidate: CandidateArtifact): AcceptedWorkProduct {
  return {
    id: candidate.id,
    source: 'candidate',
    type: candidate.type,
    title: candidate.title,
    content: candidate.content,
    acceptedAt: candidate.created,
    citations: candidate.metadata.citations ?? [],
  };
}

function outputKindRank(kind: DocumentOutputKind): number {
  switch (kind) {
    case 'letter':
      return 1;
    case 'email':
      return 2;
    case 'form':
      return 3;
    case 'task':
      return 4;
    case 'script':
      return 5;
    case 'reference':
      return 6;
    case 'report':
      return 7;
  }
}

async function archiveExistingOutput(outputPath: string, generatedAt: Date): Promise<string | undefined> {
  try {
    const existing = await stat(outputPath);
    if (!existing.isFile()) return undefined;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return undefined;
    throw error;
  }

  const archiveDir = join(dirname(outputPath), ARCHIVE_DIR);
  await mkdir(archiveDir, { recursive: true });
  const archivedPath = join(archiveDir, `${timestampForFile(generatedAt)}-${basename(outputPath)}`);
  await rename(outputPath, archivedPath);
  return archivedPath;
}

async function writeManifest(result: DocumentOutputPipelineResult, generatedIso: string): Promise<void> {
  const manifest: DocumentOutputManifest = {
    version: 1,
    matterName: result.matterName,
    generatedAt: generatedIso,
    phaseId: 'document_output_pipeline',
    sourceCount: result.sourceCount,
    producedCount: result.produced.length,
    archivedCount: result.archived.length,
    blockers: result.blockers,
    outputs: result.produced,
    summary: result.summary,
  };
  await writeFile(result.manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
}

function renderEmailText(source: AcceptedWorkProduct, body: string, generatedIso: string): string {
  const bodyWithoutTitle = stripLeadingTitle(body, source.title);
  const existingSubject = /^subject\s*:/im.test(bodyWithoutTitle);
  const lines = [
    existingSubject ? undefined : `Subject: ${source.title}`,
    existingSubject ? undefined : '',
    bodyWithoutTitle || '[Email body]',
    '',
    `Prepared from ${source.source} ${source.id} on ${generatedIso.slice(0, 10)}.`,
  ].filter((line): line is string => line !== undefined);
  return `${lines.join('\n')}\n`;
}

async function renderDocx(input: {
  matterName: string;
  title: string;
  kind: DocumentOutputKind;
  sourceId: string;
  generatedIso: string;
  body: string;
  citations: CitationRef[];
  contract: DocumentOutputContract;
  formSource: FormSourceResolution;
}): Promise<Buffer> {
  const zip = new JSZip();
  const paragraphs = buildDocumentParagraphs(input);
  zip.file('[Content_Types].xml', contentTypesXml());
  zip.folder('_rels')?.file('.rels', rootRelsXml());
  zip.folder('docProps')?.file('core.xml', corePropsXml(input.title, input.matterName, input.generatedIso));
  zip.folder('docProps')?.file('app.xml', appPropsXml());
  zip.folder('word')?.file('document.xml', documentXml(paragraphs, input.matterName));
  zip.folder('word')?.file('styles.xml', stylesXml());
  zip.folder('word')?.file('footer1.xml', footerXml(input.matterName, input.generatedIso));
  zip.folder('word')?.folder('_rels')?.file('document.xml.rels', documentRelsXml());
  return zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
}

function buildDocumentParagraphs(input: {
  matterName: string;
  title: string;
  kind: DocumentOutputKind;
  sourceId: string;
  generatedIso: string;
  body: string;
  citations: CitationRef[];
  contract: DocumentOutputContract;
  formSource: FormSourceResolution;
}): DocxParagraph[] {
  const date = input.generatedIso.slice(0, 10);
  const body = stripLeadingTitle(input.body, input.title);
  const paragraphs: DocxParagraph[] = [];

  if (input.kind === 'letter') {
    paragraphs.push(
      { text: '[Sender address]', style: 'Normal' },
      { text: '[Recipient address]', style: 'Normal' },
      { text: date, style: 'Normal' },
      { text: `Re: ${input.title}`, style: 'Heading1' },
      { text: 'Dear Sir/Madam,', style: 'Normal' },
      ...markdownToParagraphs(body),
      { text: 'Yours faithfully,', style: 'Normal' },
      { text: '[Signature]', style: 'Normal' },
    );
  } else if (input.kind === 'form') {
    paragraphs.push(
      { text: input.title, style: 'Title' },
      { text: `Matter: ${input.matterName}`, style: 'Normal' },
      { text: `Prepared: ${date}`, style: 'Normal' },
      { text: 'Official Form Completion Pack', style: 'Heading1' },
      { text: `Required form: ${input.formSource.query ?? input.contract.formQuery ?? input.title}`, style: 'Normal' },
      { text: `Form source: ${input.formSource.title ?? input.formSource.message}`, style: 'Normal' },
      ...(input.formSource.path ? [{ text: `Source path: ${input.formSource.path}`, style: 'Normal' as const }] : []),
      ...(input.formSource.url ? [{ text: `Source URL: ${input.formSource.url}`, style: 'Normal' as const }] : []),
      { text: 'Completion Content', style: 'Heading1' },
      ...markdownToParagraphs(body),
    );
  } else if (input.kind === 'task') {
    paragraphs.push(
      { text: input.title, style: 'Title' },
      { text: `Matter: ${input.matterName}`, style: 'Normal' },
      { text: `Prepared: ${date}`, style: 'Normal' },
      { text: 'Priority Actions', style: 'Heading1' },
      ...markdownToParagraphs(body),
    );
  } else if (input.kind === 'script' || input.kind === 'reference') {
    paragraphs.push(
      { text: input.title, style: 'Title' },
      { text: `Matter: ${input.matterName}`, style: 'Normal' },
      { text: `Prepared: ${date}`, style: 'Normal' },
      { text: input.kind === 'script' ? 'Script and Escalation Paths' : 'Reference Guide', style: 'Heading1' },
      ...markdownToParagraphs(body),
    );
  } else {
    paragraphs.push(
      { text: input.title, style: 'Title' },
      { text: `Matter: ${input.matterName}`, style: 'Normal' },
      { text: `Source artifact: ${input.sourceId}`, style: 'Normal' },
      { text: `Prepared: ${date}`, style: 'Normal' },
      { text: 'Contents', style: 'Heading1' },
      ...markdownToParagraphs(body),
    );
  }

  if (input.citations.length > 0) {
    paragraphs.push({ text: 'Source References', style: 'Heading1' });
    for (const citation of input.citations) {
      paragraphs.push({
        text: `${citation.citationId}: ${citation.evidenceId}${citation.locator ? ` (${citation.locator})` : ''}`,
        style: 'ListParagraph',
      });
    }
  }

  return paragraphs;
}

function markdownToParagraphs(text: string): DocxParagraph[] {
  const paragraphs: DocxParagraph[] = [];
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line) {
      paragraphs.push({ text: '', style: 'Normal' });
      continue;
    }
    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      paragraphs.push({
        text: cleanMarkdownLine(heading[2]),
        style: level === 1 ? 'Heading1' : level === 2 ? 'Heading2' : 'Heading3',
      });
      continue;
    }
    const checkbox = /^[-*]\s+\[( |x|X)\]\s+(.+)$/.exec(line);
    if (checkbox) {
      paragraphs.push({ text: `[${checkbox[1].trim().toLowerCase() === 'x' ? 'x' : ' '}] ${cleanMarkdownLine(checkbox[2])}`, style: 'ListParagraph' });
      continue;
    }
    const bullet = /^[-*]\s+(.+)$/.exec(line);
    if (bullet) {
      paragraphs.push({ text: `- ${cleanMarkdownLine(bullet[1])}`, style: 'ListParagraph' });
      continue;
    }
    const numbered = /^\d+[.)]\s+(.+)$/.exec(line);
    if (numbered) {
      paragraphs.push({ text: cleanMarkdownLine(line), style: 'ListParagraph' });
      continue;
    }
    paragraphs.push({ text: cleanMarkdownLine(line), style: 'Normal' });
  }
  return collapseRepeatedBlankParagraphs(paragraphs);
}

function collapseRepeatedBlankParagraphs(paragraphs: DocxParagraph[]): DocxParagraph[] {
  const collapsed: DocxParagraph[] = [];
  for (const paragraph of paragraphs) {
    const previous = collapsed.at(-1);
    if (!paragraph.text && previous && !previous.text) continue;
    collapsed.push(paragraph);
  }
  return collapsed;
}

function stripLeadingTitle(body: string, title: string): string {
  const lines = body.split('\n');
  const first = lines[0]?.replace(/^#\s+/, '').trim();
  if (first && normalizeText(first) === normalizeText(title)) {
    return lines.slice(1).join('\n').trim();
  }
  return body.trim();
}

function cleanMarkdownLine(line: string): string {
  return cleanOutputText(line)
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^\|(.+)\|$/, (_, inner: string) => inner.split('|').map((part) => part.trim()).join(' | '))
    .trim();
}

function contentTypesXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`;
}

function rootRelsXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`;
}

function documentRelsXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>
</Relationships>`;
}

function corePropsXml(title: string, matterName: string, generatedIso: string): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>${xmlEscape(title)}</dc:title>
  <dc:subject>${xmlEscape(matterName)}</dc:subject>
  <dc:creator>atticus-harness-v2 document output pipeline</dc:creator>
  <cp:lastModifiedBy>atticus-harness-v2 document output pipeline</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${generatedIso}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${generatedIso}</dcterms:modified>
</cp:coreProperties>`;
}

function appPropsXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>atticus-harness-v2</Application>
</Properties>`;
}

function stylesXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="22"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:after="240"/></w:pPr><w:rPr><w:b/><w:sz w:val="36"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="240" w:after="120"/></w:pPr><w:rPr><w:b/><w:sz w:val="32"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="200" w:after="100"/></w:pPr><w:rPr><w:b/><w:sz w:val="26"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="160" w:after="80"/></w:pPr><w:rPr><w:b/><w:sz w:val="24"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="ListParagraph"><w:name w:val="List Paragraph"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:ind w:left="720"/></w:pPr></w:style>
</w:styles>`;
}

function documentXml(paragraphs: DocxParagraph[], matterName: string): string {
  const body = paragraphs.map(paragraphXml).join('');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    ${body}
    <w:sectPr>
      <w:footerReference w:type="default" r:id="rId1"/>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/>
      <w:docGrid w:linePitch="360"/>
    </w:sectPr>
  </w:body>
</w:document>`;
}

function footerXml(matterName: string, generatedIso: string): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:p>
    <w:pPr><w:jc w:val="center"/></w:pPr>
    <w:r><w:t>${xmlEscape(`Matter: ${matterName} | Prepared: ${generatedIso.slice(0, 10)}`)}</w:t></w:r>
  </w:p>
</w:ftr>`;
}

function paragraphXml(paragraph: DocxParagraph): string {
  const style = paragraph.style && paragraph.style !== 'Normal'
    ? `<w:pPr><w:pStyle w:val="${paragraph.style}"/></w:pPr>`
    : '';
  return `<w:p>${style}<w:r><w:t xml:space="preserve">${xmlEscape(paragraph.text)}</w:t></w:r></w:p>`;
}

function xmlEscape(value: string): string {
  return cleanOutputText(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function cleanOutputText(value: string): string {
  return value
    .replace(/&mdash;|&#8212;|&#x2014;/gi, ' - ')
    .replace(/\u2014/g, ' - ');
}

function sanitizeFileName(title: string): string {
  const sanitized = title
    .replace(/[_-]+/g, ' ')
    .replace(/[^a-zA-Z0-9 ]+/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
  return sanitized || 'Document-Output';
}

function timestampForFile(date: Date): string {
  return date.toISOString().replace(/[:.]/g, '-');
}

function normalizeText(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
}

export async function listOutputFiles(matterName: string): Promise<string[]> {
  const outputDir = getMatterPath(matterName, '_output');
  try {
    const entries = await readdir(outputDir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name !== OUTPUT_MANIFEST)
      .map((entry) => join(outputDir, entry.name))
      .sort();
  } catch {
    return [];
  }
}
