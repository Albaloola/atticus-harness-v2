---
name: distribution-of-assets-plan
language: en
description: 'Drafts a corporate Distribution of Assets Plan for dissolution, restructuring, or wind-down, covering asset inventory with valuations, beneficiary designations, distribution methodology, contingency provisions, administrative powers, and execution formalities. Use when preparing dissolution plans, corporate wind-down documents, or asset allocation agreements among shareholders, creditors, or stakeholders; trigger keywords: distribution of assets, dissolution plan, wind-down, asset allocation, liquidating distribution. [Atticus UK/Scots refined]'
tags:
- agreement, corporate, drafting, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Distribution of Assets Plan

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

Allocates entity assets among designated beneficiaries or stakeholders upon dissolution, restructuring, or other triggering events, with jurisdiction-compliant execution formalities.

## Prerequisites

1. **Entity identification** - legal name, jurisdiction of formation, EIN
2. **Triggering event** - dissolution, restructuring, death/incapacity of principal, merger
3. **Asset inventory sources** - balance sheets, deeds, account statements, appraisals
4. **Beneficiary information** - legal names, relationships, contact info, ownership percentages
5. **Governing documents** - articles of incorporation, bylaws, operating agreement, shareholder agreement
6. **Jurisdiction** - state of formation and any states where assets are located

## Output Structure

### 1. Preamble

| Element | Content |
| --- | --- |
| Entity name & type | Full legal name, state, entity type |
| Effective date | Date of plan execution or triggering event |
| Triggering circumstances | Dissolution vote, court order, death, restructuring resolution |
| Legal authority | Governing statute (e.g., state Business Corporation Act, LLC Act) [VERIFY jurisdiction] |
| Plan purpose | One-sentence statement of intent |

### 2. Asset Inventory

For each asset, capture:

| Field | Detail |
| --- | --- |
| Asset ID | Sequential reference number |
| Category | Real property / Financial account / Business interest / IP / Equipment / Other |
| Description | Legal description, institution + last-4, registration # as applicable |
| Current FMV | Appraised or book value; valuation date |
| Encumbrances | Liens, mortgages, pledges, transfer restrictions |
| Disposition method | Liquidate / Transfer in kind / Retain for wind-down |

Categories to address:

- [ ] Real property (legal descriptions and recording references)
- [ ] Bank and investment accounts
- [ ] Accounts receivable and notes receivable
- [ ] Business interests / subsidiary equity
- [ ] Intellectual property (patents, trademarks, copyrights, trade secrets)
- [ ] Contracts and licenses (flag assignable vs. non-assignable)
- [ ] Equipment and personal property above threshold value
- [ ] Tax attributes (NOLs, credits) - note transferability limits [VERIFY]
- [ ] Pending litigation claims or recoveries

### 3. Beneficiary Designations

| Beneficiary | Type | Legal Name | Role | Allocation % | Contingent |
| --- | --- | --- | --- | --- | --- |
| B-1 | Primary | | Shareholder / Creditor / Officer | | |
| C-1 | Contingent | | | | |

Special designations:

- Minor beneficiaries → identify custodian or trustee, Entity beneficiaries → confirm authorization to receive, Creditor priority → note statutory distribution waterfall [VERIFY state law]
- Special needs beneficiaries → flag for supplemental needs trust review

### 4. Distribution Methodology

| Method | Use When |
| --- | --- |
| Percentage allocation of liquidation proceeds | Assets to be sold; pro-rata distribution |
| Specific bequest of identified asset | Named asset to named beneficiary in kind |
| Staged distribution schedule | Ongoing wind-down, contingent assets, disputed claims |
| Liquidating trust | Complex assets requiring post-dissolution management |

Tax and equalization:

- Identify built-in gain assets; note IRC §§ 331, 336 implications for C-corps [VERIFY]
- Include equalization language for in-kind assets of unequal value, Address transfer taxes, recording fees, and cost allocation

### 5. Distribution Timeline

```text
Day 0:    Plan adopted / triggering event
Day 1 to 30: Appraisals finalized; creditor notice period [VERIFY state law]
Day 30 to X: Liquidation of sale-designated assets
Day X:    Creditor distributions (priority per state dissolution statute)
Day X+Y:  Equity holder / residual beneficiary distributions
Final:    Certificate of dissolution filed; administrator discharged
```

### 6. Contingency Provisions

| Scenario | Plan Provision |
| --- | --- |
| Beneficiary predeceases | Specify alternate or redistribution among survivors |
| Beneficiary disclaims | Specify timeframe (≤9 months for tax purposes [VERIFY]) |
| Beneficiary cannot be located | Holdback period before escheat to state unclaimed property |
| Asset value materially changes | Rebalancing or pro-rata adjustment mechanism |
| Disputed asset | Escrow agent and dispute resolution mechanism |

### 7. Administrative Powers

The plan administrator shall have authority to:

- [ ] Sell, transfer, or convey assets
- [ ] Execute documents on behalf of the entity
- [ ] Retain professionals (counsel, accountants, brokers)
- [ ] Pay wind-down expenses from entity assets
- [ ] File tax returns and resolve tax liabilities
- [ ] Settle claims against the entity
- [ ] Make partial distributions pending final asset resolution

Dispute resolution: mediation → arbitration → [jurisdiction] court.

### 8. Execution Block

Per jurisdiction requirements [VERIFY state-specific formalities]:

- Authorized signatory signature + title, Witness signatures (number per state law)
- Notary acknowledgment, Board resolution or unanimous written consent as exhibit, Filing requirements (e.g., plan of dissolution with Secretary of State)
- Number and location of originals

## Guidelines

- Distributions to equity holders cannot precede creditor satisfaction; confirm state dissolution waterfall before drafting.
- Many states require tax clearance certificate before dissolution is final [VERIFY by state].
- Flag non-assignable contracts requiring third-party consent; exclude from distribution until consent obtained.
- Transfers of business interests may trigger securities law obligations [VERIFY].
- Insert [BRACKET] placeholders for all client-specific values not in source documents.
- Do not include account numbers or SSNs in the document body; reference by exhibit.

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
