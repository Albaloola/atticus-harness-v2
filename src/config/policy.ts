import type {
  AutonomyPolicy,
  ToolPolicy,
  ToolCategory,
  ApprovalDecision,
} from './schema.js';

const TOOL_TO_CATEGORY: Record<string, ToolCategory> = {
  read_file: 'read_only',
  search_files: 'read_only',
  exec_sqlite: 'read_only',
  evidence_search: 'read_only',
  llm_call: 'agent_spawn',
  write_file: 'matter_write',
  draft: 'matter_write',
  verify_citations: 'read_only',
  quality_gate: 'read_only',
  hostile_review: 'agent_spawn',
  evidence_ingest: 'matter_write',
};

export function classifyToolCategory(toolName: string): ToolCategory {
  return TOOL_TO_CATEGORY[toolName] ?? 'matter_write';
}

export function evaluatePolicy(
  policy: ToolPolicy,
  toolName: string,
  _context?: { matterName?: string }
): ApprovalDecision {
  const category = classifyToolCategory(toolName);
  const categoryPolicy = policy[category];

  if (!categoryPolicy) {
    return 'ask';
  }

  // Check tool-level override first
  if (categoryPolicy.toolOverrides?.[toolName]) {
    return categoryPolicy.toolOverrides[toolName];
  }

  return categoryPolicy.defaultDecision;
}

export function evaluateAutonomyPolicy(
  autonomy: AutonomyPolicy,
  toolName: string,
  _context?: { matterName?: string }
): ApprovalDecision {
  const category = classifyToolCategory(toolName);

  if (autonomy.mode === 'full_autonomy') {
    return 'allow';
  }

  if (autonomy.mode === 'semi_autonomous') {
    if (category === 'read_only') return 'allow';
    if (category === 'matter_write') return 'allow_with_audit';
    if (category === 'external_action') return 'ask';
    if (category === 'agent_spawn') return 'allow_with_audit';
    return 'ask';
  }

  // operator_safe: use tool policy categories
  switch (category) {
    case 'read_only':
      return 'allow';
    case 'matter_write':
      return 'ask';
    case 'external_action':
      return autonomy.externalActionMode === 'auto'
        ? 'allow_with_audit'
        : autonomy.externalActionMode === 'operator_approval'
          ? 'ask'
          : 'deny';
    case 'agent_spawn':
      return 'ask';
    case 'config_change':
      return 'ask';
    default:
      return 'ask';
  }
}

export function requiresAuditLog(
  policy: ToolPolicy,
  toolName: string
): boolean {
  const category = classifyToolCategory(toolName);
  const categoryPolicy = policy[category];
  return categoryPolicy?.requireAuditLog ?? false;
}
