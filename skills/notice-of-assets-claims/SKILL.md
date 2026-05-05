---
name: notice-of-assets-claims
language: en
description: Drafts a Notice of Assets and Request for Claims for probate estates. Triggers when administering an estate, publishing creditor notice, filing a probate notice of assets, or establishing claim bar dates. Handles jurisdictional research, asset disclosure, claim filing procedures, and execution requirements under state-specific probate codes. [Atticus UK/Scots refined]
tags:
- drafting, letter, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Notice of Assets and Request for Claims

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

Produces a probate notice that notifies creditors of a decedent's estate and establishes the legal framework for claim submission under applicable state law.

## Required Inputs

1. **Decedent** - full legal name, aliases, DOD, DOB, last residence
2. **Personal representative** - name, relationship, appointment date, independent administration authority (Y/N)
3. **Court** - case number, county, state, court address with department/division
4. **Counsel** - attorney name, bar number, firm, address, phone, email
5. **Jurisdiction's probate code** - research state-specific notice requirements before drafting

## Quick Start

1. Collect all required inputs; flag missing items with `[TO BE PROVIDED]`.
2. Complete jurisdictional research checklist below.
3. Draft notice following the output structure.
4. Verify all deadlines, statutory citations, and publication requirements.
5. Deliver document ready for immediate filing and publication.

## Jurisdictional Research Checklist

Verify for the applicable state before drafting:

| Item | Confirm |
|---|---|
| Deadline trigger | First publication, mailing, or date of death? |
| Claim period | Typically 3 to 6 months; varies by state |
| Mandatory language | Verbatim statutory warnings required? |
| Asset disclosure | Category-level vs. itemized; estimated value required? |
| Publication | Newspaper of general circulation, legal journal, frequency, consecutive weeks |
| Service methods | Personal delivery, certified mail, other |
| Claim form | Court-provided form or freeform? |
| Notarization | Required for publication or filing? |

## Output Structure

### 1. Header

- Title: **NOTICE OF ASSETS AND REQUEST FOR CLAIMS**
- Court jurisdiction (county, state), case number, date of issuance, Format per local court rules

### 2. Identification Block

Include: decedent name/aliases, DOD, last residence, personal representative name/title/appointment date, administration type, counsel with bar number and contact info.

### 3. Asset Disclosure

- Describe assets **by category only** - do not itemize:
  - Real property, financial accounts, personal property, potential claims/intangible assets, If estimated value required, qualify as preliminary and subject to revision, Include language that additional assets may be discovered

### 4. Claim Requirements and Deadline

| Element | Content |
|---|---|
| **Deadline** | Calendar date AND descriptive period (e.g., "within four months from first publication, i.e., [Date]") |
| **Bar language** | Untimely claims are **barred forever** regardless of validity or lack of actual knowledge |
| **Scope** | Applies to contract, tort, statutory, and all other claims unless specifically exempted |
| **Claim contents** | Written; state basis and amount; attach documentation; signed under penalty of perjury |
| **Identifiers** | Reference decedent's name and estate case number |
| **Special claims** | Address contingent, unliquidated, and pending-litigation claims with modified procedures |

### 5. Filing and Service Instructions

1. **File** with court at stated address/department
2. **Serve** copy on personal representative or counsel
3. State **acceptable service methods** per jurisdiction
4. Identify where to obtain **claim forms** if required
5. Note: Filing alone is **insufficient** - service on the representative is also required

### 6. Execution Block

Include perjury declaration with signature line for personal representative. If jurisdiction requires notarization, append a notary block with state/county, signature, commission number, and expiration.

## Formatting

- 12-point serif font, 1-inch margins, line spacing per local rules, Clear section headings; formal but accessible tone

## Pitfalls and Checks

- **Deadline precision is critical** - errors in the bar date can invalidate the notice and expose the estate to liability
- **Do not over-disclose assets** - category descriptions satisfy requirements without compromising negotiating position
- **Verify statutory citations** against current code; mark uncertain references with `[VERIFY]`
- **Due process** - notice must be prominent and unambiguous enough to withstand constitutional challenge
- **Never fabricate details** - flag missing information with `[TO BE PROVIDED]`

---

**Key changes made:**

- **Description** rewritten in third-person with explicit trigger guidance
- **Prerequisites** renamed to **Required Inputs** for clarity, Added **Quick Start** section for at-a-glance workflow
- **Jurisdictional Research Checklist** trimmed (removed filing fees row, low-value; consolidated wording)
- **Identification Block** and **Execution Block** collapsed from verbose code-fence templates to concise prose directives, the agent generates the actual content, so spelling out every placeholder line wastes tokens
- **Formatting Requirements** and **Guidelines** consolidated into tighter **Formatting** and **Pitfalls and Checks** sections, Removed redundant prose throughout while preserving all legally critical instructions

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
