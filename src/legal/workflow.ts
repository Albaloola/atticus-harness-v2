import type { LegalArtifactType } from './artifact-types.js';
import { LegalArtifactType as AT } from './artifact-types.js';

export interface PhaseDefinition {
  id: string;
  name: string;
  description: string;
  expectedOutputTypes: LegalArtifactType[];
  suggestedSkills: string[];
}

export const PHASES: PhaseDefinition[] = [
  {
    id: 'intake_and_normalization',
    name: 'Intake and Normalization',
    description:
      'Receive, classify, and normalise incoming matters. Extract party details, jurisdiction, matter type, urgency, and key deadlines from client instructions and initial documents.',
    expectedOutputTypes: [AT.intake_summary],
    suggestedSkills: [
      'legal-simulation-patrick-munro',
      'canned-responses-anthropic',
      'meeting-briefing-anthropic',
      'multi-jurisdiction-router',
    ],
  },
  {
    id: 'evidence_ingestion_and_fact_extraction',
    name: 'Evidence Ingestion and Fact Extraction',
    description:
      'Ingest document bundles, extract facts, build a chronology, and populate the evidence matrix. Link every factual assertion to a source document.',
    expectedOutputTypes: [AT.chronology, AT.evidence_matrix, AT.fact_extraction],
    suggestedSkills: [
      'docx-processing-anthropic',
      'citation-integrity',
      'contract-review',
      'nda-review-jamie-tso',
      'nil-contract-analysis-samir-patel',
    ],
  },
  {
    id: 'issue_spotting',
    name: 'Issue Spotting',
    description:
      'Identify legal and factual issues in the matter. Map each issue to relevant facts, authorities, and parties. Produce an issue map with preliminary strength assessments.',
    expectedOutputTypes: [AT.issue_map],
    suggestedSkills: [
      'mediation-dispute-analysis',
      'case-strategy-planning',
      'statute-analysis-rafal-fryc',
      'statutory-interpretation',
    ],
  },
  {
    id: 'law_and_policy_research',
    name: 'Law and Policy Research',
    description:
      'Conduct jurisdiction-anchored legal research. Identify applicable statutes, case law, regulations, and policy. Produce an authority map with verified citations and relevance ratings.',
    expectedOutputTypes: [AT.authority_map, AT.legal_research],
    suggestedSkills: [
      'adversarial-research',
      'statutory-interpretation',
      'statute-analysis-rafal-fryc',
      'multi-jurisdiction-router',
      'compliance-anthropic',
      'dpia-sentinel-oliver-schmidt-prietz',
      'gdpr-breach-sentinel-oliver-schmidt-prietz',
    ],
  },
  {
    id: 'merits_and_risk_analysis',
    name: 'Merits and Risk Analysis',
    description:
      'Assess the legal merits of each issue, calculate risk scores using severity × likelihood matrices, identify key authorities and weak points, and produce a risk register and case theory memo.',
    expectedOutputTypes: [AT.case_theory, AT.legal_memo, AT.risk_register, AT.risk_assessment],
    suggestedSkills: [
      'risk-assessment',
      'legal-risk-assessment-anthropic',
      'case-strategy-planning',
      'escalation-framework',
      'contract-review-anthropic',
    ],
  },
  {
    id: 'procedural_route_planning',
    name: 'Procedural Route Planning',
    description:
      'Map available procedural pathways, assess jurisdiction and forum options, evaluate costs and limitation periods, and produce a procedure plan with BATNA/WATNA/ZOPA analysis.',
    expectedOutputTypes: [AT.procedure_plan, AT.procedural_route_map],
    suggestedSkills: [
      'case-strategy-planning',
      'mediation-dispute-analysis',
      'escalation-framework',
      'multi-jurisdiction-router',
    ],
  },
  {
    id: 'document_production',
    name: 'Document Production',
    description:
      'Draft pre-action letters, claims, witness statements, schedules of loss, draft orders, and other court-ready documents from the bounded source material.',
    expectedOutputTypes: [
      AT.pre_action_letter,
      AT.claim_draft,
      AT.witness_statement,
      AT.schedule_of_loss,
      AT.draft_order,
      AT.draft_document,
    ],
    suggestedSkills: [
      'document-generation',
      'scots-legal-humanizer',
      'contract-review',
      'docx-processing-anthropic',
      'tech-contract-negotiation-patrick-munro',
    ],
  },
  {
    id: 'verification_and_hostile_review',
    name: 'Verification and Hostile Review',
    description:
      'Stress-test all outputs as a hostile opponent would. Verify every factual claim, legal citation, arithmetic calculation, and source reference. Produce a red-team verification report with quality scores.',
    expectedOutputTypes: [AT.hostile_review_report],
    suggestedSkills: [
      'red-team-verifier',
      'citation-integrity',
      'risk-assessment',
      'escalation-framework',
    ],
  },
  {
    id: 'bundle_and_war_room_assembly',
    name: 'Bundle and War Room Assembly',
    description:
      'Assemble court-ready bundles, filing checklists, and war room packs. Ensure all documents are indexed, paginated, and compliant with court filing requirements.',
    expectedOutputTypes: [AT.bundle_index, AT.filing_checklist, AT.war_room_pack],
    suggestedSkills: [
      'document-generation',
      'docx-processing-anthropic',
      'scots-legal-humanizer',
    ],
  },
  {
    id: 'operator_handoff',
    name: 'Operator Handoff',
    description:
      'Prepare a structured handoff report for the operator. Summarise all work products, flag outstanding gaps and decisions required, list review recommendations, and deliver the final bundle.',
    expectedOutputTypes: [AT.operator_handoff_report],
    suggestedSkills: [
      'meeting-briefing-anthropic',
      'canned-responses-anthropic',
      'escalation-framework',
    ],
  },
];

export function getPhaseByName(name: string): PhaseDefinition | undefined {
  return PHASES.find(
    (p) => p.id === name || p.name.toLowerCase() === name.toLowerCase(),
  );
}

export function getDefaultPhases(): PhaseDefinition[] {
  return PHASES;
}
