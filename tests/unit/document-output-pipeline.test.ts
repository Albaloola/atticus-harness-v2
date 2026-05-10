import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import JSZip from 'jszip';
import {
  classifyDocumentOutput,
  deriveOutputContracts,
  getDocumentOutputBundle,
  humanize,
  runDocumentOutputPipeline,
} from '../../src/export/document-output-pipeline.js';
import { closeAllStateDbs } from '../../src/state/index.js';
import { acceptCandidate, saveCandidate } from '../../src/storage/candidate.js';
import { deleteMatter, initMatter } from '../../src/storage/matter.js';

describe('document output pipeline', () => {
  let matterName: string;
  let scotCourtsDir: string;

  beforeEach(async () => {
    matterName = `test-document-output-pipeline-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    await initMatter(matterName);
    scotCourtsDir = await mkdtemp(join(tmpdir(), 'atticus-scotcourts-'));
  });

  afterEach(async () => {
    closeAllStateDbs();
    await deleteMatter(matterName);
    await rm(scotCourtsDir, { recursive: true, force: true });
  });

  it('humanizes raw LLM prose before formatting', () => {
    const text = humanize('It should be noted that **you may want to** possibly call today \u2014 before 5pm.');

    expect(text).toContain('you should');
    expect(text).toContain('call today');
    expect(text).toContain(' - before 5pm');
    expect(text).not.toContain('It should be noted');
    expect(text).not.toContain('**');
    expect(text).not.toContain('\u2014');
    expect(text).not.toContain('possibly');
  });

  it('classifies accepted work products into output formats', () => {
    expect(classifyDocumentOutput({ type: 'draft', title: 'Formal Complaint Letter' })).toBe('letter');
    expect(classifyDocumentOutput({ type: 'email', title: 'Follow-up email' })).toBe('email');
    expect(classifyDocumentOutput({ type: 'draft', title: 'Witness Statement Form' })).toBe('form');
    expect(classifyDocumentOutput({ type: 'task', title: 'Master Action Plan' })).toBe('task');
    expect(classifyDocumentOutput({ type: 'communication', title: 'Phone Script' })).toBe('script');
  });

  it('lets the orchestrator request an exact official form output', () => {
    const [contract] = deriveOutputContracts('Produce the exact ScotCourts witness statement form for submission.');

    expect(contract).toMatchObject({
      desiredKind: 'form',
      exactFormRequired: true,
      source: 'orchestrator',
    });
    expect(contract.formQuery).toBe('witness statement');
  });

  it('formats review-required candidate outputs when acceptance has not happened yet', async () => {
    await saveCandidate(matterName, {
      id: 'jr-draft',
      matterName,
      type: 'draft',
      title: 'Draft Judicial Review Petition',
      content: 'Petition body tied to OME-SRC-0001.',
      status: 'candidate',
      created: '2026-05-09T09:00:00.000Z',
      metadata: {
        phase: 'document_production',
        citations: [{ citationId: 'C1', evidenceId: 'OME-SRC-0001', quote: 'petition body' }],
      },
    });

    const result = await runDocumentOutputPipeline({
      matterName,
      generatedAt: new Date('2026-05-10T09:00:00.000Z'),
    });

    expect(result.produced).toHaveLength(1);
    expect(result.blockers[0]).toContain('review-required outputs from unaccepted candidate drafts');
    const zip = await JSZip.loadAsync(await readFile(result.produced[0].path));
    const documentXml = await zip.file('word/document.xml')?.async('string');
    expect(documentXml).toContain('REVIEW REQUIRED');
    expect(documentXml).toContain('has not passed reducer acceptance');
    await expect(getDocumentOutputBundle(matterName)).resolves.toBeUndefined();
  });

  it('creates polished docx/txt outputs, archives superseded files, and writes a manifest', async () => {
    await saveCandidate(matterName, {
      id: 'complaint-letter',
      matterName,
      type: 'draft',
      title: 'Formal Complaint Letter',
      content: [
        '# Formal Complaint Letter',
        '',
        'It should be noted that **Napier** should pause enforcement \u2014 today.',
        '',
        '## Requested Action',
        '- [ ] Confirm the arrears position.',
      ].join('\n'),
      status: 'candidate',
      created: '2026-05-09T10:00:00.000Z',
      metadata: {
        citations: [{ citationId: 'C1', evidenceId: 'ANF-SRC-0001', quote: 'arrears position' }],
      },
    });
    await saveCandidate(matterName, {
      id: 'follow-up-email',
      matterName,
      type: 'email',
      title: 'Follow-up Email',
      content: [
        '# Follow-up Email',
        '',
        'Furthermore, you may want to ask for written confirmation today.',
      ].join('\n'),
      status: 'candidate',
      created: '2026-05-09T11:00:00.000Z',
      metadata: { citations: [] },
    });
    await acceptCandidate(matterName, 'complaint-letter');
    await acceptCandidate(matterName, 'follow-up-email');

    const first = await runDocumentOutputPipeline({
      matterName,
      generatedAt: new Date('2026-05-10T10:00:00.000Z'),
    });

    expect(first.produced).toHaveLength(2);
    expect(first.archived).toEqual([]);
    const letter = first.produced.find((output) => output.kind === 'letter')!;
    const email = first.produced.find((output) => output.kind === 'email')!;
    expect(letter.path).toContain('_output/01-Formal-Complaint-Letter.docx');
    expect(letter.formatGuideline).toContain('formal letter layout');
    expect(email.path).toContain('_output/02-Follow-up-Email.txt');

    const zip = await JSZip.loadAsync(await readFile(letter.path));
    const documentXml = await zip.file('word/document.xml')?.async('string');
    const coreXml = await zip.file('docProps/core.xml')?.async('string');
    expect(documentXml).toContain('Formal Complaint Letter');
    expect(documentXml).toContain('Requested Action');
    expect(documentXml).toContain('Napier should pause enforcement - today');
    expect(documentXml).toContain('ANF-SRC-0001');
    expect(documentXml).not.toContain('It should be noted');
    expect(documentXml).not.toContain('**');
    expect(documentXml).not.toContain('\u2014');
    expect(coreXml).toContain('Formal Complaint Letter');

    const emailText = await readFile(email.path, 'utf-8');
    expect(emailText).toContain('Subject: Follow-up Email');
    expect(emailText).toContain('you should ask for written confirmation today');
    expect(emailText).not.toContain('Furthermore');
    expect(emailText).not.toContain('\u2014');

    const bundle = await getDocumentOutputBundle(matterName);
    expect(bundle).toMatchObject({
      id: 'document_output_bundle',
      outputCount: 2,
    });

    const second = await runDocumentOutputPipeline({
      matterName,
      generatedAt: new Date('2026-05-10T11:00:00.000Z'),
    });
    expect(second.archived).toHaveLength(2);
    expect(second.archived.every((path) => path.includes('_output/archived/'))).toBe(true);

    const manifestText = await readFile(second.manifestPath, 'utf-8');
    expect(manifestText).not.toContain('\u2014');
    const manifest = JSON.parse(manifestText) as { producedCount: number; archivedCount: number };
    expect(manifest.producedCount).toBe(2);
    expect(manifest.archivedCount).toBe(2);
  });

  it('uses a local ScotCourts official form source for exact form requests', async () => {
    const formsDir = join(scotCourtsDir, 'sheriff-court-forms');
    await mkdir(formsDir, { recursive: true });
    const officialFormPath = join(formsDir, 'witness-statement-form.docx');
    await writeFile(officialFormPath, 'official form placeholder');

    await saveCandidate(matterName, {
      id: 'witness-statement',
      matterName,
      type: 'draft',
      title: 'Witness Statement Form',
      content: [
        '# Witness Statement Form',
        '',
        'Name: Alba Example',
        'Statement: The relevant housing facts are set out below.',
      ].join('\n'),
      status: 'candidate',
      created: '2026-05-09T12:00:00.000Z',
      metadata: { citations: [] },
    });
    await acceptCandidate(matterName, 'witness-statement');

    const result = await runDocumentOutputPipeline({
      matterName,
      objective: 'Produce the exact ScotCourts witness statement form for submission.',
      scotCourtsSourceDir: scotCourtsDir,
      generatedAt: new Date('2026-05-10T12:00:00.000Z'),
    });

    expect(result.blockers).toEqual([]);
    expect(result.produced).toHaveLength(1);
    expect(result.produced[0]).toMatchObject({
      kind: 'form',
      formSource: {
        status: 'local_found',
        path: officialFormPath,
      },
    });
    expect(result.produced[0].formatGuideline).toContain('official form source');

    const zip = await JSZip.loadAsync(await readFile(result.produced[0].path));
    const documentXml = await zip.file('word/document.xml')?.async('string');
    expect(documentXml).toContain('Official Form Completion Pack');
    expect(documentXml).toContain('Source path:');
    expect(documentXml).toContain('witness-statement-form.docx');
    expect(documentXml).toContain('Alba Example');
    expect(documentXml).not.toContain('\u2014');
  });

  it('blocks exact form output when no official form source can be resolved', async () => {
    await saveCandidate(matterName, {
      id: 'simple-procedure-form',
      matterName,
      type: 'draft',
      title: 'Simple Procedure Application Form',
      content: 'Applicant details and remedies.',
      status: 'candidate',
      created: '2026-05-09T13:00:00.000Z',
      metadata: { citations: [] },
    });
    await acceptCandidate(matterName, 'simple-procedure-form');

    const result = await runDocumentOutputPipeline({
      matterName,
      objective: 'Produce the exact ScotCourts simple procedure application form.',
      scotCourtsSourceDir: scotCourtsDir,
      allowRemoteFormDownload: false,
      generatedAt: new Date('2026-05-10T13:00:00.000Z'),
    });

    expect(result.produced).toEqual([]);
    expect(result.blockers).toHaveLength(1);
    expect(result.blockers[0]).toContain('No matching ScotCourts form found');

    const manifestText = await readFile(result.manifestPath, 'utf-8');
    const manifest = JSON.parse(manifestText) as { producedCount: number; blockers: string[] };
    expect(manifest.producedCount).toBe(0);
    expect(manifest.blockers[0]).toContain('simple procedure application');
    expect(manifestText).not.toContain('\u2014');
  });
});
