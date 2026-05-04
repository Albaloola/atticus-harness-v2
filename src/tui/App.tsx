import React, { useState, useEffect, useCallback, useRef } from 'react';
import { render, Box, Text, useInput, useApp, Static } from 'ink';
import { AgentProgress, type AgentEvent } from './AgentProgress.js';

interface TuiProps {
  matterName?: string;
}

export function TuiApp({ matterName }: TuiProps) {
  const { exit } = useApp();
  const [input, setInput] = useState('');
  const [events, setEvents] = useState<AgentEvent[]>([]);
  const [running, setRunning] = useState(false);
  const [currentMatter, setCurrentMatter] = useState(matterName || '');
  const [mode, setMode] = useState<'prompt' | 'running' | 'done'>('prompt');
  const [logs, setLogs] = useState<string[]>(['Welcome to Harness v2 — Legal Operations Agent']);
  const inputRef = useRef('');

  const addLog = useCallback((msg: string) => {
    setLogs(prev => [...prev, msg]);
  }, []);

  useInput((_input, key) => {
    if (mode === 'running') return;

    if (key.escape) {
      exit();
      return;
    }

    if (key.return && inputRef.current.trim()) {
      const cmd = inputRef.current.trim();
      inputRef.current = '';
      setInput('');
      handleCommand(cmd);
      return;
    }

    if (key.backspace || key.delete) {
      inputRef.current = inputRef.current.slice(0, -1);
      setInput(inputRef.current);
      return;
    }

    if (_input && !key.ctrl && !key.meta) {
      inputRef.current += _input;
      setInput(inputRef.current);
    }
  });

  async function handleCommand(cmd: string) {
    addLog(`> ${cmd}`);

    if (cmd === 'exit' || cmd === 'quit') {
      addLog('Goodbye.');
      setTimeout(() => exit(), 300);
      return;
    }

    if (cmd === 'help') {
      addLog('  init <name>      — Create a new matter');
      addLog('  status <name>    — Show matter state');
      addLog('  run <name>       — Run agent loop');
      addLog('  ingest <n> <p>   — Ingest a document');
      addLog('  search <n> <q>   — Search evidence');
      addLog('  evidence <n>     — List evidence');
      addLog('  draft <n> <b>    — Draft a document');
      addLog('  verify <n> <id>  — Verify citations');
      addLog('  gate <n> <id>    — Quality checks');
      addLog('  review <n> <id>  — Hostile review');
      addLog('  accept <n> <id>  — Accept output');
      addLog('  reject <n> <id>  — Reject output');
      addLog('  matters          — List all matters');
      addLog('  skills           — List available skills');
      addLog('  help             — This message');
      addLog('  exit/quit        — Exit');
      return;
    }

    if (cmd === 'matters') {
      try {
        const { listMatters } = await import('../storage/matter.js');
        const matters = await listMatters();
        if (matters.length === 0) addLog('  No matters found. Create one:  init <name>');
        else matters.forEach(m => addLog(`  ${m}`));
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    if (cmd === 'skills') {
      try {
        const { SkillRegistry } = await import('../skills/index.js');
        const registry = new SkillRegistry();
        await registry.loadFromDir('skills');
        const skills = registry.listSkills();
        skills.forEach(s => addLog(`  ${s.skillId}  (v${s.manifest.version})`));
        addLog(`  --- ${skills.length} skills total ---`);
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    // Parse run command
    if (cmd.startsWith('run ')) {
      const name = cmd.slice(4).trim();
      if (!name) { addLog('  Usage: run <matter-name>'); return; }
      setCurrentMatter(name);
      setMode('running');
      setRunning(true);

      try {
        const { loadMatter } = await import('../storage/matter.js');
        const matterIndex = await loadMatter(name);
        addLog(`  Loaded matter: ${name} (${matterIndex.status})`);

        const { AgentLoop } = await import('../agent/index.js');
        const loop = new AgentLoop({ maxTurns: 25, model: matterIndex.config.model || 'deepseek/deepseek-v4-flash', temperature: 0.1, quietMode: false, verbose: true });

        const result = await loop.run(name);
        addLog(`  Status: ${result.status.toUpperCase()}`);
        addLog(`  Turns: ${result.turns.length}`);
        addLog(`  ${result.summary.substring(0, 300)}`);
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }

      setRunning(false);
      setMode('prompt');
      return;
    }

    // Init command
    if (cmd.startsWith('init ')) {
      const name = cmd.slice(5).trim();
      if (!name) { addLog('  Usage: init <matter-name>'); return; }
      try {
        const { initMatter } = await import('../storage/matter.js');
        await initMatter(name);
        addLog(`  Created matter "${name}"`);
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    // Status command
    if (cmd.startsWith('status ')) {
      const name = cmd.slice(7).trim();
      if (!name) { addLog('  Usage: status <matter-name>'); return; }
      try {
        const { loadMatter, getMatterPath } = await import('../storage/matter.js');
        const idx = await loadMatter(name);
        addLog(`  Matter: ${idx.name}`);
        addLog(`  Status: ${idx.status}`);
        addLog(`  Evidence: ${idx.evidenceCount} | Candidates: ${idx.candidateCount} | Artifacts: ${idx.artifactCount}`);
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    // Ingest command
    if (cmd.startsWith('ingest ')) {
      const parts = cmd.slice(7).trim().split(' ');
      const name = parts[0];
      const filePath = parts.slice(1).join(' ');
      if (!name || !filePath) { addLog('  Usage: ingest <matter-name> <file-path>'); return; }
      try {
        const { default: ingestHandler } = await import('../commands/ingest.js');
        await ingestHandler(name, filePath, {});
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    // Search command
    if (cmd.startsWith('search ')) {
      const rest = cmd.slice(7).trim();
      const spaceIdx = rest.indexOf(' ');
      if (spaceIdx === -1) { addLog('  Usage: search <matter-name> <query>'); return; }
      const name = rest.slice(0, spaceIdx);
      const query = rest.slice(spaceIdx + 1);
      try {
        const { searchEvidence } = await import('../storage/sqlite/search.js');
        const results = searchEvidence(name, query, { topK: 5 });
        if (results.length === 0) addLog('  No results found.');
        else results.forEach((r, i) => addLog(`  ${i + 1}. [${r.evidenceId}] (${Math.round(r.score * 100)}%) ${r.snippet.substring(0, 120)}`));
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    // Draft command
    if (cmd.startsWith('draft ')) {
      const rest = cmd.slice(6).trim();
      const spaceIdx = rest.indexOf(' ');
      if (spaceIdx === -1) { addLog('  Usage: draft <matter-name> <brief>'); return; }
      const name = rest.slice(0, spaceIdx);
      const brief = rest.slice(spaceIdx + 1);
      addLog(`  Drafting for "${name}": "${brief.substring(0, 50)}..."`);
      try {
        const { default: draftHandler } = await import('../commands/draft.js');
        await draftHandler(name, brief, {});
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    // Evidence command
    if (cmd.startsWith('evidence ')) {
      const name = cmd.slice(9).trim();
      if (!name) { addLog('  Usage: evidence <matter-name>'); return; }
      try {
        const { listEvidence } = await import('../storage/evidence.js');
        const evidence = await listEvidence(name);
        if (evidence.length === 0) addLog('  No evidence.');
        else evidence.forEach(e => addLog(`  [${e.id}] ${e.format} — ${e.status}`));
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    // Verify command
    if (cmd.startsWith('verify ')) {
      const parts = cmd.slice(7).trim().split(' ');
      if (parts.length < 2) { addLog('  Usage: verify <matter-name> <candidate-id>'); return; }
      try {
        const { default: verifyHandler } = await import('../commands/verify.js');
        await verifyHandler(parts[0], parts[1]);
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    // Gate command
    if (cmd.startsWith('gate ')) {
      const parts = cmd.slice(5).trim().split(' ');
      if (parts.length < 2) { addLog('  Usage: gate <matter-name> <candidate-id>'); return; }
      try {
        const { default: gateHandler } = await import('../commands/gate.js');
        await gateHandler(parts[0], parts[1]);
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    // Accept/Reject
    if (cmd.startsWith('accept ')) {
      const parts = cmd.slice(7).trim().split(' ');
      if (parts.length < 2) { addLog('  Usage: accept <matter-name> <candidate-id>'); return; }
      try {
        const { default: acceptHandler } = await import('../commands/accept.js');
        await acceptHandler(parts[0], parts[1]);
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    if (cmd.startsWith('reject ')) {
      const parts = cmd.slice(7).trim().split(' ');
      if (parts.length < 2) { addLog('  Usage: reject <matter-name> <candidate-id>'); return; }
      try {
        const { default: rejectHandler } = await import('../commands/reject.js');
        await rejectHandler(parts[0], parts[1], {});
      } catch (e: unknown) {
        addLog(`  Error: ${(e as Error).message}`);
      }
      return;
    }

    addLog(`  Unknown command: "${cmd}". Type "help" for available commands.`);
  }

  return (
    <Box flexDirection="column" height="100%">
      <Box borderStyle="round" borderColor="cyan" paddingLeft={1} paddingRight={1}>
        <Text bold color="cyan">Harness v2</Text>
        <Text> — Legal Operations Agent</Text>
      </Box>

      <Box flexDirection="column" flexGrow={1} marginY={1}>
        {mode === 'running' && (
          <Box>
            <Text color="yellow">Running agent loop for "{currentMatter}"...</Text>
          </Box>
        )}
        {logs.map((log, i) => (
          <Box key={i}>
            <Text>{log.startsWith('> ') ? <Text bold color="green">{log}</Text> : log.startsWith('  Error') ? <Text color="red">{log}</Text> : log.startsWith('  Status:') && log.includes('COMPLETED') ? <Text color="green">{log}</Text> : <Text>{log}</Text>}</Text>
          </Box>
        ))}
      </Box>

      <Box>
        <Text bold color="green">{'>'}</Text>
        <Text> {input}{mode === 'running' ? '' : <Text dimColor>█</Text>}</Text>
      </Box>

      <Box borderStyle="single" borderColor="gray" paddingX={1} marginTop={1}>
        <Text dimColor>Esc=exit  Tab=commands  Type "help" for available commands</Text>
      </Box>
    </Box>
  );
}
