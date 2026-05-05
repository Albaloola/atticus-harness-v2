---
name: policy-manual
language: en
description: Generates structured policy manual summaries that distill complex legal policies and compliance guidelines into employee-facing reference documents organized by functional area. Use when creating compliance manuals, employee policy guides, regulatory summaries, onboarding compliance materials, or organizational procedure handbooks. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Policy Manual Summary

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

Distills complex legal policies, procedures, and regulatory compliance guidelines into a structured, plain-language policy manual for organizational use.

## Prerequisites

1. **Source materials** - policies, regulatory frameworks, industry standards, organizational guidelines
2. **Organizational context** - industry, jurisdiction(s), departmental structure
3. **Audience** - employee level (all-hands, management, department-specific)
4. **Scope** - which functional areas or regulatory domains to cover

## Quick Start

1. Gather source materials and confirm organizational context
2. Identify applicable functional areas and compliance themes
3. Draft each policy section using the per-policy template below
4. Assemble into the document framework with cover, TOC, glossary, and appendices
5. Flag uncertain citations with `[VERIFY]` and multi-step processes with `[FLOWCHART: description]`

## Document Framework

| Section | Contents |
|---|---|
| Cover & Revision History | Title, effective date, version, last review, next review |
| Table of Contents | Auto-generated navigation |
| Executive Summary | Critical policies in 1 to 2 pages; highest-priority obligations |
| Policy Sections | Organized by functional area (template below) |
| Glossary | Terms defined at first use, consolidated here |
| Appendices | Forms, flowcharts, contact directories |

## Per-Policy Section Template

```
## [Policy Area]: [Policy Name]

**Effective Date:** [Date] | **Applies To:** [Roles/Depts] | **Owner:** [Dept]

### Purpose & Scope
[1 to 2 sentences: why this policy exists, who it covers]

### Key Requirements
- [ ] Requirement 1
- [ ] Requirement 2

### Procedures
1. Step-by-step procedural guidance
2. Decision points noted with criteria

### Legal Authority
- [Statute/regulation citation] - [brief description]

### Non-Compliance Consequences
- [Disciplinary, civil, criminal, or regulatory consequences]

### Examples & Scenarios
- **Scenario:** [Situation] → **Required Action:** [What to do]

### Questions & Escalation, Contact: [Role/department] at [contact info]
```

## Cross-Cutting Compliance Themes

Address each if present in source materials:

| Theme | Key Elements |
|---|---|
| Data privacy & security | Collection limits, retention, breach notification, access controls |
| Anti-discrimination & harassment | Protected classes, reporting channels, investigation process |
| Ethics & conflicts of interest | Disclosure obligations, gift policies, outside activities |
| Health & safety | OSHA/jurisdiction-specific requirements, reporting, PPE |
| Financial controls & reporting | Authorization levels, segregation of duties, audit trails |

## Pitfalls & Checks

- **Plain language, not imprecise language** - write for non-lawyers but maintain accuracy of legal obligations
- **Jurisdiction flags** - clearly mark where requirements vary by state, locality, or jurisdiction; use a federal/national baseline with local callouts
- **Citation currency** - verify all regulatory citations are current; mark uncertain ones with `[VERIFY]`
- **Privilege protection** - never reproduce attorney work product or privileged analysis; summarize the compliance obligation only
- **Review cadence** - recommend annual review minimum; quarterly for rapidly evolving areas
- **Version control** - maintain a revision history table with date, author, and change description

---

**Key changes made:**

- **Removed `tags`** from frontmatter (not part of the Agent Skills spec)
- **Tightened description** - shorter while keeping trigger guidance and discovery keywords
- **Added Quick Start** section for immediate actionable steps
- **Flattened structure** - removed the nested `### Output Structure` > `### Document Framework` nesting; promoted sections to top level
- **Renamed "Guidelines" to "Pitfalls & Checks"** - aligns with best-practice section naming
- **Trimmed redundancy** - removed the "visual aids" and "multi-jurisdiction" bullets that duplicated guidance already in the template or other bullets
- **Reduced line count** from 89 to 72 lines, well under the 500-line limit

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
