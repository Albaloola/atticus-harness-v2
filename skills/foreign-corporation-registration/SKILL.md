---
name: foreign-corporation-registration
language: en
description: 'Drafts a foreign corporation registration (Certificate of Authority) package to qualify a U.S. corporation for business in a new state. Extracts corporate identity, capital structure, officers, and registered agent details from uploaded records, then produces a jurisdiction-specific application with cover letter, document checklist, and filing instructions. Use when a corporation expands across state lines, opens offices or employs workers in a new state, or needs foreign qualification. Triggers: foreign qualification, certificate of authority, doing business, multi-state expansion. [Atticus UK/Scots refined]'
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Foreign Corporation Registration

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

Drafts a state-compliant Certificate of Authority application package for a corporation to lawfully conduct business outside its home state.

## Prerequisites

Gather before drafting. If target state is unspecified, request it first, it controls all downstream requirements.

1. **Target state**
2. **Articles of incorporation** + all amendments, bylaws
3. **Certificate of Good Standing** from home state (within 30 to 90 days; verify target state's recency window)
4. **Officer/director roster** - full legal names, titles, addresses
5. **Registered agent in target state** - name, physical street address (no PO boxes), consent to serve
6. **Capital structure** - authorized shares, classes, par values
7. **Planned business activities** in target state

## Workflow

```
- [ ] Collect prerequisites
- [ ] Resolve name availability in target state
- [ ] Draft application sections
- [ ] Compile supporting document checklist
- [ ] Prepare cover letter and filing instructions
- [ ] Flag any missing info with legal explanation
```

## Application Sections

### 1. Header

State-specific title, corporation's exact legal name (from articles), incorporation date/state, target state, form number if applicable.

### 2. Name Availability

| Scenario | Resolution |
|---|---|
| Available as-is | Use exact legal name |
| Unavailable/conflicting | Assumed name / DBA registration |
| Missing required designator | Add Inc./Corp. per target state rules |
| Name reserved | Attach reservation certificate |

### 3. Corporate Identity

Incorporation date, home state file number, principal office address, EIN, fiscal year end, authorized capital (shares, classes, par values, preferences). Reflect all amendments with certified copies.

### 4. Officers & Directors

Full legal name, title, business address for each. Must match home state records exactly, inconsistencies cause rejection.

### 5. Registered Agent

Physical street address in target state (no PO boxes). Include written consent to serve using state's official form or notarized statement. Must be a resident individual, authorized entity, or licensed agent service.

### 6. "Doing Business" Analysis

**Triggers registration:** office/warehouse/retail space, employing in-state workers, owning/leasing real property, maintaining inventory, regular in-state commercial transactions.

**Common exemptions (verify per state):** bank accounts, board meetings, transfer agencies, acquiring debt, isolated transactions (typically 30 days or fewer), defending lawsuits.

Draft concise analysis showing activities exceed exemption thresholds.

### 7. Supporting Documents

- [ ] Certificate of Good Standing (within target state's recency window)
- [ ] Certified articles + amendments (official seal from home state)
- [ ] Registered agent consent
- [ ] Name reservation / DBA registration (if needed)
- [ ] Corporate resolution (if signatory is not a listed officer)
- [ ] Cover letter itemizing enclosures

### 8. Filing Instructions

Include method (mail / in-person / online / expedited), expected timeline, fees, accepted payment methods, state office contact, and whether originals or copies are accepted.

### 9. Execution Block

Signatory per bylaws (president, VP, secretary, treasurer, or authorized officer). Include notary block if target state requires notarization. Add certification language (e.g., "under penalty of perjury") if required.

## Critical Checks

- **Name matching** - any variation across application, articles, and good standing certificate causes rejection
- **Good standing recency** - most states require 30 to 90 days; verify target state's specific window
- **Registered agent** - must be physical street address; PO boxes rejected
- **Amendments** - all post-incorporation amendments must be reflected and included as certified copies
- **Authentication** - some states require apostilles for out-of-state documents; verify
- **Interstate commerce** - purely interstate transactions may be exempt; analyze before recommending registration
- **Non-compliance penalties** - inability to sue in state courts, back taxes, fines, personal officer/director liability
- **Missing info** - flag with specific explanation of legal requirement and how to obtain it

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
