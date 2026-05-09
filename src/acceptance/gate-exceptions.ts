import { appendFile, mkdir, readFile } from 'fs/promises';
import { randomUUID } from 'crypto';
import { dirname } from 'path';
import { getMatterPath } from '../storage/matter.js';
import { appendEvent } from '../state/events.js';
import type { GateFeedbackLocation } from './gate-feedback.js';

export type GateExceptionAuthorizer = 'worker' | 'mini_orchestrator' | 'master_orchestrator' | 'human';

export interface GateExceptionMatchCriteria {
  policyVersion: string;
  evidenceRefs: string[];
  citationRefs: string[];
  locations: GateFeedbackLocation[];
}

export interface GateExceptionRecord {
  exceptionId: string;
  matterName: string;
  candidateId: string;
  gateCheckFailed: string;
  reason: string;
  authorisedBy: GateExceptionAuthorizer;
  timestamp: string;
  permanentRule: boolean;
  match: GateExceptionMatchCriteria;
}

export interface AppendGateExceptionInput {
  candidateId: string;
  gateCheckFailed: string;
  reason: string;
  authorisedBy: GateExceptionAuthorizer;
  permanentRule?: boolean;
  match: GateExceptionMatchCriteria;
}

export interface FindStandingGateExceptionInput extends GateExceptionMatchCriteria {
  gateCheckFailed: string;
}

export interface ReuseStandingGateExceptionInput extends FindStandingGateExceptionInput {
  candidateId: string;
  authorisedBy: GateExceptionAuthorizer;
}

export interface StandingGateExceptionMatch {
  exception: GateExceptionRecord;
  nonMatchingFields: string[];
}

const EXCEPTION_LOG = 'gate-exceptions.jsonl';

export async function appendGateException(
  matterName: string,
  input: AppendGateExceptionInput,
): Promise<GateExceptionRecord> {
  const record: GateExceptionRecord = {
    exceptionId: randomUUID(),
    matterName,
    candidateId: input.candidateId,
    gateCheckFailed: input.gateCheckFailed,
    reason: input.reason,
    authorisedBy: input.authorisedBy,
    timestamp: new Date().toISOString(),
    permanentRule: input.permanentRule ?? false,
    match: normalizeCriteria(input.match),
  };

  const filePath = getExceptionLogPath(matterName);
  await mkdir(dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(record)}\n`, 'utf-8');
  await appendEvent({
    matterName,
    type: 'case.quality_gate.exception_recorded',
    source: 'quality-gate',
    data: {
      exceptionId: record.exceptionId,
      candidateId: record.candidateId,
      gateCheckFailed: record.gateCheckFailed,
      authorisedBy: record.authorisedBy,
      permanentRule: record.permanentRule,
    },
  });

  return record;
}

export async function listGateExceptions(matterName: string): Promise<GateExceptionRecord[]> {
  try {
    const content = await readFile(getExceptionLogPath(matterName), 'utf-8');
    return content
      .split('\n')
      .filter(Boolean)
      .map((line) => JSON.parse(line) as GateExceptionRecord);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }
}

export async function findStandingGateException(
  matterName: string,
  input: FindStandingGateExceptionInput,
): Promise<StandingGateExceptionMatch | null> {
  const criteria = normalizeCriteria(input);
  const exceptions = await listGateExceptions(matterName);
  for (const exception of exceptions) {
    if (!exception.permanentRule) continue;
    if (exception.gateCheckFailed !== input.gateCheckFailed) continue;
    const nonMatchingFields = compareCriteria(exception.match, criteria);
    if (nonMatchingFields.length === 0) {
      return { exception, nonMatchingFields };
    }
  }
  return null;
}

export async function reuseStandingGateException(
  matterName: string,
  input: ReuseStandingGateExceptionInput,
): Promise<StandingGateExceptionMatch | null> {
  const match = await findStandingGateException(matterName, input);
  if (!match) return null;

  await appendEvent({
    matterName,
    type: 'case.quality_gate.exception_reused',
    source: 'quality-gate',
    data: {
      exceptionId: match.exception.exceptionId,
      candidateId: input.candidateId,
      gateCheckFailed: input.gateCheckFailed,
      authorisedBy: input.authorisedBy,
      matchingFields: ['matterName', 'gateCheckFailed', 'policyVersion', 'evidenceRefs', 'citationRefs', 'locations'],
      nonMatchingFields: match.nonMatchingFields,
    },
  });

  return match;
}

function getExceptionLogPath(matterName: string): string {
  return getMatterPath(matterName, '_state', EXCEPTION_LOG);
}

function normalizeCriteria<T extends GateExceptionMatchCriteria>(criteria: T): T {
  return {
    ...criteria,
    evidenceRefs: [...criteria.evidenceRefs].sort(),
    citationRefs: [...criteria.citationRefs].sort(),
    locations: [...criteria.locations].sort((a, b) => stableLocationKey(a).localeCompare(stableLocationKey(b))),
  };
}

function compareCriteria(left: GateExceptionMatchCriteria, right: GateExceptionMatchCriteria): string[] {
  const mismatches: string[] = [];
  if (left.policyVersion !== right.policyVersion) mismatches.push('policyVersion');
  if (!sameStrings(left.evidenceRefs, right.evidenceRefs)) mismatches.push('evidenceRefs');
  if (!sameStrings(left.citationRefs, right.citationRefs)) mismatches.push('citationRefs');
  if (!sameStrings(left.locations.map(stableLocationKey), right.locations.map(stableLocationKey))) {
    mismatches.push('locations');
  }
  return mismatches;
}

function sameStrings(left: string[], right: string[]): boolean {
  if (left.length !== right.length) return false;
  return left.every((value, index) => value === right[index]);
}

function stableLocationKey(location: GateFeedbackLocation): string {
  return [
    location.kind,
    location.path,
    location.label ?? '',
    location.gateName ?? '',
    location.details ?? '',
  ].join('|');
}
