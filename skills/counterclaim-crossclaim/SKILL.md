---
name: counterclaim-crossclaim
language: en
description: Drafts court-ready counterclaims and third-party notices (including multiplepoinding) for Scottish civil litigation. Analyses case documents, classifies compulsory vs. permissive counterclaims, ensures procedural compliance with the Rules of the Court of Session 1994 (Chapters 25-26) or Sheriff Court Ordinary Cause Rules (Chapters 10-11), and structures causes of action with proper Scottish averments. Use when a defender must assert affirmative claims against the pursuer or third-party claims against co-defenders during pleadings in the Court of Session or Sheriff Court. [Atticus UK/Scots refined]
tags:
- SCOTS [SCOTS]
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Counterclaim & Third-Party Notice (Scotland/UK)

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

Drafts counterclaim pleadings and/or third-party notices (including multiplepoinding) asserting a defender's affirmative claims against the pursuer or against co-defenders/third parties, satisfying Scottish civil procedural and substantive pleading requirements.

## Prerequisites

1. **Initial writ or summons** - full text with instance, case number, court, calling/fixing date
2. **Case documents** - contracts, correspondence, invoices, emails, evidence
3. **Party information** - names, roles, addresses, relationships (including co-defenders for third-party notices)
4. **Jurisdictional details** - court (Court of Session or Sheriff Court), relevant rules, local practice notes
5. **Legal authority** - statutes, regulations, case law for each ground of action

## Quick Start

1. Extract case identifiers and build a chronological fact timeline from provided documents
2. Classify each potential claim as competent for counterclaim (RCS Ch. 25 or OCR Ch. 10) or as requiring third-party notice (RCS Ch. 26 or OCR Ch. 11)
3. Run the procedural compliance checklist below
4. Assemble the pleading using the document structure
5. Verify all relevant legal requirements per the grounds of action table

## Workflow

### Step 1: Document Review & Fact Extraction

| Task | Details |
|------|---------|
| Extract identifiers | Court (Court of Session Outer House / Sheriff Court), instance, case number, party designations |
| Build timeline | Formation → performance → breach → loss → pursuer's wrongful conduct |
| Identify counterclaim targets | Same transaction/occurrence, counterclaim must be competent under RCS 25.1 / OCR 10.1 |
| Identify third-party targets | Co-defenders liable under contribution, indemnification, or independent legal grounds (RCS Ch. 26 / OCR Ch. 11) |
| Catalogue damages | Specific amounts, dates, causal chain, continuing losses |

### Step 2: Procedural Compliance

- [ ] Counterclaim competent under RCS Ch. 25 (Court of Session) or OCR Ch. 10 (Sheriff Court)
- [ ] Third-party notice competent under RCS Ch. 26 or OCR Ch. 11
- [ ] Prescription and limitation periods for each ground of action (Prescription and Limitation (Scotland) Act 1973)
- [ ] Jurisdictional basis, Court of Session has exclusive competence for certain matters
- [ ] Local practice notes: formatting, page limits, e-case management (Civil Online)
- [ ] Verification / oath requirements
- [ ] Speccification of averments: specific dates, quantities, locations, bare "lack of specification" is a common challenge

### Step 3: Document Assembly

Structure the pleading with these sections in order:

**Instance/Heading** - Mirror initial writ; add Counterclaiming Defender / Third-Party designations; title "COUNTERCLAIM" or "THIRD-PARTY NOTICE" as appropriate

**Introductory Statement** - Filing party, capacity, authorising rule (RCS 25.1 / OCR 10.1 or RCS Ch. 26 / OCR Ch. 11); for third-party notices: co-defender targets and legal basis

**Jurisdictional Allegations** - Subject-matter jurisdiction, amount in controversy, venue `[VERIFY]`

**Parties** - Full identification with transaction roles; third-party defenders: describe liability-creating relationship

**Condescendence/Factual Averments** (numbered paragraphs) - Incorporate admissions from initial writ by reference; admit/deny/qualify inaccurate allegations; present new facts chronologically; allege loss with specification (nature, timing, causation, amount)

**Pleas-in-Law / Grounds of Action** (separately numbered) - Format: "[COUNT N]: [Legal Theory] ([Counterclaim] Against [Party])". Each count must include the Scottish style: facts supporting each legal proposition → plea-in-law asserting legal entitlement.

**Conclusions/Jus Petendi** - Conclusions for payment of a sum certain; declarator, implement, interdict, or other remedies as appropriate.

**Signature Block** - Solicitor/counsel name, firm, contact, date; "Solicitor for [Defender]/[Counterclaiming Defender]/[Third-Party Pursuer]"

## Grounds of Action Elements

| Claim | Required Elements |
|-------|-------------------|
| Breach of Contract | Formation → terms → performance (or relevant non-performance) → breach → causation → loss |
| Fraud/Falsehood | False statement → materiality → knowledge of falsity (or recklessness) → reliance → causation → loss (must be averred with specification) |
| Contribution | Common liability → proportionate fault → right to apportion (Law Reform (Miscellaneous Provisions) (Scotland) Act 1940) |
| Contractual Indemnity | Indemnification clause → triggering event → covered claims → notice / intimation |
| Unjustified Enrichment | Enrichment of defender → loss to pursuer → causal connection → no legal ground for enrichment (condictio causa data causa non secuta / condictio indebiti / condictio ob turpem vel iniustam causam) |
| Multiplepoinding | Two or more conflicting claims to same fund/property → fundholder having no interest → real and personal rights to be determined |

## Pitfalls & Checks

- **Competency**: A counterclaim in the Court of Session must be intimated and lodged within the time limited by RCS Ch. 25; failure to assert a competent counterclaim in time may require a separate action. Third-party notice (RCS Ch. 26) requires leave of the court in certain cases.
- **Alternative averments**: Permitted under Scottish pleading rules; clearly label "separatim" / "in the alternative" without conceding primary theory.
- **Prescription**: Obligations may prescribe within 5 years (short negative prescription, s.6 Prescription and Limitation (Scotland) Act 1973) - verify each claim.
- **Consistency**: Party names, dates, amounts, and contract references must match source documents exactly.
- **Cross-references**: Verify all internal paragraph and article references; ensure productions references match text.
- **All citations must be verified** - mark uncertain citations with `[VERIFY]`
- **Do not fabricate facts** - plead only from provided case documents.
- **Multiplepoinding** is a distinct Scottish procedure, do not conflate with interpleader. It is used where a holder of property is subject to competing claims.

## Scotland/UK Adaptation

- **Governing Rules**: Rules of the Court of Session 1994 (SSI 1994/1443) Chapters 25 (Counterclaims) and 26 (Third Party Procedure); Sheriff Court Ordinary Cause Rules 1993 (SI 1993/1956) Chapters 10 (Counterclaims) and 11 (Third Party Procedure); Simple Procedure Rules (for claims up to £5,000).
- **Key Statutes**: Prescription and Limitation (Scotland) Act 1973; Law Reform (Miscellaneous Provisions) (Scotland) Act 1940 (contribution); Contract (Scotland) Act 1997.
- **Pleading Style**: Scottish pleadings use "Condescendence" (numbered factual paragraphs) followed by "Pleas-in-Law" (legal propositions). Conclusions articulate the specific remedy sought. There is no separate "Prayer for Relief" - the Conclusions serve this function.
- **English Cross-Border**: For cross-border matters within the UK, consider jurisdiction under the Civil Jurisdiction and Judgments Act 1982 (as amended) and retained EU-derived rules on jurisdiction.
- **Terminology**: US term → Scots equivalent: defendant → defender; plaintiff → pursuer; complaint → initial writ or summons; counterclaim → counterclaim (same term, distinct procedure); crossclaim → third-party notice / third-party claim; answer → defences; motion → motion or minute; discovery → commission and diligence / specification of documents.

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
