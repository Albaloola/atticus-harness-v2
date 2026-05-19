import { listBreaches } from '../storage/sqlite/index.js';
import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export interface BreachListInput {
  entityId?: string;
}

export function createBreachListTool(): ToolDefinition<BreachListInput> {
  return {
    id: 'breach_list',
    name: 'breach_list',
    description: 'Retrieve the list of registered breaches for the current matter, optionally filtered by a specific entity.',
    inputSchema: {
      type: 'object',
      properties: {
        entityId: { type: 'string', description: 'Optional entity ID to filter by.' },
      },
    },
    call: async (input, context: ToolUseContext) => {
      if (!context.matterName) {
        return { success: false, error: 'No active matter name found in context.' };
      }
      try {
        const records = listBreaches(context.matterName, { entityId: input.entityId });
        return { success: true, data: records };
      } catch (error: unknown) {
        return { success: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
  };
}
