import { listCaseCitations } from '../storage/sqlite/index.js';
import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export interface CaseCitationListInput {
  query?: string;
  context?: string;
}

export function createCaseCitationListTool(): ToolDefinition<CaseCitationListInput> {
  return {
    id: 'case_citation_list',
    name: 'case_citation_list',
    description: 'Retrieve the list of registered legal case citations for the current matter, optionally filtered by citation search query or procedural context.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Optional search query to filter case citations.' },
        context: { type: 'string', description: 'Optional procedural context to filter case citations (e.g., citations, legal research, drafting).' },
      },
    },
    call: async (input, context: ToolUseContext) => {
      if (!context.matterName) {
        return { success: false, error: 'No active matter name found in context.' };
      }
      try {
        const records = listCaseCitations(context.matterName, { query: input.query, context: input.context });
        return { success: true, data: records };
      } catch (error: unknown) {
        return { success: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
  };
}
