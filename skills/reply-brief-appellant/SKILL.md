---
name: reply-brief-appellant
language: en
description: Drafts an appellant's Reply Brief that rebuts the appellee's response and reinforces the case for reversal. Triggers when drafting appellant reply briefs, appellate rebuttals, or the final pre-argument written submission. [Atticus UK/Scots refined]
tags:
- brief, drafting, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Reply Brief for Appellant

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

Produces a strategically selective Reply Brief, the appellant's final written submission before oral argument, that dismantles the appellee's response while reinforcing grounds for reversal.

## Prerequisites

- Appellant's filed **opening brief** with all arguments and authorities
- **Appellee's brief** (the response being rebutted)
- **Appellate record** - transcripts, exhibits, pleadings with page/line citations
- **Governing rules** - court-specific reply brief limits, formatting, citation style, cover requirements
- **Case caption and docket number** - exactly as in the appellate record

## Quick Start

1. Gather all prerequisites above.
2. Triage the appellee's arguments, respond only to those that genuinely threaten appellant's position or are likely dispositive. Strategic silence is appropriate for weak or tangential points.
3. Draft each rebuttal using the paragraph pattern: fair characterization → specific rebuttal with citation → explanation of why reversal follows.
4. Assemble the document per the structure below, verify all citations, and confirm local-rule compliance.

## Document Structure

| Section | Requirements |
|---|---|
| **Cover Page** | Full caption, court name, docket number, document title per local rules, counsel info with bar number |
| **Table of Contents** | Argumentative headings, each a standalone persuasive statement the court can adopt |
| **Table of Authorities** | Cases, statutes, regulations, secondary sources, separately categorized with page references |
| **Introduction** | 2 to 3 pages: reframe core issue in light of appellee's response; identify 2 to 3 fatal weaknesses; correct any standard-of-review errors |
| **Argument** | Organized rebuttals using techniques and headings below |
| **Conclusion** | 1 to 2 pages: synthesize (don't repeat); restate specific relief matching opening brief exactly; no new arguments or citations |
| **Certificate of Compliance** | Word count, method, font details, rule citation |
| **Certificate of Service** | Date, method, all parties' contact information |

## Rebuttal Techniques (priority order)

| Technique | Trigger |
|---|---|
| Record correction | Appellee mischaracterizes facts, quote record verbatim with pinpoint cites |
| Context restoration | Appellee cherry-picks, present full context showing changed analysis |
| Authority distinction | Appellee cites inapposite cases, identify factual/legal/procedural differences |
| Omission highlighting | Appellee ignores controlling precedent, emphasize silence as concession |
| Standard-of-review leverage | Appellee applies wrong standard, correct and show result under proper standard |
| Concede-and-overcome | Appellee raises a strong point, acknowledge briefly, then show it doesn't change the outcome |

## Heading Style

- Bad: "Argument I: Standard of Review"
- Good: "The District Court Applied the Wrong Legal Standard When It Reviewed the Agency's Statutory Interpretation for Reasonableness Rather Than De Novo, Requiring Reversal"

Every point heading must be argumentative and adoptable by the court as a holding.

## Pitfalls and Checks

- **No new arguments** - reply briefs rebut the appellee's response and reinforce the opening brief only
- **Length discipline** - typically half the opening brief's word limit; every sentence must earn its place
- **Pinpoint citations** - every factual assertion needs a record cite (e.g., "R. at 247:12-15"); every legal assertion needs authority
- **Verify authorities** - confirm cited cases remain good law; flag uncertain ones with `[VERIFY]`
- **Consistent relief** - prayer must exactly match the opening brief; do not modify, expand, or abandon remedies
- **Prefer verbatim quotes** - quote the record directly rather than paraphrasing to prevent mischaracterization claims
- **Tone** - professional, confident, restrained; no sarcasm or personal attacks; let the record and law demonstrate error
- **Local-rule compliance** - check cover color, binding, e-filing vs. paper, number of copies, trial court info on cover

## Scotland/UK Adaptation

### Applicable law and court system, Replace US appellate practice with **Scottish civil appeals** under the **Rules of the Court of Session 1994** (RCS) for Court of Session appeals, and **Sheriff Appeal Court Rules** for Sheriff Court appeals.
- Replace "appellee" / "respondent" with **"respondent"** (same term in Scotland).
- Replace US appellate jurisdiction (Circuit Courts / Supreme Court) with **Inner House of the Court of Session** (First or Second Division) and the **UK Supreme Court** for Scotland-only civil appeals.

### Structural equivalents

| US Concept | Scottish/UK Equivalent |
|---|---|
| Appellant's Opening Brief | Note of Appeal / Inner House Written Case (RCS Ch. 38 to 40) |
| Appellee's Response Brief | Respondent's Note of Argument |
| Reply Brief (Appellant) | Appellant's Reply, may be a written submission in response |
| US Court of Appeals (Circuit) | Inner House of the Court of Session (First/Second Division) |
| US Supreme Court (certiorari) | UK Supreme Court (permission required, leapfrog from Inner House) |
| FRAP (Federal Rules of Appellate Procedure) | Rules of the Court of Session 1994 (RCS); Chapter 38 to 40 for appeals |
| Oral argument (fixed time) | Oral submissions, similar practice but less rigid time limits |
| Table of Authorities | Not always required; Inner House has no fixed format but it is advisable |
| Certificate of Compliance | Not required; check length compliance under RCS 38.3 to 38.5 |
| Cover requirements | No coloured-coded covers; simple typed covers with case details |

### Key differences for practitioners
1. **Court structure**: Civil appeals from the Sheriff Court go to the **Sheriff Appeal Court** (not directly to the Court of Session). From the Sheriff Appeal Court, further appeal to the **Inner House** (with permission). From the Inner House, appeal to the **UK Supreme Court** (with permission).
2. **No "Circuit splits"**: Scotland has a single unified civil appellate structure; there are no circuit splits to exploit. The Inner House's decisions are binding on lower courts.
3. **Reclaiming motion**: An appeal from the Outer House to the Inner House is called a **reclaiming motion** (RCS Ch. 38). It is an appeal by way of rehearing, not a de novo review.
4. **Permission requirement**: Many Scottish appeals require **leave/permission** from the lower court or the appellate court; identify this requirement early.
5. **Standard of review**: The Scottish appellate standard is narrower than US de novo review, the Inner House will not generally reopen findings of fact unless clearly wrong (what a reasonable tribunal could have decided). Legal errors are reviewed more broadly.
6. **Oral submissions**: While Scottish appellate practice allows oral submissions, the emphasis on written cases (Notes of Argument) is greater than in US federal practice. Written cases may be more persuasive than oral argument.
7. **No certiorari**: There is no direct equivalent of US certiorari, Scottish cases reach the UK Supreme Court as a right of appeal on points of law (with permission requirements).
8. **Expenses**: The "loser pays" costs rule applies; this should be acknowledged in the relief sought (expenses found in favour of the appellant).
9. **Tone**: Scottish appellate practice favours formal, measured, and tightly reasoned arguments. Hyperbolic or strident rhetoric is counterproductive.
10. **GBP**: Any costs/expenses referred to should be in pounds sterling (£).

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
