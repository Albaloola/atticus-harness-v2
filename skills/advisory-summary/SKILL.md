---
name: advisory-summary
language: en
description: Drafts U.S. regulatory client advisory summaries translating legal developments into actionable risk and compliance guidance. Use when a client needs a proactive memo, client alert, or legal-update brief for a new law, case, rulemaking, agency guidance, or pending reform. Trigger on requests for "client advisory," "regulatory update," "legal alert," "compliance briefing," "new law summary," or "quarterly advisory.". [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Client Advisory Summary

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

Produces distribution-ready U.S. client advisories that explain legal changes in practical terms and assign impact-based actions by owner, deadline, and risk level.

## Quick Start

1. Confirm jurisdiction (US federal/state/agency) and client industry.
2. Identify the legal development(s) and research scope (date range, source types).
3. Choose audience and format (client memo, board brief, partner update).
4. Run the workflow below; output the draft using the template in step 5.

## Workflow

### 1. Intake Validation

Verify before drafting:

- [ ] Jurisdiction confirmed (US federal, state, or agency)
- [ ] Topic scope and affected business functions defined
- [ ] Primary sources located (statute text, regulations, opinions, dockets)
- [ ] Effective dates, filing deadlines, and implementation dates captured
- [ ] Unverified commentary excluded or tagged `[VERIFY]`
- [ ] Confidentiality or non-public info restrictions flagged

### 2. Development Synthesis

For each legal development, capture:

| Development | Source Type | Why Material | Status | Practical Effect |
|---|---|---|---|---|
| _(description)_ | Fed reg / case / statute / agency guidance | _(impact rationale)_ | Final / Proposed / Enjoined / Appealed | _(compliance duty or strategic change)_ |

### 3. Impact Analysis

| Topic | Immediate | Short-Term | Long-Term | Category |
|---|---|---|---|---|
| _(area)_ | _(effect)_ | _(effect)_ | _(effect)_ | Compliance / Opportunity / Risk |

### 4. Action Plan

| Action | Owner | Deadline | Dependency | Evidence Needed |
|---|---|---|---|---|
| _(task)_ | _(role)_ | _(date)_ | _(blocker)_ | _(supporting docs)_ |

### 5. Draft Template

Use this section order exactly:

```
Date:
Client:
Matter/Engagement:
Prepared by:

Executive Summary (2 to 3 short paragraphs)

Key Developments (table + plain-language explanation)

Impact Analysis, Immediate | Short-term | Long-term, Compliance obligations, Operational/strategic effects, Competitive or reputational implications

Action Plan, Priority actions with owner and due date, Recommended follow-up review points

Assumptions / Information Gaps

Authorities (Bluebook style, verified primary sources)

Conclusion + optional next-step call
```

## Pitfalls and Checks

- **Every legal claim needs a citation.** Tag unverified or non-primary sources with `[VERIFY]`.
- **Never imply legal advice** beyond provided facts. Mark assumptions and data gaps explicitly.
- **Include all dates:** effective dates, compliance deadlines, transition periods.
- **US-only scope.** Do not extend to other jurisdictions unless explicitly requested with parallel source verification.
- **Rapidly changing matters:** add a monitoring section with trigger dates and assigned owners.
- **Style:** plain language in body, legal precision in citations. Use headings, short bullets, and tables. Avoid narrative blocks longer than 3 paragraphs.

---

**Key changes from the original:**

- **Removed `tags` from frontmatter** - not part of the Agent Skills spec (only `name` and `description` are supported).
- **Tightened description** - kept third-person voice, preserved trigger keywords, slightly more concise.
- **Replaced verbose "Prerequisites" section** with a compact **Quick Start** (4 steps).
- **Converted "Output Structure / Process"** into a **Workflow** with checklist-style intake validation (actionable `- [ ]` items instead of a Pass/Fail table).
- **Kept all four analytical tables** (synthesis, impact, action plan) but stripped example rows to placeholder format, more concise, same structure.
- **Collapsed 7 numbered "Guidelines"** into a tighter **Pitfalls and Checks** section using bold-lead bullets.
- **Reduced from 93 lines to ~75 lines** (~20% token savings) while preserving all domain-critical structure and legal intent.

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
