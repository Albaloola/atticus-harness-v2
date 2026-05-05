---
name: vendor-security-assessment
language: en
description: Drafts a Vendor Security Assessment Questionnaire evaluating third-party cybersecurity posture, data handling, and regulatory compliance under UK law. Vendor responses become binding contractual representations with executive certification. Use during vendor due diligence, third-party risk management, procurement security review, or subprocessor evaluation for UK/Scottish organisations. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Vendor Security Assessment Questionnaire (UK/Scotland)

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

Generates a pre-contract due-diligence questionnaire for evaluating vendor security controls, data practices, and compliance across UK GDPR, Data Protection Act 2018, PECR, NIS Regulations, and industry frameworks.

## Quick Start

Gather before drafting:
1. **Vendor scope** - data types accessed (PII, special category data, financial, proprietary), processing activities, data flows
2. **Applicable regulations** - UK GDPR, DPA 2018, PECR, NIS Regulations 2018, or sector-specific (FCA, MHRA, Ofcom)
3. **Risk tolerance** - what constitutes acceptable vs. disqualifying vendor risk
4. **Contract alignment** - security provisions to incorporate by reference

## Document Framework

| Element | Requirement |
|---|---|
| Preamble | Completion mandatory pre-contract; responses are binding representations |
| Executive certification | Senior officer (CISO/CTO/CLO/DPO) attests accuracy; signature block required |
| Submission deadline | 10 to 15 business days |
| Change notification | Vendor notifies within 5 business days of material security changes |
| Confidentiality | Questionnaire and responses treated as confidential business information |

## Assessment Domains

Draft numbered questions per domain. Each question includes a response field and evidence-request field where applicable. Tailor scope to data sensitivity, not every vendor needs every domain.

**1. Information Security Governance**
- Dedicated CISO/equivalent; certifications (CISSP, CISM, CISA)
- Framework alignment (NIST CSF, ISO 27001, Cyber Essentials, CIS Controls)
- [SCOTS: Cyber Essentials / Cyber Essentials Plus, UK Government-backed cybersecurity scheme, increasingly mandatory for government contracts]
- Policy review cadence; security awareness training (all-staff + specialised)
- Board-level security reporting frequency
- [SCOTS: Compliance with ICO regulatory expectations, Accountability Framework under UK GDPR]

**2. Data Classification & Lifecycle**
- Classification taxonomy compatibility with client's scheme, All data storage/processing locations (primary, DR, backup, cloud regions)
- Cross-border transfer mechanisms (UK International Data Transfer Agreement (IDTA), Addendum to EU SCCs, adequacy regulations)
- [SCOTS: Post-Brexit, UK adequacy decisions are separate from EU adequacy; verify current DfE guidance]
- Retention post-termination; destruction methods; certificates of destruction, Backup frequency; encrypted backup media; tested RTO/RPO

**3. Access Control & Privileged Access**
- MFA enforcement across all access; supported factors, RBAC, least-privilege, segregation of duties, Privileged access: JIT elevation, session recording, auto-deprovisioning, Access recertification frequency; anomalous-access alerting

**4. Vulnerability Management & Testing**
- Scanning tools, frequency, and patching SLAs:

| Severity | Patch SLA |
|---|---|
| Critical | ≤ 24 to 72 hrs |
| High | ≤ 7 days |
| Medium | ≤ 30 days |
| Low | ≤ 90 days |

- Annual third-party penetration tests (external + internal lateral movement)
- [SCOTS: CHECK or CREST-accredited testers for government/public sector]
- AppSec testing (SAST, DAST, SCA) for custom software, Bug bounty / responsible disclosure programme, Request most recent penetration test summary and remediation status

**5. Incident Response & Business Continuity**
- Documented IR plan with roles, escalation, communication protocols, IR testing frequency (tabletop, simulations) and recent results, Notification timeline, must allow client to meet most restrictive regulatory deadline (UK GDPR 72 hrs to ICO, PECR, sector regulators)
- [SCOTS: ICO data breach notification, must notify ICO within 72 hours of becoming aware of a personal data breach under UK GDPR Article 33]
- Cooperation with client IR team and legal counsel, Cyber insurance: policy limits, third-party liability, adequacy for data volume, BCP/DR: tested RTO/RPO, geographic diversity, multi-scenario resilience

**6. Encryption & Key Management**
- At rest: minimum AES-256; scope includes production, dev/test, backups, portable media, Database encryption approach (TDE, column-level, application-layer)
- In transit: TLS versions, deprecated protocol status, enforced cipher suites, In use: confidential computing / secure enclave capabilities (if applicable)
- Key management: HSM/KMS storage, rotation frequency, secure destruction

**7. Network Security & Segmentation**
- Customer isolation; production vs. corporate separation, Zero-trust architecture status, Perimeter controls: firewalls, IDS/IPS, WAF, DDoS protection, Remote access: VPN, NAC/device posture, MFA, Assessment cadence (external scans, internal penetration tests, wireless)

**8. Subprocessor Risk Management**
- Complete subprocessor inventory: role, data access, location, assessments conducted, Flow-down of security requirements (contractually at least as stringent as client's)
- [SCOTS: UK GDPR Article 28 - written contract with processor must include specific mandatory terms]
- Client notification and approval rights before new subprocessor engagement, Right to terminate non-compliant subprocessors

**9. Certifications & Compliance**
- SOC 2 Type II: report date, principles, opinion status, scope alignment, ISO 27001: certificate dates, scope, certification body (UKAS-accredited)
- [SCOTS: Cyber Essentials / Cyber Essentials Plus, check relevance to contract]
- [SCOTS: UK Government Security Classification, check if vendor handles OFFICIAL/SECRET data]
- Regulatory compliance confirmation for applicable data types (FCA, Ofcom, MHRA)
- Commitment to provide updated reports/certifications annually

**10. Physical Security & Environmental Controls**
- Data centre access: MFA, visitor logs, surveillance, security personnel
- [SCOTS: BS 5979 or NSI/IFC accreditation for alarm response]
- Background checks (DBS checks) for personnel with physical access, Environmental: fire suppression, UPS, generators, climate, water detection, Facility certifications (SOC 1/2, ISO 27001, Uptime Institute tier)

**11. HR Security & Insider Threat**
- Background checks (DBS Basic/Standard/Enhanced as appropriate); periodic re-investigation for sensitive roles, Security training before access; policy acknowledgment, Offboarding: access revocation timeline, exit procedures, Insider threat monitoring; DLP for exfiltration prevention

## Risk Assessment Framework

Score vendor responses after receipt:

| Rating | Criteria |
|---|---|
| Low | Controls meet/exceed requirements; evidence provided |
| Moderate | Minor gaps; addressable via contractual provisions |
| High | Significant gaps; requires remediation plan with deadlines |
| Critical | Fundamental deficiencies; disqualifying absent remediation |

Assessment report must include:
- Per-domain and overall risk rating with justification, Recommended contractual controls (audit rights, insurance minimums, SLAs)
- Evidence gaps requiring follow-up, Go/no-go recommendation with conditions, Flagged inconsistencies between responses and publicly available information

## Checks

- State explicitly in preamble: responses are **contractually binding representations**; incomplete/misleading answers constitute grounds for disqualification or material breach, Align notification timelines with the **most restrictive applicable breach notification law** (UK GDPR 72-hour rule)
- Mark questions as required vs. conditional based on data type (PCI questions only if payment data involved)
- Flag vendors refusing to disclose subprocessors or share certifications as elevated risk
- [SCOTS: ICO regulatory powers, fines up to £17.5 million or 4% of global turnover for UK GDPR breaches]
- [SCOTS: Verify DPO registration requirements, some vendors require DPO appointment under UK GDPR Articles 35-37]
- All legal citations to specific regulatory provisions must be verified against current law [VERIFY]

## Scottish / UK Form References

See `scots-forms/` directory for:
- UK GDPR Article 28 Data Processing Agreement template, ICO Data Sharing Code of Practice, Cyber Essentials Self-Assessment Questionnaire, PECR compliance checklist (ePrivacy)
- NIS Regulations compliance matrix (essential services / digital service providers)

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Replaced "GDPR, CCPA, HIPAA, SOX, GLBA, FERPA" with "UK GDPR, DPA 2018, PECR, NIS Regulations 2018"
- Replaced "CCPA" with UK GDPR / DPA 2018 (no direct California/state law equivalent)
- Replaced "HIPAA" with UK GDPR special category data / DPA 2018 Part 4
- Replaced "GLBA" with FCA regulatory requirements (no direct equivalent)
- Replaced "FERPA" with DPA 2018 education data provisions, Replaced "NIST CSF, ISO 27001, COBIT" with "NIST CSF, ISO 27001, Cyber Essentials"
- Replaced "SCCs" with UK International Data Transfer Agreement (IDTA) and UK Addendum, Replaced "FedRAMP/StateRAMP" with UK Government Security Classification / Cyber Essentials, Replaced "HITRUST" with NHS DSP Toolkit (where healthcare applicable)
- Replaced "TISAX" with UK automotive security requirements, Replaced "background checks" with "DBS checks" (Disclosure and Barring Service)
- Replaced $ amounts with £ where applicable; removed state-specific breach law references, Replaced FTC/DOJ references with ICO/FCA/COPFS, Replaced "GDPR 72 hrs" with explicit reference to UK GDPR Article 33
- Added ICO regulatory powers and fine regime

**Key Scottish/UK considerations:**
- [SCOTS: UK GDPR retained with modifications post-Brexit, separate from EU GDPR but substantially similar]
- [SCOTS: International transfers require UK-compatible mechanisms (IDTA, UK SCC Addendum)]
- [SCOTS: ICO Guidance on accountability framework, due diligence documentation expected]
- [SCOTS: PECR regulates electronic communications marketing and cookie compliance, equivalent to US CAN-SPAM]
- [SCOTS: Cyber Essentials is mandatory for many UK government contracts]
- [SCOTS: DBS checks, Three tiers: Basic, Standard, Enhanced; no direct US background check equivalent]

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
