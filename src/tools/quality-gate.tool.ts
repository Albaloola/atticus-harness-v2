import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';

interface GateCheck { name: string; passed: boolean; message: string }

export class QualityGateTool implements Tool<{ content: string }, unknown> {
  readonly name = 'quality_gate';
  readonly description = 'Run quality checks on a document: citation presence, structure, completeness, and date checks.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      content: { type: 'string', description: 'Document content to check' },
    },
    required: ['content'],
  };

  isEnabled(): boolean { return true; }

  async call(args: { content: string }, _context: ToolUseContext): Promise<ToolResult<unknown>> {
    const content = args.content;
    const checks: GateCheck[] = [];

    const citationCount = (content.match(/\[[A-Z]+-SRC-\d+\]/g) || []).length;
    checks.push({
      name: 'Citations present',
      passed: citationCount > 0,
      message: citationCount > 0 ? `${citationCount} citations found` : 'No citations found',
    });

    const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
    checks.push({
      name: 'Content length',
      passed: wordCount >= 50,
      message: `${wordCount} words${wordCount < 50 ? ' (too short)' : ''}`,
    });

    const hasSections = /^#{1,3}\s/m.test(content);
    checks.push({
      name: 'Document structure',
      passed: hasSections,
      message: hasSections ? 'Has section headings' : 'No section headings found',
    });

    const hasDate = /\d{4}-\d{2}-\d{2}|\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}/.test(content);
    checks.push({
      name: 'Date present',
      passed: hasDate,
      message: hasDate ? 'Date found' : 'No date found',
    });

    const failed = checks.filter(c => !c.passed).length;
    const status = failed === 0 ? 'pass' : failed <= 2 ? 'conditional-pass' : 'fail';

    const output = checks.map(c =>
      `${c.passed ? '✓' : '○'} ${c.name}: ${c.message}`
    ).join('\n') + `\n\nStatus: ${status.toUpperCase()} (${checks.filter(c => c.passed).length}/${checks.length} passed)`;

    return {
      success: true,
      data: { status, checks },
      output,
    };
  }
}
