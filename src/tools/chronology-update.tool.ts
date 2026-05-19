import { updateChronologyEvent } from '../storage/sqlite/index.js';
import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export interface ChronologyUpdateInput {
  id: string;
  dateStart?: string;
  dateEnd?: string;
  description?: string;
  evidenceId?: string;
  issueId?: string;
  status?: string;
}

export function createChronologyUpdateTool(): ToolDefinition<ChronologyUpdateInput> {
  return {
    id: 'chronology_update',
    name: 'chronology_update',
    description: 'Update an existing event in the global living chronology. Useful for correcting dates, marking events as disputed, or linking events to newly discovered evidence or issues.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'The UUID of the chronology event to update.' },
        description: { type: 'string', description: 'Detailed description of the event.' },
        dateStart: { type: 'string', description: 'Start date/time in ISO 8601 format.' },
        dateEnd: { type: 'string', description: 'End date/time in ISO 8601 format.' },
        evidenceId: { type: 'string', description: 'ID of the evidence supporting this event.' },
        issueId: { type: 'string', description: 'ID of a legal issue this event relates to.' },
        status: { type: 'string', description: 'Status of this fact: active, disputed, resolved, etc.' },
      },
      required: ['id'],
    },
    call: async (input, context: ToolUseContext) => {
      if (!context.matterName) {
        return { success: false, error: 'No active matter name found in context.' };
      }
      try {
        const event = updateChronologyEvent(context.matterName, input.id, {
          dateStart: input.dateStart,
          dateEnd: input.dateEnd,
          description: input.description,
          evidenceId: input.evidenceId,
          issueId: input.issueId,
          status: input.status,
          sourceTeam: context.getConfig().role,
        });
        if (!event) return { success: false, error: 'Event not found' };
        return { success: true, data: event };
      } catch (error: unknown) {
        return { success: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
  };
}
