export interface SearchQuery {
  matterName: string;
  query: string;
  topK?: number;
}

export interface SearchResult {
  evidenceId: string;
  originalPath: string;
  sha256: string;
  snippet: string;
  score: number;
  chunkIndex?: number;
}

export interface FtsMatch {
  evidenceId: string;
  rank: number;
  snippet: string;
  content: string;
}
