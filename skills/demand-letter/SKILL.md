---
name: demand-letter
language: en
description: Drafts litigation-ready Scottish/UK pre-action demand letters that function as settlement instruments and defensible future exhibits. Enforces element-driven narratives, verified authority, damages methodology, and ethics guardrails for use in Sheriff Court (Simple Procedure/Ordinary Cause) and Court of Session actions. Use this skill when the user mentions demand letter, pre-suit demand, letter of claim, pre-action protocol, formal demand, minute of claim, settlement demand, payment request, notice of intention to raise proceedings, or pre-litigation correspondence. Also trigger when the user asks about pre-action protocol compliance, contractual notice prerequisites, statutory pre-action requirements, evidence preservation notices, or quantifying damages in Scots law. [Atticus UK/Scots refined]
tags:
- drafting, letter, litigation, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Pre-Action Demand Letter, Scotland/UK

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

A demand letter is simultaneously a settlement instrument and a future exhibit. A defective letter can contain admissions, unsupported claims, or ethics violations, and where pre-action protocols require specific content (professional negligence, personal injury, clinical disputes), defects can affect judicial expenses awards or limitation issues. This skill produces letters where every assertion is sourced, every theory verified or flagged, damages are quantified with methodology, and tone is appropriate for potential court scrutiny.

This file (SKILL.md) is the controller: intake checkpoints, step-by-step decision rules, quality audit.

---

## How to use this skill

**`[AGENT]`** - Run Checkpoint A (intake). Then Steps 1 to 8 in order. Then Checkpoint B (post-draft alignment). Then the Quality Audit. Never skip a step silently; if a step does not apply, state that.

**`[SOLICITOR]`** - Treat this as a checklist. Skim Steps 1 to 8 as needed for drafting detail; use the Quality Audit as the pre-send gate. The decision rules in Steps 1 to 8 mark where the skill's default posture yields to your judgment, override consciously, not by omission.

---

## Related skills

- `legal-research` - verify the statutory regime for the letter's jurisdiction and claim type; resolve prescriptive/limitation periods; check any case law cited
- `scots-legal-humanizer` - use after drafting to ensure natural Scottish legal prose
- `citation-OSCOLA` - OSCOLA format for case references; good-law status on Scottish/UK cases referenced, Adjacent workflows: `scot-damages-summary` (builds the damages narrative that feeds §4), `demand-package` (assembles the letter plus enclosures into a transmittable package)

---

## Output format

Default: return the letter inline. Produce a file deliverable **only** when the user explicitly asks, and **only** after the Quality Audit passes, never before.

If the user says "send it," stop. Demand letters in Scotland require solicitor signature and service. This skill drafts; it does not send.

---

## Checkpoint A: Pre-Draft Intake (Mandatory) `[AGENT action]`

Ask every time unless the user says "use defaults" or "just draft." Gather:

1. **Governing contract(s)** - notice clauses, termination provisions, jurisdiction/ arbitration/simplified procedure clauses
2. **Correspondence** - emails, letters in chronological order
3. **Financial records** - invoices, payments, receipts, proof of tender
4. **Supporting evidence** - incident reports, photos, expert reports, third-party communications
5. **Prior demands** - settlement communications or notices already sent
6. **[SCOTS: Note] Prescription and limitation** - date of breach/incident, any relevant interruption of prescription (s.6 Prescription and Limitation (Scotland) Act 1973). **Decision rule:** if the claim is near the prescriptive period (5 years for delict, 3 years for PI, 20-year long-stop), or facts are unclear, trigger `legal-research` before drafting.
7. **Pursuer and Defender details** - full legal names, registered addresses, company numbers, jurisdiction (Scotland only, or cross-border)
8. **Client objectives** - preferred outcome, authorised settlement ceiling, timing, relationship preservation
9. **Recipient entity** - registered name as at Companies House, registered office, principal place of business
10. **Represented-party check** - is the recipient known or reasonably believed to be represented by a solicitor in this matter? If yes, service must be on the solicitor. If unknown but the recipient is a company, make reasonable inquiry (prior correspondence, company register).

**Defaults** (if user says "use defaults" or does not respond): general demand for payment; commercial dispute; formal and professional tone; 21-day response deadline; without prejudice except as to expenses. Label all defaults explicitly in the draft.

---

## Step 1: Diagnose Legal Function

- Analyse contractual notice requirements, methods, deemed-received provisions, time limits, Check for applicable pre-action protocols (see below)
- Classify letter type: demand for payment, breach + intention to terminate, settlement invitation, preservation trigger, or statutory prerequisite, Align with dispute resolution mechanism, do not threaten raising proceedings in an improper court

**[SCOTS: Note] Pre-action protocol branch.** Scotland has various voluntary and sector-specific pre-action protocols. Check whether any apply:

- **Professional negligence** - Law Society of Scotland Voluntary Pre-Action Protocol (letter of claim, 21-day acknowledgement, 3-month investigation period)
- **Personal injury** - Pre-Action Protocol for Personal Injury Claims (detailed letter of claim, rehabilitation consideration)
- **Clinical negligence** - Pre-Action Protocol for Clinical Negligence (similar to PI, with expert report requirements)
- **Construction** - adjudication per Housing Grants, Construction and Regeneration Act 1996 (mandatory for construction contracts)
- **Landlord and tenant** - notice of default, AT6 notice for eviction proceedings
- **Debt claims** - Simple Procedure rules require claimant pursuer to notify defender before making a claim

If the claim type is not listed, invoke `legal-research` with the query template: "pre-action requirements Scotland [claim type]".

**[SCOTS: Note] No exemplar archetypes file needed** - Scottish demand letters follow a standardised structure with less variation than US letters. The reference files for this skill provide the necessary templates.

---

## Step 2: Build Element-Driven Fact Narrative

- Chronological structure tied to claim elements, Source every fact, quote correspondence exactly, Apply Scots law concepts: use **delict** (not tort), **breach of contract** (same term but governed by UK contract law), **reparation** for personal injury, No conclusory labels without supporting facts, Adversarial awareness: this letter may be produced on commission and diligence

**Decision rule.** Element-tied granularity = **one source-cited fact per claim element, minimum.** If an element has no factual support, do not plead that cause of action, tell the user what's missing and await instruction.

---

## Step 3: Articulate Legal Grounds

- State primary legal grounds tied to remedy sought, do not over-plead, Cite specific statutory sections (e.g., s.6 PL(S)A 1973, Unfair Contract Terms Act 1977, Consumer Rights Act 2015)
- Mark unverified citations: `[VERIFY]`
- Never assert judicial expenses (costs) recovery without a verified basis

**Primary-vs-secondary rule.** Primary ground = the one whose elements are best-supported AND whose remedy matches the client objective. Include a secondary ground only if it independently unlocks a remedy the primary does not, OR survives a foreseeable defence.

**Verification trigger.** Every statutory citation → `legal-research`. Every case citation → OSCOLA format and good-law status. Unverified → `[VERIFY]` inline.

---

## Step 4: Quantify Damages

Quantify damages under Scots law principles:

| Category | Scots Law Approach |
|---|---|
| Direct/expectation | Contract: restore to expected position. Delict: restitutio in integrum |
| Consequential | Assessed as loss flowing naturally from breach (Hadley v Baxendale, also Scots law) |
| Statutory multipliers | Interest on damages: s.9 PL(S)A 1973 (5% judicial rate unless varied) |
| Pre-judgment interest | Courts exercise discretion; guidelines from judicial rate |
| Liquidated damages | Enforceable if genuine pre-estimate; penalty clauses not enforced |
| Solatium | For personal injury: pain and suffering (not available for pure economic loss) |
| Mitigation | Duty to mitigate; pursuer must prove mitigation efforts |
| Judicial expenses | Based on success and conduct; typically loser pays (modified by offers under Calderbank principle) |

**[SCOTS: Note] No punitive damages** - Scots law does not recognise punitive or exemplary damages. Flag this if the user expects a US-style punitive damages model.

Provide enough detail for credibility without revealing the walkaway number.

---

## Step 5: Include Preservation Notice

Include formal notice requiring preservation of all documents, ESI, and other evidence pending resolution. Specifically:
- Email communications, Records, invoices, correspondence, Electronic data relevant to the claim

In Scots law, use a **commission and diligence** context: note that failure to preserve may result in court orders for recovery and questioning regarding spoliation. The court may draw adverse inferences.

**[SCOTS: Note]** Dedicated commission and diligence applications can be made for document recovery. For matters involving specific high-risk evidence (surveillance, building records, vehicle data), flag the option of seeking a commission and diligence from the court for formal recovery.

---

## Step 6: Frame Demands and Proposed Resolution

- Monetary: specify amount, payee, timing, method, Non-monetary: specify action required, acceptance criteria, deadlines

**[SCOTS: Note] Without prejudice rule.** Use "Without Prejudice" heading when the letter invites settlement (not for a bare demand). In Scotland, **"Without Prejudice except as to Expenses"** preserves the right to refer to the letter on the question of judicial expenses, use this formulation if appropriate. The Calderbank principle (Walker v Walker 1999) allows a without-prejudice offer to be disclosed to the court on expenses.

---

## Step 7: Set Deadline and Consequences

- Use specific calendar dates, not relative periods, Align with contractual notice periods and pre-action protocol timescales, State intention to raise proceedings, specify court (Sheriff Court or Court of Session)

**[SCOTS: Note] Court selection rules** 
- **Simple Procedure** (Sheriff Court): claims up to £5,000
- **Ordinary Cause** (Sheriff Court): claims £5,000+
- **Court of Session (Outer House)**: claims generally £100,000+ or complex cases; high-value personal injury, Personal injury claims over £5,000 can be raised in either Sheriff Court or Court of Session, Always check quantum limit at the relevant date

**Deadline-length rule.** Default 21 calendar days. Override to protocol periods where applicable (professional negligence pre-action protocol: 3 months investigation period). Sub-14-day deadlines only for imminent-harm scenarios (spoliation risk, perishable goods, time-sensitive contractual deadlines).

---

## Step 8: Calibrate Tone and Privilege Posture

- Write as if a sheriff or judge will read it, Consider marking "Without Prejudice, Subject to Contract" or "Without Prejudice except as to Expenses" per decision rules above, Exclude defamatory statements (Scots defamation law under Defamation and Malicious Publication (Scotland) Act 2021), solicitor-client communications, and unnecessary personal data

---

## Checkpoint B: Post-Draft Alignment (Mandatory) `[AGENT action]`

After delivering the draft, ask:

1. Does this correctly identify the recipient entity and contractual notice address?
2. Is the damages methodology and total demand within the **authorised range** (Checkpoint A item 8)?
3. Are there pre-action protocol requirements to verify before sending?
4. Should this be sent as a "Without Prejudice" settlement communication or an open demand?

If the user does not answer, recommend verifying recipient entity and notice method and proceed only if Checkpoint A item 8 authorised the proposed demand total.

---

## Quality Audit

- [ ] Correct recipient entity name and registered address (Companies House verified; source recorded)
- [ ] Contractual notice method satisfied (recorded delivery, registered post, courier)
- [ ] Time limit/prescription position confirmed
- [ ] Every factual assertion sourced or labelled `[UNVERIFIED, client-provided]`
- [ ] Legal citations verified (via `legal-research` / OSCOLA) or marked `[VERIFY]`
- [ ] Damages internally consistent (dates, interest, mitigation)
- [ ] No threats of criminal/regulatory action as civil leverage
- [ ] Without Prejudice / settlement posture addressed per decision rules
- [ ] Preservation notice included
- [ ] Applicable pre-action protocol followed
- [ ] Specific calendar deadline
- [ ] If represented-party, letter addressed to solicitor
- [ ] Solicitor account/instructing agent name on signature block
- [ ] Solicitor review required before sending, flagged to user

---

## Guidelines

**Pre-action protocols.** Scotland has voluntary protocols for professional negligence, personal injury, and clinical negligence. Mandatory protocols apply in construction adjudication and certain landlord-tenant matters. Check applicability before drafting.

**[SCOTS: Note] Ethics and privilege.** 
- Scottish solicitors must comply with the Law Society of Scotland Practice Rules, Solicitor-client confidentiality is governed by common law and professional rules
- "Without Prejudice" communications are inadmissible except on expenses, The Defamation and Malicious Publication (Scotland) Act 2021 applies to any statements made

**[SCOTS: Note] Judicial expenses (costs).**
- Scotland follows the loser-pays principle (modified by conduct)
- Offers under Calderbank principle may protect expenses position, Simple Procedure has modified expenses rules (limited awards)

**Anti-hallucination.**
- Do not invent statutory citations, case names, or verdict data, Mark all unverified legal claims with `[VERIFY]`
- Do not assert fee recovery without a verified basis, If a fact or source is uncertain, flag it, do not publish it

**SOLICITOR REVIEW REQUIRED** - No demand letter produced by this skill may be sent without solicitor review and approval. The skill drafts; it does not sign or serve.

## Scotland/UK Adaptation

**Adapted for:** Scotland and UK law
**Changes made:**
- Replaced FRE 408 (US settlement privilege) with Scottish "Without Prejudice" rule and Calderbank principle (Walker v Walker 1999)
- Replaced US tort law with Scots delict and reparation, Replaced US courts (District Court, state court) with Sheriff Court (Simple Procedure/Ordinary Cause) and Court of Session, Replaced US statutory pre-suit regimes (TX DTPA, MA Ch. 93A, CA CLRA, FL med-mal) with Scottish pre-action protocols (professional negligence, PI, clinical negligence)
- Replaced punitive damages references, Scots law does not award punitive damages, Replaced US dollar amounts with GBP; Simple Procedure cap £5,000
- Replaced US Secretary of State verification with Companies House / Scottish Companies Register, Replaced Model Rules 3.1/4.1/4.2/8.4 with Law Society of Scotland Practice Rules, Replaced Bluebook citation with OSCOLA UK/Scottish law citation, Replaced FDCPA disclosures with Scottish law equivalent (Consumer Rights Act 2015, late payment legislation)
- Added prescriptive periods (5-year delict, 3-year PI, 20-year long-stop under PL(S)A 1973)
- Added pre-action protocol compliance for professional negligence and PI, Replaced "plaintiff" with "pursuer", "defendant" with "defender"
- Replaced "discovery" with "commission and diligence" context, Replaced "summary judgment" with "summary decree"
- Added [SCOTS: Note] flags throughout

**Key Scottish/UK considerations:**
- No punitive or exemplary damages in Scots law, Loser-pays costs (judicial expenses) - modified by conduct, Calderbank offers, Prescription and Limitation (Scotland) Act 1973 governs time limits
- 5-year delict prescriptive period; 3-year for personal injury; 20-year long-stop, Simple Procedure (£0-£5K) has different rules than Ordinary Cause (£5K+)
- Court of Session for claims generally exceeding £100K or complex matters, Pre-action protocols are voluntary for most claims (except construction adjudication)
- "Without Prejudice except as to Expenses" is the safe default for settlement letters, Scottish legal terminology is distinct from both English and US law, Consumer Rights Act 2015 governs unfair terms in consumer contracts, Law Society of Scotland Standards of Conduct apply to practising solicitors

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
