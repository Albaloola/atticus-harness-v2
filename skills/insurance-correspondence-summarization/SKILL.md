---
name: insurance-correspondence-summarization
language: en
description: Produces structured summaries of insurance claims correspondence including coverage letters, reservation of rights (ROR), denial letters, and claim file documents. Extracts policy details, coverage positions, claims chronology, settlement posture, and liability exposure. Use when summarizing claim files, coverage disputes, ROR letters, denial letters, or multi-document insurance correspondence threads. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Insurance Correspondence Summarization

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

Synthesizes insurance claims correspondence into a structured briefing with actionable coverage and litigation intelligence. Jurisdiction: US.

## Prerequisites

1. **Claim correspondence** - coverage letters, ROR letters, denial letters, demand letters, claim notices, insurer responses
2. **Policy documents** - if available; flag if missing
3. **Underlying litigation materials** - if referenced (pleadings, case caption, court/docket)

## Output Structure

### 1. Executive Overview (2 to 3 paragraphs)

- Claim type, status, key parties (insured, insurer, claimant, counsel)
- Urgent coverage or liability issues needing immediate attention

### 2. Factual Background

- Underlying incident: date, location, parties, nature of alleged injury/damage/loss, Distinguish **undisputed facts** from **contested allegations**

### 3. Coverage Analysis

| Field | Details |
|---|---|
| Policy number(s) | |
| Coverage type(s) | |
| Policy period | |
| Limits / deductibles | |
| Insurer's position | Grant / ROR / Denial |
| Policy language cited | Quote with attribution |
| Disputes / ambiguities | |

### 4. Claims Chronology

| Date | Document | Sender → Recipient | Key Points |
|---|---|---|---|
| | | | |

Include: initial notice, coverage positions, ROR letters, demands, responses, ADR/coverage litigation filings.

### 5. Settlement Posture

- All demands and offers (with dollar amounts)
- Conditions attached to proposals, Status: ongoing / stalled / concluded

### 6. Missing Documents

List documents referenced but not provided that are needed for complete analysis.

### 7. Next Steps / Action Items

Flag: coverage response deadlines, investigation gaps, declaratory relief considerations, settlement authority needed.

## Guidelines

- **Synthesize across documents** - consolidate related information into single sections; do not summarize document-by-document
- **Quote policy language** verbatim when cited as coverage basis; include document name and date
- **Separate coverage from underlying litigation** - summarize underlying case only as it affects coverage analysis

## Critical Flags

Watch for and explicitly flag:

- **Bad faith indicators**: unreasonable delay, inadequate investigation, wrongful denial, failure to defend
- **Insured conduct issues**: cooperation clause concerns, late notice, misrepresentation
- **Procedural traps**: statute of limitations, notice requirements, conditions precedent

---

**Key changes from the original:**

- **Removed `tags`** - not part of the Agent Skills spec (only `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools` are valid frontmatter fields)
- **Tightened description** - removed redundant enumeration of audience roles; kept trigger keywords and concise functional summary
- **Added jurisdiction inline** to overview instead of burying it as a trailing bullet
- **Compressed verbose sections** - "Missing Documents" and "Next Steps" reduced to single directive lines instead of prose paragraphs
- **Split "Guidelines" into two focused sections** - core synthesis guidelines vs. critical flags to watch for, improving scannability
- **Removed redundant wording** throughout (e.g., "List any documents referenced but not provided that are needed for complete analysis" → "List documents referenced but not provided that are needed for complete analysis")
- **Line count reduced** from 69 to 65 lines while preserving all domain-specific content

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
