import { readdir, readFile } from 'fs/promises';
import { extname, join } from 'path';
import { getConfigDir } from '../config/paths.js';

export interface OutputStyle {
  name: string;
  description?: string;
  appliesTo?: string[];
  priority?: number;
  modelHints?: Record<string, string> | string[];
  body: string;
  source: 'built-in' | 'user' | 'workspace';
  filePath?: string;
}

export interface LoadOutputStylesOptions {
  workspaceDir?: string;
  userDir?: string;
}

const BUILT_IN_OUTPUT_STYLES: OutputStyle[] = [
  {
    name: 'default',
    description: 'Clear, concise Harness output with legal grounding and no decorative prose.',
    appliesTo: ['general'],
    priority: 0,
    body: [
      'Use the normal Harness output contract.',
      'Keep prose concise, factual, and traceable to the matter record.',
      'Preserve citations, evidence IDs, dates, amounts, caveats, and uncertainty labels.',
    ].join('\n'),
    source: 'built-in',
  },
  {
    name: 'legal-brief',
    description: 'Structured legal argument with issues, rules, analysis, and conclusion.',
    appliesTo: ['legal-analysis', 'drafting'],
    priority: 10,
    body: [
      'Write in a formal legal-brief style with clear issue headings.',
      'Separate facts, applicable law, analysis, risks, and requested relief or next step.',
      'Do not strengthen the case beyond the evidence and authorities available.',
    ].join('\n'),
    source: 'built-in',
  },
  {
    name: 'citation-heavy',
    description: 'Citation-dense output for source verification and authority tracking.',
    appliesTo: ['research', 'verification'],
    priority: 10,
    body: [
      'Prioritize citations, source IDs, evidence IDs, pinpoint references, and quotation status.',
      'Mark uncited propositions as assumptions or open verification points.',
      'Avoid broad conclusions unless each material premise is sourced.',
    ].join('\n'),
    source: 'built-in',
  },
  {
    name: 'court-prep',
    description: 'Court preparation checklists, bundles, chronology, and hearing readiness.',
    appliesTo: ['court', 'hearing', 'bundle'],
    priority: 10,
    body: [
      'Focus on procedural readiness, deadlines, bundle state, proof points, and hearing risks.',
      'Use checklists, chronology, authorities, witness/evidence gaps, and action owners where useful.',
      'Do not imply filing, service, payment, or external contact has happened unless the record proves it.',
    ].join('\n'),
    source: 'built-in',
  },
  {
    name: 'research-memo',
    description: 'Research memorandum with question, short answer, analysis, and open points.',
    appliesTo: ['research'],
    priority: 10,
    body: [
      'Structure as a research memo: question presented, short answer, facts assumed, analysis, and open checks.',
      'Distinguish binding authority, persuasive authority, policy, and factual evidence.',
      'Call out jurisdiction, date currency, and source reliability.',
    ].join('\n'),
    source: 'built-in',
  },
  {
    name: 'client-email',
    description: 'Client-ready email style with plain language and careful caveats.',
    appliesTo: ['client-communication', 'drafting'],
    priority: 10,
    body: [
      'Write in a professional email style suitable for a client.',
      'Use plain language, concrete next steps, and restrained confidence.',
      'Keep legal caveats and uncertainty visible without overloading the client with internal process.',
    ].join('\n'),
    source: 'built-in',
  },
  {
    name: 'audit',
    description: 'Audit trail output focused on provenance, controls, and verification gaps.',
    appliesTo: ['audit', 'review', 'verification'],
    priority: 10,
    body: [
      'Emphasize provenance, control status, decisions, evidence used, and verification gaps.',
      'List material assumptions and any external actions that are blocked or operator-gated.',
      'Prefer concise findings with traceable support over narrative explanation.',
    ].join('\n'),
    source: 'built-in',
  },
  {
    name: 'implementation-plan',
    description: 'Engineering implementation plan with scope, steps, tests, and risks.',
    appliesTo: ['engineering', 'planning'],
    priority: 10,
    body: [
      'Structure as an implementation plan with scope, file-level changes, tests, risks, and stop criteria.',
      'Keep steps concrete and ordered by dependency.',
      'Prefer small reversible changes and explicit verification evidence.',
    ].join('\n'),
    source: 'built-in',
  },
  {
    name: 'code-review',
    description: 'Code review output that leads with defects, risks, and missing tests.',
    appliesTo: ['engineering', 'review'],
    priority: 10,
    body: [
      'Use a code-review stance: findings first, ordered by severity with file and line references.',
      'Focus on bugs, regressions, security risks, maintainability risks, and missing tests.',
      'Keep summaries secondary and say clearly when no material issues are found.',
    ].join('\n'),
    source: 'built-in',
  },
];

export function getBuiltInOutputStyles(): OutputStyle[] {
  return BUILT_IN_OUTPUT_STYLES.map((style) => ({
    ...style,
    appliesTo: [...(style.appliesTo ?? [])],
    modelHints: cloneModelHints(style.modelHints),
  }));
}

export function getBuiltInOutputStyle(name = 'default'): OutputStyle {
  const style = BUILT_IN_OUTPUT_STYLES.find((candidate) => candidate.name === name);
  if (!style) throw new Error(`Built-in output style "${name}" is not defined`);
  return {
    ...style,
    appliesTo: [...(style.appliesTo ?? [])],
    modelHints: cloneModelHints(style.modelHints),
  };
}

export async function loadOutputStyles(options: LoadOutputStylesOptions = {}): Promise<OutputStyle[]> {
  const styles = new Map<string, OutputStyle>();
  for (const style of getBuiltInOutputStyles()) {
    styles.set(style.name, style);
  }

  for (const style of await loadOutputStyleDir(options.userDir ?? join(getConfigDir(), 'output-styles'), 'user')) {
    styles.set(style.name, style);
  }
  for (const style of await loadOutputStyleDir(
    options.workspaceDir ?? join(process.cwd(), '.atticus', 'output-styles'),
    'workspace',
  )) {
    styles.set(style.name, style);
  }

  return [...styles.values()].sort(
    (a, b) => (b.priority ?? 0) - (a.priority ?? 0) || a.name.localeCompare(b.name),
  );
}

export async function resolveOutputStyle(name = 'default', options: LoadOutputStylesOptions = {}): Promise<OutputStyle> {
  const styles = await loadOutputStyles(options);
  const style = styles.find((candidate) => candidate.name === name);
  if (!style) {
    const available = styles.map((candidate) => candidate.name).sort().join(', ');
    throw new Error(`Unknown output style "${name}". Available styles: ${available || 'none'}`);
  }
  return style;
}

async function loadOutputStyleDir(dir: string, source: 'user' | 'workspace'): Promise<OutputStyle[]> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  const styles: OutputStyle[] = [];
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const filePath = join(dir, entry.name);
    if (!['.md', '.markdown'].includes(extname(entry.name).toLowerCase())) continue;
    const raw = await readFile(filePath, 'utf-8');
    styles.push(parseOutputStyleMarkdown(raw, filePath, source));
  }
  return styles;
}

function parseOutputStyleMarkdown(raw: string, filePath: string, source: 'user' | 'workspace'): OutputStyle {
  if (!raw.startsWith('---\n')) {
    throw new Error(`Invalid output style frontmatter in ${filePath}: expected opening "---"`);
  }
  const end = raw.indexOf('\n---', 4);
  if (end === -1) {
    throw new Error(`Invalid output style frontmatter in ${filePath}: expected closing "---"`);
  }

  const frontmatter = parseFrontmatter(raw.slice(4, end), filePath);
  const name = asString(frontmatter.name);
  if (!name) {
    throw new Error(`Invalid output style frontmatter in ${filePath}: "name" must be a non-empty string`);
  }

  return {
    name,
    description: asString(frontmatter.description),
    appliesTo: asStringArray(frontmatter.appliesTo, filePath, 'appliesTo'),
    priority: asNumber(frontmatter.priority, filePath, 'priority'),
    modelHints: asModelHints(frontmatter.modelHints, filePath),
    body: raw.slice(end + 4).trim(),
    source,
    filePath,
  };
}

function parseFrontmatter(input: string, filePath: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const lines = input.replace(/\r\n/g, '\n').split('\n');
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    if (/^\s/.test(line)) {
      throw new Error(`Invalid output style frontmatter in ${filePath}: unexpected indented line "${line.trim()}"`);
    }

    const separator = line.indexOf(':');
    if (separator === -1) {
      throw new Error(`Invalid output style frontmatter in ${filePath}: expected "key: value" on line ${index + 1}`);
    }
    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();
    if (!key) {
      throw new Error(`Invalid output style frontmatter in ${filePath}: empty key on line ${index + 1}`);
    }

    if (rawValue) {
      result[key] = parseScalar(rawValue);
      continue;
    }

    const blockLines: string[] = [];
    while (index + 1 < lines.length && (/^\s+/.test(lines[index + 1]) || !lines[index + 1].trim())) {
      index += 1;
      if (lines[index].trim()) blockLines.push(lines[index]);
    }
    result[key] = parseBlockValue(blockLines, filePath, key);
  }
  return result;
}

function parseBlockValue(lines: string[], filePath: string, key: string): unknown {
  if (lines.length === 0) return '';
  const trimmed = lines.map((line) => line.trim());
  if (trimmed.every((line) => line.startsWith('- '))) {
    return trimmed.map((line) => parseScalar(line.slice(2).trim()));
  }

  const record: Record<string, string> = {};
  for (const line of trimmed) {
    const separator = line.indexOf(':');
    if (separator === -1) {
      throw new Error(`Invalid output style frontmatter in ${filePath}: expected nested "key: value" under "${key}"`);
    }
    const nestedKey = line.slice(0, separator).trim();
    const nestedValue = line.slice(separator + 1).trim();
    if (!nestedKey || !nestedValue) {
      throw new Error(`Invalid output style frontmatter in ${filePath}: nested "${key}" entries need string keys and values`);
    }
    record[nestedKey] = String(parseScalar(nestedValue));
  }
  return record;
}

function parseScalar(value: string): unknown {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const body = trimmed.slice(1, -1).trim();
    return body ? body.split(',').map((part) => String(parseScalar(part.trim()))) : [];
  }
  const number = Number(trimmed);
  if (!Number.isNaN(number) && /^-?\d+(\.\d+)?$/.test(trimmed)) return number;
  return trimmed;
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function asStringArray(value: unknown, filePath: string, field: string): string[] | undefined {
  if (value === undefined || value === '') return undefined;
  if (typeof value === 'string') return [value];
  if (Array.isArray(value) && value.every((item) => typeof item === 'string')) return value;
  throw new Error(`Invalid output style frontmatter in ${filePath}: "${field}" must be a string or string array`);
}

function asNumber(value: unknown, filePath: string, field: string): number | undefined {
  if (value === undefined || value === '') return undefined;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  throw new Error(`Invalid output style frontmatter in ${filePath}: "${field}" must be a number`);
}

function asModelHints(value: unknown, filePath: string): Record<string, string> | string[] | undefined {
  if (value === undefined || value === '') return undefined;
  if (typeof value === 'string') return [value];
  if (Array.isArray(value) && value.every((item) => typeof item === 'string')) return value;
  if (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    Object.values(value).every((item) => typeof item === 'string')
  ) {
    return value as Record<string, string>;
  }
  throw new Error(`Invalid output style frontmatter in ${filePath}: "modelHints" must be a string, string array, or string map`);
}

function cloneModelHints(
  modelHints: Record<string, string> | string[] | undefined,
): Record<string, string> | string[] | undefined {
  if (Array.isArray(modelHints)) return [...modelHints];
  return modelHints ? { ...modelHints } : undefined;
}
