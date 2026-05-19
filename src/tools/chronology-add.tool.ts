import { addChronologyEvent } from '../storage/sqlite/index.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export interface ChronologyAddInput {
  dateStart?: string;
  dateEnd?: string;
  description: string;
  evidenceId?: string;
  issueId?: string;
  status?: string;
}

export class ChronologyAddTool implements Tool<ChronologyAddInput, any> {
  readonly name = 'chronology_add';
  readonly description = 'Add a new event to the global living chronology for the current matter. Use this to construct a timeline incrementally as you discover facts. Use ISO 8601 date formats.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      description: { type: 'string', description: 'Detailed description of the event.' },
      dateStart: { type: 'string', description: 'Start date/time in ISO 8601 format (e.g., 2023-10-15T14:30:00Z).' },
      dateEnd: { type: 'string', description: 'Optional end date/time in ISO 8601 format.' },
      evidenceId: { type: 'string', description: 'Optional ID of the evidence supporting this event.' },
      issueId: { type: 'string', description: 'Optional ID of a legal issue this event relates to.' },
      status: { type: 'string', description: 'Status of this fact: active, disputed, etc.', default: 'active' },
    },
    required: ['description'],
  };

  isEnabled(): boolean { return true; }

  async call(input: ChronologyAddInput, context: ToolUseContext): Promise<ToolResult<any>> {
    if (!context.matterName) {
      return { success: false, error: 'No active matter name found in context.' };
    }
    try {
      const event = addChronologyEvent({
        matterName: context.matterName,
        dateStart: input.dateStart,
        dateEnd: input.dateEnd,
        description: input.description,
        evidenceId: input.evidenceId,
        issueId: input.issueId,
        status: input.status,
        sourceTeam: (context.getConfig().role as string | undefined) ?? 'unknown',
      });
      return { success: true, data: event };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  }
}

export function createChronologyAddTool(): Tool<ChronologyAddInput, any> {
  return new ChronologyAddTool();
}
