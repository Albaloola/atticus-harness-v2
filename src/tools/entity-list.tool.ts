import { listEntities } from '../storage/sqlite/index.js';
import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export interface EntityListInput {
  role?: string;
}

export function createEntityListTool(): ToolDefinition<EntityListInput> {
  return {
    id: 'entity_list',
    name: 'entity_list',
    description: 'Retrieve the list of registered entities for the current matter, optionally filtered by role.',
    inputSchema: {
      type: 'object',
      properties: {
        role: { type: 'string', description: 'Optional role to filter by (e.g., offender, witness, client).' },
      },
    },
    call: async (input, context: ToolUseContext) => {
      if (!context.matterName) {
        return { success: false, error: 'No active matter name found in context.' };
      }
      try {
        const records = listEntities(context.matterName, { role: input.role });
        return { success: true, data: records };
      } catch (error: unknown) {
        return { success: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
  };
}
