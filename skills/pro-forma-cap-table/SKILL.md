---
name: pro-forma-cap-table
language: en
description: Drafts a pro forma capitalization table modeling ownership before and after a financing event or corporate transaction. Calculates dilution, conversion mechanics, option pool impacts, and ownership on as-converted and fully-diluted bases. Use when modeling seed rounds, Series A/B/C financings, convertible note or SAFE conversions, option pool expansions, stock splits, or cap table restructurings. [Atticus UK/Scots refined]
tags:
- analysis, corporate, drafting, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Pro Forma Capitalization Table

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

Models a company's ownership structure before and after a contemplated transaction, showing dilution effects and economic implications for all stakeholders.

## Prerequisites

1. **Corporate documents** - certificate of incorporation, stockholder agreements, option plans, convertible note/SAFE agreements, prior cap tables
2. **Current share register** - all holders by name, class, share count; outstanding options with exercise prices and vesting; warrants with terms
3. **Preferred stock terms** - liquidation preferences (multiple, participating/non-participating), anti-dilution provisions, conversion ratios, dividend rights per series
4. **Transaction terms** - investment amount, pre-money valuation, price per share, new investor allocations, option pool target, conversion mechanics (caps, discounts, interest)

## Output Structure

### Section 1: Header & Assumptions

| Element | Detail |
|---|---|
| Company legal name | As registered with Secretary of State |
| Date of preparation | Current date |
| Designation | "PRO FORMA, not final or binding" |
| Reference date | Baseline capitalization date |
| Transaction type | Seed, Series [X], note conversion, pool expansion, etc. |

**Assumptions table:**

| Assumption | Value |
|---|---|
| Pre-money valuation | $ amount + derivation method |
| New capital raised | $ amount |
| Post-money valuation | $ amount |
| Price per share | Calculation: pre-money ÷ pre-money fully-diluted shares |
| Liquidation preference | Multiple + participating/non-participating |
| Anti-dilution | Weighted average / full ratchet / none |
| Option pool timing | Pre-money or post-money inclusion |
| Option pool target | % of post-transaction fully-diluted |
| Convertible instrument terms | Cap, discount, interest rate, MFN |

### Section 2: Pre-Transaction Capitalization

| Holder / Category | Class | Shares Held | As-Converted % | Fully-Diluted % |
|---|---|---|---|---|

**Row order:**
1. Preferred stock, reverse chronological by series
2. Common stockholders, founders, employees, other
3. Option pool: outstanding grants (exercise price range), exercised (now common), available for future grants
4. Warrants / other derivatives (exercise price, expiration)

Footnote each preferred series with liquidation preference amount, participation rights, accrued dividends.

**Definitions:**
- **As-converted** = all preferred converts to common; excludes unissued pool shares
- **Fully-diluted** = as-converted + all outstanding options/warrants + entire unissued pool

### Section 3: Transaction Adjustments

Present each adjustment sequentially.

**New equity issuance:**

| Investor | Shares Issued | Price/Share | Investment ($) |
|---|---|---|---|

**Convertible note conversion:**

| Holder | Principal | Accrued Interest | Total Converting | Conversion Price | Shares Issued |
|---|---|---|---|---|---|

Conversion price = min(cap-based price, discounted price). Show derivation.

**SAFE conversion:**

| Holder | Investment | Valuation Cap | Discount | Conversion Price | Shares Issued |
|---|---|---|---|---|---|

**Option pool expansion:**

| Item | Shares |
|---|---|
| Pre-transaction pool | X |
| New shares added | X |
| Post-transaction pool | X |
| Pool as % of post-transaction FD | X% |

Note whether expansion is pre-money (dilutes existing holders) or post-money (dilutes all including new investors).

**Repurchases / cancellations** (if applicable): holder, shares, price, reason.

### Section 4: Post-Transaction Capitalization

| Holder / Category | Class | Pre-Txn Shares | New / Converted | Post-Txn Shares | As-Converted % | Fully-Diluted % |
|---|---|---|---|---|---|---|

Same row order as Section 2; new series listed first. Include subtotals per class and grand total.

**Verification checklist:**
- [ ] All FD ownership percentages sum to 100.00%
- [ ] All as-converted percentages sum to 100.00%
- [ ] Post-txn shares = pre-txn + new issuances + conversions + pool expansion − repurchases
- [ ] Price per share × new shares = total new investment

### Section 5: Exit Waterfall (if multi-series preferred)

Model distribution at illustrative exit values:

| Exit Value | Series [Latest] Pref | Series [Earlier] Pref | Common + Options | Total |
|---|---|---|---|---|
| 1× post-money | | | | |
| 2× post-money | | | | |
| 3× post-money | | | | |

Show how liquidation preference stacks and participation caps affect each class.

### Section 6: Notes & Disclaimers

- Methodology disclosure (option pool in/out of FD denominator)
- Anti-dilution mechanics explanation (weighted average formula if applicable)
- Contingencies: board/stockholder/regulatory approval required, Standard disclaimer: pro forma only, not legal/financial/tax advice, review with counsel

## Guidelines

- Share counts as whole numbers; percentages to two decimal places, Bold subtotals and grand totals; mark every section "PRO FORMA, CONFIDENTIAL"
- Define terms on first use ("Fully-Diluted Capitalization," "As-Converted Basis") and use consistently, Flag missing or estimated data with `[ESTIMATED]` or `[to be determined]` and explain basis, Anti-dilution: weighted average is standard; full ratchet is rare, confirm which applies, Option pool convention: Silicon Valley standard is pre-money inclusion (dilution borne by existing holders); note if post-money convention is used, Do not provide tax, securities compliance, or accounting treatment analysis

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
