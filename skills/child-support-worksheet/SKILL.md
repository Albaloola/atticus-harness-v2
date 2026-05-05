---
name: child-support-worksheet
language: en
description: Drafts a child maintenance calculation worksheet by extracting financial data, applying the CMS statutory scheme or Scottish court variation, and calculating obligations. Triggers when preparing CMS applications, variation requests, minute of agreement provisions, or Sheriff Court family actions involving child maintenance. [Atticus UK/Scots refined]
tags:
- SCOTS, checklist, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Child Maintenance Calculation Worksheet (Scotland / UK)

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

Produces a calculation-ready child maintenance analysis compliant with the CMS statutory scheme under the Child Support Act 1991, or where applicable, the Sheriff Court's powers under the Family Law (Scotland) Act 1985.

## Prerequisites

- Jurisdiction identified, confirm whether CMS statutory scheme applies (default for most cases) or whether application to Sheriff Court under the Family Law (Scotland) Act 1985 is appropriate (for high-income, over-16 children in education, or where adjustment to CMS rate is sought)
- Income documentation for the paying parent (payslips, P60, HMRC RTI data, SA302 self-assessment, tax year overview, accounts)
- Children's information (names, DOBs, residence, whether they qualify as "qualifying children" under the Child Support Act 1991 or are over 16 and in qualifying education)
- Shared care / contact arrangements (exact number of overnight stays per year, critical for CMS rate adjustment)
- Existing child maintenance arrangements (court orders, written agreements, CMS case numbers, amounts, previous applications)
- Special expenses claimed as variations (private school fees, travel costs for contact, disability costs, pre-existing debt (s.28B to 28G Child Support Act 1991))
- Court filing requirements if seeking a Sheriff Court order (local form mandates, caption format)

## Workflow

### 1. Case Caption & Party Information

Use Sheriff Court official form (Form F1 for Ordinary Cause family action, Form F5 for minute of variation) if court proceedings are involved. For CMS applications, the statutory scheme does not use court captions.

Identify parties as **applicant / respondent** (CMS) or **pursuer / defender** (Sheriff Court). For each party: full legal name, DOB, National Insurance Number (for CMS applications), address, employer, representative/solicitor (if any). List each qualifying child with name, DOB, current residence, special needs, and whether they are under 16 or over 16 in qualifying education (s.55 Child Support Act 1991).

**Important:** The receiving parent is referred to as the "person with care" (PWC) in CMS terminology. The paying parent is the "non-resident parent" (NRP).

### 2. Gross Weekly Income (Paying Parent Only)

Convert all figures to weekly amounts for the paying parent only. The receiving parent's income is **not** a factor in the CMS basic calculation.

Income sources for the paying parent: wages/salary, overtime (if regular and likely to recur), bonuses/commissions (use average over a representative period, typically 52 weeks), self-employment net profit (gross receipts minus allowable business expenses only, HMRC-deduced net profit), rental income (net of allowable expenses), investment income, pension income, other income as defined in the Child Support (Maintenance Calculations and Special Cases) Regulations 2008.

**Deemed income (earning capacity):** If the paying parent is voluntarily unemployed or underemployed, CMS may calculate based on earning capacity - "deemed income" under reg. 52 of the 2008 Regulations. Cite basis: work history, qualifications, local wage data, recent employment record.

- CMS uses **gross weekly income** (no deductions for tax, NI, or pension, unlike the US "adjusted gross income" approach)
- Cite source document and line for each figure (payslip, P60, SA302, bank statements)
- Flag missing documentation with `[MISSING, CMS EVIDENCE REQUEST]`

### 3. CMS Rate Determination (No Allowable Deductions, This Step Differs from US Model)

**Unlike US income shares models, the CMS scheme does not deduct income tax, NI, or pension contributions before applying the rate.** The calculation applies to **gross weekly income**.

Income bands (2024/25 standard rates, verify current figures at [GOV.UK](https://www.gov.uk/child-maintenance-service)):

| Income Range (weekly) | Rate Applied |
|--|--|
| £0 to £7 (or on certain benefits) | Flat Rate: £7/week |
| £7.01 to £100 | Reduced Rate: formula-based (typically a percentage of income between £7 and £100) |
| £100.01 to £800 (or £3,000) | Basic Rate or Basic Plus Rate (depending on shared care) |
| Above £800 (basic rate limit) | Basic Rate on first £800 + reduced rate on income between £800 and £3,000 (the "additional income" rate at ~9% for 1 child) |

**Gross Weekly Income** = the total from Step 2 (no deductions).

### 4. Basic Maintenance Obligation (CMS Percentage Model)

Apply percentages to the paying parent's gross weekly income:

**Basic Rate** (paying parent has less than 52 overnight stays/year with the child/ren):
- 1 child: **12%** of gross weekly income
- 2 children: **16%**
- 3 or more children: **19%**

**Basic Plus Rate** (paying parent has between 52 and 155 overnight stays/year - "shared care" reduction):
- 1 child: **9%** of gross weekly income (12% × 7/9 fraction equivalent)
- 2 children: **12%** (16% × 7/9)
- 3+ children: **15%** (19% × 7/9)

**Reduced Rate** (paying parent's gross weekly income is between £7.01 and £100):
- Different formula: flat rate per child + percentage of income above threshold

**Shared Care Reductions** (applied to the weekly amount):
- **52 to 103 nights/year:** reduce by 1/7 (≈14.3%)
- **104 to 155 nights/year:** reduce by 2/7 (≈28.6%)
- **156 to 174 nights/year:** reduce by 3/7 (≈42.9%)
- **175+ nights/year:** reduce by 4/7 (≈57.1%) - also known as "equal shared care"

If income exceeds the CMS upper limit (£3,000/week): apply the standard rate to the first £800, then apply the additional income percentage (typically 9% for 1 child, 12% for 2, 15% for 3+) to income between £800 and £3,000.

- Cite the relevant CMS regulation (regs. 7 to 14 of the Child Support (Maintenance Calculations and Special Cases) Regulations 2008)
- Specify whether Basic Rate or Basic Plus Rate applies and the shared care band being used

### 5. Additional Expenses / CMS Variations

**CMS does not add childcare costs, health insurance, or medical expenses to the basic rate calculation** (unlike most US state guideline models). The basic rate is intended to cover the child's everyday needs.

However, under **s.28A to 28G Child Support Act 1991**, the following may be applied as **variations** (upward or downward adjustments):

- Special expenses claimed by the paying parent or person with care:
  - **Contact costs** (travel expenses for maintaining contact, subject to cap)
  - **Illness/disability costs** of the child
  - **Pre-existing debt** (before the maintenance calculation)
  - **Private school fees** (if agreed or ordered and not excessive)
  - **Board and lodging costs** for a child over 16 in education or training
  - **Life assurance premiums**
- **Variation application** required, not automatic

Each parent's ability to claim a variation depends on whether their special expenses exceed the relevant threshold (typically £10/week difference from standard rate).

**Court-ordered maintenance (not CMS):** If the parties have opted out of CMS (by agreement or because the child is over 16 in qualifying education), the Sheriff Court can order periodical allowance or capital sum under the **Family Law (Scotland) Act 1985, s.1** (for children of the family). The court uses a discretionary approach rather than a fixed formula. The court may take into account: the child's needs, the parents' resources, earning capacities, and existing obligations.

### 6. Proportionate Shares & Final Calculation (for Court-ordered Maintenance Only)

For Sheriff Court proceedings under the Family Law (Scotland) Act 1985 (where CMS does not apply or has been opted out of):

- Calculate each parent's financial resources, Assess the child's needs (education, living costs, accommodation)
- Apply the principles of s.1 - the court seeks to ensure the child's needs are met, having regard to the parents' resources, Shared care may be reflected in the quantum, but there is no fixed statutory reduction percentage (unlike CMS)
- For minute of agreement: draft terms for periodical allowance and capital sum, with variation provisions

For CMS cases: the final calculation is the weekly amount from Step 4 (after shared care reduction), possibly adjusted by any approved variation (Step 5). The paying parent pays the resulting amount to the person with care. CMS collects and enforces payment via Direct Pay, Collect and Pay, or Deduction from Earnings Order.

Final output: **Weekly payment amount** (convert to monthly or fortnightly if required), **payor / payee**, **payment method** (CMS Direct Pay, CMS Collect and Pay, Standing Order, or DEO), **effective date** (usually the date CMS received the application or the court order date).

### 7. Health Insurance & Medical Allocation

**Not applicable for CMS cases.** The NHS provides comprehensive healthcare for all UK-resident children. Health insurance is not a relevant factor in UK child maintenance calculations.

For Sheriff Court cases under the Family Law (Scotland) Act 1985, if private medical insurance is maintained for the child, the cost may form part of the assessment of the child's needs. Any private healthcare arrangements should be specified in the order or agreement.

Uninsured medical expenses: Covered by NHS. If additional private treatment is agreed, the court may apportion costs, but this is unusual and would require express agreement.

### 8. Deviation Analysis / Variation Justification

**Not "deviation" (US concept) - use "Variation" (UK statutory term).**

If the standard CMS rate produces an unjust or disproportionate result, apply under **s.28A to 28G Child Support Act 1991** for a variation:

- **Criteria for upward variation:** paying parent has a higher standard of living than the child; special expenses justify adjustment; property or capital settlement not reflected in weekly rate
- **Criteria for downward variation:** paying parent's special expenses exceed threshold (contact, disability, debt); income is deemed but actual earnings are lower

Cite the specific variation ground and regulation relied upon (Child Support (Variations) Regulations 2008). Burden is on the applicant to establish that the variation criteria are met and that the change is just and equitable.

**For Sheriff Court cases (non-CMS):** The court applies the principles of the Family Law (Scotland) Act 1985, s.1 and s.4(3). The court has discretion to depart from the items listed in s.1(2) if it is satisfied that departure is necessary to achieve a fair result. Variation of a subsisting order is by minute under the Sheriff Court rules.

## Filing Checklist

- [ ] CMS application submitted (if statutory scheme chosen) with all income evidence
- [ ] Variation application lodged (if claiming special expenses adjustment), citing s.28A to 28G Child Support Act 1991 and relevant regulations
- [ ] If Sheriff Court: Form F1 (initial writ) or Form F5 (minute for variation) with appropriate caption, case number, parties
- [ ] If minute of agreement: drafted with periodical allowance / capital sum terms, signed, and registered in Books of Council and Session
- [ ] All calculations shown step-by-step with CMS rate and shared care band cited
- [ ] Income evidence attached: payslips (last 13 weeks if employed), last 2 years' P60s, HMRC self-assessment SA302 (if self-employed), audited accounts (if limited company), bank statements
- [ ] Shared care schedule documenting actual overnight stays per year with dates
- [ ] Children's details verified (DOB, residence, qualifying child status)
- [ ] National Insurance Numbers for both parents (required for CMS applications)
- [ ] Signature blocks for both parties (and solicitors, if represented)
- [ ] Declaration of truth (for Sheriff Court affidavits, Form F4)
- [ ] Correct number of copies per Sheriff Court practice note

## Pitfalls

- **CMS is the default for most child maintenance** - the court cannot make a child maintenance order where CMS has jurisdiction (s.8 Child Support Act 1991). Exceptions: high-income cases (paying parent's income > £3,000/week), children over 16 in qualifying education, or where both parents opt out in writing
- **Never confuse US income shares with UK percentage-of-income** - the receiving parent's income is irrelevant to the CMS calculation, and there are no allowable deductions from gross income in the CMS statutory scheme
- **Shared care counts nights, not hours** - the exact number of overnight stays in the last 52 weeks determines the reduction band. The threshold is precise (52, 104, 156, 175). One night less can change the band entirely
- **Self-employment scrutiny** - CMS uses HMRC-derived net profit. Personal expenses disguised as business deductions will be questioned. For limited company owners, CMS may use notional income (salary + dividends + retained profits)
- **Deemed income requires evidence** - work history, qualifications, local labour market data. CMS will not impute income without foundation
- **Variations are not automatic** - requires a formal application with evidence; threshold tests apply
- **Mark uncertain citations with `[VERIFY]`** - Child Support Act 1991 provisions, regulations, and CMS rates are amended frequently. Always check current figures at GOV.UK
- **CMS Direct Pay vs Collect and Pay** - Direct Pay has no service fee; Collect and Pay charges both sides (20% on the paying parent, 4% on the receiving parent). Advise parties accordingly
- **Sheriff Court family actions** - use Family Sheriff where available; not all Sheriff Courts have specialist family provision. Check local practice notes
- **Financial declaration (Scotland) constitutes a sworn statement** - ensure accuracy; it may be used in proceedings

---

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law

**Changes made:**
- Court system: US state trial courts → Sheriff Court (Family Sheriff), Court of Session; no US "plaintiff/defendant" - replaced with "pursuer/defender" for court proceedings, "applicant/respondent" for CMS, Agency: US state child support agencies → DWP Child Maintenance Service (CMS) under the Child Support Act 1991
- Guideline model: US Income Shares / Percentage of Income → UK percentage-of-income model based solely on the paying parent's gross weekly income, Rate structure: US state schedule lookup → CMS Basic Rate (12%/16%/19%), Basic Plus Rate (9%/12%/15%), Reduced Rate, Flat Rate (£7/week)
- Income period: US Gross Monthly Income → UK Gross Weekly Income (CMS uses weekly figures)
- Income documentation: W-2/1099/tax returns → P60, HMRC RTI data, HMRC SA302 (self-employed), Tax Year Overview, Identifier: SSN → National Insurance Number, Imputed income: US "imputed income" → UK "deemed income" or "earning capacity" under reg. 52 of the Child Support (Maintenance Calculations and Special Cases) Regulations 2008
- Childcare/health insurance add-ons: Removed, NHS covers UK children; CMS rate covers everyday needs; childcare and health insurance are not separately added in the CMS statutory scheme, Parenting time: US percentage-based → UK "shared care" based on exact overnight stays (52/104/156/175 thresholds with 1/7 to 4/7 reductions)
- Deviation: US "deviation" → UK "variation" under s.28A to 28G Child Support Act 1991 and the Child Support (Variations) Regulations 2008
- Court-ordered maintenance: US state court order → minute of agreement registered in Books of Council and Session, or court order under Family Law (Scotland) Act 1985
- Financial affidavit: → Form E (England/Wales) or Financial Declaration (Scotland, Sheriff Court Form G2)
- Dollar amounts → GBP (£)
- Removed sections: child support arrear calculation (replaced with CMS enforcement mechanisms); tax dependency allocation (not applicable, UK child benefit is separate from child maintenance)
- Added: CMS Direct Pay vs Collect and Pay fee structure; Sheriff Court family forms (F1 to F5, G1 to G2); HMRC evidence requirements, Currency: All monetary references converted from USD ($) to GBP (£)
- Paternity: US paternity law → Children (Scotland) Act 1995 / Family Law (Scotland) Act 2006

**Key Scottish/UK considerations:**
- CMS is the **default** statutory scheme for most cases involving children under 16 (or under 20 if in approved education). The Sheriff Court cannot make a maintenance order while CMS has jurisdiction (s.8 Child Support Act 1991)
- The paying parent's **gross weekly income** is the sole financial factor in the CMS basic calculation; the receiving parent's income is irrelevant. This is a fundamental departure from the US income shares model
- **Shared care** is defined by overnight stays, not parenting time percentage. The precise threshold (52, 104, 156, 175 nights) is critical and must be evidenced
- **NHS provision** makes health insurance irrelevant to UK child maintenance (unlike US), removing an entire category of add-on expenses
- **Self-employment and limited companies** require careful analysis, CMS may look through corporate structures to determine the paying parent's true income (salary + dividends + retained profits)
- **Variations** (s.28A to 28G) are the UK equivalent of deviation but operate through a statutory application process rather than court-led discretion. The threshold is higher and the grounds are narrower
- **Minute of agreement** (registered in Books of Council and Session) is a distinct Scottish mechanism for formalising child maintenance without court proceedings, it has the force of a court decree for enforcement purposes
- **GOV.UK** is the authoritative source for current CMS rates and income bands, these are updated annually (usually April)
- **Form references** differ from US forms, see `scots-forms/README.md` in this directory for the full list of Scottish/UK court forms and CMS application forms

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
