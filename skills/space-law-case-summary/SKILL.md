---
name: space-law-case-summary
language: en
description: '[SCOTS] Generates structured summaries of space law cases involving satellite deployment, space debris, orbital conflicts, launch licensing, and international treaty disputes. Synthesizes the Outer Space Treaty, Liability Convention, Outer Space Act 1986 (as amended by Space Industry Act 2018), UK Space Agency regulations, and Ofcom/ITU spectrum coordination. Use when summarizing space law disputes, debris liability claims, orbital slot conflicts, or UK/Scottish regulatory matters. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Space Law Case Summary

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

Produces a structured summary of a space law matter for UK Space Agency, aerospace companies, satellite operators, spaceport operators, and counsel. Applies to UK launch activities including Scottish spaceports (SaxaVord, Space Hub Sutherland).

## Prerequisites

- Case materials, pleadings, agency decisions, treaty interpretations, or regulatory filings, Party identification, states, agencies, operators, launch providers, payload customers, Technical context, orbital parameters, frequency bands, debris data, or launch specs (as available)

## Quick Start

Structure every summary using these sections in order:

1. **Executive Overview** - one-page table
2. **Factual Background** - chronology and technical context
3. **Legal Framework** - applicable treaties, statutes, and soft law
4. **Legal Analysis** - IRAC for each disputed issue
5. **Emerging Issues** - flag unsettled areas
6. **Practical Implications** - operational impact and risk mitigation

## Executive Overview

| Field | Content |
|-------|---------|
| Matter | One-line description |
| Parties | Names + roles (launching state, operator, claimant) |
| Core Legal Issue | Single sentence |
| Outcome / Status | Resolved, pending, or unsettled |
| Key Takeaway | Practical implication for space operators |

## Factual Background

Cover:

- Nature of activity (launch, deployment, on-orbit ops, reentry)
- Orbital regime (LEO, MEO, GEO, cislunar, deep space)
- Technical facts bearing on legal analysis (plain language for non-engineers)
- Chronology of relevant events

## Legal Framework

### International Treaties

Identify which apply; note customary international law where treaty gaps exist.

- **Outer Space Treaty (1967)** - Art. I (freedom of exploration), II (non-appropriation), VI (state responsibility), VII (liability), IX (harmful interference)
- **Liability Convention (1972)** - Art. II (absolute liability on surface/aircraft), III (fault-based in space), V (joint launches)
- **Registration Convention (1975)** - Art. II (registry obligations), VI (identification)
- **Rescue Agreement (1968)** - astronaut return obligations
- **Moon Agreement (1979)** - Art. 11 (common heritage; note limited ratification)

Flag state responsibility under OST Art. VI for private activities.

### National Legislation (UK)

- **Outer Space Act 1986** (as amended) - licensing of UK space activities, liability and indemnity requirements
- **Space Industry Act 2018** - spaceflight activities from UK spaceports (including Scottish spaceports); launch and return licensing
- **Space Industry Regulations 2021** (SI 2021/792) - detailed implementation of the Space Industry Act
- **UK Space Agency (UKSA)** - licensing authority for UK space activities (replaces FAA in UK context)
- **Civil Aviation Authority (CAA)** - spaceflight safety regulation under the Space Industry Act (equivalent role to FAA for spaceflight in UK)
- **Ofcom** - spectrum allocation, orbital slot coordination (Wireless Telegraphy Act 2006; equivalent to FCC in UK)
- **Export Control Order 2008** (SI 2008/3231) - UK dual-use and military export controls (equivalent to ITAR/EAR for UK)
- **UK sanctions regime** - additional space-related trade controls

For non-UK matters, identify corresponding national frameworks.

### Soft Law

- UN COPUOS Space Debris Mitigation Guidelines, ITU Radio Regulations (orbital slot coordination)
- IADC guidelines, Relevant industry standards

## Legal Analysis

For each disputed issue, follow IRAC:

- **Issue** - one sentence
- **Rule** - treaty article, statute, or regulation with citation
- **Application** - how rule maps to facts
- **Competing positions** - strengths and weaknesses of each party
- **Conclusion** - likely outcome or range of outcomes

### Liability Checklist

```
- [ ] Identify "launching state(s)" per Liability Convention Art. I
- [ ] Classify damage: surface/aircraft (absolute) vs. outer space (fault-based)
- [ ] Assess joint/several liability for multi-party launches (Art. V)
- [ ] Review insurance requirements (national law + contractual)
- [ ] Check indemnification/cross-waiver provisions
```

### Jurisdiction

Address: diplomatic claims vs. domestic court vs. arbitration, forum selection, sovereign immunity, and applicable administrative bodies (UK Space Agency, CAA, Ofcom, ITU). For Scottish matters: Scottish courts have jurisdiction over claims arising in Scotland; the Outer Space Act and Space Industry Act are reserved (UK-wide) matters.

## Emerging Issues

Flag if the matter touches:

- Space resource extraction (Artemis Accords vs. Moon Agreement Art. 11; UK is a signatory to the Artemis Accords)
- Mega-constellation regulation and orbital sustainability, Space debris as environmental harm, Space tourism passenger rights (relevant to Space Industry Act liability provisions)
- On-orbit servicing and active debris removal ownership, Scottish spaceport launch activities (SaxaVord Spaceport, Space Hub Sutherland)

Present competing interpretations; do not pick a winner unless well-supported.

## Practical Implications

- Impact on future operations, licensing, or compliance, Pending regulatory developments to monitor, Risk mitigation recommendations

## Pitfalls and Guardrails

- Cite specific treaty articles, statute sections, and regulatory provisions, never general references, Mark unverified citations with `[VERIFY]`
- Explain technical concepts (orbital mechanics, RF interference, delta-v) in plain language, Maintain neutral, analytical tone, not advocacy, Note where law is unsettled; do not overstate certainty, Distinguish binding treaty obligations from non-binding soft law
- **Never reproduce ITAR-controlled technical data** (ITAR still applies to US-origin defence articles even in UK context)
- **Scotland**: Space is a reserved matter under the Scotland Act 1998 - Scottish Parliament cannot legislate on space. The UK Space Agency and UK government regulate all space activities in Scotland. Scottish courts have jurisdiction for matters arising in Scotland.
- **Spaceports**: SaxaVord Spaceport (Shetland) and Space Hub Sutherland are licensed under the Space Industry Act 2018; launch licensing sits with UKSA/CAA

## Scotland/UK Adaptation

### Key Frameworks

The international treaty framework for space law is the same for the UK as for the US (UK is a signatory to the Outer Space Treaty, Liability Convention, Registration Convention, and Rescue Agreement). The national implementing legislation is different:

| US Framework | UK Equivalent |
|---|---|
| Commercial Space Launch Act (51 U.S.C. ch. 509) | Outer Space Act 1986 (as amended) + Space Industry Act 2018 |
| FCC (spectrum/orbital slots) | Ofcom (Wireless Telegraphy Act 2006) |
| FAA launch licensing | UK Space Agency + CAA (Space Industry Regulations 2021) |
| ITAR (defence export controls) | Export Control Order 2008 (SI 2008/3231) / UK sanctions regime |
| EAR (dual-use export controls) | UK retained dual-use regulation (Retained EU Regulation 2021/821) |
| U.S. FTC | Not applicable, CMA and Ofcom in UK |

### UK Space Legislation

1. **Outer Space Act 1986** (OSA): Original UK space legislation provides for licensing of UK spacecraft and liability requirements. Amended by the Space Industry Act 2018 to modernise the framework
2. **Space Industry Act 2018** (SIA): Covers spaceflight activities from UK spaceports including:
   - Launch and return licensing
   - Safety regulations
   - Liability and insurance requirements
   - Spaceport licensing
3. **Space Industry Regulations 2021**: Detailed implementing regulations for the SIA
4. **The Spaceflight Activities (Investigation of Accidents) Regulations 2021**

### International Treaties (UK Status)

| Treaty | UK Status |
|---|---|
| Outer Space Treaty (1967) | Ratified |
| Liability Convention (1972) | Ratified |
| Registration Convention (1975) | Ratified |
| Rescue Agreement (1968) | Ratified |
| Moon Agreement (1979) | Not signed (limited ratification globally) |
| Artemis Accords | Signed by UK (2020) |

### Scotland-Specific Notes

- **Space is a reserved matter** under Schedule 5 of the Scotland Act 1998. The Scottish Parliament cannot legislate on space activities, orbital operations, or spaceports
- **Scottish spaceports**:
  - SaxaVord Spaceport (Unst, Shetland) - licensed by CAA for orbital launches
  - Space Hub Sutherland (A' Mhòine, Sutherland) - horizontal/vertical launch spaceport
  - Both licensed under the Space Industry Act 2018 (UK-wide legislation)
- **Scottish courts**: Jurisdiction for claims arising in Scotland (e.g., debris damage, launch accidents) lies with Scottish civil courts, applying UK space legislation
- **Licensing**: All space activities from Scottish spaceports are licensed by UKSA and regulated by CAA, not Scottish bodies
- **Environmental**: Spaceport development in Scotland may also involve Scottish planning law and environmental impact assessment under Scottish regulations

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
