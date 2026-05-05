---
name: extend-time-brief
language: en
description: Drafts appellate motions to extend time for filing briefs (opening, answering, or reply) in U.S. appellate courts. Demonstrates good cause through specific verifiable facts, addresses opposing counsel's position, and ensures rule compliance. Use when drafting extension of time motions, appellate deadline extensions, or briefing schedule modifications. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Motion to Extend Time to File Brief

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

Drafts a procedural motion requesting additional time to file a brief in an appellate court. Establishes good cause with specific facts and strict compliance with applicable rules of appellate procedure.

## Prerequisites

Gather before drafting:

- **Case caption** - party names exactly as in appellate record, court name, case number
- **Current deadline** - date from court order or rule
- **Brief type** - opening, answering, or reply
- **Party represented** - appellant or appellee
- **Extension history** - prior extensions sought or granted
- **Good cause facts** - specific, verifiable grounds (conflicts, complexity, transcript delays)
- **Opposing counsel's position** - consent, non-opposition, opposition, or unreachable
- **Applicable rules** - jurisdiction's appellate procedure rules, local rules, standing orders

## Document Structure

| Section | Content |
|---------|---------|
| Caption | Full party names (exact appellate record format), unabbreviated court name, case number |
| Title | "Motion to Extend Time to File [Brief Type]" |
| Introduction | Moving party, current deadline, proposed new deadline, days requested |
| Argument | Good cause with specific facts; opposing counsel's position |
| Conclusion | Specific relief with exact new date |
| Proposed Order | Per local rules: case caption, new deadline, signature line |

## Workflow

1. **Extract** case identifiers, deadlines, and procedural history from materials
2. **Determine** extension number, courts apply heightened scrutiny to repeat requests
3. **Establish good cause** with concrete, verifiable facts (never conclusory statements)
4. **Check rule compliance** (checklist below)
5. **Draft** strongest argument first; descriptive headings; 3 to 5 pages max
6. **Verify** all dates, formatting, and representations (checklist below)

## Good Cause, Required Specificity

Each ground requires concrete detail:

| Ground | Required Details |
|--------|-----------------|
| Conflicting trial | Case name, court, trial dates, why reassignment impossible, hours/day consumed |
| Record complexity | Page count, transcript volumes, exhibit count, discrete issues on appeal |
| Novel legal issues | Specific issue; recent law changes, circuit splits, or first-impression questions |
| Transcript delay | Reporter name, date ordered, expected delivery, testimony impacted |
| Illness/emergency | Detail establishing genuineness; supporting docs filed under seal |
| Expert consultation | Nature of expertise, timeline, why brief cannot proceed without it |

## Opposing Counsel Position

- **Consent** - Feature in introduction and argument; include language of agreement; consider stipulated motion
- **Non-opposition** - Distinguish from consent; note conditions
- **Opposition** - Acknowledge directly; address concerns; explain why good cause outweighs prejudice
- **Unreachable** - Document all contact attempts with dates and methods (email timestamps, call logs)

## Rule Compliance Checklist

- [ ] Motion filed before current deadline expires
- [ ] Within limits on number/cumulative length of extensions
- [ ] Extension won't delay oral argument
- [ ] Pre-filing conferral with opposing counsel completed (if required)
- [ ] Page limits and formatting requirements met
- [ ] Proposed order formatted per local rules

## Verification Checklist

- [ ] All dates accurate and internally consistent
- [ ] Extension length reasonable (typically 14 to 30 days; longer needs extraordinary justification)
- [ ] Proposed deadline avoids weekends, holidays, court recess
- [ ] Opposing counsel's position accurately and fairly represented
- [ ] Proposed order matches relief requested in motion body
- [ ] Format complies with local rules (font, margins, spacing, filing method)
- [ ] Supporting documents referenced and attached

## Pitfalls

- **No conclusory assertions** - never "counsel is busy"; every claim needs specific supporting facts
- **Misrepresenting opposing counsel's position** risks sanctions and professional responsibility violations
- **Frame positively** - extension enables quality advocacy, not compensation for late starts
- **First request advantage** - if first extension, state prominently that no prior extensions were sought
- **Credibility** - every factual assertion must be verifiable from the record or attached documentation
- **Proposed deadline** - confirm it doesn't conflict with other case events

---

**Key changes made:**

1. **Removed `tags`** - not part of the Agent Skills spec; only `name` and `description` in frontmatter
2. **Tightened description** - kept within spec limits, same trigger guidance
3. **Consolidated structure** - merged the original "Output Structure", "Process", and "Guidelines" sections into a cleaner flow: Document Structure → Workflow → reference tables → checklists → pitfalls
4. **Split checklists** - separated rule compliance (pre-draft) from verification (post-draft) for clearer workflow stages
5. **Removed redundant prose** - eliminated repeated framing; each section now earns its tokens
6. **Reduced from 87 → 72 lines** while preserving all domain-critical legal content

Want me to write this to the file?

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
