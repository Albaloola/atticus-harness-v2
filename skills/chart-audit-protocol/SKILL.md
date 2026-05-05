---
name: chart-audit-protocol [SCOTS]
language: en
description: '[SCOTS] Drafts clinical audit protocols for NHS Scotland and Scottish healthcare organisations covering clinical documentation review, coding accuracy (OPCS-4 / SNOMED CT), and clinical governance compliance. Aligns with Healthcare Improvement Scotland clinical governance standards, Audit Scotland public audit guidance, and NHS Scotland clinical governance framework. Use when drafting routine periodic clinical audits, targeted risk reviews, proactive governance measures, or post-regulatory-update assessments in a Scottish healthcare setting. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Clinical Audit Protocol (NHS Scotland / Scottish Healthcare) [SCOTS]

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

Drafts a defensible clinical audit protocol that serves as both an operational quality improvement roadmap and a clinical governance document for NHS Scotland and Scottish healthcare organisations.

## Quick Start

Gather before drafting:

1. **Audit trigger** - routine periodic, targeted risk, post-regulatory-update, or HIS quality improvement review
2. **Governance driver** - Healthcare Improvement Scotland clinical governance standards, NHS Board clinical governance committee, Audit Scotland, or internal quality improvement
3. **Scope** - timeframe, departments/specialties, service types, patient populations (within NHS Scotland)
4. **Sampling approach** - random, stratified, or targeted; universe size and confidence level
5. **Prior findings** - benchmarks, historical error rates, known risk areas from previous audits or Adverse Event Reviews (AER)

## Core Workflow

### 1. Purpose Statement

| Element | Content |
|---|---|
| Governance framework | Cite driver: Healthcare Improvement Scotland (HIS) Clinical Governance Standards, NHS Board clinical governance framework, Audit Scotland |
| Audit classification | Routine periodic / targeted risk / proactive post-regulatory |
| Integration rationale | How audit fulfils the duty of quality assurance under the Health and Social Care Standards (Scotland) and the Public Services Reform (Scotland) Act 2010 |
| Governance alignment | NHS Board clinical governance committee / quality improvement group connection |

### 2. Scope Definition

| Parameter | Specification |
|---|---|
| Review period | Exact date range |
| Departments / specialties | Named units or specialty groups |
| Service types | Healthcare Resource Groups (HRGs), specialty codes, or care settings |
| Patient population | Age bands, diagnosis categories (ICD-10 / SNOMED CT), SIMD quintile (deprivation) |
| Exclusions | Document with rationale |

**Sampling methodology** - select one:

- Simple random, Stratified (risk-factor tiers: high / medium / low)
- Targeted (data analytics, prior findings, HIS reports, complaint patterns)

Document: universe size, sample size, confidence level (90 to 95%), margin of error, extrapolation basis.

### 3. Clinical Record Review

Per-record checklist:

- [ ] Patient identification on each page (CHI number + name)
- [ ] Date and time of entry / service
- [ ] Presenting complaint / reason for admission or attendance
- [ ] Clinical history (appropriate to presentation)
- [ ] Allergies, current medications (including any recent changes)
- [ ] Physical examination findings
- [ ] Assessment and differential diagnosis
- [ ] Management plan with follow-up instructions
- [ ] Legible, authenticated (signed and dated or e-authenticated), complete entries
- [ ] Patient identifiable data handled in accordance with NHS Scotland Information Governance and the Data Protection Act 2018 / UK GDPR

**Foundational tests:** legibility · authentication · clinical necessity support · service-level substantiation [SCOTS: Use Scottish Clinical Coding Standards and HIS clinical documentation guidance.]

### 4. Clinical Coding Accuracy

| Area | Key Question |
|---|---|
| Primary diagnosis | Correct ICD-10 code (4-char minimum); principal diagnosis = main condition treated/investigated during episode |
| Secondary diagnoses | All co-morbidities that affected management during the episode |
| Procedures | OPCS-4 codes match documented procedures; correct sequencing |
| HRG assignment | Codes map to correct Healthcare Resource Group under Scottish NHS costs/National Tariff |
| SNOMED CT | Where used (e.g. GP, A&E), SNOMED CT codes clinically supported and correctly applied |
| NICE/SIGN guideline compliance | Documented management reflects applicable NICE or SIGN clinical guidelines |

### 5. Governance Compliance

- [ ] Staff registration with relevant professional body (GMC, NMC, HCPC, SSSC) current for scope of practice
- [ ] Supervision requirements met (junior doctors, nurses, AHPs, trainees)
- [ ] Adverse events and near misses documented and reported via Datix or equivalent risk management system
- [ ] Consent (including emergency and adult incapacity) compliant with Adults with Incapacity (Scotland) Act 2000
- [ ] Child protection / adult protection concerns escalated per Protecting Vulnerable Groups (Scotland) Act 2007
- [ ] Information governance standards met (Data Protection Act 2018, UK GDPR, NHS Scotland Information Governance)

### 6. Findings Report

Structure the report as:

1. **Executive Summary** - overall error rate, estimated clinical risk exposure, top 3 systemic issues
2. **Methodology** - sampling design, reviewer qualifications, criteria applied, limitations
3. **Quantitative Findings** - documentation deficiencies (no clinical impact), coding errors (HRG/diagnosis), governance compliance (risk level), trend comparison with prior audit periods
4. **Risk Categorisation** - technical/minor (omissions) vs. substantive/high (incorrect coding affecting clinical decisions, missed diagnoses, undocumented adverse events)
5. **Root Cause Analysis** - clinician knowledge gaps, workflow inefficiencies, system limitations, policy ambiguity, HIS standard implications

### 7. Quality Improvement Action Plan

Per finding category:

| Element | Detail |
|---|---|
| Remediation | Education (CME / mandatory training) / clinical decision support change / system change / policy update |
| Responsible party | Named individual, specialty lead, or NHS Board department |
| Deadline | Specific date |
| Success metric | Target improvement / benchmark per HIS standards |
| Follow-up audit | Re-audit scope and timing (typically 6 to 12 month cycle) |

### 8. Governance and Oversight

- [ ] Is the adverse event rate above the HIS threshold? Has a Significant Adverse Event Review (SAER) been triggered?
- [ ] Does the board clinical governance committee require escalation?
- [ ] Are findings reportable to Audit Scotland or the Scottish Public Services Ombudsman (SPSO)?
- [ ] Do findings trigger a Duty of Candour notification? (Health (Tobacco, Nicotine etc. and Care) (Scotland) Act 2016 and the Duty of Candour Procedure (Scotland) Regulations 2018)
- [ ] Stakeholder communication: clinicians, clinical governance committee, NHS Board, HIS

## Pitfalls and Checks

- **Privilege** - Clinical audit is a governance function under NHS Scotland; records may be subject to FOI(S)A requests (Freedom of Information (Scotland) Act 2002). Document purpose clearly.
- **Language discipline** - Frame findings as quality improvement and patient safety opportunities, not admissions of liability.
- **Extrapolation** - Only project when sampling is properly designed; document methodology to withstand HIS/Audit Scotland scrutiny.
- **Confidentiality** - Do not identify patients or clinicians in ways creating Data Protection Act 2018 exposure in distributed reports. Use anonymised data.
- **Retention** - Maintain per NHS Scotland Records Management Code of Practice and HIS guidance.
- **Jurisdiction** - Scottish NHS governance framework. Verify with HIS for the most current clinical governance standards.

## Scotland/UK Adaptation [SCOTS]

This skill has been adapted from a US healthcare chart audit protocol (Medicare CoPs, OIG CPG, RAC, 60-day overpayment rule) to a Scottish NHS clinical audit protocol.

**Key adaptations:**
- Replaced Medicare CoPs and OIG CPG with Healthcare Improvement Scotland Clinical Governance Standards.
- Replaced RAC preparedness with Audit Scotland public audit framework.
- Replaced OIG Self-Disclosure Protocol with NHS Scotland Adverse Event Review and Duty of Candour (Scotland) Procedure.
- Replaced 60-day overpayment rule (42 U.S.C. § 1320a-7k(d)) with Scottish Duty of Candour requirements.
- Replaced CPT/HCPCS codes with OPCS-4 procedure codes (UK standard).
- Replaced ICD clinical modifications with ICD-10 (UK standard) and SNOMED CT.
- Replaced E&M levels and AMA guidelines with NICE/SIGN clinical guidelines.
- Replaced Medicare LCD/NCD with NICE/SIGN guidance and NHS Scotland formulary policies.
- Replaced RBRVS/Medicare fee schedule with NHS Scotland HRG tariffs.
- Replaced HIPAA with Data Protection Act 2018 / UK GDPR and NHS Scotland Information Governance.
- Replaced OIG/DOJ scrutiny with HIS/Audit Scotland scrutiny.
- Replaced state-specific Medicaid audits with NHS Board clinical governance committees.
- Added Adults with Incapacity (Scotland) Act 2000 and Protecting Vulnerable Groups (Scotland) Act 2007.
- Added FOI(S)A 2002 implications.
- Replaced US-dollar figures with NHS Scotland financial frameworks.
- Preserved the auditing methodology and structural template.

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
