---
name: patent-infringement-summary
language: en
description: Generates structured summaries of patent infringement cases covering parties, patents-at-issue, infringement theories, claim construction, damages, and outcomes. Use when summarising patent disputes, creating case digests for IP portfolios, or onboarding to patent litigation matters. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Patent Infringement Case Summary

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

Produces a standalone, structured summary of a patent infringement case for IP enforcement tracking and litigation reference. Assumes UK jurisdiction (Patents Court / Court of Session / Intellectual Property Enterprise Court) unless stated otherwise.

## Prerequisites

Gather before starting:

- **Case filings** - petition/claim form, defences, counterclaims, key motions
- **Patent documents** - patents-at-issue with claims; prosecution file history if available
- **Court orders** - claim construction rulings, dispositive motions, final decree
- **Outcome documents** - judgment, settlement terms (if public), damages reports, interdict orders

## Quick Start

Build the summary in section order. Each section maps to one block in the output. Cite court documents by case number and date; cite patents by number. Tag unverified citations with `[VERIFY]`.

## Output Sections

### 1. Case Caption

Table with: Case Name (Pursuer v. Defender), Court/division, Case No., Filed date, Judge/Lord Ordinary (Scotland) or Judge (England).

### 2. Executive Overview

Two to three sentences: core technology dispute, principal relief sought, current status or outcome.

### 3. Patents-at-Issue

One table per patent: Patent No. (UK/EP(UK)), Title, Filed/Issued dates, Proprietor, Technology (plain-language), Key Claims (numbers + brief element descriptions), Commercial Significance (products, standards, market relevance).

### 4. Alleged Infringement

- **Accused instrumentalities** - products, services, or processes
- **Infringement type** - direct, indirect (contributory), joint infringement
- **Claim mapping** - how accused instrumentalities meet asserted claim elements
- **Multiple defenders** - joint/several theories or customer-suit issues if applicable

### 5. Procedural History

Chronological table (Date | Event | Significance) covering: petition/claim, defences/counterclaims, claim construction hearing, key procedure roll/commission and diligence rulings, summary decree, proof, post-proof motions, reclaiming motion (appeal). Flag rulings that shaped case trajectory.

### 6. Legal Arguments

**Pursuer's theories:**
- Infringement theories and claim construction positions, Damages model (lost profits / reasonable royalty / account of profits)
- Interdict basis

**Defender's defences:**
- Invalidity (lack of novelty, inventive step, excluded subject matter, insufficiency, added matter)
- Non-infringement / claim construction positions, Unjustified threats / abuse of process, Counterclaims for revocation or declaration of non-infringement, FRAND defences (for SEP patents)

### 7. Claim Construction

Table: Claim Term | Pursuer's Construction | Defender's Construction | Court's Construction. Note governing methodology (Catnic/Kirin-Amgen principles; Improver questions) and any Court of Appeal/UK Supreme Court guidance applied.

### 8. Outcome

Table with: Disposition, Infringement finding (per claim/product), Validity finding (per claim/defence), Damages (amount, methodology, reasonable royalty rate or account of profits basis), Enhanced damages (not available in UK, note any additional damages under s.62(3) Patents Act 1977), Interdict (granted/refused, scope, permanency), Expenses (ordinary or enhanced; note any protective expenses order), Appeal status. For ongoing cases, state current posture and next scheduled events.

### 9. Strategic Implications

- Precedential value (claim construction, damages methodology, validity)
- Impact on licensing/enforcement in the technology sector, SEP/FRAND considerations if applicable, Portfolio-level takeaways for IP strategy

## Pitfalls

- **Confidential settlements** - write "Terms confidential"; never speculate on terms
- **Multiple patents** - treat each patent separately; do not merge claim analyses
- **Parallel EPO proceedings** - note any opposition or revocation proceedings running alongside UK court litigation
- **FRAND-encumbered patents** - flag commitment terms and any licensing history
- **Technical accessibility** - keep descriptions readable by non-technical audiences while preserving legal precision

## Scotland/UK Adaptation

This skill has been adapted from US patent litigation practice to UK/Scots law.

### Key Terminology Changes

| US Term | UK/Scotland Equivalent |
|---|---|
| Plaintiff | Pursuer |
| Defendant | Defender |
| US District Court | Court of Session (Outer House) - Intellectual Property cases also heard in the Patents Court (England & Wales) and IPEC |
| Federal Circuit | Inner House (Court of Session) / Court of Appeal (England) / UK Supreme Court |
| US Supreme Court (patent appeals) | UK Supreme Court |
| Markman hearing | Claim construction hearing |
| Director of the USPTO | UK IPO Comptroller-General of Patents |
| USPTO | UK Intellectual Property Office (UK IPO) |
| Patent Act 1952 | Patents Act 1977 (UK) |
| USC § 101 (subject matter) | Patents Act 1977, s.1 (excluded subject matter) |
| USC § 102 (novelty) | Patents Act 1977, s.2 (novelty) |
| USC § 103 (obviousness) | Patents Act 1977, s.3 (inventive step) |
| USC § 112 (sufficiency/definiteness) | Patents Act 1977, s.14 (sufficiency, clarity) |
| DOE (Doctrine of Equivalents) | UK equivalents under Kirin-Amgen / Actavis v Eli Lilly / Improver questions |
| Willful infringement | No UK equivalent; "knowingly" infringed is not a separate category |
| PTAB / IPR | UK IPO hearing; EPO opposition (for EP(UK) patents) |
| Enhanced damages | Not typically available in UK; s.62(3) Patents Act 1977 allows "additional damages" for groundless threats |
| Jury trial | No jury in UK patent cases, heard by judge (Lord Ordinary or Patents Court judge) |
| Injunction | Interdict (Scotland) or injunction (England) |
| Summary Judgment | Summary Decree (Scotland) or summary judgment (England) |
| Attorney's fees (prevailing party) | Expenses (follow the event, loser pays) |

### Scots Law Particularities

- **Court of Session (Outer House)** is the principal forum for patent cases in Scotland
- **Patents Court (England & Wales)** and **IPEC** handle most UK patent litigation, Scotland has fewer patent cases
- **No jury trials** in patent cases in Scotland; heard by a single judge (Lord Ordinary)
- **Expenses** (costs) usually follow the event; no fee-shifting equivalent to US § 285
- **No punitive/exemplary damages** in Scots law for patent infringement
- **Commission and diligence** (Scottish discovery equivalent) - court orders for inspection, recovery of documents
- **Prescription**: patent claims subject to 5-year prescriptive period (s.6 Prescription and Limitation (Scotland) Act 1973) or 20-year long-stop

### Statutory References

| UK Statute | Subject Matter |
|---|---|
| Patents Act 1977 | Main UK patent statute, grounds for validity, infringement, entitlement |
| Copyright, Designs and Patents Act 1988 | Related IP rights |
| Intellectual Property Act 2014 | Unjustified threats, damages reform |
| Patents Rules 2007 (SI 2007/3291) | Procedural rules for UK IPO |
| Act of Sederunt (Rules of the Court of Session) | Scottish Court procedural rules |
| Human Rights Act 1998 | Engages ECHR Article 6 (fair trial) and Article 1, Protocol 1 (property) |

### Damages

| US Term | UK Equivalent |
|---|---|
| Lost profits | Lost profits (available) |
| Reasonable royalty | Reasonable royalty (available) |
| Lost profits + reasonable royalty | Not available cumulatively, UK law does not award both |
| Account of profits | Available (election by pursuer) |
| Enhanced damages (up to 3x) | Not available |
| Ongoing royalty | Possible as alternative to interdict |

### EPO Considerations

- European patents designating the UK (EP(UK)) are treated as UK patents, EPO opposition and appeal parallel proceedings should be noted, Unitary Patent and Unified Patent Court (UPC) - from June 2023, an alternative route affecting UK practitioners; note that UK is not a UPC member state

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
