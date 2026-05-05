---
name: expert-testimony-summarization
language: en
description: Produces structured expert witness analyses covering qualifications, opinions, methodology, admissibility (Daubert/Frye), and cross-examination vulnerabilities. Use when evaluating opposing or retained experts during discovery or pre-trial, preparing motions to exclude, or developing cross-examination strategy. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Expert Testimony Summarization

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

Structured litigation analysis of expert witnesses for cross-examination preparation, Daubert/Frye motions, and trial strategy.

## Required Inputs

1. **Expert report(s)** - initial, rebuttal, supplemental
2. **Deposition transcript(s)** - page/line numbers intact
3. **Curriculum vitae**
4. **Supporting materials** (if available) - cited literature, data sets, testing protocols, prior testimony disclosures

## Workflow

### 1. Expert Profile

Capture: name/title, retaining party, compensation disclosed, prior testimony history (case count + plaintiff-vs-defense ratio), areas of claimed expertise.

### 2. Opinions Inventory

For each opinion:
- **Ultimate conclusion** - verbatim or close paraphrase with source cite (report section or depo page:line)
- **Supporting sub-opinions** - numbered
- **Source citation** - report section or depo page:line

### 3. Methodology Analysis

For each methodology, assess:
- Technique/framework used, Peer-reviewed (Yes / No / Partial)
- Industry standard (Yes / No)
- Novel or proprietary, Independently replicable, Error rate disclosed

### 4. Factual Basis

- Documents and data sources relied upon, Independent verification performed vs. assumed facts, Key assumptions, flag unverified or contested assumptions

### 5. Strengths & Weaknesses

**Strengths** - credentials match opinion subject, peer-reviewed methodology, internal consistency, independent testing/analysis.

**Weaknesses checklist:**
- [ ] Opinions exceed CV-supported expertise
- [ ] Unsupported or contested assumptions
- [ ] Methodology not peer-reviewed or generally accepted
- [ ] Reliance on inadmissible or unreliable data
- [ ] Inconsistencies with published literature
- [ ] Inconsistencies with expert's prior testimony or publications
- [ ] Advocacy bias indicators (extreme retention ratio, hired-gun history)
- [ ] Undisclosed error rates, limitations, or contrary data

### 6. Admissibility Assessment

Evaluate under the controlling standard. **Daubert** applies in federal courts and most states. **Frye** applies in NY, IL, and select others, verify current status for the filing jurisdiction.

Daubert factors:
- Testable/falsifiable methodology, Peer review and publication, Known or potential error rate, General acceptance in field, Methodology reliably applied to case facts

Flag any grounds for a motion to exclude or limit.

### 7. Cross-Examination Strategy

- Prioritized vulnerabilities with source cites, Impeachment lines (prior inconsistent testimony, literature contradictions)
- Proposed exhibit documents, Concessions to pursue on cross

### 8. Strategic Recommendations

Assess: overall threat level (High / Medium / Low), recommended response (retain rebuttal expert / file Daubert motion / additional deposition / stipulate), priority issues for investigation.

## Checks

- Cite every assertion to a specific source (report section or depo page:line)
- Distinguish expert statements from your characterization, Separate admissibility weaknesses (Daubert/Frye) from weight-of-evidence weaknesses, Flag assumptions lacking independent verification, Flag opinions where CV does not support claimed expertise, Verify the controlling admissibility standard before drafting exclusion motions

---

**Key changes from original:**

- **Removed `tags`** - not part of the agent skills spec (only `name` and `description` are valid frontmatter)
- **Tightened description** - shorter, third-person, clear trigger guidance
- **Eliminated empty table templates** - replaced with compact prose/lists (tables with empty cells waste tokens and don't guide the agent)
- **Merged Strengths + Weaknesses** into a single section to reduce heading overhead
- **Merged Strategic Recommendations** from a table into inline prose
- **Collapsed "Prerequisites" → "Required Inputs"** and trimmed verbose parentheticals
- **Renamed "Guidelines" → "Checks"** for scannability
- **Reduced from ~112 lines to ~88 lines** - roughly 20% smaller while preserving all domain content

Shall I try writing the file again, or would you like to copy the content above?

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
