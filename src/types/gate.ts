import type { CitationRef } from './artifact.js';

export type GateSeverity = 'critical' | 'high' | 'medium' | 'low' | 'info';
export type GateStatus = 'pass' | 'conditional-pass' | 'fail';

export interface QualityGate {
  name: string;
  severity: GateSeverity;
  check(content: string, context: GateContext): Promise<GateCheckResult>;
}

export interface GateContext {
  matterName: string;
  evidenceCount: number;
  citations?: CitationRef[];
}

export interface GateCheckResult {
  gateName: string;
  passed: boolean;
  severity: GateSeverity;
  message: string;
  details?: string;
}

export interface GateResult {
  passed: boolean;
  status: GateStatus;
  checks: GateCheckResult[];
  summary: { total: number; passed: number; failed: number };
}
