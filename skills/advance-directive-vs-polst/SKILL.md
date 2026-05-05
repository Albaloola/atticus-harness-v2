---
name: advance-directive-vs-polst
language: en
description: Produces a plain-language comparison of advance directives and POLST/MOLST forms, covering legal status, clinician signatures, emergency precedence, clinical appropriateness, and document coordination. Use when the user asks about advance directive vs. POLST, living will vs. DNR, which document EMS follows, POLST vs. MOLST vs. POST, whether a healthy person needs a POLST, or document coordination in elder law, estate planning, or serious illness contexts. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Advance Directive vs. POLST Comparison

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

Compares advance directives (legal planning documents) with POLST/MOLST forms (clinician-signed medical orders). These occupy different legal and clinical lanes, confusing them creates dangerous gaps in emergency care.

## Quick Start

Gather before drafting (skip if user says "use defaults"):

1. **State(s) of residence** - required before any jurisdiction-specific claim
2. **Existing documents** - current advance directive, POLST/MOLST, or neither
3. **Health status** - healthy / chronic illness / serious illness / advanced frailty / terminal
4. **Care setting** - home, hospital, SNF, assisted living
5. **Named healthcare agent** - appointed? successors?
6. **Primary question** - e.g., "Which form wins in an emergency?"

Defaults if no response: general comparison, no state-specific claims, healthy adult context, educational memo format.

## Core Distinction Table

| Feature | Advance Directive | POLST / MOLST |
|---|---|---|
| **Nature** | Legal planning document | Clinician-signed medical order |
| **Purpose** | Appoints agent; expresses values | Translates preferences into actionable orders |
| **Who signs** | Principal (+ witnesses/notary per state) | Clinician + patient or rep |
| **Who it instructs** | Agents, families, downstream clinicians | EMS, hospitals, facilities, immediately actionable |
| **Scope** | Broad: values, agent authority, end-of-life wishes | Specific: CPR, hospitalization, ventilation, nutrition |
| **Appropriate for** | All competent adults | Serious illness, advanced frailty, limited life expectancy |
| **EMS usability** | Generally not actionable at scene | Yes, designed for field portability |
| **Clinician signature?** | No | **Yes, invalid without it** |

## Emergency Precedence

**POLST takes practical precedence in the field.** EMS looks for medical orders, not legal documents.

- POLST "Do Not Attempt Resuscitation" → EMS generally follows it, Advance directive alone → EMS may default to full treatment
- **At hospital with agent present**: agent has legal authority (from directive) to request physician revoke/modify POLST
- **Conscious patient with capacity**: contemporaneous wishes control regardless of documents

> Never promise "EMS will always follow" any form. Availability, local protocol, validity, and state registry participation determine what gets followed.

## Clinical Appropriateness

POLST is **not** for healthy adults. Use the "Surprise Question": *Would you be surprised if this patient died in the next year?* If yes → POLST is premature.

**Nursing home warning**: Facilities sometimes present POLST as routine intake paperwork. Clients should not sign without a goals-of-care discussion with their physician about actual prognosis.

## Document Coordination

Advance directive = values framework + agent authority. POLST = current clinical goals as orders. They must be consistent.

- **Conflict** (directive says "do everything," POLST says "DNR"): clinicians often follow the most current, most specific, properly signed order, state-dependent. Treat inconsistency as urgent.
- **Agent role**: can participate in POLST discussions and request physician updates, but **cannot unilaterally revoke** a POLST. Modification requires clinician to cancel and reissue.
- **Access**: directive accessible at hospital for agent authority proof; POLST physically accessible to EMS (refrigerator, chart front, state registry).

## Deliverable

Draft a memo or client handout covering:

- Plain-language definitions of each document, Who signs each; why clinician signature is essential for POLST, Emergency scenario (practical, scenario-based)
- Whether POLST is appropriate given client's health status, How to ensure consistency between documents, Next steps: update directive / initiate POLST conversation with physician / void outdated copies

Use analogy: advance directive = "constitution," POLST = "executive order."

## Post-Draft Checks

Ask after delivering:

1. Does this answer your specific question?
2. Do you have both documents, are they consistent?
3. Want help drafting or updating either document? (separate skill)
4. Any out-of-state care scenarios to address?

## State Terminology

Adapt to the state's label before finalizing:

| Acronym | States |
|---|---|
| POLST | CA, OR, WA, others |
| MOLST | NY, MD |
| MOST | NC, SC |
| POST | ID, TN, UT, WV, others |
| TPOPP | MN |
| Out-of-Hospital DNR only | FL, TX (limited scope) |

Verify via the National POLST program directory before asserting any state's form name.

## Guardrails

**Scope**: This skill explains and compares, does not draft documents, determine capacity, or resolve validity disputes.

**Anti-hallucination**:
- No state-specific claims without verified jurisdiction, No invented statutory citations or case names, No assertions about POLST signer eligibility without verification, mark `[VERIFY]`
- No medical advice (e.g., which POLST boxes to check)
- No promises any document "will always be honored"

**Quality checklist**:
- [ ] Core distinction table accurate
- [ ] Emergency precedence scenario-based
- [ ] Clinical appropriateness assessed for client's health
- [ ] POLST form name matches state terminology
- [ ] Agent role and limitations explained
- [ ] Document consistency addressed
- [ ] Citations verified or marked `[VERIFY]`
- [ ] Next steps provided
- [ ] Disclaimer included

**Required disclaimer**: *This is general legal information, not legal advice. Review with a licensed attorney before use in any client matter and with a licensed clinician before any medical decisions are implemented.*

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
