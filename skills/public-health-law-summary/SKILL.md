---
name: public-health-law-summary
language: en
description: Generates structured, plain-language summaries of public health legislation and case law with UK/Scott legal citation. Use when summarising health statutes, vaccination mandates, emergency health powers, disease surveillance law, health equity legislation, or healthcare regulations for public bodies, providers, or policy advisors in Scotland/UK. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, regulatory, summarization, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Public Health Law Summary (UK/Scotland)

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

Produces accessible, actionable summaries of legislation or case law affecting public health policy in Scotland and the UK. Outputs are structured for government agencies, NHS boards, healthcare providers, and policy advisors.

[SCOTS: Note: This skill has been adapted from a US-focused public health law summary. UK/Scottish public health law differs materially: Scotland has its own public health legislation (the Public Health etc. (Scotland) Act 2008), its own health service (NHS Scotland), and distinct emergency powers. The US references to HIPAA, CDC, EPA, and state-level health codes are replaced with UK/Scottish equivalents.]

## Quick Start

Before summarising, confirm three things:

1. **Source** - official statutory text, case opinion, or regulatory action
2. **Jurisdiction** - Scotland-specific, UK-wide, or devolved/local scope
3. **Audience** - agency staff, clinicians, policy advisors, or general public

## Summary Structure

### 1. Header Block

| Field | Legislation | Case Law |
|-------|------------|----------|
| Title | Statute title | Full case name |
| Body | Parliament (Scottish Parliament / UK Parliament) + chamber | Court name + level |
| Date | Enactment/effective date | Decision date |
| Jurisdiction | Scotland / UK-wide / local | Sheriff Court / Court of Session / UK Supreme Court |
| Citation | Act of Parliament / SSI | Session Cases, Scots Law Times, WLR |
| Procedural posture | N/A | Appeal status, history |

All citations in **UK/Scottish legal citation format** (Session Cases, Scots Law Times, UKSC) with links to authoritative sources (legislation.gov.uk, BAILII, ScotLII).

### 2. Background & Context (1-2 paragraphs)

- Public health crisis, policy gap, or litigation trigger, Prior legal framework being modified or interpreted, Key stakeholders and interests (NHS Scotland, Public Health Scotland, local authorities)

### 3. Core Legal Analysis

**Legislation:** principal provisions in plain language, defined terms, new authorities or restrictions, funding mechanisms.

**Case law:** precise holding with plain-language explanation, key legal reasoning, concurrences/dissents only if they signal doctrinal shifts.

### 4. Public Health Areas Affected

Tag all that apply with brief impact explanation:

- Disease surveillance & reporting (Public Health etc. (Scotland) Act 2008)
- Vaccination requirements (e.g., Coronavirus Act 2020 / public health regulations)
- Environmental health standards (SEPA regulations, Environmental Protection Act 1990)
- Healthcare access & coverage (NHS Scotland)
- Emergency powers (Civil Contingencies Act 2004; Public Health etc. (Scotland) Act 2008)
- Privacy / health data (Data Protection Act 2018, UK GDPR, common law confidentiality)
- Health equity & social determinants (Scottish Government Health Inequalities agenda)
- Controlled substances / alcohol (Alcohol (Minimum Pricing) (Scotland) Act 2012)
- Food & drug safety (Food Standards Scotland, MHRA)

### 5. Practical Implications

| Stakeholder | Key Impacts |
|-------------|-------------|
| Government agencies / Public Health Scotland | New duties, authorities, compliance deadlines |
| NHS boards / healthcare providers | Clinical practice changes, reporting obligations |
| Patients / public | Rights, access, protections |
| Regulated entities | Compliance requirements, penalties |

Flag ambiguities requiring further regulatory guidance.

### 6. Scope & Limitations

- Populations, geographies, conditions **covered vs. excluded**
- Sunset provisions or expiration dates, Conflicts with existing law, which provisions control, Pending challenges or anticipated amendments
- **Cases only:** precedential scope (binding vs. persuasive)

### 7. Implementation

**Legislation:** effective date, phased schedule, responsible agencies (Public Health Scotland, local authorities), rulemaking timelines, enforcement mechanisms.

**Case law:** finality and appeal status, remand instructions, compliance obligations.

### 8. Forward-Looking Analysis

- Fit within broader trends (devolution, individual rights vs. collective health, health equity)
- Likely regulatory or legislative responses, Stakeholder action items, Related pending legislation or litigation to monitor

## Pitfalls & Checks

- **Plain language first** - define legal terms on first use; connect to public health practice
- **UK/Scottish citation required** - mark any unverified citation with `[VERIFY]`
- **No legal advice** - frame as informational summary, not counsel
- **Objectivity** - present without advocacy; note competing interpretations
- **Jurisdiction clarity** - distinguish Scottish from reserved (UK-wide) authority; note devolution issues
- **Link to sources** - provide URLs to legislation.gov.uk, ScotLII, BAILII

## Scotland/UK Adaptation

This skill has been adapted from a US public health law summary to the Scottish/UK legal framework.

### Key Differences

| US Concept | UK/Scottish Equivalent |
|---|---|
| CDC | UK Health Security Agency (UKHSA) / Public Health Scotland |
| FDA | MHRA (medicines) / Food Standards Scotland (food) |
| EPA | SEPA (Scottish Environment Protection Agency) |
| HIPAA | Data Protection Act 2018 / UK GDPR / common law confidentiality |
| CMS / Medicare / Medicaid | NHS Scotland (devolved health service) |
| State health codes | Public Health etc. (Scotland) Act 2008 |
| Emergency powers (states) | Civil Contingencies Act 2004 / Coronavirus Act 2020 |
| Bluebook citation | Scots Law Times / Session Cases / UKSC citation |
| OSHA | HSE (UK-wide) / Health and Safety at Work etc. Act 1974 |
| CDC quarantine powers | Public Health etc. (Scotland) Act 2008 (Part 3 - public health investigations and control) |
| DHHS | Scottish Government Health and Social Care Directorate |

### Applicable Legislation, Public Health etc. (Scotland) Act 2008
- NHS (Scotland) Act 1978
- Civil Contingencies Act 2004
- Coronavirus Act 2020 (temporary provisions)
- Data Protection Act 2018 / UK GDPR, Alcohol (Minimum Pricing) (Scotland) Act 2012
- Smoking, Health and Social Care (Scotland) Act 2005
- Food (Scotland) Act 2015

### Key Bodies, Public Health Scotland: www.publichealthscotland.scot, Scottish Government Health and Social Care: www.gov.scot, SEPA: www.sepa.org.uk, Food Standards Scotland: www.foodstandards.gov.scot, MHRA: www.gov.uk/government/organisations/mhra, Health and Safety Executive (HSE): www.hse.gov.uk

### Forms & Guidance
Public health forms in Scotland are specific to the relevant legislation. The Scottish Government and Public Health Scotland publish guidance documents on their websites.

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
