import { listBreaches } from '../storage/sqlite/index.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export interface BreachListInput {
  entityId?: string;
}

export class BreachListTool implements Tool<BreachListInput, any> {
  readonly name = 'breach_list';
  readonly description = 'Retrieve the list of registered breaches for the current matter, optionally filtered by a specific entity.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      entityId: { type: 'string', description: 'Optional entity ID to filter by.' },
    },
  };

  isEnabled(): boolean { return true; }

  async call(input: BreachListInput, context: ToolUseContext): Promise<ToolResult<any>> {
    if (!context.matterName) {
      return { success: false, error: 'No active matter name found in context.' };
    }
    try {
      const records = listBreaches(context.matterName, { entityId: input.entityId });
      return { success: true, data: records };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  }
}

export function createBreachListTool(): Tool<BreachListInput, any> {
  return new BreachListTool();
}
