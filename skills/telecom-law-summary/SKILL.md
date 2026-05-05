---
name: telecom-law-summary
language: en
description: Generates executive-level summaries of recent UK telecommunications law developments covering spectrum rights, network access, privacy, infrastructure, and enforcement. Structures analysis by topic with compliance deadlines and business impact. Use when briefing counsel, regulatory teams, or executives on Ofcom consultations/statements, UK net neutrality, PECR/UK GDPR, 5G deployment, nuisance calls enforcement, or the broader UK telecom legal landscape. [Atticus UK/Scots refined]
tags:
- analysis, litigation, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Telecommunications Law Summary (UK/Scotland Adaptation)

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

Produces a structured executive briefing on recent UK telecom law developments, organised by topic with business impact analysis and compliance requirements. Replaces FCC-focused analysis with UK regulatory framework (Ofcom, DSIT, Communications Act 2003, Wireless Telegraphy Act 2006).

---

## Gather Before Starting

1. **Time scope** - period to cover (e.g., last quarter, YTD)
2. **Provider type** - wireline, wireless, cable, satellite, VoIP, or all
3. **Priority topics** - spectrum, privacy, infrastructure, etc., or cover all
4. **Audience** - in-house counsel, regulatory affairs, C-suite, or mixed
5. **Jurisdiction** - UK (Ofcom regulates UK-wide) vs. specific devolved considerations (Scotland, Wales, NI)

---

## Document Structure

| Section | Content |
|---------|---------|
| Executive Overview | Top developments + strategic implications (1 page) |
| Spectrum & Licensing | Ofcom spectrum management, auctions, shared access, Wireless Telegraphy Act 2006, licence conditions, build-out obligations |
| Network Access & Interconnection | Net neutrality (UK approach), Electronic Communications Code, interconnection rates, SMP conditions, access obligations |
| Privacy & Data Protection | PECR (Privacy and Electronic Communications Regulations), UK GDPR, breach notification, cookie rules, direct marketing |
| Infrastructure & Deployment | 5G and mmWave, fibre/alt-net, Digital Connectivity Infrastructure (Leasehold Property) Bill, DSIT strategy |
| Consumer Protection & Enforcement | Nuisance calls, Ofcom enforcement, ICO enforcement, Competition Act 1998 / CMA, Trading Standards |
| Security & Resilience | Telecoms Security Act 2022, Telecommunications Security Code of Practice, network resilience, Huawei/China equipment |
| Cross-Regulatory Issues | M&A/CMA merger review, national security (NSIA 2021), Digital Markets, Competition and Consumers Bill, equipment procurement |
| Compliance Calendar | Ofcom consultation deadlines, licence conditions, regulatory reporting dates |

---

## Per-Development Analysis

For each development within a section:

- [ ] What changed from prior legal framework
- [ ] Which provider types are affected
- [ ] Required compliance actions or business adjustments
- [ ] Implementation timeline
- [ ] Pending legal challenge, JR, or CMA referral that could modify the outcome

Order developments by **business impact**, not chronologically.

[SCOTS: Note] Scotland-specific considerations:
- The Electronic Communications Code applies across the UK, but Scottish land law (heritable property, wayleaves, servitudes) affects infrastructure deployment in Scotland, The Scottish Government's Digital Directorate (DSIT counterpart in devolved matters) has its own connectivity strategy (e.g., R100 programme)
- Planning law for telecom infrastructure is devolved, Scottish planning regulations apply, Mobile coverage in rural Scotland (Highlands, Islands) is a distinct policy area

---

## Forward-Looking Analysis (per section)

- Ofcom consultations and statements underway, Pending primary/secondary legislation (DSIT bills, Statutory Instruments)
- Legal uncertainty areas (conflicting Ofcom decisions, JR challenges, regulatory gaps)
- Industry requests for clarification or reform (e.g., industry codes of practice, technical standards)

---

## Citations

| Source Type | Required Elements |
|-------------|-------------------|
| Ofcom Orders/Statements | Document title, publication date, consultation/statement number |
| Court Decisions | Case name, court, date, neutral citation (e.g., [2024] EWCA Civ 123) |
| Statutes/Regulations | Title, section, commencement date if recent |
| Pending Proceedings | DSIT/Ofcom consultation, expected implementation timeline |
| EU/International | BEREC decisions, EU Digital Decade targets (post-Brexit influence) |

Mark unverified citations with `[VERIFY]`.

---

## Scotland/UK Adaptation Notes

- **FCC → Ofcom**: Ofcom is the UK's communications regulator, regulating under the Communications Act 2003 and Wireless Telegraphy Act 2006. Ofcom regulates the whole UK including Scotland.
- **FCC rulemakings → Ofcom consultations/statements**: Ofcom issues consultations, statements, and general conditions of entitlement. There is no direct equivalent to FCC Notice of Proposed Rulemaking.
- **Spectrum → Ofcom spectrum management**: Under the Wireless Telegraphy Act 2006, Ofcom manages spectrum via licensing, auctions, and spectrum trading. Key UK bands: 700 MHz, 3.4-3.8 GHz (5G), 26 GHz (mmWave).
- **Net neutrality → UK approach**: Ofcom's approach is lighter-touch than the FCC's. The UK's Open Internet Access Code (based on EU BEREC guidelines, retained post-Brexit) imposes broad internet access obligations on ISPs.
- **CPNI → PECR / UK GDPR**: The Privacy and Electronic Communications (EC Directive) Regulations 2003 (PECR) govern electronic communications privacy. UK GDPR (Data Protection Act 2018) governs broader data protection. Ofcom and ICO share enforcement.
- **Robocall → Ofcom nuisance calls action plan / ICO enforcement**: Ofcom works with ICO on nuisance call enforcement. UK has specific rules on automated calling systems, silent calls, and caller line identification.
- **FTC/state AG → Ofcom / CMA / Trading Standards**: Competition enforcement is by the Competition and Markets Authority (CMA) under the Competition Act 1998 / Enterprise Act 2002. Trading Standards enforce consumer protection.
- **Pole attachments → Electronic Communications Code (Schedule 3A, Communications Act 2003)**: The Code grants operators rights to install and maintain infrastructure on public and private land. Wayleaves are the standard consent mechanism. Scottish land law (servitudes) may apply.
- **Common carrier → UK regulatory classification**: UK uses Significant Market Power (SMP) and non-SMP classification under the Communications Act 2003 (influenced by EU regulatory framework). No common carrier concept.
- **Antitrust → Competition Act 1998 / Enterprise Act 2002 / CMA**: Chapter I and II prohibitions (equivalent to Articles 101/102 TFEU). CMA has concurrent powers with Ofcom in communications markets.
- **Communications Act 2003**: The primary UK statute for electronic communications regulation.
- **Wireless Telegraphy Act 2006**: Governs spectrum use, licensing, and enforcement.
- **Telecoms Security Act 2022**: Introduced new security duties on providers under the Telecommunications Security Code of Practice. Ofcom is the enforcement body.
- **Product Security and Telecommunications Infrastructure Act 2022**: Amended the Electronic Communications Code; introduced security requirements for consumer IoT devices.
- **DSIT (Department for Science, Innovation and Technology)**: The UK government department responsible for telecommunications policy (previously DCMS).
- **5G and mmWave**: UK 5G strategy led by DSIT. Spectrum at 26 GHz (mmWave) allocated for 5G. Shared Access Licence (SAL) framework for local use.
- **UK spectrum auctions**: Ofcom runs auctions for mobile spectrum bands. Recent awards: 700 MHz, 3.6-3.8 GHz. The Shared Access Licence framework opened spectrum for local/private networks.
- **NSIA 2021**: National Security and Investment Act 2021 gives the UK government power to review/screen telecom M&A and equipment procurement on national security grounds (e.g., Huawei/ZTE restrictions).

---

## Pitfalls and Checks

- Distinguish Ofcom regulations (UK-wide) from devolved matters (Scotland-specific digital policy, planning law)
- Note the post-Brexit divergence risk, UK may move away from EU-derived framework in some areas, Identify both **legal risks** and **business opportunities** from regulatory changes, Maintain neutral analytical posture, do not editorialise on policy merits, When developments are contested or under judicial review, present both sides and current procedural posture, Target 8-15 pages; do not pad, Write for dual audience: legally precise but accessible to business readers
- **No invented Ofcom regulation/docket numbers or case law** - every citation must be verified

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
