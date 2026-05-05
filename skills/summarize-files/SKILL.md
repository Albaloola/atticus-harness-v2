---
name: summarize-files
language: en
description: Generates structured summaries of legal documents (contracts, pleadings, correspondence, transactional materials). Triggers when the user asks to summarize case files, agreements, pleadings, or any legal materials for review, onboarding, or status reporting. [Atticus UK/Scots refined]
tags:
- agreement, litigation, pleading, summarization, summary, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Summarize Legal Documents

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

Produce standalone, structured summaries of one or more legal documents for professional reference.

## Quick Start

1. Receive one or more legal files (contracts, pleadings, correspondence, transactional docs).
2. Read all uploaded content exhaustively, never sample or skip sections.
3. Classify each document, extract key data, and output the summary using the template below.

## Workflow

### 1. Classify Document Type

| Type | Analysis Focus |
|---|---|
| Contract / Agreement | Parties, obligations, terms, defined terms, reps & warranties, conditions precedent, dispute provisions |
| Pleading | Causes of action, factual allegations, relief requested, procedural posture, legal authority |
| Correspondence | Negotiation positions, admissions, strategic signals, communication timeline |
| Transactional | Deal structure, consideration, reps & warranties, closing conditions, indemnification |

### 2. Extract Key Data

From every document, capture:
- Parties (full legal names, roles)
- Key dates and deadlines, Monetary amounts and consideration, Claims, defenses, or obligations, Legal authority cited, Exhibits, attachments, referenced materials, Defined terms (use consistently throughout)
- Ambiguities or internal conflicts

### 3. Output Summary

```
# Summary: [Document Title / Subject Matter]
Date of Summary: [date]

## Overview
[Type, parties, fundamental purpose - 2-3 sentences]

## Key Parties
[Table or list: name, role, relationship]

## Substantive Summary
[Organized by logical sections mirroring the source structure]

## Key Terms and Conditions
[Dates, deadlines, amounts, obligations, use tables where appropriate]

## Notable Issues
[Ambiguities, conflicts, missing information, concerns]

## Source Attribution
[For multi-file summaries: which document each key fact derives from]
```

## Pitfalls and Checks

- **Completeness over brevity** - never omit material information; flag conflicts rather than resolving by assumption.
- **Source attribution** - cite which document each significant fact comes from, especially across multiple files.
- **Preserve precision** - retain qualifications, limitations, and conditions; use defined terms as defined in the source.
- **Proportional length** - target 70-90% reduction while retaining all material information.
- **No legal conclusions** - summarize positions as presented; do not evaluate merits or predict outcomes.
- **Readability** - bold party names and key terms; use tables for claims, obligations, or chronological events.

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
