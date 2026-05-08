import { deriveSnapshot } from '../state/snapshot.js';
import { listEvents } from '../state/events.js';
import { listReducerPackets } from '../reducer/canonical-writer.js';
import { buildLegalBlockerSummary } from './legal-blockers.js';

export interface OperatorReadModel {
  matterName: string;
  generatedAt: string;
  readOnly: true;
  snapshot: Awaited<ReturnType<typeof deriveSnapshot>>;
  legalBlockers: Awaited<ReturnType<typeof buildLegalBlockerSummary>>;
  recentEvents: ReturnType<typeof listEvents>;
  reducerPackets: ReturnType<typeof listReducerPackets>;
  nextActions: string[];
}

export async function buildOperatorReadModel(matterName: string): Promise<OperatorReadModel> {
  const snapshot = await deriveSnapshot(matterName, { recoverRuntime: false });
  const legalBlockers = await buildLegalBlockerSummary(matterName);
  const nextActions = legalBlockers.total > 0
    ? legalBlockers.topBlockers.map((blocker) => `${blocker.objectId}: ${blocker.remediation}`)
    : snapshot.nextActions;
  return {
    matterName,
    generatedAt: new Date().toISOString(),
    readOnly: true,
    snapshot,
    legalBlockers,
    recentEvents: listEvents(matterName, { tail: 10 }),
    reducerPackets: listReducerPackets(matterName).slice(0, 10),
    nextActions,
  };
}
