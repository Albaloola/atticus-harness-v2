import { describe, expect, it } from 'vitest';
import { parseStructuredResult } from '../../src/agent/result-schema.ts';

describe('parseStructuredResult', () => {
  it('parses a bare structured result', () => {
    const result = parseStructuredResult(JSON.stringify({
      status: 'completed',
      summary: 'Done',
      findings: [{ claim: 'A', support: 'B', confidence: 'high' }],
      risks: [],
      proposedTasks: ['Next'],
      artifactIds: ['ART-1'],
      nextActions: ['Review'],
    }));

    expect(result).toMatchObject({
      status: 'completed',
      summary: 'Done',
      findings: [{ claim: 'A', support: 'B', confidence: 'high' }],
      artifactIds: ['ART-1'],
    });
  });

  it('extracts a fenced JSON final answer with surrounding prose', () => {
    const result = parseStructuredResult([
      'Here is the final result.',
      '```json',
      JSON.stringify({
        status: 'completed',
        summary: 'Witness statements are not applicable to this appellate record.',
        findings: [{ claim: 'No witness statements found', support: 'Evidence set contains written cases and judgments only.', confidence: 'medium' }],
        risks: [{ risk: 'Bundle over-inclusion', severity: 'medium', mitigation: 'Prioritize outcome and party written-case documents.' }],
        proposedTasks: [],
        artifactIds: ['CHE-SRC-0009'],
        nextActions: ['Use written cases as productions instead.'],
      }),
      '```',
    ].join('\n'));

    expect(result?.status).toBe('completed');
    expect(result?.summary).toContain('not applicable');
    expect(result?.findings).toHaveLength(1);
    expect(result?.risks).toHaveLength(1);
    expect(result?.artifactIds).toEqual(['CHE-SRC-0009']);
  });

  it('extracts a balanced JSON object from prose', () => {
    const result = parseStructuredResult('Final: {"status":"NEEDS_FOLLOWUP","summary":"Needs one more cite","findings":[],"risks":[],"proposedTasks":[],"artifactIds":[],"nextActions":["Read chunk"]} Thank you.');

    expect(result?.status).toBe('needs_followup');
    expect(result?.nextActions).toEqual(['Read chunk']);
  });

  it('preserves explicit finding role labels and infers missing ones conservatively', () => {
    const result = parseStructuredResult(JSON.stringify({
      status: 'completed',
      summary: 'Done',
      findings: [
        { claim: 'The Supreme Court held the prorogation was unlawful.', support: '[CHE-SRC-0003]', confidence: 'high', kind: 'holding' },
        { claim: 'The Prime Minister argued the matter was non-justiciable.', support: '[CHE-SRC-0013]', confidence: 'medium' },
      ],
      risks: [],
      proposedTasks: [],
      artifactIds: [],
      nextActions: [],
    }));

    expect(result?.findings[0]).toMatchObject({ kind: 'holding' });
    expect(result?.findings[1]).toMatchObject({ kind: 'party_argument' });
  });

  it('normalizes source-object support emitted by native Codex workers', () => {
    const result = parseStructuredResult(JSON.stringify({
      status: 'completed',
      summary: 'Checked matter inventory and evidence chunks.',
      findings: [
        {
          claim: 'The tenancy identifies Anfal as tenant and Edinburgh Napier as landlord.',
          support: [
            {
              sourceId: 'ANF-SRC-0050',
              chunkIndex: 0,
              supports: 'Tenancy identifies the landlord and tenant.',
            },
            {
              sourceId: 'ANF-SRC-0057',
              chunkIndex: 1,
              supports: 'Notice to Quit states the arrears amount.',
            },
          ],
          confidence: 'high',
          kind: 'evidence_fact',
        },
        {
          claim: 'No filed court proceeding was identified for this bounded intake task.',
          support: [],
          confidence: 'medium',
          kind: 'not_applicable',
        },
      ],
      risks: [],
      proposedTasks: [],
      artifactIds: [],
      nextActions: [],
    }));

    expect(result?.findings).toHaveLength(2);
    expect(result?.findings[0]).toMatchObject({
      support: 'ANF-SRC-0050 chunk 0: Tenancy identifies the landlord and tenant.; ANF-SRC-0057 chunk 1: Notice to Quit states the arrears amount.',
      confidence: 'high',
      kind: 'evidence_fact',
    });
    expect(result?.findings[1]).toMatchObject({
      support: '',
      kind: 'not_applicable',
    });
  });

  it('rejects unknown statuses', () => {
    const result = parseStructuredResult(JSON.stringify({
      status: 'almost_done',
      summary: 'Invalid',
    }));

    expect(result).toBeNull();
  });
});
