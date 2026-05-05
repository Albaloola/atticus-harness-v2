---
name: investigation-summary
language: en
description: Produces structured competition/investigation summaries for executives and counsel. Triggers on CMA investigations, sector inquiries, dawn raids, European Commission proceedings, or other UK/Sottish regulatory inquiries. [Atticus UK/Scots refined]
tags:
- regulatory, summarization, competition, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Competition/Investigation Summary, Scotland/UK Adaptation

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

Decision-ready competition or regulatory investigation brief with evidence-linked chronology, legal theories, and business risk assessment.

## Quick Start

Gather before drafting:
- Regulatory process documents (notices, information requests, warrants, orders)
- Internal investigation materials (interview memos, forensic reviews, privilege logs)
- Market data (shares, competitors, pricing, entry barriers)
- Public sources (press, filings, complaints, CMA case pages)
- Current status (deadlines, productions, negotiations)

## Workflow

### 1. Build Key-Facts Table

Populate and resolve gaps before drafting.

| Field | Detail |
|---|---|
| Investigating Authority | CMA (UK), European Commission, OFCOM, FCA, SEPA, etc. - identify lead office and contact |
| Matter Type | Conduct, merger, or market investigation |
| Alleged Conduct | Anti-competitive agreement, abuse of dominance, cartel, etc. |
| Market Definition | Product and geographic market as asserted |
| Statutory Hooks | Competition Act 1998 Ch. I/II; Enterprise Act 2002; sector-specific |
| Initiation Trigger | Complaint, market study, merger notification, dawn raid |
| First Notice Date | Date and instrument |
| Procedural Posture | Inquiry, formal investigation, Statement of Objections, appeal |
| Key Deadlines | Production dates, meetings, milestones |
| Exposure Signals | Penalties (up to 10% of UK turnover), remedies sought, damages claims |
| Remediation | Compliance changes, business changes, leniency applications |

### 2. Draft Summary

Use this template. Cite every factual assertion with `[source: <id>]`.

```
PRIVILEGED AND CONFIDENTIAL, SUBJECT TO LEGAL PROFESSIONAL PRIVILEGE

**Executive Overview**
Agency:
Matter Type:
Alleged Conduct:
Market:
Current Status:
Immediate Decisions/Actions:

**Chronology**
| Date | Event | Source | Notes |
|---|---|---|---|

**Allegations & Legal Theories**
| Theory | Conduct | Market Definition | Statutes | Evidence |
|---|---|---|---|---|

**Market & Industry Context**
- Market structure and shares:
- Key competitors:
- Barriers to entry:
- Industry dynamics or consolidation:

**Procedural Status**
- Steps completed:
- Outstanding requests:
- Upcoming milestones:

**Company Response**
- Cooperation posture:
- Privilege/objections asserted:
- Internal investigation steps:
- Remedial measures:

**Outcomes / Scenarios**
- If closed: disposition and conditions.
- If ongoing: likely outcomes and timelines.

**Risk Assessment**
| Risk Category | Exposure | Drivers | Mitigation |
|---|---|---|---|

**Compliance Actions**
- Immediate controls:
- Medium-term enhancements:
- Training or policy updates:
```

### 3. Multi-Jurisdiction Matters

If multiple authorities are involved (e.g., CMA + European Commission + sector regulator), create one subsection per authority and a consolidated risk section.

## Pitfalls

- **Allegations vs. facts**: Separate clearly; never speculate.
- **Missing data**: Flag with `[VERIFY]`, especially for uncertain statutory provisions or foreign-law citations.
- **Exact references**: Use precise dates, agency names, and instrument titles, do not paraphrase.
- **Inferences**: Label explicitly and cite the underlying source.
- **Merger matters**: State the asserted theory of harm and any divestiture or behavioural remedy signals.
- **Parallel proceedings**: Include sector regulators (OFCOM, FCA, Ofgem) or Scottish-specific bodies as separate subsections.
- **Privilege headers**: Maintain `PRIVILEGED AND CONFIDENTIAL, SUBJECT TO LEGAL PROFESSIONAL PRIVILEGE` on every output.
- **Leniency**: Flag any leniency or immunity applications; these are highly confidential and affect case strategy.

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- FTC/DOJ (US) → CMA (Competition and Markets Authority) - primary UK competition regulator, State AG investigations → Sector regulators (OFCOM, FCA, Ofgem, ORR, CAA)
- Sherman Act §§ 1, 2 → Competition Act 1998, Chapter I (anti-competitive agreements) and Chapter II (abuse of dominance)
- Clayton Act § 7 → Enterprise Act 2002 (merger control); UK merger thresholds differ significantly, FTC Act § 5 → Enterprise Act 2002 (market investigations); CMA market study/reference powers, HSR filing → UK merger notification (voluntary for most mergers; mandatory for certain sectors)
- CID (Civil Investigative Demand) → Section 26/27 Competition Act 1998 information gathering powers; formal notice/warrant for dawn raids, Second Requests → Phase 2 merger reference (CMA); no automatic suspension, Dawn raids → CMA has power of entry and seizure under Competition Act 1998 (with warrant)
- Consent decrees → CMA accepts binding commitments/undertakings; can be made legally enforceable, State debarment → UK Public Contract Regulations 2015 debarment; CMA competition disqualification orders

**Key Scottish/UK considerations:**
- CMA is UK-wide; competition law is reserved (not devolved to Scottish Parliament)
- Sector regulators (FCA, OFCOM, Ofgem etc.) have concurrent competition powers, Maximum CMA penalty: up to 10% of worldwide group turnover, Scotland-specific: SEPA (environmental regulation) and other devolved bodies may overlap with CMA, Dawn raid procedure under Competition Act 1998 requires warrant from court in Scotland (Sheriff)
- Private damages actions: follow *Sainsbury's v Mastercard* and the EU Damages Directive (implemented in UK as CAT Rules)
- Competition Appeal Tribunal (CAT) hears appeals; appeals to Court of Appeal / Court of Session (Inner House)
- Competition law privilege: legal professional privilege is recognised under UK law; no "work product" analogue, Leniency regime for cartel conduct (CMA Leniency Guidance)
- Market investigations under Enterprise Act 2002 are unique to UK competition law, no direct US parallel

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
