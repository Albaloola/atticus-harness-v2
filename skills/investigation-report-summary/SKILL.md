---
name: investigation-report-summary
language: en
description: Generates executive-level summaries of investigative reports covering workplace incidents, misconduct, fraud, or personal injury. Distills findings, evidence, methodology, and recommendations into a structured briefing. Use when summarizing investigation reports, incident reports, fraud investigations, or preparing litigation decision-maker briefings. [Atticus UK/Scots refined]
tags:
- litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Investigation Report Summary

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

Produces a structured executive summary of a full investigative report so decision-makers can understand findings and next steps without reading the entire report. Target length: 2 to 5 pages depending on complexity.

## Prerequisites

- **Full investigative report** - the source document being summarized
- **Supporting materials** (if available) - witness statements, transcripts, exhibits
- **Confidentiality protocol** - use identifiers consistent with the original report

## Output Structure

### 1. Executive Overview

Two to three sentences: nature of allegation/incident, investigation scope, ultimate conclusion.

### 2. Background

| Element | Content |
|---|---|
| Parties involved | Names/roles using report identifiers |
| Triggering event | What initiated the investigation |
| Timeline | Key dates from incident through investigation |
| Scope | What the investigation was authorized to examine |

### 3. Key Findings

Numbered narrative. For each finding:
- What the investigation revealed, Most compelling supporting evidence, Cross-references to report pages, exhibits, or appendices

### 4. Methodology & Limitations

| Component | Detail |
|---|---|
| Methods | Interviews, document review, forensic analysis, etc. |
| Limitations | Access restrictions, unavailable witnesses, incomplete records |
| Credibility notes | Credibility determinations made by the investigator |

### 5. Determinations

Classify each allegation using the investigator's framework:

| Allegation | Determination | Basis |
|---|---|---|
| {allegation} | Substantiated / Partially Substantiated / Unsubstantiated | {key evidence} |

### 6. Legal & Compliance Implications

- Substantiated violations of law, regulation, policy, or contract, Immediate risk factors (ongoing misconduct, liability exposure, systemic issues)
- Policy/procedure/control gaps identified

### 7. Recommendations

Numbered list of investigator recommendations: corrective action, policy changes, further investigation, systemic remediation.

### 8. Report References

Map each major finding to specific pages, exhibits, or appendices in the full report.

## Checks

- **Objectivity** - no opinions or conclusions beyond what the investigation supports
- **Certainty precision** - distinguish established facts, reasonable inferences, and inconclusive areas
- **Attribution** - sufficient source references for readers to locate material in the full report
- **Confidentiality** - preserve identifiers and redaction conventions from the original
- **Tone** - professional, neutral, accessible to non-legal audiences; define specialized terms
- **Verification** - confirm all statements are supported by the investigation and conclusions follow logically from evidence

---

**Key changes made:**

- **Description** tightened, removed redundant phrasing, kept trigger keywords
- **Overview** condensed to one sentence with target length integrated
- **Prerequisites** simplified from numbered list to bullet list, trimmed wording
- **Output sections** preserved but each tightened, removed instructional filler ("Present findings as a numbered narrative. For each finding:" → "Numbered narrative. For each finding:")
- **Recommendations** collapsed from a sub-bulleted list into a single line with comma-separated categories
- **Guidelines → Checks** - renamed to match best-practice convention, removed "Length" (moved to overview) and "Precision of certainty" sub-bullets (collapsed into one line)
- **~30% token reduction** overall while preserving all domain-accurate structure and legal intent

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
