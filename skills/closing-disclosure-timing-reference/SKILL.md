---
name: closing-disclosure-timing-reference
language: en
description: Provides timing compliance context for Scottish/UK property transaction completion. Covers settlement date calculation, missives conclusion timing, LBTT return deadlines, and key regulatory periods under Scottish conveyancing practice. The core methodology (business-day counting, delivery-deemed-receipt rules) is preserved as an adaptable framework. Use when calculating Scottish settlement deadlines, earliest permitted completion dates, LBTT filing windows, or understanding how US TRID/Reg Z concepts map to Scottish transaction practice. [Atticus UK/Scots refined]
tags:
- SCOTS [SCOTS, scotland, uk, conveyancing, property-completion, settlement-timing]
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Closing Disclosure Timing Reference, Scotland/UK Adaptation

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

[SCOTS: Note] This skill originally documents the US TRID/Reg Z framework (TILA-RESPA Integrated Disclosure) under 12 CFR § 1026.19(f). That framework is US-specific and does not apply in Scotland or the UK. This adaptation preserves the deadline calculation methodology as a **worked example of structured timing analysis**, mapped onto Scottish conveyancing practice. All references below should be read in the Scottish context unless explicitly labelled as US-original text preserved for reference.

TRID timing rules for CD delivery deadlines, re-disclosure triggers, and waiver procedures under 12 CFR § 1026.19(f).

[SCOTS: Note] In Scotland, there is no direct equivalent to the US Closing Disclosure (CD) or the three-business-day receipt rule. Scottish property completion is governed by missives (the contractual exchange culminating in a legally binding agreement), settlement (completion / date of entry), and subsequent registration with Registers of Scotland. The timing framework below is preserved as a **methodology example** for how a structured deadline calculation system might be adapted to the Scottish context. See the Scotland/UK Adaptation section at the end for detailed mapping.

## Prerequisites

1. Scheduled closing (consummation) date
2. Delivery method (hand, mail, electronic)
3. Any post-CD changes to APR, loan product, or prepayment penalty

[SCOTS: Note] In the Scottish context, prerequisites for settlement timing would include: (1) the agreed date of entry (settlement date); (2) the conclusion date of missives (when the contract becomes binding); (3) the mortgage offer validity period and any conditions; (4) receipt of the completion statement from the conveyancer; (5) available funds for purchase price, LBTT, and outlays; and (6) home report / mortgage valuation timing.

## Quick Start, Deadline Calculation

[SCOTS: Note] The following calculation is a **US-regulatory methodology example** showing how business-day counting works under § 1026.19(f). The same mathematical approach can be adapted for Scottish deadlines (e.g., LBTT 30-day filing window, missives conclusion lead times), substituting Scottish/UK bank holidays and trading-day definitions.

Count back from closing date, excluding closing day itself. Skip Sundays and federal holidays.

```
Closing: Wednesday Mar 19
  Day 1 ← Tue Mar 18
  Day 2 ← Mon Mar 17
  Day 3 ← Fri Mar 14  (skip Sun)
Latest receipt: Fri Mar 14
If mailing: mail by Tue Mar 11 (add 3 more business days back)
```

With holiday:

```
Closing: Tuesday Jan 21  (MLK Day = Mon Jan 20 - excluded)
  Day 1 ← Fri Jan 17
  Day 2 ← Thu Jan 16
  Day 3 ← Wed Jan 15
Latest receipt: Wed Jan 15
```

| Delivery Method | Lead Time Before Closing |
|---|---|
| Hand delivery | 3 business days |
| Mail or electronic | 6 business days |

[SCOTS: Note] For Scottish practice, the relevant lead-time calculation would typically be: (a) LBTT return must be filed within **30 days of the effective date** (usually completion); (b) registration at Registers of Scotland, apply promptly after settlement; (c) standard security discharge, lender processing time varies (allow 2 to 4 weeks); (d) funds transfer, CHAPS payments typically need to be arranged 1 to 2 days before settlement date.

## Core Rules

### Three-Business-Day Receipt Rule - § 1026.19(f)(1)(ii)

[SCOTS: Note] There is no equivalent three-business-day receipt rule under Scottish law. The US rule requires the borrower to receive the Closing Disclosure at least 3 business days before consummation. In Scotland, the buyer's solicitor prepares the completion statement and submits it to the buyer for approval before settlement. There is no statutory minimum pre-settlement period defined by consumer credit regulation, the timing is agreed between conveyancer and client.

- Borrower must **receive** CD at least 3 business days before consummation
- "Consummation" = date borrower becomes contractually obligated, All borrowers on the loan must receive the CD, Creditor bears compliance responsibility

[SCOTS: Note] In Scotland, the point of contractual obligation is the **conclusion of missives** - when the buyer's offer and seller's acceptance are formally agreed in writing. "Consummation" in US terms would map to **settlement / date of entry** in Scotland (when funds are transferred and the keys are handed over). Registration with RoS follows settlement. The buyer's solicitor (not the creditor) typically bears responsibility for providing the completion statement.

### Business Day Definitions - § 1026.2(a)(6)

| Definition | Used For | Excludes |
|---|---|---|
| **General** | CD 3-day waiting period | Sundays + federal public holidays |
| **Specific** | 7-day LE waiting period | Days creditor's offices are closed |

The CD 3-day rule uses the **General** definition.

**Federal holidays:** New Year's Day, MLK Jr. Day (3rd Mon Jan), Presidents Day (3rd Mon Feb), Memorial Day (last Mon May), Independence Day, Labor Day (1st Mon Sep), Columbus Day (2nd Mon Oct), Veterans Day, Thanksgiving (4th Thu Nov), Christmas Day.

Saturday holiday → observed Friday. Sunday holiday → observed Monday.

[SCOTS: Note] **Scottish/UK bank holidays differ.** For Scottish business-day counting, the following are non-business days:
- **Scottish bank holidays:** New Year's Day, 2 January, Good Friday, Early May Bank Holiday (1st Mon May), Spring Bank Holiday (last Mon May), Summer Bank Holiday (1st Mon Aug), St Andrew's Day (30 Nov), Christmas Day, Boxing Day.
- **Additional:** All Sundays; Saturdays are **not** automatically excluded but many conveyancing offices are closed.
- **Local variations:** Some areas observe local holidays (e.g., Glasgow Fair, Edinburgh Trades, Ayr Holiday) - these can affect settlement timing.
- A UK-wide business-day definition would use the **FCA's working day** definition (any day other than Saturday, Sunday, Christmas Day, Good Friday, or bank holidays under the Banking and Financial Dealings Act 1971).

### Delivery & Deemed Receipt - § 1026.19(f)(1)(iii)

| Method | Deemed Receipt |
|---|---|
| Hand delivery | Same day |
| Mail / overnight | 3 business days after mailing |
| Electronic | 3 business days after sending (unless earlier receipt documented) |

Electronic delivery requires E-SIGN compliance: consumer consent, hardware/software disclosure, delivery evidence retained.

[SCOTS: Note] In Scotland/UK, electronic delivery and signing are governed by the **Electronic Communications Act 2000** and **UK eIDAS Regulation** (Electronic Identification and Trust Services), not by E-SIGN. The Requirements of Writing (Scotland) Act 1995 sets out the formalities for electronic documents in Scottish property transactions. Electronic signing of conveyancing documents is now widely accepted, subject to lender and RoS requirements. Most Scottish conveyancers communicate completion statements by email and obtain approval electronically, though CHAPS transfer instructions are typically confirmed by phone or secure portal for security reasons.

## Re-Disclosure Triggers - § 1026.19(f)(2)(ii)

[SCOTS: Note] US re-disclosure triggers (APR change, loan product change, prepayment penalty) have no direct Scottish equivalent. In Scotland, changes after missives conclusion are governed by the missives terms and the Scottish Standard Clauses. Material changes (e.g., price renegotiation, date of entry change, inclusion/exclusion of fixtures) require a formal missives variation. If missives have not yet concluded, changes can be incorporated into ongoing negotiations. The following US material is preserved as a worked example of a change-trigger framework.

Only **three changes** restart the 3-day waiting period:

| Trigger | Threshold |
|---|---|
| **APR increase** | Fixed: >0.125%; ARM/irregular: >0.25%. Decreases do NOT trigger. |
| **Loan product change** | Fixed↔ARM, index change, initial fixed period change |
| **Prepayment penalty added** | Previously undisclosed. Removal does NOT trigger. |

### Changes That Do NOT Restart the Clock

These require a corrected CD at or before consummation but no new waiting period:

- Settlement charge increases, seller credit changes, escrow changes, Loan amount changes (unless product type changes)
- Interest rate decreases, cash-to-close changes, clerical corrections

[SCOTS: Note] Under **MCOB (Mortgage Conduct of Business) rules** (FCA Handbook), there is no equivalent three-day re-disclosure trigger. However, MCOB 5.1 (the pre-application disclosure rules) and MCOB 7 (the disclosure requirements at the offer stage) require lenders to provide key information within specified timeframes. If a material change occurs to a mortgage offer after it has been issued and accepted by the consumer, the lender must issue a new offer or vary the existing one, and the 14-day reflection period (MCOB 6.7.15 to 6.7.19) may restart. Note that MCOB rules apply to regulated mortgage contracts and home purchase plans, not to all property transactions.

## Waiver of Waiting Period - § 1026.19(f)(1)(iv)

All conditions must be met:

1. Bona fide personal financial emergency exists
2. Consumer provides a **dated written statement in their own words** describing the emergency and waiving the right
3. All primarily liable consumers must sign
4. Statement **must not be a pre-printed form**

**Valid:** imminent foreclosure, medical crisis deadline, impending job relocation, natural disaster, COVID-19 emergency (per CFPB guidance).

**Invalid:** vacation plans, convenience, avoiding rate lock fees, seller pressure.

[SCOTS: Note] The US emergency waiver provisions have no direct Scottish equivalent. Under Scottish contract law (governed by missives), once missives are concluded, both parties are contractually bound to complete on the agreed date of entry. If a party cannot settle on time, they are in breach of contract unless a *missives variation* or *minute of extension* is agreed in writing. Scottish Legal Aid Board or Law Society of Scotland guidance on financial hardship may apply in some cases, but there is no statutory waiver equivalent to § 1026.19(f)(1)(iv).

## Seller CD & Post-Consummation

| Rule | Timing | Responsible Party |
|---|---|---|
| Borrower CD | ≥3 business days before consummation | Creditor |
| Seller CD | No later than day of consummation | Settlement agent |
| Post-consummation corrections | 30 calendar days | Creditor |
| Tolerance cure refunds | 60 calendar days | Creditor |
| Record retention | 5 years | Creditor |

[SCOTS: Note] Scottish conveyancing does not have a borrower/seller CD distinction. Key Scottish post-completion obligations include:

| Obligation | Timing | Responsible Party |
|---|---|---|
| **LBTT return and payment** | Within **30 days** of effective date (completion) | Buyer's solicitor (usually) |
| **Registration of disposition** | Promptly after settlement (no statutory deadline but recommended within 30 to 60 days) | Buyer's solicitor |
| **Standard security registration** | Immediately after settlement (lender requires registration as soon as possible) | Buyer's solicitor |
| **Discharge of existing standard security** | After redemption of seller's mortgage; can take 2 to 8 weeks depending on lender | Seller's solicitor |
| **Home Report availability** | Must be available when property is marketed; valid for 12 weeks | Seller's estate agent / surveyor |
| **Anti-Money Laundering checks** | Before settlement (must be completed before funds transfer) | Both solicitors |
| **Record retention** | Solicitors: 6+ years (per Law Society of Scotland practice rules) | Solicitor |

## Common Pitfalls

| Mistake | Correct Approach |
|---|---|
| Counting closing day as a business day | Start count the day before closing |
| Forgetting to skip Sundays | Sundays always excluded under General definition |
| Missing observed holiday shifts | Sat→Fri, Sun→Mon |
| Treating electronic delivery as instant | Still carries 3-day deemed receipt presumption |
| Using pre-printed waiver form | Consumer must write statement in own words |
| Accepting convenience as emergency | Only bona fide financial emergencies qualify |

[SCOTS: Note] Common pitfalls specific to Scottish conveyancing timing:

| Mistake | Correct Approach |
|---|---|
| Assuming missives are concluded when informal verbal agreement reached | Missives are only concluded when **written** offer and acceptance are formally exchanged |
| Leaving LBTT filing to last minute | Submit LBTT return and pay **within 30 days of completion** - Revenue Scotland penalties apply for late filing |
| Failing to account for local bank holidays | Scottish bank holiday dates vary from English/Welsh, check Local Holidays applicable to the sheriffdom |
| Arranging CHAPS transfer on settlement day without prior preparation | CHAPS payments must typically reach the seller's solicitor's designated account by **early afternoon** on settlement date |
| Assuming electronic signatures are always acceptable for RoS | RoS has specific requirements for electronic documents, check RoS current practice guidance |
| Forgetting the mortgage valuation report is separate from home report | Lender may require its own valuation even if home report provides a valuation, this can add 1 to 2 weeks to mortgage offer timing |
| Mistaking date of entry for settlement | Date of entry is specified in missives; settlement (completion) happens on that date; registration follows later |

## Regulatory Citations

- § 1026.19(f)(1)(ii) - Three-business-day receipt rule
- § 1026.19(f)(1)(iii) - Deemed receipt rules
- § 1026.19(f)(1)(iv) - Waiver of waiting period
- § 1026.19(f)(2)(ii) - Re-disclosure triggers
- § 1026.2(a)(6) - Business day definitions, CFPB Official Interpretation, Comments 19(f)(1)(ii)-1 through -4
- CFPB Official Interpretation, Comments 19(f)(1)(iv)-1 through -3
- CFPB Interpretive Rule on COVID-19 Flexibilities (April 2020)

[SCOTS: Note] Relevant Scottish/UK regulatory references for property transaction timing:

### Primary Scottish Legislation
- **Land and Buildings Transaction Tax (Scotland) Act 2013** - LBTT framework and filing deadlines
- **Land Registration etc (Scotland) Act 2012** - Current registration framework at Registers of Scotland
- **Requirements of Writing (Scotland) Act 1995** - Formalities for deeds and electronic documents
- **Conveyancing and Feudal Reform (Scotland) Act 1970** - Standard security and discharge provisions

### Consumer Credit (UK)
- **Consumer Credit Act 1974** - Consumer credit agreements (relevant where buyer is obtaining credit)
- **MCOB (Mortgage Conduct of Business) Rules** - FCA Handbook, Sections MCOB 1 to 8: pre-application, disclosure, and post-offer requirements
- **FCA PERG (Perimeter Guidance) Manual** - Guidance on regulated activities including mortgage lending

### Electronic Transactions
- **Electronic Communications Act 2000** - Legal recognition of electronic signatures
- **UK eIDAS Regulation** - Electronic identification and trust services (post-Brexit UK version)
- **RoS Digital Strategy and Practice Guidance** - Current requirements for electronic registration submissions

### Professional Standards
- **Law Society of Scotland Practice Rules** - Solicitor conduct including conveyancing and timing
- **Scottish Standard Clauses** (published by the Law Society of Scotland, latest edition) - Standard missives framework

### Tax
- **LBTT return:** Must be filed within 30 days of the effective date (usually completion). Penalties apply for late filing.
- **Additional Dwelling Supplement (ADS):** If applicable, payable on the same timeline as the main LBTT return.
- **LBTT filing date:** The effective date is generally the date of completion (settlement). The 30-day count includes weekends and holidays, this is a calendar day deadline, not business days.

---

## Scotland/UK Adaptation

This section details the key adaptations made to convert the original US TRID/Reg Z skill into a Scottish/UK conveyancing timing reference.

### Summary of Changes

1. **Tags:** Added `[SCOTS]`, `scotland`, `uk`, `conveyancing`, `property-completion`, `settlement-timing`
2. **Description:** Updated to reference Scottish/UK conveyancing context explicitly
3. **Structure:** Original US regulatory content preserved inline with [SCOTS: Note] annotations marking each adaptation
4. **Core methodology:** Business-day counting approach preserved as a transferable analytical framework
5. **New section:** This "## Scotland/UK Adaptation" section added

### Key Substitutions

| US Term | Scottish/UK Equivalent |
|---|---|
| Closing Disclosure (CD) | Completion statement (from buyer's solicitor) |
| Three-business-day receipt rule | Not applicable, agreed timing under Scottish Standard Clauses |
| Consummation | Settlement / Date of entry |
| CD (Closing Disclosure) delivery | Completion statement sent by solicitor to buyer for approval |
| CFPB (Consumer Financial Protection Bureau) | FCA (Financial Conduct Authority) / Scottish Law Commission |
| Regulation Z (12 CFR § 1026.19(f)) | Consumer Credit Act 1974 / MCOB rules |
| Federal holidays | Scottish/UK bank holidays |
| E-SIGN | Electronic Communications Act 2000 / UK eIDAS |
| Closing agent / settlement agent | Conveyancing solicitor |
| Escrow / impound accounts | Not used in Scottish residential conveyancing in the same way |
| Rate lock | Mortgage offer validity period (usually 3 to 6 months) |
| Prepayment penalty | Rare in UK residential mortgages (regulatory restrictions apply) |
| TRID / TILA-RESPA Integrated Disclosure | Scottish Standard Clauses / missives framework |
| CFPB Official Interpretations | FCA PERG guidance / Law Society of Scotland guidance |

### Scottish Conveyancing Timeline Summary

A typical Scottish property transaction timeline (simplified):

```
Note of interest / offer submitted
       ↓
Missives negotiation (days to weeks)
       ↓
**Missives concluded** ← legally binding contract formed
       ↓
Buyer arranges mortgage (if not already arranged)
       ↓
Solicitor prepares completion statement → sent to buyer for approval
       ↓
Buyer transfers funds (purchase price + LBTT + outlays)
       ↓
**Settlement / Date of entry** ← keys handed over, funds transferred
       ↓  (within 30 days)
LBTT return filed with Revenue Scotland
       ↓
Registration of disposition at Registers of Scotland
       ↓
Standard security registered (if mortgaged)
       ↓
Discharge of seller's existing standard security
```

### Forms and Guidance Downloaded

The following Scottish/UK forms have been downloaded to `scots-forms/` alongside this skill:

| Form | Source | Description |
|---|---|---|
| `LawSociety_Scottish_Standard_Clauses_Ed2.pdf` (434 KB) | Law Society of Scotland | Client guide to Scottish Standard Clauses edition 2 |
| `LawSociety_Scottish_Standard_Clauses_Ed3.pdf` (316 KB) | Law Society of Scotland | Client guide to Scottish Standard Clauses edition 3 |
| `LBTT_Lease_Review_Return_Form.pdf` (445 KB) | Revenue Scotland | LBTT lease review return form |
| Additional ROS and LBTT forms referenced | Registers of Scotland / Revenue Scotland | Guidance available online at ros.gov.uk and revenue.scot |

---

**Reformatted: Removed `tags` from spec (not part of Agent Skills standard, discovery is via `description` keywords); added inline [SCOTS: Note] annotations throughout; preserved original content as transferable methodology example.**

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
