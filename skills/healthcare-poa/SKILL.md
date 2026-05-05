---
name: healthcare-poa
language: en
description: Atticus UK/Scots legal skill for healthcare-poa. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Welfare Power of Attorney, Scotland [SCOTS]

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

Drafts a Welfare Power of Attorney (WPOA) compliant with the Adults with Incapacity (Scotland) Act 2000 (AWIA 2000), designating a welfare attorney to make decisions about personal welfare, medical treatment, and access to personal data.

> **Scotland/UK Adaptation:** This skill has been converted from US Healthcare Power of Attorney (HCPOA / HIPAA) to the Scottish Welfare Power of Attorney under the Adults with Incapacity (Scotland) Act 2000. There is no direct equivalent to US Healthcare POA in Scots law. Scotland uses a unified Welfare Power of Attorney covering medical, care, and welfare decisions. Registration with the Office of the Public Guardian (Scotland) is required.

## Key Differences from US System

| US HCPOA | Scotland Welfare POA |
|----------|---------------------|
| Healthcare Power of Attorney | Welfare Power of Attorney (AWIA 2000) |
| HIPAA authorisation | Access to health records via AWIA 2000 + subject access |
| Springing (incapacity trigger) | Must be registered with OPG; only effective on incapacity |
| State-specific forms | Standardised form prescribed by Scottish Government |
| Witnesses (state-specific count) | Must be witnessed by a solicitor / notary / commissioner for oaths |
| Notarisation (state-specific) | No notarisation required; solicitor witness suffices |
| Organ donation (separate form in some states) | Human Tissue (Scotland) Act 2006; organ donation section |
| Agent can be provider in some states | No, welfare attorney must not be a paid carer (AWIA 2000 s17) |

## Prerequisites

1. **Granter (adult)** - full legal name, address, DOB
2. **Welfare Attorney** - full legal name, address, relationship; must be over 16, not bankrupt
3. **Successor welfare attorney** - same details
4. **Healthcare preferences** - wishes on life-sustaining treatment, nutrition/hydration, palliative care
5. **Scope of authority** - medical, care, residence, contact, access to records
6. **Registration** - must be registered with the Office of the Public Guardian (Scotland) before use

## Output Structure

### 1. Compliance Research (pre-draft)

| Requirement | Under AWIA 2000 |
|---|---|
| Prescribed form | Required (Scottish Government form) |
| Witness | Solicitor / Notary Public / Commissioner for Oaths |
| Registration | OPG Scotland, mandatory before use |
| Prohibited attorney types | Paid carer; person providing services under Mental Health (Care and Treatment) (Scotland) Act 2003 |
| Certificate of capacity | Required (solicitor certifies granter understands the document) |
| Duration | Continues during incapacity |
| Revocation | Any time while granter has capacity; writing to OPG |

### 2. Document Sections

**Title:** Welfare Power of Attorney, Adults with Incapacity (Scotland) Act 2000

**ARTICLE 1 - APPOINTMENT OF WELFARE ATTORNEY**
- Primary attorney(s): name, address, relationship, Successor attorney(s): same; activation order, Joint / joint-and-several powers specified

**ARTICLE 2 - WHEN EFFECTIVE**
- Only effective when granter has lost capacity (certified by medical practitioner)
- Registration with OPG Scotland is a prerequisite

**ARTICLE 3 - SCOPE OF AUTHORITY UNDER s16 AWIA 2000**

Welfare attorney may make decisions on:
- [ ] Where to live
- [ ] Day-to-day care and personal welfare
- [ ] Medical treatment (including consent/refusal under s47)
- [ ] Access to personal data and health records
- [ ] Contact with others
- [ ] Participation in work, education, leisure activities

Specific limitations (if any):

**ARTICLE 4 - MEDICAL TREATMENT DIRECTIVES**

| Treatment | Directive |
|---|---|
| Life-sustaining treatment (including ANH) | Provide / Withhold / Attorney discretion |
| Palliative care | Provide / Attorney discretion |
| Blood transfusion | Objection / Attorney discretion |
| Mental health treatment | Note: Mental Health Act overrides WPOA for compulsory treatment |

**ARTICLE 5 - RESIDENCE AND CARE**
- Preferences on care home v. home care, Geographical limitations

**ARTICLE 6 - ACCESS TO RECORDS**
- Authorisation under AWIA 2000 s17
- Explicit authority to access health records (GP, hospital, NHS board)
- Supplementary authority under UK GDPR if applicable

**ARTICLE 7 - REVOCATION**
- Granter may revoke while having capacity, Must be in writing to OPG, Drops entire WPOA; or revoke specific provisions

**ARTICLE 8 - REGISTRATION**
- Must be registered with OPG Scotland before coming into effect, Solicitor certificate of capacity required, Fee payable to OPG (verify current fee)

**CERTIFICATE OF CAPACITY (s15 AWIA 2000)**

### 3. Execution Block

```
GRANTER

Signed by the Granter on [date]
in the presence of the witness below.

Granter Signature: ______________________
Granter Name: ______________________

WITNESS (Solicitor / Notary Public / Commissioner for Oaths)

I certify that the Granter signed this document in my presence.
I am not the appointed welfare attorney.
I am a [solicitor / notary public / commissioner for oaths].

Witness Signature: ______________________
Witness Name: ______________________
Firm/Address: ______________________
Date: ______________________

CERTIFICATE OF CAPACITY (AWIA 2000 s15)
I certify that I have interviewed the Granter and am satisfied that the
Granter understands the nature and extent of this Welfare Power of Attorney.

Signed: ______________________
Date: ______________________
```

## Guidelines

- No paid carers, welfare attorney cannot be a paid carer or provider of services under the Mental Health (Care and Treatment) (Scotland) Act 2003
- Registration is mandatory before use, unregistered WPOA has no legal effect, HIPAA has no UK equivalent, use AWIA 2000 s17 and UK GDPR subject access, Medical treatment decisions fall under s47 AWIA 2000 - attorney decides what is in the adult's best interests, Mental health treatment, Mental Health Act overrides WPOA for compulsory treatment, OPG Scotland contact: https://www.publicguardian-scotland.gov.uk, Certificate of capacity by solicitor is mandatory

---

**Scotland/UK Adaptation notes:**
- Healthcare POA (US) → Welfare Power of Attorney (Scotland) - AWIA 2000
- HIPAA authorisation → s17 AWIA 2000 + UK GDPR subject access, State-specific forms → Prescribed Scottish Government form, Witness/notary → Solicitor / Notary Public / Commissioner, Springing power → AWIA 2000 s16 (effective only on incapacity)
- Organ donation → Human Tissue (Scotland) Act 2006
- $ → £

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
