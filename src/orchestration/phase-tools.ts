const COMMON_WORKER_TOOLS = [
  'read_file',
  'write_file',
  'edit_file',
  'search_files',
  'glob',
  'grep',
  'bash',
  'todo_write',
  'tool_search',
  'sleep',
  'notebook_edit',
  'exec_sqlite',
  'evidence_search',
  'evidence_chunk_read',
  'matter_inventory',
  'draft',
  'verify_citations',
] as const;

const PHASE_TOOL_ADDITIONS: Record<string, readonly string[]> = {
  evidence_ingestion_and_fact_extraction: ['evidence_ingest'],
  issue_spotting: ['web_search', 'web_fetch'],
  law_and_policy_research: ['web_search', 'web_fetch'],
  merits_and_risk_analysis: ['hostile_review'],
  procedural_route_planning: ['web_search', 'web_fetch'],
  verification_and_hostile_review: ['hostile_review', 'quality_gate'],
  operator_handoff: ['quality_gate'],
};

export function allowedToolsForPhase(phaseId: string): string[] {
  return Array.from(new Set([
    ...COMMON_WORKER_TOOLS,
    ...(PHASE_TOOL_ADDITIONS[phaseId] ?? []),
  ]));
}
