---
name: import-compliance-manual
language: en
description: Atticus UK/Scots legal skill for import-compliance-manual. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# UK Import Compliance Manual [SCOTS]

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

Drafts a UK customs import compliance manual that serves as an operational policy document and evidence of reasonable care under the Customs and Excise Management Act 1979 (CEMA).

> **Scotland/UK Adaptation:** This skill has been converted from US CBP/ACE import compliance (19 U.S.C. § 1484, 19 C.F.R.) to UK HMRC/CDS import compliance under CEMA 1979, the Customs (Import and Export) Regulations, the UK Global Tariff, and HMRC Notice series. Scotland imports are handled via UK-wide customs procedures (HMRC; no devolved customs authority). The Union Customs Code (UCC) has been replaced by the UK's own customs framework post-Brexit.

## Key Differences from US System

| US (CBP) | UK (HMRC) |
|----------|-----------|
| HTSUS classification | UK Global Tariff / Commodity codes (10-digit CN-style) |
| 19 U.S.C. § 1484 reasonable care | CEMA 1979 - duty to make accurate declarations |
| CBP Form 7501 (entry summary) | C21 (CDS) electronic declaration |
| ACE (Automated Commercial Environment) | CDS (Customs Declaration Service) |
| Importer of Record (IOR) | Importer of Record / Declarant for customs purposes |
| DUNS / EIN | GB EORI number + VAT registration number |
| 19 C.F.R. Part 163 recordkeeping | HMRC recordkeeping (CEMA Sch 4; notice 702) |
| PGA (Partner Government Agencies) | UK border agencies (DEFRA, FSA, MHRA, HSE) |
| Prior disclosure (19 U.S.C. § 1592) | Voluntary disclosure to HMRC |

## Prerequisites

1. **Company profile** - importer name, GB EORI number, VAT number, principal ports, product categories
2. **Organisational chart** - compliance owner (Head of Customs / Trade Compliance Manager)
3. **Trade programmes** - FTAs (UK-Australia, UK-New Zealand, UK-Japan CPTPP), Generalised Scheme of Preferences, customs special procedures, inward/outward processing
4. **PGA exposure** - applicable agencies (DEFRA, FSA, MHRA, OPSS, HSE)
5. **Existing procedures** - current SOPs, broker agreements, classification databases

## Output Structure

### Chapter 1 - Corporate Policy Statement

| Element | Content |
|---|---|
| Statutory basis | CEMA 1979, as amended; all HMRC-administered regulations |
| Reasonable care | Acknowledge obligation to make truthful and accurate declarations |
| Zero tolerance | No intentional errors; cite civil/criminal penalties |
| Scope | All imports, ports, customs regimes, values |
| Responsibility | Named Head of Customs or compliance committee |
| Covered parties | Employees, agents, brokers, freight forwarders, third parties |
| Review cycle | Annual minimum; triggered by regulatory or business change |

### Chapter 2 - Commodity Code Classification

Assign a designated classifier with technical/legal authority.

**Methodology:** identify product characteristics/end use → apply GIR 1-6 → consult UK Trade Tariff, HMRC Classification Notices, and Binding Tariff Information (BTI) rulings.

**Per-SKU documentation:** technical specs, lab reports, written GIR analysis, BTI reference (if held), classification database entry.

**BTI:** Apply to HMRC via CDS when classification is uncertain or duty impact significant; implement on receipt (BTI binding for 3 years).

**Monitoring:** review UK Global Tariff amendments, HMRC classification updates, tribunal decisions; reassess affected SKUs within 30 days.

### Chapter 3 - Customs Valuation

Primary method: transaction value (CEMA 1979 §258-271).

**Pre-entry review elements:**

| Item | In Value? | Note |
|---|---|---|
| Freight & insurance | To place of importation | Post-Brexit: CIF at UK border |
| Packing costs | Yes | - |
| Buying commissions | No | - |
| Selling commissions | Yes | - |
| Assists/pre-production items | Yes | Prorate |
| Royalties/licence fees | Yes if condition of sale | - |
| Resale proceeds to seller | Yes if contractual | - |

**Related-party transactions:** document relationship → circumstances-of-sale analysis → transfer pricing studies.

**Hierarchy:** transaction value → identical → similar → deductive → computed → fallback.

### Chapter 4 - Country of Origin

**Non-preferential:** apply substantial transformation or last substantial processing test.

**Preferential origin documentation, FTAs:**

| Agreement | Key Rule |
|-----------|----------|
| UK-EU TCA | Wholly obtained or sufficient processing |
| UK-Japan CEPA | Tariff shift + RVC |
| UK-Australia FTA | RVC thresholds |
| UK-CPTPP | Product-specific rules (PSRs) |
| GSP | Preferential origin declaration |

**Supplier validation:** obtain origin declarations before first import; risk-tiered audits.

### Chapter 5 - Recordkeeping

**Authority:** CEMA 1979 Schedule 4; HMRC notice 702.

| Record Type | Retention |
|---|---|
| Import entry records (C21, invoices, BOL, packing lists) | 6 years from import |
| Customs special procedure records | 6 years from discharge |
| Duty relief / preference claim support | 6 years from claim |
| BTI records | 3 years from expiry |

Designate recordkeeper; electronic records must be unalterable with audit trail.

### Chapter 6 - UK Border Agency (PGA Equivalent) Compliance

Build a PGA matrix mapping agency, statutory basis, key requirement, and CDS data element. Common agencies: DEFRA (SPS checks, animal/plant products), FSA (food), MHRA (medicines/devices), OPSS (product safety), HSE (chemicals/REACH).

**Pre-importation checklist:** licences/permits obtained; CHED/import notifications filed and accepted; safety/security declarations submitted; admissibility docs on file.

### Chapter 7 - Internal Audit

**Frequency:** annual comprehensive; focused review on new product/supplier/trade lane.

**Scope:** classification accuracy, valuation completeness, origin claims, recordkeeping retrieval, PGA/CDS accuracy, trade programme integrity, training completion.

**Severity levels:** Critical / Significant / Moderate / Observation, per internal risk framework.

**Voluntary disclosure:** evaluate under HMRC voluntary disclosure procedure for any critical finding with duty underpayment.

### Chapter 8 - Training

| Role | Initial | Annual |
|---|---|---|
| Head of Customs | 8 hrs | 4 hrs |
| Purchasing/supply chain | 4 hrs | 2 hrs |
| Product development | 4 hrs | 2 hrs |
| Logistics | 4 hrs | 2 hrs |
| Senior management | 2 hrs | 1 hr |

**Records:** attendance log, assessment, certificates (retain 6 years).

### Chapter 9 - Corrective Action

1. Contain → 2. Investigate → 3. Evaluate voluntary disclosure → 4. Remediate → 5. Verify → 6. Report

---

**Scotland/UK Adaptation notes:**
- 19 U.S.C. § 1484 → CEMA 1979
- HTSUS → UK Global Tariff / Commodity codes, ACE → CDS (Customs Declaration Service)
- CBP → HMRC
- 19 C.F.R. Part 163 → HMRC Notice 702; CEMA Sch 4
- PGA → DEFRA, FSA, MHRA, OPSS, HSE, Prior disclosure (19 U.S.C. § 1592) → Voluntary disclosure to HMRC, Section 301/232 → UK trade remedies (Trade Remedies Authority)
- US FTA → UK FTAs (UK-EU TCA, UK-Japan CEPA, UK-CPTPP)

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
