import { describe, expect, it, vi } from 'vitest';
import { buildPhaseGraph } from '../../src/legal/phase-graph.js';
import { classifyMatterPosture } from '../../src/legal/matter-posture.js';
import { requiredOutputsForPhase } from '../../src/legal/phase-contracts.js';
import { PHASES } from '../../src/legal/workflow.js';

vi.mock('../../src/storage/evidence.js', () => ({
  listEvidence: vi.fn().mockResolvedValue([]),
}));

describe('matter posture and phase contracts', () => {
  it('classifies concluded appellate benchmark posture without live obligations', async () => {
    const posture = await classifyMatterPosture({
      matterName: 'dillon',
      objective: 'Retrospective concluded UKSC appellate benchmark with known outcome and judgment packet',
    });

    expect(posture.primaryMode).toBe('retrospective_benchmark');
    expect(posture.tracks).toContain('appellate');
    expect(posture.liveObligations).toEqual(['none']);
    expect(posture.privateDataPolicy).toBe('public_sources_only');
  });

  it('requires accepted exact-cited artifacts for production and handoff phase outputs', () => {
    for (const phaseId of ['document_production', 'bundle_and_war_room_assembly', 'operator_handoff']) {
      const phase = PHASES.find((candidate) => candidate.id === phaseId)!;
      const contracts = requiredOutputsForPhase(phase);
      expect(contracts.length).toBeGreaterThan(0);
      expect(contracts.some((contract) => contract.acceptedArtifactRequired)).toBe(true);
      expect(contracts.some((contract) => contract.citationRequirement === 'exact_quote')).toBe(true);
    }
  });

  it('marks live-only work not applicable in retrospective no-live-obligation graphs', async () => {
    const graph = await buildPhaseGraph({
      matterName: 'dillon',
      objective: 'Retrospective concluded UKSC appellate benchmark with known outcome and judgment packet',
    });

    expect(graph.nodes.find((node) => node.phaseId === 'document_production')?.enabled).toBe(false);
    expect(graph.nodes.find((node) => node.phaseId === 'document_production')?.skipReason).toBe('retrospective_no_live_obligation');
    expect(graph.globalRequiredOutputs.every((output) => output.minCount > 0)).toBe(true);
  });
});
