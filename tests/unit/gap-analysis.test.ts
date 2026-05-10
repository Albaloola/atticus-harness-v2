import { afterEach, describe, expect, it } from 'vitest';
import { buildOrchestrationGapAnalysis } from '../../src/orchestration/gap-analysis.js';
import { initMatter, deleteMatter, getMatterPath } from '../../src/storage/matter.js';
import { saveCandidate } from '../../src/storage/candidate.js';
import { writeFile, mkdir } from 'fs/promises';

const MATTERS: string[] = [];

describe('orchestration gap analysis', () => {
  afterEach(async () => {
    await Promise.all(MATTERS.splice(0).map((matter) => deleteMatter(matter)));
  });

  it('does not let unaccepted candidates satisfy court-ready or output phases', async () => {
    const matterName = `gap-candidate-${Date.now()}`;
    MATTERS.push(matterName);
    await initMatter(matterName);
    await saveCandidate(matterName, {
      id: 'draft-claim',
      matterName,
      type: 'draft',
      title: 'Claim Draft',
      content: 'Draft claim content.',
      status: 'candidate',
      created: new Date().toISOString(),
      metadata: { phase: 'document_production' },
    });

    const result = await buildOrchestrationGapAnalysis({
      matterName,
      phases: [
        {
          id: 'document_production',
          name: 'Document Production',
          description: '',
          expectedOutputTypes: ['claim_draft'],
          suggestedSkills: [],
        },
        {
          id: 'document_output_pipeline',
          name: 'Document Output Pipeline',
          description: '',
          expectedOutputTypes: ['document_output_bundle'],
          suggestedSkills: [],
        },
      ],
    });

    expect(result.skipped.map((match) => match.requirementId)).not.toContain('document_production:claim_draft');
    expect(result.gaps.map((gap) => gap.id)).toContain('document_production:claim_draft');
    expect(result.gaps.map((gap) => gap.id)).toContain('document_output_pipeline:document_output_bundle');
    expect(result.noNewWorkNeeded).toBe(false);
  });

  it('allows a real output bundle to satisfy the output phase', async () => {
    const matterName = `gap-output-${Date.now()}`;
    MATTERS.push(matterName);
    await initMatter(matterName);
    await mkdir(getMatterPath(matterName, '_output'), { recursive: true });
    await writeFile(getMatterPath(matterName, '_output', 'manifest.json'), JSON.stringify({
      version: 1,
      matterName,
      generatedAt: new Date().toISOString(),
      phaseId: 'document_output_pipeline',
      sourceCount: 1,
      producedCount: 1,
      archivedCount: 0,
      blockers: [],
      outputs: [{ path: 'matters/gap-output/_output/claim.md', format: 'markdown' }],
      summary: 'Produced one output file.',
    }), 'utf-8');

    const result = await buildOrchestrationGapAnalysis({
      matterName,
      phases: [{
        id: 'document_output_pipeline',
        name: 'Document Output Pipeline',
        description: '',
        expectedOutputTypes: ['document_output_bundle'],
        suggestedSkills: [],
      }],
    });

    expect(result.skipped.map((match) => match.requirementId)).toContain('document_output_pipeline:document_output_bundle');
    expect(result.noNewWorkNeeded).toBe(true);
  });
});
