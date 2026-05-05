---
name: appellate-formatting-certification
language: en
description: Generates appellate-brief/preface TOC, TOA, and format compliance statement for Scottish reclaiming motions (Inner House), Sheriff Appeal Court, and UK Supreme Court. Triggers on TOC/TOA rebuilds, format compliance certification, or final brief formatting before lodging. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, brief, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

[SCOTS] This skill has been adapted for Scotland/UK appellate practice. US terminology has been replaced with Scots equivalents. See "Scotland/UK Adaptation" at the end for key differences.

# Appellate TOC/TOA and Format Compliance (Scotland/UK)

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

Produce lodging-ready Table of Contents, Table of Authorities, and format compliance statement tied to the final paginated reclaiming note/note of appeal and governing rules.

## Quick Start

Gather before drafting:

| Input | Required | If missing |
|---|---|---|
| Court and document type | Yes | Ask before drafting |
| Final paginated PDF | Preferred | Use `[__]` placeholders; label DRAFT |
| Page or word count | Yes (per court rules) | Insert placeholder; require solicitor count |
| Excluded sections list | Yes | Require rule text; never assume |
| Local rules / practice notes | Yes | Request rule text or cite with [VERIFY] |

[SCOTS: Note] Scottish appellate practice differs from US federal practice. The Court of Session Inner House uses **reclaiming motions** (not appeals). The Sheriff Appeal Court hears appeals from sheriff courts. The UK Supreme Court hears appeals from the Inner House. Page limits (not word counts) are the primary constraint in Scottish courts. See "Rule Anchors" below.

## Rule Anchors

Verify all cites against current rules before drafting.

| Forum | Core anchors |
|---|---|
| Court of Session (Inner House) - reclaiming motions | RCS Ch 38 (Reclaiming), Chapter 40 (Appeals from Sheriff Court to Court of Session) [VERIFY] |
| Sheriff Appeal Court | Sheriff Appeal Court Rules (Act of Sederunt) [VERIFY] |
| UK Supreme Court | UK Supreme Court Rules 2009 (SI 2009/1603), Parts 28 to 30 [VERIFY] |
| Court of Session (Outer House) appeals | RCS Ch 41 [VERIFY] |

[SCOTS: Note] There is no direct equivalent to the US "Certificate of Compliance" (FRAP 32(g)). Scottish courts specify format requirements (page limits, line spacing, font size) in the rules and practice notes. A **Format Compliance Statement** on the cover page or in the preface is the closest equivalent, confirming compliance with page limits and formatting rules. Word-count certifications are not standard but may be required for certain UK Supreme Court filings.

## Core Workflow

1. **Confirm rules** - Identify governing rules and any court order modifying limits.
2. **Build heading map** - Extract headings from document; preserve exact text, capitalization, numbering.
3. **Generate TOC** - Map headings to final page numbers. If unpaginated, use `[__]` and label `DRAFT, PAGE NUMBERS to be determined`. Include all forum-required sections. Use Roman/Arabic numbering consistent with the document.
4. **Generate TOA** - Extract all citations from the document (including footnotes) and sort by category:
   - **Cases** - alphabetical by first party name; use Scottish/UK neutral citation where available (e.g. [2024] CSIH 12)
   - **Constitutional Provisions** - UK legislation or retained EU law
   - **Statutes** - Acts of the UK Parliament or Scottish Parliament, by year then section
   - **Rules** - Rule number (RCS, OCR, Act of Sederunt)
   - **Other Authorities** - alphabetical by author/title
5. **Compute page count** - Document total pages, check against page limits (RCS/SA Court rules). [SCOTS: Note] Scottish courts generally use page limits rather than word counts. RCS Ch 38 and Sheriff Appeal Court rules specify maximum page lengths for notes of argument and reclaiming notes. For UK Supreme Court, check Parts 28 to 30 for page/word limits.
6. **Draft format compliance statement** - Tie language to confirmed rules. Template:

> Compliance with [Rule cite] [VERIFY]:
>
> This reclaiming note complies with the page limit of [Rule cite] [VERIFY] because it contains [____] pages, excluding the cover page, tables, and appendices [specify exclusions per rules].
>
> This document complies with the typeface and formatting requirements of [Rule cite] [VERIFY] because it has been prepared in [Font Name], [Font Size]-point, with [line spacing]-line spacing and [margin dimensions]-[units] margins.

7. **Final QC** - Run the checklist below against the final PDF.

## Final QC Checklist

- [ ] TOC headings match document verbatim
- [ ] TOC page numbers match final PDF
- [ ] TOA entries match document citations; page references correct
- [ ] Page count matches source document used for PDF
- [ ] Format compliance statement cites correct rule, states actual page count and formatting parameters
- [ ] If within 10% of page limit, flag for trimming or seek leave to exceed limit

## Pitfalls and Checks

- **Never fabricate** page numbers, page counts, or citations.
- **Never certify** compliance without a confirmed page count and formatting specs.
- **TOA integrity** - Do not add or fix citations absent from the document. Flag incomplete citations for solicitor review. Avoid "passim" unless forum permits.
- **UK Supreme Court filings** - Check Parts 28 to 30 of UK Supreme Court Rules; page/word limits may differ from Court of Session. [VERIFY]
- **Solicitor review required** - All counts, citations, and compliance statements must be independently verified before lodging.
- **Confidentiality** - Exclude sealed or sensitive data unless explicitly authorised.
- **Neutral citation format** - Scottish cases use neutral citation (e.g. [2024] CSIH 12, [2024] SLT 123). Use OSCOLA citation format consistently.

[SCOTS: Note] There is no "Rule 37 certificate" equivalent in Scottish appellate practice. If someone requests a formatting certificate with a US rule citation, clarify the correct Scottish rule basis.

## Scotland/UK Adaptation

This skill has been adapted from a US federal appellate formatting certification (FRAP 28, 32) model to a Scottish/UK appellate practice framework.

### Key Differences

| US Term | Scotland/UK Equivalent |
|---------|----------------------|
| FRAP 28, 32 | RCS Ch 38 (Reclaiming) / Sheriff Appeal Court Rules / Act of Sederunt |
| US Circuit Courts of Appeals | Inner House of Court of Session / Sheriff Appeal Court |
| US Supreme Court | UK Supreme Court (formerly House of Lords) |
| Certificate of Compliance (FRAP 32(g)) | No direct equivalent, use Format Compliance Statement on cover page or preface |
| Table of Contents / Table of Authorities | Required in Court of Session reclaiming motions (RCS Ch 38); follow rules |
| Word count limits | Page limits standard in Scottish courts; UK Supreme Court has both |
| Bluebook citation | OSCOLA (Oxford Standard for Citation of Legal Authorities) |
| Appeal / Appellant | Reclaiming motion / Reclaimer (Inner House); Appeal / Appellant (Sheriff Appeal Court, UKSC) |
| Appellee | Respondent |
| Brief | Note of argument / Written submissions / Reclaiming note |
| Filing | Lodging |
| Motion | Application / Motion (Scottish distinction, motions in Outer House; applications in Inner House) |

### Statutory Framework

- **Court of Session Inner House (Reclaiming)** : RCS Chapter 38
- **Sheriff Appeal Court**: Act of Sederunt (Sheriff Appeal Court Rules)
- **Appeals from Sheriff Court to Court of Session**: RCS Chapter 40
- **UK Supreme Court**: UK Supreme Court Rules 2009, Parts 28 to 30

### Relevant Forms (scots-forms/)

Documents in the companion `scots-forms/` directory:

- `reclaiming-note-cover-template.md` - formal cover page for Court of Session reclaiming motion
- `note-of-argument-formatted-template.md` - note of argument with TOC/TOA (Inner House)
- `format-compliance-statement-template.md` - format compliance statement for Scottish courts
- `toc-toa-template-scots.md` - TOC/TOA layout for Scottish reclaiming notes
- `sheriff-appeal-note-template.md` - Sheriff Appeal Court note of appeal
- `uksc-formatted-case-template.md` - UK Supreme Court written case formatting
- `format-compliance-uksc-template.md` - format compliance statement for UK Supreme Court

### Practitioner Notes

1. **Page limits not word counts**: Scottish courts primarily use page limits. RCS 38 (reclaiming) specifies maximum pages for notes of argument (check current practice note for exact limit, typically 25 to 30 pages). Sheriff Appeal Court has its own limits. UK Supreme Court rules may specify both page and word limits.
2. **No Certificate of Compliance**: There is no Scottish equivalent of FRAP 32(g) Certificate of Compliance. Instead, a brief format compliance statement on the cover page or in a preface is sufficient, confirming compliance with the relevant rule's page limit and formatting requirements.
3. **OSCOLA citation**: All citations should follow OSCOLA (4th edn). Scottish cases use neutral citation format: [Year] CSIH Number for Inner House, [Year] CSOH Number for Outer House.
4. **TOC/TOA**: Required for longer reclaiming notes and notes of argument. Check current practice notes for format requirements, some judges issue individual guidance.
5. **Shepherd up**: Scottish courts require that reclaiming notes are "shepherd up" - i.e., the interlocutor being reclaimed against must be included. Include appendices as required.
6. **Verification of page limits**: Page limits can be modified by practice note or individual judge's direction. Always verify the current limit before finalising.

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
