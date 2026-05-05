---
name: patent-infringement-complaint
language: en
description: Drafts a patent infringement action for the Court of Session in Scotland and the Patents County Court / High Court in England, under the Patents Act 1977 and Rules of the Court of Session. Covers direct infringement (s. 60(1)), contributory infringement (s. 60(2)), and threats actions (s. 70). Use when initiating patent infringement litigation in Scotland, drafting an IP summons, or preparing commercial action pleadings. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Patent Infringement Action, Scotland (Court of Session) / UK

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

Drafts a litigation-ready patent infringement summons for the Court of Session in Scotland or the Patents Court (High Court, England) or Patents County Court, structured to satisfy pleading requirements under the Rules of the Court of Session (RCS) or Civil Procedure Rules (CPR) and preserve all remedies under the Patents Act 1977.

## Prerequisites

Gather before drafting:

- **Patent documents** - UK patent number, priority/filing/grant dates, proprietor, inventor(s), asserted claim language, prosecution history, any opposition or revocation proceedings at the UK IPO (or the EPO for European Patents (UK))
- **Accused product evidence** - product names, model numbers, specifications, marketing materials, sales/distribution data for the UK market (including Scotland)
- **Ownership chain** - assignment records (registered at UK IPO), security interests, any exclusive licence affecting standing (Patents Act 1977, s. 61(1))
- **Venue facts** - defendant's registered office (sheriffdom for Scotland), place of business in Scotland, trading address 
- **Pre-suit notice** - letters before action (Practice Direction, Patents etc.), licensing negotiations, defendant's knowledge of the patent
- **Party records** - exact legal names, entity types (Ltd, PLC, LLP), registered number (Companies House), registered office

**Jurisdictional choice**: Scotland → Court of Session (Outer House, Commercial Court) using RCS Chapter 55 (Commercial Actions); England → Patents Court (High Court, Chancery Division) or Patents County Court (s. 62 County Courts Act 1984 - lower value claims)

## Complaint Structure

### 1. Instance / Heading

Court of Session (Outer House), Commercial Court; or Sheriffdom of [Lothian and Borders] at Edinburgh. Names of parties (pursuer(s) and defender(s)). Court reference number.

### 2. Jurisdiction and Venue, Scotland

| Allegation | Basis | Key Facts |
|---|---|---|
| Subject matter jurisdiction | Patents Act 1977, s. 61; Courts Reform (Scotland) Act 2014 | Court of Session has exclusive jurisdiction for patent validity (s. 72); patent infringement actions proceed in the Outer House |
| Venue, Scotland | Civil Jurisdiction and Judgments Order 2001 (SI 2001/3929); Court of Session Act 1988 | Defender domiciled in Scotland or has a place of business in Scotland; or infringement occurred in Scotland |
| Intra-UK jurisdiction | Civil Jurisdiction and Judgments Order 2001 | Patent actions fall within the exclusive jurisdiction of the relevant court for the part of the UK where the act of infringement occurred |

**Note on s. 61**: The Court of Session in Scotland has the same power to grant remedies for patent infringement as the High Court in England and Wales (Patents Act 1977, s. 61(2)-(5)). For patents that have been litigated before the Unified Patent Court under the UPC Agreement, transitional provisions apply, but the UK is not a UPCA member.

### 3. Parties

**Pursuer**: Legal name, registered office (if company), whether proprietor of the patent (or exclusive licensee with rights to sue under s. 61(1)). Chain of title if not original proprietor.

**Each Defender**: Legal name, company registration number, registered office, principal place of business (Scottish or UK address), trading activities in Scotland.

### 4. Patent and Factual Background

- Patent-in-suit: title, UK Patent No., priority/filing/grant dates, proprietor, Technical field: problem solved, prior art, nature of the invention (lay-accessible description)
- Post-grant proceedings: any UK IPO opposition, revocation, or EPO opposition, Pursuer's activities: commercialisation, licensing, market activities in the UK, Defender's accused activities: timeline, scope, UK-wide activities (esp. Scotland), revenue

### 5. Infringement Counts

**Count I, Direct Infringement (Patents Act 1977, s. 60(1))**

s. 60(1)(a) - where the invention is a product: making, disposing of, offering to dispose of, using, importing, or keeping the product (including stocking it, whether for disposal or otherwise).
s. 60(1)(b) - where the invention is a process: using the process; or offering it for use knowing (or where it would be obvious to a reasonable person) that its use would infringe.
s. 60(1)(c) - where the invention is a process: disposing of, offering to dispose of, using, importing, or keeping any product obtained directly by means of that process.

For each asserted claim:
- Identify claim number and what it covers, Map each claim feature/limitation to the accused product or process, citing the defender's own documents, Allege lack of consent/authorisation

**Count II, Contributory Infringement (Patents Act 1977, s. 60(2))** *(if facts support)*

- Supply (or offer to supply) a means relating to an essential element of the invention, Means are suitable for putting the invention into effect, Defence knows (or it is obvious to a reasonable person) that the means are suitable for and intended to put the invention into effect, Means are not a staple commercial product (unless defender induces infringement)

**Note**: UK patent law does not have a separate "induced infringement" section equivalent to 35 U.S.C. § 271(b). Inducement is dealt with under joint tortfeasorship / common law principles, see *Unilever plc v Chefaro Proprietaries Ltd* [1995] RPC 511. Where facts support procurement of infringement by a third party, plead the joint liability separately.

**Note on equivalent protection**: s. 60(1)(c) covers what US law would call "process patent protection" - products obtained directly by the patented process.

### 6. Validity and Defence Statements

The Pursuer may plead to the validity of the patent (to anticipate or counter the Defender's likely attack on validity):

- Patent is valid, Patent is novel (Patents Act 1977, ss. 1(1)(a), 2)
- Inventive step (ss. 1(1)(b), 3)
- Capable of industrial application (ss. 1(1)(c), 4)
- Not excluded subject matter (s. 1(2)-(3))

**Note**: If the Defender counterclaims for revocation (s. 72), validity is tried together with infringement. The Court of Session has jurisdiction to revoke a UK patent (s. 72(3)).

### 7. Willfulness / Aggravation *(if facts support)*

Unlike US law (35 U.S.C. § 284, *Halo*), UK patent law does **not** have enhanced/treble damages for willful infringement. However:

- **Additional damages**: Available under s. 62(1) Copyright, Designs and Patents Act 1988 for certain IP rights (not patents)
- **Account of profits** (s. 61(1)(d)) is an alternative to damages, may be more favourable where infringement was deliberate and profits are assessable
- **Aggravated damages** are not generally available in UK patent law
- **Injunctions** (s. 61(1)(a)) may be granted if monetary damages would be inadequate; *American Cyanamid v Ethicon* [1975] AC 396 (adequacy of damages; balance of convenience)

### 8. Remedies (Crave)

- [ ] Declaration of infringement (s. 61(1)(a) - court may make declaration)
- [ ] Interdict (injunction) (s. 61(1)(a) - Scottish/UK equivalent of injunction) restraining further infringement
- [ ] Damages or account of profits (s. 61(1)(c) or (d) - Pursuer must elect before decree)
- [ ] Delivery up / destruction of infringing articles (s. 61(1)(b))
- [ ] Expenses (costs) to be taxed (Scotland: judicial expenses follow success, loser pays)
- [ ] Interest (Judicial Interest, reserved at discretion of court; *Hodgson v Hodgson* 1990; Interest on Damages (Scotland) Act 1958)
- [ ] Any other order the court deems proper

### 9. Additional Claims (if applicable)

- **Threats action** (s. 70 Patents Act 1977): If the defender has made unjustified threats of infringement proceedings against the pursuer or a third party, the pursuer may claim (a) a declaration that the threats are unjustified; (b) interdict against further threats; (c) damages for loss caused by the threats
- **Groundless threats**: s. 70(2A) - a communication for the purpose of notification is not a threat, but threatening letters may still ground a threats action

### 10. Statement of Facts / Condescendence

Per RCS Chapter 55 (Commercial Actions):

- Statement of facts in numbered paragraphs (condescendence) followed by the pleas-in-law, Each paragraph should contain a distinct factual allegation supported by reference to the document/production where available, The condescendence must be precise enough to enable the defender to know the case they must meet and the court to determine the issues

### 11. Pleas-in-Law

Standard patent infringement pleas-in-law:

1. The defender having infringed claims [X] of the pursuer's patent (UK Patent No. X,XXX,XXX) - decree should be granted in terms of the craves
2. Separatim, The defender having known, or having had reason to know, that the said acts constituted infringement, the pursuer is entitled to damages (or an account of profits)
3. The defender's defences being irrelevant et separatim lacking in specification, the same should be repelled
4. Any additional pleas (validity, threats, etc.)

### 12. Signature Block & Service

Solicitor/advocate name, firm, address, phone, email, for service. The summons is served on the defender(s) by the court (messenger-at-arms) per RCS.

## Pitfalls

- **Scottish pleading standard**: The condescendence must set out facts, not bare conclusions. Each claim element must be mapped to an accused product feature with specific factual allegations. The *Stair Memorial Encyclopaedia* and *MacPhail on Sheriff Court Practice* provide guidance on style.
- **Validity separate from infringement**: If the defender counterclaims for revocation, the court will determine both infringement and validity. A valid patent is a prerequisite for some remedies.
- **Interim interdict (preliminary injunction)**: Available under s. 61(1)(a); *American Cyanamid v Ethicon* [1975] AC 396 test: (a) serious question to be tried; (b) adequacy of damages; (c) balance of convenience. Practically rare in patent cases due to the balance of convenience and cross-undertakings in damages.
- **Multiple patents**: Each patent asserted must be separately identified; a single action may cover multiple patents.
- **Exclusive licensee standing**: Exclusive licensee may sue only if the patent proprietor refuses or fails to do so within 2 months of being called upon per s. 61(1).
- **Threats action**: s. 70 is uniquely UK, be careful not to overreach in pre-action correspondence.
- **OSCOLA citation format**: Use OSCOLA for statutory and case references, e.g. *Patents Act 1977, s. 60(1)*; *Virgin Atlantic v Premium Aircraft* [2013] UKSC 46; (Year) RPC [page] for patent cases.
- **Court of Session rules**: RCS Chapter 55 (Commercial Actions) applies by default in the Outer House for patent cases. The court may direct the case to the Commercial Court or the Intellectual Property and Technology list.

---

## Scotland/UK Adaptation

This skill has been adapted from its original US-focused version (US District Court / FRCP / 35 U.S.C.) for use under Scots law and the Patents Act 1977.

### Key US-to-UK/Scottish Conversions

| US Term | Scottish/UK Equivalent |
|---------|----------------------|
| US District Court (federal) | Court of Session (Outer House, Scotland) or High Court / Patents County Court (England) |
| FRCP Rules 8, 10, 11, 12(b)(6) | Rules of the Court of Session (RCS) Chapter 55; or CPR Part 63 (Patents Court, England) |
| 35 U.S.C. §§ 283 to 285 | Patents Act 1977, ss. 60 to 74 (infringement, validity, remedies) |
| 35 U.S.C. § 271(a) - direct infringement | Patents Act 1977, s. 60(1) - making/disposing/using/importing/keeping |
| 35 U.S.C. § 271(b) - induced infringement | No equivalent in PA 1977 - common law joint tortfeasorship |
| 35 U.S.C. § 271(c) - contributory infringement | Patents Act 1977, s. 60(2) - supply of means essential to invention |
| USPTO | UK Intellectual Property Office (UK IPO) |
| TC Heartland (137 S. Ct. 1514 - venue) | Civil Jurisdiction and Judgments Order 2001; Court of Session Act 1988 - s. 61 actions in Scotland |
| Jury trial (FRCP 38(b)) | No jury in Scottish civil patent cases, judge-only (Outer House, commercial court) |
| Twombly/Iqbal plausibility | Relevance and specification (Scottish pleading standard, condescendence must give fair notice) |
| Treble damages (§ 284 - willfulness) | Not available, no punitive/enhanced damages in UK patent law |
| Permanent injunction (4-part eBay test) | Interdict - *American Cyanamid v Ethicon* [1975] AC 396 (serious question, adequacy of damages, balance of convenience) |
| Preliminary/TRO (temporary restraining order) | Interim interdict, same *American Cyanamid* test; cross-undertaking in damages required |
| Prejudgment interest | Judicial interest at discretion of court (Interest on Damages (Scotland) Act 1958) |
| Bluebook citation | OSCOLA (Oxford Standard for Citation of Legal Authorities) |
| FRCP 11 signature | Court of Session, solicitor/advocate signs; no FRCP 11 equivalent but professional obligations apply |
| Claim charts (per-limitation mapping) | Condescendence, factual allegations with claim limitation mapping in numbered paragraphs |
| Magistrate Judge | Cases heard before a Lord Ordinary (single Outer House judge) |
| Discovery (FRCP 26) | Commission and diligence (Scotland) under Administration of Justice (Scotland) Act 1972 |
| Deposition | Examination on commission, less common in Scottish patent practice |

### Regulatory Framework

- **Primary legislation**: Patents Act 1977 (as amended); Patents Act 2004 (implementing the European Patent Convention revisions)
- **Scottish venue**: The Court of Session in Edinburgh hears Scottish patent infringement actions. There is no Scottish "district court" equivalent, the Court of Session's Outer House is the trial court for patent litigation in Scotland.
- **The Court of Session (Outer House)**: A single Lord Ordinary (judge) hears the case in the Commercial Court or the Intellectual Property & Technology list. No jury in Scottish civil cases.
- **UK IPO**: The UK Intellectual Property Office (Newport / London) handles patent applications, grant, post-grant opposition, and revocation; appeals to the Patents Court then the Court of Appeal
- **Costs**: Scotland, judicial expenses follow success (loser pays). Costs are taxed by the Auditor of the Court of Session. Expert witness fees are recoverable (subject to limits).
- **Prescription**: The limitation period for patent infringement is 6 years (Prescription and Limitation (Scotland) Act 1973, s. 6 / Schedule 1, para. 1(bb)). This is a negative prescription, claims prescribe after 6 years from the date of infringement.

### Practitioner Notes

- Scottish patent litigation is much rarer than English, most UK patent actions proceed in the Patents Court (High Court, London). However, the Court of Session has jurisdiction and is favoured for Scotland-centric claims.
- The "letter before action" is required by Practice Direction (Patents, Intellectual Property Claims) - give at least 14 days' notice before raising proceedings, No discovery depositions in Scotland (very limited pre-action disclosure under the Administration of Justice (Scotland) Act 1972, s. 1)
- The Sheriff Court has no patent infringement jurisdiction (except for threats actions and certain assigned IP matters)
- An Unlock project (Scotland's patent litigation reform) proposed minor modernisations, verify current practice, The UK is not part of the Unified Patent Court. European Patents (UK) remain national patents subject to the PA 1977.
- Scottish solicitors with rights of audience in the Court of Session may conduct patent litigation; specialist IP solicitors/advocates are common

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
