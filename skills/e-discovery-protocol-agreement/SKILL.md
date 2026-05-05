---
name: e-discovery-protocol-agreement
language: en
description: Drafts court-ready ESI Protocol Agreements governing electronically stored information exchange in U.S. federal litigation. Covers FRCP 26(f)/34 compliance, FRE 502(d) clawback, TAR methodology, privilege logs, and production format specs. Use when drafting e-discovery stipulations, ESI protocols, meet-and-confer agreements, or joint discovery plans. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# E-Discovery Protocol Agreement

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

Drafts a litigation-ready ESI Protocol Agreement covering search methodology, production formats, privilege procedures, and clawback protections for U.S. commercial litigation.

## Prerequisites

Collect before drafting:

- **Court caption** - court name, case number, party names, assigned judge
- **Case materials** - meet-and-confer correspondence, prior ESI orders, discovery requests
- **Custodian list** - names and roles of key custodians per party
- **ESI sources** - email platforms, DMS, collaboration tools, mobile, cloud storage
- **Search terms** - agreed Boolean/proximity terms or TAR parameters
- **Date ranges** - preservation trigger date and production date range
- **Production specs** - native vs. TIFF, agreed metadata fields (if pre-negotiated)

## Quick Start

1. Gather prerequisites from uploaded case materials
2. Draft sections in order below, resolving all bracketed gaps
3. Format as joint stipulation with neutral, cooperative tone
4. Append proposed court order with FRE 502(d) incorporation

## Agreement Sections

### 1. Caption & Recitals

- Full court caption mirroring prior filings; all counsel of record, Rule 26(f) conference date; good-faith cooperation statement, Rule 26(b)(1) proportionality commitment

### 2. Preservation

| Element | Content |
|---|---|
| Trigger date | Date preservation obligations arose |
| Key custodians | Name, title, party affiliation |
| ESI sources in scope | Email, DMS, shared drives, mobile, cloud, collaboration tools |
| Excluded sources | Basis for exclusion under FRCP 26(b)(2)(B) |
| Litigation hold | Confirmation holds issued; IT contact per party |

### 3. Search Methodology

**Option A, Keyword Search:**
- Terms in **Exhibit A** with Boolean/proximity operators, Specify custodian-specific vs. across-the-board application, Iterative refinement; meet-and-confer on hit count reports

**Option B, TAR/Predictive Coding:**
- Platform and vendor identification, Seed set composition and training protocol, QC metrics: elusion rate, recall/precision targets, Validation via statistical sampling; disclosure to opposing counsel

### 4. Production Format

| Document Type | Format | Notes |
|---|---|---|
| Standard documents | TIFF (Group IV) + extracted text + load file | Unitized per document |
| Native-required | Native + TIFF slip-sheet placeholder | Spreadsheets, audio, video, CAD |
| Email | TIFF or native (per agreement) | Threading preserved |
| Databases | Field-level export per meet-and-confer | to be determined by data type |

**Required metadata fields:** `BegBates`, `EndBates`, `BegAttach`, `EndAttach`, `Custodian`, `FilePath`, `FileName`, `FileExt`, `FileSize`, `DateCreated`, `DateModified`, `DateSent`, `DateReceived`, `Author`, `To`, `CC`, `BCC`, `Subject`, `MD5Hash`, `Confidentiality`

### 5. Deduplication

- Specify global (cross-custodian) or custodian-level, Hash method: MD5 or SHA-1
- Reflect all custodians in metadata for de-duped documents

### 6. Privilege Log

Required fields: Bates range, date, author/sender, recipients (To/CC/BCC), document type, privilege basis, subject (non-revealing description).

- Set deadline: [X] days after each rolling production or fixed date, Categorical logs permitted where specified (e.g., post-hold attorney-client communications)
- Include sampling/extrapolation provisions if volume warrants

### 7. FRE 502(d) Clawback

Agreement constitutes a **court order under FRE 502(d)** upon approval, inadvertent production waives neither privilege nor work-product protection in this or any other proceeding.

Clawback procedure:
1. Producing party notifies in writing within [X] days of discovering inadvertent production
2. Receiving party ceases review, sequesters, and returns/destroys within [X] days
3. No copies retained; receiving party may challenge by motion (burden on producing party)

### 8. Additional Provisions

Include as applicable:

- **Cost allocation** - inaccessible/legacy sources under Rule 26(b)(2)(B)
- **PII/confidentiality** - handling protocol for sensitive personal data
- **Forensic imaging** - chain of custody if device forensics required
- **IT/custodian depositions** - 30(b)(6) topics re: ESI systems
- **Dispute resolution** - meet-and-confer → magistrate referral → motion practice

### 9. Proposed Court Order

- Signature blocks for all counsel of record, Judge signature line incorporating FRE 502(d) protections, Case number and order title formatted for docketing

## Pitfalls & Checks

- **No brackets in final output** - resolve all gaps from case materials or flag for attorney input
- **State court** - cross-check against applicable state e-discovery rules; not all states track FRCP
- **Sedona Principles** - reference current edition as interpretive backdrop where appropriate; verify edition number
- **Technical specs** - must be implementable by IT vendors without further clarification
- **Tone** - maintain neutral, cooperative language; this is a joint stipulation, not adversarial pleading, Include rolling production schedule and volume estimates if available from meet-and-confer materials

---

## Scotland/UK Adaptation

### Core Structural Differences

US e-discovery (FRCP 26/34, FRE 502) has no direct equivalent in Scottish civil procedure. The Scottish regime is based on **commission and diligence for recovery of documents**.

| US Concept | Scottish/UK Equivalent |
|---|---|
| FRCP 26(f) - meet and confer | No equivalent; recovery is court-ordered |
| FRCP 34 - document production requests | **Specification of documents** (OCR 28 / RCS 35) |
| FRCP 26(b)(1) - proportionality | Court discretion to limit recovery (RCS 35.6; OCR 28.5) |
| FRE 502(d) - clawback order | **No equivalent specific rule**; common law waiver principles apply. Parties may agree clawback, but court order needed for binding effect |
| TAR / predictive coding | Increasingly used in commercial litigation; not codified in rules |
| Privilege log | Required in practice; not prescribed in court rules |
| ESI protocol | No standard form; parties agree or court determines |
| Preservation (litigation hold) | Common law duty to preserve; no specific rule (obstruction/perjury consequences) |

### Scottish Civil Procedure: Document Recovery

1. **Specification of Documents**: A party lodges a specification listing categories of documents sought. Court grants warrant for commission and diligence.
2. **Commissioner**: Court-appointed solicitor (typically) who oversees inspection and recovery.
3. **Recovery**: Commissioner may order documents, email, ESI produced; can examine on oath.
4. **Confidentiality/privilege**: Commissioner determines competency; appeals to court.
5. **No automatic discovery**: Unlike FRCP 26(a)(1), Scotland has no initial mandatory disclosure.

### ESI Protocol Components (Scottish Adaptation)

| Component | US (FRCP) | Scottish Equivalent |
|---|---|---|
| Custodian identification | Yes | Same, identify key custodians |
| Search terms / TAR | Yes | Same, used by commissioner |
| Date ranges | Yes | Same, define scope |
| Production format (TIFF/native) | Yes | Same, commissioner determines |
| Metadata fields | Yes | Increasingly common; not codified |
| Deduplication | Yes | Same, practical |
| Privilege log | Yes | Required in practice |
| Clawback agreement | FRE 502(d) | **Contractual clawback only**; court order recommended for 3rd-party effect |

### Key Differences for Practitioners

1. **No US-style discovery**: Scottish civil procedure does not have the broad, party-driven disclosure that FRCP provides. Recovery is court-supervised and narrower.
2. **Commissioner role**: A court-appointed commissioner presides over recovery, not party-driven like US discovery.
3. **No FRE 502(d)**: Clawback protection requires either: (a) a contractual agreement between parties (binding on parties only); (b) a court order (binding on third parties). No equivalent of the automatic 502(d) protection.
4. **Criminal procedure**: The Criminal Justice (Scotland) Act 2016 and Criminal Procedure (Scotland) Act 1995 govern ESI recovery in criminal matters, different from civil.
5. **Data protection**: UK GDPR and Data Protection Act 2018 impose restrictions on processing personal data in e-discovery, must be considered in protocol.
6. **Legal professional privilege**: Governed by Scots common law (not codified). Concept is narrower than US work-product doctrine.
7. **Repositories**: Email, SharePoint, Teams, and cloud platforms are all recoverable under Scottish procedure, subject to commission scope.

### Retained Value

The skill's structure for ESI protocol agreements is adaptable for:
- **Joint minutes of agreement** in Scottish commercial litigation (document recovery terms)
- **Commission specifications** - formulating categories of documents and ESI for recovery
- **Confidentiality protocols** - agreed terms for handling confidential documents during recovery
- **Data protection impact assessments** for ESI processing

[SCOTS: Replace all FRCP/FRE references with Scottish court rules. The technical ESI handling framework (search terms, dedup, production format, metadata) transfers directly as it is platform-agnostic. The procedural framework must be entirely rewritten to reflect commission and diligence practice rather than party-driven discovery.]

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
