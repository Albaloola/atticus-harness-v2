---
name: partition-complaint
language: en
description: Drafts a U.S. civil complaint for partition of real property by co-owners, pleading jurisdiction, ownership interests, property description, encumbrances, and grounds for partition in kind or by sale. Trigger when the user needs a partition action, co-owner dispute complaint, tenant-in-common or joint-tenancy division, or court-ordered sale of real property. [Atticus UK/Scots refined]
tags:
- drafting, litigation, pleading, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Partition Complaint

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

Draft a complaint establishing jurisdiction, ownership, property description, and grounds for partition in kind or by sale.

## Quick Start

Collect before drafting:

| Item | Details |
|---|---|
| Court / county | Venue where property is located |
| Parties | Full legal names, capacity, addresses, entity info |
| Co-ownership basis | Purchase, inheritance, gift, divorce |
| Tenancy type | Tenants in common or joint tenants |
| Property | Street address, APN, county, legal description (metes/bounds or lot/block) |
| Ownership interests | Percentages or fractional shares; acquisition method and dates |
| Encumbrances | Mortgages, liens, easements, amounts |
| Partition type | In kind or by sale with supporting facts |
| Prior efforts | Negotiations, demands, ADR if required |

## Pleading Structure

Number all allegations sequentially.

1. **Caption** - Court, parties, title "Complaint for Partition of Real Property."
2. **Nature of Action** - Identify partition statute; state action type.
3. **Jurisdiction and Venue** - Subject-matter jurisdiction; personal jurisdiction via ownership in forum; venue in property county.
4. **Parties** - Identity and relationship to property. Entities: formation state and principal place. Estates: personal representative or heirs.
5. **Property Description** - Street address, APN, full legal description. Attach as Exhibit A when required.
6. **Ownership Interests** - Tenancy type, specific shares, acquisition method and dates.
7. **Encumbrances and Contributions** - Recorded liens and material encumbrances. Disproportionate payments or improvements if seeking accounting.
8. **Grounds for Partition** - Inability to agree on disposition; necessity of partition.
9. **Partition Type** - Plead in-kind feasibility or sale necessity (see checklist below).
10. **Statutory Compliance** - Cite statute; plead satisfaction of preconditions (notice, ADR).
11. **Prayer for Relief** - See relief menu below.
12. **Verification and Signature** - Verification if required; attorney or pro se signature block.

## Partition-by-Sale Checklist

Allege one or more when seeking sale over in-kind division:

- Physical division impracticable (size, configuration, access, utilities)
- Single structure cannot be divided without destroying value, Zoning or subdivision rules prevent lawful division, Division would materially diminish value compared to whole-property sale, Fractional interests make equitable in-kind division infeasible

## Relief Menu

| Relief | When to include |
|---|---|
| Partition in kind | Physical division feasible and equitable |
| Partition by sale | In kind impracticable or causes material injury |
| Referee / commissioner | Statute or local practice requires appointment |
| Accounting | Dispute over rents, profits, taxes, or improvements |
| Costs and fees | Authorized by statute, contract, or equity |
| Sale procedure | Court-supervised sale and distribution needed |

## Pitfalls

- Join all co-owners and necessary lienholders; identify unknown claimants per local rules.
- Use the deed's legal description verbatim; attach as exhibit when required.
- Plead tenancy type precisely, do not assume joint tenancy without record support.
- Tie partition-by-sale allegations to concrete property facts; avoid conclusory statements.
- Check local rules for verification, special notices, or pre-filing ADR requirements.
- Never include settlement communications or privileged material.
- Plead statutory or contractual basis for any fee or credit requests.

---

**Key changes made:**

- **Description**: Tightened to one sentence of purpose + one sentence of trigger guidance; removed keyword list (tags and description text handle discoverability).
- **Removed template skeleton**: The verbose caption template added tokens without instructional value, the pleading structure already covers ordering.
- **Merged Prerequisites into Quick Start**: Combined the prerequisites list and facts-intake table into a single "Quick Start" table, eliminating redundancy.
- **Renamed sections**: "Output Structure / Process" → "Pleading Structure" (direct); "Guidelines" → "Pitfalls" (standard best-practice heading); "Partition Type Checklist" → "Partition-by-Sale Checklist" (more precise).
- **Compressed pleading steps**: Each step is now a single dash-separated line instead of bold + multi-line prose, cutting ~40% of tokens in that section while preserving all substantive guidance.
- **Removed "Property use" row**: It was not referenced elsewhere in the skill and isn't a required pleading element, improvements are captured under encumbrances/contributions.

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
