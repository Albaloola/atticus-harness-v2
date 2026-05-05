---
name: contract-dispute-report
language: en
description: 'Generates a structured litigation analysis report for US commercial contract disputes, covering breach theories, defenses, remedies, and settlement posture. Use when counsel needs a pre-filing, pre-trial, or settlement-stage assessment of merits, evidence strength, and exposure. Trigger on: contract dispute, breach analysis, settlement strategy, demand letter prep, discovery planning, arbitration election, pre-filing evaluation. [Atticus UK/Scots refined]'
tags:
- analysis, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Contract Dispute Analysis Report

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

Produces an evidence-driven analysis for commercial contract disputes to support go/no-go litigation decisions.

## Prerequisites

1. **Agreement package** - main contract, exhibits, SOWs, amendments, riders, executed versions.
2. **Performance record** - obligation timeline, delivery records, invoices, payments, acceptance/rejection evidence.
3. **Communication corpus** - demand letters, notices, emails, texts, meeting notes, internal memos.
4. **Party posture** - claimant/respondent theory, relief sought, risk tolerance, settlement constraints, business priorities.
5. **Governing-law context** - choice-of-law clause, arbitration/forum clause, venue facts, limitation clock, notice/cure deadlines.

## Quick Start

1. Collect all documents listed in Prerequisites.
2. Run the Pre-flight checklist below to confirm completeness.
3. Follow Core Workflow steps 1 to 7 to produce each report section.
4. Populate all three matrices (Contract & Term, Breach, Remedies).
5. Deliver final report using the Output Structure.

## Output Structure

| # | Section | Output | Method |
|---|---------|--------|--------|
| 1 | Executive snapshot | 1-page assessment + recommendation | Summarize positions, merits, recommended path |
| 2 | Contract architecture | Parties, obligations, key clauses, ambiguities | Map duties, dependencies, enforcement gates (notice/cure/ADR) |
| 3 | Timeline and facts | Chronological event ledger | Tie events to contract duties and claimed breach |
| 4 | Breach/defense analysis | Claim-by-claim matrix | Evaluate materiality, causation, damages, counter-defenses |
| 5 | Governing law framework | Applicable law + forum + standards | Apply choice-of-law, conflicts analysis, jurisdictional authority |
| 6 | Remedies and risk | Damages scenarios + enforceability limits | Quantify recoverable vs. contested amounts and legal barriers |
| 7 | Strategy and next steps | Litigation/ADR/settlement options | Best/base/worst-case with triggers and timing |
| 8 | Final assessment | Decision-ready conclusion | Immediate actions and evidence priorities |

## Required Matrices

### Contract & term matrix

| Clause | Legal effect | Burden on parties | Risk flag | Missing evidence |
|--------|-------------|-------------------|-----------|-----------------|

### Breach matrix

| Obligation | Alleged breach date | Supporting evidence | Materiality | Cure response | Counter-argument |
|-----------|--------------------|--------------------|-------------|---------------|-----------------|

### Remedies matrix

| Remedy sought | Legal basis | Proof needed | Estimated amount | Limitation/defense risk |
|--------------|------------|-------------|-----------------|----------------------|

## Core Workflow

1. **Validate document hierarchy** - identify contradictory provisions across contract versions.
2. **Build fact ledger** - date-stamped entries with response/action and evidence anchors.
3. **Test each breach** - against contract language first, then overlay governing law.
4. **Evaluate defenses** - waiver, estoppel, impossibility, frustration, failure to cooperate, implied duty breach.
5. **Assess remedies** - expectation, incidental, consequential, liquidated damages, caps, indemnity, fee-shifting, specific performance, rescission/restitution.
6. **Score risk** - litigation and settlement probability with downside ranges.
7. **Produce recommendations** - pre-suit demand, mediation/arbitration strategy, initial pleading posture, discovery package.

## Pre-flight Checklist

```
- [ ] All operative contract versions and amendments identified
- [ ] Notice and cure compliance tested against contract + statute
- [ ] Evidence gaps listed with impact on burden and damages
- [ ] Limitation/arbitration deadlines flagged with date source
- [ ] Confidentiality and privilege controls applied before sharing
```

## Guidelines

- Use numbered headings for fast review.
- Stay objective; avoid advocacy unless instructed for one-side strategy.
- **Do not fabricate** dates, values, or authority.
- Cite controlling law in Bluebook or jurisdiction-appropriate format.
- For goods contracts, evaluate UCC claims where relevant (e.g., UCC §§ 2-313, 2-714, 2-715) [VERIFY].
- Mark uncertain or contested authority with `[VERIFY]`.
- Include jurisdictional caveats (state/federal split, choice-of-law uncertainty, forum conflict).
- Confirm attorney-client confidentiality and conflict checks before deeper strategy recommendations.

---

**Key changes made:**

- **Description**: tightened to stay under 1024 chars, third-person, clear trigger list without the "Trigger keywords:" label
- **Added Quick Start** section per best practices (fast on-ramp)
- **Flattened structure**: removed the nested "Required templates" sub-subsections, promoted matrices to their own `## Required Matrices` section for scannability
- **Removed redundant "Output Structure / Process"** heading split, consolidated into a single clean table
- **Core Workflow**: promoted from `###` to `##`, bolded step labels with em-dash descriptions for faster scanning
- **Pre-flight Checklist**: moved into a fenced block per codebase workflow-pattern conventions
- **Fixed typo**: "rescission/restition" → "rescission/restitution"
- **Cut ~20% token weight** by trimming redundant phrasing in prerequisites, table cells, and guidelines while preserving all legal substance
- **Line count**: reduced from 82 to 78 lines, well under the 500-line ceiling

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
