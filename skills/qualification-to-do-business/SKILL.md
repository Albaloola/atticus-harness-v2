---
name: qualification-to-do-business
language: en
description: 'Drafts U.S. foreign-corporation qualification filings (Certificate of Authority) for a target state. Use when registering a corporation to transact business outside its home jurisdiction, appointing a registered agent, checking qualification triggers, or assembling a filing-ready package. Trigger terms: certificate of authority, foreign corporation, register to do business, registered agent appointment. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# State Qualification to Do Business

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

Produces a state-specific Certificate of Authority packet for a foreign corporation seeking authorization to transact business in a U.S. state.

## Quick Start

Gather before beginning:

- Formation documents (articles/certificate, bylaws, officer authorization)
- Exact legal name as filed in home jurisdiction (including punctuation and designator)
- Home-jurisdiction certificate of good standing/existence, Current officers/directors with titles and addresses, Target-state filing requirements (form, fee, method, signature/notary rules)
- Name-availability result in target state

## Workflow

### 1. State Compliance Snapshot

Build this table first, all downstream work depends on it.

| Item | Output |
|---|---|
| Target state + filing office | Exact program and office |
| Qualification required? | Yes/No + legal basis or exception |
| Official form | Title, version, or "none available" |
| Filing name | Legal name + assumed-name requirement if any |
| Registered agent | Name, physical address, consent format |
| Notarization/declaration | Required? Text if yes |
| Certificate authentication | Apostille/consular rule if applicable |
| Fee + payment channel | Amount and method |
| Submission channel | Online/mail/in-person + portal ID |

If qualification is **not required**, output a reasoned denial memo instead of a filing package and stop.

### 2. Collect Core Data

| Field | Rule |
|---|---|
| Legal name | Match formation document exactly |
| Formation jurisdiction + date | State/country + incorporation date |
| Duration | Perpetual or fixed term |
| Principal office | Physical address (no PO box if disallowed) |
| Registered office | Physical in target state |
| Registered agent | Full name + address + availability |
| Officers | Names, titles, business addresses |
| Directors | Names + addresses |
| Authorized filer | Title + authority source |

Do not infer missing officer/agent details, request them.

### 3. Draft the Application

1. Build statutory sections: identification, in-state presence, registered office/agent, governance disclosure, certification, signature block.
2. Populate from source records only.
3. Insert signature block with state-specific attestation/declaration.
4. Add registered-agent consent using required language.
5. Append filing checklist: application, good-standing certificate, name reservation docs (if needed), fee payment, required affidavits.
6. Add transacting-business risk note if applicability is uncertain.

### 4. Validate Before Output

- [ ] No placeholders remain
- [ ] Registered-agent consent present and complete
- [ ] Good-standing certificate recency meets target-state tolerance [VERIFY]
- [ ] Officer/director rosters current and sourced
- [ ] Notary/declaration block matches state requirement
- [ ] Fee amount verified from latest state guidance [VERIFY]

## Pitfalls

- **No cross-state assumptions.** Each state has unique forms, fees, and requirements, use target-state authority directly.
- **Preserve exact legal name.** Capitalization, punctuation, and entity designator must match formation documents.
- **Foreign-country incorporation.** Evaluate apostille or authentication chain requirements [VERIFY].
- **Exempt activities.** If activity may be exempt (isolated transaction, interstate-only), flag for legal review [VERIFY].

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
