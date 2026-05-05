---
name: incident-response-playbook
language: en
description: 'Drafts incident response plans and scenario playbooks for UK legal organisations, aligning NCSC Cyber Assessment Framework phases with Law Society of Scotland Practice Rules 1.1/1.4/1.6 equivalents and privilege preservation. Use when creating or updating an incident response plan, breach response policy, ransomware playbook, or ICO notification checklist. Trigger keywords: incident response, playbook, data breach, ransomware, cybersecurity policy, NCSC, ICO notification, UK GDPR. [SCOTS]. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Incident Response Plan and Playbook (UK)

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

Produces defensible, operational incident response plans and scenario playbooks for legal organisations in the UK. Aligns NCSC Cyber Assessment Framework with Law Society of Scotland ethics obligations and client confidentiality requirements.

## Prerequisites

Gather before drafting:

1. **Practice profile** - practice areas, jurisdictions (Scotland, England, cross-border), client types, offices, critical systems
2. **Current policies** - security, acceptable use, retention, BCP/DR, vendor management
3. **Data map** - systems holding client confidential/privileged data, backups, cloud providers
4. **Regulatory scope** - applicable breach laws, Law Society of Scotland rules, sector regulations (UK GDPR, DPA 2018, PECR)
5. **Contacts** - internal response team and external vendors with after-hours channels

## Quick Start

1. Confirm scope and standards (NCSC CAF, Law Society of Scotland Rules B1.1/B1.4/B6.1, ICO guidance)
2. Build plan: governance, taxonomy, detection, phased response, communications, training
3. Add scenario playbooks (ransomware, email compromise, unauthorised access, inadvertent disclosure)
4. Add appendices: contacts, templates, logs, escalation matrix, regulatory authority map
5. Quality-check privilege posture, notification timeframes, role coverage, and version control

## Core Workflow

### 1. Plan Header and Governance

**Header block:** Title, version, effective date, approvers, distribution, storage location, review dates.

**Governance roles** - each needs primary duties, decision authority, and named backups:
- Incident Response Coordinator (activate, triage, oversee)
- Legal/Ethics Counsel (privilege, ethics, notifications, regulators)
- IT/Security Lead (forensics, containment, eradication)
- Managing Partner/ED (resourcing, client impact, business decisions)
- Comms Lead (internal/external messaging)
- Practice Leaders (client context, matter impact, advisory)
- Data Protection Officer (if required under UK GDPR Art 37)

**External engagement checklist:**
- [ ] Forensics firm on retainer or pre-approved
- [ ] Breach counsel on retainer
- [ ] Cyber insurer notification triggers defined
- [ ] Law enforcement (Police Scotland / National Cyber Crime Unit) engagement criteria defined
- [ ] PR firm engagement criteria defined
- [ ] ICO notification lead defined

### 2. Incident Taxonomy

**Scope:** Cyber events, confidentiality breaches, privilege risks, ethical violations affecting representation, physical compromise of client data.

**Severity levels:**

| Severity | Examples | Response | Notification |
|---|---|---|---|
| Critical | Widespread client data exposure, ransomware on active matters, privilege compromise | Immediate activation + exec notify | Immediate; ICO within 72 hours |
| High | Targeted account takeover, multi-matter access | Activate response team | Within 2 hrs |
| Medium | Single-user phishing, limited exposure | IT + counsel review | Same business day |
| Low | Blocked attempts, policy violations | Log + monitor | Standard queue |

### 3. Detection and Reporting

**Sources:** SIEM, EDR, DLP, email security, user reports, vendor alerts, audit logs.

**Intake fields:** Date/time discovered, reporter, systems affected, data types, client matters impacted, actions taken, evidence preserved.

**Privilege protocol:** Counsel directs investigations. Mark communications "Privileged & Confidential, Legal Professional Privilege." Separate factual incident log from legal analysis.

### 4. NCSC-Aligned Phased Response

**Preparation:**
- [ ] Security controls baseline documented (NCSC Cyber Essentials / CAF alignment)
- [ ] Annual training and phishing simulations
- [ ] Tabletop exercises conducted
- [ ] Vendor/insurer contacts verified
- [ ] Backup restoration tested
- [ ] Data Protection Impact Assessment (DPIA) in place

**Identification:**
- [ ] Validate incident
- [ ] Scope systems/data
- [ ] Classify severity
- [ ] Determine client/privilege impact
- [ ] Assess UK GDPR breach notification risk

**Containment:**
- [ ] Short-term isolation
- [ ] Account resets and access control
- [ ] Long-term containment plan

**Eradication:**
- [ ] Remove malware
- [ ] Patch vulnerabilities
- [ ] Confirm adversary ejected

**Recovery:**
- [ ] Restore from clean backups
- [ ] Validate integrity
- [ ] Resume operations with monitoring

**Lessons Learned:**
- [ ] Post-incident review within 14 days
- [ ] Update plan and controls
- [ ] Capture metrics (MTTD, MTTC, MTTR, notification compliance)
- [ ] Report to ICO if personal data breach (72-hour window)

### 5. Scenario Playbooks

**Ransomware:**
- [ ] Isolate affected systems
- [ ] Notify insurer and breach counsel
- [ ] Assess exfiltration indicators
- [ ] Evaluate restore options and legal posture
- [ ] Police Scotland / NCA decision
- [ ] ICO notification within 72 hours if personal data affected
- [ ] Client notification per Law Society of Scotland Rules B1.4/B6.1

**Email Account Compromise:**
- [ ] Reset credentials and tokens
- [ ] Review mailbox rules and sent items
- [ ] Identify affected client communications
- [ ] Client notification if required
- [ ] Harden MFA and mail security
- [ ] Consider ICO notification if personal data accessible

**Unauthorised Case File Access:**
- [ ] Identify matters and data types
- [ ] Assess privilege impact
- [ ] Client notification determination
- [ ] Access control remediation
- [ ] ICO notification assessment (UK GDPR Art 33/34)

**Inadvertent Privilege Disclosure:**
- [ ] Notify receiving party to claim privilege
- [ ] Demand return/destruction
- [ ] Document inadvertence
- [ ] Evaluate loss of privilege risks [VERIFY]
- [ ] Apply the "obvious mistake" test (English/Scottish law)

### 6. Communications and Notifications

**Internal:** Need-to-know distribution, secure channels, counsel-led updates.

**Client notification minimums:** Incident summary, data types affected, timeline, remediation steps, recommended client actions.

**Regulatory notification matrix** - populate per jurisdiction:

| Regulator | Statute/Rule | Trigger | Deadline | Notes |
|---|---|---|---|---|
| ICO | UK GDPR Art 33 | Personal data breach | 72 hours | Mandatory for high risk; Art 34 for communication |
| ICO | DPA 2018 | Personal data breach | 72 hours | Same as UK GDPR |
| [Regulator] | [Sector rule] | [Trigger] | [X days] | [VERIFY] |

**Ethics obligations:** Law Society of Scotland Rules B1.1 (competence), B1.4 (communication), B6.1 (confidentiality), B1.6 (supervision).

### 7. Appendices

Include: contact roster, incident report form, client notice letter, ICO notification template, media holding statement, incident log template, escalation matrix.

**Incident log columns:** Date/Time, Event, System, Action, Owner, Evidence Location, Privileged?

## Pitfalls

- **Unverified deadlines** - never include jurisdiction-specific deadlines without verification; mark `[VERIFY]`
- **Privilege breaks** - counsel must direct investigations and review all outbound notices; distinguish legal advice privilege from litigation privilege
- **Liability admissions** - avoid admissions of liability in external communications
- **Stale plans** - update annually and after material incidents, practice mergers, or major system changes
- **Missing citations** - always cite NCSC Cyber Assessment Framework and applicable Law Society of Scotland rules; reference ICO guidance when used
- **UK GDPR 72-hour notification** - mandatory for personal data breaches likely to result in risk; Art 34 communication to data subjects if high risk
- **Legal professional privilege (LPP)** - distinct from US attorney-client privilege; covers legal advice privilege and litigation privilege; can be lost through waiver
- **DPIA requirement** - data protection impact assessment may be required under UK GDPR Art 35 before deploying new processing systems

## Scotland/UK Adaptation

This skill has been converted from a US incident response playbook skill to UK/Scottish legal practice. Key differences:

- **NIST 800-61 → NCSC CAF:** US NIST SP 800-61 Rev. 2 replaced by the UK National Cyber Security Centre (NCSC) Cyber Assessment Framework (CAF) and Cyber Essentials scheme.
- **ABA Model Rules → Law Society of Scotland Rules:** US ABA Model Rules 1.1/1.4/1.6 replaced by Law Society of Scotland Practice Rules B1.1 (competence), B1.4 (communication), B6.1 (confidentiality).
- **HIPAA/GLBA → UK GDPR/DPA 2018:** US healthcare (HIPAA) and financial (GLBA) data breach regulations replaced by the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
- **ICO notification:** The Information Commissioner's Office (ICO) is the UK regulator; 72-hour breach notification under Art 33 UK GDPR. No US state-level breach notification rules.
- **Legal professional privilege (LPP):** UK LPP differs from US attorney-client privilege. LPP is a substantive right, not a rule of evidence; it includes legal advice privilege and litigation privilege. It can be lost through inadvertent disclosure.
- **Police Scotland / NCA:** US FBI/Secret Service replaced by Police Scotland (territorial police) and the National Crime Agency (NCA) or National Cyber Crime Unit.
- **No CMMC:** US Department of Defense CMMC not applicable; UK equivalent is MOD's Defence Cyber Protection Partnership (DCPP).
- **No state-specific requirements:** UK has a single ICO for data protection, unlike the US patchwork of state breach notification laws.
- **Tabletop exercises:** Recommended per ICO guidance and Law Society of Scotland practice notes, rather than specific US legal/regulatory requirements.
- **Data Protection Officer:** Required under UK GDPR Art 37 for law firms processing special category data on a large scale.

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
