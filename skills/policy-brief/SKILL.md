---
name: policy-brief
language: en
description: Generates structured public policy briefs analyzing legislation across economic, social, legal, and implementation dimensions. Use when drafting legislative impact analyses, policy summaries, regulatory briefs, or government affairs memoranda for lawmakers, lobbyists, or civic organizations. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Policy Brief

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

Produces a balanced, structured policy brief that distills complex legislation into actionable impact analysis for diverse stakeholders.

## Prerequisites

1. **Legislation text** - full bill text, enrolled version, or enacted law
2. **Legislative history** (optional) - committee reports, fiscal notes, floor statements, amendment records
3. **Supplemental materials** (optional) - CBO/CRS analyses, agency impact statements, stakeholder comment letters

## Quick Start

1. Gather legislation text and any available history/analysis
2. Follow the output structure below section by section
3. Apply guidelines throughout, objectivity, plain language, fact vs. projection
4. Mark unverified statutory citations with `[VERIFY]`

## Output Structure

### 1. Executive Summary (2 to 3 paragraphs)

Cover: policy area, problem addressed, primary mechanism, and net expected impact (one-sentence takeaway).

### 2. Background & Context

- Policy problem and triggering events, Prior legislative attempts or existing law being modified, Political context: sponsors, coalitions, amendment history, Comparable policies in other jurisdictions

### 3. Key Provisions

| Provision | Description | Effective Date | Mandatory/Discretionary | Sunset? |
|-----------|-------------|----------------|------------------------|---------|
| § ___ | ... | ... | ... | ... |

Flag phased implementation and delegated rulemaking authority.

### 4. Impact Analysis

Analyze across four dimensions:

- **Economic** - effects on businesses (by size/sector), government budgets, individuals; include quantitative projections from fiscal notes/CBO scores where available
- **Social** - affected populations, equity/distributional effects, public health/education/safety implications
- **Legal & Regulatory** - constitutional considerations, federalism implications, relationship to existing framework, new compliance/enforcement mechanisms
- **Implementation** - responsible agencies, resource requirements, timeline/phasing, administrative capacity concerns

### 5. Stakeholder Positions

| Stakeholder | Position | Rationale |
|-------------|----------|-----------|
| ... | Support/Oppose/Mixed | ... |

Present viewpoints without advocacy. Note coalition alignments.

### 6. Risks & Open Questions

- Unintended consequences and genuine uncertainty, Implementation bottlenecks and litigation risk, Questions dependent on future rulemaking or appropriations

### 7. Sources

List key sources consulted (legislation text, committee reports, agency analyses, academic studies).

## Pitfalls & Checks

- **Objectivity is paramount** - inform, do not persuade; acknowledge all sides of legitimate debate
- **Plain language** - define legal/technical terms on first use; use concrete examples for abstract mechanisms
- **Fact vs. projection** - label estimates, forecasts, and contested claims explicitly
- **Target length** - 3 to 6 pages; optimize for time-constrained readers
- **Jurisdiction** - default to U.S. federal; note state-level interactions where relevant
- **Citations** - mark any statutory citation not from provided materials with `[VERIFY]`
- **Audience** - write for policy professionals and informed non-specialists

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
