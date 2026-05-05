---
name: past-performance-questionnaire
language: en
description: Drafts a Past Performance Questionnaire for evaluating legal service providers or contractors in government contract contexts. Trigger when the user needs vendor evaluation instruments, contractor performance reviews, past performance assessments, or due diligence questionnaires aligned with FAR requirements. [Atticus UK/Scots refined]
tags:
- checklist, drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Past Performance Questionnaire

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

Produces a structured, legally defensible evaluation instrument for assessing historical performance of legal service providers or contractors, optimized for government procurement and regulatory compliance.

## Quick Start

Gather before drafting:

1. **Evaluated entity** - firm/contractor name, contract or engagement reference numbers
2. **Engagement scope** - matter type, jurisdiction, timeframe, budget
3. **Evaluation purpose** - procurement decision, renewal review, compliance audit
4. **Prior performance records** - past evaluations, deliverable logs, correspondence
5. **Regulatory framework** - FAR Part 42.15 for federal contracts, agency supplements, or org policy

## Questionnaire Sections

### 1. Respondent Information

Collect in a structured form block:

- Full legal name, title/role, organization, Contact info (email, phone)
- Relationship to evaluated entity (client, co-counsel, subcontractor, COR, etc.)
- Duration of professional relationship, Professional credentials / bar number (if attorney)

### 2. Engagement Details

- Contract/matter number, Matter type (litigation, transactional, regulatory, advisory)
- Jurisdiction(s) and period of performance (start/end)
- Contract value/budget (original and final)
- Scope of work summary (2 to 3 sentences)
- Key deliverables, final disposition/outcome, Subcontractors involved (if applicable)

### 3. Performance Rating Matrix

Use a 5-point scale with behavioral anchors:

| Rating | Definition |
|---|---|
| 5 - Exceptional | Exceeded requirements; zero deficiencies; model for others |
| 4 - Very Good | Exceeded some requirements; minor deficiencies promptly corrected |
| 3 - Satisfactory | Met requirements; deficiencies did not impact outcomes |
| 2 - Marginal | Did not meet some requirements; deficiencies required intervention |
| 1 - Unsatisfactory | Failed to meet requirements; material deficiencies |

**Rate each dimension** (numeric score + minimum 2-sentence narrative):

- Quality of legal work product (accuracy, thoroughness, legal soundness)
- Timeliness (deadline adherence, responsiveness)
- Budget management (cost control, billing transparency, change orders)
- Communication (clarity, frequency, issue escalation)
- Professional conduct (ethics, confidentiality, conflicts management)
- Staffing/resource management (qualified personnel, continuity)
- Problem resolution (issue identification, corrective action, adaptability)
- Regulatory/compliance adherence (applicable rules, reporting, documentation)

### 4. Qualitative Assessment

Include four open-ended prompts:

1. **Strengths** - specific examples of performance exceeding expectations
2. **Deficiencies** - performance issues, corrective actions taken, and outcomes
3. **Relevance** - comparability of this engagement to prospective scope in complexity and subject matter
4. **Rehire** - whether respondent would engage this provider again for similar work, with rationale

### 5. Supporting Documentation

Request as applicable:

- Representative work samples (redacted as needed)
- Performance metrics or scorecards, Correspondence documenting issues or commendations, Third-party references with contact authorization, Final deliverable acceptance records

Include instruction: "Redact privileged, classified, or proprietary information. Identify documents subject to protective order or confidentiality agreement."

### 6. Certification and Signature

Include a certification block with:

- Truth and accuracy attestation, Consequence disclosure for false/misleading statements (per applicable policy)
- Authorization limiting use to stated evaluation purpose, Signature, printed name, title, and date fields

For electronic submissions, add E-SIGN Act / UETA compliance language and specify acceptable signature methods.

## Pitfalls and Checks

- **FAR alignment**: For federal procurements, verify compliance with FAR 42.1503 (evaluation standards) and FAR 15.305(a)(2) (source selection) - confirm current regulatory text before finalizing
- **Objectivity**: Frame prompts neutrally; require specific examples for any rating above 4 or below 3
- **Bias mitigation**: Use identical scales and prompts across all respondents for the same evaluation
- **Privilege protection**: Instruct respondents not to disclose attorney-client privileged communications; include a carve-out disclaimer
- **Confidentiality**: Mark completed questionnaires "Source Selection Sensitive" for government use; include handling instructions
- **Recency**: Flag engagements older than 3 years; note reduced relevance per standard practice
- **Data retention**: Specify retention period per agency policy or organizational requirements

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
