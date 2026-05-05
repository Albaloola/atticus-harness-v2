---
name: information-security-policy
language: en
description: '[SCOTS] Drafts a board-approvable Information Security Policy covering data classification, access controls, encryption, incident response, breach notification, and enforcement. Tailored by industry and regulatory environment (UK GDPR, Data Protection Act 2018, PCI DSS, NIS Regulations, NCSC guidance). Use when drafting or overhauling an organisation''s foundational information security governance framework or cybersecurity policy for Scotland/UK operations. [Atticus UK/Scots refined]'
tags:
- drafting, policy, regulatory, research, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Information Security Policy [SCOTS]

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

Drafts a formal Information Security Policy satisfying UK regulatory requirements (UK GDPR, DPA 2018, NIS Regulations, PCI DSS) with enforceable operational guidance.

> **[SCOTS: Note]** This skill has been adapted from a multi-framework US/global template. HIPAA, GLBA, FERPA, and CCPA references have been replaced or supplemented with UK equivalents. See the Scotland/UK Adaptation section at the end.

## Prerequisites

1. **Org profile** - industry sector, employee count, jurisdictions of operation
2. **Regulatory triggers** - applicable frameworks (UK GDPR, Data Protection Act 2018, PCI DSS, NIS Regulations, ISO 27001, NCSC Cyber Assessment Framework, Cyber Essentials)
3. **Existing governance docs** - current policies, data classification schemes, incident response plans
4. **Data inventory** - sensitive data categories handled (special category data, personal data, payment card data, trade secrets)
5. **Approving authority** - CEO/Board, CISO, DPO, General Counsel/Solicitor signature blocks needed

## Output Structure

### Document Control Block

| Field | Content |
|-------|---------|
| Policy Title | Information Security Policy |
| Version / Effective Date | [#] / [Date] |
| Approved By / Owner | [Title] / CISO or equivalent |
| Next Review | [Date + 1 year] |
| Supersedes | [Prior version or N/A] |

### Section Outline

**1. Purpose & Authority**
- Business rationale (financial, reputational, regulatory risk)
- Authorizing resolution; relationship to other org policies

**2. Scope**
- **Entities:** parent, subsidiaries, affiliates, JVs
- **Personnel:** employees, contractors, vendors, partners
- **Assets:** electronic data, physical records, IP, BYOD, remote environments
- **Exclusions:** publicly available info, de-identified data (define standard)

**3. Definitions**
Define with legal precision; flag where definitions vary by jurisdiction:
- Confidential Information, Personal Data / PII (per GDPR Art. 4, CCPA § 1798.140, HIPAA 45 C.F.R. § 160.103)
- Data Breach, Security Incident, Data Owner, Data Custodian, Authorized User, Classification Levels: Public / Internal / Confidential / Restricted

**4. Data Classification**

| Level | Description | Examples |
|-------|-------------|---------|
| Public | Approved for external release | Marketing materials |
| Internal | Business use; not for external distribution | Org charts, internal memos |
| Confidential | Limited distribution; legal obligations | Customer PII, financial data |
| Restricted | Highest sensitivity; regulatory protection | PHI, payment card data, credentials |

**5. Access Controls**
- Least privilege; separation of duties, Lifecycle: request → data owner approval → provisioning → quarterly review → revocation on role change/termination, Privileged access: separate admin accounts; logged and audited

**6. Authentication**

| Requirement | Standard |
|-------------|---------|
| Password length | 12+ characters; mixed case, numbers, symbols |
| MFA required for | Remote access, privileged accounts, Restricted data, cloud admin |
| Acceptable MFA | TOTP, hardware token, biometric; SMS discouraged for high-risk |
| Shared credentials | Prohibited |

**7. Encryption Standards**

| Context | Minimum Standard |
|---------|-----------------|
| Data at rest (Confidential/Restricted) | AES-256 |
| Data in transit | TLS 1.2+ (1.3 preferred) |
| Portable devices | Full-disk encryption |
| Email (Restricted) | End-to-end or secure portal |
| Backup media | Encrypted; separate key management |

Review annually; superseded by org Security Standards if more stringent.

**8. Acceptable Use**
- Prohibited: illegal activity, harassment, circumventing controls, credential sharing, Monitoring: org reserves right; no expectation of privacy on org systems, BYOD: MDM enrollment, encryption, remote wipe on loss/termination

**9. Physical Security**
- Lock unattended devices; clean desk for Confidential/Restricted materials, Secure disposal: cross-cut shredding (paper); cryptographic erasure or destruction (media)
- Visitor access: escorted in secure areas; logs maintained

**10. Data Retention & Disposal**

| Category | Period | Basis |
|----------|--------|-------|
| Special category data | Appropriate period | UK GDPR Art. 5(1)(e); DPA 2018 |
| Personal data | Appropriate period | UK GDPR Art. 5(1)(e); ICO guidance |
| Financial records | 6 years | Companies Act 2006 / HMRC |
| HR/payroll records | 6 years after termination | Employment rights legislation |
| PCI DSS evidence | 3 years min | PCI DSS v4.0 |
| Incident logs | 3 years min | UK GDPR / NIS Regulations |

Certificate of destruction required for Restricted data.

**11. Roles & Responsibilities**

| Role | Obligations |
|------|-------------|
| Board / Exec | Policy approval; resource allocation |
| CISO | Program ownership; standards; audit; regulator liaison |
| IT / Security | Controls; patching; monitoring; vulnerability mgmt |
| Legal / Privacy | Breach notification decisions; regulatory liaison |
| Managers | Access approval; team compliance; off-boarding |
| All Employees | Credential protection; incident reporting; training |
| DPO | Required under GDPR Art. 37 if applicable |

**12. Incident Response**

Lifecycle:
1. **Detect & Report** - within [1 to 4 hours] to security hotline
2. **Assess** - severity triage; activate IRT if Sev 1/2
3. **Contain** - isolate systems; preserve evidence; chain of custody
4. **Eradicate** - remove threat; patch vulnerability
5. **Recover** - restore from clean backups; verify integrity
6. **Post-Incident Review** - within 14 days; root cause; corrective action plan

IRT: CISO (lead), IT Security, Legal, HR, PR/Comms, Executive Sponsor.

**13. Breach Notification**

| Framework | Deadline | Recipients |
|-----------|----------|-----------|
| UK GDPR | 72 hours to ICO; without undue delay to individuals if high risk | ICO, affected individuals |
| DPA 2018 | As per UK GDPR | ICO, affected individuals |
| NIS Regulations | As per sectoral guidance | ICO, relevant competent authority |
| PCI DSS | Immediately | Card brands, acquiring bank |
| PECR | As applicable | ICO |

Legal counsel notified immediately upon any incident involving personal data.

**14. Third-Party & Vendor Management**
- Security assessment before vendor access to Confidential/Restricted data, Required contractual provisions: DPA / BAA as applicable, Right-to-audit for Restricted data vendors, Access revoked immediately on contract termination

**15. Regulatory Compliance Matrix**

| Framework | Applicability | Key Requirements |
|-----------|--------------|-----------------|
| UK GDPR / DPA 2018 | All UK personal data processing | Lawful basis; data subject rights; DPIAs; breach notification |
| NIS Regulations 2018 | Essential / digital service providers | Security measures; incident reporting; registration with ICO |
| PCI DSS v4.0 | Payment card processing | Detailed controls in separate PCI procedures |
| Cyber Essentials | Government contracts / good practice | 5 technical controls; annual certification |
| NCSC Cyber Assessment Framework | Critical national infrastructure | Governance; risk management; security architecture |
| ISO 27001 | Voluntary | ISMS; Annex A controls |
| PECR | Electronic communications | Marketing consent; cookies; security of services |

**16. Training & Awareness**
- All personnel: at hire + annually; phishing simulation semi-annually, High-risk roles (sysadmins, developers, finance): role-specific training annually, Completion tracked; non-completion escalated; records retained 3 years

**17. Compliance Monitoring & Audit**
- Annual risk assessment; quarterly vulnerability scans; annual penetration test, Access reviews: semi-annual (Confidential), quarterly (Restricted)
- Remediation SLAs, Critical: 30 days, High: 60 days, Medium: 90 days

**18. Enforcement**
Progressive discipline: retraining → written warning → suspension/termination → civil liability → criminal referral. Factors: intent, severity, prior violations, self-reporting.

**19. Policy Administration**
- Review: annually or upon major incident, regulatory change, material org change, Approval: [CEO/Board] on CISO + General Counsel recommendation, Employees acknowledge receipt in writing; at-will status unaffected

### Signature Block

| Role | Name | Signature | Date |
|------|------|-----------|------|
| CEO | | | |
| CISO | | | |
| General Counsel | | | |

### Employee Acknowledgment
*I acknowledge receipt of, have read, and agree to comply with the Information Security Policy (Version [#], effective [Date]).*

Name: ______ Title: ______ Date: ______ Signature: ______

## Guidelines

- **Multi-jurisdiction conflicts:** apply most stringent standard or add jurisdiction-specific schedules
- **Encryption floors:** AES-256 / TLS 1.2+ are minimums; revise per NCSC guidance updates
- **UK GDPR DPO:** required under Art. 37 UK GDPR if org is public authority, conducts large-scale monitoring, or processes special category data at scale, confirm applicability before drafting `[VERIFY]`
- **DPA 2018:** Data Protection Act 2018 supplements UK GDPR; ensure Part 4 (law enforcement), Part 3 (intelligence services) compliance where applicable
- **ICO registration:** most organisations processing personal data must register with the ICO and pay a data protection fee
- **PCI DSS:** detailed technical controls in separate PCI documentation to allow updates without policy re-approval
- **UK employment context:** UK employment law does not have an "at-will" concept, ensure disciplinary provisions reflect UK law on unfair dismissal and contractual notice periods
- **Scotland-specific:** Data protection is a reserved matter (UK-wide ICO framework). However, Scottish public authorities under the Freedom of Information (Scotland) Act 2002 have additional obligations. Consider Scottish Public Sector Cyber Resilience Framework for Scottish public bodies
- **Union recognition:** if recognised trade union, confirm no collective bargaining obligations before implementation `[VERIFY]`
- **Do not fabricate citations** - use `[VERIFY]` for any citation not confirmed against primary source

---

## Scotland/UK Adaptation

### Overview
This skill has been adapted from a multi-framework US/global information security policy to the UK regulatory environment.

### Key Differences from the US Original

| US Concept | UK Equivalent |
|------------|---------------|
| HIPAA (healthcare data) | UK GDPR / DPA 2018 special category data; common law duty of confidentiality |
| HIPAA BAAs | Data Processing Agreements (DPA) under UK GDPR Art. 28 |
| GLBA (financial) | FCA data security rules / PRA operational resilience |
| FERPA (education) | No direct equivalent; Education (Scotland) Act data rules; DPA 2018 |
| CCPA/CPRA (California) | UK GDPR data subject rights (right of access, erasure, portability) |
| FTC enforcement | ICO (Information Commissioner's Office) enforcement |
| IRS retention periods | HMRC / Companies Act retention periods |
| State data breach laws | UK GDPR / NIS Regulations / PECR (single UK framework) |
| US state attorneys general | ICO enforcement; COPFS for criminal data offences (Scotland) |
| NIST CSF | NCSC Cyber Assessment Framework / ISO 27001 / Cyber Essentials |

### Key UK Legislation
- **UK GDPR** (retained EU GDPR as amended by the Data Protection, Privacy and Electronic Communications (Amendments etc.) (EU Exit) Regulations 2019)
- **Data Protection Act 2018** - supplements UK GDPR; includes separate processing regimes for law enforcement and intelligence services
- **NIS Regulations 2018** (Network and Information Systems Regulations) - cybersecurity obligations for essential and digital service providers
- **Privacy and Electronic Communications Regulations (PECR)** - cookies, marketing, electronic communications security
- **Computer Misuse Act 1990** - unauthorised access to computer material
- **Investigatory Powers Act 2016** - lawful interception
- **Freedom of Information (Scotland) Act 2002** - Scottish public authority FOI obligations

### Regulatory Bodies
- **ICO** (Information Commissioner's Office) - UK-wide data protection and privacy regulator
- **NCSC** (National Cyber Security Centre) - UK technical cybersecurity authority
- **Scottish Government Cyber Resilience Unit** - Scottish public sector cyber resilience
- **FCA / PRA** - financial services sector security obligations
- **COPFS** - criminal prosecution of data and computer misuse offences in Scotland

### Scotland-Specific Context, Data protection, cybersecurity, and computer misuse are reserved matters (UK-wide legislation)
- Freedom of Information (Scotland) Act 2002 creates separate Scottish FOI obligations (enforced by Scottish Information Commissioner)
- Scottish public bodies should follow the Scottish Public Sector Cyber Resilience Framework, Criminal prosecutions for data/cyber offences proceed through COPFS in Scottish courts

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
