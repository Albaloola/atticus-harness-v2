---
name: evidence-liability-summary
language: en
description: Generates a structured evidence and liability summary for plaintiff-side personal injury negligence claims. Triggers when the user needs liability analysis, negligence element breakdowns, evidence cataloging with gap identification, discovery assessment, or pre-trial case evaluation. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Evidence & Liability Summary

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

Synthesizes collected evidence into a structured negligence liability analysis (duty, breach, causation, damages) for plaintiff-side personal injury litigation.

## Prerequisites

Gather before starting:

- **Incident facts** - date, time, location, parties, basic chronology
- **Evidence collected** - documents, witness statements, photos/video, medical records, digital evidence
- **Medical records** - treatment history, bills, prognosis, expert reports if available
- **Jurisdiction** - governing state/federal law
- **Defendant info** - identity, relationship to plaintiff, applicable standard of care

## Workflow

Mark the output **PRIVILEGED AND CONFIDENTIAL, ATTORNEY WORK PRODUCT**.

### Step 1 - Case Overview

| Element | Content |
|---|---|
| Parties | All parties by legal designation (plaintiff, defendant, third parties) |
| Incident | Date, time, location, circumstances |
| Chronology | Pre-incident through aftermath timeline |
| Gaps | Timeline gaps or inconsistencies needing investigation |

Write for a lawyer unfamiliar with the matter.

### Step 2 - Evidence Catalog

For each item, record:

| Field | Description |
|---|---|
| Exhibit # | Unique identifier |
| Category | Documentary / Testimonial / Physical / Digital |
| Date | Creation or collection date |
| Source | Custodian or origin |
| Description | Brief content summary |
| Relevance | High / Medium / Low probative value |
| Issues | Privilege, hearsay, authentication, admissibility concerns |

Flag chain-of-custody gaps, authentication needs, compelling evidence, and discovery gaps.

### Step 3 - Negligence Element Analysis

#### A. Duty of Care

- **Source**: statute, regulation, professional standard, common law, special relationship
- **Standard**: reasonable person, industry standard, professional code, cite authority
- **Defense anticipation**: expected denial of duty with counter-analysis

#### B. Breach of Duty

- Identify specific acts/omissions constituting breach, Map each to supporting evidence by exhibit #
- Compare conduct against applicable standard, Reference expert testimony where technical knowledge required, Address anticipated defenses (industry compliance, regulatory adherence)

#### C. Causation

| Type | Test | Analysis |
|---|---|---|
| Actual (cause-in-fact) | "But for" test | Address alternative causes; show substantial factor |
| Proximate (legal cause) | Foreseeability | Address superseding/intervening causes |
| Multiple parties | Comparative fault / joint & several | Apportion under governing law if applicable |

#### D. Damages

| Category | Items |
|---|---|
| **Economic** | Past/future medical expenses, lost wages, lost earning capacity, property damage |
| **Non-economic** | Pain and suffering, emotional distress, loss of enjoyment of life, loss of consortium |
| **Total** | Low to high range |

- Support amounts with bills, employment records, estimates, expert testimony, Include present-value calculations for future damages, Address mitigation and pre-existing conditions

### Step 4 - Conclusions & Recommendations

Rate each element:

| Element | Strength (Strong / Moderate / Weak) | Key Risk |
|---|---|---|
| Duty | | |
| Breach | | |
| Causation | | |
| Damages | | |

Then provide:

- Case valuation range with comparable verdict/settlement basis, Discovery gaps and recommended next steps, Expert witnesses to retain, Settlement target range and strategy, Motion practice opportunities, Statute of limitations status and procedural deadlines, Risk assessment, recommend proceed / settle / ADR

### Step 5 - References

- Legal authorities in Bluebook format, Evidence cross-reference table (exhibit #, description, file location)
- Expert reports (name, credentials, date, key opinions)

## Pitfalls & Checks

- Every factual assertion must trace to a specific exhibit, no unsupported conclusions, Use `[VERIFY]` for any citation not confirmed against primary sources, Address jurisdiction-specific negligence standards (comparative vs. contributory)
- Acknowledge weaknesses candidly, plaintiff-side framing must still be honest about defense arguments, Consider ethical obligations regarding candor in merit evaluation

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
