import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { readFile } from 'fs/promises';
import { verifyCandidateCitations } from '../citation/verify.js';

export class VerifyCitationsTool implements Tool<{ candidatePath: string }, unknown> {
  readonly name = 'verify_citations';
  readonly description = 'Verify that citations in a draft document match the source evidence. Extracts quoted text and checks against source evidence.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      candidatePath: { type: 'string', description: 'Path to the candidate document to verify' },
    },
    required: ['candidatePath'],
  };

  isEnabled(): boolean { return true; }

  async call(args: { candidatePath: string }, context: ToolUseContext): Promise<ToolResult<unknown>> {
    try {
      const content = await readFile(args.candidatePath, 'utf-8');
      const matterName = context.matterName;
      if (!matterName) {
        return { success: false, error: 'Citation verification requires a matter context' };
      }

      const result = await verifyCandidateCitations(matterName, {
        id: args.candidatePath,
        content,
        metadata: {},
      });

      if (result.checks.length === 0) {
        return {
          success: true,
          data: { status: 'no_citations', checks: [] },
          output: 'No citations found in format [EVIDENCE_ID]. Use [NAP-SRC-0001] format.',
        };
      }

      const supported = result.summary.supported;
      const partial = result.checks.filter(c => c.status === 'partially_supported').length;
      const unsupported = result.summary.unsupported;
      const contradicted = result.summary.contradicted;
      const notChecked = result.summary.notChecked;

      const outputLines = [
        `Citation verification: ${result.checks.length} checks, ${supported} supported, ${partial} partial, ${unsupported} unsupported`,
        '',
        ...result.checks.map(c => {
          const icon = c.status === 'supported' ? '✓' : c.status === 'partially_supported' ? '~' : '✗';
          return `  ${icon} ${c.citationId}: ${c.details}`;
        }),
      ];

      return {
        success: true,
        data: {
          candidateId: args.candidatePath,
          checks: result.checks,
          summary: { total: result.checks.length, supported, unsupported, contradicted, notChecked },
          passed: result.passed,
        },
        output: outputLines.join('\n'),
      };
    } catch (err: unknown) {
      return { success: false, error: `Verification failed: ${(err as Error).message}` };
    }
  }
}
