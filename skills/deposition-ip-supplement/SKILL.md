---
name: deposition-ip-supplement
language: en
description: Provides IP-specific deposition examination frameworks for patent, trademark, copyright, and trade secret cases. Covers inventor, infringer, licensing, and expert witnesses with question maps for claim construction, prior art, willfulness, Georgia-Pacific factors, likelihood of confusion, and trade secret identification. Use when preparing IP litigation depositions alongside @deposition-preparation and @deposition-expert-witness. [Atticus UK/Scots refined]
tags:
- SCOTS, litigation, intellectual-property, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# IP Litigation Deposition Supplement

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

IP-specific examination strategies for patent, trademark, copyright, and trade secret depositions. Supplements `@deposition-preparation` as the primary framework.

## Quick Start

1. Activate `@deposition-preparation` as primary framework
2. Gather: IP registrations, prosecution history, claim construction order, licensing history, expert reports
3. Identify case type below and select relevant witness frameworks
4. For expert depositions, also apply `@deposition-expert-witness`

## Case Types

| Type | Key Issues | Key Witnesses |
|------|-----------|---------------|
| **Patent** | Claim construction, infringement (literal/DOE), validity, willfulness, damages | Inventors, R&D/engineering, licensing, technical/damages experts |
| **Trademark** | Distinctiveness, priority, likelihood of confusion, willfulness, damages | Mark owner, marketing, survey experts, damages expert |
| **Copyright** | Ownership, originality, access, substantial similarity, fair use, damages | Authors, access witnesses, similarity/damages experts |
| **Trade Secret** | Existence, reasonable secrecy measures, misappropriation, damages | Secret owners, accused misappropriators, security, damages expert |

## Examination Frameworks

### Patent, Inventor

| Topic | Key Questions |
|-------|--------------|
| Conception | First conception date; problem solved; contemporaneous records; who was told |
| Reduction to practice | Date; testing/prototyping; corroborating documentation |
| Prior art knowledge | Known prior art; searches conducted; how invention differs from [specific ref] |
| Claims | Understanding of claim scope; meaning of [disputed term]; relationship to accused product |
| Prosecution | Involvement; review of office actions; reasons for amendments |

### Patent, Accused Infringer Technical Witness

| Topic | Key Questions |
|-------|--------------|
| Product/process | How [accused product] works; key components; development timeline |
| Design process | Alternatives considered; why this approach; patent awareness; design-around efforts |
| Claim mapping | Presence of [claim element]; how product performs [claim function] |
| Non-infringement | Which limitation not met; how product differs from claims |
| Prior art | Prior products/publications before patent priority date |

### Patent, Licensing/Damages Witness

| Topic | Key Questions |
|-------|--------------|
| Licensing history | Existing licenses; royalty rates; negotiation process; comparables |
| Commercial success | Sales figures; success attributable to patented feature |
| Market | Competitors; non-infringing alternatives; market share impact |
| Hypothetical negotiation | Pre-infringement terms; Georgia-Pacific factors; royalty rate and base |

### Patent, Technical Expert

Apply `@deposition-expert-witness` plus:

- **Claim construction**: Basis for construing [disputed term]; prosecution history; specification support
- **Infringement**: Element-by-element walkthrough; physical exam of accused product; source code review (software)
- **Validity**: Prior art considered; whether [reference] discloses [element]; PHOSITA motivation to combine

### Patent, Damages Expert

| Topic | Key Questions |
|-------|--------------|
| Reasonable royalty | Methodology; Georgia-Pacific factors applied; comparable licenses; royalty base |
| Lost profits | "But for" world; manufacturing capacity; non-infringing alternatives; market share methodology |
| Apportionment | Method for isolating patented feature value; consumer demand driver analysis |

### Trademark, Mark Owner

| Topic | Key Questions |
|-------|--------------|
| Creation/adoption | When/who created; why chosen; first use in commerce |
| Distinctiveness | Inherent or acquired secondary meaning; consumer recognition; advertising investment |
| Confusion | Awareness of defendant's mark; actual confusion incidents; similarity; relatedness of goods |
| Damages | Lost sales; goodwill damage; costs addressing confusion |

### Trademark, Accused Infringer

| Topic | Key Questions |
|-------|--------------|
| Adoption | When/who decided to use mark; prior search; awareness of plaintiff's mark |
| Intent | Intent to trade on goodwill; legal advice; good/bad faith indicators |
| Confusion | Known confusion incidents; misdirected customers/orders |
| Market | How customers find and distinguish products |

### Trade Secret, Owner

| Topic | Key Questions |
|-------|--------------|
| Identification | Specific description; what makes it secret; development date and team |
| Secrecy measures | Physical/electronic security; NDAs; need-to-know restrictions; training |
| Value | Development investment; competitive advantage; cost of independent development |
| Misappropriation | How defendant acquired secret; evidence; timing |

### Trade Secret, Accused Misappropriator

| Topic | Key Questions |
|-------|--------------|
| Relationship | Nature of relationship; access; agreements signed; understood obligations |
| Accused information | Awareness of trade secret; how obtained; independent development evidence |
| Use/disclosure | Use of information; third-party disclosure; relation to accused product |
| Notice | Knowledge of confidentiality; steps taken regarding obligations |

## Document Focus Areas

| Document | Topics |
|----------|--------|
| Prosecution file | Amendments, arguments, prior art, rejections |
| Invention records | Lab notebooks, conception/RTP dates, corroboration |
| Licensing agreements | Terms, comparability, negotiation history |
| Design/technical docs | Development process, alternatives, product operation |
| Marketing materials | Features emphasized, performance claims |
| Confidentiality agreements | Scope, obligations, signatories |
| Source code | Software patents, trade secret cases |
| Financial records | Damages calculation support |

## Preparation Checklist

- [ ] Review patents/registrations/trade secret identification
- [ ] Review prosecution history and file wrapper (patent)
- [ ] Map disputed claim terms and proposed constructions (patent)
- [ ] Prepare claim element mapping chart (patent)
- [ ] Identify prior art references and gaps (patent/copyright)
- [ ] Understand accused product/process technical operation
- [ ] Review licensing agreements and comparables
- [ ] Prepare likelihood of confusion analysis (trademark, DuPont)
- [ ] Review confidentiality agreements and secrecy measures (trade secret)
- [ ] Understand damages theory and expert methodology
- [ ] Review expert reports, apply `@deposition-expert-witness`

## Pitfalls

- Pin claim constructions before deposing technical witnesses, questions must track operative constructions, Lock inventors to specific conception/RTP dates with corroborating documents, Force precise trade secret identification before substantive questions, vague descriptions create indefiniteness defenses, Prosecution history estoppel: lock infringers into positions foreclosing DOE arguments, Cover all 15 Georgia-Pacific factors with damages witnesses; gaps invite Daubert challenge, Willfulness (§ 284): pre-suit patent knowledge required, establish/negate knowledge timeline, DTSA vs. state UTSA: confirm governing law; definitions and preemption scope vary, Copyright fair use: explore each of four factors independently with relevant witnesses

## References

- 35 U.S.C. §§ 101 to 287 (Patent Act)
- 15 U.S.C. §§ 1051 to 1141 (Lanham Act)
- 17 U.S.C. §§ 101 to 810 (Copyright Act)
- 18 U.S.C. §§ 1836 to 1839 (DTSA)
- *Georgia-Pacific v. U.S. Plywood*, 318 F. Supp. 1116 (S.D.N.Y. 1970)
- *Markman v. Westview Instruments*, 517 U.S. 370 (1996)
- *Halo Electronics v. Pulse Electronics*, 579 U.S. 93 (2016)

## Scotland/UK Adaptation

This skill is drafted for US IP litigation depositions under the Patent Act, Lanham Act, Copyright Act, and DTSA. For Scottish / UK IP litigation, the underlying IP law differs and **depositions are not available** in Scottish civil procedure.

### IP Law Framework

| US IP Law | UK/Scottish Equivalent |
|---|---|
| 35 U.S.C. §§ 101 to 287 (Patent Act) | **Patents Act 1977** (UK-wide) - as amended |
| 15 U.S.C. §§ 1051 to 1141 (Lanham Act) | **Trade Marks Act 1994** (UK-wide) |
| 17 U.S.C. §§ 101 to 810 (Copyright Act) | **Copyright, Designs and Patents Act 1988 (CDPA)** |
| 18 U.S.C. §§ 1836 to 1839 (DTSA, trade secrets) | **Trade Secrets (Enforcement, etc.) Regulations 2016** (SI 2016/188) implementing the EU Trade Secrets Directive (retained as UK law) |
| 35 U.S.C. § 284 (willful infringement damages) | **No automatic enhancement** for willful infringement in UK. Damages are compensatory, not punitive. |
| Doctrine of equivalents | **Not applicable** in UK patent law. The UK uses "purposive construction" per *Improver* / *Catnic* / *Actavis* |
| Markman hearing (claim construction) | **No separate Markman hearing** in UK. Claim construction is determined by the Patents Court or IPEC at trial or on a preliminary issue. |

### Scottish Procedure for IP Cases

| US Discovery Tool | Scotland/UK Equivalent |
|---|---|
| Deposition (30(b)(6), expert, inventor) | **Not available in Scotland.** Evidence is led at Proof hearing. |
| Interrogatories | Available (RCS Chapter 38) but rarely used in IP cases |
| Document requests | **Commission and diligence for recovery of documents** - the primary method for obtaining documents in Scotland |
| Expert discovery / expert reports | Expert reports are exchanged before trial per court directions |
| Claim construction deposition | No deposition. Claim construction is argued at the substantive hearing |
| Prior art interrogation at deposition | Prior art is put to witnesses through cross-examination at trial (Proof) |

### Key UK IP Concepts to Substitute

| US Concept | UK Equivalent |
|---|---|
| Claim construction / Markman | **Purposive construction** per *Catnic Components Ltd v Hill & Smith Ltd* [1982] RPC 183 and *Actavis UK Ltd v Eli Lilly & Co* [2017] UKSC 48 - different from US claim construction methodology |
| Doctrine of equivalents | UK does not apply DOE. Instead, the *Actavis* framework asks whether the variant achieves substantially the same result in substantially the same way. |
| Willful infringement / enhanced damages | UK has **no enhanced damages** for patent infringement. Damages are compensatory only (account of profits available as an alternative). |
| Patent infringement | Infringement of a UK patent under Patents Act 1977 s 60 - direct, contributory, and indirect. |
| Trademark infringement (likelihood of confusion) | **Trade Marks Act 1994 s 10** - tests of confusion similar to US but with different case law. The *Specsavers* and *Jif Lemon* tests apply. |
| Copyright / substantial similarity | **Copyright, Designs and Patents Act 1988 s 16** - copying of a substantial part. No US-style fair use. UK has **fair dealing** (research, private study, criticism/review, news reporting, quotation). |
| Trade secrets / misappropriation | **Trade Secrets Regulations 2016** - definitions aligned with the EU Directive. Unlawful acquisition, use, and disclosure. |

### Key Practitioner Differences
1. **No depositions in Scotland.** The IP deposition frameworks in this skill (inventor, technical witness, expert, etc.) are designed for US pre-trial practice. In Scotland, all examination happens at the Proof hearing.
2. Separate Scottish IP court: the **Court of Session (Outer House)** hears most patent and IP cases originating in Scotland. The UK Patents Court (England & Wales) has separate jurisdiction.
3. Scottish IP litigation uses **commission and diligence** for document recovery, not US-style discovery. No deposition practice.
4. The **United Kingdom Intellectual Property Office (UK IPO)** handles registration (patents, UK trade marks, designs) - not the USPTO.
5. **No enhanced damages** for willful infringement, this significantly affects the strategic dynamics of IP litigation.
6. **No Markman hearing** - claim construction happens at trial or on determination of a preliminary issue.
7. IP litigation in Scotland is rarer than in England & Wales. Many UK-wide IP disputes are heard in the High Court (England) or Patents Court, but Scotland retains its own jurisdiction.

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
