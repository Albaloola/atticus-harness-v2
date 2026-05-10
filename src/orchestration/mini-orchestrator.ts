import { WorkerAgent } from './worker.js';
import { createTask, updateTask } from '../state/tasks.js';
import { createRun, updateRun } from '../state/runs.js';
import { appendEvent } from '../state/events.js';
import { listCandidates } from '../storage/candidate.js';
import { DEFAULTS } from '../config/schema.js';
import { selectModelForTask } from '../config/model-routing.js';
import { DEFAULT_MAX_CONCURRENCY, normalizePositiveInteger, remainingDepth } from './limits.js';
import { allowedToolsForPhase } from './phase-tools.js';
import { classifyMatterPosture, isRetrospectiveAppellatePosture, phaseWorkerTitlesForPosture } from './contracts.js';
import type { MiniOrchestratorInput, AgentStructuredResult } from './types.js';
import type { TaskDagNode } from '../types/state.js';

const DEFAULT_WORKER_RECOVERY_RETRIES = DEFAULTS.autonomy.gateFeedback.maxWorkerRetries;

export class MiniOrchestrator {
  private input: MiniOrchestratorInput;

  constructor(input: MiniOrchestratorInput) {
    this.input = input;
  }

  async execute(): Promise<AgentStructuredResult> {
    const { matterName, phase, objective, maxDepth, maxConcurrency, parentRunId, phaseTaskId, runtime } = this.input;
    const phaseName = phase?.id || 'unknown';
    const providerPolicy = this.input.providerPolicy ?? DEFAULTS.providerPolicy;
    const phaseAllowedTools = allowedToolsForPhase(phaseName, {
      allowNetwork: Boolean(this.input.autonomy?.autoApproveWeb),
    });
    const miniModel = selectModelForTask({
      providerPolicy,
      role: 'mini_orchestrator',
      phaseId: phaseName,
      objective,
    });
    const miniRun = createRun({
      matterName,
      model: miniModel,
      parentRunId,
      agentType: 'mini_orchestrator',
      role: 'mini_orchestrator',
      prompt: objective,
    });

    runtime?.trackRun(miniRun.id);

    try {
      await appendEvent({
        matterName,
        type: 'agent.spawned',
        runId: miniRun.id,
        taskId: phaseTaskId,
        source: 'agent',
        data: { role: 'mini_orchestrator', phase: phaseName, objective: objective.substring(0, 200) },
      }).catch(() => {});

      const candidateIdsBeforePhase = await this.safeCandidateIds(matterName);
      const workers = this.decompose(objective, phaseName);
      const results: AgentStructuredResult[] = [];
      const limit = Math.min(normalizePositiveInteger(maxConcurrency, DEFAULT_MAX_CONCURRENCY), Math.max(workers.length, 1));
      const childMaxDepth = remainingDepth(maxDepth, 1);

      for (let i = 0; i < workers.length; i += limit) {
        await runtime?.applyControlCommands(miniRun.id);
        await runtime?.waitIfPaused(miniRun.id);
        if (runtime?.isAborted()) break;

        const batch = workers.slice(i, i + limit);
        const batchResults = await Promise.all(
          batch.map(async (w) => {
            const task = createTask({
              matterName,
              kind: 'worker',
              type: phaseName,
              title: w.title,
              parentId: phaseTaskId,
              priority: 'medium',
              depth: 2,
              assignedAgent: 'worker',
              data: { objective: w.title },
            });

            appendEvent({ matterName, type: 'task.created', source: 'agent', data: { taskId: task.id, title: w.title } }).catch(() => {});

            const worker = new WorkerAgent({
              spawn: {
                matterName,
                parentRunId: miniRun.id,
                taskId: task.id,
                role: 'worker',
                title: w.title,
                objective: w.title,
                contextPack: this.phaseContextPack(phaseName, objective, w.title),
                allowedTools: phaseAllowedTools,
                maxTurns: 15,
                maxDepth: childMaxDepth,
                depth: 2,
                phaseId: phaseName,
              },
              model: selectModelForTask({
                providerPolicy,
                role: 'worker',
                phaseId: phaseName,
                title: w.title,
                objective: w.title,
              }),
              runtime,
              autonomy: this.input.autonomy,
            });

            updateTask(matterName, task.id, {
              status: 'in_progress',
              runId: worker.getRunId,
            } as Parameters<typeof updateTask>[2]);
            let result = await worker.execute();
            const maxRecoveryRetries = this.workerRecoveryRetries();
            let retryTaskId: string | undefined;

            if (isRecoverableWorkerStatus(result.status) && maxRecoveryRetries > 0 && !runtime?.isAborted()) {
              updateTask(matterName, task.id, {
                status: 'blocked',
                blockedReason: `Retry in progress after ${result.status}: ${result.summary}`,
                data: {
                  phaseId: phaseName,
                  recoveryOutcome: 'retry_in_progress',
                  maxRecoveryRetries,
                  artifactIds: result.artifactIds,
                  blocker: buildTaskBlocker('worker_retry_in_progress', task.id, result.summary, 'medium'),
                },
              } as Parameters<typeof updateTask>[2]);

              retryTaskId = this.createWorkerRetryTask({
                matterName,
                phaseName,
                phaseTaskId,
                originalTask: task,
                result,
                maxRecoveryRetries,
              });

              const retryResult = await this.executeWorkerRetry({
                matterName,
                miniRunId: miniRun.id,
                phaseName,
                originalTitle: w.title,
                retryTaskId,
                priorResult: result,
                providerPolicy,
                childMaxDepth,
              });

              if (retryResult.status === 'completed') {
                updateTask(matterName, task.id, {
                  status: 'completed',
                  data: {
                    phaseId: phaseName,
                    recoveryOutcome: 'recovered_by_retry',
                    retryTaskId,
                    maxRecoveryRetries,
                    artifactIds: retryResult.artifactIds,
                  },
                } as Parameters<typeof updateTask>[2]);
                return retryResult;
              }

              result = retryResult;
            }

            if (result.status === 'failed') {
              updateTask(matterName, task.id, {
                status: 'failed',
                blockedReason: result.summary,
                data: {
                  failureReason: result.summary,
                  phaseId: phaseName,
                  recoveryOutcome: 'spawn_replacement',
                  retryTaskId,
                  maxRecoveryRetries,
                  artifactIds: result.artifactIds,
                  blocker: buildTaskBlocker('worker_failed', task.id, result.summary, 'high'),
                },
              } as Parameters<typeof updateTask>[2]);
            } else if (result.status === 'blocked' || result.status === 'needs_followup') {
              updateTask(matterName, task.id, {
                status: 'blocked',
                blockedReason: result.summary,
                data: {
                  blockReason: result.summary,
                  phaseId: phaseName,
                  recoveryOutcome: 'spawn_replacement',
                  retryTaskId,
                  maxRecoveryRetries,
                  artifactIds: result.artifactIds,
                  blocker: buildTaskBlocker('worker_blocked', task.id, result.summary, 'medium'),
                },
              } as Parameters<typeof updateTask>[2]);
            } else {
              updateTask(matterName, task.id, {
                status: 'completed',
                blockedReason: null,
                data: {
                  phaseId: phaseName,
                  artifactIds: result.artifactIds,
                  resultStatus: result.status,
                  summary: result.summary,
                },
              } as Parameters<typeof updateTask>[2]);
            }

            return result;
          })
        );
        results.push(...batchResults);
      }

      const candidateIdsAfterPhase = await this.safeCandidateIds(matterName);
      const submittedCandidateIds = [...candidateIdsAfterPhase].filter((id) => !candidateIdsBeforePhase.has(id));
      const phaseCandidateIds = await this.safePhaseCandidateIds(matterName, phaseName);
      const synthesized = this.synthesize(
        phaseName,
        objective,
        workers.length,
        results,
        Boolean(runtime?.isAborted()),
        [...new Set([...submittedCandidateIds, ...phaseCandidateIds])],
      );
      updateRun(matterName, miniRun.id, {
        status: synthesized.status === 'failed' ? 'error' : synthesized.status === 'blocked' ? 'blocked' : 'completed',
        summary: synthesized.summary,
      });
      await appendEvent({
        matterName,
        type: synthesized.status === 'failed' ? 'agent.run.error' : synthesized.status === 'blocked' ? 'agent.run.blocked' : 'agent.run.completed',
        runId: miniRun.id,
        taskId: phaseTaskId,
        source: 'orchestration',
        data: {
          role: 'mini_orchestrator',
          phase: phaseName,
          status: synthesized.status,
          findingCount: synthesized.findings.length,
          riskCount: synthesized.risks.length,
        },
      }).catch(() => {});
      return synthesized;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      updateRun(matterName, miniRun.id, {
        status: 'error',
        summary: `Mini-orchestrator failed: ${msg}`,
        error: msg,
      });
      await appendEvent({
        matterName,
        type: 'agent.run.error',
        runId: miniRun.id,
        taskId: phaseTaskId,
        source: 'orchestration',
        data: { role: 'mini_orchestrator', phase: phaseName, error: msg },
      }).catch(() => {});
      return {
        status: 'failed',
        summary: `Mini-orchestrator failed: ${msg}`,
        findings: [],
        risks: [{ risk: msg, severity: 'high', mitigation: 'Escalate phase to operator' }],
        proposedTasks: [],
        artifactIds: [],
        nextActions: ['Escalate phase to operator'],
      };
    } finally {
      runtime?.untrackRun(miniRun.id);
    }
  }

  private createWorkerRetryTask(input: {
    matterName: string;
    phaseName: string;
    phaseTaskId?: string;
    originalTask: TaskDagNode;
    result: AgentStructuredResult;
    maxRecoveryRetries: number;
  }): string {
    const retryTask = createTask({
      matterName: input.matterName,
      kind: 'worker_retry',
      type: input.phaseName,
      title: `Retry: ${input.originalTask.title}`,
      parentId: input.phaseTaskId,
      priority: 'high',
      depth: (input.originalTask.depth ?? 2) + 1,
      assignedAgent: 'worker',
      data: {
        retryOf: input.originalTask.id,
        phaseId: input.phaseName,
        retryAttempt: 1,
        maxRecoveryRetries: input.maxRecoveryRetries,
        retryReason: input.result.summary,
        retryStatus: input.result.status,
        priorAttemptIds: [input.originalTask.id],
        recoveryOutcome: 'spawn_replacement',
      },
    });

    appendEvent({
      matterName: input.matterName,
      type: 'task.created',
      source: 'orchestration',
      data: {
        taskId: retryTask.id,
        title: retryTask.title,
        retryOf: input.originalTask.id,
        phase: input.phaseName,
        recoveryOutcome: 'spawn_replacement',
      },
    }).catch(() => {});

    return retryTask.id;
  }

  private async executeWorkerRetry(input: {
    matterName: string;
    miniRunId: string;
    phaseName: string;
    originalTitle: string;
    retryTaskId: string;
    priorResult: AgentStructuredResult;
    providerPolicy: MiniOrchestratorInput['providerPolicy'];
    childMaxDepth: number;
  }): Promise<AgentStructuredResult> {
    const retryObjective = [
      `Retry the worker task after a ${input.priorResult.status} result.`,
      `Original task: ${input.originalTitle}`,
      `Prior summary: ${input.priorResult.summary}`,
      'Use the prior attempt as context, avoid repeating failed search paths, and return a bounded JSON result.',
      'If the missing item is not applicable or unavailable from the persisted matter evidence, return status "completed" with a finding explaining the gap.',
    ].join('\n');

    const retryWorker = new WorkerAgent({
      spawn: {
        matterName: input.matterName,
        parentRunId: input.miniRunId,
        taskId: input.retryTaskId,
        role: 'worker',
        title: `Retry: ${input.originalTitle}`,
        objective: retryObjective,
        contextPack: this.phaseContextPack(input.phaseName, retryObjective, input.originalTitle),
        allowedTools: allowedToolsForPhase(input.phaseName, {
          allowNetwork: Boolean(this.input.autonomy?.autoApproveWeb),
        }),
        maxTurns: 10,
        maxDepth: input.childMaxDepth,
        depth: 3,
        phaseId: input.phaseName,
      },
      model: selectModelForTask({
        providerPolicy: input.providerPolicy ?? DEFAULTS.providerPolicy,
        role: 'worker',
        phaseId: input.phaseName,
        title: `Retry: ${input.originalTitle}`,
        objective: retryObjective,
      }),
      runtime: this.input.runtime,
      autonomy: this.input.autonomy,
    });

    updateTask(input.matterName, input.retryTaskId, {
      status: 'in_progress',
      runId: retryWorker.getRunId,
    } as Parameters<typeof updateTask>[2]);

    const retryResult = await retryWorker.execute();
    updateTask(input.matterName, input.retryTaskId, {
      status: retryResult.status === 'completed'
        ? 'completed'
        : retryResult.status === 'failed'
          ? 'failed'
          : 'blocked',
      blockedReason: retryResult.status === 'completed' ? null : retryResult.summary,
      data: {
        phaseId: input.phaseName,
        retryStatus: retryResult.status,
        retrySummary: retryResult.summary,
        retryExecutionOutcome: retryResult.status === 'completed' ? 'recovered' : 'retry_unresolved',
        artifactIds: retryResult.artifactIds,
        blocker: retryResult.status === 'completed'
          ? undefined
          : buildTaskBlocker('worker_retry_unresolved', input.retryTaskId, retryResult.summary, retryResult.status === 'failed' ? 'high' : 'medium'),
      },
    } as Parameters<typeof updateTask>[2]);

    return retryResult;
  }

  private workerRecoveryRetries(): number {
    const configured = this.input.autonomy?.gateFeedback?.maxWorkerRetries ?? DEFAULT_WORKER_RECOVERY_RETRIES;
    if (!Number.isFinite(configured) || configured < 0) return DEFAULT_WORKER_RECOVERY_RETRIES;
    return Math.trunc(configured);
  }

  private decompose(objective: string, phase: string): Array<{ title: string }> {
    const postureTitles = phaseWorkerTitlesForPosture(phase, objective);
    if (postureTitles && postureTitles.length > 0) return this.expandWorkerTitles(phase, postureTitles).map((title) => ({ title }));

    let titles: string[];
    switch (phase) {
      case 'intake_and_normalization':
        titles = [
          'Identify parties and timeline',
          'Determine jurisdiction and desired outcome',
          'Assess urgency and deadlines',
        ];
        break;
      case 'evidence_ingestion_and_fact_extraction':
        titles = [
          'Extract key facts from evidence',
          'Build chronology of events',
          'Identify missing evidence gaps',
        ];
        break;
      case 'issue_spotting':
        titles = [
          'Identify potential causes of action',
          'Identify procedural barriers and limitation issues',
          'List possible defences and counterclaims',
        ];
        break;
      case 'law_and_policy_research':
        titles = [
          'Research applicable legislation',
          'Research relevant case law',
          'Check institutional policies and guidance',
        ];
        break;
      case 'merits_and_risk_analysis':
        titles = [
          'Assess strength of claims',
          'Identify evidential weaknesses',
          'Evaluate settlement leverage',
        ];
        break;
      case 'procedural_route_planning':
        titles = [
          'Determine appropriate forum',
          'Check limitation and pre-action steps',
          'Assess costs and funding risks',
        ];
        break;
      case 'document_production':
        titles = [
          'Draft key documents',
          'Prepare witness statements if supported by the record, otherwise document why they are not applicable',
          'Assemble document bundle',
        ];
        break;
      case 'verification_and_hostile_review':
        titles = [
          'Verify all citations',
          'Run hostile review',
          'Check procedural compliance',
        ];
        break;
      case 'bundle_and_war_room_assembly':
        titles = [
          'Create master bundle index',
          'Cross-reference evidence and facts',
          'Prepare a filing checklist from available forum and bundle evidence, noting any unavailable filing data',
        ];
        break;
      case 'operator_handoff':
        titles = [
          'Summarize findings and status from the current run and persisted matter evidence',
          'Identify remaining risks',
          'List next recommended actions',
        ];
        break;
      case 'document_output_pipeline':
        titles = [
          'Classify accepted deliverables for operator-ready output formats',
          'Humanize and format accepted work products into _output documents',
          'Summarize generated files and archived superseded outputs',
        ];
        break;
      default:
        titles = [objective.substring(0, 120)];
    }
    return this.expandWorkerTitles(phase, titles).map((title) => ({ title }));
  }

  private expandWorkerTitles(phase: string, baseTitles: string[]): string[] {
    const target = normalizePositiveInteger(this.input.maxConcurrency, DEFAULT_MAX_CONCURRENCY);
    if (target <= baseTitles.length) return baseTitles;

    const expanded = [...baseTitles];
    for (const title of supplementalWorkerTitles(phase)) {
      if (expanded.length >= target) break;
      if (!expanded.includes(title)) expanded.push(title);
    }

    while (expanded.length < target) {
      expanded.push(`Supplemental ${phase.replace(/_/g, ' ')} lane ${expanded.length + 1}`);
    }
    return expanded.slice(0, target);
  }

  private phaseContextPack(phase: string, objective: string, taskTitle: string): string {
    const lines = [
      `Phase: ${phase}`,
      `Task: ${taskTitle}`,
      'Inventory rule: use matter_inventory for matter manifests, canonical schema guidance, production selection, and bundle indexes before trying direct SQLite.',
      'Finding labels: classify each finding as holding, party_argument, procedural_fact, evidence_fact, risk_signal, unsupported_inference, gap, or not_applicable.',
      'Do not block merely because a live litigation artifact is not needed; after checking the record, return completed with a not_applicable or gap finding.',
    ];

    if (isRetrospectiveAppellatePosture(classifyMatterPosture(objective))) {
      lines.push(
        'Matter mode: retrospective/concluded appellate record. Do not demand live filing, service, deadline, witness, or court-practice-direction artifacts unless the evidence itself asks for current filing work.',
        'Production bridge: call matter_inventory with view="production_candidates" and includeDuplicates=false. Use recommended production candidates as bundle-ready evidence IDs.',
        'Duplicate suppression: select one judgment variant and one press-summary variant; keep party written cases separate; treat interveners as optional unless central to the Scotland-specific objective.',
        'Bundle output: summarize the compact production list, role labels, evidence IDs, and reasons. Put selected evidence IDs in artifactIds so downstream phases can reuse them.',
      );
    }

    if (phase === 'document_production') {
      lines.push(
        'Document-production bridge: turn phase findings and production candidates into a bounded prepare-only document or production index. If drafting is not applicable, produce the production index instead of blocking.',
      );
    }

    if (phase === 'bundle_and_war_room_assembly') {
      lines.push(
        'Bundle assembly bridge: build the bundle index from selected evidence IDs and label each entry by role. For concluded appellate work, filing checklists are retrospective operator notes, not live filing demands.',
      );
    }

    return lines.join('\n');
  }

  private synthesize(
    _phase: string,
    objective: string,
    workerCount: number,
    results: AgentStructuredResult[],
    aborted: boolean,
    submittedCandidateIds: string[] = [],
  ): AgentStructuredResult {
    const allFindings = results.flatMap((r) => r.findings);
    const allRisks = results.flatMap((r) => r.risks);
    const allTasks = results.flatMap((r) => r.proposedTasks || []);
    const allArtifacts = [...new Set([...results.flatMap((r) => r.artifactIds || []), ...submittedCandidateIds])];
    const allActions = results.flatMap((r) => r.nextActions || []);

    const failed = results.filter((r) => r.status === 'failed');
    const blocked = results.filter((r) => r.status === 'blocked' || (r.status === 'needs_followup' && (!hasReducerUsableOutput(r) || isHardNeedsFollowup(r))));
    const softFollowup = results.filter((r) => r.status === 'needs_followup' && hasReducerUsableOutput(r) && !isHardNeedsFollowup(r));
    const incomplete = aborted || results.length < workerCount;
    const allOk = failed.length === 0 && blocked.length === 0 && !incomplete;

    return {
      status: allOk ? 'completed' : (failed.length > 0 ? 'failed' : 'blocked'),
      summary: `Phase synthesis: ${results.length}/${workerCount} workers, ${allFindings.length} findings, ${allRisks.length} risks${incomplete ? '; phase stopped before all workers completed' : ''}`,
      findings: allFindings.slice(0, 20),
      risks: [
        ...allRisks,
        ...softFollowup.map((result) => ({
          risk: `Worker needed follow-up but produced reducer-usable output: ${result.summary}`,
          severity: 'medium' as const,
          mitigation: 'Treat the worker result as usable with review caveats; do not block downstream phase sequencing solely on this warning.',
        })),
      ].slice(0, 20),
      proposedTasks: allTasks.slice(0, 10),
      artifactIds: allArtifacts.slice(0, 20),
      nextActions: (incomplete ? ['Resume or rerun the phase'] : allActions).slice(0, 10),
    };
  }

  private async safeCandidateIds(matterName: string): Promise<Set<string>> {
    try {
      const candidates = await listCandidates(matterName);
      return new Set(candidates.map((candidate) => candidate.id));
    } catch {
      return new Set();
    }
  }

  private async safePhaseCandidateIds(matterName: string, phaseName: string): Promise<string[]> {
    try {
      const candidates = await listCandidates(matterName);
      return candidates
        .filter((candidate) => candidate.metadata?.phase === phaseName)
        .map((candidate) => candidate.id);
    } catch {
      return [];
    }
  }
}

function isRecoverableWorkerStatus(status: AgentStructuredResult['status']): boolean {
  return status === 'failed' || status === 'blocked' || status === 'needs_followup';
}

function supplementalWorkerTitles(phase: string): string[] {
  switch (phase) {
    case 'intake_and_normalization':
      return [
        'Map protected characteristics, vulnerabilities, and reasonable-adjustment needs',
        'Identify procedural posture across courts, regulators, and institutions',
        'Extract remedies sought and rank practical outcomes',
        'Inventory evidence anchors and source IDs for downstream use',
        'Identify assumptions, contradictions, and missing instructions',
        'Map adverse parties, decision-makers, and service/contact details',
        'Assess limitation, prescription, and deadline pressure from the record',
        'Identify parallel proceedings, complaints, and appeals',
        'Normalize key names, dates, places, and reference numbers',
        'Prepare intake summary candidate with evidence-linked open questions',
        'Separate facts, submissions, holdings, and operator instructions',
        'Identify non-issues and known QC exceptions that should not block the run',
      ];
    case 'evidence_ingestion_and_fact_extraction':
      return [
        'Extract source-linked fact table by party, date, and issue',
        'Assess evidence reliability, provenance, and duplicate handling',
        'Map procedural records and court or regulator correspondence',
        'Extract medical, welfare, and vulnerability evidence facts',
        'Extract financial, loss, and quantification evidence facts',
        'Extract SAR, data protection, and records-access evidence facts',
        'Extract education, professional, and institutional evidence facts',
        'Build contradiction and corroboration matrix',
        'Select high-value quotations with source IDs and chunk references',
        'Map productions and bundle-ready evidence candidates',
        'Identify evidence requiring OCR, transcript, or password handling',
        'Prepare evidence summary candidate for reducer ingestion',
      ];
    case 'issue_spotting':
      return [
        'Identify equality and discrimination issues',
        'Identify public law and judicial review issues',
        'Identify data protection, FOI, and records-access issues',
        'Identify negligence, delict, contract, and misrepresentation issues',
        'Identify education, regulatory, and professional standards issues',
        'Identify human rights and procedural fairness issues',
        'Map remedies, orders, compensation, and non-monetary relief',
        'Map jurisdiction, forum, standing, and competency objections',
        'Map causation and loss issues',
        'Map party-specific liability and attribution',
        'Identify regulator complaint routes and admissibility issues',
        'Prepare issue map synthesis with evidence anchors',
      ];
    case 'law_and_policy_research':
      return [
        'Research Scottish civil procedure and forum requirements',
        'Research judicial review standards, time limits, and remedies',
        'Research equality and disability discrimination authorities',
        'Research GDPR, Data Protection Act, and ICO complaint standards',
        'Research SPSO admissibility, maladministration, and exhaustion rules',
        'Research GMC fitness-to-practise and complaint triage standards',
        'Research SLCC admissibility and legal-services complaint standards',
        'Research human rights and procedural fairness authorities',
        'Research delict, contract, and damages principles',
        'Research limitation, prescription, mora, and delay defences',
        'Research expenses, funding, and protective costs issues',
        'Prepare citation-checked authorities map for drafting',
      ];
    case 'merits_and_risk_analysis':
      return [
        'Assess causation and remoteness risks',
        'Assess quantum, remedies, and proof of loss',
        'Assess jurisdiction, competency, and standing risks',
        'Assess limitation, prescription, mora, and delay risks',
        'Assess evidential admissibility and credibility risks',
        'Assess likely institutional and regulator responses',
        'Assess settlement posture and negotiation leverage',
        'Assess costs, expenses, and funding exposure',
        'Assess reputational, welfare, and practical risks',
        'Develop strongest case theory and fallback positions',
        'Identify claims to abandon or treat cautiously',
        'Prepare merits memorandum with risk-ranked recommendations',
      ];
    case 'procedural_route_planning':
      return [
        'Plan judicial review route, remedies, permission issues, and deadlines',
        'Plan ordinary action route, pleadings, service, and adjustment steps',
        'Plan ICO complaint route and supporting evidence package',
        'Plan SPSO complaint route and exhaustion requirements',
        'Plan GMC complaint route and evidential thresholds',
        'Plan SLCC complaint route and admissibility requirements',
        'Map pre-action correspondence and protocol-style steps',
        'Map interim remedies, urgent applications, and protective steps',
        'Map service addresses, parties, and representative information',
        'Create deadline calendar and sequencing strategy',
        'Identify forms, fees, and filing logistics from available evidence',
        'Prepare procedural route plan with decision tree',
      ];
    case 'document_production':
      return [
        'Draft judicial review petition skeleton and remedies section',
        'Draft judicial review statement of facts with source anchors',
        'Draft ordinary action summons or claim narrative',
        'Draft ordinary action crave, pleas-in-law, and remedies outline',
        'Draft pre-action or letter-before-action package',
        'Draft ICO complaint with chronology and data-rights breaches',
        'Draft SPSO complaint with maladministration and injustice sections',
        'Draft GMC complaint with fitness-to-practise concerns',
        'Draft SLCC complaint with service and conduct issues',
        'Draft schedule of loss and non-monetary remedies appendix',
        'Draft source and citation table for all produced documents',
        'Draft master action plan and operator filing checklist',
      ];
    case 'verification_and_hostile_review':
      return [
        'Audit factual claims against source IDs and evidence chunks',
        'Audit legal authorities and citation accuracy',
        'Audit arithmetic, loss calculations, and remedy consistency',
        'Audit limitation, prescription, and deadline calculations',
        'Audit court-rule and regulator admissibility compliance',
        'Run opponent defences and strike-out challenge',
        'Run institutional-response and regulator-threshold challenge',
        'Check document completeness against Phase 11 deliverable list',
        'Check consistency across chronology, pleadings, and complaints',
        'Check source-discipline warnings and unsupported inferences',
        'Identify evidence gaps that require operator action',
        'Prepare hostile review report with fix-forward tasks',
      ];
    case 'bundle_and_war_room_assembly':
      return [
        'Prepare judicial review production bundle index',
        'Prepare ordinary action production bundle index',
        'Prepare regulator complaint evidence packets',
        'Prepare chronology and key-events bundle',
        'Prepare authorities and policy bundle',
        'Select compact production set and suppress duplicates',
        'Create pagination, labels, and exhibit references',
        'Create war-room issue-to-evidence map',
        'Create deadline tracker and action register',
        'Create service and filing readiness pack',
        'Create evidence gaps appendix',
        'Prepare bundle summary candidate for reducer ingestion',
      ];
    case 'operator_handoff':
      return [
        'Map accepted artifacts to requested Phase 11 deliverables',
        'Summarize filing readiness and blockers by route',
        'Summarize urgent deadlines and next human actions',
        'Summarize evidence gaps and verification caveats',
        'Summarize provider, policy, and run-health audit trail',
        'Summarize cost, token, and concurrency observations',
        'Prepare operator review checklist',
        'Prepare external-advice and escalation points',
        'Prepare accepted-artifact manifest and file map',
        'Prepare known non-issues and QC exception notes',
        'Prepare rerun or repair recommendations',
        'Prepare final handoff report candidate',
      ];
    case 'document_output_pipeline':
      return [
        'Format judicial review outputs for operator-ready review',
        'Format ordinary action outputs for operator-ready review',
        'Format ICO, SPSO, GMC, and SLCC complaints',
        'Format master action plan and deadline tracker',
        'Create output manifest and artifact crosswalk',
        'Create source appendix and citation index',
        'Archive superseded outputs and mark latest versions',
        'Run output quality checks for missing deliverables',
        'Run filename, metadata, and index consistency checks',
        'Prepare export readiness summary',
        'Prepare operator bundle index',
        'Prepare final output summary candidate',
      ];
    default:
      return [];
  }
}

function hasReducerUsableOutput(result: AgentStructuredResult): boolean {
  return result.findings.length > 0 ||
    result.risks.length > 0 ||
    result.proposedTasks.length > 0 ||
    result.artifactIds.length > 0 ||
    result.nextActions.length > 0;
}

function isHardNeedsFollowup(result: AgentStructuredResult): boolean {
  const text = [
    result.summary,
    ...result.risks.map((risk) => `${risk.risk} ${risk.mitigation}`),
    ...result.nextActions,
  ].join('\n');
  return /\b(policy|forbidden|unauthori[sz]ed|blocked by policy|web_search used while autonomy)\b/i.test(text);
}

function buildTaskBlocker(
  type: string,
  objectId: string,
  reason: string,
  severity: 'medium' | 'high',
): Record<string, unknown> {
  return {
    type,
    objectId,
    reason,
    severity,
    remediation: 'Inspect the worker run events and rerun the task or phase after resolving the blocker.',
  };
}
