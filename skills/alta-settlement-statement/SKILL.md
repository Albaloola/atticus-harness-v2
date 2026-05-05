---
name: alta-settlement-statement
language: en
description: Drafts a mathematically balanced ALTA Settlement Statement for U.S. real estate closings, allocating debits and credits between buyer and seller with prorations, payoffs, lender fees, title charges, and transfer taxes. Enforces balance verification (seller credits minus debits equals cash to seller; buyer debits minus credits equals cash from buyer) and cross-references title commitment, loan documents, and purchase agreement. Use when preparing closing financials, settlement statements, HUD-equivalent documents, or real estate closing allocations. [Atticus UK/Scots refined]
tags:
- drafting, summary, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# ALTA Settlement Statement

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

Drafts a mathematically balanced, ALTA-compliant settlement statement allocating all transaction costs between buyer and seller at closing.

## Prerequisites

1. **Purchase and Sale Agreement** - sales price, earnest money, seller concessions, cost allocation.
2. **Title Commitment** - premiums, endorsements, exception items requiring payoff.
3. **Loan Documents** - new loan amount, lender fees, prepaid items.
4. **Payoff Statements** - existing mortgage(s) and lien balances with per diem rates.
5. **Closing/Disbursement Dates** - both required for proration calculations.
6. **Tax Records** - current year amount, payment status (arrears vs. advance), last paid date.
7. **HOA Documents** - dues, transfer fees, special assessments.
8. **Commission Instructions** - total amount and brokerage split.

## Output Structure

### Header Block

| Field | Content |
| --- | --- |
| Settlement Date | Date documents are signed |
| Disbursement Date | Date funds are distributed |
| Settlement Agent | Name, firm, address, phone |
| Property Address | Street address + legal description reference |
| Buyer/Borrower | Full legal name(s) |
| Seller | Full legal name(s) |

### Seller's Transaction

**Credits to Seller:** Gross sales price; seller financing; prorated items in seller's favor; earnest money (if seller-held).

**Debits against Seller:** Existing mortgage payoff(s) + per diem interest; second liens and judgment payoffs; commissions (listing + selling); seller-paid closing costs per contract; owner's title insurance (if seller-paid); transfer taxes; recording fees; repair credits / concessions to buyer; HOA dues, transfer fees, estoppel fees; prorated property taxes (seller's share through closing).

**Net:** Cash Due to Seller (or Cash Required from Seller if negative).

### Buyer's Transaction

**Debits to Buyer:** Gross sales price; lender origination fees, points, underwriting; appraisal, credit report, flood cert; prepaid interest (closing through month-end); initial escrow deposit (tax + insurance reserves); hazard insurance premium; owner's title insurance (if buyer-paid); lender's title insurance + endorsements; recording fees (deed + mortgage); transfer taxes; HOA transfer fees, working capital; prorated items owed to seller.

**Credits to Buyer:** Earnest money deposit(s); new loan proceeds; seller concessions / closing cost credits; assumed loans or seller financing; prorated items in buyer's favor.

**Net:** Cash Required from Buyer (or Cash Due to Buyer if negative).

## Proration Calculations

| Charge Type | Method |
| --- | --- |
| Annual charges (taxes, HOA annual) | 365-day year; seller responsible through day before disbursement |
| Monthly charges (HOA monthly) | Actual days in month |
| Existing mortgage interest | Per diem rate from payoff statement |
| Prepaid lender interest | Daily rate × days from closing through month-end |

Tax proration: Confirm whether jurisdiction collects in arrears (seller credits buyer for elapsed year) or advance (buyer credits seller for prepaid period). If current year bills are not yet issued, use prior year as estimate and mark `[ESTIMATE, SUBJECT TO FINAL TAX BILL]`.

## Balance Verification

- [ ] Seller credits − seller debits = cash to seller
- [ ] Buyer debits − buyer credits = cash from buyer
- [ ] Loan proceeds + cash from buyer = sales price + all buyer-side charges
- [ ] Payoff figures match current payoff statements to the penny
- [ ] Prorations use confirmed disbursement date (not estimated)
- [ ] Lender fees match Closing Disclosure line-for-line (if applicable)
- [ ] Title charges match title company invoice
- [ ] Commission amounts match executed commission instructions
- [ ] Earnest money appears as buyer credit only (not duplicated as seller debit)

## Guidelines

- Mark unconfirmed figures `[ESTIMATE, CONFIRM BEFORE CLOSING]`.
- All amounts to two decimal places; no rounding mid-calculation.
- Allocate transfer taxes per contract; default to jurisdictional custom if silent.
- Recording fee allocation (deed vs. mortgage) varies by state, follow contract, then local custom.
- For simultaneous-issue title rates, confirm premium split with title company before using schedule rates.
- ALTA Settlement Statement does not replace CFPB Closing Disclosure on residential consumer mortgage transactions, both may be required.
- Payoff statements typically expire in 30 days; do not finalize until current payoff is confirmed.

## Troubleshooting

- **Statement does not balance:** Re-verify that every charge appears on exactly one side. Check that earnest money is a buyer credit only and not also deducted from seller. Recompute prorations from scratch using disbursement date.
- **Proration dispute:** Confirm arrears vs. advance collection method for the jurisdiction. Verify whether the contract specifies a proration method or cutoff date that overrides default.
- **Payoff mismatch:** Request a refreshed payoff statement; per diem interest may have shifted the total. Confirm the payoff good-through date matches the disbursement date.
- **Lender fees do not match Closing Disclosure:** Compare line-by-line; lender may have updated fees after initial disclosure. Flag discrepancies as `[VERIFY]` and resolve with lender before closing.

## Scotland/UK Adaptation

This skill is written for the US **ALTA Settlement Statement** used in real estate closings. Scotland uses a different conveyancing process and document structure. Use the following adaptations.

### Key Changes for Scotland

| US Concept | Scottish Equivalent |
|---|---|
| ALTA Settlement Statement / HUD-1 | **Completion Statement** (prepared by solicitor for each party) |
| Purchase and Sale Agreement | **Missives** (exchange of letters forming concluded contract) |
| Title search / Title insurance | **Land Register search** + **Personal search** - no title insurance |
| Deed of Trust / Mortgage | **Standard Security** (registered with Land Register) |
| Deed | **Disposition** (deed transferring title) |
| Closing / Settlement | **Settlement** (or completion) - date funds and documents exchanged |
| Recording | **Registration in Land Register** (Registers of Scotland) |
| Transfer taxes (county/state) | **LBTT** (Land and Buildings Transaction Tax) - paid by buyer to Revenue Scotland |
| Escrow / Title company | **Solicitor** acts as settlement agent (no independent escrow in typical practice) |
| HOA / Condo | **Tenement management / Factor** - common charges, factoring fees |
| Property taxes (county) | **Council tax** (national system, bands A to H) |
| 1099-S (seller reporting) | No equivalent in Scotland |
| CFPB Closing Disclosure | No equivalent, LBTT return filed with Revenue Scotland |

### Completion Statement Structure (Scotland)

Instead of a single ALTA statement, Scottish conveyancing typically produces **two separate completion statements**:

**Buyer's Completion Statement:**
- **Debits:** Purchase price, LBTT, registration dues, legal fees, search fees, Standard Security registration fee
- **Credits:** Deposit paid, mortgage advance, pro-rated council tax, pro-rated factoring
- **Net:** Cash due from buyer

**Seller's Completion Statement:**
- **Credits:** Purchase price, pro-rated council tax prepaid
- **Debits:** Standard Security redemption, legal fees, estate agent fees, searches, Land Register fee
- **Net:** Cash due to seller

### Key Scottish-Specific Items

| Item | Notes |
|---|---|
| **LBTT** | Buyer pays; rates: up to 2% (£145K to £250K), 5% (£250K to £325K), 10% (£325K to £750K), 12% (over £750K). ADS (Additional Dwelling Supplement) 6% since Dec 2024 |
| **ADS** | Additional Dwelling Supplement, applies to buyers of second/additional homes |
| **Home Report** | Seller must provide (includes single survey, energy report, property questionnaire) - cost ~£400 to £800 |
| **Council Tax** | Pro-rated at settlement; bands A to H; daily rate based on annual bill |
| **Factor fees** | If tenement flat, common charges, building insurance, repairs |
| **Disposition** | Signed by seller before completion; registered after settlement |
| **Entry** | Date of settlement, possession, keys, and risk pass to buyer |
| **Standard Security** | Scottish mortgage document, registered with Land Register |

### Proration Methods (Scotland)

| Item | Method |
|---|---|
| Council tax | Daily rate (annual band ÷ 365); seller pays through day before settlement |
| Factor / service charges | Annual charge; seller pays period before settlement |
| Ground burden / feu duty | Rare (abolished); only surviving ground burdens |

### Regulatory Bodies (Scotland)

- **Revenue Scotland** - Administers LBTT
- **Registers of Scotland** - Land Register, General Register of Sasines
- **Law Society of Scotland** - Regulates solicitors (mandatory practice rules on conveyancing, CPD, financial handling)
- **UK Finance** (formerly CML) - Lender requirements for Standard Security

### LBTT Filing

- Buyer (or solicitor) submits **LBTT return** to Revenue Scotland online, Must be filed within **30 days of completion**
- LBTT is payable on completion (not before)
- Penalties for late filing/ late payment

### Key Differences Summary

| US Practice | Scottish Practice |
|---|---|
| One settlement statement (ALTA) | Two completion statements (buyer + seller) |
| Title insurance | Public register searches (Land Register + Personal Register) |
| Escrow agent (independent or co.) | Solicitor acts as settlement agent |
| Property tax (county/state) | Council tax (single national system in Scotland) |
| Transfer tax (state/county) | LBTT (Revenue Scotland, national) |
| HOA fees / estoppel certificate | Factor fees / common charges (Tenement Management Scheme) |
| Closing Disclosure (TRID) | No equivalent, LBTT return + completion statement |

### Practitioner Notes

- The skill's **mathematical methodology** (debits vs. credits, balance verification, proration calculations) transfers directly to Scottish completion statements
- **Replace** all US-specific items (ALTA, HUD, CFPB, TRID, transfer taxes, title insurance) with Scottish equivalents, The core proration and balancing logic is the same, just change the charge items and rules, US-style title insurance does not exist in Scotland; due diligence relies on Land Register title sheets, property searches, and personal searches, See the guidance note in `scots-forms/Scotland-conveyancing-completion-guide.md` for detailed Scottish conveyancing procedures

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
