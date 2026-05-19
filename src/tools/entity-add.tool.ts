import { addEntity } from '../storage/sqlite/index.js';
import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export interface EntityAddInput {
  name: string;
  role: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

export function createEntityAddTool(): ToolDefinition<EntityAddInput> {
  return {
    id: 'entity_add',
    name: 'entity_add',
    description: 'Add an entity (e.g. offender, claimant, witness, client) to the matter database to track their role and breaches.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'The full name of the entity.' },
        role: { type: 'string', description: 'The role of the entity (e.g., offender, claimant, witness, client).' },
        description: { type: 'string', description: 'An optional description or summary of this entity.' },
        metadata: { type: 'object', description: 'Optional structured metadata for custom properties.', additionalProperties: true },
      },
      required: ['name', 'role'],
    },
    call: async (input, context: ToolUseContext) => {
      if (!context.matterName) {
        return { success: false, error: 'No active matter name found in context.' };
      }
      try {
        const record = addEntity({
          matterName: context.matterName,
          name: input.name,
          role: input.role,
          description: input.description,
          metadata: input.metadata,
        });
        return { success: true, data: record };
      } catch (error: unknown) {
        return { success: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
  };
}
