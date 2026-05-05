---
name: written-consent-in-lieu-of-meeting
language: en
description: Drafts U.S. corporate written-consent instruments (board, shareholder, member) as substitutes for formal meetings. Triggers when counsel requests board consent, shareholder written consent, unanimous consent, consent-in-lieu approvals, or "action without meeting" for contracts, financing, equity issuance, officer delegation, or governing-document amendments. Produces jurisdiction-aware approval records with threshold validation and execution mechanics. [Atticus UK/Scots refined]
tags:
- agreement, corporate, drafting, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Written Consent in Lieu of Meeting

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

Drafts a written-consent instrument authorizing entity action without a meeting, preserving corporate-record integrity and enforceability.

## Quick Start

1. Collect entity type, legal name, and jurisdiction of formation.
2. Obtain governing documents (charter, bylaws, operating agreement) - especially consent-specific provisions.
3. Identify the action, approval class (board vs. shareholder/member), and required threshold.
4. Draft consent with proper recitals, resolutions, and signature blocks.
5. Validate threshold math and statutory alignment before output.

**Hard stop:** If jurisdiction or entity type is missing, request before drafting.

## Intake Checklist

| Field | Source |
|---|---|
| Entity legal name | Charter / certificate of formation |
| Jurisdiction | Formation docs |
| Governing authority | Bylaws / operating agreement |
| Action type | User request + transaction docs |
| Required threshold | Governing docs + statute |
| Signatory list + interests | Board list, cap table, membership ledger |
| Effective date rule | Governing docs + statute `[VERIFY]` |
| Filing destination | Secretary / record-retention policy |

## Workflow

### 1. Legal Framework Check

- Classify as board or shareholder/member consent.
- Confirm written-consent authorization statute:
  - DE corp board: DGCL §141(f) `[VERIFY]`
  - DE stockholder: DGCL §228 `[VERIFY]`
  - LLC: state LLC statute equivalent `[VERIFY]`
- Check governing-doc overrides: notice windows, class protections, unanimity, special-purpose approvals.
- Confirm the action is not statutorily excluded from written consent in the jurisdiction.

### 2. Draft Structure

```
WRITTEN CONSENT OF THE [BOARD OF DIRECTORS / SHAREHOLDERS]
OF [ENTITY NAME] IN LIEU OF [SPECIAL/ANNUAL] MEETING

[Effective Date]

The undersigned [directors/shareholders/members] of [ENTITY], pursuant to
[GOVERNING STATUTE] and [GOVERNING DOCUMENT], hereby consent to the
following resolutions:

WHEREAS [fact and authority recitals];
WHEREAS [threshold and compliance recitals];

RESOLVED, THAT [resolution with complete action language].
```

### 3. Resolution Content by Action Type

| Action | Required elements |
|---|---|
| Contract authorization | Agreement title/date, key terms, parties, permitted modifications, authority granted |
| Financing | Max principal, rate/maturity/conditions, collateral, lender, covenant linkage |
| Equity issuance | Security type/class/number, recipient, price/valuation, restrictions, ROFR/preemptive compliance |
| Asset disposition | Target asset, consideration, authority conditions, delegated approval, filing steps |
| Officer delegation | Officer identity, authority scope, caps, signature limits, duration |
| Governing-doc amendment | Exact section text or exhibit, vote threshold, procedural prerequisites, filing |

### 4. Signature and Recordkeeping

- Signature block per required signatory: signature, printed name, title, date.
- Shareholder/member lines must state class, shares/membership %, and percentage of outstanding.
- Include consent execution statement confirming threshold met.
- Optional secretary certificate: filed date, record location, effectiveness status.

### 5. Quality Gate

1. **Authority** - statute + governing docs align with consent mechanism used.
2. **Threshold math** - interest percentages exactly satisfy required vote.
3. **Consistency** - recitals match resolutions on facts, parties, and scope.
4. **Completeness** - output missing-items list if any material fact is unknown; never finalize silently.

## Pitfalls

- Never assume e-signature validity, confirm governing docs and jurisdiction permit it.
- Do not over-broaden delegation authority; no open-ended grants.
- Preserve minority-rights protections and class-vote mechanics from governing documents.
- Keep recital and resolution scope tightly limited to the approved action.
- Include conditions precedent and third-party approvals in resolutions, not commentary.
- Mark any unconfirmed statutory citation with `[VERIFY]`.

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
