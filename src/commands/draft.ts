import chalk from 'chalk';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { loadMatter, saveMatterIndex, getMatterPath } from '../storage/matter.js';
import { listEvidence } from '../storage/evidence.js';
import { searchEvidence } from '../storage/sqlite/search.js';
import { DraftTool } from '../tools/draft.tool.js';
import { getDb } from '../storage/sqlite/index.js';
import { appendEvent } from '../state/events.js';
import { assembleDraftCandidate } from '../drafting/assembly.js';
import { buildDraftOutline } from '../drafting/outline-builder.js';
import { evaluateParagraphTrace } from '../drafting/paragraph-trace.js';
import { draftSectionFromFindings } from '../drafting/section-drafter.js';
import { listDraftOutlines, listDraftParagraphs, listDraftSections } from '../drafting/draft-store.js';
import { runDraftingWorkflow } from '../workflows/drafting-workflow.js';
import { parseOptionalNumberOption } from './number-options.js';

export default async function draftHandler(
  matterName: string,
  brief: string,
  options: { type?: string }
): Promise<void> {
  let matterIndex;
  try {
    matterIndex = await loadMatter(matterName);
  } catch (err: unknown) {
    const msg = (err as Error).message || '';
    if (msg.includes('not found')) {
      console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    } else {
      console.error(chalk.red('Error:'), msg);
    }
    process.exit(1);
  }

  const evidence = await listEvidence(matterName);
  if (evidence.length === 0) {
    console.log(chalk.yellow('Warning:'), 'No evidence ingested yet. Draft may lack citations.');
    console.log(chalk.gray('Tip:'), chalk.cyan(`harness ingest ${matterName} <path>`));
  }

  console.log(chalk.cyan(`Drafting ${options.type || 'document'} for "${matterName}"...`));
  console.log(chalk.gray(`  Brief: ${brief.substring(0, 100)}${brief.length > 100 ? '...' : ''}`));
  console.log(chalk.gray(`  Evidence available: ${evidence.length} files`));
  console.log('');

  try {
    const tool = new DraftTool();
    const result = await tool.call({
      matterName,
      brief,
      docType: options.type,
    }, {
      matterName,
      getEvidencePath: (id: string) => join('matters', matterName, '_evidence', id),
      getExtractionPath: (id: string) => join('matters', matterName, '_extractions', `${id}.txt`),
      getConfig: () => ({}),
      log: (msg: string) => { if (msg.includes('[draft]')) console.log(chalk.gray(`  ${msg}`)); },
    });

    if (!result.success) {
      console.error(chalk.red('Draft failed:'), result.error);
      process.exit(1);
    }

    const candidateId = `draft-${Date.now()}`;
    const candidatesDir = getMatterPath(matterName, '_candidates');
    await mkdir(candidatesDir, { recursive: true });
    const candidatePath = join(candidatesDir, `${candidateId}.md`);

    const docType = options.type || 'legal-document';
    const candidateContent = `# ${docType}: ${matterName}\n\nDate: ${new Date().toISOString().substring(0, 10)}\nMatter: ${matterName}\nBrief: ${brief}\n\n---\n\n${result.data}`;

    await writeFile(candidatePath, candidateContent, 'utf-8');

    matterIndex.status = 'drafting';
    matterIndex.candidateCount++;
    await saveMatterIndex(matterName, matterIndex);

    try {
      await appendEvent({ matterName, type: 'draft.created', data: { candidateId, docType }, source: 'tool' });
    } catch {}

    console.log(chalk.green('✓'), `Draft saved as ${chalk.bold(candidateId)}`);
    console.log(`  Path: ${chalk.cyan(candidatePath)}`);
    console.log(`  Size: ${formatSize(candidateContent.length)}`);
    console.log('');
    console.log(chalk.gray('Next:'), chalk.cyan(`harness verify ${matterName} ${candidateId}`));
    console.log(chalk.gray('      '), chalk.cyan(`harness gate ${matterName} ${candidateId}`));
  } catch (err: unknown) {
    console.error(chalk.red('Draft error:'), (err as Error).message);
    process.exit(1);
  }
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export async function handleDraftOutline(
  matterName: string,
  options: { type?: string; section?: string[]; json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const sections = options.section && options.section.length > 0
      ? options.section.map((entry) => {
      const [heading, ...purposeParts] = entry.split(':');
      return {
        heading: heading.trim(),
        purpose: (purposeParts.join(':').trim() || `Draft ${heading.trim()}`),
      };
    })
      : undefined;
    const result = buildDraftOutline({
      matterName,
      documentType: options.type ?? 'brief',
      sections,
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(chalk.green('✓'), 'Draft outline created');
    console.log(`  Outline: ${chalk.cyan(result.outlineId)}`);
    console.log(`  Sections: ${result.sectionIds.length}`);
  } catch (err: unknown) {
    console.error(chalk.red('Draft outline failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleDraftSection(
  matterName: string,
  sectionId: string,
  options: { claimElement?: string[]; maxParagraphs?: string; json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = draftSectionFromFindings({
      matterName,
      sectionId,
      claimElements: options.claimElement ?? [],
      maxParagraphs: parseOptionalNumberOption(options.maxParagraphs, '--max-paragraphs', {
        integer: true,
        min: 1,
      }),
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(chalk.green('✓'), 'Draft section populated');
    console.log(`  Section: ${chalk.cyan(sectionId)}`);
    console.log(`  Paragraphs: ${result.paragraphIds.length}`);
  } catch (err: unknown) {
    console.error(chalk.red('Draft section failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleDraftTrace(
  matterName: string,
  paragraphId: string,
  options: { json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = await evaluateParagraphTrace(matterName, paragraphId);
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(result.approved ? chalk.green('APPROVED') : chalk.red('BLOCKED'));
    console.log(`  Paragraph: ${chalk.cyan(paragraphId)}`);
    console.log(`  Trace: ${result.traceStatus}`);
    for (const blocker of result.blockers) {
      console.log(`  - ${blocker.objectId}: ${blocker.reason}`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Draft trace failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleDraftAssemble(
  matterName: string,
  outlineId: string,
  options: { title?: string; coverageThreshold?: string; json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = await assembleDraftCandidate({
      matterName,
      outlineId,
      title: options.title,
      coverageThreshold: parseOptionalNumberOption(options.coverageThreshold, '--coverage-threshold', {
        min: 0,
        max: 1,
      }),
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    if (!result.assembled) {
      console.log(chalk.red('BLOCKED'), 'Draft assembly blocked');
      for (const blocker of result.blockers) {
        console.log(`  - ${blocker.objectId}: ${blocker.reason}`);
      }
      return;
    }
    console.log(chalk.green('✓'), 'Draft candidate assembled');
    console.log(`  Candidate: ${chalk.cyan(result.candidateId ?? '')}`);
  } catch (err: unknown) {
    console.error(chalk.red('Draft assembly failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleDraftWorkflow(
  matterName: string,
  options: { type?: string; title?: string; claimElement?: string[]; json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = await runDraftingWorkflow({
      matterName,
      documentType: options.type ?? 'brief',
      title: options.title,
      claimElements: options.claimElement ?? [],
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(result.candidateId ? chalk.green('✓') : chalk.yellow('○'), 'Draft workflow complete');
    console.log(`  Outline: ${chalk.cyan(result.outlineId)}`);
    console.log(`  Candidate: ${result.candidateId ? chalk.cyan(result.candidateId) : 'not assembled'}`);
    console.log(`  Blockers: ${result.blockers.length}`);
  } catch (err: unknown) {
    console.error(chalk.red('Draft workflow failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleDraftList(
  matterName: string,
  options: { json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const outlines = listDraftOutlines(matterName);
    const output = outlines.map((outline) => ({
      ...outline,
      sections: listDraftSections(matterName, outline.outlineId),
      paragraphCount: listDraftParagraphs(matterName, { outlineId: outline.outlineId }).length,
    }));
    if (options.json) {
      console.log(JSON.stringify(output, null, 2));
      return;
    }
    console.log(chalk.cyan(`Draft outlines for ${matterName}`));
    for (const outline of output) {
      console.log(`  - ${outline.outlineId}: ${outline.documentType} v${outline.version} (${outline.paragraphCount} paragraphs)`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Draft list failed:'), (err as Error).message);
    process.exit(1);
  }
}
