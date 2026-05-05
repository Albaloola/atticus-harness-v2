---
name: nda-drug-application
language: en
description: Drafts an eCTD-compliant Marketing Authorisation Application (MAA) for MHRA submission under the Human Medicines Regulations 2012. Compiles clinical trial data, CMC documentation, nonclinical studies, pharmacokinetics, integrated safety analyses, and proposed labelling into five-module eCTD structure. Use when preparing an MAA, UK drug approval submission, pharmaceutical regulatory filing, or eCTD assembly for a new active substance (NAS). Also supports IRP (International Recognition Procedure) applications. [Atticus UK/Scots refined]
tags:
- analysis, drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Marketing Authorisation Application (MAA) - UK/Scotland Adaptation

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

Drafts an eCTD-compliant MAA demonstrating safety, efficacy, and quality for MHRA submission under the Human Medicines Regulations 2012 (SI 2012/1916).

## Prerequisites

1. **Clinical trial data** - Phase 1-3 protocols, CSRs, statistical analyses, patient demographics (UK/EU trials or recognised jurisdiction)
2. **CMC documentation** - drug substance characterisation, manufacturing process, batch records, stability data
3. **Nonclinical study reports** - pharmacology, toxicology (general, genetic, reproductive, carcinogenicity), safety pharmacology
4. **PK/bioavailability data** - human PK, special populations, DDI studies, exposure-response analyses
5. **Regulatory correspondence** - pre-submission scientific advice (MHRA), meeting minutes, MHRA feedback
6. **Proposed labelling drafts** - SmPC, PIL (Patient Information Leaflet), labelling
7. **Patent and market exclusivity information** - patent numbers, SPC eligibility, orphan designation, paediatric rewards

## Output Structure

### Module 1: Administrative Information (UK-specific)

| Element | Requirements |
|---|---|
| Cover letter | Applicant details, application type (national / IRP / Access Consortium), regulatory pathway, special designations (orphan, conditional, accelerated access) |
| MHRA application form | Legal basis (Article 8(3)/10(1)/10a/10b/10c Dir 2001/83 as retained); user fee info |
| Proposed names | Invented and common name(s) |
| Indication statement | Precise medical terminology, dosage form, route, strength(s) |
| Regulatory strategy | Reference pre-submission scientific advice, PIP status, unmet medical need narrative |
| UK SmPC, labelling, PIL | As per MHRA guidance; PLR format |
| Paediatric Investigation Plan | PIP compliance statement or waiver |
| RMP | Risk Management Plan per MHRA template |

**IRP-specific (International Recognition Procedure):**
- Reference Regulator (RR) identification and assessment reports, Eligibility form and triage outcome, Declaration of differences from RR-approved product information, Global regulatory history table

### Module 2: Summaries

#### 2.5 Clinical Overview & Benefit-Risk

- Pharmacological class, MOA, therapeutic rationale, Development program overview (nonclinical → Phase 1 → 2 → 3 logic)
- Pivotal trial summaries: design, population, endpoints, results (point estimates, CIs, p-values)
- Integrated safety: AE profile across program, SAEs, deaths, safety signals, Risk mitigation: labelling, RMP if applicable, Benefit-risk weighing per Human Medicines Regulations 2012 Sch. 8: efficacy magnitude vs. AE frequency/severity, disease seriousness, existing therapies

#### 2.3 Quality Overall Summary (CMC)

| Area | Key Elements |
|---|---|
| Drug substance | Chemical name, structure (stereochemistry), MW, solubility, polymorphism, particle size |
| Synthetic pathway | Starting materials, reagents, CPPs, in-process controls, impurity profile with qualification |
| Drug product | Quantitative formulation, excipient justification, compatibility evidence |
| Manufacturing | Flow diagrams, equipment specs, CPP ranges, process validation (≥3 batches) |
| Analytical methods | Validated for identity, assay, impurities, dissolution, CU |
| Stability | ICH Q1A (long-term, intermediate, accelerated), stability-indicating methods, trending |
| Container closure | System compatibility; device components if applicable (specs, human factors) |
| Compliance | EU GMP / UK GMP equivalent (SI 2012/1916); QP certification |

#### 2.4 Nonclinical Overview

| Study Type | Key Elements |
|---|---|
| Primary pharmacodynamics | In vitro binding/functional assays, in vivo disease models |
| Secondary pharmacodynamics | Off-target activity screen |
| Safety pharmacology | hERG, in vivo QT, respiratory, CNS |
| PK (animal) | ADME across tox species, metabolite ID, cross-species comparison |
| Acute toxicity | Dose-response, target organ ID |
| Repeat-dose toxicity | Duration matching intended clinical use, recovery data |
| Genetic toxicology | Ames, in vitro chromosomal aberration, in vivo micronucleus |
| Carcinogenicity | Two species (if chronic use), adequate duration/power |
| Reproductive toxicity | Fertility, embryo-fetal (two species), pre/postnatal development |

All studies GLP-compliant per ICH M3(R2). Bridge nonclinical findings to clinical: starting dose selection, monitoring parameters, contraindications.

#### 2.7 Clinical Summary

**Pharmacokinetics:** ADME profile, absorption (food effect, bioavailability), distribution (Vd, protein binding), metabolism (CYP isoforms, DDI potential), elimination (clearance, t½). Special populations: renal (mild→ESRD), hepatic (Child-Pugh A/B/C), elderly, paediatric, pharmacogenomics. Bioequivalence bridging if formulation changed. Exposure-response analysis → dosing justification.

**Clinical Efficacy:** Phase 1 (safety, PK, dose range) → Phase 2 (dose-ranging, dose selection rationale) → Phase 3 pivotal trials. For each pivotal trial: design/randomisation/blinding, population (I/E criteria), primary + secondary endpoints, statistical plan (sample size, missing data, multiplicity), results with CIs and p-values, clinical meaningfulness. Include cross-trial consistency, subgroup analyses (age, sex, race, severity), and failed/negative trial explanations. Follow ICH E3 for CSR format.

**Integrated Safety:** Database size (total exposed, patient-years) vs. MHRA adequacy guidance. Common AEs by SOC/PT (MedDRA) with dose-response. SAE narratives with causality. Death narratives. Discontinuation rates. Lab shifts, vitals, ECG/QTc. Class-specific topics: hepatotoxicity (Hy's Law), immunogenicity (ADA), hypersensitivity, CV events, malignancies. Signal detection via disproportionality analysis.

### Proposed Labelling (Module 1)

Draft per MHRA Guidance and retained EU labelling rules:

| Section | Key Requirements |
|---|---|
| SmPC (Summary of Product Characteristics) | As per MHRA template and PLR; product name, quantitative composition, therapeutic indications, posology, contra-indications, special warnings, interactions, adverse reactions, pharmacological properties, pharmaceutical particulars |
| PIL (Patient Information Leaflet) | Readability tested; patient-friendly language; mandatory sections per Sch. 10 |
| Labelling | Immediate + outer packaging; Braille; safety features per Falsified Medicines Directive (retained) |
| Package leaflet | Piloted with target patient population |
| Annex II | Manufacturing authorisation holder, conditions of MA |
| UK-specific annexes | For IRP: GB/UK specific annex in RMP if used |

### Risk Management, Paediatric, Orphan, Environmental

- **RMP**: safety specifications, pharmacovigilance plan, risk minimisation measures per MHRA template
- **Paediatric**: PIP status, compliance check results; paediatric data in Module 5
- **Orphan**: orphan designation letter; similarity arguments
- **SPC**: Supplementary Protection Certificate eligibility
- **Environmental**: Environmental Risk Assessment per MHRA/EMA guidance; claim categorical exclusion if possible

## eCTD Assembly Checklist

- [ ] Module 1: UK administrative, labelling, patent info, IRP documents
- [ ] Module 2: Summaries (quality, nonclinical, clinical)
- [ ] Module 3: Quality (CMC) full data
- [ ] Module 4: Nonclinical study reports
- [ ] Module 5: Clinical study reports (NB: individual patient data listings not required by MHRA)
- [ ] Cross-references and hyperlinks between modules
- [ ] Consistent terminology throughout
- [ ] Proper eCTD file naming and metadata (EU format)
- [ ] Gap analysis: flag missing data and strategic decision points
- [ ] MHRA Lorenz Docubridge technical validation completed

## Guidelines

1. **Trace conclusions to source data** - never assert efficacy or safety without citing specific trial results or study findings
2. **Anticipate MHRA questions** - proactively address data limitations, alternative interpretations, ambiguous precedents
3. **Statistical rigour** - include point estimates, CIs, p-values; distinguish statistical from clinical significance
4. **Mark gaps explicitly** - flag missing data with `[DATA NEEDED: description]`
5. **Regulatory citations** [VERIFY current versions]: Human Medicines Regulations 2012 (SI 2012/1916), SI 2004/1031 (Clinical Trials), ICH Q1A, ICH E3, ICH M3(R2), MHRA Guidance on National Assessment Procedure
6. **UK MHRA jurisdiction only** - do not extrapolate to FDA, EMA, PMDA, or other authorities unless instructed
7. **Draft for applicant review** - mark areas requiring sponsor input, additional data, or strategic decisions before submission

---

## Scotland/UK Adaptation

This skill is adapted for UK MHRA applications from US NDA practice. Key differences:

| US Concept | UK/Scotland Equivalent |
|---|---|
| FDA 21 CFR Part 314 | Human Medicines Regulations 2012 (SI 2012/1916) |
| eCTD to FDA | eCTD to MHRA (EU format with UK Module 1) |
| FDA Form 356h | MHRA application form; user fee via MHRA portal |
| Pre-IND / Pre-NDA meetings | MHRA Scientific Advice |
| 21 CFR 201.56-57 Physician Labeling Rule | SmPC template per MHRA / retained EU Directive 2001/83/EC |
| REMS (Risk Evaluation & Mitigation Strategy) | RMP (Risk Management Plan) |
| FDA Breakthrough / Fast Track / Priority Review | MHRA Innovative Licensing and Access Pathway (ILAP) |
| NCE exclusivity (5 yrs) / Orphan (7 yrs) | 8+2 data exclusivity / Orphan 10 yrs / SPC |
| FDA Guidance documents | MHRA Guidance / Commission on Human Medicines (CHM) advice |
| ClinicalTrials.gov registration | ISRCTN / EU Clinical Trials Register |
| cGMP (21 CFR 210/211) | EU GMP / UK GMP equivalent; QP certification |
| Patent listings in Orange Book | UK patent register / SPC register |
| Citizen petition (505(q)) | No direct equivalent; judicial review available |
| Hatch-Waxman / Bolar provisions | Bolar exemption per Patents Act 1977 s. 60(6A) |
| Medicaid / Medicare pricing | NHS pricing (NICE appraisal / SMC for Scotland) |
| Federal Register notices | MHRA public consultation / UK Parliament statutory instruments |

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
