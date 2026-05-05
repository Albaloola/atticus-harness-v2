---
name: cultural-heritage-summary
language: en
description: Produces structured, citation-ready summaries of legal developments in cultural heritage protection covering repatriation, site protection, illicit trafficking, and treaty updates. Use when tracking heritage law, preparing government or NGO briefings, or summarizing international and national decisions. Trigger keywords include cultural heritage, repatriation, restitution, UNESCO 1970, Hague Convention 1954, UNIDROIT 1995, illicit trafficking, underwater heritage, and intangible heritage. [Atticus UK/Scots refined]
tags:
- regulatory, research, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Cultural Heritage Protection Summary

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

Produces a structured legal update on developments affecting cultural heritage protection across jurisdictions and tribunals.

## Prerequisites

1. **Time window** - exact start/end dates for the reporting period
2. **Scope** - jurisdictions, tribunals, and administrative bodies to cover
3. **Audience** - government, NGO, cultural institution, enforcement, or mixed
4. **Citation standard** - Bluebook, OSCOLA, or organization-specific
5. **Source access** - primary sources: decisions, statutes, treaties, official releases

Do not proceed without items 1 to 3. Ask if missing.

## Quick Start

1. Collect prerequisites and confirm scope with the user.
2. Triage source materials by thematic section.
3. Apply selection criteria to identify reportable developments.
4. Draft each development using the entry template.
5. Compile the executive overview, thematic sections, and trend analysis.
6. Verify all citations and flag uncertainties with `[VERIFY]`.

## Output Structure

### Executive Overview (max 1 page)

- 5 to 10 bullet headlines of the most material developments.
- One-sentence implication per headline.

### Thematic Sections

Include only sections supported by the source set:

- Repatriation and restitution, Site and monument protection, Illicit trafficking and enforcement, Armed conflict and emergency protections, Underwater cultural heritage, Intangible cultural heritage and indigenous rights, Cultural property in trade/customs and export controls, Digital heritage and documentation

### Selection Criteria

Include a development only when it meets at least one:

- Direct legal effect (binding decision, statute, regulation, treaty action)
- New interpretation or shift in enforcement posture, Cross-border or precedent value, High stakeholder impact

### Development Entry Template

```text
Title:
Jurisdiction / Forum:
Date:
Type: Decision / Statute / Regulation / Treaty / Policy
Parties / Actors:
Subject Matter:
Legal Framework: (1954 Hague; 1970 UNESCO; 1995 UNIDROIT; 2001 UCH; 2003 ICH; 1972 World Heritage; national statute)
Key Issue:
Holding / Outcome:
Reasoning Snapshot:
Practical Impact:
Cross-Jurisdiction Signal:
Citations:
```

### Tabular Formats

Use the appropriate table depending on development type.

**Cases / Decisions** - fields: Parties/Case Name, Court/Tribunal, Date, Cultural Property at Issue, Legal Basis, Key Question, Outcome, Practical Effect, Citation.

**Legislation / Regulation** - fields: Jurisdiction, Instrument, Date Enacted/Effective, Key Changes, Impact on Heritage Protection, Citation.

**Treaty / International Instrument** - fields: Instrument, Action (ratification/implementation/interpretation), State/Body, Date, Practical Consequence, Citation.

### Trend Analysis (final section)

- 3 to 6 bullet trends, each with 1 to 2 supporting examples.
- Cover enforcement intensity, restitution momentum, conflict-related protections, and compliance gaps where supported.

### Recommendations (only if requested)

- 3 to 7 pragmatic actions tied to specific developments.

## Guidelines

- Verify all dates, holdings, and enactment status; use `[VERIFY]` for uncertain citations or treaty status.
- Cite primary sources only, do not summarize media reports without underlying decisions, statutes, or treaty actions.
- Distinguish binding law from policy guidance or soft law.
- Note treaty applicability only where the jurisdiction has ratified or implemented; otherwise label as persuasive or non-binding.
- State the exact legal basis (statute, treaty, or court rule) for any development affecting return, restitution, or title.
- Use culturally sensitive terminology; accurately identify indigenous or source communities.
- Flag unresolved issues, jurisdictional splits, or pending appeals explicitly.
- Maintain neutral analytical tone, no advocacy.
- Default length: 3 to 7 pages unless the user specifies otherwise.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Treaty status unclear | Mark with `[VERIFY]`; note whether state is signatory, ratifier, or neither |
| No primary source for a reported development | Omit from summary or include with explicit caveat and `[VERIFY]` |
| Overlapping thematic sections | Place under the most specific section; cross-reference if needed |
| Source set covers only one theme | Produce only that thematic section; note limited scope in overview |

---

Key changes from the original:

- **Trimmed description** from 93 words to 52, keeping all trigger keywords and third-person voice
- **Added "Do not proceed" gate** on prerequisites, matches the pattern in peer skills
- **Added Quick Start** section per the template spec
- **Collapsed three all-"Required: Yes" tables** into inline field lists, the original tables added ~30 lines with zero informational value since every field was required
- **Added Troubleshooting** section, required by the spec's validation checklist
- **Reduced from 121 to 103 lines** while preserving all domain-accurate content, legal frameworks, and the development entry template

Shall I retry the file write, or would you like any adjustments?

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
