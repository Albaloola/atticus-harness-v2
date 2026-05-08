import type { CitationCheck } from '../types/citation.js';
import {
  type ExactQuoteVerificationInput,
  verifyExactQuote,
} from './exact-quote-verifier.js';

export function verifyPageBoundedQuote(input: ExactQuoteVerificationInput): CitationCheck {
  return verifyExactQuote(input);
}
