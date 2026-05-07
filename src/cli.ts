#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { getActionMatterName, getActionProviderName, requiresLlmPrecheck } from './config/llm-preflight.js';

const program = new Command();

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
  .option('--max-depth <n>', 'Maximum agent depth', '3')
  .option('--concurrency <n>', 'Maximum concurrent agents', '4')
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
