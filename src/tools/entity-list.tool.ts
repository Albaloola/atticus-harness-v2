import { listEntities } from '../storage/sqlite/index.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export interface EntityListInput {
  role?: string;
}

export class EntityListTool implements Tool<EntityListInput, any> {
  readonly name = 'entity_list';
  readonly description = 'Retrieve the list of registered entities for the current matter, optionally filtered by role.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      role: { type: 'string', description: 'Optional role to filter by (e.g., offender, witness, client).' },
    },
  };

  isEnabled(): boolean { return true; }

  async call(input: EntityListInput, context: ToolUseContext): Promise<ToolResult<any>> {
    if (!context.matterName) {
      return { success: false, error: 'No active matter name found in context.' };
    }
    try {
      const records = listEntities(context.matterName, { role: input.role });
      return { success: true, data: records };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  }
}

export function createEntityListTool(): Tool<EntityListInput, any> {
  return new EntityListTool();
}
