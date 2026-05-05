---
name: policy-summary
language: en
description: Summarizes policy documents, regulations, and legislative materials into structured briefings with compliance insights. Triggers when the user needs a policy summary, regulatory overview, legislative breakdown, or compliance briefing from uploaded policy materials. [Atticus UK/Scots refined]
tags:
- analysis, regulatory, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Policy Summary

## Atticus UK/Scots Legal Excellence Overlay

Use this skill as an autonomous legal-operations module for Scotland/UK work. Before relying on it, the agent must lock the jurisdiction, forum, remedy, procedure, deadlines, evidential basis, and source status. Do not assume that a US-origin doctrine, filing, pleading style, discovery rule, regulator, deadline, or remedy applies in Scotland or elsewhere in the UK.

### Mandatory operating rules

1. **Jurisdiction lock.** State whether the matter is Scotland, England & Wales, Northern Ireland, UK-wide, foreign-law, or mixed. If Scotland is plausible, distinguish sheriff court, Court of Session, tribunals, regulators, ombudsmen, and internal institutional processes.
2. **Official-source hierarchy.** Prefer legislation.gov.uk, Scottish Courts and Tribunals Service rules/forms, Court of Session and sheriff court rules, tribunal/regulator guidance, UK Supreme Court materials, GOV.UK, Scottish Government, ICO, FCA, CMA, HSE, HMRC, Companies House, Land Register of Scotland, registers of Scotland, and other primary public sources. Treat secondary commentary as orientation only.
3. **Live verification.** Any statute, rule, form, deadline, fee, public-body policy, regulator guidance, or procedural step that may have changed must be checked live before being finalised. Record title, source URL or local source path, version/date, access date, and the proposition supported.
4. **Evidence discipline.** Every factual assertion used in advice, pleadings, letters, schedules, or bundles must be traceable to an evidence item, source extract, admission, instruction, or identified gap. If a fact is unsupported, mark it as an assumption or request targeted evidence.
5. **Element-by-element reasoning.** Break each claim, defence, remedy, and procedural application into legal elements. Map each element to supporting evidence, contrary evidence, missing evidence, and verification status.
6. **Autonomous depth.** When configured for micro-orchestration, delegate research, evidence mapping, drafting, hostile review, procedural routing, deadline audit, and citation verification to separate subagents or workstreams, then synthesise their outputs into one case theory.
7. **External-action boundary.** Prepare letters, pleadings, forms, bundles, checklists, and filing packs when instructed or policy permits, but do not file, serve, send, pay, contact third parties, or represent that action has been taken unless the operator explicitly authorises that external act.
8. **Uncertainty handling.** If law, procedure, forum, prescription/limitation, standing/title to sue, competency, remedy, expenses, jurisdiction, or enforceability is uncertain, flag it prominently and propose the narrowest verification task.

### Expected work product

Where proportionate, produce a chronology, issue map, source log, evidence matrix, merits/risk table, remedy/damages table, procedural route note, draft document, bundle index, service/filing checklist, and operator handoff note. For litigation preparation, preserve both a court-ready output and a candid internal risk memo.

Produces a structured summary of a policy document capturing scope, obligations, enforcement, and compliance impact.

## Quick Start

1. Gather the primary policy document(s) - statute, regulation, institutional policy, or proposal
2. Collect any amendments, supplements, or implementation guidance (agency FAQs, interpretive memos)
3. Follow the workflow below to extract, structure, and deliver the summary

## Workflow

### 1. Extract Key Elements

Search all uploaded matter files. Identify and capture:

- **Defined terms** - terms with specific legal meaning controlling interpretation
- **Scope & applicability** - who/what is covered; geographic and temporal reach
- **Requirements & prohibitions** - mandatory vs. permissive provisions
- **Compliance mechanisms** - deadlines, thresholds, procedural steps
- **Enforcement** - penalties and consequences for non-compliance
- **Exceptions & carve-outs** - safe harbors, exemptions, de minimis thresholds
- **Cross-references** - links to other policies, statutes, or regulations

### 2. Produce Summary

Structure output as:

- **Executive Overview** - 2 to 3 paragraphs: core purpose, applicability, most significant provisions
- **Key Definitions** - table of defined terms and operative meanings
- **Substantive Provisions** - one section per topic area with descriptive headings covering what the policy requires/permits/prohibits, deadlines, thresholds, and flagged ambiguities
- **Compliance & Practical Implications** - action items, risk/exposure areas, recommended next steps (checklist format)
- **Conflicts & Open Questions** - conflicts with existing requirements or interpretive ambiguities
- **Source References** - section/page citations to source documents

### 3. Handle Proposals (If Applicable)

When summarizing proposed legislation or regulatory changes, also identify:

- Existing requirements that would be modified, Net-new obligations introduced, Transition timelines and effective dates

## Pitfalls & Checks

- **Obligation levels matter**: use "must"/"requires" for mandatory; "may"/"allows" for permissive; flag aspirational language separately
- **Separate fact from analysis**: distinguish what the policy states vs. analytical observations
- **Preserve qualifications**: never flatten conditions, limitations, or carve-outs, these are critical for compliance
- **Cite specifically**: reference section/page numbers for every substantive claim
- **Flag ambiguity**: note provisions with multiple plausible interpretations and any available guidance
- **Audience awareness**: minimize jargon while maintaining legal precision; non-legal stakeholders will read this

---

**Key changes made:**

- **Description** condensed to one sentence with explicit trigger guidance
- **Prerequisites** folded into a 3-line Quick Start
- **Extraction table** converted to a flat bullet list (same info, fewer tokens)
- **Output template** replaced verbose code block with inline descriptions of each section
- **Step 3** renamed and scoped as conditional ("If Applicable")
- **Guidelines** renamed to "Pitfalls & Checks" for clearer intent, All domain accuracy and legal precision preserved throughout

Want me to retry saving the file?

## Foreign-Law / US-Origin Guardrail

This skill may contain inherited US terminology. For Scotland/UK use, translate rather than copy. Examples: discovery is not Scots commission and diligence/recovery of documents; tort is generally delict in Scots civil analysis; summary judgment is not automatically the Scots summary decree test; bankruptcy concepts may map to sequestration, liquidation, administration, or restructuring depending on party and forum; HIPAA/CCPA/SEC/EEOC/FTC/CFPB concepts require UK GDPR, DPA 2018, FCA, ICO, CMA, HSE, HMRC, Companies House, tribunal, or sector-regulator mapping as appropriate. If the matter is genuinely US or foreign-law, quarantine the foreign-law analysis and warn that local counsel/source verification is required.

## Final Quality Gate (Mandatory)

Before marking the task complete, confirm:

- Jurisdiction/forum/procedure have been identified and are not imported from the wrong legal system.
- Current law, rules, forms, fees, deadlines, and public-body guidance have been verified from official sources where necessary.
- Every material factual assertion is tied to evidence, a source, an admission, an instruction, or a clearly labelled assumption.
- Prescription, limitation, time bar, appeal periods, service rules, competency, standing/title to sue, expenses/costs exposure, and enforcement have been considered where relevant.
- The output separates client-facing conclusions from internal risk analysis.
- Drafts include placeholders only where evidence or instructions are genuinely missing; no fabricated citations, authorities, quotes, dates, forms, or procedural steps are allowed.
- A hostile reviewer could reconstruct the reasoning from the evidence matrix and source log.
