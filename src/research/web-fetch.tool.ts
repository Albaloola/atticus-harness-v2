import { writeFile, mkdir } from 'fs/promises';
import type { Tool, ToolResult, ToolUseContext } from '../types/tool.js';
import { hashText } from '../extraction/hash.js';
import { getMatterPath } from '../storage/matter.js';
import { insertSource } from './source-store.js';
import { extractTitle, extractTextFromHtml, stripBoilerplate, normalizeWhitespace } from './source-normalizer.js';

export interface WebFetchInput {
  url: string;
  matterName?: string;
}

export interface WebFetchResult {
  sourceId: number;
  url: string;
  title: string;
  sha256: string;
  textLength: number;
  snapshotPath: string;
  textPath: string;
}

export class WebFetchTool implements Tool<WebFetchInput, WebFetchResult> {
  readonly name = 'web_fetch';
  readonly description = 'Fetch a URL, save raw HTML snapshot and extracted text to disk, and insert into the sources table.';
  readonly inputSchema = {
    type: 'object',
    properties: {
      url: { type: 'string', description: 'The URL to fetch' },
      matterName: { type: 'string', description: 'Matter name for storage (uses context matter if omitted)' },
    },
    required: ['url'],
  };

  isEnabled(): boolean {
    return true;
  }

  async call(args: WebFetchInput, context: ToolUseContext): Promise<ToolResult<WebFetchResult>> {
    const matterName = args.matterName ?? context.matterName ?? 'default';

    let response: globalThis.Response;
    try {
      response = await fetch(args.url, {
        headers: {
          'User-Agent': 'Harness/2.0 (legal-research-agent)',
          'Accept': 'text/html, application/xhtml+xml, */*',
        },
        redirect: 'follow',
      });
    } catch (err: unknown) {
      return {
        success: false,
        error: `Failed to fetch ${args.url}: ${err instanceof Error ? err.message : String(err)}`,
      };
    }

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP ${response.status}: ${response.statusText} for ${args.url}`,
      };
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('text/html') && !contentType.includes('application/xhtml')) {
      const text = await response.text();
      return this.saveSource(matterName, args.url, text, '', text, 'web');
    }

    const html = await response.text();
    const rawText = extractTextFromHtml(html);
    const cleaned = stripBoilerplate(rawText);
    const textContent = normalizeWhitespace(cleaned);

    return this.saveSource(matterName, args.url, html, textContent, textContent, 'web');
  }

  private async saveSource(
    matterName: string,
    url: string,
    rawHtml: string,
    textContent: string,
    displayText: string,
    sourceType: string,
  ): Promise<ToolResult<WebFetchResult>> {
    const htmlHash = hashText(rawHtml);
    const textHash = hashText(textContent);
    const combinedHash = hashText(htmlHash + textHash);
    const title = extractTitle(rawHtml) || url;

    const webDir = getMatterPath(matterName, '_sources', 'web');
    await mkdir(webDir, { recursive: true });

    const snapshotPath = getMatterPath(matterName, '_sources', 'web', `${combinedHash}.html`);
    const textPath = getMatterPath(matterName, '_sources', 'web', `${combinedHash}.txt`);

    await writeFile(snapshotPath, rawHtml, 'utf-8');
    await writeFile(textPath, textContent, 'utf-8');

    const source = insertSource({
      matterName,
      url,
      title,
      sha256: combinedHash,
      sourceType,
      snapshotPath,
      textPath,
      metadata: {
        contentLength: textContent.length,
        fetchedContentType: 'text/html',
      },
    });

    return {
      success: true,
      data: {
        sourceId: source.id,
        url,
        title,
        sha256: combinedHash,
        textLength: textContent.length,
        snapshotPath,
        textPath,
      },
      output: `Fetched ${url}: ${textContent.length} chars, saved as source #${source.id}`,
    };
  }
}
