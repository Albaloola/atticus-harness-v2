---
name: '[SCOTS] cybersecurity-breach-summary'
language: en
description: '[SCOTS] Produces structured cybersecurity breach summary documents for UK regulatory and compliance use. Covers UK GDPR, NIS Regulations 2018, PECR, and ICO notification. Use when drafting breach summaries, incident response reports, forensic report syntheses, board updates, or regulatory notification prep. Triggers: data breach, cybersecurity incident, breach summary, incident report, forensic analysis, notification timeline, UK GDPR, ICO notification, NIS Regulations. [Atticus UK/Scots refined]'
tags:
- analysis, regulatory, drafting, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Cybersecurity Breach Summary [SCOTS]

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

Legally defensible, source-attributed incident summary for executive, counsel, and regulator (ICO) review.

## Quick Start

1. Gather incident reports, forensic analyses, system logs, and response documentation.
2. Confirm privilege boundaries and confidentiality flags from solicitor.
3. Populate the template below with verified facts only, attribute each assertion to a source and date.
4. Separate known facts from hypotheses or open questions.

## Template

````
# Executive Overview, Discovery date/time (timezone):
- Incident window (earliest to latest evidence):
- Incident type / attack vector:
- Affected systems:
- Data categories involved:
- Estimated affected individuals:
- Current status (contained/ongoing):
- Immediate actions taken:
- Material business impact:

# Incident Timeline
| Date/Time (TZ) | Event | Source (doc + date) | Owner | Confidence |
|---|---|---|---|---|

# Technical Summary, Initial access vector:
- Vulnerability or control failure:
- Lateral movement / persistence:
- Exfiltration evidence:
- Integrity/availability impacts:

# Systems Affected
| System/App | Environment | Data Stored | Impact | Status | Source |
|---|---|---|---|---|---|

# Data Impact
| Data Category | Regulated? | Population Type | Est. Count | Jurisdictions | Source |
|---|---|---|---|---|---|

# Affected Population
| Population | Est. Count | Jurisdictions | Notes |
|---|---|---|---|

# Response Actions
| Action | Date | Owner | Status | Source |
|---|---|---|---|---|

# Notifications
| Recipient | Legal Basis | Deadline | Sent Date | Method | Summary | Source |
|---|---|---|---|---|---|---|

# Legal/Regulatory Assessment
| Regime | Trigger | Deadline Rule | Status | Notes |
|---|---|---|---|---|
| UK GDPR Art. 33/34 [VERIFY] | | | | |
| PECR [VERIFY] | | | | |
| NIS Regulations 2018 [VERIFY] | | | | |
| DPA 2018 [VERIFY] | | | | |

# Contractual / Litigation Exposure, Contracts with notice obligations:
- SLAs or security addenda implicated:
- Potential claims and venues:
- Preservation actions taken:

# Insurance, Carrier/policy:
- Notice sent (date/time):
- Coverage issues or reservations:

# Open Issues
-

# Remediation
| Gap/Root Cause | Corrective Action | Owner | Due Date | Status |
|---|---|---|---|---|

# Source Map
| Fact | Source Document | Date | Page/Section |
|---|---|---|---|
````

## Pitfalls

- **Speculation**: Label unknowns explicitly. Do not opine on liability, describe exposure factors only.
- **Timezone drift**: Use consistent date/time with timezone; maintain a single chronological basis.
- **Jurisdiction scope**: List all jurisdictions implicated by affected individuals, UK GDPR applies extra-territorially; ICO may coordinate with EU DPAs.
- **Unverified citations**: Mark uncertain legal citations or deadlines with `[VERIFY]`.
- **Privilege leaks**: Keep privileged content in clearly marked sections per solicitor direction.
- **Vague counts**: Use ranges when scope is uncertain and explain the estimation basis.

---

## Scotland/UK Adaptation

**Regulatory framework:** UK GDPR (retained EU GDPR as amended by the Data Protection Act 2018 and post-Brexit regulations) is the primary breach notification regime. The ICO (Information Commissioner's Office) is the competent supervisory authority.

**Key statutes:**
- **UK GDPR Art. 33/34** - 72-hour notification to ICO; communicate to data subjects without undue delay
- **Data Protection Act 2018** - domestic implementing legislation; exemptions and derogations
- **Privacy and Electronic Communications Regulations (PECR) 2003** - breach notification for public electronic communications services (telecoms/ISPs)
- **Network and Information Systems (NIS) Regulations 2018** - breach reporting for operators of essential services and digital service providers
- **Computer Misuse Act 1990** - criminal offences for unauthorised access/modification (relevant for law enforcement referral)

**Agencies:**
- ICO = primary regulator for data protection breaches, NCSC (National Cyber Security Centre) - technical incident response guidance, Police Scotland / National Cyber Crime Unit (NCCU) - criminal referral, SEPA/Ofgem etc. - sector-specific regulators for critical infrastructure

**Differences from US regime:**
- No state-by-state breach laws, single UK regime applicable across Scotland, England, Wales, NI (plus ICO-led enforcement)
- ICO can impose fines up to the greater of £17.5m or 4% of worldwide annual turnover (UK GDPR) or up to £1m/2% of turnover (PECR)
- Mandatory breach register requirement under UK GDPR Art. 33(5)
- No equivalent to HIPAA or CCPA/CPRA, sector-specific regulation exists (NHS, financial services) but data protection framework is unified, ICO expects contemporaneous internal documentation of all breaches (not just notifiable ones)

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
