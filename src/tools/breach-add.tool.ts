import { addBreach } from '../storage/sqlite/index.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export interface BreachAddInput {
  entityId: string;
  title: string;
  description: string;
  dateCommitted?: string;
  provisionsViolated?: string;
  evidenceCitations?: Array<{ evidenceId: string; quote: string; locator?: string }>;
}

export class BreachAddTool implements Tool<BreachAddInput, any> {
  readonly name = 'breach_add';
  readonly description = 'Add a specific breach or offensive action committed by an entity (e.g. an offender), including provisions violated and citations to supporting evidence.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      entityId: { type: 'string', description: 'The registered entity ID committing the breach.' },
      title: { type: 'string', description: 'Short summary title of the breach.' },
      description: { type: 'string', description: 'Detailed factual description of what the offender did.' },
      dateCommitted: { type: 'string', description: 'Optional ISO 8601 date of the breach.' },
      provisionsViolated: { type: 'string', description: 'Optional list of statutes, rules, or guidelines violated.' },
      evidenceCitations: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            evidenceId: { type: 'string', description: 'The source evidence ID supporting this claim.' },
            quote: { type: 'string', description: 'The exact quote or excerpt from the evidence.' },
            locator: { type: 'string', description: 'Optional page number or location.' },
          },
          required: ['evidenceId', 'quote'],
        },
        description: 'Citations to supporting evidence documents.',
      },
    },
    required: ['entityId', 'title', 'description'],
  };

  isEnabled(): boolean { return true; }

  async call(input: BreachAddInput, context: ToolUseContext): Promise<ToolResult<any>> {
    if (!context.matterName) {
      return { success: false, error: 'No active matter name found in context.' };
    }
    try {
      const record = addBreach({
        matterName: context.matterName,
        entityId: input.entityId,
        title: input.title,
        description: input.description,
        dateCommitted: input.dateCommitted,
        provisionsViolated: input.provisionsViolated,
        evidenceCitations: input.evidenceCitations,
      });
      return { success: true, data: record };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  }
}

export function createBreachAddTool(): Tool<BreachAddInput, any> {
  return new BreachAddTool();
}
