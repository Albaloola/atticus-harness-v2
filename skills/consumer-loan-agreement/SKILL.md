---
name: consumer-loan-agreement
language: en
description: Drafts a consumer loan agreement compliant with the Consumer Credit Act 1974 and FCA CONC sourcebook, including pre-contract credit information, APR/finance charge calculations, payment schedules, default provisions, and statutory cancellation/withdrawal rights. Applies to regulated consumer credit agreements under CCA 1974. [SCOTS] Adapted for UK law, FCA regulation, and Scottish courts jurisdiction. [Atticus UK/Scots refined]
tags:
- SCOTS transactional, regulatory, agreement, drafting, consumer-credit, CCA, FCA, CONC, SCOTS, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Consumer Loan Agreement (UK)

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

[SCOTS: Note] This skill adapts a US TILA/Regulation Z template for UK consumer credit under the Consumer Credit Act 1974. The CCA regulates consumer credit agreements up to **£25,000** (or up to any amount for certain secured loans). Agreements must be FCA-authorised and comply with the FCA Consumer Credit sourcebook (CONC). Scottish enforcement is through Sheriff Court or Court of Session.

Produces an execution-ready consumer credit agreement with a compliant pre-contract credit information box, statutory cancellation/withdrawal rights, and full contractual provisions for fixed-rate consumer credit.

## Quick Start

Collect before drafting:

1. **Lender/Creditor** - legal name, FCA registration number, address, contact info. Must be FCA authorised under the FSMA 2000.
2. **Borrower(s)** - full legal name(s), addresses; co-borrower if joint; Scottish jurisdiction if borrower is in Scotland
3. **Loan economics** - principal (credit amount), APR, total charge for credit, term, payment frequency, first payment date
4. **Fee schedule** - all charges (arrangement fees, documentation fees, default charges)
5. **Collateral** - description with identifiers (if secured; most consumer loans under CCA are unsecured)
6. **Type of agreement** - fixed-sum credit, running-account credit, or hire-purchase; regulates accordingly
7. **Solicitor/advocate referral** - if agreement secured on land, must be executed as a deed and borrower must have independent legal advice

## Output Structure

### 1. Pre-Contract Consumer Credit Information (PCCI)

Must be provided **before** the agreement is concluded, in the form prescribed by the Consumer Credit (Disclosure of Information) Regulations 2010. For most fixed-sum agreements, this replaces the old SECCI format and is customarily known as Pre-contract Credit Information (PCCI).

[SCOTS: Note] The pre-contract information must be provided in a durable medium with adequate explanation under CONC 4.2. This is the UK equivalent of the Reg Z federal disclosure box.

Include this information as a segregated box early in the document:

| PCCI Element | Requirement | UK Law Reference |
|---|---|---|
| **Total Amount of Credit** | The principal sum to be advanced | CCA 1974, s 60 |
| **APR** - Annual Percentage Rate of Charge | Must be calculated per CCA methodology (not US actuarial); shown as % | Consumer Credit (Total Charge for Credit) Regulations 2010 [VERIFY] |
| **Total Charge for Credit** | Total interest + all other charges imposed as condition of credit | CONC App 1.7 |
| **Total Amount Payable** | Credit + Total Charge for Credit | CCA 1974, s 61(1)(b) |
| **Rate of Interest** | Fixed or variable; shown as % per annum | CONC 4.2.2 R |
| **Payment Schedule** | Amount, frequency, number, and timing of repayments | CCA 1974, Sch 1 |
| **Default Charges** | Description of charges applicable on late payment | CONC 7.15 |
| **Cancellation/Withdrawal Right** | 14-day right of withdrawal under CCA 1974, s 66A; 5-day right of cancellation (distance marketing) where applicable | CCA 1974, s 66A; FSMA 2000 (Regulated Activities) Order 2001 |
| **Early Repayment Right** | Borrower may settle early; right to rebate of unearned charges under s 95A CCA 1974 | CCA 1974, s 94-95A |

**Math check**: Total Amount of Credit + Total Charge for Credit = Total Amount Payable. Recalculate APR if any fee or term changes. Use CCA APR calculation method (different from US actuarial, uses the time value of money / net present value approach).

### 2. Loan Terms and Conditions

**Credit purpose**: "This agreement is for personal, family, or household purposes and is regulated by the Consumer Credit Act 1974."

**Right of withdrawal** (CCA 1974, s 66A):
- Borrower may withdraw from the agreement without giving any reason within 14 days of:
  - The day after the agreement is made; or
  - The day on which the borrower receives a copy of the executed agreement (if later)
- Borrower must repay the credit and interest within 30 days of the withdrawal notice, No other charges payable if withdrawn within 14 days

**Early repayment** (CCA 1974, s 94-95A):
- Borrower may settle the agreement at any time by notice in writing, Right to rebate of unearned charges under s 95A (for agreements entered into after 1 February 2011)
- Lender must provide settlement statement on request

**Late charges**:
- Default charges must be fair and transparent (CONC 7.15)
- FCA rules: charges must not exceed a reasonable estimate of the costs caused by the breach, No compounding of late charges, Must be disclosed in pre-contract information

**Interest**: State whether fixed or variable. If variable, explain basis (e.g., Bank of England base rate + margin) and frequency of rate changes.

**Payment application order**: Default charges → interest → principal (or as per FCA guidance)

**If secured**:
- Grant security interest in described collateral, Borrower covenants: maintain condition, maintain insurance, no unauthorised transfer, If secured on land in Scotland: must conform to Requirements of Writing (Scotland) Act 1995; borrower must have independent legal advice

**If unsecured**: State no collateral pledged; remedies limited to court action for debt recovery.

### 3. Default, Acceleration, and Remedies

**Events of default**: Missed payment (after notice), failure to provide required information, bankruptcy/sequestration, material misrepresentation, borrower death (if agreement terms so state).

**Acceleration**: Lender may demand early repayment of outstanding balance on default, subject to CCA requirements:
- Default notice under CCA 1974, s 87 (at least 14 days' notice)
- If breach not remedied within notice period, lender may accelerate
- **In Scotland**: enforcement requires court order, no self-help repossession for regulated agreements without court permission

**Debt recovery remedies** (unsecured):
- Court action (Sheriff Court for sums up to £100,000; Court of Session for larger claims)
- Decree for payment, Arrestment of funds / Earnings arrestment

**Collateral remedies** (secured):
- Court order required for repossession of goods under CCA 1974, s 92-93 (no self-help for regulated agreements)
- For land: court proceedings only; decree of ejection if borrower is in occupation

### 4. Required Notices

| Trigger | Notice | Reference |
|---|---|---|
| Default | Default notice (14 days to remedy) | CCA 1974, s 87 |
| Arrears | Arrears notice (every 6 months if account falls into arrears) | CCA 1974, s 86B |
| Post-judgment | Time to pay direction (Sheriff Court) or decree | CCA 1974, Sch 5 |
| Early settlement | Settlement statement (within 7 working days of request) | CCA 1974, s 97 |
| Change of rate | Notice of variation (at least 30 days' notice) | CONC 5.7.2 R |
| Scottish diligence | Charge for payment before earnings arrestment | Debtors (Scotland) Act 1987 |

### 5. Execution Block

For regulated consumer credit agreements, the executed agreement must contain:
- A legible signature box, All prescribed terms as set out in CCA 1974, s 61 and the Consumer Credit (Agreements) Regulations 1983
- Copy must be provided to the borrower:
  - One copy at the time of signing (if face-to-face)
  - One copy sent within 7 days (if distance/online)

**Borrower acknowledgment** above signature lines: receipt of copy of this agreement, statutory rights explained, agreement to all terms.

**Signature requirements (Scotland-specific):**
- For unregulated advances: standard signature per Requirements of Writing (Scotland) Act 1995
- For agreements secured on land: must be in writing and subscribed by the borrower, Electronic signatures may be used but ensure compliance with eIDAS Regulation retained UK version

## Pitfalls

- **CCA regulated vs unregulated**: Check whether the agreement falls within the £25,000 limit (regulated) or exceeds it (may be unregulated). Different rules apply.
- **FCA authorisation**: Only FCA-authorised persons can enter into regulated consumer credit agreements. Unauthorised lending is a criminal offence (FSMA 2000, s 19).
- **Unfair relationships**: CCA 1974, s 140A-E gives the court power to reopen unfair credit relationships, far broader than US unconscionability doctrines.
- **APR calculation**: CCA APR uses net present value method, must match to 1 decimal place tolerance.
- **Cancellation rights**: Distance agreements have a 14-day cancellation right (Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013).
- **Judicial enforcement in Scotland**: No self-help repossession (as available in some US states); all enforcement is through the courts.
- **Limitation**: CCA-regulated agreements: sums recoverable are statute-barred after 5 years in Scotland (Prescription and Limitation (Scotland) Act 1973).

## Troubleshooting

| Problem | Resolution |
|---|---|
| APR does not match CCA methodology | Ensure using CCA net present value calculation, not US actuarial method. Confirm Total Charge for Credit includes all compulsory fees/charges. |
| Missing cancellation right notice | CCA 1974, s 66A right of withdrawal is mandatory for regulated agreements, add explicitly at the top of the terms. |
| Borrower jurisdiction is Scotland | Check Sheriff Court jurisdiction limits (£100,000). Include Scottish-specific diligence protections. Use "pursuer/defender" terminology in litigation clauses. |
| Agreement is not regulated | If loan > £25,000, confirm CCA does not apply. Consider whether other consumer protection legislation applies (Consumer Rights Act 2015). |
| FCA-authorised lender not confirmed | Cannot proceed without valid FCA registration. Check the Financial Services Register: https://register.fca.org.uk/ |
| Secured on Scottish heritable property | Must be executed as a deed (document subscribed by granter and witnessed). Borrower needs independent legal advice. Standard Securities require registration in the Land Register of Scotland. |

## Scotland/UK Adaptation

This skill has been adapted from a US TILA/Regulation Z consumer loan agreement template.

### Key changes

| US | UK |
|---|---|
| Truth in Lending Act (15 U.S.C. § 1601) | Consumer Credit Act 1974 |
| Regulation Z (12 CFR Part 1026) | FCA CONC sourcebook |
| CFPB / Federal Reserve Board | FCA (Financial Conduct Authority) |
| Reg Z Federal Disclosure Box | Pre-contract Consumer Credit Information (PCCI) / Consumer Credit (Disclosure of Information) Regs 2010 |
| APR (US actuarial method) | APR (CCA net present value method) |
| FTC Co-Signer Notice | No direct equivalent; advise independent legal advice for guarantors |
| SCRA military rate cap | No UK equivalent for consumer credit |
| Self-help repossession (UCC Art 9) | No self-help in Scotland; court order required |
| State usury laws | CCA 1974 + FCA CONC regulates cost |
| Prepayment penalty | No prepayment penalty; statutory right to rebate (s 95A) |
| 30-day removal deadline | 14-day withdrawal right (s 66A) |
| Default judgment | Decree in absence (Sheriff Court) / Decree (Court of Session) |

### Key Scottish legislation, Consumer Credit Act 1974 (applies GB-wide)
- Financial Services and Markets Act 2000 (Regulated Activities) Order 2001
- Consumer Rights Act 2015 (unfair terms)
- Requirements of Writing (Scotland) Act 1995
- Prescription and Limitation (Scotland) Act 1973
- Debtors (Scotland) Act 1987 (diligence)
- Bankruptcy (Scotland) Act 2016

### Forms
Download relevant UK consumer credit forms into `scots-forms/`:
- **FCA Register** - https://register.fca.org.uk/
- **FCA CONC Sourcebook** - https://www.handbook.fca.org.uk/handbook/CONC/
- **Consumer Credit (Agreements) Regulations 1983** - statutory instrument
- **Consumer Credit (Disclosure of Information) Regulations 2010** - statutory instrument
- **Scottish courts forms** - https://www.scotcourts.gov.uk/taking-action/

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
