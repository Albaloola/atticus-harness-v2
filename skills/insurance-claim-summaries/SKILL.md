---
name: insurance-claim-summaries
language: en
description: 'Generates structured summaries of U.S. insurance claim files covering identification, incident narrative, party positions, coverage analysis, and resolution status. Use when synthesizing claim files for adjusters, legal counsel, or claims managers during pre-filing review, discovery, or settlement preparation. Trigger keywords: claim summary, insurance claim, coverage summary, adjuster summary, coverage denial, reservation of rights. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Insurance Claim Summary

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

Synthesizes a claim file into a structured quick-reference summary covering incident facts, party positions, coverage analysis, and resolution status.

## Prerequisites

Gather before starting:

- **Claim file** - submission, policy declarations, endorsements, correspondence
- **Coverage position** - denial letters, reservation-of-rights letters, position statements
- **Investigation** - inspection reports, statements, medical records, damage assessments
- **Resolution** (if applicable) - settlement agreements, releases, payment records

## Output Structure

### 1. Claim Identification Header

| Field | Value |
|---|---|
| Claim Number | |
| Policy Number | |
| Named Insured | |
| Claimant (if different) | |
| Date of Loss | |
| Date Claim Filed | |
| Coverage Type | |
| Current Status | Open / Closed / In Litigation / ADR Pending |

### 2. Incident Narrative

- What occurred, when, where, Circumstances triggering coverage, Chronological key events with dates

### 3. Claimant's Position

- Alleged damages/injuries/losses, itemized by category, Policy provisions or coverage grants cited, Total amount, label as: **claimed** / **paid** / **in dispute**
- Key supporting evidence submitted

### 4. Insurer's Response

- Coverage determination: full acceptance / partial / denial, If denied or limited:
  - Exclusions, conditions, or limitations relied upon (quote verbatim)
  - Defenses raised: late notice, misrepresentation, failure to cooperate, fraud, Investigation scope and key findings, Insurer's independent valuation (if different from claimed)
- Reservation-of-rights status and scope

### 5. Resolution / Current Status

**If resolved:**
- Outcome: paid in full / negotiated settlement / denial upheld / withdrawn, Amount paid and date, Release scope: full / partial / rights preserved

**If open or disputed:**
- Posture: pre-suit / litigation filed / ADR pending, Court/forum and docket number (if in litigation)
- Unresolved issues, Next steps and key deadlines

### 6. Special Issues *(only if applicable)*

- Bad faith allegations or regulatory concerns, Subrogation rights and recovery potential, Coordination of benefits / other insurance, Third-party liability, Statute of limitations or suit-limitation deadlines [VERIFY state-specific periods]

## Guardrails

- **Objectivity** - Do not characterize either position as stronger unless summarizing an adjudicator's findings
- **Disputed facts** - Attribute each version to its source; never state contested facts as established
- **Policy language** - Quote verbatim when interpretation is at issue; flag ambiguities
- **Monetary precision** - Label all figures as claimed, paid, or in dispute, never conflate
- **Source citations** - Reference documents by name and date for cross-referencing
- **Jurisdiction** - US-focused; note state-specific bad faith standards where raised [VERIFY]

---

**Key changes made:**

- **Removed `tags`** - not part of the Agent Skills spec; only `name` and `description` are required frontmatter
- **Tightened description** - removed redundant clause listing ("claim identification, incident narrative, claimant's position with alleged damages and policy citations, insurer's response including coverage decisions and exclusions relied upon") and replaced with concise categories
- **Shortened prerequisites** - removed verbose parenthetical expansions where the label already communicates the meaning
- **Trimmed output sections** - cut filler words ("clearly", "key supporting evidence and documentation submitted" → "Key supporting evidence submitted") throughout
- **Renamed "Guidelines" → "Guardrails"** - more action-oriented framing for a pitfalls/checks section
- **Removed "Accessibility" guideline** - Claude already knows to use plain language; doesn't justify its token cost
- **Reduced from 94 to 79 lines** - ~16% token savings while preserving all domain-specific legal content and structural accuracy

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
