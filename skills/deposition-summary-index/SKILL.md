---
name: deposition-summary-index
language: en
description: Creates topic-based deposition summaries with exhibit-to-transcript citation mapping for U.S. commercial litigation. Use when a user provides a deposition transcript and requests a witness summary, deposition digest, exhibit index, cross-examination prep, or discovery-analysis packet. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Deposition Summary with Key Document Index

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

Produces a neutral, topic-segmented deposition summary linked to exhibit IDs and page:line citations for fast litigation review.

## Prerequisites

Before starting, confirm you have:

- Complete transcript with stable page/line numbers, Exhibit register with IDs, filenames, and privilege/redaction labels, Witness name and reporter conventions (Q/A labels, speaker names)
- Jurisdiction, procedural rules, and target format (DOCX/PDF)
- Redaction scope and confidentiality instructions

Stop and escalate if privilege logs, sealing orders, or confidentiality controls are missing.

## Quick Start

1. Collect transcript + exhibit register
2. Normalize exhibit IDs to one consistent form
3. Segment testimony into topic blocks
4. Build topic summary table and document index table
5. Run completion checks and export

## Core Workflow

### 1. Validate and Normalize

- Canonicalize exhibit IDs (`Exh. 1`, `DEF. EXH. 2`, `PX-3` → single format)
- Extract transcript boundaries, witness name, counsel speakers, objections, Resolve informal references ("the invoice") to formal exhibit IDs

### 2. Segment into Topics

- Split at explicit question shifts or sustained thematic changes, Use plain, specific topic labels, Draft 2 to 3 neutral sentences per topic: facts, dates, actions, uncertainties

### 3. Build Topic Summary Table

```
| Topic | Transcript Span | Summary (2 to 3 sentences) | Linked Exhibits |
|---|---|---|---|
| Contract negotiation | 12:1 to 14:22 | ... | [Exh. 3], [12:18 to 12:30] |
| Billing disputes | 31:4 to 38:10 | ... | [Exh. 8], [33:14 to 33:40] |
```

### 4. Build Key Document Index

Include every referenced exhibit with transcript cites, witness characterization, and risk flags.

```
| Exhibit ID | Transcript Mentions | Witness Characterization | Substance | Risk Notes |
|---|---|---|---|---|
| Exh. 3 | 12:10, 12:19 to 12:24 | "Contract signed by [witness] on [date]." | Formation details | [VERIFY] date ambiguity |
```

Flag: authentication gaps, hearsay concerns, missing metadata, contradictions.

### 5. Export

- Produce identical DOCX and PDF deliverables, Preserve clickable anchors for exhibits and page:line citations, Use professional heading hierarchy and consistent spacing

## Completion Checks

- [ ] Every transcript exhibit reference appears in the index
- [ ] No index entry references an exhibit absent from the transcript
- [ ] All page:line spans are accurate
- [ ] Privileged/sealed content removed or isolated per instruction

## Pitfalls

- **Neutrality**: No legal conclusions, argument, or advocacy language. Do not infer intent or motive unless explicitly on the record.
- **Ambiguity**: Mark unclear source text with `[VERIFY]`-never over-interpret.
- **Faithfulness**: Paraphrase testimony accurately; do not combine unrelated statements or use rhetorical language.
- **Citation style**: Follow counsel preferences for US filing conventions unless told otherwise.

---

**Key changes made:**

- **Frontmatter**: Removed non-spec `tags` field. Tightened `description` to focus on what it does and when to trigger, dropping the "trigger terms" list in favor of natural keyword coverage.
- **Structure**: Reorganized from a flat numbered process into Quick Start → Core Workflow → Completion Checks → Pitfalls for progressive disclosure.
- **Token efficiency**: Cut ~30% of tokens by eliminating redundant prose ("Use a two-column source mapping approach"), collapsing the Guidelines section into a compact Pitfalls list, and converting Prerequisites from numbered sentences to a bullet checklist.
- **Escalation guardrail** promoted to Prerequisites section (visible before any work starts) instead of buried at the end in Guidelines.
- **Templates preserved** with identical column structure but lighter surrounding text.

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
