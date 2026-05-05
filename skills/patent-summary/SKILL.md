---
name: patent-summary
language: en
description: Generates structured, prosecution-ready summaries of patent applications covering bibliographic data, claims analysis, and strategic observations under UK and European patent law. Use when summarising UK patent filings, preparing for UK IPO or EPO prosecution, conducting portfolio review, licensing negotiations, or freedom-to-operate analysis in the UK/European market. [Atticus UK/Scots refined]
tags:
- SCOTS, summarization, regulatory, drafting, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Patent Application Summary (UK/European Adaptation)

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

Produces a structured summary of a patent application for prosecution, licensing, litigation, or portfolio management. Requires the application document (specification, claims, abstract, drawings) and any priority/related filings. Default jurisdiction is the UK (UK Intellectual Property Office) with notes for the European Patent Office (EPO) where relevant. [SCOTS: Note] Patents are a UK-wide/reserved matter, the UK IPO covers Scotland; the EPO covers UK national validation.

## Quick Start

1. Gather the patent application and any related filings
2. Identify target audience (prosecution, licensing, litigation, portfolio)
3. Identify target jurisdiction (UK IPO / EPO / both)
4. Generate the summary following the output structure below
5. Flag prosecution risks and strategic observations
6. Review against checks at the bottom

## Output Structure

### 1. Executive Overview

Two to three sentences: invention essence, technical field, broadest claim scope.

### 2. Bibliographic Data

| Field | Extract |
|---|---|
| Application No. | - |
| Filing Date | - |
| Inventor(s) | - |
| Applicant / Proprietor | - |
| Priority Claims | - (date, country, number) |
| Related Applications | - (divisionals, continuations-note: UK law uses "divisional applications") |
| Technical Field | - |
| Designated States (EPO) | - (if Euro-PCT or EP application) |

### 3. Background & Problem

- Problem the invention addresses, Key prior art cited; how applicant distinguishes, Novelty and inventive step positioning (note: UK/EPO uses "inventive step" not "non-obviousness")

### 4. Invention Description

- How it works, components, steps, or architecture, Core innovations vs. prior art, Key embodiments with practical applications, Write accessibly for non-specialist attorneys; maintain technical precision
- [SCOTS: Note] Legal practitioners in Scotland typically instruct UK patent attorneys specialising in the relevant field

### 5. Drawings & Figures

| Figure | Description |
|---|---|
| Fig. N | - |

Summarise each referenced figure. Omit unreferenced figures.

### 6. Claims Analysis

| Claim | Type | Scope Summary |
|---|---|---|
| 1 | Independent | - |
| N | Independent | - |
| Key dependents | Dependent | - |

- **Total claims**: [count] - **Independent**: [count]
- **Format flags**: Note Swiss-type claims (second medical use), reach-through, or means-plus-function style (note: means-plus-function has different treatment under UK/EPO law compared to US, rarely accepted at UK IPO)

### 7. Strategic Observations

**Scope & Strength**

- Claim breadth assessment, Design-around vulnerabilities, Commercially significant dependent claim narrowings, Assessment of whether claims meet UK IPO/EPO requirement for clarity (Art. 84 EPC / s.14(5) Patents Act 1977)

**Prosecution Risk Flags**

| Issue | Risk | Notes |
|---|---|---|
| Clarity (s.14(5) PA 1977 / Art. 84 EPC) | Low/Med/High | - |
| Sufficiency (s.14(3) PA 1977 / Art. 83 EPC) | Low/Med/High | - |
| Inventive step (s.3 PA 1977 / Art. 56 EPC) | Low/Med/High | - |
| Novelty (s.2 PA 1977 / Art. 54 EPC) | Low/Med/High | - |
| Excluded subject matter (s.1(2) PA 1977 / Art. 52 EPC) | Low/Med/High | - (software/business methods) |

**Commercial & Portfolio**

- Licensing or FTO considerations, Recommended next steps, EPO validation strategy (for Euro-PCT or EP applications seeking UK national phase entry)

## Checks

- Cite specific section headings, claim numbers, and figure references throughout, Target 1 to 3 pages; balance comprehensiveness with conciseness, Use precise IP terminology (UK/EPO conventions); keep descriptions accessible to non-specialist attorneys, Flag potentially relevant uncited prior art with `[NOTE]`
- Do not opine on patentability, present observations only, For divisionals, note parent application relationship, Default jurisdiction: UK (UK IPO) unless specified otherwise; note EPO as alternative
- [SCOTS: Note] Scotland is within UK jurisdiction for patents, the UK IPO is the competent national office. Scottish court proceedings for patent disputes go to the Court of Session Outer House (commercial court) or the Intellectual Property Enterprise Court in London.

## Scotland/UK Adaptation

**Adapted for:** Scotland, UK, and European patent law

**Changes made:**
- Replaced USPTO with UK Intellectual Property Office (UK IPO) as default jurisdiction, Replaced 35 U.S.C. § 101-103 references with Patents Act 1977 ss.1-5 (and EPC Arts. 52-57)
- Replaced § 112 enablement/written description/definiteness with UK/EPC equivalents (s.14 PA 1977 / Arts. 83-84 EPC)
- Replaced "non-obviousness" with "inventive step" (s.3 PA 1977 / Art. 56 EPC)
- Replaced MPEP references with UK IPO Manual of Patent Practice (MoPP) and EPO Guidelines for Examination, Replaced Beauregard/Jepson claim format notes with Swiss-type/second medical use format notes, Replaced USPTO continuation/divisional rules with UK divisional practice (EPO and UK IPO)
- Replaced 20-year term from filing (US term is same; kept the note)
- Added EPO validation strategy and filing route options, Replaced US prior art standard with absolute novelty standard (Art. 54 EPC)
- Added excluded subject matter under s.1(2) PA 1977
- Added Scottish court jurisdiction note (Court of Session)

**Key Scottish/UK considerations:**
- Patents are a reserved matter, the same law applies across the UK (Patents Act 1977, EPC)
- UK IPO is the competent national authority for Scotland, Scottish patent litigants may bring actions in the Court of Session Outer House (Commercial Court) or pursue UK-wide relief in the Patents Court (England & Wales)
- The European Unified Patent Court (UPC) is not applicable to Scotland as the UK is not a participating member state, Supplementary Protection Certificates (SPCs) available for pharmaceutical/agrochemical patents (Regulation (EC) 469/2009 as retained)
- UK IPO examination is generally less adversarial than USPTO; examination reports are issued with compliance periods, Scotland has a strong life sciences and renewable energy patenting sector (consider industry-specific context)

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
