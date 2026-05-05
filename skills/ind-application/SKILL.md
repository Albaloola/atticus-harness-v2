---
name: ind-application
language: en
description: Atticus UK/Scots legal skill for ind-application. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# UK Clinical Trial Authorisation (CTA) Application [SCOTS]

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

Drafts a complete CTA application under the Medicines for Human Use (Clinical Trials) Regulations 2004 (SI 2004/1031) and Human Medicines Regulations 2012 for MHRA authorisation to begin human clinical trials in the UK.

> **Scotland/UK Adaptation:** This skill has been converted from FDA IND (21 CFR Part 312) to UK MHRA Clinical Trial Authorisation under SI 2004/1031 (the Clinical Trials Regulations). The MHRA is the UK regulatory authority. Scotland falls under the same UK-wide legislative framework for clinical trials.

## Prerequisites

Collect before drafting:
1. **IMP information** - chemical name, code designation, structural formula, mechanism of action
2. **Nonclinical reports** - pharmacology, toxicology, PK/PD data
3. **IMP Dossier (IMPD)** - manufacturing process, specifications, stability, certificates of analysis
4. **Clinical protocol(s)** - design, objectives, endpoints, statistical analysis plan
5. **Investigator info** - CVs, GCP training, clinical site details
6. **Prior human experience** (if any) - foreign trials, literature, compassionate use
7. **REC (Research Ethics Committee) documentation** - approval letters or submission plans, informed consent forms

## Quick Start

1. Confirm trial phase and whether it falls within the CTIA (Clinical Trials of Investigational Medicinal Products) Regulations
2. Complete EudraCT application form (or the UK-specific integrated research application system, IRAS)
3. Draft sections per Schedule 1 to SI 2004/1031
4. Submit to MHRA via the UK Clinical Trials Gateway or IRAS
5. Run checklists for IMPD, IB, protocol, and ethics

## CTA Submission Sections (Schedule 1, SI 2004/1031)

| # | Section | Reference |
|---|---------|-----------|
| 1 | Application form (EudraCT / IRAS) | Reg 17, Sch 1 |
| 2 | Protocol | Reg 17(2)(a) |
| 3 | Investigator's Brochure | Reg 17(2)(b) |
| 4 | IMP Dossier (IMPD) - chemical, pharmaceutical, biological data | Reg 17(2)(c) |
| 5 | Nonclinical data, pharmacology, PK, toxicology | Reg 17(2)(d) |
| 6 | Previous clinical experience | Reg 17(2)(e) |
| 7 | Summary of IMP characteristics | Reg 17(2)(f) |
| 8 | REC opinion (or submission proof) | Reg 17(3) |

## Key Checklists

### Application Form (IRAS / EudraCT)
- [ ] Sponsor name, address, contact
- [ ] IMP name and code designation
- [ ] Trial phase (I, II, III, IV)
- [ ] EudraCT number
- [ ] Indication(s) under investigation
- [ ] List of all submitted sections
- [ ] Authorised signatory with date

### IMP Dossier (IMPD)
- [ ] Drug substance: synthesis, physicochemical characterisation, specifications
- [ ] Drug product: formulation, manufacturing process, container/closure, stability
- [ ] Phase-appropriate depth (Phase I: abbreviated; Phase III: full validation)
- [ ] GMP compliance certification

### Investigator's Brochure
- [ ] Physical/chemical/pharmaceutical properties
- [ ] Nonclinical pharmacology summary
- [ ] Nonclinical PK and metabolism
- [ ] Nonclinical toxicology (species, route, duration, NOAEL, findings)
- [ ] Clinical experience (if applicable)
- [ ] Known/anticipated adverse effects and precautions

### Clinical Protocol
- [ ] Title, protocol number, version/date
- [ ] Primary and secondary objectives
- [ ] Study design and phase
- [ ] Inclusion/exclusion criteria
- [ ] Dosing regimen with rationale
- [ ] Efficacy and safety endpoints
- [ ] Stopping rules and dose-limiting toxicity definitions
- [ ] Safety monitoring plan (AE/SAE reporting, DSMB)
- [ ] Statistical analysis plan with sample size justification

## Phase-Appropriate IMPD Depth

| Phase | Drug Substance | Drug Product | Stability |
|-------|---------------|-------------|-----------|
| I | Preliminary spec, synthesis route | Formulation description, basic controls | Abbreviated |
| II | Refined process, tightened specs | Expanded controls | 6+ months accelerated |
| III | Full validation, complete characterisation | Full GMP, container/closure validation | ICH-compliant programme |

## Nonclinical Study Table

For each study: type, test facility (GLP status), species/strain, route, dose levels, duration, NOAEL/NOEL, key findings, relevance to clinical dose.

## Pitfalls and Checks

- **Verify current forms** - IRAS and MHRA submission portals update periodically
- **Phase-appropriate IMPD** - do not over-document Phase I or under-document Phase III
- **Cross-reference internally** - protocol references to nonclinical data must cite specific IMPD section
- **GLP compliance** - pivotal safety studies require GLP certification; flag non-GLP studies
- **No promotional language** - this is a scientific/regulatory document
- **Safety-first framing** - every section must demonstrate adequate basis for protecting human subjects
- **Confidential info** - mark commercially confidential information
- **IRAS system** - most UK submissions use the Integrated Research Application System (IRAS)
- **MHRA timelines** - 30 days for initial assessment; 60 days if additional info requested
- **Scotland-specific** - NHS Scotland research governance approval (if applicable) via NHS Research Scotland (NRS)

---

**Scotland/UK Adaptation notes:**
- IND (21 CFR Part 312) → CTA (SI 2004/1031, Human Medicines Regulations 2012)
- FDA → MHRA, Form FDA 1571 → EudraCT/IRAS application
- 21 CFR 312.23 → Schedule 1 of SI 2004/1031
- eCTD → UK eCTD format (Module 1-5)
- GLP (21 CFR Part 58) → UK GLP regulations (SI 1999/3106)

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
