---
name: expert-report-on-damages
language: en
description: Generates a structured expert report on economic damages for U.S. commercial litigation. Produces Daubert-ready, FRE 702-compliant analyses covering lost profits, disgorgement, diminution in value, or reasonable royalty with full FRCP 26(a)(2)(B) disclosure. Use when the user needs a damages expert report, economic loss calculation, damages rebuttal, forensic accounting analysis, or expert disclosure for commercial disputes during discovery, pre-trial, or trial. [Atticus UK/Scots refined]
tags:
- analysis, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Expert Report on Damages

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

Produces a Daubert-compliant expert damages report for U.S. commercial litigation with defensible methodology, transparent calculations, and full FRCP 26(a)(2)(B) disclosure.

## Prerequisites

1. **Case materials** - pleadings defining damages scope, interrogatory responses, deposition transcripts
2. **Financial records** - income statements, balance sheets, tax returns, sales records, general ledger (3 to 5 years pre-wrongdoing minimum)
3. **Contracts** - governing relationship, damages caps, limitations of liability
4. **Expert CV** - credentials, certifications, prior testimony list
5. **Industry data** - benchmarks, comparable company data, economic studies
6. **Discovery status** - identify gaps upfront; missing records require disclosed limitations or range opinions

## Report Structure

### 1. Title Page & Engagement Scope

- Retaining party, engagement date, specific questions presented, Compensation statement: fees not contingent on outcome or amount, Scope boundaries, what was and was not examined

### 2. Expert Qualifications (FRE 702 / Daubert)

| Element | Required Detail |
|---|---|
| Education | Degrees, institutions, dates |
| Certifications | CPA, CFE, CFA, ABV, CVA as applicable |
| Experience | Years in damages/forensic/valuation; matter types |
| Prior testimony | Case count, deposition vs. trial, jurisdictions |
| Publications | Peer-reviewed articles, conference papers, committee service |

### 3. Materials Reviewed

Itemized list of all documents, data, and testimony considered. Every item traceable to source.

### 4. Assumptions & Limitations

| # | Assumption / Limitation | Basis for Reasonableness |
|---|---|---|
| 1 | Accuracy of financial statements | Third-party preparation; management representations |
| 2 | Continuation of pre-breach trends | Historical performance data |
| 3 | [Case-specific] | [Support] |

Flag unavailable records, incomplete discovery, or destroyed documents. Explain how each gap affects certainty or requires a range opinion.

### 5. Factual Background

Objective chronological narrative from case documents covering:
- Parties, business relationship, contract terms, economic significance, Alleged wrongful conduct: start date, duration, specific acts/omissions, Damages accrual period with key milestone dates, Industry/market context: growth rates, competitive dynamics, regulatory changes, Alternative causes considered: management decisions, market downturns, competitor actions, unrelated operational issues

### 6. Methodology

#### Damages Type Selection

| Type | When Applicable |
|---|---|
| Lost profits ("but for") | Lost revenue/income from breach or tort |
| Diminution in value | Permanent impairment to asset or business value |
| Disgorgement | Defendant's profits from wrongful conduct |
| Reasonable royalty | IP infringement; licensing disputes |
| Cost to cure | Remediation for defective performance |

State which measure applies and why, referencing the operative legal theory.

#### Daubert Reliability Factors

Address each for every methodology chosen:

1. **Testability** - can be tested or falsified
2. **Peer review** - published in recognized literature or professional standards
3. **Error rate** - known/potential rate disclosed
4. **Standards** - governed by AICPA, NACVA, or equivalent [VERIFY current editions]
5. **General acceptance** - accepted in forensic accounting/economics community

#### Lost Profits Framework

1. Establish pre-wrongdoing baseline: gross, operating, and net margins over 3 to 5 historical periods
2. Project "but for" revenues using trend analysis, regression, or market-based projections
3. Subtract actual results during damages period
4. Adjust for mitigation efforts, avoided costs, contingency discounts, tax effects

#### Diminution in Value Framework

Apply valuation approaches consistently pre- and post-event:

| Approach | Techniques | Key Inputs |
|---|---|---|
| Market | Comparable company, precedent transactions | Revenue/EBITDA multiples |
| Income | DCF, capitalization of earnings | Discount rate, growth rate, normalized earnings |
| Cost | Replacement/reproduction cost | Asset inventory, depreciation |

Diminution = Pre-event value minus Post-event value. Use same methodology for both dates.

### 7. Damages Calculations

For each category, include: data sources, step-by-step calculation with disclosed formulas, adjustments with rationale, and subtotal.

Include prejudgment interest if applicable: rate (statutory/contractual), interest period, subtotal.

State total damages. All numbers must trace to source documents or disclosed assumptions.

- Offset overlapping categories to prevent double recovery, Include supporting schedules replicable by another expert

#### Sensitivity Analysis

| Key Assumption | Low | Base | High |
|---|---|---|---|
| Revenue growth rate | X−2% | X% | X+2% |
| Profit margin | X−1% | X% | X+1% |
| Discount rate | X+1% | X% | X−1% |
| **Total Damages** | **$___** | **$___** | **$___** |

### 8. Opinions & Conclusions

State each opinion to "a reasonable degree of [economic/financial] certainty" per jurisdiction convention:

> **Opinion 1:** [Figure or range] for [category], based on [methodology].
> **Opinion 2:** Under alternative scenario [X], damages are [Y].

Identify factors that could cause actual damages to differ. Confine opinions to expertise area and available evidence.

### 9. Exhibits & Appendices

- [ ] Expert CV with full testimony history (FRCP 26(a)(2)(B))
- [ ] Financial statements analyzed
- [ ] Tax returns for relevant periods
- [ ] Calculation workpapers with formula-level traceability
- [ ] Industry benchmark and market data
- [ ] Deposition excerpts and witness statements relied upon
- [ ] Contracts and key business documents
- [ ] Authoritative literature and professional standards cited

## Compliance Checklist

- [ ] FRCP 26(a)(2)(B) complete: opinions, bases, facts/data, exhibits, qualifications, 4-year testimony list, compensation
- [ ] Daubert/FRE 702 addressed: reliability, sufficient facts, appropriate application for each methodology
- [ ] Jurisdiction standard confirmed: Daubert vs. Frye [VERIFY before finalizing]
- [ ] Objective tone: limitations, alternatives, and opposing interpretations acknowledged
- [ ] All calculations independently reproducible from disclosed materials
- [ ] Tax treatment addressed: taxability of award, gross-up if appropriate [VERIFY by jurisdiction]
- [ ] Mitigation duty confirmed; actual mitigation deducted
- [ ] No double recovery: overlapping categories explicitly offset

## Troubleshooting

**Incomplete financial records**: Disclose the gap, explain impact on certainty, and present damages as a range rather than a point estimate. Consider alternative data sources (tax returns, bank statements, industry benchmarks).

**Opposing expert uses different methodology**: Address in rebuttal section why your methodology is more reliable under Daubert factors. Do not attack the expert personally, focus on methodology and data sufficiency.

**Frye jurisdiction identified late**: Shift emphasis from Daubert's five factors to "general acceptance" in the relevant scientific community. Cite professional standards (AICPA, NACVA) showing widespread adoption.

**Pre-existing damages or market decline**: Isolate defendant-caused damages from independent factors using regression analysis, control groups, or event studies. Document the separation methodology explicitly.

**Court excludes a damages category**: Structure calculations modularly so excluded categories can be removed without invalidating the remainder.

## Scotland/UK Adaptation

This skill is drafted for US federal civil litigation. When adapting for Scotland or the wider UK, apply the following conversions:

### Court System

| US Concept | Scotland/UK Equivalent |
|---|---|
| US District Court (federal) | Court of Session (Outer House) - high-value/complex; Sheriff Court (Ordinary Cause) - claims over £5,000 |
| FRCP (Federal Rules of Civil Procedure) | Rules of the Court of Session (RCS) / Ordinary Cause Rules (OCR) |
| Daubert / FRE 702 admissibility | No direct Daubert equivalent; expert evidence governed by Civil Evidence (Scotland) Act 1988 and common law. The court assesses reliability, not under a formal Daubert framework. |
| Frye standard | Not applicable in Scotland. |
| FRCP 26(a)(2)(B) expert disclosure | No equivalent mandatory disclosure regime. Expert reports are commissioned by the party; the court may order exchange of reports under case management. |

### Damages Principles

| US Concept | Scotland/UK Equivalent |
|---|---|
| Punitive / exemplary damages | **Generally not available** in Scots law. Limited aggravated damages may be awarded in exceptional circumstances (e.g. defamation, press intrusion). No punitive damages for delict. |
| Prejudgment interest | Interest on damages is discretionary; statutory rate under the Judicial Factors (Scotland) Act 1889 or as fixed by the Act of Sederunt. Runs from the date of the wrong or decree. |
| Lost profits (delict) | Same "but for" framework applies under Scots delict for economic loss. \*Donoghue v Stevenson\* [1932] AC 562 is the foundational Scottish authority for negligence. |
| Diminution in value | Recognised for heritable property damage; valuation follows RICS standards |
| Disgorgement | Available for breach of confidential relationship and IP; Scots law follows UK-wide equitable principles |
| Mitigation (duty to mitigate) | Same duty applies. \*British Westinghouse v Underground Electric Railways\* [1912] AC 673 applies in Scotland. |
| "Loser pays" (judicial expenses) | **Scotland follows "loser pays"**: the unsuccessful party bears the successful party's judicial expenses (costs). This is the opposite of the US default. |

### Currency & Amounts, All monetary figures should be stated in **GBP (£)**.
- Jurisdictional thresholds: Sheriff Court Simple Procedure up to £5,000; Ordinary Cause over £5,000; Court of Session for claims over £100,000 or complex matters.

### Professional Standards
| US Standard | UK/Scottish Standard |
|---|---|
| AICPA (forensic accounting) | ICAEW / ICAS (Institute of Chartered Accountants of Scotland) |
| NACVA | RICS (for valuations) / ICAS |
| CPA certification | Chartered Accountant (CA) / ACCA |

### Key Practitioner Differences
1. Expert witnesses in Scotland owe a duty to the court, overriding party loyalty, codified in the Civil Evidence (Scotland) Act 198 and reinforced in \*Kennedy v Cordia (Services) LLP\* [2016] UKSC 6.
2. No formal "Daubert hearing" in Scotland. The court determines admissibility under common law principles.
3. Scottish legal procedure does not provide for depositions. Evidence is led at a Proof hearing.
4. Prescription (limitation): 5 years for delict claims (3 years for personal injury) under the Prescription and Limitation (Scotland) Act 1973.
5. The expert report in Scotland is typically referred to as an "expert report" or "commissioned report" for the court process, not a "FRCP disclosure."
6. Group proceedings (class actions) were introduced by the Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018 - opt-in, limited scope.

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
