#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { getActionMatterName, getActionProviderName, requiresLlmPrecheck } from './config/llm-preflight.js';
import { DEFAULT_MAX_CONCURRENCY, DEFAULT_MAX_DEPTH } from './orchestration/limits.js';

const program = new Command();

function collect(value: string, previous: string[]): string[] {
  previous.push(value);
  return previous;
}

program
  .name('harness')
  .description('Standalone legal operations agent CLI')
  .version('0.1.0')
  .hook('preAction', async (_thisCommand, actionCommand) => {
    if (!requiresLlmPrecheck(actionCommand)) return;
    const matterName = getActionMatterName(actionCommand);
    const providerName = getActionProviderName(actionCommand);
    const { resolveConfig } = await import('./config/loader.js');
    await resolveConfig({ matterName, providerName, strict: true });
  });

// Matter lifecycle
program
  .command('init <matter-name>')
  .description('Create a new legal matter')
  .option('-y, --yes', 'Skip confirmation')
  .action(async (matterName, options) => {
    const { default: handler } = await import('./commands/init.js');
    await handler(matterName, options);
  });

// Status
program.command('status <matter-name>')
  .description('Show matter state and next action')
  .option('--json', 'JSON output mode')
  .action(async (matterName, options) => {
    const { default: handler } = await import('./commands/status.js');
    await handler(matterName, options);
  });

// Events
program.command('events <matter-name>')
  .description('List matter event log')
  .option('--tail <n>', 'Number of events to show', '10')
  .option('--type <type>', 'Filter by exact event type')
  .option('--legal', 'Show only legal lifecycle events')
  .option('--follow', 'Follow new events in real time')
  .option('--json', 'JSON output mode')
  .action(async (matterName, options) => {
    const { default: handler } = await import('./commands/events.js');
    await handler(matterName, options);
  });

// Inbox
program.command('inbox <matter-name>')
  .description('Manage matter inbox')
  .addCommand(
    new Command('send')
      .description('Send a message to the matter inbox')
      .argument('<message>', 'Message content')
      .action(async function (this: Command, message: string) {
        const { inboxSendHandler } = await import('./commands/inbox.js');
        const matterName = this.parent?.args[0] || '';
        await inboxSendHandler(matterName, message);
      })
  )
  .addCommand(
    new Command('list')
      .description('List inbox messages')
      .option('--json', 'JSON output')
      .option('--tail <n>', 'Number of messages to show')
      .action(async function (this: Command, options: { json?: boolean; tail?: string }) {
        const { inboxListHandler } = await import('./commands/inbox.js');
        const matterName = this.parent?.args[0] || '';
        await inboxListHandler(matterName, options);
      })
  );

// Run agent loop
program.command('run <matter-name>')
  .description('Run agentic loop until done or blocked')
  .option('-p, --prompt <text>', 'Initial prompt for the agent')
  .option('-s, --skill <name>', 'Load a skill for this run')
  .option('--provider <name>', 'Provider profile to use for this run')
  .option('--no-tools', 'Disable Harness tools for this run')
  .option('-q, --quiet', 'Suppress verbose output')
  .option('--background', 'Run in background mode')
  .action(async (matterName, options) => {
    const { default: handler } = await import('./commands/run.js');
    await handler(matterName, options);
  });

// Evidence - ingest
program.command('ingest <matter-name> <path>')
  .description('Import and OCR a source document')
  .option('-f, --force', 'Re-ingest if already exists')
  .action(async (matterName, path, options) => {
    const { default: handler } = await import('./commands/ingest.js');
    await handler(matterName, path, options);
  });

// Evidence - list
program.command('evidence <matter-name>')
  .description('List evidence index')
  .option('--filter <format>', 'Filter by format (pdf, docx, image, etc.)')
  .action(async (matterName, options) => {
    const { default: handler } = await import('./commands/evidence.js');
    await handler(matterName, options);
  });

// Evidence - search
program.command('search <matter-name>')
  .description('Search evidence')
  .argument('<query>', 'Search query')
  .option('-n, --top <number>', 'Number of results', '10')
  .action(async (matterName, query, options) => {
    const { default: handler } = await import('./commands/search.js');
    await handler(matterName, query, options);
  });

program.command('investigate <matter-name>')
  .description('Create and complete a controlled investigation thread')
  .argument('<objective>', 'Investigation objective')
  .option('--claim-element <text>', 'Claim element to scope', collect, [])
  .option('--evidence <id>', 'Evidence ID to scope', collect, [])
  .option('--parent-thread <id>', 'Parent investigation thread ID')
  .option('--max-depth <n>', 'Maximum permitted investigation depth', '3')
  .option('--budget <usd>', 'Remaining budget in USD')
  .option('--estimated-cost <usd>', 'Estimated cost for this thread')
  .option('--json', 'JSON output')
  .action(async (matterName, objective, options) => {
    const { default: handler } = await import('./commands/investigate.js');
    await handler(matterName, objective, options);
  });

// Agent output - draft
program
  .command('draft')
  .description('Draft a document from evidence')
  .argument('[matter-name]', 'Matter name for legacy one-shot draft')
  .argument('[brief]', 'Drafting brief for legacy one-shot draft')
  .option('-t, --type <type>', 'Document type', 'brief')
  .action(async (matterName, brief, options) => {
    if (!matterName || !brief) {
      console.error(chalk.red('Error:'), 'Use "harness draft <matter-name> <brief>" or a draft subcommand.');
      process.exit(1);
    }
    const { default: handler } = await import('./commands/draft.js');
    await handler(matterName, brief, options);
  })
  .addCommand(
    new Command('outline')
      .description('Create a staged draft outline')
      .argument('<matter-name>', 'Matter name')
      .option('-t, --type <type>', 'Document type', 'brief')
      .option('--section <heading:purpose>', 'Add a section', collect, [])
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleDraftOutline } = await import('./commands/draft.js');
        await handleDraftOutline(matterName, options);
      })
  )
  .addCommand(
    new Command('section')
      .description('Populate a draft section from accepted findings')
      .argument('<matter-name>', 'Matter name')
      .argument('<section-id>', 'Draft section ID')
      .option('--claim-element <text>', 'Claim element to target', collect, [])
      .option('--max-paragraphs <n>', 'Maximum paragraphs to create')
      .option('--json', 'JSON output')
      .action(async (matterName, sectionId, options) => {
        const { handleDraftSection } = await import('./commands/draft.js');
        await handleDraftSection(matterName, sectionId, options);
      })
  )
  .addCommand(
    new Command('trace')
      .description('Evaluate and approve/block a draft paragraph trace')
      .argument('<matter-name>', 'Matter name')
      .argument('<paragraph-id>', 'Draft paragraph ID')
      .option('--json', 'JSON output')
      .action(async (matterName, paragraphId, options) => {
        const { handleDraftTrace } = await import('./commands/draft.js');
        await handleDraftTrace(matterName, paragraphId, options);
      })
  )
  .addCommand(
    new Command('assemble')
      .description('Assemble a fully traced outline into a candidate')
      .argument('<matter-name>', 'Matter name')
      .argument('<outline-id>', 'Draft outline ID')
      .option('--title <title>', 'Candidate title')
      .option('--coverage-threshold <n>', 'Required approved paragraph coverage', '1')
      .option('--json', 'JSON output')
      .action(async (matterName, outlineId, options) => {
        const { handleDraftAssemble } = await import('./commands/draft.js');
        await handleDraftAssemble(matterName, outlineId, options);
      })
  )
  .addCommand(
    new Command('workflow')
      .description('Run deterministic outline, section, trace, and assembly steps')
      .argument('<matter-name>', 'Matter name')
      .option('-t, --type <type>', 'Document type', 'brief')
      .option('--title <title>', 'Candidate title')
      .option('--claim-element <text>', 'Claim element to target', collect, [])
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleDraftWorkflow } = await import('./commands/draft.js');
        await handleDraftWorkflow(matterName, options);
      })
  )
  .addCommand(
    new Command('list')
      .description('List staged draft outlines')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleDraftList } = await import('./commands/draft.js');
        await handleDraftList(matterName, options);
      })
  );

// Agent output - verify citations
program.command('verify <matter-name>')
  .description('Verify citations in a draft')
  .argument('<candidate-id>', 'Candidate ID to verify')
  .action(async (matterName, candidateId, options) => {
    const { default: handler } = await import('./commands/verify.js');
    await handler(matterName, candidateId);
  });

// Agent output - hostile review
program
  .command('review')
  .description('Review findings and drafts')
  .argument('[matter-name]', 'Matter name for legacy draft review')
  .argument('[candidate-id]', 'Candidate ID for legacy draft review')
  .action(async (matterName, candidateId) => {
    if (!matterName || !candidateId) {
      console.error(chalk.red('Error:'), 'Use "harness review <matter-name> <candidate-id>" or a review subcommand.');
      process.exit(1);
    }
    const { default: handler } = await import('./commands/review.js');
    await handler(matterName, candidateId);
  })
  .addCommand(
    new Command('finding')
      .description('Review an accepted/proposed finding with stored review tasks')
      .argument('<matter-name>', 'Matter name')
      .argument('<finding-id>', 'Finding ID')
      .option('--json', 'JSON output')
      .action(async (matterName, findingId, options) => {
        const { handleReviewFinding } = await import('./commands/review.js');
        await handleReviewFinding(matterName, findingId, options);
      })
  )
  .addCommand(
    new Command('draft')
      .description('Run deterministic stored review for a draft candidate')
      .argument('<matter-name>', 'Matter name')
      .argument('<candidate-id>', 'Candidate ID')
      .option('--json', 'JSON output')
      .action(async (matterName, candidateId, options) => {
        const { handleReviewDraft } = await import('./commands/review.js');
        await handleReviewDraft(matterName, candidateId, options);
      })
  )
  .addCommand(
    new Command('queue')
      .description('List stored review tasks')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleReviewQueue } = await import('./commands/review.js');
        await handleReviewQueue(matterName, options);
      })
  );

// Agent output - quality gate
program.command('gate <matter-name>')
  .description('Run quality checks on a draft')
  .argument('[candidate-id]', 'Candidate ID to check')
  .option('--legal', 'Run strict legal readiness gate')
  .option('--json', 'JSON output')
  .action(async (matterName, candidateId, options) => {
    const { default: handler, handleLegalGate } = await import('./commands/gate.js');
    if (options.legal || !candidateId) {
      await handleLegalGate(matterName, { target: candidateId, json: options.json });
      return;
    }
    await handler(matterName, candidateId);
  });

program
  .command('graph')
  .description('Manage projection-only legal graph read models')
  .addCommand(
    new Command('rebuild')
      .description('Rebuild graph projection from canonical records')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleGraphRebuild } = await import('./commands/graph.js');
        await handleGraphRebuild(matterName, options);
      })
  )
  .addCommand(
    new Command('neighbors')
      .description('Show bounded graph neighbors for a projection node')
      .argument('<matter-name>', 'Matter name')
      .argument('<node-id>', 'Graph node ID')
      .option('--depth <n>', 'Traversal depth', '1')
      .option('--json', 'JSON output')
      .action(async (matterName, nodeId, options) => {
        const { handleGraphNeighbors } = await import('./commands/graph.js');
        await handleGraphNeighbors(matterName, nodeId, options);
      })
  )
  .addCommand(
    new Command('explain')
      .description('Explain projection node and immediate neighborhood for an object')
      .argument('<matter-name>', 'Matter name')
      .argument('<object-type>', 'Object type')
      .argument('<object-id>', 'Object ID')
      .option('--json', 'JSON output')
      .action(async (matterName, objectType, objectId, options) => {
        const { handleGraphExplain } = await import('./commands/graph.js');
        await handleGraphExplain(matterName, objectType, objectId, options);
      })
  );

program
  .command('export')
  .description('Prepare local court-ready export bundles')
  .addCommand(
    new Command('readiness')
      .description('Check export readiness and create/update an export record')
      .argument('<matter-name>', 'Matter name')
      .option('--artifact <id>', 'Reducer-approved artifact ID')
      .option('--export-id <id>', 'Existing export ID')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleExportReadiness } = await import('./commands/export.js');
        await handleExportReadiness(matterName, options);
      })
  )
  .addCommand(
    new Command('signoff')
      .description('Record operator signoff for local prepare-only export')
      .argument('<matter-name>', 'Matter name')
      .argument('<export-id>', 'Export ID')
      .option('--operator <id>', 'Operator identifier', 'operator')
      .option('--json', 'JSON output')
      .action(async (matterName, exportId, options) => {
        const { handleExportSignoff } = await import('./commands/export.js');
        await handleExportSignoff(matterName, exportId, options);
      })
  )
  .addCommand(
    new Command('bundle')
      .description('Create a local prepare-only export bundle')
      .argument('<matter-name>', 'Matter name')
      .argument('<export-id>', 'Export ID')
      .option('--profile <id>', 'Bundle profile', 'court-ready-markdown-json')
      .option('--artifact <id>', 'Reducer-approved artifact ID')
      .option('--json', 'JSON output')
      .action(async (matterName, exportId, options) => {
        const { handleExportBundle } = await import('./commands/export.js');
        await handleExportBundle(matterName, exportId, options);
      })
  );

// Output acceptance
program.command('accept')
  .description('Accept or auto-accept a candidate output')
  .addCommand(
    new Command('manual')
      .description('Manually mark a candidate as accepted')
      .argument('<matter-name>', 'Matter name')
      .argument('<candidate-id>', 'Candidate ID to accept')
      .action(async (matterName, candidateId, options) => {
        const { default: handler } = await import('./commands/accept.js');
        await handler(matterName, candidateId);
      })
  )
  .addCommand(
    new Command('auto')
      .description('Auto-accept candidate if policy and gates allow')
      .argument('<matter-name>', 'Matter name')
      .argument('<candidate-id>', 'Candidate ID')
      .option('--json', 'JSON output')
      .action(async (matterName, candidateId, options) => {
        const { handleAcceptAuto } = await import('./commands/accept.js');
        await handleAcceptAuto(matterName, candidateId, options);
      })
  );

program.command('reject <matter-name>')
  .description('Reject a candidate output')
  .argument('<candidate-id>', 'Candidate ID to reject')
  .option('-r, --reason <text>', 'Rejection reason')
  .action(async (matterName, candidateId, options) => {
    const { default: handler } = await import('./commands/reject.js');
    await handler(matterName, candidateId, options);
  });

program.command('exceptions')
  .description('List or inspect quality-gate exception records')
  .addCommand(
    new Command('list')
      .description('List append-only gate exceptions')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName: string, options: { json?: boolean }) => {
        const { handleExceptionList } = await import('./commands/exceptions.js');
        await handleExceptionList(matterName, options);
      })
  )
  .addCommand(
    new Command('show')
      .description('Show one gate exception')
      .argument('<matter-name>', 'Matter name')
      .argument('<exception-id>', 'Exception ID')
      .option('--json', 'JSON output')
      .action(async (matterName: string, exceptionId: string, options: { json?: boolean }) => {
        const { handleExceptionShow } = await import('./commands/exceptions.js');
        await handleExceptionShow(matterName, exceptionId, options);
      })
  );

// Skills
program.command('skill')
  .description('Manage skills')
  .addCommand(
    new Command('list')
      .description('List all available skills')
      .action(async () => {
        const { default: handler } = await import('./commands/skill-list.js');
        await handler();
      })
  )
  .addCommand(
    new Command('use')
      .description("Display a skill's system prompt")
      .argument('<name>', 'Skill name')
      .action(async (name) => {
        const { default: handler } = await import('./commands/skill-use.js');
        await handler(name);
      })
  );

program
  .command('rules')
	  .description('Manage local legal rule corpora')
	  .addCommand(
	    new Command('sheriff-court')
	      .description('Use the local Sheriff Court civil procedure rules within the ScotCourts corpus')
	      .addCommand(
	        new Command('list')
	          .description('List discovered Sheriff Court rule documents')
	          .option('--source-dir <path>', 'ScotCourts corpus directory')
	          .option('--phase <id>', 'Filter by harness workflow phase')
	          .option('--skill <id>', 'Filter by relevant skill', collect, [])
	          .option('--limit <n>', 'Maximum documents to show')
	          .option('--json', 'JSON output')
	          .action(async (options) => {
	            const { handleSheriffCourtRulesList } = await import('./commands/rules.js');
	            await handleSheriffCourtRulesList(options);
	          })
	      )
	      .addCommand(
	        new Command('search')
	          .description('Search Sheriff Court civil procedure rule documents')
	          .argument('<query>', 'Search query')
	          .option('--source-dir <path>', 'ScotCourts corpus directory')
	          .option('--cache-path <path>', 'ScotCourts corpus index cache path')
	          .option('--phase <id>', 'Relevant harness workflow phase')
	          .option('--skill <id>', 'Relevant skill', collect, [])
	          .option('--limit <n>', 'Maximum results', '8')
	          .option('--json', 'JSON output')
	          .action(async (query, options) => {
	            const { handleSheriffCourtRulesSearch } = await import('./commands/rules.js');
	            await handleSheriffCourtRulesSearch(query, options);
	          })
	      )
	      .addCommand(
	        new Command('context')
	          .description('Build focused Sheriff Court rule context for Scots skills/stages')
	          .argument('<objective>', 'Matter objective or stage objective')
	          .option('--source-dir <path>', 'ScotCourts corpus directory')
	          .option('--cache-path <path>', 'ScotCourts corpus index cache path')
	          .option('--phase <id>', 'Relevant harness workflow phase')
	          .option('--skill <id>', 'Relevant skill', collect, [])
	          .option('--limit <n>', 'Maximum results', '6')
	          .option('--json', 'JSON output')
	          .action(async (objective, options) => {
	            const { handleSheriffCourtRulesContext } = await import('./commands/rules.js');
	            await handleSheriffCourtRulesContext(objective, options);
	          })
	      )
	  )
	  .addCommand(
	    new Command('court-session')
      .description('Use the Court of Session rules category in the local ScotCourts corpus')
      .addCommand(
        new Command('list')
          .description('List discovered Court of Session rule chapters')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--phase <id>', 'Filter by harness workflow phase')
          .option('--skill <id>', 'Filter by relevant skill', collect, [])
          .option('--limit <n>', 'Maximum chapters to show')
          .option('--json', 'JSON output')
          .action(async (options) => {
            const { handleCourtSessionRulesList } = await import('./commands/rules.js');
            await handleCourtSessionRulesList(options);
          })
      )
      .addCommand(
        new Command('search')
          .description('Search Court of Session rule chapters')
          .argument('<query>', 'Search query')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--cache-path <path>', 'Shared ScotCourts index cache path')
          .option('--phase <id>', 'Relevant harness workflow phase')
          .option('--skill <id>', 'Relevant skill', collect, [])
          .option('--limit <n>', 'Maximum results', '8')
          .option('--json', 'JSON output')
          .action(async (query, options) => {
            const { handleCourtSessionRulesSearch } = await import('./commands/rules.js');
            await handleCourtSessionRulesSearch(query, options);
          })
      )
      .addCommand(
        new Command('context')
          .description('Build the rule-context prompt injected into Scots skills/stages')
          .argument('<objective>', 'Matter objective or stage objective')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--cache-path <path>', 'Shared ScotCourts index cache path')
          .option('--phase <id>', 'Relevant harness workflow phase')
          .option('--skill <id>', 'Relevant skill', collect, [])
          .option('--limit <n>', 'Maximum results', '6')
          .option('--json', 'JSON output')
          .action(async (objective, options) => {
            const { handleCourtSessionRulesContext } = await import('./commands/rules.js');
            await handleCourtSessionRulesContext(objective, options);
          })
      )
      .addCommand(
        new Command('index')
          .description('Refresh the shared ScotCourts index and extract Court of Session rule text')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--cache-path <path>', 'Shared ScotCourts index cache path')
          .option('--json', 'JSON output')
          .action(async (options) => {
            const { handleCourtSessionRulesIndex } = await import('./commands/rules.js');
            await handleCourtSessionRulesIndex(options);
          })
      )
      .addCommand(
        new Command('normalize')
          .description('Convert Court of Session rule originals to Markdown and delete converted originals by default')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--keep-originals', 'Keep original PDFs after successful Markdown conversion')
          .option('--json', 'JSON output')
          .action(async (options) => {
            const { handleCourtSessionRulesNormalize } = await import('./commands/rules.js');
            await handleCourtSessionRulesNormalize(options);
          })
      )
  )
  .addCommand(
    new Command('scotcourts')
      .description('Use the repository-owned ScotCourts forms, rules, and guidance corpus')
      .addCommand(
        new Command('list')
          .description('List discovered ScotCourts corpus documents')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--phase <id>', 'Filter by harness workflow phase')
          .option('--skill <id>', 'Filter by relevant skill', collect, [])
          .option('--category <id>', 'Filter by corpus category or category path', collect, [])
          .option('--court <id>', 'Filter by court id')
          .option('--kind <kind>', 'Filter by document kind: form, rule, guidance, fee, other')
          .option('--limit <n>', 'Maximum documents to show')
          .option('--json', 'JSON output')
          .action(async (options) => {
            const { handleScotCourtsCorpusList } = await import('./commands/rules.js');
            await handleScotCourtsCorpusList(options);
          })
      )
      .addCommand(
        new Command('search')
          .description('Search ScotCourts forms, rules, and guidance')
          .argument('<query>', 'Search query')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--cache-path <path>', 'Corpus index cache path')
          .option('--phase <id>', 'Relevant harness workflow phase')
          .option('--skill <id>', 'Relevant skill', collect, [])
          .option('--category <id>', 'Filter by corpus category or category path', collect, [])
          .option('--court <id>', 'Filter by court id')
          .option('--kind <kind>', 'Filter by document kind: form, rule, guidance, fee, other')
          .option('--limit <n>', 'Maximum results', '10')
          .option('--json', 'JSON output')
          .action(async (query, options) => {
            const { handleScotCourtsCorpusSearch } = await import('./commands/rules.js');
            await handleScotCourtsCorpusSearch(query, options);
          })
      )
      .addCommand(
        new Command('context')
          .description('Build the scoped ScotCourts corpus prompt context')
          .argument('<objective>', 'Matter objective or stage objective')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--cache-path <path>', 'Corpus index cache path')
          .option('--phase <id>', 'Relevant harness workflow phase')
          .option('--skill <id>', 'Relevant skill', collect, [])
          .option('--category <id>', 'Filter by corpus category or category path', collect, [])
          .option('--court <id>', 'Filter by court id')
          .option('--kind <kind>', 'Filter by document kind: form, rule, guidance, fee, other')
          .option('--limit <n>', 'Maximum results', '6')
          .option('--json', 'JSON output')
          .action(async (objective, options) => {
            const { handleScotCourtsCorpusContext } = await import('./commands/rules.js');
            await handleScotCourtsCorpusContext(objective, options);
          })
      )
      .addCommand(
        new Command('index')
          .description('Refresh the metadata cache for the ScotCourts corpus')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--cache-path <path>', 'Corpus index cache path')
          .option('--extract-text', 'Also extract text into the cache')
          .option('--max-text-docs <n>', 'Maximum documents to text-extract when --extract-text is set')
          .option('--json', 'JSON output')
          .action(async (options) => {
            const { handleScotCourtsCorpusIndex } = await import('./commands/rules.js');
            await handleScotCourtsCorpusIndex(options);
          })
      )
      .addCommand(
        new Command('normalize')
          .description('Convert ScotCourts rules/procedure originals to Markdown while preserving form originals')
          .option('--source-dir <path>', 'ScotCourts corpus directory')
          .option('--keep-originals', 'Keep converted non-form originals instead of deleting them')
          .option('--json', 'JSON output')
          .action(async (options) => {
            const { handleScotCourtsCorpusNormalize } = await import('./commands/rules.js');
            await handleScotCourtsCorpusNormalize(options);
          })
      )
  );

// Config management
program
  .command('config')
  .description('Manage global harness configuration')
  .addCommand(
    new Command('show')
      .description('Show merged configuration (with optional matter overrides)')
      .argument('[matter]', 'Matter name for matter-level overrides')
      .option('--json', 'JSON output')
      .action(async (matter, options) => {
        const { handleConfigShow } = await import('./commands/config.js');
        await handleConfigShow(matter, options);
      })
  )
  .addCommand(
    new Command('init')
      .description('Initialize global config at ~/.atticus-harness/config.json')
      .option('--force', 'Overwrite existing config')
      .action(async (options) => {
        const { handleConfigInit } = await import('./commands/config.js');
        await handleConfigInit(options);
      })
  )
  .addCommand(
    new Command('set')
      .description('Set a non-secret config value (e.g. autonomy.mode, defaultModel)')
      .argument('<path>', 'Dot-separated config path')
      .argument('<value>', 'New value')
      .action(async (path, value) => {
        const { handleConfigSet } = await import('./commands/config.js');
        await handleConfigSet(path, value);
      })
  );

// Secrets management
program
  .command('secrets')
  .description('Manage secrets stored in ~/.atticus-harness/secrets.env')
  .addCommand(
    new Command('set')
      .description('Store a secret value (e.g. OPENROUTER_API_KEY)')
      .argument('<key>', 'Secret key name')
      .argument('<value>', 'Secret value')
      .action(async (key, value) => {
        const { handleSecretsSet } = await import('./commands/config.js');
        await handleSecretsSet(key, value);
      })
  );


// Provider profile management
program
  .command('provider')
  .description('Manage provider profiles and auth')
  .addCommand(
    new Command('list')
      .description('List available provider profiles')
      .option('--json', 'JSON output')
      .action(async (options) => {
        const { handleProviderList } = await import('./commands/provider.js');
        await handleProviderList(options);
      })
  )
  .addCommand(
    new Command('show')
      .description('Show provider profile details')
      .argument('[name]', 'Provider profile name')
      .option('--json', 'JSON output')
      .action(async (name, options) => {
        const { handleProviderShow } = await import('./commands/provider.js');
        await handleProviderShow(name, options);
      })
  )
  .addCommand(
    new Command('select')
      .description('Switch active provider profile')
      .argument('<name>', 'Provider profile name')
      .action(async (name) => {
        const { handleProviderSelect } = await import('./commands/provider.js');
        await handleProviderSelect(name);
      })
  )
  .addCommand(
    new Command('auth')
      .description('Show or set auth for a provider profile')
      .argument('[name]', 'Provider profile name or auth token for the active provider')
      .argument('[key]', 'Auth token/API key')
      .action(async (name, key) => {
        const { handleProviderAuth } = await import('./commands/provider.js');
        await handleProviderAuth(name, key);
      })
  )
  .addCommand(
    new Command('reasoning')
      .description('Show or configure global reasoning effort')
      .addCommand(
        new Command('show')
          .description('Show current reasoning effort')
          .option('--json', 'JSON output')
          .action(async (options) => {
            const { handleProviderReasoningShow } = await import('./commands/provider.js');
            await handleProviderReasoningShow(options);
          })
      )
      .addCommand(
        new Command('set')
          .description('Set global reasoning effort')
          .argument('<effort>', 'none, minimal, low, medium, high, xhigh, or default')
          .action(async (effort) => {
            const { handleProviderReasoningSet } = await import('./commands/provider.js');
            await handleProviderReasoningSet(effort);
          })
      )
      .addCommand(
        new Command('reset')
          .description('Reset reasoning effort to provider default')
          .action(async () => {
            const { handleProviderReasoningReset } = await import('./commands/provider.js');
            await handleProviderReasoningReset();
          })
      )
  )
  .addCommand(
    new Command('reset')
      .description('Restore default provider profiles while preserving secrets')
      .action(async () => {
        const { handleProviderReset } = await import('./commands/provider.js');
        await handleProviderReset();
      })
  );

// Policy management
program
  .command('policy')
  .description('Manage tool approval and autonomy policy')
  .addCommand(
    new Command('show')
      .description('Show current policy (with optional matter overrides)')
      .argument('[matter]', 'Matter name for matter-level policy overrides')
      .option('--json', 'JSON output')
      .action(async (matter, options) => {
        const { handlePolicyShow } = await import('./commands/config.js');
        await handlePolicyShow(matter, options);
      })
  )
  .addCommand(
    new Command('set')
      .description('Set a policy value (e.g. autonomy.mode, toolPolicy.read_only.defaultDecision)')
      .argument('<path>', 'Dot-separated policy path')
      .argument('<value>', 'New value')
      .action(async (path, value) => {
        const { handlePolicySet } = await import('./commands/config.js');
        await handlePolicySet(path, value);
      })
  )
  .addCommand(
    new Command('preset')
      .description('Apply a preset autonomy policy')
      .argument('<preset>', 'Preset name: operator-safe, auto-internal, auto-accept-gated, full-local-autonomy')
      .action(async (preset) => {
        const { handlePolicyPreset } = await import('./commands/config.js');
        await handlePolicyPreset(preset);
      })
  );

// Orchestration
program
  .command('orchestrate <matter-name>')
  .description('Run hierarchical orchestration on a matter')
  .option('-o, --objective <text>', 'High-level objective')
  .option('--background', 'Run in background mode')
  .option('--json', 'JSON output')
  .option('--max-depth <n>', 'Maximum agent depth', String(DEFAULT_MAX_DEPTH))
  .option('--concurrency <n>', 'Maximum concurrent agents', String(DEFAULT_MAX_CONCURRENCY))
  .action(async (matterName, options) => {
    const { default: handler } = await import('./commands/orchestrate.js');
    await handler(matterName, options);
  });

// Case management through the main orchestrator
program
  .command('case')
  .description('Manage ongoing case instructions through the main orchestrator')
  .addCommand(
    new Command('manage')
      .description('Produce a follow-up communication, task, or document from persisted case memory')
      .argument('<matter-name>', 'Matter name')
      .argument('<instruction>', 'Hermes/operator instruction')
      .option('--type <type>', 'email, communication, task, case_management, draft, or report')
      .option('--source <source>', 'Instruction source', 'hermes')
      .option('--auto-accept', 'Evaluate auto-acceptance after producing the candidate')
      .option('--background', 'Run in background mode')
      .option('--json', 'JSON output')
      .action(async (matterName, instruction, options) => {
        const { handleCaseManage } = await import('./commands/case.js');
        await handleCaseManage(matterName, instruction, options);
      })
  )
  .addCommand(
    new Command('memory')
      .description('Show the persisted case memory pack used after reset/compaction')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleCaseMemory } = await import('./commands/case.js');
        await handleCaseMemory(matterName, options);
      })
  )
  .addCommand(
    new Command('resume')
      .description('Show main-orchestrator checkpoint, dashboard, and settings')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleCaseResume } = await import('./commands/case.js');
        await handleCaseResume(matterName, options);
      })
  )
  .addCommand(
    new Command('reset')
      .description('Reset only the main-orchestrator checkpoint; preserve case memory')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleCaseReset } = await import('./commands/case.js');
        await handleCaseReset(matterName, options);
      })
  );

// Daemon management
program
  .command('daemon')
  .description('Manage the daemon/background process')
  .addCommand(
    new Command('start')
      .description('Start the harness daemon')
      .action(async () => {
        const { handleDaemonStart } = await import('./commands/daemon.js');
        await handleDaemonStart();
      })
  )
  .addCommand(
    new Command('stop')
      .description('Stop the harness daemon')
      .action(async () => {
        const { handleDaemonStop } = await import('./commands/daemon.js');
        await handleDaemonStop();
      })
  )
  .addCommand(
    new Command('status')
      .description('Show daemon status')
      .option('--json', 'JSON output')
      .action(async (options) => {
        const { handleDaemonStatus } = await import('./commands/daemon.js');
        await handleDaemonStatus(options);
      })
  )
  .addCommand(
    new Command('serve')
      .description('Run daemon service loop')
      .action(async () => {
        const { handleDaemonServe } = await import('./commands/daemon.js');
        await handleDaemonServe();
      })
  );


// Control panel / monitor snapshot
const controlPanelProviderCommand = new Command('provider')
  .description('Show or change provider profile from the control panel')
  .action(async () => {
    const { handleProviderShow } = await import('./commands/provider.js');
    await handleProviderShow();
  })
  .addCommand(
    new Command('list')
      .description('List available provider profiles')
      .option('--json', 'JSON output')
      .action(async (options) => {
        const { handleProviderList } = await import('./commands/provider.js');
        await handleProviderList(options);
      })
  )
  .addCommand(
    new Command('select')
      .description('Switch active provider profile')
      .argument('<name>', 'Provider profile name')
      .action(async (name) => {
        const { handleProviderSelect } = await import('./commands/provider.js');
        await handleProviderSelect(name);
      })
  )
  .addCommand(
    new Command('auth')
      .description('Show or set auth for the active provider')
      .argument('[key]', 'Auth token/API key')
      .action(async (key) => {
        const { handleProviderAuth } = await import('./commands/provider.js');
        await handleProviderAuth(key);
      })
  );

const controlPanelModelCommand = new Command('model')
  .description('Show or edit model delegation for the active provider')
  .addCommand(
    new Command('show')
      .description('Show current model delegation')
      .option('--json', 'JSON output')
      .action(async (options) => {
        const { handleProviderModelShow } = await import('./commands/provider.js');
        await handleProviderModelShow(options);
      })
  )
  .addCommand(
    new Command('set')
      .description('Set a model delegation role')
      .argument('<role>', 'fast, reasoning, drafting, reviewer, citation, or cheap')
      .argument('<model>', 'Model identifier')
      .action(async (role, model) => {
        const { handleProviderModelSet } = await import('./commands/provider.js');
        await handleProviderModelSet(role, model);
      })
  )
  .addCommand(
    new Command('reset')
      .description('Reset active provider model delegation to preset defaults')
      .action(async () => {
        const { handleProviderModelReset } = await import('./commands/provider.js');
        await handleProviderModelReset();
      })
  );

const controlPanelReasoningCommand = new Command('reasoning')
  .description('Show or edit global reasoning effort')
  .addCommand(
    new Command('show')
      .description('Show current reasoning effort')
      .option('--json', 'JSON output')
      .action(async (options) => {
        const { handleProviderReasoningShow } = await import('./commands/provider.js');
        await handleProviderReasoningShow(options);
      })
  )
  .addCommand(
    new Command('set')
      .description('Set global reasoning effort')
      .argument('<effort>', 'none, minimal, low, medium, high, xhigh, or default')
      .action(async (effort) => {
        const { handleProviderReasoningSet } = await import('./commands/provider.js');
        await handleProviderReasoningSet(effort);
      })
  )
  .addCommand(
    new Command('reset')
      .description('Reset reasoning effort to provider default')
      .action(async () => {
        const { handleProviderReasoningReset } = await import('./commands/provider.js');
        await handleProviderReasoningReset();
      })
  );

const controlPanelSearchCommand = new Command('search')
  .description('Show or configure Tavily-backed legal web search')
  .option('--json', 'JSON output')
  .action(async (options) => {
    const { handleSearchPanelShow } = await import('./commands/source.js');
    await handleSearchPanelShow(options);
  })
  .addCommand(
    new Command('auth')
      .description('Show or set search provider auth')
      .argument('[key]', 'Search API key')
      .option('--provider <name>', 'Search provider: tavily or brave', 'tavily')
      .action(async (key, options) => {
        const { handleSearchAuth } = await import('./commands/source.js');
        await handleSearchAuth(key, options);
      })
  )
  .addCommand(
    new Command('use')
      .description('Choose search provider: tavily, brave, or generic')
      .argument('<provider>', 'Search provider name')
      .action(async (provider) => {
        const { handleSearchUse } = await import('./commands/source.js');
        await handleSearchUse(provider);
      })
  )
  .addCommand(
    new Command('enable')
      .description('Allow Harness agent loops to call web_search/web_fetch')
      .action(async () => {
        const { handleSearchEnable } = await import('./commands/source.js');
        await handleSearchEnable();
      })
  )
  .addCommand(
    new Command('disable')
      .description('Block automatic Harness web_search/web_fetch calls')
      .action(async () => {
        const { handleSearchDisable } = await import('./commands/source.js');
        await handleSearchDisable();
      })
  );

program
  .command('control-panel')
  .alias('panel')
  .description('Operator control-panel workflow')
  .addCommand(
    new Command('status')
      .description('Show provider hub or read-only matter control panel')
      .argument('[matter-name]', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleControlPanelStatus } = await import('./commands/control-panel.js');
        await handleControlPanelStatus(matterName, options);
      })
  )
  .addCommand(controlPanelProviderCommand)
  .addCommand(controlPanelModelCommand)
  .addCommand(controlPanelReasoningCommand)
  .addCommand(controlPanelSearchCommand)
  .addCommand(
    new Command('reset')
      .description('Reset provider settings to factory defaults while preserving secrets')
      .action(async () => {
        const { handleProviderReset } = await import('./commands/provider.js');
        await handleProviderReset();
      })
  )
  .addCommand(
    new Command('agent-packet')
      .description('Emit read-only operator/agent handoff packet')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleControlPanelAgentPacket } = await import('./commands/control-panel.js');
        await handleControlPanelAgentPacket(matterName, options);
      })
  );

program.command('monitor <matter-name>')
  .alias('console')
  .description('Read-only monitor snapshot (control-panel status alias)')
  .option('--json', 'JSON output')
  .action(async (matterName, options) => {
    const { handleControlPanelStatus } = await import('./commands/control-panel.js');
    await handleControlPanelStatus(matterName, options);
  });

// Watch
program.command('watch <matter-name>')
  .description('Watch matter progress in real time')
  .option('--json', 'JSON output')
  .action(async (matterName, options) => {
    const { default: handler } = await import('./commands/watch.js');
    await handler(matterName, options);
  });

// Pause / Resume / Cancel
program.command('pause <matter-name>')
  .description('Pause active matter run')
  .action(async (matterName) => {
    const { default: handler } = await import('./commands/control.js');
    await handler(matterName, 'pause');
  });

program.command('resume <matter-name>')
  .description('Resume paused matter run')
  .action(async (matterName) => {
    const { default: handler } = await import('./commands/control.js');
    await handler(matterName, 'resume');
  });

program.command('cancel <matter-name>')
  .description('Cancel an active or paused matter run')
  .option('--run <id>', 'Specific run ID to cancel')
  .action(async (matterName, options) => {
    const { handleCancel } = await import('./commands/control.js');
    await handleCancel(matterName, options);
  });

// Schedule management
program
  .command('schedule')
  .description('Manage scheduled jobs')
  .addCommand(
    new Command('create')
      .description('Create a scheduled job for a matter')
      .argument('<matter-name>', 'Matter name')
      .option('--cron <expr>', '5-field cron expression (e.g. "0 9 * * *")')
      .option('--prompt <text>', 'Prompt to run')
      .option('--recurring', 'Repeating job')
      .option('--durable', 'Persist across restarts')
      .action(async (matterName, options) => {
        const { handleScheduleCreate } = await import('./commands/schedule.js');
        await handleScheduleCreate(matterName, options);
      })
  )
  .addCommand(
    new Command('list')
      .description('List scheduled jobs for a matter')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleScheduleList } = await import('./commands/schedule.js');
        await handleScheduleList(matterName, options);
      })
  )
  .addCommand(
    new Command('delete')
      .description('Delete a scheduled job')
      .argument('<matter-name>', 'Matter name')
      .argument('<job-id>', 'Job ID to delete')
      .action(async (matterName, jobId) => {
        const { handleScheduleDelete } = await import('./commands/schedule.js');
        await handleScheduleDelete(matterName, jobId);
      })
  );

// Source management
program
  .command('source')
  .description('Manage research sources')
  .addCommand(
    new Command('search')
      .description('Search for web sources for a matter')
      .argument('<matter-name>', 'Matter name')
      .argument('<query>', 'Search query')
      .option('-n, --max-results <n>', 'Maximum results', '10')
      .option('--source-type <type>', 'Source type label to store, e.g. case_law, statute, guidance')
      .option('--jurisdiction <name>', 'Jurisdiction hint, e.g. Scotland, UK, United States')
      .option('--include-domain <domain>', 'Restrict search to a domain', collect, [])
      .option('--exclude-domain <domain>', 'Exclude a domain', collect, [])
      .option('--search-depth <depth>', 'Tavily depth: basic, advanced, fast, ultra-fast', 'advanced')
      .option('--raw-content', 'Ask Tavily for cleaned markdown content in results')
      .option('--topic <topic>', 'Tavily topic: general, news, finance', 'general')
      .option('--time-range <range>', 'Recency filter: day, week, month, year, d, w, m, y')
      .option('--json', 'JSON output')
      .action(async (matterName, query, options) => {
        const { handleSourceSearch } = await import('./commands/source.js');
        await handleSourceSearch(matterName, query, options);
      })
  )
  .addCommand(
    new Command('fetch')
      .description('Fetch and snapshot a URL for a matter')
      .argument('<matter-name>', 'Matter name')
      .argument('<url>', 'URL to fetch')
      .option('--json', 'JSON output')
      .action(async (matterName, url, options) => {
        const { handleSourceFetch } = await import('./commands/source.js');
        await handleSourceFetch(matterName, url, options);
      })
  )
  .addCommand(
    new Command('list')
      .description('List stored sources for a matter')
      .argument('<matter-name>', 'Matter name')
      .option('--json', 'JSON output')
      .action(async (matterName, options) => {
        const { handleSourceList } = await import('./commands/source.js');
        await handleSourceList(matterName, options);
      })
  );

program.parseAsync(process.argv).catch((err) => {
  console.error(chalk.red('Fatal error:'), err instanceof Error ? err.message : String(err));
  process.exit(1);
});
