---
name: guaranty-agreement
language: en
description: Drafts U.S. commercial guaranty agreements securing a debtor's obligations to a creditor. Covers payment/collection elections, scope, caps, waivers, defaults, remedies, and enforceability. Trigger when the user needs a guaranty, guarantee, surety, continuing guaranty, payment guaranty, credit enhancement, or lender-required guaranty for loans, credit facilities, or real estate financing. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Guaranty Agreement

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

Draft a commercially enforceable guaranty clarifying scope, liability, waivers, and remedies.

## Gather Before Drafting

1. **Underlying obligation** - date, parties, principal amount, obligations covered, maturity, collateral
2. **Guarantor** - legal name, entity type, jurisdiction, authority, address, financial condition
3. **Creditor** - legal name, address, notice info
4. **Elections** - payment vs collection, cap, term, continuing scope, governing law, dispute forum
5. **Execution** - signatories, titles, notarization or spousal consent if needed

## Elections Checklist

Resolve each before drafting:

- Type: `Payment` · `Collection`
- Scope: `All obligations` · `Specified obligations`
- Cap: `None` · `$[amount]`
- Term: `Continuing` · `Fixed end date`
- Survival: `Survives bankruptcy/insolvency`
- Multiple guarantors: `Joint and several` · `Several`
- Waivers: `Presentment/notice/defenses` included, Subrogation: `Deferred until paid in full`
- Remedies: `Setoff` · `Costs` · `Attorneys' fees`
- Dispute: `Forum` · `Jury waiver` · `Arbitration`
- Notices: `Method` · `Address` · `Email allowed?`
- Assignment: `Creditor assignable` · `Guarantor restricted`

## Section Map

| Section | Content |
|---|---|
| Parties | Legal names, entity types, jurisdictions, addresses |
| Recitals | Underlying obligation summary, relationship, consideration |
| Definitions | "Obligations," "Guaranteed Obligations," "Guarantor," "Creditor" |
| Guaranty | Payment vs collection, unconditional, continuing, cap, survival |
| Waivers | Presentment, demand, notice, defenses, marshaling |
| Subrogation | No subrogation until paid in full |
| Consideration | Credit/forbearance and indirect benefit |
| Reps & Warranties | Authority, enforceability, solvency, no litigation |
| Covenants | Maintain existence, provide financials, no asset stripping |
| Events of Default | Payment default, covenant breach, insolvency, misrep |
| Remedies | Acceleration, direct action, setoff, fees |
| Governing Law | State law, jurisdiction, venue, jury waiver |
| Miscellaneous | Amendments, assignments, notices, counterparts, e-sign |
| Execution | Signature blocks with titles and dates |

## Drafting Steps

1. Define parties and underlying obligation details.
2. Insert elections from checklist.
3. Draft guaranty grant with scope, cap, and continuation.
4. Add waivers, subrogation deferral, and costs.
5. Add reps, covenants, defaults, and remedies.
6. Finalize boilerplate and execution blocks.

## Core Clause Templates

Guaranty grant:

```
Guarantor hereby unconditionally and irrevocably guarantees to Creditor the full and punctual payment and performance of the Guaranteed Obligations. This is a guaranty of [PAYMENT/COLLECTION] and not of collection only. [If payment: Creditor may proceed directly against Guarantor without first exhausting remedies against Debtor or collateral.] [If continuing: This guaranty is continuing and covers all present and future Obligations, whether direct or indirect, absolute or contingent, now existing or hereafter arising.]
```

Cap (if applicable):

```
Guarantor's maximum aggregate liability under this Guaranty shall not exceed $[AMOUNT], plus interest, fees, and enforcement costs to the extent permitted by law.
```

Waivers:

```
Guarantor waives presentment, demand, notice of acceptance, notice of default, protest, diligence, and all suretyship defenses, including any requirement that Creditor first proceed against Debtor or any collateral, and any defense arising from any modification, extension, or release of Debtor or collateral.
```

Subrogation:

```
Guarantor shall have no right of subrogation, reimbursement, contribution, or indemnity against Debtor until Creditor has been paid in full in cash.
```

Costs:

```
Guarantor shall reimburse Creditor for all reasonable costs of enforcement, including attorneys' fees and court costs.
```

Remedies:

```
Upon an Event of Default, Creditor may declare the Guaranteed Obligations immediately due and payable and exercise any and all rights and remedies available at law or in equity, including setoff.
```

Signature block:

```
GUARANTOR:
[Legal Name]
By: __________________________
Name:
Title:
Date:
```

## Pitfalls & Checks

- Specify payment vs collection explicitly, ambiguity invites dispute.
- State cap only if negotiated; otherwise confirm no cap.
- Tie consideration to the credit extension or forbearance.
- Confirm authority and solvency reps for entity guarantors.
- Never omit waiver of defenses when creditor expects payment guaranty.
- Include jury waiver only if enforceable in the governing jurisdiction.
- Verify jurisdiction-specific spousal consent or notarization requirements.
- Check statute of frauds compliance; check anti-deficiency rules if not purely commercial.
- Use consistent defined terms, capitalize and quote on first use.

---

**Key changes from original:**

- **Frontmatter**: Removed `tags` (not in spec), tightened `description` to third-person with explicit trigger guidance
- **Structure**: Renamed "Prerequisites" → "Gather Before Drafting", "Output Structure / Process" → split into focused sections ("Elections Checklist", "Section Map", "Drafting Steps", "Core Clause Templates"), "Guidelines" → "Pitfalls & Checks"
- **Token savings**: Removed redundant "Key Elections Checklist" / "Section Map Table" / "Drafting Steps" sub-headers under a single parent; stripped `text` language identifiers from code blocks; consolidated guideline prose into terse bullet checks
- **All legal substance preserved** - same elections, same section map, same clause templates, same enforceability guidance

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
