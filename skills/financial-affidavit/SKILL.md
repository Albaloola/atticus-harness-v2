---
name: financial-affidavit
language: en
description: '[SCOTS] Drafts sworn affidavits of means and financial disclosure statements for Scottish family law proceedings. Produces court-compliant financial statements covering income, expenses, assets, and liabilities with Scottish oath/affirmation. Use when preparing financial disclosures, affidavits of means, Form F9, mandatory financial statements in divorce, dissolution of civil partnership, child support, spousal periodical allowance, or financial provision matters in the Sheriff Court or Court of Session. [Atticus UK/Scots refined]'
tags:
- SCOTS, drafting, litigation, family-law, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# [SCOTS] Affidavit of Means and Financial Disclosure

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

Drafts a sworn financial disclosure for Scottish family law proceedings that satisfies mandatory disclosure requirements and withstands cross-examination.

## Prerequisites

Before drafting, confirm:

1. **Forum** - Sheriff Court (Ordinary Cause Rules, Chapter 33, Family Actions) or Court of Session (Rules of the Court of Session, Chapter 49, Family Actions); check whether Form F9 (Affidavit of Means) or a particular style is mandated
2. **Financial records** - payslips (3 to 6 months), P60, P45 (if applicable), self-assessment tax returns (2 years), bank/investment statements, mortgage/loan documents
3. **Case details** - court, court reference number, party names as on initial pleadings
4. **Deponent info** - full legal name, date of birth, National Insurance number (last 4), address, employment details, health status if relevant to earning capacity

## Quick Start

```
Workflow:
- [ ] Confirm forum and check for mandatory style / Form F9
- [ ] Gather financial records and case details
- [ ] Draft heading block with deponent info
- [ ] Draft income disclosure (employment + unearned + self-employment)
- [ ] Itemise monthly outgoings by category
- [ ] Inventory all assets with market value and encumbrances
- [ ] List all liabilities with balances and payments
- [ ] Add special disclosures where applicable
- [ ] Append Scottish oath / affirmation and signature block
- [ ] Cross-check internal consistency
- [ ] Compile production (exhibit) list
```

## Output Structure

### 1. Heading Block

Include: court (full name and sheriffdom or Session), court reference number, document title (per local practice - "Affidavit of Means" or "Financial Disclosure"), deponent info (name, address, DOB, NI no. last 4, marital/civil partnership status, employer, job title, length of employment, education, health if relevant).

### 2. Income Disclosure

**Employment income:** Gross monthly salary/wages, pay frequency, overtime, shift allowances, bonuses (discretionary/guaranteed), commission, tips, profit-sharing, share option gains, benefits in kind (car, health insurance, accommodation) - state frequency and monthly average.

**Unearned income:**
- Investment: interest, dividends, capital gains, rental income (gross less ordinary expenses)
- Pension: state pension, occupational/private pensions, annuity income, lump sum distributions, State benefits: Universal Credit, Child Benefit, Tax Credits, Carer's Allowance, Disability Living Allowance, Personal Independence Payment, Housing Benefit, Prior support: existing spousal periodical allowance or child support maintenance from other relationships

**Self-employment (if applicable):** Gross receipts, ordinary business expenses, net profit, cross-reference attached tax returns and business accounts.

**Totals:** Gross monthly income and net monthly income (after mandatory deductions: income tax, National Insurance, pension contributions).

**Required productions:** Payslips, P60, tax returns, business accounts, bank statements (12 months).

### 3. Monthly Outgoings

Itemise by category:

| Category | Items |
|---|---|
| Housing | Mortgage/rent, council tax, buildings and contents insurance, repairs and maintenance |
| Utilities | Electricity, gas, water/sewer, telephone, broadband, TV licence, streaming |
| Household | Food, toiletries, cleaning, clothing, takeaways/dining, furnishings |
| Transport | Car payment/lease, VED, insurance, fuel, servicing, MOT, parking/permits; public transport costs |
| Insurance | Health, dental, life, critical illness, income protection (not payroll-deducted) |
| Debt service | Credit card minimums, personal loans, student loans, other instalments |
| Children | Childcare, school fees (nursery/private), uniforms, extracurricular activities, uninsured medical, child support for other children |
| Discretionary | Entertainment, gifts, charitable donations, pet care, subscriptions, memberships, savings |

State total monthly outgoings. Flag any significant income/expenditure discrepancy (potential litigation risk on maintenance claims).

### 4. Asset Inventory

For each asset: ownership (sole/joint), acquisition date, market value, encumbrances.

| Asset Class | Required Detail |
|---|---|
| Heritable property (heritage) | Address / title number, purchase date/price, market value (survey/estate agent/HSPC index), mortgage balance, net equity |
| Vehicles | Registration number, make/model, mileage, valuation (e.g. Parkers/What Car?), outstanding finance |
| Bank accounts | Institution, account type, sort code / last 4 account number, balance as at date |
| Investments | Stocks, shares, ISAs, unit trusts, investment bonds, current values |
| Pensions | State Pension forecast, occupational, personal, stakeholder pensions, CETV (Cash Equivalent Transfer Value) |
| Business interests | Company shares, partnership interest, sole trader, valuation if available |
| Other | Valuables (jewellery, art, antiques), life insurance policy value, intellectual property, pending claims/trusts, inheritance prospects |

### 5. Liabilities

For each debt: creditor, original amount, current balance, monthly payment, interest rate, secured/unsecured.

| Debt Type | Additional Detail |
|---|---|
| Mortgage(s) | Secured on property; original loan amount; repayment vs. interest-only |
| Vehicle finance | HP / PCP / lease, tied to specific vehicle |
| Credit cards | Last 4 of card number, credit limit, balance, minimum payment, APR |
| Other instalment | Personal loans, student loan (Plan 1/Plan 2/Plan 4), HMRC debts, council tax arrears |
| Contingent | Guarantor obligations, cautionary obligations |
| Support arrears | Arrears of spousal periodical allowance or child support |
| Collections / defaults | Status and arrangement details |

State total outstanding debt. Cross-check that debt payments in outgoings match debts listed here.

### 6. Special Disclosures

Include where applicable:
- Anticipated income/expense changes (redundancy, promotion, retirement, inheritance)
- Support obligations for non-parties (elderly parents, adult disabled children)
- Bankruptcy or trust deed history (sequestration / trust deed for creditors, date, reference, status)
- Expected tax rebates or pending legal claims, Asset transfers/dispositions within past 2 to 3 years (or per local practice)
- Loans from family/friends not on credit files, Extraordinary expenses or hardship

### 7. Scottish Oath / Affirmation and Signature

```
AFFIDAVIT

I, [DEPONENT],
(Full Name)

residing at
[ADDRESS]

hereby depone and say that
[ADDRESS]

I [identify relationship to deponent, e.g. am the pursuer / defender in this action].

I have read this Affidavit of Means and Financial Disclosure
and the information contained herein is true, accurate and
complete to the best of my knowledge and belief.

I understand that making a false statement may subject me
to proceedings for perjury.

ALL OF WHICH IS MATTER OF FACT

________________________________    ________________
[Printed Name]                      Date
Signature: _____________________

SWORN / AFFIRMED at ________________
this _____ day of _________________ 20____
Before me,
_____________________________
Solicitor / Notary Public / Justice of the Peace
[qualification]
```

For affidavits, the deponent signs in the presence of a solicitor, Notary Public, or Justice of the Peace who then signs the docquet. Court rules may require the affidavit to be "sworn" (oath on religious text) or "affirmed" (secular). Ask the deponent which they prefer.

### 8. Productions

Number and list all documents referred to in the affidavit (payslips, bank statements, valuations, etc.) consecutively as numbered productions.

## Pitfalls and Checks

- **Check for mandatory styles first** - the Scottish courts often prescribe Form F9 or specific styles; use where applicable
- **Redact sensitive data** - use last 4 of NI number and account numbers unless local rules require full disclosure
- **Internal consistency is critical** - income vs. outgoings, debt payments vs. liabilities, asset values vs. encumbrances must reconcile
- **Date-stamp all balances** - every financial figure must reference an "as at" date
- **Do not characterise assets as matrimonial/partnership property or non-matrimonial** unless client and solicitor have made that determination, list all assets, note ownership type only, and reference relevant criteria under the Family Law (Scotland) Act 1985
- **Attach all referenced productions** - create a numbered production list cross-referenced to the affidavit text
- **Oath or affirmation** - confirm the deponent's preference; do not default unilaterally
- **Scottish rules differ on hearsay** - verify whether the affidavit is for the Family Action procedure (Ordinary Cause Rules / RCS) which permits affidavit evidence for financial provision

---

## Scotland/UK Adaptation

This skill has been adapted for use under Scottish family law. Key differences from the original US approach:

| US Concept | Scottish/UK Equivalent |
|---|---|
| FL-150 / CJD-111 / state-specific forms | Form F9 (Affidavit of Means, Sheriff Court); comparable style for Court of Session |
| Family law proceedings (divorce, child support, spousal maintenance) | Family actions under the Family Law (Scotland) Act 1985; Civil Partnership Act 2004 |
| W-2s / 1099s | P60, P45, self-assessment tax return (HMRC) |
| Social Security Number (last 4) | National Insurance number (last 4) |
| County / State | Sheriffdom / Scotland |
| 28 U.S.C. § 1746 (unsworn declaration) | Not applicable, Scottish affidavits require sworn/affirmed execution before a solicitor, Notary Public, or JP |
| Notary Public (U.S. style) | Solicitor, Notary Public, or Justice of the Peace in Scotland |
| Perjury (state/federal law) | Perjury (common law, Scotland) - false statement on oath |
| Marital property / separate property | Matrimonial property (Family Law (Scotland) Act 1985 s. 10); special rules for non-matrimonial property |
| USD ($) | GBP (£) |
| Federal / state child support guidelines | Child Support Act 1991 / Child Support Maintenance (Scottish) provisions; CSA / CMEC for formula assessment; court for direct application |
| Alimony / spousal maintenance | Spousal periodical allowance (s. 9(1)(b)); capital sum (s. 8(2)); pension sharing (s. 8(1)(baa) - Welfare Reform and Pensions Act 1999) |
| Discovery / mandatory disclosure | Affidavit of Means / Form F9 - mandatory exchange in contested family actions |

See also: Ordinary Cause Rules Chapter 33 (Family Actions) for Sheriff Court; Rules of the Court of Session Chapter 49 for Outer House.

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
