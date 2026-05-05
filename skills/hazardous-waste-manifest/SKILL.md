---
name: hazardous-waste-manifest
language: en
description: Drafts a SEPA-compliant Scottish hazardous/special waste consignment note under the Environmental Protection Act 1990, Waste (Scotland) Regulations, and Special Waste Amendment (Scotland) Regulations. Assembles consignor, transporter, and waste management facility chain-of-custody data with EWC coding and ADR classification. Use when preparing consignment note packages, SEPA waste tracking documents, or waste disposal compliance filings. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, regulatory, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Hazardous Waste Consignment Note (SEPA, Scotland)

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

Drafts a Scottish/UK-compliant hazardous waste consignment note (special waste consignment note) establishing chain of custody from generation through final disposal, under the Environmental Protection Act 1990, the Waste (Scotland) Regulations, and the Special Waste Amendment (Scotland) Regulations.

## Prerequisites

1. **Waste producer (consignor) SEPA registration** - SEPA waste carrier registration; physical site address; SEPA premises code
2. **Transporter records** - SEPA waste carrier registration, Carriage of Dangerous Goods registration (ADR), permit status per carrier
3. **Waste management facility authorisation** - SEPA waste management licence or PPC permit confirming acceptance of waste type/quantity
4. **Waste characterisation** - UN proper shipping name (ADR), EWC (European Waste Catalogue) 6-digit code, quantity, container count/type, hazard class, packing group
5. **Emergency contact** - 24-hour UK emergency response number (e.g., NCEC +44 1235 239 670) or company line

## Output Structure

### 1. Consignor (Waste Producer) Information

| Field | Requirement |
|---|---|
| Legal business name | Full legal name |
| Waste production site address | Physical (not mailing) |
| SEPA waste carrier registration number | Environmental Protection Act 1990, s. 34 |
| Primary contact phone | Business hours |
| 24-hour emergency contact | Required for transport incidents |

### 2. Transporter Information *(repeat per carrier)*

| Field | Requirement |
|---|---|
| Company legal name | As registered with SEPA |
| SEPA waste carrier registration number | Waste (Scotland) Regulations |
| Carriage of Dangerous Goods registration | ADR / CDG Regulations |
| Signature/date block | Custody receipt acknowledgment |

### 3. Designated Waste Management Facility

| Field | Requirement |
|---|---|
| Facility legal name | As permitted |
| SEPA waste management licence number | Current registration |
| Permit reference | SEPA or equivalent authority |
| Permitted waste types | Must align with consignment note EWC codes |

> Verify facility authorisation for specific waste type/quantity and waste treatment standards before designating.

### 4. Waste Description

| Field | Requirement |
|---|---|
| UN proper shipping name | ADR |
| EWC (European Waste Catalogue) code | 6-digit code per Waste Framework Directive |
| Quantity | Weight AND volume |
| Container type and count | ADR-approved specs |
| Physical/chemical form | Solid, liquid, sludge, etc. |
| Hazard class / packing group | ADR classification |
| Special handling | If applicable |

### 5. Certifications

- **Emergency number**: 24-hour UK emergency response line or company line
- **Consignor certification** (per Environmental Protection Act 1990 and the Special Waste Regulations):

```
I certify that the waste described above is classified correctly, is properly
packed and labelled for transport, and is consigned to a facility authorised
to accept such waste under the Environmental Protection Act 1990 and the
Waste (Scotland) Regulations.
```

- Include waste hierarchy certification: waste prevention, preparation for re-use, recycling, recovery options considered as required by the Waste (Scotland) Regulations

### 6. Signatures & Discrepancy Reporting

Signature chain: consignor representative → each transporter → receiving facility operator (each with date)

Discrepancy fields per the Special Waste Regulations:
- [ ] Quantity variation (significant vs. non-significant)
- [ ] Container damage or count mismatch
- [ ] Waste type or description discrepancy
- [ ] Unacceptable waste notation
- [ ] Facility irregularity documentation

### 7. Copy Distribution

1. Consignor retained copy
2. One copy per transporter
3. Designated facility
4. Copy sent to SEPA (required for special waste movements)
5. Return copy to consignor as delivery/disposal proof

## Guidelines

- Final document must conform to SEPA consignment note format under the Special Waste Amendment (Scotland) Regulations
- **Scotland-specific**: SEPA requires pre-notification at least 72 hours before special waste movements, submit via SEPA's online waste data portal
- **Multi-transporter**: each carrier needs a separate signed acknowledgment block; verify current SEPA and ADR credentials
- **Waste treatment standards**: confirm facility is authorised for applicable treatment standards
- **Cross-border movements (Scotland to/from England/Wales/NI)**: separate consignment regimes apply; verify receiving nation's requirements
- **Discrepancy threshold**: significant quantity discrepancies trigger SEPA notification, flag for solicitor review
- **Retention**: consignor must retain copies minimum 3 years per Environmental Protection Act 1990 [VERIFY against current amendments]

---

## Scotland/UK Adaptation

This skill has been adapted from its original US-focused version (EPA RCRA manifest) for use under Scots and UK law.

### Key US-to-UK/Scottish Conversions

| US Term | Scottish/UK Equivalent |
|---------|----------------------|
| EPA (US Environmental Protection Agency) | SEPA (Scottish Environment Protection Agency) |
| EPA Form 8700-22 (Uniform Hazardous Waste Manifest) | SEPA Consignment Note (special waste) |
| RCRA (Resource Conservation and Recovery Act) | Environmental Protection Act 1990, Part II |
| 40 CFR Parts 261 to 265 | Waste (Scotland) Regulations 2011 / Special Waste Amendment (Scotland) Regulations 2004 |
| DOT (US Dept of Transportation) / 49 CFR Parts 171 to 180 | Carriage of Dangerous Goods and Use of Transportable Pressure Equipment Regulations (CDG) / ADR (European Agreement) |
| Generator, EPA ID | Consignor, SEPA Waste Carrier Registration Number |
| TSDF (Treatment, Storage, Disposal Facility) | Waste Management Facility (under SEPA waste management licence or PPC permit) |
| DTSC (California) or equivalent state authorities | SEPA (Scotland) |
| LDR (Land Disposal Restrictions) | Waste treatment standards under waste management licensing / PPC regime |
| CHEMTREC (1-800-424-9300) | UK 24-hour emergency response (e.g., NCEC: +44 1235 239 670) |
| State overlays (CA, NY, etc.) | Devolved legislation, Scotland, England, Wales, NI each have separate waste regulations |
| EPA waste codes (4-digit, 40 CFR Part 261) | EWC (European Waste Catalogue) 6-digit codes |
| DOT proper shipping name (49 CFR Part 172) | UN number / proper shipping name per ADR |

### Regulatory Framework

- **Primary legislation**: Environmental Protection Act 1990, Part II (ss. 33 to 34)
- **Scottish regulations**: Waste (Scotland) Regulations 2011; Special Waste Amendment (Scotland) Regulations 2004; Pollution Prevention and Control (Scotland) Regulations 2012
- **Duty of care**: Section 34 EPA 1990 applies to all persons handling waste; the Waste (Scotland) Regulations 2011 impose additional requirements including waste hierarchy, source segregation, and pre-treatment
- **Carrier registration**: All waste carriers in Scotland must register with SEPA (or be exempt)
- **SEPA consignment note**: Required for all movements of special waste; pre-notification required 72 hours before first movement through SEPA's online system
- **Consignment note retention**: Minimum 3 years (verify current SEPA requirements)

### Cross-Border Movements

- **Scotland ↔ England/Wales/NI**: Separate consignment regimes apply; verify the receiving nation's requirements. England uses the Environment Agency; Wales uses Natural Resources Wales; Northern Ireland uses NIEA.
- **International shipments**: Subject to Transfrontier Shipment of Waste Regulations 2007 (EU-derived retained legislation)

### Practitioner Notes

- The Scottish regime uses the term "special waste" rather than "hazardous waste" (though categories align with the European Waste Catalogue)
- SEPA operates an online waste data portal (Waste Data Portal) for electronic consignment notes and pre-notifications, The waste hierarchy (Prevention, Preparing for Re-use, Recycling, Other Recovery, Disposal) is a legal requirement under the Waste (Scotland) Regulations 2011
- Criminal liability under EPA 1990 s. 33: unauthorised or harmful deposit, treatment, or disposal of waste, up to 5 years' imprisonment and/or unlimited fine on conviction on indictment

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
