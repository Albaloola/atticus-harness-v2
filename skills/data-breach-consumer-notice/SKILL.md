---
name: data-breach-consumer-notice
language: en
description: Drafts UK GDPR personal data breach notification letters satisfying UK GDPR Articles 33 to 34, the Data Protection Act 2018, and sector-specific regimes (FCA, Ofcom, NIS Regulations, PCI DSS). Produces compliance scoping tables, data-element disclosures, remediation summaries, and consumer protection guidance tailored to incident facts and recipient cohorts. Use for UK breach notification letters, ICO data breach notification, security incident notice, PII exposure notice, or sector-specific breach compliance. [Atticus UK/Scots refined]
tags:
- drafting, letter, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Personal Data Breach Notification Letter (UK GDPR / Scotland/UK Adaptation)

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

Produces a legally compliant personal data breach notification letter tailored to incident facts, affected data types, and UK GDPR requirements.

## Prerequisites

1. **Incident summary** - what happened, discovery date, current status, affected timeframe
2. **Affected population** - UK nations, cohort segmentation if data elements differ
3. **Data elements exposed** - specific categories per individual or cohort
4. **Legal regimes** - UK GDPR / DPA 2018 plus sector overlays (FCA, Ofcom, NIS, PCI)
5. **Remediation actions** - containment, forensic investigation, security enhancements (completed or underway)
6. **Consumer protection services** - vendor, duration, enrolment steps, cost allocation
7. **Contact channels** - toll-free number, hours, email, FAQ URL, language support
8. **Delivery method** - email, mail, or public communication; ICO notification obligations

## Quick Start

1. Build the compliance scoping table (jurisdictions, deadlines, delivery methods)
2. Complete the data elements disclosure and remediation tables
3. Draft the letter using the required section order below
4. Verify against the compliance checklist
5. Flag for counsel (solicitor/advocate) review before issuance

## Workflow

### Step 1 - Compliance Scoping

Map each affected jurisdiction to its requirements:

| Jurisdiction | Regime | Notice Deadline | Required Content | Delivery Method | Regulator Notice |
|---|---|---|---|---|---|
| UK (England/Wales/Scotland/NI) | UK GDPR Art. 33 to 34 | 72 hours to ICO | Nature, categories, consequences, measures | Email/Mail/Public | ICO within 72 hours |

The UK has a single data protection regime (UK GDPR / DPA 2018) - no state-by-state variation. Sector overlays (FCA, Ofcom, NIS) may add additional notification requirements.

### Step 2 - Data Elements Disclosure

| Data Category | Affected? | Scope |
|---|---|---|
| Name and contact info | Yes/No | {Detail} |
| National Insurance number or government ID | Yes/No | {Detail} |
| Financial account or card data | Yes/No | {Detail} |
| Medical or health information | Yes/No | {Detail} |
| Login credentials | Yes/No | {Detail} |
| Special category data (race, religion, health, etc.) | Yes/No | {Detail} |

If different cohorts had different exposure, flag the need for individualised letter variants.

### Step 3 - Remediation Summary

| Action | Status | Details |
|---|---|---|
| Containment | Done/In progress | {Summary} |
| Forensic investigation | Done/In progress | {Vendor, scope} |
| Law enforcement notice (Police Scotland / NCA) | Yes/No | {Agency, date} |
| Security enhancements | Done/In progress | {Controls} |
| ICO notification | Yes/No | {Date, reference} |

### Step 4 - Draft Letter

Use the following sections in order:

1. **Header** - letterhead, date, reference ID
2. **Salutation** - personalised name if available; otherwise "Dear [Customer/Patient/Member]"
3. **Purpose & legal authority** - cite UK GDPR Art. 33/34 and Data Protection Act 2018
4. **Incident description** - plain-language summary, discovery date, current status; no speculation
5. **Data elements affected** - specific to this recipient/cohort
6. **Organisational response** - containment, investigation, remediation, security improvements
7. **Services offered** - credit monitoring/ID protection details, enrolment steps, deadline, cost (if offered)
8. **Consumer protection steps** - prioritised actions tailored to data types compromised:
   - CIFAS protective registration if identity fraud risk
   - Monitor bank accounts and credit reports (Experian, Equifax, TransUnion, UK bureaux)
   - Report Action Fraud / Police Scotland if criminal activity suspected
   - Change passwords and enable multi-factor authentication
   - Phishing/social engineering warning
   - Report to ICO as regulator if dissatisfied with response
   - National Insurance number helpline (HMRC) if NI number exposed
9. **Contact information** - toll-free number, hours/timezone, email, FAQ URL, language support
10. **Closing** - express concern, commitment to data protection; signed by senior executive with name and title

**Formatting**: official letterhead, 12-point readable font, 1 to 2 pages, accessible format if electronic.

### Step 5 - Delivery & Recordkeeping

- [ ] Delivery method is appropriate per UK GDPR (direct communication or public notice)
- [ ] ICO notified within 72 hours
- [ ] Send dates, methods, and population counts logged
- [ ] Mailing lists and letter versions preserved
- [ ] Regulator (ICO) notification timing aligned with consumer notice

## Guidelines

- Use only confirmed facts; state clearly when investigation is ongoing, Never include full sensitive data in the letter (full NI number, full account numbers, full passport numbers)
- Avoid admissions of liability; use neutral accountability language ("we take data protection seriously")
- Include sector-specific statements where FCA, Ofcom, or NIS regimes apply, If law enforcement requests delay (Police Scotland / NCA), document the request and the basis for delay [VERIFY]
- Assume the letter will be evidence in subsequent proceedings, every sentence must be legally defensible, Counsel review required before issuance

## Troubleshooting

| Issue | Resolution |
|---|---|
| Uncertain whether high risk exists | Conduct a documented Data Protection Impact Assessment (DPIA) addendum; ICO can advise |
| Unknown data elements for some recipients | Draft a general-population variant covering all possible elements; refine as forensics complete |
| Law enforcement delay request | Document the request in writing, defer notice with ICO understanding, resume upon clearance |
| Sector regime overlap (e.g., FCA + UK GDPR) | Satisfy both; UK GDPR 72hr deadline to ICO does not override FCA "immediate notification" |
| Substitute public communication needed | Used where disproportionate effort (Art. 34(4)); public facing notice + press release |

---

## Scotland/UK Adaptation

This skill has been adapted from the US Consumer Data Breach Notification Letter. Key changes:

- **Statutory basis**: US multi-state breach laws → UK GDPR Art. 33 to 34 + DPA 2018
- **Regulator**: State AGs + HHS OCR → ICO (single UK regulator)
- **Deadline**: State 30 to 90 days → UK GDPR 72 hours to ICO
- **Notification trigger**: Defined data elements (SSN, account, etc.) → risk to rights and freedoms
- **Consumer protection**: CIFAS protective registration (UK) replaces fraud alert (US); UK credit bureaux (Equifax, Experian, TransUnion UK)
- **Identity theft**: Action Fraud (England/Wales) / Police Scotland, replaces FTC IdentityTheft.gov
- **Credit freeze**: No UK equivalent; CIFAS protective registration instead
- **HMRC**: NI number helpline if NI number exposed (replaces IRS guidance)
- **SSN**: National Insurance number (UK equivalent of SSN for breach purposes)
- **Scotland-specific**: ICO covers Scotland; Police Scotland for law enforcement; Sheriff Court / Court of Session for remedies; 6-year prescriptive period for delict claims
- **No state-by-state variation**: single UK regime simplifies compliance scoping
- **No substitute notice thresholds** (US 500K+): UK uses disproportionate effort test (Art. 34(4))
- **PECR**: Telecoms/ISP breaches require notification to ICO within 24 hours

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
