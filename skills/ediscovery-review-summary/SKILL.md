---
name: ediscovery-review-summary
language: en
description: Produces an internal U.S. litigation e-discovery status summary covering ESI collection, processing, search-term hits, review throughput, relevance and privilege rates, and completion forecasts. Triggers when the user requests an e-discovery status report, collection log summary, processing report, review statistics, coding report, search-term results, or privilege review summary. [Atticus UK/Scots refined]
tags:
- litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# E-Discovery Collection & Review Summary

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

Internal status report tracking ESI from collection through attorney review, with completion projections.

## Prerequisites

- Custodian list with collection scope (systems, date ranges, locations)
- Collection logs and processing reports from vendor, Review platform exports (coding, reviewer activity, search-term results)
- Search-term list or Boolean queries, Review protocol (relevance, privilege, issue tags) and QC standards, Key deadlines the review must meet, Protective order or confidentiality requirements for reporting

## Quick Start

1. Gather source data (collection logs, processing reports, review exports, search-term results, privilege summaries).
2. Normalize custodian names into a master mapping table.
3. Run integrity checks, pipeline totals must satisfy: Collected ≥ Processed ≥ Loaded ≥ Reviewed.
4. Compute core metrics tables (see below).
5. Draft executive summary with risks and recommendations.
6. Apply work-product legend.

## Core Metrics

### A. Collection & Processing by Custodian

Per custodian: Collected GB, Item Count, Processed %, Load Failures, File-Type Mix, Exceptions.

### B. Search-Term Effectiveness

Per term/query: Hits, Hit Rate %, Sample Precision %, Overlap %, Recommended Action.

### C. Review Status (Matter-Level)

Total Reviewable, Reviewed Count, % Reviewed, Relevant %, Privileged %, Non-Responsive %, Est. Completion Date.

### D. Reviewer Productivity

Per reviewer/team: Docs Reviewed, Hours, Docs/Hour, Relevant %, Privileged %, QC Rate %.

### E. Privilege Patterns

Per custodian: Privileged %, Dominant Doc Types, Red Flags.

## Key Formulas

| Metric | Formula |
|---|---|
| Hit Rate % | hits ÷ total reviewable corpus |
| Precision % | relevant hits ÷ sampled hits |
| Review Velocity | docs reviewed ÷ time period |
| Completion ETA | remaining docs ÷ current velocity |
| Privilege Rate % | privileged ÷ reviewed |

## Executive Summary Template

- **Collection completeness** - status and anomalies
- **Processing health** - success rate and key errors
- **Search-term performance** - top/weak terms and overlap
- **Review progress** - reviewed %, relevance %, privilege %
- **Forecast** - ETA with assumptions
- **Risks & actions** - top three items

## Integrity Checks

- Custodian names align across all sources (master mapping table).
- Pipeline totals are monotonically decreasing through each stage.
- Every search term in the term list appears in the results export.
- Coding records contain reviewer, date, relevance, and privilege fields.
- Processing errors are reconciled against re-runs.

## Findings & Recommendations

- List missing sources and resulting limitations.
- Flag custodians with outlier volumes or error rates.
- Identify low-precision or high-overlap search terms.
- Note reviewer inconsistencies and QC actions taken.
- Recommend resource changes or search-term refinement.
- Document assumptions and gaps with impact and mitigation.

## Pitfalls

- Report only aggregate metrics, never disclose privileged content.
- If counts conflict, surface the discrepancy and state the suspected cause.
- Use U.S. discovery terminology; confirm local rules before external distribution.
- Mark uncertain legal citations with `[VERIFY]`.
- Keep narrative neutral and data-driven; avoid strategy conclusions.
- Always include: "Attorney Work Product / Privileged & Confidential. Internal use only."

---

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
