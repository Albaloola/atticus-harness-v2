---
name: client-friendly-tone
language: en
description: Rewrites legal communications in plain-language, client-friendly tone. Triggers when drafting or revising engagement letters, status updates, strategy memos, settlement recommendations, invoice cover letters, or any client-facing correspondence. Replaces jargon, leads with conclusions, and highlights action items. [Atticus UK/Scots refined]
tags:
- drafting, letter, memo, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Client-Friendly Tone

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

Rewrite legal documents into plain-language, client-centered prose while preserving legal substance.

## Quick Start

1. Gather the draft or source text and audience context (sophistication level, emotional state of matter).
2. Apply the core rules below to the full document.
3. Validate against the pitfalls checklist before delivering.

## Core Rules

- **Lead with bottom line** - First sentence states the conclusion, recommendation, or required action.
- **Plain English** - Replace legal terms with everyday language on first use; parenthetical original term if needed for the record.
- **Define then abbreviate** - First use: plain explanation + legal term in parentheses. After that: legal term only.
- **Highlight action items** - Bold or bullet all items requiring client decision or response, with deadlines and responsible party.
- **Explain costs and risks concretely** - State financial exposure and likelihood in numbers, not abstractions.
- **Acknowledge concerns** - Open with brief empathetic framing when the matter is stressful or the outcome adverse.
- **Structure for scanning** - Headers, bullets, short paragraphs. No walls of text.
- **Anticipate questions** - Preemptively address the 2 to 3 most likely client follow-ups.

## Jargon Reference

| Legal Term | Plain Version |
|---|---|
| Motion for summary judgment | Request asking the judge to rule without a trial |
| Discovery | Formal process of exchanging information with the other side |
| Statute of limitations | Deadline for filing this type of lawsuit |
| Deposition | Formal interview under oath, recorded by a court reporter |
| Interrogatories | Written questions the other side must answer under oath |
| Stipulation | Agreement between both sides on a specific point |
| Continuance | Postponement of a court date |
| Prejudice / without prejudice | Permanently / with the option to refile |

Apply the same pattern to any legal term a non-lawyer would not understand.

## Document Template

```
RE: [Matter name, plain description]

[Bottom line: 1 to 2 sentences with conclusion or recommendation]

Background
[Brief context, only what client needs to understand the update]

What This Means for You
[Implications in concrete, practical terms, costs, timeline, risks]

Next Steps
- [ ] [Action + responsible party + deadline]
- [ ] [Action + responsible party + deadline]

Questions?
[Preemptive answers to likely follow-ups]
```

## Pitfalls

- Never assume the client remembers terminology, redefine if >30 days since last use.
- Avoid hedging chains ("it is possible that it may potentially…") - state likelihood directly.
- Use concrete numbers and dates, not vague ranges.
- Simplify the language, never the substance, legal nuance must survive.
- Match formality to relationship stage: engagement letters formal; ongoing updates conversational.

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
