---
name: ucc-lien-release-evidence
language: en
description: 'Drafts an Evidence of UCC Lien Release documenting termination of a UCC-1 financing statement for U.S. transactional closings. Trigger when the user needs a UCC-3 termination certificate, secured-party release letter, payoff evidence, or clear-title closing deliverable. Keywords: "UCC-1", "UCC-3 termination", "lien release", "secured party release", "clear title", "payoff letter". [Atticus UK/Scots refined]'
tags:
- agreement, drafting, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Evidence of UCC Lien Release

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

Produces a formal certificate or letter evidencing full or partial release of a UCC-1 lien, suitable for closing binders and due-diligence packages.

## Quick Start

Gather before drafting:

1. UCC-1 details, file number, filing date, filing office, jurisdiction
2. Debtor and secured party legal names and addresses (as filed)
3. Collateral description from UCC-1 (and any amendments)
4. Security agreement date and governing documents
5. Satisfaction evidence, payoff statement, wire confirmation, release letter, settlement, or order
6. UCC-3 termination details if filed, file number, date, stamped copy
7. Release scope (full or partial) and effective date
8. Any continuation, assignment, or amendment filings on the same collateral

## Workflow

### 1. Build Source Data Table

| Field | Req | Source | Notes |
|---|---|---|---|
| Debtor legal name | Yes | UCC-1 | Exact spelling, punctuation, entity suffix |
| Secured party legal name | Yes | UCC-1 | Exact spelling, punctuation, entity suffix |
| Filing office + jurisdiction | Yes | UCC-1 | Secretary of State or equivalent |
| UCC-1 file number | Yes | UCC-1 | Include filing date |
| Collateral description | Yes | UCC-1 | Mirror verbatim |
| Security agreement date | Yes | Agreement | Identify governing document |
| Release scope | Yes | Instructions | Full vs partial; list retained collateral |
| Effective date | Yes | Instructions | Execution or payoff date |
| UCC-3 termination file no. | If filed | UCC-3 | Include date and stamped copy |
| Satisfaction evidence | Yes | Payoff/letters | Cite exhibit numbers |

Resolve any inconsistencies (name mismatches, collateral gaps) before proceeding.

### 2. Build Filing Chronology (if multiple filings)

| Filing No. | Type | Filing Office | Filing Date | Purpose |
|---|---|---|---|---|
| | UCC-1 | | | Original financing statement |
| | UCC-3 | | | Amendment / continuation / assignment / termination |

### 3. Draft Document

**Required sections:**

| Section | Content | Notes |
|---|---|---|
| Title + Date | "Evidence of UCC Lien Release"; document date | Exact title |
| Parties | Debtor and secured party details | Match UCC-1 |
| Filing Identification | File number, office, date | All jurisdictions |
| Secured Transaction Summary | Agreement date, obligation, collateral | Track UCC-1 text |
| Release Statement | Full/partial release; satisfaction; no further claims | Unambiguous language |
| Termination Status | UCC-3 details or intent to file | Never imply filed if not filed |
| Effective Date | Specific date | Tie to payoff or execution |
| Exhibits | List supporting documents | Labeled exhibits |
| Execution | Authorized signatory + title | Notarization if required |

### 4. Assemble Exhibits

- [ ] UCC-1 financing statement (file-stamped)
- [ ] UCC-3 termination (file-stamped if available)
- [ ] Payoff letter or satisfaction evidence
- [ ] Security agreement (if cited)
- [ ] Order/settlement (if release from legal proceeding)

Verify all exhibit cross-references in the document body.

## Template

```text
EVIDENCE OF UCC LIEN RELEASE

Date: {Document Date}

1. Parties
Secured Party: {Legal Name}, {Entity Type}, {Jurisdiction of Organization}
Address: {Address}
Debtor: {Legal Name}, {Entity Type}, {Jurisdiction of Organization}
Address: {Address}

2. Financing Statement Identification
UCC-1 File Number: {File Number}
Filing Office/Jurisdiction: {Filing Office, State}
Filing Date: {Filing Date}
Additional Filings (if any): {List UCC-3 amendments/continuations/assignments}

3. Secured Transaction Summary
Security Agreement Date: {Date}
Obligation: {Brief description of secured obligations}
Collateral: {Collateral description mirroring UCC-1}

4. Release and Termination
The Secured Party hereby releases, terminates, and fully discharges all security interests,
liens, and claims in the collateral described above arising under the UCC-1 financing
statement identified in Section 2. All secured obligations have been satisfied in full, and
the Secured Party asserts no further interest in the collateral or proceeds.

5. Termination Filing
{If filed} A UCC-3 Termination Statement has been filed under File No. {UCC-3 No.} on {Date}.
{If not filed} The Secured Party will file a UCC-3 Termination Statement with the filing office
identified above.

6. Effective Date
This release is effective as of {Effective Date}.

7. Exhibits
Exhibit A: UCC-1 Financing Statement
Exhibit B: UCC-3 Termination Statement (file-stamped, if available)
Exhibit C: Payoff/Release Evidence {wire confirmation / payoff letter / order}

Secured Party:

By: ___________________________
Name: {Signatory Name}
Title: {Title}
Date: {Signature Date}

{Optional Notary Acknowledgment}
```

## Pitfalls

- **Name matching** - Debtor and secured party names must exactly match the UCC-1; flag any discrepancy for confirmation.
- **Collateral scope** - Mirror the UCC-1 collateral description verbatim; paraphrasing can narrow or expand scope.
- **Partial releases** - Explicitly list released collateral and expressly preserve remaining liens.
- **UCC-3 status** - Never state a UCC-3 was filed without the file number and date.
- **Filing office terminology** - Use consistent format: "Secretary of State, {State}".
- **Notarization** - Add only if required by jurisdiction or client request.
- **Uncertain citations** - Mark with `[VERIFY]`.
- **Tone** - Keep neutral and evidentiary; no advocacy or legal conclusions.

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
