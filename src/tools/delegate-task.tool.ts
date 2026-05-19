import { createTask, updateTask } from '../state/tasks.js';
import { QueryLoop } from '../agent/query-loop.js';
import { createLLMClient } from '../llm/client.js';
import { ToolRegistry } from './index.js';
import { resolveConfig } from '../config/loader.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export interface DelegateTaskInput {
  targetTeam: 'IntakeTeam' | 'EvidenceTeam' | 'AnalysisTeam' | 'CommunicationsTeam' | 'LitigationTeam' | 'ReviewTeam';
  title: string;
  description: string;
  priority?: 'low' | 'medium' | 'high' | 'critical';
  dependencies?: string[];
}

export class DelegateTaskTool implements Tool<DelegateTaskInput, any> {
  readonly name = 'delegate_task';
  readonly description = 'Delegate a specific task to another legal team. Use this when you are missing information, need specialized advice, or require peer review before proceeding.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      targetTeam: {
        type: 'string',
        enum: ['IntakeTeam', 'EvidenceTeam', 'AnalysisTeam', 'CommunicationsTeam', 'LitigationTeam', 'ReviewTeam'],
        description: 'The specialized team that should handle this task.'
      },
      title: { type: 'string', description: 'A short, clear title for the task.' },
      description: { type: 'string', description: 'Detailed instructions on what the target team needs to accomplish.' },
      priority: {
        type: 'string',
        enum: ['low', 'medium', 'high', 'critical'],
        description: 'The priority of the task.',
        default: 'medium'
      },
      dependencies: {
        type: 'array',
        items: { type: 'string' },
        description: 'Optional list of task IDs that must be completed before this task can start.'
      }
    },
    required: ['targetTeam', 'title', 'description'],
  };

  isEnabled(): boolean { return true; }

  async call(input: DelegateTaskInput, context: ToolUseContext): Promise<ToolResult<any>> {
    if (!context.matterName) {
      return { success: false, error: 'No active matter name found in context.' };
    }
    try {
      const task = createTask({
        matterName: context.matterName,
        type: 'delegated_work_order',
        title: input.title,
        assignedAgent: input.targetTeam,
        priority: input.priority ?? 'medium',
        dependencies: input.dependencies,
        data: {
          description: input.description,
          requestedBy: (context.getConfig().role as string | undefined) ?? 'LeadCounsel'
        }
      });

      // 2. Setup Sub-Agent (Team)
      const resolvedConfig = await resolveConfig({ matterName: context.matterName });
      const teamToolRegistry = new ToolRegistry({
        enforcePolicy: true,
        includeResearchTools: Boolean(resolvedConfig.autonomy?.autoApproveWeb),
      });

      const teamPrompts: Record<string, string> = {
        IntakeTeam: 'You are the Intake Team. Parse incoming documents and identify basic case metadata.',
        EvidenceTeam: 'You are the Evidence Team. You must extract facts, review documents, and update the Living Chronology using your chronology tools.',
        AnalysisTeam: 'You are the Analysis Team. You analyze the chronology, research case law, and provide legal strategy and risk assessments.',
        CommunicationsTeam: 'You are the Communications Team. You draft emails, letters, and negotiate settlements.',
        LitigationTeam: 'You are the Litigation Team. You draft formal court documents such as claims and defenses.',
        ReviewTeam: 'You are the Counsel Review Team. You must ruthlessly review proposed advice and documents for legal soundness before finalizing.'
      };

      const systemPrompt = [
        teamPrompts[input.targetTeam] || 'You are a specialized legal sub-agent.',
        'Your objective is to complete the specific task delegated to you.',
        'Use your tools to inspect the matter, read evidence, and update the chronology if needed.',
        'When you are finished, use the `submit_matter_outcome` tool to return your final work product back to the Lead Counsel.'
      ].join('\n');

      const loop = new QueryLoop({
        model: resolvedConfig.model || 'deepseek/deepseek-v4-pro', // Fallback to a strong model
        maxTokens: 8192,
        maxTurns: 30,
        systemPrompt,
        tools: teamToolRegistry,
        matterName: context.matterName,
        role: input.targetTeam,
        quietMode: true,
        requireTerminationTool: 'submit_matter_outcome',
      }, createLLMClient(resolvedConfig));

      // 3. Execute Sub-Agent
      updateTask(context.matterName, task.id, { status: 'in_progress' });
      const result = await loop.run(`Task: ${input.title}\nDescription: ${input.description}`);

      // 4. Parse Result and Update Task
      let outcomeSummary = 'No summary provided.';
      if (result.status === 'completed') {
        try {
          const parsed = JSON.parse(result.finalContent);
          outcomeSummary = parsed.summary;
          updateTask(context.matterName, task.id, { status: 'completed', data: { outcome: parsed } });
        } catch (e) {
          outcomeSummary = result.finalContent;
          updateTask(context.matterName, task.id, { status: 'completed', data: { rawOutcome: result.finalContent } });
        }
      } else {
        updateTask(context.matterName, task.id, { status: 'failed', data: { error: result.error } });
        return { success: false, error: `Team failed to complete task: ${result.error}` };
      }

      return { 
        success: true, 
        data: { 
          message: `Task successfully completed by ${input.targetTeam}`,
          taskId: task.id,
          outcome: outcomeSummary
        }
      };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  }
}

export function createDelegateTaskTool(): Tool<DelegateTaskInput, any> {
  return new DelegateTaskTool();
}
