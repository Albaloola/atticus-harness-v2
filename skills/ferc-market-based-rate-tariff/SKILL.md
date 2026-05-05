---
name: ferc-market-based-rate-tariff
language: en
description: Atticus UK/Scots legal skill for ferc-market-based-rate-tariff. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Energy Supply and Wholesale Trading Documentation (GB/Scotland)

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

[SCOTS: Note] This skill is adapted from the US FERC Market-Based Rate Tariff framework (Order Nos. 697, 697-A, 860; 18 CFR Part 35). The UK/Scottish equivalent is fundamentally different: the GB wholesale electricity market operates under the British Electricity Trading and Transmission Arrangements (BETTA), regulated by Ofgem, with grid connection governed by the Grid Code and the Balancing and Settlement Code (BSC). There is no direct equivalent of a FERC MBR tariff filing. This skill provides a framework for energy supply and trading documentation in the GB market.

Produces Ofgem-compliant trading documentation, Grid Code/BSC compliance procedures, and commercial terms for wholesale electricity trading in the GB market.

## Prerequisites

Collect before drafting:

1. **Generator/Supplier identity** - legal name, registered office, Companies House number
2. **Ofgem identifiers** - electricity supply licence number (if applicable), generation licence
3. **Licence type** - Generation, Supply (domestic/non-domestic), Interconnector, Distribution
4. **BSC Party ID** - BSC Party identifier and metering/BMU registration details
5. **Asset inventory** - generation capacity (MW), fuel type, location, Grid Code compliance category
6. **Market participation** - BSC Party status, Elexon membership, ancillary services contracts

[SCOTS: Note] The below sections map the general structure of a US FERC MBR tariff to equivalent GB market documentation. Each section is flagged where US-specific content cannot be cleanly rewritten.

## Quick Start

1. Gather all prerequisites and the Ofgem licence / BSC registration
2. Draft sections in order below
3. Flag all client-specific gaps with `[INSERT]` tags

[SCOTS: Note] The remainder of this file retains the original US FERC framework for reference alongside GB equivalents. The Scotland/UK Adaptation section at the end summarises the key differences and provides guidance on GB market documentation requirements.

## Output Structure (GB Market Documentation)

### 1. Preamble

- Party legal name, registered office, Companies House registration, Ofgem licence number (generation/supply), licence effective date, BSC Party ID, metering point reference numbers, Statement of compliance with the Electricity Act 1989, Utilities Act 2000, Energy Act 2013
- Acknowledgement of Ofgem regulatory authority and licence conditions

### 2. Regulatory Compliance Commitments

- **Electricity Supply Licence** - Standard Conditions (SLCs) compliance
- **Generation Licence** - compliance with Grid Code, Connection and Use of System Code (CUSC)
- **BSC compliance** - Balancing and Settlement Code obligations
- **REMIT compliance** - Regulation on Wholesale Energy Market Integrity and Transparency (EU 1227/2011, retained in UK law)
- **Capacity Market** - if participating, compliance with the Capacity Market Rules 2014
- **Carbon Price Support / Emissions Trading** - UK ETS compliance
- **REGOs / Guarantees of Origin** - renewable energy certification

### 3. Trading Arrangements (GB Market Context)

[SCOTS: Note] GB wholesale electricity trading does not use the US ISO/RTO model. Trading occurs through:
- Bilateral contracts (forward/futures markets, ICE, OTC)
- Power Purchase Agreements (PPAs)
- Short-term trading (various platforms)
- Balancing Mechanism (BM)

| Obligation | Description |
|---|---|
| BSC Party registration | Valid Party ID, credit cover, metering registration |
| Trading & Settlement | BSC settlement runs; imbalance settlement |
| Credit | Collateral requirements per BSC (credit cover) |
| Grid Code compliance | Mandatory for all generators above 50MW; voluntary for smaller units |
| CUSC compliance | Connection and Use of System Code terms |
| REMIT reporting | Transaction data reporting to ACER/Ofgem |

### 4. Contract Terms and General Conditions

- **Rate-setting** - bilateral agreement terms; must comply with supplier licence conditions (SLC 22 - standard tariff setting for domestic customers)
- **Non-discrimination** - licence condition on undue discrimination (SLC 5)
- **Dispute resolution** - Ofgem complaint procedure; Energy Ombudsman (domestic); arbitration
- **Force majeure** - notice and mitigation obligations
- **Creditworthiness** - credit assessment requirements per BSC
- **Termination/amendment** - per licence conditions and contractual terms

### 5. Certification and Compliance Statements

Include authorised officer certification block:
- Officer name, title, company legal name, Certifications: (1) authority to enter trading, (2) accuracy/completeness, (3) compliance with licence/BSC obligations, Signature block with date, phone, email

### 6. GB Energy Market Codes & Guidance (Quick Reference)

| Code/Guide | Scope | Application |
|---|---|---|
| Grid Code | Connection, operation, planning | Generators, large users, interconnectors |
| BSC | Balancing mechanism, settlement | All BSC Party categories |
| CUSC | Connection and use of transmission system | Transmission-connected parties |
| DCUSA | Distribution use of system | Distribution-connected parties |
| MRA (Master Registration Agreement) | Electricity supply registration | Suppliers, generators |
| REC (Retail Energy Code) | Retail market arrangements | Suppliers |
| Supply Licence Conditions | Electricity Act 1989 | Licensed suppliers |
| REMIT | Wholesale market integrity | All market participants |
| Ofgem Self-Governance | Code modifications | Industry parties |

## Gold-Plating Checklist

- **Licence scope verification**: ensure the party holds the correct licence (generation, supply, or both)
- **Grid Code category**: confirm Generation Category (A, B, C, or D) - drives compliance obligations
- **BSC compliance**: verify trading capability at relevant voltage levels; meter registration status
- **REMIT compliance**: ensure internal capacity for transaction reporting to ACER/Ofgem within deadlines
- **Carbon compliance**: verify UK ETS account and allowance holdings if generating
- **Backup arrangements**: ensure balancing mechanism participation or back-up cover for supply failures

## Pitfalls

- **Market access**: Without BSC Party status and adequate credit cover, direct participation in the wholesale market is impossible
- **Licence conditions**: Supply licence SLC 22 (domestic tariff cap) and SLC 27 (customer vulnerability) are extensively enforced, ensure compliance measures documented
- **REMIT reporting**: Unreported transactions carry significant Ofgem penalties
- **Code modifications**: Self-governance process under the Energy Act 2013; monitor code changes (BSC Panel, Grid Code Review Panel)
- **Dual regulation**: Generators/suppliers face regulation from both Ofgem (licence) and BSC/Elexon (market); do not confuse obligations
- **Brexit implications**: UK ETS replaced EU ETS; REMIT retained but references to EU bodies (ACER) remain for cross-border reporting

## Scotland/UK Adaptation

This skill was originally based on the US FERC Market-Based Rate Tariff framework, Order Nos. 697/697-A/860, and 18 CFR Part 35. The Scottish/UK equivalent is substantially different.

**Key changes:**
- Replaced FERC (Federal Energy Regulatory Commission) with Ofgem (Office of Gas and Electricity Markets)
- Replaced US ISO/RTO framework with GB BETTA (British Electricity Trading and Transmission Arrangements)
- Replaced 18 CFR Part 35 with Electricity Act 1989, Utilities Act 2000, Energy Act 2013
- Replaced Category 1/Category 2 market power screens with BSC Party categories and Grid Code compliance levels, Replaced FERC EQR (Electric Quarterly Report) with REMIT reporting to ACER/Ofgem, Replaced FERC eFiling with Ofgem licensing procedures and BSC/Elexon systems, Replaced US wholesale market structure (PJM, MISO, CAISO, etc.) with GB market (Elexon BSC, Balancing Mechanism)
- Replaced FERC Order Nos. 697/860 with Grid Code, BSC, CUSC, DCUSA, REC codes, Added REMIT compliance (EU regulation retained in UK law)
- Added Capacity Market Rules and UK ETS references, Added Ofgem supply licence standard conditions, Changed language to British English spelling, Date format: DD/MM/YYYY

**Relevant forms:**
- Ofgem electricity supply licence application form (available from ofgem.gov.uk)
- BSC Party registration forms (available from elexon.co.uk)
- Grid Code compliance documentation (available from nationalgrideso.com)
- See `/scots-forms/` directory for any downloaded forms

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
