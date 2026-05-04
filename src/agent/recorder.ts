import { appendFile, mkdir } from 'fs/promises';
import { join } from 'path';
import type { AgentTurn } from '../types/agent.js';

export async function recordTurn(
  matterPath: string,
  turn: AgentTurn
): Promise<void> {
  const logDir = join(matterPath, '_candidates');
  await mkdir(logDir, { recursive: true });

  const lines: string[] = [
    `\n## Turn ${turn.turnNumber}`,
    `Time: ${new Date().toISOString()}`,
    '',
    '### Request',
  ];

  for (const m of turn.request) {
    lines.push(`${m.role}: ${m.content}`);
  }

  lines.push('', '### Response');
  lines.push(`Content: ${turn.response.content}`);

  if (turn.response.toolCalls && turn.response.toolCalls.length > 0) {
    for (const tc of turn.response.toolCalls) {
      lines.push(`Tool Call: ${tc.name}`);
    }
  }

  lines.push('', '### Tool Results');
  if (turn.toolCalls && turn.toolCalls.length > 0) {
    for (const tc of turn.toolCalls) {
      const status = tc.result.success ? '\u2713' : '\u2717';
      lines.push(`- ${tc.toolName} (${tc.durationMs}ms): ${status}`);
    }
  } else {
    lines.push('(no tool calls executed)');
  }

  lines.push('', '---');

  const logFile = join(logDir, 'agent-loop-log.md');
  await appendFile(logFile, lines.join('\n'), 'utf-8');
}
