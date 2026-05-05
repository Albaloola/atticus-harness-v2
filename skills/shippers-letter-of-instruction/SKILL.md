---
name: shippers-letter-of-instruction
language: en
description: Drafts a UK-focused Shipper's Letter of Instruction (SLI) authorising a freight forwarder, capturing UK customs filing intent, and documenting export-control classifications. Use when drafting SLIs, authorising forwarders, preparing UK customs entries, or documenting UK Strategic Export Control List classifications for international exports. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Shipper's Letter of Instruction (SLI)

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

Produces a compliance-ready SLI that authorises the forwarder and aligns export data across commercial invoices and government filings.

## Prerequisites

Collect before drafting:

- **Parties** - legal names, addresses, contacts for exporter, consignee, forwarder, intermediate consignee
- **Shipment** - Incoterms, routing, ports, carrier, dates, insurance
- **Commodities** - descriptions, part/model numbers, qty, UoM, weights, packaging
- **Classification** - HS codes, UK Strategic Export Control List status (ML, PL, DG, UKRL), licence or exemption basis
- **Valuation** - invoice value, currency, valuation basis
- **Screening** - restricted party/end-use results, red-flag findings (OFSI consolidated list, DIT sanctions)

## Quick Start

Draft the SLI in nine sections. Each section maps to a block in the output.

```
- [ ] Header
- [ ] Party table
- [ ] Shipment details
- [ ] Commodity table
- [ ] Export control classification
- [ ] Customs filing
- [ ] Authorisations
- [ ] Certifications
- [ ] Signature block
```

## Output Sections

### 1. Header

- Document title, internal reference number, preparation date, Cross-reference to invoice/PO/packing list

### 2. Party Table

| Role | Fields |
|---|---|
| Exporter | Legal name, address, contact, EORI number, VAT number |
| Consignee | Legal name, address, contact, importer ID |
| Forwarder | Legal name, address, contact |
| Intermediate Consignee | Legal name, address, contact (if any) |

### 3. Shipment Details

Incoterms (year), routing, port of export/destination, carrier/mode, ship date, insurance (Y/N + coverage), special handling/hazardous.

### 4. Commodity Table

Per line item: description (commercial + technical), part/model, HS code, qty/UoM, net weight, gross weight, value, country of origin.

### 5. Export Control Classification

Per line item: UK Strategic Export Control List category, control entry, licence required (Y/N), licence number/OGEL reference, open general export licence (OGEL) basis (if any), military list (ML) or dual-use list (DG) identifier. If not listed: state "Not listed on UK Strategic Export Control Lists."

### 6. Customs Filing

- **Filing responsibility**: `Forwarder` or `Exporter`
- **Entry type**: Customs Declaration (CDS) - EX1 for exports; supplementary declarations where applicable
- **Authorization statement** (verbatim when forwarder files): "The exporter hereby designates and authorises the freight forwarder named herein to act as our forwarding agent for export control and customs purposes, including preparation and submission of customs declarations to HMRC via CDS using our exporter information and the shipment details provided."
- **Filing exemption** (if any): cite regulatory basis `[VERIFY]` (e.g. low-value consignment relief, temporary export exemption)

### 7. Authorisations

- Forwarder authorised to prepare/submit export documents, book transport, coordinate delivery, State scope limitations or prohibited actions if any

### 8. Certifications

- Information accuracy and completeness, Compliance with UK Export Control Act 2002, UK Strategic Export Control Lists, and HM Treasury/OFSI sanctions regimes, Restricted party screening completed (OFSI consolidated list, UN sanctions); no known prohibited end-use/end-user, No knowledge of diversion or prohibited destination, Anti-bribery compliance (Bribery Act 2010)

### 9. Signature Block

Authorised signatory: name, title, company, signature, date.

## Pitfalls

- **Name mismatch** - party names/addresses must match official registrations and invoice data exactly.
- **Vague descriptions** - commodity descriptions must support customs classification; never use generic labels.
- **Unverified "no licence required"** - always tie to destination/end-user/end-use analysis. Mark uncertain items `[VERIFY]`.
- **Cross-document drift** - values, quantities, and HS codes must align with the commercial invoice.
- **Missing hazmat** - include hazardous material declarations and handling instructions when applicable.
- **Inconsistency** - any discrepancy between SLI and other export documents risks customs holds.
- **EORI number** - essential for UK exports; confirm validity before submission.

## Scotland/UK Adaptation

This skill has been adapted from US export practice to UK/Scots law.

### Key Terminology Changes

| US Term | UK/Scotland Equivalent |
|---|---|
| USPPI (United States Principal Party in Interest) | Exporter (or Consignor) |
| EEI (Electronic Export Information) | Customs Declaration, EX1 via CDS (Customs Declaration Service) |
| AES (Automated Export System) | CDS (Customs Declaration Service) - successor to CHIEF |
| Schedule B / HS Codes | HS / TARIC codes, UK-specific tariff measures on gov.uk/trade-tariff |
| ECCN (Export Control Classification Number) | UK Strategic Export Control List category (ML, PL, DG, UKRL) |
| ITAR (International Traffic in Arms Regulations) | UK Export Control Act 2002 - Military List items (ML) |
| EAR (Export Administration Regulations) | UK Dual-Use Regulation (retained EU Reg. 2021/821) |
| EAR99 (no licence required) | "Not listed on UK Strategic Export Control Lists" |
| OFAC (Office of Foreign Assets Control) | OFSI (Office of Financial Sanctions Implementation, HM Treasury) |
| OFAC sanctions lists | UK Sanctions List / OFSI Consolidated List |
| 15 CFR (Code of Federal Regulations) | UK Export Control Order 2008 (SI 2008/3231) / Retained Dual-Use Regulation |
| DUNS number | EORI number (Economic Operators Registration and Identification) |
| EIN (Employer Identification Number) | Company Registration Number at Companies House or VAT registration number |
| Anti-boycott rules (EAR Part 760) | No direct UK equivalent, but UK/EU blocking regulation applies to certain extraterritorial sanctions |

### Regulatory Framework

| US | UK |
|---|---|
| ITAR (22 CFR 120-130) | Export Control Act 2002; Export Control Order 2008 (SI 2008/3231) |
| EAR (15 CFR 730-774) | Retained Dual-Use Regulation (EU) 2021/821; Dual-Use and Related Goods (Export Control) Regulations 2018 |
| OFAC sanctions (31 CFR) | Sanctions and Anti-Money Laundering Act 2018; various sanctions regulations by country regime |
| FDA (for medical exports) | MHRA (Medicines and Healthcare products Regulatory Agency) |
| EPA | SEPA (Scottish Environment Protection Agency) - for Scotland-specific environmental export controls |

### Scottish/UK Practice Notes

- **OFSI consolidated list** of designated persons, essential for restricted party screening
- **DIT (Department for International Trade)** - administers export licensing; now part of Department for Business and Trade
- **OGELs (Open General Export Licences)** - commonly used to avoid individual licence applications
- **HMRC compliance checks** - post-export verification; retain SLI for minimum 4 years (HMRC record-keeping requirements)
- **Scotland-specific**: no separate Scottish export control regime; export licensing is a reserved matter; food/agri exports from Scotland may involve Food Standards Scotland (FSS) or DEFRA
- **Bribery Act 2010** - section 7 corporate offence for failure to prevent bribery; relevant for international supply chains

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
