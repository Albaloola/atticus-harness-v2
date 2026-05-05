---
name: esi-protocol
language: en
description: Atticus UK/Scots legal skill for esi-protocol. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Commission and Diligence, Document Production Protocol [SCOTS]

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

Draft a protocol for the specification, preservation, collection, and production of documents and ESI in Scottish civil proceedings, suitable for adoption by parties or court order.

> **Scotland/UK Adaptation:** This skill has been converted from US FRCP E-discovery (FRCP 26, 34, 37) to Scottish civil procedure. Scotland does not have a general discovery/disclosure obligation comparable to the US. Document production is achieved through specification of documents (OCR Rule 27) and commission and diligence procedure. There is no Scottish equivalent to FRCP Rule 26(f) conference or Form 35 scheduling order. The concept of e-discovery is less developed in Scotland but increasingly relevant.

## Key Differences from US System

| US (FRCP) | Scotland (OCR/CS Rules) |
|-----------|------------------------|
| FRCP 26(f) conference | No equivalent; parties may agree protocol |
| FRCP 26 initial disclosures | No automatic disclosure |
| Discovery requests | Specification of documents (specific enough to identify documents sought) |
| ESI protocol (stipulated) | Commission and diligence procedure |
| FRCP 34 production | Recovery of documents under specification |
| FRE 502(d) clawback | No statutory equivalent; use contractual agreement |
| Rule 37 sanctions for spoliation | Court's equitable power; no specific ESI duty |
| Sedona Principles | No direct Scottish equivalent (refer to UK Civil Procedure Rules analogies) |
| 2015 proportionality amendments | Courts Reform (Scotland) Act 2014 - proportionality introduced |

## Prerequisites

1. **Case information** - parties, court, court reference number, claims/defences
2. **Specification of documents** - any specification already lodged or proposed
3. **Data landscape** - IT infrastructure, data mapping, retention policies, custodians
4. **Prior correspondence** - correspondence on recovery/document production

## Protocol Sections

### 1. Definitions and Scope, Define: documents (including ESI), data sources, custodians, temporal scope, Acknowledge that Scottish civil procedure does not impose automatic disclosure but parties agree the following protocol

### 2. Preservation, Preservation obligations triggered from the raising/lodging of proceedings, Scope limited to documents and data reasonably believed to be relevant, Litigation hold notice to key custodians; reissue on material developments, Proportionality limits on preservation (temporal, custodian, source)

### 3. Specification and Identification, Specification of documents to be served (OCR 27.1 or Court of Session equivalent)
- Specification must describe documents sufficiently to identify them (not a "fishing" specification)
- Parties agree to cooperate in narrowing specification scope, Exchange of documents lists (optional, by agreement)

### 4. Collection and Processing, Routine collection (not forensic; proportionate to value and complexity)
- Source-specific: email, file servers, mobile devices, cloud storage, Collection filters: date ranges, file types, deduplication, Decommissioned employee data handling

### 5. Production Format, Native format for spreadsheets and databases, Image/PDF for documents; 300 DPI minimum, Bates numbering (or equivalent numbering) conventions, Metadata: date, author, subject, custodian, OCR for scanned documents

### 6. Privilege and Confidentiality, Legal professional privilege (confidential communications with solicitor for legal advice or litigation)
- Third-party confidentiality (court may impose confidentiality measures)
- **Clawback** - by agreement only (no Scottish statutory equivalent to FRE 502(d)); parties agree that inadvertent disclosure does not waive privilege, Confidentiality order for sensitive commercial or personal data
- **Nobile officium** - Court of Session's equitable power for exceptional protective orders

### 7. Dispute Resolution, Tiered escalation: solicitors → counsel → court, Protection under the Courts Reform (Scotland) Act 2014 - emphasis on proportionality, Expenses follow success, consider impact of contested motions

## Pitfalls

- Scotland has no automatic disclosure; the specification must be sufficiently specific
- "Fishing" specifications (seeking documents without adequate description) will be refused, No statutory spoliation sanction framework, argue through the court's inherent equitable powers, Legal professional privilege is narrower than US work product doctrine; no work product equivalent, Third-party documents must be recovered through commission and diligence + citation, Expenses, the losing party typically pays judicial expenses of commission procedure, Consider Lord President's Practice Note on e-documents if applicable, Mark uncertain rules with [VERIFY]

---

**Scotland/UK Adaptation notes:**
- FRCP 26, 34, 37 → OCR Rules 27 (specification), 28 (commission), 29 (diligence) / Court of Session RCS, FRE 502(d) clawback → No Scottish equivalent; contractually agreed protocol, Sedona Principles → No Scottish equivalent; refer to UK practice directions, EDRM → Applicable by analogy; not codified in Scotland, ESI-specific case law → Limited Scottish precedent; English authorities may be persuasive, Spoliation (US concept) → No statutory equivalent; court's equitable power

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
