---
name: finra-4512-customer-account
language: en
description: Atticus UK/Scots legal skill for finra-4512-customer-account. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# FCA Customer Due Diligence & Account Information [SCOTS]

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

Produces an examination-ready customer due diligence record satisfying FCA Handbook requirements (SYSC, COBS, MLR 2017) and SMCR accountability.

> **Scotland/UK Adaptation:** This skill has been converted from FINRA Rule 4512 / SEC Rule 17a-3 (US broker-dealer) to FCA customer due diligence requirements under the Money Laundering Regulations 2017, the FCA Handbook (SYSC, COBS), and the Senior Managers and Certification Regime (SMCR). There is no direct equivalent to FINRA rules in Scotland/UK.

## Key Differences from US System

| US (FINRA/SEC) | UK (FCA) |
|----------------|----------|
| FINRA Rule 4512 | FCA Handbook (SYSC 6, COBS 6) |
| SEC Rule 17a-3 recordkeeping | FCA recordkeeping (SYSC 3) |
| CIP (Customer Identification Program) | CDD/EDD under MLR 2017 |
| FINRA Rule 2111 suitability | COBS 9 (suitability) / COBS 10 (appropriateness) |
| FINRA Rule 3210 (personnel accounts) | SMCR certification regime |
| Trusted contact person | No direct equivalent; vulnerability considerations (FCA FG21/1) |
| SSN/EIN | National Insurance number / Companies House number |
| FINRA CRD | FCA Register number |

## Flow

### 1. Customer Due Diligence (MLR 2017)

| Field | Notes |
|---|---|
| Full legal name | As on passport / photo ID |
| Residential address | Physical address (no P.O. boxes) |
| Date of birth | |
| National Insurance number | For UK individuals |
| Phone, email | Preferred contact method |
| Proof of identity & address | Passport + utility bill/bank statement (≤3 months) |

**CDD categories (Reg 28-37 MLR 2017):**
- **Simplified DD** - low risk (public authorities, listed companies)
- **Standard CDD** - all other customers
- **Enhanced DD** - PEPs, complex structures, high-risk jurisdictions, non-face-to-face

### 2. Key Features & Appropriateness

Assess per COBS 9-10:
- Investment objectives: capital preservation / income / growth / speculation, Risk tolerance: documented narrative response, not just box-ticking, Time horizon: short-term (<1 yr) / medium-term (1-5 yrs) / long-term (5+ yrs)
- Knowledge & experience per asset class, Financial situation: income, net assets, regular savings

**Non-advised services (execution-only):** COBS 10 appropriateness test applies.

### 3. Employment & Affiliation Disclosures

| Situation | Action |
|---|---|
| FCA-registered person | Obtain employer consent (SMCR guidance) |
| Director/board member of listed company | Market abuse regime compliance |
| PEP (Politically Exposed Person) | EDD required (MLR 2017 Reg 35) |
| Self-employed | Source of funds documentation |

### 4. Source of Funds & Wealth

Required under MLR 2017 for standard CDD:
- Source of initial deposit, Source of ongoing wealth, Supporting documentation: payslips, bank statements, sale documents, inheritance documents

### 5. Account Features

| Feature | Required Documentation |
|---|---|
| Execution-only advisory | Appropriateness test (COBS 10) |
| Advisory / discretionary | Suitability report (COBS 9) |
| Margin / derivatives | Risk warning; eligible counterparty/elective professional |
| E-delivery | Consent to electronic communications |
| ISA / SIPP | Additional HMRC eligibility documentation |

### 6. Recordkeeping

- [ ] CDD records retained for 5 years after business relationship ends (MLR 2017 Reg 40)
- [ ] Suitability/appropriateness records retained for minimum 5 years (FCA rules)
- [ ] Ongoing monitoring periodic review schedule established
- [ ] Privacy notice provided (UK GDPR Art 13/14)
- [ ] AML risk assessment documented

## Pitfalls

- No direct equivalent to FINRA "Trusted Contact Person" - consider vulnerability flagging under FCA FG21/1 (Guidance for firms on the fair treatment of vulnerable customers) instead, SMCR, senior manager responsible for customer outcomes (SMF3: Executive Director)
- EDD for PEPs is mandatory, not optional, Source of funds checks must be risk-based and documented, No US-style "customer identification program" - CDD under MLR 2017 is the equivalent, Approved Persons regime (FCA) differs from SMCR; confirm which applies

---

**Scotland/UK Adaptation notes:**
- FINRA Rule 4512 → FCA Handbook SYSC 6 / COBS 6 / MLR 2017
- SEC Rule 17a-3 → FCA recordkeeping (SYSC 3)
- CIP (Customer Identification Program) → CDD/EDD (MLR 2017 Reg 28-37)
- FINRA Rule 2111 → COBS 9 (suitability) / COBS 10 (appropriateness)
- SSN/EIN → National Insurance number / CH number, FINRA CRD → FCA Register (FRN)
- Trusted Contact Person → FCA vulnerability guidance (FG21/1)
- $ → £

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
