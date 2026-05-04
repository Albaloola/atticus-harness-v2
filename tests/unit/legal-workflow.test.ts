import { describe, it, expect } from 'vitest';
import { PHASES, getPhaseByName, getDefaultPhases } from '../../src/legal/workflow.js';
import type { PhaseDefinition } from '../../src/legal/workflow.js';
import {
  LegalArtifactType,
  artifactTypeCategories,
  getArtifactTypeCategory,
} from '../../src/legal/artifact-types.js';
import type { LegalArtifactType as LAT } from '../../src/legal/artifact-types.js';
import { getArtifactTemplate, TEMPLATES } from '../../src/legal/templates.js';
import { selectSkills } from '../../src/legal/skills-router.js';
import type { SkillDefinition } from '../../src/skills/types.js';
import type { MatterMetadata } from '../../src/legal/skills-router.js';

function skillDef(
  id: string,
  description: string,
  body = '',
  taskTypes?: string[],
  stage?: string,
): SkillDefinition {
  return {
    skillId: id,
    path: `/skills/${id}/SKILL.md`,
    manifest: {
      name: id,
      version: '1.0.0',
      description,
      stage,
      taskTypes,
    },
    body,
    references: [],
    examples: [],
  };
}

describe('workflow', () => {
  describe('PHASES', () => {
    it('has exactly 10 phases', () => {
      expect(PHASES).toHaveLength(10);
    });

    it('each phase has id, name, description, expectedOutputTypes, suggestedSkills', () => {
      for (const phase of PHASES) {
        expect(phase.id).toBeTruthy();
        expect(typeof phase.id).toBe('string');
        expect(phase.name).toBeTruthy();
        expect(phase.description).toBeTruthy();
        expect(Array.isArray(phase.expectedOutputTypes)).toBe(true);
        expect(phase.expectedOutputTypes.length).toBeGreaterThan(0);
        expect(Array.isArray(phase.suggestedSkills)).toBe(true);
      }
    });

    it('all phase ids are unique', () => {
      const ids = PHASES.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it('contains expected phase ids', () => {
      const ids = PHASES.map((p) => p.id);
      expect(ids).toContain('intake_and_normalization');
      expect(ids).toContain('evidence_ingestion_and_fact_extraction');
      expect(ids).toContain('issue_spotting');
      expect(ids).toContain('law_and_policy_research');
      expect(ids).toContain('merits_and_risk_analysis');
      expect(ids).toContain('procedural_route_planning');
      expect(ids).toContain('document_production');
      expect(ids).toContain('verification_and_hostile_review');
      expect(ids).toContain('bundle_and_war_room_assembly');
      expect(ids).toContain('operator_handoff');
    });

    it('suggestedSkills reference actual skill names', () => {
      const phase = PHASES.find((p) => p.id === 'verification_and_hostile_review')!;
      expect(phase).toBeDefined();
      expect(phase.suggestedSkills).toContain('red-team-verifier');
      expect(phase.suggestedSkills).toContain('citation-integrity');
    });
  });

  describe('getPhaseByName', () => {
    it('finds phase by id', () => {
      const phase = getPhaseByName('issue_spotting');
      expect(phase).toBeDefined();
      expect(phase!.name).toBe('Issue Spotting');
    });

    it('finds phase by name (case-insensitive)', () => {
      const phase = getPhaseByName('document production');
      expect(phase).toBeDefined();
      expect(phase!.id).toBe('document_production');
    });

    it('returns undefined for unknown name', () => {
      expect(getPhaseByName('nonexistent')).toBeUndefined();
    });
  });

  describe('getDefaultPhases', () => {
    it('returns the same array as PHASES', () => {
      expect(getDefaultPhases()).toBe(PHASES);
    });
  });
});

describe('artifact types', () => {
  describe('LegalArtifactType', () => {
    it('has exactly 24 values', () => {
      const values = Object.values(LegalArtifactType);
      expect(values).toHaveLength(24);
    });

    it('starts with case_theory', () => {
      expect(LegalArtifactType.case_theory).toBe('case_theory');
    });

    it('ends with operator_handoff_report', () => {
      const values = Object.values(LegalArtifactType);
      expect(values).toContain('operator_handoff_report');
    });
  });

  describe('artifactTypeCategories', () => {
    it('has a category for every artifact type', () => {
      for (const type of Object.values(LegalArtifactType)) {
        expect(artifactTypeCategories[type]).toBeDefined();
      }
    });

    it('assigns internal category to internal-only types', () => {
      expect(artifactTypeCategories[LegalArtifactType.case_theory]).toBe('internal');
      expect(artifactTypeCategories[LegalArtifactType.legal_memo]).toBe('internal');
      expect(artifactTypeCategories[LegalArtifactType.risk_register]).toBe('internal');
      expect(artifactTypeCategories[LegalArtifactType.authority_map]).toBe('internal');
      expect(artifactTypeCategories[LegalArtifactType.hostile_review_report]).toBe('internal');
      expect(artifactTypeCategories[LegalArtifactType.intake_summary]).toBe('internal');
      expect(artifactTypeCategories[LegalArtifactType.fact_extraction]).toBe('internal');
      expect(artifactTypeCategories[LegalArtifactType.legal_research]).toBe('internal');
      expect(artifactTypeCategories[LegalArtifactType.risk_assessment]).toBe('internal');
      expect(artifactTypeCategories[LegalArtifactType.procedural_route_map]).toBe('internal');
    });

    it('assigns prepare_only category to court-facing types', () => {
      expect(artifactTypeCategories[LegalArtifactType.pre_action_letter]).toBe('prepare_only');
      expect(artifactTypeCategories[LegalArtifactType.claim_draft]).toBe('prepare_only');
      expect(artifactTypeCategories[LegalArtifactType.witness_statement]).toBe('prepare_only');
      expect(artifactTypeCategories[LegalArtifactType.schedule_of_loss]).toBe('prepare_only');
      expect(artifactTypeCategories[LegalArtifactType.draft_order]).toBe('prepare_only');
      expect(artifactTypeCategories[LegalArtifactType.bundle_index]).toBe('prepare_only');
      expect(artifactTypeCategories[LegalArtifactType.filing_checklist]).toBe('prepare_only');
      expect(artifactTypeCategories[LegalArtifactType.operator_handoff_report]).toBe('prepare_only');
      expect(artifactTypeCategories[LegalArtifactType.war_room_pack]).toBe('prepare_only');
    });
  });

  describe('getArtifactTypeCategory', () => {
    it('returns the correct category', () => {
      expect(getArtifactTypeCategory(LegalArtifactType.issue_map)).toBe('internal');
      expect(getArtifactTypeCategory(LegalArtifactType.bundle_index)).toBe('prepare_only');
    });
  });
});

describe('templates', () => {
  it('has exactly 14 template entries', () => {
    const keys = Object.keys(TEMPLATES);
    expect(keys).toHaveLength(14);
  });

  it('templates are strings with placeholder markers', () => {
    for (const [key, template] of Object.entries(TEMPLATES)) {
      expect(typeof template).toBe('string');
      expect(template.length).toBeGreaterThan(50);
      expect(template).toMatch(/\[[A-Z_]+\]/);
    }
  });

  it('returns the chronology template', () => {
    const tpl = getArtifactTemplate(LegalArtifactType.chronology);
    expect(tpl).toBeDefined();
    expect(tpl).toContain('[MATTER_SCOPE]');
    expect(tpl).toContain('## Narrative Timeline');
  });

  it('returns the legal_memo template with privilege marker', () => {
    const tpl = getArtifactTemplate(LegalArtifactType.legal_memo);
    expect(tpl).toBeDefined();
    expect(tpl).toContain('[Yes');
    expect(tpl).toContain('Privileged');
  });

  it('returns the risk_register template with matrix fields', () => {
    const tpl = getArtifactTemplate(LegalArtifactType.risk_register);
    expect(tpl).toBeDefined();
    expect(tpl).toContain('Severity (1-5)');
    expect(tpl).toContain('Likelihood (1-5)');
    expect(tpl).toContain('GREEN');
  });

  it('returns the operator_handoff_report template', () => {
    const tpl = getArtifactTemplate(LegalArtifactType.operator_handoff_report);
    expect(tpl).toBeDefined();
    expect(tpl).toContain('## Executive Summary');
    expect(tpl).toContain('[DECISION_REQUIRED]');
  });

  it('returns undefined for non-template types', () => {
    const tpl = getArtifactTemplate(LegalArtifactType.case_theory);
    expect(tpl).toBeUndefined();
  });
});

describe('skills router', () => {
  it('selects skills based on objective keywords', () => {
    const skills: SkillDefinition[] = [
      skillDef('contract-review', 'Review contracts and identify clause deviations, negotiation prep'),
      skillDef('risk-assessment', 'Assess and classify legal risks using severity likelihood matrix'),
      skillDef('document-generation', 'Generate legal documents and templates'),
    ];

    const results = selectSkills(skills, 'review this contract agreement and assess risk');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].skill.skillId).toBe('contract-review');
  });

  it('scores higher for skills matching multiple keywords', () => {
    const skills: SkillDefinition[] = [
      skillDef('risk-skill', 'legal risk assessment severity likelihood exposure mitigation'),
      skillDef('other-skill', 'this is about something completely different unrelated topic'),
    ];

    const results = selectSkills(skills, 'I need a risk assessment with severity and likelihood matrix');
    expect(results[0].skill.skillId).toBe('risk-skill');
    expect(results[0].score).toBeGreaterThan(results[1].score);
  });

  it('boosts skills matching jurisdiction metadata', () => {
    const skills: SkillDefinition[] = [
      skillDef('scotland-skill', 'Scottish legal procedures and court rules'),
      skillDef('generic-skill', 'General legal matters'),
    ];

    const results = selectSkills(skills, 'legal procedure', { jurisdiction: 'Scotland' });
    const scotlandResult = results.find((r) => r.skill.skillId === 'scotland-skill')!;
    const genericResult = results.find((r) => r.skill.skillId === 'generic-skill')!;
    expect(scotlandResult.score).toBeGreaterThan(genericResult.score);
  });

  it('boosts skills matching matter type metadata', () => {
    const skills: SkillDefinition[] = [
      skillDef('contract-expert', 'contract review analysis and negotiation playbook'),
      skillDef('litigation-expert', 'litigation strategy dispute resolution'),
    ];

    const results = selectSkills(skills, 'legal help needed', { type: 'contract' });
    const contractResult = results.find((r) => r.skill.skillId === 'contract-expert')!;
    const litResult = results.find((r) => r.skill.skillId === 'litigation-expert')!;
    expect(contractResult.score).toBeGreaterThan(litResult.score);
  });

  it('strongly boosts skills in the current phase suggested list', () => {
    const skills: SkillDefinition[] = [
      skillDef('red-team-verifier', 'Adversarial verification and hostile review of legal outputs'),
      skillDef('document-generation', 'Generate legal documents and templates'),
    ];

    const phase: PhaseDefinition = {
      id: 'verification_and_hostile_review',
      name: 'Verification and Hostile Review',
      description: 'Stress-test outputs.',
      expectedOutputTypes: [LegalArtifactType.hostile_review_report],
      suggestedSkills: ['red-team-verifier', 'citation-integrity'],
    };

    const results = selectSkills(skills, 'verify documents', {}, phase);
    const verifier = results.find((r) => r.skill.skillId === 'red-team-verifier')!;
    expect(verifier.score).toBeGreaterThan(0);
  });

  it('respects the limit parameter', () => {
    const skills: SkillDefinition[] = Array.from({ length: 10 }, (_, i) =>
      skillDef(`skill-${i}`, `This is skill number ${i} for legal review analysis assessment`),
    );

    const results = selectSkills(skills, 'legal review analysis assessment', {}, undefined, 3);
    expect(results.length).toBeLessThanOrEqual(3);
  });

  it('returns empty array when no skills match', () => {
    const skills: SkillDefinition[] = [];

    const results = selectSkills(skills, 'legal review');
    expect(results.length).toBe(0);
  });

  it('scores higher for skills with richer matching description', () => {
    const skills: SkillDefinition[] = [
      skillDef('brief', 'short desc'),
      skillDef('detailed', 'comprehensive evidence ingestion fact extraction chronology mapping matrix source verification citation integrity document review analysis'),
    ];

    const results = selectSkills(skills, 'evidence ingestion fact extraction');
    expect(results[0].skill.skillId).toBe('detailed');
    expect(results[0].score).toBeGreaterThan(results[1].score);
  });

  it('handles empty skills array', () => {
    expect(selectSkills([], 'anything')).toHaveLength(0);
  });

  it('scores skills from body text as well as description', () => {
    const skills: SkillDefinition[] = [
      skillDef('body-matcher', 'General legal skill', 'This body text mentions mediation dispute analysis BATNA WATNA ZOPA strategy planning'),
      skillDef('desc-only', 'mediation dispute analysis with BATNA WATNA strategy', 'This body is unrelated'),
    ];

    const results = selectSkills(skills, 'BATNA WATNA analysis');
    expect(results[0].skill.skillId).toBe('body-matcher');
  });
});
