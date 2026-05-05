---
name: sports-law-cases
language: en
description: Generates structured summaries of sports law cases covering contract disputes, doping violations, and governance controversies. Use when summarizing sports litigation, researching athlete contract disputes, anti-doping arbitration, league antitrust challenges, NCAA eligibility cases, or CAS proceedings. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Sports Law Case Summaries

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

Produces structured, issue-organized summaries of sports law cases for attorneys, compliance officers, and sports management professionals. Covers professional leagues, Olympic sports, and collegiate athletics.

## Prerequisites

1. **Case materials** - decisions, arbitration awards, or docket information
2. **Scope** - category (contracts, doping, governance) or specific cases
3. **Audience** - legal professionals, business stakeholders, or mixed

## Quick Start

1. Identify case category (contracts, doping, governance)
2. Gather source materials and confirm scope
3. Produce per-case summaries using the format below
4. Add cross-cutting analysis and closing trends
5. `[VERIFY]` every citation before delivery

## Per-Case Summary Format

| Field | Content |
|---|---|
| Case Name & Citation | Full citation in proper legal format - `[VERIFY]` all citations |
| Parties | Names + roles (athlete, team, league, governing body, sponsor) |
| Forum | Court or arbitration panel (CAS, AAA) + jurisdiction |
| Date / Status | Decision date; note if ongoing or on appeal |
| Facts | Concise background with sports-industry context |
| Legal Issues | Numbered list of questions presented |
| Holdings & Reasoning | Disposition + key rationale per issue |
| Implications | Practical impact on industry stakeholders |
| Cross-References | Related cases in other categories |

## Category Analysis Points

### Contract Disputes

- CBA vs. individual contract interplay, Salary cap / guaranteed vs. non-guaranteed compensation, Restrictive covenants, non-competes, transfer fees, Endorsement exclusivity and morals clauses, Bonus/incentive trigger disputes, Agency formation issues

### Doping & Anti-Doping

- **Procedural rights** - notice, hearing, representation under WADA Code / league policy
- **Standard of proof** - comfortable satisfaction (CAS) vs. other standards
- **Strict liability** - defenses: contaminated product, no fault/negligence
- **Testing validity** - chain of custody, B-sample, lab accreditation
- **Proportionality** - sanction length vs. violation severity
- **TUE disputes** - therapeutic use exemption denials and appeals
- **CAS review** - scope of de novo review of national decisions

### Governance Controversies

- **Antitrust** - league rules vs. Sherman Act / competition law; single-entity defense, rule of reason, nonstatutory labor exemption
- **Commissioner authority** - disciplinary discretion, "best interests" powers
- **Eligibility** - age rules, transfer restrictions, NCAA amateurism
- **Due process** - internal procedures vs. fundamental fairness
- **Multi-body conflicts** - national federation vs. international federation vs. CAS
- **EU competition law** - Treaty provisions applied to FIFA/UEFA rules

## Cross-Cutting Analysis

After individual summaries, address:

1. **Recurring principles** - patterns in judicial reasoning across categories
2. **Jurisdictional divergence** - US vs. EU vs. CAS approaches; circuit splits
3. **Precedential evolution** - how holdings shifted over time
4. **Deference patterns** - courts deferring to league rules vs. intervening
5. **CBA impact** - collective bargaining constraining or expanding individual rights

## Closing Section

- Current trends in sports litigation, Emerging risk areas (NIL, esports, biometric data, AI in officiating, sportswashing liability)
- Practical risk-mitigation guidance for organizations and athletes

## Pitfalls and Checks

- `[VERIFY]` every case citation, never fabricate reporter volumes, page numbers, or years, For CAS awards, always include the CAS reference number (e.g., CAS 2020/A/XXXX)
- Define legal terms on first use when audience includes non-lawyers, Maintain analytical neutrality, identify prevailing positions without advocacy, Cover both domestic (US federal/state) and international (CAS, EU) cases where relevant, Note superseded holdings or subsequent legislative overrides, Cross-reference cases appearing in multiple categories

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
