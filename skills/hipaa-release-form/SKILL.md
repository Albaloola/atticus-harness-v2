---
name: hipaa-release-form
language: en
description: Atticus UK/Scots legal skill for hipaa-release-form. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# UK Health Records Access Authorisation [SCOTS]

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

Drafts an authorisation for designated recipients to obtain health records and personal data for healthcare decision-making, compliant with UK GDPR, DPA 2018, and Access to Health Records Act 1990.

> **Scotland/UK Adaptation:** This skill has been converted from US HIPAA (45 CFR 164.508) to UK health records access under the Data Protection Act 2018, UK GDPR, and Access to Health Records Act 1990. There is no direct equivalent to HIPAA authorisation in UK law; health records access by agents is governed by the DPA 2018 (subject access rights), the Access to Health Records Act 1990 (for deceased individuals), and common law of confidentiality. Scotland uses the Adults with Incapacity (Scotland) Act 2000 for welfare attorneys.

## Key Differences from US

| US (HIPAA) | UK/Scotland |
|-----------|-------------|
| HIPAA authorisation (45 CFR 164.508) | DPA 2018 subject access request / explicit consent |
| Covered entities | Data controllers (healthcare providers, NHS boards) |
| PHI | Personal data / health data (special category) |
| HIPAA Notice of Privacy Practices | Privacy notice (UK GDPR Art 13/14) |
| No HIPAA equivalent needed for welfare attorney | Adults with Incapacity (Scotland) Act 2000 - welfare attorney has statutory authority |
| 42 CFR Part 2 (substance use) | No direct equivalent; confidentiality via DPA/clinical guidelines |
| HHS OCR enforcement | ICO (Information Commissioner's Office) enforcement |

## Prerequisites

1. Patient/Data Subject legal name, DOB, CHI number (Scotland)
2. Authorised recipient(s) - full names, roles, contact details
3. Disclosing party(ies) - named GP practice, NHS board, or private provider
4. Data scope and date range, including any specially protected categories
5. Purpose of disclosure aligned with welfare attorney duties
6. Expiration date or event
7. Welfare Power of Attorney or other authority documentation (if patient lacks capacity)

## Required Elements under UK Data Protection Law

| Element | Content |
|---|---|
| Patient identification | Full name, DOB, CHI number, address |
| Disclosing parties | Specific GP, NHS board, private provider, or class |
| Recipients | Names and roles of welfare attorney/carer/representative |
| Description of data | Record types and date range |
| Lawful basis for processing | Consent (Art 6(1)(a) + Art 9(2)(a)) or legal obligation |
| Expiration | Date or event |
| Signature | Patient or welfare attorney/personal representative |
| Right to withdraw | Notice that consent can be withdrawn at any time |

## Sensitive Information Addenda

- **Mental health records** - Mental Health (Care and Treatment) (Scotland) Act 2003 restrictions may apply
- **HIV/STI testing** - Additional confidentiality obligations under GMC/GDC guidance
- **Genetic information** - Additional protections under DPA 2018
- **Children/Family court records** - Separate access provisions apply
- **Adults with Incapacity** - AWIA (Scotland) 2000 governs access via welfare attorney

## Template

AUTHORISATION FOR ACCESS TO HEALTH RECORDS, UK DATA PROTECTION

1. Patient (Data Subject)
   Name: [PATIENT NAME]
   DOB: [DOB] / CHI: [CHI NUMBER]
   Address: [ADDRESS]

2. Data Controller(s) Authorised to Disclose
   [NAME OF GP PRACTICE / NHS BOARD / PRIVATE PROVIDER]
   [Or: "Any GP practice, NHS board, hospital, clinic, or private healthcare provider that has provided care to me."]

3. Person(s) Authorised to Receive
   [AGENT NAME], Welfare Attorney / Representative, [ADDRESS/PHONE/EMAIL]

4. Description of Data to Be Disclosed
   [ ] All of my health records and personal data, including complete medical record.
   [ ] Only the following: [SPECIFY]
   Date range: [FROM] to [TO]

5. Lawful Basis
   This authorisation provides explicit consent under Article 6(1)(a) and Article 9(2)(a) of the UK GDPR for the processing of personal data and special category health data. Purpose: to enable my designated representative to make informed healthcare decisions.

6. Expiration
   This authorisation expires on [DATE] or upon [EVENT], unless revoked earlier.

7. Right to Withdraw Consent
   I understand I may withdraw this consent at any time. Withdrawal will not affect lawfulness of processing carried out before withdrawal.

8. Access Rights
   I understand I have the right to request access to my personal data under Article 15 UK GDPR, and this authorisation supplements but does not replace that right.

9. Signature
   Patient Signature: ______________________  Date: ______________
   Welfare Attorney / Representative (if applicable): ______________________  Date: ______________

---

**Scotland/UK Adaptation notes:**
- HIPAA (45 CFR 164.508) → DPA 2018 / UK GDPR explicit consent + subject access, HHS → ICO
- 42 CFR Part 2 → No direct equivalent, State-specific → No equivalent; Scotland-specific: AWIA 2000
- $ → £
- HIPAA BAAs → DPA 2018 data processing agreements

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
