---
name: judgment-summary
language: en
description: Produces structured U.S. litigation judgment summaries from court opinions or final orders. Use when summarizing a judgment, opinion, final decision, post-trial ruling, appeal outcome, or case disposition brief. Covers caption, procedural history, facts, issues, standards of review, holdings, precedent treatment, concurrences/dissents, disposition, and practical implications with pinpoint citations. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Judgment Summary

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

Citation-ready summary of a final judgment or opinion, holdings, standards of review, precedent treatment, and practical impact.

## Prerequisites

1. Full opinion or judgment text with page/paragraph numbering.
2. Case citation details: court, docket number, decision date, judge/panel.
3. Procedural posture and any relevant lower court rulings.

## Quick Start

1. Extract case metadata; confirm jurisdiction.
2. Identify issues, standards of review, and holdings with pinpoint cites.
3. Separate background, material, and disputed facts.
4. Track precedent treatment and circuit-split implications.
5. Capture disposition, remand instructions, and deadlines.
6. Translate holdings into practical implications, no advocacy.

Fill every section below. If a field is missing, write `Not stated`.

## Template

```
CASE CAPTION, Case name:
- Court:
- Docket no.:
- Decision date:
- Judge/Panel:
- Jurisdiction:
- Prior history:

SYNOPSIS (<=150 words)
- Core holding:
- Practical significance:

PROCEDURAL HISTORY, Lower court decisions:
- Basis for appeal/review:
- Standard(s) of review:
- Scope of review:

FACTS, Background facts:
- Material facts:
- Disputed facts:

ISSUES AND HOLDINGS
| Issue | Legal Standard | Rule/Reasoning | Holding | Pin Cite |
| --- | --- | --- | --- | --- |

PRECEDENT TREATMENT
| Case | Treatment (Followed/Distinguished/Overruled/Questioned) | Point of Use | Pin Cite |
| --- | --- | --- | --- |
- Circuit split or split resolution: Yes/No + brief note

CONCURRENCE / DISSENT, Author(s):
- Key departures:
- Implications:

DISPOSITION, Result (affirmed/reversed/vacated/remanded):
- Remand instructions:
- Costs/fees:
- Deadlines or conditions:

PRACTICAL IMPLICATIONS, Litigation impact:
- Transactional/compliance impact:
- Evidence/procedure impact:
- Risk posture or strategy notes:

KEY CITATIONS, Holdings:
- Critical facts:
- Notable reasoning:
```

Target length: 1,500 to 3,000 words unless the decision is unusually short.

## Pitfalls

- **Holdings vs. dicta**: Distinguish explicitly; never elevate dicta to holding status.
- **Neutral tone**: No advocacy or editorial framing.
- **Court terminology**: Preserve the court's exact language for standards and tests.
- **Uncertain citations**: Mark with `[VERIFY]`.
- **No inference**: Do not infer facts or procedural steps absent from the opinion.
- **Non-U.S. courts**: Note deviations from U.S. practice in the Synopsis.
- **Pinpoint cites required**: Every holding and every court-labeled material fact needs one.

---

**Key changes made:**

- **Frontmatter**: Removed `tags` (not in spec), tightened `description` to be third-person with clear trigger keywords while staying under 1024 chars.
- **Overview**: Condensed to a single line with em-dash for scannability.
- **Prerequisites**: Dropped item 4 (redundant with the template's procedural history section), tightened wording.
- **Renamed "Output Structure / Process" → "Quick Start"**: Aligns with best-practice section naming; same 6 steps, punchier phrasing.
- **Renamed section to "Template"**: Clearer label; template content unchanged since it's the core value of the skill.
- **Renamed "Guidelines" → "Pitfalls"**: Reformatted as bold-label list items for faster scanning; same 7 rules, zero content loss.
- **Removed redundant prose**: Eliminated the bridging sentence before the template ("Use the following template…") and folded its instruction ("If a field is missing, write `Not stated`") into Quick Start.

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
