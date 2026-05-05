---
name: final-tax-return-corporate
language: en
description: 'Prepares HMRC-compliant final Company Tax Returns (CT600) for dissolving UK limited companies (Ltd) and LLPs. Covers short-period reporting, winding-up distributions, final tax computations including capital gains and income up to dissolution date, and dissolution-period filing deadlines. [SCOTS: Note] UK uses a single corporate tax framework (Corporation Tax) administered by HMRC, there is no US-style C-corp/S-corp distinction. Trigger when drafting or reviewing a final tax return for a dissolving UK limited company or LLP, whether solvent (members'' voluntary liquidation) or insolvent (creditors'' voluntary liquidation), or for a Scottish company undergoing striking-off or winding-up. [Atticus UK/Scots refined]'
tags:
- analysis, corporate, drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# UK Corporate Final Tax Return Filing (Dissolving Company)

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

Prepares final Corporation Tax returns (CT600) for dissolving UK limited companies covering the period from the last accounting date through the date of dissolution.

## Prerequisites

1. **Dissolution documents** - Certificate of Dissolution, board/shareholder resolutions, Companies House striking-off confirmation, liquidator's appointment (if liquidation)
2. **Final financials** - balance sheet, profit and loss account, trial balance through dissolution date; prepared in accordance with UK GAAP (FRS 102/105)
3. **Income records** - P60/P11D, P35 (payroll RTI), CIS returns (construction), interest, dividends, rental income
4. **Asset disposition records** - sale proceeds, capital gains computations, indexation allowance (if applicable), disposal dates
5. **Distribution records** - final dividends in liquidation (members' distributions), amounts, recipients, capital vs. income nature
6. **Prior-year returns** - accounting period dates, capital allowances (plant & machinery, structures and buildings), brought-forward losses (trading losses, capital losses)
7. **Company Registration Number (CRN)** and **Unique Taxpayer Reference (UTR)** confirmed against HMRC records

## Quick Start

1. Gather all prerequisite documents and confirm UTR registration with HMRC
2. Identify entity type → limited company (Ltd) → form CT600; LLP → partnership tax return + CT600 if company is partner
3. Determine final accounting period, date of last accounts to date of dissolution (may be a short period)
4. Report income and chargeable gains for the short period only
5. Compute liquidator's distributions (capital vs. income treatment)
6. Claim terminal loss relief (CTA 2010 s.45) if applicable
7. File CT600 and supporting computations with HMRC within 12 months of period end
8. Run quality-control checklist before submission

## Core Workflow

### 1. Final Return Designation

| Entity Type | Return | Action |
|---|---|---|
| Limited company (Ltd) | CT600 | Indicate "final return" / closing period; complete full computation |
| LLP | Partnership return + CT600 for company partners | Indicate final period; allocate to members |
| Company in liquidation | CT600 + additional liquidation statements | Liquidator signs; period to date of dissolution |

- Taxpayer name must match Companies House register exactly, Liquidator (or director for MVL) signs the return, File returns online via HMRC Corporation Tax online service or third-party software

### 2. Filing Deadlines

| Entity | Deadline |
|---|---|
| Limited company | 12 months after end of the final accounting period |
| Payment | 9 months and 1 day after end of final accounting period |

- Late filing penalty: £100 (rising to £1,000+ for persistent delay)
- Late payment interest: HMRC official rate (currently 3.25% - [VERIFY])
- File Form CT603 (corporation tax extension) if need more time for computations, but final return should be filed as soon as practicable after dissolution

### 3. Income Reporting

- [ ] All income sources reconciled to final management accounts
- [ ] Trading income, from last accounting date to dissolution date
- [ ] Capital gains, asset disposals in final period computed with indexation allowance (disposals pre-2024). For disposals after 1 January 2024: corporation tax rates apply; indexation allowance frozen from December 2017
- [ ] Chargeable gains computation under TCGA 1992
- [ ] Property income and non-trading income (interest, dividends)
- [ ] No post-dissolution income included

### 4. Deductions & Reliefs

**Deductible in final period:**
- Trading expenses up to dissolution date, Liquidation costs (liquidator's fees, legal costs, accounting costs) - deductible as management expenses (CTA 2009 s.1219) or allowable expenses depending on character, Capital allowances, balancing charge/allowance on disposal of plant and machinery and structures and buildings (CAA 2001)

**Terminal loss relief (CTA 2010 s.45):**
- Trading losses in final 12 months can be carried back 3 years (subject to cap)
- Must be claimed within 2 years of end of final accounting period

**Other final period adjustments:**
- Capital losses, offset only against chargeable gains (no relief against income)
- Non-trading loan relationships deficits, may be set against profits of current or prior periods

### 5. Distributions in Winding-Up

| Distribution Type | Tax Treatment |
|---|---|
| Capital distribution (members' voluntary liquidation) | Capital distribution to shareholders, treated as part-disposal of shares (TCGA 1992 s.122) |
| Income distribution | Treated as dividend, subject to income tax in shareholder's hands |
| Distribution of assets in specie | Company is treated as disposing of asset at market value, chargeable gain or balancing charge arises |

**Key UK/Scottish point:** Unlike US (where liquidating distributions may be treated as exchange under IRC § 331), UK liquidating distributions are:
- First treated as capital distributions under TCGA 1992 s.122 - shareholders compute gain/loss as part-disposal of shares, Only if the company has **distributable profits** (Companies Act 2006 s.830) may some distributions be income in nature
- **Stamp Duty** may apply to transfers of shares or land in the winding-up (see s.5 Stamps)

**Liquidator's responsibilities:**
- Pay corporation tax up to dissolution date, Distribute assets to members in order of priority (Insolvency Act 1986)
- Apply to HMRC for clearance that all tax matters are resolved, Complete Companies House striking-off / dissolution process

### 6. Required Schedules & Filings

| Document | When Required |
|---|---|
| CT600 (Company Tax Return) | Always for final period |
| Full statutory accounts | Filed at Companies House with confirmation of final return |
| Form CT603 (extension) | If more time needed (not available post-final return) |
| Form P35 / RTI final submission | Final payroll submission |
| Form P60 | Final year certificates to employees |
| Form P11D (if applicable) | Benefits and expenses for final period |
| Final VAT return (VAT 193/199) | Cancel VAT registration |
| Form DS02 / DS01 | Companies House striking-off application |
| Certificate of Solvency (MVL) | Members' voluntary liquidation only |
| Liquidator's final account | Full winding-up process |

**Scotland-specific filings:**
- Scottish registered companies file at Companies House Edinburgh, Insolvency forms filed with Accountant in Bankruptcy (AiB) or Court of Session depending on process, Sheriff Court involvement for certain insolvency matters (Insolvency Act 1986 s.143)

### 7. Payments & Refunds

- [ ] Corporation tax paid: check HMRC online account for final period
- [ ] PAYE / NIC settled to dissolution date
- [ ] VAT registration cancelled; final VAT return filed
- [ ] Refund directed to liquidator's client account / company bank account
- [ ] If tax owed: assess late payment interest if paid after 9 months + 1 day

## Quality-Control Checklist

- [ ] All computations mathematically verified
- [ ] No post-dissolution income or expenses included
- [ ] Final period correctly defined (last accounts date → dissolution date)
- [ ] HMRC clearance sought for final tax position
- [ ] Liquidator's final account prepared
- [ ] Companies House final confirmation statement filed
- [ ] VAT registration cancelled with HMRC
- [ ] PAYE scheme closed with HMRC
- [ ] PAYE settlement agreement (PSA) if benefits not reported
- [ ] Final share/structure disposals correctly reported to HMRC

## Pitfalls & Checks

- **Short period**: No annualisation required for corporation tax, compute on actual period basis
- **Capital losses**: Cannot offset against trading income, only against chargeable gains
- **HMRC clearance**: Strongly recommended to obtain HMRC clearance confirming no outstanding tax liabilities before dissolution; asset distribution before clearance creates personal liability for directors/former directors
- **State of company address (Scotland)**: Dividend/distribution checks must reference Scottish Rules (Insolvency (Scotland) Rules)
- **Records retention**: Retain all returns and supporting documents for minimum 6 years (HMRC enquiry window); longer for losses carried back or capital gains issues
- **HMRC enquiries**: HMRC can open an enquiry into final return up to 12 months after filing
- **Striking-off vs. liquidation**: Companies struck off under s.1000 or s.1003 Companies Act 2006 may be restored and tax liabilities revived, formal liquidation provides better finality

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Complete replacement: IRS → HMRC; US tax forms (1120, 1120-S, 1065) → UK CT600 (Company Tax Return)
- C-corp / S-corp / Partnership distinction → UK limited company (Ltd) / LLP; no S-corp equivalent in UK, IRC §§ 331, 336 → TCGA 1992 s.122 (capital distributions in winding up)
- IRC § 334 → TCGA 1992 s.17 (market value rule) / s.122
- IRC § 6655 (estimated tax penalties) → HMRC late payment interest / late filing penalties, Form 7004 → No direct UK extension equivalent (CT600 deadline = 12 months after period)
- Form 4797 / Schedule D → UK capital gains computation under TCGA 1992 / CAA 2001
- K-1 → UK partnership tax return (SA800 / partnership return) allocation to partners, Form 1099-DIV → UK dividend reporting (HMRC Real Time Information)
- Form W-2 → P60 / P35 RTI final submission, EIN → UTR (Unique Taxpayer Reference) + CRN (Company Registration Number)
- NOL carryforward → UK trading loss relief (CTA 2010) / terminal loss relief (CTA 2010 s.45); losses expire on dissolution, Liquidating distribution: TCGA s.122 (part disposal) replaces IRC § 331 (exchange treatment)
- Indexation allowance (pre-2024 disposals) replaces US basis step-up, Added Companies House filings (DS01/DS02, confirmation statement, final accounts)
- Added VAT deregistration, Added HMRC clearance process

**Key Scottish/UK considerations:**
- No C-corp/S-corp distinction, single corporation tax regime (currently 19-25% main rate)
- Terminal loss relief can be carried back 3 years (CTA 2010 s.45)
- HMRC clearance strongly recommended before dissolution; directors remain personally liable if tax unpaid, Scottish registered companies: Companies House Edinburgh; Accountant in Bankruptcy (AiB) for winding-up matters, Insolvency (Scotland) Rules apply for Scottish winding-up processes, Records retention: 6 years minimum for HMRC enquiries, Striking-off under s.1000/s.1003 Companies Act 2006 does NOT discharge tax liabilities, formal liquidation provides finality, If assets distributed before HMRC debts paid: director personal liability under Insolvency Act 1986 s.214 (wrongful trading)

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
