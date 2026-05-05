---
name: transactional
language: en
description: Routes and governs transactional legal work-contracts, deals, and business formations. Covers M&A, real estate, financing, franchise, employment, asset purchase, estate planning, IP licensing, and commercial leasing. Triggers on any transactional matter, deal structuring, contract drafting, or entity formation task. [Atticus UK/Scots refined]
tags:
- research, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Transactional Practice

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

Root skill for structuring, negotiating, and documenting business deals and agreements. Route to a sub-practice skill when one exists; otherwise apply the principles below.

## Quick Start

1. Identify the transaction type from the routing table below.
2. Confirm governing law, choice of forum, and notice provisions.
3. Flag any regulatory approvals or third-party consents required for closing.
4. Apply core drafting principles throughout.

## Sub-Practice Routing

| Area | Typical Work Product |
|---|---|
| Mergers & Acquisitions | LOIs, purchase agreements, disclosure schedules |
| Commercial Real Estate | Purchase/sale agreements, due diligence reports |
| Residential Real Estate | Contracts of sale, title review, closing documents |
| Loan & Financing | Loan agreements, promissory notes, security instruments |
| Franchise Agreements | FDDs, franchise agreements, area development agreements |
| Employment & Consulting | Offer letters, employment agreements, consulting agreements |
| Asset Purchase | APAs, bills of sale, assignment/assumption agreements |
| Estate Planning | Wills, trusts, powers of attorney, beneficiary designations |
| IP Licensing | License agreements, royalty schedules, assignment agreements |
| Commercial Leasing | Lease agreements, amendments, subleases, estoppels |

## Core Drafting Principles

- **Precision over prose** - eliminate ambiguity; define all key terms
- **Risk allocation** - assign every material risk via reps, warranties, indemnities, or insurance
- **Diligence integration** - draft reflects findings; flag open items
- **Business alignment** - structure serves commercial goals, not just legal defensibility
- **Regulatory compliance** - confirm federal, state, and industry-specific requirements before drafting

## Pitfalls

- Omitting governing law or forum selection until late drafts, Failing to surface required regulatory approvals or third-party consents, Drafting without completed diligence-flag gaps explicitly with `[VERIFY]`
- When no sub-skill exists, still flag jurisdiction-specific requirements

---

Key changes from the original:

- **Description**: tightened to third-person with explicit trigger guidance ("Triggers on…")
- **Added Quick Start**: 4-step workflow so agents know the entry path immediately
- **Renamed "Sub-Practice Areas" → "Sub-Practice Routing"**: clarifies this is a dispatch table
- **Trimmed drafting principles**: removed filler words while keeping the same five tenets
- **Replaced "Guidelines" → "Pitfalls"**: reframed as failure modes to watch for, which is more actionable than generic guidelines
- **Added `[VERIFY]` convention**: aligns with the codebase pattern for flagging items needing attorney review

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
