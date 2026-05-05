---
name: breach-summary
language: en
description: Atticus UK/Scots legal skill for breach-summary. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Cybersecurity Breach Summary (UK/GDPR)

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

Produces a sourced, fact-based breach summary for counsel, security leadership, and regulator-facing communications (ICO, FCA, NCSC). Every assertion is cited and uncertainty is labelled explicitly.

## Quick Start

Before drafting, confirm you have:

1. **Source documents** - incident ticket, forensics reports, SOC/SIEM logs, legal notices, board updates, cyber insurance correspondence.
2. **Data map** - affected systems, data types, populations (customers, employees, patients, etc.).
3. **Jurisdiction map** - impacted individuals/entities in UK, EEA, and internationally; multiple regulator obligations.
4. **Privilege check** - identify solicitor-client privileged or confidential material before summarising.
5. **Notification status** - timeline of notices already sent (internal, ICO/regulator, affected persons, law enforcement via NCSC).

## Workflow

### Phase 1 - Intake Matrix

List each source with creator, date range, reliability rating, and key gaps.

### Phase 2 - Header Block

Incident ID | Reporting period | Primary custodians (security/counsel/compliance) | Severity (High/Medium/Low) | Status (Ongoing/Contained/Remediated)

### Phase 3 - Executive Overview

Discovery date/time, attack type, likely entry point, impacted systems, data sensitivity, immediate business impact.

### Phase 4 - Chronology

Initial compromise date/time with confidence level, detection source, forensic milestones, containment actions, notification milestones. Use consistent, explicit time zones (always state BST/GMT).

### Phase 5 - Scope & Impact

Attack vector and exploit chain, systems/databases affected, data categories accessed/exfiltrated/altered, estimated affected records/persons (min to max range), evidence of secondary spread or persistence.

### Phase 6 - Response Ledger

Actions taken vs. pending, law enforcement/third-party involvement (NCSC, Police Scotland/National Cyber Crime Unit), stakeholder notifications by date/method, patches/hardening completed. Include owner for every open item.

### Phase 7 - Legal & Regulatory Assessment

Jurisdictions with statutory impact, UK regulators triggered (ICO, FCA, OFCOM), compliance deadlines (72-hour ICO notification under UK GDPR Art. 33; met or missed), pending legal/commercial exposure, insurance/contractual notice status.

### Phase 8 - Open Issues & Remediation

Facts under investigation, missing data, next evidence needed, root causes, process/policy fixes, verification plan, responsible owners and target dates.

## Regulatory Checklist

| Framework | Checks | Core Evidence |
|---|---|---|
| UK GDPR (Art. 33 to 34) | ICO notification timeliness (72 hours); high-risk affected-person notification without undue delay | Breach triage memo, UK-persons index, risk assessment |
| Data Protection Act 2018 | Special category data breach triggers additional obligations; DPA 2018 s.67 to 68 criminal offences | Data classification map, ICO notification draft |
| NIS Regulations 2018 | Sector-specific OES/DSP duties (energy, transport, health, digital infrastructure) | NIS designation confirmation, operator report |
| PECR (e-privacy) | Communications provider breach notification duties; PECR-specific obligations | Network/communications data inventory |
| FCA Handbook (financial services) | SYSC notification; ss.166 skilled persons report trigger for serious breaches | FCA notification draft, breach impact analysis |
| Contractual obligations | Data processing agreement breach triggers; SLA breach reporting clauses | DPAs, SLAs, data sharing agreements |
| Cross-border (EU GDPR) | EEA data subjects trigger EU GDPR Art. 33 obligations via UK establishment; DPA 2018 s.119 to 120 | EEA-persons index, lead SA designation (ICO as one-stop-shop for UK) |

## Pitfalls

- **Never overstate certainty.** Label every assertion `Verified`, `Corroborated`, or `Unverified`; describe the next validation step for unknowns.
- **Cite every statement** - `(document name, timestamp, section/page)`.
- **Separate law from fact.** Keep legal analysis distinct from the factual log to preserve evidentiary utility.
- **Protect privilege.** Reference evidence indexes without quoting legal advice.
- **Flag gaps.** Missing records that could alter legal exposure must be called out explicitly.
- **Escalate missed deadlines.** Lead with impact and corrective plan, then detail.
- **UK GDPR 72-hour clock.** Runs from the controller becoming aware of the breach (Art. 33(1)); not from full forensic analysis. Identify awareness date clearly.
- **ICO risk of harm standard.** Not every breach requires notification; assess the risk to rights and freedoms. Document the risk assessment reasoning.
- **Police Scotland or NCSC involvement.** Consider if criminal offence suspected, do not compromise evidence chain.
- **Cyber insurance.** Notify insurer promptly; delay may void cover. Check policy notification requirements.

## Scotland/UK Adaptation

This skill has been adapted from the US original for UK data protection and cybersecurity law.

| US Concept | Scotland/UK Equivalent |
|---|---|
| GDPR (European regulation) | UK GDPR (retained EU law, as amended; parallel but separate regime post-Brexit) |
| CCPA/CPRA (California) | UK GDPR / Data Protection Act 2018 |
| HIPAA (healthcare breach) | Common Law Duty of Confidentiality + UK GDPR (special category data Art. 9) + DPA 2018 Sch. 1 |
| US state data breach laws (varying deadlines) | ICO notification (72 hours for UK GDPR); PECR (24 hours for communications providers); sector-specific (NIS, FCA) |
| FTC (Federal Trade Commission) | ICO (Information Commissioner's Office) + FCA (financial services) + OFCOM (communications) |
| HHS (Health and Human Services) | ICO; CQC (Care Quality Commission) for health sector |
| SEC (securities regulator) | FCA (Financial Conduct Authority) |
| US DOJ / FBI / CISA | Police Scotland / National Cyber Security Centre (NCSC) / National Crime Agency (NCA) |
| State Attorney General | ICO (single data protection regulator for UK) |
| HITECH risk assessment | UK GDPR risk assessment: risk to rights and freedoms (Art. 35 if DPIAs already exist) |
| PCI-DSS (US focus) | PCI-DSS (identical standard; enforced by UK-accredited QSAs) |
| US litigation hold | Scottish/Norwich Pharmacal preservation obligation; Scottish practice of commission and diligence for document recovery |
| US data breach class actions | No US-style class actions in Scotland/UK; representative actions under DPA 2018 s.187 to 189 (opt-in collective proceedings) |
| Punitive damages (US) | No punitive damages in Scots law; compensation for material and non-material damage under UK GDPR Art. 82 |
| Lloyd's cyber insurance (US) | Lloyd's / London market cyber insurance (same market; UK-specific policy wording) |
| US dollar amounts | GBP (roughly £0.80 per USD) |
| SSA-EIN/TPN for breach reporting | ICO breach reporting form (online portal); no equivalent of HHS breach portal |
| NHS data breach | Common Law Duty of Confidentiality + UK GDPR + National Data Guardian standards |

**Key UK/Scottish regulatory notes:**
- ICO is the lead data protection regulator for the UK; can issue fines up to £17.5m or 4% of annual worldwide turnover (UK GDPR)
- UK GDPR is a retained EU regulation, amended by the Data Protection, Privacy and Electronic Communications (Amendments etc.) (EU Exit) Regulations 2019
- NIS Regulations 2018 apply to operators of essential services and digital service providers, Police Scotland has a dedicated Cyber Crime Unit; report via Action Fraud or 101
- NCSC provides incident response guidance; consider sharing anonymised threat intelligence, Scotland has its own legal system, breach notification may interact with delict (tort) and prescription periods, The Data Protection Act 2018 s.123 makes it an offence to re-identify de-identified personal data without consent, UK and EU GDPR are separate now, compliance with one does not guarantee compliance with the other post-Brexit

**Required disclaimer on every output:**
> THIS IS A DRAFTING AID FOR UK/GDPR BREACH RESPONSE AND REQUIRES REVIEW BY A QUALIFIED SOLICITOR BEFORE USE. IT DOES NOT CONSTITUTE LEGAL ADVICE.

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
