---
name: grant-warranty-deed
language: en
description: 'Drafts execution-ready Grant Deeds and Warranty Deeds for residential real property transfers, enforcing state-specific granting language, legal descriptions, covenant selection, and recording compliance. Use when preparing grant deeds, warranty deeds, property conveyances, title transfers, or real estate closing documents. Trigger keywords: grant deed, warranty deed, property conveyance, title transfer, deed of conveyance, real property transfer, recording deed. [Atticus UK/Scots refined]'
tags:
- agreement, drafting, transactional, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Grant Deed / Warranty Deed

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

Draft a recordable deed transferring residential real property from grantor to grantee, compliant with applicable state recording statutes.

## Prerequisites

1. Deed type: Grant Deed (limited warranties) vs. Warranty Deed (full covenants through entire chain).
2. Current title report with vesting deed, legal description, encumbrances, and APN.
3. Full legal names for all parties matching title documents; entity formation docs and signing authority if applicable.
4. Transaction documents: purchase agreement, escrow instructions, consideration terms.
5. Jurisdiction confirmed: state-specific statutory language, witness/acknowledgment rules, recording standards.

## Output Structure / Process

**Document Header**

| Element | Requirement |
| --- | --- |
| Instrument type | "GRANT DEED" or "WARRANTY DEED" - must match operative language |
| Recording jurisdiction | County and state |
| Return address | For recorded document return |
| APN / Document ID | Per local recording statutes |
| Preparation date | Date of drafting |

**Parties**
- Grantors: full legal name as on vesting deed; marital status; signing capacity (individual, trustee, officer).
- Grantees: full legal name; manner of taking title (joint tenancy, tenancy in common, community property, etc.) with proportional interests if applicable.
- Entities: legal name, jurisdiction of formation, authorized representative and title.
- Mailing addresses for all parties.

**Consideration**
- State consideration (monetary or nominal: "Ten Dollars and other good and valuable consideration").
- Actual purchase price disclosure not required in most jurisdictions.
- Include recitals only where they provide necessary context; avoid creating ambiguity.

**Legal Property Description**
- Primary: lot/block from recorded plat, metes and bounds, or government survey, must match vesting deed exactly.
- Include APN and street address (street address for convenience only; never sufficient as sole description).
- Cross-check against title report and county records for gaps or overlaps.
- If lot line adjustment occurred, reference the recorded instrument.

**Granting Clause**

| Deed Type | Statutory Language | Effect |
| --- | --- | --- |
| Grant Deed | "grants and conveys" | Implies limited statutory warranties |
| Warranty Deed | "grants, bargains, sells, conveys, and warrants" | Invokes full covenants of title |

- Specify estate conveyed (typically fee simple absolute).
- Include any conditions or limitations on the grant.

**Covenants of Title**
- Warranty Deed, include or incorporate by reference: (1) seisin, (2) right to convey, (3) against encumbrances, (4) quiet enjoyment, (5) warranty, (6) further assurances. Specify scope: grantor's acts only vs. all prior holders. Confirm whether express or implied by statute in jurisdiction.
- Grant Deed, limited warranties only: no prior conveyance, no undisclosed encumbrances during grantor's ownership.

**Exceptions, Reservations & Encumbrances**
- Enumerate all exceptions: easements, CC&Rs, tax liens, utility easements.
- Reference recorded instruments by book/page or instrument number.
- Describe reservations (mineral rights, easements, life estates) with same specificity as property description.
- Distinguish permitted exceptions (grantee accepts) from encumbrances grantor warrants against.

**Execution & Acknowledgment**

| Requirement | Details |
| --- | --- |
| Signature blocks | All grantors; capacity specified |
| Execution date | May differ from effective date if held in escrow |
| Witnesses | Per state requirements (number, qualifications) |
| Spousal joinder | Required for homestead property in many states |
| Entity attestation | Secretary or authorized officer if required |
| Notarial acknowledgment | Statutory form; identify each grantor; notary signature, seal, commission expiration |
| Multi-party / out-of-state | Separate certificates if executed at different times/locations; comply with both notarizing and recording jurisdictions |

**Recording Format**
- Paper size per county recorder (letter or legal).
- Margins: 1" sides and bottom; 3" top on first page for recording stamp.
- Attach all referenced exhibits; include cover sheet if required by local practice.

## Guidelines

- Verify jurisdiction before drafting: deed formalities vary significantly by state.
- Party names, property descriptions, and citations must be uniform throughout.
- Never mix Grant Deed and Warranty Deed language, selection drives granting clause and covenant scope.
- Legal description accuracy is the most common cause of recording rejection; triple-check against title report.
- Do not improvise legal descriptions; use only verified descriptions from title documents or surveys.
- Use `[VERIFY]` for any statutory reference or citation not confirmed against current code.
- Final document should require only signatures and notarization before recording.

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
