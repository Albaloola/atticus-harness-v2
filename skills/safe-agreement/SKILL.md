---
name: safe-agreement
language: en
description: Drafts Simple Agreements for Future Equity (SAFE) for early-stage venture capital financing with valuation cap/discount mechanics, investor qualifications, and securities compliance. Use when drafting SAFEs, pre-seed investment documents, convertible equity instruments, or YC-style SAFE notes. [Atticus UK/Scots refined]
tags:
- agreement, corporate, drafting, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Simple Agreement for Future Equity (SAFE)

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

Drafts a SAFE granting investors future equity rights upon triggering events, no immediate ownership, no debt.

## Quick Start

Gather before drafting:

1. **Company** - legal name per certificate of incorporation, jurisdiction, state of formation
2. **Investor** - legal name, entity type, accredited investor basis
3. **Economics** - purchase amount, valuation cap, discount rate (if any)
4. **Cap table** - existing SAFEs, convertible notes, fully-diluted share count
5. **Special terms** - MFN clause, pro rata rights, side letters

## Document Structure

### Header & Recitals

| Element | Requirement |
|---|---|
| Company ID | Full legal name matching certificate of incorporation, entity type, jurisdiction |
| Investor ID | Legal name, entity type, capacity to contract |
| Purchase amount | Exact dollar figure |
| Core exchange | Capital → contractual right to future equity; state explicitly: no debt, no interest, no current stockholder status |

### Conversion Mechanics

Three triggering events:

**1. Equity Financing (automatic)**

- Converts into preferred stock of same series issued to new investors, Conversion price = lesser of:
  - **Cap price**: Valuation Cap ÷ Pre-money fully-diluted capitalization
  - **Discount price**: Price per share × (1 − Discount Rate)
- Shares = Purchase Amount ÷ Conversion Price, Include worked numerical example

**2. Liquidity Event (acquisition/merger/IPO)**

- Investor elects: cash = Purchase Amount OR common stock = Purchase Amount ÷ Liquidity Price, Specify election timeline and default

**3. Dissolution**

- Cash = Purchase Amount, pre-dissolution, Priority: senior to common, subordinate to creditors/debt

### Valuation Terms

| Term | Function |
|---|---|
| Valuation Cap | Ceiling on conversion valuation; larger stake if valuation exceeds cap |
| Discount Rate | Reduction from new investor price; rewards early risk |
| Interaction | Cap and discount are **alternative** (not additive); investor gets better result |

### Representations

**Investor:**

- [ ] Investment purpose (not for resale, supports private placement exemption)
- [ ] Accredited status, individual (income/net worth) or entity (assets/equity owner/institutional)
- [ ] Risk acknowledgments: speculative, total loss, illiquid, indefinite hold
- [ ] Sophistication or qualified advisors

**Company:**

- [ ] Valid incorporation and good standing
- [ ] Corporate power and authority
- [ ] Board/stockholder approvals obtained
- [ ] Binding obligation (standard bankruptcy/equitable exceptions)
- [ ] No conflict with charter, material contracts, or law

### Rights & Restrictions

**Pre-conversion** - no stockholder rights (no voting, dividends, distributions, preemptive rights).

**Transfer** - no transfer without written consent; unauthorized = void. Optional exceptions for affiliates, estate planning, retirement accounts.

**Securities** - unregistered; restrictive legends required; investor acknowledges illiquidity.

### Administrative Provisions

| Provision | Standard |
|---|---|
| Governing law | State of incorporation or principal place of business |
| Disputes | Litigation venue OR arbitration (rules, count, seat, costs) |
| Amendments | Written, signed by both parties |
| Waivers | Explicit, written; no implied waiver |
| Integration | Entire agreement; supersedes prior negotiations |
| Notices | Email, certified mail, or courier; specify addresses; deemed-received rules |
| Severability | Reform invalid provisions; remainder survives |

### Signature Blocks

Both Company and Investor: signature, printed name, title (entities), date.

## Checks

1. **Defined terms** - capitalize consistently; define before first use
2. **Math precision** - conversion formulas unambiguous to any financial professional
3. **Cross-references** - verify all internal section references
4. **No placeholders** - replace all `[brackets]` before finalizing
5. **YC compatibility** - if referencing YC SAFEs, align with applicable template version (post-money vs. pre-money) and flag deviations
6. **Securities exemptions** - confirm federal exemption (Reg D 506(b)/506(c)) and state blue sky requirements
7. **MFN conflicts** - check prior SAFEs for MFN clauses that could trigger
8. **Missing info** - identify gaps and request from user before finalizing

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
