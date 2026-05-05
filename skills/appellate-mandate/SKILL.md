---
name: appellate-mandate
language: en
description: Drafts formal appellate mandates that conclude the appeal process and direct trial courts to implement appellate decisions. Extracts disposition language, remand directives, and procedural history from appellate records to construct jurisdiction-specific mandate orders. Use when preparing mandate orders, returning jurisdiction to lower courts, or formalizing appellate dispositions after ruling. [Atticus UK/Scots refined]
tags:
- litigation, brief, drafting, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Appellate Mandate

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

Drafts the formal order issued by an appellate court concluding the appeal and directing the trial court to implement the appellate decision.

## Prerequisites

Gather before drafting:

1. **Appellate opinion/judgment** - final decision with exact disposition language
2. **Case caption** - all party names and designations as they appear in the appellate record
3. **Case numbers** - both appellate and trial court docket numbers
4. **Procedural history** - rehearing petitions, certiorari filings, stay orders, extensions
5. **Remand instructions** - specific directives from the opinion on scope of further proceedings

## Output Structure

### 1. Caption & Identification

| Element | Requirement |
|---|---|
| Court name | Full formal name of issuing appellate court |
| Receiving court | Full formal name of trial court |
| Party designations | Mirror appellate record exactly |
| Case numbers | Both appellate and trial court numbers |
| Opening recital | "This mandate is issued pursuant to this Court's judgment dated [date]..." |

### 2. Incorporation of Decision

- Attach or incorporate certified copy of the appellate opinion/judgment, Reference by case name, court, date, and reporter citation if published

### 3. Directive Section

Standard formulation matching actual disposition:

> IT IS ORDERED that the judgment of the [trial court] is [AFFIRMED / REVERSED / REVERSED AND REMANDED / MODIFIED / DISMISSED].

For remands, specify with particularity:

| Remand Type | Required Specificity |
|---|---|
| New trial | All issues or only specified matters |
| Entry of judgment | In whose favor and on what basis |
| Partial remand | Which issues are foreclosed vs. open |
| Conditional (e.g., remittitur) | Exact conditions and implementation steps |
| Damages/remedies | Calculation instructions or caps from opinion |

Extract and incorporate **verbatim** any limiting language from the opinion regarding scope of proceedings on remand.

### 4. Effective Date & Procedural Conditions

Calculate issuance date per applicable rules:

| Jurisdiction | Typical Auto-Issuance Period |
|---|---|
| Federal (FRAP 41) | 7 days after rehearing petition deadline expires |
| Most state courts | 21 to 30 days after final judgment |

Address in sequence:
1. Rehearing petition filed → if denied, state denial date
2. Certiorari or discretionary review sought → note any stay of mandate
3. Stay lifted or review denied → include dates
4. Extensions tolling issuance period
5. Any order for expedited issuance

### 5. Certification & Authentication

Include clerk certification with: court name, judgment date, applicable rule citation, seal, clerk signature, and issuance date.

Filing instructions for trial court clerk:
- Docketing requirements, Service obligations on parties, Required acknowledgment or action timeline

## Pitfalls

- **Verbatim precision** - Copy disposition language and remand instructions exactly from the opinion; never paraphrase
- **No interpretive gloss** - The mandate is ministerial; do not add analysis beyond what the opinion states
- **Delineate authority** - Explicitly state which matters are conclusively determined vs. which remain open on remand
- **Conditional directives** - Capture any if/then conditions (e.g., "new trial unless plaintiff accepts remittitur of $X within Y days")
- **Cross-reference identifiers** - Verify every case number, party name, and date against the appellate record
- **Jurisdiction-specific timing** - Confirm issuance timeline under governing appellate rules (federal vs. state) `[VERIFY]`
- **Uncertain citations** - Mark any unconfirmed rule or statutory citation with `[VERIFY]`

---

Key changes from the original:

- **Description tightened** - added "disposition language" and "jurisdiction-specific" as trigger keywords; trimmed redundancy
- **Removed redundant header paragraph** that duplicated the description
- **Condensed certification section** - replaced the full code-block template with a concise specification list (the agent knows how to format a clerk certification)
- **Renamed "Guidelines" → "Pitfalls"** - aligns with the quick-scan, actionable format preferred by the spec
- **Removed code fences** for the directive template, used blockquote instead, which is more token-efficient
- **Trimmed prose throughout** - removed explanatory filler while preserving every substantive legal requirement
- **~75 lines vs ~106** - ~30% reduction while retaining all domain-critical content

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
