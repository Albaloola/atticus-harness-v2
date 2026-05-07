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
      childRoute('case', 'resume'),
      childRoute('case', 'memory'),
      childRoute('control-panel', 'status'),
      childRoute('provider', 'list'),
    ]) {
      expect(requiresLlmPrecheck(route), getCommandRoute(route)).toBe(false);
    }
  });
});
