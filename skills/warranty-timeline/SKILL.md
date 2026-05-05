---
name: warranty-timeline [SCOTS]
language: en
description: Generates a chronological timeline of warranty requests, claims, and complaints for product defect litigation in Scotland/UK, regulatory proceedings before Trading Standards Scotland or OPSS, or internal investigations. Analyses complaint patterns, establishes manufacturer notice dates, and calculates defect statistics. Use when building warranty claim timelines, product defect chronologies, complaint pattern analysis, commission and diligence summaries (discovery equivalents), expert report exhibits, or proof hearing timeline exhibits for Scottish civil proceedings. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Warranty Request Timeline, Scotland/UK [SCOTS]

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

Builds a defensible chronological timeline of warranty requests and complaints for product defect litigation in Scotland/UK, regulatory proceedings before the Office for Product Safety and Standards (OPSS) / Trading Standards Scotland (TSS), or internal investigations.

## Prerequisites

Collect before starting:
- **Product ID** - model number, SKU, catalogue number, or product name
- **Source documents** - warranty databases, complaints records, service records, RMA logs, internal emails, quality reports, HSE/OPSS/TSS correspondence
- **Date range** - target period
- **Privacy constraints** - redaction/anonymisation requirements per protective order; UK GDPR / Data Protection Act 2018 considerations

## Workflow

Copy and track progress:

```
- [ ] Step 1: Collect and extract data from source documents
- [ ] Step 2: Organise chronologically and analyse patterns
- [ ] Step 3: Calculate statistics
- [ ] Step 4: Assemble deliverables
- [ ] Step 5: Apply privacy redactions and verify source attribution
```

### Step 1: Data Collection

Search uploaded documents using broad terms:

| Primary | Secondary |
|---|---|
| warranty claim/request | return authorisation, RMA |
| product defect, malfunction | service/repair request |
| customer complaint, product failure | engineering investigation, quality hold |
| [product name/model/SKU] | batch/lot number |

Extract per record:

| Field | Notes |
|---|---|
| Request date | Exact date; temporal proximity matters for notice, relevant to limitation (prescription) |
| Customer ID | Redact per protective order / UK GDPR |
| Product info | Model, serial, mfg date, batch/lot, purchase date |
| Defect description | Preserve verbatim customer language |
| Company response | Repair/replace/refund/deny + rationale |
| Resolution date | Calculate days-to-resolution |
| Handling personnel | Name + role (potential witnesses for proof) |
| Source attribution | Document title, repository, custodian, creation date |

### Step 2: Chronological Organisation and Pattern Analysis

Organise earliest to most recent. For high-volume products, group by week/month with drill-down.

Flag these patterns:

- [ ] **Earliest complaint** - establishes initial notice date (relevant to prescription under Prescription and Limitation (Scotland) Act 1973, limitation under Consumer Rights Act 2015 s.22 to 24)
- [ ] **Temporal clusters/spikes** - bad production batches or design-phase defects
- [ ] **Geographic concentrations** - distribution, storage, or environmental factors; note regional distribution within Scotland vs. rest of UK
- [ ] **Defect evolution** - progressive failure modes, emerging secondary defects
- [ ] **Internal acknowledgments** - engineering emails, quality holds, design change discussions
- [ ] **Response pattern shifts** - denial rate changes, escalation frequency, legalistic language
- [ ] **Inconsistencies** - gaps between internal knowledge and public statements (potential consumer protection implications under Consumer Protection from Unfair Trading Regulations 2008)
- [ ] **Regulatory reporting triggers** - when complaint volume/severity may require reporting under the General Product Safety Regulations 2005 (SI 2005/1803) or the UK Product Safety and Metrology etc. (Amendment etc.) (EU Exit) Regulations 2019 [VERIFY]

### Step 3: Statistics

Calculate:
- Total requests + unresolved count, Requests per 1,000 units sold (if sales data available) - note: if sales data is UK-wide, drill down for Scotland separately if geography is relevant, Repair vs. replace vs. deny rates, Average/median time to resolution, Median time from purchase to first complaint (short = latent defect argument, relevant to the "tacit acceptance" rule under Sale of Goods Act 1979, s.35 for rejection rights)

### Step 4: Deliverables

**A. Master Spreadsheet** - One row per claim with columns: Request Date (YYYY-MM-DD), Customer ID (redacted), Location, Product Model, Serial Number, Mfg/Batch Date, Defect Category (Electrical/Mechanical/Cosmetic/Safety/Performance), Severity (Minor/Moderate/Severe/Safety-Critical), Defect Description, Company Response, Resolution Date, Days to Resolution, Handling Personnel, Source Reference.

**B. Executive Summary** - At-a-glance metrics: total requests, date range, unresolved count, top defect categories with percentages, most affected regions, notable spikes, key statistics.

**C. Narrative Overview (2 to 5 paragraphs)** - Chronological progression: when defects first appeared, when patterns became statistically significant, when internal investigations began (or should have), when regulatory reporting triggered (under GPSR 2005), when corrective action taken or not. Present facts neutrally, no legal conclusions.

**D. Supporting Materials** - Source document log with full attribution, methodology statement (search terms, repositories, date ranges, limitations), visualisations if data supports (complaint volume over time, geographic heat maps).

### Step 5: Compliance, Privacy and Attribution

- **UK GDPR compliance**: Redact personal data (name, address, email, phone) per the Data Protection Act 2018 and the applicable protective order. Anonymisation is preferred over pseudonymisation for litigation disclosure.
- **Script / minutes of agreement**: If a confidentiality agreement or disclosure protocol exists between the parties (a common practice in Scottish commercial actions), ensure the timeline complies with its terms.
- **Source attribution**: Each data point must be traceable to its source document for authentication by the opposing party or the court (Sheriff Court / Court of Session practice, documents must be lodged as productions and may need to be spoken to by a witness at proof).

## Pitfalls and Checks

- **Preserve verbatim language** - customer descriptions carry evidentiary weight as contemporaneous non-expert statements; the Civil Evidence (Scotland) Act 1988 allows hearsay, but contemporaneous statements are still treated as more reliable
- **Disclose all gaps** - missing periods from retention policies, system migrations, or business unit changes must be noted, not papered over
- **Do not interpret ambiguous complaints** - present as-written; let counsel characterise
- **Maintain factual objectivity** - separate factual data from analytical observations to preserve legal professional privilege / litigation privilege
- **Dual format output** - manipulable (Excel) + fixed (PDF) for disclosure/production in Scottish proceedings
- **Privacy compliance** - redact personal data per UK GDPR, Data Protection Act 2018, and protective orders
- **Authentication readiness** - source attribution must support independent verification by opposing party or court, ensure witness availability or business records certification
- **Flag regulatory triggers** - note when complaint volume/severity may trigger reporting under:
  - General Product Safety Regulations 2005 (SI 2005/1803) - duty to notify OPSS of unsafe products
  - Consumer Rights Act 2015 - consumer remedies for defective goods (ss. 19 to 24)
  - Sale of Goods Act 1979 - implied terms (ss. 12 to 15)
  - Consumer Protection Act 1987 - product liability (Pt. 1, strict liability for defective products)
  - Reporting to Trading Standards Scotland (TSS) / OPSS
- **Prescription / Limitation awareness** - the Prescription and Limitation (Scotland) Act 1973 applies:
  - Delictual claims: 3 years from date of injury/discoverability (personal injury); 5 years from date when damage/discoverability (other loss)
  - Contractual claims: 5 years (short negative prescription) or 20 years (long negative prescription for probative documents)
  - The earliest complaint date may be critical for determining whether a claim is time-barred

## Scotland/UK Adaptation

### Terminology

| US Term | Scotland/UK Equivalent |
|---|---|
| CPSA (Consumer Product Safety Act) | Consumer Protection Act 1987 (Pt. 1 product liability) / General Product Safety Regulations 2005 |
| CPSC (Consumer Product Safety Commission) | OPSS (Office for Product Safety and Standards) / Trading Standards Scotland (TSS) |
| State consumer protection statutes | Consumer Rights Act 2015 / Consumer Protection from Unfair Trading Regulations 2008 / Business Protection from Misleading Marketing Regulations 2008 |
| Product liability / Tort | Product liability under the Consumer Protection Act 1987 (strict liability) / Delict of negligence |
| Warranty (UCC Article 2) | Sale of Goods Act 1979 (ss. 13 to 15 - implied terms) / Consumer Rights Act 2015 (consumer goods) |
| Express warranty | Express guarantee (s.30 Consumer Rights Act 2015 - regulations apply) |
| Discovery (litigation) | Commission and Diligence / Specification of documents |
| Expert report | Expert report (similar concept) |
| Trial (civil) | Proof / Proof hearing |
| SOL / Statute of Limitations | Prescription / Limitation (Prescription and Limitation (Scotland) Act 1973) |
| Punitive damages | No punitive damages in Scotland; limited aggravated damages |
| Regulatory reporting (CPSA mandatory) | GPSR 2005 - duty to notify OPSS of unsafe products; RAPEX/UK RAPEX |
| Class action / Multidistrict litigation | Group proceedings (Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018) - opt-in |
| Custodian (e-discovery) | Custodian (same term in Scottish disclosure) |
| FRE 801 (hearsay) | Civil Evidence (Scotland) Act 1988 - hearsay admissible in civil proceedings |
| FRE 403 (prejudice vs probative) | No direct equivalent; court retains general power to control evidence |

### Key UK/Scottish Legal Framework

- **Consumer Rights Act 2015** (ss. 9 to 13: satisfactory quality, fitness for purpose, description; ss. 19 to 24: short-term right to reject, final right to reject, repair/replace, price reduction)
- **Sale of Goods Act 1979** (ss. 12 to 15: implied terms for business-to-business sales)
- **Consumer Protection Act 1987** (Pt. 1: strict liability for defective products; Pt. 3: misleading price indications; the "development risks" defence at s.4(1)(e))
- **General Product Safety Regulations 2005** (SI 2005/1803) - duty to place only safe products on the market; notification obligations for unsafe products
- **Consumer Protection from Unfair Trading Regulations 2008** (SI 2008/1277) - prohibition on misleading/aggressive commercial practices
- **Prescription and Limitation (Scotland) Act 1973** - time bars: 3 years (personal injury), 5 years (general delict/contract), 20 years (long-stop)
- **Product Safety and Metrology etc. (Amendment etc.) (EU Exit) Regulations 2019** - post-Brexit amendments to UK product safety law
- **Data Protection Act 2018** - governs processing of personal data; for UK GDPR compliance in processing complaints data

### Citation Check

Every reference to US product safety statutes (CPSA, CPSC, state consumer protection acts, UCC Article 2, FRE hearsay rules) has been replaced with UK/Scottish equivalents (Consumer Protection Act 1987, GPSR 2005, Consumer Rights Act 2015, Sale of Goods Act 1979). Mark any unverified UK references with `[VERIFY]`. Flag any US concepts that cannot be cleanly adapted with `[SCOTS: Note]`.

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
