---
name: eula
language: en
description: Drafts enforceable End-User Licence Agreements for software licensors across desktop, mobile, SaaS, and cloud models. Covers click-wrap formation, IP ownership, liability limitations, data privacy compliance (UK GDPR / Data Protection Act 2018), and UK export controls. Use when drafting software licence agreements, app store terms, SaaS subscription agreements, or trial/freemium licence terms. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# End-User Licence Agreement (EULA)

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

Drafts an enforceable EULA protecting licensor IP, limiting liability, and satisfying consumer protection standards under UK and Scots law.

## Intake Checklist

Gather before drafting:

1. **Software** - product name, version, deployment model (desktop / mobile / SaaS / cloud / embedded)
2. **Licence model** - perpetual, subscription, usage-based, freemium, or trial
3. **User population** - B2C, B2B, or mixed; users under 18 (UK data processing consent trigger)
4. **Geography** - UK-only, EU, or global (drives UK GDPR, EU GDPR applicability)
5. **Data collected** - personal data categories; special category data (UK GDPR Art. 9), financial data (FCA-regulated), children's data (IKE code of practice)
6. **Third-party components** - open-source (copyleft vs. permissive) or proprietary
7. **App store** - Apple App Store, Google Play, or direct distribution
8. **Risk posture** - arbitration? IP indemnification? Benchmark restrictions?

## Drafting Workflow

### 1. Header & Acceptance

- Title: "END-USER LICENCE AGREEMENT" prominently displayed, Specify triggering act: install / account creation / first use, Click-wrap required: scrollable full text, accept button active only after scroll opportunity (UK courts require reasonable steps to bring terms to attention per *Parker v. South Eastern Railway* (1877); avoid browse-wrap per *McCutcheon v. David MacBrayne Ltd* 1964 SC (HL) 28)
- Mobile: present in app-store listing + first launch; must not contradict platform terms, Version date + 30-day advance notice for material amendments; affirmative re-acceptance for paid-tier changes reducing rights

### 2. Definitions

| Term | Scope |
|---|---|
| Software | Product name, version, included modules |
| Updates | Bug fixes / security patches (included) |
| Upgrades | Major versions (may require separate fee) |
| Authorised Users | Named / concurrent / site licence scope |
| Documentation | Manuals, API docs, specs |
| Confidential Information | Source code, algorithms, benchmarks, designated materials |

### 3. Licence Grant

- Non-exclusive, non-transferable, revocable for breach, [perpetual / subscription-term]
- Specify device count or concurrent user cap, Permitted use: internal business / personal; per Documentation, One archival backup copy; proprietary notices intact, SaaS: frame as access right, not installation right, Trial: evaluation-only, non-production, time-limited with end date; auto-terminates at expiry

### 4. Restrictions

| Category | Prohibited Conduct |
|---|---|
| Reverse engineering | Decompile, disassemble, derive source, except as permitted under UK law (Copyright, Designs and Patents Act 1988 s.50B, implementing EU Computer Programs Directive as retained) |
| Derivative works | Modify, translate, adapt, or create based on Software |
| Distribution | Sublicense, rent, lease, lend, transfer, service-bureau use |
| Circumvention | Bypass licence enforcement, DRM, or security features (Copyright, Designs and Patents Act 1988 s.296 - anti-circumvention) |
| Notices | Remove/alter copyright, trademark, or proprietary legends |
| Competitive use | Benchmark for competitive analysis; publish results without consent |
| Safety-critical | Aircraft nav, nuclear, life support, weapons |
| Export | Export/re-export violating UK Strategic Export Controls (Export Control Act 2002 and retained EU Dual-Use Regulation) or UK financial sanctions (HM Treasury / OFSI) |

### 5. IP Ownership

- Licensor retains all rights, copyright, patents, trademarks, trade secrets
- **Licence, not a sale**; first-sale doctrine inapplicable, User data: user owns; licensor gets limited processing licence for service delivery, Aggregated/anonymised data: licensor owns derived insights, Feedback: user assigns all rights; moral rights waived to extent permitted under Copyright, Designs and Patents Act 1988
- Third-party components: designated as intended third-party beneficiaries; confirm no GPL copyleft contamination, Trademarks: no right to use licensor marks except to identify Software

### 6. Payment & Renewals

- State fees in specific currency (not by reference to pricing page)
- Auto-renewal: clear disclosure before purchase per Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 (SI 2013/3134); easy cancellation; advance renewal reminder, Non-payment: notice + 5 to 10 day cure → suspension; 10 to 15 day cure → termination, Refunds: state terms explicitly; app-store refunds per platform policy; UK consumer right of cancellation within 14 days (digital content exception if download has started with consent)
- Taxes: exclusive of VAT; user bears VAT; UK VAT reverse charge for B2B; EU VAT where applicable

### 7. Term & Termination

- **For cause**: immediate upon material breach (IP violation, non-payment, export violation, insolvency)
- **Without cause**: free licences - 30 days notice; paid perpetual, generally not permitted
- **User termination**: cancel per stated procedure; cease use; destroy all copies
- **Post-termination**: uninstall all devices; destroy copies (including backup/cached); written certification on request; SaaS - 30-day data export window then deletion
- **Survival**: IP ownership, restrictions, confidentiality (3 to 5 years / indefinite for trade secrets), disclaimers, liability caps, indemnification, dispute resolution

### 8. Warranty Disclaimer

> **MUST BE CONSPICUOUS (bold or capitals, the Scottish courts apply the reasonableness test under UCTA 1977)**

- Limited warranty (if offered): Software substantially conforms to Documentation for [30/60/90] days; excludes modified software, misuse, unauthorised combinations, Exclusive remedy: patch → replacement → pro-rata refund + termination
- **Disclaimer for B2B**: SOFTWARE PROVIDED "AS IS" AND "AS AVAILABLE." LICENSOR DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR PARTICULAR PURPOSE, NON-INFRINGEMENT. NO WARRANTY OF UNINTERRUPTED OR ERROR-FREE OPERATION.
- **Consumer limitation**: For B2C contracts, the Consumer Rights Act 2015 implies statutory rights re: satisfactory quality, fitness for purpose, and description. These cannot be excluded. EULA must not attempt to override them.
- UCTA 1977 (Schedule 2 reasonableness test) applies to B2B exclusions. All exclusions must be fair and reasonable.
- Magnuson-Moss not applicable in the UK

### 9. Limitation of Liability

> **MUST BE CONSPICUOUS, UCTA 1977 reasonableness test applies in Scotland**

- **Consequential damages exclusion**: NO LIABILITY FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES INCLUDING LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION, REGARDLESS OF CAUSE OR FORESEEABILITY.
- **Note**: Scots law does not recognise punitive damages. Only compensatory damages are available. Aggravated/exemplary damages are very limited.
- **Aggregate cap**: fees paid in prior 12 months; free software - £[50 to 100] or minimum permitted by law, Cap is collective across all claims; does not reset per claim
- **Carve-outs** (narrow): death/personal injury (cannot be limited by law under UCTA 1977); fraud; gross negligence; mandatory statutory rights (Consumer Rights Act 2015)
- **UCTA 1977 s.16 (Scotland)**: Terms excluding liability for death/personal injury from negligence are void. Other exclusions subject to reasonableness test.
- Claims must be brought within 5 years of accrual (Prescription and Limitation (Scotland) Act 1973 - prescriptive period for delict)
- Consumer savings clause: limitations that fail the fairness test under CRA 2015 Part 2 are unenforceable

### 10. Indemnification

**Licensor → User (IP, if offered):**
- Defend/indemnify for claims that unmodified Software infringes registered patents, copyrights, or trademarks, Conditions: prompt notice (≤10 days); licensor controls defence; user cooperates, Exclusions: user modifications; unauthorised combinations; non-current version; out-of-scope use, Remedies: procure licence → modify → replace → pro-rata refund + terminate (exclusive remedy)

**User → Licensor:**
- Defend/indemnify for: breach of agreement; law/third-party rights violations; user content/data; user negligence/misconduct, Not subject to aggregate liability cap (but must be reasonable per UCTA 1977)

### 11. Governing Law & Disputes

- The law of Scotland; exclude conflict-of-law principles, Exclusive jurisdiction: Scottish courts, Sheriff Court (claims up to £100,000) or Court of Session (complex/high-value claims)
- **Arbitration** (if included): Scottish Arbitration Centre Rules; [city]; 1 arbitrator (<£100K) / 3 (≥£100K); licensor pays costs for consumer claims, Carve-out: equitable/injunctive relief for IP or confidentiality violations (interdict)
- Consumer savings clause: unenforceable forum selection defaults to user's habitual residence (Rome I Regulation (EC) 593/2008 as retained)

### 12. Data Protection

**Include provisions for each applicable regime:**

| Regime | Trigger | Key Obligations |
|---|---|---|
| UK GDPR | UK users | Lawful basis, data subject rights, 72-hr breach notification to ICO, SARs, DPO if required |
| EU GDPR | EU/EEA users | Lawful basis, SCCs, representative in EU |
| Data Protection Act 2018 | UK data processing | Supplementary UK provisions, exemptions, ICO powers |
| Children's code (Age Appropriate Design Code) | Under-18 users | Best interests of child, high privacy settings by default, no nudge techniques |
| FCA-regulated financial data | Financial services | FCA data handling requirements |

- Disclose: data collected, purpose, retention, third-party sharing, security measures, No absolute security guarantees; user responsible for credential security, If software not designed for sensitive data: explicit prohibition + liability disclaimer, For SaaS processing personal data on behalf of users: separate Data Processing Agreement required (Art. 28 UK GDPR)

### 13. Export Controls

- Software subject to UK Strategic Export Controls (Export Control Act 2002, retained EU Dual-Use Regulation 2021/821 as amended); defence/security applications may be controlled, User represents: not in a country subject to UK financial sanctions (HM Treasury / OFSI consolidated list, including but not limited to Russia, Belarus, Iran, North Korea, Syria, Crimea, Donetsk, Luhansk, verify current UK sanctions list); not on UK sanctions consolidated list, No export/re-export without required licences, Violation = material breach → immediate termination; user indemnifies

### 14. General Provisions

| Provision | Key Points |
|---|---|
| Entire Agreement | Supersedes all prior; no extra-contractual reliance |
| Amendment | Posted + 30-day notice; material paid-licence changes require re-acceptance |
| Severability | Reform to minimum extent; per-jurisdiction independence |
| Waiver | Written and signed; no implied waiver |
| Assignment | User cannot assign; licensor assigns freely (including M&A) |
| Force Majeure | Acts of God, war, pandemic, infrastructure failure; termination right if >60 to 90 days |
| No Partnership | Independent contractors; no agency/JV/franchise |
| Third-Party Beneficiaries | None except third-party component licensors (IP) |
| Notices | Email (confirmed) or recorded delivery; in-software posting for general notices |
| Counterparts | Electronic signatures valid (per Electronic Communications Act 2000) |

## Pitfalls & Checks

- **Conspicuousness**: warranty disclaimers and liability caps MUST be conspicuous, UK/Scottish courts apply UCTA 1977 reasonableness test, not mechanical all-caps rule, but all-caps or bold is still best practice
- **Click-wrap over browse-wrap**: require affirmative acceptance; no pre-checked boxes
- **UK/Scottish consumer contracts**: Consumer Rights Act 2015 Part 2 (unfair terms) and UCTA 1977 govern enforceability. Terms creating significant imbalance are void. Digital content must be of satisfactory quality, fit for purpose, and as described, these rights cannot be excluded
- **Consumer right to cancel**: 14-day cooling-off period for digital content, except where consumer expressly consents to download before cancellation period ends and acknowledges loss of right. Must be a positive opt-in, not pre-ticked
- **Open-source audit**: confirm no GPL/AGPL copyleft that would require disclosing proprietary code
- **App store overlay**: Apple/Google impose payment, refund, and content terms, EULA must complement, not contradict
- **Do not include**: specific hypothetical damages amounts; representations about unlicensed third-party products; absolute security guarantees
- **VAT**: Must state pricing exclusive/exclusive of VAT; UK VAT at applicable rate; EU reverse charge for B2B digital services

## Scotland / UK Adaptation

This section documents how the US-origin EULA skill has been adapted for Scotland/UK.

### Statutory Replacements
| US Statute / Regulation | UK / Scottish Equivalent |
|---|---|
| ProCD v. Zeidenberg / Specht v. Netscape | *Parker v. South Eastern Railway* (1877); *McCutcheon v. David MacBrayne Ltd* 1964 SC (HL) 28 |
| 17 U.S.C. § 1201 (DMCA anti-circumvention) | Copyright, Designs and Patents Act 1988 s.296 |
| Magnuson-Moss Warranty Act | Not applicable in UK; replaced by Consumer Rights Act 2015 (digital content rights) |
| COPPA (Children's Online Privacy Protection) | UK GDPR Art. 8 (child consent age 13 to 18); Age Appropriate Design Code (Children's Code) |
| CCPA / CPRA (California) | UK GDPR + Data Protection Act 2018 (UK equivalent comprehensive data protection) |
| HIPAA (health data) | UK GDPR special category data; common law confidentiality |
| GLBA (financial data) | FCA handbooks; UK GDPR; Privacy and Electronic Communications Regulations (PECR) |
| FERPA (student records) | No direct UK equivalent; data protection principles apply |
| Cal. Bus. & Prof. Code § 17600 (auto-renewal) | Consumer Contracts Regulations 2013 (SI 2013/3134) |
| EAR / ITAR | Export Control Act 2002; retained EU Dual-Use Regulation |
| OFAC sanctions | HM Treasury / OFSI sanctions regime |
| CISG | UK is not a signatory; Scots contract law applies |
| Rome I Regulation (habitual residence) | Retained EU law post-Brexit |
| AAA Commercial Arbitration Rules | Scottish Arbitration Centre / LCIA / SIAC rules |
| Federal courts | Sheriff Court / Court of Session (Scotland) |
| USD | GBP (£) |

### Key Scots Law Considerations
1. **No punitive damages** - Liability disclaimers should reference compensatory damages only
2. **UCTA 1977 (Scottish provisions)** - Sections 15 to 25 apply in Scotland. Death/personal injury exclusions void; other exclusions subject to reasonableness test
3. **Consumer Rights Act 2015** applies throughout the UK, including Scotland. Digital content must be of satisfactory quality, fit for purpose, and as described. These are non-excludable statutory rights
4. **Prescription periods** - 5-year prescriptive period for delict claims; 20-year long-stop (Prescription and Limitation (Scotland) Act 1973). 1-year limitation period in US skill is not appropriate for Scotland
5. **"License" vs "Licence"** - In UK/Scots usage, "licence" is the noun, "license" the verb. EULA title and body should use "licence agreement" and "licence grant"
6. **Arbitration** - Scottish Arbitration Centre provides institutional rules parallel to AAA. The LCIA (London Court of International Arbitration) is also commonly used for UK-seated arbitrations
7. **Interdict** - Scottish equivalent of injunction. Available for IP and confidentiality breach
8. **Data Protection** - UK GDPR is the retained version of EU GDPR under the European Union (Withdrawal) Act 2018, supplemented by the Data Protection Act 2018. The ICO (Information Commissioner's Office) is the UK supervisory authority
9. **SCCs** - UK International Data Transfer Agreement (IDTA) replaces EU SCCs for UK data transfers post-Brexit

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
