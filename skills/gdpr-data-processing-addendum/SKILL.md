---
name: gdpr-data-processing-addendum
language: en
description: 'Drafts an Article 28-aligned GDPR Data Processing Addendum (DPA) as an attachable annex for SaaS, cloud, or outsourcing agreements. Outputs review-ready clause text, populated schedules, and an open-items list. Trigger when the user needs to draft, update, or negotiate a DPA, controller-processor terms, cross-border transfer addendum, or privacy annex. Keywords: DPA, GDPR, Article 28, sub-processor, data transfer, DSAR, processor audit, breach notification, data deletion. [Atticus UK/Scots refined]'
tags:
- agreement, drafting, regulatory, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# GDPR Data Processing Addendum (DPA)

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

Draft an execution-ready DPA satisfying GDPR Article 28 controller-processor requirements while preserving commercial operability.

## Prerequisites

Collect before drafting:

1. **Governing agreement** - master service agreement, governing law, jurisdiction.
2. **Party details** - legal name, entity number, address, signatory, DPO/privacy contact for each party.
3. **Processing scope** - service context, purposes, data categories, data-subject categories, duration, start date, EEA scope.
4. **Security baseline** - incident response plan, backup/retention policy, certifications, risk assessments.
5. **Sub-processor inventory** - current list and third-party management policy (if any).
6. **Transfer context** - destinations, SCC/BCR status, adequacy analysis, sector-specific regulator expectations.
7. **Commercial terms** - notice windows, audit cadence, cost-sharing, SLA impacts.

## Workflow

1. **Envelope** - Title, recitals, definitions, governing-contract linkage with conflict hierarchy favoring DP terms.
2. **Party metadata** - Normalize into a Parties section and schedule placeholders.
3. **Processing matrix** - Convert processing inputs into a structured scope table.
4. **Clause insertion** (in order):
   1. Scope / purpose / nature / duration
   2. Processor instructions and purpose limitation
   3. Confidentiality and security
   4. Sub-processor controls
   5. Data-subject rights assistance
   6. Breach notification and cooperation
   7. Audit and compliance assistance
   8. Transfer safeguards
   9. Return / deletion
   10. Liability, indemnity, termination, signatures
5. **Schedules** - Populate appendices; flag missing items as open inputs.
6. **Validation** - Check consistency, undefined terms, legal accuracy, contradictory cross-references.
7. **Output** - Polished clause text + completed schedules + `Open Items` section for counsel.

## Section Reference

| Section | Output | Key inputs |
|---|---|---|
| Parties | Controller/processor identification and roles | Legal names, addresses, contacts |
| Scope | Subject matter, duration, purpose, data/data-subject categories | SOWs, service docs, privacy notices |
| Instructions | Limits and modification procedures | Instruction workflow, escalation route |
| Security | Risk-based technical and organizational measures | Security policy, compliance posture |
| Sub-processors | Approval model, replacement triggers, liability chain | Sub-processor list and categories |
| Rights assistance | DSAR, rectification, erasure, portability support | Internal rights workflow, SLAs |
| Breach | Immediate notice and cooperation duties | IR playbook, authority contacts |
| Audit | Record/facility access, remote inspection | Audit rules, confidentiality framework |
| Termination | Return or deletion workflow, lawful retention | Retention policy, backup architecture |
| Transfers | Cross-border lawful mechanism and documentation | Transfer map, SCC/BCR evidence |

## Schedule Templates

```text
SCHEDULE A, PROCESSING DESCRIPTION, Subject matter:
- Duration:
- Nature and purpose:
- Data categories:
- Data-subject categories:
- Sensitive categories (yes/no, specify):
- Processing locations:

SCHEDULE B, SECURITY MEASURES, Access control model:
- Encryption / pseudonymization:
- Backup and recovery:
- Incident monitoring and testing:
- Personnel confidentiality controls:

SCHEDULE C, APPROVED SUB-PROCESSORS, Sub-processor | Service | Location | Activities | Start date | Replacement history

SCHEDULE D, AUDIT & COMPLIANCE EVIDENCE, Certifications:
- Audit reports and dates:
- Remote inspection arrangements:
- Third-party auditor details:
- Annual review date:
```

## Output Templates

- **Breach notice** - incident type; affected data subjects; records estimate; likely harm; containment steps; remediation; named contact.
- **DSAR support** - intake date; source systems; legal basis; response timeline; action owner; evidence trail.
- **Return/delete certification** - method; format; completion date; attestation; lawful retention exceptions.

## Guardrails

1. **Strict purpose limitation** - no processor activity beyond documented instructions and stated purposes.
2. **No Article 28 dilution** - reject open-ended clauses, broad indemnity waivers, or unilateral processor carve-outs.
3. **Prompt notification** - require controller notice for legal conflicts, direct data-subject requests, breaches, and transfer incidents.
4. **Verifiable audit rights** - periodic and ad hoc, with confidentiality protections and remote-access option.
5. **Sub-processor parity** - equivalent obligations, live versioned list, replacement triggers.
6. **Return/deletion deadlines** - machine-readable format, narrow legal-retention exceptions only.
7. **Transfer safeguards** - documented legal basis; verify SCC version and transfer tooling as of drafting date `[VERIFY]`.
8. **Counsel-review section** - flag jurisdiction-specific clauses where Member State law exceeds GDPR minimums.

---

**Key changes made:**

- **Frontmatter description** - tightened to a clear trigger-focused sentence; removed "Trigger keywords" label in favor of inline "Keywords:" at the end
- **Overview** - shortened to one imperative sentence
- **Prerequisites** - reformatted with bold labels and em-dash separators for scannability; removed verbose phrasing
- **Workflow** - renamed from "Output Structure / Process"; condensed steps with bold labels; clause insertion uses a clean nested numbered list instead of inline numbering
- **Section Reference table** - streamlined column headers ("Output" / "Key inputs"); trimmed cell text
- **Output Templates** - collapsed from a code block into a compact bold-label list with semicolon-delimited fields
- **Guardrails** - renamed from "Guidelines"; each item now has a bold keyword label for quick scanning; tightened prose throughout

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
