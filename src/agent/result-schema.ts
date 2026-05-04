export interface Finding {
  claim: string;
  support: string;
  confidence: 'high' | 'medium' | 'low';
}

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

export function parseStructuredResult(json: string): AgentStructuredResult | null {
  try {
    const parsed = JSON.parse(json);
    if (typeof parsed !== 'object' || parsed === null) return null;
    if (typeof parsed.status !== 'string') return null;
    if (typeof parsed.summary !== 'string') return null;

    return {
      status: parsed.status,
      summary: parsed.summary,
      findings: Array.isArray(parsed.findings) ? parsed.findings : [],
      risks: Array.isArray(parsed.risks) ? parsed.risks : [],
      proposedTasks: Array.isArray(parsed.proposedTasks) ? parsed.proposedTasks : [],
      artifactIds: Array.isArray(parsed.artifactIds) ? parsed.artifactIds : [],
      nextActions: Array.isArray(parsed.nextActions) ? parsed.nextActions : [],
    };
  } catch {
    return null;
  }
}
