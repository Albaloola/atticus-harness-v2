---
name: authority-verification
language: en
description: Verifies legal citations and retrieves source material using the case.dev Legal Research API and CLI. Use when validating a citation, confirming a case exists, pulling source text, finding related authorities, extracting citations from a brief or opinion, or building a filing-ready authority check without branded citator terminology. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Authority Verification with case.dev

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

Use case.dev legal research endpoints to verify citations, retrieve source text, and expand to related authorities. Keep the language generic: "verified citation," "candidate authority," "related authority," and "manual treatment review."

## Quick Start

1. Verify the citation text with `legal.verify()` before citing it.
2. If verification is unclear, search by topic with `legal.find()` or `legal.research()`.
3. Pull the full document text with `legal.fullText()` once you have a verified source URL.
4. Expand outward with `legal.similar()` to find related authorities.
5. Format the result using [references/OUTPUT-TEMPLATE.md](references/OUTPUT-TEMPLATE.md).

Reference guide: [references/CASEDEV-WORKFLOW.md](references/CASEDEV-WORKFLOW.md)

Runtime and setup: [references/RUNTIME.md](references/RUNTIME.md)

Concrete scenarios: [references/EXAMPLES.md](references/EXAMPLES.md)

Lightweight eval set: [references/EVALS.md](references/EVALS.md)

Examples:

- Python: [scripts/verify_authority.py](scripts/verify_authority.py)
- TypeScript: [scripts/verify_authority.ts](scripts/verify_authority.ts)
- CLI: [scripts/verify_authority.sh](scripts/verify_authority.sh)

## Core Workflow

### 1. Verify the citation

Use `legal.verify()` with the citation text exactly as written.

- `verified` means the citation matched a real source in the database.
- `not_found` means likely typo, hallucination, or unsupported citation.
- `multiple_matches` means manual review is required before citation.

### 2. Retrieve the source text

If verification succeeds, use the returned case URL with `legal.fullText()` to inspect the opinion and optionally highlight the issue you care about.

### 3. Expand the authority set

Use `legal.similar()` on the verified source URL to find related authorities.

Use `legal.research()` when you need broader issue-based research with multiple phrasings of the same question.

### 4. Audit a document

If you are checking a brief, opinion, or article URL, use `legal.citationsFromUrl()` to extract cited authorities, then verify important citations individually.

### 5. Record the result

Always record:

- the exact citation checked, verification status, authoritative URL, jurisdiction used for search, date checked, any manual review needed before filing

## Guardrails

- Do not say a case was "Shepardized," "KeyCited," or given a proprietary signal.
- Do not describe case.dev results as editorial treatment analysis unless you performed separate manual review.
- Say "verified citation" instead of "good law."
- Say "manual treatment review required" when the workflow does not establish precedential weight by itself.
- Search results are candidates, not filing-ready authorities, until verified.
- Re-run verification immediately before filing.

## Output Standard

Format the final work product using [references/OUTPUT-TEMPLATE.md](references/OUTPUT-TEMPLATE.md).

## Dependencies

Do not assume tools are installed. Check [references/RUNTIME.md](references/RUNTIME.md) before running any script.

## Pitfalls

- Verifying only the case name and not the reporter citation.
- Treating `legal.find()` results as verified authorities.
- Assuming related cases from `legal.similar()` are citing references or direct history.
- Skipping the full-text read after verification.
- Hiding uncertainty when the result is `multiple_matches` or `not_found`.

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
