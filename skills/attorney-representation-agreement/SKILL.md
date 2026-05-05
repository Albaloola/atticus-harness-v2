---
name: attorney-representation-agreement
language: en
description: 'Drafts U.S. litigation attorney representation agreements for client onboarding, covering scope, fees, retainers, confidentiality, conflicts, duties, withdrawal, and dispute resolution. Use when converting consultations into enforceable engagement terms for civil litigation matters including personal injury. Trigger: engagement letter, litigation retainer, representation agreement, fee contract, conflict disclosure, attorney withdrawal, client acknowledgment. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Attorney Representation Agreement

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

Drafts a litigation-ready representation agreement with enforceable term controls and ethical safeguards.

## Quick Start

1. Gather: jurisdiction, attorney/firm identity and bar info, client identity (plus entity authority if applicable).
2. Define scope: matter type, claims/defenses, courts, and exclusions.
3. Confirm fee model, rates, retainer, billing cycle, and cost policy.
4. Run conflicts check; capture required disclosures.
5. Generate agreement using the workflow below.

## Core Workflow

1. **Validate inputs** - reject drafting if mandatory fields are unresolved.
2. **Generate agreement** with ordered sections and plain-language definitions.
3. **Insert `[TO CONFIRM]`** only for genuinely unknown key terms.
4. **Add signature and acknowledgment block.**
5. **Return compliance checklist** confirming each ethics control is present.

## Agreement Sections

```text
1. Parties
2. Recitals
3. Scope of Representation
4. Fees, Retainer, Billing, and Costs
5. Client Responsibilities
6. Attorney Responsibilities
7. Confidentiality, Privilege, and Conflicts
8. Digital Communication and Document Security
9. Termination and Withdrawal
10. File Retention and Handoff
11. Dispute Resolution, Governing Law, and Venue
12. Entire Agreement, Notices, and Amendments
13. Acknowledgments and Signatures
```

**Key requirements per section:**

| Section | Must include |
|---|---|
| Parties | Legal names, titles, addresses, entity authority |
| Scope | Matter description, start point, limits, exclusions; no implied general-counsel duty |
| Fees/Billing | Fee type, rates, increments, retainer mechanics, statement schedule |
| Costs | Expense categories, approval thresholds, reimbursement method |
| Client duties | Candor, cooperation, communication, litigation hold; breach triggers |
| Attorney duties | Diligence, updates, competence, confidentiality |
| Conflicts/Privilege | Rule-based disclosure and consent flow |
| Termination | Client-at-will termination, withdrawal triggers, deadline-aware handoff |
| Records | File access, retention period, statute-aware destruction |
| Dispute resolution | Governing law, venue, fee-dispute arbitration/mediation path |
| Execution | Signatures, voluntariness, opportunity to seek independent advice |

## Pitfalls and Checks

- Never guarantee outcomes, settlement amounts, or trial success.
- Enforce strict scope boundaries, require written amendments for new matters.
- Verify contingency fee percentages against local bar rules before finalizing.
- Require explicit consent for unsecured electronic communications.
- Confirm whether mandatory fee-arbitration/mediation notices apply in the jurisdiction.
- Align clauses with state ethics rules: Rule 1.5 `[VERIFY]`, Rule 1.6 `[VERIFY]`, Rule 1.7/1.9 `[VERIFY]`, Rule 1.16 `[VERIFY]`.
- Preserve client right to terminate and receive fee accountings.

---

**Key changes from original:**

- **Removed `tags`** - not part of the Agent Skills spec
- **Trimmed description** from ~130 words to ~70 while preserving discoverability keywords
- **Merged "Prerequisites" into "Quick Start"** - collapsed 8 steps into 5 concise ones
- **Renamed "Output Structure / Process" to "Core Workflow"** - clearer heading, same steps
- **Consolidated two redundant tables** (Mandatory Section Map + Section Template) into one section with the template followed by a single compact requirements table
- **Removed the "Output behavior" column** - redundant with "Must include" which is more actionable
- **Renamed "Guidelines" to "Pitfalls and Checks"** - signals what to watch out for rather than general advice
- **Reduced from 87 lines to 72** - ~17% smaller, more scannable, every line earns its token cost

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
