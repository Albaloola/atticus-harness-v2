---
name: markman-hearing-brief
language: en
description: Atticus UK/Scots legal skill for markman-hearing-brief. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Claim Construction Brief (UK Patent Litigation)

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

Drafts a claim construction brief persuading the court to adopt the client's proposed constructions of disputed patent claim terms under the purposive construction framework established by *Kirin-Amgen Inc v Hoechst Marion Roussel Ltd* [2004] UKHL 46.

## ⚠️ Important: No Markman Hearing in UK Patent Litigation

There is **no separate Markman hearing** in UK patent litigation. Claim construction occurs as part of the liability trial. This skill adapts the US Markman brief structure for use as:

1. **Skeleton argument** on claim construction for trial
2. **Opening submissions** on construction at trial
3. **Written submissions** in support of proposed constructions contained in the Agreed Claim Construction Schedule
4. **Post-trial submissions** on construction if directed by the court

The structure and analytical approach of a Markman brief are directly useful for UK practice, the key difference is procedural timing and the governing legal framework.

## Prerequisites

Gather before drafting:

- **Patent-in-suit** - claims, specification (page/paragraph references), drawings
- **Prosecution history** - UK IPO examination reports, responses, amendments, hearings
- **Disputed terms** - each term with client's and opposing party's proposed constructions (from Agreed Schedule)
- **Party position** - pursuer/defender; opening/responsive submissions
- **Court rules** - font, margins, page limits, Patents Court Guide / IPEC Guide requirements
- **Case management directions** - trial timetable, construction directions

## Brief Structure

### 1. Caption & Title Page

Court name, parties, case number, and title per court rules. Title format: "[Party]'s Skeleton Argument on Claim Construction" or "Submissions on Claim Construction."

### 2. TOC / Table of Authorities

- **TOC**: all sections with page references, generate after final draft
- **Table of authorities**: cases (alphabetical), statutes/rules, treaties/dictionaries

### 3. Introduction

- Identify patent-in-suit, disputed terms, and proposed constructions, Include claim construction summary table:

| Disputed Term | [Party]'s Construction | Opposing Construction |
|---|---|---|
| "[term]" | … | … |

- Roadmap arguments; write for a technically literate but non-specialist judge

### 4. Factual & Procedural Background

- **The invention** - problem solved and how; plain language
- **Prosecution history** - amendments, arguments overcoming objections, estoppel implications
- **Litigation posture** - accused products/processes, procedural history to issue, Cite specification by page/paragraph; prosecution history by date and document

### 5. Legal Standards

Present the *Kirin-Amgen* purposive construction framework:

| Principle | Rule |
|---|---|
| Purposive construction | Claims interpreted as a skilled person would understand them, reading the specification as a whole - *Kirin-Amgen* [2004] UKHL 46 |
| Intrinsic hierarchy | Claims → description → drawings (s.125 Patents Act 1977) |
| Specification as context | Read claims in light of spec; do not import limitations unless clearly intended |
| Protocol on Art. 69 EPC | Claims define scope; description and drawings are to be used to interpret; not purely literal nor purely guideline |
| Claim differentiation | Not a strong presumption in UK as in US, but still a consideration |
| Validity preservation | *Philipso/Formscan* principle: construe to preserve validity if possible |
| Prosecution history estoppel | Limited role in UK, can be considered but not a formal estoppel doctrine; *Virgin v Premium Aircraft* |
| Extrinsic evidence | Expert evidence admissible to explain technical context but cannot contradict intrinsic record |

Cite analogous UK case law with parentheticals.

### 6. Proposed Constructions, Per Disputed Term

For each term, follow this sub-structure:

**A. "[Claim Term]"**
- **Proposed construction:** [precise language]
- **Claim language** - usage in context; meaning to the skilled person
- **Specification** - quoted passages showing usage/definition; operation description; purpose/advantages
- **Prosecution history** - applicant statements on meaning; narrowing amendments; prior-art distinctions
- **Extrinsic evidence** (if applicable) - dictionaries, expert declarations, treatises; must inform, not contradict, intrinsic record
- **Rebuttal** - why opposing construction conflicts with intrinsic evidence, produces an illogical result, or fails under *Kirin-Amgen*

### 7. Conclusion

- Summary table restating each proposed construction, Request court adopt constructions, No new arguments or evidence

### 8. Certificate

Date, parties served, method (email), solicitor/counsel signature. Comply with CPR requirements and relevant practice directions.

## Critical Rules

- **Kirin-Amgen/Improver framework governs** - use purposive construction, not US *Phillips* analysis
- **Never import limitations from description** unless the patentee clearly intended to define the term differently
- **Quote precisely** - specification by page/para; prosecution history by document and date
- **Anticipate opposition** - preemptively address strongest counterarguments per term
- **Consistency** - proposed constructions must work across all claims containing the term
- **Accessibility** - explain technical terms for a non-specialist judge
- **Tone** - professional, respectful, forceful; never dismissive of opposing positions
- **Extrinsic evidence** - admissible but subordinate; expert evidence is common in UK patent litigation to establish the skilled person's understanding

## Final QC Checklist

- [ ] All citations verified against source documents
- [ ] Cross-references correct
- [ ] Word/page count within practice direction limits
- [ ] Table of contents and authorities generated after final edits
- [ ] Court-required formatting confirmed (font, margins, spacing, caption)
- [ ] Certificate of service complete
- [ ] References to "Markman" replaced with "claim construction" throughout

## Scotland/UK Adaptation

### Key Differences from US Markman Brief Practice

| US Concept | UK/Scottish Equivalent |
|---|---|
| Markman hearing (separate pre-trial) | No separate hearing, construction at trial |
| *Phillips v AWH Corp.* framework | *Kirin-Amgen* [2004] UKHL 46 (purposive construction) |
| *Nautilus* indefiniteness (35 U.S.C. § 112(b)) | s.14(3)/s.72 Patents Act 1977 - clarity and support |
| FRCP / local patent rules | CPR Part 63 + Patents Court Guide / IPEC Guide |
| USPTO (patent proceedings) | UK Intellectual Property Office |
| Bluebook citation | OSCOLA / RPC / FSR / EWHC (Pat) citations |
| Plaintiff/Patentee | Pursuer / Claimant |
| Defendant/Accused infringer | Defender |
| Jury trial for patents | No juries, UK patent cases heard by specialist judge(s) only |
| Injunction | Interdict (s.61 Patents Act 1977) |
| Punitive damages | Not available; compensatory damages or account of profits |
| *Bancorp Services* jury instructions | No equivalent, UK judge decides construction |
| Claim construction as issue of law | Also question of law in UK, for the judge, not jury |

### Applicable UK Law

- **Patents Act 1977** - s.125 (extent of invention), s.14(3) (clarity/support), s.72 (revocation), s.60 (infringement), s.61 (remedies)
- **Copyright, Designs and Patents Act 1988** - Patents Court and IPEC jurisdiction
- **Civil Procedure Rules Part 63** - patent claims procedure
- **Protocol on the Interpretation of Art. 69 EPC** - governs claim construction through EPC framework (retained post-Brexit)

### Key UK Case Law

- *Kirin-Amgen Inc v Hoechst Marion Roussel Ltd* [2004] UKHL 46, [2005] RPC 9 - purposive construction (the governing authority)
- *Improver Corp v Remington Consumer Products Ltd* [1990] FSR 181 - "Improver questions" (purposive protocol)
- *Catnic Components Ltd v Hill & Smith Ltd* [1982] RPC 183 - HL precursor to Improver
- *Virgin Atlantic Airways Ltd v Premium Aircraft Interiors* [2009] EWCA Civ 1062 - prosecution history and insufficiency
- *Generics (UK) Ltd v H Lundbeck A/S* [2009] UKHL 12 - validity and construction interaction
- *Société Technique de Pulverisation (STEP) v Emson Europe Ltd* [1993] RPC 513 - CA approach to equivalents
- *Actavis UK Ltd v Eli Lilly & Co* [2017] UKSC 48 - Supreme Court on equivalents under Art. 69 Protocol

### Courts for UK Patent Litigation

| Court | Notes |
|---|---|
| Patents Court (Business and Property Courts, England & Wales) | Main patent court, all UK patents; specialist Patents Court judges |
| Intellectual Property Enterprise Court (IPEC) | Lower value/simpler claims; £250k damages cap; costs capped |
| Court of Session (Outer House, Scotland) | Patent actions can be raised in Scotland, shares jurisdiction with English Patents Court |
| UK IPO (Comptroller) | Validity opinions, revocation (save for pending litigation), entitlement |
| Court of Appeal | Appeals from Patents Court, IPEC, or Scottish Inner House |
| UK Supreme Court | Final appeal |

### Practitioner Notes

1. **No Markman hearing.** Rename all documents: use "Skeleton Argument on Claim Construction" or "Written Submissions on Claim Construction."
2. All UK patent cases are judge-only, no jury. Write for a specialist patent judge.
3. The *Kirin-Amgen* purposive construction framework is the UK equivalent to *Phillips*. Do not cite US *Phillips* analysis.
4. The *Improver questions* (now modified by *Actavis v Eli Lilly* [2017] UKSC 48) provide the UK's protocol for equivalents, different from US doctrine of equivalents.
5. Scotland-specific: the Court of Session can hear patent infringement actions for Scotland. The Patents Court in London handles most UK-wide actions.
6. Expert evidence on the meaning of terms to the skilled person is standard in UK patent litigation.
7. Citation format: use UK patent case reports (RPC = Reports of Patent Cases; FSR = Fleet Street Reports; EWHC (Pat) neutral citations).
8. No punitive damages, interdict, damages, or account of profits are the available remedies.
9. Patent proceedings in Scotland follow Rules of the Court of Session (chapter 55 - Intellectual Property proceedings).
10. Where this skill refers to "Markman" in its name/title, the adapted output should use "Claim Construction Brief" or "Patent Construction Submissions."

### Quick Reference: UK vs US Claim Construction Terminology

| US Term | UK Equivalent |
|---|---|
| Markman hearing | Claim construction at trial |
| Markman brief | Skeleton argument / Submissions on construction |
| Markman ruling | Construction judgment / ruling on meaning of claims |
| Claims construction chart | Agreed Claim Construction Schedule / Scott Schedule |
| *Phillips* framework | *Kirin-Amgen* purposive construction |
| *Nautilus* / *Biosig* indefiniteness | s.14(3) Patents Act 1977 / *Virgin v Premium* |
| Intrinsic evidence (prosecution history) | File wrapper / Patent Office file (used more cautiously in UK) |
| Doctrine of equivalents | Protocol questions / *Actavis* equivalents test |
| POSITA (person of ordinary skill) | Skilled person / Person skilled in the art (PSA) |

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
