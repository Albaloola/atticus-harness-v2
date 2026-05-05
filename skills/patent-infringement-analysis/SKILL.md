---
name: patent-infringement-analysis
language: en
description: Generates a structured patent infringement analysis mapping claims to accused product features via claim charts. Covers Phillips claim construction, literal infringement, doctrine of equivalents, validity defenses, damages, and strategic recommendations. Use when analyzing patent infringement, preparing claim charts, evaluating IP litigation risk, or assessing licensing and design-around options. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Patent Infringement Analysis

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

Produces a report evaluating whether an accused product or process infringes asserted patent claims, for litigation counsel, in-house teams, or technical experts.

## Prerequisites

Gather before starting:

1. **Asserted patent(s)** - specification, claims, file history, prosecution docs, amendments, office action responses
2. **Accused product/process** - specs, manuals, marketing materials, drawings, schematics, source code, reverse engineering reports
3. **Prior art** - patents, publications, technical standards relevant to the technology
4. **Asserted claims identified** - which independent and dependent claims are at issue

## Report Structure

### 1. Executive Summary

| Element | Content |
|---|---|
| Overall conclusion | Qualified: "strong likelihood," "probable," "unlikely," or "no infringement" |
| Per-claim assessment | Bottom-line for each independent claim and key dependents |
| Recommendations | Cease / license / litigate / design-around / post-grant proceedings |
| Critical risks | Willfulness exposure, SOL deadlines, related litigation |
| Key uncertainties | Ambiguous terms, missing technical info, unsettled legal questions |

### 2. Patent Overview

- **Bibliographic data** - number, title, dates (issue/filing/priority), inventors, assignee, family
- **Technical field** - problem, inventive concept, advantages over prior art
- **Prosecution highlights** - amendments, narrowing arguments, disclaimer/estoppel, canceled claims
- **Asserted claims** - dependency relationships, selection rationale
- **Patent status** - litigation history, post-grant proceedings, terminal disclaimers

### 3. Claim Construction

Apply **Phillips v. AWH Corp.** framework for each disputed term:

| Source | Analysis |
|---|---|
| Claim language | Ordinary meaning to POSITA; context from surrounding claims |
| Specification | Definitions, "as used herein," lexicography, consistent usage |
| Prosecution history | Amendments, distinguishing arguments, disclaimer/estoppel |
| Claim differentiation | Presume different claims have different scope |
| Extrinsic evidence | Expert testimony, dictionaries, less weight than intrinsic |

Output as:

| Claim Term | Proposed Construction | Support (col:ln or prosecution doc + page) |
|---|---|---|

Flag ambiguous terms with alternative constructions and outcome impact. For **§ 112(f) means-plus-function** limitations: identify function → corresponding structure in spec → equivalents.

### 4. Accused Product Description

- Product name, model, purpose, high-level operation, Feature-by-feature description paralleling claim structure, Cite evidence precisely: document title, page/section, figure, code file:line, Note versions/configurations analyzed, Flag non-observable features and information gaps needing discovery

### 5. Element-by-Element Infringement Analysis

For each asserted claim, produce a **claim chart**:

| # | Claim Limitation (as construed) | Accused Feature (with evidence) | Literal? | DOE? |
|---|---|---|---|---|

**Literal infringement**: Apply all-elements rule. Cite specific evidence for each correspondence. Explain *why* each feature meets the limitation, no conclusory statements.

**Doctrine of equivalents** (where not literally met): Apply function-way-result or insubstantial differences test. Check DOE limitations:

| Limitation | Test |
|---|---|
| Prosecution history estoppel | Amendment-based narrowing? Festo presumption of surrender |
| Vitiation | Would DOE eliminate the limitation? |
| Dedication to public | Disclosed but not claimed? Johnson & Johnston |
| All-limitations rule | Apply per-element, not to invention as a whole |

**Infringement theories** (as applicable):
- **Direct** (§ 271(a)) - single entity performs all limitations
- **Inducement** (§ 271(b)) - knowledge + specific intent + active inducement
- **Contributory** (§ 271(c)) - material component + no substantial non-infringing uses + knowledge

State per-claim infringement likelihood with qualification and basis.

### 6. Validity Considerations

Presumed valid (§ 282). Invalidity: clear and convincing (litigation) or preponderance (PTAB).

| Defense | Framework |
|---|---|
| Anticipation (§ 102) | Single reference with every limitation; element-by-element; check statutory bars |
| Obviousness (§ 103) | Graham factors; secondary considerations (commercial success, long-felt need, failure of others, copying) |
| Eligibility (§ 101) | Alice/Mayo two-step: abstract idea/natural phenomenon → inventive concept |
| § 112 defenses | Written description, enablement, definiteness |

Flag uncited prior art not before the examiner, these are strong IPR candidates.

### 7. Defenses, Risks, and Strategy

**Equitable defenses**: Laches, equitable estoppel, implied license, exhaustion/first sale, inequitable conduct.

**Damages**:

| Factor | Framework |
|---|---|
| Lost profits | Panduit four-factor test |
| Reasonable royalty | Georgia-Pacific factors; hypothetical negotiation |
| Apportionment | Entire market value rule; isolate patented feature value |
| Marking (§ 287) | Product marking status; pre-notice damages exposure |
| Enhanced damages | Willfulness risk; opinion of counsel value |

**Strategy**: Evaluate litigation cost/timeline, design-around feasibility, licensing range from comparables, IPR timing (one-year post-complaint deadline), venue under TC Heartland, and business impact.

### 8. Conclusion and Recommendations

- Synthesize per-claim likelihood integrating construction + analysis + validity, Candid strengths/weaknesses assessment, Prioritized next steps by urgency and cost, Information gaps requiring investigation, Time-sensitive actions: preservation, opinion of counsel, IPR deadlines

## Checks

- Maintain neutral, analytical tone, acknowledge both strengths and weaknesses, Cite precisely: patent col:ln, prosecution doc date + page, product doc + section, cases in Bluebook, Use `[VERIFY]` for any citation not confirmed from source materials, Distinguish known evidence from areas needing further investigation, Qualify all assessments based on evidence strength, never overstate, For means-plus-function claims, always identify structure + equivalents (narrower scope than general DOE)
- Flag willfulness risk early when accused infringer has knowledge of patent

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
