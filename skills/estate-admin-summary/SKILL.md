---
name: estate-admin-summary
language: en
description: 'Produces structured status summaries of U.S. estate administration proceedings from probate filings, wills, asset inventories, creditor claims, tax records, and distribution documents. Covers decedent identification, asset catalog, creditor status, tax compliance, beneficiary tracking, legal hurdles, and remaining tasks. Use when summarizing estate progress, preparing executor status reports, onboarding to a probate matter, or briefing beneficiaries. Trigger keywords: estate summary, probate status, estate administration, executor report, estate inventory, creditor claims summary, estate tax compliance, beneficiary distribution. [Atticus UK/Scots refined]'
tags:
- summarization, summary, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Estate Administration Summary

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

Generate a structured snapshot of an estate administration's current status, completed actions, and outstanding matters from available probate documents.

## Prerequisites

1. Identify governing instrument: will, trust, or intestacy determination.
2. Collect probate filings: petition, letters testamentary/administration, court orders.
3. Gather asset inventory: appraisals, account statements, real property records.
4. Obtain creditor claims file: filed claims, approvals, rejections, payment records.
5. Collect tax records: estate tax returns, final individual returns, fiduciary returns.
6. Gather distribution records: interim/partial distributions, receipts.
7. Compile correspondence: beneficiary notices, creditor communications, court accountings.

## Output Structure

### 1) Estate identification block

| Field | Detail |
| --- | --- |
| Decedent | Name, date of death |
| Jurisdiction | State/county of administration |
| Case/Matter No. | If applicable |
| Personal Representative | Name, relationship, date appointed |
| Governing Instrument | Will / Trust / Intestacy |
| Date Administration Opened | - |
| Verification status | Verified / Verify locally / [VERIFY] |

### 2) Asset inventory section

Organize by category with status tracking.

| Category | Asset Description | Appraised/Est. Value | Status | Intended Beneficiary |
| --- | --- | --- | --- | --- |
| Real Property | | | Held / Sold / Transferred | |
| Financial Accounts | | | Liquidated / Open | |
| Personal Property | | | Distributed / Held | |
| Business Interests | | | Valued / Pending | |

- Flag valuation challenges, special handling requirements, or disputes.
- For distributed assets: note date, recipient, value transferred.

### 3) Creditor claims section

| Creditor | Amount Claimed | Status | Notes |
| --- | --- | --- | --- |
| | | Approved / Rejected / Paid / Pending | |

| Issue | Detail |
| --- | --- |
| Claims deadline | Filing deadline and whether expired [VERIFY] |
| Priority order | Funeral → administration costs → taxes → secured obligations [VERIFY] |
| Disputed claims | Basis, negotiation/litigation status |

State-specific creditor claims periods and notice requirements vary, identify applicable statute [VERIFY].

### 4) Tax compliance section

| Return | Required? | Filed? | Status |
| --- | --- | --- | --- |
| Federal estate tax (Form 706) | | | |
| State estate/inheritance tax | | | |
| Decedent's final income tax | | | |
| Fiduciary income tax (Form 1041) | | | |

Note outstanding liabilities, pending audits, or anticipated issues.

### 5) Legal hurdles section

For each issue:

| Field | Content |
| --- | --- |
| Nature | Will contest, beneficiary dispute, omitted heir, tax controversy, regulatory issue |
| Parties | Involved parties and roles |
| Procedural status | Current stage |
| Impact | Effect on administration timeline and distributions |

### 6) Administration timeline section

Mark completed items with dates; note delays or inactivity gaps.

- [ ] Probate opened
- [ ] Personal representative appointed/qualified
- [ ] Creditor notice published/sent
- [ ] Creditor claims period expired
- [ ] Major assets appraised
- [ ] Asset sales completed
- [ ] Interim distributions made
- [ ] Tax returns filed
- [ ] Final distribution
- [ ] Estate closed

### 7) Beneficiary status section

- [ ] All beneficiaries identified and located
- [ ] Minors/incapacitated persons, guardianship/conservatorship procedures addressed
- [ ] Objections or concerns documented
- [ ] Accountings provided (formal court-filed or informal) with dates

### 8) Remaining tasks and projected timeline section

- List each outstanding task required before closure.
- Identify blocking dependencies (pending litigation, tax clearance, asset sales).
- Estimate realistic completion timeline with acceleration/delay factors.

### 9) Final quality block

- Provide executive takeaway (3-5 bullets).
- Add risk matrix: `Issue | Likely impact on closure`.
- List to-verify items: `task`, `jurisdiction`, `source` columns.

## Guidelines

- Cite specific source documents for all factual assertions.
- Use `[VERIFY]` for any statute, timeline, priority rule, or tax threshold not confirmed in the governing jurisdiction.
- Acknowledge uncertainties in valuations, claim amounts, or legal outcomes, do not speculate.
- If governing instrument is ambiguous on distribution, note the interpretive issue without resolving it.
- Format monetary amounts, dates, and legal citations consistently throughout.
- Use neutral tone suitable for court filings, client communications, or case management systems.
- End every output with: "General legal information only; not legal advice. Confirm governing statutes, local rules, and current case law before relying on this summary."

---

**Key changes from the original:**

- **Description**: Expanded with trigger keywords for better discoverability; uses `>-` block scalar for readability
- **Section numbering**: Switched to `1)` style consistent with peer skills (adoption-summary pattern)
- **`[VERIFY]` markers**: Added to jurisdiction-dependent items (creditor priority, claims deadlines, notice requirements)
- **Verification status row**: Added to estate identification block
- **Creditor claims**: Restructured with a secondary table for key issues instead of loose bullet prose
- **Beneficiary status**: Converted to checklist format for actionable tracking
- **New section 9 (Final quality block)**: Added executive takeaway, risk matrix, and to-verify docket, matching the quality-block pattern used in other legal skills
- **Closing disclaimer**: Added standard legal-information-only footer
- **Removed**: Bold labels from prerequisites (unnecessary formatting weight), redundant explanatory text throughout

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
