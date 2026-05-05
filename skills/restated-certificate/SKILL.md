---
name: restated-certificate
language: en
description: Drafts an Amended and Restated Certificate of Incorporation for Delaware corporations in preferred stock financing rounds. Covers authorized capital, preferred stock rights (dividends, liquidation, conversion, anti-dilution), protective provisions, and DGCL compliance. Use when drafting charter documents, restated certificates, venture financing corporate documents, or Delaware certificate amendments from term sheets and cap tables. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Amended and Restated Certificate of Incorporation

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

Drafts a filing-ready Amended and Restated Certificate of Incorporation for a Delaware corporation in connection with a preferred stock financing round. Delaware-specific, do not apply to other states without modification.

## Prerequisites

Collect before drafting:

1. **Term sheet** - pricing, liquidation preference multiple, anti-dilution method, protective provisions, board composition
2. **Prior Certificate** - current authorized capital, existing preferred series, unusual provisions
3. **Cap table** - shares outstanding, option pool, warrants, convertible notes
4. **Transaction documents** - SPA, IRA, voting agreement, ROFR/co-sale (for cross-reference)
5. **Registered agent** - name, physical Delaware street address (no P.O. boxes), county

## Quick Start

1. Gather all prerequisites above
2. Run pre-draft verification (cross-check term sheet against cap table and SPA)
3. Draft articles I to VII using the document skeleton
4. Verify anti-dilution formula and liquidation waterfall with sample numbers
5. Cross-check all defined terms against transaction documents
6. Confirm filing readiness with Delaware Secretary of State requirements

## Pre-Draft Verification

Extract and cross-check, flag discrepancies before drafting:

| Data Point | Source | Verify Against |
|---|---|---|
| Pre/post-money valuation | Term sheet | Cap table |
| Price per share | Term sheet | SPA, cap table math |
| Shares issued this round | Term sheet | SPA |
| Total authorized Common | Cap table | Outstanding + pool + all conversions + cushion |
| Total authorized Preferred (per series) | Term sheet | Shares issued + warrant/note conversions + anti-dilution cushion |
| Option pool size | Term sheet | Board resolutions, cap table |
| Liquidation preference multiple | Term sheet | SPA |
| Dividend rate and type | Term sheet | - |
| Anti-dilution method | Term sheet | - |
| Board composition | Term sheet | Voting agreement |

## Document Skeleton

```
AMENDED AND RESTATED CERTIFICATE OF INCORPORATION
OF [EXACT LEGAL NAME]

[Corporation] hereby certifies:

1. Original Certificate filed with the Delaware Secretary of State on [DATE].
2. This Amended and Restated Certificate has been duly adopted pursuant to
   Sections 242 and 245 of the DGCL [by board consent under §245 / by board
   and stockholder approval under §242].
3. The text of the Certificate is hereby amended and restated in its entirety
   as follows:

ARTICLE I, NAME
ARTICLE II, REGISTERED OFFICE AND AGENT
ARTICLE III, PURPOSE
ARTICLE IV, AUTHORIZED CAPITAL
ARTICLE V, PREFERRED STOCK RIGHTS
ARTICLE VI, DIRECTOR EXCULPATION
ARTICLE VII - [Additional governance as needed]

IN WITNESS WHEREOF...
[Signature block: name, title, date]
```

## Core Articles

**Article I, Name.** Must include corporate designator (Corp., Inc., etc.) per DGCL §102(a)(1). Must match across all transaction documents exactly.

**Article II, Registered Office.** Physical street address in Delaware with county. Named registered agent who has consented to serve.

**Article III, Purpose.** Standard broad clause: "any lawful act or activity for which corporations may be organized under the DGCL." Narrow only if regulatory/tax reasons require.

**Article IV, Authorized Capital.**

```
Total authorized: [X] shares
  Common Stock: [X] shares, $[0.0001] par value
  Preferred Stock: [X] shares, $[0.0001] par value
    Series Seed: [X] shares
    Series A: [X] shares
    Undesignated: [X] shares (blank check authority)
```

Common must cover: outstanding + option pool + all preferred as-converted + warrants/notes + cushion.

**Article V, Preferred Stock Rights.** Draft in this order:

| Section | Key Decisions |
|---|---|
| Dividends | Cumulative vs. non-cumulative; rate; when-as-if-declared vs. auto-accruing; series priority |
| Liquidation Preference | Preference amount (OIP × multiple + accrued dividends); pari passu vs. senior; participating vs. non-participating; cap |
| Optional Conversion | Ratio = OIP ÷ Conversion Price; initial CP = OIP; no fractional shares |
| Mandatory Conversion | Qualified IPO trigger (min proceeds + min price); majority/supermajority Preferred vote |
| Anti-Dilution | Broad-based weighted average; enumerate carve-outs |
| Voting Rights | As-converted with Common; separate class vote for protective provisions |
| Protective Provisions | Majority/supermajority Preferred consent for enumerated actions |
| Board Designation | Seats for Common, each Preferred series, independent/mutual |

See `references/DETAILS.md` for anti-dilution formula, carve-out checklist, protective provisions checklist, and liquidation waterfalls.

**Article VI, Director Exculpation.** DGCL §102(b)(7) maximum exculpation with statutory carve-outs (loyalty breach, bad faith, §174, improper personal benefit). Include future-amendment auto-update clause.

**Article VII+ - Optional Provisions.** Indemnification + mandatory advancement; D&O insurance authority; corporate opportunity waiver; forum selection (Court of Chancery); written consent/special meeting provisions.

## Pitfalls and Checks

1. **Defined terms** - define once, use consistently; cross-check against SPA/IRA/voting agreement definitions
2. **Mathematical verification** - test liquidation waterfall at multiple exit values; verify anti-dilution formula with sample down-round
3. **Cross-references** - verify all internal section references and subsection numbering
4. **DGCL compliance** - cite §§242, 245 in recitals; §102(a)(1) for name; §102(b)(7) for exculpation; §151 for stock rights
5. **Blank check preferred** - if authorized, ensure protective provisions cover future series designation
6. **Par value consistency** - match across Common and Preferred unless justified
7. **Filing readiness** - document must be executable and fileable as-is
8. **Never guess** share numbers, valuations, or pricing, flag gaps and request clarification

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
