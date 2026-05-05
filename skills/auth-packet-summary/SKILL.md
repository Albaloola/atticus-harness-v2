---
name: auth-packet-summary
language: en
description: Atticus UK/Scots legal skill for auth-packet-summary. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Authorisation Packet Summary

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

Validates the essential client authorisation forms and produces a checklist plus formal memorandum confirming the firm's authority to request third-party records.

## Prerequisites

- All client-signed authorisation forms uploaded to the matter, Client full legal name and case/matter number, Firm style guide (letterhead, fonts, margins) for PDF output

## Required Forms

| Form | Purpose |
|------|---------|
| Retainer/Solicitor Fee Agreement | Establishes solicitor-client relationship and fee structure |
| Medical Record Release (GDPR/DPA 2018 compliant) | Authorises healthcare providers to disclose confidential medical information |
| Insurance Communication Authorisation | Permits insurer contact and claims file access |
| Wage & Employment Record Release | Allows access to employment history, wages, personnel files |

## Workflow

### 1. Extract

For each form, extract:

- Client full legal name (as printed)
- Case/matter number, Execution date, Authorised record categories and temporal scope, Named entities/providers, Witness signatures (Scotland: one witness sufficient for most documents; certain documents may require notary public)

### 2. Validate

Assign one status per form:

| Status | Criteria |
|--------|----------|
| **Complete and Valid** | All required elements present, signatures, dates, scope, mandatory fields |
| **Received but Deficient** | Form present; specify missing elements exactly |
| **Not Received** | Form absent from case file |

Per-form checklist:

- [ ] Client signature present and legible
- [ ] Date fully completed
- [ ] Mandatory fields filled (name, DOB, case/matter, scope)
- [ ] Witness signature present if required by Scots law practice
- [ ] No expiry issues under applicable data protection regulations

### 3. Cross-Reference

Compare across all four forms for consistency in client name spelling, case/matter number, and date ranges. Flag all discrepancies.

### 4. Compile Checklist

Produce a table with columns: Authorisation Type, Status, Execution Date, Authorised Entities, Scope Limitations, Notes/Deficiencies.

For deficient or missing forms, specify exact corrective action (e.g., "Missing client signature on page 2").

### 5. Draft Memorandum

Write a formal memo containing:

1. **Status statement** - As of [date], whether all authorisations are complete or what remains outstanding
2. **Per-form scope summary** - Each authorisation's scope, noting temporal or entity-specific limitations
3. **Issues** - Name discrepancies, missing signatures, approaching expirations
4. **Conclusion** - Either:
   - "Investigation phase may commence; firm authorised to request records from all identified entities within scope of client consent," OR
   - "Corrective actions required before record requests may proceed" with specifics

Tone: formal, definitive, suitable as permanent case file record.

## Output

1. **Authorisation Checklist** - structured table for case management reference
2. **PDF Memorandum** - firm letterhead, serif 11 to 12pt, 1-inch margins, header with case ID/client/date/subject, footer with page numbers and `PRIVILEGED AND CONFIDENTIAL, LEGAL PROFESSIONAL PRIVILEGE` / `SOLICITOR WORK PRODUCT`, signature lines per firm policy

## Pitfalls

- Never mark "Complete and Valid" unless every required element is confirmed present, If any form is deficient or missing, do **not** authorise commencement of record requests, Note scope limitations prominently, staff requesting records must know consent boundaries, Resolve name-spelling discrepancies by reference to the original document; flag for correction, Scotland does not have the same strict notarisation requirements as some US states; one competent witness (non-party) is generally sufficient, All output is privileged and confidential; transmit only via secure channels

## Scotland/UK Adaptation

This skill has been adapted from US personal injury practice (HIPAA/US privacy law framework) to Scots delict law and UK data protection law.

### Key Adaptations

- **Data protection**: HIPAA replaced by UK GDPR / Data Protection Act 2018 (DPA 2018); medical records access governed by DPA 2018 and Access to Health Records Act 1990
- **Delict not tort**: Personal injury claims proceed under Scots delict law (Law Reform Acts, Damages (Scotland) Act 2011), not US tort system
- **Solicitor-Client relationship**: Retainer agreement governed by Law Society of Scotland practice rules; fee structures differ (no contingency fees in Scotland)
- **Legal Professional Privilege (LPP)**: Replaces US attorney-client privilege and work product doctrine; LPP covers legal advice privilege and litigation privilege
- **Discovery**: Commission and diligence (commission to take evidence, diligence for recovery of documents) replaces US discovery rules
- **No jury trials**: Scottish civil personal injury cases are heard by a judge alone (sheriff or judge of the Court of Session)
- **Witnessing**: Scotland generally requires one competent witness; US notarisation rules for certain medical releases do not apply
- **Court hierarchy**: Sheriff Court (personal injury actions up to £100k) or Court of Session (Outer House, unlimited value); no separate federal/state court split
- **Insurance**: Insurers regulated by FCA/Prudential Regulation Authority, not state insurance commissioners
- **Employment records**: Access governed by DPA 2018 subject access rights and Employment Tribunal rules, not US state-specific employment laws
- **No special damages caps**: Unlike some US states, Scotland does not impose statutory caps on non-pecuniary damages (solatium)
- **Prescription**: Delict claims prescribe after 5 years (Prescription and Limitation (Scotland) Act 1973), not state-specific US statutes of limitation

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
