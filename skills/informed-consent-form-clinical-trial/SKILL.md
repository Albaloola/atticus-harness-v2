---
name: informed-consent-form-clinical-trial
language: en
description: Atticus UK/Scots legal skill for informed-consent-form-clinical-trial. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Participant Information Sheet & Informed Consent Form, UK Clinical Trial [SCOTS]

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

Produces a plain-language Participant Information Sheet (PIS) and Informed Consent Form (ICF) covering all Schedule 1 of SI 2004/1031 required elements, UK GDPR privacy provisions, and ethics-compliant framing for research participants.

> **[SCOTS: Note]** This skill has been adapted from the US FDA IRB-ready ICF framework (21 CFR 50.25, 50.27) to the UK clinical trials regulatory framework. See the Scotland/UK Adaptation section at the end.

## Prerequisites

Collect before drafting:

1. **Protocol details** - title, protocol number (EudraCT / IRAS), phase, sponsor, REC reference
2. **Investigational medicinal product (IMP)** - name, mechanism, dosing, route, known safety profile
3. **Study design** - randomisation, arms (incl. placebo), visit schedule, duration
4. **Site info** - Chief Investigator (CI) name/title, institution, REC name and contact
5. **Risk/benefit data** - preclinical and prior clinical risk frequencies/severities
6. **Injury/compensation policy** - sponsor insurance for clinical trial-related injury; participation payments (vouchers, travel expenses)

## Output Structure

### 1. Header Block

On every page: protocol title, protocol number (EudraCT/IRAS), PIS version/date, page X of Y.

### 2. Study Information

**Purpose**
- Plain-language disease/condition description, What the study tests; trial phase; participant count (site and total)
- Include: *"This is a research study, not standard NHS treatment."*

**Procedures** (chronological)
- Screening (eligibility checks), randomisation (arm probabilities incl. placebo), visit-by-visit table:

| Visit | Timing | Duration | Procedures |
|---|---|---|---|
| Screening | Week −2 | ~2 hrs | Labs, exam, eligibility |
| Baseline | Day 1 | ~3 hrs | IMP administration, vitals, ECG |
| Follow-up | Wk 4, 8, 12 | ~1 hr | Labs, safety assessments |
| End of Study | Week 16 | ~2 hrs | Final assessments, unblinding |

- Flag research-only vs. standard-of-care (SOC) procedures, Note preparation requirements (fasting, hold medications)
- Include reference to separate GP/consultant letter (informing NHS clinician)

**Risks and Discomforts**

Organise by category with frequency and severity:

| Category | Example | Frequency | Severity |
|---|---|---|---|
| IMP | Nausea, hepatotoxicity | Common/Rare | Mild/Serious |
| Study procedures | Venipuncture bruising | Common | Mild |
| Placebo exposure | Forgoing active therapy | N/A | Study-specific |
| Reproductive | Teratogenicity | Unknown | Potentially serious |
| Privacy/psychosocial | Time burden, incidental findings | Low | Mild |

- Include unknown-risks disclosure and new-information notification statement, State injury care/compensation available and what is **not** covered (per sponsor insurance arrangements)

**Potential Benefits**
- Direct benefit: state honestly if possible, probable, or not expected; cite prior data; note not guaranteed, Societal benefit: knowledge advancement, Payments/expenses: list but clarify these are not medical benefits, Include: *"Not participating will not affect your access to routine NHS care."*

### 3. Participant Rights

**Confidentiality (UK GDPR)**
- Coded identifiers (pseudonymisation), encrypted storage, restricted access, Lawful basis for processing: public interest in research (UK GDPR Art. 6(1)(e) / Art. 9(2)(j))
- Data Controller and Data Protection Officer contact details, Authorised accessors: research team, REC, HRA, MHRA, sponsor/monitors, Data retention period (per HRA guidance / sponsor policy)
- Right of access, rectification, erasure, restriction (subject to research safeguards)
- Mandatory disclosure circumstances (safeguarding, court order)
- Publication: de-identified aggregated data; no individual identification

**Voluntary Participation and Withdrawal**
- Voluntary; refusal/withdrawal does not affect NHS care or legal rights, Withdraw any time without penalty; contact CI at listed number, Pre-withdrawal data may be retained and used (explain scope)
- Investigator/sponsor may remove participant for safety, non-compliance, or study termination, New findings affecting willingness will be communicated

**Contacts**

| Role | Name | Phone | Hours |
|---|---|---|---|
| Chief Investigator (questions, injuries) | [Name, MD] | [###-###-####] | 24/7 emergencies |
| REC (rights concerns) | [REC Name] | [###-###-####] | Office hours |
| Data Protection Officer | [Name] | [###-###-####] | Office hours |
| PI / Site contact | [Name] | [###-###-####] | Office hours |

### 4. Consent Statement (ICF)

First-person acknowledgment covering: PIS read/explained, questions answered, voluntary participation, right to withdraw, agreement to participate in [Study Title], Protocol [Number].

**Optional check-box consents** (if applicable):
- Future use of samples (biobank / storage)
- Genetic testing consent, Long-term follow-up contact, Data sharing outside EEA (Safeguards / SCCs)
- GP notification

### 5. Signature Block (per SI 2004/1031 Schedule 1)

| Signatory | Printed Name | Signature | Date |
|---|---|---|---|
| Participant | | | |
| Legally Authorised Representative | | | |
| Representative's relationship/authority | | N/A | N/A |
| Person Taking Consent (name + role) | | | |

- Participant receives signed, dated copy of PIS and ICF, Add re-consent rows if protocol requires re-consent at defined intervals

## Drafting Rules

- **Reading level**: Plain English; avoid jargon; define technical terms on first use
- **No exculpatory language**: No waiver of legal rights or liability release (Schedule 1, Part 1, para 9)
- **Therapeutic misconception**: Distinguish research from treatment; do not overstate direct benefit
- **Placebo disclosure**: Explain probability and risk of forgoing active therapy
- **Vulnerable populations**: Add protections per UK regulations (adults lacking capacity, Adults with Incapacity (Scotland) Act 2000; children; pregnant women)
- **Formatting**: ≥ 12pt font, section headings, page numbers, version/date footer; typical 8 to 15 pages
- **HRA templates**: Where available, use HRA-approved PIS/ICF template wording as the base

## Checklist Before Finalising

- [ ] All Schedule 1, Part 1 and Part 2 elements of SI 2004/1031 present
- [ ] UK GDPR transparency information provided (data controller, DPO, lawful basis, retention, rights)
- [ ] No exculpatory language
- [ ] Vulnerable-population protections included (if applicable)
- [ ] GP/consultant notification letter prepared
- [ ] Adult capacity / proxy consent provisions per Adults with Incapacity (Scotland) Act 2000 (for Scottish sites)
- [ ] HRA Guidance on PIS/ICF followed
- [ ] REC approval required before use; retain REC-stamped version as operative document
- [ ] **[VERIFY]**: Confirm ICH E6(R3) GCP requirements alignment with MHRA adoption status

---

## Scotland/UK Adaptation

### Overview
This skill has been adapted from the US FDA IRB-ready ICF framework (21 CFR 50.25, 50.27) to the UK clinical trials regulatory framework.

### Key Differences from the US Original

| US Concept | UK Equivalent |
|------------|---------------|
| FDA (Food and Drug Administration) | MHRA (Medicines and Healthcare products Regulatory Agency) |
| 21 CFR 50.25 (ICF elements) | Schedule 1, SI 2004/1031 (Medicines for Human Use (Clinical Trials) Regulations 2004) |
| 21 CFR 50.27 (signature/documentation) | Schedule 1, Part 2, SI 2004/1031 |
| IRB (Institutional Review Board) | REC (Research Ethics Committee) recognised by HRA |
| IND (Investigational New Drug) | CTA (Clinical Trial Authorisation from MHRA) |
| FDA Form 1572 | UK Site Delegation Log / Investigator's Brochure acceptance |
| HIPAA Authorisation | UK GDPR privacy notice (DPO, lawful basis, data subject rights) |
| Consent (21 CFR 50 Subpart B) | Consent per SI 2004/1031 and Adults with Incapacity (Scotland) Act 2000 |
| Legally Authorised Representative | Personal Legal Representative / Professional Legal Representative per SI 2004/1031 |
| IRB continuing review | REC annual review / progress reports |
| ICH GCP E6 | UK GCP (MHRA adopts ICH E6(R2); E6(R3) pending) |
| OHRP | HRA (Health Research Authority) |
| ClinicalTrials.gov registration | ISRCTN / EUDRACT / ClinicalTrials.gov |

### Key UK Legislation
- **Medicines for Human Use (Clinical Trials) Regulations 2004 (SI 2004/1031)** as amended
- **Adults with Incapacity (Scotland) Act 2000** - proxy consent for adults lacking capacity in Scotland
- **The Mental Capacity Act 2005** - England/Wales capacity framework
- **UK GDPR / Data Protection Act 2018** - data protection for research
- **Human Tissue (Scotland) Act 2006** - use of human tissue in research in Scotland
- **Human Medicines Regulations 2012** - broader medicines regulation framework

### Scotland-Specific Context, Clinical trials in Scotland follow the same UK-wide regulatory framework (MHRA/HRA)
- **Adults with Incapacity (Scotland) Act 2000** is the relevant legislation for consent for adults lacking capacity in Scotland (not the Mental Capacity Act 2005 which applies in England/Wales)
- **Human Tissue (Scotland) Act 2006** governs use of human tissue in research, this differs from the Human Tissue Act 2004 (England/Wales)
- Scottish RECs (e.g., Scotland A REC, West of Scotland REC 1/2/3/4/5, East of Scotland REC) operate within the HRA framework but with Scotland-specific application
- **NHS Scotland** Research & Development (R&D) approval is separate from REC approval
- **Chief Scientist Office (CSO)** - funding and research governance in Scotland
- **Edinburgh Clinical Trials Unit (ECTU)** and other Scottish CTU support

### Forms and Guidance, HRA PIS/ICF templates: https://www.hra.nhs.uk/planning-and-improving-research/policies-standards-legislation/consent-and-participant-information/
- HRA guidance on consent: https://www.hra.nhs.uk/planning-and-improving-research/best-practice/consent-and-participant-information-guidance/
- IRAS (Integrated Research Application System): https://www.myresearchproject.org.uk/
- SI 2004/1031 (legislation): https://www.legislation.gov.uk/uksi/2004/1031/contents, Adults with Incapacity (Scotland) Act 2000: https://www.legislation.gov.uk/asp/2000/4/contents, Human Tissue (Scotland) Act 2006: https://www.legislation.gov.uk/asp/2006/4/contents, MHRA clinical trials guidance: https://www.gov.uk/guidance/clinical-trials-for-medicines-apply-for-authorisation-in-the-uk

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
