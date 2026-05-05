---
name: wisp
language: en
description: '[SCOTS] Drafts a Written Information Security Program compliant with UK GDPR, the Data Protection Act 2018, and supplementary frameworks (PCI-DSS, FCA/PRA data rules). Produces a board-ready regulatory document covering coordinator designation, risk assessment, safeguards, training, incident response with breach notification, and vendor oversight. Use when an organisation handles personal data of UK data subjects and needs a standalone information security programme for ICO compliance or executive approval. [Atticus UK/Scots refined]'
tags:
- SCOTS, drafting, memo, regulatory, research, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Written Information Security Program (WISP)

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

Drafts a UK-GDPR/DPA 2018-aligned information security programme that satisfies ICO regulatory expectations and functions as an operational security blueprint for Scottish and UK organisations.

## Prerequisites

1. **Organisation profile** - legal name, industry, jurisdictions, employee count
2. **Data inventory** - personal data types, storage locations, transmission methods, access roles (align with UK GDPR Art. 30 record of processing)
3. **Existing security materials** - current policies, prior ISPs, risk assessments, audit reports, incident logs
4. **Vendor list** - third parties with access to personal data
5. **DPO identity** - designated Data Protection Officer name/title, or confirmation none exists
6. **Supplemental frameworks** - applicable laws beyond UK GDPR (FCA/PRA data rules, PCI-DSS, NHS Data Security standards)

## Output Structure

Produce a formally numbered document with table of contents, definitions section, body sections below, and appendices as needed.

### Section 1 - Executive Summary & Program Purpose

| Field | Content |
|---|---|
| Effective Date | [DATE] |
| Version | [N] |
| Governing Regulation | UK GDPR; Data Protection Act 2018; [additional frameworks] |
| Scope | Personal data of UK data subjects owned, licensed, stored, or maintained by [Org] |
| Commitment Statement | One-paragraph executive commitment to administrative, technical, and physical safeguards |

### Section 2 - Data Protection Officer / Information Security Coordinator Designation

- Name, title, department, direct contact, Authority to implement, supervise, and maintain the programme, Reporting line to executive leadership, IT, and legal counsel, DPO appointment must satisfy UK GDPR Art. 37 requirements (where mandatory)
- If none exists: recommend qualifications and flag `[ACTION REQUIRED]`

### Section 3 - Risk Assessment Framework

- Methodology for identifying risks across the data lifecycle (collection → destruction)
- Risk matrix: likelihood × impact, Scope: employee access, system vulnerabilities, physical gaps, third-party exposure, Reassessment: annually minimum + after material organizational change, Incorporate prior assessment findings and mitigation status if available

### Section 4 - Security Safeguards

**4A, Administrative**

- Least-privilege access control, Pre-employment background checks, Disciplinary procedures for violations, Termination protocols (credential revocation, device return)

**4B, Technical**

| Control | Standard |
|---|---|
| Encryption at rest | AES-256 or equivalent |
| Encryption in transit | TLS 1.2+ |
| Authentication | MFA for personal-data-containing systems |
| Patch management | Critical patches within [N] days |
| Monitoring | Log retention, anomaly alerting |
| Secure disposal | NCSC / CESG guidance or HMG Infosec Standard 5 for media sanitisation `[VERIFY]` |

**4C, Physical**

- Facility access controls (badge, visitor logs)
- Screen-lock and clean desk policies, Environmental controls (fire suppression, flood protection)
- Mobile device encryption and remote-wipe

### Section 5 - Employee Training

| Element | Detail |
|---|---|
| Frequency | Annual + new-hire onboarding |
| Delivery | [In-person / LMS / vendor platform] |
| Topics | Data handling, password hygiene, phishing, incident reporting, clean desk |
| Role-specific | Elevated training for broad PI access |
| Records | Completion records retained [N] years |
| Non-compliance | Disciplinary consequences per HR policy |

### Section 6 - Monitoring & Program Maintenance

- Ongoing safeguard monitoring with defined metrics, Annual security audit; penetration testing cadence, Trigger-based reviews: new technology, new threats, regulatory changes, restructuring, Post-incident review feeding continuous improvement

### Section 7 - Incident Response & Breach Notification

**Phases:** Detection → Containment → Investigation → Remediation → Notification → Post-Mortem

| Obligation | Trigger | Timeline |
|---|---|---|
| Affected individuals / data subjects | Personal data breach (UK GDPR Art. 33-34) | Without undue delay / where feasible, 72 hours to ICO |
| ICO (Information Commissioner's Office) | Breach likely to result in risk to rights and freedoms | 72 hours from awareness |
| Affected data subjects | High-risk breach | Without undue delay (Art. 34) |

- Incident response team: roles, escalation path, breach determination authority, Evidence preservation requirements, Coordination: legal counsel, ICO (where required), law enforcement, PR, Template notification language in Appendix (ICO breach notification template)
- Incident log retention, Note: ICO breach reporting mandatory under UK GDPR Art. 33; Scottish firms follow same UK-wide framework via DPA 2018

### Section 8 - Third-Party Service Provider Oversight

- Pre-engagement vendor risk assessment (data access scope, security posture)
- Required contractual terms: data protection, audit rights, breach notification ≤ [N] hours, liability, Annual vendor security reviews or after material vendor change, Approved vendor register maintained by WISP Coordinator

## Guidelines

- **Cite UK GDPR Articles and DPA 2018 sections** throughout each safeguard section
- **Flag `[VERIFY]`** on all citations before finalizing, statutory amendments may affect obligations
- **Multi-framework**: layer UK GDPR Art. 32 (security of processing), FCA/PRA data rules (financial services), or PCI-DSS as applicable; note conflicts requiring legal resolution
- **Standards over products**: reference AES-256, TLS 1.2+ rather than vendor names to avoid operational brittleness
- **Flag gaps**: mark missing organisational information `[ACTION REQUIRED, provide details for compliance]`
- **Tone**: formal regulatory language accessible to technical and non-technical readers; suitable for board presentation and ICO review
- **Scotland-specific**: UK GDPR applies across the UK via the DPA 2018; no separate Scottish regime. Scottish firms should also consider the Public Sector Records Management (Scotland) Act 2011 if applicable

---

**Key changes from the original:**

- **Description**: Compressed from 450+ chars to ~380 while retaining all trigger cues and framework names
- **Prerequisites**: Tightened phrasing (e.g., "jurisdictions of operation, number of employees" → "jurisdictions, employee count")
- **Section headers**: Shortened ("Employee Training Program" → "Employee Training", "Monitoring, Review & Program Maintenance" → "Monitoring & Program Maintenance")
- **Bullet text**: Trimmed redundant words throughout (e.g., "Access control and least-privilege policies" → "Least-privilege access control"; removed "Workstation lock/" prefix merged into "Screen-lock and clean desk policies")
- **Tables**: Compressed column text ("personal information" → "PI" consistently after first use; collapsed repeated "Same as above" → "Same")
- **Guidelines**: Made punchier ("Do not over-specify technology" → "Standards over products"; removed explanatory subordinate clauses where the bold label already communicates the rule)
- **Total**: Reduced from 128 lines to 112 lines, ~15% fewer tokens while preserving all legal substance

## Scotland/UK Adaptation

### Primary Framework (UK)

- **Regulation**: UK GDPR (retained EU GDPR as amended by the Data Protection, Privacy and Electronic Communications (Amendments etc.) (EU Exit) Regulations 2019) + Data Protection Act 2018
- **Enforcement**: Information Commissioner's Office (ICO) - replaces MA Attorney General and MA Director of Consumer Affairs
- **Trigger**: Any organisation processing personal data of UK data subjects, not limited to MA-resident PI
- **DPO**: UK GDPR Art. 37 mandates DPO appointment for public authorities, large-scale monitoring, or large-scale special-category data processing

### Key National Security Standards

- **NCSC guidance**: UK National Cyber Security Centre cyber assessment framework, use instead of NIST frameworks for UK government/regulated sectors
- **HMG Infosec Standard 5**: Media sanitisation, equivalent to NIST SP 800-88 for UK government
- **CESG guidance**: UK government information assurance, consult for public sector deployments

### Scotland-Specific

- UK GDPR applies uniformly across England, Wales, Scotland, and Northern Ireland via the Data Protection Act 2018; no distinct Scottish data protection regime, Scottish public authorities must also comply with the Public Sector Records Management (Scotland) Act 2011 for record-keeping standards, The Scottish Government Cyber Resilience Unit provides additional guidance for public sector organisations in Scotland, ICO has a dedicated Scotland office in Edinburgh

### Breach Notification (UK GDPR Art. 33-34)

- **ICO notification**: Mandatory within 72 hours of awareness where breach likely to result in risk to data subjects
- **Data subject notification**: Required where high risk to rights and freedoms
- **Records**: All breaches must be documented, even those not notified
- **Penalties**: Up to the higher of £17.5 million / 4% of global annual turnover (under UK GDPR post-Brexit upper band)

### Terminology Mapping

| US Term | UK Equivalent |
|---|---|
| Personal information (PI) | Personal data (UK GDPR Art. 4(1)) |
| MA residents | UK data subjects |
| WISP coordinator | Data Protection Officer (DPO) / Information Security Lead |
| MA AG / Consumer Affairs | ICO |
| NIST SP 800-88 | NCSC guidance / HMG Infosec Standard 5 |
| CCPA | Not applicable (UK GDPR / DPA 2018 cover equivalent rights) |
| GLBA | FCA/PRA data rules for financial services firms |
| HIPAA | UK GDPR + DPA 2018 + NHS Digital Data Security Standards (National Data Guardian) |

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
