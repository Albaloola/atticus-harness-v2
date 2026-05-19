import { listRelationships } from '../storage/sqlite/index.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export class RelationshipListTool implements Tool<void, any> {
  readonly name = 'relationship_list';
  readonly description = 'Retrieve the list of registered relationships for the current matter.';
  readonly inputSchema = {
    type: 'object',
    properties: {},
  };

  isEnabled(): boolean { return true; }

  async call(input: void, context: ToolUseContext): Promise<ToolResult<any>> {
    if (!context.matterName) {
      return { success: false, error: 'No active matter name found in context.' };
    }
    try {
      const records = listRelationships(context.matterName);
      return { success: true, data: records };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  }
}

export function createRelationshipListTool(): Tool<void, any> {
  return new RelationshipListTool();
}
