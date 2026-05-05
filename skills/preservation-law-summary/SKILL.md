---
name: preservation-law-summary
language: en
description: Generates structured legal memoranda on historic preservation law covering NHPA, Penn Central takings analysis, designation processes, and state-local regulatory frameworks. Use when summarizing preservation jurisprudence, Section 106 review, landmark regulations, cultural resource protection, or takings challenges to preservation ordinances. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Historic Preservation Law Summary

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

Produces a thematically organized legal memorandum synthesizing historic preservation statutes, case law, and regulatory frameworks across federal, state, and local levels.

## Prerequisites

Gather before drafting:

1. **Jurisdiction scope** - federal, specific state(s), or local municipality
2. **Audience** - developer, agency, preservation advocate, or litigation counsel
3. **Focus areas** - full survey or narrowed (e.g., takings only, designation process only)
4. **Uploaded documents** - case files, regulatory guidance, or ordinances to incorporate

## Quick Start

1. Confirm jurisdiction, audience, and focus areas
2. Draft executive overview (property rights vs. preservation interest, three-tier framework)
3. Build thematic sections synthesizing statutes + case law per topic
4. Format all citations in Bluebook; mark unverified citations `[VERIFY]`
5. Flag jurisdictional variations and unsettled law

## Memorandum Structure

Format as a professional legal memorandum with Bluebook citations.

### Executive Overview (1 to 2 paragraphs)

- Balance between property rights and public preservation interest, Three-tier regulatory framework (federal → state → local)
- Key legal mechanisms: designation, review, enforcement

### Thematic Sections

Organize by topic, **not** chronologically. Each section synthesizes statutes + case law.

| Topic | Key Authorities | Coverage |
|-------|----------------|----------|
| Designation criteria & procedures | NHPA §106, state register statutes | Listing standards, landmark criteria, district designation |
| Regulatory authority | Local preservation ordinances | Alterations, demolitions, certificates of appropriateness |
| Takings challenges | *Penn Central v. NYC*, 438 U.S. 104 (1978) | Three-factor test, economic impact, investment-backed expectations |
| Tax incentives & economics | IRC §47, state credits | Federal 20% credit, state incentives, economic hardship |
| Enforcement & remedies | Varies by jurisdiction | Penalties, injunctive relief, citizen suits |
| Intersections | NEPA, Section 106, local zoning | Environmental review overlay, adaptive reuse |

### Case Treatment Format

For each significant case:

```
**[Case Name], [Citation]**
- Property: [type and significance]
- Challenge: [restriction at issue]
- Holding: [ruling]
- Reasoning: [key points]
- Impact: [practical implications]
```

### Jurisdictional Variations

- Federal preemption boundaries, States with model preservation statutes (identify which)
- Local ordinance as primary regulatory vehicle, Circuit splits or unresolved questions

### Evidentiary Standards

| Element | Standard |
|---------|----------|
| Historical significance | National Register criteria A to D |
| Architectural integrity | Seven aspects (location, design, setting, materials, workmanship, feeling, association) |
| Economic hardship | Reasonable return analysis, maintenance cost evidence |
| Administrative appeals | Exhaust before judicial review in most jurisdictions |

### Emerging Trends (brief)

- Mid-century modern and recent-past preservation, Culturally significant sites beyond traditional architecture, Climate/sustainability integration with preservation

## Pitfalls

- **Overgeneralizing local rules** - flag state-by-state differences explicitly; never generalize from one jurisdiction
- **Binding vs. persuasive authority** - distinguish clearly when crossing jurisdictions
- **Unverified citations** - mark with `[VERIFY]`; cite all assertions to primary authority
- **Audience mismatch** - keep executive overview accessible to non-lawyers; use precise legal terminology in body
- **Neutrality** - acknowledge competing developer, agency, and advocate interests

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
