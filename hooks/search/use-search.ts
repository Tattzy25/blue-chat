import { useState, useCallback } from 'react';
import { cmdkIndex } from '@/lib/search/indices';
import { SearchResult, SearchOptions, UseSearchState } from '@/lib/search/types';

export function useSearch(): UseSearchState & {
  search: (options: SearchOptions) => Promise<SearchResult[]>;
  clearResults: () => void;
} {
  const [state, setState] = useState<UseSearchState>({
    results: [],
    isLoading: false,
    error: null,
  });

  const search = useCallback(async (options: SearchOptions): Promise<SearchResult[]> => {
    if (!options.query.trim()) {
      setState(prev => ({ ...prev, results: [] }));
      return [];
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const searchResults = await cmdkIndex.search({
        query: options.query,
        limit: options.limit ?? 10,
        reranking: options.reranking ?? true,
      });

      const results = searchResults.map((item): SearchResult => ({
        id: String(item.id),
        content: item.content,
        metadata: item.metadata,
        score: item.score,
      }));

      setState(prev => ({ ...prev, results, isLoading: false }));
      return results;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Search failed';
      setState(prev => ({ ...prev, error: errorMessage, isLoading: false }));
      return [];
    }
  }, []);

  const clearResults = useCallback(() => {
    setState({ results: [], isLoading: false, error: null });
  }, []);

  return {
    ...state,
    search,
    clearResults,
  };
}