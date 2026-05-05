---
name: contract-dispute-analysis
language: en
description: 'Produces a structured contract dispute analysis for U.S. commercial litigation. Use when asked to evaluate breach claims, assess merits, prepare for mediation, or develop settlement strategy. Trigger: contract dispute, breach analysis, commercial litigation report, merits assessment, damages analysis, settlement evaluation. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Contract Dispute Analysis

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

Structured, evidence-linked assessment of contract terms, breach exposure, defenses, remedies, and litigation strategy for U.S. commercial disputes.

## Prerequisites

Gather before starting:

- **Operative contracts** - executed agreements, amendments, addenda, exhibits
- **Performance records** - invoices, delivery receipts, change orders, acceptance/rejection docs
- **Communications** - emails, notices, cure letters, negotiation history
- **Damages inputs** - pricing, costs, lost-profits assumptions, mitigation steps
- **Forum constraints** - choice-of-law, forum-selection, arbitration/mediation clauses, notice/cure periods

## Quick Start

1. Collect the operative contract set and performance records
2. Identify controlling agreement(s) and order of precedence
3. Map obligations to performance timeline
4. Analyze breach elements claim-by-claim
5. Assess defenses, remedies, and risk
6. Deliver the report using the structure below

## Report Structure

### 1. Normalize Inputs

- Identify controlling agreement(s), precedence, and amendment history, Flag missing documents and evidentiary gaps

### 2. Executive Summary

```text
Dispute: [one sentence]
Parties/Roles: [A = ], [B = ]
Contract: [title, date, governing law]
Primary Breach Theory: [A alleges B failed to ...]
Defenses: [top 2]
Exposure Range: [low to high]
ADR/Forum: [arbitration/mediation/forum selection]
Recommendation: [litigate/settle/ADR/hold]
```

### 3. Contract Inventory

| Document | Date | Parties | Scope | Precedence | Key Clauses (cite) |
| --- | --- | --- | --- | --- | --- |

### 4. Key Terms & Obligations

| Category | Clause (excerpt + cite) | Obligation | Party | Conditions/Triggers | Notice/Cure |
| --- | --- | --- | --- | --- | --- |

Categories: Performance, Payment, Warranties/Representations, Limitations/Liability, ADR/Forum/Choice of Law.

### 5. Timeline of Performance

| Date | Event | Contract Reference | Evidence | Compliance Status |
| --- | --- | --- | --- | --- |

### 6. Breach Analysis

Per-claim checklist:

- [ ] Duty identified and source cited
- [ ] Breach facts tied to timeline evidence
- [ ] Materiality assessed (common law or UCC Art. 2 for goods)
- [ ] Causation linked
- [ ] Damages supported

| Claim | Duty Source | Alleged Breach | Evidence | Materiality | Exposure |
| --- | --- | --- | --- | --- | --- |

### 7. Defenses & Counterclaims

| Defense | Legal Standard (jurisdiction) | Factual Basis | Evidence | Strength |
| --- | --- | --- | --- | --- |

Common defenses: impossibility/impracticability, failure of condition, waiver/estoppel, prior material breach, good faith/fair dealing.

### 8. Governing Law & Forum

- [ ] Choice-of-law clause identified
- [ ] Conflicts analysis (if no clause)
- [ ] UCC Art. 2 (goods) vs common law (services) determined
- [ ] Forum selection and ADR prerequisites mapped

| Issue | Statute/Doctrine | Key Case(s) | Impact |
| --- | --- | --- | --- |

### 9. Remedies & Damages

| Remedy | Contractual Basis | Legal Basis | Evidence | Estimated Range |
| --- | --- | --- | --- | --- |

Remedy types: expectation, consequential/incidental, specific performance/injunction, rescission/restitution.

### 10. Risk Assessment

| Factor | Plaintiff | Defendant | Notes |
| --- | --- | --- | --- |

Factors: evidence strength, witness credibility, legal uncertainty, cost/time exposure, settlement leverage.

### 11. Strategic Recommendations

- Provide 2 to 3 options with pros/cons and triggers, Immediate actions:
  - [ ] Preserve evidence and confirm hold scope
  - [ ] Satisfy notice/cure prerequisites
  - [ ] Prepare ADR filings if required
  - [ ] Identify discovery priorities and experts

### 12. Exhibits

Cite exact contract excerpts, notices, and damages support used throughout.

## Pitfalls & Checks

- Tie every conclusion to a cited clause, event, or evidence, no unsupported assertions, Flag assumptions and gaps explicitly; label speculation with `[ASSUMPTION]`
- Mark uncertain statutes or cases with `[VERIFY]`
- Do not mix UCC and common law standards, select based on transaction type, Treat ADR prerequisites as mandatory unless clearly waived, Confirm enforceability of limitation-of-liability, waiver, and liquidated-damages clauses under governing jurisdiction, Follow Bluebook or jurisdiction-appropriate citation format, Maintain objective tone; separate facts, analysis, and recommendations

---

**Key changes from the original:**

- **Frontmatter**: Removed `tags` (not in spec), tightened `description` with clear trigger guidance in third person
- **Added Quick Start**: 6-step overview so agents can orient fast
- **Collapsed table row stubs**: Removed pre-filled empty rows from tables (e.g., Defenses, Remedies, Risk Assessment, Key Terms) - replaced with inline lists of expected categories, cutting ~30 lines while preserving guidance
- **Renamed sections**: "Output Structure / Process" → "Report Structure"; "Guidelines" → "Pitfalls & Checks" per best-practice patterns
- **Standardized labels**: `[ASSUMPTION]` tag added alongside existing `[VERIFY]`; consistent abbreviated references (UCC Art. 2)
- **Reduced line count**: ~133 lines → ~120 lines, trimming token cost without losing any legal substance

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
