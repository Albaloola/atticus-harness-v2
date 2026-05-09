import { describe, it, expect } from 'vitest';
import { getPhaseByName } from '../../src/legal/workflow.js';
import { requiredOutputsForPhase } from '../../src/legal/phase-contracts.js';
import { buildPhaseGraph } from '../../src/legal/phase-graph.js';
import type { MatterPosture } from '../../src/legal/matter-posture.js';

describe('phase contracts', () => {
  it('requires reducer-accepted artifacts for document production outputs', () => {
    const phase = getPhaseByName('document_production')!;
    const contracts = requiredOutputsForPhase(phase);

    expect(contracts.length).toBeGreaterThan(0);
    expect(contracts.every((contract) => contract.acceptedArtifactRequired)).toBe(true);
    expect(contracts.every((contract) => contract.requiredFor === 'legal_readiness')).toBe(true);
  });

  it('marks live document/bundle phases not applicable for concluded retrospective matters', async () => {
    const posture: MatterPosture = {
      matterName: 'dillon-legacy-act-uksc',
      primaryMode: 'retrospective_benchmark',
      jurisdictions: [],
      tracks: ['appellate'],
      liveObligations: ['none'],
      sourceProfile: { primaryDocuments: 0, pleadings: 0, drafts: 0, strategyMemos: 0, productions: 0, correspondence: 0, transcripts: 0, media: 0, unsupportedOrQcFailed: 0 },
      retrospectiveOutcomeKnown: true,
      requiresCourtReadyArtifacts: false,
      requiresExternalResearch: false,
      privateDataPolicy: 'public_sources_only',
      confidence: 0.8,
      reasons: ['test'],
    };

    const graph = await buildPhaseGraph({ matterName: posture.matterName, posture });
    const documentNode = graph.nodes.find((node) => node.phaseId === 'document_production')!;
    const bundleNode = graph.nodes.find((node) => node.phaseId === 'bundle_and_war_room_assembly')!;

    expect(documentNode.enabled).toBe(false);
    expect(documentNode.readinessPolicy).toBe('not_applicable');
    expect(bundleNode.enabled).toBe(false);
  });
});
