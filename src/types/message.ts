import type { LLMNativeAction } from './llm.js';

export type MessageRole = 'system' | 'user' | 'assistant' | 'tool';

export interface LLMMessage {
  role: MessageRole;
  content: string;
  /** Provider-specific reasoning transcript, currently replayed only for DeepSeek thinking-mode tool turns. */
  reasoningContent?: string;
  /** Provider-native actions observed while producing this message. */
  nativeActions?: LLMNativeAction[];
  toolCalls?: ToolCall[];
  toolCallId?: string;
  toolName?: string;
}

export interface ToolCall {
  id: string;
  name: string;
  args: Record<string, unknown>;
}
