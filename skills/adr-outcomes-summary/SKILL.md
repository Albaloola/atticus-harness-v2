---
name: adr-outcomes-summary
language: en
description: Generates structured summaries of mediation and arbitration proceedings, extracting outcomes, settlement terms, monetary amounts, obligations, releases, and enforcement steps. Trigger when the user needs to document mediation settlements, arbitration awards, or partial ADR resolutions from transcripts, agreements, mediator reports, or awards. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# ADR Outcomes Summary

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

Produces a structured summary of mediation or arbitration proceedings for client communication, internal records, and enforcement reference.

## Quick Start

Collect before drafting:
1. Source document, transcript, settlement agreement, MOU, mediator report, or arbitration award
2. Party names and representatives
3. Underlying dispute and procedural history
4. Any confidentiality agreements governing the ADR process

## Workflow

### Step 1 - Executive Overview

2 to 3 sentences stating: settled or awarded, primary terms, binding status.

### Step 2 - Background Table

| Field | Details |
|---|---|
| Parties | Names and roles (claimant / respondent) |
| Representatives | Counsel and party contacts |
| Neutral | Mediator or arbitrator, credentials |
| Session Date(s) | Dates and location |
| Dispute | Brief claim description |
| ADR Trigger | Clause, court order, or stipulation |

### Step 3 - Substantive Outcomes

**Mediation settlements** - extract each:
- Payment amounts and schedules (exact figures, due dates, method)
- Performance obligations with deadlines, Release scope (claims released, parties covered, carve-outs)
- Confidentiality provisions (scope, duration, exceptions)
- Non-disparagement, non-admission, or reservation-of-rights clauses, Ongoing relationship or future-dealings terms

**Arbitration awards** - extract each:
- Claims and counterclaims addressed, Findings of fact and legal standards applied, Relief granted or denied per issue, Damages (compensatory, punitive, fees, interest, costs)
- Appeal or modification rights and deadlines, Enforcement mechanism (FAA confirmation, state equivalent) - VERIFY applicable statute

**Unresolved issues** - list claims explicitly reserved, deferred, or left open.

### Step 4 - Next Steps Table

| Action | Responsible Party | Deadline |
|---|---|---|
| Execute formal settlement documents | [Party] | [Date] |
| Payment / performance | [Party] | [Date] |
| Court filing / dismissal / judgment entry | [Counsel] | [Date] |
| Compliance monitoring | [Party/Neutral] | [Ongoing] |

Flag whether court approval is required before the agreement takes effect.

## Pitfalls and Checks

- **Binding vs. non-binding** - distinguish enforceable arbitration awards (FAA or state statute) from mediation MOUs requiring full execution
- **Confidentiality** - flag ADR confidentiality scope prominently; omit protected mediation communications beyond the audience's authorization
- **Precision** - use exact dollar amounts, dates, and party names; no vague references
- **Objectivity** - present compromises neutrally; do not editorialize on outcome quality
- **Partial resolutions** - clearly delineate resolved vs. unresolved issues to avoid overstating scope
- **Jurisdiction** - US-focused; note when state-specific arbitration statutes (vs. FAA) govern enforcement

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
