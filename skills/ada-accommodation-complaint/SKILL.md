---
name: ada-accommodation-complaint
language: en
description: Drafts an ADA failure-to-accommodate complaint for federal or state court filing. Covers Title I employment (42 U.S.C. § 12112) and Title III public accommodations (42 U.S.C. § 12182), including EEOC exhaustion, interactive process failures, and prayer for relief. Use when drafting an ADA complaint, disability discrimination pleading, failure-to-accommodate lawsuit, or right-to-sue complaint. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# ADA Failure to Accommodate Complaint

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

Generates a litigation-ready complaint under ADA Title I (employment) or Title III (public accommodations) for federal or state court. Determines applicable title from intake facts, structures numbered allegations to satisfy Twombly/Iqbal plausibility, and produces a complete pleading with causes of action and prayer for relief.

## Intake Checklist

Gather before drafting:

- [ ] Plaintiff name, state of residence
- [ ] Disability: diagnosis, functional limitations, treating provider
- [ ] Accommodation request: date, form (oral/written), recipient, specific accommodation, medical documentation submitted
- [ ] Defendant response: denial letter, non-response timeline, or interactive process failure evidence
- [ ] **Title I only:** job description, hire date, performance reviews, adverse action date/reason
- [ ] **Title I only:** EEOC charge number, filing date, Right to Sue date, receipt date
- [ ] Damages: pay stubs, W-2s, benefits records, therapy/treatment records

## Complaint Structure

Draft the following sections in order:

### 1. Caption

Court name/division; plaintiff as "an individual with a disability"; defendant by full legal name; title: `COMPLAINT FOR FAILURE TO PROVIDE REASONABLE ACCOMMODATION UNDER THE AMERICANS WITH DISABILITIES ACT`; case number placeholder.

### 2. Nature of Action

2 to 4 sentences: title invoked → plaintiff's disability and limitation → accommodation requested → defendant's refusal or process failure → resulting harm.

### 3. Parties

**Plaintiff:** Name; residence state; disability status under 42 U.S.C. § 12102 (impairment / record of / regarded as); relationship with defendant.

**Defendant (Title I):** Legal name; business form; principal place of business; **15+ employees for 20+ weeks** in current or preceding calendar year.

**Defendant (Title III):** Legal name; owns/leases/operates place of public accommodation; category under § 12181(7).

### 4. Jurisdiction and Venue

| Basis | Citation |
|---|---|
| Federal question | 28 U.S.C. § 1331 |
| Title I | 42 U.S.C. § 12117(a) |
| Title III | 42 U.S.C. § 12188 |
| Supplemental state claims | 28 U.S.C. § 1367(a) |
| Venue | 28 U.S.C. § 1391(b) |

**EEOC exhaustion (Title I, mandatory):**
- Charge filed within **300 days** (deferral state) or **180 days** (non-deferral)
- Complaint filed within **90 days** of Right to Sue receipt per § 2000e-5(f)(1)
- Attach Right to Sue letter as Exhibit A

### 5. Factual Allegations

Numbered paragraphs, chronological:

1. **Disability** - impairment; how it substantially limits a major life activity per ADAAA; documentation provided to defendant
2. **Qualification** - position, essential functions, performance history establishing "otherwise qualified"
3. **Accommodation request** - date, form, recipient, content; medical documentation submitted
4. **Interactive process failure** - no meeting, no questions about limitations, no alternatives proposed, no good-faith engagement
5. **Denial and rebuttal** - defendant's reason(s) and rebuttal:
   - *Undue hardship:* low cost vs. resources; tax credits; minimal operational impact (§ 12111(10)(B))
   - *Not qualified:* performance record; prior success with informal accommodation
   - *Fundamental alteration:* modification does not alter core service/function
6. **Adverse action** - date, type (termination/demotion/denial of access/constructive discharge), stated reason
7. **Damages** - lost wages, benefits, out-of-pocket costs, emotional distress with treatment records
8. **Malice/reckless indifference** (if punitive damages sought) - pattern of discrimination, ignored counsel advice, animus statements

### 6. Causes of Action

**Count I, Failure to Accommodate (Title I), § 12112(a), (b)(5)(A):**
- [ ] Plaintiff has a disability (§ 12102)
- [ ] Plaintiff is otherwise qualified with or without accommodation
- [ ] Defendant had notice of disability and accommodation need
- [ ] Plaintiff requested a specific reasonable accommodation
- [ ] Defendant failed to accommodate or engage in good-faith interactive process
- [ ] Plaintiff suffered damages as proximate result

**Count I alt, Denial of Equal Enjoyment (Title III), § 12182(a), (b)(2)(A)(ii):**
- [ ] Plaintiff has a disability
- [ ] Defendant owns/operates a place of public accommodation
- [ ] Plaintiff requested reasonable policy/practice modification
- [ ] Modification would not fundamentally alter goods or services
- [ ] Defendant refused, denying full and equal access

**Count II, Retaliation (if applicable), § 12203(a):**
- [ ] Protected activity (accommodation request or opposition to discrimination)
- [ ] Adverse action by defendant
- [ ] Causal nexus

**Count III, State disability discrimination** (supplemental; cite applicable state statute)

### 7. Prayer for Relief

**Title I:** Reinstatement or front pay; back pay with prejudgment interest; compensatory damages (emotional distress); punitive damages if malice/reckless indifference shown; attorney's fees and costs (§ 12205); pre/post-judgment interest.

**Title III** (injunctive-focused): Permanent injunction requiring modification and ADA compliance; declaratory judgment; attorney's fees and costs (§ 12205).

> Omit specific dollar amounts per FRCP 8(a)(3).

### 8. Jury Demand

"Plaintiff demands a trial by jury on all issues so triable." (FRCP 38(b))

> Title III claims are equitable, no jury right. Limit or omit accordingly.

### 9. Signature Block

Per FRCP 11: date, attorney signature, name, bar number, state, firm, address, phone, email - "Attorney for Plaintiff." Add client verification if required by local rule.

## Pitfalls and Checks

- **ADAAA breadth:** Construe "substantially limits" broadly; never concede a narrow disability definition
- **Interactive process:** Defendant's failure to engage creates independent liability even if plaintiff's preferred accommodation is unreasonable, plead separately. [VERIFY: circuit split on whether failure alone is actionable]
- **Title I damages cap:** Compensatory + punitive capped at $50K-$300K by employer size (§ 1981a(b)(3)); back pay excluded from cap
- **State claims:** FEHA, NYSHRL, and analogs provide broader coverage and uncapped damages, always plead supplemental state claims
- **Twombly/Iqbal:** Every element needs specific factual allegations raising plausibility; no conclusory recitations
- **Medical privacy:** Include only detail necessary to establish substantial limitation; avoid gratuitous medical disclosure
- **Dual filing (Title I):** Verify EEOC charge was dual-filed with state agency in deferral states to preserve state law claims

---

## Scotland/UK Adaptation

### Statutory Basis (Equality Act 2010)

The UK equivalent of the ADA is the **Equality Act 2010** (EqA 2010), which applies across Great Britain including Scotland. Key provisions:

| ADA Provision | Equality Act 2010 Equivalent |
|---|---|
| Title I (Employment) 42 U.S.C. § 12112 | Sections 15 (discrimination arising from disability), 20 to 21 (duty to make reasonable adjustments), 39 (employment) |
| Title III (Public Accommodations) 42 U.S.C. § 12182 | Sections 19 to 21, 29 (service providers, public functions, associations) |
| § 12102 - Definition of disability | Section 6 + Schedule 1 (disability defined by substantial & long-term adverse effect) |
| EEOC | ACAS / Equality and Human Rights Commission (EHRC) |

### Court System (Scotland)
- Employment claims go to the **Employment Tribunal Scotland** (not Sheriff Court), then appeal to the **Employment Appeal Tribunal (EAT)**.
- Public accommodation / service provision claims go to the **Sheriff Court** (Simple Procedure or Ordinary Cause) or **Court of Session**.

### Procedure: Key Differences

| US Element | UK/Scottish Equivalent |
|---|---|
| EEOC Charge (mandatory exhaustion) | ACAS Early Conciliation (mandatory before Employment Tribunal claim) |
| Right-to-Sue Letter | Early Conciliation Certificate |
| Federal Court filing | Employment Tribunal (employment) or Sheriff Court (services) |
| Jury trial | No jury in employment tribunals; civil jury available only in Court of Session for certain actions |
| Punitive damages | Not available. Employment Tribunal awards: injury to feelings (Vento bands), compensation for financial loss. Sheriff Court: compensatory damages only. |

### Reasonable Adjustments Duty (EqA 2010, Sections 20 to 21)
- Employment: duty arises where a PCP (provision, criterion or practice), physical feature, or lack of auxiliary aid places a disabled person at a substantial disadvantage.
- The duty is anticipatory (not reactive) - employers and service providers must consider adjustments in advance.
- Three requirements: (1) change PCPs, (2) remove/alter physical features, (3) provide auxiliary aids.
- No undue hardship defence (as in ADA) - instead: **justification defence** (proportionate means of achieving a legitimate aim) for discrimination arising from disability.

### Key Differences for Practitioners
1. **No damages cap**: Employment Tribunal compensation for disability discrimination is uncapped (unlike the ADA's § 1981a(b)(3) caps).
2. **No punitive damages**: Use compensation for injury to feelings (Vento bands: lower £1,200 to £11,700, middle £11,700 to £35,200, upper £35,200 to £58,700 as of April 2025 adjustments).
3. **Burden of proof**: Shifts once a prima facie case is established (EqA s.136).
4. **Vexatious litigant rules**: Tribunal can restrict proceedings; costs are exceptional.
5. **Time limits**: 3 months (less one day) from the act complained of for employment tribunal claims (not 180/300 days). Services claims: 6 months (Sheriff Court).
6. **Pre-action protocol**: For service-provider claims, the Scottish pre-action protocol for personal injury/non-personal injury should be considered.
7. **Crofters / small landholders**: Unique to Scots law, adjustments may interact with crofting tenure.

[SCOTS: Where drafting a Scottish disability discrimination claim, reference EqA 2010 throughout and substitute the Scottish court/ tribunal system for US federal courts. The interactive process analysis remains structurally useful but the legal framework differs substantially.]

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
