import type { WorkProductType } from '../work-products/types.js';

export type AgentCommandName =
  | 'start_case_management'
  | 'submit_user_instruction'
  | 'submit_user_answer'
  | 'get_case_status'
  | 'get_pending_questions'
  | 'get_next_actions'
  | 'request_document'
  | 'request_email_draft'
  | 'ingest_email'
  | 'record_sent_email'
  | 'record_received_email'
  | 'approve_external_action'
  | 'reject_external_action'
  | 'pause_case'
  | 'resume_case';

export interface AgentCommandBase {
  matterName: string;
  runId?: string;
  actor?: string;
  source?: string;
}

export interface StartCaseManagementCommand extends AgentCommandBase {
  command: 'start_case_management';
  instruction: string;
}

export interface SubmitUserInstructionCommand extends AgentCommandBase {
  command: 'submit_user_instruction';
  instruction: string;
}

export interface SubmitUserAnswerCommand extends AgentCommandBase {
  command: 'submit_user_answer';
  questionId: string;
  answer: string;
}

export interface GetCaseStatusCommand extends AgentCommandBase {
  command: 'get_case_status';
}

export interface GetPendingQuestionsCommand extends AgentCommandBase {
  command: 'get_pending_questions';
}

export interface GetNextActionsCommand extends AgentCommandBase {
  command: 'get_next_actions';
}

export interface RequestDocumentCommand extends AgentCommandBase {
  command: 'request_document';
  documentType: WorkProductType;
  title?: string;
  objective?: string;
  audience?: string;
}

export interface RequestEmailDraftCommand extends AgentCommandBase {
  command: 'request_email_draft';
  to: string;
  subject: string;
  objective?: string;
}

export interface IngestEmailCommand extends AgentCommandBase {
  command: 'ingest_email';
  from?: string;
  to?: string;
  subject: string;
  body: string;
  messageId?: string;
  receivedAt?: string;
}

export interface RecordSentEmailCommand extends AgentCommandBase {
  command: 'record_sent_email';
  externalActionId: string;
  to: string;
  subject: string;
  body?: string;
}

export interface RecordReceivedEmailCommand extends AgentCommandBase {
  command: 'record_received_email';
  from: string;
  subject: string;
  body: string;
  messageId?: string;
  receivedAt?: string;
}

export interface ApproveExternalActionCommand extends AgentCommandBase {
  command: 'approve_external_action';
  actionId: string;
  reason?: string;
}

export interface RejectExternalActionCommand extends AgentCommandBase {
  command: 'reject_external_action';
  actionId: string;
  reason?: string;
}

export interface PauseCaseCommand extends AgentCommandBase {
  command: 'pause_case';
  reason?: string;
}

export interface ResumeCaseCommand extends AgentCommandBase {
  command: 'resume_case';
}

export type AgentCommand =
  | StartCaseManagementCommand
  | SubmitUserInstructionCommand
  | SubmitUserAnswerCommand
  | GetCaseStatusCommand
  | GetPendingQuestionsCommand
  | GetNextActionsCommand
  | RequestDocumentCommand
  | RequestEmailDraftCommand
  | IngestEmailCommand
  | RecordSentEmailCommand
  | RecordReceivedEmailCommand
  | ApproveExternalActionCommand
  | RejectExternalActionCommand
  | PauseCaseCommand
  | ResumeCaseCommand;

export interface AgentUserSummary {
  matterName: string;
  caseStatus: string;
  done: string[];
  missing: string[];
  blocked: string[];
  unsafe: string[];
  nextActions: string[];
  pendingQuestionCount: number;
  pendingWorkProductCount: number;
  openObligationCount: number;
}

export interface AgentDiagnosticSummary {
  runId: string;
  stateRevision: number;
  obligationCounts: {
    total: number;
    ready: number;
    blocked: number;
    satisfied: number;
  };
  questionCounts: {
    total: number;
    pending: number;
  };
  workProductCount: number;
}

export interface AgentCommandResponse<TData = unknown> {
  ok: boolean;
  command: AgentCommandName;
  runId: string;
  summary: AgentUserSummary;
  diagnostics: AgentDiagnosticSummary;
  userMessage: string;
  data?: TData;
}
