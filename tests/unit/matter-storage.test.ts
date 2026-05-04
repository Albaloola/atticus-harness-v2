import { describe, it, expect } from 'vitest';
import { getMatterPath } from '../../src/storage/matter.ts';
import { getEvidencePath, getExtractionPath } from '../../src/storage/evidence.ts';

describe('getMatterPath', () => {
  it('returns correct path for matter name', () => {
    const path = getMatterPath('test-matter');
    expect(path).toContain('matters');
    expect(path).toContain('test-matter');
  });

  it('appends segments', () => {
    const path = getMatterPath('test-matter', '_evidence', 'file.pdf');
    expect(path).toContain('matters/test-matter/_evidence/file.pdf');
  });
});

describe('getEvidencePath', () => {
  it('returns correct path for evidence', () => {
    const path = getEvidencePath('test-matter', 'NAP-SRC-0001');
    expect(path).toContain('matters/test-matter/_evidence/NAP-SRC-0001');
  });
});

describe('getExtractionPath', () => {
  it('returns correct path for extraction', () => {
    const path = getExtractionPath('test-matter', 'NAP-SRC-0001');
    expect(path).toContain('matters/test-matter/_extractions/NAP-SRC-0001.txt');
  });
});
