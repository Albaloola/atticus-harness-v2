---
name: interconnection-agreement
language: en
description: Drafts UK telecommunications Interconnection Agreements under the Communications Act 2003 and Ofcom regulation, covering POIs, traffic classification, interconnection charges, LLU, NGN interconnect, number portability, emergency services, signaling, and dispute resolution. [SCOTS] Use when drafting or revising an ICA, negotiating interconnection terms, defining POI/transport arrangements, structuring fixed/mobile or VoIP interconnection, or preparing regulatory submissions to Ofcom. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, contract, telecommunications, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Interconnection Agreement (UK)

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

Drafts a complete ICA suitable for execution under the Communications Act 2003 framework and Ofcom regulatory oversight.

**Important note**: This is an adaptation of a US-style ICA for UK operations. UK telecommunications regulation differs significantly from the US regime, see the Scotland/UK Adaptation section below for the full mapping.

## Quick Start

Gather before drafting:

1. **Parties** - Legal names, entity types, company registration numbers, carrier classification (PSTN/ISDN/CPS/Cable/MNO/VoIP/LLU)
2. **Scope** - Geographic coverage, traffic types, desired POIs, interconnection method (direct/indirect), anticipated volumes
3. **Technical** - Switch locations, interface standards, signaling (SS7/SIP/IP), number porting, emergency call handling (999/112)
4. **Commercial** - Charge elements, billing format, payment terms, existing interconnect agreements
5. **Regulatory** - Notification obligations under Communications Act 2003, any Ofcom dispute history or directions

## Agreement Structure

| Section | Content |
|---|---|
| Title + Effective Date | Agreement name; execution/approval effective date clause |
| Parties + Recitals | Legal names, carrier types, registration numbers, statutory basis (Communications Act 2003, ss. 73-76) [VERIFY correct sections for interconnect obligations] |
| Definitions | See Key Definitions below |
| Interconnection | POI details, transport/trunking, technical specs, signaling, testing |
| Traffic Classification | PSTN, ISDN, mobile, VoIP, data, definitions and charging treatment |
| Numbering + Databases | Number porting procedures (porting code), CLI/CNAM, routing, database access |
| Emergency Services | 999/112 routing, ANI/EAL responsibilities, priority handling |
| Performance | KPIs, thresholds, service level commitments, remediation |
| Charges + Billing | Charge tables, invoices, records, audits, disputes |
| Term + Termination | Initial term, renewal, termination for cause/convenience, transition |
| Dispute Resolution | Tiered process, regulatory vs commercial paths |
| Regulatory Compliance | Communications Act 2003, Ofcom directions, change-in-law |
| Standard Terms | Confidentiality, indemnity, liability limits, force majeure, notices, assignment |
| Signatures | Authorised signatories, company seals (if applicable) |

## Key Definitions

Define each term precisely:

| Term | Requirements |
|---|---|
| Point of Interconnection (POI) | Physical address, logical demarcation, meet-point vs local exchange, interface standard (E-1/E-3/STM-x/Ethernet) |
| Local Exchange | BT exchange location; distinguish from trunk (tandem) exchanges |
| Local Traffic / Geographic Calls | Origination/termination within same geographic number range; cite Ofcom definitions |
| National / Fixed-to-Fixed | Calls between geographic numbers; transit arrangements |
| Mobile Traffic | MNO-originated/terminated; mobile call termination rates (MCTR) |
| VoIP Traffic | IP-originated voice; classification under Ofcom framework |
| Partial Private Circuit (PPC) / Wholesale Line Rental (WLR) | BT regulated services |
| LLU (Local Loop Unbundling) | Access to BT's copper/fibre local loop |
| NGN / SIP Trunking | Next-generation interconnection; SIP profile + signalling |
| Busy Hour / Erlangs / EPL / APS | Measurement and apportionment terms |
| Interconnect Charge | Charging methodology; parity vs cost orientation |

## Technical Specs Checklist

- [ ] POI inventory: exchange address, floor/bay, equipment IDs
- [ ] Trunking: E-1/STM-1, one-way/two-way, initial capacity, augmentation thresholds
- [ ] Signaling: SS7 (ISUP) point codes or SIP profile
- [ ] Testing: industry protocols (NGN-ITS), acceptance criteria
- [ ] Forecasts: cadence and format for traffic projections
- [ ] Performance reporting: KPIs and service level commitments

## Charge and Billing Tables

Populate charge schedules:

**A. Call Termination Rates** - Traffic type, charge/minute, time-of-day variation, regulatory cap reference

**B. Interconnection / Transit / Conveyance** - Element (PPC, LLU, WLR), NRC, MRC, order interval

**C. Number Portability** - Porting charges per number, per block, per donor/recipient

Billing workflow: specify invoice timing/format (EDIFACT/CSV/PDF), records retention and audit rights, dispute window, and undisputed-amount payment terms.

## Dispute Resolution Ladder

| Stage | Timeframe | Scope |
|---|---|---|
| Operational Negotiation | X business days | Technical/billing issues |
| Executive Escalation | X days | Unresolved operational disputes |
| Mediation | X days | Non-binding commercial disputes |
| Ofcom Reference | As needed | Regulatory compliance, market power issues |
| Court / Arbitration | Final step | Purely commercial contract disputes |

## Regulatory Filing

- Notification to Ofcom: required only where one party has Significant Market Power (SMP) - Communications Act 2003, s. 78 [VERIFY applicable section]
- Effective date: execution vs mutual connectivity, Ofcom dispute: amendment process and interim performance obligations

## Pitfalls and Checks

- Never invent charges, POIs, or regulatory status, use placeholders if missing, Tie traffic classification to Ofcom's definitions and regulatory caps (e.g., MCTR, fixed termination rate caps)
- Cite UK regulatory framework: Communications Act 2003 s. 73 (general duty to negotiate), s. 78 (SMP obligations), s. 79 (dispute resolution) [VERIFY correct sections]
- Include "continue to perform" during disputes to prevent service disruption, Add UK-specific annex for known Ofcom guidance; otherwise include a general non-preemption clause, Use defined terms consistently; verify all internal cross-references, Move POIs, technical specs, and charge tables to exhibits when the agreement exceeds 10 pages

## Scotland/UK Adaptation

### Terminology Changes

| US Term | UK Equivalent |
|---------|---------------|
| FCC | Ofcom (Office of Communications) |
| 47 U.S.C. §§ 251-252 | Communications Act 2003, ss. 73-83 |
| 47 C.F.R. Part 51 | Ofcom SMP conditions, General Conditions of Entitlement |
| ILEC / CLEC | BT (SMP-only) / Other Comms Provider (OCP/CPS/Cable/MNO) |
| FRN | Company Registration Number + Provider Reference under Ofcom |
| State PUC | Ofcom (national regulator, no state-level equivalent in UK) |
| LATA / IntraLATA / InterLATA | Geographic number ranges (01/02 geographic; 07 mobile; 03 non-geographic) |
| Reciprocal Compensation | Interconnection / call termination rates (regulatory-capped for SMP operators) |
| Access Charges | BT interconnect charges (PPC, LLU, WLR, leased lines) |
| NPAC (Number Portability Admin) | UK Number Portability, porting code process administered by industry group |
| 911 | 999 / 112 (dual emergency numbers) |
| E911 with ANI/ALI | EISEC (Emergency Interconnection - 999/112 routing) |
| NANP numbering | UK National Numbering Scheme (Ofcom-managed) |
| UNEs (Unbundled Network Elements) | LLU (Local Loop Unbundling) - LLU regulations under Communications Act 2003 |
| DS-1 / DS-3 / OC-x | E-1 / E-3 / STM-x (European digital hierarchy) |
| NPA-NXX | UK STD code + subscriber number (Ofcom numbering) |
| Busy Hour / CCS | Erlang measurement / BHCA |

### Key Differences from US ICA

| Aspect | US Regime | UK Regime |
|--------|-----------|-----------|
| Regulator | FCC + 50 state PUCs | Single regulator: Ofcom |
| SMP regulation | All carriers (general duty to interconnect under § 251) | Only operators with Significant Market Power (SMP) designated by Ofcom |
| Pricing | TELRIC cost basis (FCC-computed) | Cost orientation for SMP operators; Ofcom sets charge controls (e.g., MCTR, FTCO) |
| Wholesale products | UNEs | PPC, LLU, WLR (BT-specific products) |
| Number porting | NPAC/LERG | Porting code system; administration by industry steering group |
| Emergency services | PSAPs, E911 Act | EISEC under Communications Act 2003, s. 161 |
| Regulated rate phase | Direct FCC rate setting through rulemaking | Ofcom market reviews (every 3-5 years) specify charge controls |
| Intra-UK vs international | Interstate vs intrastate | UK domestic vs international (Ofcom regulates only the UK) |
| Arbitration | State commission § 252 arbitration | Ofcom dispute resolution under Communications Act 2003, s. 185-187 |

### Scotland-Specific Considerations

- **No devolved telecom regulation**: Telecommunications is a reserved matter under the Scotland Act 1998 (Schedule 5, Head L2). Ofcom is the sole regulator for the whole UK.
- **Sheriff Court jurisdiction?**: UK telecom interconnection agreements typically select English law and the courts of England & Wales. If Scottish parties are involved, parties may agree Scots law and the Scottish courts. [SCOTS: Flag this with the client, telecom ICAs rarely use Scots law by default and Ofcom does not treat Scotland separately.]
- **Licences and notifications**: Operators providing a Public Electronic Communications Network (PECN) or Service (PECS) must notify Ofcom under the Communications Act 2003. This is a UK-wide requirement.

### Statute References

- **Communications Act 2003**, Part 2 (electronic communications networks and services) - the primary UK framework
- **Wireless Telegraphy Act 2006** - spectrum management (where relevant)
- **Electronic Communications (Universal Service) Order 2003** - USO obligations
- **General Conditions of Entitlement** - Ofcom-set conditions for all electronic communications providers
- **PECN/PECS notification**: Section 33, Communications Act 2003
- **Dispute resolution**: Sections 185-187, Communications Act 2003

### Charge Levels (GBP Guidance)

- **Mobile call termination (MCTR)**: Ofcom-capped at approximately 0.4-0.5 pence per minute (2025ish figure - [VERIFY current cap])
- **Fixed termination**: Capped by Ofcom at 0.04-0.07 pence per minute (rate varies by size of operator)
- **PPC rentals**: £50-£100 per month per circuit (BT pricing subject to charge controls)
- **LLU rental**: Approximately £50-£70 per line per year (copper); fibre products priced separately

[SCOTS: Note, UK telecoms interconnection is a highly regulated area. This adaptation replaces the FCC/state PUC framework with Ofcom/UK Parliament regulation. The UK has no state-level component, and LATAs/NPA-NXX do not apply, use UK geographic numbering instead. [VERIFY] current Ofcom charge controls and SMP designations, as these change after each market review cycle.]

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
