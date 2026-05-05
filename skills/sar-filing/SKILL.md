---
name: sar-filing
language: en
description: Drafts Suspicious Activity Reports for submission to the UK National Crime Agency (NCA UKFIU) under the Proceeds of Crime Act 2002 (POCA) and Terrorism Act 2000 (TACT). Compiles subject identification, transaction timelines, red-flag analysis, and activity classifications. Use when a financial institution or regulated sector entity detects suspicious transactions requiring SAR submission, DAML consent requests, continuing activity reports, or MLRO reporting obligations. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# SAR Filing, UK (NCA UKFIU)

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

Drafts an NCA-ready Suspicious Activity Report via the SAR Portal from transaction records, investigation files, and institutional data. This skill adapts the US FinCEN SAR model for the UK framework under POCA 2002.

[SCOTS: Note] This skill adapts the US FinCEN SAR (Form 111) for the UK suspicious activity reporting framework. The core narrative methodology (Who/What/When/Where/Why/How, red-flag analysis, subject identification) transfers directly. However, the UK system differs significantly: (1) no minimum threshold, ALL suspicious activity must be reported regardless of amount; (2) no statutory filing deadline (but report "as soon as practicable"); (3) no specific SAR form, reports are submitted via the NCA SAR Portal; (4) DAML (Defence Against Money Laundering) consent is a unique UK feature; (5) the MLRO (Money Laundering Reporting Officer) is central to the disclosure process; (6) tipping-off is a criminal offence under POCA s. 333 and TACT s. 21D.

## Prerequisites

Gather before drafting:

1. **Transaction records** - amounts, dates, account numbers, instrument types
2. **KYC/CDD documentation** - passport/ID, NI number, proof of address, beneficial ownership structure (transparency registers)
3. **Investigation file** - alerts, internal notes, employee observations, MLRO review notes
4. **Filer details** - institution legal name, FCA registration number, LEI, AML supervisor, MLRO contact
5. **Prior SAR history** (continuing filings) - NCA SAR Portal references, dates

## Quick Start

1. Determine filing type: Initial SAR / DAML (Defence Against Money Laundering) consent request / Continuing SAR (supplementary)
2. Verify suspicion threshold: no minimum threshold, report if there is knowledge, suspicion, or reasonable grounds to know or suspect money laundering or terrorist financing
3. Confirm urgency: DAML consent requests must be filed before carrying out a prohibited act (e.g., transferring funds); the NCA has 7 working days to respond (extendable to 31 calendar days)
4. Draft sections in order below
5. Run compliance checklist before submission via the NCA SAR Portal

## SAR Sections

### 1. SAR Portal Header

| Field | Detail |
|---|---|
| Filing type | Initial / DAML consent request / Continuing / Supplementary |
| Institution | Legal name, FCA ref no, LEI (if applicable) |
| AML supervisor | FCA / HMRC / SRA / Law Society of Scotland / ICAS / other |
| MLRO contact | Name, title, phone, secure email |
| Date of suspicion | When the MLRO formed the suspicion |
| Prior SAR ref | If continuing: NCA reference number |
| DAML indicator | Yes/No, is a defence against money laundering consent required? |

### 2. Subject Identification

Identify all relevant parties: Subject of suspicion, Beneficial owner, Account holder, Transaction counterparty, Third party introducer.

**Individuals:** Legal name, aliases, date of birth, NI number, address, passport/ID (type, number, issuing country, expiry). Foreign nationals: passport, visa status, citizenship, PEP status, high-risk jurisdiction nexus.

**Entities:** Legal name, trading name, Company House number, registered address, jurisdiction of incorporation, business nature, beneficial owners (People with Significant Control / PSC register; ≥25% or control). Scottish entities: registered in Scotland (SC and SO prefixes) or Scotland-based.

**Relationships:** Document familial, business, signatory, nominee, or intermediary connections between parties.

### 3. Account Detail

For each account or product: account number/sort code, type, open date, status (active/closed/restricted/frozen), holders/signatories, stated purpose, expected activity profile, and deviations.

Include: branch/relationship manager details, prior compliance concerns, correspondent banking/MSB relationships, CDD/EDD measures performed, source of funds/wealth position, closure details if applicable.

### 4. Activity Classification

Select primary and secondary categories based on JMLSG Guidance Notes:

| Category | Examples |
|---|---|
| Structuring / smurfing | Transactions below CDD/reporting thresholds |
| Money laundering (layering/integration) | Rapid movement, round amounts, no economic purpose |
| Terrorist financing | Suspicious charity links, travel patterns, informal value transfer |
| Fraud | APP fraud, identity fraud, investment fraud, romance fraud |
| Bribery & corruption | PEP-linked transactions, unusual payments to officials |
| Tax evasion / offshore evasion | HMRC civil/criminal referral indicators |
| Cyber-enabled | Account takeover, malware, phishing, social engineering |
| Sanctions evasion | OFSI/UN sanctions regime breaches |
| Proliferation financing | Dual-use goods, sensitive jurisdiction links |
| Other | Unlicensed money service business, trade-based ML, human trafficking/modern slavery |

**Thresholds:** No minimum threshold in the UK. Report ALL suspicions regardless of amount. For blocked/attempted transactions, explain why filing is warranted.

State total amount (GBP and/or foreign currency), source of funds (where known), and complete time period of suspicious activity.

### 5. Narrative

Address Who/What/When/Where/Why/How chronologically:

1. **Detection** - How suspicion arose (monitoring alert, staff referral, law enforcement enquiry, SAR feedback, internal audit); specific trigger event; why it was not a false positive
2. **Timeline** - Each relevant transaction: date, type, amount, source → destination, stated purpose, unusual characteristics
3. **Red flags** - Map facts to indicators in JMLSG Guidance Notes, NCA SAR Guidance, or FATF recommendations: reluctance to provide ID, no economic rationale, rapid in/out movement, structuring patterns, shell/PSC opacity, high-risk third-country connections, PEP status, inconsistent profile
4. **Investigation** - CDD/EDD measures taken, customer contact attempts and responses, open-source checks, Companies House/PSC register searches, prior SAR references (NCA ref numbers and dates), interviews
5. **Conclusion** - Factual basis for reporting in objective tone. **No conclusions about criminal intent.** If DAML consent is sought, state clearly what prohibited act the reporter seeks to undertake and why consent is required

### 6. Supporting Documentation

Index attachments by category: transaction records, customer ID, correspondence, monitoring alerts, investigation memos, public register extracts. Label each with title and narrative relevance. The NCA accepts attachments via the Portal (size limits apply).

## Compliance Checklist

- [ ] Submitted via NCA SAR Portal (or SAR online paper form, Portal strongly preferred)
- [ ] All mandatory Portal fields completed
- [ ] MLRO has reviewed and approved (required under MLR 2017 reg. 21)
- [ ] Narrative answers Who/What/When/Where/Why/How
- [ ] All dates, account numbers, IDs verified
- [ ] DAML consent requested if applicable (must be before the prohibited act)
- [ ] Consent replied within 7 working days (NCA); can apply for moratorium period extension (31 calendar days → 186 with court order)
- [ ] Legal counsel consulted if civil liability, professional duty, or non-POCA issues
- [ ] Records retained per MLR 2017 reg. 40 (5 years from transaction or relationship end)
- [ ] **No tipping-off** to the subject (POCA s. 333 / TACT s. 21D, criminal offence, maximum 5 years imprisonment)
- [ ] No inadvertent tipping via closure letters, account statements, or communications
- [ ] Money Laundering Reporting Officer (MLRO) documented as having considered the disclosure
- [ ] Internal SAR register maintained
- [ ] Senior management notified per internal policy (if required by FCA/PRA rules)

## Critical Rules (UK)

- **Tipping-off is a criminal offence.** Under POCA s. 333, disclosing to the subject that a SAR has been made (or that a money laundering investigation is underway) is a criminal offence punishable by up to 5 years' imprisonment. The prohibition also extends to customer-facing communications that would prejudice an investigation
- **Objectivity only.** State facts, observations, and why they give rise to suspicion. Never state that criminal activity has occurred or that the subject is guilty
- **Over-include.** The NCA UKFIU encourages detailed narratives
- **Standalone.** The SAR must be comprehensible without access to underlying bank records
- **DAML process:** If the report seeks consent to proceed with a transaction that would otherwise be money laundering, clearly state the consent request. The NCA has 7 working days to object (notice period). If no refusal within 7 WD, consent is deemed given. The NCA can apply for a moratorium period (up to 31 calendar days initially; extendable to 186 days by court order)
- **Safe harbour.** POCA ss. 337 to 338 provide protection for authorised disclosures made in good faith
- **Continuing SARs** must reference prior NCA reference numbers and identify new suspicions or developments

## Scotland/UK Adaptation

**Statutory framework:**
- Proceeds of Crime Act 2002 (POCA) Part 7 (ss. 327 to 340) - money laundering offences, SAR regime, Terrorism Act 2000 (TACT) Part 3 (ss. 15 to 21D) - terrorist financing, SAR regime, The Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017 (MLR 2017) - regulated sector obligations, The Money Laundering and Terrorist Financing (Amendment) Regulations 2019 - beneficial ownership register, Economic Crime and Corporate Transparency Act 2023 - corporate transparency reforms, Sanctions and Anti-Money Laundering Act 2018 - UK sanctions framework, Policing and Crime Act 2017 - confiscation and asset recovery

**Key differences from US FinCEN SAR:**

| US (FinCEN SAR Form 111) | UK (NCA SAR Portal) |
|---|---|
| FinCEN, Bureau of the Treasury | NCA UKFIU (National Crime Agency, UK Financial Intelligence Unit) |
| Form 111 (structured form + narrative) | SAR Portal (online no specific form but structured data fields + free-text narrative) |
| Minimum thresholds: $5,000/$25,000 | NO minimum threshold, all suspicions must be reported |
| Filing deadline: 30 days (60 if no subject) | Report "as soon as is reasonably practicable" - no statutory deadline but regulated sectors expected to report promptly |
| Safe harbor: 31 U.S.C. § 5318(g)(3) | Protection: POCA s. 337 (authorised disclosures) / s. 338 (protected disclosures) |
| Tipping-off: criminal penalty | Tipping-off: POCA s. 333 - up to 5 years imprisonment |
| No equivalent to DAML | DAML (Defence Against Money Laundering) consent, unique UK feature |
| FinCEN BSA E-Filing system | NCA SAR Portal (secure online) |
| No MLRO requirement | MLRO mandatory for all regulated firms (MLR 2017 reg. 21) |
| FinCEN advisories | NCA SAR Guidance, JMLSG Guidance Notes |
| OFAC sanctions | OFSI (Office of Financial Sanctions Implementation) |
| CTRs filed separately from SARs | No UK equivalent of mandatory CTR; suspicion alone triggers SAR |
| 5-year retention | 5 years from transaction or relationship end (MLR 2017 reg. 40) |
| BSA E-Filing confirmation number | NCA SAR Portal reference number |

**Scottish-specific context:**
- Proceeds of Crime Act 2002 applies UK-wide, including Scotland. Scottish courts (Sheriff Court / High Court of Justiciary) handle POCA confiscation and cash seizure proceedings, COPFS (Crown Office and Procurator Fiscal Service) prosecutes money laundering in Scotland, Scottish limited partnerships, higher risk of misuse; additional due diligence recommended (Economic Crime Act 2023 provisions)
- The Law Society of Scotland issues AML practice rules for Scottish solicitors, Scottish solicitors are supervised by the Law Society of Scotland (not the SRA) for AML purposes, Land Register of Scotland, for property-based money laundering risks, Scottish SARs are processed by the NCA UKFIU (no separate Scottish SAR unit)

**Regulatory bodies:**
- NCA UKFIU, receives and analyses SARs, FCA, AML supervision for financial services firms, HMRC, AML supervision for money service businesses, trust/service companies, high-value dealers, Law Society of Scotland, AML supervision for Scottish solicitors (as a professional body supervisor)
- ICAS / ACCA, AML supervision for accountants, OFSI, sanctions implementation and enforcement, COPFS, criminal prosecution of ML in Scotland, Scottish courts, POCA confiscation, restraint orders, cash seizure

**Forms and resources (download to scots-forms/):**
- NCA SAR Portal guidance (user guide)
- JMLSG Guidance Notes, risk factors, red flags, CDD requirements, POCA 2002 - relevant sections, NCA SAR Guidance Chapter 2: Submitting a SAR, Law Society of Scotland, AML guidance, NCA UKFIU DAML consent guidance, OFSI sanctions guidance

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
