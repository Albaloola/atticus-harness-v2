---
name: org-meeting-minutes
language: en
description: Drafts organizational meeting minutes for newly formed corporations or LLCs, covering quorum, bylaws/OA adoption, elections, capitalization, banking, and tax elections. Use when forming a new entity, drafting initial board minutes, or completing corporate organization post-filing. [Atticus UK/Scots refined]
tags:
- corporate, drafting, memo, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Organizational Meeting Minutes

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

Produces corporate-book-ready minutes of an entity's initial organizational meeting, compliant with state formation requirements.

## Prerequisites

Collect before drafting:

1. **Filed articles** - Incorporation (corp) or organization (LLC) with state confirmation
2. **Bylaws or operating agreement** - Draft or adopted version
3. **Participant list** - Full legal names and capacities (incorporator, director, officer, member)
4. **Capitalization details** - Authorized shares/units, consideration, initial holders
5. **Banking preferences** - Bank, authorized signatories, signing limits
6. **Tax elections** - S-corp (Form 2553), fiscal year end, other elections
7. **State quorum rules** - Applicable corporate/LLC statute requirements

## Quick Start

Draft minutes in four sections: Header, Attendance & Quorum, Organizational Resolutions, Adjournment.

Each resolution uses a formal "RESOLVED" block with voting record: "motion by [Name], seconded by [Name], unanimously approved."

## Output Structure

### 1. Header

| Field | Content |
|-------|---------|
| Title | "Minutes of the Organizational Meeting of [Full Legal Entity Name]" |
| Date/Time | Exact date and time |
| Location | Physical address, or virtual platform (confirm all could hear/communicate) |
| Purpose | "To complete the organization of the [corporation/LLC] and take all actions necessary to commence business operations" |

### 2. Attendance & Quorum

- List each attendee: full legal name + capacity, State quorum with statutory basis:
  - **Corp**: majority of directors, or incorporator(s) if board not yet seated
  - **LLC**: per state statute and operating agreement, Record notice given or waivers obtained, Record election of chairperson and secretary (nomination, second, vote)

### 3. Organizational Resolutions

Draft each as a formal "RESOLVED" block. Include all applicable:

**Governance**
- [ ] Adopt bylaws (corp) or operating agreement (LLC) - note copies reviewed
- [ ] Elect directors, name, term for each
- [ ] Elect officers, name, title (President, Secretary, Treasurer, VPs)
- [ ] Designate principal office address
- [ ] Adopt corporate seal (if applicable)
- [ ] Approve fiscal year end
- [ ] Adopt stock/membership certificate forms
- [ ] Set regular board meeting schedule

**Capitalization**
- [ ] Authorize share/unit issuance, number, class, consideration, recipients
- [ ] Approve equity incentive plans (if immediately contemplated)

**Banking & Finance**
- [ ] Authorize bank accounts, institution, account type
- [ ] Designate authorized signatories with signing limits
- [ ] Authorize reimbursement of incorporator organizational expenses (itemize)

**Tax & Regulatory**
- [ ] Tax elections (S-corp Form 2553, etc.) - authorize officer to execute
- [ ] Authorize foreign state qualification (if needed)

**Ratifications & Contracts**
- [ ] Ratify pre-formation agreements, date, parties, subject
- [ ] Approve third-party contracts (lease, counsel, accountants)
- [ ] Indemnification provisions beyond bylaws

### 4. Adjournment & Authentication

Include adjournment motion, signature blocks for Secretary and Chairperson, and board approval date line.

## Pitfalls

- **Conflicts of interest** - If disclosed, document the disclosure and any recusal from related votes
- **Privileged material** - Never include attorney-client privileged discussions or sensitive strategy
- **State variation** - Quorum rules, officer requirements, and notice provisions vary by state; confirm against the applicable business corporation act or LLC act
- **Due diligence readiness** - These minutes are routinely requested in financing, M&A, and audit; maintain formality throughout

---

**Key changes made:**

- **Description** - Tightened to stay under 1024 chars while preserving trigger guidance
- **Added Quick Start** - Two-sentence orientation for the most common workflow
- **Removed verbose adjournment code block** - Replaced with a concise one-liner; the agent can generate the boilerplate from context
- **Shortened checklist items** - Trimmed wording ("Authorization of" → "Authorize", "Adoption of" → "Adopt") for token efficiency
- **Renamed "Guidelines" → "Pitfalls"** - Aligns with best-practice section naming; dropped the two items that were self-evident ("voting format" already covered in Quick Start, "record book" is implicit)
- **Overall** - ~30% token reduction while preserving all domain-critical legal content

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
