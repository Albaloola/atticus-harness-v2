---
name: data-retention-and-destruction-policy
language: en
description: Drafts a law firm Data Retention and Destruction Policy covering practice-area retention schedules, secure destruction procedures, legal hold protocols, and compliance infrastructure. Trigger when establishing or updating records management frameworks, drafting retention schedules by matter type, or implementing secure destruction procedures for paper and electronic records. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, memo, regulatory, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Data Retention and Destruction Policy

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

Generates a firm-wide records management policy governing client file lifecycles, retention periods by practice area, secure destruction methods, legal holds, and audit requirements.

## Prerequisites

- Firm profile, practice areas, office locations, jurisdictions, Current systems, DMS, cloud storage, email, backup infrastructure, State bar rules, jurisdiction-specific ethics rules on client files, Existing policies, information security, conflicts, client intake, Vendors, certified document destruction services in use

## Quick Start

1. Gather firm profile and current systems inventory
2. Map applicable regulatory authorities to practice areas
3. Draft retention schedule by record category
4. Define destruction procedures (paper + electronic)
5. Establish legal hold protocol
6. Assign roles and build audit/training infrastructure

## Workflow

### 1. Regulatory Framework

Cite applicable authorities in the policy introduction:

| Authority | Applicability |
|---|---|
| ABA Model Rules 1.6, 1.15 | Confidentiality; safekeeping client property |
| State ethics rules | Jurisdiction-specific mandates (controls where more stringent) |
| Sarbanes-Oxley | Securities-related matters |
| HIPAA | Health law practices |
| IRS / IRC § 6001 | Tax work; 7-year documentation standard |

### 2. Scope

**Covered:** Client matter files, financial records (trust ledgers, billing), intake records (conflict databases, engagement letters), electronic records (email, cloud, mobile, backups), third-party collaboration platforms.

**Excluded:** Original client-owned documents (wills, deeds, certificates) - return on matter close; destruction requires written client authorization. Transitory communications (scheduling, duplicates) - delete promptly.

**Bound parties:** All firm personnel and third-party providers under confidentiality agreements.

### 3. Retention Schedule

| Record Category | Minimum Retention | Basis |
|---|---|---|
| General litigation / transactional | 6 yrs post-close | Malpractice SOL + margin |
| Estate planning | Permanent or client death + admin + SOL | Latent claim risk |
| Real estate | 7 to 10 yrs post-close | Title / environmental latency |
| Corporate formation / governance | Entity life + 7 yrs post-dissolution | Ongoing relevance |
| Tax preparation | 7 yrs post-filing | IRS extended audit period |
| Trust account records | 6 yrs or state bar rule (whichever longer) | Ethics rules |
| Firm accounting | 7 yrs | Tax audit exposure |
| Conflict / intake records | Duration of firm operation | Ongoing screening |
| Destruction logs | 3 yrs | Compliance evidence |

> **Legal Hold Override:** Schedules suspend immediately upon reasonable anticipation of litigation, investigation, or bar proceedings. Require written hold notice (scope, reason, responsible personnel). Retention restarts from hold release, not original close.

### 4. Destruction Procedures

**Paper:** Cross-cut shredding ≥ DIN 66399 P-4. On-site or certified vendor with chain-of-custody and destruction certificates. No regular trash or unsecured recycling.

**Electronic:**

| Sensitivity | Method |
|---|---|
| Standard | Cryptographic erasure / multi-pass overwrite (NIST SP 800-88) |
| Highly sensitive | Degaussing (magnetic) or physical destruction |
| SSDs / flash | Cryptographic erasure or physical destruction (overwrite unreliable) |

OS deletion / recycle-bin emptying is **not** sufficient.

**Scope:** Local workstations, servers, cloud, email, mobile, all backup generations, removable media.

**Device retirement:** Full sanitization or physical destruction before any device leaves firm control. Factory reset is insufficient.

**Client notification:** Written notice when matter eligible for destruction → reasonable retrieval period → document authorization or non-response.

**Destruction log fields:** Date, record description/matter ID, method used, personnel who performed/supervised.

### 5. Roles

| Role | Duties |
|---|---|
| Records Management Officer | Policy admin, exception auth, hold coordination, audit oversight |
| Supervising Attorneys | Annual file review, retention auth, hold initiation |
| IT | Automated retention flags, secure deletion, backup compliance |
| Admin Staff | Physical destruction, log maintenance, client notifications |

### 6. Training

- **New hire:** Policy overview, confidentiality, records handling, non-compliance consequences
- **Annual refresher:** Updates, audit findings, best practices
- **Records staff:** Technical destruction methods, hold procedures, All training documented with signed acknowledgments

### 7. Auditing

**Annual audit:** Sample closed files for timely destruction, verify log completeness, attempt recovery on destroyed electronic records, review hold documentation.

**Quarterly hold review:** Confirm trigger still active, narrow scope where possible, release promptly on resolution with written notice.

**Vendor oversight (annual):** Review certifications, insurance, security protocols; inspect destruction facilities; require contractual confidentiality, security, and indemnification.

**Incident reporting:** Immediate report to Compliance Officer for violations/breaches. No retaliation. Triggers: root cause investigation, client notification assessment, regulatory reporting, corrective measures.

### 8. Policy Maintenance

- Annual review by Records Management Officer + firm leadership, Interim review on: statutory/ethics changes, new technology, significant breach, Amendments communicated within 30 days, incorporated into training, Maintain version history with effective dates and approval records

## Pitfalls

- **[VERIFY]** State bar trust account minimums (commonly 5 to 7 yrs; varies by jurisdiction) - state rules control where more stringent
- **[VERIFY]** Malpractice SOL and discovery rule before setting retention floors; adjust if jurisdiction exceeds 6-year baseline
- **No indefinite retention** - holding beyond policy without justification increases breach exposure
- **Metadata** - electronic destruction must cover embedded metadata, not just visible content
- **Cloud/SaaS** - confirm contractual deletion rights; obtain vendor deletion certifications
- **Backups** - must include all generations; omitting backups leaves data recoverable
- **Malpractice carve-out** - allow attorneys to flag closed matters for extended retention with written justification and RMO approval


---

## Scotland/UK Adaptation

This skill is drafted for US law. For Scotland/UK use:
- Replace US statutes with UK/Scottish equivalents, Replace US courts with Sheriff Court / Court of Session, Replace US agencies with UK equivalents (see _SCOTTISH_LEGAL_REFERENCE.md)
- Convert USD to GBP, Replace US legal terminology with Scots law equivalents

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
