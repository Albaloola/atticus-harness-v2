import type { AgentConfig } from '../types/agent.js';
import type { MatterIndex } from '../types/matter.js';

export interface AgentLoopOptions {
  initialPrompt?: string;
  skillName?: string;
  quietMode?: boolean;
  verbose?: boolean;
}

export interface AgentContext {
  matterName: string;
  matterIndex: MatterIndex;
  config: AgentConfig;
}

export interface BlockedAsk {
  type: 'blocked';
  message: string;
  requiredInput: string;
  suggestedFormat: string;
}
