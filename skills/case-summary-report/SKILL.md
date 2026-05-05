---
name: case-summary-report
language: en
description: Synthesizes multiple case summaries into one unified Case Summary Report. Triggers when the user has two or more case summaries, document analyses, or memoranda and needs them consolidated into a single report with patterns, contradictions, and gaps identified. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Case Summary Report

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

Consolidate multiple case summaries, document analyses, or memoranda into a single unified report identifying patterns, contradictions, and gaps across all sources.

## Quick Start

Collect all source summaries the user wants consolidated. Confirm the preferred organization: by legal issue or by chronology.

## Workflow

1. **Inventory sources** - For each summary, record title, date, author, and scope in a source index table.
2. **Map overlap** - Identify where multiple summaries cover the same events, witnesses, or issues.
3. **Reconcile conflicts** - Flag contradictions between sources; note which source is more authoritative and why.
4. **Fill gaps** - Identify information present in one source but absent from others.
5. **Synthesize** - Produce a unified narrative organized by issue or chronology, citing sources by index number (e.g., [Source 1, p. 3]).

## Output Structure

### Source Index

| # | Title | Date | Author | Scope |
|---|-------|------|--------|-------|
| 1 | [Title] | [Date] | [Author] | [Coverage] |

### Unified Summary

Per issue or time period:
- Synthesized narrative citing all relevant sources, Flagged contradictions: "Source 1 states X; Source 3 states Y"
- Confidence level for contested facts

### Patterns and Themes, Recurring facts across summaries, Strengthening or weakening signals for case theories

### Contradictions and Gaps, Specific conflicts with source citations, Expected information absent from all sources, Recommended follow-up per gap

### Consolidated Recommendations, Merged, prioritized, de-duplicated action items and next steps

## Pitfalls

- **Source authority** - Do not treat all summaries as equally reliable. Note recency, author expertise, and underlying source quality.
- **Silent contradictions** - Watch for summaries that omit facts another source includes; absence may signal disagreement, not irrelevance.
- **Over-synthesis** - Preserve nuance from individual sources. Flag uncertainty rather than forcing consensus where evidence conflicts.

---

Key changes:
- **Description** tightened with explicit trigger guidance ("when the user has two or more…")
- Added **Quick Start** section for immediate orientation
- **Workflow** streamlined, same 5 steps, more concise phrasing
- **Output Structure** preserved but trimmed redundant template text, Added **Pitfalls** section covering source authority, silent contradictions, and over-synthesis, practical guardrails missing from the original, Removed prose repetition between the description and the body overview

I wasn't able to write the file due to permissions. Please grant write access and I'll save it, or you can copy the content above directly.

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
