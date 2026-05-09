import type { LLMMessage, ToolCall } from './message.js';
import type { ToolDefinition } from './tool.js';

export type ReasoningEffort = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh';

export interface LLMConfig {
  model: string;
  maxTokens?: number;
  temperature?: number;
  reasoningEffort?: ReasoningEffort;
  jsonMode?: boolean;
  jsonSchema?: {
    name: string;
    schema: Record<string, unknown>;
    strict?: boolean;
  };
  disableThinking?: boolean;
  maxRetries?: number;
  timeoutMs?: number;
}

export interface LLMRequest {
  messages: LLMMessage[];
  tools?: ToolDefinition[];
  config: LLMConfig;
}

export interface LLMResponse {
  content: string;
  /** Provider-specific reasoning transcript, retained for protocols that require replay. */
  reasoningContent?: string;
  /** Provider-native actions executed outside the Harness-owned function-calling loop. */
  nativeActions?: LLMNativeAction[];
  toolCalls?: ToolCall[];
  usage?: LLMUsage;
  provider?: string;
  model?: string;
}

export interface LLMNativeAction {
  id?: string;
  type: string;
  status?: string;
  label?: string;
  data?: Record<string, unknown>;
}

export interface LLMUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  cacheHitTokens?: number;
  cacheMissTokens?: number;
  reasoningOutputTokens?: number;
}

export interface LLMToolUse {
  id: string;
  name: string;
  args: Record<string, unknown>;
}
