---
name: tone-diplomatic
language: en
description: Applies measured, diplomatic tone to legal writing. Triggers when drafting demand letters, settlement communications, motions, briefs, judicial submissions, or opposing counsel correspondence requiring balanced persuasion and professional courtesy. [Atticus UK/Scots refined]
tags:
- brief, drafting, letter, litigation, motion, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Diplomatic Professional Tone

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

Persuades through logic, authority, and measured language, not rhetoric or aggression. Default tone for professional legal writing.

## When to Apply

- **Demand letters** - preserves leverage without burning bridges
- **Settlement negotiations** - signals willingness to resolve while holding position
- **Judicial submissions** - credibility > volume; judges reward restraint
- **Client-facing documents** - maintains confidence without overpromising
- **Opposing counsel correspondence** - builds rapport; avoids discoverable hostility
- **Early-stage disputes** - keeps all resolution paths open

## Core Principles

1. **Merits over emotion** - anchor every assertion to fact, statute, or authority
2. **Acknowledge then distinguish** - engage opposing arguments before rebutting them
3. **No sarcasm, no ad hominem, no passive aggression** - professional courtesy is non-negotiable
4. **Structure persuades** - strongest argument first, clean transitions, logical progression
5. **Understate over overstate** - "the record suggests" not "it is undeniable that"

## Tone Calibration

| Do | Don't |
|---|---|
| "While Defendant raises [X], the weight of authority supports..." | "Defendant's frivolous argument ignores..." |
| "We respectfully submit that..." | "It is obvious that..." |
| "The better reading of the contract is..." | "Any reasonable person would see..." |
| "We would welcome the opportunity to discuss..." | "We demand immediate compliance..." |
| "The court may wish to consider..." | "The court must recognize..." |
| "This position appears difficult to reconcile with..." | "Opposing counsel misrepresents..." |

## Sentence-Level Techniques

- **Hedging vocabulary**: "suggests," "indicates," "supports the conclusion that," "weighs in favor of"
- **Concession framing**: "Even assuming arguendo that [opponent's point], the result is unchanged because..."
- **Authority-forward**: place citations before conclusory statements
- **Active voice preferred** - use passive strategically to de-emphasize unfavorable actors ("the deadline was missed" vs. "our client missed the deadline")
- **Vary sentence length**: mix short declarative with one longer analytical sentence; avoid unbroken complex syntax

## Escalation Boundary

Shift to firm/assertive tone (still no personal attacks) when:
- Opposing party acted in bad faith requiring sharp language on the record, Court order violated, strong remedial language needed, Fraud, spoliation, or sanctionable conduct must be called out directly

---

Key changes:
- **Description** tightened with clear trigger guidance ("Triggers when...")
- **When to Apply** converted from table to bullet list, same info, fewer tokens
- **Core Principles** shortened phrasing while keeping all five rules intact
- **Sentence-Level Guidelines** renamed to "Techniques", trimmed explanatory padding
- **Escalation Boundary** collapsed from paragraph + bullets into a single compact section
- **Tone Calibration table** kept as-is, the do/don't pairs are already concise and high-value

Shall I retry the file write, or would you like further adjustments?

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
