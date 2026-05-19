import { listChronologyEvents } from '../storage/sqlite/index.js';
import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export interface ChronologyListInput {
  limit?: number;
}

export function createChronologyListTool(): ToolDefinition<ChronologyListInput> {
  return {
    id: 'chronology_list',
    name: 'chronology_list',
    description: 'Retrieve all events currently in the global living chronology for this matter, ordered by start date.',
    inputSchema: {
      type: 'object',
      properties: {
        limit: { type: 'number', description: 'Optional limit on the number of returned events.', default: 100 },
      },
      required: [],
    },
    call: async (input, context: ToolUseContext) => {
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
    },
  };
}
