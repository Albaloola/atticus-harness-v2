import chalk from 'chalk';
import { listGateExceptions } from '../acceptance/gate-exceptions.js';
import { loadMatter } from '../storage/matter.js';

export async function handleExceptionList(
  matterName: string,
  options: { json?: boolean } = {},
): Promise<void> {
  await requireMatter(matterName);
  const exceptions = await listGateExceptions(matterName);

  if (options.json) {
    console.log(JSON.stringify({ matterName, exceptions }, null, 2));
    return;
  }

  console.log(chalk.bold(`Gate exceptions for ${matterName}`));
  if (exceptions.length === 0) {
    console.log(chalk.gray('  No gate exceptions recorded.'));
    return;
  }

  for (const exception of exceptions) {
    console.log(`  ${chalk.cyan(exception.exceptionId)} ${chalk.bold(exception.gateCheckFailed)}`);
    console.log(`    Candidate: ${exception.candidateId}`);
    console.log(`    Authorised by: ${exception.authorisedBy}`);
    console.log(`    Standing rule: ${exception.permanentRule ? 'yes' : 'no'}`);
    console.log(`    Reason: ${exception.reason}`);
  }
}

export async function handleExceptionShow(
  matterName: string,
  exceptionId: string,
  options: { json?: boolean } = {},
): Promise<void> {
  await requireMatter(matterName);
  const exceptions = await listGateExceptions(matterName);
  const exception = exceptions.find((record) => record.exceptionId === exceptionId);
  if (!exception) {
    console.error(chalk.red('Error:'), `Gate exception "${exceptionId}" not found.`);
    process.exit(1);
  }

  if (options.json) {
    console.log(JSON.stringify(exception, null, 2));
    return;
  }

  console.log(chalk.bold(`Gate exception ${exception.exceptionId}`));
  console.log(`  Check: ${exception.gateCheckFailed}`);
  console.log(`  Candidate: ${exception.candidateId}`);
  console.log(`  Authorised by: ${exception.authorisedBy}`);
  console.log(`  Timestamp: ${exception.timestamp}`);
  console.log(`  Standing rule: ${exception.permanentRule ? 'yes' : 'no'}`);
  console.log(`  Reason: ${exception.reason}`);
  console.log(`  Policy version: ${exception.match.policyVersion}`);
  console.log(`  Evidence refs: ${exception.match.evidenceRefs.join(', ') || '(none)'}`);
  console.log(`  Citation refs: ${exception.match.citationRefs.join(', ') || '(none)'}`);
  console.log(`  Locations: ${exception.match.locations.map((location) => location.path).join(', ') || '(none)'}`);
}

async function requireMatter(matterName: string): Promise<void> {
  try {
    await loadMatter(matterName);
  } catch (err: unknown) {
    const msg = (err as Error).message || '';
    if (msg.includes('not found')) {
      console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
    } else {
      console.error(chalk.red('Error:'), msg);
    }
    process.exit(1);
  }
}
