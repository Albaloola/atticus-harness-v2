---
name: legal-opinion-letter
language: en
description: Drafts formal legal opinion letters for corporate and transactional matters with jurisdiction-specific analysis, calibrated conclusion language, and comprehensive qualifications. Use when drafting closing opinion letters, third-party reliance opinions, enforceability opinions, or corporate authority opinions for mergers, acquisitions, financings, or regulatory compliance. [SCOTS]. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, legal, atticus, source-verification, evidence-matrix, hostile-review
atticus_refined: true
jurisdiction_focus: Scotland / UK, unless expressly classified otherwise
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Legal Opinion Letter

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

Produces a formal opinion letter with structured sections: scope, factual recitation, legal analysis, calibrated conclusions, and qualifications. Ensures proper assumptions, citation standards, and reliance limitations.

## Prerequisites

Gather before drafting:

1. **Transaction description** - structure, parties, purpose (M&A, financing, regulatory)
2. **Governing documents** - agreements, corporate records, certificates, resolutions
3. **Jurisdictions** - governing law and jurisdictions requiring analysis
4. **Opinion recipient** - client only or named third-party relying parties
5. **Specific questions** - enumerated legal issues the opinion must address
6. **Exclusions** - matters outside scope (tax, securities, antitrust, etc.)

## Letter Sections

Draft the following sections in order:

### 1. Introduction

Firm letterhead, date, recipient, and "Re:" line. One paragraph identifying the relationship, transaction, and purpose.

### 2. Scope of Opinion

Number each legal question being answered. Explicitly exclude out-of-scope matters:

| Excluded Matter | Note |
|---|---|
| Tax consequences | Advise client to consult tax counsel (CA or solicitor-advocate) |
| Securities law compliance | Advise client to consult FCA-regulated counsel |
| Antitrust / regulatory | Note if applicable; Competition and Markets Authority (CMA) or sector regulator |
| Business judgment / wisdom | Outside legal analysis |
| Laws of non-covered jurisdictions | Identify which are covered |

### 3. Documents Reviewed

Enumerated list with full titles, execution dates, parties, and relevant sections.

### 4. Factual Background

Material facts only. Categorise each:
- **Verified** - confirmed through document review (cite document, section, page)
- **Represented** - accepted as client representations
- **Assumed** - assumed for purposes of the opinion (flag prominently)

### 5. Assumptions

Include standard assumptions (tailor as needed):

- [ ] Signatures genuine and authorised
- [ ] Documents authentic and complete; no undisclosed amendments
- [ ] Signatories had requisite corporate authority
- [ ] No oral modifications to written agreements
- [ ] Entities duly formed and in good standing
- [ ] No insolvency proceedings pending or contemplated
- [ ] No undisclosed facts affecting the analysis

### 6. Legal Analysis

For each scoped question: state applicable law with full citation, apply rule to facts, address counterarguments or ambiguities. Where authority is split, acknowledge directly and explain basis for preferring one line.

**Citation standards:**
- Statutes: current version; note pending amendments `[VERIFY]`
- Cases: confirm not overruled; note binding vs. persuasive; pinpoint cite, Regulations: current SI and effective date, Agency guidance: note persuasive (not binding) weight

### 7. Conclusions

Use calibrated language matched to confidence:

| Confidence | Language |
|---|---|
| High (clear law, undisputed facts) | "It is our opinion that..." |
| Moderate (some ambiguity) | "It is our opinion that it is more likely than not that..." |
| Predictive (court outcome) | "We believe a court would likely conclude that..." |
| Conditional | "Assuming [X], it is our opinion that..." |

Number conclusions parallel to the scoped questions.

### 8. Qualifications and Limitations

- [ ] Opinion as of the letter date; no duty to update
- [ ] Based solely on laws of specified jurisdictions as of opinion date
- [ ] Does not address laws of other jurisdictions
- [ ] Reliance limited to named recipient(s) / client only
- [ ] No distribution or reliance by others without written consent
- [ ] Subject to equitable principles, bankruptcy/insolvency law, public policy
- [ ] Subject to general principles limiting specific remedies

### 9. Signature Block

Solicitor/Advocate name, practising certificate/roll number, jurisdiction, title, firm, contact. For firm opinions, clarify signing capacity and whether institutional.

## Pitfalls

- **Scope creep** - never opine beyond enumerated questions; unsolicited opinions create unintended liability
- **Certainty calibration** - excessive hedging is as problematic as overstatement; use the table deliberately
- **Citation verification** - never cite from memory; mark uncertain citations `[VERIFY]`
- **Third-party reliance** - identify relying parties by name; time-limit reliance where appropriate
- **Local counsel** - if opining on a jurisdiction where drafter is not admitted or entitled to practise, note basis for confidence
- **Length** - typically 3-10 pages; do not pad with background law that adds no analytical value

## Scotland/UK Adaptation

This skill has been adapted from US legal practice to Scots/UK law.

### Key Terminology Changes

| US Term | UK/Scotland Equivalent |
|---|---|
| Attorney | Solicitor or Advocate (depending on court rights) |
| Bar admission | Practising certificate (solicitor) / Faculty of Advocates admission |
| Plaintiff | Pursuer |
| Defendant | Defender |
| Trial (civil) | Proof |
| Summary Judgment | Summary Decree |
| Discovery | Commission and Diligence |
| Injunction | Interdict |
| Preliminary Injunction / TRO | Interim Interdict |
| Complaint (civil) | Initial Writ / Summons / Claim Form |
| Federal Rules of Civil Procedure | Act of Sederunt / Sheriff Court Rules / Rules of the Court of Session |
| SEC (Securities and Exchange Commission) | FCA (Financial Conduct Authority) |
| Antitrust law | Competition law (Competition Act 1998, retained EU principles) |
| IRS | HMRC |
| UCC (Uniform Commercial Code) | Sale of Goods Act 1979 / Commercial Agents Regulations |
| Good standing certificate | Certificate of incorporation / Certificate of good standing (Companies House) |
| Jury trial (civil) | Jury trial available only in limited Scottish civil cases (e.g. personal injury) |

### Court Hierarchy

| US Court | Scotland Equivalent |
|---|---|
| US District Court | Sheriff Court or Court of Session (Outer House) |
| US Court of Appeals | Sheriff Appeal Court / Court of Session (Inner House) |
| US Supreme Court | UK Supreme Court (for devolution issues and UK-wide appeals from Scotland) |

### Scots Law Particularities

- **Three verdicts**: guilty, not guilty, not proven (criminal)
- **No punitive damages** in Scots law
- **Expenses follow the event** (loser pays, similar to general costs rule but distinct Scottish procedure)
- **Contingency fees**: generally prohibited in Scotland; speculative fee arrangements (speculative, no win, no fee) permitted in certain cases
- **Prescription**: 5-year prescriptive period for delict claims (s.6 Prescription and Limitation (Scotland) Act 1973); 20-year long-stop
- **Legal opinions** in Scotland must be given by a qualified solicitor or advocate; advocates have exclusive rights of audience in the Supreme Court and Court of Session for certain matters

### Statutory References

When this skill references US federal or state statutes, substitute the following UK/Section equivalents where applicable:

- **Companies Act 2006** - corporate capacity, directors' duties
- **Insolvency Act 1986** - corporate and personal insolvency
- **Financial Services and Markets Act 2000** - regulated activities
- **Competition Act 1998** - anti-competitive agreements and abuse of dominance
- **Enterprise Act 2002** - merger control and market investigations
- **Sale of Goods Act 1979** - goods contracts
- **Consumer Rights Act 2015** - consumer protections
- **Law Reform (Miscellaneous Provisions) (Scotland) Act 1990** - solicitors' rights of audience, conveyancing

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
