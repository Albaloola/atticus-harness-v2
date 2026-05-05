---
name: ediscovery-status-report
language: en
description: Generates a structured internal e-discovery status report tracking ESI from collection through attorney review. Covers custodian volumes, search term hit rates, review coding statistics, reviewer productivity, and projected timelines. Use when counsel, case managers, or clients need a progress report during the discovery phase of U.S. commercial litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# E-Discovery Status Report

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

Produces an attorney-work-product status report tracking ESI from collection through review for U.S. commercial litigation.

## Prerequisites

Gather before starting. Flag and caveat any gaps in the report.

1. **Vendor collection logs** - custodian names, item counts, GB volumes, file types, processing status
2. **Review platform exports** - document counts, reviewer IDs, coding dates, relevance/privilege/issue-tag designations
3. **Search term results** - hit counts per query, precision/validation sampling data if available
4. **Privilege log drafts** - finalized privilege assertions with custodian and document-type breakdowns

## Quick Start

1. Normalize custodian names across all sources into a single canonical list
2. Populate each report section using the templates below
3. Surface flags and anomalies at each stage
4. Mark final output: **ATTORNEY WORK PRODUCT, PRIVILEGED AND CONFIDENTIAL**

## Report Sections

### 1. Executive Summary

- Collection completeness status, Search strategy effectiveness (one sentence)
- Review progress % and projected completion date, Critical issues requiring immediate action

### 2. Collection Metrics by Custodian

| Custodian | GB Collected | Items | Email % | Office Doc % | Other % | Processing Status |
|-----------|-------------|-------|---------|-------------|---------|------------------|
| [Name] | [X.X] | [N] | [X%] | [X%] | [X%] | Complete / Pending / Error |

**Flags:**
- Volume >2× matter average → possible over-collection or key player, Unexpectedly low volume → incomplete collection risk, Processing error rate >5% by custodian or file type

**Validation:** Collected ≥ Processed ≥ Loaded ≥ Reviewed. Explain any downward discrepancy.

### 3. Search Term Performance

| Search Term / Boolean | Hits | Hit Rate (%) | Precision (if sampled) | Status |
|----------------------|------|-------------|----------------------|--------|
| [Term] | [N] | [X%] | [X%] | Keep / Refine / Drop |

**Flags:**
- Hit rate >30% → likely overbroad, Hit rate <0.5% → likely underperforming, High inter-term overlap → recommend consolidation, If precision data exists, project relevant yield from unreviewed hits

### 4. Review Progress

| Metric | Count | % of Loaded |
|--------|-------|------------|
| Loaded to platform | [N] | 100% |
| Reviewed | [N] | [X%] |
| Coded Relevant | [N] | [X%] |
| Coded Privileged | [N] | [X%] |
| Coded Non-Responsive | [N] | [X%] |
| Remaining | [N] | [X%] |

**Reviewer Productivity:**

| Reviewer | Docs Reviewed | Avg Docs/Hr | Relevance Rate | Privilege Rate |
|----------|--------------|-------------|---------------|---------------|
| [Name] | [N] | [X] | [X%] | [X%] |

- Flag coding patterns >15% above/below team average (QC concern)
- Note velocity trend: accelerating / decelerating / stable (weekly rolling avg)
- **Projected completion:** [Date] at [N] docs/day, state assumptions explicitly

### 5. Privilege Analysis

| Custodian | Docs Reviewed | Privilege Assertions | Privilege Rate |
|-----------|--------------|---------------------|---------------|
| [Name] | [N] | [N] | [X%] |

- Note whether overall privilege rate is within expected range for matter type, Break down privilege rate by document type (email vs. office docs vs. other)
- Flag custodians with rates >2× matter average for senior attorney QC

### 6. Recommendations & Timeline

- **Resource needs:** additional reviewers / vendor remediation / search refinement
- **Search adjustments:** specific terms to modify
- **QC actions:** reviewer-specific or category-specific
- **Risk items:** gaps, processing failures, tight deadlines
- **Milestones:** processing complete, first-pass review complete, privilege log ready (with dates)

## Pitfalls

- **Privilege substance leaks** - present privilege statistics in aggregate only; never reveal communication substance or attorney mental impressions
- **Adverse findings** - report collection gaps, QC failures, and search weaknesses without minimization so counsel can make informed decisions
- **Missing audit trail** - document how discrepancies were resolved and what validation steps were taken; the process may be challenged
- **Unstated assumptions** - all projections must explicitly state their underlying assumptions
- **Distribution control** - limit report distribution to litigation team members with case management need

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
