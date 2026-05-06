import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { writeFile } from 'fs/promises';
import { initMatter, deleteMatter, getMatterPath } from '../../src/storage/matter.js';
import { closeStateDb } from '../../src/state/store.js';
import { registerEvidence } from '../../src/storage/evidence.js';
import { saveArtifact, listArtifacts } from '../../src/storage/artifact.js';
import { listCandidates } from '../../src/storage/candidate.js';
import { listEvents } from '../../src/state/events.js';
import { getRuntimeValue } from '../../src/state/runtime-kv.js';
import { buildCaseMemoryPack } from '../../src/orchestration/case-memory.js';
import { CaseManager } from '../../src/orchestration/case-manager.js';
import type { LLMRequest, LLMResponse } from '../../src/types/llm.js';

describe('case memory pack', () => {
  const matterName = 'test-case-memory';

  beforeEach(async () => {
    await initMatter(matterName);
    await registerEvidence(matterName, {
      id: 'EV-001',
      matterName,
      originalPath: '/source/email.txt',
      internalPath: getMatterPath(matterName, '_evidence', 'EV-001'),
      sha256: 'abc',
      mimeType: 'text/plain',
      format: 'text',
      status: 'extracted',
      ingested: new Date().toISOString(),
      sizeBytes: 42,
      metadata: {},
    });
    await writeFile(getMatterPath(matterName, '_extractions', 'EV-001.txt'), 'Tenant asked for repairs on 1 May.', 'utf-8');
    await saveArtifact(matterName, {
      id: 'art-001',
      matterName,
      type: 'analysis',
      title: 'Case theory',
      content: 'The evidence supports a repair complaint.',
      accepted: new Date().toISOString(),
      acceptedFrom: 'cand-001',
      citations: [],
    });
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('rebuilds durable case memory from evidence, artifacts, dashboard, and settings', async () => {
    const pack = await buildCaseMemoryPack(matterName);

    expect(pack.matterName).toBe(matterName);
    expect(pack.dashboard.matterName).toBe(matterName);
    expect(pack.settings).toHaveProperty('autonomy');
    expect(pack.evidence[0].id).toBe('EV-001');
    expect(pack.evidence[0].extractedPreview).toContain('Tenant asked');
    expect(pack.artifacts[0].title).toBe('Case theory');
    expect(pack.recoveryInstructions.join(' ')).toContain('Do not rerun all investigation phases');
  });
});

describe('CaseManager', () => {
  const matterName = 'test-case-manager';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    await deleteMatter(matterName);
  });

  it('produces a follow-up email candidate from persisted case memory and records continuity events', async () => {
    let capturedRequest: LLMRequest | undefined;
    const client = {
      chat: async (request: LLMRequest): Promise<LLMResponse> => {
        capturedRequest = request;
        return {
          content: JSON.stringify({
            title: 'Email to accommodation office',
            type: 'email',
            content: 'Dear Accommodation Team,\n\nPlease confirm the repair appointment.\n\nYours sincerely,',
            summary: 'Prepared a follow-up email using case memory.',
            nextActions: ['Review before sending'],
            risks: [{ risk: 'Recipient details need operator confirmation', severity: 'medium', mitigation: 'Check recipient before sending' }],
            citations: [{ citationId: 'c1', evidenceId: 'EV-001', quote: 'repair appointment' }],
          }),
        };
      },
    };

    const manager = new CaseManager({ client });
    const result = await manager.handle({
      matterName,
      instruction: 'Draft an email to the accommodation office asking them to confirm the repair appointment.',
      source: 'hermes',
      autoAccept: false,
    });

    expect(result.type).toBe('email');
    expect(result.candidateId).toMatch(/^case-email-/);
    expect(result.memorySummary).toContain(`Matter ${matterName}`);

    const candidates = await listCandidates(matterName);
    expect(candidates).toHaveLength(1);
    expect(candidates[0].metadata.source).toBe('hermes');
    expect(candidates[0].metadata.externalAction).toBe('prepare_only');
    expect(candidates[0].metadata.humanizerSkill).toBe('humanizer');
    expect(candidates[0].metadata.selectedSkills).toBeDefined();
    expect(candidates[0].metadata.caseMemorySummary).toContain(`Matter ${matterName}`);
    expect(capturedRequest?.messages.some((message) => message.content.includes('Active Skill: humanizer'))).toBe(true);

    const events = listEvents(matterName);
    expect(events.map((event) => event.type)).toEqual(
      expect.arrayContaining([
        'case.instruction.received',
        'case.memory.loaded',
        'case.output.created',
      ]),
    );
    const checkpoint = getRuntimeValue<{ lastCandidateId: string }>(matterName, 'orchestration.checkpoint');
    expect(checkpoint?.lastCandidateId).toBe(result.candidateId);

    const artifacts = await listArtifacts(matterName);
    expect(artifacts).toHaveLength(0);
  });
});
