import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import type { CitationSupportStatus, CitationCheck } from '../types/citation.js';
import { readFile } from 'fs/promises';

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

      const citationRegex = /\[([A-Z]+-SRC-\d+)\]/g;
      const citationMap = new Map<string, string[]>();
      const CONTEXT_CHARS = 200;
      let match: RegExpExecArray | null;

      while ((match = citationRegex.exec(content)) !== null) {
        const id = match[1];
        const start = Math.max(0, match.index - CONTEXT_CHARS);
        const end = Math.min(content.length, match.index + match[0].length + CONTEXT_CHARS);
        const context = content.substring(start, end).replace(match[0], '').trim();

        if (!citationMap.has(id)) {
          citationMap.set(id, []);
        }
        citationMap.get(id)!.push(context);
      }

      if (citationMap.size === 0) {
        return {
          success: true,
          data: { status: 'no_citations', checks: [] },
          output: 'No citations found in format [EVIDENCE_ID]. Use [NAP-SRC-0001] format.',
        };
      }

      const checks: CitationCheck[] = [];
      let checkIdx = 0;

      for (const [evidenceId, contexts] of citationMap) {
        let sourceText = '';
        try {
          const extractionPath = context.getExtractionPath(evidenceId);
          sourceText = await readFile(extractionPath, 'utf-8');
        } catch {
          checks.push({
            findingId: `${evidenceId}-${checkIdx}`,
            citationId: evidenceId,
            evidenceId,
            quote: '',
            quoteHash: '',
            status: 'unsupported' as CitationSupportStatus,
            confidence: 0,
            details: 'Evidence source file not found in _extractions/',
          });
          checkIdx++;
          continue;
        }

        const normalizedSource = normalizeText(sourceText);
        let bestConfidence = 0;
        let bestStatus: CitationSupportStatus = 'unsupported';
        let bestDetail = '';

        for (const ctx of contexts) {
          const normalizedQuote = normalizeText(ctx);
          if (normalizedQuote.length < 5) {
            bestDetail = 'Quoted text too short for reliable matching';
            continue;
          }

          if (normalizedSource.includes(normalizedQuote)) {
            const confidence = Math.min(0.95, 0.5 + (normalizedQuote.length / normalizedSource.length));
            if (confidence > bestConfidence) {
              bestConfidence = confidence;
              bestStatus = 'supported';
              bestDetail = `Exact match found in source evidence (confidence: ${Math.round(confidence * 100)}%)`;
            }
          } else {
            const terms = normalizedQuote.split(/\s+/).filter(t => t.length > 4);
            const matchedTerms = terms.filter(t => normalizedSource.includes(t));
            const termRatio = terms.length > 0 ? matchedTerms.length / terms.length : 0;

            if (matchedTerms.length > 0 && termRatio >= 0.5) {
              const confidence = 0.4 + 0.3 * termRatio;
              if (confidence > bestConfidence) {
                bestConfidence = confidence;
                bestStatus = 'partially_supported';
                bestDetail = `Partial match: ${matchedTerms.length}/${terms.length} terms found in source evidence`;
              }
            } else {
              if (0.15 > bestConfidence) {
                bestConfidence = 0.15;
                bestStatus = 'unsupported';
                bestDetail = `Quoted text not found in source evidence. Terms matched: ${matchedTerms.length}/${terms.length}`;
              }
            }
          }
        }

        const quoteText = contexts[0].substring(0, 100);

        checks.push({
          findingId: `${evidenceId}-${checkIdx}`,
          citationId: evidenceId,
          evidenceId,
          quote: quoteText,
          quoteHash: hashText(quoteText),
          status: bestStatus,
          confidence: bestConfidence,
          details: bestDetail,
        });
        checkIdx++;
      }

      const supported = checks.filter(c => c.status === 'supported').length;
      const partial = checks.filter(c => c.status === 'partially_supported').length;
      const unsupported = checks.filter(c => c.status === 'unsupported').length;
      const contradicted = checks.filter(c => c.status === 'contradicted').length;
      const notChecked = checks.filter(c => c.status === 'not_checked').length;

      const outputLines = [
        `Citation verification: ${checks.length} checks, ${supported} supported, ${partial} partial, ${unsupported} unsupported`,
        '',
        ...checks.map(c => {
          const icon = c.status === 'supported' ? '✓' : c.status === 'partially_supported' ? '~' : '✗';
          return `  ${icon} ${c.citationId}: ${c.details}`;
        }),
      ];

      return {
        success: true,
        data: {
          candidateId: args.candidatePath,
          checks,
          summary: { total: checks.length, supported, unsupported, contradicted, notChecked },
          passed: unsupported === 0 && contradicted === 0,
        },
        output: outputLines.join('\n'),
      };
    } catch (err: unknown) {
      return { success: false, error: `Verification failed: ${(err as Error).message}` };
    }
  }
}

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .trim();
}

function hashText(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash | 0;
  }
  return Math.abs(hash).toString(16);
}
