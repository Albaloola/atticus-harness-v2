# Omer Elbushra Ultimate Benchmark

Generated on 2026-05-09 for matter `omer-elbushra-ultimate-benchmark`.

## Executive Result

The benchmark reached terminal completion after ingesting the five local case-file roots and running the full 10-stage orchestration with concurrency 15.

- Matter: `matters/omer-elbushra-ultimate-benchmark`
- Run ID: `189d28a8-a12f-46a7-a1c7-7beb7078d4f0`
- Runtime log: `/home/alba/.atticus-harness/runtime/run-189d28a8-a12f-46a7-a1c7-7beb7078d4f0.log`
- Terminal status: `completed`
- Run summary: `10/10 phases completed, 0 blocked, 120 findings, 55 risks`
- Worker scale: 10 mini-orchestrators, 30 worker runs, 450 worker turns, 1,112 tool calls

The run proved that the harness can ingest and search a large messy matter, preserve local provenance, separate major procedural tracks, and complete the 10-stage orchestration. It also exposed two harness weaknesses that were fixed during the benchmark: PDF long-text extraction/OCR overuse and weak worker completions being accepted too easily.

## Source Roots

| Root | Files |
| --- | ---: |
| `/home/alba/Documents/Case File/` | 2,980 |
| `/home/alba/Documents/Ordinary Action/` | 274 |
| `/home/alba/Documents/Judicial Review/` | 203 |
| `/home/alba/Documents/SLCC Complaint/` | 36 |
| `/home/alba/Documents/Clarity Simplicity Files/` | 166 |

Inventory total: 3,659 files, 6,204,103,947 bytes, 2,771 unique SHA-256 hashes.

## Counts By File Type

| Extension | Count |
| --- | ---: |
| `.pdf` | 2,409 |
| `.msg` | 690 |
| `.docx` | 226 |
| `.md` | 144 |
| `.eml` | 87 |
| `.m4a` | 19 |
| `.png` | 17 |
| `.mp3` | 16 |
| `.csv` | 11 |
| `.zip` | 8 |
| `.wav` | 7 |
| `.txt` | 6 |
| `.mp4` | 3 |
| `.doc`, `.jpg`, `.json`, `.mkv`, `.ods`, `.xlsx` | 2 each |
| `[none]`, `.html`, `.rtf`, `.vtt` | 1 each |

## Ingestion

The intake runner is `benchmarks/omer-elbushra-ultimate-benchmark/run-intake.mjs`. It recursively inventories the five roots, hashes every file, writes duplicate and variant reports, copies unique files into matter storage, records source-root metadata, extracts text, chunks it, and updates both legacy and v2 evidence indexes.

Matter totals after the final resume pass:

| Status | Count |
| --- | ---: |
| Approved/indexed | 2,720 |
| QC failed | 51 |
| Exact duplicate source copies suppressed | 888 |
| Matter evidence records | 2,771 |
| Indexed chunks | 29,633 |
| Indexed text characters | 189,409,243 |

Approved formats:

| Format | Approved |
| --- | ---: |
| PDF | 1,577 |
| Outlook MSG | 677 |
| Text/Markdown/EML/VTT/CSV/JSON/RTF | 236 |
| DOCX | 209 |
| Image | 18 |
| DOC | 2 |
| HTML | 1 |

QC failures:

- 48 unsupported binary/archive/media files, mostly audio/video/zip-style evidence that needs transcription or binary-aware handling.
- 2 password-protected PDFs: `OME-SRC-0347_1350850 CoP.pdf` and `OME-SRC-0348_Completion of Procedures - 1388476.pdf`.
- 1 corrupt or non-DOCX ZIP-like Word file.

Source provenance is preserved in evidence metadata as `sourceRootLabel`, `sourceRootPath`, `sourceRelativePath`, `originalFileName`, and `inventoryIndex`.

## Duplicate And Variant Findings

The inventory found 472 exact duplicate groups, 386 near-duplicate or variant candidate groups, and 101 email-thread candidate groups.

Largest exact duplicate clusters:

| Count | Canonical item |
| ---: | --- |
| 12 | Shepherd revised meeting note, duplicated across FtP submission, SAR responses, Judicial Review productions, and Ordinary Action productions |
| 11 | Lloyd/Shepherd meeting note variant group with repeated FtP and SAR copies |
| 9 | Senate appeal / PD report / FtP outcome appeal report |
| 9 | 2025-09-01 FtP interim panel outcome letter |
| 8 | Reporting Medical School Welfare Team / SRC complaint material |

Largest variant and email-thread clusters:

- `response to accommodation questionnaire`: 20 MSG files, 20 distinct hashes.
- `tbl peer evaluation and student support`: high-volume SAR email-thread variant cluster.
- Multiple FtP, Senate, SAR, hardship-fund, and meeting-note groups appear as exact duplicates plus renamed productions.

## Timeline Quality

The harness built a usable chronology across the pleadings, production lists, emails, meeting notes, and SAR material. High-confidence anchors identified during orchestration include:

- March 2025 welfare/support and meeting-note sequence, including Shepherd/Lloyd meeting-note disputes.
- June 2025 SRC/campus-access and complaint events.
- July 2025 formal FtP investigation material.
- 2025-08-25 FtP panel hearing materials.
- 2025-09-01 FtP interim outcome/suspension letter.
- October to November 2025 Senate appeal and pre-action correspondence.
- 2025-11-19 Senate FtP appeal decision / PD report.
- 2026-02-25 reconvened FtP exclusion/expulsion decision, as identified in judicial-review pleadings.
- 2026-03 ordinary action and judicial review pleading/procedure documents.

Quality assessment: good enough for issue spotting, hostile review, and production selection, but not yet court-proof. Some timeline documents are analysis memos or draft pleadings rather than primary source documents; the report should always prefer the linked original evidence record when a deadline or procedural fact matters.

## Procedural Track Separation

The orchestration separated these tracks:

- University/FtP/Senate track: internal Fitness to Practise process, panel outcome, Senate appeal, reconvened panel decision, disability-adjustment and procedural-fairness issues.
- Ordinary action track: civil claims and damages framing, including Equality Act, delict/negligence, data protection, and quantified loss materials.
- Judicial review track: Court of Session petition seeking reduction of FtP/Senate/reconvened decisions and declarators.
- SLCC/regulatory complaint track: solicitor/regulatory complaint materials and complaint chronology.
- SAR/data protection track: SAR response files, alleged disclosure gaps, Moodle/SAR logs, GDPR/data-protection analysis.
- SRC/student-union track: SRC ban/access/complaint material and related correspondence.

The main procedural ambiguity is that the dump contains drafts, strategy memos, productions, pleadings, and procedural-history documents together. Filing status, service status, competency, and time-bar points must be checked against primary court/Senate/University documents, not inferred from strategy memos alone.

## Productions Selected

The run and inventory repeatedly surfaced these as core production families:

- Shepherd revised meeting note and related email trail.
- Lloyd/Shepherd meeting note set.
- FtP referral and investigation documents.
- 2025-08-25 FtP hearing material and transcripts/recording transcripts.
- 2025-09-01 FtP interim outcome letter.
- Senate appeal bundle and 2025-11-19 Senate appeal / PD report.
- Judicial Review petition, summons/ordinary-action pleadings, and Court of Session inventory of productions.
- SAR production logs, including the large Moodle activity/SAR log fixed during extraction.
- Hardship/accommodation/financial evidence and schedule-of-loss materials.
- Medical/disability/supporting documents and expert-report placeholders.

The harness identified production candidates, but it did not produce a final court-ready bundle index in the completed run. After the weak-completion fix below, equivalent empty bundle-index completions should now surface as `needs_followup`.

## Orchestration Phases

| Phase | Status | Findings | Risks |
| --- | --- | ---: | ---: |
| Intake and Normalization | completed | 16 | 6 |
| Evidence Ingestion and Fact Extraction | completed | 31 | 10 |
| Issue Spotting | completed | 18 | 9 |
| Law and Policy Research | completed | 17 | 3 |
| Merits and Risk Analysis | completed | 14 | 13 |
| Procedural Route Planning | completed | 4 | 0 |
| Document Production | completed | 0 | 0 |
| Verification and Hostile Review | completed | 5 | 3 |
| Bundle and War Room Assembly | completed | 14 | 2 |
| Operator Handoff | completed | 12 | 9 |

Observed tool failures were non-fatal and mostly useful:

- Chunk-bound misses returned available range and continuation hints, for example `Retry with chunkIndex 77`.
- Worker SQL mistakes exposed schema guidance, for example `chunk_count`, `evidenceId`, `file_path`, `productionCategory`, `category`, and `root_path` do not exist as direct columns.
- Some workers attempted local bare filenames that only existed in matter evidence, not repo root.
- Several evidence records had no indexed chunks because they were unsupported media, password-protected PDFs, or otherwise QC-failed.

## Fixes Made During Benchmark

Extraction and ingestion hardening:

- Added `.msg` as an Outlook email format and low-confidence `msg_strings` extraction so SAR email dumps are searchable.
- Added `.eml` and `.vtt` as text formats.
- Stopped classifying every ZIP magic header as DOCX; generic ZIP/XLSX/ODS-style archives now become `unknown` unless the extension is DOCX/DOTX.
- Replaced blind unknown-format plain-text fallback with a sample-based text check so audio/video binaries do not become garbage text.
- Increased PDF `pdftotext` buffer to 128 MiB and added an OCR gate that skips OCR when a page already has meaningful searchable text. This fixed the large Moodle/SAR PDF that previously overflowed `execFile` stdout and tried to OCR hundreds of already-searchable pages.

Orchestration quality hardening:

- Added a worker-synthesis quality gate. A worker result that says `completed` but has no reducer-usable findings, risks, artifacts, proposed tasks, or next actions, or whose summary admits only process chatter, is converted to `needs_followup` with a mitigation risk.
- Applied the same gate to directly parsed worker JSON before run state/events are marked completed.
- Added regression coverage for both synthesized and directly parsed weak-completion paths.

## Verification

Commands run:

```bash
npm run build
npm test
npm test -- tests/unit/extraction.test.ts
npm test -- tests/unit/worker-synthesis.test.ts tests/unit/extraction.test.ts
node --check benchmarks/omer-elbushra-ultimate-benchmark/run-intake.mjs
node dist/cli.js orchestrate omer-elbushra-ultimate-benchmark --objective "<private benchmark objective>" --max-depth 3 --concurrency 15 --background --json
```

Final post-fix verification:

- `npm run build`: passed.
- `npm run lint`: passed.
- `npm test -- tests/unit/pdf-extraction.test.ts tests/unit/extraction.test.ts tests/unit/worker-synthesis.test.ts`: 3 files, 26 tests passed.
- `npm test -- tests/unit/worker-synthesis.test.ts tests/unit/orchestration.test.ts`: 2 files, 22 tests passed.
- `npm test`: 40 files, 528 tests passed.

## Final Case Understanding

The matter is a multi-track Scottish dispute arising from University of Glasgow medical-school/Fitness to Practise events involving disability, welfare/support handling, alleged victimisation/discrimination, procedural fairness, SAR/data-protection disputes, SRC access/ban issues, and later litigation/regulatory tracks. The current evidence dump is not a single clean court bundle; it is a merged intake set containing primary documents, duplicate productions, SAR disclosure, transcripts, audio/video originals, pleadings, draft strategy documents, correspondence, complaints, and analysis memos.

The strongest harness-level understanding is procedural and evidential: the case theory depends on a defensible chronology linking protected acts/support requests, meeting-note disputes, FtP referral/proceedings, Senate appeal, reconvened decision, and court/regulatory follow-on documents. The harness can now search and reason across that corpus, but it must keep draft strategy, pleadings, and primary evidence distinct.

## Remaining Risks

- Audio/video evidence remains metadata-only or QC-failed unless transcribed.
- Password-protected PDFs need passwords or an operator-supplied replacement copy.
- MSG extraction is intentionally low confidence because no full Outlook MSG parser is installed; it is enough for search triage, not definitive email rendering.
- The completed benchmark run predates the weak-completion quality gate, so some phase summaries in run `189d28a8-a12f-46a7-a1c7-7beb7078d4f0` should be treated as benchmark evidence of the bug, not as fully trusted work product.
- Court/procedure status and limitation points need primary-document verification before reliance because drafts, pleadings, and strategy memos are intermingled.
- No external actions were taken. Nothing was filed, sent, served, emailed, or disclosed.

## Reproduction Paths

- Inventory artifacts: `benchmarks/omer-elbushra-ultimate-benchmark/inventory.json`
- Duplicate groups: `benchmarks/omer-elbushra-ultimate-benchmark/duplicate-groups.json`
- Variant groups: `benchmarks/omer-elbushra-ultimate-benchmark/variant-candidates.json`
- Email thread candidates: `benchmarks/omer-elbushra-ultimate-benchmark/email-thread-candidates.json`
- Ingestion report: `benchmarks/omer-elbushra-ultimate-benchmark/ingestion-report.json`
- Matter evidence DB: `matters/omer-elbushra-ultimate-benchmark/_evidence.db`
- Orchestration DB: `matters/omer-elbushra-ultimate-benchmark/_state/matter.sqlite`
- Event log: `matters/omer-elbushra-ultimate-benchmark/_state/events.jsonl`

To reproduce the weak-completion issue from the original run, inspect worker summaries in `agent_runs` for phrases such as `process chatter`, `task was not addressed`, or `not advanced beyond data retrieval`. New runs after the quality-gate fix should mark equivalent outputs as `needs_followup`.
