import chalk from 'chalk';
import { readFile } from 'fs/promises';
import { loadMatter } from '../storage/matter.js';
import { listArtifacts } from '../storage/artifact.js';
import { buildMatterStoreTelemetry } from '../observability/store-telemetry.js';
import { loadBenchmarkExpectation, listBenchmarkExpectations } from '../benchmark/loaders.js';
import { scoreBenchmark } from '../benchmark/scorecard.js';
import type { BenchmarkExpectation, BenchmarkObservation } from '../benchmark/expectation.js';

export async function benchmarkScoreHandler(
  target?: string,
  options: { json?: boolean; matter?: string; observation?: string } = {},
): Promise<void> {
  const expectations = target
    ? [await loadBenchmarkExpectation(target)]
    : await listBenchmarkExpectations();
  const scorecards = [];
  for (const expectation of expectations) {
    const observation = await loadObservation(expectation, options);
    scorecards.push(scoreBenchmark(expectation, observation));
  }
  if (options.json) {
    console.log(JSON.stringify(scorecards, null, 2));
    return;
  }
  for (const scorecard of scorecards) {
    const color = scorecard.status === 'pass' ? chalk.green : scorecard.status === 'needs_followup' ? chalk.yellow : chalk.red;
    console.log(`${chalk.bold(scorecard.matterName)}: ${color(scorecard.status)} (${scorecard.score})`);
    for (const failure of scorecard.criticalFailures) console.log(`  ${chalk.red('-')} ${failure}`);
    for (const detail of scorecard.dimensions) console.log(`  - ${detail.name}: ${detail.score}`);
  }
}

async function loadObservation(
  expectation: BenchmarkExpectation,
  options: { matter?: string; observation?: string },
): Promise<BenchmarkObservation> {
  if (options.observation) {
    return JSON.parse(await readFile(options.observation, 'utf-8')) as BenchmarkObservation;
  }
  if (options.matter) {
    return matterObservation(expectation, options.matter);
  }
  return {
    matterName: expectation.matterName,
    telemetry: { runStatus: 'not_run' },
  };
}

async function matterObservation(expectation: BenchmarkExpectation, matterName: string): Promise<BenchmarkObservation> {
  const [index, artifacts, telemetry] = await Promise.all([
    loadMatter(matterName),
    listArtifacts(matterName),
    buildMatterStoreTelemetry(matterName),
  ]);

  return {
    matterName: expectation.matterName,
    sourceUniverse: { count: index.evidenceCount },
    productionUniverse: { count: artifacts.length, ids: artifacts.map((artifact) => artifact.id) },
    artifacts: artifacts.flatMap((artifact) => [artifact.id, artifact.type, artifact.title]),
    citationReadinessSatisfied: artifacts.length > 0 && artifacts.every((artifact) => artifact.citations.length > 0),
    telemetry: {
      runStatus: index.status,
      candidateCount: index.candidateCount,
      artifactCount: index.artifactCount,
      filesystemCandidateCount: telemetry.candidateSummary.jsonCount,
      filesystemArtifactCount: telemetry.artifactSummary.jsonCount,
    },
    toolErrors: telemetry.reconciliation.notes.map((note) => ({ kind: 'store_reconciliation', recovered: false, message: note })),
  };
}

export default benchmarkScoreHandler;
