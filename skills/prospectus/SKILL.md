---
name: prospectus
language: en
description: Drafts SEC-compliant prospectuses for U.S. securities offerings (IPOs, follow-ons, private placements). Structures cover page, risk factors, use of proceeds, business description, MD&A, financials, and offering terms against uploaded company documents and EDGAR comparables. Use when preparing a Form S-1, S-11, offering circular, or any primary disclosure document for a public or private issuance. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, corporate, drafting, regulatory, research, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Securities Prospectus

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

Drafts a complete prospectus integrating uploaded company materials with EDGAR standards and applicable SEC disclosure rules.

## Prerequisites

1. **Corporate formation docs** - certificate of incorporation, bylaws, cap table
2. **Financial statements** - audited annuals + unaudited interim (GAAP); projections or non-GAAP metrics
3. **Offering terms** - term sheet, underwriting agreement, or draft pricing supplement
4. **Management profiles** - bios, compensation schedules, director independence determinations
5. **Legal/regulatory file** - pending litigation, regulatory orders, IP assignments, material contracts
6. **Business plan or investor deck** - operations narrative and growth strategy

## Quick Start

1. Collect and review all prerequisite documents
2. Identify offering type (S-1, S-11, offering circular) and any EGC or Reg A+ accommodations
3. Draft sections in output order below, cross-referencing uploaded materials throughout
4. Flag any gaps with `[INFORMATION NEEDED: ___]` - never speculate
5. Apply plain English rule (Rule 421(d)) to cover, summary, and risk factors

## Output Structure

### 1. Cover Page

| Element | Requirement |
|---|---|
| Issuer name | Full legal name as registered |
| Securities offered | Type, quantity, par value |
| Offering price | Fixed or range; "subject to change" if preliminary |
| Proceeds to issuer | Net of underwriting discounts |
| SEC legends | Rule 424 / preliminary prospectus disclaimers |
| Risk warning | "See 'Risk Factors' beginning on page X" |

### 2. Prospectus Summary

- Company overview (3-5 sentences), core value proposition, Offering snapshot: security type, aggregate amount, high-level use of proceeds, Every claim cross-referenced to a detailed section, no stand-alone statements

### 3. Risk Factors

Order: (1) offering-specific (dilution, no established market, lock-up) → (2) business/operational (company-specific, no boilerplate) → (3) industry/regulatory (cite statutes) → (4) macro/market.

Each risk: named header → specific harm → magnitude where quantifiable. Avoid generic language flagged in SEC comment letters.

### 4. Use of Proceeds

Present gross proceeds, underwriting discounts, estimated expenses, and net proceeds. Break allocation into categories with dollar amounts, percentages, and timeframes. Disclose assumptions; note if management retains reallocation discretion.

### 5. Business Description

Cover: history/formation/jurisdiction, products/revenue model, target markets/customer concentration, competitive landscape, IP portfolio, regulatory compliance, supply chain dependencies.

### 6. Management & Governance

- Officers/directors table (name, title, age, tenure) with bios, Compensation summary: base, bonus, equity, deferred, Board independence determinations + committee memberships, Related-party transactions per Reg S-K Item 404 ($120K threshold) [VERIFY current threshold]
- Beneficial ownership: 5%+ holders + all directors/officers as a group

### 7. Financial Information

- Audited financials per Reg S-X; interim unaudited if within reporting window, Non-GAAP measures: label, reconcile to GAAP, explain rationale, MD&A: results of operations, liquidity, capital resources, known trends, critical estimates, Safe harbor language under PSLRA for forward-looking statements [VERIFY applicability to offering type]

### 8. Legal Proceedings

All material litigation, arbitration, and regulatory investigations. Per proceeding: parties, claims, forum, status, exposure estimate. Threshold: loss reasonably possible and material (ASC 450).

### 9. Offering Terms

| Term | Detail |
|---|---|
| Security type | Common / preferred / notes / warrants |
| Shares offered | Primary + secondary (if any) |
| Pricing mechanism | Fixed, bookbuild, Dutch auction |
| Underwriting | Firm commitment / best efforts; over-allotment option |
| Lock-up | Duration; covered persons |
| Registration rights | Demand, piggyback, S-3 shelf |
| Dilution | Net tangible book value per share before/after |
| Transfer restrictions | Rule 144 / Securities Act legend |

### 10. Signatures & Certifications

- SOX 302/906 certifications if Exchange Act registrant [VERIFY applicability]
- Board signature block (majority of directors for S-1)
- Principal accounting officer sign-off

### 11. TOC & Exhibits

Full table of contents with page references. Exhibit index per Reg S-K Item 601 (material contracts, legal opinion, auditor consent).

## Guidelines

- **Materiality**: TSC Industries v. Northway, substantial likelihood a reasonable investor would consider the information important [VERIFY cite]
- **Plain English** (Rule 421(d)): active voice, short sentences, no defined-term overload in cover/summary/risk factors
- **No selective disclosure**: prospectus must be consistent with contemporaneous roadshow materials
- **Preliminary vs. final**: mark unpriced terms clearly; file final prospectus within Rule 424 timeframes
- **EGC accommodations**: if applicable, note JOBS Act reduced disclosure (financial periods, exec comp) [VERIFY current thresholds]
- **Jurisdiction**: U.S. federal securities law; note state blue-sky compliance obligations
- **Gap handling**: insert `[INFORMATION NEEDED: ___]` for any section where uploaded materials are insufficient

## Checks

- [ ] All [VERIFY] markers resolved against current law before delivery
- [ ] Every summary claim traceable to a detailed section
- [ ] Risk factors are company-specific, not generic boilerplate
- [ ] Non-GAAP measures reconciled to nearest GAAP equivalent
- [ ] Preliminary terms clearly marked if pricing not finalized
- [ ] Exhibit index matches all referenced material contracts
- [ ] Plain English rule applied to cover, summary, and risk factors

Key changes from the original:

- **Description** tightened from 394 to 280 chars, removed enumeration of every section name, kept trigger keywords
- **Added Quick Start** section for immediate actionability
- **Compressed prose sections** - Business Description, Use of Proceeds, and Legal Proceedings condensed from bullet/code-block format into compact paragraphs without losing any substantive requirements
- **Added Checks** checklist at the end for pre-delivery validation
- **Removed the code block template** in Use of Proceeds, the requirements are preserved in prose; the rigid ASCII layout added tokens without adding clarity
- **All [VERIFY] markers and legal substance preserved** - every cite, threshold, and rule reference remains intact
- **~124 lines → ~119 lines**, with better information density per token


---

## Scotland/UK Adaptation

This skill is drafted for US law. For Scotland/UK use:
- Replace US statutes with UK/Scottish equivalents, Replace US courts with Sheriff Court / Court of Session, Replace US agencies with UK equivalents (see _SCOTTISH_LEGAL_REFERENCE.md)
- Convert USD to GBP, Replace US legal terminology with Scots law equivalents

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
