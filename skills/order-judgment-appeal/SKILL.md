---
name: order-judgment-appeal
language: en
description: Drafts a U.S. appellate Order and Judgment memorializing disposition after review of a lower-court ruling. Covers captioning, jurisdictional recitals, standards of review, issue-by-issue holdings, remand directives, costs, and mandate language. Use when preparing an appellate order, judgment, disposition, affirm/reverse/remand order, or mandate-ready directive. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Order and Judgment on Appeal

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

Produces a final, enforceable appellate order and judgment stating jurisdiction, analysis, and disposition.

## Prerequisites

1. Appellate and lower-court case numbers
2. Party names with procedural roles (appellant, appellee, intervenor)
3. Trial judge name and date of order/judgment under review
4. Notice of appeal filing date and jurisdictional basis
5. Issues on appeal with applicable standards of review
6. Record citations for key facts and rulings
7. Disposition instructions (affirm/reverse/vacate/modify/remand)
8. Costs/fees authority and mandate issuance rule

## Quick Start

Draft in sequence: caption → jurisdiction → issues/standards → analysis → disposition → remand (if any) → costs/mandate → authentication.

## Output Structure

### 1. Caption Block

[APPELLATE COURT NAME]
[Division / District]

[Case Caption]
Appellate Case No. [___]
Trial Court No. [___]
Trial Judge: [___]

ORDER AND JUDGMENT
[Date]

### 2. Jurisdiction and Procedural History

Concise chronological summary establishing:
- Appealed order/judgment and date, Timely notice of appeal, Issues presented, Briefing and oral argument status, Standard(s) of review for each issue

### 3. Issues and Standards of Review

| Issue | Standard of Review | Record Reference |
|---|---|---|
| [Issue 1] | De novo / abuse of discretion / clearly erroneous / substantial evidence | [Cite] |

### 4. Analysis and Holdings

Per issue:

Issue [#]. [Statement]
Standard of Review: [standard]
Holding: [affirm/reverse/modify/vacate]
Reasoning: [1 to 3 sentences with controlling authority and record cite]

### 5. Disposition

IT IS ORDERED AND ADJUDGED that:
1. The [trial court order/judgment] is [affirmed/reversed/vacated/modified] as to [Issue].
2. The matter is [remanded] for [specific action].
3. [Costs/fees disposition].

### 6. Remand Instructions (if applicable)

Specify:
- Scope of remand and required proceedings, Limits on trial court discretion, Jurisdiction retained or returned, Deadline or timeline if imposed

### 7. Costs, Fees, and Mandate

Costs on appeal are awarded to [party] pursuant to [authority].
Attorney's fees on appeal are [granted/denied] and [remanded for determination / set at $X].
The mandate shall issue [date/under rule].

### 8. Authentication

DATED: [Date]

________________________________
[Presiding Judge/Justice], [Title]

ATTEST:
________________________________
Clerk of the Court

## Pitfalls

- Maintain neutral judicial tone, not advocacy, State the standard of review explicitly for every issue, Separate each issue's outcome in the disposition, no ambiguity, If modifying or remanding, specify exact changes or required actions, Use jurisdiction-specific formatting and citation rules, Include mandate language if required by local rule, Mark uncertain authority with `[VERIFY]`

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
