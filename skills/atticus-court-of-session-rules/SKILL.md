---
name: atticus-court-of-session-rules
language: en
description: Uses the local Markdown-normalized Rules of the Court of Session corpus for Scottish Court of Session procedure, source logs, rule checks, drafting, review, and bundle preparation. [Atticus UK/Scots refined]
tags:
- SCOTS, UK, Scotland, Court of Session, rules, procedure, source-verification
atticus_refined: true
jurisdiction_focus: Scotland / Court of Session
requires_live_source_verification: true
external_action_mode: prepare-only unless operator explicitly authorises filing/service/sending
---

# Atticus Court of Session Rules

## Purpose

Use the harness-owned, Markdown-normalized Rules of the Court of Session corpus
as the first procedural source for Court of Session work.

Default harness corpus path:

`legal-corpora/scotcourts/court-of-session-rules`

This focused skill reads the Court of Session rules category inside the broad
ScotCourts corpus. Use it for Court of Session procedure unless a task genuinely
needs forms, guidance, or cross-court comparison.

## Required Use

- When the forum is, may be, or should be checked as the Court of Session, search this corpus before finalising procedural route advice, motions, petitions, summonses, service steps, records, productions, proof preparation, reclaiming/appeals, judicial review, commercial action procedure, expenses/QOCS, or bundle/filing checklists.
- Record source-log entries with chapter title, local path, access date, exact rule/rule heading if available, and the proposition supported.
- Treat the corpus as a local official-source snapshot. If currency matters, verify against the current SCTS/public source before filing or serving anything.
- Do not cite chapter names from memory. Search the corpus and cite the exact local source path.

## Harness Commands

- List chapters: `harness rules court-session list --json`
- Search rules: `harness rules court-session search "<issue or procedural step>" --phase <phase_id> --json`
- Build stage context: `harness rules court-session context "<objective>" --phase <phase_id>`
- Build the searchable text cache: `harness rules court-session index`
- Normalize rule originals to Markdown: `harness rules court-session normalize --json`

For Court of Session forms and broader Scotland court documents, use the
separate harness-owned ScotCourts corpus:

- Search forms/guidance: `harness rules scotcourts search "<form or procedural step>" --phase <phase_id> --json`
- Build scoped corpus context: `harness rules scotcourts context "<objective>" --phase <phase_id>`

For Sheriff Court rule/procedure questions, use the separate focused Sheriff
Court rules surface:

- Search Sheriff Court rules: `harness rules sheriff-court search "<issue or procedural step>" --phase <phase_id> --json`
- Build Sheriff Court rule context: `harness rules sheriff-court context "<objective>" --phase <phase_id>`

## Stage Mapping

- Intake/normalisation: citation/application, offices, process, rolls, records, lay support/representation, mode of attendance.
- Evidence/fact extraction: productions, recovery of evidence, vulnerable witnesses, recordings of children, proofs, jury trials.
- Issue spotting and legal research: all chapters when they bear on competency, forum, remedy, procedural route, or specialist proceedings.
- Merits/risk: summary decree, delay, abandonment, caution/security, pursuers' offers, expenses/QOCS, appeals, judicial review, commercial actions.
- Procedural route planning: summonses, petitions, minutes/notes, service/intimation, appearance, defences/answers, motions, amendment, counterclaims, third-party/group procedure, appeals, suspension/interdict, judicial review.
- Document production: summonses, petitions, motions, notes, amendments, records, productions, proof materials, appeal materials, judicial review papers, draft orders, filing/service checklists.
- Verification/hostile review: all procedural steps relied on in a draft, especially service, time limits, competency, motion procedure, productions, proof, appeals, expenses, and judicial review.
- Bundle/war-room assembly: process, rolls, records, productions, recovery, proofs, jury trials, appeals, commercial actions, judicial review, filing checklists.

## Output Discipline

Every procedural proposition should be either:

- verified against a specific local Court of Session chapter/rule extract;
- verified against a current official online source;
- marked as an assumption requiring source verification; or
- rejected as not supported.
