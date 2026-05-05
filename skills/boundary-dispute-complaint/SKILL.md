---
name: boundary-dispute-complaint
language: en
description: Drafts a U.S. state-court complaint to establish the true boundary line between adjoining properties, with optional trespass/encroachment claims. Trigger when a user needs to initiate litigation over conflicting property descriptions, ambiguous deed language, or unauthorized encroachments by an adjoining landowner. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Boundary Dispute Complaint

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

Drafts a plaintiff-side complaint to judicially establish the true boundary line between adjoining parcels, with optional trespass/encroachment counts.

## Prerequisites

Collect before drafting:

- **Plaintiff's deed** - legal description (metes-and-bounds, lot/block, or recorded plat)
- **Defendant's deed** - adjoining parcel legal description
- **Survey** - surveyor name, date, methodology, findings, recording info
- **Encroachment details** - type, dimensions, date discovered (if applicable)
- **Jurisdiction** - state and county where the property sits
- **Pre-suit notice** - whether defendant was notified before filing

## Quick Start

1. Gather deeds, survey, and encroachment facts.
2. Identify the filing court, venue basis, and applicable quiet-title statute.
3. Draft per the structure below.
4. Flag all `[VERIFY]` items for attorney review.

## Complaint Structure

### Caption

Court name, case-number placeholder, full legal names of all parties. Follow local formatting rules.

### Parties & Jurisdiction

| Element | Allegation |
|---|---|
| Subject-matter jurisdiction | Real property dispute; amount in controversy if threshold required |
| Personal jurisdiction | Defendant's contacts with forum state |
| Venue | Property located in [County], [State] |

### Factual Allegations (Numbered Paragraphs)

1. **Plaintiff's property** - full legal description per deed/survey; recording info
2. **Defendant's property** - legal description; recording info; relationship to plaintiff's parcel
3. **Boundary dispute** - how positions differ; reference deeds, conveyances, surveys, physical markers
4. **Survey findings** - surveyor's conclusion on true boundary; methodology
5. **Discrepancies** - conflicting deed language, ambiguous conveyances, inconsistent prior surveys
6. **Encroachment** *(if applicable)* - structure type, dimensions, extent of intrusion, date discovered, notice given

### Counts

**Count I, Quiet Title to Boundary Line**

- Judicial determination and declaration of the true boundary, Cite applicable state quiet-title statute `[VERIFY statute]`
- Incorporate deed-interpretation principles, survey evidence, boundary-determination standards

**Count II, Trespass** *(if encroachment present)*

- Defendant's placement/maintenance of improvements on plaintiff's land as ongoing trespass, Damages: diminution in value, loss of use/enjoyment, remediation costs, Relief: compensatory damages + mandatory injunction for removal

### Prayer for Relief

1. Declaratory judgment establishing the true boundary line
2. Order requiring defendant to recognize the judicially determined boundary
3. Mandatory injunction requiring removal of encroachments *(if applicable)*
4. Compensatory damages for trespass *(if applicable)*
5. Costs and attorney's fees `[VERIFY statutory basis]`
6. Such other relief as the court deems just

### Exhibits

- **A** - Plaintiff's deed
- **B** - Survey/plat
- **C** - Photographs of encroachment *(if applicable)*

## Pitfalls & Checks

- Reproduce all legal descriptions **verbatim** from source documents.
- Quiet title often requires joinder of all interest holders (lienholders, prior owners) - `[VERIFY per state rules]`.
- Some states require a **lis pendens** filed concurrently, flag for review.
- Use numbered paragraphs; keep tone factual; avoid conclusory allegations unsupported by facts (12(b)(6) survival).

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
