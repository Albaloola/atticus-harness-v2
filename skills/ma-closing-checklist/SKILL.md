---
name: ma-closing-checklist
language: en
description: Atticus UK/Scots legal skill for ma-closing-checklist. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# M&A Closing Checklist

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

Generates a party-coded, status-tracked closing checklist for UK/Scottish M&A transactions (share purchase, asset purchase, or scheme of arrangement).

## Quick Start

Confirm before drafting:

1. **Definitive agreement** - executed SPA/APA with disclosure letter and schedules
2. **Structure** - share purchase, asset purchase, or scheme of arrangement
3. **Parties** - buyer, seller, target (if distinct), stakeholder/custodian, counsel
4. **Completion logistics** - date, time/TZ, location or virtual platform
5. **Material contracts** - change-of-control and consent triggers identified
6. **Regulatory profile** - registered office jurisdiction, CMA thresholds, sector regulators (FCA, Ofcom, etc.)

## Output Format

Header: target name, buyer name, completion date/time/TZ/location, version number, distribution date.

Party legend (expand as needed):

| Code | Party |
|------|-------|
| BC | Buyer's Counsel |
| SC | Seller's Counsel |
| B | Buyer |
| S | Seller |
| ST | Stakeholder / Escrow Agent |
| CO | Company (if distinct) |

Matrix columns: **#** | **Item** | **Party** | **Status**

Status flow: `Pending → Draft → Under Review → Executed → Delivered → Complete`

## Checklist Categories

### 1. Corporate Authorisations

| # | Item | Party |
|---|------|-------|
| 1.1 | Certificate of incorporation (and certificate of good standing if applicable) - Seller (each jurisdiction, ≤30 days) | SC |
| 1.2 | Certificate of incorporation, Buyer | BC |
| 1.3 | Board minutes/board resolutions, Seller (approve transaction, authorise signatories) | SC |
| 1.4 | Board minutes/board resolutions, Buyer | BC |
| 1.5 | Shareholder/member approval, Seller (if required, e.g. substantial property transaction) | SC |
| 1.6 | Consent rights holders, preference shareholders, option/warrant holders | SC |
| 1.7 | Certified constitutional documents, Seller (articles of association, memorandum) | SC |
| 1.8 | Secretary's certificate, Seller (resolutions, constitutional docs, incumbency) | SC |
| 1.9 | Secretary's certificate, Buyer | BC |
| 1.10 | PSC register update (persons with significant control) | SC/BC |

### 2. Principal Transaction Documents

| # | Item | Party |
|---|------|-------|
| 2.1 | Definitive agreement, final execution with all schedules and disclosure letter | SC/BC |
| 2.2 | Escrow/stakeholder agreement (amount, duration, claims, release conditions) | SC/BC/ST |
| 2.3 | *Asset:* Bill of sale, tangible moveable property | SC |
| 2.4 | *Asset:* Assignment & assumption, contracts, IP, permits, liabilities | SC/BC |
| 2.5 | *Asset:* Disposition(s) for owned heritable property (registered with Land Register of Scotland) | SC |
| 2.6 | *Asset:* IP assignments, patents, trade marks, copyright, domain names | SC |
| 2.7 | *Share:* Stock transfer form(s) and share certificate(s); register update | SC |
| 2.8 | *Scheme:* Court order and scheme documentation for Companies House filing | SC/BC |
| 2.9 | Director/officer resignations and appointments (Form TM01/AP01 at Companies House) | SC/BC |
| 2.10 | Change of registered office notification (if applicable) | SC/BC |

### 3. Ancillary Agreements

| # | Item | Party |
|---|------|-------|
| 3.1 | Legal opinion, Seller's counsel (authority, enforceability, no conflicts) | SC |
| 3.2 | Legal opinion, Buyer's counsel | BC |
| 3.3 | Employment/offer letters, key continuing employees | B/BC |
| 3.4 | Restrictive covenant agreements, selling shareholders, key personnel | SC/BC |
| 3.5 | Transition services agreement | SC/BC |
| 3.6 | Ongoing commercial agreements (supply, distribution) if applicable | SC/BC |

### 4. Payoffs & Security Releases

| # | Item | Party |
|---|------|-------|
| 4.1 | Payoff letters, all indebtedness (exact amount, bank details, release commitment) | SC |
| 4.2 | Form MR01/MR04 - satisfaction of charges at Companies House | SC |
| 4.3 | Standard security discharge (heritable property, Register of Scotland) | SC |
| 4.4 | Other security releases (floating charges, fixed charges) | SC |

### 5. Consents & Regulatory Clearances

| # | Item | Party |
|---|------|-------|
| 5.1 | Material contract consents, change-of-control/assignment | SC |
| 5.2 | Landlord consents, lease assignments | SC |
| 5.3 | Franchisor/licensor approvals (if applicable) | SC |
| 5.4 | CMA merger control, voluntary filing or mandatory if qualifying | BC/SC |
| 5.5 | Sector-specific regulatory approvals (FCA change of control, Ofcom, etc.) | BC/SC |
| 5.6 | National Security and Investment (NSI) Act 2021 notification | BC/SC |
| 5.7 | EU/foreign merger control filings (if multi-jurisdictional) | BC/SC |

### 6. Completion Certificates

| # | Item | Party |
|---|------|-------|
| 6.1 | Officer's certificate, Seller (warranty bring-down, covenant compliance) | SC |
| 6.2 | Officer's certificate, Buyer (warranty bring-down, covenant compliance) | BC |
| 6.3 | No-Material-Adverse-Change certificate | SC |
| 6.4 | HMRC forms, Seller tax residence, VAT registration | S |
| 6.5 | Non-resident CGT notification (if seller is non-UK resident for UK property assets) | S/SC |

### 7. Funds Flow & Settlement

| # | Item | Party |
|---|------|-------|
| 7.1 | Funds flow memo, base price, adjustments, escrow/stakeholder, payoffs, expenses, net proceeds | SC/BC |
| 7.2 | Bank details, Seller (verbally verified, fraud prevention protocol) | S/SC |
| 7.3 | Bank details, escrow/stakeholder account (confirmed with ST) | ST |
| 7.4 | Completion statement, complete source-and-use | SC/BC |
| 7.5 | Transaction expense allocations per SPA | SC/BC |
| 7.6 | Stamp duty reserve tax (SDRT) or stamp duty calculation and payment | SC/BC |

### 8. Post-Completion Obligations

| # | Item | Party |
|---|------|-------|
| 8.1 | Scheme document / share transfer filed at Companies House; effectiveness confirmed | BC/SC |
| 8.2 | Press release/announcement (MAR compliance if applicable) | B/S |
| 8.3 | Required notices, customers, suppliers, landlords, lenders | B/BC |
| 8.4 | CMA post-completion notification (if applicable) | BC |
| 8.5 | LBTT (Land and Buildings Transaction Tax) returns and payments | SC/BC |
| 8.6 | Tax authority notifications, VAT, PAYE registration updates | B/BC |
| 8.7 | Corporate records update, register of members, directors, PSC, minutes | BC |
| 8.8 | Purchase price allocation (for tax purposes) | SC/BC |
| 8.9 | NSI Act post-completion notification (if mandatory) | BC |
| 8.10 | Intellectual Property Office assignment registrations (UK IPO) | SC/BC |

## Critical Checks

- **Version every distribution** - all parties must confirm current version
- **Flag long-lead items early** - landlord consents, CMA/regulatory approvals cannot wait until completion week
- **Sequencing** - funds flow memo requires all payoff letters; completion certificates require covenant performance
- **Wire fraud** - verbal confirmation protocol for all bank details; never accept email-only changes
- **Legal opinions** - negotiate scope and reliance parties early to avoid completion delays
- **Certificate of incorporation timing** - typically ≤30 days pre-completion; confirm with buyer's counsel
- **Non-resident CGT (NRCGT)** - non-UK seller of property-holding target may require HMRC reporting within 60 days [VERIFY current thresholds]
- **Bulk transfers** - check TUPE (Transfer of Undertakings) regulations for asset deals [VERIFY applicable]
- **Cross-reference** - tie each item to the specific SPA/APA section
- **Jurisdiction** - adapt for Scottish LBTT rates, Companies House filing types, and any cross-border elements

---
## Scotland/UK Adaptation

This skill has been adapted from a U.S.-centric M&A closing checklist for use in UK/Scottish transactions.

### Key Conversions
| U.S. Term | UK/Scottish Equivalent |
|---|---|
| HSR Act filing | CMA merger control (voluntary; mandatory only if qualifying) |
| CFIUS review | National Security and Investment (NSI) Act 2021 |
| State antitrust filings | Not applicable in UK; EU filings may apply |
| SOS (Secretary of State) filing | Companies House filing |
| FIRPTA certificate (IRC §1445) | Non-resident CGT (NRCGT) reporting to HMRC |
| IRC §1060 allocation | Purchase price allocation for UK tax (HMRC) |
| UCC-3 termination statements | Form MR04 satisfaction of charge (Companies House) |
| Good standing certificate | Certificate of incorporation (Companies House) |
| Bylaws / charter / operating agreement | Articles of association / memorandum |
| Deed / mortgage | Disposition / standard security (Scotland) |
| Escrow agent | Stakeholder (Scots law usage) |
| Bulk sale (UCC Article 6) | TUPE regulations for asset deals |
| State transfer taxes | LBTT (Scotland) / SDLT (England) |
| HSR waiting period | CMA Phase 1 review / voluntary filing |
| Patent/trademark USPTO registration | UK IPO assignment registration |
| Closing (US) | Completion (UK usage) |
| Purchase agreement (US) | SPA / APA (UK usage) |

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
