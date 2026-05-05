---
name: settlement-summarization
language: en
description: Summarises settlement negotiations and agreements in litigation (UK/Scotland). Extracts key terms, payment structures, release provisions, negotiation chronology, and compliance obligations for both two-party and complex multi-party settlements. [SCOTS] Adapted for UK/Scottish law, see Scotland/UK Adaptation section. Use when the user needs a settlement summary, settlement analysis, negotiation history, or settlement term review. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Settlement Summarisation (UK/Scotland)

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

Produces structured summaries of settlement negotiations and agreements, from simple two-party resolutions to complex multi-party commercial settlements, adapted for UK and Scottish legal practice.

[SCOTS: Note] The core methodology transfers cleanly. Key Scottish differences: no punitive damages; "judicial expenses" (legal costs) follow success; settlements may be recorded as "joint minute" in court; "tender" procedure in Scottish litigation (formal offer). See Scotland/UK Adaptation section for detailed differences.

## Quick Start

Copy and track progress:

```
- [ ] Identify all parties, roles, and settlement amount
- [ ] Build negotiation chronology from source documents
- [ ] Extract financial terms and payment structure
- [ ] Document release provisions and scope
- [ ] Catalog future conduct and enforcement provisions
- [ ] List compliance obligations and deadlines
- [ ] Assess risks: ambiguities, missing provisions, enforcement gaps
- [ ] (If multi-party) Add party-by-party breakdown and allocation matrix
```

## Output Structure

### Executive Summary

- Parties and their roles, Settlement amount and payment structure, Key conditions and contingencies, Effective dates and deadlines

### Negotiation Chronology

| Date | Event | Offer/Counter | Key Terms | Source |
|------|-------|---------------|-----------|--------|
| [Date] | [Description] | [Amount/Terms] | [Notable conditions] | [Document ref] |

### Settlement Terms

**Financial Terms**: Lump sum vs. structured payments (amounts, schedule, triggers), allocation across claims or parties, tax treatment, legal fees and expenses (note: Scotland uses "judicial expenses" not "attorneys' fees").

**Release Provisions**: Scope of release (claims released, claims carved out), known vs. unknown claims, mutual vs. one-way release. [SCOTS: Note] Scottish law does not recognise the US concept of waiving unknown claims under a statute equivalent to California Civil Code § 1542. General releases under Scots law can cover unknown claims if clearly drafted.

**Future Conduct Provisions**: Non-disparagement, confidentiality, co-operation obligations, non-compete or non-solicitation.

**Enforcement Mechanisms**: Dispute resolution for settlement breaches, consent decree provisions, liquidated damages. [SCOTS: Note] Liquidated damages must be genuine pre-estimate of loss (not a penalty) under Scots common law.

### Compliance Obligations

- Court approval requirements (group proceedings, child/minor settlements)
- Regulatory filings or disclosures (CMA approval, FCA notification)
- Reporting obligations, Deadlines and notification requirements

### Risk Assessment

- Ambiguous or missing provisions, Potential enforcement challenges, Provisions requiring negotiation clarification, Comparison to pre-settlement valuation (if available)

## Multi-Party Settlements

Add these sections when three or more parties are involved:

- **Party-by-Party Breakdown**: Each party's obligations, rights, and payment responsibilities
- **Cross-claims and Contribution**: Resolution of cross-claims and indemnity obligations. [SCOTS: Note] Scottish contribution rules under the Law Reform (Miscellaneous Provisions) (Scotland) Act 1940 allow a defender to claim contribution from another joint wrongdoer.
- **Allocation Matrix**: Payment flows between parties in tabular form
- **Sequencing**: Order of performance and conditions precedent between parties

## Common Pitfalls

- **Approximating figures**: Extract exact GBP amounts, dates, and party names, never approximate
- **Paraphrasing critical language**: Quote key contractual language verbatim for ambiguous or critical provisions
- **Missing standard provisions**: Flag when typically expected provisions are absent (e.g., no confidentiality clause, no entire agreement clause)
- **Ignoring deviations**: Note any provisions that deviate from standard settlement terms
- **Editorialising**: Maintain neutral, analytical tone throughout
- **Tender procedure**: In Scottish litigation, check whether a formal "tender" (Rule 29.1, Ordinary Cause Rules) was lodged, this affects liability for judicial expenses and is a distinct Scottish procedure not found in US practice

## Scotland/UK Adaptation

**Status**: Done, methodology transfers with Scottish-specific adjustments.

### Key Changes from US Version

| US Term / Concept | UK/Scottish Equivalent |
|---|---|
| Plaintiff / Defendant | Pursuer / Defender |
| Complaint / Answer | Initial Writ / Defences |
| Discovery | Commission and diligence / disclosure |
| Attorneys' fees | Judicial expenses (follow success - "loser pays" rule in Scotland) |
| Punitive / treble damages | Not available (Scots law); limited aggravated damages only |
| Statutory damages (copyright) | Additional damages under CDPA 1988 (discretionary) |
| California Civil Code § 1542 waiver | No direct equivalent, general releases governed by common law |
| Judgment | Decree / Interlocutor |
| Class action settlement | Group proceedings (Civil Litigation (Expenses & Group Proceedings) (Scotland) Act 2018) - opt-in, limited scope |
| Consent judgment | Consent decree / Joint minute (Scottish courts, parties lodge joint minute for decree by consent) |
| MDL / multi-district litigation | No Scottish equivalent, group proceedings available for related claims |
| FRCP 23 / class certification | No direct Scottish class action mechanism; group proceedings introduced 2018 |
| SEC / regulatory settlement | FCA settlement / enforcement action |
| IRS tax treatment of settlement | HMRC treatment, check taxability with reference to HMRC guidance |
| US dollar (USD) | GBP (£) |
| State law governing release | Scots law / English law, specify |

### Scottish Settlement Procedure Notes

1. **Tender**: In Scottish court proceedings, a party may lodge a "tender" - a formal offer to settle for a specific sum. If the other party does not accept and then fails to beat the tender at proof/trial, they may be liable for the other side's judicial expenses from the date of the tender.
2. **Joint Minute**: Parties often record settlement by lodging a "joint minute" with the court, which is then pronounced as an interlocutor/decree. This is enforceable as a court order.
3. **Judicial Expenses**: Scotland follows the "loser pays" principle. Settlement terms should address which party pays which portion of expenses, or that each party bears its own.
4. **Extra-Judicial Settlement**: A settlement reached without court involvement is a simple contract governed by Scots law and the Requirements of Writing (Scotland) Act 1995 (if it constitutes a unilateral obligation).
5. **Group Proceedings**: Introduced by the Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018 - limited opt-in regime for claims raising common issues. No US-style class action.
6. **Prescription**: Claims subject to prescriptive periods (s.6, Prescription and Limitation (Scotland) Act 1973 - 5 years for delict, 20-year long stop for obligations). Settlement should acknowledge prescriptive periods if relevant.

### Forms

- [SCOTS: Note] No specific forms needed for this methodology-heavy skill. Standard Scottish court forms for joint minute/minutes of agreement are available from Scottish Courts and Tribunals Service website.

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
