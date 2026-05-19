import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import {
  CASE_REQUEST_TYPES,
  CaseManager,
  inferRequestType,
  type CaseRequestType,
} from '../orchestration/case-manager.js';
import { buildCaseMemoryPack, summarizeCaseMemory } from '../orchestration/case-memory.js';
import { clearOrchestrationCheckpoint, loadOrchestrationCheckpoint } from '../orchestration/checkpoint.js';

export async function handleCaseManage(
  matterName: string,
  instruction: string,
  options: { type?: string; source?: string; json?: boolean; autoAccept?: boolean; background?: boolean; force?: boolean },
): Promise<void> {
  await assertMatter(matterName);

  if (options.background) {
    const { spawnBackgroundHarness } = await import('../daemon/background.js');
    const { appendEvent } = await import('../state/events.js');
    const args = ['case', 'manage', matterName, instruction];
    if (options.type) args.push('--type', options.type);
    if (options.source) args.push('--source', options.source);
    if (options.autoAccept) args.push('--auto-accept');
    if (options.force) args.push('--force');
    const background = spawnBackgroundHarness(args);
    await appendEvent({
      matterName,
      type: 'run.started',
      runId: background.runId,
      source: 'tool',
      data: {
        background: true,
        runId: background.runId,
        pid: background.pid,
        logPath: background.logPath,
        command: 'case manage',
        instruction,
      },
    });
    if (options.json) {
      console.log(JSON.stringify(background, null, 2));
    } else {
      console.log(chalk.green('Background case instruction started'), `PID: ${background.pid ?? 'unknown'}`);
      console.log(`  Log: ${chalk.gray(background.logPath)}`);
    }
    return;
  }

  const requestedType = normalizeRequestedType(options.type, instruction);
  const manager = new CaseManager();
  const result = await manager.handle({
    matterName,
    instruction,
    requestedType,
    source: options.source ?? 'agent',
    autoAccept: options.autoAccept,
    force: options.force,
  });

  if (options.json) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  if (result.skipped) {
    console.log(chalk.green('No new case output needed'));
    console.log(`  Summary: ${result.summary}`);
    console.log(`  Skipped: ${result.gapAnalysis?.skipped.length ?? 0} existing deliverable(s)`);
    console.log(chalk.gray('Next:'), chalk.cyan(`harness case manage ${matterName} "${instruction}" --force`));
    return;
  }

  console.log(chalk.green('Case output created'), chalk.bold(result.candidateId ?? '(unknown candidate)'));
  console.log(`  Type: ${result.type}`);
  console.log(`  Title: ${result.title}`);
  console.log(`  Summary: ${result.summary}`);
  if (result.autoAccept) {
    console.log(`  Auto-accept: ${result.autoAccept.accepted ? 'accepted' : 'not accepted'} (${result.autoAccept.reason})`);
  }
  console.log(chalk.gray('Next:'), chalk.cyan(`harness verify ${matterName} ${result.candidateId}`));
  console.log(chalk.gray('      '), chalk.cyan(`harness gate ${matterName} ${result.candidateId}`));
  console.log(chalk.gray('      '), chalk.cyan(`harness review ${matterName} ${result.candidateId}`));
}

export async function handleCaseMemory(
  matterName: string,
  options: { json?: boolean },
): Promise<void> {
  await assertMatter(matterName);
  const pack = await buildCaseMemoryPack(matterName);
  if (options.json) {
    console.log(JSON.stringify(pack, null, 2));
  } else {
    console.log(summarizeCaseMemory(pack));
  }
}

export async function handleCaseResume(
  matterName: string,
  options: { json?: boolean },
): Promise<void> {
  await assertMatter(matterName);
  const checkpoint = loadOrchestrationCheckpoint(matterName);
  const pack = await buildCaseMemoryPack(matterName);
  const output = {
    checkpoint,
    memorySummary: summarizeCaseMemory(pack),
    dashboard: pack.dashboard,
    settings: pack.settings,
  };
  if (options.json) {
    console.log(JSON.stringify(output, null, 2));
  } else {
    console.log(chalk.bold('Checkpoint:'), checkpoint ? checkpoint.status : 'none');
    if (checkpoint?.lastCandidateId) console.log(`  Last candidate: ${checkpoint.lastCandidateId}`);
    console.log(output.memorySummary);
  }
}

export async function handleCaseReset(
  matterName: string,
  options: { json?: boolean },
): Promise<void> {
  await assertMatter(matterName);
  const cleared = clearOrchestrationCheckpoint(matterName);
  if (options.json) {
    console.log(JSON.stringify({ matterName, checkpointCleared: cleared }, null, 2));
  } else {
    console.log(cleared ? chalk.green('Case checkpoint cleared') : chalk.yellow('No checkpoint to clear'));
    console.log(chalk.gray('Evidence, artifacts, candidates, events, tasks, and inbox were preserved.'));
  }
}

async function assertMatter(matterName: string): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch (err: unknown) {
    console.error(chalk.red('Error:'), (err as Error).message);
    process.exit(1);
  }
}

function normalizeRequestedType(type: string | undefined, instruction: string): CaseRequestType {
  if (type && (CASE_REQUEST_TYPES as readonly string[]).includes(type)) {
    return type as CaseRequestType;
  }
  return inferRequestType(instruction);
}
