import { listChronologyEvents } from '../storage/sqlite/index.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export interface ChronologyListInput {
  limit?: number;
}

export class ChronologyListTool implements Tool<ChronologyListInput, any> {
  readonly name = 'chronology_list';
  readonly description = 'Retrieve all events currently in the global living chronology for this matter, ordered by start date.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      limit: { type: 'number', description: 'Optional limit on the number of returned events.', default: 100 },
    },
  };

  isEnabled(): boolean { return true; }

  async call(input: ChronologyListInput, context: ToolUseContext): Promise<ToolResult<any>> {
    if (!context.matterName) {
      return { success: false, error: 'No active matter name found in context.' };
    }
    try {
      let events = listChronologyEvents(context.matterName);
      if (input.limit) {
        events = events.slice(0, input.limit);
      }
      return { success: true, data: events };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  }
}

export function createChronologyListTool(): Tool<ChronologyListInput, any> {
  return new ChronologyListTool();
}
