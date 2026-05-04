import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { OpenRouterClient } from '../llm/client.js';
import type { LLMConfig } from '../types/llm.js';
import type { LLMMessage } from '../types/message.js';

export class LlmCallTool implements Tool<{ messages: LLMMessage[]; model?: string; temperature?: number; jsonMode?: boolean }, string> {
  readonly name = 'llm_call';
  readonly description = 'Make a direct call to the LLM. Returns the model response. Use for analysis, drafting, and reasoning tasks.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      messages: {
        type: 'array',
        description: 'Chat messages',
        items: {
          type: 'object',
          properties: {
            role: { type: 'string', enum: ['system', 'user', 'assistant'] },
            content: { type: 'string' },
          },
        },
      },
      model: { type: 'string', description: 'Model override (default: deepseek/deepseek-v4-flash)' },
      temperature: { type: 'number', description: 'Sampling temperature (default: 0.1)' },
      jsonMode: { type: 'boolean', description: 'Request JSON response format' },
    },
    required: ['messages'],
  };

  async call(args: { messages: LLMMessage[]; model?: string; temperature?: number; jsonMode?: boolean }, _context: ToolUseContext): Promise<ToolResult<string>> {
    try {
      const client = new OpenRouterClient();
      const config: LLMConfig = {
        model: args.model || 'deepseek/deepseek-v4-flash',
        temperature: args.temperature ?? 0.1,
        jsonMode: args.jsonMode ?? false,
        maxTokens: 4096,
      };

      const response = await client.chat({ messages: args.messages, config });
      return { success: true, data: response.content, output: response.content };
    } catch (err: unknown) {
      return { success: false, error: `LLM call failed: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}
