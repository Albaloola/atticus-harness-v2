import type { WorkProductType } from '../work-products/types.js';

export type HermesCommandName =
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

export interface HermesCommandBase {
  matterName: string;
  runId?: string;
  actor?: string;
  source?: string;
}

export interface StartCaseManagementCommand extends HermesCommandBase {
  command: 'start_case_management';
  instruction: string;
}

export interface SubmitUserInstructionCommand extends HermesCommandBase {
  command: 'submit_user_instruction';
  instruction: string;
}

export interface SubmitUserAnswerCommand extends HermesCommandBase {
  command: 'submit_user_answer';
  questionId: string;
  answer: string;
}

export interface GetCaseStatusCommand extends HermesCommandBase {
  command: 'get_case_status';
}

export interface GetPendingQuestionsCommand extends HermesCommandBase {
  command: 'get_pending_questions';
}

export interface GetNextActionsCommand extends HermesCommandBase {
  command: 'get_next_actions';
}

export interface RequestDocumentCommand extends HermesCommandBase {
  command: 'request_document';
  documentType: WorkProductType;
  title?: string;
  objective?: string;
  audience?: string;
}

export interface RequestEmailDraftCommand extends HermesCommandBase {
  command: 'request_email_draft';
  to: string;
  subject: string;
  objective?: string;
}

export interface IngestEmailCommand extends HermesCommandBase {
  command: 'ingest_email';
  from?: string;
  to?: string;
  subject: string;
  body: string;
  messageId?: string;
  receivedAt?: string;
}

export interface RecordSentEmailCommand extends HermesCommandBase {
  command: 'record_sent_email';
  externalActionId: string;
  to: string;
  subject: string;
  body?: string;
}

export interface RecordReceivedEmailCommand extends HermesCommandBase {
  command: 'record_received_email';
  from: string;
  subject: string;
  body: string;
  messageId?: string;
  receivedAt?: string;
}

export interface ApproveExternalActionCommand extends HermesCommandBase {
  command: 'approve_external_action';
  actionId: string;
  reason?: string;
}

export interface RejectExternalActionCommand extends HermesCommandBase {
  command: 'reject_external_action';
  actionId: string;
  reason?: string;
}

export interface PauseCaseCommand extends HermesCommandBase {
  command: 'pause_case';
  reason?: string;
}

export interface ResumeCaseCommand extends HermesCommandBase {
  command: 'resume_case';
}

export type HermesCommand =
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

export interface HermesUserSummary {
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

export interface HermesDiagnosticSummary {
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

export interface HermesCommandResponse<TData = unknown> {
  ok: boolean;
  command: HermesCommandName;
  runId: string;
  summary: HermesUserSummary;
  diagnostics: HermesDiagnosticSummary;
  userMessage: string;
  data?: TData;
}
