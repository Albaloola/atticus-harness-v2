---
name: byod-policy
language: en
description: Atticus UK/Scots legal skill for byod-policy. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# BYOD Policy, UK/Scotland [SCOTS]

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

Generates an employer-facing BYOD policy balancing operational flexibility with data security, UK GDPR compliance, and enforceable employee obligations under UK employment law.

> **Scotland/UK Adaptation:** This skill has been converted from US BYOD policy (HIPAA, GLBA, SOX, CCPA) to UK data protection and employment law under UK GDPR, DPA 2018, the Privacy and Electronic Communications Regulations (PECR), and the Employment Rights Act 1996. Scotland shares the same UK-wide legislative framework.

## Prerequisites

1. **Organisation profile** - industry, size, applicable regulations (UK GDPR, DPA 2018, PECR)
2. **Device scope** - smartphones, tablets, laptops, wearables
3. **MDM platform** - company-approved mobile device management software
4. **Data classification** - which tiers are permitted on personal devices
5. **IT support boundaries** - helpdesk scope for personal vs. company apps
6. **Stipend terms** - any reimbursement for device use; document separately to avoid wage issues

## Output Structure

| # | Section | Key Contents |
|---|---------|-------------|
| 1 | Purpose & Scope | Why BYOD is permitted; covered employees, devices, systems |
| 2 | Eligibility & Enrolment | Approval process; IT registration; MDM installation |
| 3 | Security Requirements | Minimum device standards |
| 4 | Company Rights | Remote access, monitoring, wipe authority and triggers |
| 5 | Privacy Expectations | What company may/may not access; UK GDPR Art 5 compliance |
| 6 | Employee Responsibilities | Reporting obligations; financial responsibility |
| 7 | Data Handling | Permitted classifications; backup, retention, deletion |
| 8 | Regulatory Compliance | UK GDPR, DPA 2018, PECR |
| 9 | Support & Liability | IT support scope; negligence liability |
| 10 | Acknowledgment | Signature block; disciplinary consequences |

## Key Section Details, UK Adaptations

### Security Requirements (Section 3)
- Screen lock: PIN/password ≥ 6 chars, biometric, or MFA, Patching: OS/security updates within [X] days, MDM agent installed, Full-device or work-profile encryption enabled, Auto-lock timeout ≤ [X] minutes, Remote wipe confirmed before enrolment, Prohibited: jailbroken/rooted devices; sideloaded apps

### Remote Wipe (Section 4)
Trigger conditions: termination, lost/stolen device, confirmed/suspected breach, sustained non-compliance, employee opt-out.
Distinguish **selective wipe** (corporate data only) from **full device wipe**.

### Privacy Scope, UK GDPR Art 5

| Company MAY access | Company will NOT access |
|---|---|
| Business email, calendar, contacts synced | Personal photos, texts, personal email |
| Company app activity and data | Personal app data outside company systems |
| Traffic routed through company VPN | Personal browsing not on company infrastructure |
| Documents in company cloud storage | Personal files never synced to company systems |

**Data protection impact assessment (DPIA)** - may be required under UK GDPR Art 35 for BYOD processing.

### Acknowledgment (Section 10)
Must include: signature, date, confirmation of reading and understanding, notice that violations may result in disciplinary action up to dismissal.

## Drafting Checks

- **UK GDPR compliance**: DPO should review DPIA; document lawful basis for processing (Art 6); ensure data minimisation (Art 5(1)(c)); privacy notice (Art 13) must cover monitoring extent
- **Employment Rights Act 1996**: BYOD policy should not intrude on reasonable expectation of privacy; consider implied term of mutual trust and confidence
- **PECR**: Monitoring electronic communications must comply with Regulation of Investigatory Powers Act 2000 and PECR
- **ICO guidance**: Follow ICO's Code of Practice on monitoring at work
- **Enforceability**: Require signed acknowledgment before granting access
- **Stipend**: Document separate; confirm NI/tax treatment with HMRC

---

**Scotland/UK Adaptation notes:**
- HIPAA/GLBA/SOX → UK GDPR / DPA 2018 / PECR, CCPA → DPA 2018 (no direct equivalent to CCPA)
- HIPAA BAA → DPA 2018 data processing agreement, State-specific laws (CA CPRA, IL BIPA, NY SHIELD) → No equivalent; ICO guidance on workplace monitoring applies UK-wide, EU GDPR (SCCs) → UK GDPR; UK International Data Transfer Agreement (IDTA) for transfers
- $ → £

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
