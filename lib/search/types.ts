export interface SearchResult {
  id: string;
  content: {
    title: string;
    content?: string;
    timestamp?: string;
    [key: string]: unknown;
  };
}

export interface SearchOptions {
  query: string;
  limit?: number;
  reranking?: boolean;
}

export interface UseSearchState {
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
}