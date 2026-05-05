---
name: lien-resolution-summary
language: en
description: Generates a structured internal lien resolution summary for personal injury settlement cases in Scotland/UK. Triggers when resolving liens post-settlement, preparing settlement distribution statements, or auditing lien payoffs across health insurance subrogation, NHS/hospital liens, workers' compensation, and private health schemes. [Atticus UK/Scots refined]
tags:
- SCOTS, litigation, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Lien Resolution Summary

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

Internal tracking memorandum documenting identification, negotiation, resolution, and satisfaction of all liens (rights of retention/relief) against personal injury settlement proceeds. Mark output as **privileged/confidential solicitor work product** - do not distribute to lienholders.

## Prerequisites

Gather before starting:

1. **Settlement agreement** - gross amount, distribution terms, holdback provisions
2. **Lien demand letters/notices** - from all asserting parties
3. **Medical billing records** - itemized statements, from NHS and/or private providers
4. **Negotiation correspondence** - reduction requests, responses, final agreements
5. **Satisfaction documents** - discharges, confirmation letters (if available)

## Workflow

### Step 1: Executive Overview

Produce a header table:

| Field | Content |
|-------|---------|
| Case caption | Parties, court/court reference, case number |
| Settlement date | Date funded |
| Total settlement | Gross amount |
| Aggregate liens asserted | Sum of initial claims |
| Aggregate liens resolved | Sum of final payments |
| Total savings | Dollar amount + percentage |
| Net to client | After liens, fees, costs |
| Resolution status | All resolved / X pending |

### Step 2: Classify Lienholders

Categorise each lien:

| Category | Legal Basis |
|----------|-------------|
| Private health insurance | Contractual subrogation, policy terms |
| NHS / hospital charges | NHS (Scotland) Act 1978; hospital lien/retention rights under common law |
| Workers' compensation | Social Security (Recovery of Benefits) Act 1997; Employers' Liability (Compulsory Insurance) Act 1969 |
| Private medical/income protection | Policy terms, law of contract |
| CRU (Compensation Recovery Unit) | Social Security (Recovery of Benefits) Act 1997; DWP deductions |
| Other (MoD, Armed Forces, disability) | Varies by programme |

For each lienholder record: legal name, claim/reference number, contact, legal basis (statutory cite or policy provision), and priority position.

### Step 3: Lien Detail Table

For **each** lien, produce a row covering:

- **Lienholder** - name + category
- **Initial amount claimed** and date of notice
- **Calculation method** - full benefits paid / % of settlement / other
- **Disputed items** - unrelated treatment, duplicates, excessive charges
- **Reduction arguments** - made-whole (where applicable), comparative fault, fee sharing, statutory limits
- **Legal authority cited** - statute, case law, policy language
- **Final agreed amount** and reduction achieved (£ + %)
- **Payment terms** - due date, method, payee
- **Conditions** - discharge required, withdrawal of diligence
- **Satisfaction status** - obtained/pending with date; identify supporting docs

### Step 4: Outstanding Issues

For unresolved liens or contingent claims, document:

- **Unresolved liens** - delay reason, negotiation status, anticipated timeline
- **Potential future claims** - CRU benefits not yet certified; non-responsive insurers
- **Holdback funds** - amount reserved, release conditions
- **Financial exposure** - worst-case liability per outstanding item

### Step 5: Financial Summary

Reconciliation table (must tie to settlement distribution statement):

| Line Item | Amount |
|-----------|--------|
| Gross settlement | £ |
| Less: Solicitor fees | (£ ) |
| Less: Outlays/costs | (£ ) |
| Less: Lien payments (itemise each) | (£ ) |
| **Net to pursuer** | **£** |
| Total liens initially claimed | £ |
| Total liens paid | £ |
| **Total negotiated savings** | **£ (XX.XX%)** |

### Step 6: Compliance Checklist

- [ ] CRU certificate obtained and certified benefits accounted for (Social Security (Recovery of Benefits) Act 1997)
- [ ] NHS recovery charges confirmed (NHS (Scotland) Act 1978 and Regulations)
- [ ] Private health insurer notification deadlines met
- [ ] All lien discharges executed and filed
- [ ] Pursuer provided final distribution breakdown
- [ ] Records retention schedule documented

## Pitfalls and Checks

- **CRU deductions**: mandatory deduction of certain DWP benefits from damages, use the CRU certificate process; cannot be negotiated away
- **NHS charges**: the DWP recovers NHS charges on behalf of hospital trusts; amounts are formula-based
- **Made-whole doctrine**: available in Scotland under common law for equitable subrogation; verify policy terms as some private policies contract out
- [SCOTS: The common fund doctrine (proportionate fee reduction) does not apply in Scotland as solicitors' fees are dealt with separately under judicial expenses rules]
- **Legal fees in Scotland**: "loser pays" principle; judicial expenses follow success. Fee-shifting is more limited than in US.
- **Precision**: all amounts stated exactly; percentages to two decimal places. Every figure must reference source documentation.
- **Metadata**: include preparer name, date, and version number on every draft.

## Scotland/UK Adaptation

### Key Differences from US Practice

| US Concept | Scottish/UK Equivalent |
|---|---|
| Medicare/Medicaid liens (42 U.S.C. § 1395y(b)) | NHS charges recovered under NHS (Scotland) Act 1978 / DWP CRU process |
| ERISA plans (29 U.S.C. § 1132) | Private health insurance, governed by contract law; no ERISA equivalent |
| Workers' comp state statutes | Employers' Liability / Social Security (Recovery of Benefits) Act 1997 |
| State hospital lien statutes | NHS hospital charges; private hospital contractual subrogation |
| Medicare Section 111 reporting | No direct equivalent; CRU certificate process applies |
| CMS conditional payment letter | DWP CRU certificate of recoverable benefits |
| Made-whole doctrine (state law) | Available under Scots common law but scope differs |
| Common fund doctrine (state law) | Not applicable in Scotland, fees dealt with separately |

### Scottish Statutes

- **NHS (Scotland) Act 1978** - hospital charge recovery
- **Social Security (Recovery of Benefits) Act 1997** - CRU benefit deductions
- **Damages Act 1996** - periodical payments etc.
- **Prescription and Limitation (Scotland) Act 1973** - time bar on personal injury claims (3 years)
- **Civil Litigation (Expenses and Group Proceedings) (Scotland) Act 2018** - expenses rules

### Regulatory Bodies

- **DWP Compensation Recovery Unit (CRU)** - recovers state benefits from compensation payments
- **NHS Scotland** - hospital treatment charge recovery
- **Financial Conduct Authority (FCA)** - regulates private medical insurers
- **Scottish Legal Aid Board** - may have a lien for funded legal assistance

### Practitioner Notes

1. All amounts in GBP (£). Convert as appropriate.
2. There is no Medicare/Medicaid equivalent in Scotland; NHS recovery is the primary state healthcare mechanism.
3. CRU deductions are mandatory and non-negotiable, obtain certificate before settlement.
4. Pursuers and defenders are used instead of plaintiffs and defendants.
5. Prescription period for personal injury delict claims: 3 years (s.17, Prescription and Limitation (Scotland) Act 1973).
6. No punitive damages in Scots law, damages are compensatory only.
7. Solicitor/client fee arrangements differ from US contingency structures; no percentage-based contingency fees.
8. Mark documents as "solicitor work product" rather than "attorney work product."

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
