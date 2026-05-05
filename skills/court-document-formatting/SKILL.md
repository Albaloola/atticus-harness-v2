---
name: court-document-formatting
language: en
description: 'Builds a filing-ready formatting blueprint for Scottish civil court pleadings, motions, and written submissions by applying caption, spacing, pagination, certificate, and e-filing requirements with court-specific and procedural rule overrides. Use when preparing court documents for Scottish courts, checking filing compliance, generating exhibit packages, or converting drafts for e-filing. Triggers: court filing format, caption, page limits, line numbers, service certificate, PDF/A, rules of court, sheriff''s directions. [Atticus UK/Scots refined]'
tags:
- SCOTS, drafting, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Court Document Formatting (Scotland)

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

Produces a court-compliance format map for Scottish civil litigation filings by layering statutory rules, Acts of Sederunt, local sheriffdom practice notes, and judge-specific directions.

## Quick Start

Gather before drafting:

1. **Court**: Sheriff Court (name, sheriffdom) or Court of Session (Outer House / Inner House), assigned judge/sheriff, case number format.
2. **Rules**: Ordinary Cause Rules (OCR) or Simple Procedure Rules (SPR) for Sheriff Court; Court of Session Rules (CSR) for Court of Session.
3. **Document class**: initial writ, defences, minute, motion, note of argument, or petition.
4. **Filing channel**: paper, Civil Online (Scottish e-filing), or e-mail (as permitted).
5. **Ancillaries**: certificate of service format, exhibit numbering, page limits.

## Core Workflow

### 1. Build the Rules Stack

Apply layers in order; each overrides the one above:

| Priority | Source | Controls |
|---|---|---|
| 1 (lowest) | Primary legislation / Act of Sederunt | Paper, margins, spacing, font, headings |
| 2 | Sheriffdom practice notes | Added or overriding formatting constraints |
| 3 | Sheriff/judge directions | Typography, binders, appendices |
| 4 (highest) | Case-specific order | Chamber-specific directives |

**Conflict rule**: most specific source wins, case-specific order > sheriffdom practice note > Act of Sederunt > primary legislation.

### 2. Apply Base Scottish Defaults

[SCOTS: Note: Scottish court formatting differs materially from US federal defaults. The following are general defaults; always verify against the current Act of Sederunt for the specific court.]

| Element | Default (Sheriff Court OCR) | Default (Court of Session) |
|---|---|---|
| Paper | A4 (210 × 297 mm) | A4 (210 × 297 mm) |
| Margins | 1 in (25 mm) all sides | 1 in (25 mm) all sides |
| Font | 12 pt serif (Times New Roman or equivalent) | 12 pt serif |
| Body spacing | Double-spaced | Double-spaced (Inner House may vary) |
| Page numbers | Consecutive, in footer | Consecutive, in footer |
| Line numbers | Not typically required | For written arguments only |
| Signature block | Solicitor name, firm, date | Counsel name, Faculty of Advocates |
| Binding | Not bound (punched or stapled) | Not bound |

### 3. Set the Caption

#### Sheriff Court (Ordinary Cause):

```text
SHERIFFDOM OF [SHERIFFDOM] AT [SHERIFF COURT DISTRICT]

[PURSUER(S)],
    Pursuer(s)
v.
[DEFENDER(S)],
    Defender(s)

[CAUSE REFERENCE NUMBER]

[NAME OF DOCUMENT] (e.g., INITIAL WRIT / DEFENCES / MINUTE)
```

#### Court of Session:

```text
OUTER HOUSE, COURT OF SESSION

[PURSUER(S)],
    Pursuer(s)
v.
[DEFENDER(S)],
    Defender(s)

[SESSION CASE NUMBER]

[NAME OF DOCUMENT]
```

### 4. Verify Local Variations

| Topic | Check |
|---|---|
| Page/word limits | By document type (see applicable rules / practice notes) |
| Font/spacing exceptions | Alternate requirements from practice notes |
| E-filing specs | Civil Online requirements: file size, OCR, PDF format |
| Certificate of service | Title, recipient list, method, proof language |
| Exhibits | Labelling convention, sequence, indexing, number/staple rules |

### 5. Filing Preparation Checklist

```
- [ ] Caption exactly matches instance of the cause
- [ ] Case reference / cause number correct
- [ ] Party designations (Pursuer/Defender) correct
- [ ] Paragraph, page, and exhibit numbering verified
- [ ] Footnote, font, and style consistency validated
- [ ] Remit or competency confirmed (Sheriff Court vs. Court of Session)
- [ ] Certificate of service included with correct recipients
- [ ] Pre-check summary generated (base rules + practice note overrides + pending items)
- [ ] Final PDF exported (A4 format, searchable text)
- [ ] Correct filing method identified (Civil Online / in-person / email)
```

## Pitfalls

- **Never assume judge/sheriff preferences** - always pull from current practice notes
- **Stop if a required rule is unavailable** - request verification before finalising
- **Do not omit certificate of service** or filing-deadline data during format conversion
- **Scanned documents**: require OCR before e-filing when the court requires searchable text
- **Keep overrides scoped** - apply style changes only at the governing layer
- **Always use A4 paper** (not US Letter) - this is a common error for US-trained practitioners
- **Simple Procedure** has different formatting rules, verify SPR separately if the claim is under £5,000

## Scotland/UK Adaptation

This skill has been adapted from a US federal litigation formatting blueprint to the Scottish civil court system.

### Key Differences

| US Concept | Scottish Equivalent |
|---|---|
| FRCP (Federal Rules of Civil Procedure) | Ordinary Cause Rules (OCR) / Court of Session Rules (CSR) |
| 8.5 × 11 in paper | A4 (210 × 297 mm) |
| Plaintiff / Defendant | Pursuer / Defender |
| Complaint (initiating document) | Initial Writ (Sheriff Court) / Summons (Court of Session) |
| Answer / Response | Defences / Notice of Intention to Defend |
| Motion | Motion (Same term, different rules) |
| CM/ECF e-filing | Civil Online (Scottish e-filing system) |
| Certificate of Service | Certificate of Service / Execution of Service |
| Local rules | Acts of Sederunt / Sheriffdom Practice Notes |
| Trial (civil) | Proof / Proof before Answer |
| Appeal | Appeal / Reclaiming Motion (Court of Session) |

### Applicable Rules, Ordinary Cause Rules 1993 (Schedule to Sheriff Courts (Scotland) Act 1907) [VERIFY current version]
- Act of Sederunt (Simple Procedure) 2016
- Court of Session Rules 1994 [VERIFY current version]
- Sheriffdoms Practice Notes (per sheriffdom: Glasgow & Strathkelvin, Grampian Highland & Islands, Lothian & Borders, North Strathclyde, South Strathclyde Dumfries & Galloway, Tayside Central & Fife)

### Forms
The Scottish Courts and Tribunals Service provides current practice notes and forms at www.scotcourts.gov.uk.

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
