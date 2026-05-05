---
name: ccpa-policy
language: en
description: Drafts a CCPA/CPRA-compliant privacy policy covering all required statutory disclosures under Cal. Civil Code §§ 1798.100 to 1798.199. Also includes a full Scotland/UK adaptation converting the framework to UK GDPR / Data Protection Act 2018 for Scottish and UK organisations. Use when drafting a California privacy policy, or when adapting a privacy notice to UK GDPR / DPA 2018 requirements for Scottish public bodies, Scottish businesses, or UK-based organisations. [Atticus UK/Scots refined]
tags:
- SCOTS [CCPA, CPRA, privacy, GDPR, SCOTS, scotland, uk, data-protection]
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# CCPA/CPRA Privacy Policy, with Scotland/UK GDPR Adaptation

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

> **[SCOTS: Note]** This skill was originally written for US/California CCPA/CPRA compliance. The Scotland/UK adaptation section below (§ Scotland/UK Adaptation) converts the entire framework to UK GDPR / Data Protection Act 2018 for Scottish and UK organisations. Both versions are preserved, use the section that matches your jurisdiction.

Generates a California Consumer Privacy Act / California Privacy Rights Act compliant privacy policy with all required statutory disclosures, plus a parallel adaptation for UK GDPR / Data Protection Act 2018 for use in Scotland and the UK.

---

## Quick Start

### California (CCPA) Quick Start
Gather before drafting:

- **Applicability trigger** - ≥$25M revenue, ≥100K consumer records bought/sold/shared, or ≥50% revenue from selling/sharing PI
- **Data inventory** - categories collected (per § 1798.140), sources, retention periods
- **Purpose map** - business/commercial purpose per data category
- **Third-party sharing** - service providers, contractors, ad networks, affiliates; distinguish business-purpose disclosure from sale/sharing
- **SPI flag** - whether sensitive personal information (§ 1798.121) is collected and right-to-limit applies
- **Children's data** - actual knowledge of collection from consumers under 16
- **Request channels** - minimum two methods (toll-free number + web URL required)
- **Contact details** - legal name, mailing address, privacy contact, DPO/CPO if appointed

### UK GDPR / DPA 2018 Quick Start
Gather before drafting:

- **Lawful basis identification** - determine the appropriate lawful basis(es) under Article 6 UK GDPR for each processing purpose (consent, contract, legal obligation, vital interests, public task, legitimate interests)
- **Special category data** - identify if processing special category data under Article 9 (racial/ethnic origin, political opinions, religious beliefs, trade union membership, genetic/biometric data, health, sex life/sexual orientation); identify separate condition
- **Criminal offence data** - if processing criminal conviction/offence data (Article 10), ensure proper condition under DPA 2018 Schedule 1
- **Data inventory** - categories of personal data collected, sources, retention periods, purposes
- **Recipients / third-party sharing** - data processors, joint controllers, other recipients
- **International transfers** - whether data is transferred outside the UK, and safeguard mechanism used (adequacy regulations, ICO international data transfer agreement, SCCs, BCRs)
- **DPO appointment** - whether a Data Protection Officer is required (Article 37 UK GDPR / s.69 DPA 2018), and contact details
- **Children's data** - whether online services directed at children (Age Appropriate Design Code / Children's Code applies)
- **Automated decisions** - whether solely automated decision-making with legal/significant effects occurs (Article 22 UK GDPR)
- **Scottish public sector** - additional obligations under Scottish public law, FOISA interplay, Scottish-specific codes of practice
- **Contact details** - data controller name, ICO registration number (if applicable), DPO contact, address

---

## CCPA (Original US Content)

### 1. Introduction
Effective date, scope (California residents), applicable threshold, governing law (CCPA as amended by CPRA + CPPA regulations).

### 2. Personal Information Collected

| Statutory Category (§ 1798.140) | Examples | Sources |
|---|---|---|
| Identifiers | Name, email, IP, account ID | Direct, automated |
| Commercial information | Purchase history, preferences | Direct, transaction systems |
| Internet/network activity | Browsing, search, interactions | Automated (cookies, pixels) |
| Geolocation | Precise physical location | App/device |
| Professional/employment | Job title, employer | Direct |
| Inferences | Profiles, characteristics | Internal analytics |
| Sensitive PI | SSN, financial, health, biometric | Per § 1798.121 |

Populate from data inventory. Omit inapplicable rows.

### 3. Use Purposes
Map each purpose to its data categories:
- Transaction fulfillment and services, Customer service / account management, Payment processing, Fraud detection and security, Debugging and error repair, Research, analytics, improvement, First-party marketing, Cross-context behavioral advertising *(triggers sale/sharing opt-out)*
- Legal compliance

### 4. Sharing Disclosures

| Recipient Type | Categories Shared | Purpose |
|---|---|---|
| Service providers / contractors | [list] | Business purposes; contractually restricted |
| Ad networks | [list] | Behavioral advertising (= "sharing" under CPRA) |
| Analytics providers | [list] | Performance analytics |
| Affiliates | [list] | [specify] |
| Government / law enforcement | [list] | Legal process |

If selling/sharing for cross-context behavioral advertising: include conspicuous "Do Not Sell or Share My Personal Information" link (§ 1798.135). State whether business has actual knowledge of selling/sharing PI of consumers under 16.

### 5. Consumer Rights

| Right | Basis | Key Detail |
|---|---|---|
| Know | § 1798.110 | Categories + specific pieces; 12-month lookback |
| Delete | § 1798.105 | Subject to statutory exceptions |
| Correct | § 1798.106 | Inaccurate PI |
| Opt-Out of Sale/Sharing | § 1798.120 | Cross-context behavioral advertising |
| Limit SPI Use | § 1798.121 | Sensitive PI only |
| Data Portability | § 1798.110(d) | Machine-readable format |
| Non-Discrimination | § 1798.125 | No denial/differential pricing |

### 6. Request Procedures
- **Methods** (≥2 required): toll-free number, web form, email (optional)
- **Verification**: match consumer-provided info against records; no account creation required
- **Timelines**: acknowledge within 10 business days; respond within 45 calendar days (extendable +45 with notice)
- **Authorized agents**: signed written permission or POA; may verify directly with consumer
- **Frequency**: two free Right-to-Know requests per 12 months

### 7. Children's Privacy

| Age | Requirement |
|---|---|
| Under 13 | Parent/guardian opt-in (§ 1798.120(d)) |
| 13 to 15 | Consumer opt-in |

If no knowing collection from under-16 consumers, state explicitly with safeguards.

### 8. Policy Updates
Specify revision triggers, notice method for material changes, effective date, and version archiving commitment.

### 9. Contact Information
Legal name, mailing address, privacy email, toll-free number, DPO/CPO (if applicable), request portal URL.

### Pitfalls (CCPA)
- **Accuracy over aspiration** - policy must reflect actual practices; material discrepancies risk Cal. Bus. & Prof. Code § 17200 liability
- **Statutory terms of art** - use "service provider," "sell," "share" exactly as CCPA defines them; plain language everywhere else
- **CPRA alignment** - right to correct, right to limit SPI, and CPPA rulemaking must be current; verify latest CPPA regulations
- **Conspicuous posting** - homepage-accessible, accessibility-compliant
- **Cross-document coordination** - align with cookie policy, employee privacy notice, vendor DPAs
- **Annual review** - minimum annually and upon material practice or legal changes
- **Legal review required** - qualified California privacy counsel must review before publishing

---

## Scotland/UK Adaptation

This section adapts the CCPA framework above for use as a **UK GDPR / Data Protection Act 2018 Privacy Notice** for organisations operating in Scotland and the UK.

### Governing Framework

| Element | UK Equivalent |
|---|---|
| Primary legislation | UK GDPR (retained EU GDPR as amended by the Data Protection, Privacy and Electronic Communications (Amendments etc) (EU Exit) Regulations 2019) + Data Protection Act 2018 |
| Supervisory authority | Information Commissioner's Office (ICO), Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF |
| Scottish-specific | DPA 2018 applies UK-wide; Scottish public authorities subject to additional obligations under Scottish public law, FOISA (Scotland) 2002 interplay, and the Scottish Information Commissioner's codes of practice |
| Applicability | Applies to any organisation established in the UK, or outside the UK processing personal data of UK data subjects where processing relates to offering goods/services or monitoring behaviour in the UK (Article 3 UK GDPR) |
| No revenue thresholds | UK GDPR applies regardless of revenue; all data controllers and processors must comply. Micro-enterprises (under 250 employees) are exempt from some record-keeping requirements but not from core data protection obligations. |

### 1. Introduction (UK GDPR)
- Identify the data controller (organisation name, registered address)
- State the UK GDPR / DPA 2018 as the governing framework, Clarify territorial scope (data subjects in Scotland and the UK)
- State the ICO as the supervisory authority with right to complain, Include ICO registration number if applicable, For Scottish public authorities: reference DPA 2018 Part 2 Chapter 2 (general processing) and any relevant Scottish-specific legislation

### 2. Lawful Bases for Processing (UK GDPR)
Every processing purpose must be mapped to one or more lawful bases under Article 6 UK GDPR:

| Lawful Basis (Art. 6 UK GDPR) | When to Use | Example |
|---|---|---|
| (a) Consent | Freely given, specific, informed, unambiguous indication | Marketing emails, optional cookies |
| (b) Contract | Necessary for performance of a contract | Order fulfillment, account management |
| (c) Legal obligation | Required by UK or Scots law | Employer reporting to HMRC |
| (d) Vital interests | Necessary to protect someone's life | Emergency medical data |
| (e) Public task | Official authority or task in the public interest | Scottish public body statutory function |
| (f) Legitimate interests | Necessary for legitimate interests, balanced against data subject rights (must complete LIA) | Fraud prevention, direct marketing (with opt-out), business analytics |

**Special Category Data** (Article 9 UK GDPR): Requires a separate condition in addition to Article 6 basis. Common conditions: explicit consent (Art. 9(2)(a)), employment/social security law (Art. 9(2)(b)), vital interests (Art. 9(2)(c)), substantial public interest (Art. 9(2)(g) + DPA 2018 Schedule 1), health/social care (Art. 9(2)(h)), public health (Art. 9(2)(i)), archiving/research (Art. 9(2)(j)).

**Criminal Offence Data** (Article 10 UK GDPR): Requires a condition under DPA 2018 Schedule 1 Part 2 or 3. If processing criminal conviction data, state the specific Schedule 1 condition relied upon.

### 3. Personal Data Processed
Rather than CCPA-style categories, use UK GDPR transparency requirements (Articles 13 to 14):

| Data Category | Examples | Lawful Basis | Retention Period |
|---|---|---|---|
| Identity & contact | Name, email, postal address, phone number | Contract (Art. 6(1)(b)) | Duration of relationship + 6 years |
| Financial | Bank account, payment card, transaction history | Legal obligation (Art. 6(1)(c)) | 6 years per Limitation Act (Scotland) 1973 |
| Technical | IP address, browser, device ID, cookies | Consent / Legitimate interests | Per cookie consent preference |
| Special category | Health data, biometric data | Explicit consent (Art. 9(2)(a)) | As stated in consent |
| Criminal offence | Convictions, offences | DPA 2018 Sch 1 [specify condition] | As specified |
| Employment | Job title, employer, references | Contract / Legal obligation | Duration + 6 years |

Retention periods: state specific periods or criteria for determining them, as required by Article 5(1)(e) UK GDPR.

### 4. Purposes of Processing
Map each purpose to its lawful basis:
- Service delivery and account administration, Payment processing and financial compliance, Customer support and relationship management, Fraud prevention and information security, Direct marketing (with right to object at any time)
- Website analytics and improvement, Legal and regulatory compliance, Safeguarding and public protection (Scottish public sector)
- Statutory functions (Scottish public authorities, specify the statutory power)

### 5. Data Sharing and Recipients

| Recipient Type | Data Shared | Purpose | Basis |
|---|---|---|---|
| Data processors (contracted) | [list] | Specified services | Article 28 UK GDPR DPA |
| Professional advisers | [list] | Legal/compliance advice | Legitimate interests |
| Law enforcement / regulators | [list] | Legal obligation | Legal obligation |
| IT / cloud service providers | [list] | Infrastructure/hosting | Contractual necessity |
| Scottish Government / public bodies | [list] | Public task / legal obligation | Public task (Scottish context) |
| Payment processors | [list] | Transaction processing | Contractual necessity |

If international transfers occur: identify the third countries, adequate safeguards mechanism (adequacy regulations, ICO IDTA, SCCs, BCRs), and rights to obtain a copy of the safeguard.

### 6. Data Subject Rights (UK GDPR)

| Right | UK GDPR Article | Key Detail |
|---|---|---|
| Right to be informed | Arts. 13 to 14 | Privacy notice contents (this document) |
| Right of access | Art. 15 | Subject access request (SAR); respond within one month (extendable by two); no fee unless manifestly unfounded/excessive |
| Right to rectification | Art. 16 | Correct inaccurate or incomplete data; respond within one month |
| Right to erasure ("right to be forgotten") | Art. 17 | Not absolute, apply against Article 17(3) exemptions (legal obligation, public health, archiving, etc.) |
| Right to restrict processing | Art. 18 | While accuracy contested, processing unlawful, objection pending |
| Right to data portability | Art. 20 | Only for data processed by consent/contract and in automated systems; machine-readable format |
| Right to object | Art. 21 | To processing based on legitimate interests/public task (including profiling); to direct marketing (absolute); to processing for research |
| Rights re automated decision-making | Art. 22 | Right not to be subject to solely automated decisions with legal/significant effects; meaningful human review must be available |

**Key Difference from CCPA**: UK GDPR rights are not limited by revenue thresholds. Every data subject with UK GDPR protection can exercise these rights regardless of the organisation's size. Subject access requests must be responded to within one calendar month (not 45 days), extendable by two months for complex/voluminous requests.

### 7. Request Procedures (UK GDPR)
- **Methods**: SAR can be made verbally or in writing; no mandatory methods; web form, email, postal address all acceptable
- **Verification**: reasonable steps to verify identity before responding; cannot require excessive information
- **Timelines**: respond without undue delay and within one month; extend by up to two months for complex or numerous requests, with notice and explanation
- **Fees**: generally free; reasonable fee for administrative costs if manifestly unfounded/excessive or for further copies
- **Refusals**: provide reasons, inform of right to complain to ICO, and right to judicial remedy; respond without undue delay and within one month
- **Authorised representatives**: can act on data subject's behalf with proof of authority; identity can be verified with the data subject
- **ICO complaint**: data subjects have the right to lodge a complaint with the ICO (ico.org.uk) at any time

### 8. Children's Privacy (UK GDPR)
- **Age of digital consent**: 13 in the UK (Data Protection Act 2018 s.9)
- **Children's Code**: ICO Age Appropriate Design Code applies to online services likely to be accessed by children under 18
- **Best interests**: the best interests of the child must be a primary consideration
- **Parental consent**: if relying on consent for children under 13, make reasonable efforts to verify parental/guardian authority
- **Scottish context**: Scottish Children's Services / GIRFEC (Getting It Right For Every Child) framework considerations may apply for public sector bodies, If the service is not directed at children, state this explicitly with appropriate safeguards

### 9. International Transfers (UK GDPR)
- Identify whether personal data is transferred outside the UK, For transfers to non-adequate third countries, specify the safeguard mechanism:
  - UK adequacy regulations (e.g., EU, EEA countries, Republic of Korea, etc. - check current ICO list)
  - ICO International Data Transfer Agreement (IDTA)
  - Addendum to EU SCCs
  - Binding Corporate Rules (BCRs)
  - Other Article 46 safeguards, State the right to request a copy of the transfer safeguard arrangement, For Scottish public authorities: ensure any cloud/data arrangements comply with UK GDPR and Scottish public procurement obligations

### 10. Data Protection Officer (UK GDPR)
If a DPO is required (Article 37 UK GDPR):
- **Mandatory**: public authorities (including Scottish public bodies), large-scale systematic monitoring, large-scale special category/offence data
- **Scottish public sector**: all Scottish public authorities are likely to require a DPO under Article 37(1)(a) UK GDPR, DPO details: name, email, postal address, DPO independence: DPO must report to highest management level, be involved in all data protection matters, and must not be dismissed/penalised for performing functions

### 11. Scottish Public Sector Specific Provisions
For Scottish public authorities (Scottish Government, local authorities, NHS Scotland, Scottish Police, Scottish Parliament, etc.):

- **Legal basis**: likely to be "public task" (Art. 6(1)(e)) or "legal obligation" (Art. 6(1)(c)) for most processing
- **Additional obligations**: 
  - Data protection impact assessments (DPIAs) are mandatory where processing is likely to result in high risk
  - FOISA (Scotland) 2002 interplay, subject access requests and FOI requests may overlap; coordinate responses
  - Scottish Information Commissioner's codes of practice on records management
  - Scottish-specific data sharing protocols and frameworks
  - Scottish Government Data Protection Policy and public sector guidance
- **Scottish statutory functions**: identify the specific Act/Statutory Instrument conferring the processing power (e.g., Social Security (Scotland) Act 2018, Public Services Reform (Scotland) Act 2010)
- **Procurement**: cloud and ICT procurement must include UK GDPR / DPA 2018 compliance requirements; Scottish Government's Digital Scotland Service Standard applies

### 12. Policy Updates (UK GDPR)
- Review and update the privacy notice at least annually, Notify data subjects of material changes, Maintain version history, Updates triggered by: changes in processing purposes, new lawful bases, new recipients, new international transfers, organisational restructuring, changes in Scottish public law

### 13. Contact Information (UK GDPR)
- Data controller legal name and registered address, ICO registration number (if applicable, most data controllers must register with ICO and pay a data protection fee)
- Data Protection Officer name/team and contact details (if appointed)
- Privacy/compliance email and postal address, Telephone number (optional but recommended)
- **ICO**: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF, ico.org.uk - 0303 123 1113
- **Scottish Information Commissioner** (FOI matters): Kinburn Castle, Doubledykes Road, St Andrews, Fife KY16 9DS, foi.scot

### 14. Applicable Law and Jurisdiction (UK GDPR)
- The privacy notice and data processing activities are governed by UK GDPR and the Data Protection Act 2018
- Scottish organisations may additionally reference Scots law, For cross-border processing within the UK: the ICO has UK-wide jurisdiction, Data subjects may seek judicial remedy before the courts of England and Wales, Scotland, or Northern Ireland as applicable

### Pitfalls (UK GDPR)
- **Lawful basis must be correct** - selecting the wrong lawful basis invalidates the entire processing; cannot retrospectively change after collection
- **Consent is not a silver bullet** - many processing activities (contract, legal obligation, public task) are better suited to other bases; consent can be withdrawn and offers weaker organisational control
- **Legitimate interests requires balancing** - must complete and document a Legitimate Interests Assessment (LIA); notify data subjects of the legitimate interest
- **Special category data** - requires both an Article 6 basis and an Article 9 condition; cannot rely on implicit consent
- **Subject access requests** - must be responded to within one month (not 45 days); complex requests can extend but must notify within the first month
- **ICO complaints** - data subjects can escalate to ICO at any time; ICO has enforcement powers including fines, enforcement notices, and temporary/permanent bans
- **International transfers** - UK GDPR has separate transfer rules from EU GDPR; verify current UK adequacy regulations and use ICO IDTA/EU SCC Addendum
- **Transparency is key** - privacy notice must be concise, transparent, intelligible, easily accessible, written in clear and plain language (Article 12 UK GDPR)
- **Scottish public authorities** - FOISA 2002 may impose additional disclosure obligations; coordinate privacy notice with FOISA publication schemes
- **Children's Code** - the ICO's Age Appropriate Design Code has 15 standards; non-compliance can result in enforcement action
- **Layered notices recommended** - provide a brief summary layered notice with the option to read the full version
- **Scottish language considerations** - consider providing the privacy notice in Scottish Gaelic where appropriate for public-facing services
- **Legal review required** - qualified UK data protection solicitor should review before publication; Scottish organisations should ensure the solicitor has Scottish legal expertise

### Adapting from CCPA for UK Use

When converting a CCPA-based policy to UK GDPR, pay attention to these key structural differences:

| CCPA Concept | UK GDPR Equivalent | Key Change |
|---|---|---|
| $25M revenue threshold | No revenue threshold | All UK organisations irrespective of size |
| "Business" | "Data controller" / "Processor" | Separate obligations for controllers vs processors |
| Right to know (12-month lookback) | Right of access (SAR) | One-month response; no lookback limit |
| Right to delete | Right to erasure (Art. 17) | More limited exceptions; proportionality test |
| Right to correct | Right to rectification (Art. 16) | No CCPA equivalent of SAR timelines for rectification |
| Right to opt-out of sale/sharing | Right to object (Art. 21) | Broader, applies to legitimate interests/public task |
| Right to limit SPI use | No direct equivalent, special category restrictions | Tighter restrictions on special category data processing |
| Non-discrimination | No direct equivalent | UK GDPR does not prohibit price differentiation for exercising rights |
| CPPA Regulations | ICO guidance / codes of practice | ICO publishes statutory codes (including Children's Code) |
| Authorized agent | Authorized representative | Similar in concept |
| Toll-free phone + web form | Any reasonable method | Verbal SARs are valid; no formal channel requirement |

### Forms and Resources Downloaded

The following reference materials have been downloaded to `scots-forms/` for use when drafting a UK GDPR privacy notice:

| File | Source |
|---|---|
| `ico-privacy-notice-template.docx` | ICO, official privacy notice template (Word) |
| `privacy-policy-template-gdpr-pivotal.pdf` | Pivotal Marketing, GDPR-compliant privacy policy template |
| `scottish-info-commissioner-data-protection-policy.pdf` | Scottish Information Commissioner, Data Protection Policy and Handbook |
| `scottish-parliament-data-protection-policy.pdf` | Scottish Parliament, Data Protection Policy |
| `social-security-scotland-privacy-notice.html` | Social Security Scotland, Privacy Notice |
| `ico-create-your-own-privacy-notice.html` | ICO, Privacy notice generator tool page |

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
