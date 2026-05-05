---
name: statement-of-information
language: en
description: Drafts a U.S. Statement of Information for periodic Secretary of State filing. Validates corporate name, officers, directors, registered agent, and addresses against source records. Triggers on annual/biennial compliance filings, officer or address updates, or good-standing maintenance tasks. [Atticus UK/Scots refined]
tags:
- corporate, drafting, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Statement of Information

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

Prepares a jurisdiction-compliant Statement of Information for periodic Secretary of State filing to maintain corporate good standing.

## Prerequisites

1. **Corporate ID** - exact legal name (with designator: Inc., Corp., Co.) and SOS entity/file number
2. **Prior filing or articles** - for cross-reference and change detection
3. **Officer/director roster** - full legal names, titles, addresses; confirmed by board resolutions
4. **Registered agent** - name, physical street address in filing state, confirmed consent to serve
5. **Principal business address** - physical street address (PO boxes generally prohibited)
6. **Filing state and deadline** - drives form selection, frequency, signature rules, and penalty exposure

## Workflow

### 1. Corporation Identification

| Field | Requirement |
|---|---|
| Legal name | Exact match to SOS record including punctuation and designator |
| Entity/file number | As assigned by SOS |
| State of incorporation | Domestic domicile; foreign corps also provide qualification certificate number |
| Filing jurisdiction | State where SOI is being submitted |

### 2. Principal Office Address

- Physical street address (number, street, suite, city, state, ZIP)
- PO boxes prohibited in most states, confirm exception before using, Separate mailing address if different from principal office

### 3. Officers

Minimum required in most states:

| Title | Role |
|---|---|
| CEO / President | Primary executive; common authorized signer |
| Secretary | Corporate records and governance |
| CFO / Treasurer | Financial operations |

- One individual may hold multiple titles, list all, Full legal name + complete address per officer, Verify appointment against board resolutions or minutes

### 4. Directors

- All current board members with full legal name and address, Reflect current membership, do not carry forward outdated rosters, Confirm filing state's rule: all directors vs. minimum count, Residence addresses become public record, advise client

### 5. Registered Agent

| Field | Requirement |
|---|---|
| Agent name | State resident or commercial agent (exact registered name) |
| Address | Physical street address in filing state, no PO boxes |
| Availability | Staffed during business hours for service of process |
| Consent | Agent must have agreed to serve |

### 6. Business Description

- Specific description of primary commercial activity, Never use "general business purposes" or similar boilerplate, Align with corporate purpose clause in Articles of Incorporation

### 7. Certification and Execution

| Field | Requirement |
|---|---|
| Authorized signer | Current officer or as state permits |
| Declaration | Information is true, correct, and complete |
| Perjury clause | Required in some jurisdictions, verify |
| Notarization | Required in some jurisdictions, verify |
| Execution date | Must be current; file promptly after signing |

## Pitfalls

- **Filing frequency** - annual in most states, biennial in others; confirm per entity type and jurisdiction
- **Late filing** - triggers penalties; sustained non-compliance may cause suspension or administrative dissolution
- **Foreign corps** - distinguish incorporation state from qualification state; file under foreign classification with qualification number
- **Name exactness** - any deviation in punctuation, spacing, or abbreviation risks rejection
- **Address currency** - confirm all addresses are current, especially after relocation or remote-operations transition
- **Consistency check** - cross-reference all fields against bylaws, resolutions, and prior filings before finalizing

---

**Key changes made:**

- **Frontmatter `description`**: Condensed from 3 sentences of verbose explanation to a tight 3-clause summary with clear trigger guidance
- **Section rename**: "Output Structure" → "Workflow" (action-oriented); "Guidelines" → "Pitfalls" (scannable, warns-first)
- **Prerequisites**: Tightened labels and removed redundant phrasing (e.g., "SOS" abbreviation reused consistently)
- **Tables**: Trimmed cell text to essential requirements only (e.g., "Current officer or as state permits" instead of longer enumeration)
- **Bullets**: Cut filler words throughout; removed the example line in Business Description (unnecessary for agent instruction)
- **Overall**: ~25% token reduction while preserving every compliance requirement and legal distinction

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
