---
name: estate-administration-summary
language: en
description: Generates a structured U.S. estate administration/probate status summary covering decedent identifiers, asset inventory, creditor claims, distributions, tax compliance, disputes, and next steps with source citations. Trigger on requests for estate administration summary, probate status report, executor update, estate progress report, inventory and appraisal summary, creditor claims status, or distribution schedule summary. [Atticus UK/Scots refined]
tags:
- summarization, summary, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Estate Administration Summary

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

Structured snapshot of probate/estate administration status: actions completed, outstanding issues, and remaining work.

## Quick Start

1. Collect governing instruments (will, codicils, trust, intestacy determination), probate case data, asset inventory with appraisals, creditor records, beneficiary roster, tax filings, and any litigation filings.
2. Walk through each output section in order.
3. Cite every factual statement (document name + date + page/paragraph). Mark missing or uncertain facts `UNKNOWN` and list them in Open Questions.

## Output Sections

### 1) Matter Header

Field | Value | Source
--- | --- | ---
Decedent (full name) | |
Date of death | |
Domicile at death | |
Jurisdiction / court | |
Case number | |
Personal representative / executor | |
Relationship to decedent | |
Appointment date | |
Governing instrument | will / trust / intestacy |
Bond required? | yes / no / unknown |
Status as of | YYYY-MM-DD |

### 2) Estate Snapshot

- Gross estate value (as of date):
- Known liabilities (as of date):
- Cash on hand / reserves:
- Distributions to date (total):
- Anticipated remaining duration:

### 3) Assets & Valuation

Asset | Category | Ownership/Title | Value (date) | Status | Beneficiary/Plan | Issues | Source
--- | --- | --- | --- | --- | --- | --- | ---
 | | | | retained/sold | | |

### 4) Creditor Claims

Statutory claims deadline: [date] - Source: [cite]

Creditor | Amount Claimed | Priority Class | Status | Resolution Date | Notes | Source
--- | --- | --- | --- | --- | --- | ---
 | | | approved/rejected/paid/pending | | |

### 5) Distributions

Recipient | Relationship | Asset/Cash | Value | Date | Authority | Source
--- | --- | --- | --- | --- | --- | ---
 | | | | | order/consent |

### 6) Tax Compliance

- [ ] Final individual return (Form 1040) - date:
- [ ] Fiduciary returns (Form 1041 / state) - periods:
- [ ] Estate tax return required? (Form 706 / state) - basis:
- [ ] Taxes paid / liabilities outstanding:
- [ ] Audits, notices, or disputes:

### 7) Disputes / Litigation

Issue | Parties | Procedural Status | Next Deadline | Impact on Administration | Source
--- | --- | --- | --- | --- | ---
 | | | | |

### 8) Administration Timeline

Date | Event | Source
--- | --- | ---
 | |

### 9) Beneficiary Communications & Accountings

- Beneficiaries notified (date/method):
- Missing, minor, or incapacitated beneficiaries:
- Accountings delivered or filed (type/date):
- Objections or concerns raised:

### 10) Remaining Tasks & Forecast

Task | Dependency | Target Date | Risk/Notes | Source
--- | --- | --- | --- | ---
 | | | |

### 11) Open Questions / Missing Docs

- [List each unknown, missing document, or unresolved issue]

## Pitfalls & Checks

- **No legal opinions.** Use neutral, factual language throughout.
- **"As of" qualifiers.** Every amount and date must state its reference date and cite the source.
- **Do not infer deadlines or priority rules.** If not documented, mark `UNKNOWN` and flag as state-specific.
- **Conflicting data.** Only reconcile when the source hierarchy is explicit; otherwise present both values and note the conflict.
- **Redact PII.** Mask SSNs, full account numbers, and other sensitive identifiers.
- **Unverified citations.** Tag with `[VERIFY]`.
- **Jurisdiction terminology.** Use probate terms consistent with the governing state's courts.

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
