---
name: letter-of-intent
language: en
description: Drafts corporate Letters of Intent for M&A and business transactions, structuring binding vs. non-binding provisions, deal terms, exclusivity, and confidentiality. Use when drafting LOIs, preliminary term sheets, deal memoranda, or pre-definitive agreement correspondence. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Letter of Intent (LOI)

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

Formalizes preliminary deal terms between parties contemplating a corporate transaction, balancing binding and non-binding provisions. Targets U.S. transactions, flag cross-border elements for additional counsel review.

## Prerequisites

Gather before drafting. Ask focused questions for any missing items.

1. **Parties** - legal names, entity types, authorized signatories
2. **Transaction type** - acquisition, merger, asset purchase, investment, partnership
3. **Economics** - price/amount, payment structure, timing
4. **Timeline** - due diligence period, target closing, exclusivity duration
5. **Contingencies** - financing, regulatory approvals, third-party consents
6. **Prior documents** - term sheets, correspondence, NDAs (if any)

## Document Sections

| Section | Content |
|---|---|
| Header | Date, recipient, subject: "Letter of Intent, Proposed [Transaction Type]" |
| Opening | Party identification, transaction purpose, deal description |
| Transaction Overview | Assets/equity/units involved, deal structure |
| Principal Terms | See checklist below |
| Binding/Non-Binding Designation | Explicit non-binding statement with binding carve-outs |
| Confidentiality | Standalone provision or NDA cross-reference |
| Exclusivity | No-shop period, scope, duration, breach consequences |
| Governing Provisions | Governing law, good-faith obligation, termination/expiration |
| Signature Blocks | Authorized reps, titles, counterpart/e-signature authorization |

## Principal Terms Checklist

Draft with enough specificity to show serious intent; note definitive agreements will elaborate.

- [ ] Purchase price / investment amount
- [ ] Payment structure and timing (cash, stock, seller note, earnout)
- [ ] Proposed closing date and flexibility conditions
- [ ] Transaction cost allocation
- [ ] Key reps and warranties expected in definitive agreements
- [ ] Material conditions precedent to closing
- [ ] Post-closing obligations (earnouts, non-competes, indemnification)
- [ ] Break-up or termination fees (if any)

## Binding vs. Non-Binding Provisions

| Typically Binding | Typically Non-Binding |
|---|---|
| Confidentiality obligations | Purchase price and payment terms |
| Exclusivity / no-shop | Representations and warranties |
| Cost/expense allocation | Closing conditions |
| Governing law / disputes | Post-closing covenants |
| Non-binding designation clause | Timeline targets |

## Key Provisions

### Confidentiality

If no separate NDA exists, include a binding section covering:
- Scope of confidential information, Permitted uses (solely evaluating the transaction)
- Permitted disclosures (advisors, lenders, bound by same obligations)
- Duration (typically 18 to 24 months post-termination)
- Return/destruction of materials if transaction fails

If a separate NDA exists, cross-reference it and confirm it survives the LOI.

### Exclusivity

- **Duration**: 30 to 90 days (specify exact period)
- **Scope**: no solicitation or engagement with competing buyers/investors
- **Exceptions**: unsolicited inbound inquiries, fiduciary-out (if negotiated)
- **Breach consequence**: termination right + expense reimbursement

## Pitfalls and Checks

- **Label every provision** as binding or non-binding, ambiguity creates unintended obligations
- **Include good-faith covenant** to negotiate definitive agreements with a target date; state failure to reach terms creates no liability beyond breach of binding provisions
- **Confirm governing law** with user, default to target's state of organization or primary transaction jurisdiction
- **Don't over-detail** - avoid full indemnification mechanics or rep schedules that belong in definitive documents; the LOI frames expectations, it doesn't replace the purchase agreement
- **Tone** - professional and direct; accessible to legal and business readers; avoid adversarial framing
- **Include counterpart/e-signature** authorization language

---

**Key changes made:**

- **Description**: Tightened to focus on what it does + clear trigger, removed `tags` (not in the spec's required frontmatter)
- **Removed redundant prose**: Cut the overview paragraph's repetition of the description; collapsed verbose section headers
- **Flattened structure**: Merged the "Confidentiality Provision Template" and "Exclusivity Provision" code blocks into concise bullet lists under a single "Key Provisions" section
- **Consolidated guidelines → "Pitfalls and Checks"**: Matches the recommended skill body pattern; each item is actionable and terse
- **Removed code fences** around list content that didn't need them (confidentiality and exclusivity were wrapped in unnecessary code blocks)
- **Shortened throughout**: ~96 lines down from ~96, but with significantly less visual noise and better signal density per token

Want me to try writing the file again, or would you like to copy this directly?

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
