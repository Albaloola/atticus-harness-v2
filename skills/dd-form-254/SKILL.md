---
name: dd-form-254
language: en
description: Atticus UK/Scots legal skill for dd-form-254. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Contract Security Classification Specification (UK) - Security Aspects Letter

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

[SCOTS: Note] This skill is adapted from the US DD Form 254 (Contract Security Classification Specification under NISPOM 32 CFR Part 117 / DCSA). The UK equivalent is the **Security Aspects Letter (SAL)** issued by the contracted authority under the UK Government Security Classification (GSC) policy, with Facility Security Clearances (List X) managed by UK Industrial Security. The two systems are structurally different, this skill provides a methodology for UK SAL drafting using the general framework of the US DD Form 254 workflow.

Establishes security classification requirements and safeguarding procedures for UK classified government contracts, following the Security Aspects Letter (SAL) format used by UK government departments.

## Prerequisites

Collect before drafting:

- **Contract award document** - contract number (including amendments)
- **Contractor details** - legal name, Companies House number, registered address
- **List X details** - UK List X certificate number, facility security clearance level, expiry
- **Subcontractor details** (if any) - legal name, address, classified work scope, List X status
- **Statement of work** - determines highest classification level required
- **Government Security Classification (GSC)** - determine classification level: OFFICIAL, SECRET, TOP SECRET
- **Government Security Contact** - name, title, department, phone, email
- **Contractor Security Officer (CSO)** - name, title, phone, email

## Workflow

### 1. Contract and Entity Identification

| Field | Requirement |
|---|---|
| Contract number | Exact match to award document (all amendments) |
| Contractor name | Legal name per Companies House, no trading names |
| Facility address | Physical location of classified work |
| Companies House number | Links contract to entity registration |
| List X certificate number | Facility Security Clearance reference (if applicable) |
| Subcontractors | Each: legal name, Companies House number, List X status, address, classified scope, whether separate SAL needed |

### 2. Classification Determinations

Determine highest level per HMG Government Security Classification (GSC) policy:

- **OFFICIAL** - most routine government business, including OFFICIAL-SENSITIVE
- **SECRET** - information that could cause serious harm to national security, economic interests, or public safety
- **TOP SECRET** - information that could cause exceptionally grave damage to national security

The narrative must cover:

- **Categories** - technical data, intelligence material, operational information, cryptographic material, defence specifications
- **Physical scope** - government facilities, contractor facilities, or both
- **Temporal scope** - one-time vs. ongoing access
- **Special protections** - identify each explicitly:

| Category | Key Requirements |
|---|---|
| UK Eyes Only | Nationality-based access control |
| Cabinet / CO | Restricted to Cabinet-level handling |
| NATO RESTRICTED/CONFIDENTIAL/SECRET | International security agreements |
| ATOMAL (UK)-related | Atomic energy classification per Atomic Energy Act 1946 |
| Personal Data / UK GDPR | Enhanced handling for personal data combined with GSC |

- **Security Classification Guide (SCG) references** - cite relevant department-specific guides

### 3. Safeguarding and Handling

**Storage:** Government-approved security containers per GSC level; SCIF (Sensitive Compartmented Information Facility) for TOP SECRET / UK Eyes Only materials.

**Transmission:**

| Method | Requirements |
|---|---|
| Electronic (encrypted) | Approved systems only (e.g., GSi, PSN, Protect, e-Filing systems); specify encryption standard per NCSC guidance |
| Hand-carry | Chain-of-custody documentation between cleared facilities |
| Government courier | SECRET and above / special categories |
| Secure post | DX (Document Exchange) or Royal Mail Special Delivery (OFFICIAL-SENSITIVE) |

**Destruction:** Approved methods per GSC level and media type; witnessed destruction; destruction certificates and retention per department policy.

**Physical security:** IDS, access control systems, security-in-depth measures per HMG Security Policy Framework.

**Derivative classification** (if contractor generates classified material): classification authority, applicable SCGs, portion markings (OFFICIAL, SECRET, TOP SECRET), overall document marking, declassification instructions or review date.

### 4. Personnel Security Clearance Requirements

| Element | Detail |
|---|---|
| Clearance levels | By position: SC (Security Check) / DV (Developed Vetting) / CTC (Counter-Terrorism Check) |
| Additional access | UK Eyes Only indoctrination, Cabinet-level briefings |
| Headcount | Estimated by clearance level and access type |
| Nationality | British citizen / dual national / other eligibility per HMG Baseline Personnel Security Standard (BPSS) |
| Interim clearances | Conditions and access limitations while clearance is in progress |
| Pre-access | NDSA (Non-Disclosure Agreement), security briefings, specialised training |
| Enhanced screening | DV involves financial checks, background investigation, and interview |

### 5. Certification and Acknowledgment

**Government certifying official block:** name, title, department, office address, phone, email. Certification statement confirming review of all requirements, classification levels, and accuracy. Signature and date.

**Contractor acknowledgment block:** CSO name, title, designation, phone, email. Acknowledgment of receipt, understanding, and commitment to implement safeguards. Signature and date.

### 6. Document Markings

Apply to the SAL itself:

- Overall marking = highest classification level in document, Portion markings per section: (OFFICIAL), (SECRET), (TOP SECRET)
- Classification authority and declassification instructions, Handling caveats (UK EYES ONLY, etc.) as applicable

## Checks

- **Exact match** - contract numbers, Companies House numbers, and legal names must be character-perfect; mismatches delay clearance processing
- **Actionable** - every requirement must be implementable by contractor CSO without further clarification
- **Traceable** - every security requirement cites HMG Security Policy Framework, Government Security Classification policy, or department-specific guidance with specific sections
- **Flow-down** - determine whether each subcontractor needs its own SAL based on classified access scope
- **SCG currency** - verify all referenced SCGs are current editions
- **List X validity** - verify current List X certificate is valid for the required classification level
- **NCSC guidance** - cross-reference current NCSC security guidance for encryption and secure systems, Mark `[VERIFY]` on any SCG number, policy section, or regulatory citation not confirmed against source documents

## Scotland/UK Adaptation

This skill was originally based on the US DD Form 254 / NISPOM (32 CFR Part 117) / DCSA framework. It has been adapted for the UK government security environment.

**Key changes:**
- Replaced DD Form 254 with UK Security Aspects Letter (SAL)
- Replaced NISPOM (32 CFR Part 117) with HMG Government Security Classification (GSC) policy and Security Policy Framework, Replaced DCSA with UK Industrial Security (Cabinet Office)
- Replaced CAGE codes with Companies House numbers, Replaced SAM registration with Companies House registration, Replaced US classification levels (Confidential/Secret/Top Secret) with HMG GSC (OFFICIAL/SECRET/TOP SECRET)
- Replaced SCI/SAP with UK Eyes Only / Cabinet / NATO-specific caveats, Replaced US SCIF standards with UK SCIF standards per HMG policy, Replaced NISPOM security container (Class 5/6) with GSA-approved UK equivalents or HMG-approved containers, Replaced US personnel clearance (SSBI/Tier 5) with UK SC/DV/CTC, Replaced U.S. citizen / LPR with British citizen / BPSS eligibility, Replaced DCSA FCL with UK List X facility security clearance, Replaced US courier (Defense Courier Service) with UK Government courier services, Added UK-specific handling caveats, Added reference to NCSC (National Cyber Security Centre) for encryption guidance, Removed references to SAP (Special Access Programs), RD/FRD, no UK equivalents, Changed language to British English spelling, Date format: DD/MM/YYYY

**Relevant forms:**
- Security Aspects Letter template (available from individual UK government departments, typically MoD, HMRC, Home Office, Cabinet Office)
- List X application form, UK Industrial Security (Cabinet Office)
- See `/scots-forms/` directory for relevant UK government security forms

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
