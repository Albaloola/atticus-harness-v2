---
name: verdict-judgment-summary
language: en
description: Produces structured post-trial verdict and decree analysis memoranda for commercial litigation under Scots law. Triggers when summarising a jury verdict, proof/hearing decision (sheriff or Court of Session), post-decree motion assessment, or reclaiming motion (appeal) viability review. Covers liability determinations, damages breakdowns, critical rulings, and post-trial strategy. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Verdict/Decree Summary (Scotland/UK Adaptation)

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

Produces an internal strategic memorandum analysing a completed court outcome (proof, jury trial, or debate hearing), assessing post-decree options, and charting next steps.

## Prerequisites

Gather before starting, flag any missing items:

1. **Verdict form / Interlocutor / Decree** - exact findings, conclusions, awards, or determinations
2. **Trial/Proof transcripts** - key rulings and testimony (full or partial)
3. **Trial team notes** - observation memos, jury reaction notes (in jury cases)
4. **Court of Session / Sheriff Court rolls** - procedure roll notes, interlocutors, evidential rulings, preliminary pleas
5. **Comparable award research** - Judicial College Guidelines (England/Wales) and relevant Scottish award benchmarks

## Quick Start

1. Extract all findings and awards from the official verdict/interlocutor/decree
2. Map each craved remedy to its outcome with exact court language
3. Tabulate damages by category with evidential basis (separate solatium from patrimonial loss)
4. Catalog outcome-affecting rulings and whether properly excepted to or noted for appeal
5. Assess reclaiming motion (appeal) and post-decree options
6. Compile deadlines and recommendations with cost-benefit analysis

## Output Structure

### 1. Executive Summary (3 paragraphs max)

| Element | Content |
|---|---|
| Prevailing party | Which party prevailed on which craves/conclusions |
| Financial outcome | Total award, net result after set-off, expenses finding |
| Bottom line | One-sentence strategic takeaway |

### 2. Liability Determinations

Per crave/conclusion or issue tried:

- Outcome (sustained/repelled/rejected)
- Exact interlocutor or verdict form language, Apportionment of liability (if multiple defenders or contributory negligence under the Law Reform (Contributory Negligence) Act 1945)
- Special verdict answers revealing jury reasoning (in Court of Session jury trials for personal injury/defamation)
- Claims with liability established but no damages awarded, analyse why

### 3. Damages Breakdown

| Category | Amount | Basis |
|---|---|---|
| Patrimonial loss (past wage loss, medical, property) | £ | |
| Solatium (pain and suffering) | £ | Severity of injury tariff (Judicial College / Scottish guidelines) |
| Services/necessary services | £ | |
| Future patrimonial loss | £ | |
| Other (if granted) | £ | |
| **Total** | **£** | |

Note: No punitive / exemplary damages under Scots law (except in rare cases where expressly authorised by statute, flag if applicable).

### 4. Critical Court Rulings

Per outcome-affecting ruling:

| Ruling | Court's Reasoning | Standard | Excepted/Noted? | Appeal Impact |
|---|---|---|---|---|
| Preliminary plea on [topic] | | | Y/N | |
| Expert evidence restricted | | | Y/N | |
| Direction to jury refused/modified | | | Y/N | |
| Debate/Procedure Roll decision on relevancy | | | Y/N | |

Flag rulings deviating from Inner House precedent or involving novel statutory interpretation.

### 5. Post-Decree Motion Assessment

**Recall / Review (Sheriff Court only, Sheriff Appeal Court rules):**
- Error in law or fact?
- New evidence not reasonably available?
- Procedural irregularity?
- Success likelihood: High / Moderate / Low

**Reclaiming Motion (Court of Session):**
- Appealable under Court of Session Act 1988 / Rules of the Court of Session, Requires leave in certain cases, check RCS 38.2
- Standard of review: error of law (de novo) / plainly wrong on facts, Success likelihood: High / Moderate / Low

**Appeal to Sheriff Appeal Court (from Sheriff Court):**
- Error of law or miscarriage of justice, Permission required in certain cases (sheriff's judgment)
- Standard: error of law / clearly wrong on fact-finding, Success likelihood: High / Moderate / Low

For each procedural option assess: legal merit, court's tendencies, costs risk, practical likelihood of relief.

### 6. Reclaiming / Appeal Viability

| Issue | Standard of Review | Excepted/Noted? | Precedent Conflict? | Reversal Probability |
|---|---|---|---|---|
| | Error of law / Clearly wrong / Miscarriage of justice | Y/N | | High / Moderate / Low |

- Unnoted issues: assess whether reclaiming court will consider them at all (exceptions requirement is strict)
- Recent appellate decisions from the Inner House or Sheriff Appeal Court on similar questions, Candidly assess genuine reversal prospect vs. tactical delay, Consider expenses risk on appeal (loser ordinarily pays)

### 7. Recommendations and Deadlines

| Action | Deadline | Recommendation |
|---|---|---|
| Minute for Recall/Review (Sheriff) | 14 days (or as per Sheriff Court rules) | File / Do not file |
| Reclaiming motion (Court of Session) | 28 days from interlocutor (RCS 38.4) | File / Do not file |
| Appeal to Sheriff Appeal Court | 28 days (or per Sheriff Appeal Court rules) | File / Do not file |
| Settlement outreach | [date] | Pursue / Hold |
| Client communication | [date] | Talking points |

Include cost-benefit analysis: appeal expense vs. financial stakes, client risk tolerance, business objectives, reputational and precedential impact. Note that Scottish legal expenses rule favours the successful party on a party/party basis; consider this when assessing appeal economics.

## Pitfalls and Checks

- **Cross-reference everything** - verify every figure, date, and finding against the official interlocutor/decree before finalising
- **Analyse, don't describe** - explain *why* the outcome emerged (proof/evidential dynamics, credibility, legal arguments), not just what happened
- **Stay candid** - flag weaknesses even in favourable outcomes; maintain objectivity regardless of result
- **Deadline vigilance** - post-decree deadlines are jurisdictional and non-negotiable; always VERIFY for specific court (Sheriff Court Ordinary Cause / Simple Procedure / Court of Session)
- **Accessible executive summary** - must be comprehensible to solicitors who did not attend the proof/hearing and non-lawyer clients
- **Prediction divergence** - where outcome differs from pre-litigation assessment, analyse contributing factors
- **Expenses finding**: record expenses determination separately from damages, expenses are often the most important financial outcome and can exceed the award
- **No jury damages**: Scottish civil jury trials are limited to personal injury and defamation in the Court of Session. Most commercial cases are judge-only

## Scotland/UK Adaptation

This skill has been adapted from US post-trial verdict/judgment practice for use under Scots civil procedure.

**Key changes:**
- **Terminology**: replaced 'judgment' with 'decree/interlocutor', 'plaintiff/pursuer', 'defendant/defender', 'motion' with 'minute' (Sheriff Court) or relevant procedural step
- **Post-trial motions**: replaced FRCP 50(b) JMOL and FRCP 59 new trial motions with Scottish equivalents: recall/review (Sheriff Court), reclaiming motion (Court of Session), and appeal to Sheriff Appeal Court
- **Appeals**: replaced US federal 30-day appeal notice with Scottish rules - 28 days for reclaiming motion (RCS 38.4), 14 days for Sheriff Court recall
- **Damages**: replaced US damages categories (economic/non-economic/punitive) with Scottish classification: patrimonial loss, solatium, necessary services. No punitive damages under Scots law
- **Standards of review**: changed from US federal standards (de novo/substantial evidence/abuse of discretion) to Scottish equivalents (error of law, clearly wrong, miscarriage of justice)
- **Jury procedure**: noted limited availability of civil jury trials in Scotland (Court of Session only, personal injury/defamation)
- **Time bars**: prescription and limitation (Prescription and Limitation (Scotland) Act 1973) affects underlying claims and cross-appeal timing, flag separately
- **Expenses**: added emphasis on Scottish expenses rules (loser pays, party/party basis) as a significant strategic consideration
- **Currency**: converted from USD ($) to GBP (£)

**Status:** Matter-of-law conversions verified against the Court of Session and Sheriff Court rules. Specific procedural steps require verification against current RCS or Sheriff Court Rules.

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
