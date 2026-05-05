---
name: revolving-credit-agreement
language: en
description: Drafts a market-standard U.S. revolving credit agreement for bilateral or syndicated facilities. Covers facility structure, SOFR/base rate interest, borrowing base, LC sublimits, collateral, guarantees, covenants, conditions precedent, events of default, and remedies. Use when drafting or negotiating revolving credit facilities, asset-based lending agreements, or syndicated loan documents. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Revolving Credit Agreement

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

Generates a complete revolving credit agreement for U.S. commercial lending. Supports bilateral and syndicated structures with asset-based or cash-flow underwriting.

## Prerequisites

Gather before drafting:

1. **Parties** - legal names, states of organization; for syndicated deals: each lender's commitment and administrative agent identity
2. **Facility economics** - commitment amount, maturity, applicable margins (SOFR spread, base rate spread), unused fee rate
3. **Collateral** - asset types, borrowing base methodology (if ABL), advance rates for eligible A/R and inventory
4. **Guarantors** - legal names, scope (unconditional/absolute vs. limited)
5. **Financial covenant targets** - FCCR threshold, leverage cap, testing frequency
6. **Permitted baskets** - indebtedness, investments, restricted payments, asset sale thresholds

## Document Structure

Draft the following sections in order:

### 1. Header & Parties

- Execution date, legal names, states of organization, Syndicated: agent designation, lender commitment schedule, Recitals (transaction context, refinancing purpose)
- Core defined terms: Agreement, Borrower, Lender, Obligations

### 2. Credit Facility

| Element | Key Points |
|---|---|
| Revolving Commitment | Amount in figures and words |
| Availability Period | Closing → Maturity; early termination triggers |
| LC Sublimit | Max face amount; reduces revolving availability dollar-for-dollar |
| Borrowing Base | Advance rates vs. eligible A/R/inventory; BB certificate schedule |
| Commitment Reductions | Voluntary (borrower) and mandatory (specified events) |

### 3. Borrowing Mechanics

| Loan Type | Notice | Lead Time |
|---|---|---|
| Base Rate | 11:00 a.m. | Same day |
| SOFR (1M/3M/6M) | 11:00 a.m. | 2 to 3 business days |

Borrowing notice must specify: amount, funding date, rate option, interest period (SOFR only). Each request is a deemed rep that all conditions precedent remain satisfied.

### 4. Interest, Fees & Payments

**Rates:**
- **SOFR** - Term SOFR (CME) + credit spread adjustment + applicable margin
- **Base Rate** - highest of (i) Fed Funds + 0.50%, (ii) Prime, (iii) Term SOFR + 1.00%, plus applicable margin
- **Default** - applicable rate + 2.00% p.a.

**Fees:**
- Unused commitment fee (0.125 to 0.50% p.a., quarterly in arrears on daily avg unused)
- LC fronting fee (negotiated, monthly on outstanding face)
- LC participation fee (applicable margin, monthly)

Payments in immediately available funds; no setoff, counterclaim, or deduction.

### 5. Repayment & Prepayment

- No scheduled amortization; bullet at maturity, Voluntary prepayment without premium; notice per rate type, Mandatory prepayment if outstandings exceed commitment or borrowing base, Re-borrowing permitted; prepayments do not permanently reduce availability

### 6. Collateral & Security

- First-priority lien on all present and after-acquired assets (A/R, inventory, equipment, general intangibles, investment property, proceeds)
- Reference Security Agreement / Pledge Agreement; UCC filings in all jurisdictions, Real property: Mortgage / Deed of Trust if applicable, Permitted liens: PMSI, statutory tax, negotiated exceptions, Borrower duties: maintain collateral, deliver periodic reports, permit field exams, BB certificates: weekly or monthly (keyed to availability thresholds)

### 7. Guarantees

- Identify each guarantor; reference separate Guaranty Agreement, Type: unconditional/absolute; all-obligations vs. limited scope, Address upstream/cross-stream/downstream structure and fraudulent transfer exposure, Release triggers: subsidiary sale, metric achievement, or negotiated conditions

### 8. Representations & Warranties

Made at closing; deemed repeated on each borrowing and financial delivery:

- Due organization, valid existence, jurisdiction qualification, Corporate authority; duly authorized execution, No violation of organizational docs, law, or material contracts; consents obtained, Financial statements GAAP-compliant; no MAE since date thereof, No undisclosed liabilities, Good title; no liens except Permitted Liens, No material IP infringement, No pending/threatened litigation with reasonably expected MAE, Compliance: environmental, ERISA, tax, anti-corruption (FCPA/OFAC/AML)

### 9. Covenants

**Affirmative:**

| Covenant | Requirement |
|---|---|
| Annual financials | Audited, 90 to 120 days post-FY + compliance certificate |
| Quarterly financials | Unaudited, 45 days post-quarter + compliance certificate |
| Taxes | Pay before delinquency; good-faith contest with reserves |
| Insurance | Property/casualty/liability/BI; lender as loss payee + additional insured |
| Compliance | Maintain licenses, permits, corporate existence |
| Default/MAE notice | Prompt written notice |
| Books & records | GAAP-compliant; permit inspections and field audits |

**Negative (with typical permitted baskets):**

| Restriction | Basket |
|---|---|
| Indebtedness | PMSI up to $[__]; intercompany; refinancings |
| Liens | Permitted Liens only |
| Investments/acquisitions | Subsidiary; liquid instruments; general basket $[__] |
| Restricted payments | Only if no Default + financial tests met |
| Fundamental changes | Lender consent required |
| Asset dispositions | Ordinary course; consent above $[__] |
| Affiliate transactions | Arm's-length; board approval + fairness opinion above $[__] |

**Financial (if applicable):**

| Covenant | Range | Testing |
|---|---|---|
| Min. FCCR | 1.10 to 1.25x | Quarterly TTM |
| Max. leverage | 2.50 to 4.00x | Quarterly TTM |
| Min. asset coverage | Per BB certificate | Weekly/monthly |

Define EBITDA with inclusions/exclusions (extraordinary items, non-cash charges, pro forma acquisition adjustments). Compliance certificates due with financial deliveries.

### 10. Conditions Precedent

**Initial funding:**
- Executed loan documents (credit agreement, security agreement, guaranty, note)
- Organizational docs, good standing, board resolutions, incumbency, Borrower counsel opinion (authority, enforceability, no conflicts)
- Insurance evidence with lender as loss payee, UCC/lien searches; UCC-1 filings, Payoff letters and lien terminations for refinanced debt, Closing certificate (no Default; reps true; no MAE)

**Each subsequent borrowing:**
- Borrowing notice properly delivered, Reps true in all material respects, No Default exists or would result, Post-funding outstandings ≤ commitment and BB availability

### 11. Events of Default & Remedies

| Event | Grace |
|---|---|
| Principal payment | None |
| Interest/fee payment | 3 to 5 business days |
| Affirmative covenant breach | 30 days after notice |
| Financial covenant breach | None |
| Negative covenant breach | None |
| Material misrepresentation | None |
| Cross-default | Per other agreement; threshold $500K-$5M |
| Bankruptcy/insolvency | None (auto-acceleration for voluntary) |
| Unsatisfied judgment | Unstayed [30] days above $[__] |
| Change of control | As defined |

Remedies: accelerate obligations; terminate commitment; impose default rate; exercise all rights under loan documents and UCC Article 9.

### 12. Miscellaneous & Execution

- **Governing law** - state of lender or borrower's principal operations
- **Jurisdiction** - exclusive; JURY TRIAL WAIVER IN ALL CAPS
- **Notices** - delivery, courier, or confirmed email
- **Amendments** - written, all required parties; no implied waiver
- **Assignments** - borrower: consent required; lender: free to eligible institutions
- **Expenses** - borrower reimburses reasonable attorney fees
- **Indemnification** - borrower indemnifies; carve-out for gross negligence/willful misconduct
- **Counterparts/e-signatures** - permitted and binding
- **Signatures** - full entity name, authorized officer, secretary attestation

## Pitfalls & Verification

- [VERIFY] **Usury** - confirm rate caps under applicable state law before finalizing margins
- [VERIFY] **SOFR** - use Term SOFR (CME) + ARRC credit spread adjustment; confirm tenor matches borrower needs
- **UCC Article 9** - file financing statements and execute control agreements at or before closing; run pre-closing lien searches
- **Fraudulent transfer** - analyze guaranty/upstream security for corporate benefit and solvency
- **Syndicated deals** - add pro rata sharing, voting thresholds (majority for operational; all-lender for fundamental), agency provisions
- **Bank regulatory** - if lender is regulated, confirm lending limits and capital requirements
- **Reg Z** - generally inapplicable to commercial facilities; confirm borrower is not a natural-person consumer, All thresholds, baskets, and ratios are placeholders, calibrate to borrower profile and lender credit policy

---

Key changes from the original:

- **Removed `tags`** - not part of the Agent Skills spec; only `name` and `description` are required frontmatter
- **Tightened description** - trimmed from 458 to 338 chars while preserving all trigger keywords
- **Collapsed verbose sections** - merged Miscellaneous + Signature Blocks into one section; consolidated the three covenant types under a single "Covenants" heading
- **Eliminated checkbox syntax** from reps/warranties and conditions precedent, these are output instructions, not interactive checklists
- **Converted prose-heavy tables** to compact bullet lists where tables added no structural value (e.g., fees, repayment)
- **Renamed "Guidelines" → "Pitfalls & Verification"** with `[VERIFY]` tags for items requiring human confirmation
- **Reduced from ~211 lines to ~165 lines** (~22% reduction) while preserving every substantive legal element

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
