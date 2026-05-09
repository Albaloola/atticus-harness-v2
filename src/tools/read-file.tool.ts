import { lstat, readFile } from 'fs/promises';
import { detectFormatByMagic } from '../extraction/detect.js';
import { extractText, type ExtractedText } from '../extraction/index.js';
import type { EvidenceFormat } from '../extraction/types.js';
import { estimateTokenCount } from '../llm/token-counter.js';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { resolveWorkspacePath } from './path-safety.js';

const DEFAULT_MAX_READ_TOKENS = 1_200_000;
const HARD_MAX_READ_TOKENS = 1_200_000;

export interface ReadFileArgs {
  path?: string;
  file_path?: string;
  startLine?: number;
  lineOffset?: number;
  limit?: number;
  lineLimit?: number;
  offset?: number;
  length?: number;
  pages?: string;
  maxTokens?: number;
  includeLineNumbers?: boolean;
}

export interface ReadFileResult {
  type: 'text' | 'extracted_text' | 'too_large';
  path: string;
  format: EvidenceFormat;
  content: string;
  readMode: 'full' | 'line_range' | 'char_range' | 'page_range';
  startLine: number;
  numLines: number;
  totalLines: number;
  offset: number;
  length: number;
  totalLength: number;
  truncated: boolean;
  estimatedTokens: number;
  maxTokens: number;
  fileSizeBytes: number;
  extractionMethod?: string;
  pageRange?: {
    startPage: number;
    endPage: number;
    totalPages?: number;
  };
  nextOffset?: number;
  nextStartLine?: number;
  suggestedLineLimit?: number;
}

export class ReadFileTool implements Tool<ReadFileArgs, ReadFileResult> {
  readonly name = 'read_file';
  readonly description = [
    'Read a file or extracted document text. By default this attempts to return the whole readable document, up to a 1,200,000-token safety limit.',
    'Use startLine/limit or Claude-compatible file_path/offset/limit to jump directly to any line range for focused rereads.',
    'Legacy character offset/length is still supported for exact character windows.',
    'For PDFs and extracted page-aware documents, use pages like "1", "2-5", or "3-" to read selected pages.',
  ].join(' ');
  readonly inputSchema = {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'Workspace-relative path, or absolute path inside the current workspace' },
      file_path: { type: 'string', description: 'Claude-compatible alias for path' },
      startLine: { type: 'number', description: '1-based first line to read. Can jump to any line, not just next/back.' },
      lineOffset: { type: 'number', description: '1-based alias for startLine' },
      limit: { type: 'number', description: 'Number of lines to read for line-range mode' },
      lineLimit: { type: 'number', description: 'Alias for limit' },
      offset: { type: 'number', description: 'Legacy 0-based character offset, or 1-based line offset when used with file_path/limit' },
      length: { type: 'number', description: 'Legacy character length. Use startLine/limit for document analysis.' },
      pages: { type: 'string', description: 'PDF/page-aware range: "1", "1-5", or "3-". Pages are 1-based.' },
      maxTokens: { type: 'number', description: `Maximum estimated tokens to return, default/max ${DEFAULT_MAX_READ_TOKENS}` },
      includeLineNumbers: { type: 'boolean', description: 'Whether output text should include line numbers for exact follow-up rereads. Default true for line/full reads.' },
    },
    required: [],
  };

  async call(args: ReadFileArgs, _context: ToolUseContext): Promise<ToolResult<ReadFileResult>> {
    try {
      const inputPath = args.path ?? args.file_path;
      if (!inputPath) {
        return { success: false, error: 'read_file requires path or file_path' };
      }

      const filePath = resolveWorkspacePath(inputPath);
      const fileStat = await lstat(filePath);
      if (!fileStat.isFile()) {
        return { success: false, error: `read_file can only read regular files: ${inputPath}` };
      }

      const maxTokens = normalizeMaxTokens(args.maxTokens);
      const source = await loadReadableSource(filePath, args);
      const totalLength = source.content.length;
      const lines = splitLines(source.content);
      const totalLines = lines.length;
      const range = selectRange(args, source.content, lines);
      const body = formatContentForOutput(range, args);
      const estimatedTokens = estimateTokenCount(body);

      if (estimatedTokens > maxTokens) {
        const suggestedLineLimit = suggestLineLimit(totalLines, estimatedTokens, maxTokens, range.numLines);
        const data: ReadFileResult = {
          type: 'too_large',
          path: filePath,
          format: source.format,
          content: '',
          readMode: range.readMode,
          startLine: range.startLine,
          numLines: 0,
          totalLines,
          offset: range.offset,
          length: 0,
          totalLength,
          truncated: true,
          estimatedTokens,
          maxTokens,
          fileSizeBytes: fileStat.size,
          extractionMethod: source.extractionMethod,
          pageRange: source.pageRange,
          suggestedLineLimit,
        };
        return {
          success: true,
          data,
          output: formatTooLargeOutput(data),
        };
      }

      const nextOffset = range.offset + range.content.length < totalLength
        ? range.offset + range.content.length
        : undefined;
      const nextStartLine = range.startLine + range.numLines <= totalLines
        ? range.startLine + range.numLines
        : undefined;
      const data: ReadFileResult = {
        type: source.extractionMethod ? 'extracted_text' : 'text',
        path: filePath,
        format: source.format,
        content: range.content,
        readMode: range.readMode,
        startLine: range.startLine,
        numLines: range.numLines,
        totalLines,
        offset: range.offset,
        length: range.content.length,
        totalLength,
        truncated: nextOffset !== undefined || nextStartLine !== undefined,
        estimatedTokens,
        maxTokens,
        fileSizeBytes: fileStat.size,
        extractionMethod: source.extractionMethod,
        pageRange: source.pageRange,
        nextOffset,
        nextStartLine,
      };

      return { success: true, data, output: body + formatFooter(data) };
    } catch (err: unknown) {
      return { success: false, error: `Failed to read file: ${(err as Error).message}` };
    }
  }

  isEnabled(): boolean { return true; }
}

interface ReadableSource {
  content: string;
  format: EvidenceFormat;
  extractionMethod?: string;
  pageRange?: {
    startPage: number;
    endPage: number;
    totalPages?: number;
  };
}

interface SelectedRange {
  content: string;
  readMode: ReadFileResult['readMode'];
  startLine: number;
  numLines: number;
  offset: number;
  outputLines: string[];
}

async function loadReadableSource(filePath: string, args: ReadFileArgs): Promise<ReadableSource> {
  const format = await detectFormatByMagic(filePath);
  if (format === 'pdf' || format === 'docx' || format === 'doc' || format === 'msg' || format === 'image') {
    const extracted = await extractText(filePath);
    return sourceFromExtraction(filePath, format, extracted, args.pages);
  }

  if (format === 'unknown' && await looksBinary(filePath)) {
    throw new Error(`Unsupported binary file: ${filePath}`);
  }

  return {
    content: await readFile(filePath, 'utf-8'),
    format,
  };
}

function sourceFromExtraction(
  filePath: string,
  format: EvidenceFormat,
  extracted: ExtractedText,
  pagesSpec: string | undefined,
): ReadableSource {
  if (!pagesSpec) {
    return {
      content: extracted.text,
      format,
      extractionMethod: extracted.method,
    };
  }

  if (!extracted.pages?.length) {
    throw new Error(`pages is only available when ${filePath} has page-aware extracted text`);
  }

  const pageRange = parsePages(pagesSpec, extracted.pageCount ?? extracted.pages.length);
  const selectedPages = extracted.pages.filter((page) =>
    page.pageNumber >= pageRange.startPage && page.pageNumber <= pageRange.endPage
  );
  const content = selectedPages
    .map((page) => `[Page ${page.pageNumber}]\n${page.text}`)
    .join('\n\n');

  return {
    content,
    format,
    extractionMethod: extracted.method,
    pageRange,
  };
}

async function looksBinary(filePath: string): Promise<boolean> {
  const buffer = await readFile(filePath).then((data) => data.subarray(0, 4096));
  if (buffer.length === 0) return false;

  let suspicious = 0;
  for (const byte of buffer) {
    if (byte === 0) return true;
    const allowedWhitespace = byte === 9 || byte === 10 || byte === 12 || byte === 13;
    if (byte < 32 && !allowedWhitespace) suspicious += 1;
  }
  return suspicious / buffer.length > 0.05;
}

function selectRange(args: ReadFileArgs, content: string, lines: string[]): SelectedRange {
  if (usesLineRange(args)) {
    const startLine = normalizeStartLine(args);
    const lineLimit = normalizeLineLimit(args);
    const startIndex = Math.min(Math.max(0, startLine - 1), lines.length);
    const endIndex = lineLimit === undefined ? lines.length : Math.min(lines.length, startIndex + lineLimit);
    const outputLines = lines.slice(startIndex, endIndex);
    const prefix = lines.slice(0, startIndex).join('\n');
    const offset = startIndex === 0 ? 0 : prefix.length + 1;
    return {
      content: outputLines.join('\n'),
      readMode: 'line_range',
      startLine: startIndex + 1,
      numLines: outputLines.length,
      offset,
      outputLines,
    };
  }

  if (usesCharRange(args)) {
    const offset = Math.max(0, Math.trunc(args.offset ?? 0));
    const length = args.length === undefined
      ? Math.max(0, content.length - offset)
      : Math.max(0, Math.trunc(args.length));
    const slice = content.slice(offset, offset + length);
    const prefix = content.slice(0, offset);
    const startLine = prefix.length === 0 ? 1 : splitLines(prefix).length;
    return {
      content: slice,
      readMode: 'char_range',
      startLine,
      numLines: splitLines(slice).length,
      offset,
      outputLines: splitLines(slice),
    };
  }

  return {
    content,
    readMode: 'full',
    startLine: 1,
    numLines: lines.length,
    offset: 0,
    outputLines: lines,
  };
}

function usesLineRange(args: ReadFileArgs): boolean {
  return (
    args.startLine !== undefined ||
    args.lineOffset !== undefined ||
    args.limit !== undefined ||
    args.lineLimit !== undefined ||
    (args.file_path !== undefined && args.offset !== undefined)
  );
}

function usesCharRange(args: ReadFileArgs): boolean {
  return args.offset !== undefined || args.length !== undefined;
}

function normalizeStartLine(args: ReadFileArgs): number {
  return Math.max(1, Math.trunc(args.startLine ?? args.lineOffset ?? args.offset ?? 1));
}

function normalizeLineLimit(args: ReadFileArgs): number | undefined {
  const raw = args.lineLimit ?? args.limit;
  if (raw === undefined) return undefined;
  return Math.max(1, Math.trunc(raw));
}

function normalizeMaxTokens(value: number | undefined): number {
  if (value === undefined || !Number.isFinite(value)) return DEFAULT_MAX_READ_TOKENS;
  return Math.min(HARD_MAX_READ_TOKENS, Math.max(1, Math.trunc(value)));
}

function splitLines(content: string): string[] {
  if (content.length === 0) return [];
  return content.split(/\r?\n/);
}

function parsePages(spec: string, totalPages: number): { startPage: number; endPage: number; totalPages?: number } {
  const match = spec.trim().match(/^(\d+)(?:-(\d*)?)?$/);
  if (!match) {
    throw new Error(`Invalid pages range "${spec}". Use "1", "1-5", or "3-".`);
  }

  const startPage = Number(match[1]);
  const endText = match[2];
  const endPage = endText === undefined
    ? startPage
    : endText === ''
      ? totalPages
      : Number(endText);

  if (!Number.isInteger(startPage) || !Number.isInteger(endPage) || startPage < 1 || endPage < startPage) {
    throw new Error(`Invalid pages range "${spec}".`);
  }
  if (totalPages > 0 && startPage > totalPages) {
    throw new Error(`Page range starts after the document end: ${startPage} > ${totalPages}.`);
  }

  return {
    startPage,
    endPage: totalPages > 0 ? Math.min(endPage, totalPages) : endPage,
    totalPages: totalPages || undefined,
  };
}

function formatContentForOutput(range: SelectedRange, args: ReadFileArgs): string {
  if (range.readMode === 'char_range') return range.content;
  const includeLineNumbers = args.includeLineNumbers ?? true;
  if (!includeLineNumbers) return range.content;
  return addLineNumbers(range.outputLines, range.startLine);
}

function addLineNumbers(lines: string[], startLine: number): string {
  const width = String(startLine + Math.max(0, lines.length - 1)).length;
  return lines
    .map((line, index) => `${String(startLine + index).padStart(width, ' ')}\t${line}`)
    .join('\n');
}

function formatFooter(data: ReadFileResult): string {
  const parts = [
    `mode=${data.readMode}`,
    `format=${data.format}`,
    data.extractionMethod ? `extraction=${data.extractionMethod}` : undefined,
    data.pageRange ? `pages=${data.pageRange.startPage}-${data.pageRange.endPage}${data.pageRange.totalPages ? `/${data.pageRange.totalPages}` : ''}` : undefined,
    `lines=${data.startLine}-${Math.max(data.startLine, data.startLine + data.numLines - 1)}/${data.totalLines}`,
    `chars=${data.offset}-${data.offset + data.length}/${data.totalLength}`,
    `estimatedTokens=${data.estimatedTokens}`,
    `maxTokens=${data.maxTokens}`,
    data.nextStartLine !== undefined ? `nextStartLine=${data.nextStartLine}` : undefined,
    data.nextOffset !== undefined ? `nextOffset=${data.nextOffset}` : undefined,
  ].filter((part): part is string => Boolean(part));

  return `\n\n[read_file ${parts.join('; ')}]`;
}

function formatTooLargeOutput(data: ReadFileResult): string {
  const suggested = data.suggestedLineLimit ?? 2000;
  return [
    'read_file did not return document content because the requested range exceeds the model safety limit.',
    `path=${data.path}`,
    `format=${data.format}`,
    `estimatedTokens=${data.estimatedTokens}; maxTokens=${data.maxTokens}; totalLines=${data.totalLines}; totalChars=${data.totalLength}`,
    `Retry with an exact focused range, for example: read_file(${JSON.stringify({ path: data.path, startLine: 1, limit: suggested })})`,
    'You can choose any startLine and limit; this is not limited to next/back paging.',
  ].join('\n');
}

function suggestLineLimit(totalLines: number, estimatedTokens: number, maxTokens: number, selectedLines: number): number {
  if (estimatedTokens <= 0) return Math.max(1, Math.min(selectedLines || totalLines || 1, 2000));
  const sourceLineCount = selectedLines || totalLines || 1;
  return Math.max(1, Math.floor((sourceLineCount * maxTokens * 0.85) / estimatedTokens));
}
