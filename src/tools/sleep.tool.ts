import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

export interface SleepArgs {
  milliseconds?: number;
  seconds?: number;
}

export interface SleepResult {
  sleptMs: number;
}

const MAX_SLEEP_MS = 5 * 60_000;

export class SleepTool implements Tool<SleepArgs, SleepResult> {
  readonly name = 'sleep';
  readonly description = 'Pause briefly before continuing. Use milliseconds or seconds; maximum sleep is five minutes.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      milliseconds: { type: 'number', description: `Milliseconds to sleep, maximum ${MAX_SLEEP_MS}` },
      seconds: { type: 'number', description: 'Seconds to sleep. Ignored when milliseconds is provided.' },
    },
  };

  isEnabled(): boolean { return true; }

  async call(args: SleepArgs, _context: ToolUseContext): Promise<ToolResult<SleepResult>> {
    const requested = args.milliseconds ?? ((args.seconds ?? 0) * 1000);
    if (!Number.isFinite(requested) || requested < 0) {
      return { success: false, error: 'sleep requires a non-negative duration' };
    }
    const sleptMs = Math.min(MAX_SLEEP_MS, Math.trunc(requested));
    await new Promise((resolve) => setTimeout(resolve, sleptMs));
    return {
      success: true,
      data: { sleptMs },
      output: `Slept for ${sleptMs}ms.`,
    };
  }
}
