---
name: telemedicine-consent
language: en
description: Atticus UK/Scots legal skill for telemedicine-consent. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Telemedicine Consent and Policy Document (Scotland/UK)

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

## Why This Skill Exists

Telemedicine consent documents fail for two reasons: they omit jurisdiction-specific prescribing and licensure requirements (creating regulatory exposure), or they use boilerplate language that fails informed consent standards because patients don't understand the real limitations of remote care. A consent form that doesn't explain why a provider can't palpate an abdomen over video is legally insufficient. A policy that ignores MHRA/GPhC controlled drug prescribing rules invites enforcement action.

This skill produces a dual-purpose document, informed consent instrument and operational policy framework, that satisfies UK GDPR / Data Protection Act 2018 privacy requirements, UK telehealth regulations, and MHRA/GPhC prescribing rules while remaining accessible to patients at varying health literacy levels.

---

## Checkpoint A: Pre-Draft Intake (Mandatory)

Gather before drafting unless user says "use defaults":

1. **Provider identity** - legal entity name, professional designations, GMC/GPhC/HCPC registration numbers
2. **Jurisdiction** - UK nation(s) where patients are physically located during consultations (Scotland, England, Wales, NI)
3. **Modalities** - synchronous video, asynchronous store-and-forward, RPM devices, mHealth apps
4. **Prescribing scope** - whether controlled drugs will be prescribed; if so, which schedules (Misuse of Drugs Act 1971 / Misuse of Drugs Regulations 2001)
5. **Billing model** - NHS-funded, private/self-pay, or hybrid
6. **Existing policies** - institutional consent forms, privacy notices (ICO registration), credentialing requirements
7. **Technology platform** - vendor names, encryption standards, DPA 2018 data processing agreements (equivalent to BAA)

**Defaults if user doesn't respond**: synchronous video only; no controlled drug prescribing; NHS-funded billing; standard UK GDPR safeguards; single-nation practice (Scotland). Label all defaults clearly.

---

## Step 1: Draft Consent and Telemedicine Explanation

| Element | Requirements |
|---|---|
| Patient ID | Full legal name, DOB, CHI number (Scotland) |
| Provider ID | Legal entity, designations, GMC/GPhC/HCPC/NMC number |
| Modalities | Enumerate each modality in use with plain-language definition |
| Benefits | Access, convenience, scheduling flexibility, reduced travel |
| Limitations | No physical exam, limited emergency response, technology dependency |

Use plain language, explain telemedicine without jargon while maintaining legal sufficiency for informed consent.

---

## Step 2: Draft Risk Disclosures

Patient must explicitly acknowledge each:

- Cannot perform hands-on examination or palpation, Limited emergency response during/after sessions, Transmission interruptions (audio/video)
- Potential unauthorised access despite encryption, Technical failures requiring rescheduling, Technology limitations may delay diagnosis, Remote prescribing carries different risk profile to in-person prescribing

---

## Step 3: Draft Patient Responsibilities

- Private, quiet location free from unauthorised listeners, Adequate bandwidth and device functionality; test in advance, Backup communication method available, Complete, accurate medical history, medications, allergies, Emergency contact information readily accessible, Understanding of when to call 999 / NHS 24 (Scotland) vs. use telemedicine

---

## Step 4: Draft Privacy and Security (UK GDPR / DPA 2018)

| Topic | Required Content |
|---|---|
| Encryption | End-to-end for video; encrypted storage for recordings/transmitted data |
| Data retention | Duration, storage location, access controls, per ICO records management guidance |
| Session recording | Recording policy, pre-recording notification, patient access rights (UK GDPR Art. 15) |
| Security limits | No absolute guarantee despite appropriate technical/organisational measures |
| Breach notification | Per UK GDPR Art. 33 to 34 (72-hour ICO notification) and DPA 2018; also notify relevant professional body |
| Lawful basis for processing | Identify UK GDPR Art. 6 basis (consent, legitimate interests, contract necessity) and Art. 9 condition for special category data (health data) |
| Data Processing Agreement | DPA 2018 compliant data processing agreement with technology vendors; ICO registration numbers |
| Data Subject Rights | UK GDPR rights, access, rectification, erasure, portability, restriction, objection |
| ICO Registration | Data Protection Act 2018 registration number; link to ICO register |

---

## Step 5: Draft Regulatory Compliance and Licensure

- Confirm provider registration/licensing with relevant UK regulatory body (GMC, GPhC, HCPC, NMC, etc.) for the patient's physical location, If cross-border within UK: GMC covers all UK nations; verify any devolved-nation-specific requirements (e.g., NHS Scotland telehealth policy)
- Telemedicine held to same standard of care as in-person (Bolam test / Montgomery criteria)
- Patient right to file complaints with relevant body preserved (GMC, Healthcare Improvement Scotland, PHSO, MSP, SSSA)
- If NHS-funded telehealth: verify current NHS England / NHS Scotland / NHS Wales / HSC NI coverage policies `[VERIFY]`
- Scottish Health Boards: confirm territorial Health Board jurisdiction

---

## Step 6: Draft Third-Party Participation

- Enumerate who may be present: family, carers, interpreters, students, trainees, care team, Patient informed of all participants; may object to any, Interpretation services at no cost for patients with limited English proficiency (or other language needs)
- Right to refuse telemedicine at any time without prejudice to in-person care

---

## Step 7: Draft Prescribing Policy

| Constraint | Detail |
|---|---|
| Clinical discretion | All prescribing at provider's professional clinical judgement (GMC Good Medical Practice / GPhC standards) |
| Controlled drugs (CDs) | Misuse of Drugs Regulations 2001 (SI 2001/3998) schedules; remote prescribing permitted under current CD legislation but with enhanced clinical governance requirements, mainly via NHS pathways `[VERIFY: current remote prescribing guidance from GMC/GPhC]` |
| Nation-specific restrictions | Scotland may have separate prescribing guidance from NHS Scotland; verify against England-specific differences |
| Excluded categories | Medication classes generally requiring in-person evaluation (some controlled drugs, initiation of certain high-risk medications) |

GMC General Medical Council standards and GPhC standards are the baseline, healthcare professionals must comply with the relevant regulatory body's guidance on remote prescribing. Adapt to jurisdiction.

---

## Step 8: Draft Clinical Scope Limitations

Conditions unsuitable for telemedicine (non-exhaustive):

- Acute chest pain, severe abdominal pain, significant trauma, Altered mental status, Conditions requiring palpation, manipulation, or other physical exam techniques, Presentations requiring immediate diagnostic testing/imaging, Any situation where standard of care cannot be met remotely

---

## Step 9: Draft Care Coordination and Billing

- Documentation standards match in-person visit requirements (GMC Good Medical Practice, keep clear records)
- Records available to other providers with patient authorisation (UK GDPR data sharing provisions)
- Follow-up protocols: in-person triggers, lab/imaging result timelines, Billing: NHS-funded care follows GMS/PMS/Directed Enhanced Services schedules; private/self-pay, reference practice manager (no specific pound amounts, internal billing policy)
- Patient responsible for any private fees, if applicable; cancellation/no-show policy

---

## Step 10: Draft Acknowledgment and Signatures

**Patient certification** - patient certifies:
- Read entire document (or had it read to them)
- Adequate opportunity to ask questions, Understands nature, benefits, risks, and limitations, Voluntarily consents, Understands right to withdraw consent at any time

**Signature blocks**: Patient, guardian/legal representative (if applicable), witness (if required), provider acknowledgment. Include date, printed name, and relationship/authority fields.

**Minor consent**: Require parent/guardian signature; specify Scotland-specific age-of-consent exceptions (Age of Legal Capacity (Scotland) Act 1991 - 16; 12+ with capacity for certain decisions) and Gillick competence considerations `[VERIFY per jurisdiction, differs between Scotland and England]`.

**Electronic signatures**: Must comply with Electronic Communications Act 2000 and UK eIDAS Regulation `[VERIFY: current status of UK eIDAS post-Brexit]`.

**Savings clause** - include verbatim:

> Execution of this consent does not waive any legal rights or remedies under the law of Scotland, does not limit the right to file complaints with professional regulatory bodies or the Information Commissioner's Office, and does not restrict the ability to pursue legal action. This document supplements rather than replaces other consent forms or agreements. In the event of conflict, the interpretation most protective of patient rights and safety prevails.

---

## Checkpoint B: Post-Draft Alignment (Mandatory)

After delivering the draft, ask:

1. Does the prescribing policy match the provider's actual scope?
2. Are the modalities listed correct and complete?
3. Are there Scotland/UK-specific requirements not yet addressed?
4. Should the document be harmonised with existing institutional policies?

If user doesn't answer, recommend the highest-priority refinement and proceed if authorised.

---

## Quality Audit

Before finalising, verify:

- [ ] Jurisdiction identified and registration/licensing requirements addressed
- [ ] All modalities in use are enumerated and explained in plain language
- [ ] Risk disclosures explicit and formatted as patient acknowledgments
- [ ] UK GDPR / DPA 2018 privacy section covers encryption, retention, breach notification, lawful basis, data subject rights
- [ ] Prescribing policy adapted to jurisdiction (UK legislation + devolved overlays)
- [ ] Clinical scope limitations included with non-exhaustive list
- [ ] Savings clause included verbatim
- [ ] Signature blocks appropriate for context (including minor consent per Age of Legal Capacity (Scotland) Act 1991)
- [ ] Every statutory citation verified or marked `[VERIFY]`
- [ ] No fee schedules or specific pound amounts
- [ ] No invented statutory language, regulatory citations, or jurisdiction-specific claims

---

## Guidelines

- Active voice throughout; plain language accessible to varying health literacy levels, Define technical terms on first use, Do not include fee schedules or pound amounts, reference billing/practice manager, Mark any unverified statutory citation with `[VERIFY]`
- Do not rely on memory for UK/Scottish telehealth regulations, verify or flag, Do not provide clinical advice, this is legal/regulatory structuring only
- **Solicitor review required** - include disclaimer in final output

## Scotland/UK Adaptation

This skill has been adapted from a US framework. Key differences for Scottish/UK telemedicine:

- **UK GDPR / Data Protection Act 2018** replaces HIPAA as the privacy framework. Key differences: no HIPAA BAAs; use DPA 2018 data processing agreements; 72-hour breach notification to ICO (instead of variable HIPAA timelines); Article 9 special category data condition required for health data processing.
- **DEA → MHRA / Home Office** - controlled drug regulation is governed by the Misuse of Drugs Act 1971 and Misuse of Drugs Regulations 2001, not DEA schedules.
- **GMC / GPhC / HCPC / NMC** replace state medical boards. The GMC is a single UK-wide regulator (unlike the US state-by-state system).
- **No Interstate Medical Licensure Compact** - the GMC already provides UK-wide registration; separate registration is not needed for cross-border practice within the UK.
- **NHS / devolved health systems** replace Medicare/Medicaid. Scotland has NHS Scotland overseen by the Scottish Government Health and Social Care Directorates; separate from NHS England.
- **999 / NHS 24** replace 911 as emergency contacts.
- **ICO (Information Commissioner's Office)** replaces HHS Office for Civil Rights for privacy enforcement.
- **Age of Legal Capacity (Scotland) Act 1991** sets age of consent at 16 (with Gillick competence considerations for 12+), differing from US state-by-state laws.
- **Electronic Communications Act 2000** and UK eIDAS replace ESIGN Act / UETA.
- **£ not $** - all amounts in pounds sterling where applicable.

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
