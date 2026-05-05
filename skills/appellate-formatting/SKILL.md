---
name: appellate-formatting
language: en
description: Generates appellate-filing-ready Notes of Appeal, Notes of Argument (Inner House), Tables of Contents, Tables of Authorities, and formatting for the Sheriff Appeal Court, Court of Session (Inner House), and UK Supreme Court (Scottish appeals). Covers the Rules of the Court of Session 1994, the Sheriff Appeal Court Rules 2021, and the UK Supreme Court Rules 2009. [SCOTS] Adapted from US FRAP appellate formatting. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, drafting, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Appellate Document Formatting (Scotland/UK)

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

Produces TOCs, TOAs, formatted Notes of Appeal, and Notes of Argument for Scottish appellate courts with accuracy guarantees and transparent placeholders where verification is required. The primary risk in AI-assisted formatting is hallucinated page numbers and citations, use `[__]` placeholders aggressively rather than guessing.

[SCOTS: Note] This skill is adapted from the US FRAP-based appellate formatting framework. Scotland has three main civil appeal routes: (1) Sheriff Appeal Court (appeals from Sheriff Court Ordinary Cause and Summary Cause decisions); (2) Court of Session Inner House (reclaiming motions from the Outer House; appeals from certain tribunals); (3) UK Supreme Court (final appeal from the Inner House on points of law of general public importance). Each has its own rules and formatting requirements. There is no single equivalent of the US FRAP.

## Quick Start

Gather before drafting (unless user says "use defaults"):

1. **Brief/appeal text** - final or near-final; label output "DRAFT" if still revising
2. **Forum/case metadata** - appeal court (Sheriff Appeal Court / Inner House / UK Supreme Court), case number, parties, type of appeal
3. **Formatting** - font, spacing, margins (per relevant court rules)
4. **Filing method** - Civil Online (Scottish courts e-filing) / paper / SCJ e-filing (UKSC)
5. **Court orders** - any modified time limits or page/word limits
6. **Local practice notes** - any specific formatting directions from the relevant court
7. **Word count** (if applicable) - final count from drafting platform plus believed exclusions

**Defaults** (if user doesn't specify): Court of Session Inner House rules; 12-pt font; `[__]` page placeholders; word count marked as estimate.

**Stop and ask** if forum, appeal type, or formatting details are missing, certificate language, limits, and exclusions depend on these.

## Core Workflow

### 1. Identify Governing Authority

| Forum | Primary Rules | Key Document Type |
|-------|--------------|-----------------|
| Sheriff Appeal Court (civil) | Sheriff Appeal Court Rules 2021 (SSI 2021/468) | Note of Appeal (Form 33.2); Note of Argument |
| Court of Session, Inner House (reclaiming) | Rules of the Court of Session 1994 (RCS), Chapter 38 | Note of Appeal (Reclaiming Motion); Note of Argument |
| Court of Session, Inner House (statutory appeal) | RCS Chapter 40 (and other applicable chapters) | Note of Appeal; Note of Argument |
| UK Supreme Court (Scottish appeal) | UK Supreme Court Rules 2009 (SI 2009/1603) | Statement of Facts and Issues; Written Case |

### 2. Scottish Appeal Routes & Document Types

**Sheriff Appeal Court (civil):**
- Appeals from Sheriff Court Ordinary Cause decisions: Note of Appeal (Form 33.2) within 14 days, Appeals from Sheriff Court summary applications: varies by statute, Note of Argument is lodged after Note of Appeal
- **No word limit stated in rules** - but must be concise; practice expects arguments proportionate to issues, Format: A4 paper; legible font; numbered paragraphs; paginated

**Court of Session Inner House (Reclaiming Motion):**
- Reclaiming motion: the Scottish equivalent of an appeal from the Outer House, Note of Appeal (RCS 38.2) - must be marked within 14 days (21 days for certain case types)
- Note of Argument (RCS 38.12) - must be lodged within 28 days of the reclaiming motion being received, The Note of Argument is the principal written submission, structured like a legal argument with numbered paragraphs, Pages should be numbered; paragraphs should be numbered consecutively
- **Practice Note guidance**: Notes of Argument should be concise and focused on grounds of appeal, Parties may also lodge a skeleton argument or chronology where ordered by the court

**UK Supreme Court (Scotland):**
- Permission to appeal required (from the Inner House or directly from UKSC)
- Statement of Facts and Issues, must be concise (UKSC Practice Direction 6)
- Written Case, sets out full argument (UKSC Rule 23)
- Word limits for Written Case: usually 10,000 to 15,000 words depending on complexity (UKSC Practice Direction 6)
- Formatted as A4; 12-pt font; double-spaced text; numbered paragraphs

### 3. Generate Table of Contents (where used)

- Confirm sections match required components for the specific court, Build heading map preserving exact wording, capitalisation, numbering
- **Never rewrite headings** - TOC must match document verbatim, Default depth: major headings + one subheading level

**Pagination:**
- Interlocutor/order page numbers → extract directly, Unpaginated text → `[__]` placeholders, label: `"DRAFT-PAGE NUMBERS TO BE UPDATED AFTER PAGINATION"`
- **Never fabricate page numbers**

**Template (for longer submissions in Inner House or UKSC):**

```
TABLE OF CONTENTS

NOTE OF ARGUMENT ................................... 1
INTRODUCTION ....................................... 1
BACKGROUND FACTS ................................... 2
GROUNDS OF APPEAL .................................. 5
  I.  The sheriff erred in law in respect of... .. 5
  II. The sheriff's exercise of discretion was...  9
SUBMISSIONS FOR THE APPELLANT ...................... 12
CONCLUSION AND PRAYER .............................. 18
LIST OF AUTHORITIES ................................ 19
```

### 4. Build Table of Authorities (where used)

Parse all citations from the document text. Validate each actually appears on listed pages.

**Scottish citation format** (distinct from US):
- Scottish cases: *Name v Name*, year SC / SLT / SCLR page (e.g., *Smith v Brown* 2020 SC 123)
- UKSC appeals from Scotland: *Name v Name* [year] UKSC number (e.g., *Reclaiming Council Ltd v City Council* [2023] UKSC 15)
- House of Lords (Scottish appeals): *Name v Name* year SC(HL) (e.g., *Donoghue v Stevenson* 1932 SC (HL) 31)
- EU/ECHR cases: *Name v Name* (year) C-123/45, ECLI reference, retain after Brexit for pre-2020 matters, Statutes: Act name, year, section (e.g., Prescription and Limitation (Scotland) Act 1973, s. 6)
- Rules: Court rules chapter and rule number (e.g., RCS 38.2)

**Categories (in order):**

| Category | Sort Order |
|----------|-----------|
| Cases (Scottish) | Alphabetical by pursuer/ appellant name |
| Cases (UKSC/HoL from Scotland) | Alphabetical by year then name |
| Cases (EU/ECHR, retained EU case law) | Alphabetical |
| Statutes / Statutory Instruments | By short title, chronological |
| Rules of Court | By rule number |
| Other Authorities (textbooks, articles) | By author surname |

**Rules:**
- Copy citations exactly from document, never add references not in text, Incomplete citation → include as-is, flag: `[Citation appears incomplete; verify neutral citation and report]`
- Sort "In re" and "Ex parte" (rare in Scotland) correctly

### 5. Word Count and Certification

[SCOTS: Note] Unlike US FRAP 32(g), Scottish appellate courts do not generally require formal word-count certificates. The UK Supreme Court requires compliance with word limits in Practice Direction 6.

**Where word limits apply (primarily UK Supreme Court):**

```
Total Words (entire document):        [X]
− Excluded:                           [Y]
  - Cover sheet (if any)
  - TOC / TOA
  - Signature block
  - List of Authorities
= Net Words for Compliance:           [Z]
```

**Rules:**
- Verify current UKSC Practice Direction word limits, Count from source document (Word), not scan/OCR, Within 5% of limit → flag and recommend trimming, Always state: *"Word count is an estimate. Solicitor / Counsel must perform final count using the drafting platform."*

### 6. Cross-Verification

```
- [ ] Every TOC heading matches document heading verbatim
- [ ] Every TOA authority appears on listed pages
- [ ] Case name, court reference number, parties consistent throughout
- [ ] Font/margins uniform
- [ ] Pages numbered consecutively
- [ ] Paragraphs numbered consecutively (court preference)
- [ ] PDF text-searchable with bookmarks (if required)
- [ ] Correct neutral citation format used for Scottish cases
"""

After delivery, confirm with user:
1. Are headings finalised or should TOC be marked draft?
2. Does drafting software word count match the estimate?
3. Any local practice note requirements to verify?
4. Submission method: Civil Online / email / paper?

State: *"Generated based on [Scottish court] rules. All page numbers, citations, and formatting must be independently verified before lodging."*

## Scottish Court Variations

| Court | Key Variation |
|-------|--------------|
| Sheriff Appeal Court | Note of Appeal (Form 33.2); Note of Argument within 28 days; no standard word limit but must be concise |
| Court of Session Inner House (Reclaiming) | Note of Argument (RCS 38.12); must specify the grounds of appeal and why the Inner House should interfere; no formal word limit, practice expects proportionality |
| Court of Session Inner House (Statutory appeal) | RCS Chapter 40; specific time limits per statute |
| UK Supreme Court (Scotland) | Permission to appeal required; Written Case 10,000 to 15,000 words (per Practice Direction 6); strict formatting and deadlines |
| Judicial Committee of the Privy Council (rare) | Separate rules; used for devolution issues under the Scotland Act 1998 |

## Guardrails

- **Never fabricate** page numbers, word counts, citations, or rule references
- **Never "improve" citations** - do not add information not in the document without solicitor/counsel confirmation, Unverifiable information → use `[VERIFY]` or `[__]` placeholders, All outputs require qualified Scottish solicitor or advocate review before lodging, Do not disclose confidential material in public-facing components, Scottish courts use "Lord Ordinary" (Outer House judge), "Lord President" (Inner House head), "Sheriff Principal" (Sheriff Appeal Court) - use correct titles, Neutral citation format for Scottish cases: year + court abbreviation + [court no.] + page (e.g., 2023 SC EDIN 15)
- Terms: appellant/reclaimer; respondent (Inner House); same terms (Sheriff Appeal Court)

## Scotland/UK Adaptation

This skill was originally based on the US FRAP framework. It has been substantially rewritten for the Scottish appellate system.

**Key changes:**
- Replaced FRAP 28, 32 with Rules of the Court of Session 1994, Sheriff Appeal Court Rules 2021, UK Supreme Court Rules 2009
- Replaced US federal circuit structure with Sheriff Appeal Court / Inner House / UK Supreme Court (Scotland)
- Replaced FRAP 32(g) certificate, no equivalent in Scottish civil procedure, Replaced US Supreme Court Rules 33/34 with UK Supreme Court Rules and Practice Directions, Replaced Bluebook citation format with Scots law citation format (neutral citation, SLT, SC, SCLR)
- Replaced US case citation with Scottish case citation (*Donoghue v Stevenson*, neutral citations, SLT reports)
- Replaced "motion" / "brief" with "Note of Appeal" / "Note of Argument" / "Reclaiming Motion"
- Added Scottish court-specific rules (RCS Chapter 38 - Reclaiming, Chapter 40 - Statutory Appeals)
- Added UK Supreme Court Scottish appeals-specific rules, Removed FRAP word limits, Scottish courts do not have standard word limits (except UKSC)
- Replaced CM/ECF with Civil Online (Scottish courts e-filing system)
- Changed language to British English spelling, Date format: DD/MM/YYYY

**Relevant forms:**
- Sheriff Appeal Court Form 33.2 - Note of Appeal (available from Scottish Courts and Tribunals Service website)
- See `/scots-forms/` directory for downloaded Scottish court forms

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
