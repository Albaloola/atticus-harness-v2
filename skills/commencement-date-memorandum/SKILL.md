---
name: commencement-date-memorandum
language: en
description: Drafts a U.S. commencement-date memorandum for commercial leases and related agreements, confirming the operative start date and its evidentiary basis. Use when users request a defensible record of "commencement date," "effective date," "lease start," conditions precedent satisfaction, or timing of rent, termination, or performance triggers, typically after execution, at closing, or during post-signature administration. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Commencement Date Memorandum

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

Produces a formal, execution-ready record confirming when an agreement becomes operational and why that date controls the parties' rights and duties.

## Prerequisites

Gather before drafting, do not proceed with unresolved gaps:

1. Governing agreement (full title, execution date)
2. Amendments, riders, side letters, or addenda affecting commencement
3. Full legal party names as they appear in the documents, with representative capacities
4. Governing law (and entity jurisdiction if provided)
5. Condition precedent list with proof of satisfaction (or explicit statement of none)
6. Notice/consent/evidence records that trigger or confirm commencement

## Core Inputs

| Item | Capture | Purpose |
|---|---|---|
| Agreement identity | Full title, execution date, amendment dates | Links memo to source contract |
| Parties | Exact legal names and roles | Prevents ambiguity |
| Commencement trigger | Clause/section defining effective date | Establishes legal basis |
| Conditions precedent | Condition, satisfaction date, supporting doc | Confirms date is operative |
| Notice mechanics | Required notices and completion date | Verifies procedural prerequisites |
| Obligation map | Obligations keyed to commencement | Clarifies performance impact |

## Drafting Workflow

1. **Extract** clauses on commencement, effectiveness, notices, and conditions precedent.
2. **Build date matrix**:
   - Execution date
   - Each condition-precedent satisfaction date with evidence
   - Notice date(s)
   - Determined commencement date
3. **Resolve discrepancies** - explain any gap between execution date and commencement date; distinguish automatic triggers from party-election mechanisms.
4. **Draft sections in order**:
   - Header / recitals
   - Party and agreement identification
   - Condition and notice verification
   - Commencement determination
   - Effect and legal consequences
   - Signature block / counterpart language
5. **Cite** the governing section/article for every factual assertion.

## Required Memo Sections

1. **Heading**: "Commencement Date Memorandum"
2. **Background**: Agreement title/date, transaction type, parties
3. **Fact Findings**: Condition-precedent status table; notice/consent status table
4. **Date Determination**: Exact date, day of week, and the rule or mechanism producing the date
5. **Effect**: What is operative from commencement; what is delayed or unaffected
6. **Execution**: Signature blocks with titles, representative authority, and counterpart/e-signature language

## Template

```text
COMMENCEMENT DATE MEMORANDUM

Date: [Insert date]

Re: [Full Agreement Name], dated [Execution Date] ("Agreement")

The parties confirm that the Agreement's commencement date is:
[Day, Month Day, Year], based on [section/article citation].

PARTY IDENTIFICATION
- [Party Name], [Role]

CONDITIONS PRECEDENT AND NOTICE RECORD
| Condition | Required By | Satisfied On | Evidence | Status |
|---|---|---|---|---|
| [..] | [..] | [..] | [Doc refs] | [Met/Not Met] |

COMMENCEMENT DETERMINATION, Basis: [Automatic trigger / party notice / election / other]
- Relationship to execution date: [Explain]
- Immediate obligation effects: [List]
- Deferred provisions: [List]

EFFECTIVE OBLIGATIONS, Rent/payment start: [..]
- Covenants and performance schedule: [..]
- Term/timing provisions impacted: [..]

ACKNOWLEDGMENT
The parties acknowledge the foregoing as the official commencement date.

Signatures:
[Party/Representative]
[Title]
[Date]
[Counterparts/electronic execution language]
```

## Pitfalls and Checks

- **Never invent facts or dates** - leave placeholders and flag gaps.
- **Use agreement-consistent terminology only** - do not restyle party names or defined terms.
- **Unmet condition → stop finalization** - state the unmet condition clearly; do not finalize the memo.
- **Flag conflicts between documents** - do not reconcile by assumption.
- **Mirror the governing agreement's** counterpart/e-signature language; do not substitute standard boilerplate.
- **Verify e-signature enforceability** for non-U.S. or non-default jurisdictions. [VERIFY]
- Keep tone evidentiary and operational, not argumentative.

---

**Key changes made:**

- **Frontmatter**: Removed `tags` (not in the spec), tightened `description` with clearer trigger keywords while staying under 1024 chars.
- **Structure**: Reorganized from nested "Output Structure / Process" with redundant subsections into flat, scannable sections: Prerequisites, Core Inputs, Drafting Workflow, Required Memo Sections, Template, Pitfalls and Checks.
- **Eliminated duplication**: The original had "Mandatory Memorandum Sections" and "Non-Negotiables" and "Guidelines" as separate sections that overlapped, consolidated into "Required Memo Sections" and "Pitfalls and Checks."
- **Token savings**: Removed the "Why It Matters" column (merged as "Purpose"), trimmed the template party list, cut explanatory prose. Went from 132 lines to ~95.
- **Preserved legal accuracy**: All domain-specific content (condition-precedent tables, counterpart language, e-signature verification) retained intact.

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
