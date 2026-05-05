---
name: hearing-prep-summary
language: en
description: Produces a quick-reference hearing preparation summary synthesizing pleadings, evidence, witnesses, and governing law into issue matrices, exhibit cross-references, and procedural checklists. Use when preparing for motion hearings, evidentiary hearings, trials, administrative or arbitration hearings, or when asked for "hearing prep," "trial prep summary," "hearing brief," or "prep memo.". [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Hearing Preparation Summary

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

Single document that orients counsel, frames issues, and serves as a fast in-hearing reference. Covers every hearing type-motion, evidentiary, trial, administrative, arbitration.

## Prerequisites

Gather before starting:

1. Hearing notice/order (date, time, forum, scope)
2. Operative pleadings and amendments
3. Key motions, briefs, and oppositions
4. Docket sheet and relevant prior orders
5. Evidence: exhibits, declarations, discovery excerpts, transcripts
6. Witness list with contact info and prior statements
7. Applicable rules and authorities (or a request to research them)

## Output Sections

Fill every section that applies. Omit sections that are irrelevant to the hearing scope.

### 1. Hearing Snapshot

| Field | Value |
|---|---|
| Hearing type | |
| Date / time | |
| Location / courtroom / link | |
| Judge / officer / panel | |
| Matter(s) set | |
| Time limits | |
| Burdens of proof | |
| Applicable rules | |

### 2. Case Background

5 to 10 chronological, fact-only bullets with source citations.

### 3. Procedural Posture

| Item | Date | Source | Impact |
|---|---|---|---|
| Complaint / petition | | | |
| Answer / response | | | |
| Key motions / rulings | | | |
| Pending issues | | | |

### 4. Issues Matrix

Core section. One row per disputed issue.

| Issue | Standard | Moving party position | Opposing position | Key facts | Key authorities | Evidence tie-ins |
|---|---|---|---|---|---|---|

### 5. Legal Standards & Authorities

Include pin cites when available. Flag uncertain citations with `[VERIFY]`.

| Issue | Statute / Rule | Leading cases | Notes |
|---|---|---|---|

### 6. Evidence & Exhibits

| Exhibit ID | Description | Authenticity status | Relevance to issue | Sponsor witness |
|---|---|---|---|---|

### 7. Witnesses

| Witness | Role | Expected testimony | Prior statements | Cross targets | Impeachment |
|---|---|---|---|---|---|

### 8. Evidentiary / Procedural Flags

Include only what is relevant:

- Foundation / authentication gaps to cure, Hearsay risks and available exceptions, Motions in limine status and rulings, Likely objections from each side, Expert admissibility issues (methodology, qualifications, relevance)

### 9. Strategy & Risk

| Strengths | Weaknesses | Opponent likely themes | Recommended responses | Settlement / stipulation leverage |
|---|---|---|---|---|

### 10. Hearing Logistics & Deadlines

- Briefing or exhibit exchange deadlines, Required filings (trial brief, witness list, exhibit list, proposed order)
- Tech needs (presentation, video, remote witness)
- Courtroom procedures (local rules, standing orders)
- Interpreter or accessibility needs

### 11. Examination Outlines

Include only if testimony is expected.

```
Witness: [Name]
Purpose: [Theme + issue]
Direct:
  - Topic 1: [Q objectives]
  - Topic 2: [Q objectives]
Cross:
  - Topic 1: [Impeachment / concession]
  - Topic 2: [Contradiction / bias]
```

### 12. Open Items

Actionable items with owner and due date if known.

## Guardrails

- Cite sources for every factual assertion and quote.
- Separate facts from arguments; label advocacy explicitly.
- Never assume law or local rules-verify and mark uncertainties with `[VERIFY]`.
- Prefer tables and checklists over narrative.
- Stay within hearing scope; omit unrelated case history.
- Note jurisdiction and forum in the Hearing Snapshot; adjust standards accordingly.

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
