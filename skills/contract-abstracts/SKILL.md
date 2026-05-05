---
name: contract-abstracts
language: en
description: Generates structured contract abstracts distilling key terms, obligations, rights, and liabilities from agreements into a standardized reference. Flags ambiguities, non-standard provisions, and missing terms. Use when abstracting commercial contracts, NDAs, licensing agreements, M&A ancillaries, or any multi-page agreement requiring rapid comprehension, due diligence, or portfolio management. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Contract Abstracts

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

Produces a standardized abstract of a contract's material terms, reducing review time while preserving legal precision.

## Prerequisites

1. **Full contract document** - including exhibits, schedules, and amendments
2. **Contract type** - (e.g., SaaS, asset purchase, services, license) for market-standard flagging
3. **Audience** - legal, executive, or transaction team (affects emphasis)

## Quick Start

1. Populate the header block with identifying metadata
2. Write a 3 to 5 sentence executive summary of essential nature and critical terms
3. Abstract each material provision section-by-section (see categories below)
4. List all attachments and exhibits with one-line descriptions
5. Compile flags table for ambiguities, non-standard terms, and gaps

## Output Structure

### Header Block

| Field | Value |
|---|---|
| Agreement Title | |
| Execution / Effective Date | |
| Term | |
| Party A | Name, entity type, jurisdiction |
| Party B | Name, entity type, jurisdiction |
| Governing Law / Venue | |
| Contract Type | |

### Section-by-Section Abstract

For each material provision, capture:
- **§ Ref** - exact section number
- **Provision** - concise description using the contract's defined terms
- **Key Conditions** - dates, amounts, notice periods, thresholds

Abstract these categories in order:

1. **Subject Matter & Scope** - services/goods/license, exclusivity, territory, permitted use
2. **Financial Terms** - pricing, payment schedule, taxes, adjustments (CPI, earn-outs), penalties
3. **Performance Obligations** - deliverables, milestones, SLAs, acceptance criteria
4. **Reps & Warranties** - by each party (authority, compliance, IP, non-infringement); survival period
5. **Indemnification** - parties, covered claims, limitations, carve-outs, procedural conditions
6. **Liability** - cap amount/basis, excluded damages, exceptions to cap
7. **IP & Licensing** - background/foreground/derivative IP ownership, license grants, work-for-hire
8. **Confidentiality** - definition, obligations, exceptions, post-termination duration
9. **Term & Termination** - initial term, renewal mechanics, cause/convenience triggers, cure periods, wind-down effects
10. **Assignment & Change of Control** - consent requirements, triggers, remedies
11. **Dispute Resolution** - escalation mechanism, arbitration details, governing law, jurisdiction
12. **Non-Standard Provisions** - MFN, audit rights, insurance, force majeure; flag deviations with ⚠️

### Flags & Issues

| Type | § Ref | Description |
|---|---|---|
| ⚠️ Ambiguous | | |
| ⚠️ Non-standard | | |
| ⚠️ Missing term | | |
| ⚠️ Monitoring required | | |

## Pitfalls & Checks

- Use the contract's exact defined terms, do not paraphrase in ways that alter legal meaning, Enumerate multi-condition provisions as sub-elements preserving logical relationships, Note where governing definitions are located if not inline, Flag provisions requiring ongoing monitoring (notice deadlines, renewal windows, reporting)
- Do not render legal opinions, flag issues for attorney review, Scale length proportionally: simple agreements 1 to 2 pages, complex multi-party up to 4 pages, Default jurisdiction: US; note if foreign law governs any provision

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
