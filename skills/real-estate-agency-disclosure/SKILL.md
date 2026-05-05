---
name: real-estate-agency-disclosure
language: en
description: Drafts state-compliant real estate agency disclosure documents for residential transactions. Triggers at first substantive contact with buyers or sellers, when preparing pre-transaction disclosure forms, or when establishing representation relationships and fiduciary duties among transaction parties. [Atticus UK/Scots refined]
tags:
- agreement, drafting, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Real Estate Agency Disclosure

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

Produces a jurisdiction-compliant disclosure establishing representation relationships and fiduciary duties before parties commit to a residential real estate transaction.

## Required Inputs

1. **Jurisdiction** - state where property is located (drives all statutory requirements)
2. **Parties** - legal names of buyer(s), seller(s), licensee(s); brokerage names; license numbers
3. **Transaction** - property address; purchase or listing
4. **Agency model** - buyer's agent, seller's agent, dual agency, designated agency, or transaction brokerage

## Workflow

### 1. Research Jurisdiction Rules

- Identify the state statute or regulation mandating the disclosure, Confirm the delivery trigger (typically first substantive contact, verify state-specific timing)
- Determine permissible agency models and whether the state requires verbatim statutory language

### 2. Draft Document

**Header**: document title (use jurisdiction-mandated title if required), disclosure date, all party names with brokerage and license numbers.

**Statutory basis**: cite the specific statute, state the delivery trigger, note any timing variations.

**Agency relationship definitions** - include all models permitted in the jurisdiction:

| Role | Represents | Core Duties |
|---|---|---|
| Seller's Agent | Seller exclusively | Loyalty, confidentiality, best price/terms for seller |
| Buyer's Agent | Buyer exclusively | Loyalty, confidentiality, best price/terms for buyer |
| Dual Agent | Both parties | Neutrality; no advocacy or cross-disclosure of confidential info |
| Designated Agent | Respective client (separate agents, same brokerage) | Full fiduciary to each; supervising broker is dual agent |
| Transaction Broker | Neither party | Honesty, material fact disclosure, ministerial care |

Distinguish **client** (full fiduciary) from **customer** (honest dealing, no advocacy).

Core fiduciary duties where full agency applies: loyalty · confidentiality · disclosure · obedience · reasonable care · accounting.

### 3. Address Dual Agency / Alternatives

- [ ] State permits dual agency?
- [ ] Informed written consent required?
- [ ] Transaction broker/facilitator role available?
- [ ] Designated agency required in lieu of dual agency?

If **prohibited**: state explicitly and identify the required alternative.
If **permitted**: include conspicuous warning that the agent cannot fully advocate for either party; consent required beyond this disclosure.

### 4. Acknowledgment Language

The disclosure must state:
- Receipt does **not** create an agency relationship, Agency requires a **separate written agreement**
- Parties may choose any available representation type or proceed unrepresented, Parties may seek independent legal counsel

### 5. Agency Election

Include on-form selection if jurisdiction requires:
- [ ] Seller's Agency
- [ ] Buyer's Agency
- [ ] Dual Agency *(where permitted)*
- [ ] Designated Agency
- [ ] Transaction Brokerage

### 6. Signature Blocks

Separate block per buyer, seller, and licensee: printed name, signature, date, license number and brokerage (licensees only). Include caption confirming receipt and understanding.

- Check whether jurisdiction requires witness signatures or notarization, If electronic: confirm UETA / E-SIGN compliance [VERIFY]

## Pitfalls

- **Verbatim language** - many states require exact statutory text; do not paraphrase without confirming flexibility
- **Timing errors** - cite the applicable delivery trigger explicitly; late disclosure can void the relationship
- **Dual agency inadequacy** - insufficient disclosure of limitations can void consent and create liability
- **No recommendation** - the disclosure informs of options; it must not advise which representation type to select
- **NAR vs. statute** - follow NAR guidelines but state statutory requirements control where they diverge
- **[VERIFY]** all statutory citations against the current state code and real estate commission regulations before use in an actual transaction

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
