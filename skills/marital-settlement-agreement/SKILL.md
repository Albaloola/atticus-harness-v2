---
name: marital-settlement-agreement
language: en
description: Drafts Marital Settlement Agreements for divorce proceedings covering property division, spousal support, child custody, and enforceability provisions. Triggers on requests to draft MSAs, divorce settlement agreements, property settlement agreements, or marital dissolution contracts. [Atticus UK/Scots refined]
tags:
- agreement, drafting, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Marital Settlement Agreement

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

Drafts a binding MSA resolving all divorce issues, property, support, custody, ready for court approval and incorporation into the final decree.

## Prerequisites

Gather before drafting:

1. **Financial disclosures** - income statements, tax returns, account statements for both parties
2. **Property docs** - appraisals, deeds, titles, retirement statements, business valuations
3. **Debt records** - creditor statements with account numbers and balances
4. **Custody materials** - evaluations, existing parenting plans, school/medical records
5. **Prior agreements** - prenuptial agreements, temporary orders, mediation outcomes
6. **Jurisdictional info** - filing state, county, case number, community vs. equitable property regime

## Workflow

### Step 1 - Property Division (Article I)

**Marital Property Schedule** - itemize each asset:

| Column | Content |
|---|---|
| Asset description | Real property, accounts, vehicles, retirement, business interests |
| Identifier | APN, account #, VIN, plan #, EIN |
| FMV / Balance | Dollar value at valuation date |
| Awarded to | Receiving party |
| Notes | Encumbrances, buyout terms, QDRO needed, valuation method |

**Marital Debt Schedule** - itemize each debt: creditor, account #, balance, responsible party, hold-harmless obligation.

**Separate Property Confirmation** - list each party's separate property (pre-marital, gift, inheritance) with mutual disclaimer of interest.

### Step 2 - Spousal Support (Article II)

Draft one of:

**A. Support ordered** - specify: monthly amount, due date/method, duration, modifiability, step-down schedule, COLA, termination events (death, remarriage, cohabitation), tax treatment (post-TCJA: non-deductible/non-includable federally).

**B. Mutual waiver** - explicit knowing waiver of all current and future support rights with acknowledgment of consequences.

### Step 3 - Children (Article III)

**Custody & Parenting Plan:**
- Legal custody, joint/sole; decision domains (education, healthcare, religion)
- Physical custody, primary placement, weekday/weekend rotation, Holiday/vacation schedule, odd/even alternation, notice requirements, Transportation, communication with non-custodial parent, Relocation, notice period, mileage threshold, consent/court approval, Attach detailed parenting plan as exhibit

**Child Support:**
- Monthly amount with guideline calculation per state formula, Health insurance responsibility and cost allocation, Uninsured medical and childcare cost splits, Duration (age of majority / HS graduation per state law)
- Post-secondary contribution terms if agreed, Modification standard (material change in circumstances)

### Step 4 - General Provisions (Article IV)

Include all:
- **Mutual releases** - all claims except those preserved in this agreement
- **Representations** - full disclosure, opportunity for independent counsel (or knowing waiver), voluntary execution, fairness acknowledgment
- **Attorney's fees** - each bears own; prevailing party in enforcement recovers fees
- **Dispute resolution** - mediation before litigation; specify enforcement jurisdiction
- **Severability**, **governing law**, **integration**, **amendments** (written, signed by both)

### Step 5 - Execution Block

Include signature lines for both parties with dates, approval-as-to-form lines for counsel, and notary acknowledgments if required by local rules.

## Pitfalls

- **Regime mismatch** - confirm community property vs. equitable distribution; adapt division framework
- **Child support math** - always show state guideline calculation; courts reject unexplained deviations
- **Child support is non-waivable** - courts will not enforce waiver of a child's right to support
- **QDRO requirement** - flag every retirement account division needing a Qualified Domestic Relations Order
- **Tax treatment** - post-TCJA (2019+): alimony non-deductible/non-includable federally; verify state conformity
- **Pension tracing** - distinguish community interest from separate contributions; use time rule or applicable tracing method
- **Specificity** - use exact amounts, dates, account numbers, legal descriptions; vague terms invite post-decree litigation
- **Exhibit cross-references** - verify every exhibit letter/number matches its attachment
- **Filing readiness** - include caption, case number, proper pagination, TOC for lengthy agreements

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
