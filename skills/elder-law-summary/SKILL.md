---
name: elder-law-summary
language: en
description: Generates structured elder law summaries covering estate planning, adult protection, healthcare rights, social care eligibility, and guardianship with prioritised action plans for Scotland. Triggers when the user requests an elderly client matter summary, adult care legal overview, long-term care planning review, or guardianship assessment. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, summarisation, summary, transactional, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Elder Law Summary, Scotland/UK

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

Structured legal overview for elderly client matters, jurisdiction-specific analysis across all elder law domains with a prioritised action plan. Serves both legal professionals and family caregivers.

## Prerequisites

Gather before generating:

1. **Client profile** - age, local authority area, capacity status, living situation
2. **Legal documents** - wills, trusts, Continuing and Welfare Powers of Attorney, advance directives, guardianship orders
3. **Financials** - asset inventory, income sources, benefit status (State Pension, Pension Credit, Attendance Allowance, PIP)
4. **Medical context** - conditions, care needs, current arrangements
5. **Triggers** - suspected abuse, social care funding application, capacity decline, family disputes

## Output Structure

### 1. Executive Overview

| Element | Content |
|---|---|
| Client snapshot | Name, age, local authority, capacity status, living situation |
| Critical issues | Top 3 to 5 pressing legal concerns |
| Immediate actions | Time-sensitive items (deadlines, reporting obligations) |
| Risk level | Low / Moderate / High with justification |

### 2. Domain Analysis

Analyse each applicable domain:

**Estate Planning** - Inventory documents; note execution defects, staleness, missing instruments. Identify untitled assets, missing beneficiary designations, outdated attorneys/fiduciaries. Recommend specific documents to draft/update.

**Adult Support & Protection (Elder Abuse)** - Flag suspicious transactions, undue influence signs, neglect markers. Scottish mandatory reporting under ASP Act 2007. Referral to Adult Protection Committee. Remedies: protection orders, interdict, criminal referral to COPFS, ASP referral.

**Healthcare Rights & Advance Directives** - Directive validity and consistency with current wishes. NHS continuing healthcare eligibility. Care home residents' rights, Data Protection Act 2018 / UK GDPR considerations.

**Social Care & Long-Term Care** - Local authority means-tested care contributions. Deprivation of assets rules (Scotland). Self-directed support options. NHS Continuing Healthcare eligibility criteria. Permissible planning through trusts. `[VERIFY]`

**Guardianship / Intervention Orders** - Assess necessity vs. less restrictive alternatives (Continuing POA, Welfare POA, intervention order, supported decision-making). Adults with Incapacity (Scotland) Act 2000 filing requirements, costs, timelines. Review existing order scope and OPG reporting compliance.

**Benefits & Income** - State Pension, Pension Credit, Attendance Allowance, Personal Independence Payment (PIP), Armed Forces Compensation. Tax implications of current arrangements.

### 3. Document Review Findings

When documents are uploaded:

| Document | Key Facts | Red Flags | Status |
|---|---|---|---|
| {name} | {dates, parties, terms} | {concerns} | Valid / Defective / Stale |

### 4. Prioritised Action Plan

| Priority | Action | Owner | Urgency |
|---|---|---|---|
| Immediate | e.g., report to Adult Protection Committee | Solicitor / SW | 24 to 48 hrs |
| Short-term | e.g., register Continuing POA with OPG | Solicitor + family | 2 to 4 weeks |
| Long-term | e.g., NHS CHC assessment | Solicitor + social work | 3 to 6 months |

## Pitfalls & Checks

- **Always specify local authority** - social care thresholds, guardianship procedures, and adult protection rules vary by council
- **Plain language** - explain legal concepts accessibly; output serves solicitors and family caregivers
- **Cite uploaded documents** by name when identifying facts or concerns
- **Capacity observations only** - note concerns without clinical determinations; recommend formal evaluation under Adults with Incapacity (Scotland) Act 2000 where appropriate
- **`[VERIFY]` tag** - mark any statutory cite or threshold not confirmed against current law
- **Least restrictive alternative** - frame recommendations to preserve client autonomy and dignity (AWI Act principle)
- **Include Scotland-specific contacts** where actionable (local Adult Protection Committee, OPG Scotland, Care Inspectorate, Scottish Public Services Ombudsman)
- **No US terminology** - use Scottish legal terms (Continuing POA not durable POA; guardianship not conservatorship; adults at risk not vulnerable adult)

## Scotland/UK Adaptation

This skill has been adapted from a US version for use in Scotland.

### Terminology Changes

| US Term | Scottish Equivalent |
|---|---|
| State-specific Medicaid | Local authority social care / NHS Continuing Healthcare |
| Medicare/Medicaid | NHS Scotland (universal) |
| SSI / SSDI | Pension Credit / Attendance Allowance / PIP |
| APS (Adult Protective Services) | Adult Protection Committee (Scotland) |
| Durable Power of Attorney | Continuing and Welfare Power of Attorney (AWI Act 2000) |
| Conservatorship | Guardianship Order (Financial or Welfare) |
| HIPAA | Data Protection Act 2018 / UK GDPR |
| Living Will | Advance Directive (common law) |
| Look-back period (Medicaid) | Deprivation of Assets rules (Social Work (Scotland) Act) |

### Key Differences

- **No Medicare/Medicaid** - NHS Scotland provides universal healthcare; social care is means-tested via local authorities
- **Adult Support and Protection (Scotland) Act 2007** replaces state-level APS with a standardised Scottish framework
- **No HIPAA** - patient confidentiality governed by Data Protection Act 2018 / UK GDPR and common law
- **Adults with Incapacity (Scotland) Act 2000** provides the legal framework for POAs, guardianship, and intervention orders
- **Office of the Public Guardian (Scotland)** and **Mental Welfare Commission** are the regulatory bodies, not US equivalent agencies
- **Self-directed Support** enables clients to control their own social care budgets
- **Guaranteed State Pension** - no equivalent to US Social Security's earnings-based calculation
- **No punitive damages** in Scottish law for elder abuse civil claims

### Recommended Scottish Sources

- Adult Support and Protection (Scotland) Act 2007
- Adults with Incapacity (Scotland) Act 2000
- Self-directed Support (Scotland) Act 2013
- Social Work (Scotland) Act 1968 (deprivation of assets rules)
- Office of the Public Guardian Scotland, guidance, Mental Welfare Commission for Scotland, guidance, Care Inspectorate, care home standards guidance

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
