// CMDK Component Content (searchable + filterable)
export interface CMDKContent {
  [key: string]: unknown;
  ID: string;
  Name: string;
  Category: string;
  Description: string;
  ShortSummary: string;
  Tags: string;
  Keywords: string;
  Props: string;
  CodeExample: string;
  UseCaseTags: string;
  ComponentType: string;
  Framework: string;
  ComplexityScore: string;
  HighlightFeatures: string;
  Alias: string;
}

// CMDK Metadata (not searchable, reference only)
export interface CMDKMetadata {
  [key: string]: unknown;
  DocsURL?: string;
  CodeSnippetID?: string;
  Metadata?: string;
}

export interface SearchResult {
  id: string;
  content: CMDKContent;
  metadata?: CMDKMetadata;
  score?: number;
}

export interface SearchOptions {
  query: string;
  limit?: number;
  reranking?: boolean;
  filter?: string;
  semanticWeight?: number;
}

export interface UseSearchState {
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
}