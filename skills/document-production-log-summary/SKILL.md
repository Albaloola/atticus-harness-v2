---
name: document-production-log-summary
language: en
description: Generates a structured log and strategic summary of opposing-party document productions in Scottish civil litigation. Categorises by type, date, custodian, and relevance; flags hot documents; tracks privilege assertions; identifies production gaps. Use when organising productions following a specification of documents / commission and diligence, surfacing critical evidence, assessing completeness, or supporting procedural motions. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Document Production Log & Summary

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

Transforms raw productions into an organised inventory with strategic analysis, hot document flags, privilege tracking, and gap identification.

## Prerequisites

1. **Production materials** - all recovered documents with page numbering assigned
2. **Specification of documents / Commission and diligence** - the court order or specification the production answers
3. **Case initial writ or summons & procedural rules** - any provisions governing format or tracking
4. **Producing party's response** - including any objections to the specification and privilege claims

## Output Structure

### 1. Production Header

| Field | Detail |
|---|---|
| Case caption | Full parties + designations |
| Case number / Court | Court reference no., jurisdiction (Sheriff Court / Court of Session) |
| Producing party | Name + solicitor / counsel contact |
| Specification answered | Specification of documents date / Commission and diligence interlocutor |
| Date received | DD/MM/YYYY |
| Production format | Native / PDF; metadata preserved? |
| Page range | e.g., DEF000001 to DEF004872 |
| Total docs / pages / data volume | Aggregate counts |
| Objections | Summarise from any written response |

### 2. Document Inventory

| Page No. | Date | Type | Author | Recipient(s) | Custodian | Brief Description | Relevance Category | Priority |
|---|---|---|---|---|---|---|---|---|
| DEF000001 | | Email | | | | | | High/Med/Low |

**Document types:** Emails, contracts, financial records, internal memoranda, reports, meeting minutes, text messages / chat logs, photographs / multimedia.

**Relevance categories** (map to disputed issues): Breach / performance, notice / knowledge, damages / valuation, causation, credibility / impeachment, affirmative defences.

### 3. Hot Documents

For each flagged document:

```
Page No.: _______
Date: _______
Document: [Type, Author to Recipient]
Why Critical: [Contradicts position X / Establishes knowledge of Y / Corroborates claim Z / Impeaches witness W]
Recommended Action: [Designate as production / Depose custodian / Use in summary decree motion]
```

**Flag criteria:**
- Contradicts opposing party's stated position, Establishes knowledge, intent, or notice, Corroborates liability or damages theory, Undermines witness credibility, Creates or breaks key timeline elements

### 4. Privilege Log

| Log No. | Date | Type | Author | All Recipients | Subject Matter | Privilege Claimed | Basis |
|---|---|---|---|---|---|---|---|
| | | | | | | LAP / LP / WP / CP | |

**Key:**
- **LAP** - Legal Advice Privilege
- **LP** - Litigation Privilege
- **WP** - Without Prejudice (may also apply in Scots procedure)
- **CP** - Confidential communications (general)

Flag: claims lacking adequate justification, apparent inadvertent disclosure, entries failing specificity standards set out in Scots procedure rules.

[SCOTS: Note] Scottish privilege law distinguishes between Legal Advice Privilege (confidential communications between solicitor and client for legal advice) and Litigation Privilege (communications with third parties for pending/litigation). There is no direct equivalent of the US FRCP 26(b)(5) codified privilege log requirement, but as a matter of good practice, parties should maintain a log where privilege is claimed over documents that would otherwise fall within a specification of documents. Inadvertent disclosure does not automatically waive privilege under Scots law, but parties should act promptly to assert confidentiality. See *Scottish Lion Insurance Co Ltd v Goodrich Corp* 2011 SC 534; *Three Rivers District Council v Governor and Company of the Bank of England (No 6)* [2005] 1 AC 610.

### 5. Production Completeness Assessment

| Category | Expected | Produced | Gap? |
|---|---|---|---|
| Date range | [case-relevant span] | [actual span] | |
| Key custodians | [list] | [list] | |
| Document types | [per specification] | [actual] | |

**Flag for follow-up:**
- Custodians who logically possess responsive materials but are missing, Truncated or orphaned email threads, Time periods under-represented vs. case chronology, Corrupted files, password-protected docs, unsearchable formats, Requested document categories entirely absent

### 6. Executive Summary

1 to 2 page narrative covering:
1. Overall production statistics
2. Top 5 to 10 hot documents with significance
3. Key evidentiary strengths surfaced
4. Gaps and recommended next steps (supplemental specification, procedural motion, etc.)
5. Open privilege or confidentiality disputes requiring resolution

## Guidelines

- **Administration of Justice (Scotland) Act 1972** governs recovery of documents; Chapter 35 of the Court of Session Rules / Chapter relating to recovery in Sheriff Court Rules set out the procedure for commission and diligence
- **Specification of documents** must be specific, a "fishing" specification is generally incompetent in Scots procedure ([SCOTS: Note] The requirement is that documents be identified with reasonable specificity; general requests for "all documents relating to X" may be challenged as insufficiently specific)
- **Privilege**: In Scots law, legal professional privilege (LPP) comprises legal advice privilege and litigation privilege. Waiver can be express or implied from conduct inconsistent with maintaining confidentiality. See *Scottish Lion Insurance Co Ltd v Goodrich Corp* 2011 SC 534.
- **Inadvertent production**: If a privileged document is produced inadvertently, the producing party should notify the receiving party immediately and seek return/destruction. Scots law may treat this as a waiver depending on the circumstances; parties should consider obtaining a confidentiality or clawback agreement or protective order. See *Brodies LLP* guidance on privilege pitfalls.
- Never reproduce potentially privileged content, use subject-matter descriptions only, Custodian gaps are often more strategically significant than document gaps, prioritise custodian completeness, Deliver in two formats: spreadsheet (filterable) + narrative summary report

## Scotland/UK Adaptation

This skill has been adapted from its original US litigation discovery context for use in Scottish civil procedure.

**Key changes:**
- Replaced FRCP 26(b)(5) / FRCP 34 / FRE 502 references with Scots law equivalents (Administration of Justice (Scotland) Act 1972, Court of Session Rules Ch. 35, Sheriff Court Rules on recovery of evidence)
- Replaced "discovery" with "specification of documents / commission and diligence"
- Replaced "motion to compel" with procedural motion for commission and diligence, Replaced "meet-and-confer" (US practice) - Scots procedure does not have a direct equivalent; parties correspond or raise procedural motions, Replaced "MSJ" (summary judgment) with "summary decree" (Sheriff Court Rule 21.2 / Court of Session Rule 19.2)
- Replaced "Bates numbers" with "page numbering" (Bates stamping is used in the UK but "page numbers" or "production numbers" is more common)
- Replaced US privilege categories (AC / WP / CI) with Scottish equivalents (LAP / LP / WP / CP)
- Added Scottish privilege case law references, Date format changed to DD/MM/YYYY, Definitions changed to Scots legal terminology (pursuer/defender; initial writ/summons; etc.)

**Relevant forms:**
- Commission and diligence forms are available from the Scottish Courts and Tribunals Service website, Specification of documents template, no standard statutory form; typically drafted by solicitor as a written schedule appended to a motion, See `/scots-forms/` directory for relevant Scottish court forms

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
