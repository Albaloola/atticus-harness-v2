import { randomUUID } from 'crypto';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { getMatterPath } from '../storage/matter.js';
import type { ClaimContradiction, ClaimRecord, ClaimsStoreDocument } from './schema.js';

const CLAIM_FILE = '_state/claims.json';
const CLAIM_FORMAT_VERSION = 1;

function claimsStorePath(matterName: string): string {
  return getMatterPath(matterName, CLAIM_FILE);
}

function nowIso(): string {
  return new Date().toISOString();
}

export async function loadClaimsStore(
  matterName: string,
): Promise<ClaimsStoreDocument | undefined> {
  try {
    const raw = await readFile(claimsStorePath(matterName), 'utf-8');
    return JSON.parse(raw) as ClaimsStoreDocument;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return undefined;
    }
    throw error;
  }
}

export async function saveClaimsStore(document: ClaimsStoreDocument): Promise<ClaimsStoreDocument> {
  const normalized: ClaimsStoreDocument = {
    ...document,
    formatVersion: CLAIM_FORMAT_VERSION,
    updatedAt: nowIso(),
  };
  await mkdir(getMatterPath(document.matterName, '_state'), { recursive: true });
  await writeFile(claimsStorePath(document.matterName), JSON.stringify(normalized, null, 2), 'utf-8');
  return normalized;
}

export async function getClaimsDocument(
  matterName: string,
  createIfMissing = true,
): Promise<ClaimsStoreDocument> {
  const existing = await loadClaimsStore(matterName);
  if (existing) {
    return existing;
  }

  const created: ClaimsStoreDocument = {
    formatVersion: CLAIM_FORMAT_VERSION,
    matterName,
    revision: 0,
    claims: [],
    contradictions: [],
    updatedAt: nowIso(),
  };

  if (createIfMissing) {
    await saveClaimsStore(created);
  }
  return created;
}

export async function listClaims(matterName: string): Promise<ClaimRecord[]> {
  return (await getClaimsDocument(matterName)).claims;
}

export async function addClaim(matterName: string, claim: Omit<ClaimRecord, 'claimId' | 'createdAt' | 'updatedAt'>): Promise<ClaimRecord> {
  const now = nowIso();
  const document = await getClaimsDocument(matterName);
  const nextClaim: ClaimRecord = {
    ...claim,
    claimId: randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
  await saveClaimsStore({
    ...document,
    revision: document.revision + 1,
    claims: [...document.claims, nextClaim],
    updatedAt: now,
  });
  return nextClaim;
}

export async function upsertClaim(matterName: string, claim: ClaimRecord): Promise<ClaimRecord> {
  const now = nowIso();
  const document = await getClaimsDocument(matterName);
  const nextClaims = [...document.claims];
  const index = nextClaims.findIndex((item) => item.claimId === claim.claimId);

  if (index >= 0) {
    nextClaims[index] = {
      ...claim,
      updatedAt: now,
    };
  } else {
    nextClaims.push({
      ...claim,
      updatedAt: now,
      createdAt: claim.createdAt || now,
    });
  }

  await saveClaimsStore({
    ...document,
    revision: document.revision + 1,
    claims: nextClaims,
    updatedAt: now,
  });

  return nextClaims[index >= 0 ? index : nextClaims.length - 1]!;
}

export async function getClaim(matterName: string, claimId: string): Promise<ClaimRecord | undefined> {
  const claims = await listClaims(matterName);
  return claims.find((claim) => claim.claimId === claimId);
}

export async function addClaimContradiction(
  matterName: string,
  input: Omit<ClaimContradiction, 'contradictionId' | 'createdAt' | 'updatedAt'>,
): Promise<ClaimContradiction> {
  const now = nowIso();
  const document = await getClaimsDocument(matterName);
  const contradiction: ClaimContradiction = {
    ...input,
    contradictionId: randomUUID(),
    createdAt: now,
    updatedAt: now,
  };

  await saveClaimsStore({
    ...document,
    revision: document.revision + 1,
    contradictions: [...document.contradictions, contradiction],
    updatedAt: now,
  });
  return contradiction;
}

export async function listContradictions(
  matterName: string,
  status?: ClaimContradiction['status'],
): Promise<ClaimContradiction[]> {
  const document = await getClaimsDocument(matterName);
  return status ? document.contradictions.filter((item) => item.status === status) : document.contradictions;
}
