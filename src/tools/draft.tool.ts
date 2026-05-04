import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { OpenRouterClient } from '../llm/client.js';

export class DraftTool implements Tool<{ matterName: string; brief: string; docType?: string }, string> {
  readonly name = 'draft';
  readonly description = 'Draft a legal document from evidence. Provide a brief describing what to draft.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      matterName: { type: 'string', description: 'Matter name' },
      brief: { type: 'string', description: 'Drafting brief with instructions' },
      docType: { type: 'string', description: 'Document type (brief, letter, submission, etc.)' },
    },
    required: ['matterName', 'brief'],
  };

  async call(args: { matterName: string; brief: string; docType?: string }, context: ToolUseContext): Promise<ToolResult<string>> {
    context.log(`[draft] Gathering evidence for ${args.matterName}...`);

    const { searchEvidence } = await import('../storage/sqlite/search.js');
    const evidenceResults = searchEvidence(args.matterName, args.brief, { topK: 5 });

    let evidenceContext = '';
    if (evidenceResults.length > 0) {
      evidenceContext = evidenceResults.map((r, i) =>
        `[${i + 1}] ${r.evidenceId}: "${r.snippet}"`
      ).join('\n');
    }

    const systemPrompt = `You are a legal drafting assistant. Draft a ${args.docType || 'legal document'} based on the following brief and evidence.

BRIEF: ${args.brief}

RELEVANT EVIDENCE:
${evidenceContext || 'No specific evidence found. Use your general knowledge.'}

Instructions:
- Structure the document properly with sections
- Cite evidence where applicable using format [EVIDENCE_ID]
- Use clear, professional legal language
- Include a date and matter reference`;

    try {
      const client = new OpenRouterClient();
      const response = await client.chat({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Draft ${args.docType || 'a legal document'} based on the above brief and evidence.` },
        ],
        config: {
          model: 'deepseek/deepseek-v4-flash',
          temperature: 0.2,
          maxTokens: 8192,
        },
      });

      return { success: true, data: response.content, output: `Draft generated (${response.content.length} chars). Call the write_file tool to save it.` };
    } catch (err: unknown) {
      return { success: false, error: `Draft failed: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}
