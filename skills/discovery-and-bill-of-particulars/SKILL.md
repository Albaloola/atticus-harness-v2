---
name: discovery-and-bill-of-particulars
language: en
description: Drafts a combined Specification of Documents / Commission and Diligence Application and Motion for Further Specification for Scottish civil or criminal litigation. Extracts case details, identifies underspecified allegations or evidence gaps, and produces numbered recovery/commission requests paired with specification demands. Use after initial writ or indictment when claims/charges lack specificity or evidence is opaque. [Atticus UK/Scots refined]
tags:
- SCOTS, drafting, litigation, pleading, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Demand for Discovery and Bill of Particulars

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

Drafts a court-ready pleading combining targeted discovery demands with a bill of particulars to force disclosure, narrow vague theories, and preserve an enforceable compliance record.

## Prerequisites

1. **Jurisdiction and court** - court, division/department, case number, local rules, standing filing/formatting orders
2. **Case posture** - criminal, civil, or hybrid; current procedural stage
3. **Case file** - charging document or complaint, prior pleadings, motions, stipulations, existing discovery responses
4. **Information gaps** - ambiguous allegations or missing disclosures blocking trial preparation
5. **Privilege constraints** - potential privilege categories and any protective-order limitations
6. **Enforcement posture** - preferred path: meet-and-confer, motion to compel, fee/sanction relief

If any prerequisite is missing, pause and ask, do not assume or fill gaps.

## Output Structure

### 1. Regime Selection

Identify the governing track before drafting:

| Track | Governing Rules | Baseline Deadline |
|-------|----------------|-------------------|
| Criminal | Fed. R. Crim. P. 16; 7(f) + local rules | Local rule/time limit [VERIFY] |
| Federal civil | FRCP 26(b)(1), 26(e), 26(g), 33, 34, 36, 37 | 30 days from service [VERIFY] |
| State | State procedure + local rules | State-specific [VERIFY] |

### 2. Case Information Block

| Field | Value |
|-------|-------|
| Court | [jurisdiction] |
| Judge/department | [if required] |
| Plaintiff/Prosecution | [name] |
| Defendant | [name] |
| Case number | [xxxx] |
| Document title | Demand for Discovery and Bill of Particulars |
| Strategic objective | [narrow charges / obtain disclosure / prepare defenses] |

### 3. Authority and Need

- State party status, case stage, and necessity for relief, Criminal: cite Fed. R. Crim. P. 16, 7(f) for disclosure and particularized charge notice, Civil: cite FRCP 26(b)(1), 33, 34, 36, 37 for relevance, specificity, and sanctions path, Include proportionality statement; affirm requests are not harassing or overbroad

### 4. Discovery Demands

Numbered requests with strict specificity:

| Req. | Category | Custodian/Source | Time Range | Format | Rationale |
|------|----------|-----------------|------------|--------|-----------|
| 1 | Documents/ESI | [party + affiliates] | [from/to] | Native + metadata | [defense use] |
| 2 | Communications | [emails/texts/notes] | [from/to] | Native + index | [defense use] |
| 3 | Witness IDs | [trial/public witnesses] | [if ongoing] | Contact + scope | Trial prep/notice |
| 4 | Expert materials | [experts] | [all] | CVs, reports, data, opinions | Rebuttal/cross prep |

Per-request template:

```
[No.] Request for [documents | communications | identity | expert materials]:
Request:
Ground:
Response format:
Privilege carve-out:
```

### 5. Bill of Particulars

Per-demand template:

```
Demand [No.]:
Allegation to specify:
Exact information required:
Reason tied to element/issue:
```

**Criminal particulars:**
- Acts constituting each charged offense, Exact dates, times, and locations, Identified participants, co-conspirators, or accomplices, Manner and means for each offense, Nexus to venue, elements, and defenses

**Civil particulars:**
- Statutory or contractual provisions breached and breach conduct, Itemized damages per category with calculation basis, Each referenced document described with production-level specificity

### 6. Compliance and Deadlines

- State response deadline and service method, Require complete, verified responses per local/operative rules, Require supplementation duty as new information becomes known, Include escalation sequence: meet-and-confer → motion to compel → sanctions/preclusion/fee recovery, Use explicit court-ready language for incomplete, evasive, or untimely responses

### 7. Certification and Service

```
I certify under [applicable rule] that this demand is grounded in law,
not interposed for delay or harassment, and not unduly burdensome.

Attorney:
Bar/Firm/Contact:
/s/ [Attorney]
Date:

Certificate of Service:
Served on [party/counsel] via [ECF/e-service/mail]
Date/time/method:
```

## Jurisdiction-Specific Compliance

- [ ] Governing rules identified for correct track (criminal / federal civil / state)
- [ ] Local captioning, formatting, and e-filing requirements followed
- [ ] Response deadlines verified against applicable rules, no invented dates
- [ ] Nomenclature matches jurisdiction (e.g., "demand" vs. "motion" vs. "request")
- [ ] Service method complies with local practice

## Guidelines

- Every request must map to a litigation purpose, no fishing expeditions, Use parallel phrasing for criminal and civil tracks; never mix standards without citing the governing rule, Separate factual requests from relief/remedy requests to reduce objections, Avoid vague terms; include exact relief language to build an escalation-ready record, Acknowledge privilege and nonparty constraints in each request where applicable, Eliminate duplicate or mutually inconsistent requests, Mark jurisdictional assumptions with `[VERIFY]` when local law is uncertain, All citations must be verified, do not hallucinate rule numbers, deadlines, or case law

---

Key improvements from the original:

- **Frontmatter description** rewritten in third-person with clearer trigger guidance
- **Prerequisites** now use bold labels with dash separators matching codebase convention; added the "pause and ask" instruction
- **Regime selection** condensed from a 5-column matrix to a focused 3-column table
- **Case information** converted from a code block to a proper table
- **"Final control checks"** section (step 8) removed, those checks are now folded into a dedicated **Jurisdiction-Specific Compliance** checklist section with checkboxes, matching the pattern used by `abstract-of-judgment` and `alibi-notice`
- **Certification block** fixed the "harrasment" typo
- **Guidelines** tightened to 8 focused bullets with an added hallucination guard, Overall ~20% shorter while preserving all legal substance

## Scotland/UK Adaptation

This skill is adapted for Scottish criminal and civil procedure. The following conversions apply:

### Primary Legislation & Court Rules

#### Civil Track
- **FRCP 16 (pretrial conferences)** → **Rules of the Court of Session (RCS) Chapter 22** or **Sheriff Court Ordinary Cause Rules Chapter 10** (case management hearings / procedural hearings)
- **FRCP 26-37 (discovery)** → **Commission and Diligence** for recovery of documents (RCS Chapter 36 / Sheriff Court Rules Chapter 36); **Specification of Documents** procedure
- **FRCP 33 (interrogatories)** → No direct equivalent; **Minute for recovery of documents / Specification of documents** is the primary mechanism
- **FRCP 34 (production)** → **Commission and Diligence** (court order for production and recovery)
- **FRCP 36 (admissions)** → **Minute for admissions / notice to admit** (RCS Chapter 29 / Sheriff Court rules)
- **FRCP 37 (sanctions)** → **Expenses sanction** (award of costs for non-compliance); decree by default for failure to appear
- **Bill of Particulars** → **Specification of facts / Further specification** - pursuer/defender may seek specification via a **minute**; if refused, may appeal by **note of appeal**

#### Criminal Track
- **Fed. R. Crim. P. 16** → **Criminal Procedure (Scotland) Act 1995** (disclosure obligations under s.67-73 for solemn procedure; s.141-148 for summary procedure)
- **Fed. R. Crim. P. 7(f) (bill of particulars)** → **Further specification** can be sought at **First Diet** (solemn) or **Pleading Diet** (summary) under the 1995 Act
- **Motion to compel** → **Preliminary plea** or **Note of appeal** on non-disclosure
- **Discovery by defence** → Defences have a right to **recovery of documents** via Commission and Diligence in criminal cases; Crown has common law duty of disclosure (but not equivalent to US discovery obligations)

### Scottish Criminal Procedure
- **Tracks**: 
  - **Solemn procedure** (jury trial in High Court or Sheriff Court) - First Diet, Trial Diet
  - **Summary procedure** (sheriff or stipendiary magistrate, no jury) - Pleading Diet, Trial Diet
- **Disclosure**: Crown must disclose (1) statements of witnesses to be called; (2) previous convictions of witnesses; (3) any information which would materially weaken the Crown case or strengthen the defence. Disclosure is ongoing (Crown's duty of disclosure).
- **Commission and Diligence**: Both Crown and defence can apply for recovery of documents/evidence that are relevant to the case.
- **Sections 67-73, 1995 Act**: Govern disclosure in solemn procedure; s.141-148 for summary procedure.

### Scottish Civil Procedure
- **Civil disclosure**: There is NO general automatic discovery obligation. Disclosure is by **specification of documents** incorporated in the initial writ/summons, followed by **Commission and Diligence** executed by a **messenger-at-arms** (Court of Session) or **sheriff officer** (Sheriff Court).
- **Commission to take evidence**: Used where oral evidence needs to be taken from witnesses who cannot attend court.
- **Admissions**: Parties can request admissions (notice to admit / minute for admissions) - similar to FRCP 36 but less commonly used.

### Forms & Documents (see `scots-forms/`)
- `specification-of-documents-template.md` - template specification of documents for Commission and Diligence
- `minute-for-recovery-template.md` - template minute for recovery of documents (civil)
- `criminal-disclosure-request-template.md` - template request for Crown disclosure (solemn procedure)
- `note-of-appeal-non-disclosure-template.md` - template note of appeal against non-disclosure

### Key Terminology Changes
| US Term | Scottish Equivalent |
|---------|-------------------|
| Discovery | Commission and Diligence |
| Demand for Discovery | Specification of Documents |
| Bill of Particulars | Further Specification / Specification of Facts |
| Motion to Compel | Minute / Preliminary Plea / Note of Appeal |
| Plaintiff | Pursuer |
| Defendant (civil) | Defender |
| Complaint | Initial Writ / Summons |
| FRCP | RCS / Sheriff Court Ordinary Cause Rules |
| ECF e-filing | Civil Online (Sheriff Court) / eVault (Court of Session) |
| Attorney | Solicitor / Advocate |
| Deposition | Commission to take evidence |
| Privilege log | Confidentiality claim (may need court ruling) |
| Meet and confer | Pre-action correspondence / minute of proposals |

### Provider Check
- [ ] Track confirmed: civil or criminal; if criminal, solemn or summary
- [ ] Governing rules identified (RCS, Sheriff Court Rules, or Criminal Procedure Act 1995)
- [ ] No FRCP references left unmapped (mark any with `[SCOTS VERIFY]`)
- [ ] Commission and Diligence procedure confirmed with instructing solicitor (messenger-at-arms / sheriff officer required for execution)
- [ ] Crown disclosure duties confirmed under Criminal Procedure (Scotland) Act 1995
- [ ] All citation numbers verified against current Scottish legislation (rules can change)
- [ ] Confidentiality handled via Scottish rules (no US-style privilege logs)

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
