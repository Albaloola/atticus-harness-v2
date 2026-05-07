import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export class HostileReviewTool implements Tool<{ documentContent: string }, string> {
  readonly name = 'hostile_review';
  readonly description = 'Run an adversarial review of a legal document to identify weaknesses, unsupported claims, and risks.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      documentContent: { type: 'string', description: 'The legal document content to review' },
    },
    required: ['documentContent'],
  };

  isEnabled(): boolean { return true; }

  async call(args: { documentContent: string }, context: ToolUseContext): Promise<ToolResult<string>> {
    const { createLLMClient } = await import('../llm/client.js');
    const { resolveConfig } = await import('../config/loader.js');

    const systemPrompt = `You are a red-team legal reviewer. Stress-test the document, identify weaknesses, find unsupported claims, and flag risks.

Rate each finding: CRITICAL, HIGH, MEDIUM, LOW, or INFO.
Format as:
## Finding: [Title]
- Severity: [LEVEL]
- Location: [section]
- Issue: [description]
- Recommendation: [how to fix]`;

    try {
      const resolvedConfig = await resolveConfig({ matterName: context.matterName });
      const client = createLLMClient(resolvedConfig);
      const response = await client.chat({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: args.documentContent.substring(0, 15000) },
        ],
        config: {
          model: resolvedConfig.providerPolicy.models.reviewer ?? resolvedConfig.model,
          temperature: 0.3,
          maxTokens: 4096,
        },
      });
      return { success: true, data: response.content, output: response.content.substring(0, 2000) };
    } catch (err: unknown) {
      return { success: false, error: `Review failed: ${(err as Error).message}` };
    }
  }
}
