---
name: shareholder-meeting-summary
language: en
description: Generates structured, record-quality summaries of shareholder/general meetings from minutes, transcripts, and related materials for UK/Scottish companies. Triggers when the user provides general meeting documents and requests a summary, minute-book entry, or governance record covering metadata, resolutions, voting outcomes, and dissents. [Atticus UK/Scots refined]
tags:
- SCOTS, corporate, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Shareholder / General Meeting Summary (UK/Scotland)

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

Produces a structured summary of a general meeting (Annual General Meeting or Extraordinary General Meeting) of a UK/Scottish company suitable for statutory records, Companies House filings, and corporate governance compliance.

[SCOTS: Note: This skill has been adapted from a US shareholder meeting summary to the UK corporate framework. UK/Scottish companies are governed by the Companies Act 2006. Key differences: shareholders' meetings may be called as "general meetings"; public companies must hold AGMs within 6 months of year-end; private companies need not hold AGMs unless required by articles. The US concepts of "proxy statements" and "SEC filings" are replaced with UK equivalents (Companies House filings, model articles).]

## Prerequisites

1. **Meeting materials** - minutes, transcripts, recordings, presentation decks, or correspondence
2. **Corporate context** - company legal name, registered number, jurisdiction (Scotland/England/UK), relevant articles of association (quorum and voting thresholds)

## Quick Start

1. Collect all meeting materials and corporate context.
2. Extract meeting metadata and build the attendance table.
3. Summarise each agenda item with resolution text and voting results.
4. Document any dissents, objections, or procedural irregularities.
5. Record closing business and adjournment time.

## Output Structure

### 1. Meeting Metadata

| Field | Content |
|---|---|
| Company | Full legal name and registered number |
| Meeting type | Annual General Meeting (AGM) / Extraordinary General Meeting (EGM) - state purpose if EGM |
| Date & time | Start and adjournment times |
| Location | Physical address or virtual platform (check articles for hybrid meeting provisions) |
| Chair | Name (usually the chair of the board) |
| Secretary / recorder | Name |
| Quorum | Present shares vs. required threshold; determination per articles of association |
| Notice period | Whether statutory notice given (14 clear days for AGM; check articles) |

Attendance table:

| Name | Role | Shares Represented | Present / Proxy |
|---|---|---|---|

### 2. Agenda Items

For each item, in sequence:

- **Item number and title**
- **Substance** - what was proposed or presented
- **Material discussion** - key arguments for/against (factual only)
- **Board/Sirector recommendation** (if shareholder resolution)
- **Resolution text** - full operative wording for adopted resolutions (ordinary or special resolutions, s. 282, 283 Companies Act 2006)
- **Voting results:**

| For | Against | Abstain / Withheld | Method (e.g., poll or show of hands) | Result (passed/failed) |
|---|---|---|---|---|

[SCOTS: Note: UK companies distinguish between ordinary resolutions (simple majority) and special resolutions (75% majority). Poll votes are common for substantive resolutions. Show of hands is the default unless a poll is demanded. Compare with US practice where voting methods vary by state law and stock exchange rules.]

### 3. Special Documentation

Capture if present:

- Statements of dissent or objection (verbatim or detailed summary)
- Exercise of appraisal rights (if applicable under the Companies Act 2006)
- Demands for a poll vote, Fiduciary duty concerns raised, Procedural irregularities or challenges, Contested resolutions or director elections

### 4. Closing

- Other business conducted, Announcements (future meetings, corporate actions)
- Time of adjournment

## Pitfalls and Checks

- **Neutral tone** - document what was said and decided; never editorialise unless the official minutes use specific language
- **Vote precision** - verify all counts and percentages; attribute each tally to its specific resolution
- **Ordinary vs. Special resolution** - clearly distinguish which threshold applies per the Companies Act 2006
- **Flag gaps** - if materials omit vote counts or details, note the limitation explicitly rather than assuming
- **High-scrutiny items** - apply extra care to directors' remuneration, share buybacks, alterations of articles, substantial property transactions, and related-party transactions
- **No editorial commentary** - report irregularities and objections objectively
- **Consistent format** - use tabular presentation for all voting results
- **Companies House filing** - certain resolutions (especially special resolutions) must be filed at Companies House within 15 days (s. 30 Companies Act 2006)
- **Scottish companies** - registered in Scotland; file with Companies House in Edinburgh

## Scotland/UK Adaptation

This skill has been adapted from a US shareholder meeting summary to the UK/Scottish corporate governance framework.

### Key Differences

| US Concept | UK/Scottish Equivalent |
|---|---|
| Annual Meeting | Annual General Meeting (AGM) |
| Special Meeting | Extraordinary General Meeting (EGM) |
| Shareholder | Member (or shareholder) |
| SEC filings (8-K, proxy statement) | Companies House filings; annual return; director's report |
| Proxy statement | Notice of meeting with explanatory notes |
| Broker non-votes | Concept recognised but less common in UK; governed by articles |
| Appraisal rights (Delaware) | S. 633 (right to apply to court to cancel variation) / s. 98 (re-registration) |
| State corporation law | Companies Act 2006 |
| Section 220 demand (books/records) | S. 746 (inspection of records) - more limited than US |
| Delaware General Corporation Law | Model articles / Table A / bespoke articles |
| Shareholder proposals (Rule 14a-8) | S. 338 (members may requisition resolutions) |
| Stock exchange rules (NYSE/NASDAQ) | UK Corporate Governance Code / Listing Rules / AIM Rules |

### Applicable Legislation, Companies Act 2006 (ss. 281-340: resolutions and meetings)
- Model Articles for Private Companies Limited by Shares / Public Companies, UK Corporate Governance Code (listed companies)
- The Companies (Shareholders' Rights) Regulations 2009

### Forms
General meeting minutes should follow the company's articles of association. There is no prescribed statutory form for meeting summaries. Companies House does not require minutes to be filed, but certain resolutions (special, extraordinary) must be filed within 15 days (s. 30, Companies Act 2006). Forms to file resolutions are available from www.gov.uk/companies-house.

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
