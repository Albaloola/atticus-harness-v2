---
name: suppress-evidence
language: en
description: Drafts a Motion to Suppress Evidence for criminal defense, challenging admissibility under the Fourth, Fifth, or Sixth Amendment. Trigger when the user needs a suppression motion, exclusionary rule brief, or pre-trial evidence challenge involving warrantless searches, Miranda violations, consent disputes, warrant defects, or fruit of the poisonous tree. [Atticus UK/Scots refined]
tags:
- drafting, litigation, motion, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Motion to Suppress Evidence

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

Draft a court-ready motion challenging admissibility of evidence obtained through constitutional violations.

## Prerequisites

1. **Discovery materials** - police reports, body cam transcripts, witness statements, warrant applications, chain-of-custody records
2. **Defendant account** - client's version of the law enforcement encounter
3. **Jurisdiction** - state, county, court division, local rule formatting
4. **Target evidence** - specific items, statements, or derivative evidence to suppress

## Quick Start

1. Analyze case materials and build a fact timeline
2. Identify constitutional grounds (Fourth / Fifth / Sixth Amendment, state analogs, fruit of the poisonous tree)
3. Draft the motion using the required structure
4. Construct legal arguments per ground
5. Apply formatting and citation checks

## Workflow

### Step 1: Case Analysis

Extract from uploaded materials:

| Element | Capture |
|---|---|
| Timeline | Timestamps from initial contact through seizure |
| Officer conduct | Justifications, actions, warnings given |
| Inconsistencies | Conflicts between reports, body cam, witness accounts |
| Custody indicators | Location, restraint, duration, freedom to leave |
| Miranda compliance | Language used, timing, defendant's response |
| Warrant details | Affidavit basis, scope, particularity, execution |
| Consent claims | Who consented, authority, voluntariness, scope |

Flag record gaps, these support arguments that prosecution cannot meet its burden.

### Step 2: Identify Constitutional Grounds

Select all applicable:

- **Fourth Amendment** - unreasonable search/seizure
- **Fifth Amendment** - self-incrimination / Miranda violation
- **Sixth Amendment** - right to counsel violation
- **State constitutional analog** - broader protections than federal
- **Fruit of the poisonous tree** - derivative evidence

### Step 3: Draft Structure

Follow this section order:

**Caption** - court, case number, parties with full legal names.

**Introduction** - moving party, specific evidence to suppress, constitutional grounds previewed. Example: "Defendant moves to suppress the [quantity/description] seized from [location] on [date], and all statements made following arrest, on grounds that [specific constitutional violations]."

**Statement of Facts** - strict chronological order; cite to record materials (report page, timestamp, exhibit); granular detail on each law enforcement action; frame favorably through fact selection, not legal conclusions; note disputed facts with competing source references.

**Legal Argument** - separate headed section for each ground.

**Conclusion** - synthesize arguments; restate specific evidence to exclude.

**Prayer for Relief** - itemize each evidence category; include derivative evidence request; request evidentiary hearing if warranted.

**Certificate of Service / Signature Block**

### Step 4: Legal Argument Construction

#### Fourth Amendment

**Warrant-based, attack on four fronts:**

| Vector | Analysis |
|---|---|
| Probable cause | Affidavit sufficient for neutral magistrate? |
| Particularity | Place and items described with specificity? |
| Scope | Execution exceed authorization? |
| Informant basis | If CI-based: reliability and basis of knowledge? (Illinois v. Gates [VERIFY] totality test) |

**Warrantless, negate each exception:**

| Exception | Elements to Negate |
|---|---|
| Consent | No actual/apparent authority; coerced; scope exceeded |
| Search incident to arrest | No lawful arrest; not contemporaneous; exceeded wingspan |
| Automobile | No probable cause for contraband/evidence |
| Exigent circumstances | No imminent destruction, hot pursuit, or safety threat |
| Plain view | Officer not lawfully present; incriminating nature not immediately apparent |
| Terry stop/frisk | No reasonable articulable suspicion; frisk exceeded pat-down |

#### Fifth Amendment / Miranda

Establish both elements:

1. **Custody** - reasonable person would not feel free to leave (location, officer count, duration, restraint, arrest statements)
2. **Interrogation** - words or actions reasonably likely to elicit incriminating response

Attack waiver validity: warnings incomplete/incomprehensible; waiver not knowing, intelligent, voluntary. Consider age, education, mental capacity, intoxication, LE experience.

#### Sixth Amendment

1. Right attached? (formal charges, preliminary hearing, indictment, arraignment)
2. Deliberate elicitation without counsel present?
3. Valid waiver absent?

#### Fruit of the Poisonous Tree

Trace causal chain from initial violation to each derivative item. Preemptively address:

- Independent source doctrine, Inevitable discovery, Attenuation (temporal distance, intervening events, voluntary acts)

#### Good Faith Exception

Preempt by showing officers knew or should have known conduct was unconstitutional, or no reasonable officer could have believed the search/seizure was lawful.

## Checks

- Name exact items, dates, locations, officers throughout, specificity over generality, Facts section: describe conduct, never label it ("entered without announcing" not "illegal entry")
- Draw factual analogies to favorable precedent; distinguish unfavorable cases on facts, Citation hierarchy: SCOTUS → Circuit → State high court; verify not overruled, Bluebook format or jurisdiction-specific citation rules, Local rules: page limits, font, margins, cover sheets, proposed orders, Mark unverified citations with `[VERIFY]`
- Include full signature block: name, bar number, firm, address, phone, email

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
