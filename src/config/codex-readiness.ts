import { execFile, type ExecFileException } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export interface CodexCliReadiness {
  ok: boolean;
  message: string;
  status: 'ok' | 'missing' | 'unreachable';
}

export async function checkCodexLoginStatus(timeoutMs = 5_000): Promise<CodexCliReadiness> {
  try {
    const { stdout, stderr } = await execFileAsync('codex', ['login', 'status'], {
      timeout: timeoutMs,
      windowsHide: true,
    });
    const output = normalizeCodexLoginOutput(stdout, stderr);
    return {
      ok: true,
      status: 'ok',
      message: output || 'Codex CLI login is ready.',
    };
  } catch (error) {
    const err = error as ExecFileException & { stdout?: string; stderr?: string };
    const output = normalizeCodexLoginOutput(err.stdout, err.stderr);
    if (err.code === 'ENOENT') {
      return {
        ok: false,
        status: 'unreachable',
        message: 'Codex CLI was not found. Install Codex, then run: codex login',
      };
    }
    if (/not\s+logged\s+in|login required|authenticate|no login/i.test(output)) {
      return {
        ok: false,
        status: 'missing',
        message: output || 'Codex CLI is not logged in. Run: codex login',
      };
    }
    if (err.signal === 'SIGTERM' || /timed out/i.test(String(err.message))) {
      return {
        ok: false,
        status: 'unreachable',
        message: `Codex login status timed out after ${timeoutMs}ms.`,
      };
    }
    return {
      ok: false,
      status: 'unreachable',
      message: output || err.message || 'Codex CLI login status failed.',
    };
  }
}

export function normalizeCodexLoginOutput(stdout: string | Buffer | undefined, stderr: string | Buffer | undefined): string {
  return [stdout, stderr]
    .map((value) => Buffer.isBuffer(value) ? value.toString('utf-8') : value)
    .filter((value): value is string => Boolean(value?.trim()))
    .join('\n')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !/^WARNING:\s+proceeding, even though we could not update PATH:/i.test(line))
    .join('\n')
    .trim();
}
