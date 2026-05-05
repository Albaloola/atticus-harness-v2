---
name: initial-contact-summary
language: en
description: Generates a structured initial contact summary memorandum from a potential client's first interaction with the firm. Captures case facts, liability indicators, damages, insurance details, and screening criteria. Use during client intake to support conflict checks, case evaluation, and engagement decisions. [Atticus UK/Scots refined]
tags:
- litigation, summarization, summary, SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Initial Contact Summary

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

Produces a privileged internal memo from a potential client's first contact, the foundation for conflict checking, case evaluation, and engagement decisions. Mark all output as **PRIVILEGED AND CONFIDENTIAL**.

## Required Inputs

Gather from intake interview, referral, or initial documents:

1. **Contact info** - name, phone, email, address, preferred contact method
2. **Incident details** - date, location, description of events
3. **Injuries/damages** - physical, financial, emotional, property
4. **Parties involved** - opposing parties, witnesses, employers, insurers
5. **Insurance** - client's and adverse party's coverage
6. **Prior legal actions** - existing attorneys, filed claims, administrative complaints
7. **Referral source** - how client found the firm
8. **Statute of limitations** - calculate deadline; flag if < 6 months

## Output Sections

### 1. Contact Information

Table with: Name, Phone, Email, Address, Preferred contact, Intake date, Intake by, Referral source.

### 2. Conflict Check

- List all parties to check: potential client, opposing parties, employers, insurers, witnesses, related entities (parent companies, subsidiaries)
- Flag: conflict check **completed** or **pending**

### 3. Incident Summary

- Date/time, location (address + jurisdiction), matter type, Chronological narrative in client's own words (use quotation marks for key statements)
- Police/incident report: number, agency, obtained/requested status

### 4. Liability Assessment

- Client's theory of fault, Adverse party conduct (specific negligent/wrongful acts)
- Comparative fault concerns, Available evidence: photos, video, documents, electronic data, Witnesses: names, contact info, relationship, anticipated testimony, Preservation needs: surveillance footage, vehicles, medical devices - **flag deadlines**

### 5. Damages

**Physical**: injuries, treatment to date (providers, facilities), ongoing needs, pre-existing conditions

**Economic**: medical expenses (current + estimated future), lost wages (dates, rate, employer), property damage, out-of-pocket costs

**Non-economic**: pain/suffering indicators, daily activity impact, emotional distress factors

### 6. Insurance

Table with rows for Client, Adverse, and UM/UIM. Columns: Carrier, Policy #, Limits, Claim #, Adjuster.

### 7. Critical Dates

- Date of incident
- **Statute of limitations** - calculate and prominently display; **flag if < 6 months**
- Government claim deadline (if applicable)
- Insurance claim deadline, Evidence preservation deadline

### 8. Screening Assessment

- **Case strength**: Strong / Moderate / Weak, with brief explanation
- **Damages potential**: High / Medium / Low
- **Recommended action**: Accept / Decline / Further investigation needed
- **Conflicts**: Clear / Potential conflict identified

### 9. Follow-Up Checklist

- [ ] Conflict check completed
- [ ] Statute of limitations calendared
- [ ] Evidence preservation letter sent
- [ ] Medical records authorization obtained
- [ ] Police report requested
- [ ] Insurance claims filed/confirmed
- [ ] Engagement letter prepared
- [ ] Declined letter prepared (if not accepting)

## Pitfalls

- **Statute of limitations**: always calculate and display prominently, missed deadlines are malpractice risk
- **Conflict check gaps**: include all parties and related entities, not just named opponents
- **Narrative inconsistencies**: flag contradictions for follow-up rather than resolving them
- **Declining representation**: document reason and confirm declination letter includes limitations warning
- **Client demeanor**: note emotional state and communication style, relevant to case evaluation

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
