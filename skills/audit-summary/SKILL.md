---
name: audit-summary
language: en
description: 'Produces structured U.S. legal audit summaries that distill compliance findings into executive-ready risk prioritization and remediation plans, covering likelihood/impact scoring, consequence analysis, and corrective actions with timelines and owners. Use for legal audits, compliance audits, regulatory audits, compliance gap analyses, risk assessments, audit report summaries, or remediation roadmaps. Trigger keywords: audit summary, compliance findings, audit report, risk prioritization, remediation plan, regulatory exposure, corrective action plan. [Atticus UK/Scots refined]'
tags:
- analysis, regulatory, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Audit Summary

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

Distill audit findings into a prioritized compliance roadmap with risk-scored findings, remediation actions, and governance follow-up.

## Prerequisites

1. Complete audit materials: reports, checklists, evidence, interviews, exhibits.
2. Jurisdictional scope and governing authorities per audit domain.
3. Applicable statutes, regulations, standards, or guidance.
4. Organizational context: business units, systems, and processes in scope.
5. Point of contact for ownership and timeline validation.

## Output Structure / Process

1. Intake and scope confirmation.
2. Executive Overview.
3. Findings Summary (aggregated).
4. Detailed Findings (per issue).
5. Remediation Roadmap.
6. Governance and Follow-Up.
7. Appendix (sources, assumptions, limitations).

**Executive Overview Template**

```text
Overall Compliance Posture: {concise assessment}
Total Findings: Critical {#} | High {#} | Medium {#} | Low {#}
Top Risk Areas: {domain 1}, {domain 2}, {domain 3}
Immediate Actions (0 to 60 days): {1 to 3 items}
Near-Term Actions (61 to 180 days): {1 to 3 items}
Long-Term Actions (181+ days): {1 to 3 items}
```

**Findings Summary Table**

| ID | Domain | Requirement | Deficiency | Risk | Likelihood | Impact | Consequence | Owner |
|---|---|---|---|---|---|---|---|---|
| F-01 | {Domain} | {Citation} | {Gap} | {C/H/M/L} | {H/M/L} | {H/M/L} | {Penalty/License/Reputation} | {Dept} |

**Risk Rating Criteria**

| Rating | Criteria |
|---|---|
| Critical | Criminal exposure, license loss, business continuity threat, severe penalties |
| High | Material civil penalties, regulatory sanctions, major reputational harm |
| Medium | Noticeable compliance gap with moderate enforcement or cost exposure |
| Low | Minor gap, low enforcement likelihood, limited impact |

**Detailed Finding Template**

```text
Finding ID: F-##
Domain: {e.g., Data Privacy}
Requirement: {Statute/Regulation/Guidance + citation}
Issue: {What is missing or deficient}
Facts/Evidence: {Key facts supporting gap}
Risk Assessment:
  Likelihood: {H/M/L} | Impact: {H/M/L}
  Rationale: {brief, evidence-based}
Consequences: {Regulatory, civil, operational, reputational}
Recommendation:
  Action: {specific corrective action}
  Timeline: {date or days}
  Owner: {department/role}
  Resources: {budget, tools, external counsel, vendors}
```

**Financial Exposure**

- Provide ranges when exact penalties are unknown.
- Cite penalty provisions; use `[VERIFY]` where uncertain.
- Separate direct costs (fines, sanctions) from indirect costs (monitoring, remediation, litigation).

**Remediation Roadmap**

| Workstream | Actions | Priority | Dependencies | Timeline | Owner | Status Metric |
|---|---|---|---|---|---|---|
| {Domain} | {Action list} | {C/H/M/L} | {Upstream items} | {dates} | {Dept} | {KPI} |

**Governance and Follow-Up**

- Recommend compliance task force with reporting cadence.
- Include audit re-check schedule and validation approach.

**Privilege Legend (if applicable)**

```text
Attorney to Client Privileged / Attorney Work Product
Confidential, Prepared at the Direction of Counsel
```

## Guidelines

- Use objective, non-admissions language; describe gaps as risks or deficiencies.
- Prioritize by risk; list Critical and High first.
- Keep citations accurate; add `[VERIFY]` for any uncertain authority.
- Provide concrete actions with owners and timelines, not generic recommendations.
- State interpretive uncertainty and propose mitigation steps.
- Avoid legal jargon; keep executive readability high.
- Ensure scope and limitations are explicit in the Appendix.

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
