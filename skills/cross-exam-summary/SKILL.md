---
name: cross-exam-summary
language: en
description: Generates a structured cross-examination summary from precognitions, affidavits, productions, and commission evidence organised by witness and theme with pinpoint citations. Use when preparing for proof or trial cross-examination, witness impeachment planning, precognition analysis, or building courtroom reference sheets. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Cross-Examination Key Points Summary

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

Produces an actionable cross-exam reference organised by witness and theme, with pinpoint citations for courtroom use in Scottish civil and criminal proceedings.

## Prerequisites

- Precognitions / affidavits with page:line references, Productions (documents, emails, contracts disclosed by commission and diligence)
- Specification of documents / commission responses, Witness list for anticipated opposing witnesses, Client's case theory and key elements to prove/defend

## Quick Start

1. Identify all witnesses and group testimony by theme (not chronology)
2. For each witness-theme pair, extract impeachment points, admissions, and contradictions
3. Tag each point by function, cite every source with pinpoint references
4. Build the quick-reference table from highest-impact points
5. Cross-reference productions to witnesses and contradictions

## Output Structure

### Quick-Reference Table (Top of Document)

| Witness | Top Impeachment Point | Source | Theme |
|---------|----------------------|--------|-------|
| {Name} | {One-line summary} | {Doc, p.XX:LL-LL} | {Theme} |

List 2-3 highest-impact points per witness.

### Per-Witness Sections

Organise each witness by theme:

```
## [Witness Name] - [Role]

### Theme: [e.g., "Knowledge of Defect"]

**Purpose:** [IMPEACH | ADMIT | FOUNDATION | CREDIBILITY | ELEMENT | EXPERT]

- **Point:** {Concise cross-exam point}
  - **Prior Statement:** "{Exact quote}" - [Precognition/Affidavit, p.XX:LL-LL]
  - **Contradicting Evidence:** "{Quote or production description}" - [Production XX]
  - **Suggested Q Line:** {Leading question sequence}
  - **Objection Risk:** {Likely objection + response under Scottish evidence law}
  - **Evasion Prep:** {Anticipated dodge + follow-up}
```

### Point Tags

| Tag | Purpose |
|-----|---------|
| `IMPEACH` | Prior inconsistent statement (common law foundation required) |
| `ADMIT` | Elicit favourable admission |
| `FOUNDATION` | Establish/undermine foundation for testimony |
| `CREDIBILITY` | Bias, interest, motive, perception, memory |
| `ELEMENT` | Directly proves/negates a claim element |
| `EXPERT` | Challenge methodology, assumptions, qualifications |

### Expert Witnesses

For experts, additionally address:
- Methodology challenges (per *Kennedy v Cordia* - necessity, relevance, competence)
- Unsupported or contradicted factual assumptions, Qualification gaps relevant to opinions offered, Prior inconsistent opinions in other cases

### Production Cross-Reference Table

| Prod. # | Description | Witnesses | Key Contradiction |
|---------|-------------|-----------|-------------------|
| {No.} | {Brief desc} | {Names + cite} | {What it undermines} |

## Rules

- **Citation format:** `[Document Name, p.XX:LL-LL]` - every point requires a pinpoint cite
- **Leading questions only** for all suggested Q lines (answerable yes/no)
- **Side-by-side contradictions:** Present conflicting statements together with full citations
- **Sequence strategically:** Control questions first, build to impeachment payoff
- **Flag hearsay paths** where a line may open the door to otherwise inadmissible evidence
- **Adjust tone:** Simple concrete questions for lay witnesses; technical precision for experts
- **Never fabricate testimony** - only include statements found in provided materials
- **Flag Scottish evidence rules** (e.g., requirement to put prior inconsistent statement to witness before leading extrinsic evidence, per Scottish common law)

## Scotland/UK Adaptation

This skill has been adapted from a US version for use in Scottish civil and criminal proceedings.

### Terminology Changes

| US Term | Scottish Equivalent |
|---------|-------------------|
| Deposition | Precognition / Affidavit / Evidence on Commission |
| Discovery request | Specification of documents / Commission and Diligence |
| Exhibit | Production (Scottish court numbering) |
| Trial (civil) | Proof |
| FRE 613 | Scottish common law, put prior statement to witness |
| Daubert/Frye | *Kennedy v Cordia* (Services) LLP 2016 SC (UKSC) 59 |
| Queen Caroline's Rule | Scottish common law foundation requirement |

### Key Differences

- **No Federal Rules of Evidence** in Scotland, evidence law is a mix of common law (largely shared with England on civil evidence) and statute (Civil Evidence (Scotland) Act 1988; Criminal Procedure (Scotland) Act 1995)
- **No routine depositions** - precognition statements (prepared by solicitors) and affidavits are the primary pre-proof sources
- **Jury trial (civil)** only in Court of Session for personal injury, defamation, and certain other actions
- **Expert evidence** governed by *Kennedy v Cordia* necessity/relevance/competence test, not Daubert/Frye
- **Commission and Diligence** is the Scottish procedure for recovering documents and evidence from opposing parties and third parties

### Recommended Scottish Sources

- *Kennedy v Cordia (Services) LLP* [2016] UKSC 6
- Civil Evidence (Scotland) Act 1988
- Criminal Procedure (Scotland) Act 1995
- Scottish Courts and Tribunals Service, practice notes on commission and diligence, Act of Sederunt (civil procedure rules in Sheriff Court and Court of Session)

---

**Key changes from original:**

- **Replaced US terms** with Scots equivalents throughout (deposition → precognition, discovery → specification of documents, exhibit → production, trial → proof)
- **Updated evidence references** to Scottish common law and statutes (Civil Evidence (Scotland) Act 1988)
- **Replaced Daubert/Frye** with *Kennedy v Cordia* expert admissibility test
- **Updated court reference** - civil trial is "proof" in Scotland
- **Added 'Scotland/UK Adaptation' section** with terminology table and key differences
- **Added `[SCOTS]` tag** in description
- **Preserved core methodology** - cross-examination technique is substantially the same

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
