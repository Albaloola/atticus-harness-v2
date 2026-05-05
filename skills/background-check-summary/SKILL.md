---
name: background-check-summary
language: en
description: Summarizes raw background check data into structured executive reports with risk categorization (GREEN/YELLOW/RED). Use when processing criminal records, court filings, employment/education verification, sanctions screening, or adverse media for pre-employment screening, executive due diligence, or investment-grade investigations. [Atticus UK/Scots refined]
tags:
- background-check, due-diligence, screening, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Background Check Summarization, Scotland/UK Adaptation

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

Transforms raw background check data into a decision-ready summary with risk categorization and compliance flags. Output has three sections: executive summary, detailed findings, and methodology.

## Quick Start

1. Identify subject (name, DOB, NI number last 4, search scope)
2. Categorize each check type as Pass / Flag / Pending
3. Assign overall status: GREEN, YELLOW, or RED
4. Surface top 2 to 3 findings and any compliance flags
5. Append methodology and coverage limitations

## Output Structure

### Executive Summary

- **Subject**: Full name, DOB, NI No (last 4), search scope
- **Overall Status**: GREEN (clear) / YELLOW (requires review) / RED (adverse findings)
- **Category Table**: Pass/Flag/Pending per check type
- **Key Findings**: 2 to 3 most significant items
- **Compliance Flags**: Jurisdiction-specific requirements

### Detailed Findings

Present each category with findings or explicit "No records found":

| Category | Key Data Points |
|----------|----------------|
| Criminal Records (Basic/Standard/Enhanced DBS) | Charges, disposition, date, jurisdiction, sentence |
| Sex Offender Register | Status, jurisdiction (ViSOR/Police Scotland) |
| Civil Litigation | Case type, role, disposition, damages/decree |
| Employment Verification | Title (claimed vs. verified), dates, departure reason |
| Education Verification | Degree (claimed vs. verified), institution, dates |
| Professional Licenses | Status, disciplinary actions (regulator-checked) |
| Sanctions/Watchlist | UK Sanctions List (FCDO), OFSI, HM Treasury consolidated list |
| Adverse Media | Source, date, relevance assessment |

### Methodology & Limitations

State sources searched and gaps (jurisdictions not covered, spent convictions under Rehabilitation of Offenders Act 1974, DBS filtering rules, database lag).

## Risk Categorization

| Status | Criteria | Action |
|--------|----------|--------|
| GREEN | No adverse records, all verifications confirmed | Proceed |
| YELLOW | Minor discrepancies, old/minor unspent offences, items needing context | Human review required |
| RED | Significant adverse findings, verification failures, recent serious offences | Enhanced review / adverse action |

### Escalation Factors

- **Criminal**: Indictable-only offence; violence/fraud/theft-related; recency (<7 yrs); position relevance; pending charges; unprotected spent convictions
- **Employment**: Title inflation; date gaps >3 months; overlapping employment; employer not found
- **Education**: Degree or institution mismatch; unaccredited institution; fraudulent qualifications

## Compliance Checks

- **Data Protection Act 2018 / UK GDPR**: Fair processing notice required; data minimisation; retention limitation
- **Rehabilitation of Offenders Act 1974**: Adhere to spent conviction rules; only request certain convictions at specific hiring stages
- **DBS Code of Practice**: Registered DBS umbrella bodies must comply; secure handling of certificate information
- **Equality Act 2010**: Avoid unlawful discrimination; ensure criminal record checks are proportionate and job-related
- **Scottish specific**: Disclosure Scotland's PVG scheme for regulated work with children/vulnerable adults
- **Filtering rules**: Certain old/relevant cautions and convictions are protected and must not be disclosed
- **Ban the Box** (UK adopted): Remove criminal history questions from initial application forms; delay until conditional offer

[SCOTS: Note] The US FCRA (Fair Credit Reporting Act) has no direct UK equivalent. UK background checks are governed by the DBS framework (England/Wales) and Disclosure Scotland. The Rehabilitation of Offenders Act 1974 and its Exceptions Order 1975 define which convictions must be disclosed and when.

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- SSN (last 4) → NI number (last 4)
- Criminal records (Fed/State/County) → Basic/Standard/Enhanced DBS checks (Disclosure Scotland for Scottish posts)
- Sex Offender Registry → Violent and Sex Offender Register (ViSOR); Sex Offenders Register, Sanctions screening: OFAC, BIS, state debarment → UK Sanctions List (FCDO/OFSI), HM Treasury consolidated list; Export Control Organisation (UK) for trade controls, FCRA compliance → Data Protection Act 2018 / UK GDPR; DBS Code of Practice, Ban-the-Box / Fair Chance → UK Ban the Box campaign; Disclosure Scotland PVG scheme, EEOC Guidance → Equality Act 2010; EHRC guidance, State lookback limits → Rehabilitation of Offenders Act 1974 spent periods + DBS filtering rules

**Key Scottish/UK considerations:**
- Rehabilitation of Offenders Act 1974 governs spent/unspent convictions, crucial for lawful screening, Disclosure Scotland handles background checks for Scottish roles (PVG scheme for regulated work)
- Enhanced DBS checks available for specific regulated activities only, No direct equivalent to US FCRA adverse action process; UK follows DBS Code of Practice and Data Protection Act 2018
- Sanctions screening uses the UK Sanctions List (replaced old OFSI Consolidated List as of Jan 2026)

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
