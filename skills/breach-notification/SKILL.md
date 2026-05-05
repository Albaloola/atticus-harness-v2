---
name: breach-notification
language: en
description: Atticus UK/Scots legal skill for breach-notification. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# UK Data Breach Notification Letter [SCOTS]

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

Drafts a data subject breach notification letter and ICO breach report satisfying UK GDPR Articles 33-34 and DPA 2018 requirements, with appropriate tone and actionable consumer guidance.

> **Scotland/UK Adaptation:** This skill has been converted from US multi-state breach notification (HIPAA, GLBA, state AG statutes) to UK GDPR and DPA 2018. The UK regulatory framework is unified (no multi-state complexity). ICO is the sole UK regulator. Scotland shares the same UK-wide data protection regime.

## Key Differences from US System

| US | UK/Scotland |
|----|------------|
| Multi-state+ federal laws | Single regime: UK GDPR + DPA 2018 |
| State AG notifications | ICO notification only |
| HHS (HIPAA) | ICO (for all sectors) |
| Credit bureau contacts (Equifax, Experian, TransUnion) | CIFAS / National Cyber Security Centre (NCSC) |
| Various time limits (30-60 days) | 72 hours for ICO notification (Art 33) |
| FTC IDTheft.gov | Action Fraud (for financial crime) / ICO guidance |

## Prerequisites

1. **Incident details** - discovery date, breach type (confidentiality/availability/integrity), affected timeframe
2. **Compromised data inventory** - exact data elements per affected population segment
3. **Risk assessment** - likelihood and severity of risk to data subjects' rights and freedoms
4. **Regulatory framework** - UK GDPR, DPA 2018; PECR if electronic communications involved
5. **Remediation services** - credit monitoring provider (if offered), CIFAS protective registration enrolment details
6. **Contact channels** - dedicated phone, email, URL for breach inquiries
7. **DPO / Signatory** - Data Protection Officer or senior executive

## ICO Breach Notification (Art 33)

Must be made within 72 hours of becoming aware of the breach.

Required content:
- Description of the breach (nature, categories and approximate number of data subjects and records)
- DPO or other contact point, Likely consequences, Measures taken or proposed to mitigate possible adverse effects

## Individual Notification (Art 34)

Required only where the breach is likely to result in a **high risk** to individuals' rights and freedoms.

### Letter Sections

#### 1. Header, Organisation legal name, address, letterhead, Letter date (tracked against 72-hour ICO clock)
- Data Protection Officer contact

#### 2. Incident Description, State purpose: notifying of a personal data breach, Plain language, no unnecessary technical jargon, Include discovery date, nature of incident, general cause, If investigation is ongoing, state so and commit to updates

#### 3. Compromised Data Categories

| Category | Examples |
|---|---|
| Identifiers | Full name, address, phone, email |
| Government IDs | National Insurance number, passport, driving licence |
| Financial | Bank account, credit/debit card numbers |
| Health | Medical records, NHS number, diagnoses |
| Credentials | Usernames, passwords, security answers |

#### 4. Organisational Response
- [ ] Containment measures taken
- [ ] Forensic investigation engaged
- [ ] ICO notified (with reference number if available)
- [ ] Additional security measures implemented
- [ ] Protection services offered: CIFAS protective registration / credit monitoring

#### 5. Individual Protection Steps

| Action | Details |
|---|---|
| CIFAS Protective Registration | cifas.org.uk |
| National Insurance number | Report to DWP if NI number compromised |
| Bank/Card | Contact bank immediately; cancel/replace cards |
| Passports | Report to HM Passport Office if compromised |
| Password changes | Change for affected accounts |
| Phishing vigilance | Warn recipients to distrust communications referencing this breach |
| Action Fraud | Report financial crime to actionfraud.police.uk |

#### 6. Contact & Closing, Dedicated phone and email, DPO contact details, ICO's right to complain (Art 77) - mandatory notification of right to complain to ICO, Signed by DPO or senior executive

## Compliance Checklist

- [ ] ICO notified within 72 hours (Art 33)
- [ ] High-risk data subjects notified without undue delay (Art 34)
- [ ] Notification includes recommended steps for data subjects
- [ ] Documentation of the breach and response retained (Art 33(5))
- [ ] Exemptions/derogations considered (e.g., encryption renders data unintelligible)
- [ ] No undue delay; "without undue delay" standard applied
- [ ] Right to lodge complaint with ICO included

---

**Scotland/UK Adaptation notes:**
- Multi-state breach laws → UK GDPR Art 33-34 (unified UK-wide)
- HIPAA (45 CFR 164.404) → DPA 2018 / UK GDPR, State AG notifications → ICO notification only, GLBA / Gramm-Leach-Bliley → Privacy and Electronic Communications Regulations (PECR) for electronic communications, Credit bureaus (Experian etc.) → CIFAS, FTC IdentityTheft.gov → Action Fraud / ICO
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
