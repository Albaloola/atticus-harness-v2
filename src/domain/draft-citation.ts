export interface DraftCitation {
  draftCitationId: string;
  paragraphId: string;
  findingCitationId: string;
  renderForm: string;
  verificationStatus: 'unchecked' | 'verified' | 'failed';
  metadata: Record<string, unknown>;
}

