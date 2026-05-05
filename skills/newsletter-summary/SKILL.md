---
name: newsletter-summary
language: en
description: Produces concise, actionable U.S. legal newsletter summaries of recent developments organized by practice area. Use when asked for a legal news digest, weekly/monthly client update, regulatory roundup, case law summary, compliance news bulletin, or internal legal awareness memo. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Newsletter Summary

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

Scannable digest of recent legal developments with headlines, impact analysis, action items, and citations.

## Quick Start

Before drafting, confirm:

- **Audience & tone** - internal ops, client-facing, or executive
- **Practice areas & jurisdictions** - scope of coverage
- **Time window** - default 7 to 14 days unless specified
- **Exclusions** - e.g., skip minor procedural updates

## Workflow

### 1. Research & Source Capture

Source priority (use highest available tier):

1. **Primary law** - court opinions, statutes, regulations, agency orders
2. **Official guidance** - agency FAQs, enforcement releases, advisories
3. **Bar/industry** - bar updates, reputable legal publications

For each item capture: title, date, jurisdiction, authority, direct citation, link if available.

### 2. Triage & Rank

Score each item on:

- **Impact** (High / Medium / Low)
- **Urgency** (Immediate / Near-term / Watch)
- **Scope** (Broad / Sector-specific / Narrow)
- **Novelty** (New rule / Major shift / Split / Clarification)

Prioritize: new compliance obligations > binding appellate decisions > enforcement trends > upcoming deadlines.

### 3. Draft Items (75 to 200 words each)

Each item follows this structure:

- **Headline** - 8 to 14 words, action-oriented
- **What Happened** - 1 to 3 factual sentences
- **Why It Matters** - 1 to 3 sentences on practice/client impact
- **Action Items** - concrete bullet steps
- **Details** - court/agency, jurisdiction, effective date, citation(s)

Order within each section: urgent first, then high-impact, then emerging trends.

### 4. Assemble

```
# Legal Newsletter Summary
**Coverage Window:** {start}-{end}
**Jurisdictions:** {list}
**Practice Areas:** {list}

## {Practice Area / Theme}
### {Headline}
**What Happened:** ...
**Why It Matters:** ...
**Action Items:**
- ...
**Details:** Court/Agency · Jurisdiction · Effective Date · Citation(s)

## Watchlist / Upcoming
- {Pending appeals, comment periods, scheduled arguments}
```

## Citations

- Bluebook-style for cases (include court and year) and statutes (include code section and amendment date)
- Mark unconfirmed citations as `[VERIFY]`

## Pitfalls

- **No editorializing** - verifiable facts and implications only
- **Never copy source text** - summarize the underlying legal development
- **Always flag deadlines** - effective dates and compliance windows must be explicit
- **Note conflicting authority** - circuit splits, agency disagreements
- **No updates?** - state "No material updates in the covered period"
- U.S.-focused unless user specifies otherwise

---

Key changes from the original:

- **Frontmatter**: Trimmed description to focus on what it does + clear triggers; removed `tags` (not part of the spec)
- **Structure**: Reorganized from 7 numbered subsections into 4 clean workflow steps with Quick Start, Workflow, Citations, and Pitfalls sections
- **Reduced redundancy**: Merged the separate "Intake & Scoping" and "Prerequisites" into a single Quick Start; collapsed the source hierarchy table into a numbered list; consolidated citation rules and guidelines into focused sections
- **Token savings**: Cut from 125 lines to ~75 lines (~40% reduction) while preserving all domain-critical content, source tiers, triage dimensions, item template fields, assembly format, Bluebook citation rules, and `[VERIFY]` convention

It looks like the file write permission hasn't been granted yet. Would you like to approve the write so I can save this to disk?

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
