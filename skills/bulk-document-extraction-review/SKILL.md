---
name: bulk-document-extraction-review
language: en
description: 'Extracts structured data from large sets of legal documents into tabular format for review, analysis, and reporting. Processes contracts, agreements, correspondence, filings, and other legal documents in bulk, extracting key terms, dates, parties, obligations, risks, and custom fields into organized tables. Use when conducting due diligence document review, bulk contract extraction, compliance audits across document sets, lease portfolio analysis, employment agreement review, regulatory filing review, or any task requiring structured extraction from multiple documents. Trigger keywords: tabular review, bulk extraction, document review table, data room review, batch document analysis, contract extraction, portfolio review, structured extraction, document comparison table. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
metadata:
  author: casemark
  practice_areas:
  - Transactional
  - Corporate
  - Litigation
  document_types:
  - Summary
  - Report
  skill_modes:
  - Analysis
  - Research
---

# Bulk Document Extraction & Review

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

Extracts structured data from sets of legal documents into tabular format. Each document becomes a row; user-defined questions become columns. Produces reviewable tables with source citations, then supports analysis across the extracted dataset.

## Prerequisites

1. **Document set** - the files to analyze (contracts, agreements, correspondence, filings, etc.)
2. **Extraction questions** - what to extract from each document (see Column Design below)
3. **Document type** - the nature of the documents (e.g., all NDAs, mixed data room, email set)
4. **Review purpose** - what the table will be used for (DD report, compliance check, portfolio analysis, case chronology)
5. **Output preferences** - format (table, CSV, report narrative), language, level of detail

If extraction questions are not provided, propose a standard column set based on the document type.

## Workflow

### Phase 1: Column Design

Define extraction columns. Each column is a question asked of every document. Column types:

| Type | Description | Example |
|---|---|---|
| **Verbatim** | Extract exact language from the document | "What is the governing law clause?" |
| **Free response** | Summarize or interpret | "Summarize the key obligations of the Seller" |
| **Classification** | Yes/No or category | "Does this agreement contain a change-of-control provision?" |
| **Date** | Extract specific dates | "What is the effective date?" |
| **Numeric** | Extract amounts, percentages | "What is the liability cap amount?" |
| **List** | Multiple items from same document | "List all defined terms" |

**Standard column sets by document type:**

**Contracts / Agreements:**
- Document name and type, Parties (with roles)
- Effective date and term, Governing law and jurisdiction, Key financial terms (price, payment, caps)
- Termination provisions (convenience, cause, notice period)
- Assignment / change of control, Indemnification scope, Limitation of liability, Confidentiality term, Unusual or non-standard provisions, Red flags or concerns

**Correspondence / Emails:**
- Date and time, Sender and recipient(s)
- Subject, Key facts or events described, Commitments or action items, Attachments referenced, Privilege indicators

**Court Filings / Pleadings:**
- Filing date, Document type (motion, brief, order, etc.)
- Filing party, Relief sought or ruling issued, Key arguments or findings, Deadlines or next dates, Cited authorities

### Phase 2: Document Processing

For each document in the set:

1. **Identify** - document name, type, date, page count
2. **Extract** - answer each column question with:
   - The extracted value
   - Source citation (page number, section, paragraph)
   - Confidence indicator when the answer requires interpretation
3. **Flag** - note any documents that:
   - Cannot be processed (corrupted, illegible, wrong format)
   - Contain ambiguous answers for a given column
   - Have notable omissions (expected provision absent)

### Phase 3: Table Assembly

Compile results into a structured table:

| Doc # | Document Name | [Column 1] | [Column 2] | ... | [Column N] | Flags |
|---|---|---|---|---|---|---|

**Table conventions:**
- One row per document, Empty cells marked "Not found" or "N/A" (distinguish between absent and inapplicable)
- Multi-value cells use semicolons as delimiters, Source citations in parentheses after each value: (§3.2, p.7)
- Flags column captures anomalies, concerns, or items requiring attorney review

### Phase 4: Cross-Document Analysis

After extraction, analyze the dataset:

#### 4a. Summary Statistics, Total documents processed / skipped / flagged, Distribution of key values (e.g., "65% have mutual indemnification, 35% one-sided")
- Date ranges (earliest and latest effective dates, expirations)
- Outliers (documents with unusual terms relative to the set)

#### 4b. Risk and Anomaly Report
- **Inconsistencies** - documents with conflicting terms (different governing law, conflicting definitions)
- **Missing provisions** - documents lacking standard clauses present in majority of set
- **Outlier terms** - values significantly different from the norm (unusually high caps, short cure periods)
- **Red flags** - provisions requiring immediate attorney attention

#### 4c. Comparative Analysis, Side-by-side comparison of key terms across selected documents, Deviation from standard or template language, Trend analysis (if documents span time periods)

### Phase 5: Report Generation

Based on the extracted table and analysis, produce:

1. **Executive summary** - key findings, overall risk assessment, critical items requiring action
2. **Detailed table** - full extraction results (Phase 3 output)
3. **Analysis narrative** - written summary of cross-document patterns, risks, and recommendations
4. **Follow-up list** - documents or issues requiring further review, with specific questions

## Use Case Templates

### M&A Due Diligence Data Room
**Columns:** Parties, Date, Contract type, Term, Renewal, Change of control, Assignment consent, Material financial terms, Restrictive covenants, IP provisions, Termination triggers, Red flags
**Analysis focus:** Change-of-control provisions that could block closing, material contracts requiring consent, unusual termination rights, aggregate financial exposure

### Lease Portfolio Review
**Columns:** Property, Landlord, Tenant, Commencement, Expiration, Renewal options, Monthly rent, Escalation, CAM/NNN, Assignment/subletting, Termination rights, Restoration obligations
**Analysis focus:** Upcoming expirations, below/above-market rents, assignment restrictions affecting transactions, aggregate lease obligations

### Employment Agreement Audit
**Columns:** Employee, Title, Start date, Term, Base compensation, Bonus/equity, Non-compete scope and duration, Non-solicit, IP assignment, Severance triggers, Change-of-control provisions, Governing law
**Analysis focus:** Non-compete enforceability by jurisdiction, aggregate severance exposure, key person dependencies, inconsistencies across similar roles

### Regulatory Filing Review
**Columns:** Filing type, Filing date, Filer, Jurisdiction, Status, Key disclosures, Material changes from prior filing, Deficiencies noted, Response deadline
**Analysis focus:** Compliance gaps, missed deadlines, material disclosure changes, cross-filing consistency

## Guidelines

- Every extracted value must include a source citation (section, page, or paragraph reference)
- Distinguish between "Not found" (searched but absent) and "N/A" (not applicable to this document type)
- Do not infer or extrapolate values, extract only what the document explicitly states, When a provision is ambiguous, extract the verbatim language and flag for attorney review rather than interpreting, Process documents in consistent order (alphabetical, chronological, or as provided)
- For large sets, process in batches and maintain consistent column definitions across batches, Flag any document that appears to be a duplicate or superseded version, Note document language, if documents are in multiple languages, indicate the source language and whether extraction was from the original or a translation, Mark [VERIFY] on any extracted value where confidence is low due to poor document quality, ambiguous language, or complex cross-references, Maintain a processing log: document name, status (processed/skipped/flagged), notes

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
