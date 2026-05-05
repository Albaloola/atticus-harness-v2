---
name: expert-witness-report-analysis
language: en
description: Critiques opposing expert witness reports for admissibility challenges, disclosure deficiencies, and cross-examination vulnerabilities. Triggers when the user provides an expert report for analysis, needs admissibility assessment under UK/Scottish rules, requests a motion to exclude or limit expert testimony, or prepares cross-examination of an opposing expert. [Atticus UK/Scots refined]
tags:
- analysis, litigation, memo, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Expert Witness Report Analysis

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

Produces a litigation-ready memorandum assessing an opposing expert's report for admissibility, methodology flaws, and impeachment opportunities under UK and Scottish admissibility rules.

## Prerequisites

Collect before starting:

1. **Expert report** - full text with all opinions and basis statements
2. **Expert CV** - credentials, publications, prior testimony history
3. **Underlying data/exhibits** - materials the expert relied upon
4. **Case file materials** - pleadings, commissions and diligence, relevant fact record
5. **Jurisdiction** - Scotland (Chapter 35, Rules of the Court of Session 1994 / Ordinary Cause Rules) vs. England & Wales (CPR Part 35)
6. **Deposition or commission evidence transcripts** (if available) - for prior inconsistent statements

## Workflow

### Step 1: Extract and Catalog Opinions

Number each opinion verbatim with report page citations. For each, record the factual predicates claimed, methodological steps, and expressed certainty level.

### Step 2: Assess Qualifications

Extract credentials against this checklist:

- Degrees, professional memberships, specialist accreditations (verify currency)
- Publications and peer-reviewed work, Prior testimony history, frequency, pursuer vs. defender ratio, Litigation income percentage vs. professional practice, Prior judicial criticism, sanctions, or findings of unreliability

Map each opinion to the expertise it requires. Flag gaps under CPR 35.5 / Chapter 35 RCS, expert evidence must be limited to what is reasonably required to resolve proceedings.

### Step 3: Check Disclosure Completeness

**Scotland (Chapter 35 RCS / OCR):** Flag any missing or incomplete required elements:

- Complete statement of all opinions, Basis and reasons for each opinion (including material facts and instructions)
- Statement of the expert's qualifications, Statement of the expert's duty to the court (Ikarian Reefer duties)
- List of cases in which the expert has given evidence in the preceding 5 years, Declaration that the expert understands their duty to the court

**England & Wales (CPR Part 35):** Same requirements with additional CPR 35.10 requirement for a statement of truth.

Missing elements may be grounds for exclusion or for the court to order disclosure. In Scotland, the court may order the expert to produce further information under Chapter 35.6. In England/Wales, failure disclosed in time is sanctionable under CPR 35.13.

### Step 4: Analyze Methodology

Trace each analytical chain: raw data → intermediate steps → final opinion.

Assess per step: claimed method, standard practice, departures, and justification.

**Red flags:**
- Litigation-only method not used in regular practice, Cherry-picked data or ignored contradicting information, Unsupported assumptions or no independent testing, Failure to test alternative hypotheses, Backward reasoning from conclusion to data, Internal inconsistencies between report sections, Failure to acknowledge limitations or material assumptions, Opinion straying beyond expert's field of expertise

### Step 5: Evaluate Admissibility

**UK/Scottish Test** - relevance, helpfulness, and the expert's overriding duty to the court.

The Scottish and UK approach to expert evidence admissibility is governed by:

1. **_The Ikarian Reefer_ duties** ([1993] 2 Lloyd's Rep 68) - the expert's overriding duty to the court, not to the party instructing them. Duty to provide independent, objective, unbiased opinion within their field of expertise.

2. **_Kennedy v Cordia (Services) LLP_** [2016] UKSC 6 - Supreme Court's authoritative statement on admissibility in Scotland:

| Factor | Assessment |
|---|---|
| Relevance, would it help the court? | Satisfies / Fails / Partial |
| Necessity, is it reasonably required? | Satisfies / Fails / Partial |
| No usurpation of court's role, does it stay within proper bounds? | Satisfies / Fails / Partial |
| Reliable methodology, is it a recognised and sound discipline? | Satisfies / Fails / Partial |
| Absence of bias, does the expert understand their overriding duty? | Satisfies / Fails / Partial |

3. **Civil Evidence (Scotland) Act 1988, s.1** - nothing in Scots law renders expert evidence inadmissible simply because it is hearsay, but weight is a separate question.

4. **Chapter 35, Rules of the Court of Session 1994** - specific rules for expert evidence in Scotland's highest civil court.

5. **CPR Part 35 (England & Wales)** - equivalent rules for the English court system.

**Scottish specificity:** There is no specific admissibility hearing (Daubert equivalent) in Scotland. Admissibility is decided by the judge at proof. The court may appoint a single joint expert under Chapter 35.4. Expert reports in Scotland must be lodged as productions.

**Key distinction from US Daubert/Frye:** The Scottish/UK test is less formalised than Daubert's five-factor framework. However, _Kennedy v Cordia_ now provides a structured approach. The _Ikarian Reefer_ duties (overriding duty to the court) are fundamental and apply to all expert evidence.

Cite analogous cases where experts with similar deficiencies were excluded or given limited weight. State motion recommendation: oppose admission, limit scope, or reserve for cross-examination.

### Step 6: Draft Cross-Examination Outline

Structure each theme as: Lock in → Establish standards → Expose deviation → Force concession.

Common themes:
- **Credentials gap** - establish field, narrow to sub-discipline, obtain admission of no training/publications, confront with opinion scope
- **Ignored contrary data** - establish duty to consider all relevant information (Ikarian Reefer duty), identify what existed, confirm non-review, force choice (ignorance vs. deliberate omission)
- **Litigation-only methodology** - obtain method description, confirm no publications or non-litigation use, introduce authoritative contrary standard
- **Breach of duty to the court** - establish the expert's overriding duty, show where opinion favours instructing party without objective basis, force concession of impartiality failure

Include impeachment sequences for prior inconsistent publications, depositions/commission evidence, or testimony in other cases.

### Step 7: Formulate Recommendations

- **Rebuttal expert** - required or optional; specify needed qualifications
- **Additional diligence** - commission and diligence for documents (Scotland) / specific disclosure (EW); obtain working files, drafts, and instructions to the expert
- **If testimony admitted** - cross themes, written submissions on weight, closing submission framing on reliability vs. credibility
- **Single joint expert** - consider whether to seek a court-appointed SJE under Chapter 35.4 / CPR 35.7

## Output Format

Structure the memorandum as:

1. **Executive summary** (≤2 pages) - expert identity, numbered key opinions, admissibility recommendation, top 3-5 challenges with strategic impact
2. **Qualifications assessment** with credentials-to-opinion gap table
3. **Disclosure deficiency analysis**
4. **Methodology analysis** with step-by-step assessment table
5. **Opinion-by-opinion analysis** - factual predicates, method, logic gaps, certainty assessment, vulnerability summary
6. **Admissibility assessment** with _Kennedy v Cordia_ / _Ikarian Reefer_ evaluation and analogous case law
7. **Cross-examination outline** (incorporating duty-to-court themes)
8. **Recommendations**

## Scotland/UK Adaptation Notes

- **Daubert/Frye → UK admissibility test**: The Scottish/UK approach is governed by _Kennedy v Cordia (Services) LLP_ [2016] UKSC 6 and the _Ikarian Reefer_ duties. There is no Daubert hearing in Scotland; admissibility is determined at proof.
- **FRE 702 → CPR 35 / Chapter 35 RCS**: Expert evidence must be limited to what is reasonably required. The court has case management powers to control expert evidence.
- **FRCP 26(a)(2) → Chapter 35 RCS / CPR Part 35**: Disclosure requirements differ. Scottish rules require a statement of the expert's duty to the court and a list of cases in the preceding 5 years.
- **FRCP 37(c)(1) → Scottish/CPR sanctions**: Non-disclosure may result in the court refusing to admit the evidence or ordering further information under Chapter 35.6 / CPR 35.13.
- **Expert's overriding duty to the court (Ikarian Reefer)**: This is a fundamental principle. Scottish rules specifically require experts to confirm they understand this duty.
- **Single joint experts (CPR 35.7 / Chapter 35.4 RCS)**: Available in both jurisdictions; more common in England than Scotland.
- **Productions**: In Scotland, expert reports must be lodged as productions. This is a formal process.
- **Commission and diligence**: Scotland's equivalent of discovery for obtaining underlying expert materials.
- **No punitive damages**: Scottish courts do not award punitive damages. Expert evidence on damages focuses on solatium (pain and suffering) and patrimonial loss.
- **Amounts**: Use GBP (£). Scottish solicitors' fees are taxed by the Auditor of Court.
- **Legal privilege**: Scotland has different privilege rules (confidentiality vs. privilege distinction; without-prejudice communications). Expert instructions are generally not privileged in the same way as in the US.

## Pitfalls and Checks

- Cite every assertion to the report, CV, or case record with page/paragraph references, Tag `[VERIFY]` on any case citation or statutory reference requiring confirmation, Distinguish challenges to entire testimony vs. specific opinions, tailor relief sought, Note jurisdiction-specific layers (Scotland vs. England & Wales rules) where they differ, The Scottish/UK approach is less formalised than Daubert, emphasise the Ikarian Reefer duties and the Kennedy v Cordia framework, Distinguish between weight (for the fact-finder) and admissibility (for the court)
- Maintain objective tone, acknowledge sound work rather than manufacturing weak challenges, Mark every page Attorney-Client Privileged / Confidential / Work Product
- **No invented case citations** - every authority must be verified

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
