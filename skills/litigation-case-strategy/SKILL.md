---
name: litigation-case-strategy
language: en
description: 'Develops comprehensive litigation strategy across the full case lifecycle, from initial assessment through discovery, motion practice, trial preparation, and appeal. Produces case theory analysis, chronologies from document sets, discovery plans, deposition outlines, brief drafts, cross-examination questions, and appellate record summaries. Use when evaluating a new litigation matter, preparing case strategy memos, building case chronologies from emails or documents, preparing for depositions, drafting motions or briefs, developing trial strategy, or preparing appellate filings. Trigger keywords: litigation strategy, case assessment, case theory, case chronology, discovery plan, deposition prep, motion to dismiss, summary judgment, trial preparation, cross-examination, appellate brief, argument evaluation, case timeline. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
metadata:
  author: casemark
  practice_areas:
  - Litigation
  document_types:
  - Memo
  - Brief
  - Summary
  skill_modes:
  - Analysis
  - Drafting
  - Research
---

# Litigation Case Strategy

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

Develops and pressure-tests litigation strategy across the full case lifecycle. Takes case documents as input and produces structured work product, from initial case assessment through appellate practice.

## Prerequisites

1. **Case documents** - complaints, answers, key correspondence, contracts at issue, prior court orders, relevant statutes
2. **Procedural posture** - current stage (pre-filing, pleading, discovery, pre-trial, trial, post-trial, appeal)
3. **Client role** - plaintiff or defendant; first-party or third-party
4. **Jurisdiction** - court, applicable law, any special procedural rules
5. **Case objectives** - desired outcome, settlement authority if any, budget constraints
6. **Known facts** - key facts favorable and unfavorable; witness list if available

Specify which stage(s) to focus on, or request a full lifecycle assessment.

## Stage 1: Initial Case Assessment

### Case Theory Development

From the originating documents, develop:

1. **Factual narrative** - chronological summary of events giving rise to the dispute
2. **Legal theories** - each viable claim or defense with:
   - Elements required
   - Facts supporting each element (cite to specific documents)
   - Facts undermining each element (adverse facts)
   - Strength assessment (Strong / Moderate / Weak) with reasoning
3. **Opposing theories** - anticipate the other side's best arguments
4. **Leverage analysis** - settlement value drivers, litigation cost exposure, publicity risk, business relationship impact
5. **Early case budget** - estimated phases and resource requirements

### Document-Based Chronology

When provided with a set of documents (emails, contracts, letters, filings):

1. Extract key events with:
   - Date and time (where available)
   - Participants (sender/recipient for correspondence)
   - Event description (one sentence)
   - Source document reference
   - Significance to case theory
2. Sort chronologically
3. Flag gaps, periods with no documentation that may require follow-up
4. Identify pivotal events, turning points that strengthen or weaken the case
5. Note privilege concerns, flag potentially privileged communications

Output as a structured chronology table:

| Date | Event | Participants | Source | Significance | Notes |
|---|---|---|---|---|---|

## Stage 2: Discovery Planning

### Discovery Strategy

1. **Information needs** - what facts must be established, from which sources
2. **Document requests** - targeted RFPs tied to case theories, with specific document categories and date ranges
3. **Interrogatories** - contention interrogatories and fact interrogatories tied to elements
4. **Deposition targets** - priority witnesses with justification and sequencing rationale
5. **Third-party discovery** - subpoenas needed, custodians, potential objections
6. **Preservation obligations** - litigation hold scope, key custodians, ESI sources
7. **Proportionality analysis** - scope justified relative to amount in controversy

### Discovery Response Review

When reviewing received discovery:
- Evaluate sufficiency of responses against the requests, Identify evasive, incomplete, or boilerplate objections, Flag documents that support or undermine case theories, Generate follow-up requests or meet-and-confer points, Note any privilege log issues

## Stage 3: Deposition Practice

### Deposition Preparation

For each deponent, produce:

1. **Witness profile** - role, relationship to events, likely knowledge areas, credibility factors
2. **Key topics** - organized by case theory, not chronologically
3. **Question outlines** - structured by topic with:
   - Foundation questions (establish knowledge base)
   - Substantive questions (elicit key admissions)
   - Impeachment questions (prior inconsistent statements, documents)
   - Pin-down questions (foreclose escape routes)
4. **Exhibit list** - documents to use, sequence, and purpose for each
5. **Risks** - what the deponent might volunteer that hurts the case; how to handle

### Deposition Summary

From a transcript, extract:
- Key admissions (with page:line citations)
- Inconsistencies with other testimony or documents, Topics where witness was evasive or non-responsive, New facts or leads revealed, Impeachment material for trial, Areas requiring follow-up discovery

## Stage 4: Motion Practice

### Brief and Motion Drafting

For any motion type (dismiss, summary judgment, in limine, compel, sanctions):

1. **Legal standard** - applicable standard of review with controlling authority
2. **Argument structure** - organize by strongest argument first; each argument includes:
   - Legal rule with citation
   - Application to case facts (cite record)
   - Anticipate and address counterarguments
   - Conclusion on this point
3. **Statement of facts** - persuasive but accurate; cite record throughout
4. **Procedural requirements** - page limits, local rules, certificate of conference if required

### Argument Evaluation

When provided with a draft brief or complaint:

1. **Strength assessment** - grade each argument (Strong / Moderate / Weak)
2. **Vulnerability analysis** - identify what opposing counsel will attack:
   - Factual gaps or unsupported assertions
   - Legal authority that cuts the other way
   - Logical weaknesses in the argument chain
   - Procedural deficiencies
3. **Improvement suggestions** - for each vulnerability:
   - Additional authority to cite
   - Factual support to add
   - Alternative framing
   - Language tightening
4. **Missing arguments** - theories or authorities not raised that should be considered
5. **Opposing brief preview** - draft the strongest response the other side could file

## Stage 5: Trial Preparation

### Cross-Examination Development

For each opposing witness:

1. **Objectives** - what admissions or impeachment points to achieve
2. **Question sequences** - leading questions organized by topic:
   - Establish the undisputed fact
   - Box in the witness with prior statements
   - Confront with contradicting document or testimony
   - Secure the admission or demonstrate the inconsistency
3. **Exhibit choreography** - when to introduce each document, foundation requirements
4. **Contingency plans** - if witness denies expected answer, alternative paths
5. **Red lines** - questions to avoid (opens door to harmful testimony)

### Trial Document Organization

From the case record, identify and organize:
- Exhibits by witness and topic, Demonstratives needed, Stipulations to propose, Motions in limine (offensive and defensive)
- Jury instructions / proposed findings of fact

## Stage 6: Post-Trial and Appeals

### Appellate Analysis

1. **Preserved issues** - identify which trial objections and motions preserved error
2. **Standards of review** - for each potential issue (de novo, abuse of discretion, clear error, plain error)
3. **Issue prioritization** - rank appellate issues by:
   - Likelihood of reversal
   - Standard of review favorability
   - Strength of record support
   - Impact if won (remand vs. reversal with direction)
4. **Record compilation** - identify key transcript excerpts, exhibits, and orders for the appendix
5. **Argument outline** - for each issue: error, prejudice, relief sought

## Guidelines

- Every factual assertion must cite a specific source document, exhibit, or transcript reference, Present both favorable and unfavorable facts, do not omit adverse information, Grade arguments honestly, a "Weak" rating with explanation is more useful than false confidence, Tailor all work product to the specific jurisdiction's rules and standards, Mark [VERIFY] on any case citation, statutory reference, or local rule not confirmed against current authority, Distinguish between facts in the record and inferences drawn from those facts, When building chronologies, include only events supported by documents, do not interpolate, For deposition outlines, use leading questions only (cross-examination style) - never open-ended, Maintain attorney-client privilege awareness, flag communications that may be privileged before including in work product, Separate strategic recommendations from factual analysis

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
