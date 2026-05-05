---
name: adverse-event-reporting-policy
language: en
description: Atticus UK/Scots legal skill for adverse-event-reporting-policy. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Adverse Event Reporting Policy

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

Drafts a binding AE reporting policy meeting UK/EU regulatory requirements and ICH standards for pharma, biotech, CROs, and healthcare organisations conducting or sponsoring clinical research.

## Prerequisites

Gather before drafting. If any item is missing, pause and ask, do not assume.

1. **Organisation type** - pharmaceutical sponsor, CRO, healthcare system, academic medical centre, or combination
2. **Product portfolio** - CTIMP products (Phase I to IV), approved drugs, biologics, devices, combination products
3. **Geographic footprint** - UK only vs. multi-jurisdictional (EU, US, Japan, Canada, etc.)
4. **Therapeutic areas** - flag specialized populations: oncology, vaccines, biologics, pediatrics
5. **Existing SOPs** - current pharmacovigilance SOPs, IRB agreements, DSMB charters to cross-reference

## Step 1: Introduction & Compliance Statement

- Cite controlling regulations:
  - **Human Medicines Regulations 2012 (SI 2012/1916), Part 11** - Pharmacovigilance
  - **Medicines for Human Use (Clinical Trials) Regulations 2004 (SI 2004/1031)** - CTIMP safety reporting
  - **ICH E2A** - Clinical safety data management
  - **UK Medical Devices Regulations 2002 (SI 2002/618)** - Device reporting (if applicable)
  - Applicable international requirements, Effective date, review cycle (annual minimum), approval authority, Binding compliance statement: policy adherence is condition of employment; violations may constitute regulatory offences under the Human Medicines Regulations 2012

## Step 2: Definitions

Include at minimum:

| Term | Definition |
|------|-----------|
| **Adverse Event (AE)** | Any untoward medical occurrence; causal relationship need not be established |
| **Serious Adverse Event (SAE)** | Meets ≥1 of 6 UK/EU/ICH seriousness criteria |
| **Unexpected AE** | Not in current IB, Summary of Product Characteristics (SmPC), or reference safety information by nature, severity, or frequency |
| **Suspected Adverse Reaction** | Reasonable possibility of causal relationship |
| **Causality Assessment** | Systematic evaluation using validated algorithm (Naranjo, WHO-UMC) |
| **Sponsor Awareness** | When *any* sponsor employee first receives AE information, starts all reporting clocks |
| **Expedited Report** | 7-day (fatal/life-threatening) or 15-day (other serious) SUSAR report |

**SAE Seriousness Criteria (6 UK/EU/ICH):**
1. Death
2. Life-threatening (immediate risk at time of event)
3. Inpatient hospitalization or prolongation
4. Persistent/significant disability or incapacity
5. Congenital anomaly/birth defect
6. Important medical event requiring intervention to prevent serious outcome

## Step 3: Scope

**Covered activities:** Phase I to IV clinical trials; post-marketing surveillance; expanded access/compassionate use; investigator-initiated studies

**Covered products:** IMP/CTIMP products, authorised medicines, biologics, vaccines, gene therapies, medical devices, combination products

**Geographic scope:** Specify UK-only vs. global; address how international events feed MHRA reporting; handle countries where product is unauthorised

**Temporal boundaries:**
- Begins: informed consent signature or first dose, Ends: per protocol follow-up period (specify days; address long half-life/delayed-effect products)

**Exclusions:**

| Excluded Item | Redirect To |
|--------------|-------------|
| Product quality complaints (no patient impact) | Quality Assurance SOP |
| Occupational exposures without health effects | Occupational Health |
| Near-miss medication errors | Medication Safety Program |
| Competitor product AEs in comparator arms | Protocol-specific requirements |

## Step 4: Roles & Responsibilities

| Role | Key Obligations | Timeline |
|------|----------------|----------|
| **Safety Officer / PV Director** | Final reportability, seriousness, causality, expectedness determinations; MHRA liaison | Review within 4 hrs; reportability within 8 hrs |
| **Principal Investigator** | Evaluate each AE; causality/seriousness determination; IRB notification | Report to Safety Officer within 24 hrs of awareness |
| **Clinical Research Coordinator** | Active surveillance (interviews, labs, vitals); source documentation; escalate SAEs immediately | Escalate immediately; do not wait for scheduled visits |
| **Clinical Monitor/CRA** | Verify source docs vs. CRF; confirm timeline compliance; escalate systemic deficiencies | Document in monitoring reports; verify CAPAs at next visit |
| **Senior Management** | Resource adequacy; aggregate safety review; risk-benefit decisions | Quarterly review minimum |
| **QA** | Independent audits; CAPA oversight | Annual minimum audit; ad hoc for signals |

## Step 5: AE Identification & Assessment

**Active surveillance:** Structured patient interviews at each contact; lab values vs. protocol ranges and clinically significant change thresholds; physical examination with baseline comparison; concomitant medication review (may indicate unreported AE).

**Passive surveillance:** Dedicated patient reporting line/email/portal; external provider reporting pathway; EHR alert integration (hospitalizations, ED visits, critical labs) where feasible.

**Causality assessment, document each factor:**

| Factor | Document |
|--------|----------|
| Temporal relationship | Time from last dose to onset |
| Biological plausibility | Known pharmacology/class effects |
| Dechallenge | Symptom change upon discontinuation |
| Rechallenge | Symptom recurrence upon restart |
| Alternative explanations | Disease progression, comedications, other factors |
| Prior literature/experience | Published reports, IB data |

Use validated tool (Naranjo Scale or WHO-UMC). Document algorithm applied and narrative rationale, not just final conclusion.

**Severity grading:** CTCAE or protocol-specified scale; document grade and supporting clinical findings.

**Enhanced monitoring populations:** Pediatric (developmental); pregnant (maternal/fetal); elderly with polypharmacy (attribution complexity); immunocompromised (atypical presentations).

## Step 6: Reporting Timelines & Submission

**Expedited SUSAR Reports (SI 2004/1031):**

| Event Type | MHRA Deadline | Internal Trigger |
|-----------|-------------|-----------------|
| Fatal or life-threatening SUSAR | 7 calendar days from sponsor awareness | Safety Officer notified within 4 hrs |
| Other serious SUSAR | 15 calendar days from sponsor awareness | Safety Officer notified within 4 hrs |
| Follow-up to 7-day report | 8 additional calendar days (15 total) | Initiate at day 7 submission |

**Other reporting obligations:**
- **Annual Safety Reports (ASR/DSUR)** - within 60 days of the anniversary of the Clinical Trial Authorisation; tabular AE summaries, narrative SAE descriptions, signal analysis, updated risk-benefit
- **REC (Research Ethics Committee)** - same timeline as MHRA or 24 hours per REC requirements, whichever more stringent; all SAEs regardless of causality
- **DSMB/IDMC** - per charter; unblinded data; expedited notification for predefined stopping rules

**Postmarketing (Human Medicines Regulations 2012):** 15-day alert reports for serious unexpected AEs; PSURs per approved schedule.

**Submission mechanics:** MHRA Gateway (Portal); ICH E2B(R3) format. Backup: telephone for urgent situations. Retain all submission confirmations and MHRA acknowledgment receipts.

**Multi-jurisdictional overlay:**

| Agency | Key Differences |
|--------|----------------|
| EMA | EudraVigilance submission; potential seriousness/expectedness definition differences |
| HPRA (Ireland) | Local reporting timelines; Irish SmPC as reference document [VERIFY] |
| Health Canada | MedEffect reporting [VERIFY current timelines] |

## Step 7: Documentation Standards

**Source documents:** Created in real-time or within 24 hours. Corrections by single strikethrough (original legible), correct entry, initials, date, no deletions or obliteration.

**Required AE record elements:**
- Date/time of onset (maximum available precision)
- Clinical description: signs/symptoms, severity (CTCAE grade), frequency, duration, anatomical location, Causality assessment: algorithm used, each factor, narrative rationale, final determination, Seriousness determination: specific criterion/criteria met, Expectedness determination: IB/labeling section consulted, Actions taken: dose modifications, discontinuation, concomitant treatments, procedures, Hospitalizations: dates, facility, Outcome: recovered/resolved | recovering/resolving | not recovered | recovered with sequelae | fatal, Regulatory submission: date, submission number, FDA acknowledgment

**Record retention:**

| Record Type | Retention |
|-------------|----------|
| Clinical trial AE records | 2 years post-NDA/BLA approval; or 2 years after IND discontinuation notified to FDA |
| Postmarketing AE reports | 10 years from creation or 2 years after product no longer marketed, whichever longer |
| Training records | Duration of employment + 3 years |

**Storage:** Access-controlled; audit trail with user ID and timestamps; geographically separate backups; validated electronic systems (21 CFR Part 11 where applicable).

## Step 8: Training & Competency

**Initial training (before assuming AE responsibilities):** Regulatory framework (21 CFR 312.32, 314.80, ICH E2A); organizational policy and workflows; event identification; causality assessment with case exercises; documentation standards; reporting timelines and consequences of missed deadlines.

**Annual refresher:** Regulatory updates, audit lessons learned (anonymized), process revisions.

**Role-specific advanced training:**

| Role | Content |
|------|---------|
| Medical monitors / safety physicians | Advanced causality in polypharmacy/comorbidity; dechallenge/rechallenge interpretation |
| Regulatory / safety coordinators | E2B(R3) submission mechanics; FDA gateway; Form 3500A |
| Regulatory writers | FDA narrative standards; MedDRA coding; QC before submission |

**Competency assessment:** Written exam (minimum passing score); practical case scenario evaluation; supervised performance period before independent authorization.

**Annual certification:** Written attestation of policy awareness, training completion, and compliance commitment. Failure suspends research privileges.

## Step 9: Quality Assurance & Enforcement

**Audit program (minimum annually; risk-based frequency):**
- Timeline compliance: site awareness → Safety Officer → FDA submission, Documentation completeness and causality rationale adequacy, Causality consistency (independent medical review of sample)
- Submission accuracy vs. source documents

**KPIs (quarterly senior management review):**

| Metric | Target |
|--------|--------|
| 7-day reports on time | 100% |
| 15-day reports on time | 100% |
| Site awareness → Safety Officer notification | < 4 business hours |
| CAPA completion on schedule | ≥ 95% |

**Root cause analysis:** Required for all timeline failures, missed reports, and quality deficiencies. Address systemic causes (training, resources, process design). CAPA with assigned owner and target date.

**Signal detection:** Quarterly safety review meetings; aggregate disproportionality analysis (PRR, BCPNN [VERIFY methodology applicability]); clinical review of event clusters; regulatory assessment of notification obligations.

**Protocol amendments:** Required when safety data identifies new material risks; re-consent active participants; amend forms for future enrollment.

**Enforcement:**
- Violations subject to progressive discipline up to termination; knowing/willful failures may constitute federal law violations
- **Non-retaliation:** No adverse action for good-faith AE reporting; over-reporting preferred to under-reporting, Anonymous reporting pathway required (compliance officer, hotline, legal counsel)
- Manager performance evaluations include AE compliance metrics

## Quality Audit

Before finalizing, verify:

- All regulatory citations confirmed against current CFR text or flagged `[VERIFY]`
- Reporting timelines match 21 CFR 312.32 and 314.80 requirements, Roles/responsibilities align with organization's actual structure, Multi-jurisdictional requirements addressed for stated geographic scope, SAE seriousness criteria match current FDA/ICH definitions, Documentation standards include all required AE record elements, Training requirements are role-appropriate and assessable, KPI targets are realistic and measurable, Enforcement provisions include non-retaliation protections, Assumptions and open items listed prominently
- `[VERIFY]` tags on all unconfirmed international timelines, state requirements, or evolving regulatory standards

## Guidelines

- **Sponsor awareness starts the clock** - train all staff; any employee awareness triggers timelines
- **Reference safety information is event-specific** - assess expectedness against IB/labeling current at time of event; document version consulted
- **Causality is medical judgment** - document factors, not just conclusion; reasonable disagreement acceptable, undocumented determination is not
- **Over-report, then correct** - missed 7/15-day deadline is a regulatory violation; a report later determined non-reportable is not
- **Multi-jurisdictional conflicts** - apply the higher standard; document conflict resolution rationale
- **Risk Management Plans (RMPs)** - assess whether AE data triggers RMP update or variation obligations under the Human Medicines Regulations 2012 [VERIFY current regulations]
- **Investigator-initiated trials** - establish contractual AE reporting obligations with external PIs before trial start
- **Combination products** - coordinate medicine and device reporting; UK Medical Devices Regulations 2002 obligations may run concurrently
- **Anti-hallucination**: Do not fabricate regulatory citations, timelines, or enforcement data. Every regulatory reference must be verified or flagged `[VERIFY]`
- **Qualified Person (QP) and Pharmacovigilance (PRAC) review required**: All output is draft work product requiring review by a named QP or pharmacovigilance professional before adoption

---

## Scotland/UK Adaptation

This skill has been adapted from US FDA-focused materials for use under UK/EU regulatory frameworks. Key differences:

**Regulatory body:** Replace FDA with the **Medicines and Healthcare products Regulatory Agency (MHRA)**. For Northern Ireland, the EMA retains certain post-Brexit responsibilities per the Windsor Framework.

**Legislation:**
- 21 CFR 312.32 (IND safety reporting) → **Medicines for Human Use (Clinical Trials) Regulations 2004, SI 2004/1031** (CTIMP safety reporting)
- 21 CFR 314.80 (postmarketing) → **Human Medicines Regulations 2012, SI 2012/1916, Parts 11 to 12** (Pharmacovigilance)
- 21 CFR 803 (device reporting) → **UK Medical Devices Regulations 2002, SI 2002/618**
- IND → **CTA (Clinical Trial Authorisation)**
- NDA/BLA → **MA (Marketing Authorisation)**
- IRB → **REC (Research Ethics Committee)** recognised under the Governance Arrangements for NHS Research Ethics Committees (GAfREC)

**Terminology:**
- Package insert → **Summary of Product Characteristics (SmPC)**
- Investigator's Brochure → same (IB), but reference safety information includes SmPC for authorised products, REMS → **RMP (Risk Management Plan)** with regulatory variations through MHRA, PADER → **PSUR (Periodic Safety Update Report)** per Volume 9A / GVP Module VII, Form 3500A → **CIOMS I form** or MHRA-specific e-submission format

**Key procedural differences:**
1. The UK has a **two-tier pharmacovigilance system**: a Qualified Person responsible for Pharmacovigilance (QPPV) is a statutory role, no US equivalent
2. The UK's **Yellow Card Scheme** is the primary spontaneous reporting system (vs. FDA MedWatch)
3. Annual DSUR replaces IND Annual Report; timelines align with ICH E2F not CFR
4. Northern Ireland follows retained EU pharmacovigilance rules for certain products under the Windsor Framework [VERIFY current scope]
5. **No punitive regulatory framework** - enforcement is through criminal prosecution, MHRA inspection findings, and Good Clinical Practice (GCP) non-compliance sanctions
6. Sponsor awareness principles are the same; the clock starts on first awareness by any sponsor employee
7. **The Human Medicines Regulations 2012** have been substantially amended post-Brexit; verify current consolidated text before reliance

**Licensing consequences:** UK marketing authorisations can be suspended, varied, or revoked for pharmacovigilance non-compliance (Human Medicines Regulations 2012, regs 38 to 42). MHRA inspections carry potential for improvement notices, warning letters, and suspension of clinical trial authorisations.

**Scotland-specific:** The legal system's administrative law framework applies to MHRA decisions; judicial review in the Court of Session (Outer House) is available for Scottish-based sponsors challenging MHRA enforcement action. Clinical trials conducted at Scottish sites fall under the same UK-wide regulations.

- **Added `metadata` block** with `practice_areas`, `document_types`, `skill_modes` per legal skill spec
- **Fixed tags** - replaced `memo` with `policy` (controlled vocabulary); removed `research`
- **Restructured from "Output Structure" to "Step" pattern** - numbered steps (1 to 9) for clearer workflow
- **Added mandatory intake guard** - "pause and ask, do not assume" in Prerequisites
- **Added Quality Audit section** - post-draft verification checklist before finalizing
- **Added anti-hallucination and attorney review guidelines** - `[VERIFY]` pattern, explicit draft-work-product disclaimer
- **Removed horizontal rules** between sections (not in spec examples)
- **Removed Appendices section** - checklist of attachments isn't instruction content
- **Removed code block** in documentation standards, converted to plain list
- **Consolidated Enforcement into Step 9** - merged with QA to reduce section count
- **Tightened prose throughout** - removed redundant phrasing while preserving all regulatory substance
- **Refined description** - added more trigger keywords (pharmacovigilance policy, AE/SAE reporting SOP, safety reporting framework)

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
