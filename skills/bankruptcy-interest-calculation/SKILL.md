---
name: bankruptcy-interest-calculation
language: en
description: Calculates pre-petition interest for bankruptcy proofs of claim [US federal] or equivalent insolvency claims in UK/Scotland. Produces a filing-ready worksheet. Covers rate source hierarchy, day-count conventions, simple interest formulas, post-petition rules, and fee inclusion standards. Use when preparing interest components of a proof of claim, calculating creditor claim amounts, or verifying interest calculations. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Bankruptcy Claim Interest Calculation

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

Calculates pre-petition interest and generates a defensible worksheet for attachment to a proof of claim.

## Prerequisites

1. Principal balance as of last payment or accrual date
2. Annual interest rate and governing source (contract, judgment, or statute)
3. Last payment date and petition date
4. Underlying agreement (for day-count convention and fee authorization)

## Quick Start

```
Per Diem = (Principal × Annual Rate) ÷ Day-Count Divisor
Pre-Petition Interest = Per Diem × Days (Last Payment → Petition Date)
```

Use the day-count divisor required by the contract or governing standard (e.g., 365 or 360).

## Core Workflow

### 1. Determine Interest Rate

| Priority | Source | Notes |
|----------|--------|-------|
| 1 | Contract rate | Express provision in loan agreement or note |
| 2 | Judgment rate | Rate from pre-petition judgment |
| 3 | State statutory | Applicable state prejudgment rate |
| 4 | Federal rate | 28 U.S.C. § 1961 (Treasury bill rate) |

Cite the source in the proof of claim with section number or statutory citation.

### 2. Select Day-Count Convention

| Convention | Divisor | Typical Use |
|------------|---------|-------------|
| Actual/365 | 365 | Consumer loans, mortgages (default if unspecified) |
| Actual/360 | 360 | Commercial loans, credit facilities |
| 30/360 | 360 (30-day months) | Bonds, commercial paper |

Follow the contract. Default to Actual/365 only when unspecified.

### 3. Calculate Interest

Simple interest (most common for bankruptcy claims):

```
Per Diem = (Principal × Annual Rate) ÷ Day-Count Divisor
Interest = Per Diem × Actual Days in Accrual Period
Total Claim = Principal + Interest + Authorized Charges
```

### 4. Apply Post-Petition Rules

| Claim Type | Post-Petition Interest? |
|------------|------------------------|
| Unsecured | No, stop at petition date (exception: solvent-debtor cases) |
| Secured (oversecured) | Yes, under § 506(b), to extent of equity cushion |
| Secured (undersecured) | No |
| Priority | No |

### 5. Verify Additional Charges

**Late fees** - include only if all apply:
- [ ] Contract expressly authorizes (cite section)
- [ ] Assessed pre-petition
- [ ] Not punitive or unconscionable

**Attorney fees** - include only if:
- [ ] Contract fee-shifting provision or statutory authorization
- [ ] Itemized statement attached (dates, hours, rates, descriptions)
- [ ] Pre-petition only; post-petition collection fees excluded

### 6. Complete Worksheet

```
═══════════════════════════════════════════════════════
            INTEREST CALCULATION WORKSHEET
Case: [Debtor Name], Case No. [XX-XXXXX]
Creditor: [Creditor Name]   Account No.: [Number]
═══════════════════════════════════════════════════════

PRINCIPAL
  Original Debt Amount:                      $__________
  Less: Payments Received:                  ($__________)
  Principal Balance as of [Last Pmt Date]:   $__________

INTEREST
  Principal Balance:                         $__________
  Annual Interest Rate:                      __________%
  Rate Source: [ ] Contract §__ [ ] Judgment [ ] Statutory [ ] Federal
  Accrual: [Last Pmt Date] → [Petition Date] = ____ days
  Day-Count: [ ] Actual/365  [ ] Actual/360  [ ] 30/360
  Per Diem = ($______ × ____%) ÷ _____ =    $__________
  Interest = $______ × ____ days =           $__________

OTHER CHARGES
  Late Fees (Contract §__):                  $__________
  NSF/Returned Check Fees:                   $__________
  Attorney Fees (see itemization):           $__________
  Other: ______________________:             $__________

CLAIM SUMMARY
  Principal:                                 $__________
  Pre-Petition Interest:                     $__________
  Other Charges:                             $__________
───────────────────────────────────────────────────────
  TOTAL CLAIM AS OF PETITION DATE:           $__________
═══════════════════════════════════════════════════════
Prepared by: __________________  Date: _______________
```

## Common Pitfalls

| Mistake | Fix |
|---------|-----|
| Post-petition interest on unsecured claim | Stop accrual at petition date |
| Wrong day-count divisor | Follow contract; default Actual/365 |
| Compounding on simple-interest contract | Match contract methodology exactly |
| Unauthorized late/attorney fees | Only include contractually or statutorily permitted charges |
| Using original loan amount as principal | Use balance after last credited payment |
| Missing rate citation | Always cite contract section or statute, unsupported rates invite objection |

Attach supporting documentation: rate source excerpt, payment history, fee authorization clause.

## Key Authorities

- **11 U.S.C. § 502(b)** - Allowance of claims; interest limitations
- **11 U.S.C. § 506(b)** - Post-petition interest for oversecured creditors
- **28 U.S.C. § 1961** - Federal post-judgment interest rate

## Scotland/UK Adaptation

This skill is drafted for US bankruptcy interest (11 U.S.C. §506(b), FRBP). For Scottish/UK use:

- **Insolvency types**: sequestration (personal bankruptcy in Scotland), administration (company), liquidation (winding up). No direct equivalent of Ch. 11 reorganization stay.
- **Interest on judgment debts**: 8% simple under Judgments Act 1838 s.17 (E&W) / Interest on Damages (Scotland) Act 1958.
- **Pre-judgment interest**: governed by Interest on Damages (Scotland) Act 1958 - court has discretion; typically 8% simple from date of breach.
- **Contractual interest**: express contractual rate governs (subject to UCTA 1977 reasonableness test). Late Payment of Commercial Debts (Interest) Act 1998 provides statutory rate: 8% + Bank of England base rate.
- **Day-count convention**: 365-day year standard in UK courts unless contract specifies otherwise.
- **Post-petition interest**: no equivalent of §506(b). In sequestration, interest stops at date of sequestration for unsecured claims. Secured creditors claim to date of realisation under security documentation.
- **Rate source hierarchy**: (1) contract rate; (2) statutory late payment rate; (3) judicial rate (8%).
- **Currency**: GBP not USD.
- **Statutory authority**: Bankruptcy (Scotland) Act 2016; Insolvency Act 1986; Prescription and Limitation (Scotland) Act 1973 (5-year prescriptive period).
- **Claim form**: Scottish sequestration claims use standard AIB forms; administration/liquidation use Companies House/insolvency practitioner forms.
- **Security registration**: Register of Charges at Companies House for Scotland (not UCC). Standard security registered with Land Register of Scotland.
- **Methodology**: worksheet template transfers (principal, interest, charges). Change principal currency to £. Replace pre-petition date with date of sequestration/administration order.
- **Key difference**: prescription (limitation) - interest on time-barred obligations cannot be claimed. 5-year prescriptive period for most contractual debts.

For a full reference, see `scots-forms/UK-Scottish-Debt-Interest-Calculation-Guidance.md`.

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
