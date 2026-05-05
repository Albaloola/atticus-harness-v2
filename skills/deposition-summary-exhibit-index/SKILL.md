---
name: deposition-summary-exhibit-index
language: en
description: Produces a topic-based U.S. deposition summary with page/line citations and a keyed exhibit index linking testimony to documents. Use when creating deposition digests, exhibit-linked summaries, key document indexes, or discovery testimony maps in commercial litigation. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Deposition Summary with Exhibit Index

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

Topic-based deposition summary with integrated exhibit index, precise page/line citations, and neutral testimony characterizations.

## Quick Start

Gather before starting:
- Full deposition transcript with page/line numbering, Exhibit list with IDs/labels (filenames or Bates ranges)
- Witness name, role, date, parties, and caption block, Any protective order or confidentiality designations

## Workflow

### 1. Cover Block

Include: caption (case name, court, case no.), witness name/role, deposition date, counsel for deponent, reporting service, preparer, and preparation date.

### 2. Topic Summary Table

| Page/Line Range | Topic Summary |
|---|---|
| p. 12:3 to 18:22 | **Topic: Formation of Master Services Agreement**. Neutral 2 to 3 sentence summary with key admissions/denials. Cite critical statements by page/line. Reference exhibits inline: "Ex. 12 (Invoice 1043)". |
| p. 19:1 to 24:6 | **Topic: Scope of Services and Deliverables**. Note uncertainty or evasive answers. Link discussed exhibits. |

Rules:
- 2 to 3 neutral sentences per topic; no legal conclusions, Cite page/line for critical admissions or contradictions, Use specific, descriptive topic titles, Split rows when testimony shifts subtopic, Exhibit format: `Ex. 12 (Invoice 1043)` or `PX-12 (Invoice 1043)`

### 3. Exhibit Index

| Exhibit | Description | Testimony Page/Line | Witness Characterization |
|---|---|---|---|
| Ex. 12 | Invoice 1043 dated 3/5/2023 | p. 45:2 to 46:20 | Identified as company invoice; reflects services rendered |

Rules:
- Include every transcript-mentioned exhibit with all page/line references, One-sentence authentication/characterization summary, Map informal exhibit references to correct IDs

### 4. Key Admissions / Contradictions (Optional)

Include only if requested. Use exact citations:
- **Admission**: "No written approval existed for change order." (p. 78:4 to 10)
- **Contradiction**: "Claimed no notice of default; later admitted receipt of 6/2/2023 email." (p. 102:11 to 16; p. 148:3 to 9)

### 5. Output

Deliver as DOCX and PDF with hyperlinks to exhibits and transcript anchors. If linking is infeasible, include file paths or document IDs in brackets.

## Pitfalls and Checks

- Never guess page/line ranges-use exact transcript references only, Never add exhibits not discussed in the transcript, No advocacy or legal conclusions in summaries, Flag privilege or confidentiality issues; do not reproduce protected content, Note gaps explicitly if transcript is incomplete or exhibits are missing, Confirm compliance with any protective order or redaction protocol, Mark uncertain citations or exhibit IDs with `[VERIFY]`

---

It looks like I don't have write permission to the file. Could you allow the write, or would you like me to try again?

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
