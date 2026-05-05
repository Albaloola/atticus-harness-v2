---
name: certificate-of-withdrawal-foreign-corp
language: en
description: Drafts a Certificate of Withdrawal for a foreign corporation surrendering its authority to transact business in a US state. Use when a foreign corporation is withdrawing its certificate of authority, ceasing in-state operations, or completing dissolution in a non-home jurisdiction. [Atticus UK/Scots refined]
tags:
- corporate, drafting, research, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Certificate of Withdrawal, Foreign Corporation

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

Statutory filing by which a foreign corporation surrenders its authority to transact business in a US state jurisdiction.

## Required Inputs

1. **Corporation details** - legal name (exactly as on certificate of authority), home state/country, incorporation date
2. **Certificate of authority** - authorization date, certificate number (if applicable), any DBAs
3. **Registered agent** - name and address in the withdrawal state
4. **Tax clearance status** - whether the state requires a clearance certificate or final returns
5. **Authorizing resolution** - board consent or resolution authorizing withdrawal
6. **Withdrawal state** - requirements vary significantly by jurisdiction

## Workflow

### 1. Gather & Verify State Requirements

Check the withdrawal state's Secretary of State website and statutes. Do not assume uniformity across states.

### 2. Draft Certificate

**Header:** "Certificate of Withdrawal of [Corporation Name]" - identify filing jurisdiction and home jurisdiction.

**Corporate identity block:**

| Field | Source |
|---|---|
| Full legal name | Exactly as on certificate of authority |
| Home jurisdiction | State/country of incorporation |
| Authorization date | Date authority was granted |
| Certificate of authority no. | If required by state |
| Principal office address | Home jurisdiction address |
| Registered agent | Name and street address in withdrawal state |

**Withdrawal declarations** (adapt to state-specific statutory language):

- Corporation surrenders its certificate of authority in [State]
- Corporation has ceased transacting business in [State]
- All state taxes and fees paid or provided for, All known debts/obligations in [State] satisfied or provision made, Corporation consents to service of process for proceedings arising from in-state business, designating [Secretary of State / specific agent]

> Some states require verbatim statutory language for service-of-process consent, verify before finalizing.

**Effective date:** Upon filing (default) or a future date if permitted by state law.

**Execution block:** Signature line for authorized officer, typed name/title, date, notarization block (if required), corporate seal/attestation (if mandated).

### 3. Assemble Attachments

| Attachment | When Required |
|---|---|
| Tax clearance certificate | Many states (CA, NJ, PA, etc.) |
| Home-state good standing certificate | Some states |
| Evidence of publication | Rare, states requiring newspaper notice |
| Final tax returns / annual reports | Varies |

Reference each attachment by label in the certificate body.

## Pitfalls & Checks

- **Name match** - corporate name must exactly match the original certificate of authority throughout
- **Tax clearance lead time** - some states (e.g., CA) have lengthy clearance timelines; advise early
- **Liability survives withdrawal** - note in any cover memo that existing obligations are not extinguished
- **Cite statutes** - reference the applicable withdrawal statute where required (e.g., "Pursuant to [State] Corp. Code § [VERIFY]")
- Use `[VERIFY]` for any statutory citation not confirmed against current law, Format for direct submission to Secretary of State (standard filing margins/spacing)

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
