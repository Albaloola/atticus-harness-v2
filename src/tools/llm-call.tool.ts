import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { createLLMClient } from '../llm/client.js';
import { resolveConfig } from '../config/loader.js';
import type { LLMConfig, ReasoningEffort } from '../types/llm.js';
import type { LLMMessage } from '../types/message.js';

interface LlmCallArgs {
  messages: LLMMessage[];
  model?: string;
  temperature?: number;
  reasoningEffort?: ReasoningEffort;
  jsonMode?: boolean;
}

export class LlmCallTool implements Tool<LlmCallArgs, string> {
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
      model: { type: 'string', description: 'Model override (default: resolved provider fast model)' },
      temperature: { type: 'number', description: 'Sampling temperature (default: 0.1)' },
      reasoningEffort: { type: 'string', enum: ['none', 'minimal', 'low', 'medium', 'high', 'xhigh'], description: 'Optional reasoning effort for models that support it' },
      jsonMode: { type: 'boolean', description: 'Request JSON response format' },
    },
    required: ['messages'],
  };

  async call(args: LlmCallArgs, context: ToolUseContext): Promise<ToolResult<string>> {
    try {
      const resolvedConfig = await resolveConfig({ matterName: context.matterName });
      const client = createLLMClient(resolvedConfig);
      const config: LLMConfig = {
        model: args.model || resolvedConfig.model || 'deepseek/deepseek-v4-flash',
        temperature: args.temperature ?? 0.1,
        reasoningEffort: args.reasoningEffort,
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
