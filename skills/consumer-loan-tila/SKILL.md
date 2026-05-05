---
name: consumer-loan-cca
language: en
description: Drafts CCA 1974-compliant consumer loan agreements with FCA CONC disclosure requirements, APR/finance charge calculations, and enforceable terms for regulated and exempt consumer credit. [SCOTS] Use when drafting regulated consumer credit agreements, SECCI disclosure documents, loan agreements under the Consumer Credit Act 1974, or FCA-regulated credit agreements. [Atticus UK/Scots refined]
tags:
- agreement, drafting, regulatory, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Consumer Loan Agreement (CCA 1974 Compliant)

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

Generates a regulated consumer credit agreement satisfying the **Consumer Credit Act 1974** (CCA 1974) and the **FCA Consumer Credit Sourcebook (CONC)** disclosure requirements. For regulated mortgage contracts, see also **MCOB** (Mortgage Conduct of Business sourcebook).

## Prerequisites

Gather before drafting:

1. **Borrower** - full legal names, addresses, co-borrowers/guarantors/sureties
2. **Lender** - legal entity name, FCA authorisation number (if regulated), address, permissions
3. **Loan terms** - principal, interest rate, term, payment frequency, total charge for credit
4. **Fees** - arrangement fees, administration charges, broker fees, default charges
5. **Security** (if secured) - heritable property (Standard Security) or goods (regulated consumer hire/bill of sale)
6. **FCA requirements** - regulated credit licence/permissions check; CONC 4 pre-contract information rules
7. **Ancillary products** - payment protection insurance (PPI), loan insurance elections

## Document Architecture

| Section | Purpose |
|---|---|
| SECCI / Pre-Contract Credit Information | Mandatory FCA CONC 4 disclosures - **must be provided before agreement is made** (see CONC 4.2) |
| Key Financial Information Box | CCA 1974 prescribed financial terms (APR, total charge for credit, total amount payable) |
| Loan Terms & Conditions | Substantive contractual provisions |
| Default, Acceleration & Remedies | Events of default, s.87 default notice requirement, lender remedies |
| Insurance & Payment Application | Payment waterfall, insurance elections |
| Special Notices | Guarantor notices under CCA 1974 / Financial Ombudsman Service, default information |
| Execution & Signatures | Signature requirements (s.61 CCA 1974), copy delivery rules (s.62 to 63) |

## Core Workflow

### Step 1 - SECCI / Pre-Contract Credit Information

Provide the **Standard European Consumer Credit Information (SECCI)** form per CONC 4 Annex 1R (or the FCA's prescribed T&C sheet). This must be given **before** the agreement is made and in a durable medium.

For regulated mortgage contracts use the **European Standardised Information Sheet (ESIS)** per MCOB.

**Key headings in the SECCI box (required by CONC 4):**

| Label | Content |
|---|---|
| "APR (Annual Percentage Rate of Charge)" | Must be accurate to 1 decimal place per EU APR calculation methodology (Consumer Credit (Total Charge for Credit) Regulations 2010). Rate = total cost of credit expressed as annual percentage. |
| "Total amount of credit" | The credit limit or total sum drawn. |
| "Duration of the agreement" | Term of the agreement. |
| "Total amount payable by the borrower" | Total amount of credit plus total charge for credit. |
| "Amount of each repayment" | Amount, number, frequency and timing of each instalment. |
| "Total charge for credit" | Sum of all costs including interest, fees, charges (arrangement, broker, valuation, etc.) excluding default charges or fees for optional services. |

**Cross-verify**: The total amount of credit + total charge for credit must reconcile with the total amount payable.

### Step 2 - Substantive Loan Terms

- [ ] **Parties and promise** - full legal names, fundamental obligation
- [ ] **Loan purpose** - regulated consumer credit agreement statement per s.8 CCA 1974; include "personal credit" for amounts not exceeding £25,000 (current regulated threshold; verify current limit)
- [ ] **Prepayment/Settlement rights** - right to early settlement per s.94 CCA 1974 and Consumer Credit (Early Settlement) Regulations; rebate calculation (rule of 78 prohibited for regulated agreements)
- [ ] **Late payment/default charges** - amount, trigger conditions, FCA CONC 5.6 (charges must be a genuine pre-estimate of loss and fair); no compounding of default sums; FCA fairness requirements
- [ ] **Security** (secured on land) - Standard Security; property address, description; borrower covenants: maintain property, maintain insurance, no unauthorised transfer. For goods: bill of sale (registration required) or hire-purchase agreement
- [ ] **Unsecured statement** (unsecured) - affirmative disclosure that the obligation is unsecured
- [ ] **Total charge for credit** - itemise all interest, fees and charges included in the total charge per CCA 1974 s.20 / Consumer Credit (Total Charge for Credit) Regulations 2010

### Step 3 - Default & Remedies

Events of default: (1) missed payment, (2) failure to maintain required insurance, (3) bankruptcy/insolvency, (4) material misrepresentation, (5) borrower death if loan does not survive, (6) security impairment.

Include:

- **Default notice (s.87 CCA 1974)** - required before enforcing any term for breach. Must: specify breach, action required to remedy (minimum 14 days), date before which remedy can occur. If remedied, breach treated as not having occurred.
- **Pre-action protocol** - Pre-action Protocol for Possession Claims (mortgage/residential property) / Pre-action Protocol for Debt Claims (unsecured)
- **Acceleration clause** - only enforceable after s.87 default notice period expires and breach not remedied
- **Goods repossession (s.90 CCA 1974)** - court order required if borrower has paid 1/3 or more of total price (regulated hire-purchase / conditional sale)
- **Land repossession (s.92 CCA 1974)** - court order required for land under regulated agreements
- **Deficiency (s.89 CCA 1974)** - where a default notice is not complied with, the lender cannot recover the sum that became due as a result (for goods regulated agreements) except through standard recovery action
- **Costs** - enforcement costs and expenses per agreement terms (subject to reasonableness / FCA fairness)
- **Interest on judgment** - Courts Reform (Scotland) Act 2014 (judicial interest rate)

### Step 4 - Payment Application Waterfall

> "We will apply each payment first to unpaid default sums, then to accrued but unpaid interest, then to the principal, and finally to any other charges or fees owed under this Agreement."

`[SCOTS: Note]` - For Scottish regulated agreements, ensure payment waterfall complies with CCA 1974 and the Consumer Credit (Total Charge for Credit) Regulations 2010.

### Step 5 - Regulatory Notices

| Trigger | Notice |
|---|---|
| All regulated transactions | Borrower acknowledgment of receipt of copy of executed agreement (s.62 to 63 CCA 1974) and pre-contract information |
| Guarantor / Surety | Guarantee notice under CCA 1974 - the Financial Ombudsman Service has jurisdiction; recommended wording: *"As a guarantor/surety, you may have to pay the full amount outstanding if the borrower does not pay. You should take independent legal advice before signing. If you are unsure about this guarantee, ask the lender to explain it or seek legal advice."* |
| Default | s.87 CCA 1974 default notice (prescribed form) - must state nature of breach, action required, time period for remedy (not less than 14 days) |
| Cancellation rights | s.66A / s.67 CCA 1974 (cooling-off period for certain agreements - 14 days in most cases) `[VERIFY applicable agreement type]` |
| FCA complaints | Referral to Financial Ombudsman Service, mandatory notice |
| Scottish specific | The Consumer Rights Act 2015 - Unfair Terms provisions applicable; Standard Security enforcement requires court action |

`[SCOTS: Note]` - There is no direct equivalent to the US FTC co-signer notice. UK guarantor protections arise from the CCA 1974 guarantee provisions and the Financial Ombudsman Service jurisdiction. Use the wording suggested above as a matter of good practice.

`[SCOTS: Note]` - There is no UK equivalent of the US SCRA (Servicemembers Civil Relief Act). FCA rules and the Consumer Rights Act 2015 apply generally to all borrowers regardless of service status.

### Step 6 - Execution

- Agreement must be signed by both lender and borrower (s.61 CCA 1974)
- Document must contain all prescribed terms at signing, Copy of agreement must be given to borrower (s.62) - either at time of agreement or within 7 days (off-premises agreements)
- Properly executed agreement key, improperly executed agreements may be unenforceable without court order (s.65 CCA 1974)
- Separate signature blocks (printed name, signature, date) for each borrower, co-borrower, guarantor/surety, Lender delivers copy within prescribed timeline

### Step 7 - Post-Completion

- File copy of executed agreement, Provide required periodic statements (if running-account credit)
- Comply with CONC data reporting requirements, Register security (Register of Standard Securities / Bill of Sale registration)

## Pitfalls & Checks

- **APR calculation**: Use the EU APR methodology (Consumer Credit (Total Charge for Credit) Regulations 2010 / CONC App 1.1). The US actuarial method differs, do not use Reg Z Appendix J.
- **FCA regulatory status**: Verify the lender holds FCA authorisation (Part 4A FSMA 2000 permission) for regulated consumer credit activities. Unauthorised lending renders the agreement unenforceable (s.26A FSMA 2000).
- **Credit limit threshold**: Agreements for credit exceeding £25,000 (currently) are generally **exempt** unless secured on land or entered into for business purposes `[VERIFY current threshold, revised periodically]`.
- **Extortionate credit bargains**: s.140A to 140C CCA 1974 (unfair credit relationships) - court can reopen the credit agreement if the relationship is unfair to the borrower. Broader than US usury limits.
- **Early settlement rebate**: Use prescribed formula (Consumer Credit (Early Settlement) Regulations 2004); rule of 78 (sum of the digits) is **prohibited** for regulated agreements of more than 12 months.
- **Force-placed insurance not typical in UK**: Under FCA CONC, optional insurance products require positive election by the borrower. The US concept of force-placed/lender-placed insurance has no direct UK equivalent. `[VERIFY status for secured consumer credit]`
- **Formatting**: Legible font; prescribed information must be "easily legible" (s.61 CCA 1974); SECCI must follow prescribed format; numbered provisions; consecutive pages
- **Unfair Terms**: Consumer Rights Act 2015 Schedule 2 - non-core terms (including default charges, variation clauses, acceleration) are subject to fairness assessment. Class-action waivers in consumer credit agreements are likely unfair under the Consumer Rights Act 2015.
- **Jury trial and arbitration**: Different treatment under Scots law, debate on questions of law; arbiter appointment may be through existing dispute resolution provisions
- **Tag `[VERIFY]`** on any statutory citation or regulatory reference you cannot independently confirm

---

## Scotland/UK Adaptation

### Key legislative framework

| US Concept | Scotland/UK Equivalent |
|---|---|
| Truth in Lending Act (TILA), 15 U.S.C. § 1601 et seq. | **Consumer Credit Act 1974** (CCA 1974) - the primary consumer credit statute for the UK |
| Regulation Z, 12 CFR Part 1026 | **FCA Consumer Credit Sourcebook (CONC)** - binding FCA rules under FSMA 2000; **MCOB** for regulated mortgage contracts |
| TILA Disclosure Box (page 1) | **SECCI** (Standard European Consumer Credit Information) per CONC 4 Annex 1R, must be provided **before** the agreement is made; **ESIS** for mortgages |
| APR, actuarial method per Reg Z Appendix J | **EU APR formula** under Consumer Credit (Total Charge for Credit) Regulations 2010 - same concept, different calculation methodology |
| Force-placed insurance | **Not typical in UK consumer credit** - insurance must be taken out by borrower; optional insurance requires positive election under FCA CONC. `[VERIFY for secured consumer credit]` |
| FTC co-signer notice | **No direct equivalent** - UK guarantor protections under CCA 1974 guarantee provisions; Financial Ombudsman Service jurisdiction |
| SCRA (Servicemembers Civil Relief Act) | **Not applicable** - FCA rules apply to all borrowers; no general rate cap for UK service personnel |
| Right-to-cure | **CCA 1974 s.87** - default notice required before enforcement; **Pre-action Protocol for Debt Claims** |
| Repossession | **CCA 1974 s.90** (goods, court order if 1/3+ paid); **s.92** (land, court order required) |
| Deficiency judgment | **CCA 1974 s.89** - sum not recoverable after default notice non-compliance if goods regulated agreement; standard recovery action otherwise |
| Prepayment rights / Penalty-free | **CCA 1974 s.94** - right to early settlement; Consumer Credit (Early Settlement) Regulations 2004; rebate formula prescribed |
| State law overlay | **FCA rules (CONC)** + **CCA 1974** - uniform across England/Wales/Scotland but separate Scottish court procedures |
| Usury limits | **CCA 1974 s.140A to 140C** - unfair credit relationships (court can reopen agreement); broader than US usury concepts |
| Class-action waiver | **Consumer Rights Act 2015** - likely unfair under Unfair Terms provisions; no class actions in Scotland (see `class-action-complaint` skill) |

### Jurisdictional notes

- **Scotland**: Consumer credit is reserved to Westminster (UK Parliament). However, enforcement of security (Standard Securities, bills of sale) follows Scots law procedures. The Sheriff Court and Court of Session have jurisdiction. Pre-action protocols differ, the Pre-action Protocol for Possession Claims applies.
- **GBP amounts**: All monetary values should be expressed in £ GBP. The current regulated credit threshold is £25,000 (`[VERIFY]` current figure, amended by statutory instrument).
- **FCA authorisation**: Lenders must hold FCA Part 4A FSMA 2000 permission for regulated consumer credit activities.
- **Scottish courts**: The Sheriff Court (Simple Procedure or Ordinary Cause depending on amount) handles most consumer credit enforcement actions.

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
