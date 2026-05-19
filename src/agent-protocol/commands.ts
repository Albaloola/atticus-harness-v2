import { randomUUID } from 'crypto';
import type { CaseStateDocument, ExternalActionRecord } from '../case-state/schema.js';
import { addCommunication, addDeadline, addWorkProductReference, createCaseState } from '../case-state/mutations.js';
import { applyCaseStateMutation, getCaseStateDocumentOrCreate, loadCaseStateDocument } from '../case-state/store.js';
import { listPendingQuestionsFromStore, syncQuestionsForMatter } from '../questions/generate.js';
import { submitQuestionAnswer } from '../questions/answers.js';
import { generateObligationsFromCaseState } from '../case-manager/obligation-engine.js';
import { pickNextObligation, selectWorkObligations } from '../case-manager/work-selector.js';
import type { CaseObligationSet } from '../case-manager/obligation-types.js';
import type { UnknownWorkProduct, WorkProductPayloadByType, WorkProductType } from '../work-products/types.js';
import { isWorkProductType } from '../work-products/types.js';
import { upsertWorkProduct } from '../work-products/store.js';
import { buildAgentStatusPacket } from './status-packets.js';
import {
  type AgentCommand,
  type AgentCommandName,
  type AgentCommandResponse,
  type AgentDiagnosticSummary,
  type AgentUserSummary,
} from './protocol.js';

type CaseStatus = CaseStateDocument['state']['status'];

export async function executeAgentCommand(command: AgentCommand): Promise<AgentCommandResponse> {
  const runId = command.runId ?? randomUUID();
  const actor = command.actor ?? command.source ?? 'agent';
  const source = command.source ?? 'agent';
  const actorDisplay = actor.charAt(0).toUpperCase() + actor.slice(1);

  switch (command.command) {
    case 'start_case_management': {
      const document = await createCaseState({
        matterName: command.matterName,
        context: {
          source,
          actor,
          summary: `${actorDisplay} case management started`,
        },
      });

      await addCommunication(
        command.matterName,
        {
          type: 'incoming',
          channel: source,
          subject: 'Case instruction',
          summary: command.instruction,
          occurredAt: new Date().toISOString(),
        },
        {
          source,
          actor,
          summary: `${actorDisplay} case instruction received`,
        },
      );

      await setCaseStatus(command.matterName, 'active', {
        source,
        actor,
        summary: 'Case status set to active',
      });

      await syncQuestionsForMatter({ matterName: command.matterName });
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: `Case management started for ${command.matterName}.`,
        data: {
          caseRevision: document.revision,
          instructionsRecorded: true,
        },
      };
    }

    case 'submit_user_instruction': {
      await createCaseState({ matterName: command.matterName, context: { source, actor } });
      await addCommunication(
        command.matterName,
        {
          type: 'incoming',
          channel: source,
          subject: 'Follow-up instruction',
          summary: command.instruction,
          occurredAt: new Date().toISOString(),
        },
        {
          source,
          actor,
          summary: `${actorDisplay} follow-up instruction received`,
        },
      );
      await syncQuestionsForMatter({ matterName: command.matterName });
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: 'Instruction recorded.',
        data: { message: 'Instruction appended to case communication history.' },
      };
    }

    case 'submit_user_answer': {
      try {
        await submitQuestionAnswer({
          matterName: command.matterName,
          questionId: command.questionId,
          answer: command.answer,
          source,
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unable to record the user answer.';
        return buildAgentFailure(command.command, runId, command.matterName, message);
      }
      await syncQuestionsForMatter({ matterName: command.matterName });
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: 'User answer recorded and obligations refreshed.',
      };
    }

    case 'get_case_status': {
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: `Status retrieved for ${command.matterName}.`,
      };
    }

    case 'get_pending_questions': {
      await syncQuestionsForMatter({ matterName: command.matterName });
      const pendingQuestions = await listPendingQuestionsFromStore(command.matterName);
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: `Returning ${pendingQuestions.length} pending question(s).`,
        data: { questions: pendingQuestions },
      };
    }

    case 'get_next_actions': {
      const packet = await buildPacket(command.matterName, runId);
      const obligations = await loadObligationSet(command.matterName);
      const nextActions = selectWorkObligations(obligations.obligations, { maxItems: 10 });
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: `${nextActions.length} action(s) available.`,
        data: {
          obligations: nextActions.map((obligation) => ({
            obligationId: obligation.obligationId,
            type: obligation.type,
            status: obligation.status,
            urgency: obligation.urgency,
            blockers: obligation.blockers,
            reason: obligation.reason,
          })),
          recommended: pickNextObligation(obligations.obligations),
        },
      };
    }

    case 'request_document': {
      await createCaseState({ matterName: command.matterName, context: { source, actor } });
      const request = await createRequestedDocument({
        matterName: command.matterName,
        documentType: command.documentType,
        title: command.title,
        objective: command.objective,
        audience: command.audience,
        source,
        actor,
      });
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: `Document request created: ${command.documentType}.`,
        data: {
          workProductId: request.id,
          workProductType: request.type,
          readiness: request.readiness,
        },
      };
    }

    case 'request_email_draft': {
      const request = await createRequestedDocument({
        matterName: command.matterName,
        documentType: 'draft_email',
        title: `Email draft: ${command.subject}`,
        objective: command.objective,
        audience: command.to,
        source,
        actor,
      });
      const packet = await buildPacket(command.matterName, runId);
      const externalActionId = await createExternalAction({
        matterName: command.matterName,
        actionType: 'send_email',
        requestedBy: actor,
        summary: `Send draft email to ${command.to}: ${command.subject}`,
      });
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: 'Email draft requested; explicit approval required before sending.',
        data: {
          workProductId: request.id,
          workProductType: request.type,
          readiness: request.readiness,
          externalActionId,
        },
      };
    }

    case 'ingest_email': {
      await createCaseState({ matterName: command.matterName, context: { source, actor } });
      const receivedAt = command.receivedAt ?? new Date().toISOString();
      const communicationId = `email-inbound-${randomUUID()}`;
      await addCommunication(
        command.matterName,
        {
          type: 'incoming',
          channel: 'email',
          subject: command.subject,
          summary: command.body.slice(0, 180),
          occurredAt: receivedAt,
        },
        {
          source,
          actor,
          summary: `Ingested inbound email ${communicationId}`,
        },
      );

      const deadlineAt = extractDeadlineFromText(`${command.subject}\n${command.body}`);
      if (deadlineAt) {
        await addDeadline(
          command.matterName,
          {
            description: `Email response deadline from ${command.from ?? 'sender'}: ${command.subject}`,
            dueAt: deadlineAt,
            critical: false,
            status: 'pending',
            source: 'email-ingest',
          },
          {
            source,
            actor,
            summary: 'Email deadline extracted',
          },
        );
      }
      await syncQuestionsForMatter({ matterName: command.matterName });
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: deadlineAt ? 'Email ingested and deadline extracted.' : 'Email ingested.',
        data: {
          communicationId,
          deadlineAt,
        },
      };
    }

    case 'record_sent_email': {
      const action = await getExternalAction(command.matterName, command.externalActionId);
      if (!action) {
        return buildAgentFailure(command.command, runId, command.matterName, `External action ${command.externalActionId} not found.`);
      }
      if (action.status !== 'approved') {
        return buildAgentFailure(
          command.command,
          runId,
          command.matterName,
          `External action ${command.externalActionId} must be approved before sending.`,
        );
      }

      await addCommunication(
        command.matterName,
        {
          type: 'outgoing',
          channel: 'email',
          subject: command.subject,
          summary: command.body ? command.body.slice(0, 180) : 'Email sent',
          occurredAt: new Date().toISOString(),
        },
        {
          source,
          actor,
          summary: `Sent email using action ${command.externalActionId}`,
        },
      );
      await setExternalActionStatus(command.matterName, command.externalActionId, 'executed', 'Sent successfully', source, actor);
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: `Email send action ${command.externalActionId} completed.`,
        data: { actionId: command.externalActionId, actionStatus: 'executed' },
      };
    }

    case 'record_received_email': {
      await createCaseState({ matterName: command.matterName, context: { source, actor } });
      const receivedAt = command.receivedAt ?? new Date().toISOString();
      await addCommunication(
        command.matterName,
        {
          type: 'incoming',
          channel: 'email',
          subject: command.subject,
          summary: command.body.slice(0, 180),
          occurredAt: receivedAt,
        },
        {
          source,
          actor,
          summary: 'Recorded received email',
        },
      );

      const deadlineAt = extractDeadlineFromText(`${command.subject}\n${command.body}`);
      if (deadlineAt) {
        await addDeadline(
          command.matterName,
          {
            description: `Email deadline from ${command.from}: ${command.subject}`,
            dueAt: deadlineAt,
            critical: false,
            status: 'pending',
            source: 'email',
          },
          {
            source,
            actor,
            summary: 'Email deadline extracted',
          },
        );
      }

      await syncQuestionsForMatter({ matterName: command.matterName });
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: deadlineAt ? 'Received email recorded and deadline extracted.' : 'Received email recorded.',
        data: { deadlineAt },
      };
    }

    case 'approve_external_action': {
      const updated = await setExternalActionStatus(command.matterName, command.actionId, 'approved', command.reason, source, actor);
      if (!updated) {
        return buildAgentFailure(command.command, runId, command.matterName, `External action ${command.actionId} not found.`);
      }
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: `External action ${command.actionId} approved.`,
        data: { actionId: command.actionId, status: 'approved' },
      };
    }

    case 'reject_external_action': {
      const updated = await setExternalActionStatus(command.matterName, command.actionId, 'rejected', command.reason, source, actor);
      if (!updated) {
        return buildAgentFailure(command.command, runId, command.matterName, `External action ${command.actionId} not found.`);
      }
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: `External action ${command.actionId} rejected.`,
        data: { actionId: command.actionId, status: 'rejected' },
      };
    }

    case 'pause_case': {
      await setCaseStatus(command.matterName, 'blocked', {
        source,
        actor,
        summary: command.reason ?? 'Case paused by operator',
      });
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: `Case paused: ${command.reason ?? 'requested by operator'}.`,
        data: { caseStatus: 'blocked' },
      };
    }

    case 'resume_case': {
      await setCaseStatus(command.matterName, 'active', {
        source,
        actor,
        summary: 'Case resumed',
      });
      const packet = await buildPacket(command.matterName, runId);
      return {
        ok: true,
        command: command.command,
        runId,
        summary: packet.summary,
        diagnostics: packet.diagnostics,
        userMessage: 'Case resumed.',
        data: { caseStatus: 'active' },
      };
    }
  }
}

async function buildPacket(matterName: string, runId: string): Promise<{ summary: AgentUserSummary; diagnostics: AgentDiagnosticSummary }> {
  const stateDocument = await loadCaseStateDocumentOrFallback(matterName);
  const obligations = await loadObligationSet(matterName);
  const pendingQuestions = await listPendingQuestionsFromStore(matterName);
  return buildAgentStatusPacket({
    matterName,
    runId,
    stateDocument,
    obligations,
    pendingQuestions,
  });
}

async function loadCaseStateDocumentOrFallback(matterName: string): Promise<CaseStateDocument> {
  const document = await loadCaseStateDocument(matterName);
  if (document) {
    return document;
  }
  return createCaseState({ matterName, context: { source: 'agent', actor: 'agent' } });
}

async function loadObligationSet(matterName: string): Promise<CaseObligationSet> {
  const stateDocument = await loadCaseStateDocumentOrFallback(matterName);
  return generateObligationsFromCaseState(stateDocument);
}

function buildAgentFailure(
  command: AgentCommandName,
  runId: string,
  matterName: string,
  userMessage: string,
): AgentCommandResponse {
  return {
    ok: false,
    command,
    runId,
    summary: {
      matterName,
      caseStatus: 'blocked',
      done: [],
      missing: [],
      blocked: ['request-failure'],
      unsafe: [],
      nextActions: [],
      pendingQuestionCount: 0,
      pendingWorkProductCount: 0,
      openObligationCount: 0,
    },
    diagnostics: {
      runId,
      stateRevision: 0,
      obligationCounts: { total: 0, ready: 0, blocked: 0, satisfied: 0 },
      questionCounts: { total: 0, pending: 0 },
      workProductCount: 0,
    },
    userMessage,
  };
}

async function setCaseStatus(
  matterName: string,
  status: CaseStatus,
  context: { source: string; actor: string; summary: string },
): Promise<void> {
  await applyCaseStateMutation(
    {
      matterName,
      source: context.source,
      actor: context.actor,
      confidence: 1,
      type: 'case.status_updated',
      summary: context.summary,
    },
    (state) => ({
      ...state,
      status,
    }),
  );
}

async function createRequestedDocument(input: {
  matterName: string;
  documentType: WorkProductType;
  title?: string;
  objective?: string;
  audience?: string;
  source: string;
  actor: string;
}): Promise<UnknownWorkProduct> {
  if (!isWorkProductType(input.documentType)) {
    throw new Error(`Unsupported work product type: ${input.documentType}`);
  }
  const now = new Date().toISOString();
  const actorDisplay = input.actor.charAt(0).toUpperCase() + input.actor.slice(1);
  const workProduct: UnknownWorkProduct = {
    id: randomUUID(),
    matterName: input.matterName,
    type: input.documentType,
    title: input.title ?? `Requested ${input.documentType}`,
    content: `${actorDisplay} requested ${input.documentType}. ${input.objective ?? 'No objective provided.'}`,
    readiness: 'raw',
    purpose: `Request document: ${input.documentType}`,
    audience: input.audience ?? 'operator',
    sourceBasis: [{
      sourceType: 'user_statement',
      sourceId: input.source,
      description: `${actorDisplay} request for ${input.documentType}`,
    }],
    unresolvedGaps: ['Document is requested and has not yet been reviewed.'],
    safetyStatus: 'safe',
    metadata: {
      requestedBy: input.source,
      requestedAt: now,
    },
    payload: createPlaceholderPayload(input.documentType, input.source, input.actor),
    createdAt: now,
    updatedAt: now,
  };

  await upsertWorkProduct(input.matterName, workProduct);
  await addWorkProductReference(input.matterName, {
    workProductId: workProduct.id,
    type: workProduct.type,
    readiness: workProduct.readiness,
    source: input.source,
  }, {
    source: input.source,
    actor: input.actor,
    summary: `${actorDisplay} requested ${workProduct.type}`,
  });

  return workProduct;
}

function createPlaceholderPayload(
  type: WorkProductType,
  source = 'agent',
  actor = 'agent'
): WorkProductPayloadByType[keyof WorkProductPayloadByType] {
  const today = new Date().toISOString().slice(0, 10);
  const actorDisplay = actor.charAt(0).toUpperCase() + actor.slice(1);
  switch (type) {
    case 'intake_summary':
      return {
        intakeSummary: 'Initial intake summary captured from user request.',
        sourceType: `${actorDisplay} request`,
      };
    case 'chronology':
      return {
        events: [{ date: today, event: 'Initial intake event noted', sourceIds: [`${source}-request`] }],
      };
    case 'evidence_matrix':
      return { rows: [{ claim: 'Core claim', evidence: [`${source}-request`], inference: 'Needs review' }] };
    case 'fact_finding_report':
      return { findings: [{ finding: 'User statement indicates preliminary facts.', basis: ['user instruction'], confidence: 0.6 }] };
    case 'issue_map':
      return { issues: [{ issue: 'Unresolved issue map requested', status: 'proposed' }] };
    case 'authority_map':
      return { authorities: ['Authority check pending'] };
    case 'legal_research_memo':
      return {
        legalQuestion: 'Remedy and route question pending',
        forum: 'Unknown',
        facts: ['Preliminary facts provided'],
        laws: ['Statutory and common law references'],
        analysis: 'Needs legal authority review.',
        conclusion: 'Pending',
        uncertainties: ['Evidence completeness'],
        risks: ['Deadline pressure'],
        nextActions: ['Populate legal authorities', 'Resolve factual gaps'],
        authorities: ['Statutory text'],
      };
    case 'procedural_route_memo':
      return {
        forum: 'Unknown',
        routes: ['Internal grievance', 'Judicial review'],
        authorities: ['Procedure guidance'],
        recommendation: 'Assess route after deadline review.',
        risks: ['Unknown jurisdiction'],
        nextAction: 'Verify final decision date',
      };
    case 'case_theory':
      return { theory: 'Working theory pending', assumptions: ['Factual gaps remain'], evidenceLinks: [`${source}-request`] };
    case 'merits_opinion':
      return { merits: 'To be assessed', downside: ['Factual uncertainty'], relief: ['Potential relief options'] };
    case 'risk_register':
      return { risks: [{ risk: 'Evidence incomplete', impact: 'medium', mitigation: 'Request missing sources' }] };
    case 'draft_pleading':
    case 'draft_complaint':
      return {
        forum: 'Unknown',
        parties: ['Party A', 'Party B'],
        remedies: ['Primary remedy'],
        relief: 'Court relief as identified',
      };
    case 'draft_letter':
      return { to: 'Recipient', subject: 'Draft letter for user request' };
    case 'draft_email':
      return { to: 'Recipient', subject: 'Draft email for user request' };
    case 'witness_statement':
      return { witness: 'Witness name', statement: 'Witness statement draft pending' };
    case 'schedule_of_loss':
      return { losses: [{ date: today, harm: 'Loss description pending' }] };
    case 'draft_order':
      return { orderFor: 'Applicant', requestedRelief: 'Provisional relief', supportingFacts: [`${source}-request`] };
    case 'bundle_index':
      return { entries: ['chronology', 'evidence_matrix', 'issue_map'] };
    case 'war_room_pack':
      return { highlights: ['Critical dates', 'Key evidence', 'Open questions'] };
    case 'operator_handoff':
      return { status: 'Under instruction', nextSteps: ['Collect evidence', 'Update deadlines', 'Prepare route memo'] };
    case 'review_ready_output_bundle':
      return { manifest: [{ file: 'review-ready-manifest.md', purpose: 'Initial package' }], workProductIds: [] };
    default:
      return { note: `No placeholder for ${type}` } as unknown as WorkProductPayloadByType[keyof WorkProductPayloadByType];
  }
}

async function createExternalAction(input: {
  matterName: string;
  actionType: ExternalActionRecord['actionType'];
  requestedBy: string;
  summary: string;
}): Promise<string> {
  const actionId = randomUUID();
  const now = new Date().toISOString();
  await applyCaseStateMutation(
    {
      matterName: input.matterName,
      source: input.requestedBy,
      actor: input.requestedBy,
      type: 'case.external_action_created',
      summary: `Created external action ${actionId}`,
      confidence: 1,
    },
    (state) => {
      const next = {
        ...state,
        externalActions: [...state.externalActions],
      };
      next.externalActions.push({
        actionId,
        actionType: input.actionType,
        status: 'proposed',
        requestedBy: input.requestedBy,
        requestedAt: now,
        updatedAt: now,
        summary: input.summary,
      });
      return next;
    },
  );
  return actionId;
}

async function getExternalAction(
  matterName: string,
  actionId: string,
): Promise<ExternalActionRecord | undefined> {
  const document = await getCaseStateDocumentOrCreate({ matterName });
  return document.state.externalActions.find((action) => action.actionId === actionId);
}

async function setExternalActionStatus(
  matterName: string,
  actionId: string,
  status: ExternalActionRecord['status'],
  reason?: string,
  source = 'agent',
  actor = 'agent',
): Promise<boolean> {
  const document = await getCaseStateDocumentOrCreate({ matterName });
  const index = document.state.externalActions.findIndex((action) => action.actionId === actionId);
  if (index < 0) {
    return false;
  }

  const now = new Date().toISOString();
  await applyCaseStateMutation(
    {
      matterName,
      source,
      actor,
      type: 'case.external_action_updated',
      summary: `External action ${actionId} -> ${status}`,
      confidence: 1,
    },
    (state) => {
      const next = {
        ...state,
        externalActions: [...state.externalActions],
      };
      const action = next.externalActions[index];
      const nextSummary = reason ? `${action.summary} (${reason})` : action.summary;
      next.externalActions[index] = {
        ...action,
        status,
        summary: nextSummary,
        updatedAt: now,
      };
      return next;
    },
  );
  return true;
}

function extractDeadlineFromText(content: string): string | undefined {
  const candidate = /(?:by|before|until|due\s+by)\s*([0-9]{4}-[0-9]{2}-[0-9]{2})/i.exec(content)
    || /\b(\d{4}\/\d{2}\/\d{2})\b/.exec(content)
    || /\b(\d{2}\/\d{2}\/\d{4})\b/.exec(content)
    || /\b(\d{2}-\d{2}-\d{4})\b/.exec(content);

  if (!candidate) return undefined;
  const raw = candidate[1] ?? candidate[0];
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }
  return parsed.toISOString();
}
