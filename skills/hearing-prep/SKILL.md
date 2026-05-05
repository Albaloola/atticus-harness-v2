---
name: hearing-prep
language: en
description: Generates structured hearing preparation briefings from case documents, evidence, authorities, and procedural details. Use when preparing for court hearings, administrative hearings, arbitrations, trials, motion hearings, evidentiary hearings, or status conferences. [Atticus UK/Scots refined]
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

Synthesizes case materials into a structured briefing document for advance preparation and quick reference during proceedings.

## Prerequisites

- **Case documents** - pleadings, discovery, correspondence, exhibits
- **Hearing details** - date, time, location, presiding judge/officer, proceeding type
- **Witness information** - expected witnesses, depositions, declarations
- **Legal authority** - controlling statutes, rules, case law

## Output Structure

### 1. Procedural Header

Table with: hearing date/time, location/courtroom, presiding judge/officer, proceeding type (motion hearing / evidentiary / status conference / trial / other), matters to be addressed, filing deadlines.

### 2. Case Background

- Parties and relationship, Genesis of dispute, Chronological procedural history through current posture, Prior rulings or orders affecting this hearing, Cite source documents for every factual assertion

### 3. Issue Analysis

For each discrete issue the court will consider:

- **Issue statement** - one-sentence framing
- **Factual background** - key facts with document citations
- **Legal standard** - controlling statute/rule/case law; mark uncertain citations `[VERIFY]`
- **Our position** - arguments and supporting evidence
- **Opposing position** - anticipated arguments and their evidence
- **Evidentiary considerations** - anticipated objections, authentication requirements, motions in limine

### 4. Witness Summary

For each anticipated witness:

- **Name / role** - relationship to case
- **Expected testimony** - key points
- **Prior statements** - deposition/declaration cites with page references
- **Credibility issues** - inconsistencies, impeachment material
- **Direct questions** - organized by topic, tied to legal theories
- **Cross-examination points** - for opposing witnesses

For expert witnesses, add: qualifications summary, opinions, methodology basis, Daubert/Frye vulnerability assessment.

### 5. Exhibit Inventory

Table with columns: exhibit #, description, relevance (issue/witness), pre-marked status, authentication status, stipulation status.

- Flag authenticity disputes, Cross-reference each exhibit to its supporting issue and/or witness

### 6. Strategic Assessment

- **Strengths** - strongest facts, favorable authority, equitable factors
- **Vulnerabilities** - weaknesses with suggested responses
- **Opposing counsel's likely approach** - anticipated arguments and tactics
- **Decision-maker considerations** - known ruling patterns, equitable factors beyond legal merits
- **Recommended presentation strategy** - order of proof, thematic framing

### 7. Procedural Checklist

- [ ] Trial brief / proposed findings filed by deadline
- [ ] Exhibit list exchanged
- [ ] Witness list exchanged
- [ ] Exhibits pre-marked and organized
- [ ] Technology tested for evidence presentation
- [ ] Local rules and standing orders reviewed
- [ ] Copies prepared for court and opposing counsel

## Pitfalls

- **Uncited facts** - every factual assertion must cite its source document so counsel can locate materials instantly
- **Unverified citations** - format legal citations properly; mark uncertain ones `[VERIFY]`
- **Minimizing weaknesses** - maintain objectivity; present honest assessment of both sides
- **Missing gaps** - explicitly flag missing documents, unresolved discovery, or unavailable witnesses
- **Poor organization** - group all analysis, evidence, and authority by the discrete issue it addresses

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
