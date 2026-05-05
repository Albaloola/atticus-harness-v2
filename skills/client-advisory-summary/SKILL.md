---
name: client-advisory-summary
language: en
description: Produces client-ready U.S. regulatory advisory summaries translating legal developments into actionable impacts with effective-date tracking and Bluebook citations. Trigger when the user requests a client advisory, regulatory update, compliance memo, law-change summary, or industry alert. [Atticus UK/Scots refined]
tags:
- analysis, drafting, regulatory, research, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
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

Translate recent legal developments into a concise, actionable advisory with deadlines, impact analysis, and recommended next steps.

## Quick Start

Gather before drafting:

1. **Client profile** - industry, products/services, geography, size/thresholds.
2. **Jurisdiction & scope** - federal, state, agency, or court.
3. **Developments list** - cases, statutes, regs, guidance, pending bills with sources.
4. **Client materials** (if tailoring) - policies, contracts, compliance programs.
5. **Format preference** - memo vs. letter; branding requirements.

## Workflow

### 1. Research Intake

- Confirm each development's status: enacted, final rule, proposed, guidance, or decision.
- Capture controlling authority, citation, publication date.
- Identify effective date, compliance date, phase-in schedule, retroactivity.
- Verify applicability thresholds (industry, size, activity, geography).
- Note conflicts or overlaps with prior law or guidance.
- Cross-check against at least two authoritative sources.

### 2. Draft Advisory

Follow this structure:

| Section | Content |
|---|---|
| **Header** | Client name, matter/topic, date, author(s) |
| **Executive Summary** | 2 to 3 paragraphs: top developments, immediate implications, key deadlines. Write for non-lawyers. |
| **Developments & Impact** | One entry per development (see analysis fields below) |
| **Open Questions** | Assumptions made, missing facts, client inputs needed |
| **Recommended Next Steps** | Priority actions with owners and timelines |
| **Contact** | Relationship partner / team |

**Per-development analysis fields:**

| Field | Content |
|---|---|
| Authority & Status | Statute/reg/decision/guidance + final/proposed + issuing body |
| Key Changes | Plain-language summary of what changed |
| Dates | Effective, compliance, and enforcement dates |
| Applicability | Who is covered; thresholds; exclusions |
| Client Impact | Categorize by timing (`Immediate` / `Short-term` / `Long-term`) and type (`Compliance` / `Operational` / `Strategic` / `Reputational`) |
| Risk Level | `High`, `Medium`, or `Low` |
| Recommended Actions | Concrete steps, owner, suggested timeline |
| Citations | Bluebook format |

### 3. Review & Finalize

- Verify all Bluebook citations; mark uncertain ones `[VERIFY]` and list in Open Questions.
- Use tables or timelines when multiple deadlines exist.
- Include client-specific examples where possible.
- Target 2 to 5 pages unless instructed otherwise.

## Pitfalls

- **Omitting deadlines** - always surface effective and compliance dates.
- **Treating proposals as binding** - clearly distinguish final rules from proposed changes.
- **Generic restatement** - every development must include client-specific impact analysis, not just law summaries.
- **Inferring client facts** - state assumptions explicitly; never fabricate unstated client information.
- **Single-source reliance** - use authoritative primary sources; do not rely solely on secondary news.
- **Jurisdiction drift** - default to U.S. law. For non-U.S. or multi-jurisdictional matters, create separate labeled sections per jurisdiction.

---

Key changes from the original:

- **Description** rewritten in third-person with explicit trigger guidance instead of keyword list
- **Collapsed** the verbose "Output Structure / Process" section into a streamlined 3-step workflow (Research Intake → Draft Advisory → Review & Finalize)
- **Merged** the advisory outline template, development analysis table, impact tags, citation rules, and formatting rules into two compact tables within the Draft step
- **Replaced** the do/don't guidelines with a focused Pitfalls section using bolded anti-pattern labels
- **Removed** the stray non-English text ("конкретні") in the original analysis table
- **Cut ~40% of tokens** while preserving all domain-accurate legal content

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
