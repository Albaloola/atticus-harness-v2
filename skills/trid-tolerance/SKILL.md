---
name: trid-tolerance
language: en
description: Classifies closing costs into tolerance buckets under US Regulation Z (12 CFR § 1026.19(e)(3)) with Scotland/UK adaptation notes. Validates changed circumstances for revised Loan Estimates and computes cure amounts. Use when reviewing a Closing Disclosure against a Loan Estimate, calculating tolerance variances, or comparing US TRID practice with UK mortgage disclosure. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, compliance, mortgage, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# TRID Tolerance

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

Classifies fees into tolerance buckets, calculates CD-vs-LE variances, validates changed circumstances, and computes cure amounts under Regulation Z.

## Prerequisites

1. Loan Estimate (original + any revised, with dates)
2. Closing Disclosure (final or proposed)
3. Creditor's written list of service providers (shopped vs. unshopped classification)
4. Documentation of any changed circumstances

## Tolerance Categories

### Zero Tolerance (0%) - Cannot Increase

Any increase requires a valid changed circumstance and revised LE.

| Category | Examples |
|---|---|
| Creditor/broker fees | Origination, application, underwriting, processing, discount points, commitment, rate lock |
| Affiliate fees | Any fee paid to lender/broker affiliate (title, appraisal, etc.) |
| Transfer taxes | State/local transfer tax, mansion tax, documentary stamps |
| Services borrower cannot shop for | Appraisal (creditor-selected), credit report, flood determination, tax monitoring |

### 10% Cumulative Tolerance

The **aggregate total** of all 10% items on CD cannot exceed the aggregate total on LE by more than 10%.

| Category | Examples |
|---|---|
| Recording fees | Deed recording, mortgage/deed of trust recording |
| Shopped services (from lender's list) | Lender's title, settlement/closing, title search, survey, notary, pest, attorney |

If borrower chose a provider **not on lender's written list**, that fee shifts to unlimited tolerance.

### Unlimited Tolerance

May change freely; original LE must have been made in good faith.

- Prepaid interest, insurance premiums (homeowner's, flood, MI)
- Initial escrow deposits (taxes, insurance, MI, aggregate adjustment)
- Property costs not required by creditor (HOA, assessments, prepaid taxes)
- Services from a provider **not** on lender's list, Optional services (home warranty, optional owner's title, elective inspections)

## Variance Calculation

### Zero Tolerance

For each zero-tolerance fee: `Variance = CD Amount − LE Amount`

- Compliant: every variance ≤ $0
- Violation: any positive variance is the cure amount for that fee

### 10% Cumulative Tolerance

## Scotland/UK Adaptation

### Applicability, no direct US TRID equivalent
- **TRID is a US Regulation Z rule** (12 CFR § 1026.19(e)(3)) with no direct UK/Scottish equivalent. The **Mortgage Credit Directive** (MCD) / **Mortgage Credit Directive Order 2015** (SI 2015/910) is the closest UK equivalent for mortgage disclosure timing.
- However, the **tolerance framework** (zero/10%/unlimited categories) does **not exist** in UK mortgage regulation. Instead, UK mortgage disclosure relies on:
  - **European Standardised Information Sheet (ESIS)** - standard format prescribed by the Mortgage Credit Directive
  - **FCA Mortgage Conduct of Business (MCOB) rules** for disclosure timing, cost estimates, and good faith obligations
  - **Know Before You Owe** (KBYO) = ESIS disclosure (not LE/CD comparison)

### UK/Scottish equivalents

| US Concept | UK/Scottish Equivalent |
|---|---|
| TRID / Regulation Z / TILA-RESPA | Mortgage Credit Directive (MCD) / ESIS / FCA MCOB Rules |
| Loan Estimate (LE) | ESIS (European Standardised Information Sheet) - must be provided at least 7 days before completion (MCOB 5A.4) |
| Closing Disclosure (CD) | No separate closing disclosure, final mortgage offer sets out binding terms |
| Zero tolerance fees | No equivalent bucket, lender must honour quoted fees unless changed circumstance permits variation |
| 10% cumulative tolerance bucket | No equivalent aggregate tolerance, UK does not use tolerance categories |
| Unlimited tolerance items | Any fee can change only if (a) a valid change of circumstance, (b) consumer informed, and (c) updated ESIS provided |
| Changed circumstance | Valid variation, similar concept under MCD (e.g., change in property valuation, borrower circumstances, or product availability) |
| Cure amount / refund | If LE fees exceeded in ESIS: lender may be in breach of MCOB rules; FCA enforcement follows |
| Written list of providers | Lender's panel of conveyancers/solicitors is disclosed; no "shopped vs. unshopped" category |

### Key differences for practitioners
1. **No tolerance buckets**: UK/Scottish mortgage regulation does not use zero/10%/unlimited categories. The requirement is that the ESIS must be provided in good faith, and if costs change materially after issue, a revised ESIS must be issued (MCOB 5A.4.9R).
2. **No escrow**: Scottish mortgage lenders rarely hold property tax escrows, council tax is paid directly by the borrower. There is no equivalent of MIP (mortgage insurance premium) escrow.
3. **LBTT (Land and Buildings Transaction Tax)**: The Scottish equivalent of US transfer tax is LBTT (administered by Revenue Scotland). It is paid by the buyer, not the lender, and is never included in tolerance calculations.
4. **Disclosure timing**: The ESIS must be provided at least 7 days before the mortgage contract is concluded (MCOB 5A.4.6R). If documents are provided in person, the borrower can waive the 7-day period (notifiability waiver).
5. **No cure mechanism**: There is no TRID-style cure mechanism in UK law. If a lender exceeds a quoted cost, the borrower may have a contractual claim (misrepresentation or breach of contract) or a regulatory complaint to the Financial Ombudsman Service.
6. **GBP**: All costs, fees, and tolerance amounts should be in pounds sterling (£).
7. **Regulator**: The FCA supervises mortgage conduct. The Financial Ombudsman Service handles individual consumer complaints. No equivalent of the CFPB.
8. **Legal counsel**: The skill's tolerance-calculation workflow has limited application in Scotland, the relevant skill for Scottish mortgages would be "Mortgage Disclosure Compliance" analysing ESIS accuracy and MCOB compliance, not TRID tolerances.

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
