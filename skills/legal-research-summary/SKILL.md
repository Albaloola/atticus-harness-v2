---
name: legal-research-summary
language: en
description: 'Synthesizes U.S. statutes, case law, and regulatory guidance into attorney-ready litigation research summaries with counterarguments and strategic implications. Use when drafting research memos, case law surveys, statutory/regulatory synthesis, or answering "what is the law on X" questions. Trigger keywords: legal research summary, research memo, case law survey, statutory analysis, regulatory guidance, legal landscape. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Research Summary

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

Produces a concise, attorney-ready synthesis of governing law and competing interpretations on a defined U.S. legal question.

## Prerequisites

Gather before starting:

1. **Research question** - precise issue statement in one sentence
2. **Jurisdiction** - state/federal, circuit, choice-of-law constraints
3. **Time scope** - currentness cutoff and retroactivity needs
4. **Fact pattern** - material facts driving legal tests/standards
5. **Authority sources** - preferred databases (Westlaw, Lexis, gov sites)

## Section Order

Use all sections, in this order:

1. **Issue & Scope** - restate the question with jurisdiction boundaries
2. **Executive Summary** - direct answer, dominant rule, any split/controversy, bottom line for litigation posture (2 to 3 paragraphs)
3. **Legal Framework (Thematic)** - analysis organized by legal theme (see template below)
4. **Counterarguments / Alternative Views** - strongest opposing authority, jurisdictional splits, relative strength assessment
5. **Gaps / Open Questions** - first-impression issues, unreconciled conflicts, pending appeals or legislative changes
6. **Practical Implications & Strategy** - litigation leverage points, risk assessment, procedural constraints (SOL, exhaustion)
7. **Sources & Verification** - Bluebook-format citations with verification notes

## Authority Priority

Apply in every section, in this order:

1. Binding precedent for the forum
2. Persuasive authority (if binding absent or split)
3. Statutes and regulations with effective dates
4. Agency guidance and enforcement actions

## Thematic Analysis Template

Organize the Legal Framework section by topic, not by source type.

| Theme | Legal Standard | Key Authorities | Fact Alignment | Notes |
|---|---|---|---|---|
| {Theme} | Rule/element | Case/Statute/Reg | Align/Distinguish | Trend/Conflict |

Per theme, include:

- **Rule statement** - one sentence
- **Primary authority** - binding first, then persuasive
- **Holding summary** (case law) or **operative language** (statute/reg)
- **Procedural posture** - if material
- **Fact alignment** - why it matters to the current matter

## Output Checklist

```
- [ ] Issue statement is precise and jurisdiction-scoped
- [ ] Executive summary directly answers the research question
- [ ] Each theme ties to facts and authority
- [ ] Counterarguments included with strength assessment
- [ ] Gaps and pending changes noted
- [ ] Bluebook citations verified or flagged [VERIFY]
```

## Rules

- Maintain neutrality, present competing views weighted by authority; do not advocate, Distinguish binding vs. persuasive authority in every section, Tag any unverified citation with `[VERIFY]`
- Note effective dates and amendments for all statutes/regulations, Summarize holdings; quote only when specific language is dispositive

---

**Key changes from original:**

- **Removed `tags`** - not part of the SKILL.md spec (only `name` and `description` are valid frontmatter)
- **Consolidated redundant sections** - the original listed section names in the template, then re-explained each one separately with overlapping bullet points. Merged into a single **Section Order** with inline guidance per section.
- **Kept the thematic matrix** - high-value template that justifies its token cost
- **Added trackable checklist** - uses the workflow checklist pattern from best practices so the agent can copy and track progress
- **Compressed Guidelines → Rules** - same five rules, fewer tokens
- **Reduced from ~103 lines to ~68 lines** - ~34% token savings while preserving all domain-critical content

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
