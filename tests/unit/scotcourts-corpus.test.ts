import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import JSZip from 'jszip';
import {
  buildScotCourtsCorpusContext,
  buildScotCourtsCorpusIndex,
  discoverScotCourtsCorpus,
  normalizeScotCourtsCorpusRulesToMarkdown,
  searchScotCourtsCorpus,
  searchScotCourtsCorpusEntries,
} from '../../src/rules/scotcourts-corpus.js';

describe('ScotCourts corpus', () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await mkdtemp(join(tmpdir(), 'atticus-scotcourts-'));
    await mkdir(join(tmpDir, 'sheriff-court-forms'), { recursive: true });
    await mkdir(join(tmpDir, 'sheriff-court-civil-procedure-rules', 'ordinary-cause-rules'), { recursive: true });
    await mkdir(join(tmpDir, 'court-of-session-rules'), { recursive: true });
    await mkdir(join(tmpDir, 'criminal-procedure-forms'), { recursive: true });

    await writeFile(join(tmpDir, 'sheriff-court-forms', 'form-03a-simple-procedure-application.pdf'), '');
    await writeFile(join(tmpDir, 'sheriff-court-forms', 'download_forms.py'), 'print("not a court document")\n');
    await writeFile(
      join(tmpDir, 'sheriff-court-civil-procedure-rules', 'ordinary-cause-rules', 'chapter-13-defences.doc'),
      '',
    );
    await writeFile(
      join(tmpDir, 'court-of-session-rules', 'chapter-58-judicial-review.md'),
      '# Chapter 58 - Judicial Review\n\nA petition for judicial review is governed by Chapter 58.',
    );
    await writeFile(join(tmpDir, 'criminal-procedure-forms', 'form-7a-bail-application.doc'), '');
  });

  afterEach(async () => {
    await rm(tmpDir, { recursive: true, force: true });
  });

  it('discovers supported court documents and ignores helper scripts', async () => {
    const documents = await discoverScotCourtsCorpus(tmpDir);

    expect(documents).toHaveLength(4);
    expect(documents.map((document) => document.fileName)).not.toContain('download_forms.py');

    const simpleProcedure = documents.find((document) => document.fileName.includes('simple-procedure'))!;
    expect(simpleProcedure.documentKind).toBe('form');
    expect(simpleProcedure.court).toBe('sheriff_court');
    expect(simpleProcedure.stageIds).toContain('document_production');
    expect(simpleProcedure.skillIds).toContain('atticus-scotcourts-corpus');
    expect(simpleProcedure.skillIds).toContain('atticus-scots-litigation-machinery');

    const ordinaryCause = documents.find((document) => document.fileName.includes('defences'))!;
    expect(ordinaryCause.documentKind).toBe('rule');
    expect(ordinaryCause.stageIds).toContain('law_and_policy_research');
    expect(ordinaryCause.stageIds).toContain('procedural_route_planning');
    expect(ordinaryCause.skillIds).toContain('atticus-sheriff-court-rules');

    const judicialReview = documents.find((document) => document.fileName.includes('judicial-review'))!;
    expect(judicialReview.documentKind).toBe('rule');
    expect(judicialReview.court).toBe('court_of_session');
    expect(judicialReview.skillIds).toContain('atticus-court-of-session-rules');

    const bailApplication = documents.find((document) => document.fileName.includes('bail'))!;
    expect(bailApplication.documentKind).toBe('form');
    expect(bailApplication.court).toBe('criminal_courts');
    expect(bailApplication.keywords).toContain('criminal procedure');
  });

  it('ranks document metadata by query, phase, court, and kind', async () => {
    const documents = await discoverScotCourtsCorpus(tmpDir);

    const results = searchScotCourtsCorpusEntries(documents, {
      query: 'criminal bail application',
      phaseId: 'document_production',
      court: 'criminal_courts',
      documentKind: 'form',
    });

    expect(results[0].fileName).toBe('form-7a-bail-application.doc');
    expect(results[0].score).toBeGreaterThan(0);
    expect(results[0].indexed).toBe(false);
    expect(results).toHaveLength(1);

    const broadResults = searchScotCourtsCorpusEntries(documents, {
      query: 'simple procedure application sheriff court form',
      phaseId: 'document_production',
    });
    expect(broadResults[0].fileName).toBe('form-03a-simple-procedure-application.pdf');

    const courtOfSessionRules = searchScotCourtsCorpusEntries(documents, {
      query: 'judicial review petition court of session',
      phaseId: 'procedural_route_planning',
      court: 'court_of_session',
      documentKind: 'rule',
    });
    expect(courtOfSessionRules).toHaveLength(1);
    expect(courtOfSessionRules[0].fileName).toBe('chapter-58-judicial-review.md');
  });

  it('treats rule folder semantics as stronger than form-like title words', async () => {
    const rulePath = join(
      tmpDir,
      'sheriff-court-civil-procedure-rules',
      'ordinary-cause-rules',
      'chapter-14-applications-by-minute-actions.doc',
    );
    await writeFile(rulePath, '');

    const documents = await discoverScotCourtsCorpus(tmpDir);
    const applicationsRule = documents.find((document) => document.fileName === 'chapter-14-applications-by-minute-actions.doc');

    expect(applicationsRule?.documentKind).toBe('rule');
    expect(applicationsRule?.stageIds).toContain('law_and_policy_research');
    expect(applicationsRule?.skillIds).toContain('atticus-scots-procedure-router');
  });

  it('builds a small Scotland-scoped context instead of listing the whole corpus', async () => {
    const context = await buildScotCourtsCorpusContext({
      query: 'simple procedure sheriff court application',
      sourceDir: tmpDir,
      cachePath: join(tmpDir, 'missing-index.json'),
      phaseId: 'document_production',
      matterMeta: { jurisdiction: 'Scotland' },
      includeSnippets: false,
      limit: 2,
    });

    const selectedEntries = context.split('\n').filter((line) => line.startsWith('- '));
    expect(context).toContain('ScotCourts Corpus');
    expect(context).toContain('form-03a-simple-procedure-application.pdf');
    expect(context).toContain('harness rules scotcourts search');
    expect(context).not.toContain('download_forms.py');
    expect(selectedEntries.length).toBeLessThanOrEqual(2);
  });

  it('builds a metadata-only cache without text extraction by default', async () => {
    const cachePath = join(tmpDir, 'cache', 'scotcourts-corpus.index.json');
    const index = await buildScotCourtsCorpusIndex({
      sourceDir: tmpDir,
      cachePath,
    });
    const persisted = JSON.parse(await readFile(cachePath, 'utf-8')) as typeof index;

    expect(index.entries).toHaveLength(4);
    expect(index.entries.every((entry) => entry.sha256.match(/^[a-f0-9]{64}$/))).toBe(true);
    expect(index.entries.every((entry) => typeof entry.fileSizeBytes === 'number')).toBe(true);
    expect(index.entries.every((entry) => typeof entry.fileMtimeMs === 'number')).toBe(true);
    expect(index.entries.some((entry) => entry.text)).toBe(false);
    expect(persisted.entries).toHaveLength(4);
    expect(persisted.sourceDir).toBe(tmpDir);
  });

  it('falls back to live corpus metadata when the cache is stale', async () => {
    const cachePath = join(tmpDir, 'cache', 'scotcourts-corpus.index.json');
    await buildScotCourtsCorpusIndex({ sourceDir: tmpDir, cachePath });

    const newRuleDir = join(
      tmpDir,
      'sheriff-court-civil-procedure-rules',
      'simple-procedure-rules-for-claims-initiated-on-or-after-31-may-2023',
    );
    await mkdir(newRuleDir, { recursive: true });
    await writeFile(join(newRuleDir, 'part-3-response.md'), '# Part 3\n\nResponse form and timetable rules.');

    const results = await searchScotCourtsCorpus({
      sourceDir: tmpDir,
      cachePath,
      query: 'simple procedure response part 3',
      court: 'sheriff_court',
      documentKind: 'rule',
    });

    expect(results[0].fileName).toBe('part-3-response.md');
    expect(results[0].indexed).toBe(false);
    expect(results[0].skillIds).toContain('atticus-sheriff-court-rules');
  });

  it('normalizes non-form rules to Markdown while preserving form originals', async () => {
    await rm(
      join(tmpDir, 'sheriff-court-civil-procedure-rules', 'ordinary-cause-rules', 'chapter-13-defences.doc'),
      { force: true },
    );
    const rulePath = join(
      tmpDir,
      'sheriff-court-civil-procedure-rules',
      'ordinary-cause-rules',
      'chapter-42-proof-rules.docx',
    );
    await writeFile(rulePath, await makeDocx('Rule 42\nProofs and witness evidence.'));
    const applicationRulePath = join(
      tmpDir,
      'sheriff-court-civil-procedure-rules',
      'ordinary-cause-rules',
      'chapter-14-applications-by-minute-actions.docx',
    );
    await writeFile(applicationRulePath, await makeDocx('Chapter 14\nApplications by minute are governed by these rules.'));

    const result = await normalizeScotCourtsCorpusRulesToMarkdown({ sourceDir: tmpDir });
    const documents = await discoverScotCourtsCorpus(tmpDir);

    expect(result.failed).toEqual([]);
    expect(result.converted).toBe(2);
    expect(result.deletedOriginals).toBe(2);
    expect(result.skippedForms).toBe(2);
    expect(documents.some((document) => document.fileName === 'chapter-42-proof-rules.md')).toBe(true);
    expect(documents.some((document) => document.fileName === 'chapter-42-proof-rules.docx')).toBe(false);
    expect(documents.some((document) => document.fileName === 'chapter-14-applications-by-minute-actions.md')).toBe(true);
    expect(documents.some((document) => document.fileName === 'chapter-14-applications-by-minute-actions.docx')).toBe(false);
    expect(documents.some((document) => document.fileName === 'form-03a-simple-procedure-application.pdf')).toBe(true);
  });
});

async function makeDocx(text: string): Promise<Buffer> {
  const zip = new JSZip();
  zip.file('[Content_Types].xml', '<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>');
  zip.file('_rels/.rels', '<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>');
  zip.file(
    'word/document.xml',
    `<?xml version="1.0"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body><w:p><w:r><w:t>${escapeXml(text)}</w:t></w:r></w:p></w:body></w:document>`,
  );
  return zip.generateAsync({ type: 'nodebuffer' });
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
