---
name: discovery-verification-audit
language: en
description: Atticus UK/Scots legal skill for discovery-verification-audit. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Disclosure/Intimation Verification and Service Audit, Scotland [SCOTS]

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

Audit covering sufficiency of specification of documents responses, signature authority, execution, deadline computation, and defect risk assessment under Scots civil procedure rules.

> **Scotland/UK Adaptation:** This skill has been converted from US federal/state discovery verification (FRCP 33(b)(3), CCP 2015.5) to Scottish civil procedure. There is no direct US-style discovery system in Scotland. Instead, Scotland uses specification of documents, commission and diligence, and intimation procedures under the Ordinary Cause Rules (OCR 1993), Simple Procedure Rules, and Court of Session Rules. Verification in Scotland uses the form of oath or affirmation.

## Key Differences

| US Concept | Scottish Equivalent |
|-----------|-------------------|
| FRCP discovery | Specification of documents / Commission and Diligence |
| Verification under penalty of perjury | Oath / Affirmation / Affidavit |
| FRCP 33(b)(3) party verification | Affidavit by party (or authorised agent) |
| 28 U.S.C. § 1746 perjury clause | Oaths Act 1978 / Administration of Justice Act |
| Federal Rules | Ordinary Cause Rules (OCR), Simple Procedure Rules |
| Motion to compel | Enforce specification / Court order for production |
| Service (mailbox rule extensions) | Intimation rules under OCR / CPR |

## Prerequisites

1. **Court papers** - specification of documents, initial writ, defences, or other pleadings
2. **Affidavits/verification** - sworn statements as lodged
3. **Proof of intimation/service** - recorded delivery receipts, sheriff officer certificates, email confirmations
4. **Forum identification** - Sheriff Court (Ordinary Cause / Simple Procedure), Court of Session, or Employment Tribunal (Scotland)
5. **Deadline modifiers** - court orders, extensions, or praecipe variations
6. **Party identity** - individual, partnership, company, public body; signer's authority

## Step 1: Audit Oath/Affirmation Sufficiency

| Element | Required | Present | Notes |
|---|---|---|---|
| Declaration statement is true to best of knowledge | ✓ | | |
| "Sworn" or "affirmed" language | ✓ | | |
| Stated before whom sworn (witness/commissioner/solicitor) | ✓ | | |
| Signed by party (or authorised representative) | ✓ | | |
| Date of signing | ✓ | | |
| Affidavit references specific document/action | ✓ | | |

**Oath standards (Scotland):**
- Oaths Act 1978 - form of oath, Administration of Justice Act 1977 - alternative forms, Affidavit must be sworn before notary public, justice of the peace, or commissioner for oaths (solicitor)

## Step 2: Check Signature Authority

| Party Type | Required Signer |
|---|---|
| Individual | The individual party |
| Company | Director, secretary, or authorised agent |
| Partnership | Partner or authorised agent |
| Local Authority | Proper officer or authorised official |
| Public body | Authorised officer |

## Step 3: Audit Intimation/Service

Required elements:
- [ ] Date of intimation stated
- [ ] Method of intimation identified (recorded delivery, sheriff officer, email if authorised)
- [ ] Name and address of each recipient
- [ ] Server's identity and signature
- [ ] All parties accounted for

## Step 4: Compute Deadlines

Show each step explicitly:

| Event | Days | Rule |
|---|---|---|
| Trigger date (date of intimation) | - | Day 0 |
| Baseline response period (defences/notice of intention to defend) | 21 days | OCR Rule 6.1 |
| Simple Procedure response | 21 days | SPR 4.1 |
| Court of Session defences | 21 days | CS RCS 7.4 |
| Weekend/holiday rollover | + | Court holidays per OCR |
| Service method extension | Variable | Recorded delivery + 2 days postal delay |

## Step 5: Defect Risk Assessment

| Defect | Severity | Consequence |
|---|---|---|
| No oath/affirmation where required | **Fatal** | Document may be treated as not lodged |
| Affidavit not sworn before commissioner | **Fatal** | Not admissible |
| Wrong signer (counsel where party required) | **Fatal** | Invalid |
| Sworn after deadline | **High** | Late; decree may have been granted |
| Missing date | **Technical** | Curable |
| Missing all parties on service list | **High** | Intimation not complete |

---

**Scotland/UK Adaptation notes:**
- FRCP 33(b)(3) → OCR / CS Rules for specification of documents
- 28 U.S.C. § 1746 → Oaths Act 1978
- Interrogatories → Written questions (rare; use commission procedure)
- Motion to compel → Enforce specification / motion for commission, Service via ECF → Intimation by recorded delivery / sheriff officer, California CCP 2015.5 → No equivalent (Scotland uses Oaths Act 1978)
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
