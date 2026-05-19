import { addCaseCitation } from '../storage/sqlite/index.js';
import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export interface CaseCitationAddInput {
  caseName: string;
  citationQuery?: string;
  relevanceScore?: number;
  relevanceRationale?: string;
  keyQuote?: string;
  proceduralContext?: string;
}

export function createCaseCitationAddTool(): ToolDefinition<CaseCitationAddInput> {
  return {
    id: 'case_citation_add',
    name: 'case_citation_add',
    description: 'Add a referenced legal case citation (e.g. from legal research) along with a relevance rating, key quotes, and rationale, so that subsequent drafting subagents can cite and recall it efficiently.',
    inputSchema: {
      type: 'object',
      properties: {
        caseName: { type: 'string', description: 'The official name/citation of the case (e.g. Donoghue v Stevenson [1932] AC 562).' },
        citationQuery: { type: 'string', description: 'Optional search query or issue this case citation is answering.' },
        relevanceScore: { type: 'number', description: 'Relevance score/rating of the case (e.g., from 0.0 to 10.0).' },
        relevanceRationale: { type: 'string', description: 'Factual reasoning for why this case is relevant to the matter.' },
        keyQuote: { type: 'string', description: 'Significant quote or legal principle established by the case.' },
        proceduralContext: { type: 'string', description: 'The context or stage this case citation is used for (e.g., citations, legal research, drafting).' },
      },
      required: ['caseName'],
    },
    call: async (input, context: ToolUseContext) => {
      if (!context.matterName) {
        return { success: false, error: 'No active matter name found in context.' };
      }
      try {
        const record = addCaseCitation({
          matterName: context.matterName,
          caseName: input.caseName,
          citationQuery: input.citationQuery,
          relevanceScore: input.relevanceScore,
          relevanceRationale: input.relevanceRationale,
          keyQuote: input.keyQuote,
          proceduralContext: input.proceduralContext,
        });
        return { success: true, data: record };
      } catch (error: unknown) {
        return { success: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
  };
}
