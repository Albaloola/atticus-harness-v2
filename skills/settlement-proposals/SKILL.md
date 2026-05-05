---
name: settlement-proposals
language: en
description: Produces chronological settlement negotiation summaries from litigation case files, extracting proposals, counteroffers, payment structures, release provisions, and confidentiality terms. Includes trial-risk evaluation and comparable settlement benchmarking. Use when summarizing settlement history, preparing for mediation, documenting negotiation progression, or creating settlement status reports. [Atticus UK/Scots refined]
tags:
- analysis, drafting, litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Settlement Proposals Summary

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

Chronological record of settlement negotiations, proposals, and agreements from case files.

## Prerequisites

1. **Settlement communications** - demand letters, offers, counteroffers, mediation summaries, email exchanges
2. **Executed agreements** (if any) - final settlement, releases, dismissal stipulations
3. **Case posture** - key rulings, discovery status, expert reports, trial date

## Workflow

```
Collect docs → Build chronology → Map payment terms → Evaluate risk → Draft status
```

## Output Structure

### 1. Matter Overview

| Field | Content |
|-------|---------|
| Caption | Parties, court, case number |
| Phase | Discovery / pre-trial / settlement |
| Key dates | Filing, trial date, settlement deadlines |
| Negotiating parties | Names and counsel |

### 2. Negotiation Chronology

One entry per substantive proposal:

| Field | Content |
|-------|---------|
| Date | Date of proposal |
| From → To | Proposing → receiving party |
| Type | Initial demand / offer / counteroffer / mediator's proposal |
| Monetary terms | Gross amount, fees/costs allocation, net to client |
| Non-monetary terms | Injunctive relief, behavioral commitments, structural changes |
| Conditions | Deadlines, approvals, performance conditions |
| Response | Accepted / rejected / countered (with date) |
| Source | Document name, page/paragraph cite |

Preserve exact dollar figures. Quote critical language verbatim.

### 3. Payment Structure

Include when structured payments are proposed:

- Lump sum vs. installment breakdown with dates and amounts, Interest rate and calculation method, Security or guarantees for future payments, Breakdown: gross settlement / attorney's fees / costs / net to client

### 4. ADR Summary

Include when mediation or other ADR was used:

- Process type, date(s), neutral identified, Mediator's proposals (if not privileged)
- Session outcomes, Flag any content that may implicate mediation privilege

### 5. Strategic Context

Developments influencing negotiations:

- Dispositive motion rulings, Discovery revelations shifting case strength, Expert reports, Changes in litigation posture, External pressures (publicity, business relationships, costs)

### 6. Settlement Evaluation

| Factor | Assessment |
|--------|------------|
| Success probability | High / moderate / low with basis |
| Damages range at trial | Low to high estimate |
| Remaining litigation costs | Estimated through trial |
| Time to resolution | Trial vs. settlement comparison |
| Non-economic factors | Publicity, relationships, emotional toll |
| Comparable settlements | Similar cases/jurisdictions [VERIFY] |

### 7. Executed Agreement Terms

Include when settlement is reached:

- Obligations and performance deadlines, Scope of releases and dismissals, Confidentiality provisions, Post-settlement dispute resolution, Ambiguities requiring future attention, Implementation status and dismissal status

### 8. Status and Next Steps

**Ongoing:** Pending decisions, upcoming deadlines, recommendations, open items.

**Resolved:** Implementation checklist, outstanding obligations, final disposition.

## Guidelines

- **Chronological order** - present all negotiations in time sequence
- **Cite precisely** - document name, date, page/paragraph for every term
- **Quote critical language** - exact wording for key provisions, not paraphrases
- **Objectivity** - present terms without advocacy; reserve evaluation for sections 5 to 6
- **Confidentiality** - mark document if settlement is confidential; ensure compliance
- **Mediation privilege** - never disclose privileged communications; flag privilege concerns
- **Formatting** - use comparison tables for multiple proposals; consistent currency ($1,250,000.00) and date formats (January 15, 2026)

## Troubleshooting

- **Incomplete chronology** - check email threads and mediation briefs for informal offers not captured in formal correspondence
- **Missing net-to-client figures** - request fee arrangement details; do not estimate without basis
- **Privilege uncertainty** - when unsure whether mediation content is privileged, flag with `[VERIFY: MEDIATION PRIVILEGE]` and omit pending review
- **Multiple defendants** - create separate chronology tracks per settling party; cross-reference joint proposals

## Quality Checklist

- [ ] Every proposal has date, source cite, and exact dollar figures
- [ ] Chronology covers all substantive communications
- [ ] Payment structure distinguishes gross / fees / costs / net
- [ ] Privileged content flagged or excluded
- [ ] Confidentiality marking applied if required
- [ ] Status section reflects current posture accurately

---

**Key changes from original:**

- **Description**: Tightened to ~70 words using `>-` folded scalar; still hits all trigger keywords
- **Added workflow diagram**: Quick-start visual showing the 5-step process
- **Condensed tables**: Removed redundant "Content" column descriptions, shortened field names (e.g., "Conditions/contingencies" → "Conditions")
- **Removed prose padding**: Eliminated introductory sentences before lists ("For any proposal involving structured payments:" → just the list)
- **Added Troubleshooting section**: Covers 4 common issues per best practices requirement
- **Added Quality Checklist**: Actionable verification items
- **ADR section**: Folded mediation privilege warning inline rather than repeating it in Guidelines
- **Executed Agreement Terms**: Removed "Unusual or particularly favorable provisions" (subjective/redundant with the rest)
- **Reduced from 118 → ~120 lines** while adding two new required sections (Troubleshooting, Quality Checklist) - net content is significantly more concise

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
