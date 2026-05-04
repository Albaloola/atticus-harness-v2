export type MessageRole = 'system' | 'user' | 'assistant' | 'tool';

export interface LLMMessage {
  role: MessageRole;
  content: string;
  toolCalls?: ToolCall[];
  toolCallId?: string;
  toolName?: string;
}

export interface ToolCall {
  id: string;
  name: string;
  args: Record<string, unknown>;
}
