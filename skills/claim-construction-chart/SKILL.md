---
name: claim-construction-chart
language: en
description: Atticus UK/Scots legal skill for claim-construction-chart. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Claim Construction Chart

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

Drafts a claim construction chart presenting parties' competing interpretations of disputed patent claim terms for UK patent litigation proceedings.

## Prerequisites

- Asserted patent(s): GB/UK patent number, title, issue/grant date, inventors, full claim text, Case caption: party names, court/division (e.g., Patents Court, IPEC), claim number, Identified disputed terms from pleadings or case management conference, Parties' proposed constructions with supporting intrinsic evidence, Prosecution history: UK IPO examination responses, amendments, hearing officer statements, Applicable court rules (Patents Court Guide / IPEC Guide)

## Quick Start

1. Gather patent documents, disputed terms, and both parties' proposed constructions
2. Check Patents Court Guide or IPEC Guide for format requirements
3. Build the disputed terms table with per-term evidence citations
4. Classify each term as agreed, partially agreed, or disputed
5. Add certifications and signature blocks per court rules

## Output Structure

### Caption and Cover

Include: court (full designation), all parties, claim number, patent(s) with number/title/grant date/inventors, and document title per court rules ("Agreed Statement of Claim Construction" or "Disputed Claim Construction Schedule").

### Disputed Terms Table

One row per disputed term with these columns:

| Column | Content |
|--------|---------|
| No. | Sequential or claim-order number |
| Claim Term | Exact language from patent |
| Claim No(s). | All claims where term appears |
| Context | Surrounding claim language for court reference |
| Pursuer's Construction | Plain-language meaning + intrinsic evidence |
| Defender's Construction | Plain-language meaning + intrinsic evidence |
| Agreement Status | Agreed / Partial / Disputed |

### Evidence Citations

For each proposed construction, cite intrinsic evidence:

- **Specification** - page/paragraph numbers
- **Claims** - related claim language providing definitional context
- **Prosecution history** - UK IPO responses, amendments, applicant arguments
- **Figures/embodiments** - specific figures illustrating term meaning

All constructions follow s.125 Patents Act 1977 - the invention is defined by the claims as interpreted by the description and drawings: *Improver Corp v Remington Consumer Products Ltd* [1990] FSR 181 ("Improver questions"); *Kirin-Amgen Inc v Hoechst Marion Roussel Ltd* [2004] UKHL 46, [2005] RPC 9 (House of Lords, purposive construction).

The UK approach differs from US *Phillips* framework. UK courts apply **purposive construction** per *Kirin-Amgen*: the claims are to be interpreted from the perspective of the person skilled in the art, giving them a purposive meaning that takes account of the description and drawings. Protocol on the Interpretation of Art. 69 EPC applies.

If extrinsic evidence is used, it is subordinate to intrinsic evidence. Acceptable types: contemporaneous technical dictionaries/treatises, expert declarations (with qualifications and skilled-person basis), prior art showing terminology usage.

### Agreement and Disagreement

For each term, classify as:

- **Full agreement** - present agreed construction; note no judicial construction needed
- **Partial agreement** - state agreed portions, isolate remaining disputes
- **Full disagreement** - summarise dispute nature (scope, embodiment limitation, prosecution history impact, insufficiency)

### Insufficiency/Clarity Contentions

If a term is challenged under s.14(3) or s.72 Patents Act 1977:

- State position in defender's construction column, Apply *Kirin-Amgen* purposive construction approach, Provide factual and legal basis

### Certifications and Signatures

- Signature blocks for lead solicitor/counsel (each party): name, firm, address, phone, email, Certification of compliance with court directions, Any additional certifications required by Patents Court Guide

## Checks and Pitfalls

- **Pin-cite everything** - specification page/¶, prosecution history date/document, case reporter
- **Mirror structure** - pursuer's section must parallel defender's format exactly
- **Citation format** - OSCOLA or UK patent case reports (e.g., RPC, FSR); not Bluebook
- **UK IPO conventions** - patent number, inventor names, grant date
- **Court-specific compliance** - check Patents Court Guide or IPEC Guide for format, page limits, font/margin rules
- **Plain-language constructions** - understandable to a technically literate but non-specialist judge
- **Omit agreed terms** unless court directions require listing them
- **Flag same-term-different-context** - a term in multiple claims may warrant different constructions
- **Group related terms** by technology concept when logical
- **No Markman hearing**: claim construction occurs at trial, not as a separate pre-trial hearing. However, the court often directs an agreed schedule of disputed terms with proposed constructions before trial.

## Scotland/UK Adaptation

### Key Differences from US Patent Claim Construction Practice

| US Concept | UK/Scottish Equivalent |
|---|---|
| Markman hearing | No separate hearing, claim construction occurs as part of trial (Patents Court / IPEC) |
| *Phillips v AWH Corp.* framework | Purposive construction per *Kirin-Amgen* [2004] UKHL 46 (House of Lords) |
| *Nautilus* indefiniteness standard | s.14(3) Patents Act 1977 - clarity and support; *Virgin v Premium* [2009] EWCA Civ 1062 |
| FRCP (Federal Rules) | CPR (Civil Procedure Rules) Part 63 - patent claims |
| USPTO | UK Intellectual Property Office (UK IPO) |
| Local patent rules (N.D. Cal., E.D. Tex.) | Patents Court Guide / IPEC Guide, case management directions |
| Plaintiff/Patentee | Pursuer / Claimant |
| Defendant/Accused infringer | Defender |
| Jury trial for patents | No jury trials for patent cases in UK (all judge-only) |
| Injunction as remedy | Interdict, available under s.61 Patents Act 1977; equitable discretionary |
| Damages | Compensatory only (no punitive); account of profits as alternative |
| Claim construction at trial only | Construction arguments presented during liability trial, not pre-trial |

### Applicable UK Law

- **Patents Act 1977** (as amended) - s.125 (extent of invention), s.14(3) (clarity), s.72 (revocation), s.60 (infringement), s.61 (remedies)
- **Copyright, Designs and Patents Act 1988** - jurisdiction of Patents Court and IPEC
- **Protocol on the Interpretation of Art. 69 EPC** - governs claim construction through the European Patent Convention framework (post-Brexit: retained EU law)
- **Civil Procedure Rules Part 63** - patent claims procedure

### Key UK Case Law (Claim Construction)

- *Kirin-Amgen Inc v Hoechst Marion Roussel Ltd* [2004] UKHL 46 (purposive construction)
- *Improver Corp v Remington Consumer Products Ltd* [1990] FSR 181 ("Improver questions")
- *Catnic Components Ltd v Hill & Smith Ltd* [1982] RPC 183 (HL precursor to Improver)
- *Virgin Atlantic Airways Ltd v Premium Aircraft Interiors* [2009] EWCA Civ 1062 (insufficiency)
- *Generics (UK) Ltd v H Lundbeck A/S* [2009] UKHL 12 (validity and construction)

### Courts for UK Patent Litigation

| Court | Jurisdiction |
|---|---|
| Patents Court (England & Wales) | High Court division, all UK patents enforceable here; Scotland's patents jurisdiction is shared |
| Intellectual Property Enterprise Court (IPEC) | Lower-cost patent claims (England & Wales; smaller claims only) |
| Scottish Court of Session (Outer House) | Patent infringement actions can also be raised in Scotland |
| UK IPO (Comptroller) | Validity opinions, revocation, entitlement |
| Court of Appeal (EWCA Civ) | Appeals from Patents Court; cross-border effect |

### Practitioner Notes

1. Unlike US practice, there is no separate Markman hearing. Claim construction is argued as part of the trial.
2. All UK patent cases are bench trials, no juries.
3. Scotland-specific: patent actions can be raised in the Court of Session (Outer House), but most UK patent litigation is in the Patents Court in London.
4. Citation format: use UK patent case reports (RPC, FSR, EWHC (Pat)).
5. Section 125 Patents Act 1977 governs the extent of the invention: "the invention shall be taken to be that specified in a claim... as interpreted by the description and any drawings."
6. The *Kirin-Amgen* purposive construction approach differs materially from US *Phillips*: UK courts focus on what the person skilled in the art would understand the inventor to have intended.
7. No punitive damages, interdict is an equitable remedy, damages are compensatory, or account of profits may be elected.
8. Solicitor/counsel roles differ from US attorney roles, patent litigation is barrister-led.

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
