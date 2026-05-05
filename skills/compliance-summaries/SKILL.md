---
name: compliance-summaries
language: en
description: Generates structured compliance summaries assessing regulatory posture, identifying gaps, and producing prioritized remediation roadmaps across finance (SEC, FINRA), healthcare (HIPAA, FDA), environmental (EPA), and data privacy (GDPR, CCPA) sectors. Use when drafting regulatory compliance reports, audit readiness assessments, or governance documents for executives, boards, or regulators. For sector-specific depth, defer to dedicated sibling skills (environmental-regulation-summaries, hipaa-privacy-notice, fcpa-compliance-policy, etc.). [Atticus UK/Scots refined]
tags:
- SCOTS, regulatory, summary, analysis, summarization, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Compliance Summary

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

Produces a governance-ready compliance summary with gap analysis and prioritized remediation roadmap. Outputs target dual audiences: board-level oversight and operational compliance teams.

---

## Related skills

This skill produces cross-sector compliance summaries. For sector-specific depth, defer to:

- **Environmental** - `environmental-regulation-summaries` (CAA / CWA / RCRA / CERCLA / NEPA / ESA / TSCA), `phase-i-esa` (Phase I ESA), `consent-decree-epa` (federal enforcement settlements), `nov-response` (regulatory NOVs).
- **Healthcare** - `hipaa-privacy-notice`, `hipaa-baa`, `hipaa-release`, `cpom-compliance`, `stark-law-aks-compliance`.
- **Financial services** - `bsa-risk-assessment`, `aml-compliance-program`, `cip-policy`, `reg-bi-policy`, `fcpa-compliance-policy`.
- **Data privacy** - `ccpa-policy`, `gdpr-data-processing-addendum`, `data-retention-and-destruction-policy`, `breach-notification`, `wisp`.
- **Government contracts** - `c-tpat-security-profile`, `dd-form-254`, `oci-mitigation-plan`, `subcontracting-plan`.

## Prerequisites

Before drafting, confirm:

1. **Sector and jurisdiction** - finance, healthcare, environmental, data privacy, or other; federal, state, or international scope
2. **Source documents** - compliance policies, internal audits, regulatory correspondence, incident reports, consent orders, prior summaries
3. **Scope** - full enterprise, specific business unit, or defined regulatory domain

## Output Structure

### 1. Executive Summary

| Field | Content |
|---|---|
| Overall Posture | Compliant / Substantially Compliant / Non-Compliant / Under Active Regulatory Scrutiny |
| Top 3 Risks | Ranked by severity and regulatory exposure |
| Immediate Action Items | Items requiring executive or board attention now |
| Review Period | Date range covered |

Write accessibly for non-lawyers. Detailed sections may use technical regulatory terminology.

### 2. Regulatory Requirements Matrix

For each applicable requirement, organize by regulatory domain (e.g., SEC/FINRA, HIPAA/FDA, EPA, CCPA/GDPR) or by business unit:

| Requirement | Citation | Obligation | Responsible Party | Deadline/Frequency | Penalty Exposure |
|---|---|---|---|---|---|

### 3. Compliance Status Assessment

For each requirement in the matrix:

- **Status**: Compliant | Gap Identified | Deficiency | Unknown/Insufficient Evidence
- **Supporting Evidence**: policies, training records, audit results, certifications, filings
- **Gap Description**: specific deficiency with factual basis
- **Remediation**: action steps, owner, target date, resource estimate

### 4. Compliance Infrastructure Assessment

Evaluate whether the organization has:

- Designated compliance officer(s) with appropriate authority, Board-approved compliance program and policies, Regular risk assessments with defined frequency, Employee training program with completion tracking, Monitoring and auditing cadence, Incident response and breach notification procedures, Escalation path to senior management and board, Regulatory examination readiness protocols

### 5. Temporal Compliance Calendar

Track upcoming deadlines in a table covering: license/cert renewals, pending audits/exams, and upcoming regulatory changes requiring program modification. Include item, type, deadline, owner, and status.

### 6. Prioritized Action Plan

Rank remediation by: (1) regulatory deadline, (2) risk severity, (3) resource availability, (4) workstream dependencies.

| Priority | Action | Owner | Target Date | Success Metric |
|---|---|---|---|---|

## Checks

- **Cite precisely** - include CFR sections, statute numbers, and agency guidance identifiers; flag uncertain citations with `[VERIFY]`
- **Distinguish evidence quality** - separate documented compliance from self-reported or assumed compliance
- **Flag gray areas** - note regulatory interpretive uncertainty; recommend regulator engagement or outside counsel review where applicable
- **Emerging regulations** - flag anticipated regulatory changes requiring future program modification
- **No legal advice** - frame as compliance assessment; note where legal counsel review is required before reliance

---

## Troubleshooting

- **Multi-sector target.** When the entity operates across multiple regulated sectors, build the matrix sector-by-sector (one block per sector) rather than collapsing into a single matrix. Sector-specific terminology and citation conventions matter; mixing them produces an unauditable summary.
- **Privileged audit findings cited as evidence.** Privileged internal-audit reports cited verbatim may waive privilege. Use neutral re-statements ("internal review identified...") and cite the underlying factual record. Flag the privilege question in a footnote.
- **Rapidly-changing regulatory environment.** For domains in active rulemaking (e.g., AI / data privacy state laws, environmental disclosure rules, SEC climate disclosure), use a `[VERIFY as of YYYY-MM-DD]` marker and recommend re-verification within 90 days.
- **Cite to non-binding guidance.** Distinguish statutes (binding) from regulations (binding when properly promulgated) from agency guidance (often non-binding). Misrepresenting guidance as binding is a common error in compliance summaries.
- **Overlapping federal and state regimes.** State analogs may exceed federal minimums (e.g., CCPA vs. federal privacy patchwork). Always check the state floor; do not treat federal compliance as a safe harbor.

---

## Scotland/UK Adaptation

### Regulatory Equivalents

| US Sector | UK/Scottish Equivalent |
|---|---|
| SEC / FINRA (securities) | FCA (Financial Conduct Authority) / PRA (Prudential Regulation Authority) |
| HIPAA / FDA (healthcare) | NHS Scotland governance / Healthcare Improvement Scotland / MHRA (medicines) |
| EPA (environmental) | SEPA (Scottish Environment Protection Agency) / EA (Environment Agency in England) |
| CCPA / State privacy | UK GDPR / Data Protection Act 2018 (applies across UK); no state-level equivalents |
| OSHA (workplace safety) | HSE (Health & Safety Executive) |

### Courts & Enforcement, Regulatory enforcement in Scotland generally proceeds through the **Sheriff Court** or **Court of Session** (civil) or the **COPFS** (Crown Office and Procurator Fiscal Service) for criminal/enforcement matters.
- FCA enforcement actions are heard in the **Upper Tribunal (Tax and Chancery Chamber)** or the High Court.
- SEPA prosecutions are brought by COPFS in the Sheriff Court.

### Currency, All monetary thresholds, penalties, and budget figures should be stated in **GBP (£)**.
- FCA fines are unlimited in amount; SEPA civil penalties are subject to statutory maxima.

### Key Differences for Practitioners
1. **Data Protection**: UK GDPR is substantially similar to EU GDPR but is a standalone UK regime. ICO (Information Commissioner's Office) enforces. No US-style state privacy patchwork.
2. **Sectoral Overlap**: A Scottish entity may need compliance summaries covering FCA, SEPA, HSE, and UK GDPR, the matrix approach in this skill works directly.
3. **Devolved vs Reserved**: Environmental regulation is largely devolved (SEPA); financial services is reserved (FCA/PRA). Always confirm which regulator has jurisdiction.
4. **Penalty Exposure**: UK regulators often have broader fining powers (e.g., FCA can fine without upper limit). HSE prosecutions can result in imprisonment for serious health and safety offences.
5. **Board Reporting**: The UK Corporate Governance Code (FCA Listing Rules) and the Wates Principles for large private companies set expectations for board-level compliance reporting.

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
