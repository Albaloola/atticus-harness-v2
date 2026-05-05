---
name: asset-liability-summaries
language: en
description: 'Produces structured asset and liability summaries from financial documents for legal proceedings. Extracts valuations, ownership classifications, and encumbrances, then outputs net-worth overview, categorized schedules, disputed items, and documentation gaps. Use when preparing financial summaries for divorce/dissolution, estate planning, bankruptcy, business valuation, or settlement negotiations. Trigger on: net worth summary, marital estate, balance sheet, asset schedule, liability schedule, community/separate property. [Atticus UK/Scots refined]'
tags:
- analysis, litigation, summarization, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Asset & Liability Summary

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

Court-ready financial summary covering all assets and liabilities with ownership classification, valuations, encumbrances, and source citations.

## Prerequisites

1. **Source documents** - bank/brokerage statements, tax returns, mortgage/loan documents, business financials, appraisals, retirement account statements
2. **Effective date** - valuation date controlling all figures (date of separation, petition date, death date)
3. **Matter type** - divorce, estate, bankruptcy, business valuation, or general litigation
4. **Jurisdiction** - community property vs. equitable distribution; exemption rules if bankruptcy

## Workflow

### Step 1: Executive Overview

Produce a summary table:

| Field | Value |
|---|---|
| Total Assets | $ |
| Total Liabilities | $ |
| Net Worth / Equity | $ |
| Effective Valuation Date | |
| Disputed Items (excluded from totals) | $ |

### Step 2: Asset Schedule

Group by category. Capture per asset:

| Field | Capture |
|---|---|
| Description | Name, account number (last 4), address |
| Category | Real property / Financial account / Retirement / Business interest / Vehicle / Personal property / IP / Other |
| Ownership | Separate / Community / Joint / Entity-held |
| Fair Market Value | $ as of valuation date |
| Encumbrances / Liens | $ outstanding; creditor name |
| Net Equity | FMV minus encumbrances |
| Acquisition Date | If legally relevant (marital, step-up basis) |
| Source | Document name, page/exhibit number |

Categories to cover: real property, bank accounts, investment accounts, retirement accounts (flag tax-deferred), business interests (ownership %, valuation method), vehicles, life insurance (cash surrender value), IP/royalties, receivables/notes, significant personal property.

### Step 3: Liability Schedule

Group by category. Capture per liability:

| Field | Capture |
|---|---|
| Creditor / Obligee | Name, account identifier |
| Category | Mortgage / HELOC / Auto / Student / Credit card / Tax / Judgment / Business / Other |
| Outstanding Balance | $ as of valuation date |
| Interest Rate | % |
| Secured / Unsecured | If secured, identify collateral |
| Responsible Party | Individual / Joint / Entity |
| Source | Document name, page/exhibit number |

Categories to cover: mortgages/HELOCs, auto loans, student loans, credit cards, personal loans, tax obligations (include penalties/interest), judgments, business debt, deferred compensation.

### Step 4: Disputed & Uncertain Items

Flag assets or liabilities where ownership, value, or existence is contested or unverified:

| Item | Issue | Recommended Action |
|---|---|---|
| [Asset/Liability] | Value / ownership dispute / missing docs | Appraisal / subpoena / expert valuation |

### Step 5: Notes & Recommendations

Address each applicable area:
- **Valuation methodology** - method per non-liquid asset (appraisal, book value, tax assessment)
- **Missing documentation** - items referenced but lacking corroboration
- **Discrepancies** - conflicts between documents (differing balances, dates)
- **Tax considerations** - retirement (pre-tax), real property (basis, depreciation recapture), installment obligations
- **Expert valuation needed** - business interests, unappraised real property, complex instruments
- **Assumptions** - all assumptions where documentation was incomplete

## Pitfalls & Checks

- Maintain consistent valuation date across all items; flag anything valued on a different date, Cite source document and page for every figure, must survive discovery scrutiny, Never impute unsupported values; use `[NEEDS VALUATION]` where data is absent, Retirement accounts: gross value ≠ net value after tax, note when after-tax figure is needed, Business interests: state whether value is enterprise, equity, or book value; flag if formal appraisal needed, Marital matters: distinguish separate property (pre-marital, gift, inheritance) from community/marital, apply jurisdiction default rules, Bankruptcy: note exemption eligibility (homestead, retirement, vehicle) alongside each asset

---

**Key changes from original:**
- Trimmed frontmatter description (~30% shorter), removed redundant `summary` tag, Replaced "Output Structure" with sequential "Workflow" steps for clearer agent guidance, Collapsed asset/liability category checklists from checkbox lists into inline prose (saves ~20 lines)
- Renamed "Guidelines" to "Pitfalls & Checks" for scannability, Removed decorative horizontal rules and redundant section numbering, Cut ~30 lines total while preserving every legal domain requirement and output field

Want me to try writing the file again, or would you prefer to copy this content directly?

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
