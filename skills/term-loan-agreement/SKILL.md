---
name: term-loan-agreement
language: en
description: Drafts UK corporate finance term loan (facility) agreements covering economic terms, covenants, security, events of default, and enforcement mechanics. Triggered when the user requests a term loan agreement, commercial facility, secured or unsecured lending, SONIA-based loan, amortisation schedule, covenant package, or bilateral facility documentation. Use for UK and Scottish corporate lending transactions. [Atticus UK/Scots refined]
tags:
- SCOTS, agreement, corporate, drafting, transactional, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Term Loan / Facility Agreement (UK/Scotland)

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

Drafts an execution-ready term loan (facility) agreement for a UK commercial lending transaction, following the general architecture of LMA (Loan Market Association) recommended forms adapted for UK and Scottish practice.

[SCOTS: Note: This skill has been adapted from a US term loan agreement to the UK corporate lending framework. Key differences: UK lending uses SONIA or Bank of England base rate (not SOFR); LMA (Loan Market Association) standard forms are the market norm; security is governed by the Companies Act 2006 (charges) and Scots law (standard securities, floating charges); there is no UCC Article 9. For Scottish borrowers, choose Scots law as governing law and register charges at Companies House (Edinburgh) and the Scottish Land Register (heritable security).]

## Gather Inputs

Collect before drafting. Flag any missing items.

1. **Parties** - legal names, entity type, registered number, registered office, signatories
2. **Economics** - principal (in GBP £), funding date, maturity, benchmark (SONIA/Base Rate), margin, fees
3. **Repayment** - amortisation type, payment dates, prepayment rules
4. **Security & guarantee** - secured/unsecured, collateral description (standard security for heritable property, floating charge for moveable), guarantors
5. **Covenants** - reporting, affirmative, negative, financial thresholds
6. **Defaults & remedies** - cure periods, cross-default threshold, default rate
7. **Governing law & forum** - Scots law or English law

## Document Structure

Fill all `[BRACKETED]` placeholders. Use exact dates, never relative terms.

### 1. Title, Date & Parties

| Role | Legal Name | Entity Type | Registration No. | Address |
|---|---|---|---|---|
| Lender | [LENDER] | [ENTITY] | [REG NO.] | [ADDRESS] |
| Borrower | [BORROWER] | [ENTITY] | [REG NO.] | [ADDRESS] |
| Guarantor | [GUARANTOR] | [ENTITY/INDIVIDUAL] | [REG NO.] | [ADDRESS] |

### 2. Recitals

State facility purpose and use of proceeds. Do not create warranties in recitals.

### 3. Definitions

Required defined terms: Business Day, Material Adverse Change (MAC), Event of Default, Permitted Security, Permitted Financial Indebtedness. Add all terms used in economics, covenants, and defaults.

### 4. Loan (Facility) & Drawdown

- Principal in words and figures, Drawdown mechanics: single advance or multiple drawdowns, Conditions precedent:

| CP Item | Evidence |
|---|---|
| Corporate authority | Board resolutions, certificate of incumbency |
| KYC/AML | Due diligence documentation |
| Good standing | Certificate of incorporation (Companies House) |
| Security perfection | Registration of charges at Companies House; heritable security registration (Land Register) |
| Legal opinions | Counsel opinion(s) if required |

### 5. Interest & Fees

- Benchmark (SONIA / Bank of England Base Rate) + margin, default rate, day count (365), reset frequency, Fee schedule:

| Fee | Amount/Formula | Due |
|---|---|---|
| Arrangement | [AMOUNT/%] | [DATE] |
| Commitment | [AMOUNT/%] | [DATE] |
| Prepayment | [SCHEDULE] | [EVENT] |

[SCOTS: Note: Replace US SOFR with UK SONIA (Sterling Overnight Index Average) or BoE Base Rate. Day count convention in the UK is usually Actual/365 (not 360 as common in US). The Loan Market Association (LMA) produces SONIA-based facility documentation that is the UK market standard.]

### 6. Payments & Amortisation

- Application order: fees → interest → principal, Amortisation method: equal instalments / custom / bullet, Attach Schedule 1 if required

### 7. Prepayment

- **Voluntary** - notice period, minimum amounts
- **Mandatory** - asset sales, insurance proceeds, debt/equity issuance, excess cash flow, Reduction mechanics: apply to next instalments vs. final payment

### 8. Security & Guarantee

- Collateral description, scope, security documents (Standard Security for heritable property; Floating Charge for assets; Bond and Floating Charge for Scottish companies)
- Perfection steps: registration at Companies House (s. 859A-D Companies Act 2006); registration in Scottish Land Register for heritable property; registration in Register of Floating Charges (Scotland)
- Guarantee type: payment vs. collection

[SCOTS: Note: In Scotland, security over heritable property is created by Standard Security (not a mortgage or Deed of Trust). The Companies Act 2006 requires charges created by Scottish companies to be registered at Companies House within 21 days (s. 859A). There is no UCC Article 9 equivalent, the Register of Floating Charges (Scotland) is used alongside the Companies House register.]

### 9. Representations & Warranties

Organisation, authority, enforceability, no conflicts, financial statements, no MAC, litigation, compliance, taxes, pension obligations (if applicable), IP ownership (if material).

### 10. Covenants

**Affirmative:**

| Covenant | Detail |
|---|---|
| Reporting | Annual audited accounts, quarterly management accounts, compliance certificates |
| Taxes | Pay when due |
| Insurance | Maintain cover; lender noted |
| Existence | Maintain good standing |
| Access | Books and inspection rights |

**Negative:**

| Covenant | Limitation |
|---|---|
| Financial Indebtedness | Permitted baskets only |
| Security | Permitted security only |
| Disposals | Restricted asset sales |
| M&A | Consent required |
| Dividends | Restricted distributions (per companies act requirements) |

**Financial:**

| Covenant | Threshold | Test Frequency |
|---|---|---|
| Debt service cover | [x.xx] | [Quarterly] |
| Leverage / gearing | [x.xx] | [Quarterly] |
| Minimum liquidity / cash | [£] | [Monthly/Quarterly] |

### 11. Events of Default

Payment default (with cure), covenant default (with notice/cure), misrepresentation, cross-default above threshold, insolvency, judgments above threshold, MAC (if included), material litigation.

### 12. Remedies

Acceleration, default interest, set-off, enforcement of security, costs and expenses (including legal fees on a full indemnity basis).

### 13. Boilerplate

Governing law (Scots law or English law), jurisdiction (Scottish courts), service of process, set-off, assignment/participation, notices, entire agreement, amendments, waivers, severability.

### 14. Schedules

- **Schedule 1** - Amortisation Schedule
- **Schedule 2** - Form of Compliance Certificate
- **Schedule 3** - Existing Financial Indebtedness
- **Schedule 4** - Existing Security

### 15. Signature Blocks

- Execution in accordance with the Requirements of Writing (Scotland) Act 1995 if governed by Scots law, Or in accordance with the Law of Property Act / Companies Act if English law, Witnessing required for individuals, Companies execute under the Companies Act 2006 (s. 44 or s. 36A)

## Verification Checklist

- [ ] All economics align with term sheet and commitment letter
- [ ] Calculation methods and test periods fully defined
- [ ] **SONIA-based loans** - include fallback and amendment language (LMA recommended) `[VERIFY]`
- [ ] **Secured loans** - confirm Companies House registration; describe security precisely `[VERIFY]`
- [ ] **Scottish security** - ensure Standard Security registered in Land Register; Floating Charge registered at Companies House and Register of Floating Charges (Scotland) `[VERIFY]`
- [ ] **Consumer Credit Act** - check inapplicability for corporate borrowers
- [ ] OFAC/AML and sanctions representations included for regulated lenders
- [ ] No unresolved `[BRACKETED]` placeholders remain

## Scotland/UK Adaptation

This skill has been adapted from a US term loan agreement to the UK corporate lending framework.

### Key Differences

| US Concept | UK/Scottish Equivalent |
|---|---|
| SOFR benchmark | SONIA / BoE Base Rate |
| UCC Article 9 | Companies Act 2006 (s. 859A-D charges) + Standard Security (heritable) |
| Deed of Trust / Mortgage | Standard Security (heritable); Floating Charge (moveable assets) |
| ERISA | Pensions Act 1995 / 2004 (The Pensions Regulator) |
| TILA / Truth in Lending | Consumer Credit Act 1974 (inapplicable to corporates) |
| OFAC sanctions | HM Treasury / OFSI sanctions |
| KYC/BSA/AML | Money Laundering Regulations 2017; JMLSG guidance |
| IRS tax withholding | HMRC withholding tax (s. 874 ITTOIA 2005) |
| UCC financing statement | Companies House charge registration (s. 859A) |
| Multi-currency / LIBOR | SONIA replacement per Working Group on Sterling Risk-Free Reference Rates |
| Delaware corporate law | Companies Act 2006 |
| 360/360 day count | Actual/365 (UK market convention) |
| Confession of judgment | Not recognised in Scots/English law |
| Default judgment (summary) | Summary decree (Scots law) |

### Applicable Legislation, Companies Act 2006 (ss. 859A-D charge registration, ss. 36A/44 execution)
- Requirements of Writing (Scotland) Act 1995 (Scots law governed docs)
- Prescription and Limitation (Scotland) Act 1973 (5-year prescriptive period)
- Financial Services and Markets Act 2000 (regulated lending)
- Money Laundering Regulations 2017
- Data Protection Act 2018 / UK GDPR, Scottish Land Registration (Scotland) Act 2012

### Market Standards
UK term loan documentation typically follows LMA (Loan Market Association) recommended forms, available from www.lma.eu.com. Scottish facility agreements often use LMA forms adapted for Scots law, with appropriate modifications to security provisions, governing law, and jurisdiction clauses.

### Forms
There is no single prescribed form for UK term loan agreements. The LMA publishes recommended forms for investment grade, leveraged, real estate, and bilateral facilities. Scottish law firm precedents (adapted for Scots law) are the typical starting point for transactions involving Scottish borrowers or property.

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
