export type MessageRole = 'system' | 'user' | 'assistant' | 'tool';

export interface LLMMessage {
  role: MessageRole;
  content: string;
  /** Provider-specific reasoning transcript, currently replayed only for DeepSeek thinking-mode tool turns. */
  reasoningContent?: string;
  toolCalls?: ToolCall[];
  toolCallId?: string;
  toolName?: string;
}

export interface ToolCall {
  id: string;
  name: string;
  args: Record<string, unknown>;
}
