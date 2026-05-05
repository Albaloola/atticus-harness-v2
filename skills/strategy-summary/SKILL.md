---
name: strategy-summary
language: en
description: Produces a litigation strategy summary aligning facts, legal theory, procedural tactics, discovery, and settlement posture into a single actionable roadmap. Use when asked for a case strategy summary, litigation roadmap, motions plan, risk assessment, or stakeholder alignment memo. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Strategy Summary

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

Synthesizes facts, law, procedure, and risk into one litigation roadmap.

## Prerequisites

Gather before drafting:

1. **Core record** - pleadings/draft claims, key exhibits, correspondence, timeline
2. **Objectives** - client goals, acceptable outcomes, constraints, settlement posture
3. **Forum** - jurisdiction, governing law, procedural posture
4. **Deadlines** - filed/upcoming dates, limitations periods, scheduling order
5. **Known gaps** - missing documents, witnesses, unresolved disputes

## Output Sections

Keep each section concise and evidence-linked.

### 1) Executive Overview

| Field | Content |
|---|---|
| Matter | Short case descriptor |
| Posture | Stage and next critical event |
| Client objective | Primary objective and fallback |
| Strategic thesis | One-sentence theory of the case |
| Top risks | 3 to 5 highest-impact risks |
| Immediate decisions | 3 to 5 decisions needed now |

### 2) Key Facts

| Date/Period | Fact | Source | Disputed? |
|---|---|---|---|
| | | | Yes/No |

### 3) Issues, Claims, Defenses

| Issue | Claim/Defense | Element | Supporting Facts | Gaps |
|---|---|---|---|---|
| | | | | |

### 4) Legal Authority Snapshot

| Issue | Standard | Authority | Notes |
|---|---|---|---|
| | | | |

### 5) Argument Map

| Argument | Best Fact Support | Likely Counter | Rebuttal |
|---|---|---|---|
| | | | |

### 6) Procedural Strategy

| Motion/Step | Timing | Legal Basis | Purpose | Success Likelihood |
|---|---|---|---|---|
| | | | | |

### 7) Discovery Strategy

| Target | Method | Purpose | Risk/Objection | Priority |
|---|---|---|---|---|
| | | | | |

Discovery checklist:
- Confirm litigation hold and custodian identification, Map repositories and privilege boundaries, Plan deposition order and key admissions, Define expert needs and retention timing

### 8) Settlement / ADR Posture

| Option | Timing | Leverage | Risks | Recommendation |
|---|---|---|---|---|
| | | | | |

### 9) Risk and Outcome Assessment

| Scenario | Probability | Exposure/Recovery | Key Drivers |
|---|---|---|---|
| | | | |

### 10) Deadlines and Triggers

| Deadline/Trigger | Date | Source | Action |
|---|---|---|---|
| | | | |

### 11) Open Questions

| Question | Why It Matters | Owner | Target Date |
|---|---|---|---|
| | | | |

### 12) Next Steps

| Task | Owner | Due Date |
|---|---|---|
| | | |

## Checks

- Cite record sources for every material fact or inference.
- Mark uncertain authority with `[VERIFY]`.
- Keep the strategic thesis consistent across motions, discovery, and settlement sections.
- Separate known facts from allegations and disputed issues.
- Flag jurisdiction-specific rules and procedural traps.
- Provide candid strengths and weaknesses, do not overstate success likelihood.
- Exclude privileged content beyond what strategy requires.

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
