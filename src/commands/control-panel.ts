import chalk from 'chalk';
import { loadMatter } from '../storage/matter.js';
import { deriveSnapshot } from '../state/snapshot.js';
import { listEvents } from '../state/events.js';
import { listReducerPackets } from '../reducer/canonical-writer.js';
import { getDaemonStatus } from '../daemon/daemon.js';
import type { ReducerPacket } from '../reducer/canonical-writer.js';
import { buildProviderPanelState, printProviderPanel, type ProviderPanelState } from './provider.js';
import { buildLegalBlockerSummary, type LegalBlockerSummary } from '../observability/legal-blockers.js';
import { buildSearchPanelState, printSearchPanel, type SearchPanelState } from './source.js';

interface ControlPanelPacket {
  matterName: string;
  generatedAt: string;
  snapshot: Awaited<ReturnType<typeof deriveSnapshot>>;
  recentEvents: ReturnType<typeof listEvents>;
  reducerPackets: ReturnType<typeof listReducerPackets>;
  daemon: ReturnType<typeof getDaemonStatus>;
  legalBlockers: LegalBlockerSummary;
  nextAction: string;
  provider: ProviderPanelState;
  search: SearchPanelState;
  readOnly: true;
}

async function buildPacket(matterName: string): Promise<ControlPanelPacket> {
  await loadMatter(matterName);
  const snapshot = await deriveSnapshot(matterName, { recoverRuntime: false });
  const recentEvents = listEvents(matterName, { tail: 10 });
  const reducerPackets = listReducerPackets(matterName).slice(0, 10);
  const daemon = getDaemonStatus();
  const legalBlockers = await buildLegalBlockerSummary(matterName);
  const nextAction = legalBlockers.topBlockers[0]
    ? `${legalBlockers.topBlockers[0].objectId}: ${legalBlockers.topBlockers[0].remediation}`
    : snapshot.nextActions[0]
    ?? (snapshot.blockedReasons && snapshot.blockedReasons.length > 0 ? 'Inspect blocked tasks and provide operator input' : 'No immediate action');
  const provider = await buildProviderPanelState(matterName);
  const search = await buildSearchPanelState();

  return {
    matterName,
    generatedAt: new Date().toISOString(),
    snapshot,
    recentEvents,
    reducerPackets,
    daemon,
    legalBlockers,
    nextAction,
    provider,
    search,
    readOnly: true,
  };
}

export async function buildControlPanelSnapshot(
  matterName: string,
  _options?: { tail?: number },
): Promise<{
  matter: { name: string };
  leases: Array<{ owner?: string; taskId: string; stale: boolean }>;
  reducerPackets: ReducerPacket[];
  controls: { pause: string };
}> {
  await loadMatter(matterName);
  const snapshot = await deriveSnapshot(matterName, { recoverRuntime: false });
  const reducerPackets = listReducerPackets(matterName).slice(0, _options?.tail ?? 10);
  return {
    matter: { name: matterName },
    leases: snapshot.leases ?? [],
    reducerPackets,
    controls: { pause: `harness pause ${matterName}` },
  };
}

export async function handleControlPanelStatus(
  matterName?: string,
  options: { json?: boolean } = {},
): Promise<void> {
  try {
    if (!matterName) {
      const provider = await buildProviderPanelState();
      const search = await buildSearchPanelState();
      if (options.json) {
        console.log(JSON.stringify({ provider, search }, null, 2));
        return;
      }
      printProviderPanel(provider);
      console.log(chalk.gray('━'.repeat(56)));
      printSearchPanel(search);
      return;
    }

    const panel = await buildPacket(matterName);
    if (options.json) {
      console.log(JSON.stringify(panel, null, 2));
      return;
    }

    const { snapshot } = panel;
    console.log('');
    console.log(chalk.bold.cyan(`Control panel: ${matterName}`));
    console.log(chalk.gray('━'.repeat(56)));
    printProviderPanel(panel.provider);
    console.log(chalk.gray('━'.repeat(56)));
    printSearchPanel(panel.search);
    console.log(chalk.gray('━'.repeat(56)));
    console.log(`Status: ${chalk.yellow(snapshot.status)}  Phase: ${chalk.cyan(snapshot.phase)}  Read-only: ${chalk.green('yes')}`);
    console.log(`Daemon: ${panel.daemon.running ? chalk.green('running') : chalk.red('stopped')}  Active runs: ${panel.daemon.activeRuns}`);
    console.log(`Tasks: ${snapshot.taskCounts.total} total / ${snapshot.taskCounts.in_progress} active / ${snapshot.taskCounts.blocked} blocked`);
    console.log(`Legal blockers: ${panel.legalBlockers.total}`);
    for (const blocker of panel.legalBlockers.topBlockers.slice(0, 5)) {
      console.log(`  - ${blocker.objectId}: ${blocker.reason}`);
    }
    console.log(`Leases: ${snapshot.leases?.length ?? 0} active`);
    for (const lease of (snapshot.leases ?? []).slice(0, 5)) {
      const stale = lease.stale ? chalk.red('stale') : chalk.green('active');
      console.log(`  - ${lease.taskId}: ${lease.role ?? 'worker'} ${stale} until ${lease.expiresAt ?? 'unknown'}`);
    }
    if ((snapshot.blockedReasons ?? []).length > 0) {
      console.log(chalk.yellow('Blocked reasons:'));
      for (const blocked of snapshot.blockedReasons!.slice(0, 5)) {
        console.log(`  - ${blocked.taskId}: ${blocked.reason}`);
      }
    }
    console.log(`Reducer packets: ${panel.reducerPackets.length}`);
    if (panel.reducerPackets[0]) {
      const packet = panel.reducerPackets[0];
      console.log(`  Latest: ${packet.decision} ${packet.candidateId} -> ${packet.artifactId ?? 'none'}`);
    }
    console.log(`Recent events: ${panel.recentEvents.length}`);
    console.log(chalk.cyan('Next action:'), panel.nextAction);
    console.log('');
  } catch (err: unknown) {
    console.error(chalk.red('Control panel failed:'), (err as Error).message);
    process.exit(1);
  }
}

export async function handleControlPanelAgentPacket(
  matterName?: string,
  options: { json?: boolean } = {},
): Promise<void> {
  try {
    if (!matterName) {
      const provider = await buildProviderPanelState();
      const search = await buildSearchPanelState();
      if (options.json) {
        console.log(JSON.stringify({ provider, search }, null, 2));
        return;
      }
      printProviderPanel(provider);
      console.log(chalk.gray('━'.repeat(56)));
      printSearchPanel(search);
      return;
    }

    const panel = await buildPacket(matterName);
    const packet = {
      matterName: panel.matterName,
      generatedAt: panel.generatedAt,
      readOnly: panel.readOnly,
      phase: panel.snapshot.phase,
      status: panel.snapshot.status,
      activeRunId: panel.snapshot.activeRunId,
      taskCounts: panel.snapshot.taskCounts,
      activeAgents: panel.snapshot.activeAgents,
      leases: panel.snapshot.leases ?? [],
      blockedReasons: panel.snapshot.blockedReasons ?? [],
      candidates: panel.snapshot.candidates,
      reducerPackets: panel.reducerPackets,
      legalBlockers: panel.legalBlockers,
      nextActions: panel.snapshot.nextActions,
      recommendedNextAction: panel.nextAction,
      runReadiness: panel.snapshot.runReadiness,
      provider: panel.provider,
      search: panel.search,
    };
    if (options.json !== false) {
      console.log(JSON.stringify(packet, null, 2));
      return;
    }
    console.log(chalk.cyan('Recommended next action:'), packet.recommendedNextAction);
  } catch (err: unknown) {
    console.error(chalk.red('Agent packet failed:'), (err as Error).message);
    process.exit(1);
  }
}
