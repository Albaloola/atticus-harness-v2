---
name: health-care-agent-letter
language: en
description: Drafts a non-binding instruction letter (values letter / legacy letter) from a client to their designated health care agent, translating personal values, quality-of-life thresholds, and scenario-based treatment preferences into operational bedside guidance for substituted judgment. Trigger when the user mentions values letter, legacy letter, instruction letter to healthcare proxy, substituted judgment guidance, supplementing an advance directive with personal guidance, or communicating treatment wishes to a designated agent. Also trigger for family conflict around medical decision-making authority. [Atticus UK/Scots refined]
tags:
- drafting, letter, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Instruction Letter to Health Care Agent

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

Non-binding, client-voiced letter that supplements formal advance directives with operational guidance a health care agent can use at the bedside. Not a legal document, the most important supplement to one. In "clear and convincing evidence" jurisdictions (e.g., New York), the letter also serves a critical evidentiary function.

**ATTORNEY REVIEW REQUIRED** - Draft must be reviewed by a licensed attorney before use.

## Quick Start

1. Run pre-draft intake (Checkpoint A)
2. Frame letter and harmonize with legal documents
3. Translate values into decision-making principles
4. Draft scenario-based treatment guidance
5. Address religious/spiritual/cultural commitments
6. Establish agent authority and conflict management
7. Draft closing and distribution plan
8. Run post-draft alignment (Checkpoint B)
9. Run quality audit

## Checkpoint A: Pre-Draft Intake

Gather before drafting (apply labeled defaults if user says "use defaults" or doesn't respond):

| Topic | Gather | Default |
|---|---|---|
| Executed documents | HCPOA/proxy, living will, POLST/MOLST, HIPAA auth, organ donation. If unavailable, frame letter as "pending harmonization with signed directives" | Supplement to existing directive |
| Identity & audience | Client name; primary agent + alternates (names, relationships); share now or upon incapacity | Primary agent audience |
| Medical context | Major diagnoses, chronic conditions, hospitalizations, cognitive baseline, formative experiences (e.g., caring for parent with dementia) | - |
| Values & tipping points | What makes life meaningful; independence definitions; cognitive thresholds; longevity vs. comfort; pain/sedation/dependence tolerance; home vs. facility | Comfort-focused |
| Treatment preferences | CPR, ventilator, dialysis, feeding tubes, antibiotics, major surgery, time-limited trials, palliative sedation | Moderate detail |
| Religious/spiritual/cultural | Rituals, sacraments, clergy contacts, dietary restrictions, modesty, doctrinal positions | - |
| Family dynamics | Likely objectors, communication wishes, conflict preferences, who to inform | - |
| Tone | Intimate, direct, spiritual, humorous, formal | Warm but direct |

## Step 1: Frame Letter and Harmonize with Legal Documents

| Element | Requirement |
|---|---|
| Governing documents | Identify by name and date (or `[DATE]` placeholder) |
| Non-binding statement | Letter supplements, does not supersede, formal directives |
| Substituted judgment | Tell agent: "You are being my voice, not making your own choice" |
| Terminology | Mirror client's executed forms (Health Care Proxy / Medical POA / Advance Health Care Directive) |

Template opening:

> "This letter is not a legal document and does not replace my [Health Care Power of Attorney / Advance Directive dated ______]. I wrote it to help you understand what matters most to me so that, if you ever have to speak for me, you can make decisions the way I would make them."

- Flag any discrepancy between letter and signed directives for attorney review, Never present as binding instructions

## Step 2: Translate Values into Decision-Making Principles

Address the three functional thresholds driving most bedside decisions:

| Threshold | Question |
|---|---|
| Cognitive function | What level of awareness/recognition is essential? |
| Physical independence | What dependence is tolerable vs. unacceptable? |
| Pain experience | What is the comfort vs. alertness tradeoff? |

- Address dementia stages specifically, use plain language, not clinical scales, Distinguish temporary impairment (post-surgical delirium) from permanent loss (advanced dementia)
- Pair every values statement with a concrete scenario

## Step 3: Draft Scenario-Based Treatment Guidance

For each category, state general preference + conditional scenarios:

| Category | Cover |
|---|---|
| CPR and intensive care | Frailty context vs. otherwise healthy |
| Breathing machines | Short trial vs. indefinite support |
| Feeding tubes | Temporary recovery aid vs. permanent dependence |
| Infections and antibiotics | Curative vs. comfort-only contexts |
| Pain control and sedation | Comfort priority even if life-shortening |
| Time-limited trials | Duration, reassessment criteria, who decides to stop |
| Hospice and care setting | Home vs. facility preferences |
| Sensory/environmental | Music, touch, outdoors, lighting |

- Frame as guidance ("If my doctors believe… then I would prefer…"), not rigid orders, Empower agent to ask: "What are best/worst outcomes? What does recovery look like? What if we do nothing?"
- Never draft to resemble a POLST/MOLST, recommend as separate clinical/legal workflow

## Step 4: Address Religious, Spiritual, and Cultural Commitments

- State beliefs in client's own words, Translate into concrete requests (clergy contacts, sacraments, dietary needs, modesty requirements)
- Address conscientious-objection scenarios: instruct agent on facility transfer if needed, If religiously significant refusals exist (e.g., blood products), ensure documented in formal legal/medical forms, not just this letter

## Step 5: Establish Agent Authority and Conflict Management

Authorize the agent to:
- Request ethics consults, palliative care consults, family meetings, Obtain second opinions, Rely on treating team when consistent with client values, Make decisions without unanimous family agreement

Template conflict language:

> "You do not need unanimous agreement from the family to follow my wishes. If there is conflict, request a family meeting with the medical team and, if helpful, an ethics consult."

- Name anticipated objectors and reinforce agent authority, Do not create de facto co-agents by asking multiple people to "decide together"
- Address HIPAA information-sharing boundaries

## Step 6: Draft Closing and Distribution Plan

| Element | Include |
|---|---|
| Gratitude and reassurance | Thank agent; transfer moral responsibility back to client |
| Permission statement | "You are not 'doing this to me,' you are doing this for me" |
| Distribution | Who gets copies; share now or upon incapacity |
| Document location | Where formal legal documents are kept |
| Signature and date | Optional witness/notary for evidentiary weight |

## Checkpoint B: Post-Draft Alignment

Ask after delivering initial draft:

1. Does the letter reflect your voice, would the agent recognize this as you?
2. Are dementia-stage and cognitive-decline preferences correctly stated?
3. Is there anyone who might challenge the agent that we should address more directly?
4. Should this letter be shared now or sealed until incapacity?

If no answer, recommend reviewing dementia-specific guidance (most common gap).

## Quality Audit

- [ ] Governing documents identified correctly (or placeholders used)
- [ ] No contradiction with signed directives (discrepancies flagged)
- [ ] Values are operational, agent can answer: "What would you want if doctors say you won't recover?"
- [ ] No vague phrases ("no heroic measures," "vegetable") - replaced with functional descriptions
- [ ] All facts, dates, relationships are user-provided, not inferred
- [ ] Legal citations verified or marked `[VERIFY]`
- [ ] Dementia-specific guidance included
- [ ] Agent granted emotional/moral authority
- [ ] Adversarial review: no sentence easily weaponized out of context
- [ ] Written at accessible reading level in client's voice
- [ ] Family conflict management addressed
- [ ] Distribution plan included

## Guidelines

**Compliance:**
- **Rule 1.1**: Supplemental narrative only; never imply it changes legal rights
- **Rule 1.14**: If diminished capacity or coercion suspected, advise attorney-conducted capacity-sensitive interview
- **Rule 1.6**: Client decides recipients; warn that medical-record placement makes letter broadly accessible
- **Rules 1.7/1.8(f)**: Do not take instructions from agents or family; flag third-party steering

**Jurisdiction notes:**
- Match terminology to client's executed forms and local usage
- **NY** and "clear and convincing evidence" states (*In re Storar*, 52 N.Y.2d 363 (1981) `[VERIFY]`): draft with heightened specificity
- **CA, TX, FL** and states allowing form attachments: note letter may be incorporated by reference (attorney decision)
- **MAID jurisdictions** (OR, WA, CA, etc.): agent generally cannot request MAID for principal, flag as separate workflow; do not imply agent MAID authority

**Anti-hallucination:**
- Do not invent facts, diagnoses, family relationships, document dates, or religious beliefs, Do not draft language resembling a POLST/MOLST or medical order, Do not use legalese ("principal," "attorney-in-fact") in the client-facing letter, Do not include medical statistics without a citable source, Do not state the letter is "legally binding"
- Do not invent registry names; ask if a state registry is in use

## Scotland/UK Adaptation

This skill is written for US health care proxy systems. The Scottish legal framework is fundamentally different, governed by the **Adults with Incapacity (Scotland) Act 2000**. Use the following adaptations.

### Key Changes for Scotland

| US Concept | Scottish Equivalent |
|---|---|
| Health Care Proxy / Medical POA | **Welfare Power of Attorney** (AWI (Scotland) Act 2000) |
| Agent / Attorney-in-fact | **Welfare Attorney** |
| Principal / Grantor | **Granter** |
| Advance Directive / Living Will | **Advance Directive** (recognised at common law; no statutory form in Scotland) |
| POLST / MOLST (medical orders) | No Scottish equivalent, clinical decisions follow AWI Act principles |
| HIPAA | **Data Protection Act 2018** / UK GDPR + common law duty of confidentiality |
| "Clear and convincing evidence" (NY *Storar*) | No equivalent standard - **AWI Act principles** (benefit, minimum intervention) govern |
| MAID (assisted dying) | **Not legal in Scotland** (as of 2026; proposed Assisted Dying for Terminally Ill Adults (Scotland) Bill under consideration) |
| Values/instruction letter | **Anticipatory Care Plan** / **Key Information Summary (KIS)** - may be placed in NHS Scotland shared record |

### The Welfare Power of Attorney (Scotland)

**Key features:**
- Governed solely by Adults with Incapacity (Scotland) Act 2000 Part 2
- Can only act when the adult **lacks capacity** to make the specific decision (functional test)
- Must apply the AWI Act **principles**:
  1. Benefit to the adult
  2. Minimum intervention necessary
  3. Take account of the adult's past and present wishes
  4. Consult with relevant others (nearest relative, primary carer, named person)
  5. Encourage the adult to exercise whatever capacity they retain, Must be **registered with the Office of the Public Guardian (Scotland)** before use, Requires certification of incapacity by a medical practitioner, Solicitor involvement is standard practice (virtually universal)

### Powers of a Welfare Attorney

A Welfare Power of Attorney can be granted for:
- Deciding where the adult lives, Medical treatment decisions (including refusal)
- Day-to-day care and personal care arrangements, Access to personal information (subject to data protection)

**Cannot** do:
- Consent to forced psychiatric treatment (requires Mental Health Act)
- Consent to sterilisation or termination of pregnancy (requires court authority)
- Act if a guardianship order has conflicting powers

### Values Letter / Instruction Letter in Scotland

A Scottish equivalent of the US values letter can be created as:
1. **Supplement to Welfare Power of Attorney** - providing guidance on granter's values
2. **Anticipatory Care Plan (ACP)** - shared with GP and added to Key Information Summary (KIS)
3. **Hospital Passport / My Care My Way** - personalised planning document

**Important:** Scottish law uses the **"benefit" principle** (not pure substituted judgment). The values letter helps establish what the adult would have considered to be in their best interests, but the welfare attorney must still apply the objective benefit test.

### Capacity Assessment in Scotland

- Decision-specific (functional test) - not global incapacity, Must be certified by a medical practitioner (GP, psychiatrist, or relevant specialist)
- Fluctuating capacity: adult makes their own decisions when able; attorney steps in temporarily, The AWI Act requires that any intervention must be the **least restrictive** option

### Registration Requirement

The Welfare Power of Attorney must be **registered with the Office of the Public Guardian (Scotland)** before it can be used:
- Registration typically takes 6 to 10 weeks, Must notify the adult and certain relatives of the registration application, Costs ~£80 (registration fee, subject to change)
- The document remains registered and becomes effective on certification of incapacity

### Alternative Routes (if no POA)

If the adult lacks capacity and has no Welfare Power of Attorney, an application for **Guardianship** must be made to the Sheriff Court, a more expensive and time-consuming process.

### Key Statutes (Scotland)
- Adults with Incapacity (Scotland) Act 2000
- Mental Health (Care and Treatment) (Scotland) Act 2003
- Adult Support and Protection (Scotland) Act 2007
- Data Protection Act 2018

### Practitioner Notes
- **Never use US-origin terms** ("health care proxy", "HIPAA") in Scottish documents, use "Welfare Power of Attorney", "welfare attorney", "AWI Act"
- The values/intention letter methodology translates well but must be framed as ACP/supplemental guidance, not as binding instructions, For assisted dying / MAID, not legal in Scotland; do not draft or imply agent authority, See the guidance note in `scots-forms/Scotland-welfare-attorney-guide.md` for detailed Scottish procedure

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
