---
name: body-camera-incident-summary
language: en
description: 'Transforms police body camera transcripts into structured 10-section legal summaries with timestamp-cited verbatim statements, constitutional issue spotting, evidence inventory, and probable cause articulation. Maintains strict neutrality for all parties. Use when analyzing BWC footage for discovery, pre-trial prep, or trial. Trigger: body camera, BWC, body worn camera, officer footage, use of force review, incident summary. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Body Camera Incident Summary

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

Produces a neutral 10-section legal summary from police body camera transcripts. Every factual claim cited `[HH:MM:SS]`. All dialogue verbatim, never paraphrase. Flag recording gaps at point of occurrence.

## Prerequisites

1. **Transcript(s)** - complete BWC transcript(s); load all officer feeds if multiple
2. **Supplemental materials** (optional) - incident reports, dispatch logs, officer statements
3. **Matter phase** - discovery, pre-trial, or trial (affects emphasis)

## Quick Start

1. Ingest all BWC transcripts and supplemental materials
2. Produce sections 1 to 10 in order below
3. Cite every factual claim `[HH:MM:SS]`; cross-reference timestamps across camera angles for force/search events
4. Flag issues in Section 10 with category tags and recommended next steps

## Output Sections

### 1. Case Information

| Field | Content |
|-------|---------|
| Date/Time | Recording start with time zone |
| Officers | Name, badge, role (primary/backup/supervisor/K-9/FTO) |
| Location | Address or intersection, city, county, state |
| Tracking IDs | Case no., incident no., CAD no. |
| Duration | Final timestamp; note late start or early cutoff |
| Technical deficiencies | Muted segments, obstructed views, interrupted recording |

State absent info explicitly, never infer.

### 2. Executive Summary

4 to 6 sentences: initiating event (traffic stop, Terry stop, dispatch, warrant, community caretaking), escalation/de-escalation arc, disposition (arrest/cite/release), primary legal issues (4A stop/search, Miranda, Graham v. Connor, qualified immunity).

### 3. Participant Identification

- **Subjects**: name/alias `[timestamp]`, warrants, probation/parole, medical/intoxication indicators
- **Officers**: name, badge, role; FTO/trainee relationship
- **Third parties**: relationship to subject; detained, questioned, or released

### 4. Chronological Timeline

Strict `[HH:MM:SS]` narrative at each inflection point:

| Milestone | Document |
|-----------|----------|
| Initiating event | Articulated basis, violation, RS factors, dispatch info |
| Search discussions | Complete officer dialogue revealing legal theory |
| Detention → arrest | PC statement; formal arrest language |
| Miranda | Verbatim warnings + subject response to each component |
| Each search | Scope, justification, temporal relation to consent/PC |
| Use of force | Commands (exact) → subject response type → force applied → interval → injury/medical |
| Contraband | Legal basis (plain view/consent/SITA/other); ownership claims verbatim |
| Database/dispatch | Warrant hits, effect on PC development |
| Supervisor arrival | Timestamp, stated purpose |
| Evidence collection | On-scene chain of custody actions |

### 5. Constitutional & Procedural Analysis

**4th Amendment**
- Stop validity: traffic (*Whren*), Terry (*Terry v. Ohio*), extension (*Rodriguez*)
- Consent: exact language + response; voluntariness (*Schneckloth v. Bustamonte*)
- PC warrantless: *Carroll* (vehicle); inventory pretext analysis, SITA: *Gant* (vehicle), *Riley* (cell phone)
- K-9: sniff justification, detention duration, alert description, *Florida v. Harris*

**5th Amendment / Miranda**
- Custody attachment moment; verbatim warnings; flag deviations, Waiver: knowing/voluntary/intelligent (*Colorado v. Connelly*)
- Invocations: exact language; *Edwards* / *Davis* compliance, Post-invocation questioning → suppression flag

**Use of Force, Graham v. Connor**
- Severity of crime; immediate threat; active resistance/flight, Force proportionality; temporal gap (compliance → continued force)
- Contemporaneous justification verbatim; flag post-hoc rationalization

**Arrest Authority** - PC articulation; warrant or warrantless analysis

**Additional**: 1A (recording police), 6A (counsel invocation), state constitutional provisions, *Brady/Giglio* disclosure

### 6. Physical Evidence Catalog

Table per item: description, discovery timestamp, location, legal basis, ownership claims, chain of custody actions.

Detail by type:
- **Controlled substances**: type, form, packaging, field test, weight, use vs. distribution indicators
- **Firearms**: type, make/model, loaded status, serial
- **Currency**: denominations, total, forfeiture warnings
- **Paraphernalia**: items, residue, usable quantities

### 7. Verbatim Statements & Legal Admissions

Format: `"[exact quote]" - [SPEAKER] [HH:MM:SS]`

Organize by category: admissions/inculpatory, exculpatory/denials, rights invocations (note officer response), inconsistent statements (chronological), excited utterances, third-party statements, comprehension/capacity disclosures.

Excerpt lengthy statements with ellipses. Never paraphrase statements bearing on legal interpretation.

### 8. Officer Observations & PC Articulation

| Type | Capture |
|------|---------|
| Olfactory | Odor description, source, fresh vs. burnt; alcohol breath vs. vehicle |
| Visual | Furtive movements, plain view items, impairment indicators |
| Auditory | Slurred speech, concealment sounds, overheard conversations |
| Training/experience | Verbatim interpretations |
| Standardized tests | FSTs, PBT result, DRE findings, refusals |
| Threat/safety | Weapon bulges, posturing, environmental factors |

Reproduce RS/PC articulation verbatim. Flag post-hoc rationalization.

### 9. Disposition & Post-Arrest

- **Arrests**: charges (felony/misdemeanor), enhancements
- **Citations**: violation, court date
- **Releases**: stated reason (may reveal evidentiary weakness)
- **Vehicles**: impound basis, inventory procedures, third-party release
- **Evidence**: lab submissions, safekeeping, currency forfeiture
- **Transport**: destination, medical clearance
- **Post-arrest statements**: Miranda status; patrol vehicle admissions
- **Victims/witnesses**: contact info, injury documentation, protective orders

### 10. Critical Issues for Further Review

Flag each with category tag, specific facts, legal framework, and recommended next step.

| Tag | Issue |
|-----|-------|
| `[SUPPRESS]` | 4A/5A violation → suppression motion |
| `[MIRANDA]` | Equivocal invocation; post-invocation questioning |
| `[FORCE]` | Disproportionate force; Graham excessive force claim |
| `[GAP]` | Audio/video deficiency at critical moment |
| `[CONFLICT]` | Timestamp/narrative inconsistency |
| `[DISCOVERY]` | Brady/Giglio material; informant disclosure |
| `[POLICY]` | Department policy deviation; municipal liability |
| `[WITNESS]` | Bystander location; chain of custody deficiency |
| `[EXPERT]` | Training/certification requiring review |

## Pitfalls

- **Neutrality**: Document inculpatory and exculpatory evidence with equal precision
- **Absent info**: Affirmatively state when data is missing, never infer or speculate
- **Verbatim standard**: Never paraphrase rights invocations, consent exchanges, or admissions
- **Multiple feeds**: Cross-reference timestamps across camera angles for force and search events
- **Jurisdiction**: US federal floor; note state provisions providing greater protection
- **Uncertain citations**: Mark with `[VERIFY]`

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
