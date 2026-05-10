import type { LLMNativeAction } from './llm.js';

export type MessageRole = 'system' | 'user' | 'assistant' | 'tool';

export type LLMMessageContent = string | LLMMessageContentPart[];

export type LLMMessageContentPart =
  | { type: 'text'; text: string; cache_control?: Record<string, unknown> }
  | { type: 'image_url'; image_url?: { url: string }; imageUrl?: { url: string } }
  | { type: 'file'; file?: Record<string, unknown> }
  | { type: 'input_audio'; input_audio?: Record<string, unknown>; inputAudio?: Record<string, unknown> }
  | { type: 'video_url'; video_url?: Record<string, unknown>; videoUrl?: Record<string, unknown> }
  | Record<string, unknown>;

export interface LLMMessage {
  role: MessageRole;
  content: LLMMessageContent;
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

export function stringifyMessageContent(content: LLMMessageContent): string {
  if (typeof content === 'string') return content;
  return content.map((part) => {
    if (part.type === 'text' && typeof part.text === 'string') return part.text;
    if (typeof part.type === 'string') return `[${part.type}]`;
    return '[content]';
  }).join('\n');
}
