---
name: pos-license
language: en
description: Drafts Software and POS System Licence Agreements for proprietary software use between licensor and licensee under Scots/UK law. Covers licence grants, financial terms, IP, UK GDPR/DPA 2018 data security, SLAs, and termination. Use when drafting POS software licences, SaaS subscriptions, franchise technology licences, or software distribution agreements. [Atticus UK/Scots refined]
tags:
- SCOTS, agreement, drafting, transactional, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
scots: true
---

# Software & POS System Licence Agreement (Scots/UK Law)

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

Drafts a licence agreement governing access, installation, and operation of proprietary software and POS system technology, governed by Scots law with UK statutory compliance.

## Prerequisites

Gather before drafting:

1. **Parties** - legal names, entity types, jurisdictions, bound affiliates
2. **Software specs** - deployment model (cloud/on-premises/hybrid), components, documentation, source vs. object code
3. **Commercial terms** - pricing model, payment schedule, renewal structure, user/location counts
4. **Technical requirements** - hardware integration, payment processing, inventory management, multi-location needs
5. **Regulations** - PCI-DSS, UK GDPR / Data Protection Act 2018 applicability, FCA registration if processing payments

## Quick Start

1. Collect party and software details per Prerequisites
2. Draft each section below in order, flagging gaps with `[NEEDS INPUT]`
3. Mark jurisdiction-specific items with `[JURISDICTION NOTE]`
4. Run Checks before finalising

## Drafting Sections

### 1. Recitals & Definitions

- Identify parties with entity type, principal place of business, jurisdiction, Establish licensor ownership context and licensee's business need, Define all capitalised terms in a dedicated section or on first use, Governing law: **Scots law** (specify; exclude conflict-of-laws principles)

### 2. Grant of Licence

| Parameter | Options |
|---|---|
| Exclusivity | Exclusive / Non-exclusive |
| Term | Perpetual / Fixed / Renewable |
| Scope | Internal use only / Third-party service permitted |
| Users | Named / Concurrent / Unlimited |
| Locations | Single-site / Multi-location / Geographic limits |
| Code access | Object code only / Source code included |
| Deployment | Cloud / On-premises / Hybrid |
| Updates | Included / Separate fee / Major vs. minor |
| Sublicensing | Prohibited / With consent / Affiliate carve-out |

Explicitly restrict reverse engineering, decompilation, disassembly, and derivative works unless negotiated.

Note: The Consumer Rights Act 2015 applies where the licensee is a consumer and may override certain terms. Sale of Goods Act 1979 provisions may apply to software supplied on tangible media. [VERIFY application based on licensee status]

### 3. Financial Terms

- **Fee structure** - one-time / subscription / per-user / per-transaction / hybrid
- **Payment** - due dates, methods, currency (GBP unless otherwise agreed)
- **Late payments** - interest rate under Late Payment of Commercial Debts (Interest) Act 1998 for B2B; otherwise contractual rate
- **Renewal pricing** - auto-renewal terms, escalation cap, notice period
- **Taxes** - VAT responsibility (UK supplies: standard rate VAT unless exempt); no US-style sales/use tax
- **Audit rights** - licensor verifies user-count/transaction-volume compliance; underpayment reconciliation

### 4. Intellectual Property

- Licensor retains all ownership; licence conveys no title, Derivative works/customisations, specify ownership (typically licensor)
- Licensee feedback assigned to licensor without compensation, Licensee business data remains licensee property; system architecture remains licensor property, Moral rights, consider waiver under Scots law where applicable

### 5. Confidentiality & Data Protection

- Mutual NDA with standard carve-outs; survives termination (specify duration)
- **POS-specific**:
  - PCI-DSS compliance for payment card data (ICO oversight in UK)
  - Encryption in transit + at rest
  - Breach notification timeline and procedure (under UK GDPR: 72 hours to ICO)
  - **UK GDPR / Data Protection Act 2018**: identify controller vs. processor; include DPA (Data Processing Agreement) as schedule; include International Data Transfer Agreement (IDTA) if transferring outside UK/EEA

### 6. Warranties & SLAs

**Limited warranty** (typically 90 days): software substantially conforms to specs. Exclusive remedy: defect correction, then refund if correction not commercially reasonable.

Note: Consumer Rights Act 2015 implies statutory rights (satisfactory quality, fitness for purpose, as described) that cannot be excluded for consumers. [VERIFY licensee status]

**POS performance SLAs** (if applicable):

| Metric | Target | Remedy |
|---|---|---|
| Uptime | 99.X% | Service credits |
| Transaction speed | < X seconds | Escalation |
| Support response | X hours | Penalty/credit |

**Disclaimers**: disclaim implied warranties to maximum extent permitted by law. No warranty of uninterrupted/error-free operation. For B2B contracts, the Unfair Contract Terms Act 1977 (UCTA) limits exclusion of liability for breach of implied terms; UCTA reasonableness test applies. [VERIFY UCTA compliance]

### 7. Liability & Indemnification

- **Exclusion** - consequential, indirect, special, or pure economic loss (subject to reasonableness under UCTA 1977)
- **Cap** - lesser of (a) fees paid in preceding 12 months or (b) total fees paid
- **Carve-outs** - confidentiality breach, IP infringement, death/personal injury, fraud, gross negligence, wilful misconduct
- **Mutual indemnity** - third-party claims from breach, negligence, or legal violations
- **Procedure** - prompt notice → cooperation → indemnifying party controls defence/settlement

Note: Unfair Contract Terms Act 1977 applies a reasonableness test to limitation/exclusion clauses in B2B contracts. Death/personal injury liability cannot be excluded. Consumer Rights Act 2015 applies separate fairness test for consumers. [VERIFY which regime applies]

### 8. Term & Termination

| Trigger | Notice | Cure Period |
|---|---|---|
| Convenience | 30 to 90 days | N/A |
| Material breach | Immediate after cure | 15 to 30 days |
| Insolvency | Immediate | N/A |

**Post-termination**: cessation of usage rights, return/destroy software and confidential info, final payment, POS deactivation, data migration transition period, prorated refunds (if without cause), early termination penalties (if applicable).

**Survival**: confidentiality, IP ownership, liability limits, indemnification, governing law.

### 9. Dispute Resolution

- **Governing law** - Scots law (specify); exclude Rome I Regulation conflict-of-laws
- **Venue** - exclusive jurisdiction of the Court of Session (Edinburgh) or Sheriff Court (specify sheriffdom) for claims within their respective monetary limits
- **ADR ladder** - executive negotiation (15 to 30 days) → mediation (Scottish Arbitration Centre / DIAC / LCIA) → litigation in Scottish courts or arbitration under Scottish Arbitration Act 2010
- **Fee shifting** - expenses follow the event (Scots civil litigation rule); or each bears own (specify)

### 10. General Provisions

Severability, entire agreement/merger, amendment (written, signed), assignment restrictions (licensee restricted; licensor may assign to affiliates/in M&A), notice methods, non-waiver, force majeure, signature blocks with authority confirmation.

## Checks

- Use plain language; avoid archaic legalese, Consistent defined terms throughout; capitalise on each use, Number all sections for cross-reference, Adapt licence terms for POS concerns: hardware integration, payment processing, inventory management, multi-location deployment, Verify Consumer Rights Act 2015 / Sale of Goods Act 1979 compliance, not UCC Article 2/2A, Verify Unfair Contract Terms Act 1977 reasonableness test for limitation clauses, Ensure UK GDPR / DPA 2018 compliance; include DPA schedule where processor status exists, For franchise contexts: cross-check with franchise agreement technology provisions, PCI-DSS compliance (same standard as US; ICO oversight in UK)
- Consider Scottish Arbitration Centre for optional arbitration clause

## Scotland/UK Adaptation

### Key Adaptations, UCC Article 2/2A replaced with Consumer Rights Act 2015 (consumer) and Sale of Goods Act 1979 (supply of goods/services)
- GDPR/CCPA replaced with UK GDPR (retained EU legislation) and Data Protection Act 2018
- PCI-DSS retained (same standard; ICO oversight in UK)
- State-specific licensing removed; replaced with UK licensing / FCA authorisation if payment processing is involved, US sales/use/VAT replaced with VAT only (UK VAT regime)
- AAA/JAMS replaced with Scottish Arbitration Centre / DIAC / LCIA, Venue changed to Scottish courts (Court of Session / Sheriff Court)
- Governing law changed to Scots law, Unfair Contract Terms Act 1977 (UCTA) replaces UCC reasonableness standards, Late Payment of Commercial Debts (Interest) Act 1998 applies to B2B late payment interest, Currency changed to GBP, US-style sales/use tax removed; VAT treatment added, International data transfers require IDTA (not SCCs as pre-Brexit)

### [SCOTS] Notes, Scots law has distinct delict rules (not tort); negligence and pure economic loss rules differ from English common law, The Scottish Arbitration Centre is based in Edinburgh; the Arbitration (Scotland) Act 2010 is the governing statute, Sheriff Court jurisdiction: Simple Procedure (≤£5,000), Ordinary Cause (>£5,000); Summary Cause abolished, Court of Session has unlimited pecuniary jurisdiction; Outer House is first instance, Expenses follow the event in Scottish litigation (loser pays the winner's assessed costs)
- Consumer Rights Act 2015 applies UK-wide; Scottish consumer law is harmonised, UCTA 1977 reasonableness test is strictly applied by Scottish courts

### [VERIFY] Items Before Use
- [VERIFY] Whether the licensee is a consumer (CRA 2015 applies) or business (UCTA 1977 applies)
- [VERIFY] Whether the software qualifies as "goods" or "services" under the Sale of Goods Act 1979 / Supply of Goods and Services Act 1982 (applies to Scotland via UK-wide legislation)
- [VERIFY] UK GDPR adequacy: whether an IDTA is needed for data transfers outside UK/EEA
- [VERIFY] FCA registration status if processing payments (payment services under PSR 2017)
- [VERIFY] Current VAT rate for software licences (standard rate 20%; consider VAT place of supply rules)
- [VERIFY] Applicability of Scottish Arbitration Act 2010 if arbitration clause is included
- [VERIFY] Whether the software is a "financial promotion" requiring section 21 FSMA 2000 approval

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
