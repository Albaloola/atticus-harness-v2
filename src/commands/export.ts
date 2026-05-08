import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import { buildPrepareOnlyBundle } from '../export/bundle-builder.js';
import { recordExportSignoff } from '../export/export-store.js';
import { checkExportReadiness } from '../export/readiness.js';

export async function handleExportReadiness(
  matterName: string,
  options: { artifact?: string; exportId?: string; json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = await checkExportReadiness({
      matterName,
      artifactId: options.artifact,
      exportId: options.exportId,
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    console.log(result.ready ? chalk.green('READY') : chalk.red('BLOCKED'));
    console.log(`  Export: ${chalk.cyan(result.exportId)}`);
    console.log(`  Blockers: ${result.blockerCount}`);
    for (const blocker of result.blockers.slice(0, 10)) {
      console.log(`  - ${blocker.objectId}: ${blocker.reason}`);
    }
  } catch (err: unknown) {
    console.error(chalk.red('Export readiness failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleExportSignoff(
  matterName: string,
  exportId: string,
  options: { operator?: string; json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const signoff = await recordExportSignoff({
      matterName,
      exportId,
      operatorId: options.operator ?? 'operator',
    });
    if (options.json) {
      console.log(JSON.stringify(signoff, null, 2));
      return;
    }
    console.log(chalk.green('✓'), 'Prepare-only export signoff recorded');
    console.log(`  Export: ${chalk.cyan(exportId)}`);
    console.log(`  Signoff: ${chalk.cyan(signoff.signoffId)}`);
    console.log(`  Operator: ${signoff.operatorId}`);
  } catch (err: unknown) {
    console.error(chalk.red('Export signoff failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleExportBundle(
  matterName: string,
  exportId: string,
  options: { profile?: string; artifact?: string; json?: boolean } = {},
): Promise<void> {
  try {
    await loadMatter(matterName);
    const result = await buildPrepareOnlyBundle({
      matterName,
      exportId,
      profileId: options.profile,
      artifactId: options.artifact,
    });
    if (options.json) {
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    if (!result.bundled) {
      console.log(chalk.red('BLOCKED'), `Export ${exportId} was not bundled`);
      for (const blocker of result.blockers) {
        console.log(`  - ${blocker.objectId}: ${blocker.reason}`);
      }
      return;
    }
    console.log(chalk.green('✓'), 'Prepare-only bundle created');
    console.log(`  Output: ${chalk.cyan(result.outputPath ?? '')}`);
    console.log(`  Manifest: ${chalk.cyan(result.manifestPath ?? '')}`);
  } catch (err: unknown) {
    console.error(chalk.red('Export bundle failed:'), (err as Error).message);
    process.exit(1);
  }
}
