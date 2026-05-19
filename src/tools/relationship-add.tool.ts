import { addRelationship } from '../storage/sqlite/index.js';
import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export interface RelationshipAddInput {
  sourceId: string;
  targetId: string;
  relationType: string;
  metadata?: Record<string, unknown>;
}

export function createRelationshipAddTool(): ToolDefinition<RelationshipAddInput> {
  return {
    id: 'relationship_add',
    name: 'relationship_add',
    description: 'Add a relationship between two entities or breaches to model conspiracies, corporate relationships, causes, or other legal and factual structures.',
    inputSchema: {
      type: 'object',
      properties: {
        sourceId: { type: 'string', description: 'The source entity or breach ID.' },
        targetId: { type: 'string', description: 'The target entity or breach ID.' },
        relationType: { type: 'string', description: 'The type of relationship (e.g. employed_by, conspired_with, caused_by, evidence_for).' },
        metadata: { type: 'object', description: 'Optional structured metadata for custom properties.', additionalProperties: true },
      },
      required: ['sourceId', 'targetId', 'relationType'],
    },
    call: async (input, context: ToolUseContext) => {
      if (!context.matterName) {
        return { success: false, error: 'No active matter name found in context.' };
      }
      try {
        const record = addRelationship({
          matterName: context.matterName,
          sourceId: input.sourceId,
          targetId: input.targetId,
          relationType: input.relationType,
          metadata: input.metadata,
        });
        return { success: true, data: record };
      } catch (error: unknown) {
        return { success: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
  };
}
