---
name: ca-discovery-verification
language: en
description: Drafts California Superior Court discovery verification pages under CCP §§ 2030.250 and 2031.250 with proper CCP § 2015.5 perjury declarations. Trigger when the user needs a verification page for interrogatory or inspection/RPD responses, mentions California discovery verification, party vs. attorney signing, information-and-belief clauses, or fixing unverified responses. CA Superior Court only, not federal. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# California Discovery Verification

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

Produces correctly formatted CA verification pages with proper signer capacity, knowledge basis, and CCP § 2015.5 perjury declaration [California Superior Court only]. For Scottish/UK adaptation, see below, Scottish civil procedure does not use discovery verification as a distinct mechanism.

## Quick Start

1. Gather intake details (see Pre-Draft Intake)
2. Select verification type by discovery device
3. Select knowledge basis clause
4. Draft verification from template
5. Run quality audit
6. Confirm alignment with user

## Pre-Draft Intake

Gather before drafting (apply labeled defaults if user says "use defaults" or "just draft"):

| Field | Details | Default |
|---|---|---|
| Discovery device | Interrogatories (Form/Special) or inspection demand/RPD | Interrogatory |
| Exact response title | Must match verbatim on verification | - |
| Caption info | Court name, case number, party names | - |
| Responding party type | Individual or entity (corp, LLC, partnership) | Individual |
| Signer identity | Legal name, title/role, authority basis (entities) | - |
| Knowledge basis | Personal knowledge only, or information and belief | Info & belief |
| Execution details | Date, city, state | - |

> Do not draft verification for responses that have not been finalized.

## Step 1: Select Verification Type

| Device | Statute |
|---|---|
| Interrogatories (Form/Special) | CCP § 2030.250 |
| Inspection demand / RPD | CCP § 2031.250 |
| Federal court | Stop, use FRCP 33/34 + 28 U.S.C. § 1746 [VERIFY] |

## Step 2: Select Knowledge Basis

- **Personal knowledge only**: "The matters stated in the foregoing responses are true of my own knowledge."
- **Information and belief** (signer relied on records, employees, or collected info): "The matters stated in the foregoing responses are true of my own knowledge, except as to those matters stated on information and belief, and as to those matters I believe them to be true."

## Step 3: Draft Verification

### Individual Template

```text
[CAPTION BLOCK]

VERIFICATION OF [PARTY NAME] TO [EXACT RESPONSE TITLE]

I am the [plaintiff/defendant] in this action. I have read the foregoing responses and know the contents thereof.
[KNOWLEDGE BASIS CLAUSE]

I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.
Executed on [DATE], at [CITY], [STATE].

___________________________
[SIGNER NAME]
[Plaintiff/Defendant]
```

### Entity Template

```text
[CAPTION BLOCK]

VERIFICATION OF [ENTITY NAME] TO [EXACT RESPONSE TITLE]

I am the [TITLE] of [ENTITY NAME], a party to this action, and am authorized to make this verification for and on its behalf. I have read the foregoing responses and know the contents thereof.
[KNOWLEDGE BASIS CLAUSE]
[OPTIONAL: "I am informed by the employees and records of [ENTITY NAME] regarding the matters stated."]

I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.
Executed on [DATE], at [CITY], [STATE].

[ENTITY NAME]
By: _______________________
    [SIGNER NAME]
    Its: [TITLE]
```

Templates apply to both interrogatory and inspection/RPD verifications, select the matching type from Step 1.

## Post-Draft Alignment

After delivering, confirm with the user:

1. Verification title matches response document title exactly
2. Signer has proper authority (especially for entities)
3. Knowledge basis clause is appropriate
4. Execution location is correct (out-of-state may need adjustment)

## Quality Audit

Before finalizing, verify all of the following:

- [ ] Verification title matches response title verbatim
- [ ] Signer capacity stated; entity authorization language included
- [ ] CCP § 2015.5 perjury language verbatim: "under the laws of the State of California"
- [ ] Execution date and city/state present
- [ ] Signature block includes name and capacity
- [ ] Objections not verified (attorney signs for objections)
- [ ] Knowledge basis clause matches actual basis of responses
- [ ] Federal court not using CCP form
- [ ] No attorney signature where party signature required

## Pitfalls

- Title mismatch between verification and response invites motions to compel, Attorney-signed verifications invalid except narrow CCP § 446 circumstances [VERIFY]
- "Personal knowledge" clause wrong if signer relied on records, use information-and-belief, Never verify legal objections, attorney signs the response document for those, Omitting "under the laws of the State of California" from perjury declaration is a fatal defect, No notarization unless court order or client policy requires it, Perjury exposure for false verifications (Cal. Penal Code § 118) [VERIFY]
- All case citations must be verified or flagged `[VERIFY]` - do not invent case law
- **Attorney review required** - all output must be reviewed by supervising counsel before signature or service

## Scotland/UK Adaptation

This skill is drafted for California Superior Court discovery verification (CCP §§ 2030.250, 2031.250, 2015.5). **Scottish civil procedure does not use interrogatories, document production requests (RPDs), or verification pages.**

- **No US-style discovery**: Scottish civil procedure is primarily documents-based. No interrogatories, no RPDs, no discovery verification.
- **Sworn evidence**: affidavits (sworn on oath before notary public) are used for court applications requiring formal written evidence. Affidavits must be sworn, no CCP §2015.5 equivalent.
- **Commission and diligence**: court-ordered recovery of documents via specification of documents. Details listed specifically (no general requests).
- **Commission for examination**: oral examination of witness under oath before commissioner (rare; by court order only). Most similar to deposition but not available as of right.
- **Perjury**: Perjury (Scotland) Act 1942 - applies to sworn evidence only. Unsworn false statements not perjury.
- **Affidavit format**: deponent name, statement of facts (signed), jurat (place, date, notary signature). No "under the laws of [state]" requirement, sworn on oath.
- **Court rules**: Ordinary Cause Rules (Sheriff Court); Rules of the Court of Session 1994. Simple Procedure has its own rules with no formal discovery.
- **Practical use of this skill**: the quality audit and drafting methodology (intake, template selection, knowledge basis distinction) transfers conceptually. Templates and legal authorities do not.
- **Alternative**: for Scottish litigation, prepare formal affidavits where court requires, or specifications of documents for document recovery.

For a full reference, see `scots-forms/Scottish-Civil-Procedure-Oath-Declarations-Guidance.md`.

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
