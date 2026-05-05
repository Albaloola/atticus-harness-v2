---
name: capital-call-notice
language: en
description: Drafts U.S. capital call notices for PE, VC, or fund-managed LLCs aligned to LPA/operating agreement procedures and side letters. Use when drafting a capital call notice, drawdown notice, capital contribution demand, unfunded commitment call, or LP/GP capital call letter. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Capital Call Notice

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

Formal notice demanding capital contributions under a governing agreement with investor-level calculations, payment mechanics, and default remedies.

## Quick Start

Gather before drafting:

| Item | Detail | Source |
|---|---|---|
| Governing document | Full title, date, sections authorizing calls and remedies | LPA / Operating Agreement |
| Notice period | Minimum days, delivery method, timing rule | Notice clause |
| Allocation method | Pro rata or formula; side-letter deviations | Capital call provisions |
| Call purpose | Investment/expense/reserve; permitted use basis | Investment memo / budget |
| Default remedies | Interest rate, dilution/forfeiture, cure period | Default clause |
| Wire instructions | Bank, ABA, SWIFT, account name/number | Treasury |
| Fund/entity details | Legal name, GP/manager, signatory, address | Formation docs |
| Investor schedule | Commitments, contributions to date, unfunded, ownership % | Fund admin |

## Core Workflow

### 1. Build Capital Call Schedule

Attach as exhibit. One row per investor:

| Investor | Commitment | Contributed | Unfunded | Ownership % | Amount Due | Side Letter Notes |
|---|---|---|---|---|---|---|
| {Name} | {$} | {$} | {$} | {%} | {$} | {If any} |

### 2. Draft Calculation Statement

One paragraph stating: allocation formula, agreement compliance confirmation, aggregate call amount, and total fund commitment base.

### 3. Draft Notice Letter

```text
[Fund Letterhead]

Date: {Month DD, YYYY}

To: {Investor Legal Name}
Attn: {Contact Name/Title}
Address: {Address}

Re: Capital Call Notice under {Agreement Title} dated {Agreement Date}

Dear {Investor Name}:

Pursuant to Section {##} of the {Agreement Title} dated {Agreement Date} (the "Agreement"), the General Partner/Manager hereby issues this Capital Call Notice.

1. Aggregate Call Amount: {Total Amount}.
2. Your Pro Rata Amount Due: {Investor Amount}.

Purpose of Call: {Brief purpose aligned with permitted uses}.

Payment Due Date: {Month DD, YYYY} by {Time} {Time Zone}. Not less than the minimum notice period under Section {##}.

Payment Instructions:
Beneficiary: {Account Name}
Bank: {Bank Name}, {Bank Address}
ABA/Routing: {ABA}
SWIFT: {SWIFT}
Account No.: {Account Number}
Reference: {Reference Code / Investor ID}

Wire confirmation: {Email} with {Required details}.

Default Remedies: Failure to fund by the due date triggers remedies under Section {##}, including {exact remedies and cure period}.

Questions: {Contact Name}, {Title}, {Phone}, {Email}.

Sincerely,

{Authorized Signatory}
{Title}
{General Partner/Manager Entity}
```

### 4. Populate Default Remedies Matrix

| Remedy | Trigger | Section | Notes |
|---|---|---|---|
| Default interest | Late payment | §{##} | Rate, accrual start |
| Dilution/forfeiture | Failure to cure | §{##} | Formula, timing |
| Distribution suspension | Default status | §{##} | Duration |
| Forced transfer | Continued default | §{##} | Process, valuation |

### 5. Confirm Delivery

State the delivery method required by the notice clause. Verify delivery address or email on record matches agreement requirements.

## Pitfalls

- Cite exact section numbers from the governing agreement, never paraphrase.
- Use full month names for dates; always specify time zone for deadlines.
- Do not exceed authorized purposes; tie each use to the agreement.
- Apply side-letter modifications only to the applicable investor; keep other terms confidential.
- State remedies verbatim from the agreement; include cure periods and required follow-up notices.
- Verify signatory authority and entity names against formation docs.
- Do not disclose non-public deal terms unless permitted.
- Confirm delivery method complies with notice provisions and any electronic delivery requirements.
- Mirror governing law and jurisdiction, do not introduce new terms.
- Cross-check arithmetic: amounts must be consistent across letter body and schedule.

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
