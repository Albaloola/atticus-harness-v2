export interface Finding {
  claim: string;
  support: string;
  confidence: 'high' | 'medium' | 'low';
  kind?: FindingKind;
}

export type FindingKind =
  | 'holding'
  | 'party_argument'
  | 'procedural_fact'
  | 'evidence_fact'
  | 'risk_signal'
  | 'unsupported_inference'
  | 'gap'
  | 'not_applicable';

export interface Risk {
  risk: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  mitigation: string;
}

export interface AgentStructuredResult {
  status: 'completed' | 'blocked' | 'failed' | 'needs_followup';
  summary: string;
  findings: Finding[];
  risks: Risk[];
  proposedTasks: string[];
  artifactIds: string[];
  nextActions: string[];
}

const VALID_STATUSES = new Set<AgentStructuredResult['status']>([
  'completed',
  'blocked',
  'failed',
  'needs_followup',
]);

const VALID_CONFIDENCE = new Set<Finding['confidence']>(['high', 'medium', 'low']);
const VALID_FINDING_KIND = new Set<FindingKind>([
  'holding',
  'party_argument',
  'procedural_fact',
  'evidence_fact',
  'risk_signal',
  'unsupported_inference',
  'gap',
  'not_applicable',
]);
const VALID_SEVERITY = new Set<Risk['severity']>(['critical', 'high', 'medium', 'low']);

export function parseStructuredResult(output: string): AgentStructuredResult | null {
  for (const candidate of candidateJsonStrings(output)) {
    const parsed = parseCandidate(candidate);
    if (parsed) return parsed;
  }

  return null;
}

function parseCandidate(json: string): AgentStructuredResult | null {
  try {
    const parsed = JSON.parse(json);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const status = normalizeStatus((parsed as { status?: unknown }).status);
    if (!status) return null;
    if (typeof parsed.summary !== 'string') return null;

    return {
      status,
      summary: parsed.summary,
      findings: normalizeFindings(parsed.findings),
      risks: normalizeRisks(parsed.risks),
      proposedTasks: normalizeStringArray(parsed.proposedTasks),
      artifactIds: normalizeStringArray(parsed.artifactIds),
      nextActions: normalizeStringArray(parsed.nextActions),
    };
  } catch {
    return null;
  }
}

function candidateJsonStrings(output: string): string[] {
  const candidates = [output.trim()];
  const fencedJson = /```(?:json)?\s*([\s\S]*?)```/gi;
  let match: RegExpExecArray | null;

  while ((match = fencedJson.exec(output)) !== null) {
    candidates.push(match[1].trim());
  }

  const balanced = extractBalancedJsonObject(output);
  if (balanced) candidates.push(balanced);

  return [...new Set(candidates.filter(Boolean))];
}

function extractBalancedJsonObject(output: string): string | null {
  for (let start = output.indexOf('{'); start >= 0; start = output.indexOf('{', start + 1)) {
    let depth = 0;
    let inString = false;
    let escaped = false;

    for (let index = start; index < output.length; index += 1) {
      const char = output[index];

      if (inString) {
        if (escaped) {
          escaped = false;
        } else if (char === '\\') {
          escaped = true;
        } else if (char === '"') {
          inString = false;
        }
        continue;
      }

      if (char === '"') {
        inString = true;
      } else if (char === '{') {
        depth += 1;
      } else if (char === '}') {
        depth -= 1;
        if (depth === 0) return output.slice(start, index + 1).trim();
      }
    }
  }

  return null;
}

function normalizeStatus(status: unknown): AgentStructuredResult['status'] | null {
  if (typeof status !== 'string') return null;
  const normalized = status.trim().toLowerCase();
  return VALID_STATUSES.has(normalized as AgentStructuredResult['status'])
    ? normalized as AgentStructuredResult['status']
    : null;
}

function normalizeFindings(findings: unknown): Finding[] {
  if (!Array.isArray(findings)) return [];

  return findings.flatMap((finding): Finding[] => {
    if (typeof finding !== 'object' || finding === null) return [];
    const candidate = finding as Record<string, unknown>;
    if (typeof candidate.claim !== 'string' || typeof candidate.support !== 'string') return [];
    const confidence = typeof candidate.confidence === 'string' && VALID_CONFIDENCE.has(candidate.confidence as Finding['confidence'])
      ? candidate.confidence as Finding['confidence']
      : 'medium';
    const kind = typeof candidate.kind === 'string' && VALID_FINDING_KIND.has(candidate.kind as FindingKind)
      ? candidate.kind as FindingKind
      : inferFindingKind(candidate.claim, candidate.support);
    return [{ claim: candidate.claim, support: candidate.support, confidence, kind }];
  });
}

function inferFindingKind(claim: string, support: string): FindingKind {
  const text = `${claim} ${support}`.toLowerCase();
  if (/\b(not applicable|n\/a|no .*found|missing|gap|unavailable|not available)\b/.test(text)) {
    return /\bnot applicable|n\/a\b/.test(text) ? 'not_applicable' : 'gap';
  }
  if (/\b(risk|exposure|weakness|hazard|uncertain|limitation)\b/.test(text)) {
    return 'risk_signal';
  }
  if (/\b(held|holding|the court declared|the court found|judgment|decision|order was null|unlawful)\b/.test(text)) {
    return 'holding';
  }
  if (/\b(argued|submitted|contended|maintained|position was|case was that|defence|submission)\b/.test(text)) {
    return 'party_argument';
  }
  if (/\b(hearing|filed|lodged|appeal|petition|order|timeline|date|deadline|procedural|forum)\b/.test(text)) {
    return 'procedural_fact';
  }
  if (/\b(may|could|might|appears|likely|suggests|inference)\b/.test(text) && !/\[[A-Z0-9_-]+/.test(support)) {
    return 'unsupported_inference';
  }
  return 'evidence_fact';
}

function normalizeRisks(risks: unknown): Risk[] {
  if (!Array.isArray(risks)) return [];

  return risks.flatMap((risk): Risk[] => {
    if (typeof risk !== 'object' || risk === null) return [];
    const candidate = risk as Record<string, unknown>;
    if (typeof candidate.risk !== 'string' || typeof candidate.mitigation !== 'string') return [];
    const severity = typeof candidate.severity === 'string' && VALID_SEVERITY.has(candidate.severity as Risk['severity'])
      ? candidate.severity as Risk['severity']
      : 'medium';
    return [{ risk: candidate.risk, severity, mitigation: candidate.mitigation }];
  });
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((entry): entry is string => typeof entry === 'string');
}
