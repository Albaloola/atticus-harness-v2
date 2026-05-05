---
name: gdpr-dpa
language: en
description: Drafts GDPR Article 28-compliant Data Processing Addenda with schedules ready for execution. Use when drafting or updating a DPA, vendor GDPR addendum, controller-processor agreement, or data protection addendum involving sub-processors, breach notification, audits, international transfers, or SCCs. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# GDPR Data Processing Addendum (DPA)

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

Produces an Article 28-compliant DPA aligned with the governing service agreement, covering processing details, security, sub-processor controls, breach notice, audits, and deletion terms.

## Quick Start

Gather before drafting:

- [ ] Party details: legal names, addresses, registration numbers (Controller + Processor)
- [ ] Underlying agreement reference (name, date, SOWs/order forms)
- [ ] Processing description: subject matter, duration, nature, purpose, operations
- [ ] Data inventory: data subject categories, personal data types, special categories (Art 9), criminal data (Art 10)
- [ ] Transfer map: processing locations, transfer mechanism (adequacy, SCCs, BCRs, Art 49)
- [ ] Security baseline: certifications, TOMs
- [ ] Sub-processor list + approval model (general vs specific) with objection window
- [ ] Incident response SLAs and audit preferences
- [ ] Termination: return/deletion formats, timelines, retention constraints

## Drafting Workflow

1. Draft header, recitals, effective date, and order-of-precedence clause with the main agreement.
2. Define GDPR terms: Controller, Processor, Personal Data, Processing, Sub-processor, Data Protection Laws, Personal Data Breach, Services.
3. Insert Article 28(3) mandatory clauses (see checklist below).
4. Add security (Art 32), breach notification (Arts 33-34), and assistance (Arts 32-36) clauses.
5. Add sub-processor governance (Art 28(2), 28(4)) with flow-down obligations.
6. Add audit and compliance evidence provisions (Arts 28(3)(h), 40, 42).
7. If data leaves the EEA, add international transfer terms (Art 46 SCCs, Art 47 BCRs, Art 49 derogations).
8. Add termination, return/deletion obligations, and backup handling.
9. Populate Schedules A-D from inputs; mark gaps as `[REQUIRED]`.

## Article 28(3) Mandatory Clause Checklist

| GDPR basis | Clause | Required content |
|---|---|---|
| Art 28(3)(a) | Instructions | Process only on documented Controller instructions; notify if instruction violates law |
| Art 28(3)(b) | Confidentiality | Authorized personnel bound by confidentiality |
| Art 28(3)(c) | Security | Appropriate TOMs per Art 32 |
| Art 28(3)(d) | Sub-processors | No sub-processing without authorization; flow-down equivalent obligations |
| Art 28(3)(e) | Data subject rights | Assist Controller with Chapter III requests |
| Art 28(3)(f) | Assistance | Assist with Art 32-36 obligations including DPIA and prior consultation |
| Art 28(3)(g) | Return/Deletion | Return or delete personal data at end of services; certify |
| Art 28(3)(h) | Audits/Info | Make information available; allow and contribute to audits |

## Key Decision Points

| Decision | Options | Input needed |
|---|---|---|
| Sub-processor authorization | General / Specific | Controller policy, objection window |
| Audit model | On-site / Remote / Third-party / Certification | Vendor policy, existing reports |
| Breach notice SLA | 24h / 48h / Other | Risk tolerance, incident playbooks |
| Data return format | CSV / JSON / Native export | System compatibility |
| Transfer mechanism | Adequacy / SCCs / BCRs / Art 49 | Data flows and locations |

## Schedule Templates

**Schedule A, Approved Sub-processors**

| Name | Location | Processing Activity | Authorization Type | Notice Period |
|---|---|---|---|---|
| to be determined | to be determined | to be determined | General/Specific | 30 days |

**Schedule B, Description of Processing**

| Field | Details |
|---|---|
| Subject matter | |
| Duration | |
| Nature of processing | |
| Purpose | |
| Processing operations | |
| Categories of data subjects | |
| Categories of personal data | |
| Special categories (Art 9) | |
| Criminal data (Art 10) | |
| Processing locations | |

**Schedule C, Technical and Organizational Measures**

| Domain | Measures |
|---|---|
| Access control | |
| Encryption/pseudonymization | |
| Logging/monitoring | |
| Availability/resilience | |
| Incident response | |
| Testing/evaluation | |
| Physical security | |

**Schedule D, Audit/Certification Evidence**

| Evidence | Date | Scope | Reference |
|---|---|---|---|
| ISO 27001 | | | |
| SOC 2 Type II | | | |

## Pitfalls

- **No absolute security promises.** Use "appropriate" measures per Art 32; tie to risk profile.
- **Special categories / children's data** require heightened safeguards and stricter access controls.
- **Missing transfer basis is a blocker.** If any non-EEA transfer occurs, specify the mechanism and attach SCCs or equivalent before finalizing.
- **Schedule consistency.** Keep schedules aligned with DPA body text; ensure sub-processor lists are current.
- **Order of precedence.** Data protection terms must prevail over conflicting service agreement terms.
- Mark uncertain legal citations with `[VERIFY]`.

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
