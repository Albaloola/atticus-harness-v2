import chalk from 'chalk';
import { loadMatter, getMatterPath } from '../storage/matter.js';
import { deriveSnapshot } from '../state/snapshot.js';
import type { MatterRuntimeSnapshot } from '../types/state.js';

export default async function statusHandler(
  matterName: string,
  options: { json?: boolean },
): Promise<void> {
  try {
    const index = await loadMatter(matterName);
    let snapshot: MatterRuntimeSnapshot;

    try {
      snapshot = await deriveSnapshot(matterName);
    } catch {
      snapshot = {
        matterName,
        timestamp: new Date().toISOString(),
        status: index.status,
        phase: 'unknown',
        activeAgents: [],
        taskCounts: { total: 0, pending: 0, in_progress: 0, completed: 0, failed: 0, blocked: 0 },
        latestFindings: [],
        latestRisks: [],
        candidates: [],
        costs: { estimatedTotal: 0, lastRunCost: 0 },
        nextActions: [],
      };
    }

    if (options.json) {
      const output = {
        name: index.name,
        created: index.created,
        updated: index.updated,
        status: snapshot.status,
        phase: snapshot.phase,
        evidenceCount: index.evidenceCount,
        candidateCount: index.candidateCount,
        artifactCount: index.artifactCount,
        activeAgents: snapshot.activeAgents.length,
        taskCounts: snapshot.taskCounts,
        latestFindings: snapshot.latestFindings,
        latestRisks: snapshot.latestRisks,
        candidates: snapshot.candidates,
        costs: snapshot.costs,
        nextActions: snapshot.nextActions,
        model: index.config.model || 'deepseek/deepseek-v4-flash',
      };
      console.log(JSON.stringify(output, null, 2));
      return;
    }

    const statusColors: Record<string, (s: string) => string> = {
      pending: chalk.yellow,
      ingesting: chalk.blue,
      analyzing: chalk.cyan,
      drafting: chalk.magenta,
      verifying: chalk.yellow,
      complete: chalk.green,
      archived: chalk.gray,
    };
    const colorFn = statusColors[snapshot.status] || chalk.white;

    console.log('');
    console.log(chalk.bold('Matter:'), chalk.cyan(snapshot.matterName));
    console.log(chalk.gray('━'.repeat(40)));
    console.log(`  Status:     ${colorFn(snapshot.status)}`);
    console.log(`  Phase:      ${chalk.cyan(snapshot.phase)}`);
    console.log(`  Created:    ${formatDate(index.created)}`);
    console.log(`  Updated:    ${formatDate(index.updated)}`);
    console.log('');
    console.log(`  Evidence:   ${chalk.bold(String(index.evidenceCount))} files`);
    console.log(`  Candidates: ${chalk.bold(String(index.candidateCount))} outputs`);
    console.log(`  Artifacts:  ${chalk.bold(String(index.artifactCount))} accepted`);
    console.log('');

    if (snapshot.activeAgents.length > 0) {
      console.log(`  ${chalk.yellow('Active Agents:')} ${snapshot.activeAgents.length}`);
      for (const agent of snapshot.activeAgents) {
        console.log(`    - ${agent.role}: ${agent.title} (${agent.status})`);
      }
      console.log('');
    }

    if (snapshot.taskCounts.total > 0) {
      const tc = snapshot.taskCounts;
      console.log(`  ${chalk.cyan('Tasks:')} ${tc.total} total (${tc.pending} pending, ${tc.in_progress} in-progress, ${tc.completed} done)`);
      console.log('');
    }

    if (snapshot.latestFindings.length > 0) {
      console.log(chalk.bold('  Recent Findings:'));
      for (const finding of snapshot.latestFindings.slice(0, 3)) {
        console.log(`    ${chalk.gray('\u2022')} ${finding.substring(0, 100)}`);
      }
      console.log('');
    }

    if (snapshot.latestRisks.length > 0) {
      console.log(chalk.yellow.bold('  Risks:'));
      for (const risk of snapshot.latestRisks.slice(0, 3)) {
        console.log(`    ${chalk.yellow('\u26A0')} ${risk.substring(0, 100)}`);
      }
      console.log('');
    }

    console.log(`  Model:      ${chalk.gray(index.config.model || 'deepseek/deepseek-v4-flash')}`);
    console.log(`  Path:       ${chalk.gray(getMatterPath(matterName))}`);
    console.log('');

    if (snapshot.nextActions.length > 0) {
      console.log(chalk.cyan('Suggested next actions:'));
      for (const action of snapshot.nextActions) {
        console.log(`  ${chalk.gray('\u2192')} ${action}`);
      }
      console.log('');
    }
  } catch (err: unknown) {
    const msg = (err as Error).message || '';
    if (msg.includes('not found')) {
      console.error(chalk.red('Error:'), `Matter "${matterName}" not found.`);
      console.log(chalk.gray('Tip: Run'), chalk.cyan(`harness init ${matterName}`), chalk.gray('to create it.'));
    } else {
      console.error(chalk.red('Error:'), msg);
    }
    process.exit(1);
  }
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  } catch {
    return iso;
  }
}
