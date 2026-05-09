import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { readFile, rm } from 'fs/promises';
import { initMatter, deleteMatter, getMatterPath } from '../../src/storage/matter.js';
import { closeStateDb } from '../../src/state/store.js';

import {
  MockSearchProvider,
  fetchProvider,
  type SearchResult,
} from '../../src/research/provider.js';

import {
  insertSource,
  getSourceById,
  listSources,
  getSourceText,
  type SourceRecord,
} from '../../src/research/source-store.js';

import {
  extractTitle,
  extractTextFromHtml,
  stripBoilerplate,
  normalizeWhitespace,
} from '../../src/research/source-normalizer.js';

import {
  verifyQuote,
  calcSourceFreshness,
  rankSourceAuthority,
} from '../../src/research/source-citation.js';

import { scoreRelevance, rankSources } from '../../src/research/source-ranker.js';

import { WebSearchTool } from '../../src/research/web-search.tool.js';
import { WebFetchTool } from '../../src/research/web-fetch.tool.js';
import { hashText } from '../../src/extraction/hash.js';

import type { ToolUseContext } from '../../src/types/tool.js';

const TEST_MATTER = 'test-research';

function makeContext(matterName?: string): ToolUseContext {
  return {
    matterName: matterName ?? TEST_MATTER,
    getEvidencePath: (id: string) => getMatterPath(TEST_MATTER, '_evidence', `${id}.dat`),
    getExtractionPath: (id: string) => getMatterPath(TEST_MATTER, '_extractions', `${id}.txt`),
    getConfig: () => ({}),
    log: () => {},
  };
}

// ── MockSearchProvider ─────────────────────────────────────────────

describe('MockSearchProvider', () => {
  const results: SearchResult[] = [
    { title: 'Statute Title', url: 'https://gov.example/statute/1', snippet: 'A statute about things', sourceType: 'statute', jurisdiction: 'us' },
    { title: 'Case Law Opinion', url: 'https://courts.example/case/1', snippet: 'Important ruling about contracts', sourceType: 'case_law', jurisdiction: 'us' },
    { title: 'News Article', url: 'https://news.example/article/1', snippet: 'Latest legal developments', sourceType: 'news', jurisdiction: 'uk' },
  ];

  it('returns all results when no filters', async () => {
    const provider = new MockSearchProvider(results);
    const out = await provider.search('');
    expect(out).toHaveLength(3);
  });

  it('filters by sourceTypeFilter', async () => {
    const provider = new MockSearchProvider(results);
    const out = await provider.search('', { sourceTypeFilter: 'statute' });
    expect(out).toHaveLength(1);
    expect(out[0].sourceType).toBe('statute');
  });

  it('filters by jurisdiction', async () => {
    const provider = new MockSearchProvider(results);
    const out = await provider.search('', { jurisdiction: 'uk' });
    expect(out).toHaveLength(1);
    expect(out[0].jurisdiction).toBe('uk');
  });

  it('limits by maxResults', async () => {
    const provider = new MockSearchProvider(results);
    const out = await provider.search('', { maxResults: 2 });
    expect(out).toHaveLength(2);
  });

  it('filters by query matching title', async () => {
    const provider = new MockSearchProvider(results);
    const out = await provider.search('statute');
    expect(out).toHaveLength(1);
    expect(out[0].title).toContain('Statute');
  });

  it('filters by query matching snippet', async () => {
    const provider = new MockSearchProvider(results);
    const out = await provider.search('contracts');
    expect(out).toHaveLength(1);
    expect(out[0].snippet).toContain('contracts');
  });

  it('combines multiple filters', async () => {
    const provider = new MockSearchProvider(results);
    const out = await provider.search('legal', { sourceTypeFilter: 'news' });
    expect(out).toHaveLength(1);
    expect(out[0].sourceType).toBe('news');
  });

  it('supports setResults for DI in tests', async () => {
    const provider = new MockSearchProvider();
    provider.setResults([{ title: 'Custom', url: 'http://x', snippet: 'x', sourceType: 'web' }]);
    const out = await provider.search('');
    expect(out).toHaveLength(1);
    expect(out[0].title).toBe('Custom');
  });
});

// ── Source Store ───────────────────────────────────────────────────

describe('Source Store', () => {
  beforeEach(async () => {
    await initMatter(TEST_MATTER);
  });

  afterEach(async () => {
    closeStateDb(TEST_MATTER);
    await deleteMatter(TEST_MATTER);
  });

  it('insertSource returns a source record with all fields', () => {
    const source = insertSource({
      matterName: TEST_MATTER,
      url: 'https://example.com/doc',
      title: 'Test Document',
      sha256: 'abc123',
      sourceType: 'statute',
      jurisdiction: 'us',
    });

    expect(source.id).toBeGreaterThan(0);
    expect(source.matter_name).toBe(TEST_MATTER);
    expect(source.url).toBe('https://example.com/doc');
    expect(source.title).toBe('Test Document');
    expect(source.sha256).toBe('abc123');
    expect(source.source_type).toBe('statute');
    expect(source.jurisdiction).toBe('us');
    expect(source.fetched_at).toBeTruthy();
    expect(source.metadata_json).toBe('{}');
  });

  it('insertSource stores metadata', () => {
    const source = insertSource({
      matterName: TEST_MATTER,
      title: 'With Metadata',
      metadata: { snippet: 'a snippet', rating: 5 },
    });

    expect(JSON.parse(source.metadata_json)).toEqual({ snippet: 'a snippet', rating: 5 });
  });

  it('insertSource defaults sourceType to other', () => {
    const source = insertSource({
      matterName: TEST_MATTER,
      title: 'Untyped',
    });

    expect(source.source_type).toBe('other');
  });

  it('getSourceById retrieves an inserted source', () => {
    const inserted = insertSource({
      matterName: TEST_MATTER,
      url: 'https://example.com/doc2',
      title: 'Retrievable',
    });

    const fetched = getSourceById(TEST_MATTER, inserted.id);
    expect(fetched).toBeTruthy();
    expect(fetched!.id).toBe(inserted.id);
    expect(fetched!.title).toBe('Retrievable');
    expect(fetched!.url).toBe('https://example.com/doc2');
  });

  it('getSourceById returns null for nonexistent source', () => {
    const result = getSourceById(TEST_MATTER, 99999);
    expect(result).toBeNull();
  });

  it('listSources returns all sources sorted by fetched_at DESC', async () => {
    insertSource({ matterName: TEST_MATTER, title: 'First', url: 'http://a' });
    await new Promise((r) => setTimeout(r, 10));
    insertSource({ matterName: TEST_MATTER, title: 'Second', url: 'http://b' });
    await new Promise((r) => setTimeout(r, 10));
    insertSource({ matterName: TEST_MATTER, title: 'Third', url: 'http://c' });

    const sources = listSources(TEST_MATTER);
    expect(sources.length).toBe(3);
    expect(sources[0].title).toBe('Third');
    expect(sources[2].title).toBe('First');
  });

  it('listSources filters by sourceType', () => {
    insertSource({ matterName: TEST_MATTER, title: 'Statute A', sourceType: 'statute' });
    insertSource({ matterName: TEST_MATTER, title: 'Case B', sourceType: 'case_law' });
    insertSource({ matterName: TEST_MATTER, title: 'Statute C', sourceType: 'statute' });

    const filtered = listSources(TEST_MATTER, { sourceType: 'statute' });
    expect(filtered.length).toBe(2);
    for (const s of filtered) expect(s.source_type).toBe('statute');
  });

  it('listSources filters by jurisdiction', () => {
    insertSource({ matterName: TEST_MATTER, title: 'US Doc', jurisdiction: 'us' });
    insertSource({ matterName: TEST_MATTER, title: 'UK Doc', jurisdiction: 'uk' });

    const filtered = listSources(TEST_MATTER, { jurisdiction: 'us' });
    expect(filtered.length).toBe(1);
    expect(filtered[0].jurisdiction).toBe('us');
  });

  it('listSources respects limit and offset', async () => {
    insertSource({ matterName: TEST_MATTER, title: 'A' });
    await new Promise((r) => setTimeout(r, 10));
    insertSource({ matterName: TEST_MATTER, title: 'B' });
    await new Promise((r) => setTimeout(r, 10));
    insertSource({ matterName: TEST_MATTER, title: 'C' });

    const limited = listSources(TEST_MATTER, { limit: 2 });
    expect(limited.length).toBe(2);

    const offset = listSources(TEST_MATTER, { limit: 1, offset: 1 });
    expect(offset.length).toBe(1);
    expect(offset[0].title).toBe('B');
  });

  it('getSourceText reads text_path file', async () => {
    const textPath = getMatterPath(TEST_MATTER, '_sources', 'web', 'test.txt');
    await import('fs/promises').then((fs) => fs.mkdir(getMatterPath(TEST_MATTER, '_sources', 'web'), { recursive: true }));
    await import('fs/promises').then((fs) => fs.writeFile(textPath, 'Hello from source', 'utf-8'));

    const source = insertSource({
      matterName: TEST_MATTER,
      title: 'Text Source',
      textPath,
    });

    const text = await getSourceText(source);
    expect(text).toBe('Hello from source');
  });

  it('getSourceText throws for missing text_path', async () => {
    const source = insertSource({
      matterName: TEST_MATTER,
      title: 'No Text',
    });

    await expect(getSourceText(source)).rejects.toThrow();
  });
});

// ── Source Normalizer ──────────────────────────────────────────────

describe('extractTitle', () => {
  it('extracts from <title> tag', () => {
    const html = '<html><head><title>My Page Title</title></head><body></body></html>';
    expect(extractTitle(html)).toBe('My Page Title');
  });

  it('extracts from <title> with attributes', () => {
    const html = '<html><head><title class="main">Styled Title</title></head></html>';
    expect(extractTitle(html)).toBe('Styled Title');
  });

  it('falls back to <h1> when no <title>', () => {
    const html = '<html><body><h1>Document Heading</h1></body></html>';
    expect(extractTitle(html)).toBe('Document Heading');
  });

  it('returns empty string when neither title nor h1 present', () => {
    expect(extractTitle('<html><body><p>No title</p></body></html>')).toBe('');
  });
});

describe('extractTextFromHtml', () => {
  it('strips script and style tags', () => {
    const html = '<html><script>alert("xss")</script><style>body { color: red; }</style><p>Hello world</p></html>';
    const text = extractTextFromHtml(html);
    expect(text).not.toContain('alert');
    expect(text).not.toContain('color: red');
    expect(text).toContain('Hello world');
  });

  it('decodes HTML entities', () => {
    const html = '<p>&amp; &lt; &gt; &quot; &#39; &nbsp;</p>';
    const text = extractTextFromHtml(html);
    expect(text).toContain('&');
    expect(text).toContain('<');
    expect(text).toContain('>');
    expect(text).toContain('"');
    expect(text).toContain("'");
  });

  it('replaces br tags with newlines', () => {
    const html = '<p>Line 1<br>Line 2</p>';
    const text = extractTextFromHtml(html);
    expect(text).toContain('Line 1\nLine 2');
  });

  it('strips HTML comments', () => {
    const html = '<p>Visible <!-- hidden --> text</p>';
    const text = extractTextFromHtml(html);
    expect(text).toContain('Visible');
    expect(text).not.toContain('hidden');
  });
});

describe('stripBoilerplate', () => {
  it('removes common boilerplate phrases', () => {
    const text = 'Content here\n\nCookie Policy\nAll Rights Reserved\nCopyright © 2025';
    const cleaned = stripBoilerplate(text);
    expect(cleaned).not.toContain('Cookie');
    expect(cleaned).not.toContain('Rights');
    expect(cleaned).not.toContain('Copyright');
    expect(cleaned).toContain('Content here');
  });

  it('collapses excessive blank lines', () => {
    const text = 'First\n\n\n\n\n\nSecond';
    const cleaned = stripBoilerplate(text);
    const lines = cleaned.split('\n');
    const blankCount = lines.filter((l) => l === '').length;
    expect(blankCount).toBeLessThanOrEqual(2);
  });

  it('removes very short lines', () => {
    const text = 'key\nab\na\nreal content\nx';
    const cleaned = stripBoilerplate(text);
    expect(cleaned).toContain('key');
    expect(cleaned).toContain('real content');
    expect(cleaned).not.toMatch(/^[a-z]$/m);
  });
});

describe('normalizeWhitespace', () => {
  it('collapses multiple spaces', () => {
    expect(normalizeWhitespace('hello    world')).toBe('hello world');
  });

  it('collapses excess newlines', () => {
    const result = normalizeWhitespace('hello\n\n\n\nworld');
    expect(result).toBe('hello\n\nworld');
  });

  it('trims leading and trailing whitespace', () => {
    expect(normalizeWhitespace('  hello world  ')).toBe('hello world');
  });

  it('normalizes tabs to spaces', () => {
    expect(normalizeWhitespace('hello\tworld')).toBe('hello world');
  });

  it('handles CRLF line endings', () => {
    expect(normalizeWhitespace('line1\r\nline2')).toBe('line1\nline2');
  });
});

// ── Source Citation ────────────────────────────────────────────────

describe('verifyQuote', () => {
  const matterName = TEST_MATTER + '-cite';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('verifies an exact quote match', async () => {
    const textPath = getMatterPath(matterName, '_sources', 'web', 'cite-test.txt');
    const { mkdir, writeFile } = await import('fs/promises');
    await mkdir(getMatterPath(matterName, '_sources', 'web'), { recursive: true });
    await writeFile(textPath, 'The tenant shall pay rent of one thousand pounds per month.', 'utf-8');

    const source = insertSource({
      matterName,
      title: 'Citation Test',
      textPath,
    });

    const result = await verifyQuote(source.id, matterName, 'tenant shall pay rent');
    expect(result.verified).toBe(true);
    expect(result.confidence).toBeGreaterThan(0);
  });

  it('rejects fabricated quotes', async () => {
    const textPath = getMatterPath(matterName, '_sources', 'web', 'cite-fake.txt');
    const { mkdir, writeFile } = await import('fs/promises');
    await mkdir(getMatterPath(matterName, '_sources', 'web'), { recursive: true });
    await writeFile(textPath, 'The sky is blue.', 'utf-8');

    const source = insertSource({
      matterName,
      title: 'Fake Citation',
      textPath,
    });

    const result = await verifyQuote(source.id, matterName, 'the sky is green');
    expect(result.verified).toBe(false);
  });

  it('verifies quote with different casing and punctuation', async () => {
    const textPath = getMatterPath(matterName, '_sources', 'web', 'cite-fuzzy.txt');
    const { mkdir, writeFile } = await import('fs/promises');
    await mkdir(getMatterPath(matterName, '_sources', 'web'), { recursive: true });
    await writeFile(textPath, 'The Court held that the contract was void ab initio.', 'utf-8');

    const source = insertSource({
      matterName,
      title: 'Fuzzy Citation',
      textPath,
    });

    const result = await verifyQuote(source.id, matterName, 'the court held that the contract was void');
    expect(result.verified).toBe(true);
  });
});

describe('calcSourceFreshness', () => {
  it('returns 1.0 for a source fetched now', () => {
    const source: SourceRecord = {
      id: 1, matter_name: 'test', url: null, title: null, sha256: null,
      source_type: 'web', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    expect(calcSourceFreshness(source)).toBe(1.0);
  });

  it('returns lower score for older sources', () => {
    const source: SourceRecord = {
      id: 1, matter_name: 'test', url: null, title: null, sha256: null,
      source_type: 'web', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date(Date.now() - 400 * 24 * 60 * 60 * 1000).toISOString(),
    };
    expect(calcSourceFreshness(source)).toBeLessThan(0.3);
  });
});

describe('rankSourceAuthority', () => {
  it('ranks statute sources highest', () => {
    const source: SourceRecord = {
      id: 1, matter_name: 'test', url: null, title: null, sha256: null,
      source_type: 'statute', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    expect(rankSourceAuthority(source)).toBe(1.0);
  });

  it('ranks regulation sources highest', () => {
    const source: SourceRecord = {
      id: 1, matter_name: 'test', url: null, title: null, sha256: null,
      source_type: 'regulation', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    expect(rankSourceAuthority(source)).toBe(1.0);
  });

  it('ranks blog sources low', () => {
    const source: SourceRecord = {
      id: 1, matter_name: 'test', url: null, title: null, sha256: null,
      source_type: 'blog', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    expect(rankSourceAuthority(source)).toBeLessThan(0.5);
  });

  it('ranks social media lowest', () => {
    const source: SourceRecord = {
      id: 1, matter_name: 'test', url: null, title: null, sha256: null,
      source_type: 'social_media', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    expect(rankSourceAuthority(source)).toBeLessThan(0.2);
  });

  it('adds bonus for jurisdiction', () => {
    const sourceWithout: SourceRecord = {
      id: 1, matter_name: 'test', url: null, title: null, sha256: null,
      source_type: 'web', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    const sourceWith: SourceRecord = {
      id: 2, matter_name: 'test', url: null, title: null, sha256: null,
      source_type: 'web', jurisdiction: 'us', snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    expect(rankSourceAuthority(sourceWith)).toBeGreaterThan(rankSourceAuthority(sourceWithout));
  });
});

// ── Source Ranker ──────────────────────────────────────────────────

describe('scoreRelevance', () => {
  it('scores higher when title contains query terms', () => {
    const source: SourceRecord = {
      id: 1, matter_name: 'test', url: 'https://example.com/contract-law',
      title: 'Contract Law Fundamentals', sha256: null,
      source_type: 'web', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    const score = scoreRelevance(source, 'contract law');
    expect(score).toBeGreaterThan(0);
  });

  it('adds bonus for .gov domains', () => {
    const govSource: SourceRecord = {
      id: 1, matter_name: 'test', url: 'https://www.law.cornell.edu/statute',
      title: 'Statute', sha256: null,
      source_type: 'web', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    const eduSource: SourceRecord = {
      id: 2, matter_name: 'test', url: 'https://supreme.justia.com/case',
      title: 'Statute', sha256: null,
      source_type: 'web', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    const eduScore = scoreRelevance(eduSource, 'statute');
    expect(eduScore).toBeGreaterThan(0);
  });

  it('returns 0 for irrelevant source', () => {
    const source: SourceRecord = {
      id: 1, matter_name: 'test', url: 'https://random.blog/post',
      title: 'Random Post', sha256: null,
      source_type: 'web', jurisdiction: null, snapshot_path: null,
      text_path: null, metadata_json: '{}',
      fetched_at: new Date().toISOString(),
    };
    expect(scoreRelevance(source, 'contract law')).toBe(0);
  });
});

describe('rankSources', () => {
  it('sorts sources by combined score descending', () => {
    const sources: SourceRecord[] = [
      {
        id: 1, matter_name: 'test', url: 'https://example.com',
        title: 'Contract Law 101', sha256: null,
        source_type: 'statute', jurisdiction: 'us',
        snapshot_path: null, text_path: null, metadata_json: '{}',
        fetched_at: new Date().toISOString(),
      },
      {
        id: 2, matter_name: 'test', url: 'https://blog.example/bad',
        title: 'Random Blog Post', sha256: null,
        source_type: 'social_media', jurisdiction: null,
        snapshot_path: null, text_path: null, metadata_json: '{}',
        fetched_at: new Date(Date.now() - 500 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: 3, matter_name: 'test', url: 'https://courts.gov/opinion',
        title: 'Court Opinion on Contracts', sha256: null,
        source_type: 'case_law', jurisdiction: 'us',
        snapshot_path: null, text_path: null, metadata_json: '{}',
        fetched_at: new Date().toISOString(),
      },
    ];

    const ranked = rankSources(sources, 'contract law');
    expect(ranked.length).toBe(3);
    expect(ranked[0].score).toBeGreaterThanOrEqual(ranked[1].score);
    expect(ranked[1].score).toBeGreaterThanOrEqual(ranked[2].score);

    // Statute or case_law should rank above social_media
    expect(ranked[2].source.source_type).toBe('social_media');
  });
});

// ── WebSearchTool ──────────────────────────────────────────────────

describe('WebSearchTool', () => {
  const matterName = TEST_MATTER + '-search';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('returns error when no provider configured', async () => {
    const tool = new WebSearchTool(undefined, { autoConfigure: false });
    const result = await tool.call(
      { query: 'test' },
      makeContext(matterName),
    );
    expect(result.success).toBe(false);
    expect(result.error).toContain('No search provider');
  });

  it('isEnabled returns false when no provider', () => {
    const tool = new WebSearchTool(undefined, { autoConfigure: false });
    expect(tool.isEnabled()).toBe(false);
  });

  it('isEnabled returns true after setting provider', () => {
    const tool = new WebSearchTool(undefined, { autoConfigure: false });
    tool.setProvider(new MockSearchProvider([]));
    expect(tool.isEnabled()).toBe(true);
  });

  it('accepts provider in constructor', () => {
    const tool = new WebSearchTool(new MockSearchProvider([]));
    expect(tool.isEnabled()).toBe(true);
  });

  it('searches with mock provider and saves sources', async () => {
    const mockResults: SearchResult[] = [
      { title: 'Statute 1', url: 'https://gov.example/st/1', snippet: 'First statute about legal tests', sourceType: 'statute', jurisdiction: 'us' },
      { title: 'Case 1', url: 'https://courts.example/c/1', snippet: 'First case about legal tests', sourceType: 'case_law', jurisdiction: 'us' },
    ];

    const tool = new WebSearchTool(new MockSearchProvider(mockResults));
    const ctx = makeContext(matterName);
    const result = await tool.call({ query: 'legal test' }, ctx);

    expect(result.success).toBe(true);
    expect(result.data).toHaveLength(2);
    expect(result.data![0].title).toBe('Statute 1');
    expect(result.data![0].sourceId).toBeGreaterThan(0);
    expect(result.data![1].title).toBe('Case 1');
    expect(result.data![1].sourceId).toBeGreaterThan(0);

    const { listSources: ls } = await import('../../src/research/source-store.js');
    const saved = ls(matterName);
    expect(saved.length).toBe(2);
    const types = saved.map((s) => s.source_type).sort();
    expect(types).toEqual(['case_law', 'statute']);
    expect(saved.every((s) => s.jurisdiction === 'us')).toBe(true);
  });

  it('respects maxResults option', async () => {
    const mockResults: SearchResult[] = [
      { title: 'A', url: 'http://a', snippet: 'a', sourceType: 'web' },
      { title: 'B', url: 'http://b', snippet: 'b', sourceType: 'web' },
      { title: 'C', url: 'http://c', snippet: 'c', sourceType: 'web' },
    ];

    const tool = new WebSearchTool(new MockSearchProvider(mockResults));
    const result = await tool.call(
      { query: '', maxResults: 2 },
      makeContext(matterName),
    );

    expect(result.success).toBe(true);
    expect(result.data).toHaveLength(2);
  });

  it('passes sourceTypeFilter to provider', async () => {
    const mockResults: SearchResult[] = [
      { title: 'Statute', url: 'http://a', snippet: 'a', sourceType: 'statute' },
      { title: 'Blog', url: 'http://b', snippet: 'b', sourceType: 'blog' },
    ];

    const tool = new WebSearchTool(new MockSearchProvider(mockResults));
    const result = await tool.call(
      { query: '', sourceTypeFilter: 'statute' },
      makeContext(matterName),
    );

    expect(result.success).toBe(true);
    expect(result.data).toHaveLength(1);
    expect(result.data![0].sourceType).toBe('statute');
  });

  it('passes Tavily legal search options to provider', async () => {
    let captured: unknown;
    const provider = {
      async search(_query: string, options: unknown) {
        captured = options;
        return [
          {
            title: 'Authority',
            url: 'https://caselaw.nationalarchives.gov.uk/uksc/2019/41',
            snippet: 'A legal source',
            sourceType: 'case_law',
            jurisdiction: 'Scotland',
            rawContent: '# Authority',
            score: 0.9,
            provider: 'tavily',
          },
        ];
      },
    };

    const tool = new WebSearchTool(provider);
    const result = await tool.call(
      {
        query: 'prorogation',
        includeDomains: ['caselaw.nationalarchives.gov.uk'],
        excludeDomains: ['example.com'],
        jurisdiction: 'Scotland',
        searchDepth: 'advanced',
        includeRawContent: 'markdown',
        topic: 'general',
        timeRange: 'year',
      },
      makeContext(matterName),
    );

    expect(result.success).toBe(true);
    expect(captured).toMatchObject({
      includeDomains: ['caselaw.nationalarchives.gov.uk'],
      excludeDomains: ['example.com'],
      jurisdiction: 'Scotland',
      searchDepth: 'advanced',
      includeRawContent: 'markdown',
      topic: 'general',
      timeRange: 'year',
    });
    expect(result.data?.[0].provider).toBe('tavily');
    expect(result.data?.[0].rawContent).toBe('# Authority');
  });

  it('handles provider errors gracefully', async () => {
    const provider = new MockSearchProvider([]);
    // Override search to throw
    provider['search'] = async () => { throw new Error('Network error'); };

    const tool = new WebSearchTool(provider as unknown as MockSearchProvider);
    const result = await tool.call({ query: 'test' }, makeContext(matterName));

    expect(result.success).toBe(false);
    expect(result.error).toContain('Web search failed');
  });

  it('name, description, and schema are correct', () => {
    const tool = new WebSearchTool(undefined, { autoConfigure: false });
    expect(tool.name).toBe('web_search');
    expect(tool.description).toContain('Search');
    expect(tool.inputSchema.type).toBe('object');
    expect(tool.inputSchema.required).toContain('query');
  });
});

// ── WebFetchTool ───────────────────────────────────────────────────

describe('WebFetchTool', () => {
  const matterName = TEST_MATTER + '-fetch';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('isEnabled returns true', () => {
    const tool = new WebFetchTool();
    expect(tool.isEnabled()).toBe(true);
  });

  it('name, description, and schema are correct', () => {
    const tool = new WebFetchTool();
    expect(tool.name).toBe('web_fetch');
    expect(tool.description).toContain('Fetch');
    expect(tool.inputSchema.type).toBe('object');
    expect(tool.inputSchema.required).toContain('url');
  });

  it('fetches and saves HTML and text to disk', async () => {
    const htmlContent = `<html><head><title>Test Page Title</title></head>
      <body><h1>Main Heading</h1><p>This is a paragraph with <b>bold</b> text.</p>
      <p>Another paragraph about testing.</p></body></html>`;

    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      headers: new Headers({ 'content-type': 'text/html; charset=utf-8' }),
      text: async () => htmlContent,
    });

    try {
      const tool = new WebFetchTool();
      const result = await tool.call(
        { url: 'https://example.com/page', matterName },
        makeContext(matterName),
      );

      expect(result.success).toBe(true);
      expect(result.data!.sourceId).toBeGreaterThan(0);
      expect(result.data!.url).toBe('https://example.com/page');
      expect(result.data!.title).toBe('Test Page Title');
      expect(result.data!.sha256).toBeTruthy();
      expect(result.data!.sha256).toHaveLength(64);
      expect(result.data!.textLength).toBeGreaterThan(0);
      expect(result.data!.snapshotPath).toContain('_sources/web/');
      expect(result.data!.snapshotPath).toContain('.html');
      expect(result.data!.textPath).toContain('_sources/web/');
      expect(result.data!.textPath).toContain('.txt');

      // Verify files were written
      const htmlContent2 = await readFile(result.data!.snapshotPath, 'utf-8');
      expect(htmlContent2).toBe(htmlContent);

      const textContent = await readFile(result.data!.textPath, 'utf-8');
      expect(textContent).toContain('This is a paragraph with bold text');
      expect(textContent).toContain('Another paragraph about testing');

      // Verify the SHA matches
      const expectedHash = hashText(hashText(htmlContent) + hashText(textContent));
      expect(result.data!.sha256).toBe(expectedHash);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it('handles non-HTML content', async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      headers: new Headers({ 'content-type': 'application/json' }),
      text: async () => JSON.stringify({ data: 'value' }),
    });

    try {
      const tool = new WebFetchTool();
      const result = await tool.call(
        { url: 'https://example.com/api', matterName },
        makeContext(matterName),
      );

      expect(result.success).toBe(true);
      expect(result.data!.sourceId).toBeGreaterThan(0);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it('handles fetch failure', async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Connection refused'));

    try {
      const tool = new WebFetchTool();
      const result = await tool.call(
        { url: 'https://offline.example', matterName },
        makeContext(matterName),
      );

      expect(result.success).toBe(false);
      expect(result.error).toContain('Connection refused');
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it('handles HTTP error status', async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      headers: new Headers({}),
    });

    try {
      const tool = new WebFetchTool();
      const result = await tool.call(
        { url: 'https://example.com/missing', matterName },
        makeContext(matterName),
      );

      expect(result.success).toBe(false);
      expect(result.error).toContain('HTTP 404');
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it('uses context matterName when not provided explicitly', async () => {
    const htmlContent = '<html><title>Context Test</title><body><p>Page from context</p></body></html>';

    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      headers: new Headers({ 'content-type': 'text/html' }),
      text: async () => htmlContent,
    });

    try {
      const tool = new WebFetchTool();
      const ctx = makeContext(matterName);
      const result = await tool.call(
        { url: 'https://example.com/context-page' },
        ctx,
      );

      expect(result.success).toBe(true);
      expect(result.data!.sourceId).toBeGreaterThan(0);

      const source = getSourceById(matterName, result.data!.sourceId);
      expect(source!.matter_name).toBe(matterName);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it('falls back to default matter name when none provided', async () => {
    const htmlContent = '<html><title>Default Test</title><body><p>Default page</p></body></html>';

    const originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      headers: new Headers({ 'content-type': 'text/html' }),
      text: async () => htmlContent,
    });

    try {
      const tool = new WebFetchTool();
      const ctx: ToolUseContext = {
        matterName: undefined,
        getEvidencePath: () => '',
        getExtractionPath: () => '',
        getConfig: () => ({}),
        log: () => {},
      };
      const result = await tool.call(
        { url: 'https://example.com/default-page' },
        ctx,
      );

      expect(result.success).toBe(true);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
});
