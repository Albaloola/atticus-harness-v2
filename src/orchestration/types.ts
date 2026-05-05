import type { AgentStructuredResult as BaseAgentStructuredResult } from '../agent/result-schema.js';
import type { PhaseDefinition } from '../legal/workflow.js';
import type { AutonomyPolicy } from '../config/schema.js';

export interface OrchestratorConfig {
  matterName: string;
  objective?: string;
  model?: string;
  maxDepth: number;
  maxConcurrency: number;
  maxRunBudgetUsd?: number;
  phases?: PhaseDefinition[];
  autonomy?: Partial<AutonomyPolicy>;
  llmMode?: 'real' | 'fake';
}

export interface AgentSpawnInput {
  matterName: string;
  runId?: string;
  parentRunId?: string;
  taskId?: string;
  title: string;
  objective: string;
  role: string;
  model?: string;
  tools?: string[];
  allowedTools?: string[];
  maxTurns?: number;
  maxDepth?: number;
  depth?: number;
  phaseId?: string;
  contextPack?: string;
  expectedOutputSchema?: Record<string, unknown>;
}

export interface MiniOrchestratorInput {
  matterName: string;
  phase?: { id: string };
  objective: string;
  maxDepth: number;
  maxConcurrency: number;
  parentRunId?: string;
  phaseTaskId?: string;
}

export interface AgentStructuredResult
  extends BaseAgentStructuredResult {}

export interface OrchestrationRunConfig {
  matterName: string;
  phases: PhaseDefinition[];
  model: string;
  maxDepth: number;
  maxConcurrency: number;
  maxRunBudgetUsd?: number;
  temperature?: number;
  maxTurns?: number;
  quietMode?: boolean;
  verbose?: boolean;
  llmMode?: 'real' | 'fake';
}

export interface OrchestratorResult {
  matterName: string;
  summary: string;
  status: string;
  artifacts: string[];
  findings: Array<{ claim: string; confidence: number }>;
  risks: Array<{ risk: string; severity: string }>;
  phaseResults: PhaseResult[];
}

export interface PhaseResult {
  phaseId: string;
  phaseName: string;
  status: 'completed' | 'failed' | 'blocked';
  summary: string;
  findings: Array<{ claim: string; support: string; confidence: 'high' | 'medium' | 'low' }>;
  risks: Array<{ risk: string; severity: 'critical' | 'high' | 'medium' | 'low'; mitigation: string }>;
  artifactIds: string[];
  workerResults: AgentStructuredResult[];
}

export interface OrchestrationEvent {
  type: string;
  phaseId?: string;
  taskId?: string;
  runId?: string;
  depth: number;
  data: Record<string, unknown>;
  timestamp: string;
}
