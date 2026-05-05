---
name: project-management-summary
language: en
description: Produces U.S. legal project management summaries consolidating objectives, scope, timeline, budget, resources, risks, and next steps into a stakeholder-ready document. Use when asked for project management summary, matter status, LPM report, budget tracking, timeline update, milestone review, or portfolio status. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Project Management Summary

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

Deliver a decision-ready snapshot of a legal matter's status, plan, and risks.

## Prerequisites

Gather before drafting:

1. Matter file summary or project charter
2. Latest task list or workplan
3. Budget baseline and current spend
4. Key dates, deadlines, and team roster
5. Recent developments or decisions
6. Audience and distribution scope

## Quick Start

1. Collect prerequisites above
2. Fill every section in the output structure below
3. Apply privilege markings and audience-appropriate filtering
4. Verify dates are `YYYY-MM-DD` and all owners are named

## Output Structure

Fill every section. Omit nothing without explanation.

**Header**
- Matter name / Client / Lead counsel / Prepared by, As-of date (`YYYY-MM-DD`)
- Distribution: `Internal` | `Client` | `Restricted`

**1) Executive Overview** (2-3 sentences)
- Current status, primary driver, immediate attention items

**2) Objectives and Scope**
| Objective | Business/Legal Driver | Deliverable | Owner | Status |
|---|---|---|---|---|

**3) Timeline**
| Milestone | Target Date | Actual Date | Dependency | Owner | Status |
|---|---|---|---|---|---|

**4) Budget**
| Budget Item | Baseline | Spent to Date | Forecast to Complete | Variance | Driver |
|---|---|---|---|---|---|

**5) Resources**
| Name/Role | Allocation (%) | Key Responsibilities | Notes |
|---|---|---|---|

**6) Status Assessment**
| Dimension | R/Y/G | Evidence | Corrective Action |
|---|---|---|---|
| Schedule | | | |
| Budget | | | |
| Quality | | | |
| Team | | | |
| Client | | | |
| Risk | | | |

**7) Risks and Issues**
| Risk/Issue | Impact | Likelihood | Mitigation | Owner | Due Date |
|---|---|---|---|---|---|

**8) Decisions and Approvals**
| Decision Needed | Options | Recommendation | Decision Maker | Due Date |
|---|---|---|---|---|

**9) Action Items**
| Action | Owner | Due Date | Success Criteria |
|---|---|---|---|

**10) Source References**
- List all documents, emails, reports, and data sources used.

## Pitfalls and Checks

- Mark privileged or work-product sections as `PRIVILEGED/WORK PRODUCT`.
- If audience is external, omit attorney mental impressions and litigation strategy.
- Highlight root causes for variances; specify corrective owners and deadlines.
- Note jurisdictional constraints or court deadlines explicitly.
- Keep legal analysis minimal unless audience is internal.

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
