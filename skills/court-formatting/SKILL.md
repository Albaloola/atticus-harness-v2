---
name: court-formatting [SCOTS]
language: en
description: '[SCOTS] Standardises Scottish court-filing formatting for initial writs, summonses, defences, motions, and notes of argument. Enforces caption/case heading structure, margins, fonts, spacing, pagination, section numbering, and e-filing constraints for the Court of Session, Sheriff Court, and Sheriff Appeal Court. Use when formatting Scottish court documents, preparing pleadings, or validating compliance with the Rules of the Court of Session 1994, Sheriff Court Ordinary Cause Rules, Simple Procedure Rules, or Acts of Sederunt. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Scottish Court Document Formatting [SCOTS]

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

Apply court formatting requirements using a rules-first workflow. The Rules of the Court of Session 1994 ("RCS"), Sheriff Court Ordinary Cause Rules ("OCR"), Summary Cause Rules, Simple Procedure Rules, and the relevant Act of Sederunt always control over baselines.

## Prerequisites

Gather before starting:

1. Court, division (e.g. Outer House, Sheriffdom), and governing rule set (RCS 1994 / OCR / Summary Cause / Simple Procedure)
2. Chamber roll number / case reference and full party names
3. Document type (initial writ, summons, defences, minute, motion, note of argument, etc.)
4. Sheriff / Lord Ordinary's individual practice notes or directions (if any)
5. Scottish Courts and Tribunals Service (SCTS) e-filing portal requirements and file-size limits
6. Required certificates (service, compliance, etc.) or schedule

## Core Workflow

### Step 1 - Identify Controlling Sources

Collect in priority order:

1. Sheriff / Lord Ordinary's individual practice notes or directions
2. Local rules for the Sheriffdom or Court of Session practice notes
3. General rules: RCS 1994 / OCR / Summary Cause Rules / Simple Procedure Rules
4. Court-provided forms or templates (SCTS website)
5. E-filing (Civil Online / SCTS Portal) requirements

### Step 2 - Apply Baseline Formatting

Apply defaults, then override per the applicable rules:

| Element | Default | Override by |
|---|---|---|
| Paper | A4 (297 × 210 mm) | Applicable rule |
| Margins | Min. 25 mm all sides | Act of Sederunt |
| Font | 12 pt serif (e.g. Times New Roman) | Applicable rule |
| Body spacing | 1.5 line spacing or double-spaced (depending on procedure) | OCR / RCS |
| Pagination | Consecutive page numbers | Applicable rule |
| Paragraph numbering | Arabic numerals, consecutive throughout | RCS r. 3.1(1) / OCR |
| Block quotes | Indented, single-spaced | Applicable rule |
| Footnotes | Single-spaced, same or smaller font | Applicable rule |
| Paper size exception | [SCOTS: A4 is standard, US Letter (8.5 × 11 inch) is not used] | N/A |

### Step 3 - Build the Case Heading / Instance [SCOTS: Known as the "Instance" not "Caption"]

Required elements (verify each against the court process):

- Court name (full official name, e.g. "IN THE COURT OF SESSION" or "IN THE SHERIFFDOM OF [SHERIFFDOM] AT [SHERIFF COURT]")
- Party names (exactly as on the instance, full names, designations, and addresses)
- Case reference number (chamber roll number)
- Document title (e.g. "INITIAL WRIT FOR THE PURSUER", "DEFENCES FOR THE DEFENDER", "NOTE OF ARGUMENT FOR THE PURSUER")
- [SCOTS: The instance includes parties' full names, addresses, and designations, longer than US captions]

Template (Court of Session):

```
IN THE COURT OF SESSION

[FULL NAME OF PURSUER]
(Pursuer)

     - and -

[FULL NAME OF DEFENDER]
(Defender)

Case No: [YEAR/NO]

[INITIAL WRIT / DEFENCES / NOTE OF ARGUMENT]
```

Template (Sheriff Court):

```
IN THE SHERIFFDOM OF [SHERIFFDOM] AT [SHERIFF COURT]

[FULL NAME OF PURSUER]
(Pursuer)

     - against -

[FULL NAME OF DEFENDER]
(Defender)

[Case No: YEAR/NO]

[INITIAL WRIT / DEFENCES / MOTION / NOTE OF ARGUMENT]
```

### Step 4 - Check Local Variations

Verify each item against the applicable rules:

- [ ] Page limits (and what is excluded) - RCS rr. 22.1 to 22.4 (note of argument: 25 pages unless leave) / OCR
- [ ] Font typeface and minimum size (12 pt minimum for body text)
- [ ] Spacing rules for body, headings, block quotes, footnotes
- [ ] Paragraph numbering, consecutive numbers throughout
- [ ] Signature block format, solicitor's name, firm, address, agent reference
- [ ] Certificate of service content and placement (Form of service / Rule about intimation)
- [ ] Inventory of productions and separation of documents (numbered in sequence)
- [ ] Sist (stay) or timetable orders, any active directions from the court
- [ ] Redaction rules, names of children, confidentiality (Children (Scotland) Act 1995)

### Step 5 - E-Filing Compliance (Civil Online / SCTS Portal)

- [ ] File format: PDF/A as required by SCTS
- [ ] Scanned PDFs are OCR'd (unless court practice note prohibits)
- [ ] File size within portal limits (typically 20 to 30 MB per document); split if needed
- [ ] Document is fully searchable (not image-only scans)
- [ ] Appendices / productions uploaded per portal rules (separate or combined)
- [ ] Privacy redactions applied (Data Protection Act 2018)

### Step 6 - Final Compliance Check

- [ ] Instance matches the court process exactly (names, designations, addresses)
- [ ] Page limits satisfied
- [ ] All required certificates (service, intimation) included in correct form
- [ ] All productions labelled and cross-referenced in the text
- [ ] File name follows SCTS naming convention (case number + document type + date)
- [ ] E-filing requirements satisfied, endorsed via Civil Online

## Common Pitfalls

- **Assuming baselines apply** - Never assume a default format is correct without checking the applicable Act of Sederunt or practice note first.
- **Instance mismatches** - Party names, designations, and addresses must match the court process exactly, do not rephrase or abbreviate official names.
- **Missing certificates** - Omitting certificate of service or intimation is a common reason for rejection.
- **Non-searchable PDFs** - Ensure all PDFs are text-searchable unless the court explicitly forbids OCR.
- **Unclear requirements** - If any formatting rule is ambiguous, flag it and request the exact rule citation before proceeding.
- **[SCOTS: Key difference, Scottish court documents are drafted as formal "condescendences" (statements of fact) with pleas-in-law (propositions of law). This is structurally different from US "counts" or "causes of action."]**
- **[SCOTS: No US-style civil cover sheet. The initial writ / summons serves as both the originating document and the statement of claim.]**
- **[SCOTS: Productions (exhibits) are lodged separately, not attached to the pleading. Always lodge an inventory of productions with the documents themselves.]**

## Scotland/UK Adaptation [SCOTS]

This skill has been adapted from US court document formatting (FRCP, local US district rules, US e-filing) to Scottish court document formatting.

**Key adaptations:**
- Replaced "Caption" with "Instance" (Scottish legal terminology).
- Replaced "Plaintiff/Defendant" with "Pursuer/Defender".
- Replaced FRCP/FRAP with Rules of the Court of Session 1994 and Sheriff Court Ordinary Cause Rules.
- Replaced US local district rules with Sheriffdom-specific local rules and Act of Sederunt.
- Replaced US Letter (8.5 × 11") with A4 (297 × 210 mm) - UK standard paper size.
- Replaced US e-filing portals (PACER, CM/ECF) with SCTS Civil Online portal.
- Replaced US civil cover sheet with formal instance and condescendences.
- Replaced exhibits/lodgments with Scottish "productions" system (lodged separately with inventory).
- Replaced certificate of service per FRCP with Scottish intimation/service rules.
- Replaced US-style "Counts" with Scottish "Condescendences" + "Pleas-in-Law".
- Replaced federal vs. state venue considerations with Court of Session vs. Sheriff Court jurisdiction (including exclusive competence).
- Replaced US privacy rules (FRCP 5.2) with Scottish rules (Children (Scotland) Act 1995, Contempt of Court Act 1981).
- Replaced US page limits with Scottish page limits (RCS 22.1 to 22.4, OCR).
- Preserved the formatting methodology and structural template.

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
