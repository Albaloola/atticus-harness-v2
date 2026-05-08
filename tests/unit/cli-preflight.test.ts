import { describe, expect, it } from 'vitest';
import { Command } from 'commander';
import { getCommandRoute, requiresLlmPrecheck } from '../../src/config/llm-preflight.ts';

function childRoute(...names: string[]): Command {
  const root = new Command('harness');
  let parent = root;

  for (const name of names) {
    const child = new Command(name);
    parent.addCommand(child);
    parent = child;
  }

  return parent;
}

describe('CLI LLM preflight routing', () => {
  it('preflights only routes that make LLM calls', () => {
    for (const route of [
      childRoute('run'),
      childRoute('orchestrate'),
      childRoute('draft'),
      childRoute('review'),
      childRoute('case', 'manage'),
    ]) {
      expect(requiresLlmPrecheck(route), getCommandRoute(route)).toBe(true);
    }
  });

  it('does not preflight local, source, or control-panel routes', () => {
    for (const route of [
      childRoute('search'),
      childRoute('verify'),
      childRoute('gate'),
      childRoute('source', 'search'),
      childRoute('source', 'fetch'),
      childRoute('rules', 'court-session', 'list'),
      childRoute('rules', 'court-session', 'search'),
      childRoute('rules', 'court-session', 'context'),
      childRoute('rules', 'court-session', 'index'),
      childRoute('rules', 'court-session', 'normalize'),
      childRoute('rules', 'sheriff-court', 'list'),
      childRoute('rules', 'sheriff-court', 'search'),
      childRoute('rules', 'sheriff-court', 'context'),
      childRoute('rules', 'scotcourts', 'list'),
      childRoute('rules', 'scotcourts', 'search'),
      childRoute('rules', 'scotcourts', 'context'),
      childRoute('rules', 'scotcourts', 'index'),
      childRoute('rules', 'scotcourts', 'normalize'),
      childRoute('case', 'resume'),
      childRoute('case', 'memory'),
      childRoute('control-panel', 'status'),
      childRoute('provider', 'list'),
      childRoute('investigate'),
      childRoute('draft', 'outline'),
      childRoute('draft', 'trace'),
      childRoute('review', 'finding'),
      childRoute('review', 'queue'),
      childRoute('graph', 'rebuild'),
      childRoute('export', 'readiness'),
    ]) {
      expect(requiresLlmPrecheck(route), getCommandRoute(route)).toBe(false);
    }
  });
});
