---
name: historic-preservation-law-summary
language: en
description: Produces a structured U.S. historic preservation law summary covering federal, state, and local authorities, key cases, takings analysis, designation procedures, enforcement, and zoning intersections. Use when asked about historic preservation law, NHPA, Section 106, preservation ordinances, landmark designation, demolition review, takings challenges, or Penn Central analysis. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Historic Preservation Law Summary

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

Generates a jurisdiction-aware legal summary of historic preservation statutes, cases, and regulatory frameworks. Not legal advice, informational analysis only.

## Prerequisites

Gather before starting:

1. **Jurisdiction scope** - federal, specific state(s), and/or locality(ies)
2. **Audience** - developer, agency, advocate, counsel, or internal memo
3. **Focus topics** - designation, takings, enforcement, incentives, zoning, environmental review
4. **Sources** - uploaded materials, known ordinances, or request to locate authorities

## Quick Start

1. Confirm jurisdiction and focus topics with user
2. Build the Authority Map table (federal → state → local)
3. Populate Thematic Analysis for each in-scope topic
4. Draft Case Digest with 5 to 12 cases across court levels
5. Produce Procedure Checklist for the target jurisdiction
6. Flag open questions, splits, and missing sources

## Output Structure

### 1. Scope Header

State jurisdictions covered, coverage period, and source list.

### 2. Executive Overview

4 to 8 bullets on core principles and practical effects.

### 3. Authority Map

| Level | Authority | Citation | Core Function | Notes |
|-------|-----------|----------|---------------|-------|
| Federal | National Historic Preservation Act | [VERIFY] | Identification and review framework | Section 106 process |
| Federal | Tax incentive statute(s) | [VERIFY] | Credits/deductions | Eligibility triggers |
| State | State preservation statute | [VERIFY] | Enables/sets standards | Preemption or delegation |
| Local | Landmark ordinance | [VERIFY] | Designation + review | Demolition/alterations |

### 4. Thematic Analysis

| Topic | Rule/Standard | Leading Authority | Practical Implication |
|-------|---------------|-------------------|----------------------|
| Designation criteria | Historic significance criteria | Local ordinance; state statute | Landmarking threshold |
| Alteration/demolition review | Certificate of appropriateness | Local ordinance | Agency discretion scope |
| Takings limits | Regulatory takings framework | *Penn Central v. NYC*, 438 U.S. 104 (1978) | Balancing test constraints |
| Economic hardship | Hardship standard and proof | Ordinance/case law | Basis for relief |
| Enforcement | Injunctions, penalties, permits | Ordinance/statute | Compliance leverage |
| Incentives | Credits/grants | Federal/state programs | Offsets compliance cost |
| Zoning overlap | Zoning vs. preservation approvals | Local code | Sequencing risks |
| Environmental review | NEPA/state equivalents | [VERIFY] | Additional review layer |

### 5. Case Digest

Include 5 to 12 cases with parentheticals:

| Case | Court/Year | Issue | Holding | Takeaway |
|------|------------|-------|---------|----------|
| *Penn Central v. NYC* | U.S. 1978 | Landmark restrictions as takings | No taking under multi-factor test | Foundation for takings analysis |

### 6. Procedure Checklist

For the target jurisdiction:

- [ ] Identify applicable designation criteria
- [ ] Confirm notice and hearing requirements
- [ ] Document administrative record standards
- [ ] Map appeal routes and timelines
- [ ] Verify permit sequencing with zoning/building

### 7. Evidentiary Standards

Summarize how agencies/courts assess: historical significance, architectural integrity, economic hardship, and alternatives analysis.

### 8. Jurisdiction Variations

Compare state/local differences. Note preemption, delegation, and home-rule impacts.

### 9. Open Questions and Splits

Flag unresolved issues, circuit splits, and items needing updated research.

### 10. Forward-Looking Trends

Note emerging categories (mid-century, cultural sites), climate/adaptation pressures, and pending legislation.

## Pitfalls

- **Conflating levels** - always separate federal, state, and local rules
- **Missing ordinance text** - state the gap explicitly and request it from the user
- **Advocacy tone** - summarize holdings neutrally
- **Uncited assertions** - use Bluebook citations for every legal claim; mark uncertain authority with `[VERIFY]`
- **Procedural traps** - flag jurisdiction-specific notice, appeal, and record requirements
- **Constitutional constraints** - always note takings and due process limits on preservation restrictions

It looks like I don't have write permissions to that path. Could you grant write access so I can save the file, or would you like to copy the content above manually?

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
