---
name: depository-account-agreement
language: en
description: 'Drafts a UK/Scottish Depository Account Agreement governing the institution-depositor relationship for current accounts, savings accounts, cash ISAs, and other deposit products. Enforces BCOBS (Banking Conduct of Business Sourcebook), Payment Services Regulations 2017, Money Laundering Regulations 2017, and Proceeds of Crime Act 2002. Embeds required FCA disclosures, liability limits, error resolution procedures, fee structures, and ownership provisions. Trigger keywords: "deposit account agreement", "current account terms", "savings account agreement", "bank account conditions", "BCOBS", "Payment Services Regulations", "FCA". [Atticus UK/Scots refined]'
tags:
- SCOTS, agreement, drafting, regulatory, scotland, uk, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Depository Account Agreement (UK/Scotland)

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

Drafts a regulation-compliant depository account agreement governing deposit accounts at UK financial institutions authorised by the FCA (Financial Conduct Authority) and PRA (Prudential Regulation Authority).

[SCOTS: This skill has been adapted for UK/Scottish banking law. Core drafting methodology is preserved. Regulatory references have been replaced with UK equivalents. See the Scotland/UK Adaptation section at the end for a full mapping.]

## Prerequisites

1. **Account type** - current account, savings account, cash ISA, fixed-term deposit, or specialised deposit product
2. **Institution details** - name, FCA register number, PRA authorisation status (if applicable)
3. **Account features** - interest-bearing (yes/no), tiered rates, minimum balance thresholds, arranged overdraft facilities
4. **Fee schedule** - monthly maintenance, transaction charges, overdraft usage (interest and fees), ATM, CHAPS, Bacs, Faster Payments, foreign exchange, and all other applicable charges
5. **Payment services** - debit card, Faster Payments, Bacs, CHAPS, standing orders, direct debits, online/mobile banking, Open Banking (PSD2/PSRs)
6. **Overdraft agreement** - arranged (pre-arranged) overdraft terms, unarranged (unauthorised) overdraft charges, FCA CONC 5C compliance
7. **Governing law** - Scots law (or English law if different); jurisdiction for dispute resolution
8. **Existing agreements** (if any) - upload for extraction of institution-specific terms

## Output Structure

### 1. Account Type and Interest Terms

- Account classification and product description, For interest-bearing accounts, disclose per BCOBS requirements:

| Element | Disclosure |
|---|---|
| AER (Annual Equivalent Rate) / Gross rate | Current rate as percentage |
| Calculation method | Simple or compound |
| Interest payment frequency | Monthly / quarterly / annually |
| Balance method | Daily / average monthly |
| Rate adjustment | Bank of England base rate link; advance notice period (BCOBS 4.4) |

- Minimum balance thresholds: measurement method, breach consequences (fee, interest rate reduction, account reclassification)
- Tiered balance structures with rate or fee-waiver triggers, Cash ISA annual subscription limit (if applicable) per HMRC ISA regulations

### 2. Funds Availability and Payment Services (BCOBS / Payment Services Regulations 2017)

**Clearing and availability (UK system):**

| Deposit/Payment Type | Availability |
|---|---|
| Faster Payments | Typically instantaneous (up to £1m, though institution limits apply) |
| CHAPS (Clearing House Automated Payment System) | Same-day guaranteed (cut-off typically 2:00 to 3:00 pm) |
| Bacs credits | Following working day (clearing cycle T+1) |
| Cheques, special presentation via CHAPS | Same day (fee payable) |
| Cheques, standard clearing | End of next working day after clearing cycle (C&CC Cheque & Credit Clearing) |
| Standing orders / Direct debits | Per agreed schedule |
| Cash deposits in branch | Subject to cut-off; available per institution's policy |
| Mobile cheque deposit | Subject to institution limits and cut-off times |

**Payment Services Regulations 2017 - execution times:**

| Payment Type | Maximum Execution Time |
|---|---|
| GBP electronic payments (not paper-initiated) | By end of next business day |
| Cross-border payments (EEA) | By end of next business day |
| Paper-initiated payments | By end of second business day |

**Value date:** No later than the business day the payment is credited to the payment service provider's account (PSR 2017, reg 91 to 92).

**Refund rights (PSR 2017):**

- Direct debits: unconditional refund right up to 8 weeks from debit date (Direct Debit Guarantee Scheme / PSR reg 74)
- Unauthorised transactions: immediate refund of amount plus restoration of debited account to state it would have been in (PSR reg 76)
- Erroneous transactions: refund where originator provides payer identifier correctly but transaction executed incorrectly (PSR reg 92)

### 3. Unauthorised Transactions and Liability (Payment Services Regulations 2017)

**Covered services:** Debit card (contactless, chip & PIN, online), Faster Payments, Bacs, CHAPS, standing orders, direct debits, Open Banking payments (AIS/PIS), mobile banking payments

**Liability for unauthorised transactions:**

| Circumstance | Liability Cap |
|---|---|
| Lost or stolen device/card, notified before any transaction | Zero liability |
| Lost or stolen device/card, notified promptly after discovery | Limited to £35 (PSR 2017, reg 77) |
| Gross negligence (e.g. PIN written on card) | Customer may bear full loss [SCOTS: Note, PSR 2017 reg 77(3) provides no cap if customer acted fraudulently or with intent or gross negligence; Scots law on contributory negligence may also apply [VERIFY]] |
| Transactions after notification | Zero liability (institution bears loss) |
| Fraud by institution employee | Full liability on institution |

**Error resolution (PSR 2017):**

| Step | Requirement |
|---|---|
| Customer notice | Without undue delay on becoming aware; maximum 13 months from debit date (PSR reg 71) |
| Institution investigation | Without undue delay (generally within 10 business days; may extend to 20 if reasonably necessary) |
| Refund of unauthorised transaction | Immediately on becoming aware, no later than end of following business day (PSR reg 76) |
| Written explanation (no error found) | Required; must include right to refer to Financial Ombudsman Service |
| Longer investigation period | Up to 20 business days if institution has reasonable grounds (PSR reg 71) |

- Disclose daily payment limits for debit cards, Faster Payments, and other services
- **Overdraft opt-in**: Arranged (pre-arranged) overdrafts require customer consent; unarranged overdraft must be disclosed with interest rates per FCA CONC 4.7 and CONC 5C, Direct Debit Guarantee Scheme rights, disclose separately

### 4. Fee Structure

| Category | Required Detail |
|---|---|
| Monthly account fee (if any) | Amount; waiver conditions (e.g. minimum monthly pay-in) |
| Arranged overdraft | Interest rate (EAR); any daily/monthly fees; fee-free overdraft buffer if applicable |
| Unarranged overdraft | Interest rate (must not exceed arranged rate per CONC 5C.1); any fees |
| Unpaid item / returned direct debit | Per-item charge |
| Debit card replacement | Standard / expedited fee |
| ATM (UK / abroad) | Institution fee; operator surcharge (separate) |
| Foreign transactions (FX) | Exchange rate margin; percentage fee |
| CHAPS transfer | Incoming / outgoing fee |
| Bacs / Faster Payment | Incoming typically free; outgoing fee per institution |
| Stopping a cheque or payment | Fee; 6-month duration for cheque stop; renewal |
| Dormancy / inactivity | Fee; trigger period (typically 12 to 15 months) |
| Early account closure | Fee; applicable window (if any) |
| Paper statements | Fee if opted for paper over online |

- Fee increases: minimum 2 months' advance notice (BCOBS 4.5); continued use = acceptance, For current accounts, the FCA requires summary boxes (at point of sale, statements, and on request) showing key product features and costs

[SCOTS: Note, Separate from account maintenance fees, arrangement fees for overdrafts are regulated under CONC. Verify latest FCA rules on unarranged overdraft pricing, as these have been subject to recent reform.]

### 5. Account Ownership and General Terms

**Ownership structures:**
- **Joint account with survivorship** (common in Scots law) - surviving account holder entitled to full balance; each account holder has full transactional authority unless otherwise specified
- **Joint account without survivorship / separate interests** - share passes to deceased's estate; specify fractional ownership if applicable; governed by Succession (Scotland) Act 2016

**Operational provisions:**

| Provision | Content |
|---|---|
| Right of set-off | May apply funds from one account to satisfy debts on another; subject to notice requirements and contractual fairness (Unfair Terms in Consumer Contracts Regulations 1999 / Consumer Rights Act 2015) [VERIFY] |
| Statement review | Monthly (current account) / quarterly (savings); notify of errors promptly (PSR 2017 reg 71 - 13 months max) |
| Cheque processing | Cheques presented in any order; disclose processing method |
| Stopping payments | Cheques: 6-month duration effective on receipt; Direct Debits: cancel via Direct Debit Guarantee |
| Account amendment | 2 months' notice for adverse changes (BCOBS 4.5); immediate for beneficial changes or regulatory compliance |
| Account closure | Customer: any time (early closure fee if applicable); institution: reasonable notice (typically 30 to 60 days); immediate for suspicion of fraud, money laundering, or sanctions breaches |
| Dormancy / unclaimed assets | 15-year dormancy period common; then may be transferred to Reclaim Fund (Dormant Bank and Building Society Accounts Act 2008); ultimately Bona Vacantia to Crown (Scotland: King's and Lord Treasurer's Remembrancer) |
| Death or incapacity | Freeze on notification; require Grant of Confirmation (Scottish equivalent of Probate); honour nomination / trust provisions |
| Power of attorney | Accept Continuing Power of Attorney registered with Office of the Public Guardian (Scotland) |

### 6. Regulatory Compliance

| Regulation | Required Provision |
|---|---|
| Money Laundering Regulations 2017 | Customer due diligence (CDD); enhanced due diligence (EDD) for PEPs and high-risk customers; ongoing monitoring; Suspicious Activity Reports (SARs) to National Crime Agency |
| Proceeds of Crime Act 2002 | Duty to report suspicion; tipping-off offence; consent regime |
| HMT Sanctions / Office of Financial Sanctions Implementation (OFSI) | Prohibition on dealing with sanctioned persons/entities; asset freeze obligations; reporting requirements |
| UK FATCA Implementation / Common Reporting Standard (CRS) | Foreign account reporting where foreign indicia present; HMRC Common Reporting Standard returns |
| HMRC Self Assessment / RTI | Interest and savings income reporting to HMRC; customer tax residency self-certification |
| PSC Register (People with Significant Control) | Required for legal entity accounts; verification via Companies House register |
| Data Protection Act 2018 / UK GDPR | Processing of personal data; retention periods; subject access rights |
| Consumer Rights Act 2015 | Fairness of contract terms; implied terms on reasonable care and skill |

### 7. Execution and Acknowledgments

**Signature block:**
- Full legal name, signature, date, Business accounts: signer title/capacity; board resolution or certificate of incumbency

**Required acknowledgments and disclosures (delivery):**
- [ ] BCOBS pre-contract information: key features, interest rates, charges summary
- [ ] Payment Services Regulations 2017 - pre-contract information (Part 6, PSR 2017)
- [ ] Distance marketing disclosure (if account opened remotely) - Financial Services (Distance Marketing) Regulations 2004
- [ ] Fee schedule and summary box (current accounts)
- [ ] Overdraft agreement and CONC disclosures (if overdraft facility included)
- [ ] Arranged overdraft consent; unarranged overdraft pricing disclosure
- [ ] Electronic banking security procedures acknowledgment
- [ ] Debit card terms acceptance
- [ ] Online / mobile banking terms acceptance
- [ ] Data Protection Act 2018 / UK GDPR privacy notice
- [ ] Direct Debit Guarantee Scheme notice
- [ ] FOS (Financial Ombudsman Service) and FSCS (Financial Services Compensation Scheme) information
- [ ] Tax residency self-certification (HMRC / CRS / FATCA)

## Guidelines

- **BCOBS 4.2 (Information to be provided)** : Pre-contract information must be provided in a durable medium before the banking customer is bound
- **BCOBS 4.4 (Further information)** : Provide annual statement of charges; information on interest rate changes
- **BCOBS 4.5 (Changes)** : 2 months' advance notice for adverse changes; continued use = acceptance
- **BCOBS 5 (Cancellation)** : 14-day cooling-off period for distance contracts; 14 days for overdrafts
- **BCOBS 7 (Post-sale)** : Annual summary of charges; prompt notification of unauthorised transactions
- **PSR 2017 reg 75 (Information on payments)** : Provide access to payment transaction information for 13 months
- **PSR 2017 reg 76 to 79 (Liability)** : Strict liability for unauthorised transactions; £35 cap for consumer gross negligence cases
- **PSR 2017 reg 91 to 92 (Execution)** : T+1 for GBP electronic payments; value date rules
- **Direct Debit Guarantee**: Unconditional refund right, cannot be limited by agreement
- **CONC 5C (Overdrafts)** : Unarranged overdraft interest rate cannot exceed arranged overdraft rate
- **CONC 4.7**: Pre-contract information on overdrafts must be prominent
- **FSCS protection**: £85,000 per person per institution (FSCS limit); must disclose
- **Consumer Rights Act 2015**: Unfair terms not binding on consumers; ensure plain and intelligible language
- **Bona Vacantia**: Unclaimed assets after 15 years of dormancy; in Scotland vest in the Crown through the King's and Lord Treasurer's Remembrancer
- **Electronic delivery**: Electronic Communications Act 2000 / UK eIDAS govern electronic signatures and contract formation
- **Right of set-off**: Government benefit payments (Universal Credit, state pension, etc.) may be protected; verify under DWP guidance and Scottish bankruptcy legislation [VERIFY]
- Cite regulations in OSCOLA (Oxford Standard for Citation of Legal Authorities) format, All outputs require solicitor review (practising in Scotland for Scottish accounts, or in the relevant UK jurisdiction)

## Scotland/UK Adaptation

This section documents the adaptations made from the original US-focused skill to UK/Scottish banking law.

### Regulatory Bodies

| US Body | UK/Scottish Equivalent |
|---|---|
| OCC (Office of the Comptroller of the Currency) | PRA (Prudential Regulation Authority) |
| FDIC | FCA / PRA (dual regulation) |
| Federal Reserve | Bank of England / PRA |
| CFPB | FCA (Financial Conduct Authority) |
| FinCEN | NCA (National Crime Agency) / HMRC |

### Primary Legislation and Regulation

| US Regulation | UK Equivalent |
|---|---|
| Regulation CC (Funds Availability) | BCOBS 4 / Payment Services Regulations 2017 (clearing and value date rules) |
| Regulation E (Electronic Fund Transfers) | Payment Services Regulations 2017 (Parts 6 to 8) |
| Regulation DD (Truth in Savings) | No direct UK equivalent. Disclosures governed by BCOBS 4 (information requirements) and CONC (consumer credit) |
| Regulation D (Reserve Requirements / Savings Limits) | No direct UK equivalent. Savings account withdrawal limits are contractual |
| ESIGN Act / UETA | Electronic Communications Act 2000; UK eIDAS Regulation (EU) 910/2014 as retained) |
| UCC (Uniform Commercial Code) | Scots law of contract (common law); Sale of Goods Act 1979 (for goods); no codified commercial code |
| USA PATRIOT Act / BSA/AML | Money Laundering Regulations 2017; Proceeds of Crime Act 2002 |
| OFAC | HMT Sanctions / Office of Financial Sanctions Implementation (OFSI) |
| IRS Form W-9 / FATCA | HMRC Self Assessment / RTI reporting; UK FATCA IGA; Common Reporting Standard (CRS) |
| FinCEN Beneficial Ownership Rule | PSC Register (People with Significant Control) at Companies House |

### Key Differences

| US Feature | UK/Scottish Equivalent |
|---|---|
| JTWROS (Joint Tenancy with Right of Survivorship) | Joint account with survivorship (common in Scots law, implied by bare trust; express provision recommended) |
| Tenants in common | Joint account without survivorship / separate interests |
| Arbitration policy (opt-out) | Arbitration (Scotland) Act 2010 governs arbitration; most consumer bank accounts do not mandate arbitration, court jurisdiction (Sheriff Court / Court of Session) is default |
| State escheatment | Bona Vacantia (Crown's right to unclaimed assets); Dormant Bank and Building Society Accounts Act 2008; in Scotland, King's and Lord Treasurer's Remembrancer |
| Bluebook citation format | OSCOLA (Oxford Standard for Citation of Legal Authorities) |
| USD amounts | GBP amounts |
| State law variation | Scots law is distinct from English law; verify whether agreement specifies "Scots law" or "the laws of Scotland" for Scottish accounts |
| CFPB complaint process | Financial Ombudsman Service (FOS) - free, statutory dispute resolution |
| FDIC deposit insurance | Financial Services Compensation Scheme (FSCS) - £85,000 per person per institution |

### Regulatory Regime Notes

[SCOTS: Note, The UK regulatory landscape is dual-regulated for banks: PRA authorisation for prudential matters, FCA authorisation for conduct. Scottish courts (Sheriff Court for claims up to £100,000; Court of Session for higher sums) have jurisdiction for accounts governed by Scots law. The Financial Ombudsman Service handles consumer complaints. The Financial Services Compensation Scheme provides deposit protection up to £85,000.]

[SCOTS: Note, Banking terms and conditions are subject to the Consumer Rights Act 2015 requirement of fairness. The Unfair Terms in Consumer Contracts Regulations 1999 (now superseded by CRA 2015) case law (e.g. *Office of Fair Trading v Abbey National plc* [2009] UKSC 6 on unarranged overdraft charges) remains relevant.]

[SCOTS: Note, The Payment Services Regulations 2017 implement PSD2 (revised Payment Services Directive) in the UK. Post-Brexit, the UK has retained the PSRs with amendments. Open Banking (CMA Order 2017) mandates data sharing for the nine largest UK banks. Strong Customer Authentication (SCA) applies under the PSRs.]

[SCOTS: Note, The Dormant Bank and Building Society Accounts Act 2008 provides a mechanism for transferring dormant account funds to community causes. In Scotland, the Scottish Government administers the scheme through the National Lottery Community Fund.]

### Citation Example (OSCOLA)

Legislation:
- Payment Services Regulations 2017, SI 2017/752, reg 76.
- Proceeds of Crime Act 2002, s 327.

Case law:
- *Office of Fair Trading v Abbey National plc* [2009] UKSC 6, [2010] 1 AC 696.

FCA Handbook:
- BCOBS 4.2.1R.
- CONC 5C.1.1R.

### Acknowledgment Checklist (Final Review)

- [ ] Governing law clause specifies Scots law (or relevant UK jurisdiction)
- [ ] Interest disclosures use AER / Gross rate format (not APY)
- [ ] Funds availability references Faster Payments / CHAPS / Bacs (not Reg CC hold schedules)
- [ ] Overdraft terms comply with CONC 5C and FCA overdraft pricing rules
- [ ] Unauthorised transaction liability set at £35 maximum (PSR 2017 reg 77)
- [ ] FSCS protection disclosed (£85,000 limit)
- [ ] FOS complaint procedure disclosed
- [ ] Money Laundering Regulations 2017 CDD/EDD obligations included
- [ ] HMT Sanctions / OFSI obligations included
- [ ] HMRC/CRS tax reporting provisions included
- [ ] Electronic execution valid under Electronic Communications Act 2000
- [ ] Dormancy period stated (contractual); Bona Vacantia / KLTR noted
- [ ] OSCOLA citation format used throughout
- [ ] Arbitration (Scotland) Act 2010 referenced if arbitration clause included

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
