---
name: commercial-invoice-for-export
language: en
description: Drafts a compliant Commercial Invoice for Export satisfying customs, banking (L/C), logistics, and insurance requirements. Enforces Incoterms 2020, HS tariff classification, country-of-origin determination, export control referencing, and certification language. Use when preparing export invoices for customs authorities, freight forwarders, banks, or insurance underwriters. [Atticus UK/Scots refined]
tags:
- agreement, drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Commercial Invoice for Export

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

Drafts a legally precise export commercial invoice for customs clearance, letter of credit payment, and multi-jurisdictional regulatory compliance.

## Prerequisites

Gather before drafting:

- **Purchase order / proforma invoice** - pricing, quantity, product specs
- **Sales contract or L/C** - payment terms, special notations, latest shipment date
- **Export license** (if controlled goods) - license number, expiration, ECCN or USML category
- **Shipping instructions** - Incoterm, named place/port, carrier details
- **Origin documentation** - country of manufacture, FTA qualification basis if claiming preference

## Invoice Sections

### 1. Header & Invoice Reference

| Field | Requirement |
|---|---|
| Invoice Number | Sequential, non-duplicative; traceable in compliance/accounting systems |
| Invoice Date | DD/MM/YYYY internationally; MM/DD/YYYY if US-only |
| Cross-references | Bill of lading / AWB number, packing list ref, certificate of origin number |

### 2. Party Identification

**Exporter / Shipper:**
- Full legal registered name (not trade name / DBA)
- Complete registered address with postal code and country, Tax ID / EIN / VAT / export registration number, International phone and customs/shipping email

**Consignee / Importer:**
- Full legal name as registered in destination country, Delivery or customs clearance address (include FTZ, bonded warehouse, or SEZ codes if applicable)
- Importer tax ID in destination-country format (EU VAT, CA BN, US EIN, etc.)
- Import license number or customs broker reference if required, Authorized contact: name, title, phone, email

> All party details must match PO, L/C, import permits, and AES/EEI filings character-for-character.

### 3. Commercial & Shipping Terms

| Field | Format |
|---|---|
| Incoterms 2020 | Three-letter code + full named place (e.g., `FOB Shanghai Port, China`) |
| Currency | Transaction currency; unit prices reflect all costs included under the Incoterm |
| Payment Terms | Net days, L/C reference, D/P, D/A, etc. |

### 4. Goods Description & Valuation

Each line item requires:

| Column | Requirement |
|---|---|
| Description | Specific technical detail, commercial name, dimensions, material/composition, model/part number, brand, intended use. No vague terms ("machine parts," "electronics") |
| HS / HTS Code | 6-digit HS minimum; extend to 8 to 10 digits per destination schedule. Flag classification risk for high-duty or controlled items |
| Country of Origin | Legal determination (substantial transformation / tariff shift / RVC) - not simply exporter's location |
| Quantity & UOM | Metric preferred (kg, MT, L, m², m³); include shipping units and item count |
| Unit Price | Must match proforma / PO / L/C exactly |
| Line Total | Quantity × Unit Price; verify arithmetic |

**Totals block:** subtotals by category (if multiple), total merchandise value, freight/insurance (itemized or included per Incoterm, state clearly), net weight (goods only, kg), gross weight (goods + packaging, kg).

### 5. FTA / Preferential Origin (if applicable)

- Identify the FTA (USMCA, CPTPP, EU agreement, ASEAN, bilateral)
- State the rule of origin satisfied (tariff shift, RVC threshold, specific process)
- Reference certificate of origin number, issuing authority, date, Exporter must hold approved-exporter status if required by the FTA

### 6. Export Control Notation (if applicable)

For EAR- or ITAR-controlled goods, include:

- **ECCN** and license number + expiration, OR license exception (e.g., EAR99 / NLR)
- **USML Category** (for ITAR items)

### 7. Certification & Signature Block

Include verbatim or substantively equivalent declaration:

> "I hereby certify that the information contained in this invoice is true, correct, and complete; that the goods are of the country of origin stated; that the prices shown are the actual transaction value with no undisclosed considerations; and that this shipment is in full compliance with applicable export control regulations, trade laws, economic sanctions, and anti-boycott requirements of the exporting country. I understand that civil and criminal penalties may be imposed for false or fraudulent statements."

Signature block: handwritten signature line, printed name, title, date (jurisdiction-appropriate format), company seal / chamber stamp / notarization space (if required by destination country or L/C).

## Pitfalls & Checks

- **L/C compliance** - Verify every element against L/C field-by-field (description, quantity, value, Incoterm, shipment date, special notations). Any discrepancy risks payment refusal.
- **No generic descriptions** - Customs undervaluation or misclassification penalties apply to vague language. Use HS-aligned terminology.
- **Tariff code verification** - HS codes and duty rates change. For high-value or controlled goods, recommend a binding tariff ruling or licensed customs broker review.
- **Origin ≠ exporter location** - Multi-country production requires documented substantial transformation, tariff shift, or RVC analysis.
- **Weights** - Always provide both net and gross weight; required by most customs authorities.
- **Recordkeeping** - Retain invoice and supporting documents 5 years (US EAR); 5 to 10 years in other jurisdictions.
- **Missing information** - If any required field cannot be determined, identify the gap, explain the compliance risk, and request the information before issuing.

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
