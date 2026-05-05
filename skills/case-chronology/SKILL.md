---
name: case-chronology
language: en
description: Produces U.S. litigation case chronologies with dated timelines, executive summaries, source attribution, gap analysis, and investigation recommendations. Use when asked for a chronology, timeline, case summary, or executive summary of a legal matter, or during case intake, deposition prep, or trial prep. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Case Chronology

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

Timeline-centered case summary that lets counsel grasp key facts, documents, and strategic inflection points fast.

## Prerequisites

1. Document set or defined subset (with source IDs or filenames).
2. Party list with roles (plaintiff/defendant/non-party).
3. Date range and any known anchor events.
4. Known claims/defenses or legal issues (if available).

## Quick Start

```
- [ ] Gather documents, party list, and date range
- [ ] Draft executive summary
- [ ] Build chronology table in strict date order
- [ ] Add cross-references between related entries
- [ ] Identify gaps and inconsistencies
- [ ] Write strategic analysis
- [ ] List recommendations for further investigation
```

## Output Structure

### 1. Executive Summary

- Matter type, core dispute, key parties.
- Timeline span (earliest to latest date).
- 3-6 pivotal events driving liability, damages, or defenses.

### 2. Chronology Table

One row per event or document, strict date order. Label approximate dates as `circa`, `approx`, or date range.

| Date | Event/Doc Type | Parties | Source | What Happened | Significance |
|---|---|---|---|---|---|
| YYYY-MM-DD | Email / Contract / Filing / Payment / Incident | A > B | Doc ID / Filename | 1-3 sentence factual summary | Liability/Damages/Defense impact |

### 3. Cross-References

Link related entries by date or source ID.

Example: "See 2024-03-02 (Doc 18) re: notice; follow-up 2024-03-12 (Doc 22)."

### 4. Issues and Gaps

- Missing documents expected for this matter type.
- Date inconsistencies or conflicting accounts.
- Unexplained timeline gaps.

### 5. Strategic Analysis

- Patterns, turning points, or admissions.
- Evidence strengthening or weakening key claims/defenses.

### 6. Recommendations

- Additional documents to request.
- Witnesses to interview or depose.
- Targeted discovery topics.

## Rules

- Factual, neutral tone. Separate facts from inferences.
- Source attribution on every entry.
- Flag uncertainty with `approx` or `unknown date` - never guess dates.
- All dates in ISO format `YYYY-MM-DD` for sorting.
- Call out missing routine records (notices, invoices, logs, filings).
- No legal conclusions unless directly supported by the record.
- If citing statutes or procedural rules, mark `[VERIFY]` when unsure.

---

**Key changes made:**

- **Removed `tags`** - not part of the Agent Skills spec (only `name` and `description` are required frontmatter).
- **Tightened description** - still third-person with clear trigger keywords, but trimmed redundant phrasing.
- **Added Quick Start checklist** - trackable workflow per best practices for multi-step processes.
- **Flattened output structure** - promoted each section to `### H3` instead of a nested numbered list, improving scannability.
- **Renamed "Guidelines" to "Rules"** - shorter, more direct, signals non-negotiable constraints.
- **Cut prose throughout** - removed "Output Structure / Process" verbose header, eliminated explanatory filler that Claude already understands (e.g., what a chronology is, what parties are).
- **Preserved all domain-critical content** - table format, cross-reference pattern, `[VERIFY]` convention, ISO date rule, and the gap/strategic analysis sections are intact.

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
