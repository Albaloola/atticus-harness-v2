import type { SourceClass } from '../evidence/source-classification.js';

export type ClaimCategory = 'fact' | 'law' | 'inference' | 'user_assertion' | 'risk';
export type ClaimVerificationStatus = 'proposed' | 'supported' | 'partially_supported' | 'unsupported' | 'disputed';

export interface ClaimReference {
  referenceId?: string;
  sourceClass: SourceClass;
  sourceId: string;
  evidenceLocator?: string;
  excerpt?: string;
  confidence?: number;
}

export interface ClaimRecord {
  claimId: string;
  matterName: string;
  category: ClaimCategory;
  statement: string;
  status: ClaimVerificationStatus;
  confidence: number;
  sourceReferences: ClaimReference[];
  authorityRefs: string[];
  evidenceBasisNote?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClaimContradiction {
  contradictionId: string;
  matterName: string;
  claimIdA: string;
  claimIdB: string;
  description: string;
  status: 'open' | 'reviewed';
  createdAt: string;
  updatedAt: string;
}

export interface ClaimsStoreDocument {
  formatVersion: number;
  matterName: string;
  revision: number;
  claims: ClaimRecord[];
  contradictions: ClaimContradiction[];
  updatedAt: string;
}
