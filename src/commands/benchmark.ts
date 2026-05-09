import chalk from 'chalk';
import { loadBenchmark, loadBenchmarks } from '../benchmark/loaders.js';
import { scoreBenchmarkExpectation } from '../benchmark/scorecard.js';

export async function benchmarkScoreHandler(target?: string, options: { json?: boolean } = {}): Promise<void> {
  const loaded = target ? [await loadBenchmark(target)] : await loadBenchmarks();
  const scorecards = [];
  for (const benchmark of loaded) {
    scorecards.push(await scoreBenchmarkExpectation(benchmark.expectation));
  }
  if (options.json) {
    console.log(JSON.stringify(scorecards, null, 2));
    return;
  }
  for (const scorecard of scorecards) {
    const color = scorecard.verdict === 'pass' ? chalk.green : scorecard.verdict === 'needs_followup' ? chalk.yellow : chalk.red;
    console.log(`${chalk.bold(scorecard.matterName)}: ${color(scorecard.verdict)} (${scorecard.overallScore})`);
    for (const failure of scorecard.criticalFailures) console.log(`  ${chalk.red('-')} ${failure}`);
    for (const detail of scorecard.details) console.log(`  - ${detail.dimension}: ${detail.score}`);
  }
}
