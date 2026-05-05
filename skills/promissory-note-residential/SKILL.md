---
name: promissory-note-residential
language: en
description: Atticus UK/Scots legal skill for promissory-note-residential. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Promissory Note (Residential, Scotland/UK)

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

Draft an enforceable debt obligation secured by residential property, compliant with the Consumer Credit Act 1974 (where applicable), the Requirements of Writing (Scotland) Act 1995, and Scottish property law.

[SCOTS: Note] This skill is adapted for Scottish residential property transactions. Key differences: Scottish property uses "standard security" (not mortgage/deed of trust); promissory notes secured by residential property are less common than in the US, most residential lending is done via standard securities with direct debit arrangements. For seller-financed purchases, a personal bond (formal promissory note) combined with a standard security is used. The Consumer Credit Act 1974 may apply to certain lending arrangements.

## Prerequisites

1. Transaction documents: missives (Scottish contract of sale, exchange of letters forming binding contract), deed of conditions (if any), standard security.
2. Borrower(s): full legal names (as on government ID); joint and several liability status if multiple. In Scotland, consider "joint" vs. "several" vs. "joint and several" liability, different property law implications.
3. Lender: full legal name; entity type + jurisdiction of formation if applicable.
4. Property: full postal address matching the standard security exactly. Include title deed reference (Land Register title number or Sasines description).
5. Loan terms: principal amount, interest rate (fixed or variable parameters), amortisation period, maturity date.
6. Jurisdiction rules: usury, no statutory usury ceiling in Scotland/UK (the Consumer Credit Act 1974 regulates "extortionate credit" for consumer agreements; Unfair Relationships provisions in CCA 2006). Late charge caps, notice requirements, prepayment penalty restrictions.

## Output Structure / Process

### 1. Header & Parties

| Element | Requirements |
| --- | --- |
| Title | "PROMISSORY NOTE" or "BOND" (Scots law uses "bond" for formal debt instruments) |
| Execution date | Full month/day/year; establishes payment commencement and prescriptive period reference (s.6 Prescription and Limitation (Scotland) Act 1973 - 5 years for sums due under a contract) |
| Property address | Exact match to standard security (street, unit, city, postcode) |
| Borrower(s) | Full legal names; joint and several if multiple; note marital status. In Scotland: distinguish between "obligants" (joint debtors) |
| Lender | Full legal name; entity type + jurisdiction if applicable |

### 2. Financial Terms

| Element | Requirements |
| --- | --- |
| Principal | Numerals AND words; unconditional promise to pay. Use GBP (£). |
| Interest rate | Fixed: exact percentage. Variable: index, margin, adjustment frequency, caps, initial rate. [SCOTS: Note] Bank of England base rate is common reference. |
| Calculation method | Simple vs. compound; 365-day year vs. actual-day year; accrual on unpaid principal. Scottish law presumes simple interest unless agreed otherwise. |
| Payment schedule | Amount, frequency, due date, commencement date, total number of payments |
| Payment application | Order: accrued interest → principal → fees/charges |
| Maturity date | Explicit calendar date; balloon disclosure if not fully amortising |

### 3. Borrower Rights

- **Prepayment**: with/without penalty; written notice; application method (reduce term / payment / balloon). [SCOTS: Note] Prepayment penalties are enforceable but must not be a "penalty" in the common law sense, must be a genuine pre-estimate of loss. The Unfair Terms in Consumer Contracts Regulations may apply for consumer borrowers.
- **Partial prepayment**: permitted Y/N; minimum amounts.
- **Grace period**: typically 10 to 15 calendar days.
- **Late charge**: 4 to 5% of overdue P&I (not escrow); must characterise as administrative cost, not penalty. Check CCA 1974 limits for regulated agreements.

### 4. Default & Remedies

Events of default:
- [ ] Failure to make payment when due
- [ ] Failure to pay balance at maturity
- [ ] Breach of standard security covenants
- [ ] Bankruptcy/sequestration filing (personal insolvency) or liquidation (corporate)
- [ ] Material misrepresentation in loan application
- [ ] Failure to maintain property insurance
- [ ] Failure to pay council tax or property charges

Notice and cure:
- Written notice: specify default, cure amount, cure deadline (typically 30 days).
- Delivery: personal delivery or recorded delivery to property address / last known address.
- Cure = overdue amounts + late charges + costs → note reinstated.
- Repeated defaults may permit acceleration without further notice.

Acceleration:
- Upon uncured default, lender may declare entire balance immediately due.
- [SCOTS: Note] Scottish standard securities have a statutory calling-up procedure (s.19 Conveyancing and Feudal Reform (Scotland) Act 1970) - a calling-up notice with 2 months' notice is required before enforcing the security. The promissory note acceleration is separate but the lender cannot enforce the standard security without following statutory procedures.
- Anti-waiver: acceptance of late/partial payments does not waive acceleration rights.

### 5. Security & Cross-Default

- Reference security instrument by type: **Standard Security** (Scottish equivalent of mortgage), date, and Land Register title number.
- [SCOTS: Note] Scottish residential property is secured by a "standard security" under the Conveyancing and Feudal Reform (Scotland) Act 1970. There is no "deed of trust" or "mortgage" in the US sense. The standard security must be registered with Registers of Scotland.
- Cross-default: breach of either instrument = default under both.
- Cross-collateralisation only if applicable, flag consumer protection implications.

### 6. General Provisions

| Provision | Content |
| --- | --- |
| Governing law | Scots law, mandatory for Scottish heritable property (immovable property lex situs rule) |
| Jurisdiction | Scottish courts (Sheriff Court or Court of Session depending on amount) |
| Waiver | No waiver of one default waives subsequent; late payment acceptance ≠ waiver |
| Modification | Written only; signed by both parties; no oral modifications |
| Severability | Invalid provisions severable; remaining terms survive |
| Successors/assigns | Binds borrower's heirs/successors; lender may assign without borrower consent |

### 7. Execution

- Signature lines for all borrowers with printed names and dates.
- [SCOTS: Note] Under the Requirements of Writing (Scotland) Act 1995, a promissory note or bond is a formal document requiring subscription by the granter. For probative (self-proving) status: either (a) two witnesses, or (b) a solicitor or notary public certifying the document. Electronic signatures may be sufficient for non-probative status but witnesses are recommended for enforcement.
- Representative capacity notation if signing as trustee or agent.
- Acknowledgment: borrower confirms receipt of copy, opportunity to consult counsel, voluntary execution.

## Guidelines

- Verify interest rate, no statutory usury ceiling in Scotland/UK but the Consumer Credit Act 1974 prevents "extortionate credit" (ss.140A-140C CCA 1974 as amended). This is broader than a simple rate cap and covers the overall relationship.
- If lender is a consumer credit lender, the Consumer Credit Act 1974 may require FCA authorisation and specific disclosure (pre-contract credit information, right to withdraw). Check whether the loan is a "regulated credit agreement."
- Cross-check all terms (names, amounts, dates, property description) against the standard security.
- Verify amortisation math; confirm payments retire principal by maturity or clearly disclose balloon amount.
- Late charge caps: no statutory late charge ceiling in Scotland/UK but must not be a "penalty clause" (common law test, genuine pre-estimate of loss). For regulated consumer credit agreements, CCA 1974 limits apply.
- Maintain unconditional promise-to-pay language.
- Avoid cross-collateralisation in residential notes unless counsel confirms no additional disclosure obligations.
- Draft in plain language understandable to non-attorney borrowers while remaining legally precise.
- Use GBP (£) for all monetary amounts, not USD ($).

## Scotland/UK Adaptation

**Status**: Done, fully adapted for Scottish residential property law.

### Key Changes from US Version

| US Term | Scottish Equivalent |
|---|---|
| Deed of Trust / Mortgage | Standard Security (Conveyancing and Feudal Reform (Scotland) Act 1970) |
| UCC Article 3 (negotiability) | Common law of bills and notes / Bills of Exchange Act 1882 (Scotland applies it too) |
| Deed of trust (third-party trustee) | Standard security (direct creditor-debtor) |
| County land records | Register of Scotland (Land Register or Sasines Register) |
| State usury cap | No statutory usury ceiling; CCA 1974 "unfair relationships" test applies |
| FRCP / state summary judgment | Ordinary cause summary decree (Sheriff Court) |
| TILA / Regulation Z disclosures | Consumer Credit Act 1974 (Early Repayment, Pre-contract Information) |
| Closing Disclosure (TRID) | Scottish Law Society (SLS) standard missives + LBTT return |
| Notarisation (US format) | Witnessed subscription under Requirements of Writing (Scotland) Act 1995 |
| USD | GBP (£) |
| ZIP Code | Postcode |
| County Court | Sheriff Court |
| Foreclosure | Calling-up / notice of default → sale by court action |

### Scottish Standard Security Procedure

Enforcement of a standard security secured by a promissory note follows a specific statutory process:
1. **Calling-up notice** (s.19, 1970 Act): 2 months' formal notice required before calling up the security
2. **Notice of default** (s.21, 1970 Act): for non-payment, a 21-day notice is required
3. **Court action**: if default not cured, the lender raises an action for payment and/or sale
4. **Decree**: decree for payment + warrant to sell the property
5. **Prescription**: sums due under the note prescribe after 5 years (s.6 Prescription and Limitation (Scotland) Act 1973) unless relevant acknowledgment

### Consumer Protection (Scotland)

- **Mortgage Rights (Scotland) Act 2001**: provides protection to occupiers, the creditor must serve Form BB notice on occupiers before enforcing
- **Tenancy deposit protection**: not relevant to standard securities
- **Council tax arrears**: can be secured by the standard security ranking, include in default provisions

### Forms

- See `scots-forms/` directory for:
  - Scottish Government Model Private Residential Tenancy Agreement (reference, note tenancy differs from ownership)
  - Registers of Scotland Standard Security guidance
  - Scottish Law Society standard missives guidance

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
