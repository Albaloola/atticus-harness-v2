---
name: mediation-brief
language: en
description: Drafts mediation briefs for commercial litigation that educate the mediator on facts, law, damages, and litigation risks while advancing settlement. Use when preparing for mediation sessions, drafting pre-mediation submissions, or creating settlement briefs. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Mediation Brief

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

Drafts a persuasive mediation brief that educates the mediator and advances settlement while demonstrating good faith.

## Prerequisites

Gather before drafting:

- **Pleadings/case file** - complaint, answer, counterclaims, dispositive motions
- **Discovery materials** - key depositions, document productions, interrogatory responses
- **Damages documentation** - invoices, expert reports, lost-profit analyses
- **Mediation logistics** - mediator name, deadline, page limits, confidentiality rules
- **Settlement parameters** - authority range, priorities, non-monetary interests

## Quick Start

1. Confirm whether brief is exchanged with opposing counsel or mediator-only
2. Collect all prerequisites above
3. Draft each section following the structure below
4. Mark uncertain citations with `[VERIFY]`
5. Target 10 to 15 pages unless mediator specifies otherwise

## Brief Structure

### I. Caption & Introduction (½ page)

- Case caption, mediation date, mediator name, One-paragraph summary: parties, claims, amount in controversy, relief sought

### II. Statement of Facts (2 to 4 pages)

- Chronological with topic sub-headings, Tone: neutral but persuasive, acknowledge weaknesses to build credibility, Pin every material fact to a document, deposition cite, or exhibit, Flag disputed facts clearly; present client's version with supporting evidence

### III. Legal Analysis (2 to 3 pages)

State each claim/defense as elements, then map evidence:

| Claim/Defense | Element | Supporting Evidence | Strength |
|---|---|---|---|
| Breach of contract | Existence of agreement | Signed contract (Ex. A) | Strong |

- Cite controlling authority in Bluebook format, Address statute of limitations, affirmative defenses, evidentiary issues

### IV. Damages Assessment (1 to 2 pages)

| Category | Client's Calculation | Opposing Party's Likely Position |
|---|---|---|
| Economic damages | $ | $ |
| Non-economic damages | $ | $ |
| Prejudgment interest | $ | N/A |
| Attorneys' fees (if recoverable) | $ | $ |
| **Total** | **$** | **$** |

- Reference supporting documentation for each line item, Note verdict range from comparable cases if available

### V. Litigation Risk Assessment (1 page)

Present candidly, this builds mediator trust:

- Strengths of client's position, Weaknesses and evidentiary gaps, Opposing party's best arguments, Cost-of-litigation estimate through trial, Timeline to trial and appellate risk, Collectability concerns

### VI. Confidential Mediator Section

> Mark clearly: **"CONFIDENTIAL, FOR MEDIATOR ONLY"**

- Settlement authority (range or ceiling/floor)
- Priority of interests (speed, confidentiality, ongoing relationship, precedent)
- Non-monetary terms client would accept or offer, Known obstacles to resolution and suggested approaches, Emotional or business dynamics the mediator should understand

### VII. Settlement Framework (½-1 page)

- Client's opening position or demand, Creative structures: installments, future performance, releases, confidentiality, non-disparagement, Framework for bridging the gap (mediator's proposal, bracketed negotiation)

## Common Pitfalls

- **One-sided briefs** - acknowledge weaknesses or lose mediator trust
- **Inflammatory language** - keep tone professional and solution-oriented
- **Unverified citations** - Bluebook format required; mark uncertain cites `[VERIFY]`
- **Exceeding page limits** - comply strictly with mediator's rules
- **Late submission** - submit per mediation agreement timeline; lateness undermines credibility
- **Wrong confidentiality scope** - confirm exchange rules before drafting

---

**Key changes made:**

- **Description**: Trimmed from 294 to 198 chars, removed redundant structural enumeration, kept trigger guidance
- **Removed `tags`**: Not part of the Agent Skills spec frontmatter
- **Added Quick Start**: Provides the fast-path workflow per best practices
- **Renamed "Output Structure" → "Brief Structure"**: Clearer heading
- **Renamed "Guidelines" → "Common Pitfalls"**: Reframed as anti-patterns per the authoring-skills template
- **Consolidated facts table into bullet list**: The Statement of Facts table added tokens for minimal value; bullets convey the same guidance more efficiently
- **Removed checkbox syntax from Risk Assessment**: Checkboxes implied a tracking workflow that doesn't apply here; plain bullets are cleaner
- **Cut redundant prose**: Removed restated guidance already implied by the structure (e.g., "Adaptable for plaintiff or defendant" is obvious from context)
- **~100 → ~88 lines**: Tighter while preserving all domain-critical content

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
