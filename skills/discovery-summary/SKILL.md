---
name: discovery-summary
language: en
description: Generates structured, citeable summaries of discovery documents (interrogatories, RFPs, RFAs, depositions, productions). Extracts admissions, inconsistencies, evidentiary gaps, and objections with precise source citations. Use when summarizing discovery responses, preparing for depositions, identifying discovery gaps, or building trial preparation materials. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Discovery Document Summarization

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

Produces a structured summary of discovery materials with precise citations for trial preparation and case strategy. Applies regardless of which side the user represents.

## Prerequisites

- **Discovery documents** - interrogatory responses, RFP responses, RFA answers, deposition transcripts, produced documents
- **Case context** - claims, defenses, key issues, parties
- **Citation sources** - Bates ranges, response numbers, or transcript page:line references

## Quick Start

1. Identify discovery types present in the materials
2. Produce the four-part output structure below
3. Cite every factual assertion to a specific source

## Output Structure

### 1. Executive Overview

3 to 5 paragraph narrative covering:

- Significant admissions or revelations, Key documents or testimony, Inconsistencies across responses, Notable refusals, evasions, or privilege assertions, Critical evidentiary gaps

### 2. Discovery Breakdown

Organize by discovery type or by claim/issue, whichever better serves the matter.

Per section, include a header block:

| Field | Detail |
|---|---|
| Discovery Type | Interrogatories / RFP / RFA / Deposition |
| Requesting Party | {name} |
| Responding Party | {name} |
| Date(s) | {response date(s)} |

Then summarize:

- **Admissions** - quote or paraphrase with exact citation
- **Produced documents** - description, Bates range, relevance (1 to 2 sentences)
- **Objections** - type and whether it blocked material disclosure
- **Evasive/incomplete responses** - what specifically was avoided

### 3. Cross-Reference Analysis

| Topic/Fact | Source A (cite) | Source B (cite) | Consistent? | Notes |
|---|---|---|---|---|
| {fact} | {cite} | {cite} | Yes/No | {discrepancy detail} |

### 4. Outstanding Discovery Issues

- [ ] Incomplete responses requiring follow-up (list by response number)
- [ ] Objections warranting meet-and-confer or motion to compel
- [ ] New custodians or document sources identified in testimony
- [ ] Areas where supplemental requests are warranted
- [ ] Privilege log deficiencies

## Pitfalls and Checks

- **Cite everything** - every assertion needs a response number, Bates stamp, or page:line
- **Stay objective** - no legal conclusions; flag apparent evasion but let attorneys draw conclusions
- **Sufficient detail** - attorneys should be able to work from the summary without pulling underlying documents for routine tasks
- **Flag patterns** - systematic objection strategies, coordinated non-responses, recurring privilege claims
- **Navigation** - include a table of contents when materials span 3+ discovery categories or 10+ responses

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
