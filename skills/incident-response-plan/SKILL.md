---
name: incident-response-plan
language: en
description: '[SCOTS] Drafts incident response plans and playbooks for legal organisations in Scotland and the UK, adapting NIST SP 800-61 to law firm contexts including privilege preservation, professional conduct obligations under the Law Society of Scotland Rules, and UK GDPR / Data Protection Act 2018 breach notification compliance. Use when creating IR plans, cybersecurity playbooks, breach response policies, or data incident procedures for Scottish/UK law firms, in-house legal departments, or public sector legal teams. [Atticus UK/Scots refined]'
tags:
- SCOTS [scots, scotland, uk, incident-response, breach-notification, gdpr, cyber-security]
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Incident Response Plan and Playbook (Scotland/UK)

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

> ⚠️ **This is a drafting template. It does not constitute legal advice.**
> Scottish solicitors should seek specialist input from their professional indemnity insurer,
> data protection officer, and (where appropriate) breach counsel before implementing any IR plan.

Drafts legally defensible IR plans for Scottish/UK law firms and legal departments covering
cybersecurity incidents, personal data breaches, legal professional privilege preservation,
and professional responsibility compliance under the Law Society of Scotland Rules of Conduct
and UK data protection law.

## Prerequisites

Gather before drafting:

1. **Organisation profile** - firm structure, practice areas, office locations, operating jurisdictions (Scotland, rUK, cross-border)
2. **Existing policies** - information security policies, business continuity plans, data protection policies, professional conduct guidelines
3. **Regulatory landscape** - UK GDPR / Data Protection Act 2018, Privacy and Electronic Communications Regulations (PECR), sector overlays where applicable
4. **Technology environment** - case management systems, DMS, email, cloud services, backup infrastructure
5. **Insurance coverage** - cyber insurance policy, PI insurance, carrier contact, claim procedures
6. **[SCOTS: Note]** - Scottish firms should verify whether their PI insurance includes cyber/breach response cover, as standard policies vary.

## Quick Start

1. Map jurisdictions and applicable breach statutes (UK GDPR / DPA 2018; PECR; sector-specific)
2. Classify incident types by severity tier
3. Define governance roles and escalation chains
4. Draft phased response procedures (NIST 800-61 adapted for Scotland/UK)
5. Build scenario-specific playbooks
6. Set communication protocols and notification templates (ICO / affected data subjects)
7. Establish training/testing cadence

## Output Sections

### 1. Jurisdictional Analysis (Scotland/UK)

Map per operating jurisdiction:

- **Data breach notification** - UK GDPR Article 33 (72-hour notification to ICO); DPA 2018 Part 3 (law enforcement processing); PECR for electronic communications providers
- **Professional conduct rules** - Law Society of Scotland Rules of Conduct (competence, communication, confidentiality) and Practice Rules; CPD requirements on data security and cyber awareness
  - Rule B1 (Competence) - equivalent to ABA Model Rule 1.1, covering technical competence obligations
  - Rule B6 (Communication with clients) - equivalent to ABA Model Rule 1.4
  - Rule B8 (Confidentiality) - equivalent to ABA Model Rule 1.6
- **Sector overlays** - FCA rules (financial services), NHS Scotland / health data (common law duty of confidence + DPA 2018), Scottish public sector (Scottish Government information security policies)
  - [SCOTS: Note] There is no direct HIPAA equivalent in UK law. Health data is protected under UK GDPR (special category data) and the common law duty of confidence. NHS Scotland has its own Information Governance framework (Caldicott principles).
  - [SCOTS: Note] There is no direct GLBA equivalent in UK law. Financial services firms in Scotland are regulated by the FCA and PRA with their own data security and breach notification requirements (FCA Handbook SYSC, DPA 2018).
- **Ethics opinions** - relevant Law Society of Scotland guidance on cybersecurity duties; Law Society of Scotland Cybercrime Guide (3rd ed.)

### 2. Incident Taxonomy

Four severity tiers:

| Tier | Criteria | Response Time |
|------|----------|---------------|
| **Critical** | Widespread client data compromise; privilege breach; ICO mandatory reporting triggered; high risk to data subjects | Immediate (24/7) |
| **High** | Multi-matter exposure; solicitor email compromise | ≤2 hours |
| **Medium** | Isolated access attempts; contained inadvertent disclosure | ≤4 hours |
| **Blocked** | Blocked attempts; policy violations without data exposure | Next business day |

Legal-specific incident types: inadvertent privilege disclosure, case management system unauthorised access, conflicts data exposure, solicitor email compromise, DMS ransomware, physical file breach, loss of encrypted device.

### 3. Governance Structure

| Role | Function | Key Authority |
|------|----------|---------------|
| IR Coordinator | Activates plan, convenes team | Isolate systems, engage external resources |
| Data Protection Officer (DPO) | UK GDPR compliance, ICO notification decision | Direct DPA 2018 compliance, approve ICO reports |
| General Counsel / Ethics Partner | Legal analysis, privilege protection, professional conduct | Direct privileged investigation, approve notifications, Law Society of Scotland reporting |
| IT Manager / External IT Provider | Technical response, forensics | Evidence preservation, restoration, liaison with NCSC |
| Managing Partner / Practice Manager | Strategic decisions | Expenditures, client relationship decisions, PI insurer notification |
| Communications Director | Internal/external messaging | Media responses (with counsel approval) |

Include after-hours contact roster and escalation chain for unavailable contacts.
[SCOTS: Note] Scottish firms should ensure at least one partner has remote access to the contact roster outside the office network.

### 4. Phased Response (NIST 800-61 Adapted for Scotland/UK)

**Phase 1 - Preparation**
- Preventive controls inventory (Cyber Essentials / Cyber Essentials Plus recommended baseline)
- Annual security awareness training + tabletop exercises, External expert relationships (forensic providers, breach counsel, PR, NCSC CIR-assured providers)
- [SCOTS: Note] Law Society of Scotland recommends firms consider ISO 27001 certification for larger practices; Cyber Essentials as minimum for all practices.

**Phase 2 - Identification**
- [ ] Validate incident; preliminary scope assessment
- [ ] Determine if privileged, client-confidential, or special category data involved
- [ ] Assign severity tier; activate response team
- [ ] Initiate investigation under counsel direction to preserve legal professional privilege
- [ ] Begin 72-hour UK GDPR breach notification clock on awareness

**Phase 3 - Containment**
- [ ] Isolate systems; disable compromised accounts; block malicious IPs
- [ ] Enhanced monitoring; emergency patches; migrate to backups if needed
- [ ] Preserve evidence for potential Police Scotland / NCSC involvement

**Phase 4 - Eradication**
- [ ] Remove malware/unauthorised access; close vulnerabilities
- [ ] Verify no persistent backdoors using NCSC-certified providers where possible

**Phase 5 - Recovery**
- [ ] Restore from verified clean backups
- [ ] System integrity testing; gradual return with heightened monitoring
- [ ] Inform affected clients and data subjects without undue delay (if high risk)

**Phase 6 - Lessons Learned** (within 14 days)
- [ ] Post-incident review; document timeline and findings
- [ ] Update IR plan; implement preventive measures
- [ ] Report to PI insurer as required

### 5. Scenario Playbooks

**Ransomware on DMS:**
1. Isolate systems → notify cyber insurance carrier and PI insurer
2. Assess backup integrity; evaluate exfiltration indicators (double extortion)
3. Determine client notification and ICO reporting obligations under UK GDPR Art. 33 to 34
4. Consider law enforcement referral (NCSC / Police Scotland cyber crime unit); document all decisions under privilege
5. [SCOTS: Note] Ransom demands: Scottish firms should seek specialist legal and technical advice before any payment. Paying a ransom may breach confidentiality obligations under Rule B8 and may be reportable to the Law Society of Scotland.

**Solicitor Email Compromise:**
1. Reset credentials; revoke sessions; review forwarding/mailbox rules
2. Identify accessed client communications; assess privilege implications
3. Notify affected clients per Rule B6 (communication); implement MFA; report to ICO if personal data breached
4. Consider reporting to Police Scotland if criminal intent suspected

**Inadvertent Privilege Disclosure:**
1. Notify opposing party/counsel immediately; request return and destruction of privileged material
2. Document inadvertence; assess waiver risk under Scottish law of confidentiality and legal professional privilege
3. Seek Scottish court protective order or confidentiality agreement to prevent further use of disclosed material
4. [SCOTS: Note] There is no direct equivalent to FRE 502(b) in Scotland. Scottish legal professional privilege is governed by common law and the requirements of procedural fairness. Apply to the Court of Session or Sheriff Court for a protective order if the disclosed material risks irreparable harm. Clawback motions are not a feature of Scottish civil procedure; parties should instead agree confidentiality undertakings or seek interdict to prevent use.

**Personal Data Breach (Non-Cyber):**
1. Contain and assess (lost paper file, misdirected email, stolen device)
2. Determine whether ICO notification is required (UK GDPR Art. 33 - risk to rights and freedoms)
3. Notify affected data subjects without undue delay if high risk (Art. 34)
4. Document the breach and remedial steps in internal breach register
5. Notify PI insurer; consider Law Society of Scotland reporting if conduct issues arise

### 6. Communication Protocols

| Audience | Trigger | Timing | Approval |
|----------|---------|--------|----------|
| IR Team | Any confirmed incident | Immediate | IR Coordinator |
| Senior Leadership / Partners | High/Critical | Within 1 hour | IR Coordinator |
| Data Protection Officer | Personal data breach | Within 1 hour | IR Coordinator |
| Affected Clients / Data Subjects | Client data compromised; high risk | Per UK GDPR Art. 34 + professional conduct | GC + Managing Partner |
| ICO | UK GDPR Art. 33 threshold met | Within 72 hours of awareness | DPO + General Counsel |
| PI Insurer | Any notifiable incident | As soon as practicable per policy terms | Managing Partner |
| NCSC | Malicious cyber attack | Case-by-case | GC + IT Director |
| Police Scotland | Criminal activity suspected | Promptly (call 101 or report online) | General Counsel |
| Action Fraud / Report Fraud | Fraud or cyber crime (England/Wales/NI only) | Case-by-case | General Counsel |
| Law Society of Scotland | Professional conduct implications or as directed by Rules | As required | Ethics Partner |
| Media | Public exposure/inquiry | Reactive only | GC + Communications |

Mark all investigation communications "Privileged & Confidential, Litigation / Legal Professional Privilege."
Client/data subject notifications must satisfy both UK GDPR Art. 34 requirements AND the Law Society of Scotland Rules of Conduct.
[SCOTS: Note] For Scottish-based firms, Police Scotland is the appropriate law enforcement body. Action Fraud / Report Fraud is for England, Wales, and NI only. Report via 101 for non-urgent cyber crime.

### 7. Training and Testing

| Activity | Frequency |
|----------|-----------|
| Security awareness training | Annual (all personnel) |
| IR team specialised training | Annual |
| Tabletop exercises | Annual minimum |
| Phishing simulations | Quarterly |
| Backup restoration tests | Semi-annual |
| Data protection refresher (UK GDPR / DPA 2018) | Annual |
| Plan review and update | Annual + post-incident |

Track: time to detect, contain, eradicate, recover; ICO notification compliance rate; data subject notification timeliness.

### 8. Appendices

- [ ] Contact roster (internal + external including DPO, PI insurer, NCSC, Police Scotland)
- [ ] Incident reporting form template (internal use)
- [ ] Client notification letter templates (UK GDPR Art. 34 compliant)
- [ ] ICO breach notification form template (see scots-forms/ directory)
- [ ] Escalation matrix by severity
- [ ] Evidence preservation checklist
- [ ] UK GDPR breach notification quick-reference table
- [ ] Cyber Essentials checklist
- [ ] Version control and approval log

## Pitfalls and Checks

- **Legal professional privilege preservation** - all investigation activities directed by counsel; mark work product accordingly under Scottish law of confidentiality and legal professional privilege
- **Jurisdiction specificity** - map UK GDPR / DPA 2018 requirements; if representing clients in other jurisdictions, note those separately; never rely on generic summaries
- **Dual obligation** - every notification must satisfy BOTH UK GDPR statutory requirements AND Law Society of Scotland Rules of Conduct
- **Cite authority** - reference specific UK GDPR Articles, DPA 2018 sections, Law Society of Scotland Rules and Practice Rules; mark uncertain citations `[VERIFY]`
- **Defensibility** - the plan itself evidences the firm's reasonable security measures, supporting the competence obligation under Rule B1
- **Internal only** - this plan governs the firm's own response; separate client advisory communications for client data incidents
- **72-hour ICO clock** - awareness triggers the 72-hour window under UK GDPR Art. 33(1); report early, update later

## Scotland/UK Adaptation

This skill has been adapted for Scottish and UK legal contexts from a US-focused original. Key adaptations:

| US Original | Scotland/UK Replacement |
|-------------|------------------------|
| State breach notification statutes (30 to 90 days) | UK GDPR Art. 33 (72 hours to ICO) + DPA 2018 |
| ABA Model Rule 1.1 (tech competence) | Law Society of Scotland Rule B1 (competence) + CPD requirements |
| ABA Model Rule 1.4 (communication) | Law Society of Scotland Rule B6 (client communication) |
| ABA Model Rule 1.6 (confidentiality) | Law Society of Scotland Rule B8 (confidentiality) |
| HIPAA (health data) | No direct equivalent, UK GDPR special category data + NHS Scotland Information Governance / Caldicott principles |
| GLBA (financial data) | No direct equivalent, FCA Handbook SYSC + PRA rules |
| State AG notification | ICO notification (UK GDPR Art. 33) |
| FBI IC3 | NCSC (cyber) / Police Scotland (criminal) / Action Fraud (England/Wales/NI only) |
| FRE 502(b) / clawback motions | Scottish law of privilege (common law) + protective orders / confidentiality agreements in Court of Session or Sheriff Court |
| COSO framework | ISO 27001 / UK Cyber Essentials / Cyber Essentials Plus |
| USD amounts | GBP amounts |
| US-specific insurance language | UK PI insurance + cyber insurance (Lloyd's / London market) |

**Forms downloaded for reference** (see `scots-forms/` subdirectory):
- ICO Personal Data Breach Notification Form (PDF, v4.0)
- ICO NIS Reporting Form (DOCX)
- Law Society of Scotland Cybersecurity Guide 2024 (PDF)
- NCSC Incident Response Processes reference

**Key resources for Scottish/UK practitioners:**
- [ICO Personal Data Breach Reporting](https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/) - online reporting portal
- [NCSC Incident Management](https://www.ncsc.gov.uk/collection/incident-management/cyber-incident-response-processes) - guidance and templates
- [Law Society of Scotland Cybersecurity Guide](https://www.lawscot.org.uk/members/business-support/technology/cybersecurity-guide/)
- [Law Society of Scotland GDPR Guidance](https://www.lawscot.org.uk/members/business-support/gdpr-general-data-protection-regulation/)
- [Police Scotland Cyber Crime](https://www.scotland.police.uk/) - report via 101
- [Action Fraud / Report Fraud](https://www.actionfraud.police.uk/) - England, Wales, NI only
- [UK Cyber Essentials](https://www.ncsc.gov.uk/cyberessentials/overview)
- [NCSC Assured Cyber Incident Response (CIR) Scheme](https://www.ncsc.gov.uk/schemes/cyber-incident-response)

---

*Adapted for Scotland/UK legal context. Original methodology based on NIST SP 800-61.*

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
