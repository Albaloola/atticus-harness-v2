import { listEvidence } from '../storage/evidence.js';

export type MatterPrimaryMode = 'live_matter' | 'retrospective_benchmark' | 'archive_analysis';
export type MatterTrack = 'ordinary_action' | 'judicial_review' | 'appellate' | 'university_ftp' | 'senate_appeal' | 'regulatory_slcc' | 'sar_data' | 'student_union' | 'settlement' | 'unknown';
export type LiveObligation = 'filing' | 'service' | 'deadline' | 'permission' | 'appeal' | 'response' | 'none';
export type PrivateDataPolicy = 'local_only' | 'public_sources_only' | 'unrestricted_public';

export interface MatterPostureJurisdiction {
  system: string;
  forum: string;
  confidence: number;
  evidenceIds: string[];
  reason: string;
}

export interface MatterPosture {
  matterName: string;
  primaryMode: MatterPrimaryMode;
  jurisdictions: MatterPostureJurisdiction[];
  tracks: MatterTrack[];
  liveObligations: LiveObligation[];
  sourceProfile: Record<string, number>;
  retrospectiveOutcomeKnown: boolean;
  requiresCourtReadyArtifacts: boolean;
  requiresExternalResearch: boolean;
  privateDataPolicy: PrivateDataPolicy;
  confidence: number;
  reasons: string[];
}

export async function classifyMatterPosture(input: { matterName: string; objective?: string; metadata?: Record<string, unknown> }): Promise<MatterPosture> {
  const objective = input.objective ?? '';
  const text = `${objective} ${JSON.stringify(input.metadata ?? {})}`.toLowerCase();
  const evidence = await listEvidence(input.matterName).catch(() => []);
  const sourceProfile = buildSourceProfile(evidence.map((record) => `${record.originalPath ?? ''} ${String(record.metadata?.originalFilename ?? record.metadata?.canonicalFilename ?? '')} ${record.format ?? ''}`));
  const reasons: string[] = [];

  const retrospective = /retrospective|benchmark|concluded|known outcome|judgment|uksc|appeal/i.test(text);
  const archive = /archive|source packet|analysis only/i.test(text);
  const primaryMode: MatterPrimaryMode = retrospective ? 'retrospective_benchmark' : archive ? 'archive_analysis' : 'live_matter';
  reasons.push(`primaryMode:${primaryMode}`);

  const tracks = new Set<MatterTrack>();
  if (/appeal|appellate|uksc|supreme court|judgment/.test(text)) tracks.add('appellate');
  if (/judicial review|chapter 58|petition/.test(text)) tracks.add('judicial_review');
  if (/ordinary action|summons|defences/.test(text)) tracks.add('ordinary_action');
  if (/fitness to practise|ftp|university/.test(text)) tracks.add('university_ftp');
  if (/senate appeal/.test(text)) tracks.add('senate_appeal');
  if (/slcc|regulator|regulatory/.test(text)) tracks.add('regulatory_slcc');
  if (/subject access|sar|data protection/.test(text)) tracks.add('sar_data');
  if (/student union|src/.test(text)) tracks.add('student_union');
  if (/settlement/.test(text)) tracks.add('settlement');
  if (tracks.size === 0) tracks.add('unknown');

  const obligations = new Set<LiveObligation>();
  if (!retrospective) {
    if (/file|filing|lodge|petition/.test(text)) obligations.add('filing');
    if (/serve|service|intimation/.test(text)) obligations.add('service');
    if (/deadline|due|limitation/.test(text)) obligations.add('deadline');
    if (/permission|leave to appeal/.test(text)) obligations.add('permission');
    if (/appeal/.test(text)) obligations.add('appeal');
    if (/response|reply|defence/.test(text)) obligations.add('response');
  }
  if (obligations.size === 0) obligations.add('none');

  const jurisdictions: MatterPostureJurisdiction[] = [];
  if (/scotland|scottish|court of session|sheriff court/.test(text)) {
    jurisdictions.push({ system: 'Scotland', forum: /court of session/.test(text) ? 'Court of Session' : 'Scottish courts', confidence: 0.8, evidenceIds: [], reason: 'Objective or metadata contains Scottish forum signals.' });
  }
  if (/uksc|supreme court|northern ireland|windsor framework/.test(text)) {
    jurisdictions.push({ system: 'United Kingdom', forum: 'UK Supreme Court', confidence: 0.85, evidenceIds: [], reason: 'Objective or metadata contains UKSC appellate signals.' });
  }

  const privateDataPolicy = /private|omer|local|confidential|student|sar/i.test(text) ? 'local_only' : retrospective ? 'public_sources_only' : 'local_only';

  return {
    matterName: input.matterName,
    primaryMode,
    jurisdictions,
    tracks: Array.from(tracks),
    liveObligations: Array.from(obligations),
    sourceProfile,
    retrospectiveOutcomeKnown: retrospective && /known outcome|judgment|concluded/.test(text),
    requiresCourtReadyArtifacts: primaryMode === 'live_matter' || !/source packet only|analysis only/.test(text),
    requiresExternalResearch: retrospective && privateDataPolicy !== 'local_only',
    privateDataPolicy,
    confidence: jurisdictions.length > 0 || tracks.size > 1 ? 0.75 : 0.55,
    reasons,
  };
}

function buildSourceProfile(values: string[]): Record<string, number> {
  const profile: Record<string, number> = { primary_documents: 0, pleadings: 0, drafts: 0, correspondence: 0, transcripts: 0, media: 0, unsupported: 0 };
  for (const value of values) {
    const lower = value.toLowerCase();
    if (/judgment|order|written case|statement of facts|official|court/.test(lower)) profile.primary_documents += 1;
    else if (/summons|petition|pleading|defence|claim/.test(lower)) profile.pleadings += 1;
    else if (/draft/.test(lower)) profile.drafts += 1;
    else if (/email|letter|correspondence/.test(lower)) profile.correspondence += 1;
    else if (/transcript/.test(lower)) profile.transcripts += 1;
    else if (/mp4|mov|mp3|wav|media/.test(lower)) profile.media += 1;
    else profile.unsupported += 1;
  }
  return profile;
}
