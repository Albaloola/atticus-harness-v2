---
name: alibi-notice
language: en
description: Drafts a Notice of Alibi Defense under Fed. R. Crim. P. 12.1 or state equivalents. Triggers on alibi notice drafting, alibi defense filing, Rule 12.1 disclosure, or pre-trial criminal defense notice tasks. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Notice of Alibi Defense

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

Generates a Rule 12.1-compliant alibi notice satisfying prosecution disclosure obligations while preserving defense strategy.

## Required Inputs

1. **Charging documents** - indictment/information with dates, times, location of alleged offense
2. **Alibi details** - defendant's actual location(s) with full addresses during relevant period
3. **Alibi witnesses** - legal names, addresses, phone numbers, expected testimony
4. **Corroborating evidence** - receipts, surveillance, GPS data, access logs, timestamped records
5. **Jurisdictional rules** - Fed. R. Crim. P. 12.1 vs. state equivalent; filing deadline trigger (arraignment, indictment, or court order)
6. **Local formatting rules** - font, spacing, margins, e-filing requirements

## Document Sections

### 1. Court Caption

Standard criminal caption: court name, case number, defendant name (matching charging documents), prosecuting entity, document title ("Notice of Alibi Defense").

### 2. Introductory Statement

State defendant's full name, intent to present alibi defense, controlling rule citation, offense date/time as charged, core assertion (not present at crime scene), and good-faith compliance statement.

### 3. Alibi Specification

For each location:

| Field | Detail |
|---|---|
| Date/time range | Full charged period with margins |
| Location | Full address, building/business name, suite, city, state, ZIP |
| Activities | Sequence of defendant's actions at location |
| Corroboration | Timestamped receipts, card transactions, surveillance, GPS, access logs |

Specificity standard: "Riverside Bistro, 847 Waterfront Drive, Suite 101, Portland, OR 97204, reservation 7:30 PM, departed ~9:45 PM" - not "a restaurant."

### 4. Alibi Witness Disclosure

Per witness: full legal name, current address, phone/email (per local practice), relationship to defendant or location, concise expected testimony summary. Organize chronologically or by location.

Include supplementation reservation preserving the right to identify additional witnesses through continuing investigation.

### 5. Reciprocal Discovery Demand

Demand under Rule 12.1(b) (or state equivalent) that prosecution disclose within rule timeframe (14 days federal):
- Rebuttal witness names, addresses, expected testimony, Evidence placing defendant at crime scene, Surveillance, electronic data, or expert testimony contradicting alibi

Use mandatory language reflecting prosecution's legal obligation.

### 6. Legal Authority

Cite controlling procedural rule. Cite jurisdiction-specific case law on alibi notice specificity. [VERIFY case law for jurisdiction.] Distinguish exclusion cases by showing notice satisfies requirements.

### 7. Attorney Certification & Certificate of Service

Attorney certification: good-faith statement, attorney name/bar number/firm/contact, representation line. Add defendant signature if local rules require.

Certificate of service: date, prosecutor name/office, service method (ECF/mail/personal), e-filing compliance.

## Pitfalls & Checks

- **Deadline compliance** - Calculate precisely from triggering event; document compliance in the notice itself
- **Minimal disclosure** - Exclude work product, mental impressions, legal theories, and trial strategy beyond required elements
- **Privacy-sensitive alibis** - Medical/counseling alibis may require protective order or in camera review before filing
- **Accuracy** - All facts must be verifiable; false statements risk sanctions, ethical violations, or criminal liability
- **Specificity vs. strategy** - Satisfy disclosure without unnecessarily enabling prosecution rebuttal preparation
- **Rights preservation** - Include language preserving rights to testify or remain silent, present a defense, and supplement the notice
- **Internal consistency** - Cross-check all dates, times, locations, and witness details against case file
- **Format** - Typically 2 to 5 pages; 12pt Times New Roman, double-spaced body, single-spaced caption/signature, page numbers with case ID in footer per local rules

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
