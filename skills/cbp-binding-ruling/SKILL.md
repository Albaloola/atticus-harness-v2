---
name: cbp-binding-ruling
language: en
description: Atticus UK/Scots legal skill for cbp-binding-ruling. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# HMRC Binding Tariff Information / Advance Tariff Ruling Request [SCOTS]

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

Produces a complete, evidence-backed binding ruling request package for pre-filing UK import treatment decisions on classification, valuation, origin, or marking.

> **[SCOTS: Note]** This skill has been adapted from the US CBP (Customs and Border Protection) binding ruling system under 19 CFR Part 177 to the UK HMRC BTI/Advance Tariff Ruling system. See the Scotland/UK Adaptation section at the end for the cross-reference table.

## Prerequisites

1. Confirm the matter is a UK import/export treatment determination appropriate for an HMRC BTI or Advance Tariff Ruling.
2. Identify requesting party's role and authority (importer / exporter / authorised representative).
3. If acting through a customs broker or agent, confirm written authorisation (POA) is in place.
4. Gather transaction evidence: supply chain docs, technical specs, invoices, contracts, prior import entries, prior HMRC correspondence.
5. Check for related-party pricing, royalties, assists, or profit-sharing elements.
6. Check that the importer has a valid UK EORI number.
7. Identify any confidential business information requiring redaction.
8. Identify correct HMRC office for the ruling request.

## Quick Start

1. Screen scope and jurisdiction → validate determination type against HMRC BTI/Advance Ruling authority.
2. Draft requester/standing section → collect merchandise record → document transaction chain.
3. Isolate legal questions (one per issue) → build authority-stack analysis using the UK Trade Tariff.
4. Assemble exhibit index → add certification and confidentiality block.
5. Run quality gates → finalise output in template order.

## Workflow

### 1. Scope and Jurisdiction Screen

Validate request type; flag matters not appropriate for BTI (e.g., general policy questions, anti-dumping applicability, redirect to HMRC advice centres).

| Determination | Authority | Required Facts |
|---|---|---|
| Tariff Classification | UK Trade Tariff (based on Combined Nomenclature), GIR 1 to 6 | Composition, function, process, alternatives considered |
| Valuation | UK customs valuation provisions (retained EU Customs Code principles) | Related-party analysis, transfer pricing, royalties/assists/proceeds |
| Origin/Marking | Trade Preference Agreements / UK Rules of Origin | Manufacturing operations, tariff shift, qualifying value content |
| Non-preferential origin | UK domestic rules of origin | Last substantial transformation |

### 2. Requester and Standing

- Full legal name, principal business address, contact person, UK EORI number starting with GB, Relationship to merchandise/importation, Legal authority basis; POA summary if acting through agent, Distinguish roles when requester is not the importer of record

### 3. Merchandise Record

| Field | Detail |
|---|---|
| Product name | Commercial and technical designation |
| Composition | Material IDs and percentages by weight/volume |
| Process | Step-by-step transformation from origin materials to finished goods |
| Specs | Weight, dimensions, capacity, tolerances, performance |
| Use | End-user function, market segment, substitutability |
| Standards | BSI/ISO/EN standards with citations |
| Samples | Photographs or sample plan with exhibit mapping |

For classification: state full 10-digit commodity code using the UK Trade Tariff, GIR (General Interpretative Rules) 1 to 6 sequencing, CN Explanatory Notes, and exclusionary analysis.

### 4. Transaction Structure and History

- Full supply chain: sourcing → processing → manufacturing → export → shipment → UK entry, All parties and relationship mapping; flag related-party status under customs valuation rules, Pricing: Incoterms, currency/terms, royalties, assists, proceeds of resale, Prior import history if any: entry numbers, ports, dates, declared commodity codes/values, audit outcomes, prior HMRC rulings with factual changes explained

### 5. Legal Questions

One question per discrete issue. No compound questions.

- Classification: "Whether the goods are classifiable under commodity code [____] as opposed to [alternative], based on [GIR path + facts]."
- Valuation: "Whether customs value may be determined under the transaction value method where [relationship/royalties/assists] and whether adjustment is required."
- Origin: "Whether the country of origin for UK import purposes is [country] based on [tariff shift / substantial transformation / specified process]."

### 6. Legal Analysis

Build authority stack table:

| Issue | Controlling Authority | Support | Application |
|---|---|---|---|
| Classification | UK Trade Tariff, GIR 1 to 6 | HMRC BTI decisions, CN ENs | Why heading is/is not met |
| Valuation | UK customs valuation provisions | HMRC guidance, UK tribunal decisions | Transaction value acceptability + adjustments |
| Origin | Trade Preference Agreement / UK Origin Rules | HMRC rulings + technical evidence | Why origin rule is triggered |

Prior rulings: distinguish adverse BTI decisions with material differences; note if previous BTIs have been revoked or expired.

### 7. Supporting Documentation Index

| Exhibit | Type | Relevance |
|---|---|---|
| Ex. 1 | Corporate authorisation / POA | Standing and signatory authority |
| Ex. 2 | Technical specs / engineering data | Composition and manufacturing basis |
| Ex. 3 | Samples / photographs | Physical characteristics |
| Ex. 4 | Commercial docs (invoice, contract) | Value and sale-structure support |
| Ex. 5 | Prior HMRC rulings / correspondence | Historical treatment |
| Ex. 6 | Expert / lab reports | Scientific support |

### 8. Certification and Confidentiality

- Sworn certification: printed name, title, signature, date, Confirm signer has authority and factual knowledge or reasonable basis, Confidentiality request: itemised identifiers, harm rationale, redaction plan for any public version

### 9. Final Assembly

Template order:
1. Header and requester identification
2. Purpose and legal authority
3. Factual background
4. Transaction/merchandise description
5. Issues and questions presented
6. Applicable law and analysis
7. Requested determination
8. Attachments and index
9. Certification and signatures

## Quality Checks

- Every asserted fact has documentary support; no unresolved references, All commodity code references current; check HMRC Tariff for changes, Questions map one-to-one to requested determinations, Routing to proper HMRC office confirmed, BTI applications submitted via the Customs Declaration Service (CDS) or EU Customs Trader Portal `[VERIFY]`
- Uncertain authority marked `[VERIFY]` before finalisation

## Pitfalls

- **Scope creep**: never include penalty/compliance advice, litigation strategy, or non-customs policy questions. BTI decisions are binding on HMRC but only for the named goods.
- **Compound questions**: HMRC may decline or partially answer; isolate each issue.
- **Stale rulings**: BTIs are generally valid for 3 years but may be revoked if classification changes. Always check validity against current UK Trade Tariff.
- **Unsupported claims**: no narrative assertions without source documents; separate facts from analysis.
- **Jurisdiction**: UK rules apply. For goods traded with Northern Ireland, separate EU customs provisions may apply under the Windsor Framework.
- **EORI number**: GB EORI required. XI EORI for Northern Ireland movements.
- **Post-Brexit customs**: UK customs is an independent regime; EU BTI decisions are not automatically binding in the UK.

---

## Scotland/UK Adaptation

### Overview
This skill has been adapted from the US CBP (Customs and Border Protection) binding ruling system under 19 CFR Part 177 to the UK HMRC BTI system.

### Key Differences from the US Original

| US Concept | UK Equivalent |
|------------|---------------|
| CBP (Customs and Border Protection) | HMRC (HM Revenue & Customs) Customs Directorate |
| 19 CFR Part 177 (binding rulings) | Customs and Excise Management Act 1979 / retained EU Customs Code principles |
| HTSUS (Harmonized Tariff Schedule of the US) | UK Trade Tariff (based on WCO HS Convention / Combined Nomenclature) |
| 10-digit HTSUS with statistical suffixes | 10-digit UK commodity code |
| GRI 1 to 6 (same concept) | GIR 1 to 6 (General Interpretative Rules, same WCO standard) |
| CBP Headquarters Rulings (HQ/H) | HMRC BTI decisions (BTI-UK reference numbers) |
| CBP NY Rulings (N-prefix) | HMRC National Clearance Hub / Customs Advice |
| 19 USC 1401a (valuation) | UK customs valuation law (retained EU Customs Code Title II) |
| 19 CFR Part 152 (valuation regs) | HMRC Customs Valuation Manual |
| 19 CFR Part 102 (origin) | UK Trade Preference Agreement rules of origin |
| 19 CFR 177.2(b)(7) confidentiality | UK GDPR / HMRC confidentiality procedures |
| Binding Ruling (indefinite unless revoked) | BTI valid for 3 years |
| CBP Form 4647 (ruling request) | No standard form; submitted via CDS / EU Customs Trader Portal |
| EORI (for US importers) | GB EORI (UK importers) |
| US Customs Broker licence | UK Customs Agent / Customs Intermediary (no licensing regime) |

### Key UK Legislation
- **Customs and Excise Management Act 1979** - foundation of UK customs law
- **Finance Acts** (annual) - customs duty provisions
- **Retained EU Customs Code** (as modified post-Brexit)
- **The Customs (Import Duty) (EU Exit) Regulations 2018**
- **The Customs (Tariff Quotas etc.) (EU Exit) Regulations 2020**
- **VAT (Imports) - Value Added Tax Act 1994**

### UK Customs Procedures
- **CDS** (Customs Declaration Service) - UK electronic customs system (replacing CHIEF)
- **UK Trade Tariff** - classification tool: https://www.gov.uk/trade-tariff
- **GVMS** (Goods Vehicle Movement Service) - GB border movements
- **NCH** (National Clearance Hub) - centralised customs decision-making
- **CCS** (Customs Clearance System) - supporting systems

### Scotland-Specific Context, Customs and import duties are reserved matters (UK Parliament / HMRC)
- Goods entering Scotland from outside the UK follow GB customs procedures through HMRC, No separate Scottish customs system, HMRC operates UK-wide, Scottish ports (Clyde, Forth, Grangemouth, Aberdeen) follow standard GB procedures, Agricultural goods may be subject to additional Scottish Government requirements (e.g., Animal and Plant Health Agency controls at Scottish Border Inspection Posts)
- Criminal prosecution for customs offences in Scotland proceeds through COPFS

### Forms and Guidance, Apply for a BTI: https://www.gov.uk/guidance/apply-for-a-binding-tariff-information-decision, Apply for an Advance Tariff Ruling: https://www.gov.uk/guidance/apply-for-an-advance-tariff-ruling, UK Trade Tariff: https://www.gov.uk/trade-tariff, HMRC customs guidance: https://www.gov.uk/government/collections/customs-and-international-trade-guidance, Customs Valuation Manual: https://www.gov.uk/government/collections/customs-valuation-manual

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
