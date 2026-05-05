---
name: product-liability-summary [SCOTS]
language: en
description: Generates structured summaries of product liability cases covering liability theories, outcomes, and strategic implications. Use when summarising defective product litigation, manufacturing or design defect claims, failure to warn cases, breach of warranty disputes, or personal injury product cases. Adapted for Scotland/UK. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Product Liability Case Summary [SCOTS]

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

Compresses product liability litigation into a self-contained reference document with liability analysis, outcome details, and strategic takeaways for both sides. Adapted for Scots law and UK jurisdiction.

## Prerequisites

- **Case materials** - court opinions, pleadings, expert reports, and/or settlement documents
- **Product identification** - product name, intended use, and alleged defect

## Quick Start

1. Gather case materials and identify the product and defect at issue
2. Build the case overview table (caption, court, dates, parties, posture)
3. Describe the product, standards, and warnings
4. Analyse each liability theory and catalogue defences
5. Document the outcome (decree/settlement or appellate decision)
6. Extract strategic implications for both sides

## Output Sections

### 1. Case Overview

| Field | Content |
|-------|---------|
| Case name | Full caption (e.g. *[Pursuer] v [Defender]*) |
| Court / Jurisdiction | Court (Sheriff Court / Court of Session / UK Supreme Court) |
| Case number | Court reference number |
| Key dates | Raising, hearing, decree/settlement, reclaiming motion, appeal |
| Parties | Pursuer(s) and Defender(s) with roles |
| Procedural posture | Current status / final disposition |

### 2. Product Description

- Product name, manufacturer, model/version, Intended use and design features, Manufacturing process (if relevant to defect theory)
- Applicable safety standards (BSI, HSE, MHRA, UKCA marking, etc.)
- Warnings and instructions provided to consumers

### 3. Liability Analysis

**Theories** - complete for each that applies:

| Theory | Alleged facts | Legal standard | Elements met/failed |
|--------|--------------|----------------|---------------------|
| Defective product (CPA 1987 s.3) | Consumer Protection Act 1987: strict liability where product not as safe as persons generally entitled to expect | |
| Breach of duty (delict) | Donoghue v Stevenson [1932]: duty of care towards foreseeable consumer; breach causing loss | |
| Breach of contract | Sale of Goods Act 1979 / Consumer Rights Act 2015: goods not of satisfactory quality or fit for purpose | |
| Failure to warn | Common law duty to warn; adequacy of warnings and instructions | |

**Defences** - check all raised: assumption of risk (volenti non fit injuria), product misuse, contributory negligence, compliance with statutory/regulatory requirement (CPA 1987 s.4(1)(f)), development risks defence (CPA 1987 s.4(1)(e) - "state of the art"), limitation (Prescription and Limitation (Scotland) Act 1973 - 5 years from trigger; 3 years from discoverability; max 10 years from supply), and statutory authority.

**Expert testimony** - summarise key experts on causation, alternative design, and industry standards.

### 4. Outcome

- **Decree**: liability finding per theory; damages (solatium for pain and suffering; patrimonial loss for financial loss); no punitive damages in Scots delict (aggravated damages may be available in limited circumstances)
- **Settlement**: amount (if disclosed), non-monetary terms (recalls, design changes, enhanced warnings)
- **Appellate**: reclaiming motion (Sheriff Appeal Court / Inner House) or appeal to UK Supreme Court; issues reviewed; significant rulings

### 5. Strategic Implications

- **Defenders/manufacturers**: design takeaways, warning obligations, QC practices, regulatory gaps, insurance considerations, similar-product risk
- **Pursuers/consumers**: burden of proof lessons, recovery benchmarks, litigation challenges, precedential value
- **Doctrinal significance**: flag new tests adopted, liability expansion/limitation, novel application to emerging technology

## Pitfalls and Checks

- Distinguish holdings from obiter dicta from practical observations, Use jurisdiction-specific standards (CPA 1987 strict liability vs. common law delict vs. contract)
- Note split of authority (Sheriff Court vs. Court of Session, or Scotland vs. England) where relevant, Tag unsourced citations with `[VERIFY]`
- Present both sides' strongest arguments, maintain neutrality, Include enough standard explanation for readers unfamiliar with Scottish/UK jurisdiction
- **GDPR note**: UK GDPR and Data Protection Act 2018 apply to disclosure; CAUTION with personal data in case materials
- **Legal expenses**: recoverability of expenses on either judicial or contractual basis; check whether case is in Sheriff Court (summary cause / ordinary cause) or Court of Session

---

## Scotland/UK Adaptation

This skill is adapted from US product liability procedure to Scots law:

| US Concept | Scottish Equivalent |
|------------|-------------------|
| Strict liability (Restatement §402A) | Consumer Protection Act 1987 (strict liability) |
| Design/manufacturing defect / failure to warn | CPA 1987 s.3 (defect), s.4 defences; common law delict (Donoghue v Stevenson) |
| Breach of warranty (Magnuson-Moss) | Sale of Goods Act 1979 / Consumer Rights Act 2015 (satisfactory quality, fitness for purpose) |
| Punitive damages | Not available in Scots delict; aggravated damages limited |
| CPSC / ASTM / UL / FDA | BSI, HSE, MHRA, Trading Standards, UKCA marking |
| Federal/state court split | Sheriff Court (summary cause or ordinary cause) / Court of Session (Outer House then Inner House) / UK Supreme Court |
| USD | GBP (£) |
| FRE evidence rules | No direct equivalent; Scottish civil evidence rules apply |
| Expert reports (Daubert standard) | No Daubert; expert admissibility under Scottish rules; expert duty to court |

## Concepts with No Direct Scottish Equivalent [FLAGGED]

- **Magnuson-Moss Warranty Act** - no UK equivalent; consumer warranties governed by Consumer Rights Act 2015
- **Restatement (Second) of Torts §402A** - US restatement; not authoritative in Scotland
- **Punitive / exemplary damages** - generally not available in Scots delict (except in rare circumstances)
- **Daubert / Frye standard** for expert evidence, no equivalent; expert competency determined under Scottish procedure
- **Class action** - no opt-out class action in Scotland; group proceedings under CPR (different regime) or representative actions limited
- **Pre-trial discovery / deposition** - not available in Scotland; commission and diligence / specification of documents used instead

**[SCOTS] All dollar references converted to GBP. All US-specific statutes/agencies replaced with UK equivalents. All US procedural concepts (FRE, Daubert, class actions) flagged as having no Scottish equivalent.**

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
