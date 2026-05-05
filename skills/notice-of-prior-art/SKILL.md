---
name: notice-of-prior-art
language: en
description: Drafts a Notice of Prior Art (Invalidity) disclosing references material to patent validity under the Patents Act 1977 (ss. 1-3) and the European Patent Convention (Arts. 54, 56), with element-by-element claim charts and forum-specific compliance (UKIPO, Patents Court, IPEC, EP(UK) proceedings). Use when preparing invalidity contentions, UKIPO opinion requests, patent revocation applications, or pre-litigation prior art analysis. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Notice of Prior Art (UK/Scotland Adaptation)

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

Drafts a litigation-ready Notice of Prior Art with element-by-element claim mapping, prior art reference disclosures, and procedural compliance for UKIPO opinions, Patents Court, IPEC, or EP(UK) proceedings.

## Prerequisites

1. **Patent-at-issue** - number, filing/priority dates, inventors, independent + dependent claims
2. **Prosecution history** - UKIPO correspondence, examination reports, claim amendments
3. **Prior art references** - patents, publications, products, public uses with dates and bibliographic data
4. **Procedural context** - forum: UKIPO (opinions/revocation) | High Court (Patents Court / IPEC) | EP(UK) proceedings
5. **Claim chart** - which claims are challenged and which limitations each reference addresses

## Checkpoint A: Pre-Draft Intake

Determine before drafting:

1. **Applicable framework** - Patents Act 1977 (ss. 1-3) sets novelty and inventive step criteria, harmonised with EPC Arts. 52-56
2. **Forum** - dictates caption format, citation conventions, certification language, and procedural rules:
   - UKIPO: CPR Part 74 / Patents Rules 2007 / Tribunals Practice Directions
   - Patents Court: CPR Part 63 / Patents Court Guide
   - IPEC: CPR Part 63 / IPEC Guide
   - EP(UK): national courts interpret EPC provisions
3. **Claim construction** - adopt consistent terminology matching patent claims and specification
4. **Scope** - anticipation only (s. 2), obviousness (s. 3), or both; additional grounds: insufficiency (s. 14(3) / Art. 83), added matter (s. 76), excluded subject matter (s. 1(2))

## Step 1: Header & Caption

| Forum | Required Elements |
|---|---|
| **UKIPO Opinion Request** | Patent number, applicant/patentee details, opinion type (validity/infringement), statement of grounds |
| **Patents Court / IPEC** | Full case caption, claim number, court/division (Chancery Division Patents Court or IPEC), assigned judge |
| **Revocation Petition (UKIPO)** | Patent number, proprietor, grounds under s. 72(1) Patents Act 1977 |

Include statutory basis (Patents Act 1977 ss. 1-3, 72(1)), full patent identification (number, filing date, priority date, publication date, inventors, title), and procedural authority (UKIPO → Patents Rules 2007; court → CPR Part 63 / PD 63).

## Step 2: Prior Art Reference Disclosures

For each reference, provide:

**Patent references:**
- Full number with country code (e.g., GB 2,456,789 B; EP 3,456,789 B1; US 10,000,000 B2), all inventors, filing/priority/publication dates, title, applicant, IPC/CPC classification, Foreign patents: original-language title + English translation; patent family info, EP(UK) patents in force in UK

**Non-patent literature:**
- Full bibliographic citation (UKIPO convention or OSCOLA for court)
- Authors, title, journal, volume/issue, date, pages, DOI/URL, Standards/proceedings: sponsoring org, date, location, document ID

**Public use / prior use (s. 2(2)):**
- Dates of offer for sale, public demonstration, or third-party access, Corroborating evidence (sales records, invoices, marketing materials)
- Analysis of why disclosure was sufficiently public; address confidentiality issues
- _Lux Traffic Controls Ltd v Pike Signals Ltd_ [1993] RPC 107 for public use tests

## Step 3: Claim-by-Claim Analysis

### Anticipation (s. 2 Patents Act 1977 / Art. 54 EPC)

For each challenged claim, create an element-by-element chart:

| Claim Element | Prior Art Disclosure | Citation (page:para / col:line) |
|---|---|---|
| [Limitation] | [Corresponding disclosure] | [Precise location] |

- Every limitation must be disclosed expressly or inherently in a single reference, Enablement: reference must enable practice without undue experimentation - _Synthon BV v SmithKline Beecham plc_ [2005] UKHL 59
- Inherent disclosure: _H. Lundbeck A/S v Norpharma A/S_ [2011] EWHC 907 (Pat); explain why limitation necessarily results from express disclosures, State of the art includes everything made available to the public (anywhere in the world) before the priority date

### Obviousness (s. 3 Patents Act 1977 / Art. 56 EPC)

Apply the _Windsurfing International Inc. v Tabur Marine (Great Britain) Ltd_ [1985] RPC 59 / _Pozzoli SpA v BDMO SA_ [2007] EWCA Civ 588 framework:

| Pozzoli Step | Analysis |
|---|---|
| (1) Identify notional skilled person | Education, experience, technical field |
| (2) Identify common general knowledge | What the skilled person knew at the priority date |
| (3) Identify inventive concept of claim | Construed claim in light of specification |
| (4) Differences from prior art | Map references to limitations; identify what the claim adds over cited art |
| (5) With/without knowledge of invention, are differences obvious? | _Windsurfing_ reformulation per _Pozzoli_; no "obvious to try" without reasonable expectation of success (_Conor Medsystems Inc v Angiotech Pharmaceuticals Inc_ [2008] UKHL 49) |

Address secondary considerations if applicable (_Windsurfing_, _Haberman v Jackel International Ltd_ [1999] FSR 683):
- Commercial success, long-felt want, failure of others, Copying by competitors, unexpected results, industry praise / expert scepticism, Licences of right or acknowledged superiority

## Step 4: Exhibit List

| Exhibit | Description | Date | Source | Relevance |
|---|---|---|---|---|
| A | [Doc type & title] | [Date] | [Author/source] | [Claim/limitation addressed] |

- Every cited reference must appear as an exhibit or have a verifiable public source (DOI, stable URL, GB patent register accession)
- Foreign-language references: note translation status; include certification if required, Citation format: UKIPO convention for office proceedings; OSCOLA for court filings, UK patent register extracts filed where relevant

## Step 5: Conclusion & Certification

State whether prior art lacks novelty (s. 2), involves an obvious step (s. 3), or raises other validity grounds (s. 72). For UKIPO opinions, note the non-binding nature.

| Forum | Certification |
|---|---|
| **UKIPO (opinion)** | Statement of truth under CPR Part 22 / Tribunals Practice Direction |
| **UKIPO (revocation)** | Per Patents Form 2 / Patents Rules 2007 |
| **Patents Court / IPEC** | Per CPR Part 22, signed statement of truth |
| **EP(UK)** | Per CPR Part 63 and relevant practice directions |

Signature block: typed name, designation (patent attorney/barrister/solicitor), firm, address, phone, email, date. Comply with e-filing requirements (UKIPO online / CE-File for court).

## Checkpoint B: Post-Draft Review

1. Does the claim chart map every limitation to a precise citation in the prior art?
2. For obviousness, is the Pozzoli/Windsurfing analysis articulated with specificity (not conclusory)?
3. Are all references properly categorised and exhibited?
4. Does the forum-specific certification match the filing venue?

## Quality Audit

- [ ] Correct statutory framework applied (Patents Act 1977 ss. 1-3, 72)
- [ ] Claim terminology consistent with patent specification
- [ ] Every legal assertion supported by factual analysis (no conclusory statements)
- [ ] Element-by-element chart covers all challenged claim limitations
- [ ] Obviousness analysis addresses all Pozzoli steps
- [ ] Reservation language included if additional prior art may be identified through disclosure
- [ ] Common general knowledge established properly
- [ ] No work-product analysis disclosed beyond required disclosure obligation
- [ ] All patent numbers, dates, and case citations verified against primary sources
- [ ] All bracketed terms filled or flagged

## Guidelines

- Every fact and legal assertion must have analytical support, no conclusory statements, Include reservation-of-rights language if disclosure is ongoing (CPR Part 63 disclosure)
- For UKIPO, note that disclosure obligations should be assessed per Patents Rules 2007
- Do not disclose work-product analysis beyond the applicable disclosure obligation, Verify all citations against primary sources before filing, Mark unverified external citations with `[VERIFY]`
- **All outputs require attorney/patent attorney review**

---

## Scotland/UK Adaptation

This skill is adapted for UK patent law from US practice. Key differences:

| US Concept | UK/Scotland Equivalent |
|---|---|
| 35 U.S.C. §§ 102, 103 | Patents Act 1977 ss. 1-3, harmonised with EPC Arts. 52-56 |
| Pre-AIA / AIA distinction | Single framework; s. 2 (novelty) / s. 3 (inventive step) |
| USPTO / PTAB | UKIPO / Patents Court / IPEC |
| 37 CFR 1.56 (duty of candour) | No direct equivalent; good faith, _Samsung Electronics v Apple_ [2012] EWCA Civ 1339 |
| 28 U.S.C. § 1746 (declarations) | CPR Part 22 statement of truth |
| _Graham v John Deere_ (1966) | _Windsurfting/Pozzoli_ framework |
| _KSR Int'l_ | _Conor Medsystems_ (rejection of "obvious to try" alone) |
| _In re Wands_ enablement | _Synthon v SmithKline Beecham_ |
| FRCP / local patent rules | CPR Part 63 / Patents Court Guide / IPEC Guide |
| CM/ECF e-filing | CE-File (court) / UKIPO online |
| Clear and convincing evidence (s. 282) | Balance of probabilities (UK) |
| Jury trial available | No jury (Patents Court / IPEC are judge-only) |
| Attorney registration number | Patent attorney number / Barrister chambers |

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
