import { spawn } from 'node:child_process';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { resolveWorkspacePath } from './path-safety.js';

export interface BashArgs {
  command: string;
  timeout?: number;
  timeoutMs?: number;
  cwd?: string;
  description?: string;
  maxOutputChars?: number;
}

export interface BashResult {
  command: string;
  cwd: string;
  exitCode: number | null;
  signal: NodeJS.Signals | null;
  stdout: string;
  stderr: string;
  durationMs: number;
  timedOut: boolean;
  outputTruncated: boolean;
}

const DEFAULT_TIMEOUT_MS = 120_000;
const MAX_TIMEOUT_MS = 30 * 60_000;
const DEFAULT_MAX_OUTPUT_CHARS = 200_000;
const HARD_MAX_OUTPUT_CHARS = 8_000_000;

export class BashTool implements Tool<BashArgs, BashResult> {
  readonly name = 'bash';
  readonly description = 'Execute a shell command in the current workspace and return stdout, stderr, exit code, signal, timeout, and truncation metadata.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      command: { type: 'string', description: 'Shell command to execute' },
      timeout: { type: 'number', description: `Timeout in milliseconds. Defaults to ${DEFAULT_TIMEOUT_MS}; maximum ${MAX_TIMEOUT_MS}.` },
      timeoutMs: { type: 'number', description: 'Camel-case timeout alias in milliseconds.' },
      cwd: { type: 'string', description: 'Working directory for the command. Must be inside the workspace. Defaults to the current workspace.' },
      description: { type: 'string', description: 'Short active-voice description of what the command does.' },
      maxOutputChars: { type: 'number', description: `Maximum stdout/stderr characters to retain. Defaults to ${DEFAULT_MAX_OUTPUT_CHARS}; maximum ${HARD_MAX_OUTPUT_CHARS}.` },
    },
    required: ['command'],
  };

  isEnabled(): boolean { return true; }

  async call(args: BashArgs, _context: ToolUseContext): Promise<ToolResult<BashResult>> {
    if (!args.command?.trim()) {
      return { success: false, error: 'bash requires a non-empty command' };
    }

    const cwd = resolveWorkspacePath(args.cwd || '.');
    const timeoutMs = clampNumber(args.timeoutMs ?? args.timeout, DEFAULT_TIMEOUT_MS, 1, MAX_TIMEOUT_MS);
    const maxOutputChars = clampNumber(args.maxOutputChars, DEFAULT_MAX_OUTPUT_CHARS, 1, HARD_MAX_OUTPUT_CHARS);
    const shell = process.env.SHELL || '/bin/sh';
    const started = Date.now();

    return new Promise((resolve) => {
      let stdout = '';
      let stderr = '';
      let outputTruncated = false;
      let timedOut = false;
      let settled = false;

      const child = spawn(shell, ['-lc', args.command], {
        cwd,
        env: process.env,
        windowsHide: true,
      });

      const timer = setTimeout(() => {
        timedOut = true;
        child.kill('SIGTERM');
        setTimeout(() => {
          if (!settled) child.kill('SIGKILL');
        }, 2_000).unref();
      }, timeoutMs);
      timer.unref();

      child.stdout.on('data', (chunk: Buffer) => {
        const appended = appendLimited(stdout, chunk.toString('utf-8'), maxOutputChars);
        stdout = appended.value;
        outputTruncated ||= appended.truncated;
      });
      child.stderr.on('data', (chunk: Buffer) => {
        const appended = appendLimited(stderr, chunk.toString('utf-8'), maxOutputChars);
        stderr = appended.value;
        outputTruncated ||= appended.truncated;
      });
      child.on('error', (error) => {
        clearTimeout(timer);
        settled = true;
        resolve({
          success: false,
          error: `Failed to start command: ${error.message}`,
        });
      });
      child.on('close', (exitCode, signal) => {
        clearTimeout(timer);
        settled = true;
        const data: BashResult = {
          command: args.command,
          cwd,
          exitCode,
          signal,
          stdout,
          stderr,
          durationMs: Date.now() - started,
          timedOut,
          outputTruncated,
        };
        resolve({
          success: true,
          data,
          output: formatBashOutput(data),
        });
      });
    });
  }
}

function appendLimited(current: string, addition: string, maxChars: number): { value: string; truncated: boolean } {
  if (current.length >= maxChars) return { value: current, truncated: true };
  const available = maxChars - current.length;
  if (addition.length <= available) return { value: current + addition, truncated: false };
  return { value: current + addition.slice(0, available), truncated: true };
}

function formatBashOutput(data: BashResult): string {
  const parts = [
    `exitCode=${data.exitCode}`,
    data.signal ? `signal=${data.signal}` : undefined,
    `durationMs=${data.durationMs}`,
    data.timedOut ? 'timedOut=true' : undefined,
    data.outputTruncated ? 'outputTruncated=true' : undefined,
    data.stdout ? `\nstdout:\n${data.stdout}` : undefined,
    data.stderr ? `\nstderr:\n${data.stderr}` : undefined,
  ].filter(Boolean);
  return parts.join('\n');
}

function clampNumber(value: number | undefined, fallback: number, min: number, max: number): number {
  if (value === undefined || !Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, Math.trunc(value)));
}
