---
name: hipaa-baa
language: en
description: Drafts UK GDPR-compliant Data Processing Agreements governing personal data (including special category health data) between data controllers and data processors in healthcare contexts. Covers Art 28 DPA obligations, security measures, breach notification, subcontractor flow-downs, data subject rights support, and ICO compliance. Use when drafting or updating a DPA, negotiating processor health data access, or attaching data protection terms to a services agreement. [SCOTS] Adapted for UK GDPR / Data Protection Act 2018, referencing NHS Scotland and ICO. [Atticus UK/Scots refined]
tags:
- SCOTS agreement, drafting, data-protection, GDPR, DPA, NHS, health-data, ICO, SCOTS, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Data Processing Agreement (DPA) - Health & Social Care Sector

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

[SCOTS: Note] This skill adapts the US HIPAA Business Associate Agreement template for the UK health and social care sector under UK GDPR / Data Protection Act 2018. The core structure is similar (controller → processor obligations), but the substantive law, definitions, regulator, and enforcement regime are entirely different.

Produces a UK GDPR-compliant DPA tailored to services, personal data flow, and risk profile in health and social care settings.

## Prerequisites

1. Party identities, controller/processor status, jurisdictions, notice addresses.
2. Underlying services agreement/SOW with plain-language service description.
3. Data map: categories of personal data, special category data (health data Art 9 UK GDPR), systems, storage locations, data flows.
4. Regulatory overlays: common law duty of confidentiality, Caldicott Principles, NHS Scotland information governance policies.
5. Security posture: safeguards summary, Data Protection Impact Assessment (DPIA) status, incident contacts, DSP Toolkit status.
6. Risk allocation: indemnity, insurance limits, liability caps.
7. Preferred timelines: personal data breach notification deadline, cure period, termination notice.

## Output Structure

Draft sections in this order, filling placeholders from matter facts:

1. **Parties, Effective Date, Recitals** - basis for processing relationship (controller → processor)
2. **Definitions** - UK GDPR statutory terms + agreement-specific terms
3. **Details of Processing** - Art 28(3) UK GDPR mandatory content (subject matter, duration, nature/purpose, type of personal data, categories of data subjects)
4. **Permitted Processing Instructions; Prohibited Processing**
5. **Security Measures** - Art 32 UK GDPR (organisational and technical measures)
6. **Personal Data Breach Notification** - Art 33-34 UK GDPR
7. **Sub-processor Engagement** - Art 28(2), (4) UK GDPR
8. **Data Subject Rights Support** - Art 12-22 UK GDPR
9. **Accountability / Records / Audits**
10. **Data Protection Impact Assessment (DPIA) Cooperation**
11. **International Transfers** - Art 44-49 UK GDPR (if applicable)
12. **Term/Termination; Return/Destruction of Personal Data**
13. **Indemnity/Insurance; Liability Allocation**
14. **Miscellaneous** - amendment, governing law (Scots law), notices, assignment, severability, survival
15. **Signatures; Schedules**

### Definitions

Include all applicable terms with statutory citations:

| Term | Source |
|---|---|
| Personal Data | Art 4(1) UK GDPR [VERIFY] |
| Special Category Data (including health data) | Art 9 UK GDPR [VERIFY] |
| Processing | Art 4(2) UK GDPR [VERIFY] |
| Controller | Art 4(7) UK GDPR [VERIFY] |
| Processor | Art 4(8) UK GDPR [VERIFY] |
| Personal Data Breach | Art 4(12) UK GDPR [VERIFY] |
| Data Subject | Art 4(1) UK GDPR [VERIFY] |
| Data Protection Officer (DPO) | Art 37 UK GDPR [VERIFY] |
| Data Protection Impact Assessment (DPIA) | Art 35 UK GDPR [VERIFY] |
| Appropriate Technical and Organisational Measures | Art 32 UK GDPR [VERIFY] |
| Approved Binding Corporate Rules | Art 46 UK GDPR / DPA 2018 [VERIFY] |
| Sub-processor | Art 28(2), (4) UK GDPR [VERIFY] |
| Relevant Jurisdiction Data Protection Law | UK GDPR / Data Protection Act 2018 / Privacy and Electronic Communications Regulations 2003 [VERIFY] |

### Required Clauses, Art 28(3) UK GDPR Minimum Content

- [ ] Subject matter and duration of processing
- [ ] Nature and purpose of processing
- [ ] Type of personal data and categories of data subjects
- [ ] Obligations and rights of the controller
- [ ] Processor acts only on documented instructions
- [ ] Confidentiality obligations on persons authorised to process
- [ ] Security measures (Art 32) - state-specific measures
- [ ] Sub-processor conditions (prior authorisation / general written authorisation)
- [ ] Data subject rights assistance obligation
- [ ] Breach notification obligation (Art 33-34)
- [ ] Return/destruction of data at end of services
- [ ] Audit and inspection rights
- [ ] Delete or return personal data on termination

### Permitted and Prohibited Processing

| Topic | Drafting Requirement |
|---|---|
| Core permitted processing | Tie each to a service obligation and documented controller instructions |
| Management/admin processing | Allow only if within controller instructions or required by law |
| Required by law | Permit with notice to controller where allowed |
| Data minimisation | Require policies to only process what is necessary for the specified purpose |
| Prohibited processing | No processing beyond documented instructions; no onward transfer without authorisation; no use of data for processor's own purposes |

### Security Measures (Art 32 UK GDPR)

- [ ] **Organisational**: data protection policy, staff training, access controls, incident response plan, DPO appointment if required
- [ ] **Technical**: pseudonymisation and encryption of personal data; systems for ongoing confidentiality, integrity, availability, and resilience; ability to restore timely access; regular testing of effectiveness
- [ ] **NHS-specific**: compliance with NHS Scotland Information Governance policies, DSP Toolkit (Data Security and Protection Toolkit), and Caldicott Principles
- [ ] **Risk analysis**: documented DPIA, updated regularly, remediation tracked
- [ ] **Physical**: facility access controls, workstation use/security, device/media disposal

### Personal Data Breach Notification

| Element | Requirement |
|---|---|
| Deadline | Notify controller without undue delay and within [●] hours of becoming aware (Art 33(2)); 72 hours to notify ICO (controller's responsibility) |
| Discovery standard | When processor has reasonable belief a breach has occurred |
| Content | Nature of breach, categories/approximate number of data subjects, categories/approximate number of personal data records, contact point, likely consequences, measures taken/proposed |
| Phased notification | Mandated: initial notification, investigation report, and final report |
| Assistance | Processor must assist controller in meeting Art 33-34 obligations |
| Breach logs | Maintain register of all personal data breaches (including those not notified to controller) |

### Data Subject Rights Support

| Right | Processor Obligation |
|---|---|
| Right of access (Art 15) | Assist controller in responding within 1 month |
| Right to rectification (Art 16) | Implement rectification on controller's instruction |
| Right to erasure (Art 17) | Delete data on controller's instruction within [●] working days |
| Right to restriction (Art 18) | Mark data as restricted on controller's instruction |
| Data portability (Art 20) | Provide data in structured, commonly used, machine-readable format |
| Right to object (Art 21) | Inform controller; apply restriction |

### Sub-processors

- [ ] Prior written authorisation, or general written authorisation with specific prior notice and objection rights
- [ ] Written contract imposing same Art 28 obligations (flow-down)
- [ ] Ongoing monitoring and audit rights
- [ ] Prompt notification of any sub-processor changes

### International Transfers

- [ ] Identify any transfers of personal data outside the UK
- [ ] Ensure adequate safeguards under Art 46 UK GDPR (e.g., UK International Data Transfer Agreement (IDTA), Addendum to EU SCCs, BCRs)
- [ ] For transfers to non-adequate countries: transfer risk assessment (TRA) required
- [ ] Health data: additional caution as Art 9 special category data

### Termination / Data Disposition

- [ ] Term tied to services; survives until personal data returned/destroyed
- [ ] Cure period and immediate termination triggers for material breach of UK GDPR obligations
- [ ] Return/destroy within [●] days; certification of destruction
- [ ] If return/destruction infeasible: extend protections, limit further processing

## Guidelines

- Match obligations to actual operational capability, do not promise security measures the processor cannot meet.
- Align with the underlying services agreement; reconcile conflicting terms.
- Reference the ICO's statutory guidance on contracts and liabilities (Art 82 UK GDPR).
- Use defined terms consistently; avoid ambiguity in processing instructions.
- Mark uncertain statutory provisions with `[VERIFY]`.
- Include an amendment mechanism for post-execution regulatory changes (e.g., ICO guidance updates, UK GDPR amendments).

## Troubleshooting

- **Scope mismatch**: If services description is vague, narrow processing instructions to specific data categories rather than broad access.
- **Conflicting sub-processor terms**: When a sub-processor resists identical Art 28 obligations, verify which can be commercially relaxed (prior written authorisation) vs. non-negotiable (same data protection obligations).
- **International transfers**: Where the processor or sub-processor is located outside the UK, ensure UK IDTA or equivalent safeguard in place before processing begins.
- **Infeasible return/destruction**: Document the specific reason return/destruction is infeasible; ensure protections extend indefinitely with processing limited to the purpose making return infeasible.

## Scotland/UK Adaptation

This skill has been adapted from a US HIPAA Business Associate Agreement template to the UK data protection framework for health and social care.

### Key changes

| US (HIPAA) | UK (GDPR / DPA 2018) |
|---|---|
| Covered Entity | Data Controller |
| Business Associate | Data Processor |
| PHI / ePHI | Personal Data / Special Category Data (health data, Art 9 UK GDPR) |
| HHS Secretary | ICO (Information Commissioner's Office) |
| HIPAA Privacy Rule (45 CFR 164) | UK GDPR Chapter II (principles) |
| HIPAA Security Rule (45 CFR 164.308-312) | Art 32 UK GDPR (security of processing) |
| Breach: 45 CFR 164.402 | Breach: Art 4(12) UK GDPR |
| HITECH breach notification | Art 33-34 UK GDPR |
| State breach notification laws | DPA 2018 / PECR 2003 |
| NIST CSF / HIPAA Safeguards | DSP Toolkit / ISO 27001 / NHS IG policies |
| HIPAA EDI rules | No equivalent; NHS uses NHS number / CHI number in Scotland |
| 42 CFR Part 2 (substance use) | No direct equivalent; DPA 2018 s 10 / common law duty |

### Scotland-specific considerations
- **NHS Scotland** operates under the National Health Service (Scotland) Act 1978. Health boards are separate controllers.
- **CHI (Community Health Index) number** - Scottish unique patient identifier; equivalent to NHS number in England.
- **Caldicott Principles** - apply UK-wide with NHS Scotland-specific guidance.
- **Intra-NHS Scotland Information Sharing Accord** - governs data sharing between Scottish health boards.
- **Scottish Public Services Ombudsman (SPSO)** - handles complaints about NHS Scotland data handling.
- **Information Governance (IG) in Scotland** - NHS Scotland Information Governance Framework; National Services Scotland.
- **Prescription for data sharing** - Access to Health Records Act 1990 applies plus common law.

### Relevant UK/Scotland regulators and resources

| Entity | Role |
|---|---|
| ICO (Information Commissioner's Office) | UK data protection regulator; enforcement of UK GDPR / DPA 2018 |
| NHS Scotland Information Governance | IG policies, DSP Toolkit, and training for Scottish health boards |
| National Services Scotland (NSS) | National shared services; hosts IRIC and IG support |
| Scottish Government Health and Social Care Directorate | Health policy in Scotland |
| Health Research Authority (HRA) | For health research data processing agreements and approvals (UK-wide) |

### Forms

Download relevant UK DPA templates and health-specific guidance into `scots-forms/`:
- **NHS England DPA Template** - https://www.england.nhs.uk/document-store/template-data-processing-agreement/
- **Health and Care IG Panel standardised agreement** - https://www.digitalregulations.innovation.nhs.uk/
- **ICO Data Processing Agreement guidance** - https://ico.org.uk/for-organisations/guide-to-data-protection/
- **Intra-NHS Scotland Information Sharing Accord** - https://www.digihealthcare.scot/
- **DSP Toolkit** - https://www.dsptoolkit.nhs.uk/

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
