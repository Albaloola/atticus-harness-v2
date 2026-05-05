---
name: risk-analysis
language: en
description: Generates structured risk analysis summaries for legal matters, identifying and evaluating risks by severity and likelihood with quantified exposures and mitigation strategies. Use when preparing risk assessments, exposure analyses, liability summaries, or pre-filing risk evaluations across litigation, regulatory, contractual, reputational, and operational domains. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Risk Analysis Summary

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

Produces a prioritized risk analysis from matter documents, quantifying exposures and recommending mitigations for attorneys, clients, and stakeholders.

## Prerequisites

1. **Matter documents** - contracts, pleadings, correspondence, regulatory filings, insurance policies
2. **Matter context** - jurisdiction, industry, phase (pre-filing / active / settlement), key parties
3. **Risk tolerance** - if known, acceptable exposure thresholds or strategic constraints

## Workflow

### 1. Executive Overview

- **Matter snapshot** - one-paragraph factual summary
- **Top 3 to 5 risks** - ranked by severity × likelihood, one sentence each with estimated exposure
- **Immediate actions** - time-sensitive deadlines, SOL dates, regulatory windows

### 2. Risk Register

Assign each risk a sequential ID (R-01, R-02, ...) and complete:

| Field | Content |
|---|---|
| Category | Contractual / Regulatory / Litigation / Financial / Reputational / Operational |
| Description | Specific risk statement grounded in document evidence |
| Factual basis | Cite provisions, regulatory sections, correspondence, or facts |
| Legal authority | Statutes, regulations, case law, mark `[VERIFY]` if uncertain |
| Likelihood | High / Medium / Low with reasoning |
| Severity | Critical / Major / Moderate / Minor |
| Financial exposure | Best-case / most-likely / worst-case range |
| Non-monetary impact | Reputational harm, sanctions, operational disruption |
| Mitigating factors | Defenses, insurance coverage, factual counterarguments |
| Interdependencies | Other risk IDs that compound or conflict |

### 3. Risk Matrix

Plot risk IDs on a 3×3 severity (rows) × likelihood (columns) grid:

```
              │ Low            │ Medium         │ High
──────────────┼────────────────┼────────────────┼──────────────
Critical      │                │                │
Major         │                │                │
Moderate      │                │                │
```

### 4. Mitigation Strategies

For each risk rated Major/High or above:

- **Action** - specific, practical step
- **Type** - Legal defense / Procedural / Settlement / Insurance / Operational
- **Feasibility** - High / Medium / Low
- **Effectiveness** - estimated exposure reduction
- **Resources** - cost, time, personnel
- **Trade-offs** - whether this mitigation exacerbates another risk

### 5. Timeline

| Priority | Risk ID | Action | Deadline/Trigger | Owner |
|---|---|---|---|---|
| Urgent | | | | |
| Near-term (30 to 90 days) | | | | |
| Strategic (90+ days) | | | | |

Flag all hard deadlines: statutes of limitations, cure periods, regulatory filing dates.

### 6. Information Gaps

List areas needing additional investigation, discovery, or expert consultation to refine the assessment.

## Pitfalls

- **Ungrounded risks** - every risk must cite specific documents or facts; never assert risk in the abstract
- **Missing quantification** - provide dollar ranges with stated assumptions; flag estimates as conservative or aggressive
- **Fact vs. inference** - clearly distinguish established facts, reasonable inferences, and speculative scenarios
- **Tone imbalance** - neither minimize genuine risks nor catastrophize manageable exposures
- **Audience mismatch** - use language accessible to business stakeholders; define legal terms on first use
- **Unacknowledged uncertainty** - state confidence levels; identify what additional information would change the assessment
- **Ignored interdependencies** - flag where addressing one risk may worsen another
- **Jurisdiction blindness** - note where analysis depends on forum, governing law, or regulatory body

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
