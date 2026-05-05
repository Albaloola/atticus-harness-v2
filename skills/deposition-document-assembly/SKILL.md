---
name: deposition-document-assembly
language: en
description: Assembles and organises documents for witness examination preparation, producing a document inventory, production list, impeachment index, and gap analysis. Use before building an examination outline for any witness type (fact witness, party, corporate representative, expert) in Scottish civil litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Witness Examination Document Assembly

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

Identifies, categorises, and inventories documents tied to a witness, then produces a production candidate list, gap analysis, impeachment index, and preparation checklist. Adapts US deposition practice to the Scottish commission and diligence procedure.

## Prerequisites

Collect before starting:

1. **Witness identity** - name, role, party/non-party status
2. **Topics** - subject matter; commission topics if applicable
3. **Case materials** - lodged productions, pleadings (initial writ/defences), prior statements
4. **Witness type** - fact witness, party, corporate representative, or expert

Prompt for any missing items before proceeding.

## Workflow

### 1. Identify Documents

Search by three axes:

**Connection to witness:** authored, received, copied, mentioned by name, custodial (from witness's files/email).

**Topic:** key events witness will testify about, decisions they participated in, relevant communications, applicable policies, business records they maintained.

**Prior statements:** precognitions or statements in this or other cases, affidavits, sworn declarations, answers to written questions (RCS Ch 43 or Sheriff Court equivalent), admissions.

### 2. Build Document Inventory

Create a table with columns: Doc ID, Description, Date, Production No., Connection, Category, Key Pages, Notes.

Connection types: Authored / Received / Copied / Mentioned / Custodial / Topic-related

Categories: Authentication / Impeachment / Key Fact / Background / Pleading-Production

### 3. Generate Production Candidate List

Create a table with columns: Production No., Document, Production ID, Topic, Purpose, Priority (Essential / Likely / Backup).

Choose an organisation scheme: chronological (narrative examinations), topical (issue-focused), or strategic (examination sequence).

### 4. Run Gap Analysis

Check for missing documents by witness type:

| Witness Type | Verify Presence Of |
|---|---|
| Any | CV/resume, organisational chart, job description, prior precognition/statement |
| Party | Initial writ/defences, answers to written questions, lodged productions |
| Employee | Personnel file (if relevant), training/disciplinary records, email samples |
| Corporate rep | Company organisational documents, policies/procedures per notice topics, prior evidence |
| Expert | Expert report, CV, publications, fee agreement, prior testimony list, materials considered |

For each gap, document: what is missing, why it matters, potential source, and action required.

### 5. Build Impeachment Index

For each potential inconsistency, record: document, Production ID, exact quote from document, expected testimony, nature of inconsistency, and planned approach.

For each entry include: (1) exact page/paragraph citation, (2) commitment questions before confrontation, (3) follow-up after introduction.

### 6. Produce Final Package

Output a summary containing:

- Witness name, role, examination date, Document counts by category (authentication, impeachment, key fact, background, pleadings/productions)
- Gaps identified with required actions, Preparation checklist:
  - Obtain missing documents per gap analysis
  - Prepare clean production copies
  - Number/tag productions; prepare sets for witness, opposing solicitor, commissioner
  - For remote examinations: load documents in presentation software, test screen sharing
  - Review impeachment documents; integrate into examination outline

## Pitfalls and Rules

- **Impeachment productions:** Do not pre-disclose if practice permits surprise; keep separate from main production binder
- **Commission scope:** Productions must align with commission topics, flag any documents outside scope
- **Authentication planning:** Note which witness can authenticate each production for proof (Civil Evidence (Scotland) Act 1988); plan method per production (witness testimony, business document hearsay exception, agreement)
- **RCS / Sheriff Court Rules:** Original productions should be lodged with the court or annexed to the commission report, verify local rules
- **Without prejudice communications:** Label settlement-adjacent communications if used for a non-settlement purpose (common law without prejudice privilege)

## Related Skills

- `witness-examination-preparation` - outline building
- `examination-questioning-techniques` - document use during examination
- `commission-and-diligence-procedure` - commission specifics

## Scotland/UK Adaptation

### Key Adaptations, Replaced FRCP/FRE → Rules of the Court of Session / Sheriff Court Rules (Ordinary Cause Rules, Simple Procedure Rules)
- Replaced 30(b)(6) corporate representative → No direct Scottish equivalent; commission and diligence to examine a corporate representative, Replaced FRE 901-902 (authentication) → Civil Evidence (Scotland) Act 1988 (business documents hearsay provisions; s 2 and s 5)
- Replaced FRE 408 (settlement offers) → Without prejudice communications (common law privilege in Scotland)
- Replaced Bluebook citation → OSCOLA (Oxford Standard for Citation of Legal Authorities) or Scottish court citation practice (Greens / Session Cases)
- Replaced Bates numbering → Production number / Inventory number (Scottish court practice)
- Replaced "deposition" / "deponent" → "examination on commission" / "witness"
- Replaced "deposition" (process) → "commission and diligence" or "examination"
- Replaced "exhibit" → "production" (Scottish court term)
- Replaced FRCP 30(f) (exhibits annexed to record) → RCS / Sheriff Court Rules on lodging productions, Replaced "US federal or state litigation" → "Scottish civil litigation"
- Replaced US spelling throughout

### [SCOTS] Notes, No direct Scottish equivalent to FRCP 30(b)(6) corporate representative deposition; instead, commission and diligence is used to obtain the evidence of a corporate representative, typically by way of a commission to examine a named individual
- "Deposition" as a pre-trial discovery device does not exist in Scotland; examination on commission is the nearest equivalent and is court-ordered, Document discovery in Scotland is conducted through commission and diligence, with specific rules under RCS Ch 43 (for the Court of Session) or Sheriff Court Ordinary Cause Rules, The Civil Evidence (Scotland) Act 1988 governs admissibility of business documents; authentication requirements are less formal than under FRE 901-902
- Without prejudice privilege in Scotland is based on common law and is broad in application, Productions are lodged with the court through an inventory of productions; numbering follows a sequential system, not Bates-style document labelling, Consider whether a commission to examine a witness, a specification of documents (call documents from a haver), or both are needed

### [VERIFY] Items Before Use, Verify current RCS provisions on commissions and specifications of documents (RCS Ch 43 and Ch 58)
- Verify current Sheriff Court Ordinary Cause Rules on recovery of documents, Verify Civil Evidence (Scotland) Act 1988 provisions on hearsay and business documents, Confirm with instructing solicitor whether the court will order a commission or whether agreement between parties suffices, Verify the correct production numbering / inventory format for the target court, Check with instructing solicitor whether the witness examination will be before a commissioner, in court, or by agreement of parties

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
