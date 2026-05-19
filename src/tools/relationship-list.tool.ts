import { listRelationships } from '../storage/sqlite/index.js';
import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export function createRelationshipListTool(): ToolDefinition<void> {
  return {
    id: 'relationship_list',
    name: 'relationship_list',
    description: 'Retrieve the list of registered relationships for the current matter.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    call: async (input, context: ToolUseContext) => {
      if (!context.matterName) {
        return { success: false, error: 'No active matter name found in context.' };
      }
      try {
        const records = listRelationships(context.matterName);
        return { success: true, data: records };
      } catch (error: unknown) {
        return { success: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
  };
}
