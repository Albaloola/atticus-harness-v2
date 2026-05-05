---
name: fintech-regulatory-summaries
language: en
description: Generates structured regulatory summaries for fintech compliance covering crypto, payments, lending, mobile banking, and money transmission. Covers UK regulators (FCA, PRA, Bank of England) and relevant EU/global frameworks with urgency triage and compliance deadlines. Use when compliance officers or legal teams need recent regulatory updates, agency guidance monitoring, or regulatory status reports. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Fintech Regulatory Summaries

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

Produces structured regulatory updates for fintech compliance officers and legal counsel to identify critical developments, deadlines, and required actions.

## Quick Start

Gather before generating:

1. **Sectors** - crypto, payments, lending, mobile banking, regtech
2. **Time window** - default 90 days; adjust as needed
3. **Jurisdictions** - federal only, specific states, or multi-jurisdictional
4. **Business context** (optional) - company's regulated activities for materiality tailoring

## Output Structure

### 1. Executive Overview

3 to 5 bullets, each with:
- **What changed** - rule/guidance/enforcement action + agency
- **Who it affects** - specific fintech activity or model
- **Urgency** - `Immediate` / `Near-Term` / `Monitor`
- **Deadline** - effective date or comment period close

### 2. Detailed Analysis

Per development:

| Field | Content |
|---|---|
| **Source** | Agency, title, FR citation or docket no. `[VERIFY]` |
| **Effective/Comment Date** | Date or "Proposed, Comment by [date]" |
| **Sectors Affected** | Crypto exchanges / Processors / Lenders / MSBs |
| **Key Requirements** | Numbered compliance obligations from regulatory text |
| **Ambiguities** | Interpretive uncertainty or pending guidance |
| **Recommended Action** | Next steps: update policies, file comments, gap analysis |

### 3. Regulatory Overlap Map

Flag where multiple frameworks apply to one development (e.g., crypto custody implicating SEC + OCC + FinCEN). Note federal/state conflicts or gaps.

### 4. State Spotlight (if applicable)

Cover divergence in:
- Money transmitter licensing (MTL)
- State crypto/digital asset frameworks, Consumer lending rate caps or disclosure rules

### 5. International Context (crypto/cross-border only)

Note alignment or divergence with EU MiCA, FATF guidance, or major foreign regulator actions material to U.S. multinationals.

## Agency Checklist

- [ ] FCA, consumer protection, cryptoassets, payments, lending, open banking
- [ ] PRA (Bank of England) - prudential regulation, bank/fintech partnerships
- [ ] Bank of England, CBDC, digital settlement, systemic risk
- [ ] HMRC, AML/CTF for non-FCA crypto firms, VAT/tax treatment
- [ ] UK Government/HM Treasury, FSMA 2023 reforms, cryptoasset regulation
- [ ] ICO, data protection, AI governance
- [ ] CMA, competition, open banking enforcement

## Pitfalls

- **Cite primary sources only** - Federal Register, agency releases, official guidance. Tag unconfirmed citations `[VERIFY]`.
- **Distinguish document types** - final rules, proposed rules, guidance/no-action letters, and enforcement actions carry different compliance weight.
- **Never conflate guidance with binding regulation** - flag where agency position lacks formal rulemaking.
- **Include comment deadlines for proposed rules** - note significant industry objections.
- **Urgency tiers** - Immediate: effective/past due. Near-Term: within 90 days. Monitor: proposed or 90+ days.
- **Acknowledge ambiguity** - do not assert false certainty on unsettled regulatory questions.

## Scotland/UK Adaptation

This skill is drafted for US fintech regulation (CFPB, SEC, CFTC, FinCEN, OCC, state regulators). For UK use:

- **Single regulator**: FCA is the primary UK financial regulator (unlike US multiple agency model). PRA handles prudential regulation for banks.
- **Key UK legislation**: FSMA 2000, Payment Services Regulations 2017, Electronic Money Regulations 2011, MLRs 2017, Consumer Rights Act 2015, UK GDPR.
- **Crypto regulation**: The Financial Services and Markets Act 2000 (Cryptoassets) Regulations 2026 bring cryptoassets within FCA regulatory remit (effective from 2026). FCA has published CP25/40-42 on crypto regulation.
- **Payments**: FCA authorisation for payment institutions (API) and electronic money institutions (EMI). PSR 2017 governs. Strong Customer Authentication (SCA) requirements.
- **Lending**: FCA regulates consumer credit (Consumer Credit Act 1974 + FCA Handbook CONC). New Consumer Duty (Principle 12) effective 2023.
- **AML**: supervised by FCA (for FCA-authorised firms) and HMRC (for non-FCA crypto firms). MLRs 2017.
- **Open Banking**: CMA Order 2017; evolving into Open Finance under FCA oversight.
- **Scottish context**: financial regulation is reserved (UK Parliament). No separate Scottish regulator. Trading Standards Scotland handles consumer protection enforcement.
- **ESG/sustainability**: UK Sustainability Disclosure Requirements (SDR) and FCA anti-greenwashing rules applicable.
- **International context**: UK post-Brexit has divergence from EU MiCA for crypto. Aligns with FATF recommendations. Potential equivalence decisions for EU/third-country firms.
- **Sandbox**: FCA Innovation Hub / Regulatory Sandbox / Digital Securities Sandbox (with Bank of England).

For a full reference, see `scots-forms/UK-Fintech-Regulatory-Bodies-Guidance.md`.

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
