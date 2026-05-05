---
name: consent-judgment
language: en
description: Drafts enforceable consent orders (including Tomlin orders) with injunctive/interdict relief for IP litigation settlement in Scotland/UK. Triggers when drafting consent orders, agreed judgments, Tomlin orders, permanent interdicts, settlement orders, or stipulated orders resolving disputes without trial. [Atticus UK/Scots refined]
tags:
- agreement, drafting, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Consent Order and Interdict, Scotland/UK Adaptation

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

Drafts an enforceable consent order (including Tomlin orders in England/Wales) or consent decree (Scotland) with interdict relief that memorializes a negotiated resolution while preserving the court's enforcement authority.

## Quick Start

Gather before drafting:
1. **Initial Writ/Summons or pleadings** - party names, capacities, case number, court/division
2. **Settlement terms** - monetary amounts, payment schedules, admissions/denials, interdict scope
3. **Governing contracts** - underlying IP licences, assignments, or agreements at issue
4. **Local rules** - formatting, e-filing requirements, consent order approval procedures

## Document Structure

### 1. Caption

- Court name with division, matching local formatting (e.g., Court of Session, Outer House; Sheriff Court)
- Case number exactly as registered, Party names matching original Initial Writ with designations (Pursuer/Defender)
- Title: "Consent Order" or "Consent Decree" (Scotland) or "Tomlin Order" (England/Wales) per local practice

### 2. Recitals (WHEREAS Clauses)

Establish:
- [ ] Subject-matter and personal jurisdiction
- [ ] Nature of claims and defences (neutral framing)
- [ ] Voluntary agreement to resolve without proof/trial
- [ ] Representation by competent counsel; understanding of binding nature
- [ ] Statutory/procedural authority (cite CPR or Court of Session/Sheriff Court equivalent)
- [ ] Whether resolution is on the merits or without merits adjudication

### 3. Substantive Terms

**Monetary:** Award amount, payment schedule, interest rate, default consequences, expenses/costs allocation.

**Non-monetary:** Property transfers, document deliveries, specific performance with concrete deadlines. State admissions or denials of liability unambiguously.

### 4. Interdict / Injunctive Relief

Draft with specificity, every prohibition or requirement must be concrete enough for a contempt/breach of interdict proceeding.

| Component | Standard |
|-----------|----------|
| Prohibited conduct | Specific, measurable actions interdicted party must not take |
| Required conduct | Exact actions, by whom, by when, to what standard |
| Geographic scope | Precisely defined (Scotland, UK, or global) |
| Duration | Permanent or time-limited; state modification standard |
| Compliance monitoring | Reporting, inspection rights, third-party oversight |
| Enforcement | Breach of interdict procedures, modification/dissolution process |

> **Critical:** Avoid vague language ("shall not engage in unfair practices"). Must be specific enough to enforce via breach of interdict proceedings.

### 5. Releases and Waivers

- [ ] Mutual release scope, identify released claims, causes of action, parties with specificity
- [ ] Known/unknown claims, include express waiver if applicable [VERIFY]
- [ ] Appeal waiver, explicit if agreed (reclaiming motion waiver in Scotland)
- [ ] Carve-outs, claims against non-parties, unrelated matters, enforcement of this order
- [ ] Adequate consideration acknowledged

### 6. Jurisdiction Retention

Include continuing jurisdiction for: (a) enforcement; (b) interpretation/compliance disputes; (c) interdict modification on changed circumstances; (d) breach of interdict proceedings.

Also address: notice requirements before enforcement motions, meet-and-confer obligations, expenses/costs in enforcement, expedited relief for imminent violations.

### 7. Execution and Approval

**Signature blocks:** All parties with authority-to-bind language; solicitors/advocates of record (name, firm, contact); date lines.

**Judicial approval:** Proposed findings (fair, reasonable, voluntary, entered with counsel); separate court approval line; comply with e-filing format (e.g., `/s/` signatures).

**For Tomlin orders (England/Wales):** The order stays proceedings on agreed terms set out in a confidential Schedule. Only the order is on the court record; the Schedule is not filed. [SCOTS: Note, Tomlin orders are not used in Scotland.]

### 8. Formatting

- Numbered paragraphs throughout, Full caption page 1; abbreviated on subsequent pages, Certificate of service if required by local rules, Consistent defined terms; proper citation format

## Pitfalls and Checks

- **Merits framing** - unless parties agree otherwise, recitals should state this is not an adjudication on the merits
- **Without prejudice / Calderbank** - exclude settlement negotiation details usable against either party in related proceedings
- **Enforceability** - verify terms comply with substantive law and public policy; courts can refuse unconscionable consent orders
- **IP-specific** - trade marks: address mark usage going forward; patents: licence-back provisions; trade secrets: ensure interdict doesn't function as unenforceable restraint of trade
- **Jurisdiction-specific** - Scotland uses consent decrees/orders (not Tomlin orders); England/Wales uses Tomlin orders or simple consent orders; some matters require court approval (e.g., settlements involving minors or protected parties)
- **Do not** include integration clauses conflicting with retained jurisdiction
- **Do not** draft releases that inadvertently release claims parties intend to preserve

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Complaint/pleadings → Initial Writ (Scotland) / Claim Form (England/Wales)
- Injunction → Interdict (Scotland) / Injunction (England/Wales)
- Permanent Injunction → Permanent Interdict, FRCP → Civil Procedure Rules (CPR) for England/Wales; Sheriff Court Rules / Court of Session Rules for Scotland, FRE 408 (settlement inadmissibility) → without prejudice privilege; Calderbank offers, Cal. Civ. Code § 1542 → no direct Scottish/UK equivalent; use express waiver wording, Tunney Act → not applicable in UK, Consent Judgment → Consent Order (England/Wales) / Consent Decree (Scotland)
- Added Tomlin order option for England/Wales practice, Certificate of Service → Affidavit/Form of Service

**Key Scottish/UK considerations:**
- Scotland uses consent decrees recorded in the Court of Session or Sheriff Court; no Tomlin order mechanism, In England/Wales, Tomlin orders are the standard consent mechanism for settling IP disputes, proceedings stayed with a confidential Schedule of terms, Scottish interdict procedure differs from English injunctions, breach of interdict is a separate civil contempt process, Calderbank offers provide costs protection in settlement negotiations, Without prejudice privilege applies in both jurisdictions, IP-specific: UK Intellectual Property Enterprise Court (IPEC) has its own streamlined consent procedures

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
