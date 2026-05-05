---
name: discovery-document-summaries
language: en
description: Summarizes discovery documents (depositions, emails, contracts, interrogatories, medical/financial records) with Bates citations, impeachment flags, timeline extraction, and privilege alerts. Use when summarizing produced documents during discovery or pre-trial phases of U.S. commercial litigation. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Discovery Document Summaries

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

Compresses voluminous discovery productions into strategically focused summaries with Bates-cited facts, impeachment opportunities, and privilege alerts.

## Prerequisites

- **Discovery documents** - depositions, emails, contracts, interrogatories, medical/financial records
- **Case context** - operative claims, defenses, key disputed issues
- **Production identifiers** - Bates ranges or document control numbers
- (Optional) **Protective order designations** - confidentiality tiers

## Quick Start

1. Gather case context and identify disputed issues to focus analysis
2. Review documents using the extraction priorities below
3. Produce an executive overview + per-document entries
4. Close with gaps and follow-up recommendations

## Executive Overview

| Field | Content |
|---|---|
| Volume reviewed | Total pages / document count |
| Date range | Earliest to latest document date |
| Document categories | Depositions, emails, contracts, records, etc. |
| Key findings | Top 3 to 5 most significant evidentiary items |

## Per-Document Entry Format

```
Document ID:     [Bates No. / production identifier]
Date:            [Document date]
Author/Parties:  [Author → Recipient, or contracting parties]
Type:            [Email / Deposition / Contract / Record / etc.]
Summary:         [2 to 4 sentence description]
Key Excerpts:    "[Verbatim quote]" (Bates XXXXX, p. X)
Legal Relevance: [Claim/defense element addressed]
Flags:           [⚑ Impeachment | ⚐ Privilege | ★ Exhibit candidate | ↔ Inconsistency]
```

**Deposition-specific additions:**

- **Inconsistencies** - prior testimony or documents contradicting this testimony (cite both)
- **Evasions** - verbatim Q&A of avoided/unclear answers with page/line cite
- **Credibility** - strong/weak moments with page/line reference

## Extraction Priorities

Extract in this order:

1. Admissions and denials on disputed facts
2. Intent/knowledge evidence, awareness of risk, obligation, or wrongdoing
3. Timeline anchors, dates establishing sequence or notice
4. Chain of custody / authentication facts
5. Contradiction material, conflicts between documents or witnesses
6. Damages evidence, amounts, loss calculations, financial impact

## Organization Options

| Method | Best for |
|---|---|
| By document type | Large mixed productions |
| Chronological | Fraud, breach, narrative-heavy cases |
| By legal issue | Complex multi-count complaints |
| By witness | Deposition-heavy phases |

## Closing: Gaps and Follow-Up

- **Evidentiary gaps** - documents referenced but not produced
- **Additional discovery** - suggested RFPs, interrogatories, deposition topics
- **Privilege log** - entries worth challenging or monitoring

## Rules

- **Cite everything** - every fact must reference a Bates number; never assert unattributed facts
- **Quote verbatim** for key excerpts; use quotation marks and page/line for all direct quotes
- **Flag privilege** - do not summarize potentially privileged content; flag for attorney review
- **Flag confidentiality** - note CONFIDENTIAL/AEO tiers per protective order
- **State ambiguity** - never resolve unclear or contradictory content by assumption
- **Cross-reference** - link related documents (email → contract → deposition) to surface connections
- **Jurisdiction** - U.S. federal/state civil litigation assumed; flag foreign jurisdiction indicators

---

**Key changes made:**

- **Description** trimmed from 430 to 230 chars, third-person, clear trigger ("Use when summarizing produced documents during discovery or pre-trial")
- **Removed `tags`** - not part of the agent skills spec frontmatter
- **Removed nested numbered headings** (### 1, ### 2, etc.) - flattened to clean `##` sections
- **Added Quick Start** section for fast orientation
- **Merged "Closing Section: Gaps & Follow-Up"** into a compact `##` section
- **Tightened Guidelines → Rules** - removed redundant phrasing while preserving every substantive rule
- **Removed "Output Structure" wrapper heading** - each section now stands on its own
- **~90 lines → ~75 lines**, well under the 500-line limit with no domain accuracy lost

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
