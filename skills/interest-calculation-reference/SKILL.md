---
name: interest-calculation-reference
language: en
description: Atticus UK/Scots legal skill for interest-calculation-reference. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Interest Calculation Reference [SCOTS]

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

Workflow for pre-judgment interest calculations in Scottish civil claims, using the judicial rate and relevant statutory provisions.

## Prerequisites

Gather before starting:
- Date of citation / summons / service of writ, Governing contract or other obligation, Chronological payment history and ledger, Contractual interest rate (if any, and whether valid under the Unfair Contract Terms Act 1977)
- Judicial rate: 8% per annum (Interest on Damages (Scotland) Act 1958, s.9 as amended)
- Collateral or security status (heritable security/standard security)
- Day-count basis (actual calendar days, 365-day year under Scots law)
- Fee provisions and relevant statutory authority (UTCCR 1999 for consumer; UCTA 1977 for business)

## Quick Start

1. Collect core inputs (principal, rate, dates, day-count basis).
2. Determine rate source using priority hierarchy.
3. Calculate pre-judgment interest using the formula.
4. Apply charge inclusion gate to expenses and other charges.
5. Assemble worksheet and run validation checklist.

## Core Inputs

| Field | Capture |
|---|---|
| Principal | Outstanding capital sum as of the date of citation/summons |
| Date of Citation / Servic of Writ | When proceedings commenced |
| Date of Decree / Judgment | Anticipated or actual date |
| Annual Rate | Judicial rate: 8% p.a. (or contractual rate if higher and validly agreed) |
| Rate Source | Contract / Judicial rate (s.9 1958 Act) / Late Payment of Commercial Debts Regulations |
| Day-Count Basis | Actual/365 (Scottish practice) |
| Claim Type | Personal injury / commercial / consumer / heritable security |
| Charges Included | Court expenses, outlays, expenses of execution |

## Formulas

- `Pre-judgment Interest = Principal × Rate × (Accrual Days ÷ 365)`
- `Per Diem = (Principal × Rate) ÷ 365`
- `Total Decree Amount = Principal + Pre-judgment Interest + Allowed Expenses and Charges`

## Rate Source Priority

| Priority | Source | Rule |
|---|---|---|
| 1 | Contract | Express contractual rate if valid and not penal |
| 2 | Judicial rate (s.9) | 8% p.a. under the Interest on Damages (Scotland) Act 1958 as amended |
| 3 | Late Payment Regulations | Under the Late Payment of Commercial Debts (Interest) Act 1998; applicable to business-to-business debts |
| 4 | Discretionary award | Court discretion under s.1 of the 1958 Act for personal injury claims (may be adjusted based on case-specific factors) |

## Post-Decree Interest Rules

| Claim Type | Rule |
|---|---|
| Personal injury | Interest runs from the date of service of the writ to decree at 8% p.a. (s.1, 1958 Act) |
| Commercial debt | Interest runs from due date or citation to decree; Late Payment Act may apply |
| Consumer debt | Contractual rate subject to UTCCR / CCA 1974 reasonableness review |
| Heritable security | Interest runs per standard security deed; default rate may be capped |

## Charge Inclusion Gate

Each expense/charge must be: (1) court-awarded or contract-authorised, (2) actually incurred pre-decree, and (3) documented.

- **Late/penalty charges** - must be reasonable and not penal (UCTA 1977 / common law penalty doctrine)
- **Default charges** - must be actually incurred and contract-authorised
- **Court expenses** - must be awarded by decree or agreed in settlement
- **Solicitor/client expenses** - must be taxed if disputed; refer to the pursuer/solicitor agreement, Attach supporting documentation to every line item

## Worksheet Template

```text
SCOTS PRE-JUDGMENT INTEREST CALCULATION WORKSHEET
Pursuer: ____________  Court Ref: ____________
Defender: ____________

1) Principal
   Sum sued for:                          £ ________
   Less payments to citation:            -£ ________
   Principal as of [Citation Date]:       £ ________

2) Interest
   Annual rate: 8% p.a. (judicial) / ___% (contractual)
   Rate source: [ ] Judicial s.9 [ ] Contract [ ] Late Payment Regs
   Day-count:   Actual/365
   Accrual period: [From] __ / [To] __ / Days ____
   Per diem:                              £ ________
   Pre-judgment interest:                 £ ________

3) Expenses and Charges (only if supported)
   Court expenses (solicitor/client):     £ ________
   Outlays (counsel, experts, travel):    £ ________
   Statutory charges:                     £ ________
   Other allowed charges:                 £ ________
   Charges total:                         £ ________

4) Decree Summary
   Principal:                             £ ________
   Pre-judgment interest:                 £ ________
   Expenses and charges:                  £ ________
   TOTAL DECREE AMOUNT:                   £ ________

Documentation: [ ] Contract rate clause [ ] Payment ledger
[ ] Citation or writ date [ ] Authority for expenses
```

## Validation Checklist

Run before finalising:

| Error | Fix |
|---|---|
| Wrong principal baseline | Reconcile to balance at date of citation/summons |
| Wrong day-count basis | Use actual/365 unless contract specifies otherwise |
| Wrong rate applied | Confirm judicial rate (8% p.a.) or valid contractual rate |
| Unauthorised charges included | Remove; note court authority required |
| Missing rate source | Document contract clause or statute reference |
| Interest calculated past anticipated decree date | Cap pre-judgment interest at decree or judgment |
| Confusion between judicial and contractual rate | Resolve using priority hierarchy; only one rate applies |
| Interest running from wrong start date | Check if citation + 7 days or actual due date applies |

## Pitfalls

- The **judicial rate of 8% p.a.** is the default under s.9 of the Interest on Damages (Scotland) Act 1958 (as amended by the Interest on Damages (Scotland) Regulations 1993). This rate may change by statutory instrument - **verify current rate**.
- **Personal injury claims**: s.1 of the 1958 Act gives the court discretion to award interest from the date of the writ/defence to the date of decree. The default rate is the judicial rate, but the court may adjust for periods of delay.
- The **Late Payment of Commercial Debts (Interest) Act 1998** applies to business-to-business contracts; the statutory rate is 8% + Bank of England base rate.
- Convert percentages to decimals only inside formulas; preserve units elsewhere.
- Never mix post-decree interest into pre-judgment totals.
- Flag uncertain questions (e.g., whether a contractual rate is penal or subject to UCTA 1977) with [VERIFY].
- **Judicial rate may change** - confirm the current judicial rate before filing. The rate was last confirmed at 8% p.a.

## Cross-References

- `@scots-personal-injury-praecipe`
- `@scots-commercial-debt-recovery`
- `@scots-heritable-security-foreclosure`
- `@scots-decree-summary-pleading`

## Key Statutes

- Interest on Damages (Scotland) Act 1958, ss.1, 9
- Interest on Damages (Scotland) Regulations 1993
- Late Payment of Commercial Debts (Interest) Act 1998
- Unfair Contract Terms Act 1977 (UCTA)
- Consumer Credit Act 1974 (CCA) - consumer loans, Common law on penalty clauses

---

## Scotland/UK Adaptation

This skill replaces the US bankruptcy pre-petition interest framework with pre-judgment interest in Scottish civil proceedings.

Key substitutions:
- Petition date (bankruptcy) → Date of citation / service of writ
- 11 U.S.C. §502(b)(2) and §506(b) → Interest on Damages (Scotland) Act 1958, ss.1 and 9
- 28 U.S.C. §1961 (federal post-judgment rate) → Judicial rate (8% p.a.)
- US state prejudgment rates → Single Scottish judicial rate, Late Payment Regulations, Proof of claim → Decree / Court award, USD → GBP

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
