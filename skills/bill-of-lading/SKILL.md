---
name: bill-of-lading
language: en
description: 'Drafts a U.S. ocean Bill of Lading (B/L) functioning as receipt, contract of carriage, and document of title under COGSA or Hague-Visby. Covers negotiable and straight B/Ls, cargo description, freight allocation, and core carriage clauses. Use when drafting or reviewing a bill of lading, master/house B/L, ocean shipment documentation, or title transfer. Trigger keywords: bill of lading, B/L, ocean carriage, COGSA, Hague-Visby, negotiable, straight, master bill, house bill. [Atticus UK/Scots refined]'
tags:
- agreement, drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Bill of Lading

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

Produces a complete B/L that memorializes shipment, allocates risk, and complies with the governing carriage regime. Populate every field from source documents only, never invent data.

## Prerequisites

1. **Parties** - shipper, consignee, notify party legal names, addresses, contacts
2. **Booking & voyage** - booking confirmation, vessel/voyage, ports, delivery terms
3. **Cargo details** - packing list, commercial invoice, marks/numbers, weights, measurements
4. **Commercial terms** - Incoterms, freight payment (prepaid/collect), currency, charges
5. **Special requirements** - insurance/declared value instructions, special handling, hazmat data (UN number, IMDG class) if applicable

## Output Structure

### 1) Document Header

| Field | Req | Notes |
|---|---|---|
| B/L Number | Yes | Unique identifier |
| B/L Type | Yes | `Negotiable` or `Straight (Non-negotiable)` |
| Issue Place/Date | Yes | City, country, date |
| Carrier / Shipper / Consignee | Yes | Legal name and address each |
| Notify Party | Opt | If applicable |
| Vessel/Voyage / Booking No. | Opt | If known |
| Container/Seal Nos. | Opt | If applicable |

### 2) Shipment Routing

| Field | Req | Notes |
|---|---|---|
| Place of Receipt | Yes | Terminal or facility |
| Port of Loading / Discharge | Yes | Port code if available |
| Place of Delivery | Yes | Final destination |
| Transshipment | Opt | Intermediate ports |

### 3) Cargo Description

| Field | Req | Notes |
|---|---|---|
| Description of Goods | Yes | Trade description; do not speculate |
| Packages/Units | Yes | Count and unit type |
| Gross Weight | Yes | With unit |
| Marks/Numbers / HS Code | Opt | As on packages; shipper-provided |
| Measurement / Packaging | Opt | CBM; type and condition |
| Declared Value | Opt | If higher liability requested |
| Special Handling | Opt | Fragile, reefer, etc. |
| HazMat | Cond | IMDG class, UN number |

### 4) Freight and Charges

| Field | Req | Notes |
|---|---|---|
| Freight Term | Yes | Prepaid or Collect |
| Rate Basis | Yes | Per container/weight/measure |
| Currency | Yes | ISO code |
| Additional Charges | Opt | THC, docs, fuel, security |
| Payment Due | Opt | Date or upon release |

### 5) Core Clauses Checklist

- [ ] Receipt in apparent good order unless claused
- [ ] Carrier duty of due diligence, vessel seaworthiness
- [ ] Liability limitation: COGSA $500/package or customary freight unit unless higher value declared and paid [VERIFY]
- [ ] Notice of loss/damage timing (apparent vs. concealed) [VERIFY]
- [ ] Time bar: COGSA one year from delivery or due date [VERIFY]
- [ ] Exceptions: perils of the sea, act of God, inherent vice, shipper fault
- [ ] General average clause and GA contribution security
- [ ] Carrier lien for unpaid freight/charges
- [ ] Governing law, forum selection, or arbitration clause
- [ ] Himalaya clause extending defenses to agents/subcontractors
- [ ] Both-to-blame collision clause (if used by carrier)

### 6) Negotiability and Originals

- State number of originals issued; surrender of one renders others void, Straight B/L: state non-negotiable, identify consignee, Electronic B/L: specify system and rules governing eBL transfer

### 7) Signature Blocks

- Carrier or agent: signature, name, title, date, Shipper signature if required by carrier practice, Clausing space for exceptions to condition/quantity

## Guidelines

- Mirror packing list, booking, and shipper instructions exactly, never fabricate data, If Hague-Visby or another regime governs, state it expressly and remove conflicting COGSA language [VERIFY]
- For L/C shipments, issue clean B/L only if no visible damage; otherwise clause accurately, Align freight term with Incoterms and buyer/seller responsibilities, Multimodal or door-to-door: clarify scope and liability regime for each leg, Treat HS codes, weights, and counts as shipper-provided; avoid guarantees, Flag jurisdiction-specific mandates or carrier standard terms that must attach

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
