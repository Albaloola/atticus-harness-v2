---
name: managed-care-contract
language: en
description: Atticus UK/Scots legal skill for managed-care-contract. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Healthcare Service Contract [SCOTS]

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

Drafts the contract governing the relationship between a healthcare purchaser (NHS Health Board, private medical insurer, or commissioning body) and a healthcare provider for delivery of clinical services.

> **[SCOTS: Note] This skill has been significantly adapted** from a US managed care contract template (MCO-provider, CMS MA/Medicaid, HIPAA, Stark Law, Anti-Kickback Statute). The UK/Scotland healthcare system is fundamentally different, the NHS is the predominant service purchaser and provider, and US managed care concepts (capitation, MCO accreditation, HEDIS, URAC, NCQA) do not directly apply. This adaptation preserves the general contracting structure but replaces the regulatory framework with UK equivalents and adds heavy notes about differences.

## Prerequisites

1. **Party information** - Purchaser: NHS Health Board / private medical insurer / commissioning body. Provider: NHS Trust / Health Board / independent hospital / GP practice / consultant / private clinic
2. **Service type** - secondary care, primary care, community health, mental health, independent sector provider, private patient services
3. **Payment model** - NHS block contract, NHS cost and volume contract, activity-based funding, private fee-for-service, PMI tariff
4. **Regulatory context** - NHS Scotland governance; Healthcare Improvement Scotland regulation; Care Inspectorate (social care); PMI sector regulation (FCA/CMA)
5. **Existing agreements** - current contracts, service specifications, clinical governance framework

## Output Structure

### Article I: Parties & Recitals

| Element | Purchaser | Provider |
|---|---|---|
| Legal name & DBA | NHS Health Board / PMI company | NHS Trust / independent provider |
| Entity type | Statutory corporation / registered insurer | Limited company / NHS body / partnership |
| Identifiers | Health Board ref / FCA registration | Company number / GMC/NMC/HCPC |
| Regulation | Healthcare Improvement Scotland | HIS / CQC (if cross-border) |

- Effective date and term, Recitals: statutory basis (NHS (Scotland) Act 1978), service requirements, provider capability

### Article II: Definitions

| Term | Key Elements |
|---|---|
| Clinical Services | Enumerated categories; national specification reference; waiting time guarantees |
| Referral Pathways | NHS Scotland referral standards; triage categories (P1 to P4, urgent) |
| Clinical Governance | HIS standards; SIGN guidelines; NICE quality standards |
| Health Record | Electronic patient record (TRAK, EMIS, etc.); data retention per Scottish Government guidance |
| Waiting Times | Scottish Government HEAT targets; 18-week referral-to-treatment; cancer targets |
| Emergency Services | 24-hour access; unscheduled care pathways |
| Standards of Care | HIS quality indicators; regulatory compliance; evidence-based practice |

> **[SCOTS: Note]** US managed care terms (MCO, capitation PMPM, HEDIS, NCQA accreditation, CMS Star Ratings, UM/UR standards) have no direct UK equivalents. In NHS Scotland:
> - NHS Health Boards act as both purchasers and providers across a geographically defined area
> - Independent sector providers contract with Health Boards for specific services (e.g., elective procedures)
> - Private medical insurance (PMI) covers a small fraction of the population; PMI contracts with independent hospitals follow largely unregulated commercial terms
> - Quality is assessed by Healthcare Improvement Scotland and professional regulators, not by accreditation bodies

### Article III: Service Delivery & Quality Standards

**Access Standards (NHS Scotland):**
- Referral-to-treatment within 18 weeks (Scottish Government standard)
- Urgent suspicion of cancer, within 62 days of referral, A&E - 95% seen within 4 hours, Diagnostic tests, within 6 weeks

**Clinical Governance:**
- Compliance with HIS quality indicators, SIGN (Scottish Intercollegiate Guidelines Network) guidance adherence, NICE technology appraisals (apply in Scotland via SMC, Scottish Medicines Consortium)
- Clinical audit programme, Adverse event reporting (Datix / HIS)

**Credentialing / Professional Regulation:**
- The provider warrants that all clinical staff:
  - Hold full, unconditional registration with their professional regulator (GMC, NMC, HCPC, etc.)
  - Hold appropriate practising privileges / honorary contracts
  - Have current appraisal and revalidation (medical revalidation per GMC framework)
  - Have adequate professional indemnity (clinical negligence scheme for NHS; private indemnity for independent sector)
  - Disclosure Scotland / PVG Scheme membership (Protecting Vulnerable Groups)

### Article IV: Payment & Reporting

**Payment Models (NHS Scotland):**

| Model | Application |
|---|---|
| Block contract | Core service delivery, fixed annual sum for defined service volume |
| Cost and volume | Core services up to a threshold, then marginal rate per case |
| Activity-based funding | Payment by results / casemix (previously in England; Scotland uses different models) |
| Individual patient funding | For specialised treatments outwith normal contract scope |
| Private / PMI | Fee-for-service per Bupa / AXA / Vitality tariff schedules |
| SMC-approved medicines | Funded through NHS Scotland; specific access criteria may apply |

**Reporting Requirements:**
- ISD (Information Services Division) data submissions, RTT (Referral-to-Treatment) performance against HEAT targets, Patient experience feedback (Scottish Care Experience Survey)
- Financial reconciliation: quarterly with annual outturn

### Article V: Data Protection (UK GDPR)

- All processing of personal data complies with UK GDPR and DPA 2018
- Data sharing permitted for direct care and service evaluation without consent (implied consent / Article 6(1)(e)/9(2)(h) lawful basis)
- Data Processing Agreement (DPA) - separate schedule where applicable, NHS Scotland data security standards (assured by NHS National Services Scotland / NSS)
- Breach notification to ICO within 72 hours; to Health Board Information Governance lead within 24 hours, Data retention per Scottish Government Records Management: Health Records, NHS Scotland Code of Practice

### Article VI: Regulatory Compliance & Clinical Governance

**Healthcare Improvement Scotland (HIS):**
- Compliance with HIS standards, HIS inspection and review cooperation, Implementation of HIS recommendations

**Professional Regulation:**
- GMC / NMC / HCPC registration and revalidation, Medical Appraisal (Turrets / MARS systems)
- Fitness to Practise referrals and notification obligations

**Other:**
- Competition and Markets Authority (CMA) - private healthcare market investigation order compliance, Care Inspectorate, for social care and independent healthcare services, Scottish Public Services Ombudsman (SPSO) - unresolved complaints, Mental Health (Care and Treatment) (Scotland) Act 2003 - for mental health services

### Article VII: Complaints, Dispute Resolution & Enforcement

**NHS Complaints Procedure:**
- Local resolution stage (provider / Health Board)
- SPSO (Scottish Public Services Ombudsman) - independent review if unresolved

**Contractual Disputes:**
- Designated contract management leads, Escalation: Service Director → Chief Executives, Formal dispute resolution: negotiation → mediation → court (Sheriff Court / Court of Session)

**Termination:**
- Breach: notice period with opportunity to remedy, Immediate: loss of registration, CQC/HIS action, patient safety, Material change in service requirement / commissioning intentions, Transitional care obligations for current patients

### Article VIII: Indemnification & Insurance

**NHS Scotland Context:**
- Clinical negligence for NHS-employed staff covered by CNSAP (Clinical Negligence and Other Risks Indemnity Scheme)
- Independent sector providers: professional indemnity insurance (consultant: usually £1M to £10M depending on specialty)
- NHS Health Boards: Crown indemnity

**Independent Sector / Private Practice:**
- Professional liability cover (tailored to scope of practice)
- Public liability and employers' liability (statutory minimums)
- Cyber/data protection insurance (recommended)

### Article IX: General Provisions

- **Amendments:** Written, agreed by authorised representatives
- **Assignment:** Prohibited without consent; Health Board reorganisation excepted
- **Notices:** Formal correspondence; email with confirmed receipt
- **Independent Contractor:** Where independent sector provider / private practitioner
- **Entire Agreement:** Contract + schedules + service specifications
- **Survival:** Clinical governance obligations; data protection; records management
- **Governing Law:** Scots law
- **Jurisdiction:** Scottish courts (Sheriff Court or Court of Session depending on value)

---

## Scotland/UK Adaptation

### Overview
This skill has been adapted from a US managed care contract template. The UK (and especially Scotland) healthcare system is fundamentally different, the NHS provides universal coverage funded through general taxation, and the private healthcare market is relatively small.

### Key Differences from the US Original

| US Concept | UK / Scottish Equivalent |
|------------|-------------------------|
| MCO (Managed Care Organisation) | NHS Health Board (Scotland) / NHS Integrated Care Board (England) / PMI company |
| CMS Medicare / Medicaid | NHS Scotland (devolved health funding to Scottish Government) |
| CMS Star Ratings | NHS Scotland HEAT targets / HIS quality indicators |
| HEDIS / CAHPS / NCQA | HIS standards / SIGN guidelines / SMC assessments |
| HIPAA (healthcare data) | UK GDPR / DPA 2018 / NHS Scotland information governance |
| Anti-Kickback Statute / Stark Law | NHS Anti-Fraud Unit / Bribery Act 2010 / NHS England DSP Toolkit (no direct Stark equivalent; separate legal framework) |
| False Claims Act | NHS Counter Fraud Authority / Proceeds of Crime Act 2002 |
| CMS MA / Medicaid guidelines | Scottish Government Health and Social Care Directorates |
| CPT/HCPCS coding | OPCS-4 (surgical) / ICD-10 (diagnosis) / READ / SNOMED CT |
| NCQA/URAC accreditation | Healthcare Improvement Scotland (HIS) regulation |
| Balance billing prohibition | NHS Scotland, no balance billing applies (NHS services free at point of use) |

### Key UK / Scottish Legislation
- **NHS (Scotland) Act 1978** - statutory foundation of NHS Scotland
- **Health and Social Care Standards (Scotland)** - care standards
- **Mental Health (Care and Treatment) (Scotland) Act 2003**
- **Adult Support and Protection (Scotland) Act 2007**
- **Public Services Reform (Scotland) Act 2010** - HIS establishment
- **Patient Rights (Scotland) Act 2011** - waiting times, complaints
- **UK GDPR / Data Protection Act 2018**
- **Bribery Act 2010** - anti-corruption (replaces US Anti-Kickback)
- **Competition Act 1998 / CMA private healthcare order**

### Scotland-Specific Context, NHS Scotland is a single, integrated system (unlike the internal market in England)
- The Scottish Government sets health policy; Health Boards are statutory bodies accountable to Ministers
- **Scottish Medicines Consortium (SMC)** - assesses new medicines for NHS Scotland use
- **Healthcare Improvement Scotland (HIS)** - regulator and improvement body (equivalent to CQC in England)
- **Care Inspectorate** - regulates social care and independent healthcare
- **Disclosure Scotland / PVG Scheme** - staff vetting for regulated work with vulnerable groups
- **Public Health Scotland** - national health improvement, surveillance, and protection

### Forms and Guidance, HIS standards: https://www.healthcareimprovementscotland.org/
- NHS Scotland National Services Scotland (procurement): https://www.nss.nhs.scot/
- Scottish Government health policy: https://www.gov.scot/policies/health/
- Scottish Medicines Consortium: https://www.scottishmedicines.org.uk/
- SPSO (complaints): https://www.spso.org.uk/

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
