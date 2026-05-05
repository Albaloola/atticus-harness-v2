---
name: ip-infringement-analysis
language: en
description: Produces structured IP infringement memoranda evaluating patents, trademarks, copyrights, and trade secrets under UK/Scottish law. Performs claim-by-claim patent comparisons, likelihood-of-confusion trademark tests, substantial similarity copyright assessments, and trade secret misappropriation evaluations with defences and remedies analysis. [SCOTS] Adapted for UK/Scottish law, see Scotland/UK Adaptation section. Use for infringement opinions, pre-filing assessments, cease-and-desist support, licensing disputes, or settlement valuation. [Atticus UK/Scots refined]
tags:
- SCOTS, litigation, analysis, memo, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# IP Infringement Analysis (UK/Scotland)

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

Generates an element-by-element infringement memorandum covering rights identification, type-specific analysis, defences, and remedies quantification under UK and Scottish law.

[SCOTS: Note] UK IP law is largely harmonised across England, Wales, Scotland, and Northern Ireland. Patents Act 1977, Copyright, Designs and Patents Act 1988, and Trade Marks Act 1994 apply UK-wide. Scottish courts (Court of Session Outer House) handle IP litigation for Scotland-specific claims. The UK Intellectual Property Office (UK IPO) is the registration authority. See Scotland/UK Adaptation section for detailed differences.

## Prerequisites

1. **IP registrations/filings** - patents (with claims), trade mark registrations, copyright (automatic, no registration), or trade secret identification documents. For UK rights: UK IPO registration numbers.
2. **Accused instrumentality** - product specs, screenshots, source code, marketing materials, or service descriptions
3. **Prosecution history** (patents) - UK IPO file wrapper, claim amendments, examiner reports
4. **Relevant agreements** - licences, NDAs, employment/non-compete agreements, assignments
5. **Correspondence** - cease-and-desist letters, licensing negotiations, admissions
6. **Jurisdiction and procedural posture** - forum (Court of Session, Sheriff Court, High Court, IPEC), prescriptive period status

If any prerequisite is missing, pause and ask, do not assume or fill gaps.

## Quick Start

1. Identify the IP right(s) at issue (Step 1)
2. Characterise the accused activity (Step 2)
3. Apply the type-specific framework: Patent (A), Trade Mark (B), Copyright (C), or Trade Secret / Confidential Information (D) (Step 3)
4. Assess defences and vulnerabilities (Step 4)
5. Evaluate available remedies (Step 5)
6. State overall assessment with confidence level (Step 6)

Analyse each IP type separately when multiple types are at issue.

## Output Structure

### Step 1: IP Rights Identification

| Field | Detail |
|---|---|
| IP Type | Patent / Trade Mark / Copyright / Confidential Information |
| Registration/Application No. | UK IPO / EPO number |
| Filing/Priority Date | |
| Owner/Claimant | |
| Key Claims/Mark/Work Description | |
| Status | Active / Expired / Pending |

### Step 2: Accused Activity

| Field | Detail |
|---|---|
| Accused party | |
| Product/service/activity | |
| Date of first use | |
| Geographic scope | |
| Commercial context | |

### Step 3: Type-Specific Analysis

Apply the applicable framework(s):

#### A. Patent Infringement (UK)

1. **Claim construction** - construe claims under Catnic Components Ltd v Hill & Smith Ltd [1982] RPC 183 (HL) and the Improver/Actavis approach: Actavis UK Ltd v Eli Lilly [2017] UKSC 44. Apply Protocol on Art.69 EPC.
2. **Literal infringement** - all-elements rule, limitation-by-limitation comparison using claim chart below
2. **Equivalents** - Actavis questions: (i) does variant achieve substantially same result in substantially same way? (ii) would it be obvious to person skilled in art? (iii) does patentee intended strict compliance? Check prosecution estoppel.
3. **Means-plus-function** - not recognised in UK law; construe as normal purposive construction
4. **Indirect infringement** - s.60(2) Patents Act 1977: supply means relating to essential element, knowing/intended for infringement
5. **Validity challenges** - novelty (s.2), inventive step/obviousness (s.3), sufficiency (s.14(3)), excluded subject matter (s.1)

**Claim Chart:**

| Claim Element | Accused Feature | Literal? | Equivalent? | Notes |
|---------------|----------------|----------|------------|-------|
| [Limitation 1] | | Y/N | Y/N | |
| [Limitation 2] | | Y/N | Y/N | |

A single missing limitation defeats literal infringement on that claim.

#### B. Trade Mark Infringement (UK)

Apply s.10 Trade Marks Act 1994:

| Factor | Analysis | Weight |
|--------|----------|--------|
| Identity/similarity of signs (visual, aural, conceptual) | | |
| Identity/similarity of goods/services | | |
| Likelihood of confusion (including association) | | |
| Average consumer, level of attention | | |
| Enhanced distinctiveness / reputation | | |
| Unfair advantage / detriment (if reputation) | | |

**Key UK tests:** Specsavers v Asda [2012] EWCA Civ 24, Comic Enterprises v Twentieth Century Fox [2016] EWCA Civ 41. Apply global appreciation test (EU case law retained post-Brexit).

If mark has reputation: assess dilution (s.10(3) TMA 1994). Evaluate defences: own name use, descriptive use, use of indications of characteristics, exhaustion of rights (s.11 TMA 1994).

#### C. Copyright Infringement (UK)

1. **Ownership** - first ownership vests in author (s.11 CDPA 1988); no registration required
2. **Causal connection** - access to claimant's work + objective similarity
3. **Substantial part** - qualitative, not quantitative (s.16(3)(a) CDPA 1988). Designers Guild v Russell Williams [2000] UKHL 58 - crude copyist method still infringes.
4. **Idea/expression dichotomy** - copyright protects expression, not ideas (s.1 CDPA 1988)
5. **De minimis** - whether copying falls below actionable threshold

**Fair Dealing (ss.29-30 CDPA 1988):**

| Factor | Analysis | Favours |
|--------|----------|---------|
| Purpose (research/private study / criticism/review / quotation / news reporting / parody) | | P / D |
| Amount used relative to whole work | | P / D |
| Effect on rightsholder's market | | P / D |
| Does dealing conflict with normal exploitation? | | P / D |

[SCOTS: Note] UK copyright law does not have a general "fair use" doctrine as in the US. Only specific statutory "fair dealing" exceptions apply. The CDPA 1988 s.29-30 limit the available defences. Do not analogise from US fair use case law without careful adaptation.

#### D. Confidential Information / Trade Secrets (UK)

1. **Identification** - describe each claimed trade secret with specificity
2. **Qualification** - Coco v AN Clark [1969] RPC 41 test: (i) information must have necessary quality of confidence, (ii) imparted in circumstances importing obligation of confidence, (iii) unauthorised use detrimental
3. **Misappropriation method** - breach of confidence, improper means (theft, breach of duty)
4. **Trade Secrets (Enforcement, etc.) Regulations 2018** - implements EU Directive 2016/943 (retained post-Brexit)
5. **Restrictive covenants** - NDA/non-compete scope, enforceability, temporal/geographic limits. Post-employment restraints must protect legitimate business interests.

### Step 4: Defences & Vulnerabilities

| Defence | Applicability | Risk Level |
|---------|--------------|------------|
| Prescription / limitation | | High/Med/Low |
| Acquiescence / delay | | |
| Exhaustion of rights | | |
| Independent creation / reverse engineering | | |
| Invalidity / unenforceability | | |
| Fair dealing / own name use / descriptive use | | |
| Laches / mora (Scots law) | | |

### Step 5: Remedies Assessment

| Remedy | Availability | Estimated Range |
|--------|-------------|-----------------|
| Loss of profits (account of profits) | | |
| Reasonable royalty / damages | | |
| Interdict (injunction) - interim / permanent | | |
| Delivery up / destruction | | |
| Additional damages (flagrancy) | | |
| Legal costs (judicial expenses follow success) | | |

[SCOTS: Note] Scots law does not recognise punitive/exemplary damages (with limited exceptions). There are no "statutory damages" for copyright infringement (US-style). Damages are compensatory. Account of profits is alternative to damages (not cumulative). Interdict (Scottish equitable remedy) is the equivalent of injunction.

### Step 6: Overall Assessment

| Item | Assessment |
|---|---|
| Infringement likelihood | Strong / Moderate / Weak |
| Strongest arguments for infringement | |
| Greatest vulnerabilities | |
| Recommended course of action | Litigate / Settle / Licence / Monitor |
| Settlement valuation range | |

Do not state ultimate legal conclusions without qualifying confidence level.

## Troubleshooting

| Issue | Resolution |
|---|---|
| Uncertain claim construction (UK) | Apply Catnic/Actavis purposive construction; flag competing purposive interpretations |
| No direct UK authority on point | Identify closest persuasive authority; note whether Court of Session / High Court likely to follow |
| Mixed literal/equivalents results across claims | Analyse each claim independently; a single claim suffices for infringement |
| Incomplete accused instrumentality info | Note gaps; qualify analysis as preliminary; request missing specs before finalising |
| Foreign IP rights implicated | Flag when Patents Act 1977, CDPA 1988 or Trade Marks Act 1994 apply; analyse UK and foreign rights separately |
| Post-Brexit EU IP rights | Separate EUTMs and EU design rights from UK equivalent rights; note exhaustion and jurisdiction |

## Guidelines

- Cite controlling authority from the relevant UK jurisdiction; identify which court's precedent applies, For Scottish IP cases: Court of Session Outer House (first instance), Inner House (appeal); UK Supreme Court (final)
- Use `[VERIFY]` for any citation not confirmed against source documents, Flag privilege, work product, or ethical issues (e.g., conflict of interest)
- Output is draft work product, include explicit notation that it does not constitute legal advice, Distinguish between UK-wide legislation and Scotland-specific procedural rules

## Scotland/UK Adaptation

**Status**: Done, fully adapted for UK/Scottish law.

### Key Changes from US Version

| US Term / Statute | UK/Scottish Equivalent |
|---|---|
| Patent (USPTO) | Patent (UK IPO / EPO) |
| Utility patent | Patent (same concept under Patents Act 1977) |
| Trademark (USPTO) | Trade mark (UK IPO) |
| Copyright (USCO registration) | Copyright (automatic, CDPA 1988, no registration) |
| Trade secret (state law) | Confidential information / trade secrets (Coco v Clark + Trade Secrets Regs 2018) |
| 35 U.S.C. §§ 101-103 (patentability) | Patents Act 1977 ss.1-3 (novelty, inventive step, excluded) |
| 35 U.S.C. § 271 (infringement) | Patents Act 1977 s.60 (infringement) |
| 17 U.S.C. § 107 (fair use) | CDPA 1988 ss.29-30 (fair dealing, limited) |
| 15 U.S.C. § 1114 (trademark) | Trade Marks Act 1994 s.10 |
| Lanham Act | Trade Marks Act 1994 |
| DTSA / state trade secret law | Trade Secrets (Enforcement etc.) Regulations 2018 |
| FDA / regulatory | MHRA (medicines) / relevant UK regulator |
| Doe v. or party designations | Normal party names / "AB" for anonymity |
| State law claims | Common law / Scots delictual claims |
| Punitive / enhanced / treble damages | Not available (Scots law); limited aggravated damages only |
| Injunction | Interdict (Scotland) / Injunction (England) |
| Jury trial (civil) | Rare in Scotland (limited to certain Court of Session actions) |
| Discovery | Commission and diligence / disclosure |
| Attorney fees (exceptional case) | Legal expenses follow success (loser pays) - judicial discretion |

### Court Hierarchy (Scotland, IP)

| IP Type | First Instance | Appeal |
|---|---|---|
| Patent (Scotland) | Court of Session (Outer House) | Inner House → UK Supreme Court |
| Trade mark (Scotland) | Court of Session (Outer House) | Inner House → UK Supreme Court |
| Copyright (Scotland) | Sheriff Court / Court of Session | Sheriff Appeal Court / Inner House |
| Confidential info (Scotland) | Sheriff Court / Court of Session | Sheriff Appeal Court / Inner House |

For England/Wales: Patents Court (High Court) or IPEC (lower value); Court of Appeal → UK Supreme Court.

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
