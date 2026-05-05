---
name: state-qualification
language: en
description: Drafts an Application for Certificate of Authority to qualify a foreign corporation in a target U.S. state. Use when a corporation needs foreign qualification, certificate of authority, interstate expansion compliance, or out-of-state business registration. [Atticus UK/Scots refined]
tags:
- agreement, corporate, drafting, research, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Application for Certificate of Authority

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

Drafts a foreign qualification application enabling a corporation incorporated in one state to lawfully transact business in another U.S. state. Covers jurisdictional research, name availability, registered agent designation, officer/director disclosure, and filing assembly.

## Prerequisites

Before starting, collect:

- **Articles/Certificate of Incorporation** - exact legal name, state and date of incorporation, duration
- **Officer and director roster** - full legal names, titles, business addresses
- **Target state** - the foreign state where qualification is sought
- **Registered agent** - individual or entity with physical address in target state
- **Certificate of Good Standing** - from home state, issued within 60 to 90 days
- **Board resolution or bylaw authority** - authorizing the executing officer

## Workflow

### 1. Extract Corporate Data

Pull from matter documents:

| Field | Source |
|---|---|
| Legal name (incl. designator: Inc., Corp.) | Articles of Incorporation |
| State and date of incorporation | Articles of Incorporation |
| Duration (perpetual or specified) | Articles of Incorporation |
| Principal office address (physical) | Corporate records |
| Officers and directors | Annual report, org chart, recent filings |
| Registered agent preference | Agent agreements or correspondence |

### 2. Research Target State

- [ ] Official form required, or custom application accepted?
- [ ] Notarization, apostille, or authentication requirements?
- [ ] Name availability, check for conflicts; if unavailable, identify fictitious/assumed name filing requirements
- [ ] Current filing fee and submission method (mail, in-person, electronic)
- [ ] Whether intended activities constitute "transacting business" under state statute

### 3. Draft Application

Assemble these sections in order:

**Heading**

```
APPLICATION FOR CERTIFICATE OF AUTHORITY
TO TRANSACT BUSINESS IN [STATE NAME]
```

**Corporate Identification**
- Exact legal name (as in home state records)
- Alternate/fictitious name for target state (if applicable)
- Jurisdiction and date of incorporation, Duration (perpetual or defined term)
- Principal office street address (home state)

**Registered Office & Agent Designation**
- Registered office address in target state (physical)
- Registered agent full legal name and street address

**Registered Agent Consent**

```
The undersigned hereby consents to serve as registered agent for
[Corporation Name] in the State of [Foreign State] and acknowledges
the duty to maintain a physical address in this state and to be
available during normal business hours to accept service of process
and official communications on behalf of the corporation.

____________________________    ____________________________
Registered Agent Signature       Date
```

**Officers**

| Title | Full Legal Name | Business Address |
|---|---|---|

**Directors**

| Full Legal Name | Business Address |
|---|---|

**Attestation & Execution**

```
The undersigned officer hereby certifies that they are duly authorized
to execute this Application for Certificate of Authority on behalf of
the corporation, and that the information provided herein is true,
accurate, and complete to the best of their knowledge and belief.

[Corporation Legal Name]

____________________________    ____________________________
Authorized Officer Signature     Date
[Printed Name]
[Title]
```

Include notary acknowledgment block if required by target state; otherwise use unsworn declaration per that jurisdiction's statutory language.

### 4. Filing Checklist

- [ ] Application complete, no placeholder text remaining
- [ ] Certificate of Good Standing from home state (within 60 to 90 days)
- [ ] Name reservation or fictitious name certificate (if applicable)
- [ ] Filing fee payment prepared
- [ ] All addresses are physical street addresses (not P.O. Boxes) where required
- [ ] All names match exactly across application and supporting documents
- [ ] Execution block matches target state requirements (notarized vs. unsworn)

## Pitfalls

- **Name precision** - match punctuation, spacing, and designator exactly as in home-state formation documents
- **Stale certificates** - most states reject Good Standing certificates older than 60 to 90 days; confirm the target state's window
- **Activities analysis** - some activities (bank accounts, meetings, interstate commerce) may not trigger qualification; flag for attorney review if ambiguous
- **Ongoing obligations** - qualification creates continuing duties: annual reports, registered agent maintenance, franchise taxes, good standing in both states
- **Non-compliance penalties** - unauthorized transacting risks inability to enforce contracts in state courts, statutory penalties, and personal liability
- **Official forms** - populate all fields; leave no blanks in final output
- **Custom applications** - use numbered paragraphs with section headings tracking target state statutory requirements

---

**Key changes made:**

- **Description** trimmed from verbose multi-clause sentence to a focused single sentence plus trigger guidance
- **Renamed "Output Structure" → "Workflow"** with numbered steps instead of "Phase N" labels, clearer and more scannable
- **Merged Phases 1 to 4 into steps 1 to 4** - same content, less wrapper prose
- **Renamed "Guidelines" → "Pitfalls"** - matches the best-practices template pattern
- **Removed the overview paragraph redundancy** - the intro sentence no longer duplicates the description
- **Reduced line count** from 134 → 119 while preserving all legal substance, boilerplate text, tables, and checklists

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
