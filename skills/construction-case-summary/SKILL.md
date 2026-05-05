---
name: construction-case-summary
language: en
description: Produces structured U.S. construction law case summaries with timelines, holdings, damages, and risk takeaways. Triggers on construction case summaries, defect analyses, payment dispute summaries, bond or mechanic's lien reviews, OSHA violation briefs, or construction precedent digests. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Construction Law Case Summary

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

Structured, citation-anchored summary of a construction law decision for precedent and risk analysis.

## Quick Start

Gather before drafting:
- Full case materials with record/opinion citations, Jurisdiction, court level, procedural posture, published/precedential status, Referenced project documents (contract, specs, change orders, bond, lien filings, safety reports)
- Party list with roles (owner, GC, subs, design professionals, insurers)

## Workflow

1. Run intake checklist; flag missing inputs.
2. Populate Case Metadata and Parties tables.
3. Build dated timeline with source cites.
4. Apply relevant module(s): Contract Breach, Defects, Safety/OSHA.
5. Extract holdings and reasoning with pinpoint cites.
6. Record damages/relief and practical takeaways.
7. For multiple cases, synthesize majority/minority rules by jurisdiction.

## Intake Checklist

- [ ] Court, jurisdiction, decision date
- [ ] Case caption and citation
- [ ] Procedural posture and standard of review
- [ ] Contract/bond/lien documents and key clauses
- [ ] Defect discovery timeline
- [ ] Injury/OSHA event details
- [ ] Damages claimed/awarded
- [ ] Published vs unpublished status

## Output Tables

**Case Metadata**

| Field | Entry |
|---|---|
| Caption | |
| Citation | |
| Court | |
| Decision Date | |
| Jurisdiction | |
| Procedural Posture | |
| Standard of Review | |
| Published / Precedential | |
| Outcome | |

**Parties and Roles**

| Party | Role | Key Obligations / Exposure |
|---|---|---|
| | | |

**Timeline**

| Date | Event | Source Cite |
|---|---|---|
| | | |

## Summary Template

- **Dispute type(s):** …
- **Project type / delivery method:** …
- **Key facts:** …
- **Legal issues:** …
- **Holdings:** …
- **Court's reasoning:** …
- **Damages / relief:** …
- **Practical impact:** …

## Modules

### Contract Breach

| Element | Notes |
|---|---|
| Contract form (written/oral) | |
| Clauses at issue (scope, notice, payment, change orders, force majeure) | |
| Breach theory and defenses (substantial performance, impossibility, waiver) | |
| Payment disputes (prompt payment, retainage) | |
| Performance/payment bond issues | |
| Mechanic's lien posture and deadlines | |
| Economic loss doctrine application | |

### Construction Defects

| Element | Notes |
|---|---|
| Defect type (structural, design, materials, workmanship) | |
| Patent vs latent classification | |
| Statute of limitations / repose analysis | |
| Expert testimony and code/standard references | |
| Warranty claims (express/implied) | |
| Fault allocation among participants | |
| Damages theory (repair, diminution, consequential) | |

### Worker Safety / OSHA

| Element | Notes |
|---|---|
| OSHA standard(s) cited | |
| Violation classification and penalties | |
| GC vs sub safety responsibility | |
| Workers' comp exclusivity impact | |
| Third-party liability or indemnity | |
| Willful or criminal findings | |

## Holdings and Damages

**Holdings / Rule Synthesis**

| Issue | Holding | Rule/Standard | Cite |
|---|---|---|---|
| | | | |

**Damages / Relief**

| Category | Claimed | Awarded | Notes |
|---|---|---|---|
| | | | |

**Practical Takeaways**

- [ ] Contract drafting or notice practices affected
- [ ] Documentation practices that controlled outcome
- [ ] Insurance coverage or bond implications
- [ ] Safety compliance or supervision adjustments

## Pitfalls

- Use exact citations for facts and holdings; never paraphrase without a cite.
- Distinguish holding from dicta; label dissent/concurrence explicitly.
- Flag uncertain statutes or regulatory citations with `[VERIFY]`.
- Note jurisdiction-specific doctrines (anti-indemnity, prompt payment, lien law) and state variance.
- State limitation if decision is unpublished or nonprecedential.
- Never invent facts, timelines, or code/OSHA provisions.

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
