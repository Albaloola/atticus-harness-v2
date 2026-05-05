---
name: answer-with-invalidity-contentions
language: en
description: Drafts a Defender's Answers with Invalidity Contentions responding to a UK patent infringement action. Covers CPR Part 16 statements of case, revocation counterclaims, and invalidity arguments under the Patents Act 1977 (ss.1-3, 14, 72). Use when representing a defender in the pleadings phase of UK patent litigation who must respond to an infringement claim and assert prior art, anticipation, obviousness, or insufficiency defences. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, pleading, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Answer with Invalidity Contentions (UK Adaptation)

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

Combined Defence and Invalidity Contentions for a patent defender, responds to each allegation in the Initial Writ or Claim Form while building the invalidity case.

## Prerequisites

1. **Initial Writ / Claim Form** - all numbered averments requiring response
2. **Asserted patent(s)** - specification, claims, and prosecution history (UKIPO / EPO file)
3. **Prior art** - patents, publications, products, or public uses with qualifying dates
4. **Jurisdiction** - correct court (Patents Court, IPEC, Sheriff Court IP track, or Court of Session)
5. **Effective filing date** - pre-Patents Act 1977 amendment dates for s.3 (obviousness) prior art
6. **Accused product/method** - for non-infringement admissions and denials

## Output Structure

### 1. Heading and Introduction, Full party names, court, case number, Title: DEFENDER'S ANSWERS AND COUNTERCLAIM FOR REVOCATION, Jury demand: not applicable (no civil jury in Scotland/UK patent cases)
- Opening denial of infringement of any valid claim

### 2. Admissions and Denials

Respond averment-by-averment mirroring the pursuer's numbering.

| Response | When | Language |
|---|---|---|
| Admit | Verifiable facts (patent grant, court jurisdiction) | "Admitted that UK Patent No. X was granted on [date]." |
| Admit in part / Deny in part | Mixed fact and legal conclusion | "Admits it manufactures [product]; denies infringement of any valid claim." |
| Not known and not admitted | Within pursuer's peculiar knowledge | "Not known and not admitted." |
| Deny | False facts and all legal conclusions | "Denied." |

- Address each sub-part of compound averments individually, Close: "All averments not expressly admitted are denied." (CPR 16.5 / Rules of Court)

### 3. Affirmative Defences / Grounds of Invalidity

Number separately. Plead with sufficient specification to give fair notice.

| # | Ground | Notes |
|---|---|---|
| 1 | Non-infringement | Literal and equivalents |
| 2 | Invalidity, Patents Act 1977 ss.1-3, 14, 72 | Full grounds in § 5 below |
| 3 | Lack of novelty (s.2) | Prior art anticipation |
| 4 | Obviousness (s.3) | Windsurfing/Pozzoli test |
| 5 | Insufficiency (s.14(3) / s.72(1)(c)) | Claim not enabled across full scope |
| 6 | Added matter (s.76) | If amendment post-filing |
| 7 | Entitlement (s.7) | Person other than applicant entitled |
| 8 | Prior use / common general knowledge | S.2(2) / s.3 context |
| 9 | Revocation counterclaim (s.72) | Always include where invalidity pled |

### 4. Counterclaim

- Counterclaim for revocation of the patent under s.72 Patents Act 1977
- Declarator of non-infringement (if appropriate)
- State jurisdictional basis separately

### 5. Invalidity Grounds, Detailed Particulars

Each ground requires: (a) prior art identification, (b) qualification as state of the art, (c) detailed mapping.

**Reference header:** Title, author/inventor, publication date, publisher, patent/publication number, basis for inclusion in state of the art.

#### Lack of Novelty (s.2)

Map every claim limitation to a single prior art disclosure.

| Claim Limitation | Prior Art Disclosure | Analysis |
|---|---|---|
| [Preamble] | [Ref. p. X, line Y] | [Disclosure explanation] |
| [Element 1a] | [Ref. col. 3:12 to 25 or page/para] | [Mapping] |

- Patents: presumed enabling, NPL: address enablement in context of common general knowledge, State of the art includes everything made available to the public before priority date (s.2(2))

#### Obviousness (s.3)

Apply the **Windsurfing/Pozzoli** test:
1. Identify the inventive concept
2. Identify the common general knowledge of the notional skilled person (POSITA)
3. Identify differences between prior art and claim
4. Are those differences obvious without invention?

Also consider **Actavis v ICOS** (obvious to try with reasonable expectation of success) and **Conor v Angiotech** (no obviousness just because it's obvious to try).

| Claim Limitation | Primary Ref. | Secondary Ref. | Combination Rationale |
|---|---|---|---|
| [Element 1a] | Ref. A | - | Taught by A alone |
| [Element 1b] | - | Ref. B | POSITA would combine: [motivation] |

**Rebuttal considerations:** commercial success (must flow from the invention), long-felt want, unexpected technical effect, prejudice in the art.

#### Insufficiency (s.14(3) / s.72(1)(c))

| Ground | Test | Identify |
|---|---|---|
| Classical insufficiency | Claim enables across full scope (Biogen v Medeva) | Functional claims broader than any described embodiment |
| Agrevo obviousness | Claimed breadth vs technical contribution | Mapped to common general knowledge |
| Plausibility (Warner-Lambert v Generics) | Spec must plausibly show efficacy | Where spec speculative |

#### Excluded subject matter (s.1(2))

- Discoveries, scientific theories, mathematical methods, Computer programs "as such" (Aerotel/Macrossan test)
- Business methods, schemes, rules

### 6. Prayer for Relief

- Declarator of non-infringement, Revocation of patent (in whole or in part)
- Expenses (costs, pursuer pays defender's judicial expenses: "loser pays" rule)
- Such other relief as the court thinks fit

### 7. Signature Block

- Solicitor/Advocate name, firm, address, contact, Court of Session: signing by practising solicitor or advocate, Rules of Court require proper service on pursuer

## Guidelines

- **Completeness** - UK courts may refuse late amendments adding invalidity grounds; err toward inclusion in initial Answers
- **Applications to amend** - s.75 Patents Act 1977 allows voluntary amendment; can be proposed in counterclaim
- **Costs** - judicial expenses follow success in Scotland (loser pays); risk is real in UK litigation
- **Pre-AIA vs. AIA** - not applicable; UK uses Patents Act 1977 throughout; only EPO filing date matters
- **Internal consistency** - admitted facts in § 2 must not contradict predicates in invalidty grounds in § 5
- **Verify citations** - confirm Patents Act 1977 sections and CPR/Rules of Court provisions for the specific court [VERIFY]
- **Scope** - UK courts only; UKIPO also hears revocation (may be parallel EPO opposition)
- [SCOTS: No jury in UK/IPEC patent cases, statement of claim / initial writ format differs from US complaint]

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Replaced FRCP 8(b)/8(c)/11 with CPR Part 16 / Rules of the Court of Session (Scotland)
- Replaced 35 U.S.C. §§ 101, 102, 103, 112 with Patents Act 1977 ss.1-3, 14, 72
- Replaced Plaintiff/Pursuer terminology; Defendant → Defender, Replaced Federal Circuit → UK Supreme Court / Inner House / Court of Appeal, Replaced PLR 3-3 patent local rules with CPR Part 63 / Rules of Court Session Ch.55
- Replaced Graham v John Deere / KSR / Alice/Mayo with Windsurfing/Pozzoli / Actavis v ICOS / Conor / Aerotel, Removed jury demand (not available in UK patent cases)
- Replaced "costs" with "judicial expenses"
- Added revocation counterclaim under s.72 PA 1977 as primary vehicle, Added added matter under s.76 PA 1977
- Removed inequitable conduct (not a UK doctrine) - replace with entitlement challenges, Removed FRCP 8(b)(5) "lack of knowledge" - replaced with "not known and not admitted"
- Adjusted statute of limitations: no 6-year US bar; UK limitation is 6 years from accrual but subject to different rules

**Key Scottish/UK considerations:**
- Scotland: patent actions commence by Initial Writ in the Outer House, Court of Session (or Sheriff Court IP track)
- England/Wales: Patent Claims via CPR Part 63 in Patents Court or IPEC, UKIPO also hears revocation proceedings, a parallel track to court, No treble damages; no enhanced damages for willful infringement, Loser pays judicial expenses (not US "each side bears own costs")
- Pre-action disclosure protocol available but narrower than US discovery, EPO opposition possible alongside UK proceedings, stay of UK proceedings common

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
