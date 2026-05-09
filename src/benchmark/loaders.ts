import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import type { BenchmarkExpectation } from './expectation.js';
import { getSeedBenchmarkExpectation } from './seed-expectations.js';

export async function loadBenchmarkExpectation(benchmarkDirOrName: string): Promise<BenchmarkExpectation> {
  const filePath = benchmarkDirOrName.endsWith('.json')
    ? benchmarkDirOrName
    : join('benchmarks', benchmarkDirOrName, 'expectation.json');
  try {
    return validateExpectation(JSON.parse(await readFile(filePath, 'utf-8')));
  } catch (error) {
    const seed = getSeedBenchmarkExpectation(benchmarkDirOrName);
    if (seed) return seed;
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(`Benchmark expectation not found for ${benchmarkDirOrName}`);
    }
    throw error;
  }
}

export async function listBenchmarkExpectations(root = 'benchmarks'): Promise<BenchmarkExpectation[]> {
  const entries = await readdir(root, { withFileTypes: true }).catch(() => []);
  const expectations: BenchmarkExpectation[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    try {
      expectations.push(await loadBenchmarkExpectation(entry.name));
    } catch {
      // Skip benchmark directories that have neither a valid fixture nor a built-in seed.
    }
  }
  return expectations;
}

export function validateExpectation(value: unknown): BenchmarkExpectation {
  if (!value || typeof value !== 'object') throw new Error('Benchmark expectation must be an object');
  const candidate = value as Partial<BenchmarkExpectation>;
  const requiredStringFields = ['matterName', 'expectedPosture'] as const;
  for (const field of requiredStringFields) {
    if (typeof candidate[field] !== 'string') throw new Error(`Benchmark expectation missing string field: ${field}`);
  }
  const requiredArrayFields = [
    'expectedJurisdictions',
    'expectedTracks',
    'expectedOutcomeAssertions',
    'requiredArtifacts',
    'notApplicableOutputs',
    'knownReadinessBlockers',
  ] as const;
  for (const field of requiredArrayFields) {
    if (!Array.isArray(candidate[field])) throw new Error(`Benchmark expectation missing array field: ${field}`);
  }
  if (!candidate.expectedSourceUniverse || typeof candidate.expectedSourceUniverse !== 'object') {
    throw new Error('Benchmark expectation missing expectedSourceUniverse');
  }
  if (!candidate.expectedProductionUniverse || typeof candidate.expectedProductionUniverse !== 'object') {
    throw new Error('Benchmark expectation missing expectedProductionUniverse');
  }
  if (!candidate.privacyPolicy || typeof candidate.privacyPolicy !== 'object') {
    throw new Error('Benchmark expectation missing privacyPolicy');
  }
  return candidate as BenchmarkExpectation;
}
