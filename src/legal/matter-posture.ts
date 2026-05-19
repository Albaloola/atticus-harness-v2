import { listEvidence } from '../storage/evidence.js';

export type MatterPrimaryMode = 'live_matter' | 'retrospective_benchmark' | 'archive_analysis';
export type MatterTrack =
  | 'ordinary_action'
  | 'judicial_review'
  | 'appellate'
  | 'university_ftp'
  | 'senate_appeal'
  | 'regulatory_slcc'
  | 'sar_data'
  | 'student_union'
  | 'settlement'
  | 'unknown';
export type LiveObligation = 'filing' | 'service' | 'deadline' | 'permission' | 'appeal' | 'response' | 'none';
export type PrivateDataPolicy = 'local_only' | 'public_sources_only' | 'unrestricted_public';

export interface MatterJurisdiction {
  system: string;
  forum: string;
  confidence: number;
  evidenceIds: string[];
  reason: string;
}

export interface MatterSourceProfile {
  primaryDocuments: number;
  pleadings: number;
  drafts: number;
  strategyMemos: number;
  productions: number;
  correspondence: number;
  transcripts: number;
  media: number;
  unsupportedOrQcFailed: number;
}

export interface MatterPosture {
  matterName: string;
  primaryMode: MatterPrimaryMode;
  jurisdictions: MatterJurisdiction[];
  tracks: MatterTrack[];
  liveObligations: LiveObligation[];
  sourceProfile: MatterSourceProfile;
  retrospectiveOutcomeKnown: boolean;
  requiresCourtReadyArtifacts: boolean;
  requiresExternalResearch: boolean;
  privateDataPolicy: PrivateDataPolicy;
  confidence: number;
  reasons: string[];
}

export async function classifyMatterPosture(input: {
  matterName: string;
  objective?: string;
  metadata?: Record<string, unknown>;
}): Promise<MatterPosture> {
  const text = `${input.matterName} ${input.objective ?? ''} ${JSON.stringify(input.metadata ?? {})}`.toLowerCase();
  const evidence = await listEvidence(input.matterName).catch(() => []);
  const sourceProfile = evidence.reduce<MatterSourceProfile>((profile, record) => {
    const haystack = [
      record.originalPath,
      record.internalPath,
      record.mimeType,
      record.format,
      record.status,
      String(record.metadata.originalFilename ?? ''),
      String(record.metadata.canonicalFilename ?? ''),
    ].join(' ').toLowerCase();
    if (/judgment|order|written case|statement of facts|petition|claim|pleading/.test(haystack)) profile.primaryDocuments += 1;
    if (/pleading|petition|claim|defence|answer/.test(haystack)) profile.pleadings += 1;
    if (/draft|working/.test(haystack)) profile.drafts += 1;
    if (/strategy|memo|note/.test(haystack)) profile.strategyMemos += 1;
    if (/production|bundle|exhibit/.test(haystack)) profile.productions += 1;
    if (/email|correspondence|letter/.test(haystack)) profile.correspondence += 1;
    if (/transcript/.test(haystack)) profile.transcripts += 1;
    if (/video|audio|image|png|jpeg|mp4|mov/.test(haystack)) profile.media += 1;
    if (['failed', 'qc_failed', 'copied_unindexed', 'excluded'].includes(record.status)) profile.unsupportedOrQcFailed += 1;
    return profile;
  }, {
    primaryDocuments: 0,
    pleadings: 0,
    drafts: 0,
    strategyMemos: 0,
    productions: 0,
    correspondence: 0,
    transcripts: 0,
    media: 0,
    unsupportedOrQcFailed: 0,
  });

  const reasons: string[] = [];
  const tracks = new Set<MatterTrack>();
  const obligations = new Set<LiveObligation>();
  const jurisdictions: MatterJurisdiction[] = [];

  if (/uksc|supreme court|appeal|appellate|judgment|neutral citation|written case|statement of facts/.test(text)) {
    tracks.add('appellate');
    reasons.push('appellate/court-source terms detected');
  }
  if (/judicial review|court of session|chapter 58|petition for judicial review/.test(text)) {
    tracks.add('judicial_review');
    jurisdictions.push({ system: 'Scotland', forum: 'Court of Session', confidence: 0.8, evidenceIds: [], reason: 'Scottish judicial-review terms detected' });
  }
  if (/sheriff court|ordinary action|summons|defences|answers/.test(text)) tracks.add('ordinary_action');
  if (/university|fitness to practise|ftp/.test(text)) tracks.add('university_ftp');
  if (/senate appeal|academic appeal/.test(text)) tracks.add('senate_appeal');
  if (/slcc|regulatory|complaint/.test(text)) tracks.add('regulatory_slcc');
  if (/subject access|sar|data protection|gdpr/.test(text)) tracks.add('sar_data');
  if (/student union|src/.test(text)) tracks.add('student_union');
  if (/settlement|zopa|batna/.test(text)) tracks.add('settlement');

  if (/file|filing|serve|service|deadline|permission|respond|response/.test(text)) {
    if (/file|filing/.test(text)) obligations.add('filing');
    if (/serve|service/.test(text)) obligations.add('service');
    if (/deadline/.test(text)) obligations.add('deadline');
    if (/permission/.test(text)) obligations.add('permission');
    if (/respond|response/.test(text)) obligations.add('response');
  }

  const primaryMode: MatterPrimaryMode = /retrospective|benchmark|concluded|public court packet|judgment/.test(text)
    ? 'retrospective_benchmark'
    : /archive|corpus|analysis only/.test(text)
      ? 'archive_analysis'
      : 'live_matter';
  if (primaryMode !== 'live_matter' && obligations.size === 0) obligations.add('none');
  if (tracks.size === 0) tracks.add('unknown');
  if (jurisdictions.length === 0 && /northern ireland|uksc|supreme court/.test(text)) {
    jurisdictions.push({ system: 'United Kingdom', forum: 'UK Supreme Court', confidence: 0.8, evidenceIds: [], reason: 'UKSC/Northern Ireland appellate terms detected' });
  }

  const privateDataPolicy: PrivateDataPolicy = /private|local only|confidential|sar|gdpr/.test(text)
    ? 'local_only'
    : primaryMode === 'retrospective_benchmark'
      ? 'public_sources_only'
      : 'local_only';

  const requiresCourtReadyArtifacts = primaryMode === 'live_matter' || !/no live filing|retrospective|concluded/.test(text);
  const retrospectiveOutcomeKnown = /judgment|outcome|appeal succeeded|appeal dismissed|declaration|order/.test(text);
  const requiresExternalResearch = privateDataPolicy !== 'local_only' && /public|official|court source|web/.test(text);
  const confidence = Math.min(0.95, 0.35 + (tracks.has('unknown') ? 0 : 0.25) + (jurisdictions.length > 0 ? 0.2 : 0) + (evidence.length > 0 ? 0.15 : 0));

  return {
    matterName: input.matterName,
    primaryMode,
    jurisdictions,
    tracks: [...tracks],
    liveObligations: [...obligations],
    sourceProfile,
    retrospectiveOutcomeKnown,
    requiresCourtReadyArtifacts,
    requiresExternalResearch,
    privateDataPolicy,
    confidence,
    reasons,
  };
}
