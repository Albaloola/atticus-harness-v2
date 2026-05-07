import type { ReasoningEffort } from './llm.js';

export type MatterStatus = 'pending' | 'ingesting' | 'analyzing' | 'drafting' | 'verifying' | 'complete' | 'archived';

export interface MatterIndex {
  name: string;
  created: string;
  updated: string;
  status: MatterStatus;
  evidenceCount: number;
  candidateCount: number;
  artifactCount: number;
  config: MatterConfig;
}

export interface MatterConfig {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  reasoningEffort?: ReasoningEffort;
  skills?: string[];
  providerPolicy?: ProviderPolicy;
}

export interface ProviderPolicy {
  primaryModel: string;
  fallbackModel?: string;
  maxRetries: number;
}
