---
name: hipaa-release-authorization
language: en
description: Drafts authorisation for release of medical records / health information under UK data protection law and Scottish common law confidentiality. Use when drafting medical records release forms, Subject Access Requests (SARs), healthcare welfare POA support documents, or record-access instruments under the Data Protection Act 2018 / UK GDPR. [SCOTS] Equivalent of HIPAA release authorisation under Scots / UK law. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Medical Records Release Authorisation (Scotland/UK)

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

Generates an authorisation compliant with the Data Protection Act 2018 (UK GDPR), the common law duty of confidentiality, and relevant Scottish legislation, permitting designated recipients to access a patient's health records from NHS Scotland, private healthcare providers, and other data controllers.

[SCOTS: Note] This skill is adapted from the US HIPAA release authorisation framework (45 CFR §164.508). The UK / Scottish legal framework is fundamentally different: there is no single equivalent of HIPAA. Access to health records is governed by the Data Protection Act 2018 (UK GDPR), the common law duty of confidentiality, the Access to Health Records Act 1990 (deceased persons), and the Adults with Incapacity (Scotland) Act 2000 (welfare attorneys / guardians). This adapted skill retains the general methodology of a structured records release form but substitutes the Scottish/UK legal framework.

## Quick Start

Gather before drafting:

1. **Jurisdiction** - Scotland. Note: data protection is a reserved matter (UK-wide), but the Adults with Incapacity (Scotland) Act 2000 and NHS Scotland policies are devolved.
2. **Patient identity** - legal name, DOB, contact details, CHI number
3. **Recipients** - welfare attorney(s), successor attorney(s), guardian, or other nominated representative
4. **Data controllers** - GP practice, NHS Health Board (e.g., NHS Lothian, NHS Greater Glasgow & Clyde), hospital trusts, private providers
5. **Records scope** - all health records or limited categories
6. **Purpose and duration** - ongoing healthcare decision-making, specific claim or investigation
7. **Representative authority** (if applicable) - copy of registered Continuing and Welfare Power of Attorney (Adults with Incapacity (Scotland) Act 2000), guardianship order, or court appointment
8. **Related documents** - Continuing and Welfare Power of Attorney, advance directive (living will) for terminology alignment

## Required Sections

Every authorisation under UK data protection law should include these elements:

| Section | Key requirement |
|---|---|
| Patient identification | Name, DOB, CHI number, contact |
| Authorisation statement | Freely given, specific, informed and unambiguous indication of wishes |
| Authorised recipients | Named individuals, their roles / relationship to patient |
| Data controllers | Organisations holding the records |
| Records scope | Explicit categories; do not mix "all records" with narrow limits |
| Purpose | Specific healthcare decision-making or litigation purpose |
| Duration / expiry | Explicit end date or event |
| Required notices | Re-disclosure warning (common law confidentiality), right to withdraw consent at any time |
| Revocation | How and where written revocation is sent; prospective-only effect |
| Execution block | Patient signature first, then welfare attorney / guardian if applicable. Signature in presence of a witness (not required by DPA 2018 but recommended by NHS Scotland practice) |
| Witness block | Recommended for evidential purposes |

## Draft Workflow

1. **Confirm inputs** against the Quick Start checklist; flag any gaps.
2. **Select records scope** - if client wants full-record access, state it unambiguously; otherwise enumerate categories. Sensitive categories (sexual health, mental health, genetic test results, reproductive health) require explicit mention.
3. **Draft the form** using this structure:
   - Title stating "Authority for Release of Health Records"
   - Patient identification block (including CHI number)
   - Authorisation statement (voluntary, specific, informed consent)
   - List of data controllers / record-holding organisations
   - Recipients list (match names/roles to welfare POA document, if applicable)
   - Records scope with checkbox-style or enumerated selection
   - Purpose statement tied to healthcare decision-making or specific proceedings
   - Duration clause (date, event, or withdrawal, whichever first)
   - Patient rights / required statements (right of access, right to withdraw, data re-use warning)
   - Execution block (patient signature with date; welfare attorney if signing on behalf)
   - Witness block (recommended)
4. **Validate** - all placeholders visible, recipients consistent across sections, terminology aligns with governing welfare POA / guardianship order.
5. **Consider whether Subject Access Request procedure is more appropriate** - where the patient is capable and simply wishes to obtain their own records, a section 45 UK GDPR Subject Access Request is the correct route. This authorisation form is for situations where the patient authorises a third party (e.g., a welfare attorney) to access records on their behalf.

## Key Legislative Sources

- **Data Protection Act 2018** (c. 12) - implements UK GDPR, governs processing of health data (special category data under Article 9 UK GDPR)
- **UK GDPR** - retained EU-derived legislation: Article 15 (right of access), Article 6/9 (lawful basis for processing health data)
- **Access to Health Records Act 1990** (c. 23) - applies to records of deceased persons (sections 3 to 5)
- **Adults with Incapacity (Scotland) Act 2000** (asp 4) - governs Continuing and Welfare Powers of Attorney in Scotland; section 50A gives the Public Guardian oversight
- **Common law duty of confidentiality** - applies to all healthcare relationships; disclosure without consent may be a breach unless another legal basis applies
- **NHS Scotland Code of Practice on Confidentiality** - sets out NHS Scotland's approach to protecting patient information
- **Equality Act 2010** - relevant if capacity issues arise in relation to disability

## Pitfalls

- Never authorise broader disclosure than needed unless client explicitly requests full-record access.
- Never leave recipient or data controller fields unidentified.
- Never leave representative signature fields blank without authority documentation (register the welfare POA with the Office of the Public Guardian (Scotland)).
- UK GDPR does not specify a mandatory form for records release authorisation, unlike HIPAA's 45 CFR §164.508 - but the authorisation must still meet the standard of specific, informed, unambiguous consent.
- In Scotland, a registered Continuing and Welfare Power of Attorney gives the attorney authority to access health records and make welfare decisions (Adults with Incapacity (Scotland) Act 2000, sections 16 to 17). The attorney should produce the OPG certificate of registration.
- Estate-planning variants must match welfare POA terminology in the core delegation document.
- Include solicitor-review language in cover memo if template is client-facing.
- Fee: SARs under UK GDPR are generally free. Excessive or manifestly unfounded requests may incur a reasonable fee. Access to Health Records Act 1990 permits a fee for access to deceased persons' records.

## Scotland/UK Adaptation

This skill was originally based on the US HIPAA framework (45 CFR §164.508). It has been substantially rewritten for the Scottish / UK legal environment:

**Key changes:**
- Replaced HIPAA and 45 CFR §164.508 with Data Protection Act 2018 / UK GDPR framework, Replaced "covered entities" with "data controllers"
- Replaced "PHI" (Protected Health Information) with "health records / personal data / special category data"
- Replaced US state-specific formalities with references to Adults with Incapacity (Scotland) Act 2000
- Added CHI number (Community Health Index, Scotland's unique patient identifier)
- Added references to NHS Scotland, Health Boards, OPG Scotland, Replaced US HIPAA right to request restrictions with UK GDPR right to withdraw consent, Added Scotland-specific legislation: Adults with Incapacity (Scotland) Act 2000
- Date format changed to DD/MM/YYYY, Witness: recommended in Scotland but not a statutory requirement under DPA 2018
- No HIPAA "treatment payment operations" exceptions, UK GDPR requires explicit consent for each purpose, No "minimum necessary" standard (HIPAA) - UK GDPR uses "data minimisation" principle (Article 5(1)(c))

**Relevant forms:**
- Subject Access Request forms, each NHS Health Board has its own SAR form (see `/scots-forms/` directory for example from NHS Greater Glasgow & Clyde)
- OPG Scotland Continuing and Welfare Power of Attorney registration form, See `/scots-forms/` directory for downloaded Scottish forms

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
