---
name: abstract-of-judgment
language: en
description: Drafts a recordable Abstract of Judgment to create a judgment lien on a debtor's real property. Extracts party names, monetary components, and judgment details from case documents, then applies jurisdiction-specific formatting and certification requirements. Use post-judgment in commercial litigation when enforcing monetary awards, perfecting judgment liens, or preparing lien filings with the county recorder. [Atticus UK/Scots refined]
tags:
- drafting, litigation, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Abstract of Judgment

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

Produces a recordable Abstract of Judgment that perfects a judgment lien against the debtor's real property.

## Prerequisites

1. **Judgment order** - final judgment with entry date, relief granted, and any amendments
2. **Case filing documents** - complaint, caption, case number
3. **Party information** - full legal names, addresses, aliases/DBAs for all creditors and debtors
4. **Fee/cost documentation** - attorney fee orders, cost memoranda, interest calculations
5. **Jurisdiction** - state and county where the abstract will be recorded

## Quick Start

1. Collect all prerequisites above from the case file.
2. Identify whether the jurisdiction requires a mandatory court form (e.g., California EJ-001 `[VERIFY]`).
3. Walk through each output section below, sourcing every field from the documents.
4. Run the jurisdiction compliance checklist before finalizing.

## Output Structure

### 1. Court and Case Information

| Field | Source |
|---|---|
| Court name (full, with department/division) | Case caption |
| County | Filing records |
| Case number | Case caption |
| Date judgment entered | Judgment order |
| Judgment type (default / summary / verdict / bench trial) | Judgment order |

### 2. Party Identification

For each judgment creditor and judgment debtor, extract:

- Full legal name, must match judgment exactly, Individual vs. entity designation (include corporate suffixes)
- Aliases, DBAs, former names, Last known address (debtor address is critical for enforcement)
- Middle initials and suffixes, verify spelling against judgment

Flag any name discrepancies between the complaint and the judgment.

### 3. Monetary Breakdown

Present every amount in both numerical and written form.

| Component | Amount |
|---|---|
| Principal | $ |
| Costs of suit | $ |
| Attorney fees | $ |
| Other awards | $ |
| **Subtotal** | **$** |
| Post-judgment interest | $ |
| **Total due as of [date]** | **$** |

**Interest calculation:** Include statutory rate `[VERIFY: rate varies by state]`, simple vs. compound method, accrual start date, and controlling statute (e.g., Cal. Civ. Proc. § 685.010 `[VERIFY]`).

### 4. Judgment Modifications

If applicable, list each amendment with date of order, nature of modification, and effect on the monetary amount.

### 5. Certification Block

- Clerk certification language per jurisdiction's required form, Signature line for clerk and court seal placement, Date of certification, Notarization block if jurisdiction requires

## Jurisdiction Compliance Checklist

- [ ] Check for mandatory court forms (e.g., California Judicial Council Form EJ-001 `[VERIFY]`)
- [ ] Verify statutory authority for judgment liens in the state
- [ ] Confirm recording requirements for the target county
- [ ] Determine whether legal property descriptions are required
- [ ] Verify lien duration and renewal deadlines under state law
- [ ] Confirm whether abstract covers real property only or also personal property

## Guidelines

- Every fact must trace to a source document, errors can void the lien, Specify joint and several liability status when multiple debtors exist, Do not conflate the abstract (lien creation) with writs of execution (enforcement)
- Mark unverified statutory citations with `[VERIFY]`
- Recording requirements vary by county even within the same state

## Troubleshooting

| Problem | Resolution |
|---|---|
| Party name in judgment differs from complaint | Use the judgment spelling; flag the discrepancy for counsel review |
| Jurisdiction has no standard abstract form | Draft from statutory requirements; cite the enabling statute |
| Interest rate unclear or recently changed | Insert `[VERIFY]` and note the rate used with its effective date |
| Multiple amended judgments | Chain each amendment chronologically; use the most recent total |

---

**Key changes made:**

- **Description** tightened to include clear trigger keywords while staying under 1024 chars
- **Added Quick Start** section for rapid orientation per spec requirements
- **Added Troubleshooting** table (required by the SKILL-SPEC)
- **Consolidated Monetary Breakdown** - merged the interest sub-list into a single paragraph, removed the redundant "Amount (written)" column since the guideline already states dual format
- **Compressed Party Identification** - converted from checkbox list to bullet list with inline guidance, removed redundant framing
- **Merged Certification Block** items for conciseness
- **Trimmed Guidelines** - removed items that duplicated checklist entries or output section instructions
- **Reduced from 94 to ~82 lines** while preserving all domain-critical content

Want me to attempt writing the file again?

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
