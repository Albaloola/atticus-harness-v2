---
name: '[SCOTS] psychiatric-advance-directive'
language: en
description: '[SCOTS] Drafts jurisdiction-specific Psychiatric Advance Directives (PADs) / Advance Statements under Scottish mental health law capturing treatment preferences, welfare attorney authority, and crisis plans for psychiatric incapacity. Trigger when the user mentions psychiatric advance directive, PAD, mental health advance directive, advance statement, mental health treatment declaration, psychiatric crisis planning, Adults with Incapacity Act, Mental Health (Care and Treatment) Act, welfare attorney, psychotropic medication preferences, ECT consent planning, crisis activation plan, or mental health agent appointment. [Atticus UK/Scots refined]'
tags:
- agreement, drafting, regulatory, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Psychiatric Advance Directive / Advance Statement [SCOTS]

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

A PAD/Advance Statement preserves autonomous psychiatric treatment choices across a capacity gap, operating within the Scottish legal framework of the **Mental Health (Care and Treatment) (Scotland) Act 2003** (advance statements) and the **Adults with Incapacity (Scotland) Act 2000** (welfare attorney / intervention orders). It captures medication preferences, welfare attorney authority, de-escalation instructions, and crisis contacts in a clinically actionable format, with a first-page crisis summary for intake staff.

> **DRAFT FOR SOLICITOR REVIEW ONLY, Not legal advice. Not execution-ready without jurisdiction-specific verification of statutory formalities and citations.**

## Key Scottish Legal Framework

### Mental Health (Care and Treatment) (Scotland) Act 2003
- **Section 274 to 278**: Advance Statements, legally binding when patient is subject to a compulsory treatment order, Advance statements may be overridden by the **Mental Health Tribunal for Scotland** if specified conditions are met (risk of harm, inadequate treatment)
- Only applies while patient is subject to compulsory powers under the 2003 Act, Does NOT create a right to demand specific treatments; only to refuse specified treatments, The 2003 Act provides a specific statutory framework for 'advance statements' - distinct from general advance directives under the AWI Act

### Adults with Incapacity (Scotland) Act 2000
- **Welfare attorney** - appointed by the adult to make decisions about personal welfare, including medical treatment, when the adult lacks capacity
- **Intervention order** - court order authorising specific decisions when no attorney is in place
- **Medical treatment provisions (Part 5)** - doctors can treat without consent if it safeguards/ promotes the adult's health; certificate of incapacity required, Welfare attorney cannot consent to treatment under the Mental Health Act where compulsory powers are in force

### Key Difference from US approach
- **No Ulysses Clause equivalent** - Scottish law does not recognise irrevocable/non-revocable advance statements. The advance statement can be revoked at any time by a person with capacity. [SCOTS: No direct equivalent to Ulysses Clause]
- **No punitive damages** in Scots law
- **Mental Health Tribunal for Scotland** oversees compulsory treatment decisions, equivalent to a mental health court
- **MHO (Mental Health Officer)** - statutory role under the 2003 Act; independent social work professional who represents the patient's interests

## Pre-Draft Intake

Gather before drafting (skip only if user says "use defaults"):

1. **Jurisdiction** - required; if Scotland, flag both the 2003 Act (advance statement) and the 2000 Act (welfare attorney). Flag portability to England/Wales/NI (different legal frameworks)
2. **Clinical history** - diagnoses (with consent), prior hospitalisations, involuntary holds, current medications, allergies/adverse reactions
3. **Welfare attorney designation** - primary + alternate: full legal name, address, phone, email, relationship; identify conflicting statutory default proxy decision-makers
4. **Exclusions** - persons blocked from attorney role or information access (protective/no-contact/restraining orders)
5. **Treatment preferences** - ECT, seclusion/restraint, psychotropic drug classes, de-escalation techniques, voluntary vs. involuntary admission, peer respite, police involvement
6. **Crisis activation** - early warning signs, sensory/trauma triggers, preferred first contacts
7. **Existing documents** - existing advance statement, welfare power of attorney, guardianship orders, prior PAD
8. **Execution logistics** - notary access (not required under Scottish law), witness requirements (AWI Act requires one witness; 2003 Act advance statement must be witnessed), solicitor involvement

**Defaults if no response:** General PAD/Advance Statement framework without jurisdiction-specific formalities; primary welfare attorney + one alternate; standard medication structure; marked **NOT EXECUTION-READY**.

## Workflow

### 1. Build Document Architecture

**First-page crisis summary** (intake staff must find key info in <2 minutes):
- Welfare attorney name + 24/7 phone, Top 3 crisis triggers / early warning signs, Top 3 treatment preferences (including critical refusals)

**Section map:**

| Section | Content |
|---|---|
| Title & Purpose | Advance Statement / PAD title; plain-language purpose; relationship to 2003 Act and AWI Act |
| Capacity Affirmation | Principal's voluntariness statement; optional clinician attestation |
| Welfare Attorney Appointment | Primary + alternate with 24/7 contact; statutory incapacity standard; priority over default proxies; authority under AWI Act 2000 |
| Exclusions | Named individuals barred from attorney role or info access |
| Treatment Preferences | Medications, ECT, hospitalisation, de-escalation (Step 2) |
| [SCOTS: No Ulysses Clause] | Scottish law does not recognise non-revocable advance statements, omit this section; note that the 2003 Act advance statement applies during compulsory treatment; welfare attorney authority applies during incapacity without compulsory measures |
| Revocation & Updates | Standard revocation (any time with capacity); annual review; supersession of prior documents |
| Crisis Activation | Warning signs; contact ladder (≤2 contacts); what helps client accept care |
| Override Protocol | Facility obligations when advance statement cannot be followed (Tribunal oversight) |
| Execution Blocks | Principal, 1 witness (AWI Act) / statement formalities (2003 Act), no notary required under Scots law, welfare attorney acceptance signature |
| Distribution Log | Welfare attorney, alternates, psychiatrist, GP, CPN/case manager, hospital systems, patient portals |

### 2. Draft Treatment Preferences

**Medication structure** - three categories:

- **PREFERRED:** Drug, reason (prior efficacy, tolerability)
- **CONDITIONAL:** Drug, when (specific circumstances only)
- **REFUSED:** Drug, reason (adverse reaction, date) - acceptable alternative

Pair every refusal with an alternative. Include rationale to reduce best-interests override risk.

**ECT:** Explicit consent/refusal/conditional consent with conditions stated. Note that ECT for patients subject to compulsory measures is regulated by the 2003 Act.

**De-escalation:** Concrete staff behaviours that help; specific accommodations to try before restraint; trauma triggers.

**Override protocol:** If facility cannot follow advance statement: (a) least restrictive alternative, (b) document deviation reason in medical records, (c) notify welfare attorney promptly, (d) if subject to compulsion, Tribunal may override, apply within 28 days (Mental Health Act Code of Practice).

**Data sharing authorisation:** Authorise welfare attorney to receive diagnoses, medications, treatment plans, discharge planning. Note: UK GDPR and DPA 2018 govern data sharing; health records confidentiality is under common law and NHS Scotland governance.

### 3. Analyse Scottish Framework

**Do not include a Ulysses Clause** - Scotland does not recognise non-revocable psychiatric advance directives. Including one risks the document being viewed as legally defective.

Key Scottish law references `[VERIFY all citations]`:

| Framework | Statute | Key Notes |
|---|---|---|
| Advance Statement (Mental Health) | Mental Health (Care and Treatment) (Scotland) Act 2003, ss. 274 to 278 | Specific statutory form; applies during compulsory treatment; witnessed; can be overridden by Tribunal |
| Welfare Attorney | Adults with Incapacity (Scotland) Act 2000, ss. 15 to 20 | General capacity framework; decisions about personal welfare and medical treatment |
| Intervention/Guardianship Orders | AWI Act 2000, ss. 57 to 61 and ss. 58 to 60 | Court-ordered decision-making for incapable adults |
| ECT Regulation | 2003 Act, s. 238 and s. 290 | Specific safeguards for ECT under compulsion; consent required if patient has capacity |

**No specific PAD statute:** Use the 2003 Act advance statement provisions + AWI Act welfare attorney framework. Recommend a combined document: (a) Advance Statement under the 2003 Act (for periods of compulsory treatment), (b) Welfare Power of Attorney under the AWI Act 2000 (for periods of incapacity without compulsion).

### 4. Execution & Distribution

- [ ] 1 witness for welfare power of attorney (AWI Act s. 15) - must not be the attorney or a family member of the attorney; no notary required
- [ ] Advance statement under 2003 Act, must be written in the prescribed form, witnessed, and signed
- [ ] Welfare attorney acceptance signature
- [ ] Copies to: welfare attorney, alternates, psychiatrist, GP, CPN/case manager, hospital systems, patient portals
- [ ] Check for electronic health record annotation (Scottish Care Information, SCI Gateway)
- [ ] Wallet crisis card referencing advance statement existence and location
- [ ] Date all signatures; supersession clause for prior documents
- [ ] Annual reaffirmation or review after any hospitalisation

## Post-Draft Review

Confirm with user:

1. Medication preferences (preferred/conditional/refused) accurate with correct rationales?
2. Crisis activation section reflects actual warning signs and preferred contacts?
3. Advance statement formalities verified for 2003 Act and AWI Act 2000?
4. Health board / specific hospital system requirements addressed?

Default if no response: recommend reviewing medication refusal rationales (most common override point).

## Quality Checks

- [ ] First-page crisis summary present and scannable in <2 minutes
- [ ] Welfare attorney chain: primary + alternate with 24/7 contact info
- [ ] Medications structured preferred/conditional/refused with rationales
- [ ] Every refusal paired with acceptable alternative
- [ ] ECT position explicit
- [ ] De-escalation preferences concrete and operationally possible
- [ ] No Ulysses Clause (not recognised in Scotland)
- [ ] Override protocol in cooperative tone
- [ ] Data sharing authorisation included (DPA 2018 / UK GDPR compliant)
- [ ] All citations verified or marked `[VERIFY]`
- [ ] No operationally impossible demands (convert to ranked preferences)
- [ ] Execution formalities match Scottish statutes
- [ ] References to MHO role where appropriate

## Guidelines

**Ethics:**

| Rule | Application |
|---|---|
| Law Society of Scotland Standards | Competence in mental health law required; refer to specialist solicitor if uncertain |
| AWI Act principles | Benefit, minimum intervention, taking account of past/present wishes, consultation with relevant others |
| 2003 Act principles | Non-discrimination, least restrictive alternative, participation, respect for carers |
| Confidentiality | UK GDPR / DPA 2018; consider omitting highly sensitive diagnoses where wide distribution required |
| Conflicts | Flag conflicts: paid caregiver, estranged partner, financially interested welfare attorney |

**Anti-hallucination:**
- Verify every citation via official legislation.gov.uk; mark unverified `[VERIFY]`
- Never assert "legally binding" without jurisdiction-specific verification, Replace aspirational language with concrete operational instructions, Keep preference rationales to 1 to 2 sentences, Scottish legal framework differs substantially from England/Wales (Mental Capacity Act 2005 does not apply in Scotland)

---

## Scotland/UK Adaptation

**Legal framework:**
- Mental Health (Care and Treatment) (Scotland) Act 2003, ss. 274 to 278 (Advance Statements)
- Adults with Incapacity (Scotland) Act 2000 (Welfare attorney / guardianship / intervention orders)
- Adults with Incapacity (Scotland) Act 2000 Code of Practice, Mental Health (Care and Treatment) (Scotland) Act 2003 Code of Practice

**Key differences from US:**
- **[SCOTS: No Ulysses Clause]** - Scottish law does not permit non-revocable advance directives. The advance statement under the 2003 Act applies during compulsory measures but can be revoked if the person regains capacity
- **[SCOTS: No HIPAA]** - UK GDPR / DPA 2018 governs data sharing; NHS Scotland information governance framework, Mental Health Tribunal for Scotland, not a court, handles appeals and override decisions, MHO (Mental Health Officer) - independent statutory role, no US equivalent, No punitive damages for non-compliance with advance statements, remedies through Tribunal/ judicial review, No stand-alone PAD statutes, use combination of 2003 Act advance statement + AWI Act welfare attorney, Notarisation not required under Scots law, witnessing rules differ between AWI Act (1 witness) and 2003 Act requirements, Health records: Scottish Care Information (SCI) systems; no patient portal equivalent to MyChart (NHS app is developing)
- Costs: legal aid may be available through Scottish Legal Aid Board for certain proceedings

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
