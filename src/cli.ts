#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('harness')
  .description('Standalone legal operations agent CLI')
  .version('0.1.0')
  .hook('preAction', async (thisCommand) => {
    // For non-help commands, add any pre-flight checks here
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

// Agent output - draft
program.command('draft <matter-name>')
  .description('Draft a document from evidence')
  .argument('<brief>', 'Drafting brief')
  .option('-t, --type <type>', 'Document type', 'brief')
  .action(async (matterName, brief, options) => {
    const { default: handler } = await import('./commands/draft.js');
    await handler(matterName, brief, options);
  });

// Agent output - verify citations
program.command('verify <matter-name>')
  .description('Verify citations in a draft')
  .argument('<candidate-id>', 'Candidate ID to verify')
  .action(async (matterName, candidateId, options) => {
    const { default: handler } = await import('./commands/verify.js');
    await handler(matterName, candidateId);
  });

// Agent output - hostile review
program.command('review <matter-name>')
  .description('Hostile review of a draft')
  .argument('<candidate-id>', 'Candidate ID to review')
  .action(async (matterName, candidateId, options) => {
    const { default: handler } = await import('./commands/review.js');
    await handler(matterName, candidateId);
  });

// Agent output - quality gate
program.command('gate <matter-name>')
  .description('Run quality checks on a draft')
  .argument('<candidate-id>', 'Candidate ID to check')
  .action(async (matterName, candidateId, options) => {
    const { default: handler } = await import('./commands/gate.js');
    await handler(matterName, candidateId);
  });

// Output acceptance
program.command('accept <matter-name>')
  .description('Mark candidate output as accepted')
  .argument('<candidate-id>', 'Candidate ID to accept')
  .action(async (matterName, candidateId, options) => {
    const { default: handler } = await import('./commands/accept.js');
    await handler(matterName, candidateId);
  });

program.command('reject <matter-name>')
  .description('Reject a candidate output')
  .argument('<candidate-id>', 'Candidate ID to reject')
  .option('-r, --reason <text>', 'Rejection reason')
  .action(async (matterName, candidateId, options) => {
    const { default: handler } = await import('./commands/reject.js');
    await handler(matterName, candidateId, options);
  });

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
  );

// Policy presets
program
  .command('policy')
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
  .option('--max-depth <n>', 'Maximum agent depth', '3')
  .option('--concurrency <n>', 'Maximum concurrent agents', '4')
  .action(async (matterName, options) => {
    const { default: handler } = await import('./commands/orchestrate.js');
    await handler(matterName, options);
  });

// Accept auto
program.command('accept')
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
  );

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
