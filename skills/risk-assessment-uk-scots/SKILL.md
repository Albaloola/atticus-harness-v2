---
name: risk-assessment-uk-scots
language: en
description: Generates structured legal risk assessment reports with categorized risks, 5x5 scoring matrices, and mitigation strategies. Use when preparing risk assessments, due diligence reports, transaction risk reviews, venture analysis, or board-level risk summaries. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Risk Assessment

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

Produces executive-ready risk reports evaluating likelihood, impact, and mitigation across legal risk categories for business scenarios, transactions, or operational decisions.

## Prerequisites

Gather before starting:
- **Scenario description** - transaction summary, venture details, or decision under review
- **Source documents** - contracts, term sheets, regulatory filings, corporate records
- **Organizational context** - industry, jurisdiction(s), risk tolerance, strategic objectives
- **Known constraints** - timeline, budget, regulatory environment, stakeholder concerns

## Workflow

### 1. Document Review

Extract from all provided materials:

| Element | Look For |
|---|---|
| Obligations & duties | Performance requirements, deadlines, conditions precedent |
| Representations & warranties | Scope, survival periods, indemnification triggers |
| Financial exposure | Stated amounts, penalties, liquidated damages |
| Jurisdictional issues | Choice of law, forum selection, regulatory bodies |
| Notice & cure provisions | Timelines, methods, non-compliance consequences |
| Ambiguous or silent terms | Missing definitions, unclear risk allocation, gaps |

### 2. Risk Identification

Categorize all material risks:

| Category | Key Inquiry |
|---|---|
| Regulatory compliance | Licensing, permits, reporting, pending rule changes |
| Contractual liability | Breach exposure, indemnification chains, liability gaps |
| Litigation probability | Dispute history, enforceability, venue risk |
| IP vulnerability | Ownership disputes, licensing gaps, infringement exposure |
| Employment & labor | Classification, non-competes, WARN Act, benefits |
| Tax implications | Structure-dependent exposure, transfer pricing, nexus |
| Reputational & governance | Fiduciary duties, disclosure obligations, ESG |

### 3. Risk Scoring

Rate each risk on a 5x5 matrix. **Rating = Likelihood x Impact.**

**Likelihood:** 1 Remote - 2 Unlikely - 3 Possible - 4 Likely - 5 Near certain

**Impact:** 1 Negligible (<$50K) - 2 Minor ($50K-$500K) - 3 Moderate ($500K-$5M) - 4 Major ($5M-$50M) - 5 Severe (>$50M)

**Thresholds:** Low (1 to 6), Medium (7 to 12), High (13 to 19), Critical (20 to 25)

### 4. Mitigation Strategies

For each Medium/High/Critical risk, propose mitigations and assess feasibility, cost, and residual risk:

| Strategy | Examples |
|---|---|
| Eliminate | Restructure transaction, remove problematic terms |
| Transfer | Insurance, indemnification, contractual risk allocation |
| Reduce | Compliance protocols, enhanced due diligence, reps & warranties |
| Accept | Document rationale, establish reserves, monitor triggers |

### 5. Gap Analysis

Flag explicitly:
- Missing documents or facts affecting risk precision, Unsettled legal standards or pending regulatory changes, Recommended due diligence steps or expert consultations

## Output Structure

```
## Executive Summary
- 3 to 5 sentence risk posture overview, Top 3 risks with ratings, Go / No-Go / Conditional recommendation

## Risk Matrix
[Table: Risk | Category | Likelihood | Impact | Rating | Key Driver]

## Detailed Risk Analysis
### [Risk Category]
#### [Specific Risk]
- **Exposure**: factual basis with document references
- **Legal basis**: applicable statute or case law
- **Likelihood rationale**: enforcement trends, precedent
- **Impact quantification**: dollar range, operational consequences
- **Mitigation options**: ranked by effectiveness

## Information Gaps & Limitations
[Bulleted list with recommended next steps]

## Recommendations, Numbered, actionable items tied to specific risks, Prioritized by risk rating and feasibility, Decision framework: proceed / modify / decline
```

## Checks

- Reference specific contract sections, statutes, and facts, no generic risk language, Quantify exposure with dollar ranges; acknowledge uncertainty explicitly, Calibrate recommendations to the organization's stated risk tolerance, Distinguish deal-breakers from commercially acceptable risks, Mark unverifiable authority with `[VERIFY]`
- Do not minimize risks to favor a preferred outcome, Note jurisdiction-specific variations where U.S. state law divergence is material, Keep the executive summary accessible to non-lawyers

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
