---
name: finra-4512-customer-info
language: en
description: Drafts an FCA client categorisation and customer account information checklist for UK authorised firms covering identification, client categorisation (retail / professional / eligible counterparty), suitability profile (COBS 9A), and account elections. Trigger when the user mentions client categorisation, FCA client onboarding, KYC/CIP, suitability assessment, COBS 6 client agreements, or UK MiFIR account setup. [Atticus UK/Scots refined]
tags:
- checklist, drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# FCA Client Categorisation & Account Information, UK

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

Generates an FCA-compliant client categorisation and account information packet for supervisory review and FCA exam readiness.

## Quick Start

Gather before drafting:
- Firm's FCA permissions and approved compliance procedures (SYSC)
- Government ID(s) and tax information (UTR / NI number for UK persons; equivalent for non-UK)
- Entity documents if applicable (trust deed, articles of association, LLC/corp docs, power of attorney)
- Investment profile inputs (objectives, risk tolerance, horizon, financial standing, knowledge/experience)
- Disclosure/consent forms (E-SIGN, margin, options, securities lending, privacy)

## Core Workflow

Complete each section. Record "Declined" with date for non-mandatory declinations. Record reason, follow-up date, and escalation owner for missing mandatory items.

### A. Header

| Field | Req | Notes |
|---|---|---|
| Client name(s) | Yes | Legal name per ID / passport |
| Account number | Yes | "to be determined" if pending |
| Account type | Yes | Individual, joint, ISA, SIPP, trust, corporate, discretionary |
| Date opened | Yes | Actual or "Pending" |
| Responsible representative | Yes | Name + FCA registration / FRN |

### B. Client Identification & Categorisation (COBS 3)

| Field | Req | Notes |
|---|---|---|
| Legal name | Yes | Must match government ID / passport |
| Residential / registered address | Yes | No PO box for primary address |
| Date of birth | Yes | Individual clients only |
| National Insurance / UTR | Yes | UK; equivalent for overseas |
| Nationality / tax residence | Yes | FATCA/CRS implications `[VERIFY]` |
| Client categorisation | Yes | Retail / Professional (per se or elective) / Eligible Counterparty (COBS 3.4 to 3.6) `[VERIFY]` |
| Authorised persons | Entities | Signatories and controllers (COBS 6.1) `[VERIFY]` |
| Beneficial owners / PSCs | Entities | Register of People with Significant Control (PSC Register) `[VERIFY]` |

### C. Trusted Contact / Nominated Person

| Field | Req | Notes |
|---|---|---|
| Nominee / nominated person offered | Best practice | Record date of offer |
| Accepted/declined | Yes | Record decision + date |
| Name, relationship, contact | If accepted | Full name, phone, email |
| Scope statement | Yes | Informational only, no trading authority unless under separate legal authority (Lasting Power of Attorney) |

### D. Employment & Affiliations

| Field | Req | Notes |
|---|---|---|
| Employment status | Yes | Employed, self-employed, retired, student, not employed |
| Occupation / title | Yes | Role and industry |
| Employer name/address | If employed | Including director/partner status |
| FCA-regulated firm affiliation | Yes | COBS 3.4/3.5 implications `[VERIFY]` |
| UK regulated market / recognised exchange affiliation | Yes | `[VERIFY]` |
| Issuer / insider affiliations | If applicable | Director/officer/PDMR status, MAR implications `[VERIFY]` |

### E. Investment Profile (COBS 9A, Appropriateness & Suitability)

| Field | Req | Capture |
|---|---|---|
| Investment objectives | Yes | Preservation, income, growth, speculation |
| Risk tolerance | Yes | Low/medium/high + narrative |
| Time horizon | Yes | Short/medium/long + goals |
| Liquidity needs | Yes | Near-term cash needs or restrictions |
| Income / net worth | Yes | Annual income, liquid and total net worth |
| Knowledge & experience | Yes | None/limited/moderate/extensive per asset class (COBS 9A.2) `[VERIFY]` |
| Constraints | If applicable | ESG, sector, tax sensitivity |

### F. Account Features

- [ ] Margin / stock lending: disclosure delivered, agreement date
- [ ] Options: approval level, KIID/PRIIPs KID delivered, delivery date
- [ ] Dividend reinvestment election
- [ ] Cash sweep / interest options
- [ ] Standing instructions (systematic investment/withdrawal)
- [ ] ISA / SIPP wrapper elections (if applicable)

### G. Delivery & Consent

- [ ] E-SIGN consent (email on file) - electronic execution per ESIGN / UK electronic communications framework
- [ ] Mailing address confirmed for paper delivery
- [ ] Privacy notice delivered (UK GDPR / Data Protection Act 2018) `[VERIFY]`
- [ ] Client agreement executed (COBS 6.1: terms of business) `[VERIFY]`

### H. Certifications & Compliance Review

- Adviser signature: name, FCA reference number, date, Compliance oversight signature: name, position, date, Review notes: missing items, red flags, follow-ups, AML/KYC checks completed

### I. Retention

| Item | Requirement | Notes |
|---|---|---|
| Periodic review | ≥ every 36 months | Suitability report review cycle `[VERIFY]` |
| Record retention | Account life + 5 yrs post-close | FCA SYSC requirement `[VERIFY]` |
| Accessibility | Readily retrievable | `[VERIFY]` |

## Pitfalls & Checks

- Use exact legal name and physical residential address; PO boxes only as secondary correspondence address.
- Document all declinations and outstanding items with dates.
- Client categorisation is critical, errors affect conduct of business rules and client protection. Retail clients receive highest protections.
- Escalate vulnerable clients, minors, powers of attorney, trusts, and corporate entities for legal review.
- Follow firm's SYSC compliance procedures for AML/KYC, sanctions screening (OFSI/UN), anti-bribery, and compliance sign-off.
- Mark uncertain citations with `[VERIFY]`; confirm against current FCA Handbook, MiFIR, and UK GDPR.
- UK jurisdiction only; note deviations for cross-border clients (including EU/EEA after Brexit, third-country equivalence considerations).
- COBS 3 categorisation determines the availability of COBS 9A (suitability) and COBS 10 (appropriateness) protections. Professional clients and eligible counterparties have reduced protections.

## Scotland/UK Adaptation

- **Regulatory Authority**: Financial Conduct Authority (FCA) replaces FINRA/SEC. No equivalent to FINRA Rule 4512 specifically, the analogous requirements are distributed across COBS (Conduct of Business Sourcebook), SYSC (Senior Management Arrangements, Systems and Controls), and the FCA Handbook.
- **Client Categorisation (COBS 3)**: UK has three tiers, Retail Client (highest protection), Professional Client (per se or elective), and Eligible Counterparty (lowest protection). This replaces the US uniform suitability/BrokerCheck framework.
- **Suitability (COBS 9A)**: UK MiFID-derived suitability rules require firms to assess suitability before making personal recommendations, equivalent to FINRA Rule 2111.
- **Client Agreements (COBS 6.1)**: Must be executed in a durable medium before providing services, US has no direct equivalent.
- **Data Protection**: UK GDPR / Data Protection Act 2018 (with ICO regulation) replaces US Reg S-P/GLBA privacy rules.
- **Money Laundering**: The Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017 apply to all UK authorised firms, no direct US equivalent.
- **Tax Identification**: UK uses UTR (Unique Taxpayer Reference) and NI (National Insurance) number, replacing US SSN/EIN.
- **Terminology**: US term → UK equivalent: FINRA → FCA; SEC → FCA/ PRA; Broker-Dealer → Authorised Firm / Investment Firm; RR → FCA-approved person; CRD → FCA register / FRN; E-SIGN consent → UK electronic signature framework; Reg S-P → UK GDPR/DPA 2018; Customer → Client; BD → Firm.

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
