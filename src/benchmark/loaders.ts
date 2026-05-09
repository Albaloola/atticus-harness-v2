import { readFile, readdir } from 'fs/promises';
import { join, basename } from 'path';
import { normalizeExpectation, type BenchmarkExpectation } from './expectation.js';

export interface LoadedBenchmark {
  benchmarkId: string;
  root: string;
  readme?: string;
  expectation: BenchmarkExpectation;
}

export async function loadBenchmark(root: string): Promise<LoadedBenchmark> {
  const benchmarkId = basename(root);
  const readme = await readOptional(join(root, 'README.md'));
  const expectationJson = await readOptional(join(root, 'expectation.json'));
  const raw = expectationJson ? JSON.parse(expectationJson) as Partial<BenchmarkExpectation> : inferExpectationFromReadme(benchmarkId, readme ?? '');
  return {
    benchmarkId,
    root,
    readme,
    expectation: normalizeExpectation({ matterName: raw.matterName ?? benchmarkId, ...raw }),
  };
}

export async function loadBenchmarks(root = 'benchmarks'): Promise<LoadedBenchmark[]> {
  const entries = await readdir(root, { withFileTypes: true }).catch(() => []);
  const loaded: LoadedBenchmark[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    loaded.push(await loadBenchmark(join(root, entry.name)));
  }
  return loaded.sort((a, b) => a.benchmarkId.localeCompare(b.benchmarkId));
}

async function readOptional(path: string): Promise<string | undefined> {
  try {
    return await readFile(path, 'utf-8');
  } catch {
    return undefined;
  }
}

function inferExpectationFromReadme(matterName: string, readme: string): Partial<BenchmarkExpectation> & { matterName: string } {
  const text = `${matterName} ${readme}`.toLowerCase();
  return {
    matterName,
    expectedPosture: /dillon|cherry|uksc|judgment|supreme court/.test(text) ? 'retrospective_benchmark' : /omer|napier|anfal|live/.test(text) ? 'live_matter' : 'archive_analysis',
    expectedJurisdictions: /scotland|court of session|sheriff/.test(text) ? ['Scotland'] : /uksc|supreme court|northern ireland/.test(text) ? ['United Kingdom'] : [],
    expectedTracks: /appeal|appellate|uksc|supreme court/.test(text) ? ['appellate'] : /judicial review/.test(text) ? ['judicial_review'] : ['unknown'],
    expectedSourceUniverse: [],
    expectedProductionUniverse: [],
    expectedOutcomeAssertions: [],
    requiredArtifacts: [],
    notApplicableOutputs: [],
    knownReadinessBlockers: [],
    privacyPolicy: /omer|private|confidential/.test(text) ? 'local_only' : 'public_sources_only',
  };
}
