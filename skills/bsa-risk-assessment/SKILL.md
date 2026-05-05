---
name: bsa-risk-assessment
language: en
description: Drafts an AML/CTF Financial Crime Risk Assessment for UK/Scottish financial institutions per the Money Laundering Regulations 2017, FCA Financial Crime Guide, JMLSG Guidance, and OFSI Sanctions requirements. Evaluates inherent risks (customer, product, geographic, transaction, third-party), control adequacy, and residual risk. [SCOTS] Adapted from US BSA/AML risk assessment. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, regulatory, compliance, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# AML/CTF Financial Crime Risk Assessment (UK/Scotland)

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

[SCOTS: Note] This skill is adapted from the US BSA/AML Risk Assessment framework (FinCEN, FFIEC, OCC, 31 U.S.C. § 5318(h)). The UK/Scottish equivalent operates under the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017 (SI 2017/692), supervised by the FCA, with guidance from the Joint Money Laundering Steering Group (JMLSG). Scotland-specific: Scottish solicitors are supervised by the Law Society of Scotland for AML compliance.

Produces examination-ready Financial Crime Risk Assessments evaluating inherent AML/CTF/proliferation financing risks against mitigating controls per FCA Financial Crime Guide (FCG) and JMLSG Guidance methodology.

## Prerequisites

Gather before drafting:

1. **Institution profile** - entity type, FCA registration number (FRN), total assets, branch/office footprint, UK and international relationships
2. **Products & services** - inventory with volumes for high-risk products (e-money, wire transfers, foreign exchange, trade finance, cryptoassets, high-value dealers)
3. **Customer data** - segments with counts of high-risk categories (PEPs, cash-intensive businesses, MSBs, charities/NPOs, non-UK residents, complex corporate structures)
4. **AML/CTF program documentation** - policies, CDD/EDD procedures, transaction monitoring system specs, screening system logs, training records
5. **Filing history** - annual SAR (Suspicious Activity Report) counts by category to the National Crime Agency (NCA)
6. **Independent review** - most recent scope, findings, remediation status (under Reg. 21 of MLR 2017)
7. **Regulatory history** - FCA supervisory correspondence, visits, section 166 skilled person reports, enforcement actions

## Document Sections

### 1. Executive Summary

Overall financial crime risk rating (Low/Moderate/High), key risk concentrations, control gaps, priority recommendations with owners and target dates.

### 2. Introduction

- **Regulatory basis**: Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017 (MLR 2017), Reg. 18 (risk assessment); Proceeds of Crime Act 2002 (POCA), Part 7; Terrorism Act 2000; Counter-Terrorism Act 2008; Sanctions and Anti-Money Laundering Act 2018
- **Supervisory authority**: FCA Financial Crime Guide (FCG) in the FCA Handbook
- **Guidance**: JMLSG Guidance (Parts I and II)
- **Scope**: all business lines, products, customers, geographies
- **Assessment period** and update frequency (typically annual)
- **Risk-based approach** aligned with JMLSG methodology

### 3. Institution Overview

Table covering: entity type, FCA registration, total assets, branch/office count, high-risk products offered, customer segments, annual SAR filing counts to NCA.

### 4. Inherent Risk Identification

Five risk dimensions, each rated High/Moderate/Low per MLR 2017 Reg. 18 and JMLSG Sector 1 guidance:

- **Customer** - PEPs (domestic and foreign), cash-intensive businesses, MSBs/appointed representatives, charities/NPOs, non-UK resident customers, complex ownership structures, trust/offshore structures, EEA/non-EEA jurisdictional exposure
- **Product & Service** - flag products enabling anonymity, rapid movement, or cross-border activity (e-money, cryptoassets, anonymous prepaid, correspondent banking, trade finance, high-value lending, wealth management)
- **Geographic** - FATF grey/black list jurisdictions, HM Treasury sanctions targets, OFSI financial sanctions regimes, high-risk third countries per MLR 2017 Reg. 33, UK National Risk Assessment (NRA) identified countries
- **Transaction** - high-volume cash handling, unexpected transaction patterns, rapid movement of funds, round-sum structuring, unexplained third-party payments, trade-based ML indicators
- **Third-Party** - reliance on third parties for CDD (Reg. 39 to 43 MLR 2017), outsourcing, fintech partnerships, white-labelling, appointed representatives

### 5. Risk Assessment Matrix

Per risk category:

| Risk | Inherent | Likelihood | Impact | Mitigating Controls | Residual |
|---|---|---|---|---|---|
| [Category] | H/M/L | H/M/L | H/M/L | [Description] | H/M/L |

Reference the UK National Risk Assessment (NRA) on money laundering and terrorist financing and FCA thematic reviews for current typologies (sanctions evasion, cryptoasset ML, fraud-enabled ML, trade-based ML).

### 6. Controls & Mitigation

Evaluate each AML/CTF program component against its regulatory basis:

| Component | Citation |
|---|---|
| Firm-wide risk assessment | MLR 2017 Reg. 18 |
| AML/CTF Policies & Procedures | MLR 2017 Reg. 19 to 20 |
| CDD / KYC | MLR 2017 Reg. 27 to 30 |
| EDD | MLR 2017 Reg. 33 to 35 |
| Beneficial ownership | MLR 2017 Reg. 5 (definition), PSC Register |
| Transaction Monitoring | MLR 2017 Reg. 19; FCG |
| Sanctions Screening | Sanctions and Anti-Money Laundering Act 2018; OFSI guidance |
| SAR Reporting | Proceeds of Crime Act 2002, Part 7 (s. 330 to 338); Terrorism Act 2000, s. 21A; NCA SAR regime |
| MLRO / Governance | MLR 2017 Reg. 21 |
| Training | MLR 2017 Reg. 24 |
| Independent Audit | MLR 2017 Reg. 21; FCA FCG |
| Record-keeping | MLR 2017 Reg. 40 |

For each: document current status and adequacy rating.

### 7. Conclusions & Recommendations

- Overall risk determination with narrative justification, Residual risks where controls are insufficient, Prioritised remediation table (recommendation, priority, owner, target date)

## Verification Requirements

These items change over time, confirm before finalising:

- [ ] FATF grey/black list countries, verify at fatf-gafi.org
- [ ] HM Treasury financial sanctions targets, verify at gov.uk/sanctions-embargoes
- [ ] MLR 2017 and amendments, check for subsequent statutory instruments
- [ ] UK NRA latest edition, HM Treasury publication
- [ ] OFSI general licences and guidance, check ofsi.gov.uk

## Pitfalls

- **Quantitative support required** - risk ratings must cite transaction volumes, SAR counts, or alert rates; qualitative assertions alone are insufficient
- **Board presentation** - document must be presented to the board or senior management committee with evidence of review per Reg. 21
- **Version retention** - keep prior assessments; regulators compare year-over-year
- **Privilege risk** - do not include legally privileged material if document will be produced to the FCA
- **JMLSG alignment** - reference specific JMLSG Guidance sections when evaluating control adequacy; the FCA will have regard to whether a firm has followed JMLSG guidance (FCG)
- **Scotland-specific**: Scottish solicitors engaged in relevant financial business are supervised by the Law Society of Scotland for AML, not the FCA; adjust regulatory references accordingly

## Scotland/UK Adaptation

This skill was originally based on the US BSA/AML Risk Assessment framework (FinCEN, FFIEC, OCC, 31 C.F.R., OFAC). It has been substantially rewritten for the UK/Scottish environment.

**Key changes:**
- Replaced Bank Secrecy Act (BSA) 31 U.S.C. § 5318(h) with Money Laundering Regulations 2017 (MLR 2017), Proceeds of Crime Act 2002, Terrorism Act 2000
- Replaced FinCEN with FCA / National Crime Agency (NCA)
- Replaced FFIEC BSA/AML Examination Manual with FCA Financial Crime Guide and JMLSG Guidance, Replaced OFAC sanctions with OFSI (Office of Financial Sanctions Implementation) / HM Treasury sanctions, Replaced US SAR filing to FinCEN with UK SAR filing to NCA (POCA Part 7)
- Replaced CIP (31 C.F.R. § 1020.220) with CDD under MLR 2017 Reg. 27 to 30
- Replaced beneficial ownership 25% threshold with MLR 2017 Reg. 5 / PSC Register / Reg. 30
- Replaced CTR (Currency Transaction Report) - no direct UK equivalent; SAR is the primary reporting mechanism, Replaced FinCEN GTOs (Geographic Targeting Orders) with UK-specific targeted financial sanctions, Added Scottish-specific AML supervision (Law Society of Scotland for solicitors)
- Added reference to UK NRA (National Risk Assessment) on money laundering and terrorist financing, Changed language to British English spelling, Date format: DD/MM/YYYY

**Relevant forms:**
- NCA SAR Portal (sar.nca.gov.uk) - online SAR submission, FCA financial crime self-assessment template (available from fca.org.uk)
- See `/scots-forms/` directory for relevant UK forms

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
