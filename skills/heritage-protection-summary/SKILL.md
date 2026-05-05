---
name: heritage-protection-summary
language: en
description: Generates structured legal briefings on cultural heritage protection developments. Synthesizes judicial decisions, legislation, treaty updates, and regulatory changes across repatriation, trafficking, armed conflict, underwater heritage, intangible cultural heritage, and indigenous rights. Trigger when producing periodic briefings, policy digests, or thematic research for governments, NGOs, cultural institutions, or international organizations working in cultural property law. [Atticus UK/Scots refined]
tags:
- regulatory, research, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Cultural Heritage Protection Legal Summary

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

Produces structured briefings on cultural heritage law developments for institutional stakeholders.

## Quick Start

1. **Define scope** - jurisdiction(s), date range, thematic focus (repatriation, trafficking, armed conflict, etc.)
2. **Identify audience** - legal advisors, policy makers, enforcement officials, or repatriation advocates
3. **Gather sources** - case decisions, legislative texts, treaty updates; conduct independent research if none provided

## Workflow

### Step 1: Executive Overview

Open with a ½-1 page summary:
- 3 to 5 most significant developments in the period, Jurisdictional snapshot (international / regional / national)
- Emerging conflicts or trends requiring immediate attention

### Step 2: Thematic Sections

Include only sections with material developments:

| Section | Scope |
|---|---|
| Repatriation & Restitution | Artifact return decisions; provenance disputes; good-faith purchaser conflicts |
| Armed Conflict & Emergency | 1954 Hague Convention enforcement; UNSC resolutions; destruction as war crime |
| Illicit Trafficking | Prosecutions; customs seizures; import/export controls; market-state vs. source-state |
| Underwater Heritage | 2001 UNESCO Convention; salvage law conflicts; maritime jurisdiction |
| Intangible Cultural Heritage | 2003 UNESCO Convention; traditional knowledge; IP interface |
| Indigenous Cultural Rights | UNDRIP applications; NAGPRA enforcement [VERIFY recent amendments]; patrimony claims |
| Legislative & Regulatory | New statutes, amendments, administrative regulations |

### Step 3: Case Entries

Per decision, use this structure:

- **Case** - style of cause
- **Court/Tribunal** - name, date, jurisdiction
- **Heritage at Issue** - artifact / site / intangible property
- **Legal Framework** - UNESCO 1970 / Hague 1954 / UNIDROIT 1995 / national law
- **Key Question** - central legal issue
- **Holding** - court's determination
- **Practical Significance** - impact on practice or policy
- **Cross-Jurisdictional Note** - if decision may influence other systems

### Step 4: Trends & Recommendations

- Pattern analysis across developments, Anticipated litigation or legislation, Actionable recommendations for stakeholders

## Pitfalls & Checks

- **Flag uncertain citations** with `[VERIFY]` - exclude decisions lacking confirmed dates or courts
- **Do not conflate frameworks** - each has a distinct scope:
  - 1970 UNESCO → illicit trade
  - 1954 Hague → armed conflict
  - UNIDROIT 1995 → private law restitution
  - 2001 UNESCO → underwater heritage
- **Distinguish hard law from soft law** - mark resolutions, guidelines, and model laws vs. binding instruments
- **Flag CIL formation** - note decisions or state practice contributing to emerging customary international law
- **Non-trafficking destruction** - capture heritage loss from development, extractive industry, or climate events
- **Target length** - 3 to 7 pages; executive overview always leads

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
