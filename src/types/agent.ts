import type { LLMMessage } from './message.js';
import type { LLMResponse, ReasoningEffort } from './llm.js';
import type { ToolResult } from './tool.js';

export interface AgentConfig {
  maxTurns: number;
  model: string;
  temperature: number;
  maxTokens?: number;
  reasoningEffort?: ReasoningEffort;
  systemPrompt?: string;
  skillName?: string;
  outputStyle?: string;
  providerName?: string;
  toolMode?: 'auto' | 'disabled';
  quietMode: boolean;
  verbose: boolean;
}

export interface AgentTurn {
  turnNumber: number;
  request: LLMMessage[];
  response: LLMResponse;
  toolCalls?: ToolCallResult[];
}

export interface ToolCallResult {
  toolName: string;
  args: Record<string, unknown>;
  result: ToolResult;
  durationMs: number;
}

export interface AgentResult {
  matterName: string;
  turns: AgentTurn[];
  transcript: string;
  outputArtifactId?: string;
  status: 'completed' | 'blocked' | 'error' | 'max_turns';
  summary: string;
}
