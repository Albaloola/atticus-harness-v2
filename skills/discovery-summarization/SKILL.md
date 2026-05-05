---
name: discovery-summarization
language: en
description: Summarizes discovery documents (interrogatories, RFPs, RFAs, depositions, privilege logs) into structured attorney-ready memoranda. Triggers when the user needs to summarize discovery materials, identify key admissions, spot response gaps, cross-reference answers, or prepare a discovery status report. [Atticus UK/Scots refined]
tags:
- analysis, litigation, memo, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Discovery Summarization

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

Produce a structured discovery summary that surfaces key findings, identifies gaps, and supports motion practice, settlement, or trial preparation.

## Quick Start

1. Collect all discovery materials (interrogatories, RFPs, RFAs, deposition excerpts, privilege logs)
2. Confirm organizational approach: by discovery type or by legal issue
3. Follow the workflow below and deliver the output structure

## Workflow

1. **Review** all provided discovery documents
2. **Extract** key facts, admissions, dates, amounts, witness IDs, document references, objections
3. **Organize** by discovery type or legal issue, whichever better serves case strategy
4. **Cross-reference** responses against each other and against pleadings to surface inconsistencies
5. **Assess** completeness; flag deficiencies, evasive answers, and boilerplate objections

## Output Structure

### Executive Summary, Discovery conducted (types, dates, volume)
- Top 3 to 5 significant findings, Critical gaps or deficiencies

### Findings (by Discovery Type or Issue)

Per response:
- Request number + brief description, Objections raised, Substantive answer (summarized, not restated)
- Key admissions, witness IDs, or document references, Cross-references to confirming or contradicting responses

### Privilege Log Analysis, Categories of documents withheld, Privileges asserted, Potential challenges to privilege claims

### Strategic Assessment, Admissions supporting or undermining case theories, Factual disputes requiring resolution, Recommended follow-up: supplemental discovery, meet-and-confer, motions to compel, Priority-ranked next steps

## Pitfalls and Checks

- **Cite by number** - e.g., "Interrogatory No. 12"; include page references where available
- **Quote verbatim** for key admissions, use quotation marks
- **Organize thematically** (damages, liability, defenses) when more useful than chronological order
- **Flag non-compliance** - deficient or evasive responses violating discovery obligations
- **Note protective-order designations** - "Confidential", "AEO"
- **Stay objective** - identify both favorable and unfavorable information without advocacy

---

**Key changes:**

- **Description** tightened with parenthetical listing instead of verbose enumeration; added explicit "Triggers when" guidance
- **Added Quick Start** section for immediate orientation
- **Collapsed redundant overview** - the heading paragraph now does double duty as overview
- **Streamlined Output Structure** - shortened labels ("Per response" vs "For each response"), removed unnecessary sub-heading prose
- **Renamed "Guidelines" → "Pitfalls and Checks"** to match best-practice section naming
- **Reduced token count** throughout by trimming filler words while preserving all legal substance

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
