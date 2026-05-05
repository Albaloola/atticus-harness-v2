---
name: client-advisory
language: en
description: Drafts client advisory memoranda translating legal developments into actionable guidance with impact analysis, Bluebook citations, and compliance recommendations. Use when preparing client alerts, regulatory updates, legal bulletins, or proactive advisory summaries. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Client Advisory Summary

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

Produces a professional advisory memorandum that translates recent legal developments into tailored client guidance with impact analysis and numbered action items.

## Prerequisites

- **Legal development(s)** - case law, statutory amendments, regulatory updates, agency guidance, or pending legislation
- **Client profile** - industry, jurisdiction(s), operations, and specific legal concerns
- **Client materials** (if available) - contracts, policies, prior advisories, compliance frameworks
- **Effective dates and deadlines** - time-sensitive compliance windows

## Quick Start

1. Gather inputs (developments, client profile, deadlines)
2. Draft header and executive summary
3. Analyze each development using the body framework below
4. Build the recommendations summary table
5. Run the drafting checklist before delivery

## Output Structure

### Header

| Field | Content |
|-------|---------|
| To | Client name / matter ID |
| From | Attorney / firm |
| Date | Date of preparation |
| Re | Concise subject line identifying development(s) |

### Executive Summary (2 to 3 paragraphs)

- Lead with the most critical development and its immediate implication, Write for a non-lawyer audience while preserving legal precision, State the bottom line: what changed, who is affected, what to do

### Body Sections (one per development)

For each development, address:

| Component | Content |
|-----------|---------|
| **Development** | What changed, statute, rule, holding, agency action |
| **Citation** | Full Bluebook citation; mark unverified cites `[VERIFY]` |
| **Effective Date** | When it takes effect |
| **Context** | Brief origin/purpose (1 to 2 sentences) |
| **Substantive Changes** | Bullet list of new requirements, standards, or rights |
| **Client Impact** | Effect on this client's operations, obligations, or rights |
| **Impact Horizon** | Immediate / Short-term / Long-term |
| **Impact Type** | Compliance obligation / Strategic opportunity / Risk exposure |
| **Recommendations** | Numbered action items with deadlines where applicable |

### Recommendations Summary Table

| # | Action Item | Deadline | Priority | Type |
|---|------------|----------|----------|------|
| 1 | ... | ... | High/Med/Low | Compliance/Strategic/Risk |

### Closing

- Note assumptions or limitations in the analysis, Flag areas requiring further fact-gathering, Include specific contact information for follow-up

## Drafting Checklist

- [ ] Every factual assertion tied to a cited source
- [ ] All citations Bluebook-formatted; uncertain cites marked `[VERIFY]`
- [ ] Cross-referenced client contracts/policies against new requirements
- [ ] Jargon defined on first use or replaced with plain language
- [ ] Concrete examples illustrating impact on client's actual operations
- [ ] All deadlines and effective dates explicitly stated
- [ ] Recommendations are specific and actionable (not "consider reviewing")

## Pitfalls

- **Speculation**: Distinguish enacted law from proposed/pending changes; label each clearly
- **Jurisdiction**: Default US; flag state-specific variations where federal and state law diverge
- **Unconfirmed facts**: If analysis depends on unverified client facts, state assumptions explicitly
- **Length**: Target 2 to 5 pages; bias toward concision
- **Visual aids**: Use comparison tables for before/after changes and timelines for phased implementation

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
