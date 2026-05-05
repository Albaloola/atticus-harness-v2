---
name: hsr-filing
language: en
description: Prepares UK merger control notification filings for the Competition and Markets Authority (CMA) under the Enterprise Act 2002. Covers jurisdictional assessment (turnover and share-of-supply tests), merger notice drafting, theories of harm analysis, information requests, and post-notification procedure. Use when an M&A deal may trigger CMA jurisdiction and requires UK merger clearance or antitrust review. [Atticus UK/Scots refined]
tags:
- SCOTS, antitrust, corporate, M&A, regulatory, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# UK Merger Control Filing (CMA)

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

Assembles a UK merger notification for the Competition and Markets Authority, jurisdictional assessment through post-decision monitoring, under the Enterprise Act 2002.

## Prerequisites

Collect before starting:

- **Transaction documents** - definitive agreement, exhibits, schedules, amendments
- **Corporate structure charts** - ultimate ownership and control chains for both acquiring and target undertakings
- **Financial statements** - most recent fiscal year turnover by business line and geography
- **Annual reports / strategic reports** - for both parties (company filings at Companies House)
- **Board/management materials** - presentations, memos, studies evaluating the deal
- **Market research / competitor intelligence** - internal and third-party analyses of market position
- **Prior CMA / European Commission contacts** - any previous merger control filings involving either party

## Core Workflow

### 1. Jurisdictional Assessment

| Test | Requirement | Notes |
|------|-------------|-------|
| Target turnover test | Target UK turnover > £70M | Enterprise Act 2002, s. 23(1)(b) |
| Share-of-supply test | Merger creates or enhances a 25%+ share of UK supply | Supply of goods or services of any description (s. 23(2) to (6)) |
| Enterprise test | A relevant merger situation, enterprises ceasing to be distinct | Can include acquisition of controlling interest, assets, or influence |
| De minimis exception (not a safe harbour) | Very small transactions may be excluded if no substantial lessening of competition | CMA has discretion |

**Key jurisdictional notes:**

- UK merger control is **voluntary** (not mandatory like HSR) - parties may choose not to notify, CMA can investigate **any completed or anticipated merger** that meets jurisdictional thresholds within **4 months** of completion, CMA also has jurisdiction over "relevant merger situations" where parties' enterprises cease to be distinct within the UK
- **No statutory filing fee** - CMA does not charge a fee for merger notifications (unlike the US HSR system)
- CMA's jurisdiction extends to both UK and non-UK entities if the deal affects UK markets

### 2. Party Identification

**Acquiring Undertaking** - Identify the ultimate enterprise and its subsidiaries. Determine which entities hold the target business and whose turnover data is relevant.

**Target Undertaking** - Scope of the merger (entire entity, specific business/division, or specific assets). If a subsidiary or division only, clearly delineate the target's UK turnover.

### 3. Turnover and Market Data

Prepare UK turnover breakdown by SIC code (UK Standard Industrial Classification) for each party:

| SIC Code | Description | Acquiring UK Turnover | Target UK Turnover | Overlap? |
|----------|-------------|-----------------------|--------------------|----------|
| XXXXXX | [Product/service] | £X | £X | Yes/No |

- Classify at the most detailed SIC level available, Note the source of turnover data (audited accounts, management accounts)
- Include global turnover for context, For share-of-supply test: document total UK supply value/volume and the merged entity's share

### 4. Competitive Assessment, Theories of Harm

Analyse potential competition concerns:

- **Horizontal overlap** - products/services overlap in the UK; market share data and concentration (HHI)
- **Vertical effects** - upstream or downstream relationships that could create foreclosure risk
- **Conglomerate effects** - portfolio power, bundling/tying, or reduced competition in adjacent markets
- **Coordinated effects** - whether the merger facilitates tacit coordination
- **Countervailing factors** - buyer power, market entry, efficiencies, failing firm defence

**Market definition considerations:**
- Product market: demand-side and supply-side substitutability, Geographic market: usually UK-wide, but can be GB, Scotland, or sub-Scotland (local markets)
- Document evidence from internal business documents, third-party reports, and CMA precedents

### 5. Merger Notice Preparation

The formal notification (CMA merger notice) includes:

**Parties and Transaction**
- Full legal names, registered addresses, Companies House numbers, Description of the transaction (share purchase, asset purchase, merger)
- Rationale and strategic purpose

**Jurisdiction**
- Statement of why the merger qualifies (turnover test, share-of-supply test, or both)
- Confirmation that enterprises are ceasing to be distinct

**Turnover Data**
- UK turnover by business segment for most recent financial year, Global turnover for context, Supporting financial statements

**Market Information**
- Product/service description for each party, Customer segments, distribution channels, Principal competitors and market shares, Barriers to entry and expansion

**Efficiencies**
- Any claimed efficiencies that would offset anti-competitive effects

**Submissions on Substantial Lessening of Competition (SLC)**
- Why the merger does not give rise to an SLC, or, Why any SLC is outweighed by customer benefits (s. 30(1)(a))

**Supporting Documents**
- Transaction documents, management presentations, board papers, Copies of any market studies, competitor analysis, strategic plans

### 6. Internal Documents and Information Requests

**Scope** - The CMA may request any information it considers relevant for its investigation under s. 109 of the Enterprise Act 2002 (formal information-gathering powers).

Typical requests:
- Board presentations and minutes evaluating the deal, Internal business plans, budgets, and forecasts, Customer lists and sales data, Competitor analysis and market reports, Customer and competitor correspondence, Integration planning documents

> The CMA has formal statutory information-gathering powers. Failure to comply without reasonable excuse is a criminal offence (s. 110 Enterprise Act 2002). Voluntarily produced documents should be carefully reviewed for legal advice privilege before disclosure.

### 7. Procedure and Timetable

| Phase | CMA Action | Timeline (Working Days) |
|---|---|---|
| **Pre-notification** | Informal discussions with CMA case team | 2 to 6 weeks typically |
| **Merger Notice filed** | Formal notification accepted | Day 0 |
| **Phase 1 (Initial)** | CMA investigates, issues decision | 40 working days from acceptance |
| **Extension** | CMA may extend by up to 40 working days if parties agree | +40 working days |
| **Phase 2 (In-depth)** | CMA appoints inquiry group, conducts detailed investigation | Further 24 weeks (+8 week extension) |
| **Remedies** | CMA may accept undertakings in lieu of Phase 2 | Varies |
| **Final decision** | Clearance, clearance with conditions, prohibition | At Phase 1 or Phase 2 conclusion |

**CMA powers at Phase 1:**
- Clear the merger (no SLC)
- Accept undertakings in lieu of reference to Phase 2
- Refer to Phase 2 for in-depth investigation

**CMA powers at Phase 2:**
- Clear unconditionally, Impose remedies (structural or behavioural)
- Prohibit the merger (in whole or in part)

### 8. Post-Decision Monitoring

| Milestone | Timing | Action |
|-----------|--------|--------|
| CMA decision issued | Phase 1 or Phase 2 | Review decision for legal/regulatory risk |
| Remedies implementation | Per undertakings/integration timetable | Monitor compliance with CMA undertakings |
| Appeal | Within 4 weeks of decision | Appeal to Competition Appeal Tribunal (CAT) |
| Variation/discharge of undertakings | During remedies period | Apply to CMA for variation if circumstances change |

## Filing Preparation Checklist

```
- [ ] Jurisdictional assessment, confirm UK turnover test or share-of-supply test met
- [ ] Parties identified, ultimate undertakings and control chains
- [ ] Turnover analysis, UK turnover by SIC code for both parties
- [ ] Market definition, product and geographic markets documented
- [ ] Competitive analysis, theories of harm assessed (horizontal, vertical, conglomerate)
- [ ] Internal documents, reviewed for privilege; document index prepared
- [ ] Merger notice drafted, all sections complete and internally consistent
- [ ] Supporting materials, transaction docs, board papers, market studies assembled
- [ ] Pre-notification submission, contact CMA case team to commence informal process
- [ ] Legal advice privilege review, all documents reviewed before submission
```

## Pitfalls and Checks

- **Jurisdictional clock** - CMA has 4 months from completion or public announcement to investigate; voluntary notification does not stop the clock
- **Gun-jumping** - Completion before or during CMA review can result in fines (up to 5% of aggregate turnover) and unwinding orders
- **Voluntary regime** - Unlike HSR, parties may proceed with completion but at significant risk of CMA investigation and unwinding
- **No filing fee** - CMA does not charge for merger notifications, but parties bear their own legal and economic adviser costs
- **Pre-notification discussions strongly recommended** - CMA expects informal engagement before formal notification
- **SLC standard** - CMA assesses whether the merger gives rise to a "substantial lessening of competition" (not SLC/significant impediment test under EU regime)
- **Remedies** - CMA increasingly prefers structural remedies (divestiture) over behavioural
- **Scotland-specific** - CMA has concurrent jurisdiction in Scotland; the Competition Appeal Tribunal hears Scottish merger appeals
- **Confidentiality** - CMA operates a confidentiality ring; commercially sensitive information may be shared with third parties under confidentiality arrangements
- **Penalties** - Failure to comply with CMA information requests can result in criminal sanctions or fines

## Scotland/UK Adaptation

### Core Concept Conversion

| US Term | UK/Scotland Equivalent |
|---|---|
| Hart-Scott-Rodino Act (15 U.S.C. § 18a) | **Enterprise Act 2002** - Part 3 (Mergers) - ss. 22 to 41 |
| FTC / DOJ (Antitrust Division) | **CMA** (Competition and Markets Authority) - primary UK merger control authority |
| HSR mandatory premerger notification | **Voluntary notification** - no legal obligation to notify in the UK; parties may choose to seek CMA clearance |
| Size-of-transaction test (inflation-adjusted) | **Target UK turnover > £70M** (not inflation-indexed) |
| Size-of-person test | **No equivalent** - UK has no size-of-person test |
| NAICS revenue breakdown | **SIC 2007** (UK Standard Industrial Classification) - classify at 5-digit level |
| Item 4(c)/(d) documents (competition-related documents) | **No equivalent statutory category** - CMA may request any information under s. 109 Enterprise Act 2002 |
| Second Request (formal document production) | **Phase 2 reference** - CMA refers for in-depth investigation; formal information notices served |
| Filing fee | **No filing fee for UK merger notifications** |
| Statutory waiting period (30 days) | **No statutory waiting period** - CMA has 40 working days from Phase 1 acceptance |
| HHI thresholds in Merger Guidelines | CMA uses **SLC test** and follows CMA merger assessment guidelines (2021) |
| U.S. Merger Guidelines (DOJ/FTC) | **CMA Merger Assessment Guidelines** (2021) - joint with the Competition Appeal Tribunal |

### UK Merger Control Key Differences

1. **Voluntary notification**: Unlike the mandatory HSR system, UK merger control is voluntary. Parties may close a deal without notifying the CMA, but risk a retrospective investigation (up to 4 months after completion) and potential unwinding.

2. **No transaction value test**: The UK does not use a deal-value threshold. Instead, the target turnover test (£70M) and share-of-supply test (25%) determine jurisdiction.

3. **No filing fee**: The CMA charges no fee for accepting a merger notice (unlike the HSR system's tiered fee structure).

4. **Retrospective jurisdiction**: The CMA can investigate completed mergers that were never notified (within 4 months of completion or public announcement).

5. **SLC test**: The CMA applies the "substantial lessening of competition" test, not the "significant impediment to effective competition" (SIEC) test used under the EU Merger Regulation.

6. **Enterprise test**: The relevant statutory concept is "enterprises ceasing to be distinct" (not "ultimate parent entity" control chain as in HSR).

7. **Gun-jumping risk**: Completing a deal before or during CMA review carries significant risk. The CMA can impose fines and order unwinding.

8. **Scotland-specific**: Scottish companies and transactions are subject to UK merger control (Enterprise Act 2002 applies throughout the UK). No separate Scottish merger control regime.

### Key Practitioner Takeaways

- If notifying, always conduct **pre-notification discussions** with the CMA before submitting a formal merger notice, this is strongly expected and shortcuts the Phase 1 timetable.
- Document the **target's UK turnover** carefully, this is the central jurisdictional test.
- Consider **whether to notify at all** - voluntary notification means the decision to notify is a strategic choice based on risk appetite and deal structure.
- **Watch the 4-month clock** - after completion or public announcement, the CMA has 4 months to investigate. A completed merger can be unwound even after closing.
- **Privilege in UK law** - legal advice privilege (solicitor-client) is narrower than US attorney-client privilege. Litigation privilege (for adversarial proceedings) is the UK analogue of work product doctrine.
- All references to US dollar amounts, FTC/DOJ, and HSR-specific concepts should be replaced with CMA, Enterprise Act, and GBP (£).
- Mark all statutory citations as `[VERIFY]` against the current version of the Enterprise Act 2002 and CMA guidance.

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
