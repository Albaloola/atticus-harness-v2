---
name: legal-research
language: en
description: Guides legal research from issue framing through authority collection, jurisdiction scoping, source prioritization, synthesis, and pre-filing updates. Use when planning or auditing legal research, building a research trail, developing rule statements, comparing authorities, or updating citations before filing. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Research

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

Repeatable workflow for researching a legal issue, prioritizing controlling authority, and documenting a filing-ready research trail.

Use this skill for the overall research process.

Use `authority-verification` when the task specifically requires citation verification, source retrieval, or case.dev-based authority checks.

## Quick Start

1. Frame the legal question as one issue at a time.
2. Identify jurisdiction, court level, and governing instruments.
3. Collect primary authority first.
4. Expand to persuasive and secondary authority only where needed.
5. Synthesize the rule, competing authorities, and factual application.
6. Recheck authorities immediately before filing.

## Core Workflow

### 1. Frame the issue

Define:

- legal question, elements or standards, requested relief, factual assumptions that matter to the answer

### 2. Scope the forum

Identify:

- governing jurisdiction, controlling court level, procedural posture, any local rules or standing orders that affect the analysis

### 3. Collect primary authority

Start with:

- constitutions, statutes, regulations, controlling cases, local rules

### 4. Expand outward

Use persuasive authority and secondary sources to:

- fill doctrinal gaps, compare competing approaches, confirm terminology, identify additional primary sources

### 5. Synthesize

Produce:

- rule statement, authority hierarchy, factual analogies, risks, splits, and counterarguments, open questions requiring more research

### 6. Update before filing

Before relying on the work product:

- recheck the controlling authorities, confirm current statutory and regulatory text, confirm local rules, record the date of the final update

## Research Trail

Always preserve:

- search query or issue label, source consulted, why the source matters, jurisdiction and court level, date checked, unresolved questions

## Pitfalls

- Starting with secondary sources and never tracing back to primary authority.
- Mixing binding and persuasive authority without labeling the difference.
- Ignoring procedural posture or standard of review.
- Omitting adverse authority.
- Treating stale research as filing-ready.

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
