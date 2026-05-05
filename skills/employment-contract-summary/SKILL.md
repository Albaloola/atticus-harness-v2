---
name: employment-contract-summary
language: en
description: Produces structured U.S. employment contract summaries with section-level citations, capturing key terms, obligations, risks, and notable omissions. Use when summarizing an employment contract, executive employment agreement, offer letter, or consulting agreement. Triggers on "employment contract summary," "employment agreement," "compensation," "severance," "non-compete," "non-solicit," "confidentiality," or "restrictive covenant.". [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Employment Contract Summary

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

Produce a citation-backed summary of an employment agreement with risks and gaps flagged.

## Prerequisites

Before starting, collect:

1. **Complete agreement set** - main contract plus exhibits, schedules, equity plans, and referenced policies.
2. **Governing law and venue** - from the document; if missing, mark as absent.
3. **Role context** - job title, level (executive/non-executive), and start date if known.

## Quick Start

1. Read the full agreement set.
2. Produce each section below in order, citing section/page for every material term.
3. Close with a risk assessment and recommended follow-ups.

## Output Sections

Produce sections in this exact order. Every cell must include a section/page citation or "missing."

### 1. Snapshot (4 to 6 lines)

Parties, role/title, start date, at-will vs. term, governing law, dispute forum.

### 2. Parties & Role

| Item | Details | Citation |
|---|---|---|
| Employer | | |
| Employee | | |
| Title/Reporting | | |
| Duties/Scope | | |

### 3. Term & Renewal

| Item | Details | Citation |
|---|---|---|
| Term length | | |
| Renewal/extension | | |
| Probationary period | | |

### 4. Compensation & Equity

| Component | Amount/Formula | Timing/Conditions | Citation |
|---|---|---|---|
| Base salary | | | |
| Bonus/incentive | | | |
| Commission | | | |
| Equity/RSUs/options | | | |
| Cash benefits | | | |

### 5. Benefits & Perks

| Benefit | Eligibility | Cost Split | Citation |
|---|---|---|---|
| Health/retirement | | | |
| PTO/leave | | | |
| Expenses/perqs | | | |

### 6. Termination & Severance

| Scenario | Notice | Cause Definition | Severance/Conditions | Citation |
|---|---|---|---|---|
| For cause | | | | |
| Without cause | | | | |
| Resignation | | | | |
| Change in control | | | | |

### 7. Restrictive Covenants

| Covenant | Duration | Geography | Scope | Exceptions | Citation |
|---|---|---|---|---|---|
| Non-compete | | | | | |
| Non-solicit | | | | | |
| Confidentiality | | | | | |
| Non-disparagement | | | | | |

If governing law is specified, add state-specific enforceability notes. Otherwise state: "state-specific enforceability varies."

### 8. IP & Work Product

| Topic | Obligation | Carve-outs | Citation |
|---|---|---|---|
| Assignment of inventions | | | |
| Prior inventions schedule | | | |
| Works outside scope | | | |

### 9. Dispute Resolution

| Mechanism | Rules/Forum | Class Waiver | Fees | Remedies Limits | Citation |
|---|---|---|---|---|---|
| Arbitration/litigation | | | | | |

### 10. Compliance & Statutory Conflicts (Flag Only)

- Minimum wage/overtime classification risks.
- Non-waivable rights (leave, anti-discrimination, whistleblower).
- 409A, golden-parachute, or tax gross-up concerns for executives.

### 11. Risks, Ambiguities & Missing Terms

Bullet list, each item gets a citation or "missing." Flag inconsistent defined terms and cross-reference errors.

### 12. Risk Assessment & Follow-ups

```
RISK LEVEL: Low / Medium / High (brief rationale)
KEY ISSUES: ...
MISSING/UNCLEAR: ...
```

List targeted follow-up questions or documents needed (e.g., equity plan, bonus plan, policy handbook).

## Pitfalls

- **Quantify everything** - dollars, dates, percentages, vesting schedules.
- **Distinguish "silent" vs. "expressly excluded"** - these have different legal weight.
- **Non-competes are state-dependent** - never assume enforceability; flag for jurisdiction review.
- **No legal advice** - flag issues and conflicts only; do not predict outcomes.

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
