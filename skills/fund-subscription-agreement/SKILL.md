---
name: fund-subscription-agreement
language: en
description: 'Drafts U.S. investment fund subscription agreements aligned to PPM/LPA terms and securities law compliance. Use when preparing subscription documents for private equity, venture capital, hedge, real estate, or other private funds. Covers accredited investor reps, transfer restrictions, risk acknowledgments, KYC/AML conditions, and acceptance mechanics. Trigger: subscription agreement, investor questionnaire, PPM, LPA, accredited investor, Reg D, capital commitment. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Fund Subscription Agreement

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

Drafts a fund subscription agreement consistent with offering documents and U.S. private offering compliance (Reg D).

## Prerequisites

1. **Formation docs**: PPM, LPA/LLC agreement, GP/manager entity details, side letter policy
2. **Offering terms**: classes/series, minimums, pricing, closings, acceptance authority, capital call mechanics
3. **Investor data**: legal name, entity type, address, tax status, signatory authority
4. **Compliance inputs**: KYC/AML checklist, W-9/W-8, accreditation evidence, OFAC screening status
5. **Governing law** and dispute forum preferences
6. **Signature method**: wet ink or e-sign; entity signature block requirements

## Quick Start

1. Collect intake fields (see table below)
2. Mirror all terminology and definitions from the PPM and LPA/LLC agreement
3. Draft sections in document outline order
4. Tag unconfirmed statutory citations with `[VERIFY]`
5. Attach required exhibits

## Intake Fields

| Field | Required | Source |
|---|---|---|
| Fund legal name, entity type, jurisdiction | Yes | Formation docs |
| Manager/GP name and address | Yes | Formation docs |
| Offering class/series (rights, fees) | Yes | PPM |
| Minimum subscription (waiver authority) | Yes | PPM |
| Subscription amount (USD, units/shares) | Yes | Investor input |
| Pricing mechanics (NAV date, unit price) | Yes | PPM |
| Acceptance authority (GP/manager/committee) | Yes | LPA/LLC |
| Capital calls (drawdown schedule, notice) | If applicable | LPA/LLC |
| Transfer restrictions (consent, lockups) | Yes | LPA/LLC |
| Governing law, forum | Yes | Client preference |

## Document Outline

1. Parties and Recitals
2. Definitions (align to fund docs)
3. Subscription Terms
4. Acceptance and Admission
5. Investor Representations and Warranties
6. Risk Acknowledgments
7. KYC/AML and Tax Compliance
8. Conditions Precedent
9. Payment Mechanics and Closing
10. Transfer Restrictions
11. Miscellaneous (notices, amendments, assignment, integration, severability, waiver)
12. Signature Blocks and Exhibits

## Core Sections

### Subscription Terms

- Subscription amount in USD; number and class of units/shares, Price per unit/share and valuation date, Commitment amount and drawdown structure (if applicable)
- Minimums, maximums, oversubscription handling, Fund right to reject or reduce; binding only upon written acceptance

### Investor Representations

- Accredited investor status under Regulation D `[VERIFY]`
- Investment intent; no distribution plan, Securities unregistered; transfer restrictions acknowledged, Illiquidity and total loss risk accepted, Sophistication; reliance on own advisors, Authority and capacity to sign and perform, No disqualifying events for private offerings `[VERIFY]`
- Source of funds lawful; not from prohibited activities

### Risk Acknowledgments

- Market/strategy risk; potential loss of entire investment, Illiquidity, lockup, transfer limits, Dependence on manager/GP and key persons, Conflicts of interest and related-party transactions, Regulatory, tax, and valuation uncertainty

### Conditions Precedent

- Completed and accurate subscription documents, KYC/AML and OFAC clearance, W-9/W-8 and tax certifications received, Accreditation verification (if required by offering)
- Written acceptance by GP/manager

### Payment Mechanics

- Method: wire, check, or in-kind (if permitted)
- Wire instructions and payment deadline, Failed payment / insufficient funds treatment, Admission timing: on acceptance or at closing, Confirmation of ownership interest delivery

### Exhibits

- Investor Questionnaire, Accredited Investor Verification (if used)
- Beneficial Ownership Certification (if required) `[VERIFY]`
- Tax Forms (W-9/W-8)
- Entity Authority Certificate or incumbency

## Pitfalls and Checks

- **Never contradict fund docs**: transfer restrictions and admission criteria must match the LPA/LLC
- **Written acceptance required**: no admission without GP/manager written acceptance
- **E-sign**: confirm permitted; align to ESIGN/UETA
- **Broker-dealers**: if involved, add compliance representations `[VERIFY]`
- **Blue sky**: flag jurisdiction-specific filing or exemption requirements
- **`[VERIFY]` tag**: use on any statutory or rule citation not confirmed by source documents

---

**Key changes from the original:**

- **Removed `tags`** from frontmatter (not part of the spec's required fields)
- **Tightened description** - third-person, includes trigger keywords, stays under 1024 chars
- **Added Quick Start** section for immediate orientation
- **Consolidated the intake table** - removed the Notes column, folded key notes into the Field column as parentheticals for token savings
- **Renamed "Output Structure / Process"** to flat, scannable headings (`Core Sections`, `Document Outline`)
- **Removed the redundant "Subscription Terms Block" / "Investor Representations Checklist"** heading patterns, replaced with concise subsections under `Core Sections`
- **Renamed "Guidelines"** to **"Pitfalls and Checks"** - bolded the key constraint in each bullet for quick scanning
- **Reduced overall line count** from 128 to ~100 while preserving every legal requirement and checklist item

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
