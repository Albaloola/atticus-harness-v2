---
name: animal-law-case-summary
language: en
description: Produces litigation-grade case summaries for animal law disputes in Scotland including cruelty/neglect prosecutions under the Animal Health and Welfare (Scotland) Act 2006, ownership/custody disputes, dangerous animal designations, veterinary malpractice delict claims, and assistance/assistance animal accommodations under the Equality Act 2010. Builds exhibit-cited factual timelines, maps evidence to statutory elements, evaluates expert evidence, and assesses remedies with jurisdiction-specific legal research. Use when summarising animal law cases, analysing animal cruelty charges, pet custody disputes, dangerous dog hearings, veterinary malpractice delict claims, or assistance animal accommodation matters. Also trigger for animal forfeiture, bite liability under the Dogs Act 1871 (Scotland), wildlife possession, or animal-related court filings before the Sheriff Court or High Court of Justiciary. [Atticus UK/Scots refined]
tags:
- SCOTS, analysis, litigation, summarization, summary, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Animal Law Case Summary

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

Produces structured, evidence-grounded case summaries connecting record citations to legal elements and realistic remedies across criminal, civil, and administrative animal law forums in Scotland.

## Prerequisites

Gather before drafting (skip if user says "use defaults" or "just draft"):

1. **Jurisdiction** - Sheriff Court (summary/solemn), High Court of Justiciary, or civil courts (Sheriff Court / Court of Session)
2. **Procedural posture** - pre-suit, Initial Writ/Summons, interim interdict, proof, trial, sentencing, appeal
3. **Parties and animal ID** - species, breed, microchip number, current custody
4. **Core record** - see minimum record table below
5. **Audience** - solicitor work product, client-facing, or public/educational
6. **Relief sought**

### Minimum Record by Matter Type

| Matter Type | Required Documents |
|---|---|
| Civil litigation | Initial Writ + defences/interlocutors, interim interdict papers, court orders, key productions, precognitions, expert reports, procedural orders |
| Criminal cruelty | Complaint/Indictment, police statements, SSPCA investigation reports, chain-of-custody docs, veterinary/necropsy reports |
| Service/assistance animal | Lease/letting agreement or service policy, request + correspondence, Equality Act 2010 assessment, incident reports, decision records |
| Veterinary malpractice | Complete veterinary records (all providers), expert opinions, purchase/adoption docs, loss documentation |

**Defaults if user doesn't respond:** solicitor work product audience; posture as stated or inferred; all applicable matter types. Mark unverified content "[VERIFY]."

## Workflow

### 1. Classify and Lock Posture

Classify into applicable archetypes:

- Criminal cruelty/neglect (Animal Health and Welfare (Scotland) Act 2006)
- Forfeiture/impound challenge, Dangerous dog designation (Dangerous Dogs Act 1991 as applied in Scotland)
- Ownership/title dispute (replevin = special claim for delivery)
- Veterinary malpractice / delictual liability, Landlord-tenant pet dispute (Private Residential Tenancy)
- Assistance animal accommodation (Equality Act 2010, s.15-28 / Schedule 4)
- Wildlife/exotics possession (Wildlife and Countryside Act 1981 as modified in Scotland)
- Dog bite / strict liability (Dogs Act 1871, s.2; Animals (Scotland) Act 1987)

Write a caption block: court, case number, sheriff/judge, filing date, next date.

Critical: never collapse allegations into findings. Identify current animal custody. Surface all deadlines, dangerous dog appeals can be tight [VERIFY]. Check for "welfare" as primary consideration under AHWS Act 2006.

### 2. Build Factual Timeline

Chronological timeline with production-level citations. Per event: date/time, actor, source (document + pinpoint cite), disputed accounts. Use neutral descriptions (body condition scores, not conclusory characterisations). Track both chain of title (ownership) and chain of care (maintenance, medical, bonding). Include exculpatory facts.

### 3. Map Claims to Elements and Evidence

Per claim, charge, or violation:

| Component | Detail |
|---|---|
| Legal standard | Statute + elements |
| Burden | Beyond reasonable doubt (criminal) / Balance of probabilities (civil) |
| Key disputed elements | Most likely contested element |
| Supporting evidence | Exhibits mapped to each element |
| Weaknesses | Gaps or undermining evidence |
| Anticipated defences | At least two opposition attack vectors |

Jurisdiction-specific checks:

- **Cruelty**: s.19-23 AHWS (Scotland) Act 2006 - causing unnecessary suffering, mutilation, tail docking; mens rea (intention or recklessness); exemptions (veterinary treatment, licensed scientific procedures, lawful fishing)
- **Dog bites**: Dogs Act 1871, s.2 (owner liable for damage, no need to prove scienter); Animals (Scotland) Act 1987, s.3 (keeper's strict liability for animal to cause injury)
- **Assistance animals**: Equality Act 2010 - "assistance animal" vs. "service animal" - key difference from US ADA/FHA; Part 2 (services and public functions, s.15-28) + Schedule 4
- **Cruelty investigations**: SSPCA (Scottish SPCA) are the primary investigators; no private prosecutions in Scotland

### 4. Verify Governing Law

Every cited authority must be verified or marked [VERIFY].

Key Scottish/UK frameworks:

| Framework | Citation |
|---|---|
| Animal Health and Welfare (Scotland) Act 2006 | 2006 asp 11 |
| Animal Welfare Act 2006 (England & Wales only) | 2006 c. 45 - does not apply in Scotland |
| Dangerous Dogs Act 1991 | 1991 c. 65 (applies Scotland) |
| Dogs Act 1871, s.2 | Civil liability for dog attacks |
| Animals (Scotland) Act 1987 | Keeper's strict liability; damage by animals |
| Wildlife and Countryside Act 1981 (as mod. Scotland) | 1981 c. 69 |
| Equality Act 2010 | 2010 c. 15 - GB-wide (s.15-28: assistance animals) |
| Control of Dogs (Scotland) Act 2010 | Dog control notices |
| Protection of Wild Mammals (Scotland) Act 2002 | Hunting with dogs |

For local byelaws: locate council-specific dangerous dog, animal nuisance, and licensing byelaws.

### 5. Analyse Evidence Quality

Per expert/professional witness: qualifications, methods (peer-reviewed?), admissibility, contested assumptions.

Key checks: veterinary opinions (full history reviewed?), SSPCA evidence (chain of custody, methodology), digital evidence (authenticity, metadata), photographs (metadata, fair depiction), necropsy (chain of custody), lay witnesses (distinguish from medical conclusions).

### 6. Assess Remedies

| Category | Considerations |
|---|---|
| Ownership | Delivery (special claim for delivery), damages for conversion |
| Criminal | Fines, imprisonment (ss.19-23 AHWS Act), deprivation/disqualification orders, costs |
| Dangerous dog | Destruction vs. contingent destruction orders control conditions |
| Accommodation | Sheriff Court interdict; damages; award under Equality Act 2010 |
| Damages | Restricted: no punitive damages; compensation for loss/vet fees only; solatium in some cases |
| Collateral | Housing, professional licenses (veterinary surgeons), SSPCA prosecution history |

Address bond/forfeiture deadlines and settlement leverage tied to animal's current placement.

## Output Structure

1. **Overview** - 2 to 3 sentence case description
2. **Parties and Animals** - identification, relationships, current custody
3. **Procedural Posture** - caption block + status
4. **Key Facts (Timeline)** - production-cited chronology
5. **Claims/Charges and Governing Law** - element mapping
6. **Evidence Strengths and Weaknesses** - candid assessment
7. **Key Disputes** - contested issues
8. **Remedies and Risk Assessment** - realistic outcomes
9. **Next Steps and Deadlines** - action items with dates
10. **Key Takeaways** - non-advocacy, action-oriented paragraph

State the animal's legal classification explicitly (property under Scots law, no "property-plus" or "best interest" standard recognised).

## Post-Draft Alignment

After delivering the summary, confirm:

1. Correct case, parties, and procedural posture?
2. Missing record documents to incorporate?
3. Sections to expand (remedies, expert critique, timeline)?
4. Audience and privilege markings correct?

## Guidelines

- **Neutrality**: distinguish allegations vs. findings vs. admissions vs. inference throughout
- **Adversarial resilience**: identify top 3 client vulnerabilities; at least 2 opposition attack vectors per claim
- **Citation integrity**: every factual assertion traceable to a record cite or marked [VERIFY]; no invented authorities
- **Audience calibration**: adjust tone, privilege handling, strategic candour by audience
- **Scope**: case summary only, not a memo, motion, demand letter, or press statement
- **Privilege**: label as solicitor work product; redact sensitive details in client-facing versions
- **Conflicts**: flag dual-role parties (e.g., SSPCA as both investigator and witness)
- **Deadline sensitivity**: animal law deadlines can be tight; always surface and flag uncertainty
- **Property status**: always state animal's legal classification, property under Scots law (no "custody" hearings as in some US states)
- **Criminal procedure**: no private prosecution in Scotland, all animal cruelty prosecutions brought by Crown Office (COPFS)
- **SSPCA**: not a state agency, private charity with statutory powers

**Required disclaimer on every output:**

> THIS SUMMARY REQUIRES INDEPENDENT SOLICITOR VERIFICATION OF ALL CITATIONS, LOCAL BYELAWS, AND FACTUAL ASSERTIONS, AND DOES NOT CONSTITUTE LEGAL ADVICE.

## Scotland/UK Adaptation

### Key Differences from US Animal Law Practice

| US Concept | Scottish/UK Equivalent |
|---|---|
| Animal Welfare Act (federal, 7 U.S.C. § 2131) | Animal Health and Welfare (Scotland) Act 2006 (devolved) |
| Endangered Species Act (federal) | Wildlife and Countryside Act 1981 (as modified in Scotland) / Conservation (Natural Habitats, &c.) Regulations 1994 |
| ADA Title III (service animals) | Equality Act 2010, s.15-28 - "assistance animals" (trained dogs only; no "emotional support animal" category) |
| FHA (assistance animals, 24 C.F.R. § 100.204) | No direct equivalent, disability discrimination in housing under Equality Act 2010, Sch. 4 |
| ACAA (air travel) | Consumer Rights Act 2015 / retained EU Regulation 1107/2006 |
| Plaintiff/Petitioner | Pursuer (civil) / Complainer or Crown (criminal) |
| Defendant | Defender (civil) / Accused (criminal) |
| Jury trial (civil) | Limited to Court of Session jury trials for certain actions |
| Punitive damages | Not available in Scotland |
| Private prosecution | Not generally available in Scotland, all criminal prosecutions by COPFS |
| Best-interest standard (pet custody) | Not recognised in Scots law, animals are property |

### Scottish Statutes (Key)

- **Animal Health and Welfare (Scotland) Act 2006** (2006 asp 11) - primary animal welfare legislation in Scotland
- **Animals (Scotland) Act 1987** - strict liability for damage by animals; keeper's liability
- **Dogs Act 1871** - civil liability for dog attacks (applies Scotland)
- **Dangerous Dogs Act 1991** - criminal offences for dangerous dogs (applies Scotland)
- **Control of Dogs (Scotland) Act 2010** - dog control notices
- **Equality Act 2010** - GB-wide protection for assistance animal users
- **Wildlife and Countryside Act 1981** (as applied in Scotland) - wildlife protection
- **Protection of Wild Mammals (Scotland) Act 2002** - restrictions on hunting with dogs

### Regulatory Bodies

| US Agency | Scottish/UK Equivalent |
|---|---|
| USDA (Animal welfare enforcement) | Scottish Government (Animal Health & Welfare Division) / Local Authority enforcement |
| State animal control | Local Authority Environmental Health / SSPCA |
| DOJ (ADA enforcement) | Equality and Human Rights Commission (EHRC) |
| FWS (wildlife) | NatureScot (formerly Scottish Natural Heritage) |

### Practitioner Notes

1. The Animal Health and Welfare (Scotland) Act 2006 is devolved legislation, it applies only in Scotland.
2. SSPCA (Scottish SPCA) inspect and investigate but do not prosecute; all criminal cases referred to COPFS.
3. There is no "emotional support animal" category under the Equality Act 2010 - only trained assistance dogs are protected.
4. The "property" classification of animals under Scots law means no "best interest of the animal" test in ownership disputes.
5. Prescription/limitation: delict claims - 5 years (3 years for personal injury involving animal attacks).
6. SSPCA special constables have statutory powers under the 2006 Act (entry, seizure, removal).
7. Jury is available for civil animal-related damages claims only in the Court of Session, not Sheriff Court.
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
