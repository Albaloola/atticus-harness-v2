import { loadCaseStateDocument } from '../case-state/store.js';
import type { CaseObligationSet } from '../case-manager/obligation-types.js';
import { generateObligationsFromCaseState, refreshObligationBlocking } from '../case-manager/obligation-engine.js';

export async function refreshStateFromAnswers(
  matterName: string,
  obligations: CaseObligationSet,
): Promise<CaseObligationSet> {
  const document = await loadCaseStateDocument(matterName);
  if (!document) {
    return obligations;
  }
  const fresh = generateObligationsFromCaseState(document);
  return refreshObligationBlocking(fresh, document.state);
}
