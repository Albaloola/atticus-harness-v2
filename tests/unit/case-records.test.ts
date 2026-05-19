import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { initMatter, deleteMatter } from '../../src/storage/matter.js';
import { closeStateDb } from '../../src/state/store.js';
import { closeDb } from '../../src/storage/sqlite/index.js';
import {
  addEntity,
  listEntities,
  addBreach,
  listBreaches,
  addRelationship,
  listRelationships,
  addCaseCitation,
  listCaseCitations,
} from '../../src/storage/sqlite/index.js';
import { buildCaseMemoryPack } from '../../src/orchestration/case-memory.js';

describe('SQLite Case Records & Citation Taxonomies', () => {
  const matterName = 'test-case-records';

  beforeEach(async () => {
    await initMatter(matterName);
  });

  afterEach(async () => {
    closeStateDb(matterName);
    closeDb(matterName);
    await deleteMatter(matterName);
  });

  it('can add, list and relate entities, breaches, and citations', async () => {
    // 1. Add Entity
    const entity = addEntity({
      matterName,
      name: 'John Doe Corp',
      role: 'offender',
      description: 'Primary corporate offender',
      metadata: { department: 'Sales' },
    });

    expect(entity.id).toMatch(/^entity-/);
    expect(entity.name).toBe('John Doe Corp');

    const entities = listEntities(matterName);
    expect(entities).toHaveLength(1);
    expect(entities[0].role).toBe('offender');

    // 2. Add Breach
    const breach = addBreach({
      matterName,
      entityId: entity.id,
      title: 'Pollution Breach',
      description: 'Discharged raw sewage in the river.',
      dateCommitted: '2023-05-01',
      provisionsViolated: 'Environmental Protection Act 1990 Sec 33',
      evidenceCitations: [{ evidenceId: 'EV-001', quote: 'spill detected' }],
    });

    expect(breach.id).toMatch(/^breach-/);
    expect(breach.entityId).toBe(entity.id);

    const breaches = listBreaches(matterName);
    expect(breaches).toHaveLength(1);
    expect(breaches[0].title).toBe('Pollution Breach');

    // 3. Add Relationship
    const relationship = addRelationship({
      matterName,
      sourceId: entity.id,
      targetId: breach.id,
      relationType: 'responsible_for',
      metadata: { priority: 'high' },
    });

    expect(relationship.id).toMatch(/^relation-/);
    expect(relationship.sourceId).toBe(entity.id);

    const relationships = listRelationships(matterName);
    expect(relationships).toHaveLength(1);
    expect(relationships[0].relationType).toBe('responsible_for');

    // 4. Add Case Citation
    const citation = addCaseCitation({
      matterName,
      caseName: 'R v Environment Agency [2001] EWCA Civ 12',
      citationQuery: 'corporate environmental liability',
      relevanceScore: 9.5,
      relevanceRationale: 'Established strict liability for corporate sewage discharges.',
      keyQuote: 'Corporate entities must monitor all outlets.',
      proceduralContext: 'legal research',
    });

    expect(citation.id).toMatch(/^citation-/);
    expect(citation.caseName).toBe('R v Environment Agency [2001] EWCA Civ 12');

    const citations = listCaseCitations(matterName);
    expect(citations).toHaveLength(1);
    expect(citations[0].relevanceScore).toBe(9.5);

    // 5. Test CaseMemoryPack integration
    const pack = await buildCaseMemoryPack(matterName);
    expect(pack.entities).toHaveLength(1);
    expect(pack.entities[0].name).toBe('John Doe Corp');
    expect(pack.entities[0].metadata).toEqual({ department: 'Sales' });

    expect(pack.breaches).toHaveLength(1);
    expect(pack.breaches[0].provisionsViolated).toBe('Environmental Protection Act 1990 Sec 33');

    expect(pack.relationships).toHaveLength(1);
    expect(pack.relationships[0].relationType).toBe('responsible_for');

    expect(pack.caseCitations).toHaveLength(1);
    expect(pack.caseCitations[0].caseName).toBe('R v Environment Agency [2001] EWCA Civ 12');
  });
});
