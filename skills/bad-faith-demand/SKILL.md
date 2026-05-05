---
name: bad-faith-demand
language: en
description: Drafts time-limited policy-limits demand letters that create an opportunity-to-settle record for third-party bad faith exposure. Use when the user mentions time-limited demand, policy limits demand, bad faith notice, Stowers demand, civil remedy notice, failure to settle demand, excess exposure letter, insurer settlement opportunity, or needs help with acceptance mechanics for a policy-limits offer. Also trigger for Georgia O.C.G.A. § 9-11-67.1 compliance, Florida statutory bad faith prerequisites, or documenting insurer refusal to settle. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Time-Limited Policy Limits Demand

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

Produces a defensible time-limited settlement demand with clear acceptance mechanics, sourced damages, and jurisdiction-aware bad faith framing. A single procedural defect (ambiguous acceptance, missing statutory requirement, sloppy deadline) can destroy the bad faith claim.

**ATTORNEY REVIEW REQUIRED** - Always require attorney review before sending.

## Pre-Draft Intake

Gather before drafting (skip only if user says "use defaults"):

1. **Jurisdiction and posture** - state; pre-suit / in suit / pre-post discovery
2. **Insurer identifiers** - claim number, policy number, adjuster, all insureds
3. **Liability evidence** - reports, photos, witness statements, citations
4. **Damages proof** - medical records/bills, wage loss, prognosis, future care
5. **Policy limits** - confirmed amount or plan to confirm
6. **Lien status** - health insurer, Medicare/Medicaid, ERISA, hospital, workers' comp
7. **Settlement authority** - confirmed from client on amount and release scope

**Defaults if user skips:** pre-suit posture; full limits demand; standard BI release of named insured; response window marked `[VERIFY JURISDICTION]`; professional tone.

Stop and request if **settlement authority** or **policy limits** are missing.

## Workflow

### 1. Map Jurisdictional Requirements

- Identify theory: common-law failure-to-settle, statutory bad faith, unfair claims practices, Verify notice/cure requirements, service methods, required content, Flag unverified legal statements as `[VERIFY]`
- If statutory notice required (e.g., FL Civ. Remedy Notice), draft separately unless statute allows integration

### 2. Draft Liability Narrative

- 5-10 sentences, evidence-cited, Address obvious defenses and comparative fault, Tie liability clarity to foreseeable excess exposure, Must be defensible if read to a jury, do not overstate

### 3. Present Damages Exposure

- Itemized specials with documentation references, Permanency and future care with source support, Plausible verdict range rationale; mark unsourced research `[VERIFY]`
- Ground excess-exposure argument in actual numbers

### 4. Structure Offer Terms

- Clear, unequivocal offer within limits or specified amount, Define release scope, parties released, claims reserved, Define payment mechanics: payee, delivery method, timing
- **Acceptance must be objectively measurable** - zero ambiguity

### 5. Set Deadline

- Specific date, time, and time zone, Brief reasonableness justification, Automatic withdrawal if not accepted exactly as specified, Align with statutory minimum response periods

### 6. Frame Bad Faith Exposure

- Professional tone, no threats, no inflammatory language, State excess exposure risk and insurer duty to protect insured, Request insurer communicate demand to insured, No coercive language

### 7. Delivery and Record-Keeping

- Delivery channels per jurisdictional requirements, Written acceptance to a tracked inbox, Exhibit index with labeled attachments, Preserve proof of delivery

## Letter Template

```text
[Date]

Via [email + certified/overnight if required]
[Adjuster Name], [Insurer]
[Address]
Re: [Claimant] v. [Insured]
Claim No.: [ ] | Policy No.: [ ] | Loss Date: [ ]

This is a time-limited policy-limits demand to protect your insured
from excess exposure.

LIABILITY
[2-4 sentences with exhibit references]

DAMAGES, Specials to date: $[ ] (Ex. [ ])
- Future care/prognosis: [ ] (Ex. [ ])
- Wage loss: $[ ] (Ex. [ ])
- A reasonable jury could return a verdict exceeding policy limits.

OFFER
In exchange for tender of full liability limits of $[ ] under Policy
No. [ ], [Claimant] will execute a release of [Named Insured(s)] for
all bodily injury claims arising from the [date] incident. The release
does not include [reserved claims/parties].

ACCEPTANCE
Written acceptance must be received by [date], [time], [time zone] at
[email]. Payment via [overnight/wire] to:
Payee: "[Client Name] and [Law Firm] Client Trust Account"
Address: [ ]

LIENS
[Claimant] will satisfy valid liens from proceeds. [Medicare/ERISA
escrow/holdback or cooperation language if applicable.]

DEADLINE
This offer expires automatically if not accepted exactly as stated by
the deadline above.

NOTICE
Given clear liability and damages, this demand provides a reasonable
opportunity to protect the insured from excess exposure. Please provide
a copy to your insured so they may seek independent counsel.

ATTACHMENTS
Exhibit Index: [list]
```

### Required Letter Sections

Caption block (parties, claim/policy numbers) | Offer and acceptance mechanics | Liability summary with exhibits | Damages summary with totals | Deadline and withdrawal | Release scope | Lien/Medicare handling | Delivery instructions | Exhibit index

## Post-Draft Checks

Ask after delivering the draft:

1. Are policy limits confirmed, or must we request confirmation first?
2. Does the release scope correctly identify all parties released and claims reserved?
3. Is the deadline window reasonable for jurisdiction and case posture?
4. Any statutory notice requirements (FL Civil Remedy Notice, GA § 9-11-67.1) needing separate filing?

Default recommendation if no response: confirm policy limits and release scope (most common failure points).

## Quality Audit

- [ ] Offer amount matches confirmed limits or stated sum
- [ ] Acceptance mechanics objectively measurable, no ambiguity
- [ ] Deadline is specific date, time, and time zone
- [ ] Liability narrative evidence-cited and defensible
- [ ] Damages itemized with documentation references
- [ ] Release scope defines who is released and what is reserved
- [ ] Lien/Medicare handling addressed
- [ ] No impossible conditions or hidden terms
- [ ] Names, dates, claim numbers, dollar amounts cross-checked
- [ ] Exhibit index complete and attachments labeled
- [ ] Jurisdictional statutory requirements verified or flagged `[VERIFY]`
- [ ] Tone professional, no threats or inflammatory language

### Acceptance Checklist

- Written acceptance received by deadline, Amount matches limits or stated sum, All insureds match release scope, Payment method and payees correct, No added conditions; if added, treat as counteroffer

## Jurisdiction Flags

All `[VERIFY]` - confirm current law before use:

| State | Key Issue | Reference |
|---|---|---|
| Texas | Stowers elements | *G.A. Stowers Furniture Co. v. American Indemnity Co.*, 15 S.W.2d 544 (Tex. 1929) |
| California | Prudent-insurer standard; Cal. Civ. Code § 1542 waiver | *Comunale*, *Crisci* |
| Georgia | Strict statutory TLD requirements and service methods | O.C.G.A. § 9-11-67.1 |
| Florida | Statutory bad faith, civil remedy notice, tort reform changes | Fla. Stat. § 624.155 |

## Guardrails

**Anti-hallucination:** Do not assert unverified legal standards, mark `[VERIFY]`. Do not misstate limits, injuries, or specials. Do not invent verdict data or fabricate case citations.

**Ethics:** No impossible conditions, hidden terms, or ambiguous acceptance steps. No direct communication with represented insureds without attorney approval. Disclose only necessary medical detail.

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
