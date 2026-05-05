---
name: subpoena-duces-tecum
language: en
description: Atticus UK/Scots legal skill for subpoena-duces-tecum. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Specification of Documents / Commission and Diligence Application

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

Drafts a specification of documents or commission and diligence application compelling recovery of documents, records, or other property from a party or non-party (haver) in Scottish civil proceedings.

**[SCOTS: Note]** - There is no subpoena duces tecum in Scots law. The equivalent procedure is **commission and diligence** (for recovery of documents/property from havers) using a **specification of documents**. This operates through the court's nobile officium power (Court of Session) or statutory power under the Administration of Justice (Scotland) Act 1972.

## Required Inputs

1. **Case identifiers** - party names (as styled in the instance), court reference number, Sheriff Court or Court of Session with division/seat
2. **Recipient (Ha ver)** - full legal name, position, address for service; for entities: registered office or principal place of business
3. **Target documents** - categories, date ranges, identifying details (account numbers, transaction dates, names)
4. **Jurisdiction** - Court of Session (Chapter of Rules) or Sheriff Court (Ordinary Cause Rules); applicable Act of Sederunt
5. **Special considerations** - confidential information, personal data (UK GDPR), legally privileged material, financial institution records, public authority documents

## Workflow

### 1. Court Header and Instance

- Full court name with Sheriffdom/Division, Instance matching operative pleadings exactly, Court reference number with sheriff/ judge designation, Formatting per Act of Sederunt rules

### 2. Applicant's Details

- Name, firm, address, phone, email of solicitor, Party on whose behalf application is made, Reference to applicable court rule (RCS Chapter, or OCR rules)

### 3. Haver Designation

- Complete legal name and position/role, Entity havers: registered name and registered office / principal place of business, Service address verified against case documents and public records

### 4. Specification of Documents

Draft a specification with numbered paragraphs/categories calling for recovery:

- **Document types** - contracts, correspondence, accounts, invoices, emails, databases
- **Date ranges** - exact start and end dates
- **Subject matter** - specific description tied to averments in the pleadings
- **Identifying details** - account numbers, names, transaction IDs
- **Format** - paper, electronic, native files

**Per-category checks:**
- Time-bounded with exact dates, Specific enough for haver to identify responsive documents, Not so broad as to invite overbreadth objection ("fishing diligence")
- Framed with sufficient specification, Scots law requires a "specification" that is not a "fishing" or "speculative" call for documents, Covers documents in the haver's "possession, custody, or keeping"
- ESI addressed explicitly if applicable (emails, metadata, databases, deleted files, backups)

### 5. Compliance Terms

- **Recovery date** - as ordered by court (typically 14 to 28 days)
- **Recovery location/method** - delivery to applicant's solicitor or inspection at haver's premises
- **Contact** - applicant solicitor's phone and email
- **Accommodation** - alternative methods or rolling recovery for voluminous documents

### 6. Rights and Obligations Notice

- Right to object (confidentiality, privilege, undue burden) - normally by minute, Procedure for confidentiality claims and third-party interests, Privilege assertions (legal professional privilege: advice / litigation) with privilege log approach, Preservation duty upon receipt regardless of intent to object, Non-compliance consequences: diligence, court orders, expenses sanctions

### 7. Execution Block

- Signature line: solicitor name, date, firm, full contact, Details of commissioning solicitor / commissioner (who will execute commission)
- Certificate of service / intimation

### 8. Procedure Route, Choose One

**Route A, Commission and Diligence (by motion):**
- Motion enrolled by party seeking recovery, Court grants commission to a commissioner (often a solicitor)
- Commissioner executes commission: citation of haver, examination, production of documents, Applicable: Court of Session (RCS 35.1 to 35.7) or Sheriff Court (OCR 28 to 29)

**Route B, Specification of Documents (by motion/application):**
- Specification lodged with the court, Court grants diligence (order for recovery)
- Order served on haver; haver must produce documents within specified period, Used for straightforward recovery from third parties

**Route C, Pre-action recovery (Administration of Justice (Scotland) Act 1972, s.1):**
- Available before proceedings are raised, Application to the court for recovery of documents or property, May be used where there is a prima facie case, No equivalent to US pre-complaint subpoena

## Pitfalls and Checks

- **No deposition** - this is not for witness testimony; if testimony is also needed, seek precognition on oath or examination of haver
- **Specification discipline** - each category must be specifically described; avoid "fishing diligence" - Scottish courts will refuse overbroad recovery
- **Anticipate objections** - draft descriptions that survive confidentiality, data protection, and legal professional privilege challenges
- **Administration of Justice (Scotland) Act 1972** - governs pre-action/ post-action recovery; verify the current Act of Sederunt rules [VERIFY current rules]
- **Data protection** - UK GDPR considerations for production of personal data; seek protective orders where necessary
- **Fundamental documents** - in Sheriff Court, a specification of documents is required as part of the record (Ordinary Cause Rules)
- **Legal professional privilege** - communications with legal advisers and litigation-related material is privileged
- **Confidentiality** - third-party commercial confidentiality may be protected by confidentiality rings or sealed inspection
- **Consistency** - party names, case references, and dates must be identical throughout
- **Tone** - authoritative but not adversarial

---
## Scotland/UK Adaptation

This skill has been adapted from a U.S. subpoena duces tecum template for use under Scots civil procedure.

### Key Conversions
| U.S. Term | Scottish Equivalent |
|---|---|
| Subpoena duces tecum | Specification of documents / Commission and diligence |
| Fed. R. Civ. P. 45 | Act of Sederunt (Court of Session Rules / Sheriff Court Ordinary Cause Rules) |
| Issuing attorney (self-issuing) | Motion to court required; no self-issue in Scotland |
| Service by process server | Service by sheriff officer |
| Recipient | Haver |
| Production of documents | Recovery of documents / Productions |
| Privilege log | Listing of withheld documents (legal professional privilege) |
| Attorney-client privilege | Legal professional privilege (advice / litigation) |
| Work product doctrine | Litigation privilege (Scots common law) |
| HIPAA authorisations | UK GDPR / data subject access considerations |
| Presuit / pre-complaint subpoena | Administration of Justice (Scotland) Act 1972 s.1 (pre-action recovery) |
| Motion to quash / modify | Minute to object / opposition to specification |
| Contempt (non-compliance) | Court order with expenses sanctions; diligence |
| Protective order | Confidentiality agreement / confidentiality ring |
| Discovery (US sense) | Commission and diligence / disclosure of documents (more limited than US) |
| Oral deposition | No equivalent; precognition / examination on oath available |
| Fishing expedition | Frowned upon, Scottish courts require "specification" |
| In camera review | Confidential inspection by court / commissioner |
| 30(b)(6) deposition notice | No equivalent (examine a nominated representative) |

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
