---
name: bad-actor-disqualification-review
language: en
description: Atticus UK/Scots legal skill for bad-actor-disqualification-review. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Regulatory Disqualification Review (UK/FSMA)

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

## Why This Skill Exists

A single disqualifying event involving a director, controller, or approved person can prevent reliance on financial promotion exemptions, block authorisation, trigger shareholder remediation, or expose the issuer to regulatory action. This is not a theoretical risk: the FCA operates a rigorous fit-and-proper regime under the Senior Managers and Certification Regime (SM&CR), the Company Directors Disqualification Act 1986 (CDDA) bars disqualified directors from acting without court leave, and the FCA maintains a public register of prohibited persons. The regime is broader than most practitioners realise (it catches controllers and beneficial owners, not just directors) and the lookback periods vary by category.

This skill executes a structured reasonable-care review that builds a defensible record: register of relevant persons, tailored questionnaires, independent verification, event classification, and remediation pathways.

**Limitation:** Unlike the US Rule 506(d) framework, the UK does not have a single codified 'bad actor disqualification' provision for private placements. This skill adapts the diligence concept to the UK's regulatory structure: the CDDA 1986, FCA fitness-and-propriety, FSMA s. 21 financial promotion restrictions, and UK Prospectus Regulation exemptions.

---

## Checkpoint A: Pre-Draft Intake (Mandatory)

Ask every time unless the user says "use defaults" or "just draft." Gather:

1. **Offering perimeter** - FSMA s. 85 (prospectus required) vs. exempt offer; UK PR (Ultimate Offer Notice); financial promotion communication
2. **Cap table** - full beneficial ownership chains, voting agreements, convertible instruments; sufficient to calculate significant control
3. **Organisational documents** - articles of association or operating agreement, board resolutions
4. **Director/controller list** - full legal names, roles, Persons with Significant Control (PSC register)
5. **Financial promotions** - any person approving or communicating financial promotions (FCA authorised person or exemption gatekeeper)
6. **Solicitation arrangements** - introducers, finders, or intermediaries; identity of specific individuals communicating the promotion
7. **FCA register history** - known enforcement actions, warning notices, FOS complaints
8. **Per-person identifiers** - full legal name, aliases, DOB, current/prior addresses, FCA or other regulatory registrations

**If the user doesn't respond**, apply and clearly label these defaults: all directors, PSCs, and person approving financial promotions included; err toward inclusion for borderline persons; all applicable disqualification periods applied from expected first communication.

If screening identifiers are unavailable for any relevant person, propose a risk-based path (remove from role, restructure, delay) before proceeding.

---

## Step 1: Build Register of Relevant Persons

Map each person/entity to their UK regulatory category. Update at every material transaction change.

| Category | UK Authority | Persons/Entities | Basis for Inclusion |
|---|---|---|---|
| Issuer + affiliated/predecessor issuers | FSMA 2000 / UK PR | | Trading history and regulatory record |
| Directors and shadow directors | CDDA 1986, ss. 1 to 2 | | Any person acting as director (including de facto/shadow) |
| Controller / PSC | PSC Register Regs 2016 / SM&CR | | 25%+ ownership or control; significant influence |
| Partners / managing members | FSMA 2000, s. 31 / relevant partnership regs | | General partners, managing members of LLPs |
| Senior management functions | FCA FIT / SUP 10 | | SMF holders under SM&CR |
| Persons approving financial promotions | FSMA s. 21 / FCA CONC 3 | | Approver of the financial promotion |
| Introducers / finders | FCA Perimeter Guidance | | Persons introducing investors in return for remuneration |
| Certified / high net-worth persons | FSMA (Promotion of Collective Investment Schemes) Order 2001, arts. 21 to 22 | | Any person certifying or confirming investor status |

**Control traps:** Aggregate related-party holdings under common control; account for voting agreements and convertible instruments. A trust at 15% through one entity + 10% through an affiliate instrument = 25% PSC threshold triggered.

---

## Step 2: Draft Questionnaires

Draft a signed questionnaire for each relevant person. Questions must mirror the disqualifying categories applicable under UK law. **[VERIFY all lookback periods against current FCA Handbook/legislation before finalizing.]**

| Category | Lookback | Key Notes |
|---|---|---|
| Criminal convictions (fraud, dishonesty, financial services offences) | Never expunged for disclosure purposes, always relevant | Convictions spent under Rehabilitation of Offenders Act 1974 may not need disclosure for some roles; FCA considers unspent convictions |
| Director disqualification orders/undertakings (CDDA 1986) | Duration of disqualification period; plus relevance period after | Court order or undertaking; Secretary of State registers on Companies House |
| FCA enforcement, prohibition orders | Ongoing until varied or revoked | s. 56 FSMA 2000 - prohibition from performing regulated functions |
| FCA enforcement, public censure / fine | [VERIFY] - typically 10 years relevance for fitness review | Includes warning notices and supervisory notices |
| Insolvency / bankruptcy, director in relation to failed company | [VERIFY] | Disqualification may be automatic or by court application |
| FOS adjudications or ombudsman findings | [VERIFY] | Relevant to fitness and propriety |
| Sanctions / OFSI designations | Ongoing, no expiry | Prohibits certain dealings and services |
| PRA enforcement | [VERIFY] | Similar to FCA, dual-regulated firms |
| Audit / accountancy regulatory findings | [VERIFY] | Relevant to director competence and integrity |

**Questionnaire requirements:**
- Define key terms in plain English tied to FSMA / FCA Handbook / CDDA provisions, Require supporting documents for every "yes" response, Signature block: (i) certification of completeness, (ii) agreement to update through transaction completion, (iii) reliance acknowledgment, Require refresh if transaction is delayed or staged, Data protection: ensure GDPR compliance in collecting and retaining personal data

---

## Step 3: Conduct Independent Verification

Search all relevant persons independently. Document date, scope, and results for every search.

| Database | Scope |
|---|---|
| FCA Register (Financial Services Register) | All current and past FCA regulated persons; prohibition orders |
| Companies House, Register of Disqualified Directors | All directors and shadow directors |
| Companies House, Insolvency Service records | All directors and PSCs |
| Companies House, PSC register | Verification of beneficial ownership |
| The Gazette (London, Edinburgh, Belfast) | Bankruptcies, disqualifications, insolvency notices |
| Individual Insolvency Register (Scotland) | Scottish bankruptcies and trust deeds |
| Charity Commission register (if applicable) | Disqualification of charity trustees |
| OFSI (Office of Financial Sanctions Implementation) | Sanctions screening |
| Disclosure Scotland, Basic Disclosure (or DBS) | Criminal record checks where relevant |
| FOS decisions register | Ombudsman findings |
| FRN Verification (FCA) | Approved person status check |

Calibrate depth to risk: deeper investigation for directors, persons approving financial promotions, persons with previous regulatory friction or complex corporate histories. Refresh all searches shortly before transaction completion if due diligence extends beyond initial period. Flag UK GDPR applicability if consumer reports are obtained.

---

## Step 4: Classify Disqualifying Events

For each flagged item, produce a memo section covering:

1. **What happened** - nature, issuing authority, date of order/conviction
2. **Relevance period** - date of event compared to expected first communication; is it still relevant?
3. **Category match** - quote the order/judgment text and map to a specific UK regulatory disqualification provision
4. **CDDA analysis** - if director disqualification, identify whether it is a s. 1A undertaking, s. 6 compulsory order, s. 11/s. 12A summary/undischarged bankruptcy
5. **FCA prohibition analysis** - confirm whether the person is prohibited under s. 56 FSMA and whether variation is possible
6. **Spent conviction analysis** - assess against Rehabilitation of Offenders Act 1974 (and Rehabilitation of Offenders (Exceptions) Orders for regulated roles)
7. **Conclusion** - disqualifying / potentially disqualifying / requires FCA guidance / requires legal opinion, with rationale

---

## Step 5: Determine Remediation and Disclosure Pathways

| Scenario | Path |
|---|---|
| CDDA disqualification, undertaking accepted | No act as director without court leave (CDDA s. 17); restructure to remove director role before transaction |
| FCA prohibition order | Person cannot perform regulated functions; remove from role or seek FCA variation (rare and slow) |
| Spent conviction, non-regulated role | No disqualification; may not need disclosure; document the assessment |
| Spent conviction, SMF role | Unlikely to be fit and proper; seek FCA pre-application assessment |
| Event discovered, no prior knowledge | Document reasonable-care record; prepare investor disclosure if material |
| Remove person from relevant category | Resign director role; end approval of financial promotions; restructure PSC threshold, flag sham risk |
| Replace financial promotion approver | Engage FCA-authorised person with clean regulatory record |
| Change legal basis | Evaluate s. 86 FSMA exemption for qualified investors only; analyse FCA Perimeter Guidance for alternative routes |

**Investor disclosure**: Must be accurate, complete, and not misleading; review against s. 89 FSMA (prospectus liability) and the Financial Promotion Order terms before delivery.

**Post-transaction caution**: Remediation after communications may not cure past noncompliance. Evaluate FCA voluntary jurisdiction for remediation steps.

---

## Step 6: Produce Final Work Product

Deliver:
1. **Executive conclusion** - (a) no disqualifying events identified; (b) potential event requiring remediation; or (c) disqualifying event, do not proceed without FCA guidance or restructure
2. **Register of relevant persons** with basis for each inclusion/exclusion
3. **Diligence log** - dates, databases searched, attached logs or vendor reports
4. **Per-item analysis** for each flagged event
5. **Open items list** - pending questionnaires, outstanding searches, unresolved classifications; state whether transaction should be conditioned on completion
6. **Next steps** with responsible owners (legal vs. company)

### Mandatory Front Matter

At the top of every output, include:
1. **Assumptions Used** - offering type, relevant persons included/excluded, databases searched
2. **Open Items / Needed Inputs** - pending questionnaires, outstanding searches, unresolved items

Cross-check any transaction document representations about regulatory compliance against the diligence record. Do not permit a blanket "no disqualifying events" representation when diligence is incomplete or items are pending.

---

## Checkpoint B: Post-Draft Alignment (Mandatory)

After delivering the initial review, ask:

1. Are all relevant persons accounted for, including specific individuals approving financial promotions?
2. Are there any pending questionnaire responses or outstanding searches?
3. Should transaction completion be conditioned on completion of any open diligence items?
4. Does the transaction documentation need carve-outs for known issues in regulatory representations?

---

## Quality Audit

Before finalizing, verify:

- All regulatory categories analysed (CDDA 1986, FSMA 2000, FCA FIT, UK PR) - no category skipped, Register includes specific individuals and their regulatory roles, not just entities, PSC threshold calculated on statutory control basis (25%+) with related-entity aggregation, All relevant periods verified against FCA Handbook / current legislation, Questionnaires require document production and update obligations, Independent verification covers all databases listed and is current as of expected transaction date, Spent convictions assessed under Rehabilitation of Offenders Act 1974
- Every flagged event analysed against actual order/conviction text, Remediation recommendations are operationally implementable, Assumptions and open items listed prominently, No fabricated regulatory references or statutory citations

---

## Guidelines

- **Verify legislation first**: Search the FCA Handbook, FSMA 2000, and CDDA 1986 before finalising, do not rely on cached lookback periods
- **No invented citations**: Any FCA guidance, PERG statement, or enforcement case reference must include a verified URL or be marked `[VERIFY]`
- **PSC threshold ≠ shareholding**: Always calculate PSC on statutory control basis (s. 790C-F Companies Act 2006); aggregate related-party holdings
- **Participation is broad**: Any person approving or communicating a financial promotion is likely a relevant person; err toward inclusion
- **Questionnaires are evidence**: A regulator or aggrieved investor will use a poorly drafted questionnaire against the issuer; signed certifications with document production are non-negotiable
- **Diligence currency**: Searches must be current as of transaction date; refresh if closing delayed
- **Scotland-specific**: Scottish directors disqualification follows the same CDDA 1986 framework but is enforced through the Court of Session; Edinburgh Gazette for Scottish bankruptcies; the Accountant in Bankruptcy for Scottish insolvency matters
- **Privilege**: Analysis memo can be privileged; questionnaires and certifications may be discoverable, draft accordingly
- **Conflicts**: Monitor for conflicts where firm represents both issuer and a relevant person disclosing adverse regulatory history (Law Society of Scotland Practice Rules 2011, Ch. 6); separate representation may be required
- **Anti-hallucination**: Do not fabricate regulatory provisions, FCA Handbook references, or enforcement cases. Verify against current FSMA/FCA/CDDA texts before finalising
- **Solicitor review required**: All output requires review by a qualified solicitor or advocate before use in any offering, sharing with investors, or reliance for filings (Law Society of Scotland Practice Rules)

---

## Scotland/UK Adaptation

This skill has been adapted from US Rule 506(d) bad-actor materials for the UK regulatory regime.

**Legislation replacement:**
- SEC Rule 506(d) (17 C.F.R. § 230.506(d)) → **No direct UK equivalent.** The closest framework is: the CDDA 1986 (director disqualification), FCA FIT (fit and proper test), FSMA s. 56 (prohibition orders), and the UK Prospectus Regulation disqualification provisions, Regulation D / Rule 506 → **FSMA 2000, s. 85 (prospectus requirement) and exemptions under the UK PR and FSMA (Promotion of Collective Investment Schemes) Order 2001**
- SEC → **FCA (Financial Conduct Authority)**
- FINRA → **FCA, no SRO equivalent; all regulation is statutory**
- SEC EDGAR → **FCA Register / Companies House / The Gazette**
- NASAA state securities regulators → **FCA, PRA, Insolvency Service (Companies House)**
- Blue Sky laws → **No equivalent; UK regulation is centralised (no state-level securities regulation)**

**Terminology conversions:**
| US | UK / Scotland |
|----|--------------|
| Rule 506 exempt offering | FSMA-exempt financial promotion / UK PR-exempt offer |
| Covered person | Relevant person (director, PSC, SMF holder, financial promotion approver) |
| Bad actor disqualification | Director disqualification (CDDA) / FCA prohibition / fit-and-proper failure |
| Issuer | Issuer (same term under UK PR) |
| Broker-dealer | FCA-authorised person / AR (appointed representative) |
| Placement agent | Financial promotion approver / introducer |
| SEC waiver | FCA variation or cancellation / court leave (CDDA s. 17) |
| Reasonable care defence | Due diligence defence (FSMA s. 90 / Schedule 10 - para 1) |

**Key UK/Scottish structural differences:**

1. **No codified list of disqualifying categories** for private placements, the UK does not have a Rule 506(d) equivalent; this skill adapts the diligence concept to the UK's regulatory framework

2. **Director disqualification is centralised** - the CDDA 1986 is enforced by the Secretary of State for Business and Trade (through the Insolvency Service); the Register of Disqualified Directors is maintained at Companies House

3. **FCA fit and proper test** - the FCA's FIT framework applies to approved persons (SM&CR) and controllers; it is a holistic assessment, not a checklist of events

4. **Companies House is the primary public register** - unlike the multi-database US system, UK public company data is largely centralised

5. **Rehabilitation of Offenders Act 1974** - spent convictions need not be disclosed in most non-regulated contexts; exceptions apply for FCA-regulated roles

6. **Scotland-specific:** Scottish director disqualification cases are brought in the Court of Session; the Accountant in Bankruptcy (AiB) handles Scottish personal insolvency (vs. Insolvency Service for England & Wales)

7. **No NSMIA preemption** - UK doesn't have a US-style federal/state preemption issue; regulation is solely at UK level (with minor Scottish-specific administrative differences)

8. **UK GDPR applies** - personal data collected in questionnaires/diligence must be handled per UK GDPR

9. **FCA Enforcement** - the FCA can impose prohibition orders (s. 56), financial penalties (s. 206), and public censures (s. 205); all are public and maintained on the FCA Register

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
