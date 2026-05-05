---
name: criminal-summary
language: en
description: Generates structured U.S. criminal case summaries from docket materials, filings, transcripts, and exhibits. Covers charge history, evidentiary posture, procedural timeline, plea/trial outcome, and sentencing. Use when asked to summarize a criminal matter, produce a case recap, compile a charge-to-sentencing timeline, or create a neutral case brief. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Criminal Case Summary

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

Produce a neutral, source-grounded summary from case initiation through final disposition. Every factual claim must cite a source document.

## Prerequisites

Gather before starting:

- **Identifiers**: jurisdiction, court, case number, filing date, parties, counsel
- **Charging documents**: complaint, information, indictment, docket index
- **Transcripts**: arraignment, pretrial hearings, trial, sentencing (cite gaps if missing)
- **Motions/rulings**: suppression, discovery, continuance, evidentiary, plea, dismissal, restitution, guidelines, appeal-related orders
- **Disposition records**: verdict forms, judgment, sentence order, restitution order, sentencing transcript

## Quick Start

1. Collect all available documents and note what is missing.
2. Build the summary sections in order (see below).
3. Populate the charge-evidence crosswalk and timeline tables.
4. Write a short narrative connecting key inflection points.
5. Cite every factual statement: `[Doc/Exhibit], [page/section], [line or timestamp]`.
6. Run the QA checklist.

## Summary Sections

Assemble in this order:

| Section | Required Fields |
|---|---|
| Case Header | Court, jurisdiction, case ID, charged persons, counsel, procedural phase, status |
| Charges & Theory | Initial charges, statute, offense grade, enhancements, amendments, merged counts, dismissals |
| Evidence Matrix | Category, source, custodian, relevance per charge, offering party, admission/exclusion status |
| Motions & Rulings | Type, legal basis, filing date, ruling, appellate effect, unresolved follow-up |
| Timeline | Key procedural events by date and impact |
| Trial/Plea Track | Plea offers, admissions, factual basis, hearing outcome, witness sequence, jury instructions, objections, verdict |
| Disposition | Conviction/acquittal/dismissal, special findings, enhancements, custody status |
| Sentencing | Count-by-count sentence, concurrent/consecutive, custody credits, fines, restitution, supervision, ancillary orders |
| Post-Resolution | Pending motions, appeal posture, collateral consequences, compliance obligations |

## Charge-Evidence Crosswalk

| Charge ID | Statute | Count | Status | Prosecution Evidence | Defense Evidence | Flags |
|---|---|---|---|---|---|---|
| C1 | | | Filed / Amended / Dismissed / Convicted / Acquitted | | | Hearsay, tainted, excluded, contested |

## Timeline Table

| Date | Event | Actor(s) | Ruling/Result | Case Impact |
|---|---|---|---|---|

## Narrative Block

After tables, write a brief narrative covering:

- What moved the case forward, Major evidentiary inflection points, Procedural departures (mistrials, continuances, substitutions)
- Disposition risks requiring follow-up

## QA Checklist

End every summary with:

```
Source completeness:
- Reviewed: [documents/transcripts]
- Missing: [critical missing items]
- Conflicts: [inconsistent dates/rulings]
- Confidence: High / Medium / Low
```

## Pitfalls

- **No invented facts.** Never fabricate conclusions, motives, or guilt findings.
- **Neutral language only.** Stay record-based; separate statutory basis from factual findings.
- **Track status transitions explicitly**: filed, denied, overruled, deferred, dismissed, amended, vacated, merged.
- **Flag jurisdiction ambiguity.** Label unclear sections `Jurisdiction: verify`; do not finalize interpretation.
- **Mark inferences.** Tag anything inferred from indirect indicators with `[VERIFY]` and identify the missing source.
- **State-vs-federal awareness.** Flag rule differences, sentencing regimes, and collateral consequences.

---

**Key changes made:**

- **Frontmatter**: Removed `tags` (not part of the spec), tightened `description` while keeping trigger guidance
- **Structure**: Reorganized into the recommended pattern, overview, quick start, core workflow, pitfalls
- **Quick Start**: Added a 6-step entry point so agents can orient immediately
- **Reduced prose**: Eliminated the numbered process steps that mixed instructions with templates; separated the tables into their own labeled sections for clarity
- **Flattened the process**: The original had 7 numbered steps mixing output structure with citation rules and QA, now each concern has its own section
- **Pitfalls**: Consolidated guidelines into a scannable checklist format
- **Token savings**: ~30% reduction while preserving all domain-specific legal content and table structures

If you grant write permission I can save this directly to the file.

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
