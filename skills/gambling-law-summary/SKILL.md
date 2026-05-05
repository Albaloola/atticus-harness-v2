---
name: gambling-law-summary
language: en
description: Produces jurisdiction-specific U.S. gambling law regulatory summaries covering legal status, licensing, taxes, enforcement, and pending reforms. Use when asked about gaming regulation, casino licensing, sports betting compliance, online gambling law, tribal gaming compacts, or market entry assessments. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Gambling Law Regulatory Summary

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

Generates an executive-ready memorandum on gambling regulation for a specific jurisdiction, with compliance and risk highlights.

## Quick Start

Gather before drafting:

1. **Jurisdiction**: federal, state, tribal, municipal, or multi-jurisdiction
2. **Verticals**: commercial casino, tribal gaming, sports betting, online casino/poker, DFS, lottery, charitable, social gaming
3. **Role**: operator, platform, vendor, key employee, manufacturer, affiliate, payment processor
4. **Scope**: current law only or include pending reforms
5. **Output**: length, audience, citation style

If jurisdiction is not specified, ask before proceeding.

## Output Template

### Header

Title, jurisdiction(s), effective date range, prepared date, audience.

### Executive Summary (5 to 12 bullets)

- Legal status by vertical, Primary regulator(s) and market entry barriers, High-risk compliance obligations and tax/fee exposure, Active enforcement priorities and pending reforms

### Scope Table

| Item | Detail |
|---|---|
| Jurisdiction level | Federal / State / Tribal / Local |
| Legal authority | Constitution, statute, regulation, compact |
| Gaming verticals | Included and excluded |
| Regulator(s) | Agency names and jurisdiction |
| Sources | Statutes, regs, agency guidance, case law |

### Legal Status & Authority

- Permitted, prohibited, and restricted categories with statutory basis, Preemption hierarchy; tribal framework and compact status if applicable

### Regulatory Bodies

- Primary and secondary regulators; licensing board composition and powers

### Licensing & Suitability

| License Type | Who Needs It | Key Requirements | Term | Transferable? |
|---|---|---|---|---|
| Operator | | | | |
| Vendor | | | | |
| Key employee | | | | |
| Manufacturer | | | | |

- Eligibility, background checks, financial suitability, ownership thresholds, Fees, renewal cadence, grounds for denial/suspension/revocation

### Operational Restrictions

- Responsible gaming, AML/KYC, age verification, advertising limits, Game integrity testing, technical standards, audit requirements, Geolocation/server rules (online), payment restrictions, betting limits

### Taxes & Fees

| Category | Rate/Method | Trigger | Notes |
|---|---|---|---|
| GGR tax | | | |
| License fees | | | |
| Regulatory assessments | | | |
| Local taxes | | | |

### Enforcement & Penalties

- Administrative, civil, and criminal sanctions, Recent enforcement trends and exemplar actions

### Pending Reforms

- Bill/rule ID, status, expected effective date, Transition/grandfathering rules and operational impact

### Risk & Compliance Recommendations

- Top 5 compliance priorities by vertical, Immediate action items and monitoring plan

### Citation & Disclaimer

- Bluebook format; hyperlink official sources; mark uncertain items `[VERIFY]`
- Disclaimer: gambling law changes rapidly; summary is informational, not legal advice

## Pitfalls

- Never blend federal, state, and tribal regimes, separate each authority clearly, Always flag IGRA, compacts, or federal preemption issues when relevant, Use only primary sources or regulator guidance for legal status assertions, Include effective dates and amendment history for all cited authorities, Label uncertainty explicitly, avoid speculative conclusions, Keep tone executive-ready and compliance-focused

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
