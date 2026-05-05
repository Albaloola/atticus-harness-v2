---
name: writ-of-execution
language: en
description: Drafts a Charge for Payment and diligence instructions for post-judgment enforcement of money decrees in Scotland. Covers application for extract decree, Charge for Payment, arrestment, earnings arrestment, attachment, inhibition, and adjudication for debt. Use when enforcing a decree for payment through diligence, including bank arrestment, earnings arrestment, attachment of moveable property, or inhibition of heritage. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Charge for Payment and Diligence Instructions, Scotland

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

Drafts a Charge for Payment authorising Sheriff Officers to enforce a decree for payment through diligence against a debtor's assets, together with supporting instructions for specific diligence methods.

## Prerequisites

1. **Extract Decree** - certified copy with amount, date of decree, court, case number, with warrant for execution added (Sheriff Court (Scotland) Extracts Act 1892, s.4)
2. **Debtor information** - full legal name, aliases, addresses, known assets, employment details
3. **Asset details** - bank accounts, heritage (land/property), vehicles, business assets, receivables, moveable property
4. **Prior enforcement** - partial payments, prior Charges for Payment, prior diligence, current payment arrangements
5. **Jurisdiction** - sheriffdom where debtor resides or assets are located; Sheriff Officer jurisdiction

## Quick Start

1. Confirm decree is final and enforceable (not suspended, not expired, no bankruptcy or sequestration)
2. Calculate net amount due (decree + interest + expenses − credits)
3. Serve Charge for Payment (minimum 14 days warning for debts ≤ £20,000; 28 days otherwise, unless decree provides otherwise)
4. If unpaid after charge expiry, instruct Sheriff Officer for appropriate diligence
5. Draft asset-specific diligence instructions
6. Identify likely exemption claims

## Preliminary, Scottish Diligence Framework

Scottish diligence (enforcement) differs fundamentally from US writ of execution and English enforcement:

| Concept | Scottish Equivalent |
|---------|-------------------|
| **Writ of execution** | **Charge for Payment** - formal demand served by Sheriff Officer giving debtor time to pay before further diligence |
| **Bank levy/freeze** | **Arrestment** - freezing of funds in debtor's bank account; followed by **furthcoming** (release of funds to creditor) |
| **Wage garnishment** | **Earnings Arrestment** - ongoing deduction from earnings (Diligence against Earnings) |
| **Seizure of goods** | **Attachment** - seizure and sale of moveable property by Sheriff Officer (formerly "poinding and sale") |
| **Property lien** | **Inhibition** - prohibits debtor from voluntarily selling/disposing of heritable property; not a form of enforcement per se but a protective diligence |
| **Foreclosure** | **Adjudication for Debt** - a decree transferring the debtor's heritable property to the creditor in satisfaction of the debt (rare) |
| **Asset freeze/charging order** | **Arrestment in rem** of cargo/ships; **attachment** of moveable property |
| **Contempt/body execution** | Not available in Scotland (abolished) |
| **Judgment creditor exam** | **Diligence against earnings** requires debtor's employer details; **sisting** may be used to examine debtor in court |

## Output Structure

### 1. Extract Decree with Warrant for Execution

- Obtain extract decree from the issuing court (sheriff clerk or Court of Session extract department)
- Extract includes a warrant for execution under s.4, Sheriff Court (Scotland) Extracts Act 1892, which authorises:
  - Arrestment (excluding earnings arrestment)
  - Inhibition
  - Charging the debtor to pay within the specified period

### 2. Charge for Payment

- Directed to debtor by name and address, Amount due (principal + interest + extract expenses)
- Days of charge: 14 days (for debts ≤ £20,000 per Bankruptcy and Diligence etc. (Scotland) Act 2007) or 28 days for larger sums unless the decree provides a shorter period, Warning: if not paid, further diligence including arrestment, attachment, earnings arrestment, or inhibition may follow, Service by Sheriff Officer (personal service or posting + registered letter)
- Charge fee and outlays recoverable as part of the diligence

**Template:**

```
CHARGE FOR PAYMENT

To: [Debtor Full Name]
[Address]

WHEREAS by Decree of the Sheriff Court at [Court], dated [date],
in case number [number] between [Creditor], Pursuer, and [Debtor],
Defender, you were ordained to pay to the said [Creditor] the sum
of £[amount] together with interest at [rate]% from [date] and
expenses:

NOW THEREFORE I, [Sheriff Officer Name], Sheriff Officer of the
Sheriffdom of [Sheriffdom], by virtue of the warrant for execution
contained in the said Extract, HEREBY CHARGE YOU TO PAY to the
said [Creditor] at [address] the sum of £[amount] (being the
principal sum of £[X] together with accrued interest of £[Y] and
extract expenses of £[Z]) within [14/28] days from the date of
service of this Charge.

If you fail to pay within the period specified, further diligence
may proceed against you, including (without limitation) arrestment
of funds in bank accounts, earnings arrestment, attachment of
moveable property, and inhibition of heritable property.

Served at [place] on [date].

[Signed]
[Sheriff Officer Name]
[Firm]
[Date of Service]
```

### 3. Diligence Instructions

| Asset Type | Scottish Diligence | Key Details |
|-----------|-------------------|-------------|
| Bank accounts | **Arrestment** (followed by forthcoming) | Bank name, branch, account name/number, sort code. Arrestment freezes funds; forthcoming releases to creditor after 14 weeks or court action |
| Earnings | **Earnings Arrestment** | Employer name and address. Continuing deduction from wages (deduction rates per Diligence against Earnings rules, schedule of deductions) |
| Moveable property | **Attachment** | Description, location, value. Sheriff Officer attends to attach and remove for sale (or sell without removal). Certain assets exempt (see Exemptions) |
| Heritable property | **Inhibition** (protective) | Inhibitions register at Registers of Scotland. Prevents voluntary sale/charge; does not itself realise funds |
| Heritable property | **Adjudication for Debt** (rare, enforcement) | Court action to transfer title in satisfaction of debt; rarely practical for smaller sums |
| Vehicles | **Attachment** (seizure) | VIN, registration, location. Vehicles not at the debtor's home require warrant from sheriff |
| Money owed to debtor | **Arrestment in hands of third party** | Name and address of third party debtor. Freezes debts due to the debtor |
| Goods in debtor's possession but owned by third party | Cannot be attached | Third-party ownership must be established |

### 4. Interest Calculation

```
Principal sum:                    £[amount]
Decree date:                      [date]
Interest rate:                    [statutory rate]% per annum
                                     (Judicial Proceedings (Interest) Rates, currently 8%)
Interest period:                  [decree date] to [charge date]
Accrued interest:                 £[calculated]
Extract expenses:                 £[extract fee + postal/court fee]
Charge fee:                       £[Sheriff Officer fee per statutory table]
Prior diligence expenses:         £[itemised]
Credits/payments:                 (£[amount])
─────────────────────────────────────────────
Net amount due on Charge:         £[total]
```

### 5. Exemption Analysis

Anticipate debtor exemption claims under Scots law:

| Asset | Exemption |
|-------|-----------|
| **Tools of trade** | Exempt up to £1,000 (Diligence against moveable property exemptions) |
| **Necessary household goods** | Basic household items necessary for domestic life, not exempt if luxury or of high value (Bankruptcy and Diligence etc. (Scotland) Act 2007, s.4 amendments) |
| **Motor vehicle** | Not specifically exempt unless a tool of trade or necessary for employment |
| **Clothing and bedding** | Necessary, exempt |
| **Dwelling house** | Not directly exempt from attachment, but inhibition prevents sale; adjudication for debt requires court order; debtor's home has procedural protections |
| **Pension / retirement funds** | Funds in pension schemes generally exempt from diligence (Welfare Reform and Pensions Act 1999) |
| **Social security benefits** | Cannot be arrested in bank accounts to extent traceable to benefits, protected under common law and statutory provisions |
| **Earnings** | Protected by Diligence against Earnings deduction tables; minimum earnings threshold protected |
| **Bank account** | Certain amounts may be protected if containing benefit payments; month-end protection limited |

## Enforcement Against Persons

| Scenario | Scottish Procedure |
|---------|-------------------|
| **Debtor is an individual** | Charge for Payment → earnings arrestment / attachment / arrestment / inhibition |
| **Debtor is a company** | Charge for Payment → arrestment / inhibition. If unpaid, petition for winding up (Insolvency Act 1986) |
| **Debtor is in partnership** | Charge for Payment against the firm; personal liability of partners |
| **Bankruptcy / Sequestration** | Automatic stay, cannot enforce. Lodge claim in sequestration |
| **Debtor resides in England/Wales** | Register Scottish decree in England under Civil Jurisdiction and Judgments Act 1982; use English enforcement |
| **Debtor resides outside UK** | Hague Convention / EU regimes (post-Brexit) - dependent on jurisdiction |

## Multi-Jurisdiction Enforcement

When debtor assets are in a different part of the UK or abroad:

1. **Scotland → England/Wales**: Register Scottish decree under Civil Jurisdiction and Judgments Act 1982; English enforcement rules apply (Writ of Control / Third Party Debt Order / Charging Order)
2. **Scotland → Northern Ireland**: Similar registration procedure under CJJA 1982
3. **Scotland → EU**: Post-Brexit, enforcement governed by Hague Convention, applicable bilateral treaties; check current recognition rules [VERIFY]
4. **Scotland → Rest of World**: Depend on reciprocal enforcement arrangements under Administration of Justice Act 1920 / Foreign Judgments (Reciprocal Enforcement) Act 1933

## Guidelines

- Verify decree is final, confirm no pending appeal (pending appeal suspends extract diligence: extract not normally issued)
- Extract decree with warrant for execution is a prerequisite for any diligence, obtain from issuing court, Check for bankruptcy / sequestration, automatic stay bars diligence (Insolvency Act 1986, s.285)
- Charge for Payment must be served by Sheriff Officer; self-help service is not valid, Conjunction of diligences: arrestment + inhibition can be initiated simultaneously, Time-bar: extract decrees may prescribe after 20 years unless renewed; check time limits, Expenses: all diligence costs (Sheriff Officers fees, court fees, extract fees) are recoverable as part of the debt, For commercial debt: consider summary diligence if the document is probative and self-proving (sheriff court extracts are warrants for execution)
- Debtor can suspend diligence by lodging a suspension application in the Sheriff Court, may require caution (bond) if groundless

## Troubleshooting

- **Charge expired unpaid** - proceed with specific diligence: arrestment / attachment / earnings arrestment
- **Arrestment returns insufficient funds** - consider other diligence methods or debtor examination
- **Attachment fails, no assets found** - consider inhibition (if debtor owns property) or petition for sequestration (individual) / winding up (company)
- **Debtor claims exemptions** - verify against statutory exemption schedule; Sheriff Officer determines exemption claims (disputed exemption may require court application)
- **Debtor sequestrated / wound up** - cease diligence; lodge claim with trustee / liquidator; return any arrested funds (may be subject to equalisation)
- **Decree expired (prescription)** - apply for renewal under Prescription and Limitation (Scotland) Act 1973 (20-year prescriptive period for extracts)
- **Debtor outside Scotland** - register decree in relevant jurisdiction per CJJA 1982 or other recognition routes
- **Debtor in armed forces** - some procedural protections apply; consult applicable regulations

## Scotland/UK Adaptation

This skill has been adapted from US originals for use under Scots diligence law.

**Key adaptations:**
- **Legal framework**: Entirely replaced US writ of execution / UEFJA / state-specific post-judgment remedies with Scottish diligence under:
  - Sheriff Court (Scotland) Extracts Act 1892, s.4
  - Bankruptcy and Diligence etc. (Scotland) Act 2007
  - Diligence against Earnings (Scotland) Regulations
  - Debtors (Scotland) Act 1987 (earnings arrestments)
  - Prescription and Limitation (Scotland) Act 1973
  - Insolvency Act 1986 (sequestration/winding up)
- **Diligence types**: Charge for Payment, Arrestment, Earnings Arrestment, Attachment, Inhibition, Adjudication for Debt, replace US writ of execution, bank levy, wage garnishment, property seizure.
- **Enforcement officers**: Sheriff Officers (Scotland) replace US Sheriffs/Marshals. Regulated by the Society of Messengers-at-Arms and Sheriff Officers. No US-style private process servers for enforcement.
- **Extract decree**: Contains the warrant for execution authorising diligence, no separate application for writ required.
- **Days of charge**: 14-28 days depending on amount, no US equivalent of return dates/nulla bona.
- **Earnings arrestment**: Statutory deduction schedule (Diligence against Earnings) replaces US Title III wage garnishment; minimum protected earnings.
- **No body execution**: Imprisonment for debt was abolished in Scotland long ago, no US-style contempt for non-payment of money judgments.
- **Multi-jurisdiction**: Scottish decrees registered in England/Wales under CJJA 1982; US UEFJA domestication replaced by CJJA 1982 framework.
- **Prescription**: 20-year prescriptive period (extracts may prescribe); US judgment renewal deadlines vary by state.
- **Currency**: All amounts in GBP.
- **Sequestration**: Personal bankruptcy under Insolvency Act 1986 (Scotland) replaces US Chapter 7/13. Diligence ceases on sequestration.
- **Terminology**: Decree (not judgment); Pursuer/Defender; Extract (not certified copy); Charge (not demand); Arrestment (not freeze); Sheriff Officer (not sheriff's deputy/sheriff).

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
