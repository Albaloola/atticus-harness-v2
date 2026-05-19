import type { ToolDefinition, ToolUseContext } from '../types/tool.js';

export interface SubmitMatterOutcomeInput {
  status: 'completed' | 'needs_followup' | 'failed';
  summary: string;
  artifacts?: string[];
  risks?: Array<{ risk: string; severity: string }>;
  findings?: Array<{ claim: string; confidence: number }>;
}

export function createSubmitMatterOutcomeTool(): ToolDefinition<SubmitMatterOutcomeInput> {
  return {
    id: 'submit_matter_outcome',
    name: 'submit_matter_outcome',
    description: 'Submit the final outcome of the orchestration loop. Use this tool when all necessary tasks are complete or when the matter is blocked and needs human follow-up. This strictly enforces the JSON schema of the final result.',
    inputSchema: {
      type: 'object',
      properties: {
        status: { 
          type: 'string', 
          enum: ['completed', 'needs_followup', 'failed'],
          description: 'The final status of the matter run.'
        },
        summary: { type: 'string', description: 'A comprehensive summary of the work done, advice given, or documents drafted.' },
        artifacts: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'List of artifact IDs produced during the run.'
        },
        risks: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              risk: { type: 'string' },
              severity: { type: 'string', enum: ['low', 'medium', 'high', 'critical'] }
            },
            required: ['risk', 'severity']
          },
          description: 'Any legal or procedural risks identified.'
        },
        findings: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              claim: { type: 'string' },
              confidence: { type: 'number' }
            },
            required: ['claim', 'confidence']
          },
          description: 'Key factual or legal findings.'
        }
      },
      required: ['status', 'summary'],
    },
    call: async (input, context: ToolUseContext) => {
      // The actual halting logic will be handled by the Orchestrator/QueryLoop
      // detecting that this tool was called. We just return success here.
      return { 
        success: true, 
        data: {
          message: 'Matter outcome submitted successfully. The orchestrator will now halt.',
          outcome: input
        }
      };
    },
  };
}
